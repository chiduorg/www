import * as THREE from 'three';
import {articleUrl} from '/engine/content/routes.js';
import { bands } from './ladder-data.js';
import {currentTheme,watchTheme} from '/engine/renderer/theme.js';

const $ = (id) => document.getElementById(id);
const immersive = document.getElementById('mass-immersive');
const state = {
  entries: [],
  positive: [],
  entry: null,
  log: 24.78,
  zero: false,
  tour: false,
  lastNow: 0,
  bandIndex: 11,
  entryById: new Map()
};

const HUMAN_MASS = 70;
const EARTH_MASS = 5.972e24;
const SUN_MASS = 1.989e30;
const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
const SUP = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹', '-': '⁻' };
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const sup = (value) => String(value).replace(/\d|−|-/g, (digit) => SUP[digit] || digit);
const powText = (exponent) => `10${sup(exponent)}`;
const logOf = (value) => Math.log10(value);
const fmt = (value, digits = 2) => Number.isFinite(Number(value)) ? Number(value).toFixed(digits).replace(/\.0+$/, '') : '—';

let renderer, scene, camera, world, objectGroup, ringGroup, gridMesh, gridBase = [], platform, stars, objectGlow;
let massLight = currentTheme() === 'light';
let dragging = false, dragMoved = false, lastPointer = null, lastWheel = 0;
let ringMeshes = [];

const CATEGORY_ARCHETYPE = {
  '基本粒子': 'particle', '规范玻色子': 'particle', '强子': 'nucleus', '原子核': 'nucleus', '原子': 'atom',
  '分子': 'molecule', '蛋白质': 'molecule', '病毒': 'virus', '细胞器': 'cell', '人体细胞': 'cell',
  '生殖细胞': 'cell', '血细胞': 'cell', '神经细胞': 'cell', '肌细胞': 'cell', '单细胞生物': 'cell', '细菌': 'cell',
  '人体器官': 'organ', '人体': 'human', '哺乳动物': 'animal', '动物': 'animal', '昆虫': 'animal', '古生物': 'animal',
  '植物叶片': 'object', '日常物品': 'object', '日常五金': 'object', '硬币': 'object', '乐器': 'object', '药品': 'object',
  '能源设备': 'object', '矿物颗粒': 'grain', '气象液滴': 'grain', '行星': 'planet', '卫星': 'planet', '矮行星': 'planet',
  '系外行星': 'planet', '行星质量伴星': 'planet', '恒星': 'star', '褐矮星': 'star', '黑洞': 'blackhole',
  '星系': 'galaxy', '星系团': 'cluster', '星系群': 'cluster', '超星系团': 'cluster', '宇宙尺度': 'cosmos',
  '大尺度结构': 'cosmos', '建筑': 'architecture', '桥梁': 'architecture', '水利工程': 'architecture',
  '车辆': 'vehicle', '船舶': 'vehicle', '轨道车辆': 'vehicle', '飞行器': 'vehicle', '航天器': 'vehicle', '交通工具': 'vehicle'
};

const ID_ARCHETYPE = {
  'mass.electron': 'particle', 'mass.positron': 'particle', 'mass.proton': 'nucleus', 'mass.neutron': 'nucleus',
  'mass.hydrogen-atom': 'atom', 'mass.water-molecule': 'molecule', 'mass.insulin': 'molecule', 'mass.hemoglobin': 'molecule',
  'mass.ribosome': 'molecule', 'mass.bacteriophage-t4': 'virus', 'mass.influenza-virion': 'virus', 'mass.exosome': 'cell',
  'mass.mitochondrion': 'cell', 'mass.bacterium': 'cell', 'mass.red-blood-cell': 'cell', 'mass.human-cell': 'cell',
  'mass.neuron': 'cell', 'mass.cardiac-muscle-cell': 'cell', 'mass.egg-cell': 'cell', 'mass.sperm-cell': 'cell',
  'mass.sand-grain': 'grain', 'mass.rain-drop': 'grain', 'mass.mosquito': 'animal', 'mass.cat': 'animal',
  'mass.dog': 'animal', 'mass.elephant': 'animal', 'mass.tyrannosaurus': 'animal', 'mass.blue-whale': 'animal',
  'mass.human-heart': 'organ', 'mass.human-liver': 'organ', 'mass.human-brain': 'organ', 'mass.newborn': 'human',
  'mass.adult-human': 'human', 'mass.motorcycle': 'vehicle', 'mass.car': 'vehicle', 'mass.suv': 'vehicle',
  'mass.truck': 'vehicle', 'mass.bus': 'vehicle', 'mass.train-car': 'vehicle', 'mass.airliner': 'vehicle',
  'mass.iss': 'vehicle', 'mass.wind-turbine': 'architecture', 'mass.eiffel-tower': 'architecture',
  'mass.cruise-ship': 'vehicle', 'mass.aircraft-carrier': 'vehicle', 'mass.cargo-ship': 'vehicle',
  'mass.empire-state-building': 'architecture', 'mass.golden-gate-bridge': 'architecture', 'mass.burj-khalifa': 'architecture',
  'mass.hoover-dam': 'architecture', 'mass.three-gorges-dam': 'architecture', 'mass.millau-viaduct': 'architecture',
  'mass.grand-coulee-dam': 'architecture', 'mass.asteroid-itokawa': 'grain', 'mass.asteroid-bennu': 'grain',
  'mass.asteroid-yu55': 'grain', 'mass.asteroid-didymos': 'grain', 'mass.comet-67p': 'grain',
  'mass.asteroid-toutatis': 'grain', 'mass.comet-halley': 'grain', 'mass.asteroid-eros': 'grain', 'mass.phoebe': 'grain',
  'mass.psyche': 'grain', 'mass.vesta': 'grain', 'mass.ceres': 'planet', 'mass.europa': 'planet', 'mass.pluto': 'planet',
  'mass.moon': 'planet', 'mass.mercury': 'planet', 'mass.titan': 'planet', 'mass.ganymede': 'planet', 'mass.earth': 'planet',
  'mass.gj1214b': 'planet', 'mass.uranus': 'planet', 'mass.neptune': 'planet', 'mass.saturn': 'planet',
  'mass.51peg-b': 'planet', 'mass.hd209458b': 'planet', 'mass.jupiter': 'planet', 'mass.2m1207b': 'planet',
  'mass.teide-1': 'star', 'mass.barnard-star': 'star', 'mass.proxima-centauri': 'star', 'mass.sun': 'star',
  'mass.sirius-a': 'star', 'mass.sirius-b': 'star', 'mass.psr-j0348-0432': 'star', 'mass.betelgeuse': 'star',
  'mass.cygnus-x1': 'blackhole', 'mass.eta-carinae': 'star', 'mass.gw150914-merger': 'blackhole',
  'mass.gw190521-merger': 'blackhole', 'mass.gcirs-13e': 'blackhole', 'mass.omega-centauri-bh': 'blackhole',
  'mass.hlx-1': 'blackhole', 'mass.ngc4395-black-hole': 'blackhole', 'mass.sgr-a-star': 'blackhole',
  'mass.ngc4151-black-hole': 'blackhole', 'mass.mrk231-black-hole': 'blackhole', 'mass.3c273': 'blackhole',
  'mass.m87-black-hole': 'blackhole', 'mass.ton-618': 'blackhole', 'mass.large-magellanic-cloud': 'galaxy',
  'mass.milky-way': 'galaxy', 'mass.andromeda': 'galaxy', 'mass.observable-universe': 'cosmos'
};

