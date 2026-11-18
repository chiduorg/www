#!/usr/bin/env node
// 内容结构校验：ID、related、来源、引用编号、图景与深度门槛。
// 用法：node scripts/check-content.mjs [--gate] [--batch D-S1]
// --gate 表示按计划 v2 的单条深度门槛检查（默认只做结构检查）。
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const entriesDir = path.join(root, 'content', 'entries');
const gate = process.argv.includes('--gate');
const batchIndex = process.argv.indexOf('--batch');
const batch = batchIndex >= 0 ? process.argv[batchIndex + 1] : '';

const DIM = { space: ['length', 'm'], time: ['cosmic-time', 's'], temperature: ['temperature', 'K'], elements: ['element', 'Z'], mass: ['mass', 'kg'] };
const problems = [];
const warnings = [];
const rows = [];

let batchIds = null;
if (batch) {
  const file = path.join(root, 'work', 'batches.json');
  if (!fs.existsSync(file)) {
    console.error('缺少 work/batches.json，请先运行 node scripts/plan-batches.mjs');
    process.exit(1);
  }
  const batches = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!batches[batch]) {
    console.error(`未找到批次 ${batch}`);
    process.exit(1);
  }
  batchIds = new Set(batches[batch].map((x) => x.id));
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const p = path.join(dir, d.name);
    return d.isDirectory() ? walk(p) : d.name.endsWith('.md') ? [p] : [];
  });
}

