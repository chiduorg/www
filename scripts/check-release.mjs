import {checkStaticSite} from '@universe-atlas/engine/check';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
const root=path.resolve(import.meta.dirname,'..'),artifacts=path.join(root,'artifacts'),repos=path.join(artifacts,'repos');
const json=async file=>JSON.parse(await fs.readFile(file,'utf8'));
const hash=async file=>createHash('sha256').update(await fs.readFile(file)).digest('hex');
const manifest=await json(path.join(artifacts,'release-manifest.json'));
if(!process.env.npm_execpath)throw new Error('请通过 npm run check:release 执行');
function npm(args,cwd){const result=spawnSync(process.execPath,[process.env.npm_execpath,...args],{cwd,encoding:'utf8'});if(result.status!==0)throw new Error(`${path.basename(cwd)}: ${result.stderr}\n${result.stdout}`);return result.stdout;}
for(const item of manifest.repositories){
 const dir=path.join(repos,item.name);console.log(`独立安装与构建：${item.name}`);
 if(!process.argv.includes('--existing')){npm(['ci','--ignore-scripts','--no-audit','--no-fund'],dir);npm(['run','build','--if-present'],dir);npm(['run','check','--if-present'],dir);}
 const require=createRequire(path.join(dir,'package.json'));
 if(item.name!=='engine')for(const dependency of item.name==='content'?['engine']:['engine','content']){
  const resolved=require.resolve(`@universe-atlas/${dependency}/package.json`);
  assert.ok(resolved.startsWith(path.join(dir,'node_modules')+path.sep),'不得从父目录或其他仓借用依赖');
  assert.equal((await json(resolved)).version,manifest.versions[dependency]);
  assert.equal(await hash(path.join(dir,'vendor',manifest.packages[dependency].file)),manifest.packages[dependency].sha256);
 }
}
const siteConfig=await json(path.join(repos,'home/site.config.json'));
const origins=new Map(Object.entries(siteConfig.sites).map(([site,config])=>[config.origin,site]));
let links=0,modules=0;
for(const site of ['home','space','time','temperature','elements','mass']){
 const dist=path.join(repos,site,'dist'),release=await json(path.join(dist,'release.json'));
 assert.equal(release.contentSnapshot,manifest.contentSnapshot);assert.equal(release.engineVersion,manifest.versions.engine);
 if(site!=='home'){const entries=await json(path.join(dist,'content.json'));assert.ok(entries.every(e=>e.id.startsWith(site+'.')));}
 if(site==='time'||site==='temperature'||site==='elements'||site==='mass'){await assert.rejects(fs.access(path.join(dist,'models.js')));await assert.rejects(fs.access(path.join(dist,'environment.js')));}
 const checked=await checkStaticSite({directory:dist,origin:[...origins].find(([,name])=>name===site)[0],roots:new Map([...origins].map(([origin,name])=>[origin,path.join(repos,name,'dist')]))});links+=checked.links;modules+=checked.modules;
 assert.equal(await fs.readFile(path.join(dist,'robots.txt'),'utf8'),'User-agent: *\nDisallow: /\n');
}
// 真实篡改检测：使用导出仓安装的引擎执行，不允许悄悄接受被修改的数据。
const space=path.join(repos,'space'),contentRoot=path.join(space,'node_modules/@universe-atlas/content'),payload=path.join(contentRoot,'dist/content.json'),original=await fs.readFile(payload,'utf8');
const {buildSite}=await import(pathToFileURL(path.join(space,'node_modules/@universe-atlas/engine/packages/build/index.mjs')).href);
const sibling=await hash(path.join(repos,'time/dist/release.json'));
try{const changed=JSON.parse(original);changed[0].quantity.value=123;await fs.writeFile(payload,JSON.stringify(changed));await assert.rejects(buildSite({siteRoot:space,contentRoot}),/快照校验失败/);}finally{await fs.writeFile(payload,original);}
assert.equal(await hash(path.join(repos,'time/dist/release.json')),sibling,'本站变更不得改动其他站产物');
await fs.writeFile(path.join(artifacts,'verification.json'),JSON.stringify({result:'passed',repositories:manifest.repositories.map(r=>r.name),contentSnapshot:manifest.contentSnapshot,localLinks:links,moduleFiles:modules,dependencyIsolation:true,tamperRejected:true,remoteCI:'not-run',publication:'local-only'},null,2));
console.log(`八仓独立验收通过：${links} 个跨站/资源链接，${modules} 个运行模块；依赖隔离、版本快照和数据篡改拒绝。`);
