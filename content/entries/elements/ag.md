---
id: elements.ag
title: 银：第 47 个质子重复铜的异常，4d 填满而 5s 只留一个
titleEn: Silver
summary: 钯之后多一个质子，银没有继续填 4d，而是把电子放进 5s，得到 4d10 5s1。填满的 4d 与单个 5s 让银的电离能低于钯，仍保住 +1 价的稳定性。
dimension: element
category: 过渡金属
displayValue: 'Z = 47 · [Kr]4d¹⁰5s¹'
quantity:
  value: 47
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Ag
  nameEn: Silver
  period: 5
  group: 11
  block: d
  configuration: '[Kr] 4d10 5s1'
  valence: 4d10 5s1
  level: A
related: [elements.kr, elements.sn, time.heavy-element-enrichment, elements.explain-shielding]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 银位于第五周期 4d 段的末端，5s 只留一个电子。
  note: 阶梯表示亚层容量与填充次序，不表示 4d 与 5s 的精确能量高低。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Silver'
    url: https://pubchem.ncbi.nlm.nih.gov/element/47
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Silver'
    url: https://www.rsc.org/periodic-table/element/47/silver
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第五周期, 4d 区, 银]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 47 个质子把电子放进了哪里

钯来到 4d 段的末端，银多一个质子。按逐级填充，似乎应得到 4d9 5s2；实际构型是 [Kr]4d10 5s1。[1] 这与铜的 3d10 4s1 同构：4d 与 5s 能量接近，填满 4d 带来的交换与配对收益，使一个 5s 电子转入 4d。银的异常因此不是孤例，而是“d 区末端”反复出现的模式；不同之处在于主量子数更大，5s 电子离核更远，4d10 的屏蔽也更强。

构型对屏蔽的影响与铜相似，但方向更明显：5s 电子处在外层，4d10 对它的屏蔽较充分，所以银的第一电离能 7.576 eV 反而低于钯的 8.337 eV，降低 0.761 eV。[3] 半径从 169 pm 缩到 165 pm，说明核电荷增加仍在起作用，只是被 5s 的扩散与 4d 的屏蔽部分抵消。银的 4d10 已经闭合，价层只剩一个 5s 电子，这决定了它主要走 +1 价，而不是像钯那样在 4d 上继续做文章。

## 相对 Z−1：六项差值

- 第一电离能：银为 7.576 eV，钯为 8.337 eV，降低 0.761 eV。[3]
- 原子半径：银为 165 pm，钯为 169 pm，减小 4 pm（计算值口径）。[1]
- 电负性：银为 1.93，钯为 2.20，降低 0.27。
- 价电子构型：银为 4d10 5s1；钯的 4d 段已经收尾，银新增的电子落在 5s，4d 保持满壳。
- N/Z：银的代表质量数为 107，Z=47，故 N=60，N/Z≈1.28；钯的代表质量数为 106，Z=46，故 N=60，N/Z≈1.30；相对钯，代表同位素的中子数不变。银有两种稳定同位素 ¹⁰⁷Ag 与 ¹⁰⁹Ag，代表质量数 107 取其中一种。
- 核来源：银标注为“弱 r 过程与 s 过程”；钯的核来源未在事实表中单列，无法给出直接对比。

主因是 5s 电子的加入与 4d10 的屏蔽：新增电子在更外层，4d 又把核电荷遮住了一部分，所以第一电离能不升反降 0.761 eV。半径缩小 4 pm 是核电荷增加的伴随结果，只是幅度被外层扩散抵消。电负性下降 0.27 与电离能同向，说明银的价电子整体上比钯更“松”；但 4d10 的闭合仍让 Ag+ 相对稳定，不能仅凭电离能下降就断言银更容易失去电子。这里再次出现“电离能与电负性不是同一把尺子”的情况。

## 为什么这一格重要

银的化学以 +1 价为主。失去 5s 电子得到 Ag+，价层是 4d10，d 亚层闭合、总自旋为零，因而抗磁，化合物通常无色；要进一步氧化到更高的价态，就必须动 4d 电子，代价明显更大。[2] 这与铜的 Cu+ 是同一逻辑，但银的 4d10 更弥散、屏蔽更充分，Ag+ 在常见条件下更稳定。银的 +1 价化合物、银离子与含硫或含氮配体的结合，都可以从这个闭合的 4d 壳层读出来。

银与铜同属第 11 族，却把“填满 d 亚层、只留一个 s 电子”的异常从 3d 复制到 4d。这个复制说明异常不是铜的偶然，而是 d 区末端的系统性结果：随着主量子数增大，d 与 s 的能量差、屏蔽与相对论效应一起改变，但“填满 d”这一能量收益仍然足够大。银因此既是铜的对照，也是理解 4d 区如何收尾的关键一格。

## 它从哪里来

facts 把银的核来源标为“弱 r 过程与 s 过程”。银不是铁峰燃烧的直接产物，而是在中子俘获环境中，由较重的种子核逐步加重生成。[1] 弱 r 过程提供快速俘获的贡献，s 过程则在渐近巨星支里沿稳定线缓慢推进；两条路径叠加，使银在重元素中有一定份额，但总产额仍远低于铁和镍。银处在铁峰之后较远的位置，库仑势垒与中子俘获的共同限制把它的丰度压得很低。把这一条挂到时间轴的重元素富集节点上，才能解释“为什么银比铜稀有得多”。

## 怎么继续走

银的 4d 段从氪之后展开。往左的钯不在本批条目中，方向上只是 4d 段收尾；往右的镉会补满 5s，重复锌的“4s 填满、d 区关门”。往右再到锡，5p 开始填充，可以看到 p 区如何接在 d 区之后。想弄清 4d10 为什么屏蔽不住 5s，去看屏蔽与有效核电荷解释页；想弄清银为什么在重元素富集节点上出现，去看时间轴的重元素富集节点。银这一页的核心不是“它是一种贵金属”，而是“铜的异常在第五周期又演了一遍”。
