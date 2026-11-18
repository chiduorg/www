// 118 个元素的骨架数据。构型按 Aufbau 顺序生成，并覆盖已知的基态异常。
// 阶段一只提供身份、位置、构型与闭壳信息；电离能/半径/电负性等数值留到阶段二随条目正文入库。
export const closedShells = [2, 10, 18, 36, 54, 86, 118];
export const periods = [
  {period: 1, start: 1, end: 2, fill: '1s', hub: 2},
  {period: 2, start: 3, end: 10, fill: '2s→2p', hub: 10},
  {period: 3, start: 11, end: 18, fill: '3s→3p', hub: 18},
  {period: 4, start: 19, end: 36, fill: '4s→3d→4p', hub: 36},
  {period: 5, start: 37, end: 54, fill: '5s→4d→5p', hub: 54},
  {period: 6, start: 55, end: 86, fill: '6s→4f→5d→6p', hub: 86},
  {period: 7, start: 87, end: 118, fill: '7s→5f→6d→7p', hub: 118}
];

// [Z, 符号, 中文名, 英文名, 周期, 族(1–18，f 区为 null), 区块, 是否位于 f 区独立行]
const table = [
  [1, 'H', '氢', 'Hydrogen', 1, 1, 's'],
  [2, 'He', '氦', 'Helium', 1, 18, 's'],
  [3, 'Li', '锂', 'Lithium', 2, 1, 's'],
  [4, 'Be', '铍', 'Beryllium', 2, 2, 's'],
  [5, 'B', '硼', 'Boron', 2, 13, 'p'],
  [6, 'C', '碳', 'Carbon', 2, 14, 'p'],
  [7, 'N', '氮', 'Nitrogen', 2, 15, 'p'],
  [8, 'O', '氧', 'Oxygen', 2, 16, 'p'],
  [9, 'F', '氟', 'Fluorine', 2, 17, 'p'],
  [10, 'Ne', '氖', 'Neon', 2, 18, 'p'],
  [11, 'Na', '钠', 'Sodium', 3, 1, 's'],
  [12, 'Mg', '镁', 'Magnesium', 3, 2, 's'],
  [13, 'Al', '铝', 'Aluminium', 3, 13, 'p'],
  [14, 'Si', '硅', 'Silicon', 3, 14, 'p'],
  [15, 'P', '磷', 'Phosphorus', 3, 15, 'p'],
  [16, 'S', '硫', 'Sulfur', 3, 16, 'p'],
  [17, 'Cl', '氯', 'Chlorine', 3, 17, 'p'],
  [18, 'Ar', '氩', 'Argon', 3, 18, 'p'],
  [19, 'K', '钾', 'Potassium', 4, 1, 's'],
  [20, 'Ca', '钙', 'Calcium', 4, 2, 's'],
  [21, 'Sc', '钪', 'Scandium', 4, 3, 'd'],
  [22, 'Ti', '钛', 'Titanium', 4, 4, 'd'],
  [23, 'V', '钒', 'Vanadium', 4, 5, 'd'],
  [24, 'Cr', '铬', 'Chromium', 4, 6, 'd'],
  [25, 'Mn', '锰', 'Manganese', 4, 7, 'd'],
  [26, 'Fe', '铁', 'Iron', 4, 8, 'd'],
  [27, 'Co', '钴', 'Cobalt', 4, 9, 'd'],
  [28, 'Ni', '镍', 'Nickel', 4, 10, 'd'],
  [29, 'Cu', '铜', 'Copper', 4, 11, 'd'],
  [30, 'Zn', '锌', 'Zinc', 4, 12, 'd'],
  [31, 'Ga', '镓', 'Gallium', 4, 13, 'p'],
  [32, 'Ge', '锗', 'Germanium', 4, 14, 'p'],
  [33, 'As', '砷', 'Arsenic', 4, 15, 'p'],
  [34, 'Se', '硒', 'Selenium', 4, 16, 'p'],
  [35, 'Br', '溴', 'Bromine', 4, 17, 'p'],
  [36, 'Kr', '氪', 'Krypton', 4, 18, 'p'],
  [37, 'Rb', '铷', 'Rubidium', 5, 1, 's'],
  [38, 'Sr', '锶', 'Strontium', 5, 2, 's'],
  [39, 'Y', '钇', 'Yttrium', 5, 3, 'd'],
  [40, 'Zr', '锆', 'Zirconium', 5, 4, 'd'],
  [41, 'Nb', '铌', 'Niobium', 5, 5, 'd'],
  [42, 'Mo', '钼', 'Molybdenum', 5, 6, 'd'],
  [43, 'Tc', '锝', 'Technetium', 5, 7, 'd'],
  [44, 'Ru', '钌', 'Ruthenium', 5, 8, 'd'],
  [45, 'Rh', '铑', 'Rhodium', 5, 9, 'd'],
  [46, 'Pd', '钯', 'Palladium', 5, 10, 'd'],
  [47, 'Ag', '银', 'Silver', 5, 11, 'd'],
  [48, 'Cd', '镉', 'Cadmium', 5, 12, 'd'],
  [49, 'In', '铟', 'Indium', 5, 13, 'p'],
  [50, 'Sn', '锡', 'Tin', 5, 14, 'p'],
  [51, 'Sb', '锑', 'Antimony', 5, 15, 'p'],
  [52, 'Te', '碲', 'Tellurium', 5, 16, 'p'],
  [53, 'I', '碘', 'Iodine', 5, 17, 'p'],
  [54, 'Xe', '氙', 'Xenon', 5, 18, 'p'],
  [55, 'Cs', '铯', 'Caesium', 6, 1, 's'],
  [56, 'Ba', '钡', 'Barium', 6, 2, 's'],
  [57, 'La', '镧', 'Lanthanum', 6, null, 'f', 1],
  [58, 'Ce', '铈', 'Cerium', 6, null, 'f', 1],
  [59, 'Pr', '镨', 'Praseodymium', 6, null, 'f', 1],
  [60, 'Nd', '钕', 'Neodymium', 6, null, 'f', 1],
  [61, 'Pm', '钷', 'Promethium', 6, null, 'f', 1],
  [62, 'Sm', '钐', 'Samarium', 6, null, 'f', 1],
  [63, 'Eu', '铕', 'Europium', 6, null, 'f', 1],
  [64, 'Gd', '钆', 'Gadolinium', 6, null, 'f', 1],
  [65, 'Tb', '铽', 'Terbium', 6, null, 'f', 1],
  [66, 'Dy', '镝', 'Dysprosium', 6, null, 'f', 1],
  [67, 'Ho', '钬', 'Holmium', 6, null, 'f', 1],
  [68, 'Er', '铒', 'Erbium', 6, null, 'f', 1],
  [69, 'Tm', '铥', 'Thulium', 6, null, 'f', 1],
  [70, 'Yb', '镱', 'Ytterbium', 6, null, 'f', 1],
  [71, 'Lu', '镥', 'Lutetium', 6, 3, 'd'],
  [72, 'Hf', '铪', 'Hafnium', 6, 4, 'd'],
  [73, 'Ta', '钽', 'Tantalum', 6, 5, 'd'],
  [74, 'W', '钨', 'Tungsten', 6, 6, 'd'],
  [75, 'Re', '铼', 'Rhenium', 6, 7, 'd'],
  [76, 'Os', '锇', 'Osmium', 6, 8, 'd'],
  [77, 'Ir', '铱', 'Iridium', 6, 9, 'd'],
  [78, 'Pt', '铂', 'Platinum', 6, 10, 'd'],
  [79, 'Au', '金', 'Gold', 6, 11, 'd'],
  [80, 'Hg', '汞', 'Mercury', 6, 12, 'd'],
  [81, 'Tl', '铊', 'Thallium', 6, 13, 'p'],
  [82, 'Pb', '铅', 'Lead', 6, 14, 'p'],
  [83, 'Bi', '铋', 'Bismuth', 6, 15, 'p'],
  [84, 'Po', '钋', 'Polonium', 6, 16, 'p'],
  [85, 'At', '砹', 'Astatine', 6, 17, 'p'],
  [86, 'Rn', '氡', 'Radon', 6, 18, 'p'],
  [87, 'Fr', '钫', 'Francium', 7, 1, 's'],
  [88, 'Ra', '镭', 'Radium', 7, 2, 's'],
  [89, 'Ac', '锕', 'Actinium', 7, null, 'f', 2],
  [90, 'Th', '钍', 'Thorium', 7, null, 'f', 2],
  [91, 'Pa', '镤', 'Protactinium', 7, null, 'f', 2],
  [92, 'U', '铀', 'Uranium', 7, null, 'f', 2],
  [93, 'Np', '镎', 'Neptunium', 7, null, 'f', 2],
  [94, 'Pu', '钚', 'Plutonium', 7, null, 'f', 2],
  [95, 'Am', '镅', 'Americium', 7, null, 'f', 2],
  [96, 'Cm', '锔', 'Curium', 7, null, 'f', 2],
  [97, 'Bk', '锫', 'Berkelium', 7, null, 'f', 2],
  [98, 'Cf', '锎', 'Californium', 7, null, 'f', 2],
  [99, 'Es', '锿', 'Einsteinium', 7, null, 'f', 2],
  [100, 'Fm', '镄', 'Fermium', 7, null, 'f', 2],
  [101, 'Md', '钔', 'Mendelevium', 7, null, 'f', 2],
  [102, 'No', '锘', 'Nobelium', 7, null, 'f', 2],
  [103, 'Lr', '铹', 'Lawrencium', 7, 3, 'd'],
  [104, 'Rf', '鑪', 'Rutherfordium', 7, 4, 'd'],
  [105, 'Db', '𬭊', 'Dubnium', 7, 5, 'd'],
  [106, 'Sg', '𬭛', 'Seaborgium', 7, 6, 'd'],
  [107, 'Bh', '𬭶', 'Bohrium', 7, 7, 'd'],
  [108, 'Hs', '𬭳', 'Hassium', 7, 8, 'd'],
  [109, 'Mt', '鿏', 'Meitnerium', 7, 9, 'd'],
  [110, 'Ds', '𫟼', 'Darmstadtium', 7, 10, 'd'],
  [111, 'Rg', '𬬭', 'Roentgenium', 7, 11, 'd'],
  [112, 'Cn', '鎶', 'Copernicium', 7, 12, 'd'],
  [113, 'Nh', '鉨', 'Nihonium', 7, 13, 'p'],
  [114, 'Fl', '𫓧', 'Flerovium', 7, 14, 'p'],
  [115, 'Mc', '镆', 'Moscovium', 7, 15, 'p'],
  [116, 'Lv', '𫟷', 'Livermorium', 7, 16, 'p'],
  [117, 'Ts', '鿬', 'Tennessine', 7, 17, 'p'],
  [118, 'Og', '鿫', 'Oganesson', 7, 18, 'p']
];

