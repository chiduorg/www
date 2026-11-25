---
id: mass.neutron
title: 中子：比质子重 0.14%，却决定了自由中子的寿命
summary: >-
  中子静质量 1.67492750056×10⁻²⁷ kg，约 939.565 MeV/c²。它与质子的质量差约 1.293 MeV，足以让自由中子通过 β
  衰变变成质子、电子与反中微子。
dimension: mass
grade: A
category: 粒子与基本常数
displayValue: 1.675×10⁻²⁷ kg
quantity:
  value: 1.67492750056e-27
  unit: kg
  measure: CODATA 2022 中子静质量；由 Penning 阱与核反应运动学综合
  approximate: false
related:
  - mass.proton
  - mass.hydrogen-atom
  - space.neutron
  - time.neutron-star-merger
  - time.neutrino-decoupling
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      本轮复核：结构、引用编号与量值口径完整；quantity.value 与 displayValue
      数量级一致，bound/zeroMass/approximate、mass.type 与 includesDarkMatter
      逐条核对；太阳、地球、银河、可观测宇宙、总物质、暗物质、哈勃体积、中微子与光子的人工复核一致。
    - >-
      来源可达性：72 个唯一来源中 48 个直接返回 2xx；其余为站点反爬、限流或超时。已修复 PDG 2024 目录页路径与中微子综述 PDF
      两个死链。本轮未逐页重读全文，沿用条目既有 accessed 记录。
    - >-
      reviewed 指结构与来源口径核对，不是外部同行评审；总质量、重子质量、恒星质量与含暗物质口径按 quantity.measure 与 mass
      字段保留。
sources:
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: Review of Particle Physics 2024
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-09'
  - title: "Atomic Weights and Isotopic Compositions"
    url: "https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses"
    publisher: "National Institute of Standards and Technology"
    accessed: '2026-11-24'
  - title: "PDG Live — neutron listings"
    url: "https://pdgprod.lbl.gov/pdgprod/pdgLive/Particle.action?init=0&node=S017"
    publisher: "Particle Data Group"
    accessed: '2026-11-24'
tags:
  - 质量
  - 中子
  - 核子
  - 强子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: CODATA 2022 中子静质量；由 Penning 阱与核反应运动学综合
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · 1.675×10⁻²⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -26.776
  position: 14.22
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Neutron
---
## 这个读数是什么

中子是质子的中性伙伴，由 udd 三个价夸克组成。它的静质量为 1.67492750056×10⁻²⁷ kg，约 939.565 MeV/c²。[1] 与质子相比，中子只重约 0.14%，但这个微小的差值足以改变弱衰变的方向：自由中子会衰变成质子，而不是反过来。

## 质量差为什么关键

质子与中子的质量差约为 1.293 MeV/c²，即 2.3×10⁻³⁰ kg。[2] 这个差值大于电子质量，所以 n → p + e⁻ + ν̄ₑ 在能量上是允许的；自由中子的寿命约 878 秒。若上、下夸克的质量关系反过来，质子就会成为不稳定的那一方，氢原子与整个化学世界都将不存在。

这个微小的质量差在核物理里被进一步放大：它决定 β 衰变的 Q 值，也决定中子星能否稳定存在。若把差值换成相反符号，大爆炸核合成的产物比例会完全不同。[1]

## 质量从哪来

与质子一样，中子质量的绝大部分来自胶子场与夸克动能，而不是三个价夸克的流质量之和。[3] 中子与质子的质量差则主要来自下夸克比上夸克重，以及电磁自能的符号差异。这也是为什么质量轴要把核子质量与夸克流质量分开记录。

## 量级位置

1.675×10⁻²⁷ kg 与质子、氢原子、氦核同处 B2 带的上段，四者只差千分之几。这个紧密的集群说明核子质量尺度由 QCD 能标决定，而不是由单个夸克质量决定；真正拉开量级的是原子、分子与宏观物体。

## 自由中子寿命的两种实验

自由中子寿命约 878 秒，但“束流法”与“瓶法”给出的结果存在几秒的长期差异，尚未完全解释。束流法数衰变产物，瓶法数剩余中子；系统误差来源不同。正文的 878 秒是综合值，不是单一实验的精确读数。[1][S2]

中子星里的中子不是自由中子：核物质中的泡利阻塞与强相互作用改变了衰变通道，所以中子星不会在 878 秒内全部衰变。自由寿命与束缚态稳定性必须分开讨论。

中子与质子的质量差约 1.293 MeV/c²，大于电子质量 0.511 MeV/c²，因此自由中子 β 衰变在能量上允许；反过来则不允许。

## 怎么继续走

想看这个质量差如何决定 β 衰变，去 mass.proton；想看中子星如何把核子压成致密物质，去 mass.neutron-star 与 time.neutron-star-merger；想看中微子如何带走衰变能量，去 mass.neutrino-1。

## 自由中子与束缚中子

自由中子平均约 878 秒衰变，但原子核内的中子可以稳定存在，因为核结合能改变了能量账本。[1][2] 同一个粒子，自由与束缚状态的寿命不同。把“中子寿命”当成所有中子的固定属性，会忽略环境。

## 五轴对照

在质量轴，中子约 1.675×10⁻²⁷ 千克；在空间轴，它是原子核的组成部分；在时间轴，自由中子衰变按秒计；在温度轴，早期宇宙的温度决定中子—质子比例。质量差、寿命与温度共同决定核合成。[1][3]

## 读数的口径与换算

本条采用的量是 1.675×10⁻²⁷ kg，口径是 CODATA 2022 中子静质量；由 Penning 阱与核反应运动学综合。质量是广延量，读数依赖湿重/干重、含血/不含血、整备/满载等口径；样本与测量条件必须一起引用。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（National Institute of Standards and Technology）、[5]（Particle Data Group） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
