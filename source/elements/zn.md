---
id: elements.zn
title: 锌：第 30 个质子补满 4s，把 3d 过渡系关上了门
titleEn: Zinc
summary: 铜的 3d10 4s1 到锌变成 3d10 4s2：最后一个电子进入 4s，4s 闭合使电离能跳升 1.667 eV，也让锌只剩 +2 价。
dimension: element
category: 过渡金属
displayValue: 'Z = 30 · [Ar]3d¹⁰4s²'
quantity:
  value: 30
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Zn
  nameEn: Zinc
  period: 4
  group: 12
  block: d
  configuration: 1s2 2s2 2p6 3s2 3p6 3d10 4s2
  valence: 3d10 4s2
  level: A
related: [elements.cu, elements.br, time.heavy-element-enrichment, elements.explain-nuclear-stability]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 锌站在 3d 段的终点，4s 也被两个电子填满。
  note: 阶梯表示亚层容量与填充次序，4s 与 3d 的实际能量高低不在图中按比例表示。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Zinc'
    url: https://pubchem.ncbi.nlm.nih.gov/element/30
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Zinc'
    url: https://www.rsc.org/periodic-table/element/30/zinc
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第四周期, 3d 区, 锌]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 30 个质子把电子放进了哪里

铜的价层是 3d10 4s1。第 30 个质子到来时，3d 已经装满十个电子，新增电子只能进入 4s，锌因此是 [Ar]3d10 4s2。[1] 这里没有出现铜那样的“4s 退回 3d”，因为 3d 已无空位；4s 与 3d 的竞争以 4s 被补满告终。与镍到铜的一步相比，锌的变化更像是“把最后一个外层位置填上”，而不是在两个亚层之间重新分配。

构型变化对屏蔽的影响体现在电离能上：4s 填满后，外层电子对核的束缚显著增强，第一电离能从铜的 7.727 eV 跳到 9.394 eV，增幅 1.667 eV，远大于铜相对镍的 0.087 eV。[3] 3d10 对 4s 的屏蔽不充分，有效核电荷在 Z=30 时继续上升，半径则从 145 pm 缩到 142 pm。锌的 3d 电子已经全部配对，价层没有单电子，这一构型既是 3d 系列的终点，也是它化学行为变“窄”的起点。

## 相对 Z−1：六项差值

- 第一电离能：锌为 9.394 eV，铜为 7.727 eV，升高 1.667 eV。[3]
- 原子半径：锌为 142 pm，铜为 145 pm，减小 3 pm（计算值口径）。[1]
- 电负性：锌为 1.65，铜为 1.90，减小 0.25。
- 价电子构型：锌为 3d10 4s2，铜为 3d10 4s1；4s 增加一个电子，3d 保持十电子。
- N/Z：锌的代表质量数为 64，Z=30，故 N=34，N/Z≈1.13；铜的代表质量数为 63，Z=29，故 N=34，N/Z≈1.17；相对铜，代表同位素的中子数不变。
- 核来源：锌标注为“超新星与弱 s 过程”，铜标注为“弱 s 过程与超新星”；两者成分相同，只是表述顺序不同，差异不显著。

主因是 4s 闭合：最后一个电子填进 4s，使外层电子更难被拿走，第一电离能因此大幅升高。半径缩小 3 pm 是核电荷增加与 4s 收紧的伴随结果。电负性反而下降 0.25，看起来与“闭壳更稳定”相矛盾；原因是 Pauling 标度衡量的是成键时吸引电子的能力，而锌的 3d10 4s2 已无易参与成键的空位，数值低并不等于它容易失去电子。电离能与电负性在这一格朝相反方向走，正好说明两者不是同一把尺子。

## 为什么这一格重要

锌的化学几乎被 +2 价垄断。失去两个 4s 电子得到 Zn2+，价层是 3d10，d 亚层闭合、总自旋为零，因而抗磁，化合物通常无色；3d 电子被核束缚得较紧，不再像铜那样可以再失去一个形成 +3 价。[2] 这正是“d 区元素”与“过渡金属”之间的边界案例：锌在周期表上属于 d 区，却没有部分填充的 d 亚层，也就没有典型过渡金属那种多种氧化态与 d–d 跃迁显色。

把锌与铜并排看，差别一目了然：铜的 3d10 4s1 还留着一个可离域的 4s 电子，能出现 +1 与 +2 两套化学；锌把 4s 补满，只剩 +2 一条主路。3d 系列在锌这里关门，后面的镓开始填 4p，周期表从 d 区转入 p 区。锌的 5 种稳定同位素也比铜的 2 种多，说明偶数 Z 的配对优势在核层面同样重要，这一点可以接到核稳定性解释页继续看。

## 它从哪里来

facts 把锌的核来源标为“超新星与弱 s 过程”。锌不是原初核合成的遗留，也不是铁峰直接燃烧的终点；它要在超新星爆发的爆炸性核合成与弱 s 过程的中子俘获中，由较重的种子核逐步补齐。[1] 铁峰之后的库仑势垒越来越高，继续加重元素必须依靠中子俘获，因此锌的产额远低于铁和镍，却又比更重的 r 过程元素容易积累。把这一条挂到时间轴的重元素富集节点上，就能解释“为什么锌比铁稀有，但仍比银、锡常见”：它紧贴铁峰，处在低产额区的上缘。

## 怎么继续走

往左回到铜，能看到 3d10 4s1 的异常，以及 +1 与 +2 并存；往右的镓不在本批条目中，方向上是 4p 开始填充。再往右到溴，4p 已经填到五个，可以对照 p 区接近闭壳时的电负性与半径变化。想弄清锌为什么只有 +2 价、3d 电子为何不参与成键，去看电子排布解释页；想弄清它的 5 种稳定同位素与铜的 2 种为何不同，去看核稳定性解释页。
