import * as THREE from 'three';

// Shared micro-surface detail for all procedural models. A single tileable
// normal + roughness pair gives painted primitives a material response that
// reads as stone, brushed metal, skin or paper instead of flat plastic.
// Generated as DataTextures so the same module also runs in the CPU model check
// (no canvas or DOM required).

function makeNoise(size = 256) {
  const data = new Uint8Array(size * size);
  let seed = 0x9e3779b9;
  const random = () => {
    seed ^= seed << 13; seed ^= seed >>> 17; seed ^= seed << 5;
    return ((seed >>> 0) / 4294967296);
  };
  // Tileable value-noise lattice, four octaves.
  const lattice = (period) => {
    const values = new Float32Array(period * period);
    for (let i = 0; i < values.length; i++) values[i] = random();
    return (x, y) => {
      const fx = x * period, fy = y * period;
      const ix = Math.floor(fx), iy = Math.floor(fy);
      const tx = fx - ix, ty = fy - iy;
      const sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
      const at = (a, b) => values[((b % period) + period) % period * period + (((a % period) + period) % period)];
      const v00 = at(ix, iy), v10 = at(ix + 1, iy), v01 = at(ix, iy + 1), v11 = at(ix + 1, iy + 1);
      return (v00 * (1 - sx) + v10 * sx) * (1 - sy) + (v01 * (1 - sx) + v11 * sx) * sy;
    };
  };
  const octaves = [[4, .46], [8, .28], [16, .17], [32, .09]].map(([period, gain]) => [lattice(period), gain]);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let value = 0;
    for (const [field, gain] of octaves) value += field(x / size, y / size) * gain;
    data[y * size + x] = Math.max(0, Math.min(255, Math.round(value * 255)));
  }
  return data;
}

let cache = null;
export function surfaceDetail() {
  if (cache) return cache;
  const size = 256, height = makeNoise(size);
  const normal = new Uint8Array(size * size * 4);
  const rough = new Uint8Array(size * size * 4);
  const strength = 1.7;
  const sample = (x, y) => height[((y + size) % size) * size + ((x + size) % size)] / 255;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const dx = (sample(x + 1, y) - sample(x - 1, y)) * strength;
    const dy = (sample(x, y + 1) - sample(x, y - 1)) * strength;
    const nx = -dx, ny = -dy, nz = 1;
    const length = Math.hypot(nx, ny, nz);
    const index = (y * size + x) * 4;
    normal[index] = Math.round((nx / length * .5 + .5) * 255);
    normal[index + 1] = Math.round((ny / length * .5 + .5) * 255);
    normal[index + 2] = Math.round((nz / length * .5 + .5) * 255);
    normal[index + 3] = 255;
    const variation = Math.round((.78 + sample(x, y) * .22) * 255);
    rough[index] = rough[index + 1] = rough[index + 2] = variation;
    rough[index + 3] = 255;
  }
  const normalMap = new THREE.DataTexture(normal, size, size, THREE.RGBAFormat);
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  normalMap.colorSpace = THREE.NoColorSpace;
  normalMap.needsUpdate = true;
  const roughnessMap = new THREE.DataTexture(rough, size, size, THREE.RGBAFormat);
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.colorSpace = THREE.NoColorSpace;
  roughnessMap.needsUpdate = true;
  cache = {normalMap, roughnessMap};
  return cache;
}

/** Adds shared micro-detail maps without changing a material's authored colour. */
export function withMicroDetail(material, scale = .16) {
  if (!material || material.isShaderMaterial || material.isRawShaderMaterial) return material;
  if (!material.isMeshStandardMaterial && !material.isMeshPhysicalMaterial) return material;
  const {normalMap, roughnessMap} = surfaceDetail();
  material.normalMap = normalMap;
  material.normalScale = new THREE.Vector2(scale, scale);
  material.roughnessMap = roughnessMap;
  if (typeof material.roughness === 'number') material.roughness = Math.min(1, material.roughness * .94 + .04);
  material.envMapIntensity = material.envMapIntensity ?? 1;
  return material;
}

export function standard(color, extra = {}) {
  const material = new THREE.MeshStandardMaterial({color, roughness: .43, metalness: .12, envMapIntensity: 1.05, ...extra});
  return withMicroDetail(material, extra.detailScale ?? .14);
}

/** A ready-to-use material for organic surfaces (skin, chitin, membrane). */
export function organic(color, extra = {}) {
  const material = new THREE.MeshPhysicalMaterial({
    color, roughness: .58, metalness: 0, clearcoat: .18, clearcoatRoughness: .55,
    sheen: .25, sheenRoughness: .7, sheenColor: new THREE.Color(color).lerp(new THREE.Color('#ffffff'), .35),
    envMapIntensity: 1.1, ...extra
  });
  return withMicroDetail(material, extra.detailScale ?? .3);
}

/** Architectural stone / concrete. */
export function stone(color, extra = {}) {
  const material = new THREE.MeshStandardMaterial({color, roughness: .93, metalness: .01, envMapIntensity: .8, ...extra});
  return withMicroDetail(material, extra.detailScale ?? .55);
}

/** Brushed / polished metal. */
export function metal(color, extra = {}) {
  const material = new THREE.MeshPhysicalMaterial({color, roughness: .28, metalness: .92, clearcoat: .35, clearcoatRoughness: .4, envMapIntensity: 1.3, ...extra});
  return withMicroDetail(material, extra.detailScale ?? .1);
}
