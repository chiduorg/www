---
id: elements.na
title: 钠：第 11 个质子把电子推进 3s，电离能一步跌掉 16.426 eV
titleEn: Sodium
summary: 氖的 2s2p 已满，第 11 个电子只能进 3s；电离能从 21.565 eV 跌到 5.139 eV，半径从 38 pm 涨到 190 pm。
dimension: element
category: 碱金属
displayValue: 'Z = 11 · [Ne]3s¹ 碱金属'
quantity:
  value: 11
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Na
  nameEn: Sodium
  period: 3
  group: 1
  block: s
  configuration: 1s2 2s2 2p6 3s1
  valence: 3s1
  level: A
related: [elements.ne, elements.mg, time.pop-iii-supernovae, elements.explain-energy-levels]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 钠位于第三级台阶的起点，3s 上只有一个电子。
  note: 阶梯从氖的闭壳跨到 3s，高度表示填充次序，不表示精确能级。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: "PubChem Element Summary: Sodium"
    url: https://pubchem.ncbi.nlm.nih.gov/element/11
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: "Periodic Table: Sodium"
    url: https://www.rsc.org/periodic-table/element/11/sodium
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第三周期, s 区, 碱金属]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 11 个质子把电子放进了哪里

氖的价层是 2s²2p⁶，第二能层已经装满。第十一个质子进来后，新增电子没有空位可留，只能进入主量子数更大的 3s 轨道，钠的价层因此写成 3s¹[1]。这一步跨了壳层：3s 电子平均离核的距离比 2p 大得多，内层十个电子几乎把它与核隔开，新增质子带来的有效核电荷增量被屏蔽掉大半。结果是钠的价电子被束缚得很松，第一电离能只有 5.139 eV[3]，化学行为从氖的“不愿动”变成“急着交出”。第三周期从这里开始，3s、3p 依次填充；3d 要等到第四周期才被使用，4s 与 3d 的交错要到钾才第一次出现。

## 相对 Z−1：六项差值

- 第一电离能：5.139 eV，氖为 21.565 eV，减小 16.426 eV。[3]
- 原子半径：190 pm（计算值），氖为 38 pm（计算值），增大 152 pm。[1]
- 电负性：0.93（Pauling），氖无公认 Pauling 电负性，无法给出差值。
- 价电子构型：由氖的 2s²2p⁶ 变为 3s¹，新增电子进入新壳层。
- N/Z：质量数 23，中子数 23−11=12；氖为 20−10=10，中子数增加 2。钠只有一种稳定同位素 ²³Na，质量数 23 即取它。
- 核来源：两者同为“碳燃烧与氖燃烧”，这一项没有差异。

六项里，电离能的塌落是主因：它直接说明 3s 电子离核远、被屏蔽得彻底；半径的跳增是同一件事的空间表现，属于伴随结果。电负性从无值到 0.93 只说明“开始有价电子可谈”，不该读成钠比氖更会拉电子。中子数加 2 与核来源不变放在一起看，可以确认这一格的变化几乎全在电子壳层，而不在原子核。

## 为什么这一格重要

一个 3s 电子决定了钠的全部化学。它容易被移走，钠因此以 +1 价出现，形成与氖等电子的 Na⁺；闭壳离子不再有松散的价电子，半径和反应性都回到惰性气体一侧。金属钠中，3s 电子不再属于单个原子，而是在整块金属里离域，结合很弱，所以钠质地软、容易变形。更关键的是，Na⁺ 与 Na 之间只差一个电子：这个电子可以交给别的原子，也可以在水溶液里随离子迁移，于是钠的化合物大多表现为典型的离子型。[2] 把钠和氖并排看，闭壳不是终点，而是一条分界线：线内是满壳，线外是随时可以失去的电子。也正因如此，钠的化合物几乎都以 Na⁺ 的形式出现，而不是靠共用电子成键。

## 它从哪里来

钠的核来源写作“碳燃烧与氖燃烧”，这两个阶段都发生在大质量恒星的核心。碳燃烧把碳聚变成氖、钠、镁一类核素，氖燃烧继续往上推；恒星最后以超新星方式抛掉外层，把这些产物注入星际介质，这正是时间轴第一代恒星与超新星节点描述的过程。钠的宇宙丰度因此远低于氖和镁：它处在燃烧链的支路上，产量受温度和燃烧持续时间限制，而不像氧那样有一条宽阔的主路径。这也解释了为什么钠虽然在地壳中并不罕见，却不像铁、硅那样构成大尺度的库存。

## 怎么继续走

往上是氖：它把 2s2p 填满，是钠“跌下来”的参照；往下是镁：3s 再加一个电子，第一电离能回升到 7.646 eV，半径收缩到 145 pm。想弄清 3s 为什么比 2p 松、下一周期 4s 又为什么抢在 3d 前面，去看能级与填充次序解释页。时间轴上的超新星节点则补上另一半：这些核素怎样被抛回星际介质，又怎样进入下一代恒星。
