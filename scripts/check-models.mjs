import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL, fileURLToPath} from 'node:url';
import {registerHooks} from 'node:module';
import {createHash} from 'node:crypto';
import {setMaxListeners} from 'node:events';
import matter from 'gray-matter';
import * as THREE from 'three';

// CPU regression only: actual model builders and Three geometry, no WebGL.
const root = path.resolve(import.meta.dirname, '..');
const output = path.join(root, 'artifacts/model-verification.json');
const checkpointTimes = [0, 1, 10, 60];
const failures = [], warnings = [], entries = [], results = [], skipped = [];
const mocks = {canvas: 0, textDraws: 0, gradients: 0, bitmaps: 0, bitmapsClosed: 0, bitmapErrors: [], externalNetworkRequests: 0, blockedRequests: [], assetRequests: [], contextMethods: {}};
const pendingIO = new Set(), events = new EventTarget();
setMaxListeners(50, events);
const count = name => {mocks.contextMethods[name] = (mocks.contextMethods[name] || 0) + 1;};
class MockGradient {addColorStop(offset) {if (!Number.isFinite(offset) || offset < 0 || offset > 1) throw new Error('Invalid gradient offset');}}
class MockContext2D {
  constructor(canvas) {this.canvas = canvas; this.font = '10px sans-serif'; this.fillStyle = '#000'; this.strokeStyle = '#000'; this.globalAlpha = 1; this.lineWidth = 1;}
  fillRect() {count('fillRect');}
  clearRect() {count('clearRect');}
  strokeRect() {count('strokeRect');}
  beginPath() {count('beginPath');}
  closePath() {count('closePath');}
  moveTo() {count('moveTo');}
  lineTo() {count('lineTo');}
  arc() {count('arc');}
  ellipse() {count('ellipse');}
  rect() {count('rect');}
  bezierCurveTo() {count('bezierCurveTo');}
  quadraticCurveTo() {count('quadraticCurveTo');}
  fill() {count('fill');}
  stroke() {count('stroke');}
  save() {count('save');}
  restore() {count('restore');}
  translate() {count('translate');}
  rotate() {count('rotate');}
  scale() {count('scale');}
  setTransform() {count('setTransform');}
  clip() {count('clip');}
  setLineDash() {count('setLineDash');}
  fillText() {mocks.textDraws++;}
  strokeText() {mocks.textDraws++;}
  measureText(text) {count('measureText'); return {width: [...String(text)].length * (Number.parseFloat(this.font) || 10) * .56};}
  createRadialGradient() {mocks.gradients++; return new MockGradient();}
  createLinearGradient() {mocks.gradients++; return new MockGradient();}
  drawImage() {count('drawImage');}
}
class MockCanvas extends EventTarget {
  constructor() {super(); this.width = this.height = 1; this.style = {}; this.context = new MockContext2D(this); mocks.canvas++;}
  getContext(kind) {if (kind !== '2d') throw new Error('CPU check does not provide WebGL'); return this.context;}
}
globalThis.document = {createElement(tag) {if (tag !== 'canvas') throw new Error('Unsupported CPU document element: ' + tag); return new MockCanvas();}};
globalThis.addEventListener = events.addEventListener.bind(events);
globalThis.removeEventListener = events.removeEventListener.bind(events);
globalThis.dispatchEvent = events.dispatchEvent.bind(events);
globalThis.innerWidth = 1440; globalThis.innerHeight = 900; globalThis.devicePixelRatio = 1;
globalThis.self = globalThis;

