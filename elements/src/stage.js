import * as THREE from 'three';
import {articleUrl} from '/engine/content/routes.js';
import {currentTheme,watchTheme} from '/engine/renderer/theme.js';

const $ = (id) => document.getElementById(id);
const immersive = document.getElementById('el-immersive');

function numeric(value) {
  if (value === null || value === undefined || value === '') return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}
const state = {
  z: 26,
  elements: [],
  properties: {},
  periods: [],
  closedShells: [],
  entriesByZ: new Map(),
  dataReady: false,
  valenceOnly: false,
  showShellGuides: false,
  maxShell: 1
};

const CAPACITY = { s: 2, p: 6, d: 10, f: 14 };
const SUBSHELL_COLOR = { s: 0x7fe8ff, p: 0x6aa8ff, d: 0xffb36b, f: 0xb89cff };
const SUBSHELL_LABEL = { s: 's', p: 'p', d: 'd', f: 'f' };
const SECTOR = {
  s: [Math.PI * 1.38, Math.PI * 0.22],
  p: [-Math.PI * 0.18, Math.PI * 0.34],
  d: [Math.PI * 0.38, Math.PI * 0.24],
  f: [Math.PI * 0.72, Math.PI * 0.20]
};
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' };

let renderer, scene, camera, atom, world, stars, nucleusGlow, pulseMeshes = [];
let stageLight = currentTheme() === 'light';
let electronTexture, probabilityClouds = [], shellGroups = [];
let dragging = false, dragMoved = false, lastPointer = null;
let tourRunning = false, tourZ = 1, tourNext = 0;
let lastWheel = 0;
let currentElement = null, currentProperty = null, currentEntry = null;
const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const sup = (value) => String(value).replace(/\d/g, (digit) => SUP[digit] || digit);
const fmt = (value, digits = 2) => Number.isFinite(Number(value)) ? Number(value).toFixed(digits).replace(/\.0+$/, '') : '—';
const signed = (value, digits = 2) => {
  if (!Number.isFinite(Number(value))) return '—';
  const number = Number(value);
  return (number >= 0 ? '+' : '−') + Math.abs(number).toFixed(digits).replace(/\.0+$/, '');
};
const hex = (value) => '#' + value.toString(16).padStart(6, '0');

function parseConfiguration(configuration = '') {
  const tokens = [];
  const regex = /(\d)([spdf])(\d+)/g;
  let match;
  while ((match = regex.exec(configuration))) {
    tokens.push({ n: Number(match[1]), l: match[2], count: Number(match[3]) });
  }
  return tokens;
}

function formatConfiguration(configuration = '') {
  return configuration.replace(/(\d)([spdf])(\d+)/g, (whole, n, l, count) => `${n}${l}${sup(count)}`);
}

function makeLabel(text, color) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '600 36px "SFMono-Regular", Consolas, monospace';
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = color;
  ctx.shadowBlur = 14;
  ctx.fillText(text, 128, 66);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.SpriteMaterial({
    map: texture, transparent: true, depthWrite: false, depthTest: false,
    blending: THREE.AdditiveBlending, opacity: 0.92
  });
  const sprite = new THREE.Sprite(material);
  sprite.renderOrder = 5;
  sprite.scale.set(0.72, 0.36, 1);
  return sprite;
}

