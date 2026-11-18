---
id: elements.li
title: 锂：第 3 个质子把电子赶出 1s，第二周期从 2s 开始
titleEn: Lithium
summary: 1s 已被氦填满，第三个电子进入 2s；第一电离能从 24.587 eV 跌到 5.392 eV，半径从 31 pm 跳到 167 pm，闭壳后的重新开始定型。
dimension: element
category: 碱金属
displayValue: 'Z = 3 · [He]2s¹ 碱金属'
quantity:
  value: 3
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Li
  nameEn: Lithium
  period: 2
  group: 1
  block: s
  configuration: '[He] 2s1'
  valence: 2s1
  level: A
related: [elements.he, elements.c, time.big-bang, time.nucleosynthesis]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 第二级台阶的第一格，2s 上出现一个电子。
  note: 阶梯只表示壳层容量与填充次序，不表示电子云的真实尺寸。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Lithium'
    url: https://pubchem.ncbi.nlm.nih.gov/element/3
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Lithium'
    url: https://www.rsc.org/periodic-table/element/3/lithium
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第二周期, s 区, 锂]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 3 个质子把电子放进了哪里

锂的原子核有三个质子，但 1s 已经被氦的两个电子占满；第三个电子无法挤进同一个亚层，只能进入 2s，构型写作 [He] 2s1。[1] 2s 的主量子数更大，电子平均离核更远，而且要先穿过 1s 两个电子形成的屏蔽；有效核电荷虽然因第三个质子而增加，但增量被内层电子大幅抵消，所以 2s1 这个价电子反而比氦的 1s 电子松得多。第一电离能从氦的 24.587 eV 跌到 5.392 eV，跌幅 19.195 eV，半径从 31 pm 跳到 167 pm。[3] 这不是规则失效，而是闭壳之后重新开层的必然结果：1s 满员，2s 成为新的前线。锂因此既是第二周期的第一个元素，也是元素轴上第一次出现闭壳—重启节奏的地方。

## 相对 Z−1：六项差值

- 第一电离能：锂为 5.392 eV，氦为 24.587 eV，锂比氦低 19.195 eV。[3]
- 原子半径：锂为 167 pm（计算值口径），氦为 31 pm，锂比氦大 136 pm。[1]
- 电负性：锂为 0.98（Pauling 标度），氦无公认 Pauling 电负性；氦一侧没有可相减的数值，无法给出差值。
- 价电子构型：锂为 2s1，氦为 1s2；新增电子换了亚层，从第一能层的 1s 进入第二能层的 2s。
- N/Z：锂的质量数 A=7，按 N=A−Z 得 N=4，N/Z=1.33；氦的 N=2、N/Z=1.00，锂比氦多 2 个中子。
- 核来源：锂标注为原初核合成（少量）与宇宙线散裂，氦标注为原初核合成与恒星氢燃烧；锂多出宇宙线散裂这条路径。

这六项里，主因是 1s 满员迫使电子进入 2s：主量子数增大与内层屏蔽同时发生，才有电离能近 20 eV 的下跌和 136 pm 的半径膨胀。电负性从氦的空缺变成 0.98，也是同一结构变化的伴随结果——2s1 容易被夺走，锂因此表现得像典型金属。中子数从 2 增到 4 与核来源的差异属于核层面；锂的来源里有宇宙线散裂，这解释了它为什么不能像氦那样只靠恒星氢燃烧来记账。

## 为什么这一格重要

锂的价层只有一个 2s 电子，第一电离能 5.392 eV，电负性 0.98，这两个数指向同一件事：它倾向失去这个电子，形成 +1 离子，而不是与别的原子共用电子。[2] 2s 电子离核远、被 1s 屏蔽，是这种强失电子倾向的结构原因；也正因如此，锂的化学主线是离子型化合物，而不是像碳那样搭共价网络。锂有两个稳定同位素 ⁶Li 与 ⁷Li；同位素质量差会影响振动与扩散行为，但不会改变 2s1 这个价层判断。[2] 把锂放在元素轴上，它的意义是把闭壳后的第一颗电子明确地交给了一个新的主量子数。

## 它从哪里来

锂的核来源标注为原初核合成（少量）与宇宙线散裂，分别对应时间轴的 time.big-bang 与 time.nucleosynthesis 两条线索。[1] 原初核合成能留下的锂很少，因为中间质量数的核极不稳定，反应链很难顺畅地越过它们；恒星内部的高温又会把锂打碎，所以普通恒星氢燃烧不是锂的主要产地。宇宙线散裂提供另一条路径：高能粒子撞碎较重的核，碎片里包含锂。于是锂的丰度低而来源分散，这正是它不能按恒星核合成的主线来理解的原因。[2]

## 怎么继续走

往回一步是氦，往前一格是铍；铍与硼不在本批 A 级条目里，再往前才是碳。锂这一格最适合用来观察 1s 满员后 2s 如何接棒；想看电子为什么必须换层、2s 与 2p 的次序如何排，去电子排布解释页（/entry/elements/explain-configuration/）。时间轴上，time.big-bang 解释它那一点原初库存，time.nucleosynthesis 解释恒星与宇宙线如何改写这笔库存。
