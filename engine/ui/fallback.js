export const readingRequested=()=>new URLSearchParams(location.search).get('view')==='reading';
const isEN=()=>document.documentElement.dataset.lang==='en';
export function updateViewLink(){const link=document.querySelector('.view-mode-link');if(!link)return;const url=new URL(location.href),reading=readingRequested()||document.body.classList.contains('is-reading-mode');if(reading)url.searchParams.delete('view');else url.searchParams.set('view','reading');link.href=url.href;link.textContent=reading?(isEN()?'Back to 3D view':'返回 3D 图景'):(isEN()?'Reading view':'图文模式');}
export function bindViewMode(){
 if(!document.getElementById('asset-status')){
  const status=document.createElement('span');status.id='asset-status';status.className='asset-status';status.hidden=true;status.setAttribute('role','status');document.body.append(status);
  let last={pending:0,failed:false};
  const render=()=>{const {pending,failed}=last;status.textContent=pending?(isEN()?`Preparing imagery · ${pending}`:`正在准备画面 · ${pending}`):failed?(isEN()?'Some imagery is unavailable; showing a simplified view':'部分图像暂不可用，显示简化图景'):'';status.hidden=!status.textContent;};
  addEventListener('atlas-assets',event=>{last=event.detail||last;render();});
  document.addEventListener('atlas-language',render);
 }
 const container=document.querySelector('.station-actions,.scene-actions');if(!container)return;
 const link=document.createElement('a');link.className='view-mode-link';link.textContent=readingRequested()?(isEN()?'Back to 3D view':'返回 3D 图景'):(isEN()?'Reading view':'图文模式');
 const next=()=>{const url=new URL(location.href);if(readingRequested())url.searchParams.delete('view');else url.searchParams.set('view','reading');return url;};
 link.href=next().href;link.onpointerenter=updateViewLink;link.onfocus=updateViewLink;container.append(link);
 document.addEventListener('atlas-language',updateViewLink);
}
export function readingScene(reason){
 const en=isEN();
 const resolved=reason||(en?'Reading view: knowledge, scale readings and entry selection remain available.':'当前使用图文模式，知识、尺度读数与条目选择仍可使用。');
 document.body.classList.add('is-reading-mode');
 updateViewLink();
 let notice=document.getElementById('reading-notice');if(!notice){notice=document.createElement('p');notice.id='reading-notice';notice.className='reading-notice';notice.setAttribute('role','status');document.querySelector('.station-caption')?.append(notice);}notice.textContent=resolved;
 return {setEntry(entry){return {label:(en?'Reading view · ':'图文模式 · ')+entry.title,note:resolved,specific:false};},update(){},rotate(){},getSpeed(){return en?'Reading view · see the entry for reference values and conditions':'图文模式 · 参考数值与适用条件见条目资料';}};
}
