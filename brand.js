const html=document.documentElement;
const ORIGINAL_TITLE=document.title;
const THEME_KEY='atlas-theme',LANG_KEY='atlas-lang';
const params=new URLSearchParams(location.search);
function readCookie(name){try{const match=document.cookie.match(new RegExp('(?:^|; )'+name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'=([^;]*)'));return match?decodeURIComponent(match[1]):null}catch{return null}}
function readStorage(key){try{return localStorage.getItem(key)}catch{return null}}
function systemLang(){try{const value=(navigator.languages&&navigator.languages[0])||navigator.language||'';return /^en/i.test(value)?'en':'zh-CN'}catch{return 'zh-CN'}}
function systemTheme(){try{return matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}catch{return 'dark'}}
function cookieDomain(){const host=location.hostname;return host==='chidu.org'||host.endsWith('.chidu.org')?'; Domain=.chidu.org':''}
function persist(key,value){try{localStorage.setItem(key,value)}catch{}try{document.cookie=`${key}=${encodeURIComponent(value)}; Path=/; Max-Age=31536000; SameSite=Lax${cookieDomain()}`}catch{}}
const storedTheme=readStorage(THEME_KEY);
const storedLang=readStorage(LANG_KEY);
const cookieTheme=readCookie(THEME_KEY);
const cookieLang=readCookie(LANG_KEY);
const sysTheme=systemTheme(),sysLang=systemLang();
let theme=params.get('theme')||cookieTheme||storedTheme||sysTheme;
if(theme!=='light'&&theme!=='dark')theme=sysTheme;
let lang=params.get('lang')||cookieLang||storedLang||sysLang;
if(lang==='en')lang='en';else if(lang==='zh'||lang==='zh-CN')lang='zh-CN';else lang=sysLang;
html.dataset.theme=theme;
html.dataset.lang=lang;
html.lang=lang==='en'?'en':'zh-CN';
html.style.colorScheme=theme;