function makeGlowTexture(inner, outer) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(128, 128, 4, 128, 128, 126);
  gradient.addColorStop(0, inner);
  gradient.addColorStop(0.28, outer);
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function initScene() {
  const host = $('stage');
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(host.clientWidth || window.innerWidth, host.clientHeight || window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  host.appendChild(renderer.domElement);
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.setAttribute('aria-label', '拖动旋转原子；滚轮切换原子序数');

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05080d, 0.024);
  electronTexture = makeGlowTexture('rgba(255,255,255,.98)', 'rgba(126,232,255,.28)');

  const width = host.clientWidth || window.innerWidth;
  camera = new THREE.PerspectiveCamera(40, width / (host.clientHeight || window.innerHeight), 0.1, 90);
  camera.position.set(width < 700 ? 1.15 : 0.72, 0.15, 11.2);
  camera.lookAt(0, 0, 0);

  world = new THREE.Group();
  scene.add(world);

  atom = new THREE.Group();
  atom.rotation.set(0.05, -0.32, 0.04);
  world.add(atom);

  const ambient = new THREE.AmbientLight(0xa9cbe0, 0.65);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xf4fbff, 1.8);
  key.position.set(3.6, 4.4, 5.2);
  scene.add(key);
  const rim = new THREE.PointLight(0x54d9ff, 18, 18, 2);
  rim.position.set(-4.2, 1.2, 2.4);
  scene.add(rim);
  const warm = new THREE.PointLight(0xff9e62, 10, 12, 2);
  warm.position.set(3.8, -2.2, 3.4);
  scene.add(warm);

  const starGeo = new THREE.BufferGeometry();
  const starCount = 780;
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const radius = 8 + Math.random() * 17;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(1 - 2 * Math.random());
    starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[i * 3 + 1] = radius * Math.cos(phi) * 0.78;
    starPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const tint = Math.random();
    starColors[i * 3] = 0.36 + tint * 0.42;
    starColors[i * 3 + 1] = 0.5 + tint * 0.4;
    starColors[i * 3 + 2] = 0.66 + tint * 0.3;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
  stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
    size: 0.035, vertexColors: true, transparent: true, opacity: 0.7,
    blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
  }));
  scene.add(stars);

  nucleusGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture('rgba(255,220,160,0.98)', 'rgba(255,122,58,0.36)'),
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  nucleusGlow.scale.set(2.1, 2.1, 1);
  world.add(nucleusGlow);

  function applyTheme(theme) {
    const light = theme === 'light';
    stageLight = light;
    scene.fog.color.set(light ? 0xdae7ef : 0x05080d);
    scene.fog.density = light ? 0.014 : 0.024;
    renderer.toneMappingExposure = light ? 1.26 : 1.18;
    ambient.color.set(light ? 0xffffff : 0xa9cbe0); ambient.intensity = light ? 1.05 : 0.65;
    key.color.set(light ? 0xfff3e4 : 0xf4fbff); key.intensity = light ? 2.35 : 1.8;
    rim.color.set(light ? 0x3f9fb4 : 0x54d9ff); rim.intensity = light ? 6 : 18;
    warm.color.set(light ? 0xc78245 : 0xff9e62); warm.intensity = light ? 3.5 : 10;
    stars.material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    stars.material.color.set(light ? 0x5d7280 : 0xffffff);
    stars.material.opacity = light ? 0.22 : 0.7;
    nucleusGlow.material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    nucleusGlow.material.opacity = light ? 0.42 : 1;
  }
  applyTheme(currentTheme());
  watchTheme(applyTheme);

  renderer.domElement.addEventListener('pointerdown', onPointerDown);
  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  renderer.domElement.addEventListener('wheel', onWheel, { passive: false });
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('resize', onResize);
}

function disposeGroup(group) {
  group.traverse((child) => {
    if (child.geometry) child.geometry.dispose();
    if (child.material) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      for (const material of materials) {
        if (material.map && material.map !== electronTexture) material.map.dispose();
        material.dispose();
      }
    }
  });
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value + 0x6D2B79F5) >>> 0;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 用 |Y_lm|^2 的角向权重采样，得到 s 球形、p 双叶、d 四叶、f 多叶的概率云。
// 这是“单一亚层形状示意”，不表示具体 m 轨道的完整简并集合。
function sampleSubshellCloud(l, radius, count, seed) {
  const rand = seededRandom(seed);
  const positions = new Float32Array(count * 3);
  let cursor = 0;
  while (cursor < count) {
    const u = rand() * 2 - 1;
    const theta = Math.acos(u);
    const phi = rand() * Math.PI * 2;
    let weight = 1;
    if (l === 'p') weight = Math.cos(theta) ** 2;
    else if (l === 'd') weight = Math.sin(theta) ** 4 * Math.cos(2 * phi) ** 2;
    else if (l === 'f') weight = Math.sin(theta) ** 6 * Math.cos(4 * phi) ** 2;
    if (weight <= 0 || rand() > weight) continue;
    const r = radius * (0.86 + rand() * 0.28);
    const sinTheta = Math.sin(theta);
    positions[cursor * 3] = r * sinTheta * Math.cos(phi);
    positions[cursor * 3 + 1] = r * sinTheta * Math.sin(phi);
    positions[cursor * 3 + 2] = r * Math.cos(theta);
    cursor += 1;
  }
  return positions;
}

