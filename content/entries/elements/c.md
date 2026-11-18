---
id: elements.c
title: 碳：第 6 个质子补上第二个 2p 电子，三α过程就此落地
titleEn: Carbon
summary: 从硼到碳，2p 从 1 个电子增加到 2 个；11.261 eV 的电离能、67 pm 的半径与 2.55 的电负性，让碳能用四个价电子搭出稳定的共价骨架。
dimension: element
category: 非金属
displayValue: 'Z = 6 · [He]2s²2p²'
quantity:
  value: 6
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: C
  nameEn: Carbon
  period: 2
  group: 14
  block: p
  configuration: '[He] 2s2 2p2'
  valence: 2s2 2p2
  level: A
related: [elements.li, elements.n, time.first-stars, elements.explain-configuration]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 第二级台阶中段，2p 上出现第二个电子。
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
  - title: 'PubChem Element Summary: Carbon'
    url: https://pubchem.ncbi.nlm.nih.gov/element/6
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Carbon'
    url: https://www.rsc.org/periodic-table/element/6/carbon
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第二周期, p 区, 碳]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 6 个质子把电子放进了哪里

碳的原子核有六个质子。按填充次序，前两个电子进 1s，接着两个进 2s；到硼时 2p 已有 1 个电子，碳的第六个电子继续进 2p，构型写成 [He] 2s2 2p2。[1] 新增电子没有进入 2s，因为 2s 已经满员，而 2p 与 2s 同属第二能层、能量接近；它也没有跳到第三层，因为 3s 还太高。第三个质子带来的核电荷增量大于新增 2p 电子提供的屏蔽，所以有效核电荷上升，半径从硼的 87 pm 缩到 67 pm。[3] 这一步的构型变化看似只是 2p 上多了一个电子，实际上它把碳推到了四价的位置：2s2 2p2 一共四个价电子，既能全部参与成键，也能通过 2s 与 2p 的混合重新分配。

## 相对 Z−1：六项差值

- 第一电离能：碳为 11.261 eV，硼为 8.298 eV，碳比硼高 2.963 eV。[3]
- 原子半径：碳为 67 pm（计算值口径），硼为 87 pm，碳比硼小 20 pm。[1]
- 电负性：碳为 2.55（Pauling 标度），硼为 2.04，碳比硼高 0.51。
- 价电子构型：碳为 2s2 2p2，硼为 2s2 2p1；新增电子进入 2p，使 2p 上的电子从 1 个变成 2 个。
- N/Z：碳的质量数 A=12，按 N=A−Z 得 N=6，N/Z=1.00；硼的 A=11、Z=5，N=6，N/Z=1.20，二者的中子数同为 6。
- 核来源：碳标注为恒星三α过程；硼在数据表中没有来源字段，无法给出可比口径，这里只写碳这一侧的路径。

这六项里，主因是核电荷增加与 2p 上多出的电子共同改变了有效核电荷：半径收缩 20 pm、电离能上升 2.963 eV、电负性上升 0.51，都是这条主因的伴随结果。中子数保持 6 不变只是相邻质量数的巧合，不能写成结构原因；核来源一项则从电子层跳到核合成层，碳的三α过程与硼没有可比的来源字段，二者不能硬凑成同一因果。

## 为什么这一格重要

四个价电子是碳最重要的结构事实：2s2 2p2 可以全部投入成键，形成四根共价键；2s 与 2p 能量接近，又能混成 sp3、sp2、sp 等不同组合，让碳搭出链、环与多重键。[2] 电负性 2.55 处在中等位置，所以碳既不强烈夺电子，也不强烈丢电子，最适合用共用电子对构建骨架。它的两个稳定同位素是 ¹²C 与 ¹³C，¹⁴C 则有 5,700 年的半衰期；后者让含碳样本可以按放射性衰变记账，但这是核性质，不是四价性的来源。[2] 碳这一格之所以重要，是因为价层刚从 2p1 走到 2p2，就把四根键的可能性打开了。没有这四个价电子，碳的链状与环状骨架都无从谈起。

## 它从哪里来

碳的核来源标注为恒星三α过程，这条线索挂在时间轴的 time.first-stars 节点。[1] 三个 ⁴He 核在恒星氦核中相遇，先合成极不稳定的铍中间核，再在极短的时间窗内捕获第三个 ⁴He，形成 ¹²C；如果没有这一步，氦燃烧就会在这个轻核缺口处断掉。第一代恒星把这条路径跑通，碳才进入星际介质，后来的恒星与行星才有碳可用。碳的丰度之所以可观，不是因为原初核合成直接造碳，而是因为恒星氦燃烧找到了跨过这个轻核缺口的方式。[2]

## 怎么继续走

往回看是硼，它不在本批 A 级条目里；再往回是锂，展示了 2s 如何接棒。往前一步是氮，2p 将从 2 个电子走到 3 个。想看 2s 与 2p 如何混合成四根键、为什么碳能形成那么多同素异形体，去电子排布解释页（/entry/elements/explain-configuration/）。时间轴上，time.first-stars 解释碳为什么必须等第一代恒星。
