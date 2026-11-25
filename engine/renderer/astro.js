import * as THREE from 'three';

// Shared high-fidelity celestial bodies. Textures are resolved through a
// site-owned loader so each station keeps its own cache, abort and theme
// behaviour; this module never fetches directly.
const TAU = Math.PI * 2;
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);

function sphere(radius = 1, width = 160, height = 110) {
  return new THREE.SphereGeometry(radius, width, height);
}

const EARTH_VERTEX = `
varying vec2 vUv; varying vec3 vWorldNormal; varying vec3 vWorldPosition;
void main(){
  vUv = uv;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPosition = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}`;

const EARTH_FRAGMENT = `
uniform sampler2D dayMap, nightMap, cloudMap, normalMap, specMap;
uniform vec3 sunDirection;
uniform float normalScale;
uniform float nightIntensity;
varying vec2 vUv; varying vec3 vWorldNormal; varying vec3 vWorldPosition;

vec3 tangentBasis(vec3 n){
  vec3 t = cross(vec3(0.0, 1.0, 0.0), n);
  if (length(t) < 1e-4) t = cross(vec3(1.0, 0.0, 0.0), n);
  return normalize(t);
}
void main(){
  vec3 N = normalize(vWorldNormal);
  vec3 T = tangentBasis(N);
  vec3 B = cross(N, T);
  vec3 texel = texture2D(normalMap, vUv).xyz * 2.0 - 1.0;
  texel.xy *= normalScale;
  vec3 n = normalize(T * texel.x + B * texel.y + N * texel.z);
  vec3 L = normalize(sunDirection);
  vec3 Vd = normalize(cameraPosition - vWorldPosition);
  float sun = dot(n, L);
  float day = smoothstep(-0.14, 0.52, sun);
  vec3 base = texture2D(dayMap, vUv).rgb;
  float ocean = texture2D(specMap, vUv).r;
  float cloud = max(max(texture2D(cloudMap, vUv).r, texture2D(cloudMap, vUv).g), texture2D(cloudMap, vUv).b);
  vec3 color = base * (0.008 + 1.32 * day);
  // Cloud deck makes the surface below a little cooler and darker.
  color *= 1.0 - cloud * 0.26 * day;
  vec3 H = normalize(L + Vd);
  float specular = pow(max(dot(n, H), 0.0), 86.0) * ocean * 0.95 * day;
  color += vec3(1.0, 0.96, 0.9) * specular;
  float night = smoothstep(0.08, -0.26, sun);
  vec3 lights = texture2D(nightMap, vUv).rgb;
  color += lights * night * nightIntensity * (1.0 - cloud * 0.62);
  float fresnel = pow(1.0 - max(dot(N, Vd), 0.0), 3.1);
  vec3 atmosphere = mix(vec3(0.06, 0.24, 0.62), vec3(0.42, 0.68, 1.0), smoothstep(-0.2, 0.6, sun));
  color += atmosphere * fresnel * (0.28 + 0.62 * day);
  gl_FragColor = vec4(color, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

const CLOUD_VERTEX = `
varying vec2 vUv; varying vec3 vWorldNormal; varying vec3 vWorldPosition;
void main(){
  vUv = uv;
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldPosition = world.xyz;
  gl_Position = projectionMatrix * viewMatrix * world;
}`;

const CLOUD_FRAGMENT = `
uniform sampler2D cloudMap;
uniform vec3 sunDirection;
uniform float opacity;
varying vec2 vUv; varying vec3 vWorldNormal; varying vec3 vWorldPosition;
void main(){
  float depth = max(max(texture2D(cloudMap, vUv).r, texture2D(cloudMap, vUv).g), texture2D(cloudMap, vUv).b);
  depth = smoothstep(0.22, 0.92, depth);
  vec3 N = normalize(vWorldNormal);
  float sun = max(dot(N, normalize(sunDirection)), 0.0);
  float shade = 0.030 + 1.05 * smoothstep(-0.12, 0.62, sun);
  vec3 color = vec3(1.0, 0.985, 0.965) * shade;
  gl_FragColor = vec4(color, depth * opacity);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

function atmosphere(radius, color, strength = .55) {
  const material = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.BackSide, blending: THREE.AdditiveBlending,
    uniforms: {tint: {value: new THREE.Color(color)}, sunDirection: {value: V(-.9, .6, 1.5).normalize()}, strength: {value: strength}},
    vertexShader: `varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(mat3(modelMatrix)*normal); vec4 p = modelMatrix*vec4(position,1.0); vP = p.xyz; gl_Position = projectionMatrix*viewMatrix*p; }`,
    fragmentShader: `uniform vec3 tint; uniform vec3 sunDirection; uniform float strength; varying vec3 vN; varying vec3 vP;
      void main(){ vec3 n = normalize(vN); vec3 view = normalize(cameraPosition - vP);
        float rim = pow(max(0.0, 1.0 - abs(dot(n, view))), 3.4);
        float lit = 0.18 + 0.82 * max(dot(n, normalize(sunDirection)), 0.0);
        gl_FragColor = vec4(tint, rim * lit * strength); }`
  });
  const mesh = new THREE.Mesh(sphere(radius, 96, 64), material);
  mesh.renderOrder = 3;
  return mesh;
}