function within(target, directory) {const relative = path.relative(directory, target); return relative !== '..' && !relative.startsWith('..' + path.sep) && !path.isAbsolute(relative);}
// Never delegate to Node fetch: only real local source JSON/media bytes are read.
globalThis.fetch = (input, options = {}) => {
  const requested = input instanceof URL ? input.href : String(input);
  const operation = (async () => {
    options.signal?.throwIfAborted();
    let target;
    if (requested.startsWith('/media/')) {
      const name = decodeURIComponent(requested.slice('/media/'.length));
      target = path.resolve(root, 'content/assets', name);
      if (!within(target, path.join(root, 'content/assets'))) throw new Error('Asset path escapes source directory');
    } else if (requested.startsWith('file:')) {
      target = fileURLToPath(requested);
      if (!within(target, root) || !target.endsWith('.json')) throw new Error('Only workspace JSON may be fetched by file URL');
    } else {
      mocks.blockedRequests.push(requested);
      throw new Error('Network and unsupported fetch blocked in CPU check: ' + requested);
    }
    try {
      const bytes = await fs.readFile(target); options.signal?.throwIfAborted();
      mocks.assetRequests.push({url: requested, source: path.relative(root, target).replaceAll('\\', '/'), bytes: bytes.length, status: 200});
      return new Response(bytes, {status: 200, headers: {'content-type': target.endsWith('.json') ? 'application/json' : 'application/octet-stream'}});
    } catch (error) {
      if (error.name === 'AbortError') throw error;
      mocks.assetRequests.push({url: requested, source: path.relative(root, target).replaceAll('\\', '/'), status: 404});
      return new Response('', {status: 404});
    }
  })();
  pendingIO.add(operation); operation.finally(() => pendingIO.delete(operation)).catch(() => {}); return operation;
};
function imageDimensions(bytes) {
  if (bytes.length > 24 && bytes.readUInt32BE(0) === 0x89504e47) return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
  if (bytes[0] === 0xff && bytes[1] === 0xd8) {
    let i = 2;
    while (i + 8 < bytes.length) {
      if (bytes[i++] !== 0xff) continue;
      const marker = bytes[i++]; if (marker === 0xd9 || marker === 0xda) break;
      if (marker === 0xff || marker === 0x00 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd8)) continue;
      const length = bytes.readUInt16BE(i);
      if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) return [bytes.readUInt16BE(i + 5), bytes.readUInt16BE(i + 3)];
      if (length < 2) break; i += length;
    }
  }
  throw new Error('CPU bitmap mock only understands local PNG/JPEG dimensions');
}
globalThis.createImageBitmap = blob => {
  const operation = (async () => {
    try {
      const [width, height] = imageDimensions(Buffer.from(await blob.arrayBuffer())); mocks.bitmaps++;
      let closed = false;
      return {width, height, cpuBitmapMock: true, close() {if (!closed) {closed = true; mocks.bitmapsClosed++;}}};
    } catch (error) {mocks.bitmapErrors.push(error.message); throw error;}
  })();
  pendingIO.add(operation); operation.finally(() => pendingIO.delete(operation)).catch(() => {}); return operation;
};

const hook = registerHooks({resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('/engine/')) {
    const engine = path.join(root, 'engine/packages'), target = path.resolve(engine, specifier.slice('/engine/'.length));
    if (!within(target, engine)) throw new Error('Engine import escapes source directory');
    return nextResolve(pathToFileURL(target).href, context);
  }
  return nextResolve(specifier, context);
}});
const provenanceFiles = [];
for (const site of ['space', 'time', 'temperature', 'elements', 'mass']) {
  const dir = path.join(root, 'content/entries', site);
  if (!(await fs.stat(dir).catch(() => null))) continue;
  for (const name of (await fs.readdir(dir)).filter(x => x.endsWith('.md')).sort()) {
    const filename = path.join(dir, name), raw = await fs.readFile(filename, 'utf8'); provenanceFiles.push(filename);
    entries.push({...matter(raw).data, sourcePath: path.relative(root, filename).replaceAll('\\', '/')});
  }
}
for (const file of ['space/src/models.js', 'space/src/object-templates.js', 'space/src/featured-overrides.js', 'space/src/featured-map.json', 'time/src/subjects.js', 'time/src/object-templates.js', 'temperature/src/subjects.js', 'temperature/src/object-templates.js', 'engine/packages/renderer/subjects.js', 'engine/packages/renderer/assets.js', 'engine/packages/renderer/effects.js']) provenanceFiles.push(path.join(root, file));
async function inputHash() {const hash = createHash('sha256'); for (const file of provenanceFiles) {hash.update(path.relative(root, file)); hash.update(await fs.readFile(file));} return hash.digest('hex');}
const sourceHash = await inputHash();
const eligible = entries.filter(e => Number.isFinite(e.quantity?.value) && !e.id.startsWith('elements.') && !e.id.startsWith('mass.') && !(e.id.startsWith('time.') && e.chronology?.plot === false));
const customReferences = new Set(entries.filter(e => e.id.startsWith('space.') && e.visual?.scene === 'space.object').map(e => e.id));
const customOverrides = new Set(['dna', 'proton', 'planck', 'solar-system'].map(id => 'space.' + id));
let invalidations = 0;
const invalidate = () => {invalidations++;};
const modules = {};
try {
  modules.space = await import(pathToFileURL(path.join(root, 'space/src/models.js')).href);
  modules.time = await import(pathToFileURL(path.join(root, 'time/src/subjects.js')).href);
  modules.temperature = await import(pathToFileURL(path.join(root, 'temperature/src/subjects.js')).href);
  modules.space.setModelInvalidation?.(invalidate);
} catch (error) {failures.push({stage: 'import-real-entries', message: error.stack});}

