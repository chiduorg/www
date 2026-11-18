export const dimensions = {space:'空间',time:'时间',temperature:'温度',elements:'元素',mass:'质量'};
function bootConfig(){if(typeof document==='undefined')return null;try{return JSON.parse(document.getElementById('atlas-config')?.textContent||'null');}catch{return null;}}
export function siteUrl(site,relative='',config=bootConfig()){
 const target=config?.sites?.[site]||{path:site==='home'?'/':`/${site}/`};
 const local=(target.path||'/').replace(/\/?$/,'/')+relative.replace(/^\//,'');
 return target.origin?new URL(local,target.origin).href:local;
}
export function homeUrl(relative='',config=bootConfig()){return siteUrl('home',relative,config);}
export function siteOf(entry){return entry.id.split('.')[0];}
export function canonicalBase(config,site){return config?.sites?.[site]?.publicOrigin||config?.publicOrigin||null;}
export function articleUrl(entry,config=bootConfig()){const site=siteOf(entry);return siteUrl(site,`entry/${site}/${entry.id.split('.')[1]}/`,config);}
export function exploreUrl(entry,config=bootConfig()){const site=siteOf(entry);return siteUrl(site,`?${site==='space'?'object':'entry'}=${encodeURIComponent(entry.id)}`,config);}
export function searchEntries(entries,query='',dimension='all'){
  const words=query.normalize('NFKC').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  const normalize=value=>String(value||'').normalize('NFKC').toLocaleLowerCase(),phrase=normalize(query.trim());
  const score=e=>{const title=normalize(e.title),english=normalize(e.titleEn);return title===phrase||english===phrase||e.id===phrase?0:title.startsWith(phrase)||english.startsWith(phrase)?1:title.includes(phrase)||english.includes(phrase)?2:normalize(e.category).includes(phrase)?3:4;};
  return entries.filter(e=>(dimension==='all'||siteOf(e)===dimension)&&words.every(word=>{const haystack=normalize(`${e.id} ${e.title} ${e.titleEn||''} ${e.summary} ${e.category||''} ${e.displayValue||''}`);return haystack.includes(word)||haystack.replace(/\s+/g,'').includes(word.replace(/\s+/g,''));})).sort((a,b)=>words.length?score(a)-score(b):0);
}
