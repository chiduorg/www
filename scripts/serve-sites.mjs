import path from 'node:path';
import fs from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {startStaticServer} from '@universe-atlas/engine/serve';
const root=path.resolve(import.meta.dirname,'..'),repos=path.join(root,'artifacts/repos'),sites=['home','space','time','temperature','elements','mass'],servers=[];
const json=async file=>JSON.parse(await fs.readFile(file,'utf8'));
const original=(await json(path.join(repos,'home/site.config.json'))).sites,origins={};
async function bind(directory,port){const server=startStaticServer({root:directory,port});await new Promise((resolve,reject)=>{server.once('listening',resolve);server.once('error',reject);});servers.push(server);return server;}
try{
 for(const site of sites){const requested=Number(new URL(original[site].origin).port);let server;try{server=await bind(path.join(repos,site,'dist'),requested);}catch(error){if(error.code!=='EADDRINUSE')throw error;server=await bind(path.join(repos,site,'dist'),0);}origins[site]='http://127.0.0.1:'+server.address().port;}
 if(sites.some(site=>origins[site]!==original[site].origin)){
  console.log('为本任务分配空闲端口并同步跨站链接。');
  for(const site of sites){const file=path.join(repos,site,'site.config.json'),config=await json(file);for(const target of sites)config.sites[target].origin=origins[target];await fs.writeFile(file,JSON.stringify(config,null,2));const built=spawnSync(process.execPath,['scripts/build.mjs'],{cwd:path.join(repos,site),encoding:'utf8'});if(built.status!==0)throw new Error(built.stderr||built.stdout);}
 }
 const manifest=await json(path.join(root,'artifacts/release-manifest.json'));manifest.origins=origins;await fs.writeFile(path.join(root,'artifacts/release-manifest.json'),JSON.stringify(manifest,null,2));
 await fs.writeFile(path.join(root,'config/local-origins.json'),JSON.stringify(origins,null,2));
 for(const site of sites)console.log(site+': '+origins[site]+'/');
 for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>{for(const server of servers)server.close();});
}catch(error){for(const server of servers)server.close();console.error(error.message);process.exitCode=1;}
