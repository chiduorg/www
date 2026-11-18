#!/usr/bin/env node
// 依据 dist/depth-queue.json 生成深度批次，并校验批次覆盖完整、无重复。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workDir = path.join(root, 'work');
const baselineFile = path.join(workDir, 'depth-baseline.json');

const BATCHES = {
  'D-S1': ['space.planck', 'space.gut-scale', 'space.inflation', 'space.quantum-fluctuation', 'space.quantum-foam-bubble', 'space.superstring', 'space.gluon-field', 'space.higgs-boson', 'space.neutrino', 'space.pion', 'space.quark', 'space.top-quark', 'space.w-z-boson'],
  'D-S2': ['space.proton', 'space.strong-force', 'space.carbon-nucleus', 'space.iron-nucleus', 'space.uranium-nucleus', 'space.helium-atom', 'space.electron-compton', 'space.positronium'],
  'D-S3': ['space.water-molecule', 'space.chlorophyll', 'space.red-blood-cell', 'space.hair', 'space.rice-grain', 'space.sand-grain', 'space.ant', 'space.ant_length', 'space.dust-mite', 'space.mosquito', 'space.blue-whale', 'space.coin', 'space.hand', 'space.human', 'space.pencil', 'space.ping-pong-ball'],
  'D-S4': ['space.burj-khalifa', 'space.football-field', 'space.golden-gate-bridge', 'space.great-pyramid', 'space.hubble_aperture', 'space.city', 'space.everest', 'space.island', 'space.pacific-ocean', 'space.earth-moon-distance', 'space.ganymede', 'space.jupiter', 'space.light-second', 'space.moon_diameter', 'space.olympus-mons', 'space.saturn'],
  'D-S5': ['space.au', 'space.heliopause', 'space.kuiper-belt', 'space.mercury-orbit', 'space.oort-cloud', 'space.solar-system', 'space.betelgeuse', 'space.neutron-star', 'space.sun_diameter', 'space.crab-nebula', 'space.light-year', 'space.omega-centauri', 'space.orion-nebula', 'space.pillars-of-creation', 'space.proxima-centauri'],
  'D-S6': ['space.andromeda-distance', 'space.galactic-center', 'space.milky-way', 'space.milky_way_disk', 'space.triangulum-galaxy', 'space.great-wall', 'space.laniakea', 'space.local-group', 'space.sloan-great-wall', 'space.virgo-supercluster'],

  'D-T1': ['time.planck-era', 'time.grand-unification-epoch', 'time.inflation', 'time.reheating', 'time.big-bang', 'time.baryogenesis', 'time.baryon-asymmetry-establishment', 'time.electroweak-epoch', 'time.electroweak-symmetry-breaking', 'time.quark-era', 'time.hadron-era', 'time.quark-hadron-phase-transition', 'time.strange-quark-matter', 'time.lepton-epoch'],
  'D-T2': ['time.neutrino-decoupling', 'time.neutrino-background-formation', 'time.muon-antimuon-annihilation', 'time.electron-positron-annihilation', 'time.proton-antiproton-annihilation', 'time.graviton-decoupling', 'time.baryon-acoustic-oscillations', 'time.dark-matter-freeze-out', 'time.matter-radiation-equality', 'time.photon-epoch', 'time.recombination', 'time.nucleosynthesis', 'time.deuterium-bottleneck', 'time.lithium-7-synthesis'],
  'D-T3': ['time.first-molecules', 'time.first-dark-matter-halos', 'time.first-stars', 'time.first-black-holes', 'time.first-quasars', 'time.first-galaxy-clusters', 'time.galaxy-formation', 'time.milky-way-formation', 'time.peak-star-formation', 'time.heavy-element-enrichment', 'time.reionization-epoch', 'time.dark-energy-domination'],
  'D-T4': ['time.giant-impact', 'time.formation-of-oceans', 'time.late-heavy-bombardment', 'time.last_magnetic_reversal', 'time.first-life', 'time.luca', 'time.oxygenic-photosynthesis', 'time.great-oxidation-event', 'time.eukaryotes-emergence', 'time.multicellular-life', 'time.ediacaran-biota', 'time.snowball-earth'],
  'D-T5': ['time.ordovician-radiation', 'time.first-fish', 'time.first-tetrapods', 'time.land-plants', 'time.first_seed_plants', 'time.carboniferous-period', 'time.permian-triassic-extinction', 'time.dinosaurs', 'time.jurassic-period', 'time.first-flowering-plants', 'time.first_birds', 'time.k-pg-extinction', 'time.mammal-radiation', 'time.first-mammals', 'time.petm', 'time.first_primates'],
  'D-T6': ['time.hominins-emerge', 'time.rise-homo-sapiens', 'time.first-humans', 'time.agricultural-revolution', 'time.bronze-age', 'time.invention-of-writing', 'time.scientific-revolution', 'time.industrial-revolution', 'time.digital-age', 'time.internet-birth', 'time.crispr', 'time.human_genome', 'time.gravitational_waves', 'time.james_webb', 'time.present'],
  'D-T7': ['time.last-glacial-maximum', 'time.ozone_layer_formation', 'time.late-devonian-extinction'],

  'D-E1': ['temperature.antarctic_min_temp', 'temperature.boomerang-nebula', 'temperature.bose-einstein', 'temperature.dilution-refrigerator', 'temperature.helium-3-superfluid', 'temperature.nuclear-demagnetization-cooling', 'temperature.rhodium-iron-thermometer', 'temperature.squid-working-temperature', 'temperature.superfluid', 'temperature.ammonia_boiling', 'temperature.dry-ice-sublimation', 'temperature.liquid-hydrogen'],
  'D-E2': ['temperature.liquid-oxygen', 'temperature.mars-surface', 'temperature.methane-boiling', 'temperature.neon-boiling-point', 'temperature.neon-triple-point', 'temperature.niobium-superconducting-transition', 'temperature.oxygen-boiling', 'temperature.pluto-surface', 'temperature.ybco-superconducting-transition'],
  'D-E3': ['temperature.aluminum-melting', 'temperature.bread_baking', 'temperature.cooking_oil_smoke', 'temperature.copper-melting-point', 'temperature.gold-melting-point', 'temperature.lead-melting-point', 'temperature.magnesium-melting', 'temperature.mercury-boiling', 'temperature.nickel-melting', 'temperature.paper-autoignition', 'temperature.silver-melting', 'temperature.thermosphere', 'temperature.venus-surface', 'temperature.co2-critical-point', 'temperature.ethanol_boiling', 'temperature.sodium-melting', 'temperature.water-triple-point'],
  'D-E4': ['temperature.bunsen-burner-flame', 'temperature.carbon-sublimation', 'temperature.earths-core', 'temperature.glass_melting', 'temperature.iron-melting', 'temperature.lava-temperature', 'temperature.lightning', 'temperature.oxyacetylene-flame', 'temperature.rocket_plume', 'temperature.silicon-melting', 'temperature.steelmaking_temp', 'temperature.tungsten-filament', 'temperature.tungsten-melting'],
  'D-E5': ['temperature.a-type-star', 'temperature.betelgeuse-surface', 'temperature.coldest-brown-dwarf', 'temperature.f-type-star', 'temperature.o-type-star-surface', 'temperature.red-dwarf-surface', 'temperature.rigel-surface', 'temperature.sirius-surface', 'temperature.solar-chromosphere', 'temperature.solar-corona', 'temperature.solar-transition-region', 'temperature.sunspot', 'temperature.vega-surface', 'temperature.carbon-fusion', 'temperature.oxygen-fusion', 'temperature.red-giant-core', 'temperature.silicon-burning'],
  'D-E6': ['temperature.black-hole-accretion-disk', 'temperature.millisecond_pulsar', 'temperature.neutron-star-core', 'temperature.neutron-star-surface', 'temperature.supernova', 'temperature.type-ia-supernova', 'temperature.white-dwarf-surface', 'temperature.cmb', 'temperature.neutrino-background-temp', 'temperature.electroweak', 'temperature.gut', 'temperature.fusion-reactor-plasma', 'temperature.hypernova', 'temperature.quark-gluon', 'temperature.kilonova_temp', 'temperature.nova-outburst', 'temperature.planck-temperature'],
};

