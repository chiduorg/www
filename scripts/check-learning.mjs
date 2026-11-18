#!/usr/bin/env node
// 学习层校验：数量目标、ID 唯一、引用条目存在且有条目级来源。
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dir = path.join(root, 'content', 'learning');
const targets = {dictionary: 80, methods: 16, objects: 50, collections: 24, ladders: 8, misconceptions: 38, qa: 123};

const entryIds = new Map();
for (const d of ['space', 'time', 'temperature', 'elements', 'mass']) {
  const board = path.join(root, 'content', 'entries', d);
  if (!fs.existsSync(board)) continue;
  for (const f of fs.readdirSync(board)) {
    if (!f.endsWith('.md')) continue;
    const {data} = matter(fs.readFileSync(path.join(board, f), 'utf8'));
    entryIds.set(data.id, data.sources?.length || 0);
  }
}

const problems = [];
for (const [name, target] of Object.entries(targets)) {
  const file = path.join(dir, `${name}.json`);
  if (!fs.existsSync(file)) { problems.push(`缺少 ${name}.json`); continue; }
  const items = JSON.parse(fs.readFileSync(file, 'utf8'));
  if (!Array.isArray(items)) { problems.push(`${name}: 必须是数组`); continue; }
  if (items.length !== target) problems.push(`${name}: ${items.length} 条，目标 ${target}`);
  const ids = new Set();
  for (const item of items) {
    if (item.id) {
      if (ids.has(item.id)) problems.push(`${name}: 重复 id ${item.id}`);
      ids.add(item.id);
    }
    if (!item.entries?.length) problems.push(`${name}: "${item.title || item.term || item.q || item.claim}" 未引用条目`);
    for (const id of item.entries || []) {
      if (!entryIds.has(id)) problems.push(`${name}: 引用不存在的条目 ${id}`);
      else if (entryIds.get(id) === 0) problems.push(`${name}: 引用条目 ${id} 没有来源`);
    }
    if (name === 'ladders') {
      if (!item.steps?.length) problems.push(`ladders: ${item.title} 缺少 steps`);
      for (const s of item.steps || []) {
        if (s.gap) { if (typeof s.gap !== 'string' || !s.gap.trim()) problems.push(`ladders: ${item.title} 空档说明为空`); continue; }
        if (!s.entry) problems.push(`ladders: ${item.title} 步骤缺 entry 或 gap`);
        else if (!entryIds.has(s.entry)) problems.push(`ladders: ${item.title} 步骤条目不存在 ${s.entry}`);
      }
    }
  }
}

for (const [name] of Object.entries(targets)) if (!fs.existsSync(path.join(dir, `${name}.json`))) problems.push(`${name}.json 不存在`);

if (problems.length) {
  console.error(`学习层校验失败：${problems.length} 个问题`);
  for (const p of problems) console.error('  - ' + p);
  process.exit(1);
}
console.log('学习层校验通过：' + Object.entries(targets).map(([n, t]) => `${n} ${t}`).join(' / '));