const ID_PLANET_COLOR = {
  'mass.earth': { base: '#155b92', land: '#3d9b65', atmosphere: 0x77c9ff },
  'mass.mars': { base: '#a64d33', land: '#c77a4a', atmosphere: 0xff9b6a },
  'mass.venus': { base: '#b6955e', land: '#d8bd75', atmosphere: 0xffd08a },
  'mass.jupiter': { base: '#b79a72', land: '#e0c89c', atmosphere: 0xffd7a0 },
  'mass.saturn': { base: '#c8ae7b', land: '#e5d2a5', atmosphere: 0xffddb0 },
  'mass.uranus': { base: '#7fb9bd', land: '#b9e2e2', atmosphere: 0x8fe8ee },
  'mass.neptune': { base: '#2c5ba0', land: '#4f86c9', atmosphere: 0x84b8ff },
  'mass.moon': { base: '#8f949b', land: '#c0c4c8', atmosphere: 0x9fb2c0 },
  'mass.mercury': { base: '#77716c', land: '#a99e93', atmosphere: 0xb7a58c },
  'mass.ceres': { base: '#777b80', land: '#a8acad', atmosphere: 0xa2b1bd }
};

function makeGlowTexture(inner, outer) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const gradient = ctx.createRadialGradient(128, 128, 3, 128, 128, 126);
  gradient.addColorStop(0, inner);
  gradient.addColorStop(0.25, outer);
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

function glowSprite(inner, outer, scale = 1) {
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(inner, outer), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  sprite.scale.set(scale, scale, 1);
  return sprite;
}

function std(color, options = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.34, metalness: 0.22, ...options });
}

function basic(color, opacity = 1, additive = false) {
  return new THREE.MeshBasicMaterial({
    color, transparent: opacity < 1, opacity,
    blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    depthWrite: opacity >= 1
  });
}

function sphere(radius, material, width = 24, height = 18) {
  return new THREE.Mesh(new THREE.SphereGeometry(radius, width, height), material);
}

function ring(radius, tube, color, opacity = 0.7, segments = 96) {
  const mesh = new THREE.Mesh(
    new THREE.TorusGeometry(radius, tube, 8, segments),
    basic(color, opacity, true)
  );
  return mesh;
}

function bond(a, b, radius, material) {
  const start = new THREE.Vector3(...a);
  const end = new THREE.Vector3(...b);
  const direction = end.clone().sub(start);
  const length = direction.length();
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, 8), material);
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return mesh;
}

