import {readingRequested,bindViewMode,updateViewLink} from '/engine/ui/fallback.js';
import {reviewLabel,isReviewed,measureLabel,conditionLines,entryKey} from '/engine/content/presentation.js';
import {formatLength,formatRatio,logSize,clamp,superscript} from '/engine/quantities/index.js';
import {articleUrl} from '/engine/content/routes.js';
const $ = id => document.getElementById(id);
const SPACE_SUMMARY_EN={
 atom:'A hydrogen atom is the simplest atom: one proton and one electron. The electron is shown as a quantum probability cloud, not a planet-like orbit.',
 earth:'Earth is our reference world: a rocky planet with liquid oceans, an atmosphere and a biosphere. Its mean diameter of 12,742 km is used here as the volumetric equivalent.',
 cell:'A human cell is the basic unit of life, about 20 µm across in this reference view. Organelles, membranes and the nucleus are shown to scale for the chosen cell type.',
 virus:'Influenza virus particles are about 100 nm across. The envelope, surface glycoproteins and interior RNA are shown as a structural model, not a photograph.',
 human:'A human body is about 1.7 m tall. The figure provides a reference scale for tissues, cells and everyday objects.',
 sun:'The Sun is a G-type main-sequence star about 1.39 million km across. Its visible surface and corona are shown as a schematic, not a snapshot.',
 moon:'The Moon is Earth’s natural satellite, about 3,474 km across. Its heavily cratered surface is used here as a familiar celestial reference.',
 jupiter:'Jupiter is the largest planet in the Solar System, about 139,820 km across. Its banded atmosphere and Great Red Spot are shown in schematic form.',
 saturn:'Saturn is a gas giant about 116,460 km across, surrounded by a broad ring system. The rings are shown with a representative tilt, not at a fixed epoch.',
 dna:'The DNA double helix stores genetic information. The model shows the sugar-phosphate backbone and base-pair rungs at a schematic scale.',
 proton:'A proton is a composite particle made of two up quarks and one down quark, about 1.7 fm across. Most of its mass comes from gluon field energy.',
 planck:'The Planck length, about 1.6×10⁻³⁵ m, is the scale where known physics is expected to break down. It is a theoretical boundary, not a measured object.',
 'sand-grain':'A sand grain is a familiar everyday reference, typically around 1 mm across. Its size varies widely with mineral and origin.',
 'solar-system':'The Solar System spans roughly 10 billion km across the heliopause. Planetary orbits are compressed here to make the scale comparable.',
 'milky-way':'The Milky Way is a barred spiral galaxy about 100,000 light-years across. The model shows its disc and central bulge schematically.',
 'observable-universe':'The observable universe is about 93 billion light-years across today. This is the comoving diameter of the region whose light can reach us.'
};
function spaceSummary(e){const key=entryKey(e);return document.documentElement.dataset.lang==='en'?(SPACE_SUMMARY_EN[key]||e.summaryEn||e.summary):e.summary;}
const CATEGORY_EN={'原子与分子':'Atoms & molecules','地球与地质':'Earth & geology','恒星与星际':'Stars & interstellar','日常与人造':'Everyday & man-made','星系与宇宙':'Galaxies & universe','生命与人体':'Life & the human body','行星与太阳系':'Planets & the solar system','量子与粒子':'Quantum & particles'};
const enCategory=category=>CATEGORY_EN[category]||category;
const featuredIds=['planck','proton','atom','dna','virus','cell','sand-grain','human','moon','earth','jupiter','saturn','sun','solar-system','milky-way','observable-universe'];
const glyphs=['·','∘','◎','⤨','◉','◌','◇','↟','◐','⊕','◉','◉','☼','⊙','✳','✦'];
let allEntries=[],entries=[],featured=[],selected=null,current=null,exponent=7.4,mode='explore',viewport=null,rotation={x:.05,y:0},tourFrame=0,tourRunning=false,activeModels=[];
let THREE=null,models=null,environmentApi=null,assetsApi=null,rendererApi=null,initStarted=false;
let visibleModels=new Map();
addEventListener('pagehide',event=>{if(!event.persisted){for(const model of visibleModels.values())assetsApi?.disposeObject(model);visibleModels.clear();}});
let environment=null,motionOn=!matchMedia('(prefers-reduced-motion: reduce)').matches,motionElapsed=0,lastClock=-1;
function configureMotion(){
  $('motion-toggle').textContent=motionOn?'暂停动态 Ⅱ':'开启动态 ▶';
  $('motion-toggle').setAttribute('aria-label',motionOn?'暂停场景动态':'开启场景动态');
  $('motion-toggle').setAttribute('aria-pressed',String(motionOn));
  if(!viewport)return;
  viewport.setAnimation(motionOn?(delta)=>{
    environment?.update(delta);
    for(const model of activeModels)models?.animateObject(model,delta);
    motionElapsed+=delta;
    const second=Math.floor(motionElapsed);
    if(second!==lastClock){lastClock=second;$('motion-clock').textContent='动态预览 '+String(Math.floor(second/60)).padStart(2,'0')+':'+String(second%60).padStart(2,'0');}
  }:null);
  if(!motionOn)$('motion-clock').textContent='动态已暂停';
  viewport.render();
}

