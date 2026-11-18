import {renderMarkdown} from '../content/markdown.mjs';
import {measureLabel,conditionLines,reviewLabel} from '../content/presentation.js';
import {MASS_BANDS} from '../content/mass-scale.js';
import {articleUrl,exploreUrl,siteOf,dimensions,canonicalBase} from '../content/routes.js';

const escapeHTML=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const e=escapeHTML;

function nav(site,config){
  const mark=target=>target===site?' aria-current="page"':'';
  return `<a class="skip-link" href="#main">跳至正文</a><header class="atlas-header"><a class="atlas-brand" href="/"><span class="atlas-symbol" aria-hidden="true">◎</span><span>${e(config.name.replace(/\s+Atlas$/i,''))}<span class="brand-line">ATLAS / 万物尺度</span></span><span class="visually-hidden">首页</span></a><nav aria-label="主导航"><a href="/space/"${mark('space')}>空间</a><a href="/time/"${mark('time')}>时间</a><a href="/temperature/"${mark('temperature')}>温度</a><a href="/elements/"${mark('elements')}>元素</a><a href="/mass/"${mark('mass')}>质量</a><a href="/library/">知识库</a></nav></header>`;
}

const footer=config=>`<footer class="site-footer"><span>尺度 MAGNITUDE <span class="footer-divider">·</span> 换一个尺度，看见另一个世界。</span><span><a href="/about/">关于</a><span class="footer-divider">·</span><a href="/license/">内容 CC BY 4.0 / 代码 MIT</a><span class="footer-divider">·</span>内容 v${e(config.contentVersion)}</span></footer>`;

