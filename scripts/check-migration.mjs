// 一次性迁移验收；未来科学修订后允许与旧数据不同。
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const entries=JSON.parse(await fs.readFile(path.join(root,'dist/content.json'),'utf8'));
const removedLegacyIds=new Set(['red_blood_cell','typical_virus','typical_bacterium','local_group']);
let preserved=0,removed=0;
for(const [type,key,metric]of [['space','scales','sizeMeters'],['time','timeline','timeSeconds'],['temperature','energies','temperatureKelvin']]){
 const original=JSON.parse(await fs.readFile(path.join(root,'../data',(type==='temperature'?'energy':type)+'.json'),'utf8'));
 for(const item of original[key]){
  if(removedLegacyIds.has(item.id)){assert.ok(!entries.some(e=>e.id===type+'.'+item.id),`已删除的兼容入口仍存在 ${type}.${item.id}`);removed++;continue;}
  const entry=entries.find(e=>e.id===type+'.'+item.id);assert.ok(entry,`缺少条目 ${type}.${item.id}`);preserved++;
  if(entry.rights?.status==='rewritten'){const old=entry.review?.originalQuantity||entry.review?.original?.quantity;assert.ok(old,`重写需保留原量值 ${entry.id}`);assert.equal(old.value,item[metric],`原量值证据错误 ${entry.id}`);assert.notEqual(entry.summary,item.description,`摘要未重写 ${entry.id}`);assert.ok(entry.review?.notes?.length,`缺少修订说明 ${entry.id}`);}else{assert.equal(entry.quantity.value,item[metric]);assert.equal(entry.summary,item.description);assert.ok(entry.body.includes(item.description));}
 }
}
console.log(`迁移追溯通过：${preserved} 个保留的旧 ID 均保留；${removed} 个已明确删除的兼容入口不再出现；已重写条目有原量值证据和修订说明，未改条目仍保留原始数据。`);