function makeProbabilityCloud(token, radius, fraction, seed, maxN, z) {
  const pointCount = token.l === 's' ? 700 : token.l === 'p' ? 1200 : token.l === 'd' ? 1300 : 1400;
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(sampleSubshellCloud(token.l, radius, pointCount, seed), 3));
  const color = SUBSHELL_COLOR[token.l] || 0xffffff;
  const isS = token.l === 's';
  // 内层云在视觉上压低，避免高 Z 元素叠加成一团白色；外层（价层）保持清晰。
  const shellFade = 0.45 + 0.55 * Math.min(1, token.n / Math.max(1, maxN));
  const zFade = 1 / (1 + Math.max(0, z - 20) * 0.028);
  const baseOpacity = (isS ? 0.44 + 0.24 * fraction : 0.84 + 0.16 * fraction) * shellFade * zFade;
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({
    color, size: z > 40 ? 6 : 5.2, map: electronTexture, transparent: true, opacity: baseOpacity,
    alphaTest: 0.01, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: false
  }));
  const group = new THREE.Group();
  group.add(points);
  const materials = [{material: points.material, baseOpacity}];
  const surfaceOpacity = (isS ? 0.012 + 0.008 * fraction : 0.14 + 0.06 * fraction) * shellFade * zFade;
  const addLobe = (position, scale, rotationZ = 0) => {
    const material = new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: surfaceOpacity,
      blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
    });
    const lobe = new THREE.Mesh(new THREE.SphereGeometry(1, 18, 12), material);
    lobe.position.copy(position);
    lobe.scale.copy(scale);
    lobe.rotation.z = rotationZ;
    group.add(lobe);
    materials.push({material, baseOpacity: surfaceOpacity});
  };
  if (token.l === 's') {
    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 24, 16),
      new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: surfaceOpacity,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide
      })
    );
    group.add(shell);
    materials.push({material: shell.material, baseOpacity: surfaceOpacity});
  } else if (token.l === 'p') {
    addLobe(new THREE.Vector3(0, 0, radius * 0.63), new THREE.Vector3(radius * 0.2, radius * 0.2, radius * 0.4));
    addLobe(new THREE.Vector3(0, 0, -radius * 0.63), new THREE.Vector3(radius * 0.2, radius * 0.2, radius * 0.4));
    group.rotation.x = Math.PI / 2;
  } else if (token.l === 'd') {
    for (const [x, y] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      addLobe(
        new THREE.Vector3(x * radius * 0.5, y * radius * 0.5, 0),
        new THREE.Vector3(radius * (x ? 0.42 : 0.18), radius * (y ? 0.42 : 0.18), radius * 0.18)
      );
    }
  } else {
    for (let k = 0; k < 8; k++) {
      const angle = k * Math.PI / 4;
      addLobe(
        new THREE.Vector3(Math.cos(angle) * radius * 0.5, Math.sin(angle) * radius * 0.5, 0),
        new THREE.Vector3(radius * 0.34, radius * 0.13, radius * 0.13),
        angle
      );
    }
  }
  group.userData.materials = materials;
  group.userData.phase = (seed % 17) * 0.37;
  if (token.l === 'd' || token.l === 'f') group.rotation.z = token.n * 0.18;
  probabilityClouds.push(group);
  return group;
}

