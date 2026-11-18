import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {transform,build as esbuildBuild} from 'esbuild';
import {siteUrl,canonicalBase} from '../content/routes.js';
import {renderArticlePages} from './article.mjs';
import {applyFooter, applyAppNav} from './chrome.mjs';
import {renderLegalPages} from './legal.mjs';
import {measureLabel,entryKey,reviewLabel} from '../content/presentation.js';
import {scientific} from '../quantities/index.js';
import {validateEntries,validateCatalog} from '../content/validate.js';
const engineRoot=path.resolve(import.meta.dirname,'../..');
const readJSON=async file=>JSON.parse(await fs.readFile(file,'utf8'));
const hash=value=>createHash('sha256').update(value).digest('hex');
export const destinationURL=siteUrl;
const attr=value=>String(value??'').replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;');
export function siteBasePath(config,site){const value=config.sites?.[site]?.path||(site==='home'?'/':`/${site}/`);return value.endsWith('/')?value:value+'/';}
export function pagePath(dist,file){const relative=path.relative(dist,file).replaceAll('\\','/');return relative==='index.html'?'':relative.endsWith('/index.html')?relative.slice(0,-10):relative;}
export function seoAssets(html,{pageUrl,imageUrl,imageAlt,description}){const safeUrl=attr(pageUrl),safeAlt=attr(imageAlt),safeDescription=attr(description);if(pageUrl&&!/rel="canonical"/.test(html)&&!/name="robots" content="noindex/.test(html))html=html.replace('</head>',`<link rel="canonical" href="${safeUrl}">`+'</head>');if(!pageUrl)return html;const tags=[];if(!/property="og:url"/.test(html))tags.push(`<meta property="og:url" content="${safeUrl}">`);if(imageUrl&&!/property="og:image"/.test(html))tags.push(`<meta property="og:image" content="${attr(imageUrl)}">`,`<meta property="og:image:width" content="1200">`,`<meta property="og:image:height" content="630">`,`<meta property="og:image:alt" content="${safeAlt}">`);if(!/twitter:title/.test(html))tags.push(`<meta name="twitter:title" content="${(html.match(/<meta property="og:title" content="([^"]*)"/)||[])[1]||safeAlt}">`);if(imageUrl&&!/name="twitter:image"/.test(html))tags.push(`<meta name="twitter:image" content="${attr(imageUrl)}">`,`<meta name="twitter:image:alt" content="${safeAlt}">`);if(description&&!/name="twitter:description"/.test(html))tags.push(`<meta name="twitter:description" content="${safeDescription}">`);if(tags.length)html=html.replace('</head>',tags.join('')+'</head>');return html.replace(/<meta name="twitter:card" content="summary">/,'<meta name="twitter:card" content="summary_large_image">');}
function calendarText(seconds,entries){
 const present=entries.find(item=>entryKey(item)==='present')?.quantity.value;
 if(!present||!Number.isFinite(seconds))return '';
 const fraction=Math.min(1,Math.max(0,seconds/present)),yearSeconds=Math.min(31535999,Math.floor(fraction*31536000));
 const date=new Date(Date.UTC(2025,0,1)+yearSeconds*1000);
 return `按参考数值折算成宇宙一年：${date.getUTCMonth()+1}月${date.getUTCDate()}日 ${String(date.getUTCHours()).padStart(2,'0')}:${String(date.getUTCMinutes()).padStart(2,'0')}:${String(date.getUTCSeconds()).padStart(2,'0')}`;
}
// 首屏文本在构建期直接写入 HTML：标题、条目名、当前量值先于 JS 与 three.js 到达即可读。
export function applyFirstScreen(html,site,entries){
 if(!['time','temperature'].includes(site))return html;
 const key=site==='time'?'first-stars':'sun-surface';
 const entry=entries.find(item=>entryKey(item)===key);if(!entry)return html;
 const esc=value=>String(value??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
 const quantity=entry.quantity,title=esc(entry.title),en=esc((entry.titleEn||key.replaceAll('-',' ')).toUpperCase());
 let value;
 if(site==='temperature'){
  const kelvin=quantity.value,prefix=quantity.bound==='upper'?'≤ ':quantity.bound==='lower'?'≥ ':quantity.approximate?'≈ ':'';
  value=prefix+scientific(kelvin,kelvin>=0&&kelvin<1000?6:4)+' '+(quantity.unit==='K'?'K':'°C');
 }else value=esc(entry.displayValue);
 const readout=site==='time'?esc(String(entry.displayValue).replace(/^t\s*=\s*/,'')):value;
 const context=site==='time'?esc(calendarText(quantity.value,entries)):'粒子运动示意';
 let next=html
  .replace('<h3 id="event-title">正在读取内容</h3>',`<h3 id="event-title">${title}</h3>`)
  .replace('<div class="event-en" id="event-en"></div>',`<div class="event-en" id="event-en">${en}</div>`)
  .replace('<div class="event-value" id="event-value"></div>',`<div class="event-value" id="event-value">${value}</div>`)
  .replace('<div class="station-eyebrow" id="event-category"></div>',`<div class="station-eyebrow" id="event-category">${esc(entry.category||'尺度探索')}</div>`)
  .replace('<p class="event-summary" id="event-summary"></p>',`<p class="event-summary" id="event-summary">${esc(entry.summary||'')}</p>`)
  .replace('<div class="readout-value" id="readout-value"></div>',`<div class="readout-value" id="readout-value">${readout}</div>`)
  .replace('<div class="readout-context" id="readout-context"></div>',`<div class="readout-context" id="readout-context">${context}</div>`)
  .replace('<strong id="slider-current"></strong>',`<strong id="slider-current">${title}</strong>`)
  .replace('<div class="scene-phase" id="scene-phase" aria-live="polite">正在准备图景</div>','<div class="scene-phase" id="scene-phase" aria-live="polite">图景稍后加载 · 图文可读</div>')
  .replace('<span id="review-state">资料待科学审核</span>',`<span id="review-state">${esc(reviewLabel(entry))}</span>`)
  .replace('<section class="station-caption">',`<section class="station-caption"><h2 id="mobile-event-title" class="mobile-event-title">${title}</h2>`);
 return next;
}
export function rewriteNavigation(html,site,config){
 return html.replace(/(href|action)="(\/[^"]*)"/g,(whole,attribute,url)=>{
  const scale=url.match(/^\/(space|time|temperature|elements|mass)\/(.*)$/),article=url.match(/^\/entry\/(space|time|temperature|elements|mass)\/(.*)$/);let next;
  if(article)next=destinationURL(article[1],`entry/${article[1]}/${article[2]}`,config);
  else if(scale)next=destinationURL(scale[1],scale[2],config);
  else if(url==='/'||/^\/(library\/|journeys\/|learning\/|quiz\/|data\/|contribute\/|about\/|license\/|architecture\.html|assets\.html|THIRD_PARTY_NOTICES\.md)/.test(url))next=destinationURL('home',url,config);
  return next?`${attribute}="${next.replaceAll('&','&amp;')}"`:whole;
 });
}
export async function buildSite({siteRoot,contentRoot,renderPages,configuration}){
 const root=await fs.realpath(siteRoot),config=configuration||await readJSON(path.join(root,'site.config.json')),site=config.site;
 if(!['home','space','time','temperature','elements','mass'].includes(site))throw new Error('未知站点');
 const ownPackage=await readJSON(path.join(root,'package.json')),enginePackage=await readJSON(path.join(engineRoot,'package.json')),contentPackage=await readJSON(path.join(contentRoot,'package.json'));
 if(ownPackage.atlas.engine!==enginePackage.version||ownPackage.atlas.content!==contentPackage.version)throw new Error('安装的内容或引擎版本与站点锁定版本不符');
 const snapshot=await readJSON(path.join(contentRoot,'dist/content-snapshot.json')),report=await readJSON(path.join(contentRoot,'dist/build-report.json'));
 const raw=await fs.readFile(path.join(contentRoot,'dist/content.json'),'utf8'),all=JSON.parse(raw);
 if(snapshot.dataHash!==hash(JSON.stringify(all))||snapshot.entryCount!==all.length||snapshot.version!==contentPackage.version)throw new Error('内容包快照校验失败');
 if(config.contentSnapshot&&config.contentSnapshot!==snapshot.id)throw new Error('内容快照与站点锁定快照不符');
 const effective={...config,contentVersion:contentPackage.version,engineVersion:enginePackage.version};
 const entries=site==='home'?all:all.filter(e=>e.id.startsWith(site+'.'));
 validateEntries(entries,{allIds:new Set(all.map(e=>e.id)),allowEmpty:site==='mass'});
 if(site==='time'||site==='temperature'){const registry=await fs.readFile(path.join(root,'src/subjects.js'),'utf8');for(const entry of entries)if(entry.visual?.scene&&!registry.includes(`'${entry.visual.scene}':`))throw new Error(`未注册图景 ${entry.id}: ${entry.visual.scene}`);}
 if(site==='space'){const featured=JSON.parse(await fs.readFile(path.join(root,'src/featured-map.json'),'utf8')),allowed=new Set(['space.object',...Object.values(featured).map(v=>v.scene)]);for(const entry of entries)if(entry.visual?.scene&&!allowed.has(entry.visual.scene))throw new Error(`未注册图景 ${entry.id}: ${entry.visual.scene}`);}
 if(['space','time','temperature'].includes(site)){const source=await fs.readFile(path.join(root,'src/object-templates.js'),'utf8'),registry=source.match(/const (?:builders|templates)\s*=\s*\{([^}]+)\}/)?.[1];if(!registry)throw new Error('缺少模型模板注册表');const names=new Set(registry.split(',').map(item=>item.trim().split(':')[0].replaceAll("'",'').replaceAll('"','')));for(const entry of entries)if(entry.visual?.scene?.endsWith('.object')&&!names.has(entry.visual.template))throw new Error(`未注册模型模板 ${entry.id}: ${entry.visual?.template}`);
}
 const dist=path.resolve(root,'dist');
 // 只清理由当前站点产生的 dist；拒绝解析到源码根或仓库外的路径。
 if(dist!==path.join(root,'dist')||!dist.startsWith(root+path.sep))throw new Error('无效构建目录');
 const stat=await fs.lstat(dist).catch(()=>null);if(stat?.isSymbolicLink())throw new Error('构建目录不能是符号链接');
 await fs.rm(dist,{recursive:true,force:true});await fs.mkdir(dist,{recursive:true});
 await fs.cp(path.join(root,'src'),dist,{recursive:true,filter:file=>!['styles.css','refined.css','brand.js','assets'].includes(path.basename(file))});
 if(['time','temperature'].includes(site)){const firstScreen=path.join(dist,'index.html');await fs.writeFile(firstScreen,applyFirstScreen(await fs.readFile(firstScreen,'utf8'),site,entries));}
 await fs.mkdir(path.join(dist,'engine'),{recursive:true});
 await fs.cp(path.join(engineRoot,'packages'),path.join(dist,'engine'),{recursive:true,filter:file=>!file.endsWith('.mjs')&&path.basename(file)!=='build'});
 for(const [from,to]of [['base.css','styles.css'],['refined.css','refined.css'],['theme.css','theme.css'],['legal.css','legal.css'],['brand.js','brand.js'],['credits.html','assets.html'],['favicon.svg','favicon.svg']])await fs.copyFile(path.join(engineRoot,'packages/ui',from),path.join(dist,to));
 await fs.cp(path.join(engineRoot,'packages/ui/og'),path.join(dist,'og'),{recursive:true});
 await fs.cp(path.join(contentRoot,'assets'),path.join(dist,'media'),{recursive:true});
 await fs.mkdir(path.join(dist,'licenses'),{recursive:true});
 for(const [from,to]of [['LICENSE','licenses/LICENSE.txt'],['LICENSE-CONTENT','licenses/LICENSE-CONTENT.txt']]){
  const candidates=[path.join(root,from),path.join(engineRoot,'..',from),path.join(engineRoot,'../../..',from)];
  const source=(await Promise.all(candidates.map(file=>fs.stat(file).catch(()=>null)))).findIndex(item=>item?.isFile());
  if(source>=0)await fs.copyFile(candidates[source],path.join(dist,to));
 }
 {
  const candidates=[path.join(root,'docs/THIRD_PARTY_NOTICES.md'),path.join(engineRoot,'..','docs/THIRD_PARTY_NOTICES.md'),path.join(engineRoot,'../../..','docs/THIRD_PARTY_NOTICES.md')];
  const source=(await Promise.all(candidates.map(file=>fs.stat(file).catch(()=>null)))).findIndex(item=>item?.isFile());
  if(source>=0){
   const notice=(await fs.readFile(candidates[source],'utf8')).replace(/\]\(third-party-sources\.csv\)/g,'](https://chidu.org/third-party-sources.csv)');
   await fs.writeFile(path.join(dist,'THIRD_PARTY_NOTICES.md'),notice);
   if(site==='home'){
    const csvCandidates=[path.join(root,'docs/third-party-sources.csv'),path.join(engineRoot,'..','docs/third-party-sources.csv'),path.join(engineRoot,'../../..','docs/third-party-sources.csv')];
    const csvSource=(await Promise.all(csvCandidates.map(file=>fs.stat(file).catch(()=>null)))).findIndex(item=>item?.isFile());
    if(csvSource>=0)await fs.copyFile(csvCandidates[csvSource],path.join(dist,'third-party-sources.csv'));
   }
  }
 }
 if(['space','time','temperature','elements','mass'].includes(site)){
  await fs.mkdir(path.join(dist,'vendor'),{recursive:true});
  const threeRoot=path.resolve(path.dirname(fileURLToPath(import.meta.resolve('three'))),'..');
  // three.js 只用于延迟加载的 3D 视口，压缩其传输体积；导出名不变，importmap 仍指向同名文件。
  for(const name of ['three.module.js','three.core.js']){
   const {code}=await transform(await fs.readFile(path.join(threeRoot,'build',name),'utf8'),{loader:'js',minify:true,legalComments:'none',target:'es2020'});
   await fs.writeFile(path.join(dist,'vendor',name),code);
  }
  await fs.copyFile(path.join(threeRoot,'LICENSE'),path.join(dist,'vendor/THREE-LICENSE.txt'));
  // GLTFLoader 及其内部工具一并打包，three 保持外部依赖，避免引入第二份 Three。
  const gltfBundle=await esbuildBuild({entryPoints:[path.join(threeRoot,'examples/jsm/loaders/GLTFLoader.js')],bundle:true,format:'esm',platform:'neutral',target:'es2020',external:['three'],write:false,minify:true,legalComments:'none'});
  await fs.writeFile(path.join(dist,'vendor/GLTFLoader.js'),gltfBundle.outputFiles[0].text);
 }
 const payload={'content.json':entries,'project.json':effective,'content-snapshot.json':snapshot,'build-report.json':report,'release.json':{site,version:ownPackage.version,engineVersion:enginePackage.version,contentVersion:contentPackage.version,contentSnapshot:snapshot.id,dataHash:snapshot.dataHash,entryCount:entries.length,buildProfile:config.profile||'standalone'}};
 if(site!=='home')payload['entries.json']=entries.map(({body,review,rights,sourcePath,sources,related,uncertainty,...rest})=>({...rest,legacy:rest.legacy?{id:rest.legacy.id}:undefined}));
 if(site==='home'){
  if(!renderPages)throw new Error('门户缺少页面生成器');
  const catalog=all.map(entry=>{const {id,title,titleEn,summary,category,displayValue,reviewStatus,tags,measureType,mode,zone,conceptGroup,quantity,visual}=entry;return {id,title,titleEn,summary,category,displayValue,reviewStatus,tags,measureType,mode,zone,conceptGroup,value:quantity.value,unit:quantity.unit,measure:quantity.measure,measureLabel:measureLabel(entry),visual:visual?.template||''};});
  validateCatalog(catalog,all);payload['catalog.json']=catalog;
  const pages=renderPages(all,effective,snapshot,report);
  for(const [relative,html]of pages){const target=path.resolve(dist,relative);if(!target.startsWith(dist+path.sep))throw new Error('非法页面路径');await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,html);}
  for(const entry of all){const [type,slug]=entry.id.split('.');const target=path.join(dist,'source',type,slug+'.md');await fs.mkdir(path.dirname(target),{recursive:true});await fs.copyFile(path.join(contentRoot,'entries',type,path.basename(entry.sourcePath)),target);}
 }
 for(const [name,value]of Object.entries(payload))await fs.writeFile(path.join(dist,name),JSON.stringify(value,null,2));
 const legalPages=renderLegalPages({config:effective,site});
 for(const [relative,html]of legalPages){const target=path.resolve(dist,relative);if(!target.startsWith(dist+path.sep))throw new Error('非法法律页路径');await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,html);}
 if(site!=='home'){
  const articlePages=renderArticlePages({entries,all,config:effective,site,snapshot,report});
  for(const [relative,html]of articlePages){const target=path.resolve(dist,relative);if(!target.startsWith(dist+path.sep))throw new Error('非法条目页路径');await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,html);}
  for(const entry of entries){const slug=entry.id.split('.')[1],target=path.join(dist,'source',site,slug+'.md');await fs.mkdir(path.dirname(target),{recursive:true});await fs.copyFile(path.join(contentRoot,'entries',site,path.basename(entry.sourcePath)),target);}
 }
 const iconHref=effective.staticOrigin?`${effective.staticOrigin}/favicon.svg`:'/favicon.svg';
 const boot=`<link rel="icon" type="image/svg+xml" href="${iconHref}"><script type="application/json" id="atlas-config">${JSON.stringify(effective).replaceAll('<','\\u003c')}</script>`;
 async function prepareHTML(dir){for(const item of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())await prepareHTML(file);else if(item.name.endsWith('.html')){let html=await fs.readFile(file,'utf8');html=applyFooter(html,effective);html=applyAppNav(html,site);if(!html.includes('/legal.css'))html=html.replace('</head>','<link rel="stylesheet" href="/legal.css"></head>');html=rewriteNavigation(html,site,effective).replace('</head>',boot+'</head>');const relative=pagePath(dist,file),ogSite=relative.match(/^entry\/(space|time|temperature|elements|mass)\//)?.[1]||site,description=(html.match(/<meta name="description" content="([^"]*)"/)||[])[1]||effective.tagline;const pageOrigin=canonicalBase(effective,site),ogOrigin=effective.staticOrigin||pageOrigin;const pageUrl=pageOrigin?new URL(relative||'',pageOrigin).href:'';const imageUrl=ogOrigin?new URL(`/og/${ogSite}.png?v=${encodeURIComponent(effective.contentVersion)}`,ogOrigin).href:'';await fs.writeFile(file,seoAssets(html,{pageUrl,imageUrl,imageAlt:`${effective.name} · ${effective.tagline}`,description}));}}}
 async function rewriteStatic(dir){if(!effective.staticOrigin)return;const base=effective.staticOrigin.replace(/\/$/,'');for(const item of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())await rewriteStatic(file);else if(/\.(html|js|css)$/.test(item.name)){const text=await fs.readFile(file,'utf8');const next=text.replace(/(["'(])\/(media|vendor|og)\//g,(whole,quote,name)=>`${quote}${base}/${name}/`).replace(/(["'(])\/favicon\.svg/g,(whole,quote)=>`${quote}${base}/favicon.svg`);if(next!==text)await fs.writeFile(file,next);}}}
 if(site!=='home')await fs.writeFile(path.join(dist,'404.html'),rewriteNavigation(`<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>未找到这个坐标 · ${config.name}</title><meta name="robots" content="noindex"><link rel="stylesheet" href="/styles.css"></head><body><main style="max-width:640px;margin:15vh auto;padding:24px"><p>404 / OUTSIDE THE ATLAS</p><h1>没有找到这个坐标。</h1><p>试试从知识库找到想了解的对象。</p><p><a href="/library/">回到知识库 →</a></p></main></body></html>`,site,effective));
 await prepareHTML(dist);
 await rewriteStatic(dist);
 const publicBase=canonicalBase(effective,site),base=publicBase?new URL(publicBase):null;
 await fs.writeFile(path.join(dist,'robots.txt'),base?'User-agent: *\nAllow: /\nSitemap: '+new URL(site==='home'?'sitemap.xml':'sitemap.xml',base).href+'\n':'User-agent: *\nDisallow: /\n');
 if(base){
  const urls=[];async function list(dir){for(const item of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory())await list(file);else if(item.name==='index.html'){const html=await fs.readFile(file,'utf8');if(!html.includes('noindex'))urls.push(new URL(pagePath(dist,file),base).href);}}}await list(dist);
  const urlset=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${url.replaceAll('&','&amp;')}</loc></url>`).join('')}</urlset>`;
  if(site==='home'){
   await fs.writeFile(path.join(dist,'sitemap-pages.xml'),urlset);
   const maps=[new URL('sitemap-pages.xml',base).href,...['space','time','temperature','elements','mass'].map(name=>new URL('sitemap.xml',effective.sites[name].publicOrigin).href)];
   await fs.writeFile(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${maps.map(loc=>`<sitemap><loc>${loc.replaceAll('&','&amp;')}</loc></sitemap>`).join('')}</sitemapindex>`);
  } else await fs.writeFile(path.join(dist,'sitemap.xml'),urlset);
 }
 console.log(`${site} v${ownPackage.version} 构建完成：${entries.length} 条，内容 ${snapshot.id.slice(7,19)}，引擎 ${enginePackage.version}`);
 return {site,dist,snapshot,effective};
}
