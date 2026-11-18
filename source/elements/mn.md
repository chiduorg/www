---
id: elements.mn
title: 锰：第 25 个质子把 4s 补成一对，电离能因此陡升
titleEn: Manganese
summary: 锰把 4s 补成一对，得到双半充满的 3d5 4s2；电离能跃升 0.667 eV，电负性却下降，是本段最反常的一步，电负性不是 Z 的单调函数。
dimension: element
category: 过渡金属
displayValue: 'Z = 25 · [Ar]3d⁵4s²'
quantity:
  value: 25
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Mn
  nameEn: Manganese
  period: 4
  group: 7
  block: d
  configuration: 1s2 2s2 2p6 3s2 3p6 3d5 4s2
  valence: 3d5 4s2
  level: A
related: [elements.cr, elements.fe, time.pop-iii-supernovae, elements.explain-nuclear-stability]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 3d 半充满不动，4s 补上第二个电子。
  note: 阶梯只表示亚层容量与填充次序，不表示能级的精确高度。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Manganese'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/25'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Manganese'
    url: 'https://www.rsc.org/periodic-table/element/25/manganese'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: 'NIST Atomic Spectra Database'
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第四周期, 双半充满, 锰]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 25 个质子把电子放进了哪里

铬的价层是 3d5 4s1，锰多出的电子回到 4s，把它补成 4s2，得到 [Ar] 3d5 4s2。[1] 3d 保持半充满不动，所以锰是这一段里唯一同时拥有半充满 3d 与满员 4s 的构型。这不是又一次异常，而是异常之后的回摆：铬为了半充满让出一个 4s 电子，锰则把 4s 的空位重新填上，代价是 4s 电子成对。

屏蔽上，新增的 4s 电子与原有 4s 电子同轨道，互相排斥；但它同时把 3d5 更好地包在里面。结果是第一电离能从铬到锰跳升 0.667 eV，成为本段最大的一步。半径只收缩 5 pm，说明外层电子的空间范围并没有跟着核电荷同步缩小。

## 相对 Z−1：六项差值

- 第一电离能：锰 7.434 eV，铬 6.767 eV，增大 0.667 eV。[3]
- 原子半径：锰 161 pm，铬 166 pm，减小 5 pm（计算值口径）。[1]
- 电负性：锰 1.55，铬 1.66，减小 0.11；这是本段唯一一次电负性下降。
- 价电子构型：铬为 3d5 4s1，锰为 3d5 4s2；新增电子进入 4s，3d 不变。
- N/Z：锰-55 有 30 个中子，铬-52 有 28 个，增加 2 个。
- 核来源：铬记作“硅燃烧、超新星与 r 过程”，锰记作“硅燃烧与超新星”，r 过程一项消失。

主因是 4s 成对与 3d5 半充满的联合效应：从铬的 4s1 到锰的 4s2，电子对排斥让 4s 能量抬高，但核电荷同时增加，两者叠加使电离能上升 0.667 eV，成为本段最大跃升。半径只减小 5 pm，说明 3d5 的屏蔽把核电荷增加的效果挡掉了大半。电负性下降 0.11 是同一原因的另一种表现：3d 半充满撑开电子云，4s 电子对又增加排斥，原子整体更难再吸引电子。r 过程的消失则说明来源栏的差异不必与构型同步。

## 为什么这一格重要

3d5 4s2 让锰有五个未成对 3d 电子，3d 半充满、4s 满员，这种双重闭壳倾向让锰原子表现出很强的顺磁性。[1] 同时，七个价电子使锰能进入多种氧化态：既可以交出两个 4s 电子，也可以继续动用半充满的 3d，于是锰的化学横跨从低价到高价的宽阔区间。半充满的 3d5 还让某些锰化合物带上“想要回到半充满”的倾向，氧化还原行为因此比邻居更复杂。

这种复杂性有一个可检验的标记：锰的第一电离能比铬高 0.667 eV，电负性却比铬低 0.11。两个量朝相反方向走，说明“核电荷更大”并不能简单推出“更愿意吸引电子”；电子云的空间结构与成对排斥在这里同样重要。把这一格读懂，就明白电负性不是 Z 的单调函数。

## 它从哪里来

来源条目把锰记作“硅燃烧与超新星”，比铬少了 r 过程。它仍属于硅燃烧链：第三代恒星在核心把硅烧成铁峰附近的核素，锰是其中一站，核心坍缩把产物抛出，对应时间轴上的超新星节点。[1] 锰只有一个稳定同位素 ⁵⁵Mn，这说明它的核素图上只有一条窄路能走到稳定；旁支大多落在放射性一侧，会在宇宙时间里衰变掉。[2]

这解释了锰的丰度为何由硅燃烧的产额而非衰变链决定：能留下来的只有 ⁵⁵Mn，其他同位素要么从未大量生成，要么已经衰变。硅燃烧推进得越远，锰在产物中的份额越接近它的配额；这也是为什么它的来源描述比铬干净，没有额外的 r 过程。后续世代把这些锰带入星际介质，重元素富集节点记录的是累积结果。

## 怎么继续走

往回看铬（/entry/elements/cr/），能看到 3d5 4s1 的半充满是怎样把 4s 让出来的；往前看铁（/entry/elements/fe/），能看到电子重新进入 3d、打破半充满之后会发生什么。想把锰的强顺磁性与多价态放回电子排布，可以对照铬和铁两页来读；想把 ⁵⁵Mn 的唯一稳定性放回质子中子比，去读核稳定性解释页。锰这一格是“半充满”从异常回到常态的转折点。
