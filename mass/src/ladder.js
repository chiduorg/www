import {bands, decadeCount} from './ladder-data.js';

const NOTE_EN = {
  '三代中微子质量本征态、电子与正电子。10⁻⁴⁰–10⁻³⁹ kg 无同口径实测对象，如实留空；光子是零质量特例，不参与阶梯排序。': 'Three neutrino mass eigenstates, the electron and positron. No same-basis measured objects exist between 10⁻⁴⁰–10⁻³⁹ kg, so the interval is left empty; the photon is the zero-mass special case and is not ordered on the ladder.',
  '从组分质量到质子、中子与最轻的原子核。': 'From component masses to the proton, neutron and the lightest nuclei.',
  '顶夸克、W/Z/希格斯，以及水、蛋白质与核酸片段。': 'Top quark, W/Z/Higgs, plus water, proteins and nucleic-acid fragments.',
  '囊泡、噬菌体、病毒与线粒体，质量由几何与密度估算。': 'Vesicles, phages, viruses and mitochondria; masses estimated from geometry and density.',
  '细菌、红细胞、人体细胞、神经元与生殖细胞。': 'Bacteria, red blood cells, human cells, neurons and germ cells.',
  '普朗克质量、沙粒、雨滴、昆虫与桌面物件。': 'Planck mass, sand grains, raindrops, insects and tabletop objects.',
  '器官、新生儿与成人，以及宠物、乐器和摩托车。': 'Organs, newborns and adults, plus pets, instruments and motorcycles.',
  '汽车、卡车、公交车，以及大象、蓝鲸与空间站。': 'Cars, trucks, buses, plus elephants, blue whales and space stations.',
  '船舶、铁塔、大桥与水坝；一律用满载排水量或结构总质量口径。': 'Ships, towers, bridges and dams; consistently using full-load displacement or total structural mass.',
  '彗星、小行星与不规则卫星；质量由轨道、飞越或雷达反演。': 'Comets, asteroids and irregular moons; masses inferred from orbits, flybys or radar.',
  '灵神星、灶神星、谷神星、月球、类地行星与大型冰卫星。': 'Psyche, Vesta, Ceres, the Moon, terrestrial planets and large icy moons.',
  '超级地球、热木星、行星质量伴星，以及天王星、海王星、土星、木星。': 'Super-Earths, hot Jupiters, planetary-mass companions, plus Uranus, Neptune, Saturn and Jupiter.',
  '褐矮星、主序星、白矮星、中子星、恒星级黑洞与引力波并合产物。': 'Brown dwarfs, main-sequence stars, white dwarfs, neutron stars, stellar black holes and gravitational-wave merger products.',
  '中等质量黑洞、银心黑洞、类星体、M87* 与超大质量黑洞。': 'Intermediate-mass black holes, the Galactic Centre black hole, quasars, M87* and supermassive black holes.',
  '麦哲伦云、银河系、仙女座、本星系群、星系团与超星系团；总质量一律含暗物质。': 'Magellanic Clouds, the Milky Way, Andromeda, the Local Group, clusters and superclusters; total masses always include dark matter.',
  '三道大尺度长城，以及哈勃体积与可观测宇宙的普通物质、暗物质、总物质三种口径。': 'Three large-scale walls, plus ordinary matter, dark matter and total matter bases for the Hubble volume and observable universe.',
  '静质量为 0 的粒子没有对数刻度位置；条目只承载标准模型结论与实验上限。': 'Particles with zero rest mass have no logarithmic position; the entry only carries Standard Model conclusions and experimental upper limits.'
};


const ladder = document.querySelector('#mass-ladder');
const summary = document.querySelector('#mass-summary');

const SUP = {'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹','-':'⁻'};
const sup = value => String(value).split('').map(char => SUP[char] || char).join('');

function formatMass(value) {
  if (!(value > 0) || !Number.isFinite(value)) return '—';
  if (value >= 1 && value < 1e9) return `${Number(value.toPrecision(3)).toLocaleString('zh-CN')} kg`;
  const exponent = Math.floor(Math.log10(value));
  const mantissa = value / 10 ** exponent;
  return `${mantissa.toFixed(2)}×10${sup(exponent)} kg`;
}

function decadeOf(value) {
  return Math.floor(Math.log10(value) + 1e-12);
}

function englishAnchorLabel(item) {
  const slug = String(item?.id || '').split('.').slice(-1)[0];
  return slug ? slug.replace(/-/g, ' ').replace(/\b[a-z]/g, char => char.toUpperCase()) : '';
}

function createAnchor(planned, entry) {
  const item = document.createElement('li');
  if (entry) {
    const link = document.createElement('a');
    link.className = 'mass-anchor';
    link.href = `/entry/mass/${entry.id.split('.')[1]}/`;
    const name = document.createElement('span');
    name.className = 'mass-anchor-name';
    name.textContent = entry.title || planned.title;
    if (englishAnchorLabel(entry)) name.dataset.en = englishAnchorLabel(entry);
    const value = document.createElement('span');
    const bound = entry.quantity?.bound === 'upper' ? '≤ ' : entry.quantity?.bound === 'lower' ? '≥ ' : '';
    value.textContent = bound + formatMass(entry.quantity?.value);
    link.append(name, value);
    item.append(link);
  } else {
    const pending = document.createElement('span');
    pending.className = 'mass-anchor is-pending';
    pending.textContent = planned.title;
    if (englishAnchorLabel(planned)) pending.dataset.en = englishAnchorLabel(planned);
    item.append(pending);
  }
  return item;
}

