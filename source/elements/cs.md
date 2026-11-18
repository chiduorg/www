---
id: elements.cs
title: 铯：第 55 个质子把电子推到 6s，也把周期表带进长周期
titleEn: 'Caesium: the 55th proton sends an electron to 6s'
dimension: element
category: 碱金属
summary: '氙的 5p 已满，铯的新电子只能进入 6s；电离能从 12.130 eV 跌到 3.894 eV，半径从 108 pm 增到 298 pm，价电子被推到最外层。'
quantity:
  value: 55
  unit: Z
  measure: 原子序数（质子数）
  approximate: false
  measureLabel: 原子序数 Z
displayValue: 'Z = 55 · [Xe]6s¹ 碱金属'
element:
  symbol: Cs
  nameEn: Caesium
  period: 6
  group: 1
  block: s
  configuration: '[Xe] 6s1'
  valence: '6s1'
  level: A
  predicted: false
related:
  - elements.xe
  - elements.ba
  - time.heavy-element-enrichment
  - elements.explain-shielding
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Cesium'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/55'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Caesium'
    url: 'https://www.rsc.org/periodic-table/element/55/caesium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: 'NIST Atomic Spectra Database'
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径，半径取计算值。
visual:
  scene: elements.shell-ladder
  caption: 第六级台阶起点 · 5p 之后新电子进入 6s
  note: 阶梯表示壳层容量与填充次序，不表示 6s 与 4f、5d 的实际能量高低。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供，引用来源仅用于事实核对
tags:
  - 元素
  - 第六周期
  - 碱金属
  - 铯
---
## 第 55 个质子把电子放进了哪里

氙的价层是 4d10 5s2 5p6，5p 的六个位置全部占满，闭壳没有空位可给新电子。[1] 第 55 个质子到来时，新增电子不能挤进 5p，也没有落进 4f 或 5d，而是进入 6s，铯的基态因此写作 [Xe]6s1。这与铷进入 5s 是同一套逻辑：主量子数更大的 s 轨道能穿透到核附近，感受到更强的有效核电荷，能量被压低，所以在 4f、5d 尚未开始填充之前先被占据。

不同之处在于，铯的 6s 外面不再有同类的 s 轨道，内层却多了一整套 4d 电子。4d 对 6s 的屏蔽并不彻底，核电荷从 54 增到 55，6s 电子感到的有效核电荷确实上升；但它的平均半径仍比 5s 大得多，屏蔽增量与核电荷增量几乎互相抵消。结果是这颗电子束缚很弱：第一电离能只有 3.894 eV，比氙的 12.130 eV 低 8.236 eV。[3] 构型上只多了一个 6s 电子，效果却是把最外层推得更远、更松。

## 相对 Z−1：六项差值

- 第一电离能：3.894 eV；氙为 12.130 eV，减小 8.236 eV。[3]
- 原子半径：298 pm（计算值）；氙为 108 pm，增大 190 pm。[1]
- 电负性：0.79；氙为 2.60，减小 1.81。
- 价电子构型：铯为 6s1；氙为 4d10 5s2 5p6，新增电子进入 6s。
- N/Z：质量数 133，N=133−55=78；氙为 N=132−54=78，中子数不变。
- 核来源：铯为 s 过程；氙为 s 过程与 r 过程。

六项里，电离能的落差是主因的直接读数：新电子进入主量子数更大的壳层，核电荷只加一个单位，拉不住它。半径增大 190 pm、电负性下降 1.81，是同一件事的两种说法——价电子离核更远，原子对成键电子的吸引力更弱。中子数恰好不变，说明这对核素的稳定线位置接近；核来源的差别则提醒，化学性质的突变与核合成路径不共享同一套原因。

## 为什么这一格重要

铯把碱金属的标签推到极端。6s1 只有一个价电子，失去它之后剩下 [Xe] 闭壳核心，因此 +1 氧化态异常干净；电负性 0.79 在常见元素中属于最低的一档，意味着成键时它几乎总是电子给出方。[1] 这种极端的易失性让铯对痕量水与氧都非常敏感，也让它成为研究原子最外层的理想对象。

更精确的后果来自核与电子的耦合。铯-133 是它唯一的稳定同位素，核自旋与 6s 电子的相互作用把基态劈成两个靠得很近的超精细能级，两者之间的跃迁频率极稳定，被用来定义秒。[2] 价电子越松，越容易被外场扰动，也越容易被制备和读出；铯钟正是把这种“松”转化成了可测量的标准。这不是用途附注，而是构型长出来的计量基础。

## 它从哪里来

铯的核来源记为 s 过程。慢中子俘获发生在渐近巨星支的氦壳层，较重的种子核逐个吞中子，再经 β 衰变向上爬；这条路要经过许多寿命不短的中间核，产量因此有限。铯只有 ¹³³Cs 一个稳定同位素，说明它的稳定线位置很窄，偏离这条线的核素大多会继续衰变。

把线索挂到时间轴的重元素富集节点上，丰度为什么要按“代”来算就清楚了：s 过程在恒星内部缓慢进行，产物要等恒星抛射外层才进入星际介质；r 过程则在中子星并合一类事件中瞬间完成，产物直接混入气体。铯在地壳中的量级远低于铁与氧，不是因为化学上稀有，而是因为它的核合成通道窄、每次事件的产额低。

## 怎么继续走

往前一步是氙，它解释了闭壳为什么把电离能推到高点；往后一步是钡，6s 从一颗变两颗，电离能回升 1.318 eV，说明同一亚层填满会重新收紧价电子。想弄清 6s 为什么先于 4f、5d 被占据，去看电子排布解释页；想弄清 4d 与 5s5p 的屏蔽如何决定这颗电子有多松，去看屏蔽与有效核电荷解释页。铯这一页只回答一件事：多出的质子把电子推到了哪里，以及那颗电子为什么如此容易离开。
