import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import matter from 'gray-matter';
import {validateEntry} from './index.js';
import {canPlotTime} from './presentation.js';
export async function compileContent(root,config,{contentDirectory=path.join(root,'content')}={}){
  const entries=[],inputs=[];
  for(const type of ['space','time','temperature','elements','mass']){
    const dir=path.join(contentDirectory,'entries',type);
    if(!(await fs.stat(dir).catch(()=>null)))continue;
    for(const file of (await fs.readdir(dir)).filter(f=>f.endsWith('.md')).sort()){
      const sourcePath=`content/entries/${type}/${file}`,raw=(await fs.readFile(path.join(dir,file),'utf8')).replaceAll('\r\n','\n');
      const {data,content}=matter(raw),errors=validateEntry(data);
      if(!data.id?.startsWith(type+'.'))errors.push('ID 与所在目录不一致');
      if(!content.trim())errors.push('正文不能为空');
      if(errors.length)throw new Error(`${sourcePath}: ${errors.join('; ')}`);
      inputs.push([sourcePath,raw]);entries.push({...data,body:content,sourcePath});
    }
  }
  const ids=new Set(entries.map(e=>e.id));if(ids.size!==entries.length)throw new Error('重复内容 ID');
  for(const e of entries)for(const id of e.related)if(!ids.has(id))throw new Error(`${e.id} 关联不存在: ${id}`);
  entries.sort((a,b)=>a.quantity.value===null?(b.quantity.value===null?a.id.localeCompare(b.id):1):b.quantity.value===null?-1:a.quantity.value-b.quantity.value||a.id.localeCompare(b.id));
  const hash=createHash('sha256').update(JSON.stringify(inputs)).digest('hex');
  const snapshot={schemaVersion:1,version:config.contentVersion,id:`sha256:${hash}`,dataHash:createHash('sha256').update(JSON.stringify(entries)).digest('hex'),entryCount:entries.length,bySite:Object.fromEntries(['space','time','temperature','elements','mass'].map(t=>[t,entries.filter(e=>e.id.startsWith(t+'.')).length]))};
  const present=entries.find(e=>e.id==='time.present')?.quantity.value;
  const report={snapshotId:snapshot.id,engineVersion:config.engineVersion,counts:snapshot.bySite,reviewStatuses:Object.fromEntries([...new Set(entries.map(e=>e.reviewStatus))].map(s=>[s,entries.filter(e=>e.reviewStatus===s).length])),missingSources:entries.filter(e=>!e.sources.length).map(e=>e.id),measurementNeedsReview:entries.filter(e=>e.quantity.measure.includes('needs-review')).map(e=>e.id),dedicatedVisuals:entries.filter(e=>e.visual?.scene).map(e=>({id:e.id,scene:e.visual.scene})),timeBeyondPresent:entries.filter(e=>e.id.startsWith('time.')&&e.chronology?.plot!==false&&e.quantity.value>present).map(e=>({id:e.id,value:e.quantity.value})),licensing:{legacyText:'excluded-unconfirmed',images:'CC BY 4.0 (Solar System Scope / INOVE), see assets/CREDITS.md',newTextLicense:'CC-BY-4.0',codeLicense:'MIT',thirdParty:'facts-only, see docs/THIRD_PARTY_NOTICES.md'}};
  report.rewritten=entries.filter(e=>e.rights?.status==='rewritten').map(e=>e.id);
  report.rewriteRemaining=entries.filter(e=>e.rights?.status!=='rewritten').map(e=>e.id);
  report.unplottableTime=entries.filter(e=>e.id.startsWith('time.')&&!canPlotTime(e,present)).map(e=>({id:e.id,reason:e.chronology?.plot===false?'undetermined-chronology':'outside-axis'}));
  const groups=new Map();for(const entry of entries){if(entry.quantity.value===null)continue;const key=entry.dimension+':'+entry.quantity.value;if(!groups.has(key))groups.set(key,[]);groups.get(key).push(entry.id);}
  report.sameValueCandidates=[...groups].filter(([,ids])=>ids.length>1).map(([key,ids])=>({key,ids,note:'同值不等于同一概念，需人工判断，禁止自动合并。'}));
  return {entries,snapshot,report};
}
export async function writeContentSnapshot(contentDirectory,config){
 const compiled=await compileContent(contentDirectory,config,{contentDirectory});
 const {entries,snapshot,report}=compiled;
 const catalog=entries.map(({id,title,titleEn,summary,category,displayValue,reviewStatus})=>({id,title,titleEn,summary,category,displayValue,reviewStatus}));
 await fs.mkdir(path.join(contentDirectory,'dist'),{recursive:true});
 for(const [name,value]of Object.entries({'content.json':entries,'catalog.json':catalog,'content-snapshot.json':snapshot,'build-report.json':report}))await fs.writeFile(path.join(contentDirectory,'dist',name),JSON.stringify(value,null,name==='content.json'||name==='catalog.json'?0:2));
 return compiled;
}
