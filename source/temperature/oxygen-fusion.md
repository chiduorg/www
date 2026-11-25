---
id: temperature.oxygen-fusion
title: 氧聚变
titleEn: Oxygen burning core temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  氧聚变发生在大质量恒星核心的晚期阶段，中心温度通常要达到约 2 × 10⁹ K。 NASA 教学表把氧燃烧阶段列在约 2.0 GK，NED
  的核合成章节也给出 2 × 10⁹ K； 本条目采用这一量级，并说明它是核心模型值，不是整颗恒星温度。
quantity:
  value: 2000000000
  unit: K
  measure: 大质量恒星氧燃烧核心温度参考
  approximate: true
  measureLabel: 大质量恒星氧燃烧核心温度参考
  uncertainty: 500000000
  uncertaintyType: 阶段温区与模型差异
displayValue: 约 2 × 10⁹ K（恒星模型参考）
related:
  - space.sun
  - mass.sun
  - temperature.carbon-fusion
  - temperature.silicon-burning
  - temperature.red-giant-core
  - temperature.sun-core
reviewStatus: reviewed
sources:
  - title: What is Your Cosmic Connection to the Elements?
    url: 'https://imagine.gsfc.nasa.gov/educators/elements/imagine/05.html'
    publisher: NASA Goddard Space Flight Center
    accessed: '2026-11-06'
  - title: Origin of the Chemical Elements
    url: 'https://ned.ipac.caltech.edu/level5/Sept16/Rauscher/Rauscher4.html'
    publisher: 'T. Rauscher and A. Patkos, NASA/IPAC NED'
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: oxygen-fusion
  icon: "\U0001F525"
  relatedLabels: 氧燃烧、碳聚变、硅燃烧、超新星、核合成、氖燃烧、大质量恒星、核心坍缩、铁核
conditions: >-
  对象为大质量恒星核心的氧燃烧阶段（氧核聚变为硅、硫等）；温度指中心区域的模型温度， NASA 教学表给出约 2.0 GK，NED 章节给出约 2 × 10⁹
  K。它不是光球有效温度，也不是整颗恒星均温； 实际点火条件随密度、成分、对流和模型变化，约 2 × 10⁹ K 是量级参考而不是精确阈值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 NASA 教学表：氧燃烧阶段温度约 2.0 GK，主要产物为硅、硫等，持续时间约 2 年。
    - 核对 NED 高级燃烧章节：氧燃烧在温度达到 2 × 10⁹ K 时发生，主要反应生成 28Si。
    - 保留原 2 × 10⁹ K 量值；不把它扩展为所有大质量星的统一点火温度。
  originalQuantity:
    value: 2000000000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 2 × 10⁹ K 是核心模型给的数量级，约 ±0.5 GK 的差异可来自质量、密度、对流与反应率；它不是实测温度，也不是整颗恒星温度。
visual:
  template: reaction-field
  profile: oxygen-core
  caption: 氧燃烧核心
  note: >-
    核心壳层与反应颗粒为示意，不能按画面判断真实密度或温度；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#f0a05a'
  symbol: O
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

氧聚变是氖燃烧之后、硅燃烧之前的高级核燃烧阶段，核心中的氧核聚合为硅、硫等更重元素。[2] 这里的温度是核心中心区域的模型温度，不是恒星表面温度；在洋葱模型中，氧燃烧发生在特定的核心壳层，外层仍有更冷的未燃烧物质。[1]

## 怎样测到

核心温度无法直接测量，只能由恒星演化模型给出：输入质量、金属丰度、密度剖面和核反应率，计算各燃烧阶段的中心温度与持续时间。[1][2] NASA 的教学表把氧燃烧阶段列在约 2.0 GK，并给出主要产物硅、硫和约两年的持续时间；NED 的核合成章节也把氧燃烧的开始温度写成 2 × 10⁹ K。[1][2]

## 数值与口径

这里直接采用约 2 × 10⁹ K 的量级，不把它写成更精确的小数。NASA 表中的 2.0 GK 与 NED 的 2 × 10⁹ K 是一致的教学取整，但不同质量恒星的模型可以给出相近而不完全相同的中心温度。[1][2] 这是“核心达到该量级才开始有效燃烧”的参考，不是整颗星的平均温度，也不是光球有效温度。

## 常见误解

第一，把氧聚变当成化学燃烧；它释放的是核结合能。第二，把 2 × 10⁹ K 当成所有恒星都能达到的温度；只有足够质量、能让核心继续收缩的恒星才会进入这一阶段。[2] 第三，把核心温度与表面温度混在一起；表面可能只有几千到几万开，核心却可达十亿开量级。[1]

## 与其他温区的关系

2 × 10⁹ K 高于碳燃烧的约 0.7 GK，低于硅燃烧的约 3 GK，处在高级燃烧链条的中后段。它远高于太阳核心的约 15 MK，也远高于太阳表面与日冕；把它与这些温度放在同一张图上时，必须标注“核心模型值”，否则会误以为整颗恒星都处于十亿开。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