function rebuildAtom(z, element, property) {
  disposeGroup(atom);
  atom.clear();
  pulseMeshes = [];
  probabilityClouds = [];

  const totalNucleons = Math.max(1, Number(property?.massNumber) || z);
  const neutrons = Math.max(0, totalNucleons - z);
  const nucleonRadius = Math.max(0.045, 0.18 / Math.cbrt(Math.max(1, totalNucleons)));
  const clusterRadius = 0.12 + 0.62 * Math.cbrt(totalNucleons / 238) + (totalNucleons <= 4 ? 0.08 : 0);
  const nucleonGeometry = new THREE.SphereGeometry(Math.max(0.035, nucleonRadius), 12, 10);
  const nucleonMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.28, metalness: 0.15, emissive: 0x000000 });
  const nucleusMesh = new THREE.InstancedMesh(nucleonGeometry, nucleonMaterial, totalNucleons);
  const dummy = new THREE.Object3D();
  const protonColor = new THREE.Color(0xffb36b);
  const neutronColor = new THREE.Color(0x7fd0ff);

  for (let i = 0; i < totalNucleons; i++) {
    let x = 0, y = 0, zPos = 0;
    if (totalNucleons > 1) {
      const fraction = (i + 0.5) / totalNucleons;
      const radius = clusterRadius * Math.cbrt(fraction) * (0.92 + Math.random() * 0.15);
      const theta = i * 2.399963229728653;
      const phi = Math.acos(1 - 2 * fraction);
      x = radius * Math.sin(phi) * Math.cos(theta);
      y = radius * Math.cos(phi);
      zPos = radius * Math.sin(phi) * Math.sin(theta);
    }
    dummy.position.set(x, y + 0.03, zPos);
    dummy.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
    dummy.updateMatrix();
    nucleusMesh.setMatrixAt(i, dummy.matrix);
    nucleusMesh.setColorAt(i, i < z ? protonColor : neutronColor);
  }
  nucleusMesh.instanceMatrix.needsUpdate = true;
  if (nucleusMesh.instanceColor) nucleusMesh.instanceColor.needsUpdate = true;
  atom.add(nucleusMesh);

  const tokens = parseConfiguration(element?.configuration || '');
  const active = tokens.filter((token) => token.count > 0);
  const maxN = active.length ? Math.max(...active.map((token) => token.n)) : 1;
  state.maxShell = maxN;
  shellGroups = [];
  const showLabels = active.slice(-4);

  for (let n = 1; n <= Math.min(7, maxN + 1); n++) {
    const radius = 1.08 + n * 0.43;
    const shellGroup = new THREE.Group();
    shellGroup.userData.shellN = n;
    shellGroup.rotation.set(0.18 + n * 0.03, 0.35 + n * 0.13, 0.02 + n * 0.018);
    atom.add(shellGroup);
    shellGroups.push(shellGroup);

    const potential = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 18, 10),
      new THREE.MeshBasicMaterial({
        color: n <= maxN ? 0x5fa7c0 : 0x294654,
        wireframe: true,
        transparent: true, opacity: n <= maxN ? 0.075 : 0.025,
        depthWrite: false
      })
    );
    potential.visible = false;
    shellGroup.add(potential);
    shellGroup.userData.potential = potential;

    for (const token of active.filter((item) => item.n === n)) {
      const color = SUBSHELL_COLOR[token.l] || 0xffffff;
      const [start, span] = SECTOR[token.l] || SECTOR.s;
      const fraction = Math.min(1, token.count / CAPACITY[token.l]);
      const cloud = makeProbabilityCloud(token, radius, fraction, z * 997 + n * 131 + token.l.charCodeAt(0), maxN, z);
      cloud.renderOrder = 3;
      shellGroup.add(cloud);

      if (showLabels.some((item) => item.n === token.n && item.l === token.l)) {
        const label = makeLabel(`${token.n}${token.l}`, hex(color));
        const angle = start + span * 0.5;
        label.position.set(Math.cos(angle) * (radius + 0.1), Math.sin(angle) * (radius + 0.1), 0.01);
        shellGroup.add(label);
      }
    }
  }

  if (state.closedShells.includes(z)) {
    const outerRadius = 1.02 + maxN * 0.42 + 0.08;
    const pulse = new THREE.Mesh(
      new THREE.TorusGeometry(outerRadius, 0.04, 8, 128),
      new THREE.MeshBasicMaterial({
        color: SUBSHELL_COLOR[active.at(-1)?.l || 's'] || 0x7fe8ff,
        transparent: true, opacity: 0.9,
        blending: THREE.AdditiveBlending, depthWrite: false
      })
    );
    pulse.userData.life = 1;
    atom.add(pulse);
    pulseMeshes.push(pulse);
  }

  const glowScale = 1.3 + 0.8 * Math.cbrt(totalNucleons / 238);
  nucleusGlow.scale.set(glowScale, glowScale, 1);
  nucleusGlow.position.set(0, 0.02, 0);
  atom.scale.setScalar(0.965);
  atom.userData.targetScale = 1;
  applyShellVisibility();
}

function applyShellVisibility() {
  for (const group of shellGroups) {
    const visibleByMode = !state.valenceOnly || group.userData.shellN === state.maxShell;
    group.visible = visibleByMode;
    if (group.userData.potential) group.userData.potential.visible = state.showShellGuides && visibleByMode;
  }
}

function isEnglish() {
  return document.documentElement.dataset.lang === 'en';
}

