// 质量轴的 16 个覆盖带。带边界按“十进位”而不是线性质量划分。
// 与 mass/src/ladder-data.js 保持同一组边界；这里只保留文章页需要的几何与标签。
export const MASS_AXIS = {min: -40, max: 53, decades: 94};
export const MASS_BANDS = [
  {id: 'B1', from: -40, to: -31, label: '中微子与轻子',labelEn: 'Neutrinos & leptons'},
  {id: 'B2', from: -30, to: -27, label: '夸克、轻子与核子',labelEn: 'Quarks, leptons & nucleons'},
  {id: 'B3', from: -26, to: -21, label: '分子与生物大分子',labelEn: 'Molecules & biomolecules'},
  {id: 'B4', from: -20, to: -16, label: '病毒与细胞器',labelEn: 'Viruses & organelles'},
  {id: 'B5', from: -15, to: -9, label: '细胞',labelEn: 'Cells'},
  {id: 'B6', from: -8, to: -3, label: '日常微粒',labelEn: 'Everyday particles'},
  {id: 'B7', from: -2, to: 2, label: '人体与家具',labelEn: 'Bodies & furniture'},
  {id: 'B8', from: 3, to: 7, label: '车辆与大型动物',labelEn: 'Vehicles & large animals'},
  {id: 'B9', from: 8, to: 12, label: '巨型工程',labelEn: 'Mega-engineering'},
  {id: 'B10', from: 13, to: 18, label: '小天体',labelEn: 'Small bodies'},
  {id: 'B11', from: 19, to: 24, label: '小行星与类地行星',labelEn: 'Asteroids & terrestrial planets'},
  {id: 'B12', from: 25, to: 28, label: '巨行星与系外行星',labelEn: 'Giant & exoplanets'},
  {id: 'B13', from: 29, to: 33, label: '恒星与致密遗迹',labelEn: 'Stars & compact remnants'},
  {id: 'B14', from: 34, to: 40, label: '黑洞与类星体',labelEn: 'Black holes & quasars'},
  {id: 'B15', from: 41, to: 47, label: '星系与星系团',labelEn: 'Galaxies & clusters'},
  {id: 'B16', from: 48, to: 53, label: '宇宙尺度',labelEn: 'Cosmic scale'},
];
export function massBandForLog(log) {
  if (!Number.isFinite(log)) return null;
  const bucket = Math.floor(log);
  if (bucket < MASS_AXIS.min) return MASS_BANDS[0];
  if (bucket > MASS_AXIS.max) return MASS_BANDS[MASS_BANDS.length - 1];
  return MASS_BANDS.find((band) => bucket >= band.from && bucket <= band.to) || null;
}
export function massPositionForLog(log) {
  if (!Number.isFinite(log)) return 0;
  return Math.max(0, Math.min(100, ((log - MASS_AXIS.min) / MASS_AXIS.decades) * 100));
}
