import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildSite} from '@universe-atlas/engine/build';
const siteRoot=path.resolve(import.meta.dirname,'..');
const contentRoot=path.dirname(fileURLToPath(import.meta.resolve('@universe-atlas/content/package.json')));
const {snapshot}=await buildSite({siteRoot,contentRoot});
console.log(`质量阶梯骨架已输出：${snapshot.bySite.mass} 条质量条目，16 个覆盖带。`);
