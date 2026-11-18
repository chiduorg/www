export const readingRequested=()=>new URLSearchParams(location.search).get('view')==='reading';
export function updateViewLink(){const link=document.querySelector('.view-mode-link');if(!link)return;const url=new URL(location.href),reading=readingRequested()||document.body.classList.contains('is-reading-mode');if(reading)url.searchParams.delete('view');else url.searchParams.set('view','reading');link.href=url.href;link.textContent=reading?'返回 3D 图景':'图文模式';}
export function bindViewMode(){
 if(!document.getElementById('asset-status')){const status=document.createElement('span');status.id='asset-status';status.className='asset-status';status.hidden=true;status.setAttribute('role','status');document.body.append(status);addEventListener('atlas-assets',event=>{const {pending,failed}=event.detail;status.textContent=pending?`正在准备画面 · ${pending}`:failed?'部分图像暂不可用，显示简化图景':'';status.hidden=!status.textContent;});}
 const container=document.querySelector('.station-actions,.scene-actions');if(!container)return;
 const link=document.createElement('a');link.className='view-mode-link';link.textContent=readingRequested()?'返回 3D 图景':'图文模式';
 const next=()=>{const url=new URL(location.href);if(readingRequested())url.searchParams.delete('view');else url.searchParams.set('view','reading');return url;};
 link.href=next().href;link.onpointerenter=updateViewLink;link.onfocus=updateViewLink;container.append(link);
}
export function readingScene(reason='当前使用图文模式，知识、尺度读数与条目选择仍可使用。'){
 document.body.classList.add('is-reading-mode');
 updateViewLink();
 let notice=document.getElementById('reading-notice');if(!notice){notice=document.createElement('p');notice.id='reading-notice';notice.className='reading-notice';notice.setAttribute('role','status');document.querySelector('.station-caption')?.append(notice);}notice.textContent=reason;
 return {setEntry(entry){return {label:'图文模式 · '+entry.title,note:reason,specific:false};},update(){},rotate(){},getSpeed(){return '图文模式 · 参考数值与适用条件见条目资料';}};
}
