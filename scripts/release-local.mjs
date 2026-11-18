import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {writeContentSnapshot} from '@universe-atlas/engine/content/compile';
const root=path.resolve(import.meta.dirname,'..'),artifacts=path.join(root,'artifacts'),repos=path.join(artifacts,'repos'),packages=path.join(artifacts,'packages');
const readJSON=async file=>JSON.parse(await fs.readFile(file,'utf8'));
const digest=async file=>createHash('sha256').update(await fs.readFile(file)).digest('hex');
if(!process.env.npm_execpath)throw new Error('请通过 npm run release:local 执行');
function npm(args,cwd){const result=spawnSync(process.execPath,[process.env.npm_execpath,...args],{cwd,encoding:'utf8'});if(result.status!==0)throw new Error(result.stderr||result.stdout);return result.stdout;}
await fs.mkdir(packages,{recursive:true});await fs.mkdir(repos,{recursive:true});
const config=await readJSON(path.join(root,'config/project.json'));
const frozen=path.resolve(artifacts,'package-input');
if(!frozen.startsWith(artifacts+path.sep)||(await fs.lstat(frozen).catch(()=>null))?.isSymbolicLink())throw new Error('非法快照输入目录');
await fs.rm(frozen,{recursive:true,force:true});await fs.mkdir(frozen,{recursive:true});
for(const name of ['engine','content'])await fs.cp(path.join(root,name),path.join(frozen,name),{recursive:true,filter:file=>!['node_modules','.git','vendor','dist'].includes(path.basename(file))});
const {snapshot}=await writeContentSnapshot(path.join(frozen,'content'),config);
const versions={},tarballs={};
for(const name of ['engine','content']){
 const pkg=await readJSON(path.join(root,name,'package.json'));versions[name]=pkg.version;
 const packed=JSON.parse(npm(['pack','--ignore-scripts','--json','--pack-destination',packages],path.join(frozen,name)))[0];
 tarballs[name]={file:packed.filename,version:pkg.version,sha256:await digest(path.join(packages,packed.filename))};
}
const origins=await readJSON(path.join(root,'config/local-origins.json')).catch(()=>({home:'http://127.0.0.1:5490',space:'http://127.0.0.1:5491',time:'http://127.0.0.1:5492',temperature:'http://127.0.0.1:5493',elements:'http://127.0.0.1:5494',mass:'http://127.0.0.1:5495'}));
const workflow=`name: Build and check\non: [push, pull_request]\npermissions:\n  contents: read\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v7\n        with:\n          persist-credentials: false\n      - uses: actions/setup-node@v7\n        with:\n          node-version: '24'\n      - run: npm ci --ignore-scripts\n      - run: npm run build --if-present\n      - run: npm run check --if-present\n`;
const manifest={format:1,contentSnapshot:snapshot.id,versions,packages:tarballs,repositories:[],origins,publication:'local-only'};
for(const name of ['engine','content','home','space','time','temperature','elements','mass']){
 const output=path.resolve(repos,name),source=path.join(name==='engine'||name==='content'?frozen:root,name);
 if(!output.startsWith(repos+path.sep)||output===repos)throw new Error('无效导出路径');
 if((await fs.lstat(output).catch(()=>null))?.isSymbolicLink())throw new Error('导出路径不能是链接');
 await fs.rm(output,{recursive:true,force:true});
 await fs.cp(source,output,{recursive:true,filter:file=>!['node_modules','.git','vendor'].includes(path.basename(file))&&(name==='content'||path.basename(file)!=='dist')});
 const pkg=await readJSON(path.join(output,'package.json'));
 if(name!=='engine'){
  await fs.mkdir(path.join(output,'vendor'),{recursive:true});
  const needed=name==='content'?['engine']:['engine','content'];
  for(const dependency of needed)await fs.copyFile(path.join(packages,tarballs[dependency].file),path.join(output,'vendor',tarballs[dependency].file));
  const field=name==='content'?'devDependencies':'dependencies';
  for(const dependency of needed)pkg[field][`@universe-atlas/${dependency}`]='file:vendor/'+tarballs[dependency].file;
 }
 if(['home','space','time','temperature','elements','mass'].includes(name)){
  for(const file of ['LICENSE','LICENSE-CONTENT'])await fs.copyFile(path.join(root,file),path.join(output,file));
  await fs.mkdir(path.join(output,'docs'),{recursive:true});
  for(const file of ['THIRD_PARTY_NOTICES.md','third-party-sources.csv'])await fs.copyFile(path.join(root,'docs',file),path.join(output,'docs',file));
  const standalone={...config,site:name,profile:'standalone-local',publicOrigin:null,staticOrigin:null,contentSnapshot:snapshot.id,sites:Object.fromEntries(Object.entries(config.sites).map(([site,value])=>[site,{...value,path:'/',origin:origins[site],publicOrigin:null}]))};
  await fs.writeFile(path.join(output,'site.config.json'),JSON.stringify(standalone,null,2));
  await fs.writeFile(path.join(output,'release-lock.json'),JSON.stringify({site:name,contentSnapshot:snapshot.id,packages:tarballs},null,2));
  await fs.writeFile(path.join(output,'README.md'),`# 尺度 MAGNITUDE · ${name}\n\n独立站点源码；不需要其他站的源码或中央引擎服务。\n\n执行 npm ci、npm run build、npm start。默认本地入口 ${origins[name]}/。固定引擎与内容包在 vendor，版本与 SHA-256 见 release-lock.json，NPM 安装完整性另由 package-lock.json 校验。\n\nsite.config.json 保存其他站入口。当前仅本地，publicOrigin 为 null；正式发布需明确配置各站 origin 后再构建。\n\n更新引擎或内容时替换本站 vendor 包、更新依赖和锁文件，核对快照并重新构建。其他站采用自己的固定包，不会自动升级。dist 是可单独托管的静态产物。\n`);
 }
 await fs.writeFile(path.join(output,'package.json'),JSON.stringify(pkg,null,2)+'\n');
 await fs.writeFile(path.join(output,'.gitignore'),'node_modules/\ndist/\n.DS_Store\n');
 await fs.mkdir(path.join(output,'.github/workflows'),{recursive:true});
 await fs.writeFile(path.join(output,'.github/workflows/check.yml'),workflow);
 npm(['install','--package-lock-only','--ignore-scripts','--no-audit','--no-fund'],output);
 manifest.repositories.push({name,path:`repos/${name}`,version:pkg.version});console.log(`已导出独立源码：${name}`);
}
await fs.writeFile(path.join(artifacts,'release-manifest.json'),JSON.stringify(manifest,null,2));
await fs.writeFile(path.join(artifacts,'CI_NOTES.md'),'# CI 模板说明\n\n已生成各仓独立构建模板，尚未在远程 GitHub 执行。当前用户要求只在本地建设。模板采用官方 actions/checkout v7 和 setup-node v7：\n\n- https://github.com/actions/checkout\n- https://github.com/actions/setup-node\n\n本地验收使用 npm run check:release，验证真实独立依赖安装、构建、快照和跨站链接。\n');
console.log(`八仓本地交付包完成，内容快照 ${snapshot.id.slice(0,27)}。下一步 npm run check:release。`);