const CATEGORY_EN = {
  '碱金属': 'Alkali metals', '碱土金属': 'Alkaline earth metals', '过渡金属': 'Transition metals',
  '主族金属': 'Main-group metals', '类金属': 'Metalloids', '非金属': 'Nonmetals',
  '卤素': 'Halogens', '稀有气体': 'Noble gases', '镧系': 'Lanthanides', '锕系': 'Actinides',
  '超重元素': 'Superheavy elements', '贵金属': 'Precious metals', '惰性电子对': 'Inert-pair',
  '镧系起点': 'Start of lanthanides', '6s 闭壳金属': '6s closed-shell metal',
  '5d 过渡金属': '5d transition metal', '闭壳节点': 'Closed-shell node', '来源层': 'Source layer',
  '解释层': 'Explanations', '方法层': 'Methods'
};

function categoryLabel(value) {
  return isEnglish() ? (CATEGORY_EN[value] || value) : value;
}

function updateUI(element, property, entry) {
  if (!element) return;
  currentElement = element;
  currentProperty = property;
  currentEntry = entry;
  const category = entry?.category || '元素';
  const block = `${element.block} 区`;
  const config = element.configuration || '';
  $('category').textContent = categoryLabel(category);
  $('block').textContent = isEnglish() ? `${element.block} block` : block;
  $('symbol').textContent = element.symbol;
  $('name').textContent = isEnglish() && element.nameEn ? element.nameEn : element.nameZh;
  $('nameEn').textContent = isEnglish() ? '' : (element.nameEn || '').toUpperCase();
  $('config').textContent = formatConfiguration(config);
  const ionization = numeric(property?.ionization);
  const radius = numeric(property?.radius);
  const electronegativity = numeric(property?.electronegativity);
  const massNumber = numeric(property?.massNumber);
  $('ion').textContent = ionization === null ? '—' : fmt(ionization, 3);
  $('radius').textContent = radius === null ? '—' : fmt(radius, 0);
  $('en').textContent = electronegativity === null ? '—' : fmt(electronegativity, 2);
  $('massNumber').textContent = massNumber === null ? '—' : fmt(massNumber, 0);

  const previous = state.properties[element.z - 1];
  if (element.z === 1 || !previous) {
    $('delta').textContent = isEnglish() ? 'Start: no Z−1 to compare.' : '起点：没有 Z−1 可比。';
  } else {
    const neutronDelta = numeric(property?.massNumber) !== null && numeric(previous.massNumber) !== null
      ? Number(property.massNumber) - Number(previous.massNumber)
      : null;
    const ionDelta = numeric(property?.ionization) !== null && numeric(previous.ionization) !== null
      ? Number(property.ionization) - Number(previous.ionization)
      : null;
    const radiusDelta = numeric(property?.radius) !== null && numeric(previous.radius) !== null
      ? Number(property.radius) - Number(previous.radius)
      : null;
    const parts = ['+1 p', '+1 e'];
    if (neutronDelta !== null) parts.push(`${isEnglish() ? 'neutrons' : '中子'} ${signed(neutronDelta, 0)}`);
    if (ionDelta !== null) parts.push(`${isEnglish() ? 'ionization' : '电离能'} ${signed(ionDelta, 2)} eV`);
    if (radiusDelta !== null) parts.push(`${isEnglish() ? 'radius' : '半径'} ${signed(radiusDelta, 0)} pm`);
    $('delta').innerHTML = `${isEnglish() ? 'vs Z−1' : '相对 Z−1'}：<strong>${parts.slice(0, 2).join(' · ')}</strong><br>${parts.slice(2).join(' · ')}`;
  }

  const summary = isEnglish()
    ? `${element.nameEn || element.nameZh} is a ${categoryLabel(category).toLowerCase()} with ${element.z} protons. Its ${formatConfiguration(config)} configuration places the outer electrons in the ${element.block} block.`
    : (entry?.summary || `${element.nameZh}位于第 ${element.period} 周期、${element.block} 区。`);
  $('summary').textContent = summary;
  $('sliderCurrent').textContent = `${element.z} · ${element.symbol}`;
  const range = $('slider');
  if (range) range.setAttribute('aria-valuetext', `${element.z} · ${isEnglish() && element.nameEn ? element.nameEn : element.nameZh} ${element.symbol}`);
  const period = state.periods.find((item) => item.period === element.period);
  $('periodMeta').textContent = isEnglish() ? `Period ${element.period}${period ? ' · ' + sup(period.fill) : ''}` : `第 ${element.period} 周期${period ? ' · ' + sup(period.fill) : ''}`;
  $('watermarkZ').textContent = `= ${String(element.z).padStart(2, '0')}`;
  const article = entry ? articleUrl(entry) : '#';
  $('article').href = article;
  $('article').style.opacity = entry ? '1' : '.4';
  $('article').textContent = entry ? (isEnglish() ? 'Read this element ↗' : '阅读这个元素 ↗') : (isEnglish() ? 'No article yet' : '暂无独立文章');
  if (immersive) immersive.dataset.block = element.block;

  const periodButtons = $('periods').querySelectorAll('button');
  for (const button of periodButtons) button.classList.toggle('active', Number(button.dataset.period) === element.period);
}

