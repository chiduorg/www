---
id: elements.cr
title: 铬：第 24 个质子宁可不按顺序，也要换来 3d5 4s1 的半充满
titleEn: Chromium
summary: 铬不是 3d4 4s2：它把一个 4s 电子推进 3d，换来半充满的 3d5 4s1；电离能几乎不变，半径继续收缩，铜的异常与它同类。
dimension: element
category: 过渡金属
displayValue: 'Z = 24 · [Ar]3d⁵4s¹'
quantity:
  value: 24
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Cr
  nameEn: Chromium
  period: 4
  group: 6
  block: d
  configuration: 1s2 2s2 2p6 3s2 3p6 3d5 4s1
  valence: 3d5 4s1
  level: A
related: [elements.ti, elements.mn, time.pop-iii-supernovae, elements.explain-configuration]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 3d 台阶走到半充满，4s 反而让出一个电子。
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
  - title: 'PubChem Element Summary: Chromium'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/24'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Chromium'
    url: 'https://www.rsc.org/periodic-table/element/24/chromium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: 'NIST Atomic Spectra Database'
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第四周期, 3d 半充满, 铬]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 24 个质子把电子放进了哪里

钒的价层是 3d3 4s2。按“每次加一个电子”的直线推法，铬应当是 3d4 4s2；实际构型却是 [Ar] 3d5 4s1。[1] 新增电子进入 3d，同时一个 4s 电子也被推进 3d，于是 3d 变成半充满的五重态、4s 只剩一个电子。原因是 3d 与 4s 能量非常接近，3d5 半充满时五个电子分占五个轨道、自旋平行，交换能带来的稳定化足以补偿 4s 成对与电子转移所需的能量。

这不是“违背构造原理”，而是构造原理在近简并轨道上的真实解：电子按总能量最低的方式排布，而不是按一张固定顺序表排布。铬的异常与后面铜的 3d10 4s1 属于同一类现象，中间隔着一整个 3d 半充满；两者都说明 4s 并不总是比 3d 先填，谁低谁高要看具体电子数。

## 相对 Z−1：六项差值

- 第一电离能：铬 6.767 eV，钒 6.746 eV，增大 0.021 eV。[3]
- 原子半径：铬 166 pm，钒 171 pm，减小 5 pm（计算值口径）。[1]
- 电负性：铬 1.66，钒 1.63，增大 0.03。
- 价电子构型：钒为 3d3 4s2，铬为 3d5 4s1；4s 少一个电子、3d 多两个电子，净增一个 3d 电子。
- N/Z：铬-52 有 28 个中子，钒-51 也有 28 个；质子增加 1、质量数也增加 1，中子数不变。
- 核来源：钒记作“硅燃烧与超新星”，铬记作“硅燃烧、超新星与 r 过程”，多出一条 r 过程通道。

主因是 3d 半充满带来的能量重排，而不是新增质子的库仑吸引：如果只是多一个质子，电离能应当明显上升，但实测只增加 0.021 eV，几乎持平。钒的 4s 电子成对，排斥使它更容易被移走；铬的 4s 只剩一个，没有成对排斥，核电荷却更高，两个效应几乎抵消。半径减小 5 pm 才是核电荷增加的直接痕迹；中子数不变是质量数与质子数同步增加的算术结果；r 过程的加入说明铬已开始接收少量重元素合成通道的贡献。

## 为什么这一格重要

3d5 4s1 的直接后果是磁性与价态。五个 3d 电子分占五个轨道且自旋平行，铬原子因此有很高的未成对电子数；当它参与成键时，这些电子可以逐步交出，使铬能交出全部六个价电子，达到很高的氧化态。[1] 半充满的 3d5 本身又是一个相对稳定的构型，所以铬的高价化合物具有强氧化性——它们把电子拉回来，重新接近半充满。这条“构型稳定性驱动化学”的线索，比记住铬有哪些用途更能解释它的行为。

半充满不是“绝对稳定”，铬的化学没有停在一种价态上：它可以在不同配位环境里交出不同数目的 3d 电子，颜色与磁性随之改变。

## 它从哪里来

来源条目把铬写成“硅燃烧、超新星与 r 过程”，比钒多了 r 过程一项。主通道仍是硅燃烧：在第三代恒星的核心，硅燃烧把核素往铁峰推，铬是这条链上的一站；核心坍缩时，这些产物被抛进星际介质，对应时间轴上的超新星节点。[1] r 过程是快中子俘获，通常发生在中子星并合或超新星的最内层，它只为铬贡献一小部分，但足以在来源栏里留下记录。

丰度上，铬主要由硅燃烧的产额决定，而不是由 r 过程决定；这也是为什么它的稳定同位素共有四种，却集中在质量数 50 到 54 的窄带里。[2] r 过程的叠加让较重的同位素份额略有增加，但不改变“硅燃烧为主”的判断。后续世代的混合把这些铬带入星际介质，重元素富集节点记录的是总账，不是单次事件。

## 怎么继续走

往回看钛（/entry/elements/ti/），能看到 3d2 4s2 如何一步步走到半充满之前；往前看锰（/entry/elements/mn/），能看到半充满之后电子为什么回到 4s。想弄清 3d 与 4s 的能量交错和异常判据，去读电子排布解释页；想把铬的 r 过程份额放回重元素来源，去读第三代恒星超新星节点。铬这一格的价值，是让你第一次看到“半充满”真的能改写填充顺序。
