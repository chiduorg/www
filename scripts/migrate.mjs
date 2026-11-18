import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
const root = path.resolve(import.meta.dirname, '..');
const definitions = [
  ['space', 'scales', 'sizeMeters', 'm', 'length'],
  ['time', 'timeline', 'timeSeconds', 's', 'cosmic-time'],
  ['temperature', 'energies', 'temperatureKelvin', 'K', 'temperature']
];
let count = 0;
for (const [type, key, metric, unit, dimension] of definitions) {
  const original = JSON.parse(await fs.readFile(path.join(root, '..', 'data', `${type}.json`), 'utf8'));
  const details = JSON.parse(await fs.readFile(path.join(root, '..', 'data', `${type}-detail.json`), 'utf8'));
  const target = path.join(root, 'content', 'entries', type);
  await fs.mkdir(target, {recursive: true});
  for (const item of original[key]) {
    const detail = details[item.id] || {};
    const entry = {
      id: `${type}.${item.id}`, title: item.name || item.event,
      titleEn: item.nameEn || '', dimension, category: item.category || item.era,
      summary: item.description,
      quantity: { value: item[metric], unit, measure: type === 'space' ? 'legacy-size-needs-review' : type === 'time' ? 'time-after-big-bang' : 'temperature', approximate: true },
      displayValue: item.size || item.timeAfterBigBang || item.temperature,
      related: [], reviewStatus: 'needs-review', sources: [],
      legacy: { id: item.id, icon: item.icon, relatedLabels: detail.related || [] }
    };
    let body = `\n## 概述\n\n${item.description}\n`;
    for (const [field, heading] of [['history','历史背景'],['scientists','关键科学家'],['methods','科学方法与实验'],['significance','科学意义']]) {
      if (detail[field]) body += `\n## ${heading}\n\n${detail[field]}\n`;
    }
    const file = path.join(target, `${item.id}.md`);
    try { await fs.access(file); } catch { await fs.writeFile(file, matter.stringify(body, entry)); }
    count++;
  }
}
console.log(`已迁移 ${count} 条内容到 Markdown；已有文件保持不变，所有旧数据等待科学来源审核。`);