function updateChart(z, properties) {
  const values = {
    ionization: [], radius: [], electronegativity: []
  };
  for (let index = 1; index <= 118; index++) {
    const property = properties[index];
    values.ionization.push(numeric(property?.ionization));
    values.radius.push(numeric(property?.radius));
    values.electronegativity.push(numeric(property?.electronegativity));
  }
  const series = [
    { values: values.ionization, path: $('ionPath'), color: '#7fe8ff' },
    { values: values.radius, path: $('radPath'), color: '#ffb36b' },
    { values: values.electronegativity, path: $('enPath'), color: '#b89cff' }
  ];
  for (const item of series) {
    const finite = item.values.filter((value) => value !== null);
    const min = Math.min(...finite);
    const max = Math.max(...finite);
    let path = '';
    let started = false;
    for (let index = 0; index < item.values.length; index++) {
      const value = item.values[index];
      if (value === null) {
        started = false;
        continue;
      }
      const x = 20 + (index / 117) * 960;
      const y = 46 - ((value - min) / (max - min || 1)) * 38;
      path += `${started ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`;
      started = true;
    }
    item.path.setAttribute('d', path);
    item.path.setAttribute('stroke', item.color);
  }

  const ionValues = values.ionization.filter((value) => value !== null);
  const ionMin = Math.min(...ionValues);
  const ionMax = Math.max(...ionValues);
  const currentIon = values.ionization[z - 1];
  const x = 20 + ((z - 1) / 117) * 960;
  const y = currentIon === null ? 46 : 46 - ((currentIon - ionMin) / (ionMax - ionMin || 1)) * 38;
  $('marker').setAttribute('x1', x.toFixed(2));
  $('marker').setAttribute('x2', x.toFixed(2));
  $('dot').setAttribute('cx', x.toFixed(2));
  $('dot').setAttribute('cy', y.toFixed(2));
  $('dot').style.opacity = currentIon === null ? '.25' : '1';

  const areaPath = [];
  let areaStarted = false;
  for (let index = 0; index < values.ionization.length; index++) {
    const value = values.ionization[index];
    if (value === null) continue;
    const areaX = 20 + (index / 117) * 960;
    const areaY = 46 - ((value - ionMin) / (ionMax - ionMin || 1)) * 38;
    areaPath.push(`${areaStarted ? 'L' : 'M'}${areaX.toFixed(2)} ${areaY.toFixed(2)}`);
    areaStarted = true;
  }
  if (areaPath.length) {
    const endX = 20 + 960;
    $('areaPath').setAttribute('d', `${areaPath.join(' ')} L${endX} 46 L20 46 Z`);
  } else {
    $('areaPath').setAttribute('d', '');
  }
}

function applyZ(next, options = {}) {
  const target = clamp(Math.round(Number(next) || 1), 1, 118);
  if (!options.fromTour && tourRunning) stopTour();
  state.z = target;
  const element = state.elements.find((item) => item.z === target);
  const property = state.properties[target] || {};
  const entry = state.entriesByZ.get(target) || null;
  if (!element) return;
  updateUI(element, property, entry);
  rebuildAtom(target, element, property);
  updateChart(target, state.properties);
  $('slider').value = target;
  if (!options.fromTour) tourZ = target;
}

function setZ(next, options = {}) {
  applyZ(next, options);
  if (!options.silent && !options.fromTour) {
    document.dispatchEvent(new CustomEvent('elements:request', {detail: {z: state.z}}));
  }
}

function renderTicks() {
  const ticks = [1, 20, 40, 60, 80, 100, 118];
  const container = $('ticks');
  container.replaceChildren();
  for (const value of ticks) {
    const span = document.createElement('span');
    span.innerHTML = `<i></i>${value}`;
    span.dataset.value = value;
    container.append(span);
  }
}

