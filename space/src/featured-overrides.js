import * as THREE from 'three';

const TAU = Math.PI * 2;
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const material = (color, extra = {}) => new THREE.MeshStandardMaterial({color, roughness: .38, metalness: .2, ...extra});
function mesh(g, geometry, mat, position = V()) {const m = new THREE.Mesh(geometry, mat); m.position.copy(position); g.add(m); return m;}
function line(g, vertices, color = '#bad5de', opacity = .65, dashed = false) {
  const mat = dashed ? new THREE.LineDashedMaterial({color, transparent: true, opacity, dashSize: .05, gapSize: .04}) : new THREE.LineBasicMaterial({color, transparent: true, opacity});
  const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(vertices), mat); if (dashed) l.computeLineDistances(); g.add(l); return l;
}
function rod(g, a, b, radius, mat) {
  const m = mesh(g, new THREE.CylinderGeometry(radius, radius, a.distanceTo(b), 10), mat, a.clone().add(b).multiplyScalar(.5));
  m.quaternion.setFromUnitVectors(V(0, 1), b.clone().sub(a).normalize()); return m;
}
function reference(g, kind, y = 0, z = .15) {
  const a = V(-1, y, z), b = V(1, y, z);
  const guide = new THREE.Group(); guide.name = 'comparison-reference';
  line(guide, [a, b], '#c9dce2', .8, true);
  for (const x of [-1, 1]) line(guide, [V(x, y - .065, z), V(x, y + .065, z)], '#e2f0f2', .9);
  g.add(guide);
  g.userData.reference = {axis: 'x', kind, length: 2, start: a.toArray(), end: b.toArray()};
  g.userData.referenceAxis = 'x'; return guide;
}
function dotMaterial(color, size = 4, opacity = .8) {
  return new THREE.ShaderMaterial({transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: {tint: {value: new THREE.Color(color)}, size: {value: size}, alpha: {value: opacity}},
    vertexShader: 'uniform float size;void main(){vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(size*13./max(2.,-p.z),1.,16.);}',
    fragmentShader: 'uniform vec3 tint;uniform float alpha;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(tint,alpha*pow(1.-r,1.8));}'
  });
}
function dots(g, positions, color, size, opacity) {
  const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const p = new THREE.Points(geometry, dotMaterial(color, size, opacity)); g.add(p); return p;
}
function randomGenerator() {let seed = 81973; return () => {seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296;};}

