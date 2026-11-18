import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
const root=path.resolve(import.meta.dirname,'..');
const date=new Date().toISOString().slice(0,10);

const categories=[
 {name:'开放许可或开放教材',usage:'保留来源许可；仅引用事实并自写转述；其中 OpenStax 为 CC BY 4.0',hosts:[/^openstax\.org$/,/^open\.edu$/,/^en\.khanacademy\.org$/,/^ourworldindata\.org$/,/^opentextbooks\.clemson\.edu$/,/^uq\.pressbooks\.pub$/,/\.pressbooks\.pub$/]},
 {name:'LibreTexts 等开放教材平台',usage:'平台内页面许可不一（常见 CC BY-NC-SA）；仅引用事实，不复制原文',hosts:[/^chem\.libretexts\.org$/,/^bio\.libretexts\.org$/,/^geo\.libretexts\.org$/]},
 {name:'美国政府公开页面',usage:'联邦政府作品多属公共领域，但页面可能含第三方材料；仅引用事实，不复制原文',hosts:[/\.gov$/]},
 {name:'国际标准与政府间组织',usage:'标准与报告文本受版权保护；仅引用定义、数值与事实，不复制条款',hosts:[/^bipm\.org$/,/^www\.bipm\.org$/,/^iso\.org$/,/^www\.iso\.org$/,/^astm\.org$/,/^www\.astm\.org$/,/^iaea\.org$/,/^www\.iaea\.org$/,/^who\.int$/,/^www\.who\.int$/,/^wmo\.int$/,/^fao\.org$/,/^www\.fao\.org$/,/^iec\.ch$/,/^codexalimentarius\.org$/,/^un\.org$/,/^europa\.eu$/,/^esa\.int$/]},
 {name:'学术论文与学术出版社',usage:'论文与出版物版权归作者/出版社；仅引用数值、事实与结论，不复制摘要或正文',hosts:[/^arxiv\.org$/,/^www\.arxiv\.org$/,/^doi\.org$/,/^dx\.doi\.org$/,/nature\.com$/,/^science\.org$/,/^www\.science\.org$/,/^pnas\.org$/,/^www\.pnas\.org$/,/springer\.com$/,/^link\.springer\.com$/,/^sciencedirect\.com$/,/^www\.sciencedirect\.com$/,/^tandfonline\.com$/,/^www\.tandfonline\.com$/,/^wiley\.com$/,/^onlinelibrary\.wiley\.com$/,/^cambridge\.org$/,/^www\.cambridge\.org$/,/^academic\.oup\.com$/,/^oup\.com$/,/^journals\.aps\.org$/,/^www\.aps\.org$/,/^iopscience\.iop\.org$/,/^aip\.org$/,/^pubs\.aip\.org$/,/^pubs\.acs\.org$/,/^pubs\.rsc\.org$/,/^mdpi\.com$/,/^www\.mdpi\.com$/,/^plos\.org$/,/^journals\.plos\.org$/,/^frontiersin\.org$/,/^www\.frontiersin\.org$/,/^copernicus\.org$/,/^aanda\.org$/,/^www\.aanda\.org$/,/^annualreviews\.org$/,/^jstor\.org$/,/^www\.jstor\.org$/,/^ieee\.org$/,/^www\.ieee\.org$/,/^dl\.acm\.org$/,/^cell\.com$/,/^www\.cell\.com$/,/^elifesciences\.org$/,/^biorxiv\.org$/,/^www\.biorxiv\.org$/,/^researchgate\.net$/,/^www\.researchgate\.net$/,/^semanticscholar\.org$/,/^www\.semanticscholar\.org$/]},
 {name:'订阅参考与新闻媒体',usage:'订阅/商业或新闻内容；仅引用事实与数值，自行改写，不复制原文',hosts:[/britannica\.com$/,/nationalgeographic\.com$/,/smithsonianmag\.com$/,/scientificamerican\.com$/,/quantamagazine\.org$/,/astronomy\.com$/,/skyandtelescope\.org$/,/physicsworld\.com$/,/space\.com$/,/livescience\.com$/,/howstuffworks\.com$/,/encyclopedia\.com$/,/britishmuseum\.org$/,/nytimes\.com$/,/washingtonpost\.com$/,/reuters\.com$/,/apnews\.com$/,/cnn\.com$/,/forbes\.com$/,/bloomberg\.com$/,/economist\.com$/,/wired\.com$/,/theverge\.com$/,/arstechnica\.com$/,/popsci\.com$/,/discovermagazine\.com$/,/sciencealert\.com$/,/iflscience\.com$/,/newscientist\.com$/,/sciencefocus\.com$/,/bbc\.com$/,/bbc\.co\.uk$/,/theguardian\.com$/,/ng\.nationalgeographic\.com$/,/nationalgeographic\.org$/,/smithsonian\.com$/,/si\.edu$/]},
 {name:'品牌与产品页面',usage:'产品规格与命名事实；商标与页面内容归各权利人，不复制图像或文案',hosts:[/^ikea\.com$/,/^www\.ikea\.com$/,/apple\.com$/,/samsung\.com$/,/lg\.com$/,/haier/,/daikin/,/mitsubishi/,/toyota/,/tesla\.com$/,/bmw\.com$/,/mercedes/,/honda/,/yamaha/,/nike\.com$/,/asics\.com$/,/uniqlo\.com$/,/boeing\.com$/,/airbus\.com$/,/lockheedmartin\.com$/,/northropgrumman\.com$/,/spacex\.com$/,/blueorigin\.com$/,/starlink\.com$/,/rolls-royce\.com$/,/ge\.com$/,/siemens\.com$/,/philips\.com$/,/panasonic\.com$/,/sony\.com$/,/dell\.com$/,/hp\.com$/,/lenovo\.com$/,/intel\.com$/,/amd\.com$/,/nvidia\.com$/,/qualcomm\.com$/]},
 {name:'大学、课程与教育页面',usage:'课程讲义、大学扩展页与教学资料版权归学校或作者；仅引用事实，不复制原文',hosts:[/\.edu$/,/\.ac\.uk$/,/\.ac\.jp$/,/\.edu\.au$/,/\.edu\.ca$/,/\.uni-/,/^www\.hyperphysics/,/^hyperphysics/]},
 {name:'博物馆与文化机构',usage:'藏品说明与展览页面；仅引用事实，不复制图像或长段说明',hosts:[/^metmuseum\.org$/,/^www\.metmuseum\.org$/,/^louvre\.fr$/,/^www\.louvre\.fr$/,/^clevelandart\.org$/,/^www\.clevelandart\.org$/,/^getty\.edu$/,/^www\.getty\.edu$/,/^rijksmuseum\.nl$/,/^www\.rijksmuseum\.nl$/,/^nationalgallery\.org\.uk$/]},
];
const defaultCategory={name:'其他公开网页（未确认开放许可）',usage:'未确认开放许可；仅引用事实与数值，自行撰写，不复制原文；如权利人异议将移除'};

