---
id: elements.cl
title: 氯：第 17 个质子把 3p 补到五个，电负性升到 3.16
titleEn: Chlorine
summary: 硫的 3p 有四个电子，氯补到五个，差一个闭壳；电离能从 10.360 eV 升到 12.968 eV，半径从 88 pm 缩到 79 pm，电负性 3.16。
dimension: element
category: 卤素
displayValue: 'Z = 17 · [Ne]3s²3p⁵ 卤素'
quantity:
  value: 17
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Cl
  nameEn: Chlorine
  period: 3
  group: 17
  block: p
  configuration: 1s2 2s2 2p6 3s2 3p5
  valence: 3s2 3p5
  level: A
related: [elements.s, elements.ar, time.heavy-element-enrichment, elements.explain-shielding]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 氯站在闭壳前一格，3p 只剩一个空位。
  note: 空位决定它容易接受电子，不等于它已经稳定。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: "PubChem Element Summary: Chlorine"
    url: https://pubchem.ncbi.nlm.nih.gov/element/17
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: "Periodic Table: Chlorine"
    url: https://www.rsc.org/periodic-table/element/17/chlorine
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第三周期, p 区, 卤素]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 17 个质子把电子放进了哪里

硫的价层是 3s²3p⁴，第十七个质子使 3p 变成 3p⁵，只剩一个空位[1]。空位意味着有效核电荷对最外层的吸引很强，电子云继续收缩，第一电离能从 10.360 eV 升到 12.968 eV，增幅 2.608 eV[3]。氯离闭壳只差一步，但还不是闭壳：3p⁵ 仍有一个未成对电子，可以接受一个电子，也可以共用电子形成单键。第三周期的 3d 依旧空着，这个空位不影响氯的基态，却决定了氩之后为什么先填 4s；5s/4d、6s/4f/5d 的交错则要等到更重的周期才展开。

## 相对 Z−1：六项差值

- 第一电离能：12.968 eV，硫为 10.360 eV，增大 2.608 eV。[3]
- 原子半径：79 pm（计算值），硫为 88 pm（计算值），减小 9 pm。[1]
- 电负性：3.16（Pauling），硫为 2.58，增大 0.58。
- 价电子构型：3s²3p⁴ → 3s²3p⁵，3p 只剩一个空位。
- N/Z：质量数 35，中子数 35−17=18；硫为 32−16=16，中子数增加 2。
- 核来源：硫为“氧燃烧与硅燃烧”，氯改为“硅燃烧与中子俘获”，燃烧阶段更靠后。

电离能上升 2.608 eV 的主因是空位带来的强吸引，半径只缩小 9 pm，说明电子云已经很难再压；电负性增幅 0.58 是本周期最大，正是“差一个电子”的化学表现。中子数增加 2 与核合成阶段后移同时发生，两条线索一致地指向更重的核。电子一侧的“接近闭壳”和核一侧的“燃烧阶段后移”在这一格叠加，但前者才是化学性质突变的原因。

## 为什么这一格重要

只差一个电子，使氯成为强氧化剂：它容易接受一个电子形成 Cl⁻，与氩等电子，离子外层回到闭壳状态。[2] 氯气分子由两个氯原子共价结合，反应性强，因为反应产物中的氯通常获得更稳定的电子环境。氯有两种稳定同位素 ³⁵Cl 与 ³⁷Cl，质量差较大，这在同位素分馏研究中很有用。把氯与硫并排看，电负性的跃升不是渐变，而是“接近闭壳”带来的加速；把氯与氩并排看，两者只差一个电子，化学行为却从强夺电子翻到几乎不反应。氯的氧化物与含氧酸则出现在正价态，说明它在强氧化环境中也能失去电子。

## 它从哪里来

氯的来源写作“硅燃烧与中子俘获”。硅燃烧是恒星核心最后的燃烧阶段之一，产物已经接近铁峰；中子俘获则在旁路上继续调整同位素。时间轴上的重元素富集节点把这两条路径放进代际循环：第一代恒星的超新星产物成为下一代恒星的原料，氯就在这样的循环里被反复加工。氯的丰度低于硫和硅，原因在于硅燃烧持续时间短、产物份额小，而不是化学性质使它难以生成。换句话说，活泼与否决定它在地表怎样存在，却不决定它在恒星里能造出多少。因此氯的库存更多取决于局部恒星形成史，而不是一条普遍的主路径。

## 怎么继续走

往上是硫：3p⁴ 的成对起点；往下是氩：3p⁶ 闭壳，第一电离能升到 15.760 eV，电负性却没有公认值。想弄清“差一个电子”为什么比“多一个电子”更容易拉电子、屏蔽如何放大这种差别，去看屏蔽与有效核电荷解释页。时间轴的重元素富集节点补上来源一侧：硅燃烧为何是铁峰前的最后一站。
