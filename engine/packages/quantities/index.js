/** 数字转上标字符串（"-3" → "⁻³"）。仅用于展示，不参与计算。 */
export function superscript(value) {
  return String(value).split('').map(c => ({ '-': '⁻', '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' }[c] || c)).join('');
}

/**
 * 尺度值的以 10 为底对数。
 * 入参必须是有限正数：0、负数、NaN、Infinity 都视为契约违规并抛出。
 */
export function logSize(value) {
  if (!(value > 0) || !Number.isFinite(value)) throw new Error('尺度值必须是有限正数');
  return Math.log10(value);
}

/**
 * 长度自适应显示：光年 / AU / km / m / mm / μm / nm，更小的值用指数形式。
 * 单位统一为米（入参 value 以米为单位）。0、空值与非有限值返回 “—”，避免输出 NaN。
 */
export function formatLength(value, digits = 4) {
  if (!Number.isFinite(value) || value <= 0) return '—';
  if (value >= 9.4607e15) return `${Number((value / 9.4607e15).toPrecision(3)).toLocaleString('zh-CN')} 光年`;
  if (value >= 1e11) return `${Number((value / 1.495978707e11).toPrecision(3))} AU`;
  if (value >= 1000) return `${Number((value / 1000).toPrecision(digits)).toLocaleString('zh-CN')} km`;
  if (value >= 1) return `${Number(value.toPrecision(3))} m`;
  if (value >= 1e-3) return `${Number((value * 1e3).toPrecision(3))} mm`;
  if (value >= 1e-6) return `${Number((value * 1e6).toPrecision(3))} μm`;
  if (value >= 1e-9) return `${Number((value * 1e9).toPrecision(3))} nm`;
  const exponent = Math.floor(Math.log10(value));
  return `${Number((value / 10 ** exponent).toFixed(2))} × 10${superscript(exponent)} m`;
}

/**
 * 两个同单位量的比值（a / b），展示为倍数；小于 1 时反转为 “1 / n”。
 * 入参必须是有限正数，否则返回 “—”，避免除零与 Infinity。
 */
export function formatRatio(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || a <= 0 || b <= 0) return '—';
  const ratio = a / b;
  // 倒数若带指数记法，加括号，避免把 “1 / 8.50 × 10⁸” 误读成 (1/8.50)×10⁸。
  if (ratio < 1) { const inverse = formatRatio(b, a); return `1 / ${inverse.includes('× 10') ? `(${inverse})` : inverse}`; }
  if (ratio < 1e7) return `${Number(ratio.toPrecision(3)).toLocaleString('zh-CN')}`;
  const exponent = Math.floor(Math.log10(ratio));
  return `${Number((ratio / 10 ** exponent).toFixed(2))} × 10${superscript(exponent)}`;
}

/** 通用数值显示：常规区间用千分位，超出 1e-3 ~ 1e7 时用 3 位有效数字的 ×10ⁿ 记法。0 直接显示 0。 */
export function scientific(value, digits = 3) {
  if (value === 0) return '0';
  const abs = Math.abs(value);
  if (abs >= 1e-3 && abs < 1e7) return Number(value.toPrecision(digits)).toLocaleString('zh-CN', { maximumSignificantDigits: digits });
  const exponent = Math.floor(Math.log10(abs)), coefficient = Number((value / 10 ** exponent).toPrecision(digits));
  return coefficient + ' × 10' + superscript(exponent);
}

/** 太阳质量（kg），仅用于显示层换算，不进入 quantity.value。 */
export const SOLAR_MASS_KG = 1.98847e30;

/**
 * 质量显示：主单位固定 kg。1 kg–1e9 kg 用千分位；更小或更大用 3 位有效数字的科学计数。
 * 上限/下限由调用方在文案层加 ≤ / ≥，本函数不改变数值含义。
 */
export function formatMass(value, digits = 3) {
  if (!(value > 0) || !Number.isFinite(value)) return '—';
  if (value >= 1 && value < 1e9) return `${Number(value.toPrecision(digits)).toLocaleString('zh-CN')} kg`;
  return `${scientific(value, digits)} kg`;
}

/** 以太阳质量表示的换算文本；只用于附加说明。 */
export function formatSolarMass(value) {
  if (!(value > 0) || !Number.isFinite(value)) return '—';
  return `${formatRatio(value, SOLAR_MASS_KG)} M☉`;
}

export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