function seededRandom(seed) {
  let value = 2166136261;
  for (let i = 0; i < seed.length; i++) value = Math.imul(value ^ seed.charCodeAt(i), 16777619);
  return () => {
    value += 0x6D2B79F5;
    let t = value;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function planetTexture(entry) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const colors = ID_PLANET_COLOR[entry.id] || { base: '#7b8f9e', land: '#b8c5cc' };
  ctx.fillStyle = colors.base;
  ctx.fillRect(0, 0, 512, 256);
  const random = seededRandom(entry.id);
  for (let i = 0; i < 46; i++) {
    const x = random() * 512;
    const y = random() * 256;
    const width = 12 + random() * 90;
    const height = 4 + random() * 26;
    ctx.globalAlpha = 0.06 + random() * 0.16;
    ctx.fillStyle = i % 3 === 0 ? colors.land : (i % 3 === 1 ? '#ffffff' : '#000000');
    ctx.beginPath();
    ctx.ellipse(x, y, width, height, random() * 0.45, 0, Math.PI * 2);
    ctx.fill();
  }
  if (entry.id === 'mass.earth') {
    for (let i = 0; i < 18; i++) {
      const x = random() * 512;
      const y = 40 + random() * 176;
      ctx.globalAlpha = 0.38 + random() * 0.28;
      ctx.fillStyle = colors.land;
      ctx.beginPath();
      ctx.ellipse(x, y, 7 + random() * 28, 5 + random() * 16, random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  for (let i = 0; i < 9; i++) {
    ctx.globalAlpha = 0.16 + random() * 0.14;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 18 + random() * 220, 512, 1 + random() * 4);
  }
  ctx.globalAlpha = 1;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

function buildObject(entry, archetype) {
  const group = new THREE.Group();
  const accent = archetype === 'blackhole' ? 0xff8a3c : archetype === 'star' ? 0xffd37a : archetype === 'cosmos' ? 0x8cbfff : 0x7fe8ff;
  group.userData.spin = true;
  group.userData.disk = null;

  if (archetype === 'particle') {
    const core = sphere(0.28, std(0x7fe8ff, { emissive: 0x2a8fa8, emissiveIntensity: 1.5, roughness: 0.2 }));
    group.add(core);
    const halo = glowSprite('rgba(190,250,255,.95)', 'rgba(40,150,210,.42)', 1.35);
    group.add(halo);
    for (let i = 0; i < 3; i++) {
      const r = ring(0.42 + i * 0.12, 0.012, 0x8fefff, 0.55);
      r.rotation.set(Math.PI / 2 + i * 0.6, i * 0.8, i * 0.3);
      group.add(r);
    }
  } else if (archetype === 'nucleus') {
    const random = seededRandom(entry.id);
    const colors = [0xffb36b, 0x7fd0ff];
    for (let i = 0; i < 9; i++) {
      const r = 0.11 + random() * 0.16;
      const phi = Math.acos(1 - 2 * random());
      const theta = random() * Math.PI * 2;
      const node = sphere(r, std(colors[i % 2], { emissive: colors[i % 2], emissiveIntensity: 0.35 }));
      node.position.set(r * 1.9 * Math.sin(phi) * Math.cos(theta), r * 1.9 * Math.cos(phi), r * 1.9 * Math.sin(phi) * Math.sin(theta));
      group.add(node);
    }
    group.add(glowSprite('rgba(255,210,160,.9)', 'rgba(255,110,60,.35)', 1.4));
  } else if (archetype === 'atom') {
    const nucleus = sphere(0.18, std(0xffb36b, { emissive: 0xff6b3c, emissiveIntensity: 0.6 }));
    group.add(nucleus);
    for (let i = 0; i < 3; i++) {
      const r = ring(0.55 + i * 0.16, 0.012, 0x7fe8ff, 0.6);
      r.rotation.set(Math.PI / 2 + i * 0.55, i * 0.65, i * 0.2);
      group.add(r);
      const electron = sphere(0.045, basic(0xd7fbff));
      const angle = i * 2.1;
      electron.position.set(Math.cos(angle) * (0.55 + i * 0.16), 0.1 + Math.sin(angle) * 0.3, Math.sin(angle) * (0.55 + i * 0.16));
      group.add(electron);
    }
    group.add(glowSprite('rgba(255,200,150,.9)', 'rgba(255,100,50,.3)', 1.1));
  } else if (archetype === 'molecule') {
    const nodes = [[0, 0.2, 0], [-0.52, -0.2, 0.12], [0.52, -0.2, -0.12], [0.04, 0.75, 0.08]];
    const colors = [0xffb36b, 0x7fd0ff, 0x7fd0ff, 0xb89cff];
    const radius = [0.18, 0.24, 0.24, 0.15];
    const positions = [];
    nodes.forEach((position, index) => {
      const node = sphere(radius[index], std(colors[index], { emissive: colors[index], emissiveIntensity: 0.22 }));
      node.position.set(...position);
      group.add(node);
      positions.push(position);
    });
    for (let i = 1; i < positions.length; i++) group.add(bond(positions[0], positions[i], 0.035, std(0xa9d9e4, { roughness: 0.5 })));
    group.add(glowSprite('rgba(180,240,255,.7)', 'rgba(40,150,200,.2)', 1.35));
  } else if (archetype === 'virus') {
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.48, 1), std(0x8b6fd6, { wireframe: true, transparent: true, opacity: 0.8, emissive: 0x5b38ad, emissiveIntensity: 0.3 }));
    group.add(shell);
    const random = seededRandom(entry.id);
    for (let i = 0; i < 26; i++) {
      const phi = Math.acos(1 - 2 * random());
      const theta = random() * Math.PI * 2;
      const start = new THREE.Vector3(0.38 * Math.sin(phi) * Math.cos(theta), 0.38 * Math.cos(phi), 0.38 * Math.sin(phi) * Math.sin(theta));
      const end = start.clone().multiplyScalar(1.65);
      const spike = bond(start.toArray(), end.toArray(), 0.012, std(0xaa8bff, { emissive: 0x5a3eaf, emissiveIntensity: 0.25 }));
      group.add(spike);
      const cap = sphere(0.035, basic(0xdccbff));
      cap.position.copy(end);
      group.add(cap);
    }
    group.add(glowSprite('rgba(190,160,255,.75)', 'rgba(80,40,160,.22)', 1.3));
  } else if (archetype === 'cell') {
    const membrane = sphere(0.62, new THREE.MeshStandardMaterial({ color: 0x58b9b0, transparent: true, opacity: 0.16, roughness: 0.2, metalness: 0.1 }));
    group.add(membrane);
    const wire = sphere(0.62, basic(0x8fffe6, 0.18, true), 14, 10);
    group.add(wire);
    const random = seededRandom(entry.id);
    for (let i = 0; i < 8; i++) {
      const r = 0.1 + random() * 0.18;
      const organelle = sphere(r, std(i % 2 ? 0xffb36b : 0x7fe8ff, { emissive: i % 2 ? 0xff7a3d : 0x2d9eb8, emissiveIntensity: 0.35 }));
      const radius = 0.15 + random() * 0.28;
      const phi = Math.acos(1 - 2 * random());
      const theta = random() * Math.PI * 2;
      organelle.position.set(radius * Math.sin(phi) * Math.cos(theta), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
      group.add(organelle);
    }
    group.add(glowSprite('rgba(150,255,220,.6)', 'rgba(30,150,130,.2)', 1.5));
  } else if (archetype === 'human') {
    const skin = std(0xffc59b, { roughness: 0.55, metalness: 0.05 });
    const cloth = std(0x79b6c9, { roughness: 0.6, metalness: 0.05 });
    const head = sphere(0.16, skin);
    head.position.y = 0.64;
    group.add(head);
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.22, 0.55, 12), cloth);
    body.position.y = 0.15;
    group.add(body);
    for (const side of [-1, 1]) {
      const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.045, 0.55, 8), skin);
      arm.position.set(side * 0.28, 0.22, 0);
      arm.rotation.z = side * 0.18;
      group.add(arm);
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.055, 0.58, 8), cloth);
      leg.position.set(side * 0.1, -0.28, 0);
      group.add(leg);
    }
    group.add(glowSprite('rgba(255,220,170,.55)', 'rgba(255,120,50,.18)', 1.15));
  } else if (archetype === 'animal') {
    const body = sphere(0.38, std(0x8fa6b2, { emissive: 0x1f3742, emissiveIntensity: 0.25 }));
    body.scale.set(1.65, 0.75, 0.8);
    group.add(body);
    const head = sphere(0.18, std(0x9db6c3));
    head.position.set(0.56, 0.16, 0);
    group.add(head);
    for (const [x, z] of [[-0.35, -0.18], [-0.35, 0.18], [0.32, -0.18], [0.32, 0.18]]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.035, 0.3, 8), std(0x647885));
      leg.position.set(x, -0.4, z);
      group.add(leg);
    }
    if (entry.id === 'mass.cat' || entry.id === 'mass.dog') {
      const earMaterial = std(entry.id === 'mass.cat' ? 0xa9bdc8 : 0x768b96, { roughness: 0.65 });
      for (const z of [-0.11, 0.11]) {
        const ear = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.2, 8), earMaterial);
        ear.position.set(0.5, 0.34, z);
        ear.rotation.z = z < 0 ? 0.22 : -0.22;
        group.add(ear);
      }
      const eyeMaterial = basic(0x101820);
      for (const z of [-0.09, 0.09]) {
        const eye = sphere(0.028, eyeMaterial);
        eye.position.set(0.70, 0.2, z);
        group.add(eye);
      }
      const nose = sphere(0.024, basic(0x35414a));
      nose.position.set(0.73, 0.13, 0);
      group.add(nose);
      const tail = new THREE.Mesh(
        new THREE.TorusGeometry(0.24, 0.032, 6, 28, Math.PI * 0.9),
        std(0x7f959f, { roughness: 0.7 })
      );
      tail.position.set(-0.62, 0.14, 0);
      tail.rotation.set(0.2, 0.5, Math.PI * 0.15);
      group.add(tail);
    }
    group.add(glowSprite('rgba(180,220,240,.5)', 'rgba(40,100,140,.15)', 1.35));
  } else if (archetype === 'organ') {
    const organ = sphere(0.45, std(0xb65b61, { emissive: 0x5c1e28, emissiveIntensity: 0.35, roughness: 0.32 }));
    organ.scale.set(1.1, 0.8, 0.9);
    group.add(organ);
    for (let i = 0; i < 4; i++) {
      const vessel = ring(0.42 + i * 0.03, 0.012, 0xff8f8f, 0.5);
      vessel.rotation.set(0.4 + i * 0.5, i * 0.8, 0.2);
      group.add(vessel);
    }
    group.add(glowSprite('rgba(255,160,150,.6)', 'rgba(140,30,40,.2)', 1.3));
  } else if (archetype === 'architecture') {
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.46, 1.35, 6), std(0x9fb1bb, { roughness: 0.45, metalness: 0.35 }));
    tower.position.y = 0.12;
    group.add(tower);
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.12, 0.8), std(0x60727c));
    base.position.y = -0.58;
    group.add(base);
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.35, 6), basic(0xffd37a));
    antenna.position.y = 0.93;
    group.add(antenna);
    group.add(glowSprite('rgba(255,220,150,.55)', 'rgba(255,120,40,.15)', 1.2));
  } else if (archetype === 'vehicle') {
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.28, 0.45), std(0x7e9ca8, { roughness: 0.36, metalness: 0.45 }));
    body.position.y = 0.05;
    group.add(body);
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.25, 0.38), std(0xc7dbe2, { roughness: 0.2, metalness: 0.3 }));
    cabin.position.set(-0.1, 0.3, 0);
    group.add(cabin);
    for (const x of [-0.34, 0.34]) {
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.045, 6, 12), std(0x30444e));
      wheel.rotation.y = Math.PI / 2;
      wheel.position.set(x, -0.17, 0.25);
      group.add(wheel);
      const wheel2 = wheel.clone();
      wheel2.position.z = -0.25;
      group.add(wheel2);
    }
    group.add(glowSprite('rgba(150,220,255,.45)', 'rgba(40,110,160,.12)', 1.2));
  } else if (archetype === 'grain') {
    const rock = new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 1), std(0x9c8b77, { roughness: 0.85, metalness: 0.12 }));
    rock.scale.set(1.25, 0.72, 0.98);
    group.add(rock);
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(rock.geometry), basic(0xffcf99, 0.4, true));
    group.add(edge);
    group.add(glowSprite('rgba(255,210,160,.45)', 'rgba(140,80,30,.12)', 1.1));
  } else if (archetype === 'object') {
    const object = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.58, 0.58), std(0xd5a35e, { roughness: 0.32, metalness: 0.55 }));
    object.rotation.set(0.3, 0.6, 0.2);
    group.add(object);
    const edge = new THREE.LineSegments(new THREE.EdgesGeometry(object.geometry), basic(0xffdf9c, 0.35, true));
    group.add(edge);
    group.add(glowSprite('rgba(255,220,150,.45)', 'rgba(140,90,30,.12)', 1.1));
  } else if (archetype === 'planet') {
    const colors = ID_PLANET_COLOR[entry.id] || { base: '#78909a', land: '#b5c4ca', atmosphere: 0x9fc7d0 };
    const texture = entry.id === 'mass.earth' ? new THREE.TextureLoader().load('/media/earth-day.jpg') : planetTexture(entry);
    const planet = sphere(0.82, new THREE.MeshStandardMaterial({ map: texture, roughness: 0.68, metalness: 0.04 }), 48, 32);
    group.add(planet);
    const atmosphere = sphere(0.91, new THREE.MeshBasicMaterial({ color: colors.atmosphere, transparent: true, opacity: 0.16, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false }), 32, 24);
    group.add(atmosphere);
    if (entry.id === 'mass.saturn') {
      const rings = new THREE.Mesh(new THREE.RingGeometry(1.05, 1.72, 96), new THREE.MeshBasicMaterial({ color: 0xe4c88e, transparent: true, opacity: 0.42, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
      rings.rotation.x = Math.PI / 2;
      rings.rotation.z = -0.28;
      group.add(rings);
    }
    if (entry.id === 'mass.earth') {
      const moon = sphere(0.09, std(0xc9d4d8, { roughness: 0.8 }));
      moon.position.set(1.15, 0.22, 0.15);
      group.add(moon);
    }
    group.add(glowSprite('rgba(150,220,255,.5)', 'rgba(30,80,140,.16)', 2.1));
  } else if (archetype === 'star') {
    const core = sphere(0.64, new THREE.MeshBasicMaterial({ color: 0xffe7a3 }));
    group.add(core);
    const halo = glowSprite('rgba(255,250,210,.95)', 'rgba(255,130,40,.42)', 2.7);
    group.add(halo);
    const corona = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(
        Array.from({ length: 600 }, () => {
          const r = 0.72 + Math.random() * 0.8;
          const phi = Math.acos(1 - 2 * Math.random());
          const theta = Math.random() * Math.PI * 2;
          return [r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)];
        }).flat()
      ), 3)),
      new THREE.PointsMaterial({ color: 0xffc96b, size: 0.035, transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    group.add(corona);
  } else if (archetype === 'blackhole') {
    const core = sphere(0.4, new THREE.MeshBasicMaterial({ color: 0x000000 }));
    group.add(core);
    const disk = new THREE.Mesh(new THREE.RingGeometry(0.55, 1.55, 96), new THREE.MeshBasicMaterial({ color: 0xff9a4a, transparent: true, opacity: 0.55, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    disk.rotation.x = Math.PI / 2;
    disk.rotation.z = 0.2;
    group.add(disk);
    const inner = new THREE.Mesh(new THREE.RingGeometry(0.42, 0.55, 64), new THREE.MeshBasicMaterial({ color: 0xffe2a4, transparent: true, opacity: 0.8, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    inner.rotation.x = Math.PI / 2;
    group.add(inner);
    const lens = ring(0.8, 0.02, 0xffd37a, 0.88);
    lens.rotation.x = 1.1;
    lens.rotation.y = 0.2;
    group.add(lens);
    group.add(glowSprite('rgba(255,170,80,.8)', 'rgba(160,40,20,.25)', 2.4));
    group.userData.disk = disk;
  } else if (archetype === 'galaxy') {
    const random = seededRandom(entry.id);
    const count = 1200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const arm = i % 3;
      const radius = 0.16 + random() * 1.15;
      const theta = radius * 4.2 + arm * Math.PI * 2 / 3 + random() * 0.2;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = (random() - 0.5) * 0.12;
      positions[i * 3 + 2] = Math.sin(theta) * radius;
      const tint = Math.random();
      colors[i * 3] = 0.66 + tint * 0.2;
      colors[i * 3 + 1] = 0.76 + tint * 0.18;
      colors[i * 3 + 2] = 0.95;
    }
    const galaxy = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(positions, 3)).setAttribute('color', new THREE.BufferAttribute(colors, 3)),
      new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    group.add(galaxy);
    const core = sphere(0.12, basic(0xffe9b5, 0.9, true));
    group.add(core);
    group.add(glowSprite('rgba(255,230,170,.85)', 'rgba(90,110,190,.2)', 1.8));
    group.userData.galaxy = galaxy;
  } else if (archetype === 'cluster') {
    const random = seededRandom(entry.id);
    for (let i = 0; i < 7; i++) {
      const size = 0.18 + random() * 0.3;
      const cloud = new THREE.Points(
        new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(
          Array.from({ length: 90 }, () => {
            const r = size * Math.cbrt(random());
            const phi = Math.acos(1 - 2 * random());
            const theta = random() * Math.PI * 2;
            return [r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta)];
          }).flat()
        ), 3)),
        new THREE.PointsMaterial({ color: i % 2 ? 0x9fc8ff : 0xffd7a0, size: 0.035, transparent: true, opacity: 0.75, blending: THREE.AdditiveBlending, depthWrite: false })
      );
      const angle = random() * Math.PI * 2;
      const radius = 0.2 + random() * 0.7;
      cloud.position.set(Math.cos(angle) * radius, (random() - 0.5) * 0.6, Math.sin(angle) * radius);
      group.add(cloud);
    }
    group.add(glowSprite('rgba(170,200,255,.7)', 'rgba(60,50,140,.2)', 1.7));
  } else if (archetype === 'cosmos') {
    const random = seededRandom(entry.id);
    const positions = new Float32Array(1800 * 3);
    const colors = new Float32Array(1800 * 3);
    for (let i = 0; i < 1800; i++) {
      const r = 0.25 + random() * 0.85;
      const phi = Math.acos(1 - 2 * random());
      const theta = random() * Math.PI * 2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.cos(phi) * 0.8;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      colors[i * 3] = 0.55 + random() * 0.4;
      colors[i * 3 + 1] = 0.7 + random() * 0.25;
      colors[i * 3 + 2] = 1;
    }
    const web = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(positions, 3)).setAttribute('color', new THREE.BufferAttribute(colors, 3)),
      new THREE.PointsMaterial({ size: 0.035, vertexColors: true, transparent: true, opacity: 0.82, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    group.add(web);
    const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.95, 2), basic(0x6da5ff, 0.09, true));
    group.add(shell);
    group.add(glowSprite('rgba(180,210,255,.7)', 'rgba(40,70,160,.2)', 2.2));
  } else {
    const fallback = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 1), std(accent, { emissive: accent, emissiveIntensity: 0.25 }));
    group.add(fallback);
    group.add(glowSprite('rgba(180,240,255,.6)', 'rgba(30,100,150,.18)', 1.2));
  }

  group.scale.setScalar(0.84);
  group.userData.targetScale = 1;
  return group;
}