const ZH='zh-CN',EN='en';
const NAV_LABELS={
 '/space/':['空间','Space'],'/time/':['时间','Time'],'/temperature/':['温度','Temperature'],
 '/elements/':['元素','Elements'],'/mass/':['质量','Mass'],'/library/':['知识库','Library'],
 'https://netcn.org/':['导航','Navigation']
};
const UI={
 '跳至正文':'Skip to content','首页':'Home','主导航':'Main navigation','尺度站点':'Scale sites',
 '换一个尺度，看见另一个世界。':'See another world at another scale.','尺度 MAGNITUDE':'MAGNITUDE',
 '学习':'Learning','关于':'About','内容 CC BY 4.0 / 代码 MIT':'Content CC BY 4.0 / Code MIT',
 '知识库':'Library','共同构建':'Contribute','导航':'Navigation',
 '参考来源与审核':'References & review','适用条件与比较口径':'Conditions & comparison basis',
 '关联条目':'Related entries','其他维度的同名条目':'Same name in other dimensions',
 '查看 Markdown 原文':'View Markdown source','提出修订':'Suggest a revision',
 '维度':'Dimension','基础数值':'Base value','导航参考点':'Navigation reference','测量口径':'Measurement basis',
 '内容版本':'Content version','参考数值':'Reference value','开放知识条目':'Open knowledge entry', '图景说明':'View note','正文正在逐条重写；科学核对与使用许可分别记录。':'Text is being rewritten entry by entry; review and licensing are recorded separately.',
 '本条正文已依所列资料重新撰写；核对方式为资料比对，非外部同行评审。正文以 CC BY 4.0 提供；第三方来源仅用于事实核对，不随本条目再许可。':'This text was rewritten from the listed sources; review is source comparison, not external peer review. Original text is CC BY 4.0; third-party sources are used for fact-checking only.',
 '科学参考来源尚待补全。请结合权威资料核实后使用。':'Scientific references are still being completed. Verify with authoritative sources before use.',
 '进入空间图景':'Enter the space view','进入时间图景':'Enter the time view','进入温度图景':'Enter the temperature view',
 '进入元素图景':'Enter the elements view','进入质量图景':'Enter the mass view',
 '空间':'Space','时间':'Time','温度':'Temperature','元素':'Elements','质量':'Mass',
 '暂停动态 Ⅱ':'Pause motion','沉浸模式 ⛶':'Immersive mode','对象资料 ⓘ':'Object notes',
 '当前视野宽度':'Current field width','动态预览':'Motion preview','拖动旋转 · 滚轮缩放':'Drag to rotate · scroll to zoom',
 '双指捏合 · 尺度尺跨级探索':'Pinch · use the scale ruler to cross levels',
 '当前设备暂不能显示 3D':'This device cannot display 3D','对象信息、尺度尺、比较数据仍可使用。':'Object information, the scale ruler and comparison data remain available.',
 '当前深度':'Current depth','类地行星':'Terrestrial planet','质量不是体积，也不是重量。拖动对数尺，向更重的地方下潜；每一层都换一种引力。':'Mass is neither volume nor weight. Drag the logarithmic ruler to descend; every layer changes the gravity.',
 '每多一个质子，到底改变了什么。':'What changes when you add a proton?',
 '七次闭壳，七次重新开始。拖动质子数，看看电子进入哪一层，以及性质为什么在那里拐弯。':'Seven closed shells, seven restarts. Drag the proton number to see which shell the electrons enter and why properties turn there.',
 '默认只显示概率云；壳层参考是球壳尺度，不是轨道':'Probability cloud shown by default; shell guides are radial scales, not orbits',
 '彩云 = s / p / d / f 概率分布':'Colored cloud = s / p / d / f probability distribution',
 '原子序数':'Atomic number','闭壳层':'Closed shell','只看价层':'Valence only','壳层参考':'Shell guides',
 '元素周期表':'Periodic table','解释页':'Explanations','向下阅读':'Read on','进入元素知识层':'Enter element knowledge',
 '质量不是一个数字，而是一把可以换的秤。':'Mass is not one number, but a scale you can change.',
 '拖动对数尺，向更重的地方下潜。':'Drag the logarithmic ruler to descend toward heavier things.',
 '质量覆盖带':'Mass bands','向下阅读质量层':'Read the mass layer','主单位 kg · 对数坐标':'Base unit kg · logarithmic axis',
 '内容 v1.3.0':'Content v1.3.0',
 '第一电离能':'First ionization energy','原子半径':'Atomic radius','电负性':'Electronegativity',
 '质量数':'Mass number','中子':'Neutrons','质子':'Protons','电子亲和能':'Electron affinity',
 '相对 Z=1':'Relative to Z=1','口径':'Basis','总质量':'Total mass','方法':'Method','不确定性':'Uncertainty',
 '天体总质量':'Total mass of body','不含':'Excludes','卫星轨道 / 引力场':'Satellite orbit / gravity field',
 '你想了解什么？':'What would you like to explore?','搜索知识库':'Search the library',
 '地球、太阳、生命……':'Earth, Sun, life…','内容已对照来源核对':'sources checked',
 '从地球出发':'Start from Earth','选择一条探索路线':'Choose a journey',
 '从一个问题，走向更大的世界。':'From one question to a larger world.','浏览全部知识':'Browse all knowledge',
 '不知道从哪里开始？':'Not sure where to begin?','让好奇心带路。':'Let curiosity lead.',
 '我们把条目连成探索路线，':'We connect entries into journeys,','让知识不再是孤立的坐标。':'so knowledge is no longer an isolated coordinate.',
 '查看探索路线':'View journeys','了解如何参与':'How to contribute','试试尺度小挑战':'Try the scale challenge',
 '一份知识，':'One body of knowledge,','生长出不同的世界。':'grows into different worlds.',
 '所有站点从同一份 Markdown 内容出发。条目有独立地址，可以阅读、引用和提出修订；场景让知识变得可感知。':'Every site starts from the same Markdown content. Entries have stable addresses and can be read, cited, and revised; scenes make knowledge perceptible.',
 '参考来源 1':'Reference 1','参考来源 2':'Reference 2','参考来源 3':'Reference 3',
 '来源已核对':'Sources verified','快照 fa3dd0485826':'Snapshot fa3dd0485826','快照':'Snapshot',
 '常见误解':'Common misconceptions','它是什么':'What it is','数值与口径':'Value & basis','怎样知道':'How we know',
 '与其他尺度的关系':'Relation to other scales','本条在空间轴上的位置':'Position on the space axis',
 '本条在温度轴上的位置':'Position on the temperature axis','本条在时间轴上的位置':'Position on the time axis',
 '怎么继续走':'Where to go next','与其他阶段的关系':'Relation to other stages','时间坐标与口径':'Time coordinates & basis',
 '这个读数是什么':'What this reading means','与其他温区的关系':'Relation to other temperature zones',
 '空间 / 生命与人体':'Space / Life & the human body','空间 / 日常与人造':'Space / Everyday & human-made',
 '空间 / 行星与太阳系':'Space / Planets & the solar system','空间 / 原子与分子':'Space / Atoms & molecules',
 '空间 / 星系与宇宙':'Space / Galaxies & the universe','空间 / 恒星与星际':'Space / Stars & interstellar',
 '空间 / 地球与地质':'Space / Earth & geology','空间 / 量子与粒子':'Space / Quantum & particles',
 '时间 / 人类与文明':'Time / Humans & civilization','时间 / 太初宇宙':'Time / The early universe',
 '时间 / 时长尺度':'Time / Duration scales','时间 / 地质年代':'Time / Geological eras',
 '时间 / 复杂生命与演化':'Time / Complex life & evolution','时间 / 生命起源与早期地球':'Time / Origin of life & early Earth',
 '温度 / 恒星与宇宙极端':'Temperature / Stars & cosmic extremes','温度 / 低温':'Temperature / Low temperature',
 '温度 / 中温':'Temperature / Moderate temperature','温度 / 常温':'Temperature / Ambient',
 '温度 / 高温':'Temperature / High temperature','温度 / 极低温':'Temperature / Ultracold',
 '地球':'Earth','人类':'Humans','太阳':'Sun','银河系':'Milky Way','宇宙':'Universe',
 '内容版本':'Content version','测量口径':'Measurement basis','维度':'Dimension','基础数值':'Base value',
 '开放知识条目':'Open knowledge entry','提出修订 →':'Suggest a revision →','图景说明':'View note','面包屑':'Breadcrumb',
 '适用条件与比较口径':'Conditions & comparison basis','参考来源与审核':'References & review','关联条目':'Related entries',
 '尺寸':'Size','日常':'Everyday','时点':'Moments','生命与人体':'Life & body','生命':'Life',
 '日常与人造':'Everyday & human-made','人类与文明':'Humans & civilization','地球与生命':'Earth & life',
 '天体':'Celestial bodies','距离':'Distance','图文模式':'Reading mode','打开独立知识文章 ↗':'Open the full article ↗',
 '已对照所列来源核对，非外部同行评审。':'Checked against listed sources; not external peer review.',
 '3D · 参考量值观察':'3D · reference-scale view','行星与太阳系':'Planets & the solar system',
 '地表纹理映射 · 光照与相对位置为示意':'Surface texture map · lighting and relative positions are illustrative',
 '可探索条目':'Explore entries','宇宙诞生':'The beginning','第一束自由的光':'First free light',
 '星系的时代':'The age of galaxies','早期生命的记录':'Early life records','生命大演化':'The evolution of life',
 '量子低温':'Quantum low temperature','液氮':'Liquid nitrogen','冰与水':'Ice and water','人体温度':'Body temperature',
 '沸腾的水':'Boiling water','恒星核心':'Stellar core','普朗克温标':'Planck temperature','太阳表面':'Sun’s surface',
 '这一层结束 ↗':'End of this shell ↗','暂无下一层':'No next shell','零质量特例':'Zero-mass case',
 '中微子与轻子':'Neutrinos & leptons','夸克、轻子与核子':'Quarks, leptons & nucleons','分子与生物大分子':'Molecules & biomolecules',
 '病毒与细胞器':'Viruses & organelles','细胞':'Cells','日常微粒':'Everyday particles','人体与家具':'Bodies & furniture',
 '车辆与大型动物':'Vehicles & large animals','巨型工程':'Mega-engineering','小天体':'Small bodies',
 '小行星与类地行星':'Asteroids & terrestrial planets','巨行星与系外行星':'Giant & exoplanets',
 '恒星与致密遗迹':'Stars & compact remnants','黑洞与类星体':'Black holes & quasars','星系与星系团':'Galaxies & clusters',
 '宇宙尺度':'Cosmic scale','星际介质':'Interstellar medium','恒星与星际':'Stars & interstellar',
 '原子与分子':'Atoms & molecules','星系与宇宙':'Galaxies & universe','地球与地质':'Earth & geology','量子与粒子':'Quantum & particles',
 '太初宇宙':'The early universe','时长尺度':'Duration scales','地质年代':'Geological eras','复杂生命与演化':'Complex life & evolution',
 '生命起源与早期地球':'Origin of life & early Earth','恒星与宇宙极端':'Stars & cosmic extremes','低温':'Low temperature',
 '中温':'Moderate temperature','常温':'Ambient','高温':'High temperature','极低温':'Ultracold',
 '第一代恒星 · 气体云中点亮星光':'First stars · starlight ignites in gas clouds',
 '太阳表面 · 光球与米粒组织':'Sun’s surface · photosphere and granulation','太阳表面纹理映射；自转速度为示意。':'Surface texture mapping; rotation speed is indicative.',
 '资料待科学审核':'Scientific review pending','来源已核对':'Source checked','待来源核对':'Source check pending',
 '阅读这个尺度':'Read this scale','打开独立知识文章 ↗':'Open the full article ↗',
 '闭壳节点':'Closed-shell node','新壳层起点':'Start of a new shell','构型为预测值':'Predicted configuration','标准元素':'Standard element',
 '周期':'Period','族':'Group','区块':'Block','基态构型':'Ground-state configuration',
 '新增电子进入':'New electron enters','第一电离能':'First ionization energy','原子半径':'Atomic radius','电负性':'Electronegativity',
 '价电子构型':'Valence configuration','核稳定性与同位素':'Nuclear stability & isotopes',
 '有稳定同位素':'Has stable isotopes','无稳定同位素':'No stable isotopes','电子排布 ↗':'Electron configuration ↗','核稳定性 ↗':'Nuclear stability ↗'
};
const textOriginals=new WeakMap();
const attrOriginals=new WeakMap();
const dataOriginals=new WeakMap();
let EN_DICT={},dictPromise=null,langBusy=false;
function normalizeI18n(value){return String(value??'').replace(/\s+/g,' ').trim()}
function lookupTranslation(key){
 const exact=UI[key]||EN_DICT[key];if(exact)return exact;
 const ref=key.match(/^参考来源\s*([0-9]+)$/);if(ref)return `Reference ${ref[1]}`;
 if(key.startsWith('快照 '))return `Snapshot ${key.slice(3)}`;
 let m=key.match(/^已选择 (.+?)，参考尺寸 (.+?)，约为人体身高的 (.+?) 倍。/);
 if(m)return `Selected ${lookupTranslation(m[1])||m[1]}, reference size ${m[2]}, about ${m[3]}× human height.`;
 m=key.match(/^(\d+) 个可比较对象 \/ (\d+) 条知识$/);if(m)return `${m[1]} comparable objects / ${m[2]} knowledge entries`;
 m=key.match(/^(\d+) 个时间事件 · 开放内容驱动$/);if(m)return `${m[1]} time events · open content`;
 m=key.match(/^(\d+) 个温度节点 · 开放内容驱动$/);if(m)return `${m[1]} temperature points · open content`;
 m=key.match(/^动态预览 ([0-9]{2}:[0-9]{2})$/);if(m)return `Motion preview ${m[1]}`;
 m=key.match(/^(.+?) · 我们的起点$/);if(m)return `${lookupTranslation(m[1])||m[1]} · Our starting point`;
 m=key.match(/^正在展示：(.+?) · 结构示意$/);if(m)return `Showing: ${lookupTranslation(m[1])||m[1]} · structural diagram`;
 m=key.match(/^(\d+) 条年代未定或超出范围的记录保留在知识库，暂不绘入历史轴。$/);if(m)return `${m[1]} undated or out-of-range records remain in the library and are not drawn on the timeline.`;
 m=key.match(/^(\d+) 条参考温度未定的记录保留在知识库。$/);if(m)return `${m[1]} records with undetermined reference temperatures remain in the library.`;
 m=key.match(/^该参考长度约为 (.+?) 身高的 (.+?) 倍$/);if(m)return `This reference length is about ${m[2]}× a ${m[1]} height`;
 m=key.match(/^(空间|时间|温度|元素|质量) \/ (.+)$/);if(m)return `${lookupTranslation(m[1])||m[1]} / ${lookupTranslation(m[2])||m[2]}`;
 m=key.match(/^(.+?) \/ (SPATIAL SCALE|UNQUANTIFIED)$/);if(m)return `${lookupTranslation(m[1])||m[1]} / ${m[2]}`;
 m=key.match(/^参考时代图景 · (.+)$/);if(m)return `Reference epoch · ${lookupTranslation(m[1])||m[1]}`;
 return null;
}
function ensureDictionary(){
 if(dictPromise)return dictPromise;
 dictPromise=fetch('/engine/ui/i18n/en.json',{cache:'force-cache'}).then(response=>response.ok?response.json():{}).then(data=>{
  EN_DICT=data&&typeof data==='object'?data:{};
  return EN_DICT;
 }).catch(()=>{EN_DICT={};return EN_DICT});
 return dictPromise;
}

