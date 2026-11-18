#!/usr/bin/env node
// 内容审计：逐条读取 content/entries 下的 Markdown，统计深度、来源、引用、分类与图景覆盖。
// 用法：node scripts/audit-content.mjs [--json]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entriesDir = path.join(root, 'content', 'entries');

const DIM_DIRS = { space: 'length', time: 'cosmic-time', temperature: 'temperature', elements: 'element', mass: 'mass' };

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : d.name.endsWith('.md') ? [p] : [];
  });
}

function cjkCount(text) {
  return (text.match(/[\u3400-\u9fff\uf900-\ufaff]/g) || []).length;
}

function bodyOf(content) {
  return content.replace(/^---[\s\S]*?---/, '').trim();
}

const rows = [];
for (const [dir, dimension] of Object.entries(DIM_DIRS)) {
  const abs = path.join(entriesDir, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const raw = fs.readFileSync(file, 'utf8');
    const { data: fm, content } = matter(raw);
    const body = bodyOf(content);
    const chars = cjkCount(body);
    const sections = (body.match(/^##\s+/gm) || []).length;
    const cites = [...body.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]));
    const citeMax = cites.length ? Math.max(...cites) : 0;
    const sources = Array.isArray(fm.sources) ? fm.sources : [];
    const related = Array.isArray(fm.related) ? fm.related : [];
    const quantity = fm.quantity || {};
    const value = typeof quantity.value === 'number' && quantity.value > 0 ? quantity.value : null;
    const log10 = value === null ? null : Math.log10(value);
    rows.push({
      file: path.relative(root, file).replace(/\\/g, '/'),
      dir,
      id: fm.id || '',
      title: fm.title || '',
      dimension: fm.dimension || dimension,
      category: fm.category || '',
      conceptGroup: fm.conceptGroup || '',
      tags: Array.isArray(fm.tags) ? fm.tags : [],
      summary: fm.summary || '',
      summaryChars: cjkCount(fm.summary || ''),
      chars,
      sections,
      sources: sources.length,
      sourceUrls: sources.map((s) => s && s.url).filter(Boolean),
      cites: cites.length,
      citeNumbers: [...new Set(cites)],
      citeMax,
      citeUncited: sources.length ? [...Array(sources.length)].map((_, i) => i + 1).filter((n) => !cites.includes(n)) : [],
      related: related.length,
      relatedIds: related,
      reviewStatus: fm.reviewStatus || '',
      quantityValue: value,
      quantityZero: quantity.value === 0,
      quantityUnit: quantity.unit || '',
      quantityApproximate: quantity.approximate === true,
      quantityStatus: quantity.status || (value === null ? 'undetermined' : 'reference'),
      measure: quantity.measure || '',
      log10,
      bin: log10 === null ? 'undetermined' : Math.floor(log10),
      hasConditions: typeof fm.conditions === 'string'
        ? fm.conditions.trim().length > 0
        : !!fm.conditions && Object.keys(fm.conditions).length > 0,
      hasUncertainty: !!fm.uncertainty,
      hasVisual: !!fm.visual,
      chronology: fm.chronology || null,
      mode: fm.mode || '',
      visual: fm.visual || null,
      visualTemplate: fm.visual?.template || '',
      visualScene: fm.visual?.scene || '',
    });
  }
}

const idMap = new Map();
for (const r of rows) {
  if (r.id) idMap.set(r.id, (idMap.get(r.id) || 0) + 1);
}
for (const r of rows) {
  r.duplicateId = idMap.get(r.id) > 1;
}

const byDim = {};
for (const r of rows) {
  byDim[r.dir] ??= { total: 0, chars: [], sources: [], cites: [], related: [], reviewed: 0, undetermined: 0 };
  const b = byDim[r.dir];
  b.total++;
  b.chars.push(r.chars);
  b.sources.push(r.sources);
  b.cites.push(r.cites);
  b.related.push(r.related);
  if (r.reviewStatus === 'reviewed' || r.reviewStatus === 'published') b.reviewed++;
  if (r.quantityValue === null) b.undetermined++;
}

