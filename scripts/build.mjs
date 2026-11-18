import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {buildSite,pagePath} from '@universe-atlas/engine/build';
import {renderPages} from '../home/render.mjs';
import '../content/scripts/build.mjs';
const root=path.resolve(import.meta.dirname,'..');
const config=JSON.parse(await fs.readFile(path.join(root,'config/project.json'),'utf8'));
const builds=[];
for(const site of ['home','space','time','temperature','elements','mass']){
 const siteRoot=path.join(root,site);
 builds.push(await buildSite({siteRoot,contentRoot:path.join(root,'content'),renderPages:site==='home'?renderPages:undefined,configuration:{...config,site,profile:'integrated-development'}}));
}
const elementsBuild=builds.find(build=>build.site==='elements');
const {elements,closedShells,periods}=await import(pathToFileURL(path.join(root,'elements/src/elements-data.mjs')).href);
const {properties,propertySource}=await import(pathToFileURL(path.join(root,'elements/src/element-properties.mjs')).href);
await fs.writeFile(path.join(elementsBuild.dist,'elements.json'),JSON.stringify({closedShells,periods,elements,properties,propertySource},null,2));
const dist=path.resolve(root,'dist');
if(dist!==path.join(root,'dist')||!dist.startsWith(root+path.sep))throw new Error('非法整合输出目录');
if((await fs.lstat(dist).catch(()=>null))?.isSymbolicLink())throw new Error('输出目录不能是链接');
await fs.rm(dist,{recursive:true,force:true});
await fs.cp(builds[0].dist,dist,{recursive:true});
for(const build of builds.slice(1))await fs.cp(build.dist,path.join(dist,build.site),{recursive:true});
// 共享资产只保留一份，五个子域与门户统一引用 static.chidu.org。
await fs.mkdir(path.join(dist,'static'),{recursive:true});
await fs.cp(path.join(root,'space/dist/vendor'),path.join(dist,'static/vendor'),{recursive:true});
await fs.cp(path.join(root,'engine/packages/ui/og'),path.join(dist,'static/og'),{recursive:true});
await fs.cp(path.join(root,'content/assets'),path.join(dist,'static/media'),{recursive:true});
await fs.copyFile(path.join(root,'engine/packages/ui/favicon.svg'),path.join(dist,'static/favicon.svg'));
for(const item of ['vendor','media','og','favicon.svg'])await fs.rm(path.join(dist,item),{recursive:true,force:true});
for(const site of ['space','time','temperature','elements','mass']){
 for(const item of ['vendor','media','og','favicon.svg','content.json','content-snapshot.json','catalog.json','build-report.json','release.json'])await fs.rm(path.join(dist,site,item),{recursive:true,force:true});
}
console.log('共享静态资源已收拢到 dist/static：vendor / og / media / favicon.svg。');
console.log('整合预览完成：门户 + 空间 + 时间 + 温度 + 元素 + 质量，各站独立构建后组合。');
