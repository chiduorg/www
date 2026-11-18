import fs from 'node:fs/promises';
import path from 'node:path';
import {writeContentSnapshot} from '@universe-atlas/engine/content/compile';
const root=path.resolve(import.meta.dirname,'..');
const pkg=JSON.parse(await fs.readFile(path.join(root,'package.json'),'utf8'));
const engine=JSON.parse(await fs.readFile(new URL(import.meta.resolve('@universe-atlas/engine/package.json')),'utf8'));
const {entries,snapshot}=await writeContentSnapshot(root,{contentVersion:pkg.version,engineVersion:engine.version});
console.log(`内容 v${pkg.version}：${entries.length} 条 · ${snapshot.id.slice(0,27)}`);