function dna(g) {
  const body = new THREE.Group(); body.name = 'short-dna-fragment';
  const turns = 1.5, pitch = 3.4, height = pitch * turns, radius = .95;
  const backbone = [material('#80b6c1', {metalness: .28}), material('#c7a779', {metalness: .24})];
  const nodeGeometry = new THREE.SphereGeometry(.05, 16, 12);
  for (let side = 0; side < 2; side++) {
    const positions = [];
    for (let i = 0; i <= 240; i++) {const t = i / 240, angle = t * TAU * turns + side * Math.PI; positions.push(V(Math.cos(angle) * radius, (t - .5) * height, Math.sin(angle) * radius));}
    mesh(body, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(positions), 240, .035, 10), backbone[side]);
    for (let i = 0; i <= 15; i++) {const angle = i / 10 * TAU + side * Math.PI; mesh(body, nodeGeometry, backbone[side], V(Math.cos(angle) * radius, (i / 15 - .5) * height, Math.sin(angle) * radius));}
  }
  const bases = [material('#b48c93'), material('#bac8a6'), material('#8bacc9'), material('#ccb68b')];
  for (let i = 0; i <= 15; i++) {
    const angle = i / 10 * TAU, a = V(Math.cos(angle) * radius, (i / 15 - .5) * height, Math.sin(angle) * radius), b = V(-a.x, a.y, -a.z), mid = a.clone().add(b).multiplyScalar(.5);
    rod(body, a, mid, .025, bases[i % 4]); rod(body, mid, b, .025, bases[(i + 1) % 4]);
  }
  body.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(body, true), scale = 2 / box.getSize(V()).x;
  body.scale.setScalar(scale); g.add(body);
  reference(g, 'dna-transverse-width-not-chain-length', -height * scale / 2 - .24);
  g.userData.caption = 'DNA双螺旋横向宽度 · 短片段';
  g.userData.note = '横向标线对应约2 nm宽度，严格为2世界单位。展示的只是1.5圈短片段；B型DNA约3.4 nm螺距用于大致比例，骨架、沟槽、碱基形状与颜色为示意，不是完整链或原子坐标重建。';
  g.userData.framePadding = .74;
  g.userData.parameters = {turns, pitchNm: 3.4, comparisonWidthNm: 2, pitchToWidth: 1.7, geometricNormalization: scale, sources: ['https://www.mr.mpg.de/emeritus_groups/biophysics/fiber_diffraction?page=5', 'https://nigms.nih.gov/biobeat/2023/12/science-snippet-zooming-in-on-nanoparticles']};
  g.userData.update = (_delta, time) => {body.rotation.y = time * .055;};
}
function proton(g) {
  const random = randomGenerator(), distribution = new THREE.Group(), warm = [], cool = [];
  for (let i = 0; i < 1700; i++) {
    const angle = random() * TAU, y = random() * 2 - 1, r = Math.min(1.35, Math.sqrt(-2 * Math.log(Math.max(1e-7, random()))) * .48), v = Math.sqrt(1 - y * y);
    (i % 3 ? cool : warm).push(Math.cos(angle) * v * r, y * r, Math.sin(angle) * v * r);
  }
  const cloud = dots(distribution, cool, '#8fb4d1', 3.8, .55); dots(distribution, warm, '#d8bea0', 3.2, .6);
  for (let k = 0; k < 3; k++) {
    const path = [];
    for (let i = 0; i <= 100; i++) {const t = i / 100, angle = t * TAU * 1.1 + k * 2; path.push(V(Math.cos(angle) * .65, (t - .5) * .85, Math.sin(angle) * .65));}
    line(distribution, path, k % 2 ? '#b9a2b8' : '#8baebd', .2);
  }
  g.add(distribution);
  const guide = reference(g, 'chosen-one-femtometre-reference-not-diameter', -1.43);
  for (let i = 1; i < 5; i++) {const x = -1 + i * .4; line(guide, [V(x, -1.47, .15), V(x, -1.39, .15)], '#8dabb9', .6);}
  g.userData.caption = '核子尺度 · 1 fm自选参考尺';
  g.userData.note = '2世界单位只表示图谱自选的1 fm参考长度，不是质子或中子的硬球直径，也不是质子rms电荷半径。云、流线和颜色仅示意内部复杂结构，不是核子边缘、电荷密度测量或夸克真实位置。';
  g.userData.framePadding = .47;
  g.userData.parameters = {referenceMetres: 1e-15, physicalBoundary: false, chargeDensityReconstruction: false};
  g.userData.update = (_delta, time) => {distribution.rotation.y = time * .03; cloud.material.uniforms.alpha.value = .53 + Math.sin(time * .7) * .025;};
}
function planck(g) {
  const wave = mesh(g, new THREE.PlaneGeometry(2.8, 1.8, 72, 48), new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
    uniforms: {time: {value: 0}},
    vertexShader: 'uniform float time;varying vec2 p;varying float h;void main(){p=uv;vec3 q=position;float r=length(q.xy);h=sin(r*10.-time*.65)*.09*exp(-r*.9);q.z+=h;gl_Position=projectionMatrix*modelViewMatrix*vec4(q,1.);}',
    fragmentShader: 'varying vec2 p;varying float h;void main(){vec2 q=(p-.5)*2.;float edge=pow(max(0.,1.-dot(q,q)*.65),2.);float bands=.4+.6*pow(max(0.,1.-abs(h)*10.),3.);gl_FragColor=vec4(mix(vec3(.2,.35,.48),vec3(.56,.7,.8),bands),edge*bands*.18);}'
  }));
  for (let k = 0; k < 5; k++) {
    const path = []; for (let i = 0; i <= 80; i++) {const x = -1.28 + i / 80 * 2.56; path.push(V(x, Math.sin(x * 3 + k * .6) * .13 + k * .12 - .3, -.05));}
    line(g, path, '#789db9', .11 + k * .025);
  }
  reference(g, 'theoretical-planck-length-reference-not-space-cell', -.66, .2);
  g.userData.caption = '普朗克长度 · 理论特征尺度';
  g.userData.note = '横向参考尺的2世界单位对应由ħ、G、c定义的普朗克长度。连续波纹仅作抽象图景，不表示空间颗粒、格点、已观测泡沫或真实传播；波纹间距和播放速度没有物理量值含义。';
  g.userData.framePadding = .4;
  g.userData.parameters = {definition: 'sqrt(hbar*G/c^3)', physicalBoundary: false, observedSpaceCells: false};
  g.userData.update = (_delta, time) => {wave.material.uniforms.time.value = time;};
}
function solarSystem(g) {
  // Relative distances from the cited NASA metric overview; outer radius is 1.
  const distances = [57.9, 108.2, 149.6, 228, 778.5, 1432, 2867, 4515];
  const names = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
  const colors = ['#b3aaa0', '#d7bc8c', '#7daaca', '#bf9981', '#c3b59f', '#c8bc94', '#9fc6c9', '#7d9fc8'];
  const plane = new THREE.Group(), bodies = [], rings = [];
  // Geometry is already tilted: X remains the actual outer orbital diameter.
  const tilt = .62;
  const at = (r, angle) => V(Math.cos(angle) * r, Math.sin(angle) * r * Math.sin(tilt), Math.sin(angle) * r * Math.cos(tilt));
  mesh(plane, new THREE.SphereGeometry(.007, 24, 16), new THREE.MeshBasicMaterial({color: '#f2d1a0'}));
  dots(plane, [0, 0, 0], '#ffe1ac', 6, .7);
  for (let i = 0; i < distances.length; i++) {
    const radius = distances[i] / distances.at(-1), orbit = [];
    for (let j = 0; j <= 240; j++) orbit.push(at(radius, j / 240 * TAU));
    const orbitLine = line(plane, orbit, i < 4 ? '#c6c0a2' : '#7e9bb0', i < 4 ? .65 : .43); orbitLine.name = names[i] + '-orbit'; rings.push(orbitLine);
    const bodyRadius = i < 4 ? .0028 + i * .00035 : i < 6 ? .012 : .008;
    const body = mesh(plane, new THREE.SphereGeometry(bodyRadius, 20, 12), material(colors[i], {roughness: .65}));
    body.name = names[i] + '-enlarged-marker'; body.position.copy(at(radius, i * 1.78));
    bodies.push({body, radius, phase: i * 1.78, rate: .055 / Math.sqrt(radius)});
    if (i === 5) {const ring = mesh(body, new THREE.RingGeometry(bodyRadius * 1.25, bodyRadius * 1.9, 40), new THREE.MeshBasicMaterial({color: '#c5bba2', side: THREE.DoubleSide, transparent: true, opacity: .7})); ring.rotation.x = .6;}
  }
  g.add(plane); reference(g, 'diameter-of-neptune-orbital-region', -.84, .16);
  g.userData.caption = '主要行星轨道区域 · 海王星轨道直径';
  g.userData.note = '最外海王星示意轨道直径严格为2世界单位，对应条目约90亿km轨道区域宽度，不是太阳系唯一外边界。各轨道按NASA概览日距比例整体归一化，简化为共面圆。太阳与行星标记被分别放大，不能与轨道距离共称统一实体比例；初相位和播放速度非当前星历或真实公转周期。';
  g.userData.framePadding = .3;
  g.userData.parameters = {referenceMetres: 9e12, outerOrbitDiameter: 2, outerOrbitRadius: 1, relativeDistanceMillionsKm: distances, relativeDistancesSource: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/', markerRadiiToScale: false, coplanarCircularApproximation: true};
  g.userData.update = (_delta, time) => {for (const b of bodies) b.body.position.copy(at(b.radius, b.phase + time * b.rate));};
}

const builders = {dna, proton, planck, 'solar-system': solarSystem};
export function createFeaturedOverride(entry) {
  const id = entry?.legacy?.id;
  if (!builders[id]) return null;
  if (!Number.isFinite(entry.quantity?.value) || entry.quantity.value <= 0) throw new RangeError('Featured reference requires a finite positive length');
  const group = new THREE.Group(); group.name = entry.id;
  builders[id](group);
  group.userData.kind = id;
  group.userData.sourceMeasure = entry.quantity.measure;
  group.userData.quantity = {value: entry.quantity.value, measure: entry.quantity.measure, normalizedLength: 2};
  const update = group.userData.update;
  group.userData.update = (delta = 0, time = 0) => {if (Number.isFinite(delta) && Number.isFinite(time)) update(Math.min(.1, Math.max(0, delta)), Math.max(0, time));};
  return group;
}