function renderPeriods() {
  const container = $('periods');
  container.replaceChildren();
  for (const period of state.periods) {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.period = period.period;
    button.textContent = `P${period.period}`;
    button.title = `第 ${period.period} 周期：${period.fill}`;
    button.addEventListener('click', () => {
      stopTour();
      setZ(period.start);
    });
    container.append(button);
  }
}

function stopTour() {
  tourRunning = false;
  $('tour').classList.remove('active');
  $('tour').setAttribute('aria-pressed', 'false');
  $('tour').innerHTML = isEnglish() ? 'Auto tour <span>↗</span>' : '自动巡游 <span>↗</span>';
}

function startTour() {
  if (tourRunning) {
    stopTour();
    return;
  }
  tourRunning = true;
  $('tour').classList.add('active');
  $('tour').setAttribute('aria-pressed', 'true');
  $('tour').innerHTML = isEnglish() ? 'Pause tour <span>Ⅱ</span>' : '暂停巡游 <span>Ⅱ</span>';
  tourZ = state.z >= 118 ? 0 : state.z;
  tourNext = 0;
}

function onPointerDown(event) {
  if (event.button !== 0) return;
  dragging = true;
  dragMoved = false;
  lastPointer = { x: event.clientX, y: event.clientY };
  renderer.domElement.setPointerCapture?.(event.pointerId);
}

function onPointerMove(event) {
  if (!dragging || !lastPointer) return;
  const dx = event.clientX - lastPointer.x;
  const dy = event.clientY - lastPointer.y;
  if (Math.abs(dx) + Math.abs(dy) > 2) dragMoved = true;
  atom.rotation.y += dx * 0.006;
  atom.rotation.x = clamp(atom.rotation.x + dy * 0.003, -0.9, 0.9);
  lastPointer = { x: event.clientX, y: event.clientY };
}

function onPointerUp() {
  dragging = false;
  lastPointer = null;
}

function onWheel(event) {
  const direction = event.deltaY > 0 ? 1 : -1;
  // 到达两端后把滚轮还给页面，避免整页首屏变成无法向下阅读的“滚轮陷阱”。
  if ((direction > 0 && state.z >= 118) || (direction < 0 && state.z <= 1)) return;
  event.preventDefault();
  const now = performance.now();
  if (now - lastWheel < 80) return;
  lastWheel = now;
  stopTour();
  setZ(state.z + direction);
}

function onKeyDown(event) {
  if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
    event.preventDefault();
    stopTour();
    setZ(state.z + 1);
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
    event.preventDefault();
    stopTour();
    setZ(state.z - 1);
  } else if (event.key === 'Home') {
    event.preventDefault();
    stopTour();
    setZ(1);
  } else if (event.key === 'End') {
    event.preventDefault();
    stopTour();
    setZ(118);
  } else if (event.key === ' ') {
    event.preventDefault();
    startTour();
  }
}

function onResize() {
  if (!renderer || !camera) return;
  const host = $('stage');
  const width = host.clientWidth || window.innerWidth;
  const height = host.clientHeight || window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.position.x = width < 700 ? 1.15 : 0.72;
  camera.updateProjectionMatrix();
}

function animate(now) {
  requestAnimationFrame(animate);
  for (const cloud of probabilityClouds) {
    const pulse = reducedMotion ? 1 : 0.9 + 0.1 * Math.sin(now * 0.0012 + cloud.userData.phase);
    for (const item of cloud.userData.materials) {
      item.material.opacity = item.baseOpacity * pulse;
    }
  }
  if (tourRunning) {
    if (tourNext === 0) {
      tourNext = now + 180;
    } else if (now >= tourNext) {
      tourZ += 1;
      if (tourZ > 118) {
        stopTour();
      } else {
        setZ(tourZ, { fromTour: true });
        const closed = state.closedShells.includes(tourZ);
        tourNext = now + (closed ? 430 : 100);
      }
    }
  }

  if (!dragging && !reducedMotion) {
    atom.rotation.y += 0.0007;
    atom.rotation.x += (0.05 - atom.rotation.x) * 0.008;
  }
  if (atom.userData.targetScale) {
    atom.scale.x += (atom.userData.targetScale - atom.scale.x) * 0.12;
    atom.scale.y = atom.scale.z = atom.scale.x;
    if (Math.abs(atom.scale.x - atom.userData.targetScale) < 0.002) {
      atom.scale.setScalar(atom.userData.targetScale);
      atom.userData.targetScale = null;
    }
  }
  nucleusGlow.material.opacity = stageLight ? 0.34 : (reducedMotion ? 0.78 : 0.78 + Math.sin(now * 0.0014) * 0.12);
  if (!reducedMotion) {
    stars.rotation.y += 0.00025;
    stars.rotation.x += 0.00008;
  }
  if (!reducedMotion) {
    for (const pulse of pulseMeshes) {
      pulse.userData.life -= 0.018;
      const life = Math.max(0, pulse.userData.life);
      pulse.scale.setScalar(1 + (1 - life) * 0.24);
      pulse.material.opacity = Math.max(0, life * 0.9);
    }
    pulseMeshes = pulseMeshes.filter((pulse) => pulse.userData.life > 0);
  }
  renderer.render(scene, camera);
}