function archetypeFor(entry) {
  return ID_ARCHETYPE[entry.id] || CATEGORY_ARCHETYPE[entry.category] || 'object';
}

function initScene() {
  const host = $('stage');
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(host.clientWidth || window.innerWidth, host.clientHeight || window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  host.appendChild(renderer.domElement);
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.setAttribute('aria-label', '拖动旋转对象；滚轮下潜质量');

  scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x04070b, 0.028);
  const width = host.clientWidth || window.innerWidth;
  camera = new THREE.PerspectiveCamera(42, width / (host.clientHeight || window.innerHeight), 0.1, 100);
  camera.position.set(width < 700 ? 1.1 : 0.72, 0.18, 9.4);
  camera.lookAt(0, 0, 0);

  world = new THREE.Group();
  scene.add(world);

  const ambient = new THREE.AmbientLight(0x8ca6b8, 0.55);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xfff1dc, 1.5);
  key.position.set(3.2, 4.5, 5.6);
  scene.add(key);
  const gold = new THREE.PointLight(0xffb766, 16, 16, 2);
  gold.position.set(-3.4, 1.5, 3.1);
  scene.add(gold);
  const cool = new THREE.PointLight(0x5bb6d8, 12, 15, 2);
  cool.position.set(3.9, -1.5, 2.5);
  scene.add(cool);

  const starGeo = new THREE.BufferGeometry();
  const starCount = 760;
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const radius = 8 + Math.random() * 18;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(1 - 2 * Math.random());
    starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[i * 3 + 1] = radius * Math.cos(phi) * 0.9;
    starPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const tint = Math.random();
    starColors[i * 3] = 0.5 + tint * 0.4;
    starColors[i * 3 + 1] = 0.42 + tint * 0.45;
    starColors[i * 3 + 2] = 0.3 + tint * 0.55;
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
  stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
    size: 0.035, vertexColors: true, transparent: true, opacity: 0.68,
    blending: THREE.AdditiveBlending, depthWrite: false
  }));
  scene.add(stars);

  ringGroup = new THREE.Group();
  ringGroup.visible = false;
  world.add(ringGroup);
  for (let i = 0; i < bands.length; i++) {
    const ringMesh = new THREE.Mesh(
      new THREE.TorusGeometry(2.55, 0.006, 6, 128),
      basic(0x6f8490, 0.1, true)
    );
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.userData.index = i;
    ringGroup.add(ringMesh);
    ringMeshes.push(ringMesh);
  }

  platform = new THREE.Mesh(
    new THREE.CircleGeometry(1.45, 64),
    new THREE.MeshBasicMaterial({ color: 0x5ca7b5, transparent: true, opacity: 0.1, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false })
  );
  platform.rotation.x = -Math.PI / 2;
  platform.position.y = -0.72;
  world.add(platform);
  const platformRing = new THREE.Mesh(
    new THREE.TorusGeometry(1.4, 0.012, 6, 128),
    basic(0xffd37a, 0.28, true)
  );
  platformRing.rotation.x = Math.PI / 2;
  platformRing.position.y = -0.72;
  world.add(platformRing);

  function applyMassTheme(theme) {
    const light = theme === 'light';
    massLight = light;
    scene.fog.color.set(light ? 0xdce8ef : 0x04070b);
    scene.fog.density = light ? 0.016 : 0.028;
    renderer.toneMappingExposure = light ? 1.24 : 1.08;
    ambient.color.set(light ? 0xffffff : 0x8ca6b8); ambient.intensity = light ? 0.98 : 0.55;
    key.color.set(light ? 0xfff3e3 : 0xfff1dc); key.intensity = light ? 2.0 : 1.5;
    gold.color.set(light ? 0xd6a35f : 0xffb766); gold.intensity = light ? 4.5 : 16;
    cool.color.set(light ? 0x6d9db1 : 0x5bb6d8); cool.intensity = light ? 4 : 12;
    stars.material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    stars.material.color.set(light ? 0x637785 : 0xffffff);
    stars.material.opacity = light ? 0.2 : 0.68;
    platform.material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
    platform.material.color.set(light ? 0x8aa9b8 : 0x5ca7b5);
    platform.material.opacity = light ? 0.18 : 0.1;
    ringMeshes.forEach(ring => { ring.material.color.set(light ? 0x6d7f88 : 0x6f8490); ring.material.opacity = light ? 0.18 : 0.1; });
    if (objectGlow) { objectGlow.material.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending; objectGlow.material.opacity = light ? 0.32 : 0.55; }
  }
  applyMassTheme(currentTheme());
  watchTheme(applyMassTheme);

  const gridGeometry = new THREE.PlaneGeometry(5.4, 5.4, 28, 28);
  gridBase = Array.from(gridGeometry.attributes.position.array);
  gridMesh = new THREE.Mesh(gridGeometry, new THREE.MeshBasicMaterial({
    color: 0x526d79, wireframe: true, transparent: true, opacity: 0.13,
    blending: THREE.AdditiveBlending, depthWrite: false
  }));
  gridMesh.rotation.x = -Math.PI / 2;
  gridMesh.position.y = -2.15;
  world.add(gridMesh);

  const axisMaterial = new THREE.LineBasicMaterial({ color: 0xffd37a, transparent: true, opacity: 0.1 });
  for (const x of [-2.55, 2.55]) {
    const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x, -8, 0), new THREE.Vector3(x, 8, 0)]);
    world.add(new THREE.Line(geometry, axisMaterial));
  }

  objectGlow = glowSprite('rgba(255,230,180,.45)', 'rgba(80,100,160,.12)', 2.5);
  world.add(objectGlow);

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
        if (material.map) material.map.dispose();
        material.dispose();
      }
    }
  });
}

