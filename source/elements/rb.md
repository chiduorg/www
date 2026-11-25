---
id: elements.rb
title: 铷：第 37 个质子开启 5s，把氪的闭壳换成一枚松电子
titleEn: Rubidium
summary: 氪的 4p6 已经合上，铷的新电子只能开一层 5s；电离能从 14.000 eV 跌到 4.177 eV，半径从 88 pm 涨到 265 pm，闭壳与碱金属之间的落差在这一格最陡。
dimension: element
category: 碱金属
displayValue: 'Z = 37 · [Kr] 5s¹ 碱金属'
quantity:
  value: 37
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Rb
  nameEn: Rubidium
  period: 5
  group: 1
  block: s
  configuration: '[Kr] 5s1'
  valence: '5s1'
  level: B
related: [elements.kr, elements.sr, elements.cs, elements.explain-configuration, time.heavy-element-enrichment]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径，半径取计算值。
visual:
  scene: elements.shell-ladder
  caption: 第五周期第一格，5s 只放了一枚电子。
  note: 阶梯只表示填充次序，不表示电子云的真实尺寸。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Rubidium'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/37'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Rubidium'
    url: 'https://www.rsc.org/periodic-table/element/37/rubidium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: 'Periodic Table of Elements'
    url: 'https://iupac.org/what-we-do/periodic-table-of-elements/'
    publisher: 'International Union of Pure and Applied Chemistry (IUPAC)'
    accessed: '2026-11-25'
tags: [元素, 第五周期, s 区, 铷]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 37 个质子把电子放进了哪里

氪的价层是 3d10 4s2 4p6，4p 已经合上，第四能层的三段全部填满。第 37 个质子到来时，新电子没有空位可补，只能开一个新壳层，进入 5s，铷的基态成为 [Kr] 5s1。[1] 这一步不是往已有亚层里再加一格，而是把主量子数从 4 抬到 5；5s 的电子云更靠外，受内层屏蔽更彻底，因此被核拉得很松。氪的电子无处可去，铷的电子却站在一个几乎未被占用的新壳层上，这是整张周期表里落差最大的一次换段。

## 相对 Z−1：六项差值

- 第一电离能：铷 4.177 eV，氪 14.000 eV，减小 9.823 eV。[1]
- 原子半径：铷 265 pm，氪 88 pm，增大 177 pm（计算值口径）。[1]
- 电负性：铷 0.82，氪 3.00，减小 2.18。
- 价电子构型：氪为 3d10 4s2 4p6，铷为 5s1；新增电子没有进入 4d，而是直接开了 5s。
- N/Z：铷-85 有 48 个中子，氪-84 也有 48 个；质子加 1、质量数也加 1，中子数不变。铷有稳定同位素。[2]
- 核来源：氪记作“s 过程与 r 过程”；铷记作“s 过程（AGB 星）”，来源第一次单独落到渐近巨星支的慢中子俘获上。[2]

主因是壳层开启，而不是核电荷的积累：核电荷只多 1，但新增电子被放进主量子数更高的轨道，平均距离骤增，屏蔽几乎抵消了核电荷的增益。于是电离能大跌、半径大涨，电负性也落到碱金属一端的最低段。中子数不变只是质量数与质子数同步加 1 的算术结果，与稳定性没有因果关系。

## 为什么这一格重要

一枚 5s 电子决定了铷的化学面貌：它几乎总以 +1 出现，失去这枚电子后剩下氪闭壳，产物稳定、代价也低，这与 4.177 eV 的电离能一致。[1] 更细的一层是，5s 与 4d 的间隙很小，铷的光谱里除了 5s 到 5p 的共振线，还能看到 d 态的痕迹；碱金属的“简单”只是价电子少，不是能级结构简单。265 pm 的半径让它几乎不承担方向性成键，只提供一枚可以轻易让渡的电子。

## 它从哪里来

来源记作“s 过程（AGB 星）”。[2] 慢中子俘获在渐近巨星支的热脉冲里把铁峰以上的核素一格一格往上推，铷正落在这条链的产物区间。放回时间轴，它的种子来自星族 III 超新星抛出的较重元素，成品则主要在后续低质量恒星的 AGB 阶段生成，再随星风进入星际介质，这正是重元素富集节点记录的过程。

## 怎么继续走

往回看氪（/entry/elements/kr/），能看到 4p 闭合如何把电离能顶到 14.000 eV；往前看锶（/entry/elements/sr/），能看到 5s 补成一对后半径为何回落。若想弄清 s 过程怎样在 AGB 星里逐格推进，去读重元素富集一节。

本条的原子量口径参考 IUPAC 周期表与标准原子量。[3]