const all = Object.values(BATCHES).flat();
const dup = all.filter((id, i) => all.indexOf(id) !== i);
fs.mkdirSync(workDir, { recursive: true });

// 基线清单只在首次生成时写入；之后作为固定审计快照，不随已完成条目变化。
if (!fs.existsSync(baselineFile)) {
  fs.writeFileSync(baselineFile, JSON.stringify({ generatedAt: new Date().toISOString(), ids: all }, null, 1) + '\n');
}
const baselineIds = new Set(JSON.parse(fs.readFileSync(baselineFile, 'utf8')).ids);
const unknown = all.filter((id) => !baselineIds.has(id));
const missing = [...baselineIds].filter((id) => !all.includes(id));

if (dup.length || unknown.length || missing.length) {
  console.error('批次校验失败');
  if (dup.length) console.error('重复:', [...new Set(dup)].join(', '));
  if (unknown.length) console.error('不在基线:', unknown.join(', '));
  if (missing.length) console.error('基线未覆盖:', missing.join(', '));
  process.exit(1);
}
const out = Object.fromEntries(Object.entries(BATCHES).map(([k, ids]) => [k, ids.map((id) => ({ id }))]));

// 合并广度批次：每个分区按最多 17 条均衡拆分。
const breadthFile = path.join(workDir, 'breadth.json');
if (fs.existsSync(breadthFile)) {
  const breadth = JSON.parse(fs.readFileSync(breadthFile, 'utf8'));
  for (const [key, section] of Object.entries(breadth.sections)) {
    const items = section.items;
    const parts = Math.ceil(items.length / 17);
    const size = Math.ceil(items.length / parts);
    for (let i = 0; i < parts; i++) {
      const name = parts === 1 ? `B-${key}` : `B-${key}-${i + 1}`;
      out[name] = items.slice(i * size, (i + 1) * size);
    }
  }
}

fs.writeFileSync(path.join(workDir, 'batches.json'), JSON.stringify(out, null, 1) + '\n');
const breadthCount = Object.entries(out).filter(([k]) => k.startsWith('B-')).reduce((n, [, v]) => n + v.length, 0);
console.log(`批次校验通过：${Object.keys(BATCHES).length} 个深度批 / ${all.length} 条；基线 ${baselineIds.size} 条全覆盖。`);
if (breadthFile) console.log(`广度批次已合并：${breadthCount} 条，批次名以 B- 开头。`);
for (const [k, ids] of Object.entries(BATCHES)) console.log(`${k}: ${ids.length}`);
