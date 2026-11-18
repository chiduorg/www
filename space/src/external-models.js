import * as THREE from 'three';

const cache = new Map();
let loaderPromise;

function loadGLTFLoader() {
  if (!loaderPromise) loaderPromise = import('/vendor/GLTFLoader.js').then((module) => module.GLTFLoader);
  return loaderPromise;
}

export function loadExternalModel(url, { fit = 2, axis = 'max' } = {}) {
  const key = `${url}|${fit}|${axis}`;
  if (cache.has(key)) return cache.get(key);
  const promise = (async () => {
    const GLTFLoader = await loadGLTFLoader();
    const gltf = await new GLTFLoader().loadAsync(url);
    const model = gltf.scene || gltf.scenes?.[0];
    if (!model) throw new Error(`模型为空：${url}`);
    model.traverse((object) => {
      if (!object.isMesh) return;
      object.castShadow = false;
      object.receiveShadow = false;
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => {
        if (!material) return;
        if ('envMapIntensity' in material) material.envMapIntensity = 0.7;
        if ('roughness' in material) material.roughness = Math.max(0.45, material.roughness ?? 0.6);
        if ('metalness' in material) material.metalness = Math.min(0.2, material.metalness ?? 0);
      });
    });
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const span = axis === 'y' ? size.y : Math.max(size.x, size.y, size.z);
    if (!Number.isFinite(span) || span <= 0) throw new Error(`模型尺度异常：${url}`);
    const scale = fit / span;
    model.scale.setScalar(scale);
    model.position.copy(center.multiplyScalar(-scale));
    if (axis === 'y') model.position.y = -(box.min.y + box.max.y) / 2 * scale;
    model.userData.externalAsset = url;
    return model;
  })();
  cache.set(key, promise);
  return promise;
}

export function attachExternalModel(host, url, options = {}) {
  const slot = new THREE.Group();
  slot.name = 'external-model-slot';
  host.add(slot);
  const { onReady } = options;
  loadExternalModel(url, options).then((model) => {
    slot.clear();
    slot.add(model);
    onReady?.(model);
  }).catch((error) => {
    console.warn('外部模型加载失败，保留程序化占位', url, error);
    slot.userData.error = String(error?.message || error);
  });
  return slot;
}