function bandForLog(log) {
  let index = 0;
  const bucket = Math.floor(log);
  for (let i = 0; i < bands.length; i++) {
    if (bucket >= bands[i].from && bucket <= bands[i].to) index = i;
  }
  return { band: bands[index], index };
}

function updateRings(index) {
  for (const ringMesh of ringMeshes) {
    const distance = Math.abs(ringMesh.userData.index - index);
    const active = ringMesh.userData.index === index;
    ringMesh.position.y = (ringMesh.userData.index - index) * 0.58;
    ringMesh.material.color.set(active ? 0xffd37a : 0x6f8490);
    ringMesh.material.opacity = active ? 0.45 : Math.max(0.025, 0.12 - distance * 0.012);
    ringMesh.scale.setScalar(active ? 1.02 : 0.98);
  }
}

function updateGrid(depth) {
  const array = gridMesh.geometry.attributes.position.array;
  for (let i = 0; i < array.length / 3; i++) {
    const x = gridBase[i * 3];
    const y = gridBase[i * 3 + 1];
    const radius = Math.sqrt(x * x + y * y);
    array[i * 3 + 2] = -depth * 1.65 * Math.exp(-radius * radius * 0.48) - 0.02 * Math.sin(radius * 3.5);
  }
  gridMesh.geometry.attributes.position.needsUpdate = true;
  gridMesh.geometry.computeVertexNormals();
}