export function renderArticlePages({entries,all,config,site,snapshot,report}){
  const byId=new Map(all.map(entry=>[entry.id,entry]));
  const base=canonicalBase(config,site);
  const staticBase=config.staticOrigin||null;
  const ogBase=staticBase||base;
  const pages=new Map();
  const unavailable=new Set([...(report.unplottableTime||report.timeBeyondPresent||[]).map(x=>x.id),...all.filter(x=>x.quantity.value===null).map(x=>x.id)]);
  const scaleIndex=new Map();
  const rows=entries.filter(x=>x.quantity?.value>0&&!(site==='time'&&x.chronology?.plot===false)).sort((a,b)=>a.quantity.value-b.quantity.value);
  if(rows.length){
    const lo=Math.log10(rows[0].quantity.value),hi=Math.log10(rows[rows.length-1].quantity.value),span=Math.max(hi-lo,1e-9);
    rows.forEach((x,i)=>scaleIndex.set(x.id,{pct:Math.max(0,Math.min(100,(Math.log10(x.quantity.value)-lo)/span*100)),prev:rows[i-1],next:rows[i+1],lo:rows[0],hi:rows[rows.length-1]}));
  }
  const card=entry=>`<a class="entry-tile" data-id="${e(entry.id)}" href="${articleUrl(entry,config)}"><span class="eyebrow">${dimensions[siteOf(entry)]} / ${e(entry.category)}</span><h3>${e(entry.title)}</h3><p>${e(entry.summary)}</p><div class="tile-bottom"><span>${e(entry.displayValue)}</span><span aria-hidden="true">↗</span></div></a>`;
  function scaleBar(entry){
    const s=scaleIndex.get(entry.id);if(!s)return '';
    const link=x=>x?`<a href="${articleUrl(x,config)}">${e(x.title)}</a>`:'—';
    return `<section class="scale-position"><div class="section-heading"><h2>本条在${dimensions[siteOf(entry)]}轴上的位置</h2><span class="eyebrow">LOG POSITION / 数量级</span></div><div class="scale-track"><span class="scale-marker" style="left:${s.pct.toFixed(2)}%"><i></i></span></div><div class="scale-ends"><span>${e(s.lo.title)} · ${e(s.lo.displayValue)}</span><span>${e(s.hi.title)} · ${e(s.hi.displayValue)}</span></div><p class="muted">位置按对数尺度计算，只表达数量级，不代表线性距离；相邻条目：${link(s.prev)} / ${link(s.next)}。</p></section>`;
  }
  function massFigure(entry,s){
    const visual=entry.visual;
    if(!visual)return '';
    if(visual.template==='mass-zero'){
      return `<section class="mass-figure mass-figure-zero" aria-label="${e(entry.title)}：零质量特例"><div class="mass-figure-head"><span class="eyebrow">MASS POSITION / 质量位置</span><span class="eyebrow">ZERO MASS · 不进入 16 带</span></div><div class="mass-zero-line"><span class="mass-zero-dot"></span><strong>${e(entry.displayValue)}</strong><small>静质量 = 0；实验上限不是点值</small></div><p class="mass-figure-caption">零没有对数；质量阶梯不把 0 塞进 B1，也不伪造一个“最小质量”。这条只作为零质量特例阅读。</p></section>`;
    }
    if(visual.template!=='mass-scale')return '';
    const pct=Math.max(0,Math.min(100,Number(visual.position)||0));
    const link=x=>x?`<a href="${articleUrl(x,config)}">${e(x.title)}</a>`:'—';
    const segments=MASS_BANDS.map(band=>{
      const span=band.to-band.from+1;
      const current=band.id===visual.band;
      return `<span class="mass-band-seg${current?' is-current':''}" style="flex:${span} 1 0;--band-color:${e(visual.color)}" title="${e(band.id)} · ${e(band.label)}"></span>`;
    }).join('');
    const labels=MASS_BANDS.map(band=>{
      const span=band.to-band.from+1;
      return `<span class="${band.id===visual.band?'is-current':''}" style="flex:${span} 1 0">${e(band.id)}</span>`;
    }).join('');
    const bandEn=MASS_BANDS.find(b=>b.id===visual.band)?.labelEn||visual.bandLabel;
    return `<section class="mass-figure" aria-label="${e(entry.title)}在质量轴上的位置"><div class="mass-figure-head"><span class="eyebrow">MASS POSITION / 质量位置</span><span class="eyebrow" data-en="${e(visual.band)} · ${e(bandEn)}">${e(visual.band)} · ${e(visual.bandLabel)}</span></div><div class="mass-band-rail" role="img" aria-label="质量轴 16 个覆盖带；当前位于 ${e(visual.band)} ${e(visual.bandLabel)}">${segments}<span class="mass-band-marker" style="left:${pct.toFixed(2)}%"><i></i></span></div><div class="mass-band-labels" aria-hidden="true">${labels}</div><div class="mass-figure-foot"><span><b>${e(entry.displayValue)}</b> · log10(m/kg) = ${e(visual.log10)}</span><span>相邻：${link(s?.prev)} / ${link(s?.next)}</span></div><p class="mass-figure-note">${e(visual.note||'位置按对数尺度计算；带宽度不代表线性质量比例。')}</p></section>`;
  }
  function shell(entry,url,body,structuredData,robots){
    const canonical=base?new URL(url,base).href:'';
    return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${e(entry.title)} · ${e(config.name)}</title><meta name="description" content="${e(entry.summary)}"><meta property="og:title" content="${e(entry.title)} · ${e(config.name)}"><meta property="og:description" content="${e(entry.summary)}"><meta property="og:type" content="article"><meta property="og:locale" content="zh_CN"><meta property="og:site_name" content="${e(config.name)}"><meta name="twitter:card" content="summary">${robots?`<meta name="robots" content="${robots}">`:''}${canonical?`<link rel="canonical" href="${e(canonical)}">`:''}<script type="application/ld+json">${JSON.stringify(structuredData).replaceAll('<','\\u003c')}</script><meta name="theme-color" content="#070b12"><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/refined.css"><link rel="stylesheet" href="/theme.css"><script type="module" src="/brand.js"></script></head><body>${nav(site,config)}${body}${footer(config)}</body></html>`;
  }
  for(const entry of entries){
    const url=`entry/${site}/${entry.id.split('.')[1]}/`,related=(entry.related||[]).map(id=>byId.get(id)).filter(Boolean);
    const sameConcept=all.filter(x=>x.id!==entry.id&&siteOf(x)!==site&&x.title===entry.title).slice(0,4);
    const reviewed=['reviewed','published'].includes(entry.reviewStatus);
    const body=renderMarkdown(entry.body,entry.sources||[]);
    const sources=entry.sources||[];
    const sourceHTML=sources.length?`<ol class="source-list">${sources.map((source,index)=>`<li id="source-${index+1}"><a href="${e(source.url)}" rel="noopener noreferrer">${e(source.title)} ↗</a><span>${e(source.publisher)} · 访问 ${e(source.accessed)}</span></li>`).join('')}</ol>`:'<p>科学参考来源尚待补全。请结合权威资料核实后使用。</p>';
    const absolute=base?new URL(url,base).href:articleUrl(entry,config);
    const image=ogBase?new URL(`/og/${site}.png?v=${encodeURIComponent(config.contentVersion)}`,ogBase).href:'';
    const articleData={"@context":'https://schema.org',"@type":'Article',headline:entry.title,description:entry.summary,inLanguage:'zh-CN',url:absolute,mainEntityOfPage:{"@type":'WebPage',"@id":absolute},...(image?{image:[image]}:{}),license:'https://creativecommons.org/licenses/by/4.0/',author:{"@type":'Organization',name:config.name,url:base||'https://chidu.org'},copyrightHolder:{"@type":'Organization',name:config.name},publisher:{"@type":'Organization',name:config.name,logo:{"@type":'ImageObject',url:ogBase?new URL('/favicon.svg',ogBase).href:''}},isPartOf:{"@type":'WebSite',name:config.name,url:base||'https://chidu.org'}};
    if(/^\d{4}-\d{2}-\d{2}$/.test(entry.review?.date||'')){articleData.datePublished=entry.review.date;articleData.dateModified=entry.review.date;}
    const unavailableNote=unavailable.has(entry.id);
    const displayTitleEn=entry.titleEn||(site==='mass'
      ? `${String(entry.id.split('.')[1]||entry.id).replaceAll('-',' ').replace(/\b\w/g,c=>c.toUpperCase())} · ${entry.displayValue}`
      : entry.title);
    const bodyHTML=`<main id="main" class="section-wrap article-main"><nav class="breadcrumbs" aria-label="面包屑"><a href="/library/">知识库</a><span>/</span><a href="/library/?dimension=${site}">${dimensions[site]}</a><span>/</span><span>${e(entry.title)}</span></nav><div class="article-layout"><article class="knowledge-article"><p class="eyebrow">${dimensions[site]} / ${e(entry.category)}</p><h1 data-en-title="${e(displayTitleEn)}">${e(entry.title)}</h1>${entry.titleEn?`<p class="article-english">${e(entry.titleEn)}</p>`:''}<div class="article-status" data-review="${e(entry.reviewStatus)}"><span class="status-dot"></span>${reviewLabel(entry)}<span>·</span>开放知识条目</div><p class="article-lead">${e(entry.summary)}</p>${site==='mass'?massFigure(entry,scaleIndex.get(entry.id)):''}${unavailableNote?'':`<a class="solid-button mobile-entry-action" href="${exploreUrl(entry,config)}">进入${dimensions[site]}图景 <span>↗</span></a>`}<div class="article-prose">${body}</div>${conditionLines(entry).length?`<section class="article-sources"><h2 data-en="Conditions & comparison basis">适用条件与比较口径</h2><ul>${conditionLines(entry).map(line=>`<li>${e(line)}</li>`).join('')}</ul>${entry.uncertainty?`<p>${e(entry.uncertainty)}</p>`:''}</section>`:''}<section class="article-sources"><h2 data-en="References & review">参考来源与审核</h2>${sourceHTML}<p class="muted">${entry.rights?.status==='rewritten'?'本条正文已依所列资料重新撰写；核对方式为资料比对，非外部同行评审。正文以 CC BY 4.0 提供；第三方来源仅用于事实核对，不随本条目再许可。':'正文正在逐条重写；科学核对与使用许可分别记录。'}</p><p class="muted">© 2026 尺度 MAGNITUDE 贡献者 · <a href="/license/">CC BY 4.0</a></p></section>${entry.visual?.note?`<section class="article-sources"><h2 data-en="View note">图景说明</h2><p>${e(entry.visual.note)}</p></section>`:''}</article><aside class="article-sidebar"><div class="article-facts"><span class="eyebrow" data-en="REFERENCE VALUE / Reference value">REFERENCE VALUE / 参考数值</span><strong>${e(entry.displayValue)}</strong><dl><dt data-en="Dimension">维度</dt><dd>${dimensions[site]}</dd><dt>${entry.quantity.range||entry.quantity.bound?'<span data-en="Navigation reference">导航参考点</span>':'<span data-en="Base value">基础数值</span>'}</dt><dd>${entry.quantity.value===null?'未定，不用于数量比较':e(entry.quantity.value)+' '+e(entry.quantity.unit)}</dd><dt data-en="Measurement basis">测量口径</dt><dd>${e(measureLabel(entry))}</dd><dt data-en="Content version">内容版本</dt><dd>v${e(config.contentVersion)}</dd></dl>${unavailableNote?'<p class="notice">此条目的可比较数值尚未确定，或不适用于当前尺度轴。保留知识阅读，不把旧占位数值作为探索坐标。</p>':`<a class="solid-button" href="${exploreUrl(entry,config)}">进入${dimensions[site]}图景 <span>↗</span></a>`}<a class="sidebar-link" data-en="Suggest a revision →" href="/contribute/?entry=${e(entry.id)}">提出修订 →</a></div><div class="provenance"><span class="eyebrow">CONTENT RECORD</span><p>${e(entry.id)}</p><a data-en="View Markdown source ↗" href="/source/${site}/${entry.id.split('.')[1]}.md">查看 Markdown 原文 ↗</a><p class="muted">快照 ${snapshot.id.slice(7,19)}</p></div></aside></div>${site==='mass'?'':scaleBar(entry)}${related.length||sameConcept.length?`<section class="related-section"><div class="section-heading"><h2 data-en="${related.length?'Related entries':'Same name in other dimensions'}">${related.length?'关联条目':'其他维度的同名条目'}</h2></div><div class="entry-grid">${[...new Map([...related,...sameConcept].map(x=>[x.id,x])).values()].map(card).join('')}</div></section>`:''}</main>`;
    pages.set(url+'index.html',shell(entry,url,bodyHTML,articleData,reviewed?'':'noindex,follow'));
  }
  return pages;
}