function finiteArray(array, message) {for (const n of array) if (!Number.isFinite(n)) throw new Error(message);}
function checkGeometry(group) {
  const geometries = new Set(), materials = new Set(); let drawableCount = 0, instanceCount = 0;
  group.traverse(object => {
    finiteArray(object.matrixWorld.elements, 'Nonfinite world transform');
    if (object.geometry) {drawableCount++; geometries.add(object.geometry);}
    if (object.isInstancedMesh) {instanceCount += object.count; finiteArray(object.instanceMatrix.array, 'Nonfinite instance matrix'); object.computeBoundingBox();}
    for (const mat of Array.isArray(object.material) ? object.material : object.material ? [object.material] : []) materials.add(mat);
  });
  let vertices = 0, attributeComponents = 0;
  for (const geometry of geometries) {
    const position = geometry.attributes.position;
    if (!position || position.count < 1) throw new Error('Renderable geometry has no vertices');
    vertices += position.count;
    for (const attribute of [...Object.values(geometry.attributes), ...Object.values(geometry.morphAttributes || {}).flat()]) {
      const values = attribute.array || attribute.data?.array;
      if (!values) throw new Error('Unsupported geometry attribute'); finiteArray(values, 'Nonfinite vertex attribute'); attributeComponents += values.length;
    }
    if (geometry.index) for (const index of geometry.index.array) if (!Number.isInteger(index) || index < 0 || index >= position.count) throw new Error('Geometry index outside vertex range');
  }
  for (const mat of materials) {
    for (const key of ['opacity', 'roughness', 'metalness', 'size', 'rotation', 'emissiveIntensity', 'transmission']) if (typeof mat[key] === 'number' && !Number.isFinite(mat[key])) throw new Error('Nonfinite material ' + key);
    for (const key of ['color', 'emissive']) if (mat[key]?.isColor) finiteArray([mat[key].r, mat[key].g, mat[key].b], 'Nonfinite material colour');
    for (const uniform of Object.values(mat.uniforms || {})) {
      const v = uniform.value;
      if (typeof v === 'number' && !Number.isFinite(v)) throw new Error('Nonfinite shader uniform');
      if (v?.elements) finiteArray(v.elements, 'Nonfinite shader matrix');
      if (v?.isVector2 || v?.isVector3 || v?.isVector4) finiteArray(v.toArray(), 'Nonfinite shader vector');
    }
  }
  return {drawableCount, geometryCount: geometries.size, materialCount: materials.size, vertices, attributeComponents, instanceCount};
}
function bounds(group) {
  const box = new THREE.Box3().setFromObject(group, true), size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
  if (box.isEmpty()) throw new Error('Empty model bounds');
  finiteArray([...box.min.toArray(), ...box.max.toArray()], 'Nonfinite model bounds');
  const maximum = Math.max(...size.toArray());
  if (maximum < 1e-4 || maximum > 200 || Math.max(...center.toArray().map(Math.abs)) > 100) throw new Error('Model outside CPU sanity envelope (extent 0.0001–200, centre ±100 world units)');
  return {min: box.min.toArray(), max: box.max.toArray(), size: size.toArray(), center: center.toArray()};
}
function referenceCheck(entry, group) {
  const r = group.userData.reference;
  if (!r) {if (customReferences.has(entry.id)) throw new Error('Custom space model missing reference contract'); return null;}
  if (r.length !== 2 || !Array.isArray(r.start) || !Array.isArray(r.end) || r.start.length !== 3 || r.end.length !== 3) throw new Error('Invalid spatial reference structure');
  finiteArray([...r.start, ...r.end], 'Nonfinite spatial reference');
  const actualLength = new THREE.Vector3(...r.start).distanceTo(new THREE.Vector3(...r.end));
  if (Math.abs(actualLength - 2) > 1e-8) throw new Error('Spatial endpoints do not span two units');
  group.updateMatrixWorld(true);
  const worldLength = new THREE.Vector3(...r.start).applyMatrix4(group.matrixWorld).distanceTo(new THREE.Vector3(...r.end).applyMatrix4(group.matrixWorld));
  if (Math.abs(worldLength - 2) > 1e-8) throw new Error('Spatial root transform changes the reference length');
  if (!r.kind || !['x', 'y', 'z', 'diagonal'].includes(r.axis) || (group.userData.referenceAxis && group.userData.referenceAxis !== r.axis)) throw new Error('Spatial reference meaning/axis missing or inconsistent');
  if (!Number.isFinite(group.userData.framePadding) || group.userData.framePadding < 0 || group.userData.framePadding > 2) throw new Error('Spatial frame padding outside contract');
  if (group.userData.quantity?.measure && group.userData.quantity.measure !== entry.quantity.measure) throw new Error('Model measurement differs from content');
  return {...r, actualLength, worldLength};
}
function measurementSemantics(entry, group, time) {
  if (entry.id === 'space.dna' && time === 0) {
    const body = group.getObjectByName('short-dna-fragment');
    if (!body || Math.abs(new THREE.Box3().setFromObject(body, true).getSize(new THREE.Vector3()).x - 2) > 1e-6) throw new Error('DNA transverse body width is not two units');
  }
  if (entry.id === 'space.solar-system') {
    const position = group.getObjectByName('Neptune-orbit')?.geometry.attributes.position;
    if (!position) throw new Error('Outermost Neptune orbital reference missing');
    let min = Infinity, max = -Infinity;
    for (let i = 0; i < position.count; i++) {min = Math.min(min, position.getX(i)); max = Math.max(max, position.getX(i));}
    if (Math.abs(max - min - 2) > 1e-8) throw new Error('Outermost orbital diameter is not two units');
  }
  if (entry.visual.template === 'nucleus' && !customOverrides.has(entry.id)) {
    const p = group.children.find(o => o.isPoints)?.geometry.attributes.position;
    if (!p) throw new Error('rms reference cloud missing');
    let squared = 0;
    for (let i = 0; i < p.count; i++) squared += (p.getX(i) + 1) ** 2 + p.getY(i) ** 2 + p.getZ(i) ** 2;
    if (Math.abs(Math.sqrt(squared / p.count) - 2) > 1e-6) throw new Error('Nuclear reference represents a diameter instead of one rms radius');
  }
  if (entry.visual.template === 'wave') {
    const expected = entry.visual.variant === 'reduced' ? 1 : Math.PI * 2;
    if (group.userData.phaseSpan !== expected) throw new Error('Ordinary/reduced Compton phase convention differs');
  }
}