function buildSceneObject(entry) {
  if (objectGroup) {
    world.remove(objectGroup);
    disposeGroup(objectGroup);
  }
  const archetype = entry.zeroMass ? 'photon' : archetypeFor(entry);
  objectGroup = entry.zeroMass ? createPhoton() : buildObject(entry, archetype);
  objectGroup.position.y = 0;
  world.add(objectGroup);
  objectGroup.userData.targetScale = 1;
  objectGlow.scale.setScalar(entry.zeroMass ? 2.4 : entry.category === '黑洞' ? 2.8 : 2.2);
  objectGlow.position.y = 0;
}

function createPhoton() {
  const group = new THREE.Group();
  const core = sphere(0.24, basic(0xfff3c4, 0.95, true));
  group.add(core);
  for (let i = 0; i < 4; i++) {
    const r = ring(0.42 + i * 0.2, 0.012, i % 2 ? 0xffd37a : 0x8fefff, 0.5);
    r.rotation.set(Math.PI / 2 + i * 0.7, i * 0.5, i * 0.2);
    group.add(r);
  }
  group.add(glowSprite('rgba(255,250,210,.95)', 'rgba(255,190,80,.3)', 2.4));
  group.userData.spin = true;
  return group;
}

function shortName(entry) {
  return (entry.title || entry.id).split('：')[0].trim();
}

function englishName(entry) {
  return (entry.titleEn || entry.id.split('.')[1] || '').replaceAll('-', ' ').toUpperCase();
}