function categoryFor(host){
 for(const category of categories)if(category.hosts.some(re=>re.test(host)))return category;
 return defaultCategory;
}

const config=JSON.parse(await fs.readFile(path.join(root,'config/project.json'),'utf8'));
const entries=[];
for(const type of ['space','time','temperature','elements','mass']){
 const dir=path.join(root,'content/entries',type);
 if(!(await fs.stat(dir).catch(()=>null)))continue;
 for(const file of (await fs.readdir(dir)).filter(f=>f.endsWith('.md'))){
  const {data}=matter(await fs.readFile(path.join(dir,file),'utf8'));
  entries.push(data);
 }
}
const hosts=new Map();
for(const entry of entries){
 for(const source of entry.sources||[]){
  const host=new URL(source.url).hostname.replace(/^www\./,'');
  if(!hosts.has(host))hosts.set(host,{count:0,publishers:new Map(),urls:[],categories:new Map()});
  const item=hosts.get(host);item.count++;
  item.publishers.set(source.publisher,(item.publishers.get(source.publisher)||0)+1);
  if(!item.urls.includes(source.url))item.urls.push(source.url);
  const category=categoryFor(host);item.categories.set(category.name,(item.categories.get(category.name)||0)+1);
 }
}
const sorted=[...hosts].sort((a,b)=>b[1].count-a[1].count);
const totalSources=[...hosts.values()].reduce((sum,item)=>sum+item.count,0);

