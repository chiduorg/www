import {readingRequested,bindViewMode,readingScene} from '/engine/ui/fallback.js';
import {entryKey} from '/engine/content/presentation.js';
import {articleUrl} from '/engine/content/routes.js';
import {$,clamp,scientific,loadEntries,chapterList,entryPicker,applyScenery,markChapter,bindNotes,setDescription,fail} from '/engine/ui/station.js';
const chapters=[{id:'absolute-zero',label:'绝对零度',en:'Absolute zero',sub:'@value'},{id:'bose-einstein',label:'量子低温',en:'Quantum low temperature',sub:'@value'},{id:'liquid-nitrogen',label:'液氮',en:'Liquid nitrogen',sub:'@value'},{id:'water-freezing',label:'冰与水',en:'Ice and water',sub:'@value'},{id:'human-body-temperature',label:'人体温度',en:'Body temperature',sub:'@value'},{id:'boiling-water',label:'沸腾的水',en:'Boiling water',sub:'@value'},{id:'sun-surface',label:'太阳表面',en:'Sun’s surface',sub:'@value'},{id:'sun-core',label:'恒星核心',en:'Stellar core',sub:'@value'},{id:'planck-temperature',label:'普朗克温标',en:'Planck temperature',sub:'@value'}];
let entries=[],entry=null,unit='K',position=0,motion=!matchMedia('(prefers-reduced-motion: reduce)').matches,playing=false,viewport,scene,min=-10,max=32,elapsed=0,lastClock=-1,initStarted=false;
function display(kelvin){return scientific(unit==='K'?kelvin:kelvin-273.15,kelvin>=0&&kelvin<1000?6:4)+' '+(unit==='K'?'K':'°C');}
function toPosition(k){return k===0?0:1+(Math.log10(k)-min)/(max-min)*999;}
function fromPosition(p){return p<=0?0:10**(min+(max-min)*(p-1)/999);}
function update(p,preferred=null){position=clamp(p,0,1000);$('station-slider').value=position;const value=fromPosition(position);let next=position===0?entries[0]:entries.filter(e=>e.quantity.value>0).reduce((a,b)=>Math.abs(Math.log10(a.quantity.value)-Math.log10(value))<Math.abs(Math.log10(b.quantity.value)-Math.log10(value))?a:b);if(preferred)next=preferred;const scenery=scene?.setEntry(next,next.quantity.value,!motion);applyScenery(scenery);if(entry?.id!==next.id){entry=next;setDescription(entry);if($('entry-picker'))$('entry-picker').value=entry.id;markChapter(entry,chapters,entries);}const k=entry.quantity.value,prefix=entry.quantity.bound==='upper'?'≤ ':entry.quantity.bound==='lower'?'≥ ':entry.quantity.approximate?'≈ ':'',reading=entry.quantity.range&&Number.isFinite(entry.quantity.range.min)&&Number.isFinite(entry.quantity.range.max)?display(entry.quantity.range.min)+' – '+display(entry.quantity.range.max):prefix+display(k);$('event-value').textContent=reading;$('readout-value').textContent=reading;$('readout-context').textContent=scene?.getSpeed()||'粒子运动示意';$('slider-current').textContent=entry.title;if(entry.titleEn)$('slider-current').dataset.en=entry.titleEn;$('station-slider').setAttribute('aria-valuetext',display(k)+'，当前条目 '+entry.title);document.body.dataset.thermalZone=value<100?'cold':value<400?'mild':value<1e5?'warm':'extreme';viewport?.render();}
function pick(next){playing=false;labelPlay();update(toPosition(next.quantity.value),next);}
function labelPlay(){if(document.body.classList.contains('is-reading-mode')){$('play-tour').disabled=true;$('play-tour').textContent='图文浏览 · 手动选择';return;}$('play-tour').textContent=playing?'暂停浏览 Ⅱ':'依温度浏览 ↗';}
function configureMotion(){$('motion-toggle').textContent=motion?'暂停动态 Ⅱ':'开启动态 ▶';$('motion-toggle').setAttribute('aria-pressed',String(motion));viewport?.setAnimation(motion?delta=>{elapsed+=delta;scene.update(delta);if(playing){update(position+delta*16);if(position>=1000){playing=false;labelPlay();}}const second=Math.floor(elapsed);if(second!==lastClock){lastClock=second;$('motion-clock').textContent='动态预览 '+String(Math.floor(second/60)).padStart(2,'0')+':'+String(second%60).padStart(2,'0');}}:null);if(!motion)$('motion-clock').textContent='动态已暂停';viewport?.render();}
function setUnit(next){unit=next;for(const [id,value]of [['mode-k','K'],['mode-c','C']]){$(id).classList.toggle('active',unit===value);$(id).setAttribute('aria-pressed',String(unit===value));}update(position,entry);}
async function initScene3D(){
 if(initStarted||viewport)return;initStarted=true;
 try{
  const [renderer,thermal]=await Promise.all([import('/engine/renderer/index.js'),import('./scene.js')]);
  viewport=renderer.createViewport($('station-canvas'),{studioLighting:true,onRotate:(dx,dy)=>scene?.rotate(dx,dy),onScale:delta=>{playing=false;labelPlay();update(position+delta*80);}});
  await new Promise(r=>requestAnimationFrame(()=>setTimeout(r,0)));
  scene=thermal.createThermalScene(viewport);document.documentElement.dataset.three='ready';
  await new Promise(r=>requestAnimationFrame(()=>setTimeout(r,0)));
  configureMotion();update(position,entry);
 }catch(error){
  console.warn('3D视口不可用，切换图文模式',error);viewport?.dispose?.();viewport=null;scene=readingScene();motion=false;$('motion-toggle').disabled=true;labelPlay();update(position,entry);
 }
}
function scheduleScene3D(){
 if(readingRequested()||document.body.classList.contains('is-reading-mode'))return;
 const run=()=>initScene3D(),defer=()=>{'requestIdleCallback' in window?requestIdleCallback(run,{timeout:2000}):setTimeout(run,700);};
 const start=()=>{if(matchMedia('(max-width:600px)').matches)setTimeout(defer,2500);else defer();};
 if(document.readyState==='complete')start();else addEventListener('load',start,{once:true});
}
try{
  const all=await loadEntries('temperature');entries=all.filter(e=>Number.isFinite(e.quantity.value)&&e.quantity.value>=0);const positive=entries.filter(e=>e.quantity.value>0);min=Math.log10(positive[0].quantity.value);max=Math.log10(positive.at(-1).quantity.value);$('content-count').textContent=`${entries.length} 个温度节点 · 开放内容驱动`;$('data-note').textContent=`${all.length-entries.length} 条参考温度未定的记录保留在知识库。`;
  $('tick-labels').replaceChildren();for(const p of [0,.25,.5,.75,1]){const tick=document.createElement('span');tick.textContent=p===0?'0 K':scientific(10**(min+(max-min)*p),2)+' K';$('tick-labels').append(tick);}
  const requested=new URLSearchParams(location.search).get('entry');
  bindViewMode();if(readingRequested()){scene=readingScene();motion=false;$('motion-toggle').disabled=true;labelPlay();}addEventListener('pagehide',event=>{if(!event.persisted)scene?.dispose?.();});$('station-canvas').addEventListener('viewport-lost',()=>{scene?.dispose?.();viewport?.dispose();viewport=null;scene=readingScene('3D 图形连接中断，已切换图文模式。');motion=false;playing=false;labelPlay();$('motion-toggle').disabled=true;configureMotion();update(position,entry);});chapterList(chapters,entries,pick);entryPicker(entries,pick);bindNotes(()=>entry);const requestedEntry=all.find(e=>e.id===requested);if(requestedEntry&&!entries.some(e=>e.id===requested))$('data-note').innerHTML=`“${requestedEntry.title}”没有可绘入温度轴的参考数值。<a href="${articleUrl(requestedEntry)}">阅读条目 ↗</a>`;pick(entries.find(e=>e.id===requested)||entries.find(e=>entryKey(e)==='sun-surface'));configureMotion();scheduleScene3D();
  $('station-slider').oninput=event=>{playing=false;labelPlay();update(Number(event.target.value));};$('mode-k').onclick=()=>setUnit('K');$('mode-c').onclick=()=>setUnit('C');$('motion-toggle').onclick=()=>{motion=!motion;if(!motion){playing=false;labelPlay();}configureMotion();};$('play-tour').onclick=()=>{playing=!playing;if(playing){if(position>=999)position=0;motion=true;configureMotion();}labelPlay();};$('cinema-toggle').onclick=()=>{const enabled=document.body.classList.toggle('is-cinema');$('cinema-toggle').textContent=enabled?'显示面板 ⊞':'沉浸模式 ⛶';$('cinema-toggle').setAttribute('aria-pressed',String(enabled));document.querySelector('.station-rail').inert=enabled;document.querySelector('.station-card').inert=enabled;};$('quick-notes').onclick=()=>$('read-notes').click();document.documentElement.dataset.ready='true';
}catch(error){fail(error);}