const aufbau = [
  ['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2], ['3d', 10], ['4p', 6],
  ['5s', 2], ['4d', 10], ['5p', 6], ['6s', 2], ['4f', 14], ['5d', 10], ['6p', 6],
  ['7s', 2], ['5f', 14], ['6d', 10], ['7p', 6]
];

// 已知基态异常：只覆盖受影响亚层的占据数，其余按 Aufbau 结果保留。
const anomalies = {
  24: {'4s': 1, '3d': 5},
  29: {'4s': 1, '3d': 10},
  41: {'5s': 1, '4d': 4},
  42: {'5s': 1, '4d': 5},
  44: {'5s': 1, '4d': 7},
  45: {'5s': 1, '4d': 8},
  46: {'5s': 0, '4d': 10},
  47: {'5s': 1, '4d': 10},
  57: {'4f': 0, '5d': 1},
  58: {'4f': 1, '5d': 1},
  64: {'4f': 7, '5d': 1},
  78: {'5d': 9, '6s': 1},
  79: {'5d': 10, '6s': 1},
  89: {'5f': 0, '6d': 1},
  90: {'5f': 0, '6d': 2},
  91: {'5f': 2, '6d': 1},
  92: {'5f': 3, '6d': 1},
  93: {'5f': 4, '6d': 1},
  96: {'5f': 7, '6d': 1},
  103: {'6d': 0, '7p': 1}
};

const nobleCores = [[86, 'Rn'], [54, 'Xe'], [36, 'Kr'], [18, 'Ar'], [10, 'Ne'], [2, 'He']];
const order = new Map(aufbau.map(([name], index) => [name, index]));

export function fillConfiguration(z) {
  const occupancy = new Map();
  let remaining = z;
  for (const [name, capacity] of aufbau) {
    const count = Math.min(capacity, remaining);
    occupancy.set(name, count);
    remaining -= count;
    if (remaining <= 0) break;
  }
  for (const [name, count] of Object.entries(anomalies[z] || {})) occupancy.set(name, count);
  const filled = [...occupancy].filter(([, count]) => count > 0).sort((a, b) => order.get(a[0]) - order.get(b[0]));
  const full = canonical(filled).map(([name, count]) => `${name}${count}`).join(' ');
  const core = nobleCores.find(([number]) => number < z && (z - number) <= 32);
  const short = core
    ? `[${core[1]}] ` + canonical(filled.filter(([name]) => order.get(name) > order.get(nobleConfigLast(core[1])))).map(([name, count]) => `${name}${count}`).join(' ')
    : full;
  return {full, short: short.replace(/\s+/g, ' ').trim()};
}

// 显示顺序按 n、再按 s/p/d/f，符合教科书写法（3d 写在 4s 前）。
function canonical(list) {
  return [...list].sort((a, b) => Number(a[0][0]) - Number(b[0][0]) || 'spdf'.indexOf(a[0][1]) - 'spdf'.indexOf(b[0][1]));
}

// 价层按周期选 ns、(n−1)d、(n−2)f，避免把内层 3d 误当价层（如 Pd 的 4d10）。
function valenceOf(z, period) {
  const {full} = fillConfiguration(z);
  const counts = new Map(full.split(' ').filter(Boolean).map(item => [item.slice(0, 2), Number(item.slice(2))]));
  const names = [`${period}s`, `${period}p`, `${period - 1}d`, `${period - 2}f`].filter(name => counts.get(name) > 0);
  return names.sort((a, b) => Number(a[0]) - Number(b[0]) || 'spdf'.indexOf(a[1]) - 'spdf'.indexOf(b[1]))
    .map(name => `${name}${counts.get(name)}`).join(' ');
}

function nobleConfigLast(symbol) {
  const shell = {He: '1s', Ne: '2p', Ar: '3p', Kr: '4p', Xe: '5p', Rn: '6p'}[symbol];
  return shell;
}

export const elements = table.map(([z, symbol, nameZh, nameEn, period, group, block, fRow]) => {
  const {full, short} = fillConfiguration(z);
  const shell = periods.find(item => item.period === period);
  return {
    z, symbol, nameZh, nameEn, period, group: group ?? null, block,
    fRow: fRow || 0,
    closedShell: closedShells.includes(z) ? z : null,
    periodStart: shell.start,
    periodEnd: shell.end,
    hub: closedShells.includes(z) ? `elements.${symbol.toLowerCase()}` : null,
    predicted: z >= 104,
    configuration: full,
    configurationShort: short,
    valence: valenceOf(z, period)
  };
});
