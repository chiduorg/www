import {reviewLabel,isReviewed,conditionLines,conditionLinesEn,entryKey} from '../content/presentation.js';
import {updateViewLink} from './fallback.js';
import {clamp,scientific,superscript} from '../quantities/index.js';
export {clamp,scientific,superscript};
export const $=id=>document.getElementById(id);
let lastChapterId='';
export async function loadEntries(type){const response=await fetch('./entries.json');if(!response.ok)throw new Error('内容加载失败');return(await response.json()).filter(e=>e.id.startsWith(type+'.')).sort((a,b)=>a.quantity.value-b.quantity.value);}
export function chapterList(chapters,entries,onSelect){
  $('chapter-list').replaceChildren();
  chapters.forEach((chapter,index)=>{const entry=entries.find(e=>entryKey(e)===chapter.id);if(!entry)return;const button=document.createElement('button');button.className='chapter-button';button.dataset.id=entry.id;const number=document.createElement('span');number.className='chapter-number';number.textContent=String(index+1).padStart(2,'0');const text=document.createElement('span');text.textContent=chapter.label;if(chapter.en)text.dataset.en=chapter.en;const sub=document.createElement('small');sub.textContent=chapter.sub==='@value'?entry.displayValue:chapter.sub;button.append(number,text,sub);button.onclick=()=>onSelect(entry);$('chapter-list').append(button);});
}
export function entryPicker(entries,onSelect){const wrapper=document.createElement('label');wrapper.className='entry-picker';wrapper.textContent='可探索条目';wrapper.dataset.en='Explore entries';const select=document.createElement('select');select.id='entry-picker';select.setAttribute('aria-label','选择可探索条目');select.dataset.enAria='Explore entries';for(const entry of entries){const option=document.createElement('option');option.value=entry.id;option.textContent=entry.title;if(entry.titleEn&&entry.titleEn!==entry.title)option.dataset.en=entry.titleEn;select.append(option);}select.onchange=()=>onSelect(entries.find(entry=>entry.id===select.value));wrapper.append(select);$('chapter-list').before(wrapper);}
export function applyScenery(scenery){if(!scenery)return;if($('scene-phase').textContent!==scenery.label)$('scene-phase').textContent=scenery.label;$('scene-phase').title=scenery.note||'';document.body.dataset.sceneKind=scenery.specific?'dedicated':'reference';const note=document.querySelector('.station-canvas-note');if(note){const text=scenery.note||'图景为视觉示意';note.textContent=text.length>72?text.slice(0,71)+'…':text;note.title=text;}}
export function markChapter(entry,chapters,entries){
  let current=null;for(const button of $('chapter-list').children){const active=button.dataset.id===entry.id;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));if(active)current=button;}
  const list=$('chapter-list');
  if(current&&entry.id!==lastChapterId&&list.scrollWidth>list.clientWidth){current.scrollIntoView({block:'nearest',inline:'center'});}
  lastChapterId=entry.id;
}
const articleCache=new Map();
async function loadArticleParts(entry){
  if(articleCache.has(entry.id))return articleCache.get(entry.id);
  const [axis,slug]=entry.id.split('.');
  const response=await fetch(`/entry/${encodeURIComponent(axis)}/${encodeURIComponent(slug)}/`,{credentials:'same-origin'});
  if(!response.ok)throw new Error('文章页不可用');
  const document_=new DOMParser().parseFromString(await response.text(),'text/html');
  const prose=document_.querySelector('.article-prose');
  const sections=[...document_.querySelectorAll('.article-sources')];
  const parts={prose:prose?prose.innerHTML:'',sections};
  articleCache.set(entry.id,parts);return parts;
}
export async function showNotes(entry){
  const container=$('notes-content');container.replaceChildren();const h=document.createElement('h1');h.textContent=entry.title;container.append(h);const notice=document.createElement('p');notice.className='review-note';notice.textContent=reviewLabel(entry)+(isReviewed(entry)?' · 已对照所列资料核对，不代表外部同行评审。':' · 数值与来源仍待核对。');container.append(notice);
  const article=document.createElement('a');article.href=articleUrl(entry);article.className='notes-article-link';article.textContent='打开独立知识文章 ↗';container.append(article);
  let loaded=false;
  if(!entry.body){
    try{
      const parts=await loadArticleParts(entry);
      if(parts.prose){const prose=document.createElement('div');prose.className='article-prose notes-prose';prose.innerHTML=parts.prose;container.append(prose);}
      if(parts.sections.length)container.append(...parts.sections);
      loaded=Boolean(parts.prose||parts.sections.length);
    }catch{}
  }
  if(!loaded&&entry.visual?.note){const note=document.createElement('p');note.className='review-note';note.textContent='图景说明：'+entry.visual.note;container.append(note);}
  const body=(entry.body||'').trim();
  for(const block of (body?body.split(/\n\s*\n/):[])){const heading=block.startsWith('## '),element=document.createElement(heading?'h2':'p');element.textContent=heading?block.slice(3):block;container.append(element);}
  if(!loaded&&(entry.sources||[]).length){const heading=document.createElement('h2');heading.textContent='参考来源';container.append(heading);const list=document.createElement('ol');for(const source of entry.sources){const item=document.createElement('li'),link=document.createElement('a');link.href=source.url;link.textContent=source.title+' ↗';link.rel='noopener noreferrer';item.append(link);list.append(item);}container.append(list);}
  if(!entry.body&&!loaded){const fallback=document.createElement('p');fallback.className='review-note';fallback.textContent='正文暂未载入，请打开独立知识文章阅读。';container.append(fallback);}
  $('notes-dialog').showModal();
}
export function bindNotes(getEntry){$('read-notes').onclick=()=>showNotes(getEntry());$('close-notes').onclick=()=>$('notes-dialog').close();}
const CATEGORY_EN={'太初宇宙':'Early Universe','复合与黑暗时代':'Recombination & Dark Ages','星系时代':'Galaxy Era','我们邻近的宇宙':'Our Neighborhood','早期生命':'Early Life','生命演化':"Life's Evolution",'此时刻':'Present Day','恒星与宇宙极端':'Stars & Cosmic Extremes','极高温':'Extreme Heat','极低温':'Ultracold','低温':'Cryogenic','中温':'Moderate','常温':'Room Temperature','高温':'High Temperature','原子与分子':'Atoms & Molecules','星系与宇宙':'Galaxies & Universe','地球与地质':'Earth & Geology','量子与粒子':'Quantum & Particles','行星与太阳系':'Planets & Solar System','生命与细胞':'Life & Cells','天体与尺度':'Celestial & Scale','工程与日常':'Engineering & Everyday','尺度探索':'Scale Exploration'};
const SUMMARY_EN={
 'time.big-bang':'The hot Big Bang is the earliest well-described epoch in this timeline: space itself expands and cools from an extremely dense, hot state. The exact moment remains a model boundary, not a directly measured event.',
 'time.recombination':'About 380,000 years after the Big Bang, electrons and protons combined into neutral hydrogen. The universe became transparent, and the first free light travelled outward — the origin of the cosmic microwave background.',
 'time.first-stars':'The first generation of stars formed in the early gas clouds of the universe. JWST places their formation roughly 100–400 million years after the Big Bang; this entry uses a 200-million-year reference anchor and does not claim a single measured age.',
 'time.galaxy-formation':'Gas, dark matter and early star clusters assembled into galaxies. The timeline from the first protogalaxies to mature spirals and ellipticals spans billions of years, with mergers shaping much of the structure we see today.',
 'time.solar-system':'The Sun and planets formed from a rotating disk of gas and dust about 4.6 billion years ago. This entry marks the disk stage and the birth of the Solar System, not a single day of formation.',
 'time.first-life':'The earliest evidence of life appears in the geological record within the first billion years of Earth’s history. The exact origin remains unresolved; this entry anchors the first preserved records rather than the first living cell.',
 'time.cambrian':'The Cambrian explosion marks a rapid diversification of animal body plans in the fossil record. It is a interval in geological time, not a single sudden moment, and its timing varies across regions and lineages.',
 'time.present':'The present is the reference point at the end of the timeline. “Now” is defined by the observer’s clock; distant events are described by the time their light reaches us.',
 'temperature.absolute-zero':'Absolute zero is the zero point of the thermodynamic temperature scale: 0 K equals −273.15 °C. Cooling toward zero does not stop all microscopic motion; quantum zero-point motion cannot be removed.',
 'temperature.bose-einstein':'At nanokelvin temperatures, bosonic atoms can occupy the same quantum state and form a Bose–Einstein condensate. This entry marks a lab reachable temperature, not the absolute zero limit.',
 'temperature.liquid-nitrogen':'Liquid nitrogen boils at about 77 K at atmospheric pressure (−195.8 °C). It is a common laboratory coolant and a practical reference point for cryogenic work.',
 'temperature.water-freezing':'At standard pressure, water freezes at 273.15 K (0 °C). The value is a defined phase boundary at a stated pressure, not a universal constant for every environment.',
 'temperature.human-body-temperature':'Human core body temperature is about 310 K (37 °C). It is a regulated range rather than one exact number, and it varies with measurement site, time of day and individual state.',
 'temperature.boiling-water':'At standard atmospheric pressure, water boils at 373.15 K (100 °C). Boiling temperature depends strongly on pressure, so the entry states the pressure reference.',
 'temperature.sun-surface':'This entry uses about 5,772 K as a reference for the Sun’s effective temperature, following the nominal solar values adopted by the IAU 2015 resolution. Effective temperature summarizes the total radiation; it does not mean every point on the photosphere is at the same temperature.',
 'temperature.sun-core':'The Sun’s core is near 15 million K, where hydrogen fusion releases energy. This is a model-based central value, not a directly measured temperature at a single point.',
 'temperature.planck-temperature':'The Planck temperature, about 1.4×10³² K, is the highest temperature in standard physical models. It marks the limit where known physics breaks down, not a temperature reached by an experiment.'
};
export function setDescription(entry){const summary=document.documentElement.dataset.lang==='en'?(SUMMARY_EN[entry.id]||entry.summaryEn||entry.summary):entry.summary;$('event-title').textContent=entry.title;if(entry.titleEn)$('event-title').dataset.en=entry.titleEn;$('event-summary').textContent=summary;$('event-summary').dataset.en=SUMMARY_EN[entry.id]||entry.summaryEn||entry.summary;$('event-category').textContent=document.documentElement.dataset.lang==='en'?(CATEGORY_EN[entry.category]||'Scale Exploration'):(entry.category||'尺度探索');
$('event-category').dataset.en=CATEGORY_EN[entry.category]||'Scale Exploration';$('event-en').textContent=(entry.titleEn||entryKey(entry).replaceAll('-',' ')).toUpperCase();$('review-state').textContent=reviewLabel(entry);
  let mobileTitle=$('mobile-event-title');if(!mobileTitle){mobileTitle=document.createElement('h2');mobileTitle.id='mobile-event-title';mobileTitle.className='mobile-event-title';document.querySelector('.station-caption').prepend(mobileTitle);}mobileTitle.textContent=entry.title;if(entry.titleEn)mobileTitle.dataset.en=entry.titleEn;
  let conditions=$('event-conditions');if(!conditions){conditions=document.createElement('p');conditions.id='event-conditions';conditions.className='event-conditions';$('event-summary').after(conditions);}conditions.textContent=conditionLines(entry).join(' ');conditions.dataset.en=conditionLinesEn(entry).join(' ');conditions.hidden=!conditions.textContent;
  let link=$('article-link');if(!link){link=document.createElement('a');link.id='article-link';link.className='station-article-link';link.textContent='打开独立知识文章 ↗';link.dataset.en='Open the full article ↗';$('read-notes').after(link);}link.href=articleUrl(entry);
  const url=new URL(location.href);url.searchParams.set('entry',entry.id);history.replaceState(null,'',url);updateViewLink();
}
export function fail(error){console.error(error);$('event-title').textContent='暂时无法打开探索器';$('event-summary').textContent='请刷新页面重试。'+error.message;}
import {articleUrl} from '../content/routes.js';