for (const entry of entries) {
  const site = entry.id.split('.')[0];
  if (site === 'elements') {skipped.push({id: entry.id, reason: 'element-axis-has-no-3d-model', modelBuilt: false}); continue;}
  if (site === 'mass') {skipped.push({id: entry.id, reason: 'mass-axis-has-no-3d-model', modelBuilt: false}); continue;}
  // 内容规则允许并明确标注“时长/未来”条目不可在时间轴上定位，图景仍可示意；这里跳过其时间点校验。
  if (site === 'time' && entry.chronology?.plot === false) {skipped.push({id: entry.id, reason: 'not-plottable-duration-or-future', modelBuilt: false}); continue;}
  if (entry.quantity?.value === null) {
    skipped.push({id: entry.id, reason: 'undetermined-null-quantity', modelBuilt: false});
    continue;
  }
  if (!Number.isFinite(entry.quantity?.value) || entry.quantity.value < 0 || (site === 'space' && entry.quantity.value === 0)) {failures.push({id: entry.id, stage: 'quantity', message: 'Invalid comparison quantity'}); continue;}
  if (!entry.visual?.scene || !entry.visual.caption || !entry.visual.note) {failures.push({id: entry.id, stage: 'coverage', message: 'Finite entry visual is not synchronized'}); continue;}
  let group, subject, result;
  try {
    if (site === 'space') {
      if (typeof modules.space?.createObject !== 'function') throw new Error('createObject entry point unavailable');
      group = modules.space.createObject(entry);
    } else {
      const registry = site === 'time' ? modules.time?.timeSubjects : modules.temperature?.thermalSubjects;
      const builder = registry?.[entry.visual.scene];
      if (typeof builder !== 'function') throw new Error('No registered builder for ' + entry.visual.scene);
      const built = builder(invalidate, entry); subject = built?.isGroup ? {group: built} : built; group = subject?.group;
    }
    if (!group?.isGroup) throw new Error('Real builder did not return THREE.Group');
    if (entry.visual.scene.endsWith('.object') && entry.visual.template !== group.userData.template) throw new Error('Configured generic template was not used by real entry point');
    if (customOverrides.has(entry.id) && !group.userData.reference) throw new Error('Featured override did not run');
    const reference = site === 'space' ? referenceCheck(entry, group) : null;
    result = {id: entry.id, scene: entry.visual.scene, template: group.userData.template || entry.visual.template || null, reference, framePadding: group.userData.framePadding ?? null, checkpoints: []};
    let previous = 0;
    for (const time of checkpointTimes) {
      // Advance with frame-sized deltas, then inspect at the named wall times.
      if (site === 'space' && typeof modules.space.animateObject !== 'function') throw new Error('animateObject entry point unavailable');
      const advance = (delta, absolute) => {if (site === 'space') modules.space.animateObject(group, delta); else subject.update?.(delta, absolute);};
      if (time === 0) advance(0, 0);
      else {
        const frames = Math.ceil((time - previous) * 30), delta = (time - previous) / frames;
        for (let frame = 1; frame <= frames; frame++) advance(delta, previous + delta * frame);
      }
      previous = time; group.updateMatrixWorld(true);
      const geometry = checkGeometry(group), box = bounds(group);
      if (!geometry.drawableCount) throw new Error('Model has no drawable objects');
      result.checkpoints.push({time, ...geometry, bounds: box});
      if (site === 'space') {referenceCheck(entry, group); measurementSemantics(entry, group, time);}
    }
    result.status = 'passed'; results.push(result);
  } catch (error) {
    failures.push({id: entry.id, scene: entry.visual?.scene, stage: 'real-model-build-or-update', message: error.stack});
    if (result) {result.status = 'failed'; results.push(result);}
  } finally {
    if (group) {const geometries = new Set(), materials = new Set(); group.traverse(o => {if (o.geometry) geometries.add(o.geometry); for (const m of Array.isArray(o.material) ? o.material : o.material ? [o.material] : []) materials.add(m);}); geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose());}
  }
}
while (pendingIO.size) await Promise.allSettled([...pendingIO]);
// Texture promises include mocked bitmap creation after local reads resolve.
await new Promise(resolve => setImmediate(resolve));
events.dispatchEvent(new Event('pagehide'));
for (const request of mocks.assetRequests) if (request.status !== 200) failures.push({stage: 'local-asset', message: 'Missing local texture: ' + request.source});
for (const message of mocks.bitmapErrors) failures.push({stage: 'bitmap-mock-input', message});
for (const url of mocks.blockedRequests) failures.push({stage: 'network-policy', message: 'Unexpected fetch attempted: ' + url});
const finalHash = await inputHash();
if (finalHash !== sourceHash) failures.push({stage: 'provenance', message: 'Model/content inputs changed during this run; rerun against stable inputs'});
if (results.filter(r => r.status === 'passed').length !== eligible.length) failures.push({stage: 'coverage', message: 'Not every finite entry completed the real entry-point checks'});
const bySite = Object.fromEntries(['space', 'time', 'temperature', 'elements', 'mass'].map(site => [site, {finite: eligible.filter(e => e.id.startsWith(site + '.')).length, passed: results.filter(r => r.id.startsWith(site + '.') && r.status === 'passed').length, nullSkipped: skipped.filter(e => e.id.startsWith(site + '.')).length}]));
const report = {
  schemaVersion: 1, generatedAt: new Date().toISOString(), status: failures.length ? 'failed' : 'passed', verification: 'CPU-only',
  limitations: ['No browser, WebGL context, GPU, shader compilation, rasterization or screenshot was used.', 'Canvas drawing and text metrics are explicit mocks, so labels and colour/image quality are not visually verified.', 'Local PNG/JPEG bytes and dimensions are read; bitmap pixels are not decoded.', 'Bounds inspect CPU positions and transforms; shader-only vertex displacement, transparency, clipping and framing require GPU review.', 'CPU sanity limits are not camera-fit or scientific-accuracy certification.'],
  runtime: {node: process.version, threeRevision: THREE.REVISION, viewportMock: [1440, 900]},
  sourceHash, finalSourceHash: finalHash, checkpointTimes, sanityEnvelope: {maximumExtent: 200, minimumExtent: 1e-4, maximumCenterMagnitudePerAxis: 100},
  counts: {entries: entries.length, finite: eligible.length, passed: results.filter(r => r.status === 'passed').length, nullSkipped: skipped.length, customSpaceReferences: results.filter(r => r.reference).length},
  bySite, templateCoverage: Object.fromEntries([...new Set(results.map(r => r.template || r.scene))].sort().map(name => [name, results.filter(r => (r.template || r.scene) === name).length])),
  invalidations, mocks, warnings, failures, skipped, models: results
};
await fs.mkdir(path.dirname(output), {recursive: true}); await fs.writeFile(output, JSON.stringify(report, null, 2) + '\n'); hook.deregister();
console.log(`CPU-only model check ${report.status}: ${report.counts.passed}/${eligible.length} finite entries; ${skipped.length} skipped entries not built; ${failures.length} failures. Report: ${path.relative(root, output)}`);
if (failures.length) {for (const issue of failures.slice(0, 12)) console.error(`${issue.id || issue.stage}: ${issue.message.split('\n')[0]}`); process.exitCode = 1;}