function englishTitle(entry) {
  if (entry.titleEn) return entry.titleEn;
  return (entry.id.split('.')[1] || '').replaceAll('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function typeLabel(type) {
  const zh = { total: '总质量', baryonic: '重子质量', stellar: '恒星质量', dynamical: '动力学质量', mass: '质量' };
  const en = { total: 'Total mass', baryonic: 'Baryonic mass', stellar: 'Stellar mass', dynamical: 'Dynamical mass', mass: 'Mass' };
  return isEnglish() ? (en[type] || type || '—') : (zh[type] || type || '—');
}

const CATEGORY_EN = {
  '基本粒子': 'Elementary particles', '黑洞': 'Black holes', '恒星': 'Stars',
  '彗星与小行星': 'Comets & asteroids', '行星': 'Planets', '车辆': 'Vehicles',
  '星系': 'Galaxies', '星系团': 'Galaxy clusters', '细胞器': 'Organelles',
  '宇宙尺度': 'Cosmic scale', '大尺度结构': 'Large-scale structure', '卫星': 'Moons',
  '人体器官': 'Human organs', '系外行星': 'Exoplanets', '建筑': 'Buildings',
  '水利工程': 'Dams & waterworks', '船舶': 'Ships', '强子': 'Hadrons',
  '人体': 'Human body', '小行星': 'Asteroids', '桥梁': 'Bridges',
  '矮行星': 'Dwarf planets', '星系群': 'Galaxy groups', '规范玻色子': 'Gauge bosons',
  '动物': 'Animals', '蛋白质': 'Proteins', '哺乳动物': 'Mammals', '病毒': 'Viruses',
  '生殖细胞': 'Germ cells', '行星质量伴星': 'Planetary-mass companions', '血细胞': 'Blood cells',
  '药品': 'Medicine', '物理常数': 'Physical constants', '卫星与小天体': 'Moons & small bodies',
  '硬币': 'Coins', '原子': 'Atoms', '神经细胞': 'Neurons', '能源设备': 'Energy equipment',
  '日常五金': 'Everyday hardware', '超星系团': 'Superclusters', '单细胞生物': 'Single-celled life',
  '飞行器': 'Aircraft', '分子': 'Molecules', '分子机器': 'Molecular machines',
  '古生物': 'Paleontology', '轨道车辆': 'Rail vehicles', '航天器': 'Spacecraft',
  '褐矮星': 'Brown dwarfs', '肌细胞': 'Muscle cells', '交通工具': 'Vehicles',
  '矿物颗粒': 'Mineral grains', '昆虫': 'Insects', '乐器': 'Musical instruments',
  '原子核': 'Atomic nuclei', '气象液滴': 'Weather droplets', '人体细胞': 'Human cells',
  '日常物品': 'Everyday objects', '植物叶片': 'Plant leaves'
};
function categoryLabel(value) { return CATEGORY_EN[value] || value; }

function uncertaintyText(entry) {
  const uncertainty = entry.mass?.uncertainty;
  if (!uncertainty) return '—';
  const value = Number(uncertainty.value);
  const unit = uncertainty.unit || '';
  if (unit === 'relative' && Number.isFinite(value)) {
    if (value >= 0.01) return `${(value * 100).toPrecision(2)}%`;
    const exponent = Math.floor(Math.log10(Math.abs(value)));
    const coefficient = (value / 10 ** exponent).toFixed(1);
    return `${coefficient}×${powText(exponent)}`;
  }
  return `${fmt(value, 2)} ${unit}`;
}

function methodText(entry) {
  const method = entry.mass?.method;
  if (!method) return '—';
  const zh = {
    'satellite orbits and gravity-field modeling': '卫星轨道 / 引力场',
    'orbital dynamics': '轨道动力学',
    'gravitational lensing': '引力透镜',
    'stellar dynamics': '恒星动力学',
    'pulsar timing': '脉冲星计时',
    'spectral and photometric modeling': '光谱 / 测光',
    'direct measurement': '直接测量',
    'Penning trap': 'Penning 阱'
  };
  const en = {
    'satellite orbits and gravity-field modeling': 'Satellite orbit / gravity field',
    'orbital dynamics': 'Orbital dynamics',
    'gravitational lensing': 'Gravitational lensing',
    'stellar dynamics': 'Stellar dynamics',
    'pulsar timing': 'Pulsar timing',
    'spectral and photometric modeling': 'Spectra / photometry',
    'direct measurement': 'Direct measurement',
    'Penning trap': 'Penning trap'
  };
  if (isEnglish()) return en[method] || (method.length > 24 ? method.slice(0, 23) + '…' : method);
  return zh[method] || (method.length > 18 ? method.slice(0, 17) + '…' : method);
}

function ratioLine(entry) {
  if (entry.zeroMass) return isEnglish() ? 'Zero mass · outside the logarithmic order' : '零质量 · 不参与对数排序';
  const value = Number(entry.quantity.value);
  const human = value / HUMAN_MASS;
  const earth = value / EARTH_MASS;
  const sun = value / SUN_MASS;
  const unit = isEnglish() ? 'adult humans' : '个成人';
  const humanText = `≈ ${formatRatio(human)} ${unit}`;
  if (value >= SUN_MASS) return `${humanText} · ≈ ${formatRatio(sun)} ${isEnglish() ? 'Suns' : '个太阳'}`;
  if (value >= EARTH_MASS * 0.05) return `${humanText} · ≈ ${formatRatio(earth)} ${isEnglish() ? 'Earths' : '个地球'}`;
  return humanText;
}

function formatRatio(value) {
  if (!Number.isFinite(value)) return '—';
  if (value === 1) return '1';
  if (value >= 0.1 && value < 10) return value.toPrecision(2).replace(/\.0$/, '');
  if (value >= 10 && value < 10000) return value.toLocaleString('zh-CN', { maximumSignificantDigits: 3 });
  const exponent = Math.floor(Math.log10(value));
  const coefficient = (value / 10 ** exponent).toFixed(1).replace(/\.0$/, '');
  return `${coefficient}×${powText(exponent)}`;
}

function isEnglish(){return document.documentElement.dataset.lang==='en'}
function bandText(band){return isEnglish()&&band.labelEn?band.labelEn:band.label}

function updateUI(entry) {
  const zero = Boolean(entry.zeroMass);
  const band = zero ? { id: 'ZERO', label: '零质量特例', labelEn: 'Zero-mass case', from: 0, to: 0 } : bandForLog(logOf(Number(entry.quantity.value))).band;
  const category = entry.category || '质量对象';
  const name = isEnglish() ? englishTitle(entry) : shortName(entry);
  const en = englishName(entry);
  $('category').textContent = isEnglish() ? categoryLabel(category) : category;
  $('band').textContent = zero ? 'ZERO' : band.id;
  $('name').textContent = name;
  $('nameEn').textContent = isEnglish() ? '' : en;
  $('value').textContent = entry.displayValue || `${entry.quantity.value} ${entry.quantity.unit}`;
  const measureEn = `${englishTitle(entry)} ${entry.mass?.includesDarkMatter === false ? 'total mass, excluding dark matter' : 'mass'}. Method: ${methodText(entry)}.`;
  $('measure').textContent = isEnglish() ? measureEn : (entry.quantity.measure || '无口径说明').slice(0, 160);
  $('measure').dataset.en = measureEn;
  $('type').textContent = zero ? (isEnglish() ? 'Rest mass' : '静质量') : typeLabel(entry.mass?.type);
  $('dark').textContent = zero ? '—' : entry.mass?.includesDarkMatter === true ? (isEnglish() ? 'Includes dark matter' : '含暗物质') : entry.mass?.includesDarkMatter === false ? (isEnglish() ? 'Excludes' : '不含') : (isEnglish() ? 'Not specified' : '未注明');
  $('method').textContent = zero ? '实验上限' : methodText(entry);
  $('uncertainty').textContent = zero ? '≤ 10⁻⁶³ kg' : uncertaintyText(entry);
  $('ratio').innerHTML = ratioLine(entry).replace(/≈ /g, '≈ <strong>').replace(/ (个|×|零)/g, '</strong> $1');
  $('ratio').innerHTML = ratioLine(entry).replace(/≈ ([^·]+)/, '≈ <strong>$1</strong>');
  $('summary').textContent = isEnglish()
    ? `${englishTitle(entry)} · ${entry.displayValue}. ${typeLabel(entry.mass?.type)}${entry.mass?.includesDarkMatter === false ? ', excluding dark matter' : ''}; measured via ${methodText(entry)}.`
    : (entry.summary || '');
  $('article').href = articleUrl(entry);
  $('article').textContent = isEnglish() ? 'Read this object ↗' : '阅读这个对象 ↗';
  $('sliderCurrent').textContent = zero ? (isEnglish() ? '0 · Photon' : '0 · 光子') : `${state.log.toFixed(2)} · ${name}`;
  const range = $('slider');
  if (range) {
    const aria = zero ? '零质量 · 光子' : `${name} · ${powText(Math.floor(logOf(Number(entry.quantity.value))))} kg`;
    range.setAttribute('aria-valuetext', aria);
  }
  $('bandMeta').textContent = zero ? (isEnglish()?'Zero-mass case · outside the 16 bands':'零质量特例 · 不参与 16 带排序') : `${band.id} · ${powText(band.from)}–${powText(band.to)} kg`;
  $('depthValue').textContent = zero ? '0' : powText(Math.floor(state.log));
  $('depthBand').textContent = zero ? (isEnglish()?'ZERO MASS · zero-mass case':'ZERO MASS · 零质量特例') : `${band.id} · ${bandText(band)}`;
  $('slider').disabled = zero;
  $('photon').classList.toggle('active', zero);

  const rows = $('bandRail').querySelectorAll('.band-row');
  for (const row of rows) row.classList.toggle('active', !zero && row.dataset.band === band.id);
  if (immersive) immersive.dataset.band = zero ? 'zero' : band.id;
  const glow = zero ? 'rgba(140,200,255,.2)' : ['rgba(80,130,180,.2)', 'rgba(80,160,160,.18)', 'rgba(140,140,90,.16)', 'rgba(180,120,50,.18)', 'rgba(200,150,60,.18)', 'rgba(180,150,80,.14)', 'rgba(160,120,80,.14)', 'rgba(120,140,160,.12)'][Math.min(7, Math.floor(band.from / 10) + 4)];
  if (immersive) immersive.style.setProperty('--stage-glow', glow);
}

function selectEntry(entry, options = {}) {
  if (!entry) return;
  const zero = Boolean(entry.zeroMass);
  const log = zero ? -40 : logOf(Number(entry.quantity.value));
  state.entry = entry;
  state.zero = zero;
  state.log = log;
  const bandInfo = zero ? { band: { id: 'ZERO', label: '零质量特例', labelEn: 'Zero-mass case', from: -40, to: -40 }, index: 0 } : bandForLog(log);
  state.bandIndex = bandInfo.index;
  if (!options.fromSlider) $('slider').value = log;
  $('slider').disabled = zero;
  updateUI(entry);
  updateRings(state.bandIndex);
  updateGrid(zero ? 0 : (log + 40) / 93);
  if (!state.currentObjectId || state.currentObjectId !== entry.id || zero) {
    state.currentObjectId = entry.id;
    buildSceneObject(entry);
  }
  if (options.fromSlider) {
    $('slider').value = log;
  }
}

function nearestEntry(log) {
  let nearest = state.positive[0];
  let distance = Infinity;
  for (const entry of state.positive) {
    const currentDistance = Math.abs(logOf(Number(entry.quantity.value)) - log);
    if (currentDistance < distance) {
      distance = currentDistance;
      nearest = entry;
    }
  }
  return nearest;
}

function setLog(next, options = {}) {
  const log = clamp(Number(next), -40, 53);
  if (state.zero) {
    state.zero = false;
    $('slider').disabled = false;
  }
  const entry = nearestEntry(log);
  state.log = log;
  $('slider').value = log;
  if (entry && entry.id !== state.currentObjectId) {
    selectEntry(entry, { fromSlider: true });
  } else {
    const bandInfo = bandForLog(log);
    state.bandIndex = bandInfo.index;
    updateRings(state.bandIndex);
    updateGrid((log + 40) / 93);
    $('sliderCurrent').textContent = `${log.toFixed(2)} · ${shortName(entry || state.entry)}`;
    if (entry && state.entry?.id === entry.id) {
      $('depthValue').textContent = powText(Math.floor(log));
      $('depthBand').textContent = `${bandInfo.band.id} · ${bandText(bandInfo.band)}`;
    }
  }
  if (!options.fromSlider) $('slider').value = log;
}

function renderTicks() {
  const ticks = [-40, -20, 0, 20, 40, 53];
  const container = $('ticks');
  container.replaceChildren();
  for (const value of ticks) {
    const span = document.createElement('span');
    span.innerHTML = `<i></i>${powText(value)}`;
    container.append(span);
  }
}

function renderBandRail() {
  const container = $('bandRail');
  container.replaceChildren();
  for (const band of bands) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'band-row';
    button.dataset.band = band.id;
    button.innerHTML = `<b>${band.id}</b><span>${bandText(band)}</span><small>${powText(band.from)}–${powText(band.to)}</small>`;
    button.title = `${band.id} · ${bandText(band)} · ${powText(band.from)}–${powText(band.to)} kg`;
    button.addEventListener('click', () => {
      stopTour();
      const mid = (band.from + band.to) / 2;
      const candidates = state.positive.filter((entry) => {
        const log = logOf(Number(entry.quantity.value));
        return log >= band.from && log <= band.to;
      });
      const chosen = candidates.reduce((best, entry) => {
        if (!best) return entry;
        return Math.abs(logOf(entry.quantity.value) - mid) < Math.abs(logOf(best.quantity.value) - mid) ? entry : best;
      }, null);
      if (chosen) selectEntry(chosen);
      else setLog(mid);
    });
    container.append(button);
  }
}

