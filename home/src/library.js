import {searchEntries} from '/engine/content/routes.js';
const form=document.getElementById('library-form'),input=document.getElementById('library-query'),container=document.getElementById('library-results'),count=document.getElementById('result-count'),empty=document.getElementById('empty-results'),tagFilters=document.getElementById('tag-filters');
let entries=[],dimension='all',tag='';
const tiles=[...container.children];
function readURL(){const params=new URLSearchParams(location.search);input.value=params.get('q')||'';dimension=['space','time','temperature','elements','mass'].includes(params.get('dimension'))?params.get('dimension'):'all';tag=params.get('tag')||'';}
function renderTagFilters(){
 const counts=new Map();
 for(const entry of entries){
   if(dimension!=='all'&&!entry.id.startsWith(dimension+'.'))continue;
   for(const name of entry.tags||[])counts.set(name,(counts.get(name)||0)+1);
 }
 const names=[...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0,dimension==='all'?14:20);
 tagFilters.innerHTML=names.map(([name,n])=>`<button type="button" data-tag="${name}" aria-pressed="${name===tag}">${name}<span>${n}</span></button>`).join('')||'<span class="muted">此维度暂无标签</span>';
 for(const button of tagFilters.querySelectorAll('[data-tag]'))button.onclick=()=>{tag=tag===button.dataset.tag?'':button.dataset.tag;render(true);};
}
function render(push=false){
 let results=searchEntries(entries,input.value,dimension);
 if(tag)results=results.filter(entry=>(entry.tags||[]).includes(tag));
 const ids=new Set(results.map(e=>e.id));
 for(const tile of tiles)tile.hidden=!ids.has(tile.dataset.id);
 const byId=new Map(tiles.map(tile=>[tile.dataset.id,tile]));for(const entry of results)container.append(byId.get(entry.id));
 for(const button of document.querySelectorAll('[data-filter]'))button.setAttribute('aria-pressed',String(button.dataset.filter===dimension));
 renderTagFilters();
 count.textContent=`${input.value.trim()?'搜索结果':'共'} ${results.length} 条记录${tag?` · 标签「${tag}」`:''}`;empty.hidden=results.length>0;
 if(push){const url=new URL(location.href);url.search='';if(input.value.trim())url.searchParams.set('q',input.value.trim());if(dimension!=='all')url.searchParams.set('dimension',dimension);if(tag)url.searchParams.set('tag',tag);history.replaceState(null,'',url);}
}
try{
 // 以模块地址解析索引，部署到子路径时仍然有效。
 const response=await fetch(new URL('./catalog.json',import.meta.url));if(!response.ok)throw new Error('索引加载失败');entries=await response.json();
 readURL();render();form.onsubmit=event=>{event.preventDefault();render(true);};input.addEventListener('input',()=>render(true));
 for(const button of document.querySelectorAll('[data-filter]'))button.onclick=()=>{dimension=button.dataset.filter;if(tag&&!entries.some(entry=>entry.id.startsWith(dimension+'.')&&(entry.tags||[]).includes(tag)))tag='';render(true);};
 document.getElementById('clear-search').onclick=()=>{input.value='';dimension='all';tag='';render(true);input.focus();};
 addEventListener('popstate',()=>{readURL();render();});
 document.documentElement.dataset.ready='true';
}catch(error){count.textContent='搜索暂不可用，以下文章仍可直接阅读。';console.error(error);}
