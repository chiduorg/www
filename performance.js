// 本地验收数据；只写到本页DOM，不发送到外部服务。
document.documentElement.dataset.cls='0.0000';
if('PerformanceObserver' in window){
 try{new PerformanceObserver(list=>{const entry=list.getEntries().at(-1);if(entry)document.documentElement.dataset.lcpMs=entry.startTime.toFixed(1);}).observe({type:'largest-contentful-paint',buffered:true});}catch{}
 let shift=0;try{new PerformanceObserver(list=>{for(const entry of list.getEntries())if(!entry.hadRecentInput)shift+=entry.value;document.documentElement.dataset.cls=shift.toFixed(4);}).observe({type:'layout-shift',buffered:true});}catch{}
}
