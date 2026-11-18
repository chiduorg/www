import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {formatLength,formatMass,formatRatio,logSize} from '../engine/packages/quantities/index.js';
import {articleUrl,exploreUrl,searchEntries,siteOf} from '../engine/packages/content/routes.js';
import {validateEntry} from '../engine/packages/content/index.js';
import {compileContent} from '../engine/packages/content/compile.mjs';
import {escapeHTML} from '../home/render.mjs';
import {renderMarkdown} from '../engine/packages/content/markdown.mjs';
import {siteUrl} from '../engine/packages/content/routes.js';
const root=path.resolve(import.meta.dirname,'..');
assert.equal(formatLength(1000),'1 km');
assert.equal(formatLength(.001),'1 mm');
assert.equal(formatLength(.000001),'1 μm');
assert.equal(formatLength(1e-9),'1 nm');
assert.equal(formatRatio(12750000,1.7),'7,500,000');
assert.equal(logSize(1e26),26);
assert.equal(formatMass(70),'70 kg');
assert.equal(formatMass(5.972e24),'5.97 × 10²⁴ kg');
assert.throws(()=>logSize(0));
assert.throws(()=>logSize(Infinity));
const entries=JSON.parse(await fs.readFile(path.join(root,'dist/content.json'),'utf8'));
assert.ok(entries.length>=285,'迁移条目不得意外丢失');
const baseEntry=entries.find(entry=>entry.id==='space.earth');
const massEntry={...baseEntry,id:'mass.earth',dimension:'mass',quantity:{...baseEntry.quantity,value:5.972e24,unit:'kg'},mass:{type:'total',includesDarkMatter:false}};
assert.equal(validateEntry(massEntry).length,0,'合法质量条目应通过校验');
assert.ok(validateEntry({...massEntry,quantity:{...massEntry.quantity,value:0}}).length,'质量必须为正数');
assert.ok(validateEntry({...massEntry,quantity:{...massEntry.quantity,bound:'both'}}).length,'bound 只允许 upper/lower');
assert.ok(validateEntry({...massEntry,mass:{type:'total'}}).length,'mass.includesDarkMatter 必须显式声明');
assert.ok(validateEntry({...massEntry,id:'mass.earth',dimension:'mass',quantity:{...massEntry.quantity,unit:'K'}}).length,'质量单位必须是 kg');
assert.equal(escapeHTML('<script>"&'), '&lt;script&gt;&quot;&amp;');
assert.ok(validateEntry({...baseEntry,reviewStatus:'reviewed',sources:[]}).length);
assert.ok(validateEntry({...baseEntry,quantity:{...baseEntry.quantity,unit:'wrong'}}).length);
assert.ok(searchEntries(entries,'EARTH').some(e=>e.id==='space.earth'));
assert.equal(searchEntries(entries,'地球')[0].id,'space.earth','名称精确匹配应优先于摘要匹配');
assert.ok(searchEntries(entries,'地球').some(e=>e.id.startsWith('time.')),'跨维度搜索应覆盖摘要');
assert.ok(searchEntries(entries,'地球','space').every(e=>e.id.startsWith('space.')));
assert.equal(searchEntries(entries,'不存在的关键词XYZ').length,0);
const config=JSON.parse(await fs.readFile(path.join(root,'config/project.json'),'utf8'));
const compiled=await compileContent(root,config);
const snapshot=JSON.parse(await fs.readFile(path.join(root,'dist/content-snapshot.json'),'utf8'));
assert.equal(compiled.snapshot.id,snapshot.id,'同一内容输入必须产生相同快照');
assert.equal(compiled.report.timeBeyondPresent.length,0,'已复核的地球事件不应超出现在');
assert.ok(compiled.report.unplottableTime.every(item=>entries.find(e=>e.id===item.id).quantity.value===null||entries.find(e=>e.id===item.id).chronology?.plot===false));
assert.ok(validateEntry({...baseEntry,quantity:{...baseEntry.quantity,value:null}}).length,'未定量值必须显式声明');
const markdown=renderMarkdown('**粗体**\n\n<script>alert(1)</script>\n\n[坏链接](javascript:alert(1))\n\n来源[1]',[{url:'https://example.org'}]);
assert.ok(markdown.includes('<strong>粗体</strong>'));assert.ok(!markdown.includes('<script>'));assert.ok(!markdown.includes('href="javascript:'));assert.ok(markdown.includes('href="#source-1"'));
assert.equal(siteUrl('time','?entry=time.present',{sites:{time:{origin:'https://time.example.org',path:'/'}}}),'https://time.example.org/?entry=time.present');
const htmlFiles=[];
async function listHTML(dir){for(const item of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())await listHTML(file);else if(item.name.endsWith('.html'))htmlFiles.push(file);}}
await listHTML(path.join(root,'dist'));
assert.equal(await fs.access(path.join(root,'dist/entry')).then(()=>true,()=>false),false,'门户不再承载条目页');
let checkedLinks=0,canonicalPages=0,oldPathPages=0;
const axisDirs=new Set(['space','time','temperature','elements','mass']);
for(const file of htmlFiles){
 const html=await fs.readFile(file,'utf8'),relative=path.relative(path.join(root,'dist'),file).split(path.sep).join('/'),axis=axisDirs.has(relative.split('/')[0])?relative.split('/')[0]:'home';
 const siteRoot=axis==='home'?path.join(root,'dist'):path.join(root,'dist',axis);
 for(const match of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)){const url=new URL(match[1].replaceAll('&amp;','&'),'http://local');const target=path.join(siteRoot,decodeURIComponent(url.pathname));await fs.access(url.pathname.endsWith('/')?path.join(target,'index.html'):target).catch(()=>assert.fail(`断链 ${relative} → ${url.pathname}`));checkedLinks++;}
 const canonical=(html.match(/<link rel="canonical" href="([^"]+)"/)||[])[1];
 if(canonical){canonicalPages++;assert.ok(canonical.startsWith(`https://${axis==='home'?'chidu.org':axis+'.chidu.org'}/`),`canonical 主机错误 ${relative} → ${canonical}`);}
 if(/https:\/\/chidu\.org\/(space|time|temperature|elements|mass)\//.test(html))oldPathPages++;
}
assert.equal(oldPathPages,0,'不得残留 chidu.org/<axis>/ 旧形态');
// 全量跨域绝对链接校验：扫描 HTML/JSON/XML/TXT 中所有 chidu.org 与 *.chidu.org 绝对 URL，按主机映射回产物目录。
const hostRoots=new Map([['chidu.org',path.join(root,'dist')],['space.chidu.org',path.join(root,'dist/space')],['time.chidu.org',path.join(root,'dist/time')],['temperature.chidu.org',path.join(root,'dist/temperature')],['elements.chidu.org',path.join(root,'dist/elements')],['mass.chidu.org',path.join(root,'dist/mass')],['static.chidu.org',path.join(root,'dist/static')]]);
const artifactFiles=[];
async function listArtifacts(dir){for(const item of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())await listArtifacts(file);else if(['.html','.json','.xml','.txt'].includes(path.extname(item.name)))artifactFiles.push(file);}}
await listArtifacts(path.join(root,'dist'));
const absolutePattern=/https:\/\/(?:[a-z0-9-]+\.)?chidu\.org[^\s"'<>\\]*/gi;
const targetCache=new Map();
async function resolveTarget(hostname,pathname){
 const key=`${hostname}${pathname}`;
 if(targetCache.has(key))return targetCache.get(key);
 const base=hostRoots.get(hostname);
 let result={ok:false,reason:'unknown-host'};
 if(base){
  let decoded;try{decoded=decodeURIComponent(pathname);}catch{decoded=pathname;}
  const target=path.resolve(base,`.${decoded}`);
  if(target===base||target.startsWith(base+path.sep)){
   const candidates=pathname.endsWith('/')?[path.join(target,'index.html')]:[target,path.join(target,'index.html'),`${target}.html`];
   result={ok:false,reason:'missing'};
   for(const candidate of candidates)if(await fs.stat(candidate).then(stat=>stat.isFile(),()=>false)){result={ok:true,reason:null};break;}
  }else result={reason:'out-of-root',ok:false};
 }
 targetCache.set(key,result);return result;
}
const deprecatedPrefixes=new Set(['space','time','energy','temperature','elements','mass']);
const absolute={refs:0,reachable:0,broken:0,crossSite:0,intraSite:0,deprecated:0,unique:new Set(),brokenItems:[],deprecatedItems:[]};
for(const file of artifactFiles){
 const relative=path.relative(path.join(root,'dist'),file).split(path.sep).join('/'),first=relative.split('/')[0];
 const sourceHost=axisDirs.has(first)?`${first}.chidu.org`:first==='static'?'static.chidu.org':'chidu.org';
 const text=await fs.readFile(file,'utf8');
 for(const match of text.matchAll(absolutePattern)){
  const raw=match[0].replaceAll('&amp;','&').replace(/[.,;:!?)\]}>，。；：！？）】》]+$/u,'');
  let url;try{url=new URL(raw);}catch{continue;}
  if(!/^(?:[a-z0-9-]+\.)?chidu\.org$/i.test(url.hostname))continue;
  url.hash='';
  const href=`${url.origin}${url.pathname}${url.search}`;
  absolute.refs++;absolute.unique.add(href);
  if(url.hostname===sourceHost)absolute.intraSite++;else absolute.crossSite++;
  if(url.hostname==='chidu.org'&&deprecatedPrefixes.has(url.pathname.split('/')[1])){absolute.deprecated++;absolute.deprecatedItems.push(`${href} ← ${relative}`);}
  const resolved=await resolveTarget(url.hostname,url.pathname);
  // static.chidu.org 根是配置里的资产基址，不是可导航页面；只允许这一种无文件形式。
  if(resolved.ok||(url.hostname==='static.chidu.org'&&url.pathname==='/'))absolute.reachable++;
  else{absolute.broken++;absolute.brokenItems.push(`${href} ← ${relative}（${resolved.reason}）`);}
 }
}
assert.equal(absolute.broken,0,`跨站绝对链接断链 ${absolute.broken} 条：\n${absolute.brokenItems.slice(0,20).join('\n')}`);
assert.equal(absolute.deprecated,0,`废弃路径引用 ${absolute.deprecated} 条：\n${absolute.deprecatedItems.slice(0,20).join('\n')}`);
// 跨域 related 全量覆盖：每一条跨轴授权链接都必须出现在已扫描的绝对 URL 集合中。
const byIdAll=new Map(entries.map(entry=>[entry.id,entry]));
const relatedMissing=[];
let relatedCross=0;
for(const entry of entries)for(const id of entry.related||[]){
 const target=byIdAll.get(id);
 if(!target||siteOf(target)===siteOf(entry))continue;
 relatedCross++;
 const href=articleUrl(target,config);
 if(!absolute.unique.has(href))relatedMissing.push(`${entry.id} → ${href}`);
}
assert.equal(relatedMissing.length,0,`跨域 related 未进入全量校验 ${relatedMissing.length} 条：\n${relatedMissing.slice(0,20).join('\n')}`);
for(const entry of entries){const axis=entry.id.split('.')[0],slug=entry.id.split('.')[1],file=path.join(root,'dist',axis,'entry',axis,slug,'index.html'),html=await fs.readFile(file,'utf8');assert.ok(html.includes('<article class="knowledge-article">'));assert.ok(html.includes(entry.title));assert.ok(html.includes(entry.id));assert.ok(html.includes(`<link rel="canonical" href="https://${axis}.chidu.org/entry/${axis}/${slug}/">`));if(entry.quantity.value!==null&&!compiled.report.unplottableTime.some(e=>e.id===entry.id))assert.ok(html.includes(exploreUrl(entry,config)));else assert.ok(!html.includes('href="'+exploreUrl(entry,config)+'"'),`未定条目不应跳入数量轴 ${entry.id}`);}
async function checkJS(dir){for(const name of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,name.name);if(name.isDirectory()&&!['dist','node_modules','vendor','.git'].includes(name.name))await checkJS(file);else if(/\.(js|mjs)$/.test(name.name)){const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});assert.equal(result.status,0,result.stderr);}}}
for(const name of ['scripts','engine','home','space','time','temperature','elements','mass'])await checkJS(path.join(root,name));
console.log(`校验通过：${entries.length} 篇静态文章、${checkedLinks} 个本地链接、全量绝对链接 ${absolute.refs} 条引用 / ${absolute.unique.size} 个唯一 URL（可达 ${absolute.reachable}、断链 ${absolute.broken}、跨域 ${absolute.crossSite}、站内 ${absolute.intraSite}、废弃路径 ${absolute.deprecated}）、跨域 related ${relatedCross} 条全覆盖、搜索与维度筛选、确定性快照、单位边界与源码语法。`);
