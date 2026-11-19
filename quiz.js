import {articleUrl,exploreUrl} from '/engine/content/routes.js';
import {measureLabel} from '/engine/content/presentation.js';
import {formatRatio} from '/engine/quantities/index.js';
const $=id=>document.getElementById(id);
const LABELS={all:'综合',space:'空间',time:'时间',temperature:'温度'};
const EN_LABELS={all:'All',space:'Space',time:'Time',temperature:'Temperature'};
const EN=()=>document.documentElement.dataset.lang==='en';
const T=(zh,en)=>EN()?en:zh;
const labelFor=dimension=>(EN()?EN_LABELS:LABELS)[dimension]||dimension;
const QUIZ_EN={
"space.earth":{title:"Earth",value:"12,742 km (volume-equivalent mean diameter)",measure:"Volume-equivalent mean diameter (2 × 6,371 km)"},
"space.moon":{title:"Moon",value:"3,474.8 km (volume-equivalent mean diameter)",measure:"Volume-equivalent mean diameter (2 × 1,737.4 km)"},
"space.sun":{title:"Sun",value:"1,391,400 km (reference diameter)",measure:"Twice the NASA fact-sheet mean radius of 695,700 km"},
"space.jupiter":{title:"Jupiter",value:"139,822 km (volume-equivalent mean diameter)",measure:"Volume-equivalent mean diameter from the NASA fact sheet (rings excluded)"},
"space.saturn":{title:"Saturn",value:"116,464 km (mean diameter, rings excluded)",measure:"Volume-equivalent mean diameter (2 × 58,232 km), rings excluded"},
"space.human":{title:"A human",value:"1.7 m (chosen comparison height)",measure:"A chosen standing reference height of 1.7 m, not a population average"},
"space.cell":{title:"Human cell",value:"20 μm (illustrative reference)",measure:"Illustrative 20 μm reference within the eukaryotic-cell scale"},
"space.virus":{title:"Virus",value:"about 1 × 10⁻⁷ m (100 nm, illustrative reference)",measure:"100 nm within the 80–120 nm range of influenza A, as an illustrative reference"},
"space.dna":{title:"DNA double helix",value:"about 2 × 10⁻⁹ m (2 nm)",measure:"Approximate transverse width of the DNA double helix"},
"space.atom":{title:"Hydrogen atom",value:"about 1.058 × 10⁻¹⁰ m (2a₀)",measure:"Twice the Bohr radius (hydrogen comparison length), not a hard-boundary diameter"},
"space.sand-grain":{title:"Grain of sand",value:"0.5 mm (chosen comparison reference)",measure:"A chosen 0.5 mm grain-size reference within the sand range"},
"space.milky-way":{title:"Milky Way",value:"about 9.46 × 10²⁰ m (about 100,000 light-years)",measure:"Order-of-magnitude width of the stellar disc, about 100,000 light-years, excluding the full dark-matter halo"},
"space.solar-system":{title:"Solar System",value:"about 9 × 10¹² m (Neptune-orbit reference width)",measure:"Reference width of the planetary region, twice Neptune's mean orbital distance"},
"time.first-stars":{title:"The first stars (era)",value:"t ≈ 200–400 million years (reference anchor: 200 million years)",measure:"Elapsed time since the Big Bang: an era reference point"},
"time.solar-system":{title:"Solar System forms",value:"t ≈ 9.2 billion years (about 4.6 billion years ago)",measure:"Elapsed time since the Big Bang, derived from lookback time"},
"time.galaxy-formation":{title:"Early galaxies (era)",value:"t ≈ 400 million years (early-galaxy reference point)",measure:"Elapsed time since the Big Bang: an era reference point"},
"time.cambrian":{title:"Cambrian explosion",value:"t ≈ 13.26 billion years (about 539 million years ago)",measure:"Elapsed time since the Big Bang at a period boundary, derived from its lookback age"},
"time.earth-formation":{title:"Earth forms",value:"about 4.5 billion years ago (formation-process reference)",measure:"Elapsed time since the Big Bang, derived reference"},
"time.first-life":{title:"Earliest life (geological record)",value:"t ≈ 10.3 billion years (about 3.5 billion years ago)",measure:"Elapsed time since the Big Bang, derived from geological evidence"},
"time.dinosaurs":{title:"Early dinosaurs (era)",value:"about 230 million years ago (Late Triassic fossil reference)",measure:"Elapsed time since the Big Bang, derived reference"},
"time.agricultural-revolution":{title:"Origins of agriculture",value:"t = 13.8 billion years (about 10,000 years ago)",measure:"Elapsed time since the Big Bang"},
"time.industrial-revolution":{title:"Early industrialisation in Britain",value:"t = 13.8 billion years (about 250 years ago)",measure:"Elapsed time since the Big Bang"},
"time.scientific-revolution":{title:"Early modern science",value:"t = 13.8 billion years (about 400 years ago)",measure:"Elapsed time since the Big Bang"},
"time.digital-age":{title:"The World Wide Web",value:"t = 13.8 billion years (about 50 years ago)",measure:"Elapsed time since the Big Bang"},
"temperature.liquid-nitrogen":{title:"Liquid nitrogen",value:"about 77.34 K (−195.81 °C)",measure:"Normal boiling point of nitrogen"},
"temperature.water-freezing":{title:"Freezing point of water",value:"about 273.15 K (0 °C)",measure:"Ice–water equilibrium at standard atmosphere"},
"temperature.human-body-temperature":{title:"Human body temperature",value:"about 310.15 K (37 °C)",measure:"Educational reference for human body temperature"},
"temperature.boiling-water":{title:"Boiling point of water",value:"about 373.15 K (100 °C)",measure:"Normal boiling point of water"},
"temperature.sun-surface":{title:"Sun's surface",value:"about 5,772 K (effective-temperature reference)",measure:"Nominal effective temperature of the Sun"},
"temperature.sun-core":{title:"Sun's core",value:"about 15 million K",measure:"Model reference for the solar core"},
"temperature.absolute-zero":{title:"Absolute zero",value:"0 K (−273.15 °C)",measure:"Zero of thermodynamic temperature"},
"temperature.liquid-hydrogen":{title:"Liquid hydrogen",value:"about 20.3 K (−252.85 °C)",measure:"Approximate normal boiling point of hydrogen"},
"temperature.liquid-oxygen":{title:"Liquid oxygen",value:"about 90.2 K (−182.95 °C)",measure:"Normal boiling point of oxygen"},
"temperature.bose-einstein":{title:"Bose–Einstein condensate",value:"about 170 nK (1.7 × 10⁻⁷ K)",measure:"Onset temperature reference for a rubidium Bose–Einstein condensate"}
};
const PROMPT_EN={"哪一项采用的参考长度更大？":"Which uses the larger reference length?","哪一项采用的参考时代更早？":"Which uses the earlier reference time?","哪一项采用的参考温度更高？":"Which has the higher reference temperature?"};
const entryTitle=entry=>EN()?(QUIZ_EN[entry.id]?.title||entry.title):entry.title;
const entryValue=entry=>EN()?(QUIZ_EN[entry.id]?.value||entry.displayValue):entry.displayValue;
const entryMeasure=entry=>EN()?(QUIZ_EN[entry.id]?.measure||measureLabel(entry)):measureLabel(entry);
const promptFor=prompt=>EN()?(PROMPT_EN[prompt]||prompt):prompt;
let data,mode='all',questions=[],index=0,score=0,answered=false,records={};
const storageKey='atlas-quiz-v1';