const num = (arr, fn) => arr.reduce((a, b) => a + (fn ? fn(b) : b), 0);
const mean = (arr) => (arr.length ? +(num(arr) / arr.length).toFixed(2) : 0);
const median = (arr) => {
  if (!arr.length) return 0;
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const round1 = (n) => +n.toFixed(1);

const summary = {
  generatedAt: new Date().toISOString(),
  total: rows.length,
  uniqueIds: new Set(rows.map((r) => r.id)).size,
  duplicateIds: rows.filter((r) => r.duplicateId).map((r) => r.id),
  byDimension: {},
  quality: {},
  distribution: {},
  categories: {},
  sources: {},
  review: {},
  visual: {},
  learning: {},
};

for (const [dir, b] of Object.entries(byDim)) {
  summary.byDimension[dir] = {
    entries: b.total,
    charsMean: mean(b.chars),
    charsMedian: median(b.chars),
    charsMin: Math.min(...b.chars),
    charsMax: Math.max(...b.chars),
    under450: b.chars.filter((c) => c < 450).length,
    sourcesMean: mean(b.sources),
    sourcesOneOrLess: b.sources.filter((c) => c <= 1).length,
    sourcesTwoPlus: b.sources.filter((c) => c >= 2).length,
    citesMean: mean(b.cites),
    citesUnder4: b.cites.filter((c) => c < 4).length,
    relatedMean: mean(b.related),
    relatedUnder3: b.related.filter((c) => c < 3).length,
    reviewed: b.reviewed,
    undetermined: b.undetermined,
  };
}

const allCited = (r) => r.sources > 0 && [...Array(r.sources)].every((_, i) => r.citeNumbers.includes(i + 1));
const maxCharsFor = (r) => (r.dir === 'elements' ? 1200 : 800);
const gate = (r) => r.chars >= 450 && r.chars <= maxCharsFor(r) && r.sources >= 2 && r.cites >= 4 && allCited(r)
  && r.related >= 3 && r.related <= 6 && r.sections >= 4 && r.hasConditions && r.hasVisual;
const mainRows = rows.filter((r) => !r.isAlias);
summary.quality = {
  definitiveGate: 'chars 450-800（elements 长文轴放宽到 1200）& sources>=2(all cited) & cites>=4 & related 3-6 & sections>=4 & conditions & visual',
  pass: mainRows.filter(gate).length,
  fail: mainRows.filter((r) => !gate(r)).length,
  passRate: round1((mainRows.filter(gate).length / mainRows.length) * 100),
  charsBins: {
    '<200': rows.filter((r) => r.chars < 200).length,
    '200-449': rows.filter((r) => r.chars >= 200 && r.chars < 450).length,
    '450-599': rows.filter((r) => r.chars >= 450 && r.chars < 600).length,
    '600-799': rows.filter((r) => r.chars >= 600 && r.chars < 800).length,
    '800+': rows.filter((r) => r.chars >= 800).length,
  },
  sectionsBins: [1, 2, 3, 4, 5, 6, 7, 99].map((n, i, a) => ({
    range: i === a.length - 1 ? '7+' : `${n}${i === 0 ? '' : `-${a[i + 1] - 1}`}`,
    count: rows.filter((r) => r.sections >= n && (i === a.length - 1 || r.sections < a[i + 1])).length,
  })),
  uncitedSources: rows.filter((r) => r.sources > 0 && [...Array(r.sources)].some((_, i) => !r.citeNumbers.includes(i + 1))).length,
  citeBeyondSources: rows.filter((r) => r.citeMax > r.sources).length,
};

const bins = {};
for (const r of rows) {
  const k = `${r.dir}:${r.bin}`;
  bins[k] = (bins[k] || 0) + 1;
}
summary.distribution = bins;

// 时间维度必须分口径统计：时长、绝对时点、未来与未定不可混算。
const timeRows = rows.filter((r) => r.dir === 'time' && !r.isAlias);
const timeModes = {};
const timeDistribution = {};
for (const r of timeRows) {
  const mode = r.mode || (r.quantityValue === null ? '未定' : '未标注');
  const key = r.quantityZero ? 'zero' : r.quantityValue === null ? 'undetermined' : String(r.bin);
  timeModes[mode] = (timeModes[mode] || 0) + 1;
  timeDistribution[mode] ??= {};
  timeDistribution[mode][key] = (timeDistribution[mode][key] || 0) + 1;
}
summary.timeModes = timeModes;
summary.timeDistribution = timeDistribution;
summary.timePointDistribution = timeDistribution['时点'] || {};
summary.timeDurationDistribution = timeDistribution['时长'] || {};

for (const dir of Object.keys(DIM_DIRS)) {
  const list = rows.filter((r) => r.dir === dir);
  const cat = {};
  for (const r of list) cat[r.category || '(空)'] = (cat[r.category || '(空)'] || 0) + 1;
  summary.categories[dir] = cat;
}

summary.sources = {
  entriesWithZero: rows.filter((r) => r.sources === 0).length,
  entriesWithOne: rows.filter((r) => r.sources === 1).length,
  entriesWithTwoPlus: rows.filter((r) => r.sources >= 2).length,
  uniqueUrls: new Set(rows.flatMap((r) => r.sourceUrls)).size,
  totalSources: num(rows.map((r) => r.sources)),
  nonHttps: rows.filter((r) => r.sourceUrls.some((u) => !/^https?:\/\//.test(u))).map((r) => r.id),
  emptyUrls: rows.filter((r) => r.sourceUrls.length !== r.sources).map((r) => r.id),
  totalCites: num(rows.map((r) => r.cites)),
  entriesUnder4Cites: rows.filter((r) => r.cites < 4).length,
};

const statusCount = {};
for (const r of rows) statusCount[r.reviewStatus || '(空)'] = (statusCount[r.reviewStatus || '(空)'] || 0) + 1;
summary.review = {
  status: statusCount,
  withConditions: rows.filter((r) => r.hasConditions).length,
  withUncertainty: rows.filter((r) => r.hasUncertainty).length,
  tagCount: new Set(rows.flatMap((r) => r.tags)).size,
  entriesWithTags: rows.filter((r) => r.tags.length).length,
  entriesWithConceptGroup: rows.filter((r) => r.conceptGroup).length,
};

summary.visual = {
  withVisual: rows.filter((r) => r.visual).length,
  withoutVisual: rows.filter((r) => !r.visual).map((r) => r.id),
  templates: [...new Set(rows.map((r) => r.visualTemplate).filter(Boolean))],
  scenes: [...new Set(rows.map((r) => r.visualScene).filter(Boolean))],
};

// 学习层：路线由 engine/packages/content/routes.js 定义，问答由 home/quiz-data.mjs 定义
const routesFile = path.join(root, 'engine', 'packages', 'content', 'routes.js');
const quizFile = path.join(root, 'home', 'quiz-data.mjs');
summary.learning = {
  routesFile: fs.existsSync(routesFile),
  quizFile: fs.existsSync(quizFile),
};

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({ summary, rows }, null, 2));
} else {
  console.log(JSON.stringify(summary, null, 2));
}