/**
 * Physically-lit Earth with normal-mapped relief, ocean specular, a separate
 * cloud deck and night-side city lights.
 */
export function createEarth(load, {sunDirection = V(-.9, .6, 1.5), radius = 1, detail = 1} = {}) {
  const group = new THREE.Group(); group.name = 'earth';
  const normalScale = .0016;
  const earthMaterial = new THREE.ShaderMaterial({
    uniforms: {
      dayMap: {value: load('earth-day.jpg')},
      nightMap: {value: load('earth-night.jpg')},
      cloudMap: {value: load('earth-clouds.jpg', false)},
      normalMap: {value: load('earth-normal.jpg', false)},
      specMap: {value: load('earth-specular.jpg', false)},
      sunDirection: {value: sunDirection.clone().normalize()},
      normalScale: {value: normalScale},
      nightIntensity: {value: .95}
    },
    vertexShader: EARTH_VERTEX, fragmentShader: EARTH_FRAGMENT
  });
  const body = new THREE.Mesh(sphere(radius, 160, 110), earthMaterial);
  group.add(body);

  const cloudMaterial = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.FrontSide,
    uniforms: {
      cloudMap: {value: load('earth-clouds.jpg', false)},
      sunDirection: {value: sunDirection.clone().normalize()},
      opacity: {value: .6}
    },
    vertexShader: CLOUD_VERTEX, fragmentShader: CLOUD_FRAGMENT
  });
  const clouds = new THREE.Mesh(sphere(radius * 1.0045, 160, 110), cloudMaterial);
  clouds.renderOrder = 1;
  group.add(clouds);
  const halo = atmosphere(radius * 1.035, 0x4c8fe8, .75);
  group.add(halo);
  group.userData.update = (delta, time) => {
    clouds.rotation.y = .04 + time * .012;
    body.rotation.y = time * .004;
  };
  group.userData.radius = radius;
  return group;
}

const PLANET_PROFILES = {
  earth: {map: 'earth-day.jpg', roughness: .72, bump: .0018, color: 0xffffff},
  mercury: {map: 'planets/2k_mercury.jpg', roughness: 1, bump: .004, color: 0xa9a49c, env: .22},
  venus: {map: 'planets/2k_venus_surface.jpg', roughness: .8, bump: .0015, color: 0xd8bb8b},
  mars: {map: 'planets/2k_mars.jpg', roughness: .92, bump: .004, color: 0xb47457},
  jupiter: {map: 'jupiter.jpg', roughness: .74, bump: .0022, color: 0xd8c3a4},
  saturn: {map: 'saturn.jpg', roughness: .8, bump: .0012, color: 0xd8c79a},
  uranus: {map: 'planets/2k_uranus.jpg', roughness: .55, bump: .0008, color: 0xa9dfe8},
  neptune: {map: 'planets/2k_neptune.jpg', roughness: .58, bump: .0008, color: 0x7fa8d8},
  moon: {map: 'moon.jpg', roughness: 1, bump: .0045, color: 0xb4b1ab, env: .2}
};