async function load() {
  const [dataResponse, entriesResponse] = await Promise.all([
    fetch('./elements.json'),
    fetch('./entries.json')
  ]);
  if (!dataResponse.ok || !entriesResponse.ok) throw new Error('数据加载失败');
  const data = await dataResponse.json();
  const entries = await entriesResponse.json();
  state.elements = data.elements;
  state.properties = data.properties;
  state.periods = data.periods;
  state.closedShells = data.closedShells;
  for (const entry of entries) {
    if (entry.element?.symbol && Number.isFinite(Number(entry.quantity?.value))) {
      state.entriesByZ.set(Number(entry.quantity.value), entry);
    }
  }
  state.dataReady = true;
  initScene();
  if ('ResizeObserver' in window) new ResizeObserver(onResize).observe($('stage'));
  renderTicks();
  renderPeriods();
  const params = new URLSearchParams(location.search);
  const requestedParam = params.get('z');
  const requestedEntry = params.get('entry');
  const entryZ = requestedEntry ? entries.find((entry) => entry.id === requestedEntry)?.quantity?.value : null;
  const requested = requestedParam === null ? null : Number(requestedParam);
  const startZ = Number.isFinite(Number(entryZ)) && Number(entryZ) >= 1 && Number(entryZ) <= 118
    ? Number(entryZ)
    : requested !== null && Number.isInteger(requested) && requested >= 1 && requested <= 118 ? requested : 26;
  applyZ(startZ);
  requestAnimationFrame(animate);
}

function valenceLabel() {
  if (!state.valenceOnly) return isEnglish() ? 'Valence only' : '只看价层';
  return isEnglish() ? 'Show all subshells' : '显示全部亚层';
}

$('slider').addEventListener('input', (event) => {
  stopTour();
  setZ(Number(event.target.value));
});
$('tour').addEventListener('click', startTour);
$('reset').addEventListener('click', () => {
  stopTour();
  setZ(26);
});
const valenceButton = $('valenceOnly');
if (valenceButton) {
  valenceButton.addEventListener('click', () => {
    state.valenceOnly = !state.valenceOnly;
    valenceButton.setAttribute('aria-pressed', String(state.valenceOnly));
    valenceButton.textContent = valenceLabel();
    applyShellVisibility();
  });
}
const shellGuideButton = $('shellGuide');
if (shellGuideButton) {
  shellGuideButton.addEventListener('click', () => {
    state.showShellGuides = !state.showShellGuides;
    shellGuideButton.setAttribute('aria-pressed', String(state.showShellGuides));
    applyShellVisibility();
  });
}

document.addEventListener('atlas-language', () => {
  if (currentElement) updateUI(currentElement, currentProperty, currentEntry);
  if (valenceButton) valenceButton.textContent = valenceLabel();
  $('tour').innerHTML = tourRunning
    ? (isEnglish() ? 'Pause tour <span>Ⅱ</span>' : '暂停巡游 <span>Ⅱ</span>')
    : (isEnglish() ? 'Auto tour <span>↗</span>' : '自动巡游 <span>↗</span>');
});

document.addEventListener('elements:change', (event) => {
  const z = Number(event.detail?.z);
  if (!state.dataReady || !Number.isFinite(z) || z === state.z) return;
  applyZ(z);
});

load().catch((error) => {
  console.error(error);
  $('summary').textContent = '原型数据未能加载：' + error.message;
  $('stage').innerHTML = '<div style="position:absolute;inset:0;display:grid;place-items:center;color:#8ea6b8;font-size:12px;letter-spacing:.1em">3D 场景加载失败</div>';
});