function render(entries) {
  const special = entries.filter(entry => entry.zeroMass === true);
  const laddable = entries.filter(entry => entry.zeroMass !== true);
  const byId = new Map(laddable.map(entry => [entry.id, entry]));
  const covered = new Set(laddable.filter(entry => entry.quantity?.value > 0).map(entry => decadeOf(entry.quantity.value)));
  let populatedBands = 0;

  ladder.replaceChildren();
  for (const band of bands) {
    const inBand = laddable.filter(entry => {
      const decade = decadeOf(entry.quantity?.value || 0);
      return decade >= band.from && decade <= band.to;
    });
    if (inBand.length) populatedBands += 1;

    const section = document.createElement('section');
    section.className = 'mass-band';
    section.setAttribute('aria-labelledby', `band-${band.id}`);

    const head = document.createElement('header');
    head.className = 'mass-band-head';
    const id = document.createElement('p');
    id.className = 'mass-band-id';
    id.textContent = `${band.id} · 10${sup(band.from)}–10${sup(band.to)} kg`;
    const title = document.createElement('h3');
    title.id = `band-${band.id}`;
    title.textContent = band.label;
    if (band.labelEn) title.dataset.en = band.labelEn;
    const note = document.createElement('p');
    note.className = 'mass-band-note';
    note.textContent = band.note;
    if (NOTE_EN[band.note]) note.dataset.en = NOTE_EN[band.note];
    const status = document.createElement('p');
    status.className = 'mass-band-status';
    const live = band.anchors.filter(anchor => byId.has(anchor.id)).length;
    status.textContent = `${live} / ${band.anchors.length} 个锚点已入轴 · 本条带 ${inBand.length} 条`;
    status.dataset.en = `${live} / ${band.anchors.length} anchors placed · ${inBand.length} entries in this band`;
    head.append(id, title, note, status);

    const list = document.createElement('ul');
    list.className = 'mass-anchors';
    const plannedIds = new Set(band.anchors.map(anchor => anchor.id));
    for (const anchor of band.anchors) list.append(createAnchor(anchor, byId.get(anchor.id)));
    for (const entry of inBand) {
      if (!plannedIds.has(entry.id)) list.append(createAnchor({title: entry.title}, entry));
    }
    section.append(head, list);
    ladder.append(section);
  }

  if (special.length) {
    const section = document.createElement('section');
    section.className = 'mass-band mass-band-special';
    section.setAttribute('aria-labelledby', 'band-zero');
    const head = document.createElement('header');
    head.className = 'mass-band-head';
    const id = document.createElement('p');
    id.className = 'mass-band-id';
    id.textContent = 'ZERO · 不参与阶梯排序';
    id.dataset.en = 'ZERO · not part of the ladder ordering';
    const title = document.createElement('h3');
    title.id = 'band-zero';
    title.textContent = '零质量特例';
    title.dataset.en = 'Zero-mass exception';
    const note = document.createElement('p');
    note.className = 'mass-band-note';
    note.textContent = '静质量为 0 的粒子没有对数刻度位置；条目只承载标准模型结论与实验上限。';
    note.dataset.en = NOTE_EN[note.textContent];
    const status = document.createElement('p');
    status.className = 'mass-band-status';
    status.textContent = `${special.length} 条零质量条目`;
    status.dataset.en = `${special.length} zero-mass entries`;
    head.append(id, title, note, status);
    const list = document.createElement('ul');
    list.className = 'mass-anchors';
    for (const entry of special) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.className = 'mass-anchor';
      link.href = `/entry/mass/${entry.id.split('.')[1]}/`;
      link.textContent = entry.title;
      const value = document.createElement('span');
      value.textContent = entry.displayValue || '静质量 0';
      link.append(value);
      item.append(link);
      list.append(item);
    }
    section.append(head, list);
    ladder.append(section);
  }

  ladder.removeAttribute('aria-busy');
  if (summary) {
    const total = entries.length;
    const text = total
      ? `已入库 ${total} 条质量条目（${laddable.length} 条入阶梯，${special.length} 条零质量特例）；${decadeCount} 个十进位覆盖 ${covered.size} 个；16 个覆盖带中 ${populatedBands} 个已有数据。`
      : `当前为空壳：0 条质量条目，16 个覆盖带、${decadeCount} 个十进位已就位，锚点按 M1–M6 分批补入。`;
    summary.textContent = text;
    summary.dataset.en = total
      ? `${total} mass entries in the library (${laddable.length} on the ladder, ${special.length} zero-mass cases); ${covered.size} of ${decadeCount} decades covered; ${populatedBands} of 16 bands populated.`
      : `Empty scaffold: 0 mass entries; 16 bands and ${decadeCount} decades are ready, with anchors arriving in batches M1–M6.`;
  }
}

render([]);
fetch('./entries.json', {cache: 'no-store'})
  .then(response => response.ok ? response.json() : [])
  .then(entries => render(Array.isArray(entries) ? entries : []))
  .catch(() => render([]));