export function createPlanet(kind, load, {radius = 1, detail = 1, bumpScale} = {}) {
  const profile = PLANET_PROFILES[kind];
  if (!profile) throw new Error(`Unknown planet: ${kind}`);
  const map = load(profile.map);
  const material = new THREE.MeshStandardMaterial({
    map, color: profile.color, roughness: profile.roughness, metalness: 0,
    bumpMap: map, bumpScale: bumpScale ?? profile.bump, envMapIntensity: profile.env ?? .55
  });
  const mesh = new THREE.Mesh(sphere(radius, Math.max(96, Math.round(144 * detail)), Math.max(64, Math.round(96 * detail))), material);
  mesh.name = kind;
  mesh.userData.spin = .006;
  return mesh;
}

export function createSaturnRing(load, {inner = 1.18, outer = 2.24} = {}) {
  const geometry = new THREE.RingGeometry(inner, outer, 256, 12);
  const position = geometry.attributes.position, uv = geometry.attributes.uv;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i), y = position.getY(i);
    const r = Math.hypot(x, y);
    uv.setXY(i, (r - inner) / (outer - inner), .5);
  }
  const texture = load('saturn-ring.png');
  texture.anisotropy = 8;
  const material = new THREE.MeshBasicMaterial({
    map: texture, color: 0xffe8cc, transparent: true, opacity: .78, side: THREE.DoubleSide,
    depthWrite: false, alphaTest: .02
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.name = 'saturn-rings';
  mesh.rotation.set(-1.0, .12, -.2);
  mesh.renderOrder = 2;
  return mesh;
}

const SUN_VERTEX = `
varying vec2 vUv; varying vec3 vWorldNormal; varying vec3 vWorldPosition;
void main(){ vUv = uv; vWorldNormal = normalize(mat3(modelMatrix)*normal); vec4 p = modelMatrix*vec4(position,1.0); vWorldPosition = p.xyz; gl_Position = projectionMatrix*viewMatrix*p; }`;

const SUN_FRAGMENT = `
uniform float time; uniform vec3 hotColor; uniform vec3 coolColor; uniform float intensity;
uniform sampler2D sunMap; uniform float useMap; uniform vec3 tint;
varying vec2 vUv; varying vec3 vWorldNormal; varying vec3 vWorldPosition;

float hash(vec3 p){ return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453123); }
float noise(vec3 p){
  vec3 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float n = mix(mix(mix(hash(i), hash(i+vec3(1,0,0)), f.x), mix(hash(i+vec3(0,1,0)), hash(i+vec3(1,1,0)), f.x), f.y),
                mix(mix(hash(i+vec3(0,0,1)), hash(i+vec3(1,0,1)), f.x), mix(hash(i+vec3(0,1,1)), hash(i+vec3(1,1,1)), f.x), f.y), f.z);
  return n;
}
float fbm(vec3 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 4; i++){ v += a * noise(p); p *= 2.03; a *= 0.5; } return v; }

void main(){
  vec3 N = normalize(vWorldNormal);
  vec3 Vd = normalize(cameraPosition - vWorldPosition);
  float mu = clamp(dot(N, Vd), 0.0, 1.0);
  vec3 q = vec3(vUv * 20.0, time * 0.045);
  float g1 = fbm(q);
  float g2 = fbm(q * 4.6 + 9.0);
  float g3 = fbm(q * 13.0 + 21.0);
  float gran = g1 * 0.52 + g2 * 0.31 + g3 * 0.17;
  float spot = smoothstep(0.64, 0.80, fbm(vec3(vUv * 4.2 + 13.0, time * 0.018)));
  vec3 color = mix(coolColor, hotColor, pow(gran, 1.15));
  if (useMap > .5) {
    vec3 tex = texture2D(sunMap, vUv).rgb;
    color = tex * tint * (1.05 + .28 * gran);
  }
  color *= 0.38 + 0.92 * gran;
  color *= 1.0 - spot * 0.62;
  float limb = pow(mu, 0.46);
  color *= 0.36 + 0.72 * limb;
  float rim = pow(1.0 - mu, 3.4);
  color += coolColor * rim * 0.4;
  gl_FragColor = vec4(color * intensity, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;

export function createSun({radius = 1, hot = '#ffb43c', cool = '#c22600', intensity = 1.0, detail = 1, map = null, tint = '#fff2d8'} = {}) {
  const group = new THREE.Group(); group.name = 'sun';
  if (map) {
    const placeholder = (() => {
      const canvas = document.createElement('canvas');
      canvas.width = 512; canvas.height = 256;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(256, 128, 8, 256, 128, 252);
      gradient.addColorStop(0, '#fff7d8');
      gradient.addColorStop(.35, '#ffd26a');
      gradient.addColorStop(.72, '#ff9a32');
      gradient.addColorStop(1, '#c9440d');
      ctx.fillStyle = gradient; ctx.fillRect(0, 0, 512, 256);
      let seed = 20261119;
      const random = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
      for (let i = 0; i < 420; i++) {
        const x = random() * 512, y = random() * 256, r = .8 + random() * 5.5;
        const warm = random() > .28;
        ctx.fillStyle = warm
          ? `rgba(255,${180 + Math.round(random() * 60)},${80 + Math.round(random() * 100)},${.14 + random() * .32})`
          : `rgba(${120 + Math.round(random() * 70)},${35 + Math.round(random() * 30)},10,${.12 + random() * .24})`;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      return texture;
    })();
    const material = new THREE.MeshBasicMaterial({ map: placeholder, color: 0xffffff });
    const ready = () => {
      const image = map.image;
      return !!image && ((image.width || 0) > 8 || (image.naturalWidth || 0) > 8);
    };
    if (ready()) {
      material.map = map;
      material.color.set(tint);
      material.color.multiplyScalar(1.3);
    } else {
      const timer = setInterval(() => {
        if (!ready()) return;
        material.map = map;
        material.color.set(tint);
        material.color.multiplyScalar(1.3);
        material.needsUpdate = true;
        clearInterval(timer);
      }, 200);
      setTimeout(() => clearInterval(timer), 20000);
    }
    const mesh = new THREE.Mesh(sphere(radius, Math.max(96, Math.round(160 * detail)), Math.max(64, Math.round(110 * detail))), material);
    group.add(mesh);
    group.add(atmosphere(radius * 1.055, 0xff9038, .45));
    group.userData.update = (delta, time) => { mesh.rotation.y = time * .0025; };
    group.userData.radius = radius;
    return group;
  }
  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: {value: 0},
      hotColor: {value: new THREE.Color(hot)},
      coolColor: {value: new THREE.Color(cool)},
      intensity: {value: intensity},
      sunMap: {value: null},
      useMap: {value: 0},
      tint: {value: new THREE.Color(tint)}
    },
    vertexShader: SUN_VERTEX, fragmentShader: SUN_FRAGMENT
  });
  const mesh = new THREE.Mesh(sphere(radius, Math.max(96, Math.round(128 * detail)), Math.max(64, Math.round(96 * detail))), material);
  group.add(mesh);
  group.add(atmosphere(radius * 1.055, 0xff9038, .45));
  group.userData.update = (delta, time) => {
    material.uniforms.time.value = time;
    if (map) mesh.rotation.y = time * .0025;
  };
  group.userData.radius = radius;
  return group;
}

/** Soft radial sprite texture generated locally (no external asset). */
export function radialTexture(size = 128, inner = 'rgba(255,255,255,1)', mid = 'rgba(255,255,255,.35)') {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, inner); gradient.addColorStop(.35, mid); gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/** A star surface for the mass ladder and time scenes, sharing the sun shader. */
export function createStar({radius = 1, color = '#ffd8a0', cool = '#ff7a2f', intensity = 2.2} = {}) {
  return createSun({radius, hot: color, cool, intensity});
}

/** Halo / corona layering used by sun-like objects. */
export function createCorona(texture, {radius = 2.4, color = 0xff8b3d, opacity = .55} = {}) {
  const material = new THREE.SpriteMaterial({map: texture, color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending});
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(radius, radius, 1);
  return sprite;
}

export const ASTRONOMY = {TAU, PLANET_PROFILES};