function updateLangButton(button){
 if(!button)return;
 button.setAttribute('aria-label',lang===EN?'ZH / EN Switch language':'中 / EN 切换语言');
 const zhLabel=button.querySelector('[data-lang-label="zh"]');
 if(zhLabel)zhLabel.textContent=lang===EN?'ZH':'中';
 button.title=lang===EN?'Switch to Chinese':'Switch to English';
}
function updateThemeButton(button){
 if(!button)return;
 button.textContent=theme==='light'?'☀':'☾';
 button.setAttribute('aria-label',theme==='light'?'Switch to dark theme':'切换为浅色主题');
 button.title=theme==='light'?'Dark theme':'Light theme';
}
function setHeaderLabels(){
 for(const link of document.querySelectorAll('.atlas-header nav a,.topbar nav a')){
  const href=link.getAttribute('href');
  let pair=Object.entries(NAV_LABELS).find(([key])=>href===key||href?.endsWith(key))?.[1];
  if(!pair){
   const textNode=[...link.childNodes].find(node=>node.nodeType===Node.TEXT_NODE&&node.textContent.trim());
   const zh=textNode?.nodeValue.trim();
   pair=Object.values(NAV_LABELS).find(([label])=>label===zh);
  }
  if(!pair)continue;
  const textNode=[...link.childNodes].find(node=>node.nodeType===Node.TEXT_NODE&&node.textContent.trim());
  if(textNode){
   if(!textOriginals.has(textNode))textOriginals.set(textNode,textNode.nodeValue);
   const original=textOriginals.get(textNode);
   const spacing=original.match(/^\s*/)?.[0]||'';
   const trail=original.match(/\s*$/)?.[0]||'';
   textNode.nodeValue=spacing+(lang===EN?pair[1]:pair[0])+trail;
  }
  const sub=link.querySelector('span');
  if(sub&&!sub.querySelector('*')){
   if(!sub.dataset.atlasLabel)sub.dataset.atlasLabel=sub.textContent;
   sub.style.display=lang===EN?'none':'';
  }
 }
 const extra=document.querySelector('.header-extra');
 if(extra){
  if(!textOriginals.has(extra))textOriginals.set(extra,extra.textContent);
  const original=textOriginals.get(extra);
  extra.textContent=lang===EN?'Contribute ↗':original;
 }
}function translateText(root){
 if(!root)return;
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){
  if(!node.nodeValue.trim())return NodeFilter.FILTER_REJECT;
  if(node.parentElement?.closest('script,style,pre,code,.no-i18n'))return NodeFilter.FILTER_REJECT;
  return NodeFilter.FILTER_ACCEPT;
 }});
 const nodes=[];
 while(walker.nextNode())nodes.push(walker.currentNode);
 for(const node of nodes){
  if(!textOriginals.has(node))textOriginals.set(node,node.nodeValue);
  const original=textOriginals.get(node);
  const key=normalizeI18n(original);
  const translated=lookupTranslation(key);
  if(!translated)continue;
  const lead=original.match(/^\s*/)?.[0]||'';
  const tail=original.match(/\s*$/)?.[0]||'';
  const next=lang===EN?(lead+translated+tail):original;
  if(node.nodeValue!==next)node.nodeValue=next;
 }
}
function translateAttributes(root){
 for(const el of root.querySelectorAll('[aria-label],[placeholder],[title],[alt]')){
  for(const attr of ['aria-label','placeholder','title','alt']){
   if(!el.hasAttribute(attr))continue;
   if(!attrOriginals.has(el))attrOriginals.set(el,{});
   const cache=attrOriginals.get(el);
   if(cache[attr]===undefined)cache[attr]=el.getAttribute(attr);
   const original=cache[attr];
   const translated=lookupTranslation(original)||original;
   el.setAttribute(attr,lang===EN?translated:original);
  }
 }
 for(const el of root.querySelectorAll('[data-en-aria]')){
  if(!attrOriginals.has(el))attrOriginals.set(el,{});
  const cache=attrOriginals.get(el);
  if(cache.aria===undefined)cache.aria=el.getAttribute('aria-label')||'';
  el.setAttribute('aria-label',lang===EN?el.dataset.enAria:cache.aria);
 }
}
function translateDataEnglish(root=document){
 const scope=root.nodeType===1?root:document;
 const list=[];
 if(scope.matches?.('[data-en],[data-en-title],[data-en-html]'))list.push(scope);
 scope.querySelectorAll?.('[data-en],[data-en-title],[data-en-html]').forEach(el=>list.push(el));
 for(const el of list){
  if(el.hasAttribute('data-en')){
   if(!dataOriginals.has(el))dataOriginals.set(el,el.textContent);
   el.textContent=lang===EN?el.getAttribute('data-en'):dataOriginals.get(el);
  }
  if(el.hasAttribute('data-en-title')){
   if(!dataOriginals.has(el))dataOriginals.set(el,el.textContent);
   el.textContent=lang===EN?el.getAttribute('data-en-title'):dataOriginals.get(el);
  }
  if(el.hasAttribute('data-en-html')){
   if(!dataOriginals.has(el))dataOriginals.set(el,el.innerHTML);
   el.innerHTML=lang===EN?el.getAttribute('data-en-html'):dataOriginals.get(el);
  }
 }
}
async function applyLanguage(){
 if(lang===EN&&!Object.keys(EN_DICT).length)await ensureDictionary();
 html.lang=lang===EN?'en':'zh-CN';
 html.dataset.lang=lang===EN?'en':'zh-CN';
 setHeaderLabels();
 translateText(document.querySelector('body'));
 translateAttributes(document);
 translateDataEnglish();
 const titleNode=document.querySelector('h1[data-en-title]');
 if(lang===EN){
  const enTitle=titleNode?.dataset.enTitle||document.querySelector('h1[data-en-html]')?.getAttribute('data-en-html')?.replace(/<br\s*\/?>/gi,' ').replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim()||EN_DICT[normalizeI18n(ORIGINAL_TITLE)];
  if(enTitle){
   const suffix=ORIGINAL_TITLE.includes(' · ')?ORIGINAL_TITLE.split(' · ').slice(1).join(' · ').replace('尺度 MAGNITUDE','MAGNITUDE'):'';
   document.title=enTitle+(suffix&&!enTitle.includes(suffix)?' · '+suffix:'');
  }else{
   document.title=lookupTranslation(normalizeI18n(ORIGINAL_TITLE))||ORIGINAL_TITLE;
  }
 }else{
  document.title=ORIGINAL_TITLE;
 }
 updateLangButton(document.querySelector('.lang-toggle'));
 for(const el of document.querySelectorAll('.brand strong')){
  if(!el.dataset.atlasZh)el.dataset.atlasZh=el.textContent;
  el.textContent=lang===EN?'MAGNITUDE':el.dataset.atlasZh;
 }
 for(const el of document.querySelectorAll('.brand-en')){
  el.style.display=lang===EN?'none':'';
 }
 document.dispatchEvent(new CustomEvent('atlas-language',{detail:{lang}}));
 if(lang===EN)translateSoon();
}
let langObserver=null;
function translateSoon(){
 if(lang!==EN)return;
 if(langObserver)return;
 langObserver=new MutationObserver(mutations=>{
  if(lang!==EN)return;
  for(const mutation of mutations){
   if(mutation.type==='characterData'){
    const value=mutation.target.nodeValue;
    if(value&&/[\u3400-\u9fff]/.test(value)&&mutation.target.parentElement){textOriginals.delete(mutation.target);translateText(mutation.target.parentElement);}
    continue;
   }
   for(const node of mutation.addedNodes){
    if(node.nodeType===1){translateText(node);translateAttributes(node);translateDataEnglish(node);}
    else if(node.nodeType===3&&node.parentElement)translateText(node.parentElement);
   }
  }
 });
 langObserver.observe(document.body,{childList:true,subtree:true,characterData:true});
}
function applyTheme(){
 html.dataset.theme=theme;
 updateThemeButton(document.querySelector('.theme-toggle'));
 document.dispatchEvent(new CustomEvent('atlas-theme',{detail:{theme}}));
}