const csv=['entry_id,source_title,url,publisher,accessed,host,category,usage'];
for(const entry of entries)for(const source of entry.sources||[]){
 const host=new URL(source.url).hostname.replace(/^www\./,''),category=categoryFor(host);
 csv.push([entry.id,source.title,source.url,source.publisher,source.accessed,host,category.name,category.usage].map(value=>`"${String(value).replaceAll('"','""')}"`).join(','));
}
await fs.writeFile(path.join(root,'docs/third-party-sources.csv'),csv.join('\n'));

const lines=[];
lines.push('# 第三方来源说明（THIRD PARTY NOTICES）','');
lines.push(`生成日期：${date}。覆盖内容版本 ${config.contentVersion} 的 ${entries.length} 条条目、${totalSources} 条来源记录、${hosts.size} 个来源主机。完整逐条索引见 [third-party-sources.csv](third-party-sources.csv)。`,'');
lines.push('## 处理原则','');
lines.push('- 本站只引用第三方材料中的**数值、日期、定义与可核实事实**；正文由项目贡献者自行撰写，不整段复制受版权保护的原文。');
lines.push('- 引用不等于获得再分发许可。来源材料的著作权仍归各自权利人，不因出现在本站而改变。');
lines.push('- Britannica 等订阅/商业内容只保留数值与事实，不复制表述；论文只引用结论与数值，不复制摘要或正文。');
lines.push('- 授权不明确或无法确认的来源，统一按“仅事实引用、不复制表述”处理，并在下表标注；收到权利人异议时将移除对应表述或来源。');
lines.push('- 开放许可来源仍按其许可证使用；即使来源开放，正文也保持自写转述并记录出处。','');
lines.push('## 权利状态','');
lines.push('| 范围 | 状态 | 说明 |','|---|---|---|');
lines.push(`| 旧站文本 | 已退出发布路径 | 许可未确认，不随本站发布 |`);
lines.push(`| 当前正文与元数据 | rewritten × ${entries.length} | 原创撰写，以 CC BY 4.0 提供 |`);
lines.push(`| 第三方来源 | 逐条引用事实 | 保留来源许可，不再许可 |`,'');
lines.push('## 来源使用类别','');
lines.push('| 类别 | 使用方式 | 法律风险判断 |','|---|---|---|');
lines.push('| 开放许可或开放教材 | 保留来源许可；仅引用事实并自写转述 | 低；需保留署名/许可链接（OpenStax 为 CC BY 4.0） |');
lines.push('| LibreTexts 等开放教材平台 | 页面许可不一；仅引用事实 | 中低；未复制原文，不宣称统一许可 |');
lines.push('| 美国政府公开页面 | 仅引用事实 | 低至中；联邦作品多属公共领域，但页面可能含第三方材料 |');
lines.push('| 国际标准与政府间组织 | 仅引用定义、数值与事实 | 中；标准文本受版权保护，未复制条款 |');
lines.push('| 学术论文与学术出版社 | 仅引用数值、事实与结论 | 中；未复制摘要/正文，事实不受版权保护 |');
lines.push('| 订阅参考与新闻媒体 | 仅引用事实与数值，自行改写 | 中；未复制表述，不宣称获得再分发许可 |');
lines.push('| 品牌与产品页面 | 产品规格与命名事实 | 低至中；商标归权利人，未使用其图像 |');
lines.push('| 大学、课程与教育页面 | 仅引用事实 | 中低；课程材料版权归学校/作者 |');
lines.push('| 博物馆与文化机构 | 仅引用事实 | 中；未使用藏品图像或长段说明 |');
lines.push('| 其他公开网页（未确认开放许可） | 仅引用事实与数值 | 中；已标注未确认，收到异议即处理 |','');
lines.push('## 特殊来源与处理','');
lines.push('| 主机 | 影响条目数 | 状态 | 处理与影响评估 |','|---|---|---|---|');
lines.push('| astronomy.nmsu.edu | 11 | 证书异常 | 已全部替换为 OpenStax Astronomy 2e《The Spectral Sequence》（CC BY 4.0），数值与谱型说明保持 |');
lines.push('| quartzpage.de | 1 | 证书异常 | 已替换为 Mindat Quartz 矿物条目，晶胞参数与空间群以 Handbook of Mineralogy 交叉核对 |');
lines.push('| scholarpedia.org | 1 | 证书异常 | 已替换为 Nobel Foundation 1972 年 Cooper 讲座；BCS 能隙 1.76 kBTc 作为弱耦合近似常用值保留，未复制原文 |');
lines.push('| ext.msstate.edu | 1 | 证书过期 | 黄油熔化区间暂未找到同等级可公开访问的替代来源，保留并标注；该条同时引用 Britannica 核对组成与用途。影响：1 条，链接可用性受限，数值不受影响 |','');
lines.push('## 逐字复制检查','');
lines.push(`对 ${entries.length} 条正文执行长引语（30 字符以上）与英文段落扫描，命中 4 条：`);
lines.push('- 家具与袜子条目中的尺寸引语为产品规格事实；');
lines.push('- 钢琴条目中的引号用于中文“常见误解”叙述，不是来源原文；');
lines.push('- 电话条目保留贝尔 1876 年的著名短句 “Mr. Watson, come here, I want to see you”，属于公有领域历史引语。');
lines.push('未发现从 Britannica、论文或新闻页面整段照搬的正文；如后续发现近似逐字段落，将改写或删除。','');
lines.push('## 图像、纹理与软件','');
lines.push('| 材料 | 来源 | 许可 | 使用方式 |','|---|---|---|---|');
lines.push('| 行星纹理（地球、月球、太阳、木星、土星及环） | Solar System Scope / INOVE，<https://www.solarsystemscope.com/textures/> | CC BY 4.0 | 用于自建材质与光照渲染；已注明作者与修改，见 [CREDITS](../content/assets/CREDITS.md) |');
lines.push('| Three.js | <https://threejs.org/> | MIT | 作为 3D 运行库随产物分发，产物保留许可文本 |');
lines.push('| OG 分享图（home/space/time/temperature/elements） | 本项目自行绘制 | 随本站内容 CC BY 4.0 | 不使用来源站图片；按站点生成 1200×630 PNG |');
lines.push('| 字体 | 系统字体（Microsoft YaHei、Georgia 等） | 不随站点分发字体文件 | 仅在本机生成分享图时使用 |','');
lines.push('## 按主机汇总','');
lines.push('“引用次数”为该主机在全部条目 `sources` 中出现的次数；同一 URL 可能被多条条目引用。示例 URL 只列前 3 个，完整清单见 CSV。','');
lines.push('| 主机 | 引用次数 | 发布者 | 类别 | 示例 URL |','|---|---:|---|---|---|');
for(const [host,item]of sorted){
 const category=categoryFor(host);
 const publishers=[...item.publishers.keys()].slice(0,3).join('；');
 const urls=item.urls.slice(0,3).map(url=>`<${url}>`).join('<br>');
 lines.push(`| ${host} | ${item.count} | ${publishers.replaceAll('|','\\|')} | ${category.name} | ${urls} |`);
}
lines.push('','## 移除与更正','');
lines.push('如权利人认为某段表述或某个来源使用不当，请通过 https://chidu.org/contribute/ 说明具体条目与来源，我们将在核实后改写或移除。此说明不构成对第三方内容的再许可。');
await fs.writeFile(path.join(root,'docs/THIRD_PARTY_NOTICES.md'),lines.join('\n'));

const byCategory=new Map();
for(const [host,item] of sorted){const category=categoryFor(host);byCategory.set(category.name,(byCategory.get(category.name)||0)+item.count);}
console.log({entries:entries.length,sources:totalSources,hosts:hosts.size});
for(const [name,count]of [...byCategory].sort((a,b)=>b[1]-a[1]))console.log(count,name);