for (const [dir, [dimension, unit]] of Object.entries(DIM)) {
  const abs = path.join(entriesDir, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const rel = path.relative(root, file).replace(/\\/g, '/');
    const { data: fm, content } = matter(fs.readFileSync(file, 'utf8'));
    const body = content.replace(/^---[\s\S]*?---/, '').trim();
    const id = fm.id || '';
    rows.push({ id, file: rel, fm, body });
    if (!id) problems.push(`${rel}: 缺少 id`);
    if (!id.startsWith(dir + '.')) problems.push(`${rel}: id 前缀与目录不一致 (${id})`);
    if (fm.dimension !== dimension) problems.push(`${id}: dimension 应为 ${dimension}`);
    if (fm.quantity?.unit !== unit) problems.push(`${id}: quantity.unit 应为 ${unit}`);
    if (!fm.title) problems.push(`${id}: 缺少 title`);
    if (!fm.summary) problems.push(`${id}: 缺少 summary`);
    if (!fm.quantity?.measure) problems.push(`${id}: 缺少 quantity.measure`);
    if (!['draft', 'needs-review', 'reviewed', 'published'].includes(fm.reviewStatus)) problems.push(`${id}: 未知 reviewStatus`);
    const sources = Array.isArray(fm.sources) ? fm.sources : [];
    const related = Array.isArray(fm.related) ? fm.related : [];
    if (new Set(related).size !== related.length) problems.push(`${id}: related 有重复`);
    for (const source of sources) {
      if (!source?.title || !source?.publisher || !source?.accessed) problems.push(`${id}: 来源字段不完整`);
      if (!/^https:\/\//.test(source?.url || '')) problems.push(`${id}: 来源 URL 必须是 https (${source?.url})`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(source?.accessed || '')) problems.push(`${id}: 来源访问日期格式错误`);
    }
    // 引用编号检查
    const cites = [...body.matchAll(/\[(\d+)\]/g)].map((m) => Number(m[1]));
    const unique = new Set(cites);
    if (sources.length) {
      for (const n of unique) if (n < 1 || n > sources.length) problems.push(`${id}: 引用 [${n}] 超出 ${sources.length} 条来源`);
      for (let i = 1; i <= sources.length; i++) if (!unique.has(i)) warnings.push(`${id}: 来源 ${i} 未被正文引用`);
    }
    if (['reviewed', 'published'].includes(fm.reviewStatus)) {
      if (!sources.length) problems.push(`${id}: reviewed 条目必须有来源`);
      if (!fm.review?.method || !fm.review?.date) problems.push(`${id}: reviewed 条目缺 review.method/date`);
    }
    if (fm.quantity?.value !== null && !Number.isFinite(fm.quantity?.value)) problems.push(`${id}: quantity.value 无效`);
    if (fm.quantity?.value === null && fm.quantity?.status !== 'undetermined') problems.push(`${id}: 未定量值必须标 undetermined`);
    if (dimension === 'cosmic-time' && fm.quantity?.value === null && fm.chronology?.plot !== false) problems.push(`${id}: 未定时间条目必须 chronology.plot=false`);
    if (fm.visual && (!fm.visual.scene || !fm.visual.caption || !fm.visual.note)) problems.push(`${id}: visual 配置不完整`);

    if (gate && (!batchIds || batchIds.has(id))) {
      const chars = (body.match(/[\u3400-\u9fff\uf900-\ufaff]/g) || []).length;
      const sections = (body.match(/^##\s+/gm) || []).length;
      const level = fm.element?.level;
      // 闭壳 hub 页（rn、og）同时承担周期终点与解释职责，正文保留 500–800 字，不受 C 级上限约束。
      const limits = level === 'A' ? {min: 800, max: 1200, sources: 3} : level === 'B' ? {min: 450, max: 800, sources: 2} : level === 'C' ? (fm.element?.hub ? {min: 300, max: 800, sources: 2} : {min: 300, max: 500, sources: 2}) : {min: 450, max: 800, sources: 2};
      const fail = [];
      if (chars < limits.min) fail.push(`汉字 ${chars}<${limits.min}`);
      if (chars > limits.max) fail.push(`汉字 ${chars}>${limits.max}`);
      const isMass = fm.dimension === 'mass';
      if (sections < (isMass ? 5 : 4)) fail.push(`小节 ${sections}<${isMass ? 5 : 4}`);
      if (sources.length < limits.sources) fail.push(`来源 ${sources.length}<${limits.sources}`);
      if (sources.length && [...Array(sources.length)].some((_, i) => !unique.has(i + 1))) fail.push('存在未被引用的来源');
      if (cites.length < 4) fail.push(`引用 ${cites.length}<4`);
      if (related.length < 3) fail.push(`related ${related.length}<3`);
      if (related.length > 6) fail.push(`related ${related.length}>6`);
      const conditionsOk = typeof fm.conditions === 'string'
        ? fm.conditions.trim().length > 0
        : !!fm.conditions && Object.keys(fm.conditions).length > 0;
      if (!conditionsOk && !isMass) fail.push('缺 conditions');
      if (!fm.visual && !isMass) fail.push('缺 visual');
      if (fail.length) problems.push(`${id}: ${fail.join('；')}`);
    }
  }
}

const idSet = new Set(rows.map((r) => r.id));
const dup = rows.filter((r, i) => rows.findIndex((x) => x.id === r.id) !== i);
if (dup.length) problems.push(`重复 ID: ${[...new Set(dup.map((r) => r.id))].join(', ')}`);
for (const r of rows) {
  for (const target of r.fm.related || []) {
    if (!idSet.has(target)) problems.push(`${r.id}: related 指向不存在的条目 ${target}`);
    if (target === r.id) problems.push(`${r.id}: related 指向自身`);
  }
}

if (batchIds) {
  const missing = [...batchIds].filter((id) => !idSet.has(id));
  if (missing.length) problems.push(`批次 ${batch} 缺少 ${missing.length} 个文件: ${missing.join(', ')}`);
  const failed = rows.filter((r) => batchIds.has(r.id) && problems.some((p) => p.startsWith(r.id + ':')));
  console.log(`批次 ${batch}: ${batchIds.size} 条，其中 ${batchIds.size - failed.length} 条通过结构检查。`);
}

if (warnings.length) {
  console.log(`提醒 ${warnings.length} 条：`);
  for (const w of warnings) console.log('  - ' + w);
}
if (problems.length) {
  console.error(`内容校验失败：${problems.length} 个问题`);
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log(`内容校验通过：${rows.length} 条；${gate ? '已启用深度门槛；' : ''}ID、related、来源、引用编号与图景结构一致。`);