function contentVersionText(){
  return T(
    `题目采用内容 v${data.contentVersion} · 仅使用已核对且有可比较数值的条目`,
    `Questions use content v${data.contentVersion} · only source-checked entries with comparable values`
  );
}
function best(){
  const record=records[mode];
  $('quiz-best').textContent=record
    ?T(`这份内容版本下的本地最佳：${record.score} / ${record.total}`,`Best local score for this content version: ${record.score} / ${record.total}`)
    :T('答题记录只保存在当前浏览器。','Answers are stored only in this browser.');
}
function updateMode(next){
  mode=next;
  for(const button of document.querySelectorAll('[data-quiz-mode]'))button.setAttribute('aria-pressed',String(button.dataset.quizMode===mode));
  best();
}
function resetView(){
  for(const id of ['quiz-session','quiz-result'])$(id).hidden=true;
  $('quiz-welcome').hidden=false;
  best();
}
function shuffled(items){
  const result=[...items];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}
function start(){
  const pool=data.questions.filter(q=>mode==='all'||q.dimension===mode);
  questions=shuffled(pool).slice(0,8);
  if(!questions.length){$('quiz-best').textContent=T('这个维度的题目还在核对中。','Questions for this dimension are still being checked.');return;}
  index=0;score=0;
  $('quiz-welcome').hidden=true;$('quiz-result').hidden=true;$('quiz-session').hidden=false;
  showQuestion();
}
function showQuestion(){
  answered=false;
  const q=questions[index];
  $('quiz-progress').textContent=`${labelFor(q.dimension)} / ${index+1} / ${questions.length}`;
  $('quiz-progressbar').max=questions.length;$('quiz-progressbar').value=index;
  $('quiz-question').textContent=promptFor(q.prompt);
  $('quiz-feedback').hidden=true;$('quiz-next').hidden=true;
  const container=$('quiz-options');container.replaceChildren();
  for(const [position,entry]of shuffled([q.a,q.b]).entries()){
    const button=document.createElement('button');
    button.className='quiz-option';button.dataset.id=entry.id;
    const order=document.createElement('span');order.className='quiz-letter';order.textContent=position?'B':'A';
    const title=document.createElement('strong');title.textContent=entryTitle(entry);
    const measure=document.createElement('small');measure.textContent=entryMeasure(entry);
    const value=document.createElement('span');value.className='quiz-hidden-value';value.textContent=T('选择后揭晓参考值','Reveal the reference value after choosing');
    button.append(order,title,measure,value);button.onclick=()=>answer(entry.id);container.append(button);
  }
  $('quiz-question').focus();
}
function answer(selected){
  if(answered)return;
  answered=true;
  const q=questions[index],correct=selected===q.correctId;
  if(correct)score++;
  for(const button of $('quiz-options').children){
    button.disabled=true;
    const entry=button.dataset.id===q.a.id?q.a:q.b;
    button.querySelector('.quiz-hidden-value').textContent=entryValue(entry);
    button.classList.toggle('is-correct',entry.id===q.correctId);
    button.classList.toggle('is-selected',entry.id===selected);
    const state=document.createElement('span');state.className='quiz-option-state';
    state.textContent=entry.id===q.correctId?T('正确答案','Correct answer'):entry.id===selected?T('你的选择','Your choice'):'';
    button.append(state);
  }
  $('quiz-feedback-title').textContent=correct?T('判断正确。','Correct.'):T('换一个尺度，再看一次。','Change the scale and look again.');
  const winner=q.correctId===q.a.id?q.a:q.b,other=winner===q.a?q.b:q.a;
  let explanation=T(
    `${entryTitle(q.a)}：${entryValue(q.a)}；${entryTitle(q.b)}：${entryValue(q.b)}。`,
    `${entryTitle(q.a)}: ${entryValue(q.a)}; ${entryTitle(q.b)}: ${entryValue(q.b)}.`
  );
  if(q.dimension==='space')explanation+=T(
    ` 按这两个条目规定的参考长度比较，${entryTitle(winner)}约为${entryTitle(other)}的 ${formatRatio(winner.quantity.value,other.quantity.value)} 倍。`,
    ` Using the reference lengths defined by these entries, ${entryTitle(winner)} is about ${formatRatio(winner.quantity.value,other.quantity.value)} times the size of ${entryTitle(other)}.`
  );
  if(q.dimension==='time')explanation+=T(
    ' 时间轴采用自热大爆炸起的经过时间；参考坐标更小的一项更早。时代参考点不表示所有相关事件发生在同一瞬间。',
    ' The time axis uses elapsed time since the hot Big Bang; the smaller reference coordinate is earlier. An era reference point does not mean all related events happened at the same instant.'
  );
  if(q.dimension==='temperature')explanation+=T(
    ' 这些是各条目所列条件下的参考温度。开尔文数值更大，温度更高；不同对象的温度不表示其总能量大小。',
    ' These are reference temperatures under the conditions stated in each entry. A larger Kelvin value means a higher temperature; temperatures of different objects do not indicate total energy.'
  );
  $('quiz-explanation').textContent=explanation;
  const links=$('quiz-reading');links.replaceChildren();
  for(const entry of [q.a,q.b]){
    const article=document.createElement('a');
    article.href=articleUrl(entry);
    article.textContent=T(`阅读${entryTitle(entry)} ↗`,`Read ${entryTitle(entry)} ↗`);
    links.append(article);
  }
  const scene=document.createElement('a');
  scene.href=exploreUrl(winner);
  scene.textContent=T('进入对应图景 ↗','Open the matching scene ↗');
  links.append(scene);
  $('quiz-feedback').hidden=false;$('quiz-next').hidden=false;
  $('quiz-next').textContent=index===questions.length-1?T('查看结果 →','See result →'):T('下一题 →','Next question →');
  $('quiz-progressbar').value=index+1;
  $('quiz-feedback-title').focus();
}
function finish(){
  $('quiz-session').hidden=true;$('quiz-result').hidden=false;
  $('quiz-score').textContent=`${score} / ${questions.length}`;
  $('quiz-result-note').textContent=score===questions.length
    ?T('这一段尺度旅程，你都找到了对应的参照。','You found the right reference at every step of this scale journey.')
    :T('继续走进图景、阅读口径，下一次判断会更直观。','Step into the scenes and read the conventions; next time the comparison will feel more intuitive.');
  if(!records[mode]||score/questions.length>records[mode].score/records[mode].total)records[mode]={score,total:questions.length};
  try{localStorage.setItem(storageKey,JSON.stringify({snapshotId:data.snapshotId,records}));}catch{}
  $('quiz-result-title').focus();
}
try{
  const response=await fetch('/quiz-data.json');
  if(!response.ok)throw new Error('题目加载失败');
  data=await response.json();
  try{const saved=JSON.parse(localStorage.getItem(storageKey)||'null');if(saved?.snapshotId===data.snapshotId)records=saved.records||{};}catch{}
  $('quiz-content-version').textContent=contentVersionText();
  $('quiz-start').disabled=false;
  best();
  for(const button of document.querySelectorAll('[data-quiz-mode]'))button.onclick=()=>updateMode(button.dataset.quizMode);
  $('quiz-start').onclick=start;
  $('quiz-next').onclick=()=>{if(index===questions.length-1)finish();else{index++;showQuestion();}};
  $('quiz-restart').onclick=start;
  $('quiz-change-mode').onclick=resetView;
  $('quiz-clear').onclick=()=>{records={};try{localStorage.removeItem(storageKey);}catch{}best();};
  document.addEventListener('atlas-language',()=>{
    if(!$('quiz-session').hidden||!$('quiz-result').hidden){location.reload();return;}
    $('quiz-content-version').textContent=contentVersionText();
    best();
  });
  document.documentElement.dataset.ready='true';
}catch(error){
  $('quiz-best').textContent=T('挑战暂时未准备好，可以先从知识库继续探索。','The challenge is not ready yet. You can keep exploring from the library.');
  console.error(error);
}
