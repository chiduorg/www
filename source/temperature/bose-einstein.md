---
id: temperature.bose-einstein
title: 玻色-爱因斯坦凝聚
titleEn: Bose–Einstein condensation
dimension: temperature
category: 极低温
summary: >-
  1995 年的稀薄铷原子气体实验在约 170 nK 出现玻色–爱因斯坦凝聚。这里采用该实验的参考温度；
  凝聚条件与原子种类、密度和阱参数有关，不能把它当作所有物质共有的固定温度。
quantity:
  value: 1.7e-7
  unit: K
  measure: rubidium-bec-onset-temperature-reference
  approximate: true
  measureLabel: 稀薄铷气体凝聚起始参考
displayValue: 约 170 nK（1.7 × 10⁻⁷ K）
related:
  - temperature.absolute-zero
  - temperature.dilution-refrigerator
  - temperature.superfluid
  - temperature.helium-3-superfluid
  - temperature.nuclear-demagnetization-cooling
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: >-
      Bose-Einstein Condensation in a Dilute Gas: The First 70 Years and Some
      Recent Experiments
    url: >-
      https://www.nist.gov/publications/bose-einstein-condensation-dilute-gas-first-70-years-and-some-recent-experiments
    publisher: NIST / Cornell and Wieman (2002)
    accessed: '2026-11-06'
  - title: 'Bose-Einstein Condensate: A New Form of Matter'
    url: >-
      https://www.nist.gov/news-events/news/2001/10/bose-einstein-condensate-new-form-matter
    publisher: NIST
    accessed: '2026-11-06'
  - title: Bose-Einstein condensate
    url: 'https://www.britannica.com/science/Bose-Einstein-condensate'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: bose-einstein
  icon: "\U0001FAE7"
  relatedLabels: 量子力学、玻色子、超流、绝对零度、核退磁制冷、量子简并、原子激光、量子模拟、超导、液氦超流相变
visual:
  template: cryo-instrument
  scene: temperature.bose-einstein
  backdrop: quantum-cold
  caption: 玻色–爱因斯坦凝聚 · 冷原子阱
  note: 光学阱、冷原子云和相干波纹为示意，非按比例，也不是实验观测重建。
conditions: 1995 年 JILA 稀薄铷-87 原子气体、磁阱蒸发冷却实验的凝聚起始温度参考；临界温度随原子种类、密度和阱参数变化，不是所有物质的固定相变点。
uncertainty: 170 nK 是速度分布出现凝聚峰时的气体温度参考，由飞行时间成像与拟合得到；读数受阱频率、原子数和成像标定影响，并非精确固定点。
review:
  method: source-check
  date: '2026-11-08'
  notes:
    - >-
      NIST 2002 年回顾摘要明确“凝聚在 170 nK 开始、20 nK 时约 2000 个原子”；NIST 2001 新闻稿与
      Britannica 条目提供实验背景。
    - 正文按五节结构重写；保留 1.7e-7 K 与显示值，补 visual.template，区分临界温度与热平衡温度。
  originalQuantity:
    value: 1.e-7
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

玻色—爱因斯坦凝聚是稀薄玻色气体冷却到临界温度以下时，大量原子占据同一最低量子态的状态。1995 年，JILA 团队用铷原子气体首次实现这一状态。[2][3] 它不是原子化合成新元素，而是原子在空间中失去可分辨性，形成一个可用单一波函数描述的宏观量子体。

## 怎样测到或为何是有效温度

实验先用激光冷却和磁阱俘获原子，再用蒸发冷却让最热原子逃逸。[2] 温度降到约 170 nK 时，速度分布出现一个与热背景分离的尖锐峰，标志凝聚开始；继续冷却到约 20 nK，可得到约 2000 个原子的近纯凝聚体。[1] 这里的温度是原子气体的热力学温度，由飞行时间成像和速度分布拟合得到。

## 数值与口径

170 nK 等于 1.7 × 10⁻⁷ K，也等于 0.17 μK。凝聚的临界温度不是普适常数，而取决于原子种类、密度和阱参数；换一种气体或改变密度，转变温度就会变。[1][3] 因此 170 nK 只能标注为“该铷实验的起始参考”，不能写成“所有物质的凝聚点”。

## 常见误解

第一，把“超级原子”当成字面上的单个新原子；凝聚体仍由许多原子组成，只是量子态一致。第二，把 BEC 与超流等同；超流强调无耗散流动，BEC 强调量子态占据，二者可以相关但概念不同。第三，把 170 nK 当成温度下限；后续实验已把气体冷却到更低，且不同实验的转变温度各异。

## 与其他温区的关系

BEC 比液氦-4 的 2.17 K 超流转变低约七个量级，也比稀释制冷的 10 mK 低约五个量级。[1][3] 它与氦-3 的 2.444 mK 超流 A 点属于不同量子统计体系：前者是玻色气体，后者是费米液体配对。把它们排在同一条温度轴上时，必须保留“哪种系统、什么转变”的标签。