function renderCatalog(query='') {
  const results=query?allEntries.filter(e=>(e.title+' '+e.titleEn+' '+e.category).toLowerCase().includes(query.toLowerCase())):featured;
  $('catalog-label').textContent=query?'搜索结果':'精选探索';$('object-count').textContent=`${results.length} OBJECTS`;
  $('object-list').replaceChildren();
  for(const entry of results){if(entry.quantity.value===null){const active=entry.id===current?.id;const link=document.createElement('a');link.className='object-button read-only-object'+(active?' active':'');link.href=articleUrl(entry);const glyph=document.createElement('span');glyph.className='object-glyph';glyph.textContent='◌';const title=document.createElement('span');title.textContent=entry.title;if(entry.titleEn)title.dataset.en=entry.titleEn;const state=document.createElement('span');state.className='order';state.textContent='仅阅读 ↗';state.dataset.en='Read only ↗';link.append(glyph,title,state);$('object-list').append(link);continue;}const active=entry.id===current?.id;const button=document.createElement('button');button.className='object-button'+(active?' active':'');button.dataset.id=entry.id;button.setAttribute('aria-pressed',String(active));
    const glyph=document.createElement('span');glyph.className='object-glyph';glyph.textContent=glyphs[featuredIds.indexOf(entryKey(entry))]||'◌';
    const title=document.createElement('span');title.textContent=entry.title;if(entry.titleEn)title.dataset.en=entry.titleEn;
    const order=document.createElement('span');order.className='order';order.textContent=`10${superscript(Math.floor(logSize(entry.quantity.value)))}`;
    button.append(glyph,title,order);button.onclick=()=>{stopTour();select(entry,true);};$('object-list').append(button);
  }
  if(!results.length){const empty=document.createElement('p');empty.className='no-results';empty.textContent='没有找到这个尺度，试试“地球”或“细胞”。';$('object-list').append(empty);}
}
function announce(entry){
  const status=$('selection-status');if(!status)return;
  const value=entry.quantity.value;
  status.textContent=Number.isFinite(value)
    ?value>=1.7
      ?`已选择 ${entry.title}，参考尺寸 ${formatLength(value)}，约为人体身高的 ${formatRatio(value,1.7)} 倍。`
      :`已选择 ${entry.title}，参考尺寸 ${formatLength(value)}，人体身高约为该长度的 ${formatRatio(1.7,value)} 倍。`
    :`已打开 ${entry.title}；该条目没有可比较的数值，处于图文阅读模式。`;
}
function updateNotes(){
  if(!selected)return;
  const e=selected,order=Math.floor(logSize(e.quantity.value)),coefficient=Number((e.quantity.value/10**order).toFixed(2));
  let article=$('article-link');if(!article){article=document.createElement('a');article.id='article-link';article.className='credits-link';article.textContent='打开独立知识文章 ↗';$('detail-button').after(article);}article.href=articleUrl(e);
  // 深链以“当前条目”为准：无量值条目也会保留自己的 ID，而不是回落到地球。
  const stateURL=new URL(location.href);stateURL.searchParams.set('object',(current||e).id);history.replaceState(null,'',stateURL);updateViewLink();
  for(const id of ['scene-title','detail-title']){$(id).textContent=e.title;if(e.titleEn)$(id).dataset.en=e.titleEn;}
  $('scene-subtitle').textContent=(e.titleEn||entryKey(e).replaceAll('-',' ')).toUpperCase();$('detail-en').textContent=(e.titleEn||entryKey(e)).toUpperCase();
  $('detail-category').textContent=e.category;$('detail-category').dataset.en=enCategory(e.category);$('scene-category').textContent=e.category+' / SPATIAL SCALE';$('scene-category').dataset.en=`${enCategory(e.category)} / SPATIAL SCALE`;
  const descriptions={earth:'我们认识宇宙的起点。',moon:'一片月光，也是一个世界。',sun:'一颗恒星，照亮我们的尺度。','milky-way':'向外一步，看见亿万颗恒星。',atom:'深入不可见的世界。',dna:'生命，把信息写进结构。',cell:'一个微小而复杂的世界。',jupiter:'越过地球，走向巨行星。',saturn:'在光与环之间，重新理解大小。'};
  if($('scene-description'))$('scene-description').textContent=e.visual?.caption||descriptions[entryKey(e)]||'换一个尺度，看见另一个世界。';
  $('detail-size').textContent=formatLength(e.quantity.value,7);$('detail-exponent').textContent=`≈ ${coefficient} × 10${superscript(order)} m`;
  if($('mobile-measure')){$('mobile-measure').querySelector('strong').textContent=formatLength(e.quantity.value,7);$('mobile-measure').querySelector('em').textContent=`≈ ${coefficient} × 10${superscript(order)} m`;}
  $('detail-summary').textContent=spaceSummary(e).length>155?spaceSummary(e).slice(0,154)+'…':spaceSummary(e);$('detail-summary').dataset.en=spaceSummary(e);
  $('object-number').textContent='NO. '+String(entries.indexOf(e)+1).padStart(3,'0');
  $('human-ratio').textContent=e.quantity.value>=1.7?`该参考长度约为 1.7 m 身高的 ${formatRatio(e.quantity.value,1.7)} 倍`:`1.7 m 身高约为该参考长度的 ${formatRatio(1.7,e.quantity.value)} 倍`;
  $('measure-label').textContent=measureLabel(e);
  $('detail-review-state').textContent=reviewLabel(e);document.querySelector('.inspector-bottom .status-dot').classList.toggle('amber',!isReviewed(e));$('detail-review-note').textContent=isReviewed(e)?'已对照所列来源核对，非外部同行评审。':'本条仍有数值口径或来源待核对。';let conditions=$('detail-conditions');if(!conditions){conditions=document.createElement('p');conditions.id='detail-conditions';conditions.className='detail-conditions';document.querySelector('.measurement').after(conditions);}conditions.textContent=conditionLines(e).join(' ');conditions.hidden=!conditions.textContent;
  renderCatalog($('search').value.trim());
}
function showUnquantified(entry){
  current=entry;
  document.body.classList.add('is-entry-reading');
  const fallback=$('canvas-fallback');fallback.hidden=false;fallback.dataset.entryNotice='1';
  fallback.innerHTML=`<strong>${entry.title} · 仅图文阅读</strong><p>该条目没有可用于尺度轴的参考量值，因此不进入 3D 图景。对象说明与来源仍可在独立知识文章中阅读。</p><a class="credits-link" href="${articleUrl(entry)}">打开独立知识文章 ↗</a>`;
  for(const id of ['scene-title','detail-title']){$(id).textContent=entry.title;if(entry.titleEn)$(id).dataset.en=entry.titleEn;}
  $('scene-subtitle').textContent=(entry.titleEn||entryKey(entry)).toUpperCase();$('detail-en').textContent=(entry.titleEn||entryKey(entry)).toUpperCase();
  $('detail-category').textContent=entry.category;$('detail-category').dataset.en=enCategory(entry.category);$('scene-category').textContent=entry.category+' / UNQUANTIFIED';$('scene-category').dataset.en=`${enCategory(entry.category)} / UNQUANTIFIED`;
  $('scene-description').textContent=spaceSummary(entry);$('detail-summary').textContent=spaceSummary(entry);$('detail-summary').dataset.en=spaceSummary(entry);
  $('detail-size').textContent='—';$('detail-exponent').textContent='无可比参考量值';$('human-ratio').textContent='无可比参考长度';$('measure-label').textContent='参考量值';
  if($('mobile-measure')){$('mobile-measure').querySelector('strong').textContent='—';$('mobile-measure').querySelector('em').textContent='无可比参考量值';}
  $('object-number').textContent='NO. —';$('scene-status').textContent='3D · 仅图文';$('add-compare').hidden=true;
  $('detail-review-state').textContent=reviewLabel(entry);document.querySelector('.inspector-bottom .status-dot').classList.toggle('amber',!isReviewed(entry));$('detail-review-note').textContent=isReviewed(entry)?'已对照所列来源核对，非外部同行评审。':'本条仍有数值口径或来源待核对。';
  let article=$('article-link');if(!article){article=document.createElement('a');article.id='article-link';article.className='credits-link';$('detail-button').after(article);}article.textContent='打开独立知识文章 ↗';article.href=articleUrl(entry);
  const stateURL=new URL(location.href);stateURL.searchParams.set('object',entry.id);history.replaceState(null,'',stateURL);updateViewLink();
  announce(entry);
}
function modelFor(entry){let model=visibleModels.get(entry.id);if(!model){model=models.createObject(entry);const size=new THREE.Box3().setFromObject(model).getSize(new THREE.Vector3());model.userData.frameSize={x:size.x,y:size.y,z:size.z};}visibleModels.delete(entry.id);visibleModels.set(entry.id,model);while(visibleModels.size>12){const key=visibleModels.keys().next().value;assetsApi.disposeObject(visibleModels.get(key));visibleModels.delete(key);}return model;}
function clearModels(){if(!viewport)return;for(const model of activeModels)viewport.world.remove(model);activeModels=[];}
function updateScene(){
  if(!selected)return;
  $('scale-slider').value=exponent;$('scale-value').textContent=`10${superscript(Math.floor(exponent))} m`;$('view-width').textContent=formatLength(10**exponent);
  if(mode==='compare'){
    const a=entries.find(e=>e.id===$('compare-a').value),b=entries.find(e=>e.id===$('compare-b').value);
    if(a&&b){const big=a.quantity.value>=b.quantity.value?a:b,small=big===a?b:a;$('label-a').textContent=a.title+' · '+formatLength(a.quantity.value);$('label-a').dataset.en=`${a.titleEn} · ${formatLength(a.quantity.value)}`;$('label-b').textContent=b.title+' · '+formatLength(b.quantity.value);$('label-b').dataset.en=`${b.titleEn} · ${formatLength(b.quantity.value)}`;$('compare-result').textContent=`${big.title}的参考尺寸 ≈ ${small.title}的 ${formatRatio(big.quantity.value,small.quantity.value)} 倍`;$('compare-result').dataset.en=`${big.titleEn} reference size ≈ ${formatRatio(big.quantity.value,small.quantity.value)}× ${small.titleEn}`;$('view-width').textContent=formatLength(Math.max(a.quantity.value,b.quantity.value)*3.125);}
  }
  if(!viewport)return;
  const zone=environment?.setScale(exponent,!motionOn);
  if(zone)$('environment-name').textContent=zone.label;
  clearModels();
  if(mode==='compare'){
    const a=entries.find(e=>e.id===$('compare-a').value),b=entries.find(e=>e.id===$('compare-b').value);
    if(!a||!b)return;
    const max=Math.max(a.quantity.value,b.quantity.value);
    const big=a.quantity.value>=b.quantity.value?a:b,small=big===a?b:a;
    $('label-a').textContent=a.title+' · '+formatLength(a.quantity.value);$('label-a').dataset.en=`${a.titleEn} · ${formatLength(a.quantity.value)}`;$('label-b').textContent=b.title+' · '+formatLength(b.quantity.value);$('label-b').dataset.en=`${b.titleEn} · ${formatLength(b.quantity.value)}`;
    $('compare-result').textContent=`${big.title}的参考尺寸 ≈ ${small.title}的 ${formatRatio(big.quantity.value,small.quantity.value)} 倍`;$('compare-result').dataset.en=`${big.titleEn} reference size ≈ ${formatRatio(big.quantity.value,small.quantity.value)}× ${small.titleEn}`;
    const pair=[modelFor(a),modelFor(b)],aspect=innerWidth/innerHeight;
    const factor=Math.min(3.2,...[a,b].flatMap((entry,i)=>{const ratio=entry.quantity.value/max,box=pair[i].userData.frameSize;return [8.2/(Math.max(box.x,box.z)*ratio),10/aspect/(Math.max(box.y,box.z)*ratio)];}));
    [a,b].forEach((entry,i)=>{
      const raw=entry.quantity.value/max*factor;
      // 太小时不伪造比例：仅保留小定位点，由屏幕文案说明。
      const model=i===1&&a.id===b.id?modelFor(entry).clone():modelFor(entry);model.scale.setScalar(Math.max(raw,.014));model.position.set(i===0?-4.5:4.5,0,0);model.rotation.set(rotation.x,rotation.y,0);viewport.world.add(model);activeModels.push(model);
    });
    $('reference-label').lastChild.textContent=small.quantity.value/max<.005?' 极小对象仅显示定位标记 · 模型为示意':' 采用条目规定的参考长度比较 · 其他细节为示意';
    $('view-width').textContent=formatLength(max*10/factor);
    $('scene-status').textContent='3D · 同一参考长度标尺';
  }else{
    // 世界坐标是相对当前视野归一化的局部坐标，真实尺寸保留在内容数据中。
    const smaller=featured.filter(e=>e.quantity.value<selected.quantity.value*.4&&e.quantity.value/10**exponent>.007).sort((a,b)=>a.quantity.value-b.quantity.value);
    const candidates=[selected,...smaller.slice(-1)];
    candidates.slice(0,4).forEach((entry,i)=>{
      const ratio=entry.quantity.value/10**exponent;
      if(ratio>8||ratio<.0002)return;
      const model=modelFor(entry);model.scale.setScalar(ratio*10);model.position.set(i===0?.6:-6.2,i===0?(innerWidth<600?-.35:1):-2.5,0);model.rotation.set(rotation.x,rotation.y,0);viewport.world.add(model);activeModels.push(model);
    });
    $('reference-label').lastChild.textContent=['earth','moon','sun','jupiter','saturn'].includes(entryKey(selected))?' 地表纹理映射 · 光照与相对位置为示意':' '+(selected.visual?.note||'结构与材质为说明性图景');$('scene-status').textContent='3D · 参考量值观察';
  }
  viewport.render();
}
function setScale(value,autoSelect=true){
  exponent=clamp(value,-35,28);
  if(autoSelect&&mode==='explore'){
    const pool=tourRunning?featured:entries;const nearest=pool.reduce((a,b)=>Math.abs(logSize(a.quantity.value)+.25-exponent)<Math.abs(logSize(b.quantity.value)+.25-exponent)?a:b);
    if(nearest.id!==selected.id&&Math.abs(logSize(selected.quantity.value)+.25-exponent)>.85){selected=nearest;updateNotes();}
  }
  updateScene();
}
function animateTo(target){
  stopTour();const start=exponent,begin=performance.now(),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){setScale(target,false);return;}
  function frame(now){const t=Math.min(1,(now-begin)/800),ease=t<.5?2*t*t:1-(-2*t+2)**2/2;setScale(start+(target-start)*ease,false);if(t<1)tourFrame=requestAnimationFrame(frame);}
  tourFrame=requestAnimationFrame(frame);
}
function preferredFrame(entry){const model=viewport?modelFor(entry):null,box=model?.userData.frameSize,aspect=innerWidth>0&&innerHeight>0?innerWidth/innerHeight:1.6;const fitted=box?Math.max(box.x/(innerWidth<600?1.28:.95),box.y*aspect/(innerWidth<600?1.5:1),1):1.82;const explicit=model?.userData.framePadding??entry.visual?.framePadding;const padding=explicit??(entryKey(entry)==='saturn'?.59:.26);return logSize(entry.quantity.value)+(explicit!=null?padding+(innerWidth<600?.08:0):Math.log10(innerWidth<600?fitted:Math.max(fitted,10**padding)));}
function select(entry,animate=false){if(document.body.classList.contains('is-entry-reading')){document.body.classList.remove('is-entry-reading');const fallback=$('canvas-fallback');if(fallback.dataset.entryNotice==='1'){fallback.hidden=true;delete fallback.dataset.entryNotice;}$('add-compare').hidden=false;$('scene-status').textContent='3D · 等比例观察';}selected=entry;current=entry;updateNotes();announce(entry);const frame=preferredFrame(entry);if(mode==='compare'){$('compare-a').value=entry.id;updateScene();}else if(animate){animateTo(frame);}else{setScale(frame,false);}}
function stopTour(){cancelAnimationFrame(tourFrame);tourRunning=false;$('tour').innerHTML='开始尺度旅行 <span>↗</span>';}
function startTour(){
  if(tourRunning){stopTour();return;}
  setMode('explore');tourRunning=true;$('tour').textContent='暂停旅行 Ⅱ';
  const begin=performance.now();const start=logSize(featured.find(e=>entryKey(e)==='human').quantity.value)+.26,end=27.2;
  function frame(now){if(!tourRunning)return;const t=Math.min(1,(now-begin)/30000);setScale(start+(end-start)*t);if(t<1)tourFrame=requestAnimationFrame(frame);else stopTour();}
  tourFrame=requestAnimationFrame(frame);
}
function setMode(next){mode=next;document.body.classList.toggle('is-comparing',mode==='compare');syncPanelAccess();stopTour();$('explore-controls').hidden=mode!=='explore';$('compare-controls').hidden=mode!=='compare';$('compare-labels').hidden=mode!=='compare';for(const [id,m]of [['explore-mode','explore'],['compare-mode','compare']]){$(id).classList.toggle('active',mode===m);$(id).setAttribute('aria-pressed',String(mode===m));}updateScene();}
function syncPanelAccess(){const hide=document.body.classList.contains('is-immersive')||mode==='compare';document.querySelector('.catalog').inert=hide;document.querySelector('.inspector').inert=hide&&!document.body.classList.contains('notes-open');}
async function entryBody(entry){
  if(entry.body)return entry.body;
  // 相对路径优先：独立部署时 content.json 与页面同级；整合部署回落到站根的全量文件。
  for(const file of ['./content.json','/content.json']){
    try{const response=await fetch(file);if(!response.ok)continue;const all=await response.json();return all.find(item=>item.id===entry.id)?.body||'';}catch{}
  }
  return '';
}
async function showDetail(){
  const target=current||selected;
  const container=$('dialog-content');container.replaceChildren();const title=document.createElement('h1');title.textContent=target.title;if(target.titleEn)title.dataset.en=target.titleEn;container.append(title);
  const note=document.createElement('div');note.className='source-note';note.textContent=reviewLabel(target)+' · 完整来源和适用条件见独立知识文章。';const path=document.createElement('a');path.href=articleUrl(target);path.textContent='打开文章与参考来源 ↗';note.append(path);container.append(note);
  const body=await entryBody(target);
  if(body)for(const block of body.trim().split(/\n\s*\n/)){const isHeading=block.startsWith('## ');const el=document.createElement(isHeading?'h2':'p');el.textContent=isHeading?block.slice(3):block;container.append(el);}
  $('detail-dialog').showModal();
}
function showReadingMode(){document.body.classList.add('is-reading-mode');updateViewLink();$('canvas-fallback').hidden=false;$('canvas-fallback').querySelector('strong').textContent='图文观察模式';$('canvas-fallback').querySelector('p').textContent='条目、参考尺寸、比较与知识文章仍可使用。';$('scene-status').textContent='图文模式';motionOn=false;$('motion-toggle').disabled=true;}
async function init3D(){
  if(initStarted||viewport||readingRequested()||document.body.classList.contains('is-entry-reading'))return;initStarted=true;
  try{
    const [three,renderer,modelApi,envApi,assetApi]=await Promise.all([import('three'),import('/engine/renderer/index.js'),import('./models.js'),import('./environment.js'),import('/engine/renderer/assets.js')]);
    THREE=three;rendererApi=renderer;models=modelApi;environmentApi=envApi;assetsApi=assetApi;
    viewport=rendererApi.createViewport($('universe'),{onScale:delta=>{stopTour();if(mode==='explore')setScale(exponent+delta);},onRotate:(dx,dy)=>{rotation.y+=dx;rotation.x=clamp(rotation.x+dy,-1.4,1.4);updateScene();},onResize:()=>updateScene()});
    // 分片让出主线程：建场景与首帧绘制不合并成一个长任务。
    await new Promise(resolve=>requestAnimationFrame(()=>setTimeout(resolve,0)));
    models.decorateScene(viewport.scene);models.setModelInvalidation(()=>viewport.render());environment=environmentApi.createEnvironment(viewport.scene);
    await new Promise(resolve=>requestAnimationFrame(()=>setTimeout(resolve,0)));
    document.documentElement.dataset.three='ready';if(selected)select(selected);configureMotion();updateScene();
  }catch(error){console.warn('3D视口不可用，切换图文模式',error);viewport?.dispose?.();viewport=null;showReadingMode();configureMotion();updateScene();}
}
function schedule3D(){
  if(readingRequested()||document.body.classList.contains('is-entry-reading'))return;
  const run=()=>init3D(),defer=()=>{'requestIdleCallback' in window?requestIdleCallback(run,{timeout:2000}):setTimeout(run,700);};
  const start=()=>{if(matchMedia('(max-width:600px)').matches)setTimeout(defer,2500);else defer();};
  if(document.readyState==='complete')start();else addEventListener('load',start,{once:true});
}
async function init(){
  try{
    const response=await fetch('./entries.json');if(!response.ok)throw new Error('内容加载失败');
    const all=(await response.json()).filter(e=>e.id.startsWith('space.'));allEntries=all;entries=all.filter(e=>Number.isFinite(e.quantity.value)&&e.quantity.value>0).sort((a,b)=>a.quantity.value-b.quantity.value);
    featured=featuredIds.map(id=>entries.find(e=>entryKey(e)===id)).filter(Boolean);$('content-count').textContent=`${entries.length} 个可比较对象 / ${all.length} 条知识`;
    for(const id of ['compare-a','compare-b'])for(const e of entries){const option=document.createElement('option');option.value=e.id;option.textContent=e.title;if(e.titleEn)option.dataset.en=e.titleEn;$(id).append(option);}
    const params=new URLSearchParams(location.search);const requested=all.find(e=>e.id===params.get('object'));selected=entries.find(e=>e.id===params.get('object'))||entries.find(e=>entryKey(e)==='earth');current=requested||selected;
    $('compare-a').value=selected.id;$('compare-b').value='space.moon';
    bindViewMode();if(readingRequested())showReadingMode();$('universe').addEventListener('viewport-lost',()=>{viewport?.dispose();viewport=null;showReadingMode();configureMotion();updateScene();});
    select(selected);if(requested&&!entries.some(e=>e.id===requested.id))showUnquantified(requested);if(params.has('scale')&&Number.isFinite(Number(params.get('scale'))))setScale(Number(params.get('scale')),false);
    configureMotion();schedule3D();
    $('motion-toggle').onclick=()=>{motionOn=!motionOn;configureMotion();};
    $('immersion-toggle').onclick=()=>{
      const enabled=document.body.classList.toggle('is-immersive');
      $('immersion-toggle').textContent=enabled?'显示面板 ⊞':'沉浸模式 ⛶';
      $('immersion-toggle').setAttribute('aria-pressed',String(enabled));
      syncPanelAccess();
    };
    $('notes-toggle').onclick=()=>{
      const opened=document.body.classList.toggle('notes-open');
      $('notes-toggle').textContent=opened?'收起资料 ×':'对象资料 ⓘ';$('notes-toggle').setAttribute('aria-expanded',String(opened));
      syncPanelAccess();
    };
    $('close-notes').onclick=()=>$('notes-toggle').click();
    document.addEventListener('keydown',event=>{if(event.key==='Escape'&&document.body.classList.contains('notes-open')&&!$('detail-dialog').open)$('notes-toggle').click();});
    $('search').oninput=()=>renderCatalog($('search').value.trim());$('scale-slider').oninput=e=>{stopTour();setScale(Number(e.target.value));};
    $('zoom-in').onclick=()=>{stopTour();setScale(exponent-.35);};$('zoom-out').onclick=()=>{stopTour();setScale(exponent+.35);};$('reset').onclick=()=>{rotation={x:.05,y:0};select(selected,true);};
    $('explore-mode').onclick=()=>setMode('explore');$('compare-mode').onclick=()=>setMode('compare');$('add-compare').onclick=()=>{$('compare-a').value=selected.id;setMode('compare');};
    for(const id of ['compare-a','compare-b'])$(id).onchange=updateScene;
    $('tour').onclick=startTour;$('detail-button').onclick=showDetail;$('close-dialog').onclick=()=>$('detail-dialog').close();
    $('detail-dialog').onclick=e=>{if(e.target===$('detail-dialog')&&e.clientX<$('detail-dialog').getBoundingClientRect().left)$('detail-dialog').close();};
    $('share').onclick=async()=>{const target=current||selected,url=new URL(location.href);url.searchParams.set('object',target.id);url.searchParams.set('scale',exponent.toFixed(3));try{await navigator.clipboard.writeText(url.href);$('share-status').textContent='观察链接已复制';}catch{history.replaceState(null,'',url);$('share-status').textContent='观察链接已更新到地址栏，可直接复制';}};
    document.addEventListener('keydown',e=>{if(e.key==='/'&&!['INPUT','SELECT','TEXTAREA'].includes(document.activeElement.tagName)) {e.preventDefault();$('search').focus();}});
    $('universe').addEventListener('viewport-lost',()=>{$('canvas-fallback').hidden=false;});
    document.documentElement.dataset.ready='true';
  }catch(error){$('detail-summary').textContent='内容加载失败，请刷新重试。';$('object-list').textContent=error.message;console.error(error);}
}
init();
