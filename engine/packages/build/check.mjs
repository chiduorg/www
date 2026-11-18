import fs from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
export async function checkJavaScript(directory){let count=0;for(const item of await fs.readdir(directory,{withFileTypes:true})){if(['dist','node_modules','vendor','.git'].includes(item.name))continue;const file=path.join(directory,item.name);if(item.isDirectory())count+=await checkJavaScript(file);else if(/\.(m?js)$/.test(item.name)){const result=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});if(result.status!==0)throw new Error(result.stderr);count++;}}return count;}
export async function checkStaticSite({directory,origin='http://local',roots=new Map([[origin,directory]])}){
 const seen=new Set();let links=0,modules=0,pages=0;
 async function module(file){if(seen.has(file))return;seen.add(file);const code=await fs.readFile(file,'utf8');modules++;
  for(const match of code.matchAll(/(?:from\s*|import\s*)['"]([^'"]+)['"]/g)){const spec=match[1];if(spec==='three'){await fs.access(path.join(directory,'vendor/three.module.js'));continue;}if(!spec.startsWith('/')&&!spec.startsWith('.'))continue;const target=spec.startsWith('/')?path.join(directory,spec):path.resolve(path.dirname(file),spec);await fs.access(target);await module(target);}
 }
 async function visit(dir){for(const item of await fs.readdir(dir,{withFileTypes:true})){const file=path.join(dir,item.name);if(item.isDirectory()){await visit(file);continue;}if(!item.name.endsWith('.html'))continue;pages++;const html=await fs.readFile(file,'utf8'),base=new URL(path.relative(directory,file).replaceAll('\\','/'),origin+'/');
  for(const match of html.matchAll(/(?:href|src|action)="([^"]+)"/g)){const value=match[1].replaceAll('&amp;','&');if(value.startsWith('#'))continue;const url=new URL(value,base),targetRoot=roots.get(url.origin);if(!targetRoot)continue;const target=path.resolve(targetRoot,'.'+decodeURIComponent(url.pathname));if(target!==path.resolve(targetRoot)&&!target.startsWith(path.resolve(targetRoot)+path.sep))throw new Error('资源路径越界');await fs.access(url.pathname.endsWith('/')?path.join(target,'index.html'):target).catch(()=>{throw new Error(`断链 ${path.relative(directory,file)} → ${url.href}`);});links++;}
  for(const match of html.matchAll(/<script[^>]+src="([^"]+)"/g)){const spec=match[1];if(/^https?:/.test(spec))continue;await module(spec.startsWith('/')?path.join(directory,spec):path.resolve(path.dirname(file),spec));}
 }}
 await visit(directory);return {pages,links,modules};
}
export async function checkSite(root){const siteRoot=path.resolve(root),config=JSON.parse(await fs.readFile(path.join(siteRoot,'dist/project.json'),'utf8')),syntaxFiles=await checkJavaScript(siteRoot);let result={syntaxFiles};
 if(config.profile?.startsWith('standalone'))result={...result,...await checkStaticSite({directory:path.join(siteRoot,'dist'),origin:config.sites[config.site].origin})};
 console.log(`${config.site} 检查通过：${JSON.stringify(result)}`);return result;
}