function stopTour() {
  state.tour = false;
  $('tour').classList.remove('active');
  $('tour').setAttribute('aria-pressed', 'false');
  $('tour').innerHTML = isEnglish() ? 'Begin descent <span>↗</span>' : '开始下潜 <span>↗</span>';
}

function startTour() {
  if (state.tour) {
    stopTour();
    return;
  }
  if (state.zero) selectEntry(state.entryById.get('mass.electron') || state.positive[0]);
  if (state.log >= 53) setLog(-40);
  state.tour = true;
  $('tour').classList.add('active');
  $('tour').setAttribute('aria-pressed', 'true');
  $('tour').innerHTML = isEnglish() ? 'Pause descent <span>Ⅱ</span>' : '暂停下潜 <span>Ⅱ</span>';
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
  if (objectGroup) {
    objectGroup.rotation.y += dx * 0.007;
    objectGroup.rotation.x = clamp(objectGroup.rotation.x + dy * 0.003, -0.75, 0.75);
  }
  lastPointer = { x: event.clientX, y: event.clientY };
}

function onPointerUp() {
  dragging = false;
  lastPointer = null;
}

function onWheel(event) {
  const direction = event.deltaY > 0 ? 1 : -1;
  // 到达对数尺两端后交还给页面，保证下方知识层仍能正常滚动。
  if (!state.zero && ((direction > 0 && state.log >= 52.9) || (direction < 0 && state.log <= -40))) return;
  event.preventDefault();
  const now = performance.now();
  if (now - lastWheel < 70) return;
  lastWheel = now;
  stopTour();
  if (state.zero) {
    selectEntry(state.positive[0]);
    return;
  }
  setLog(state.log + (event.deltaY > 0 ? 1.2 : -1.2));
}

function onKeyDown(event) {
  if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;
  if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
    event.preventDefault();
    stopTour();
    setLog(state.log + 1);
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
    event.preventDefault();
    stopTour();
    setLog(state.log - 1);
  } else if (event.key === 'Home') {
    event.preventDefault();
    stopTour();
    selectEntry(state.entryById.get('mass.electron') || state.positive[0]);
  } else if (event.key === 'End') {
    event.preventDefault();
    stopTour();
    setLog(53);
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
  camera.position.x = width < 700 ? 1.1 : 0.72;
  camera.updateProjectionMatrix();
}

function animate(now) {
  requestAnimationFrame(animate);
  const delta = Math.min(0.05, (now - (state.lastNow || now)) / 1000);
  state.lastNow = now;
  if (state.tour) {
    if (state.log >= 53) {
      stopTour();
    } else {
      setLog(state.log + delta * 5.1, { fromSlider: true });
    }
  }
  if (objectGroup) {
    if (!dragging && !reducedMotion) objectGroup.rotation.y += 0.0011;
    const target = objectGroup.userData.targetScale || 1;
    objectGroup.scale.x += (target - objectGroup.scale.x) * 0.12;
    objectGroup.scale.y = objectGroup.scale.z = objectGroup.scale.x;
    if (Math.abs(objectGroup.scale.x - target) < 0.002) objectGroup.scale.setScalar(target);
    if (!reducedMotion && objectGroup.userData.disk) objectGroup.userData.disk.rotation.z += 0.006;
    if (!reducedMotion && objectGroup.userData.galaxy) objectGroup.userData.galaxy.rotation.y += 0.003;
  }
  objectGlow.material.opacity = reducedMotion ? 0.34 : 0.34 + Math.sin(now * 0.001) * 0.06;
  if (!reducedMotion) {
    stars.rotation.y += 0.00022;
    stars.rotation.x += 0.00006;
  }
  renderer.render(scene, camera);
}

async function load() {
  const response = await fetch('./entries.json');
  if (!response.ok) throw new Error('数据加载失败');
  const entries = await response.json();
  state.entries = entries;
  state.entryById = new Map(entries.map((entry) => [entry.id, entry]));
  state.positive = entries.filter((entry) => !entry.zeroMass && Number.isFinite(Number(entry.quantity?.value)) && Number(entry.quantity.value) > 0).sort((a, b) => Number(a.quantity.value) - Number(b.quantity.value));
  initScene();
  if ('ResizeObserver' in window) new ResizeObserver(onResize).observe($('stage'));
  renderTicks();
  renderBandRail();
  const earth = state.entryById.get('mass.earth') || state.positive[Math.floor(state.positive.length * 0.6)];
  const requested = new URLSearchParams(location.search).get('entry');
  const requestedEntry = requested ? state.entryById.get(requested) : null;
  const initial = requestedEntry || earth;
  selectEntry(initial);
  $('slider').value = initial.zeroMass ? -40 : logOf(Number(initial.quantity.value));
  requestAnimationFrame(animate);
}

$('slider').addEventListener('input', (event) => {
  stopTour();
  setLog(Number(event.target.value), { fromSlider: true });
});
$('tour').addEventListener('click', startTour);
$('reset').addEventListener('click', () => {
  stopTour();
  const earth = state.entryById.get('mass.earth') || state.positive[0];
  if (earth) selectEntry(earth);
});
$('photon').addEventListener('click', () => {
  stopTour();
  const photon = state.entryById.get('mass.photon');
  if (!photon) return;
  if (state.zero) {
    const earth = state.entryById.get('mass.earth') || state.positive[0];
    if (earth) selectEntry(earth);
  } else {
    selectEntry(photon);
  }
});

document.addEventListener('atlas-language', () => {
  renderBandRail();
  if (state.entry) updateUI(state.entry);
  $('tour').innerHTML = state.tour
    ? (isEnglish() ? 'Pause descent <span>Ⅱ</span>' : '暂停下潜 <span>Ⅱ</span>')
    : (isEnglish() ? 'Begin descent <span>↗</span>' : '开始下潜 <span>↗</span>');
});

load().catch((error) => {
  console.error(error);
  $('summary').textContent = '原型数据未能加载：' + error.message;
  $('stage').innerHTML = '<div style="position:absolute;inset:0;display:grid;place-items:center;color:#8ea6b8;font-size:12px;letter-spacing:.1em">3D 场景加载失败</div>';
});