function addChromeTools(){
 let header=document.querySelector('.atlas-header,.topbar');
 if(!header)return;
 if(!header.querySelector('.chrome-tools')){
  const tools=document.createElement('div');
  tools.className='chrome-tools';
  tools.innerHTML='<button class="lang-toggle" type="button" aria-label="中 / EN 切换语言"><span data-lang-label="zh">中</span><i>/</i><span data-lang-label="en">EN</span></button><button class="theme-toggle" type="button" aria-label="切换为浅色主题">☾</button>';
  header.append(tools);
  tools.querySelector('.lang-toggle').addEventListener('click',()=>{
   lang=lang===EN?ZH:EN;
   persist(LANG_KEY,lang);
   applyLanguage();
  });
  tools.querySelector('.theme-toggle').addEventListener('click',()=>{
   theme=theme==='light'?'dark':'light';
   persist(THEME_KEY,theme);
   applyTheme();
  });
 }
 const nav=header.querySelector('nav');
 const architecture=header.querySelector('.architecture-link');
 const hasLibrary=nav&&[...nav.querySelectorAll('a')].some(a=>a.getAttribute('href')?.includes('/library'));
 if(architecture&&hasLibrary)architecture.remove();
}

addChromeTools();
setHeaderLabels();
applyTheme();
await applyLanguage();
updateLangButton(document.querySelector('.lang-toggle'));

// 兼容旧的 brand 名称替换逻辑。
let name='尺度 MAGNITUDE';
try{const response=await fetch('/project.json');if(response.ok)name=(await response.json()).name;}catch{}
for(const el of document.querySelectorAll('.brand-en'))el.textContent='MAGNITUDE';
