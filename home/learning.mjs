import fs from 'node:fs';
import {articleUrl,siteOf,dimensions} from '@universe-atlas/engine/content/routes';

const read = (name) => JSON.parse(fs.readFileSync(new URL(`../content/learning/${name}.json`, import.meta.url), 'utf8'));
const data = {
  dictionary: read('dictionary'),
  methods: read('methods'),
  objects: read('objects'),
  collections: read('collections'),
  ladders: read('ladders'),
  misconceptions: read('misconceptions'),
  qa: read('qa'),
};

function links(ids, byId, e) {
  const items = ids.map((id) => byId.get(id)).filter(Boolean);
  if (!items.length) return '';
  return `<div class="learning-links">${items.map((entry) => `<a href="${articleUrl(entry)}">${e(entry.title)}<span>${dimensions[siteOf(entry)]}</span></a>`).join('')}</div>`;
}

function item(title, body, ids, byId, e, extra = '') {
  return `<article class="learning-item"><h2>${title}</h2>${extra}${body}${links(ids, byId, e)}</article>`;
}

export function renderLearningPages({byId, shell, e}) {
  const pages = new Map();
  const sections = [
    ['dictionary', '尺度词典', '把常用尺度词、单位与口径放在同一处，避免把半径当直径、把时长当时点。', `${data.dictionary.length} 个词条`],
    ['methods', '测量方法', '每种方法能回答什么问题、误差从哪里来，以及它不能替代什么。', `${data.methods.length} 种方法`],
    ['objects', '对象页', '太阳、地球、水这类对象在空间、时间、温度、元素与质量中已有的入口；缺失的维度会明确标注。', `${data.objects.length} 个对象`],
    ['collections', '主题合集', '按主题把条目连成可顺序阅读的线索。', `${data.collections.length} 个合集`],
    ['ladders', '尺度阶梯', '沿数量级逐级跨越，看清相邻尺度之间的参照。', `${data.ladders.length} 条阶梯`],
    ['misconceptions', '常见误解', '针对真正容易混淆的说法，给出纠正与依据。', `${data.misconceptions.length} 条纠正`],
    ['qa', '系统问答', '关于概念辨析、数量级、口径与误解的短问答。', `${data.qa.length} 个问题`],
  ];
  pages.set('learning/index.html', shell('学习层', '词典、方法、对象、合集、阶梯、误解与问答，作为知识条目的导航层。', `<main id="main" class="section-wrap standard-main"><p class="eyebrow">LEARNING LAYER</p><h1 class="page-title">在进入细节之前，<br>先找到坐标系。</h1><p class="page-intro">知识条目回答“它有多大、多久、多热”。学习层回答“这个数怎么读、和什么比、容易错在哪里”。每一页都链接回具体条目与来源。</p><h2 class="visually-hidden">学习层分区</h2><div class="entry-grid">${sections.map(([id, title, desc, count]) => `<a class="entry-tile" href="/${id}/"><span class="eyebrow">${count}</span><h3>${title}</h3><p>${desc}</p><div class="tile-bottom"><span>进入</span><span aria-hidden="true">↗</span></div></a>`).join('')}</div><section class="article-sources"><h2>学习层与知识条目的关系</h2><p>学习层不替代条目，也不引入独立数值。词典、方法、对象、合集、阶梯、误解与问答所引用的量值，均以已核对条目的口径为准；条目更新时，学习层链接跟着更新。</p></section></main>`, {canonical: '/learning/'}));

  pages.set('dictionary/index.html', shell('尺度词典', '尺度、单位与测量口径的简明词典。', `<main id="main" class="section-wrap standard-main"><p class="eyebrow">DICTIONARY OF SCALE</p><h1 class="page-title">先弄清这个词，<br>再比较那个数。</h1><p class="page-intro">${data.dictionary.length} 个词条，按拼音顺序排列。每个词条都链接到至少一个已核对条目，量值口径以条目为准。</p><div class="learning-grid">${data.dictionary.map((d) => item(e(d.term), `<p>${e(d.definition)}</p>${d.unit ? `<p class="muted">单位/量：${e(d.unit)}</p>` : ''}${d.confusion ? `<p class="muted">常见混淆：${e(d.confusion)}</p>` : ''}`, d.entries, byId, e)).join('')}</div></main>`, {canonical: '/dictionary/'}));

  pages.set('methods/index.html', shell('测量方法', '测量方法能回答什么、误差从哪里来。', `<main id="main" class="section-wrap standard-main"><p class="eyebrow">HOW WE KNOW</p><h1 class="page-title">数字背后，<br>是方法和误差。</h1><p class="page-intro">${data.methods.length} 种方法。每一种都说明适用范围与不能替代的对象，并链接到使用该方法的条目。</p><div class="learning-grid">${data.methods.map((m) => item(e(m.title), `<p><strong>能回答：</strong>${e(m.question)}</p><p>${e(m.method)}</p><p class="muted">局限：${e(m.limits)}</p>`, m.entries, byId, e)).join('')}</div></main>`, {canonical: '/methods/'}));

  pages.set('objects/index.html', shell('对象页', '同一对象在空间、时间、温度、元素与质量中的入口。', `<main id="main" class="section-wrap standard-main"><p class="eyebrow">ONE OBJECT, FIVE LENSES</p><h1 class="page-title">同一个对象，<br>五种读法。</h1><p class="page-intro">${data.objects.length} 个对象。每一页把该对象在空间、时间、温度、元素与质量中已有的条目放在一起；语料缺失的维度会写明，不用独立数值补造。</p><div class="learning-grid">${data.objects.map((o) => item(e(o.title), `<p>${e(o.summary)}</p>`, o.entries, byId, e)).join('')}</div></main>`, {canonical: '/objects/'}));

  pages.set('collections/index.html', shell('主题合集', '按主题顺序阅读的条目线索。', `<main id="main" class="section-wrap standard-main"><p class="eyebrow">COLLECTIONS</p><h1 class="page-title">把零散的坐标，<br>连成一条线。</h1><p class="page-intro">${data.collections.length} 个合集，每个合集给出阅读顺序与导读，不改变条目本身的数值与口径。</p>${data.collections.map((c) => `<section class="learning-block"><h2>${e(c.title)}</h2><p>${e(c.intro)}</p>${links(c.entries, byId, e)}</section>`).join('')}</main>`, {canonical: '/collections/'}));

  pages.set('ladders/index.html', shell('尺度阶梯', '沿数量级逐级跨越的参照序列。', `<main id="main" class="section-wrap standard-main"><p class="eyebrow">SCALE LADDERS</p><h1 class="page-title">一级一级，<br>走到另一个尺度。</h1><p class="page-intro">${data.ladders.length} 条阶梯。每一步给出一个代表条目；没有同口径实测对象的区间标为空档，不强行填充，模型未来单独标出。</p><p class="learning-legend">空档是语料真空档：该区间没有同口径实测对象，跨越的数量级用文字说明，不用邻近条目凑数。模型未来是相对现在的预测时长，不是宇宙诞生后的绝对时点，也不与既有实测时间共用刻度。</p>${data.ladders.map((l) => `<section class="learning-block"><h2>${e(l.title)}</h2><p>${e(l.intro)}</p><ol class="learning-steps">${l.steps.map((s) => {if (s.gap) return `<li class="learning-gap"><span class="eyebrow">${e(s.label)}</span><small>${e(s.gap)}</small></li>`; const entry = byId.get(s.entry); if (!entry) return ''; const badge = s.future ? '<span class="future-badge">模型未来 · 相对现在</span>' : ''; return `<li${s.future ? ' class="learning-future"' : ''}><span class="eyebrow">${e(s.label)}${badge}</span><a href="${articleUrl(entry)}">${e(entry.title)}</a><small>${e(entry.displayValue)}</small></li>`;}).join('')}</ol></section>`).join('')}</main>`, {canonical: '/ladders/'}));

  pages.set('misconceptions/index.html', shell('常见误解', '针对容易混淆的尺度说法给出纠正与依据。', `<main id="main" class="section-wrap standard-main"><p class="eyebrow">MISCONCEPTIONS</p><h1 class="page-title">先纠正说法，<br>再记住数字。</h1><p class="page-intro">${data.misconceptions.length} 条。每条都指出具体错在哪里，并链接到支撑纠正的条目与来源。</p><div class="learning-grid">${data.misconceptions.map((m) => item(`“${e(m.claim)}”`, `<p><strong>纠正：</strong>${e(m.correction)}</p><p class="muted">依据：${e(m.evidence)}</p>`, m.entries, byId, e)).join('')}</div></main>`, {canonical: '/misconceptions/'}));

  pages.set('qa/index.html', shell('系统问答', '概念辨析、数量级、口径与误解的短问答。', `<main id="main" class="section-wrap standard-main"><p class="eyebrow">QUESTIONS AND ANSWERS</p><h1 class="page-title">从一个问题，<br>走到一个口径。</h1><p class="page-intro">${data.qa.length} 个问题。答案只使用已核对条目的量值与表述，并给出继续阅读的入口。</p><div class="qa-list">${data.qa.map((q) => `<details class="qa-item"><summary>${e(q.q)}</summary><p>${e(q.a)}</p>${links(q.entries, byId, e)}</details>`).join('')}</div></main>`, {canonical: '/qa/'}));

  return pages;
}
