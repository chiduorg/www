---
id: temperature.carbon-fusion
title: 碳聚变
titleEn: Carbon burning core temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  碳聚变指恒星核心把碳核进一步聚合成更重元素的过程，通常要接近 0.6–0.8 GK。 NASA 的教学表把碳燃烧阶段写在约 0.8 GK；本条目沿用 0.7
  GK 作区间锚点， 但这是核心模型温度，不是整颗恒星的温度，也不是所有恒星都能到达的阶段。
quantity:
  value: 700000000
  unit: K
  measure: 大质量恒星碳燃烧核心温度参考
  approximate: true
  measureLabel: 大质量恒星碳燃烧核心温度参考
  uncertainty: 100000000
  uncertaintyType: 起始温度区间与模型差异
  range:
    min: 600000000
    max: 800000000
    unit: K
displayValue: 约 0.6–0.8 GK（起始温标参考）
related:
  - temperature.red-giant-core
  - temperature.oxygen-fusion
  - temperature.silicon-burning
  - temperature.sun-core
  - temperature.supernova
reviewStatus: reviewed
sources:
  - title: 'A new 12C + 12C nuclear reaction rate: impact on stellar evolution'
    url: 'https://eprints.whiterose.ac.uk/id/eprint/187718/1/aa41858_21.pdf'
    publisher: >-
      Monpribat et al. (2022), Astronomy & Astrophysics / White Rose Research
      Online
    accessed: '2026-11-06'
  - title: What is Your Cosmic Connection to the Elements?
    url: 'https://imagine.gsfc.nasa.gov/educators/elements/imagine/05.html'
    publisher: NASA Goddard Space Flight Center
    accessed: '2026-11-06'
  - title: Origin of the Chemical Elements
    url: 'https://ned.ipac.caltech.edu/level5/Sept16/Rauscher/Rauscher4.html'
    publisher: 'T. Rauscher and A. Patkos, NASA/IPAC NED'
    accessed: '2026-11-06'
legacy:
  id: carbon-fusion
  icon: "\U0001F525"
  relatedLabels: 核聚变、恒星演化、碳燃烧、氧聚变、硅燃烧、超新星爆发、红巨星核心、氦燃烧、核合成
conditions: >-
  对象为大质量恒星（通常约 8 倍太阳质量以上）核心的碳燃烧阶段；温度指中心区域的模型温度， 常用起始范围约 0.6–0.8 GK，NASA 教学表给出约
  0.8 GK。它不是整颗恒星的温度，也不是光球有效温度； 实际阈值随密度、电子屏蔽、对流传能和金属丰度变化，并非所有恒星都会走到这一阶段。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 White Rose 论文：碳燃烧通常需要约 0.6–0.8 GK 的中心温度，反应率变化会影响恒星演化。
    - 核对 NASA 教学表：碳燃烧阶段约 0.8 GK，氧约 2.0 GK、硅约 3.3 GK，说明逐级升温。
    - NED 章节把碳、氧、硅燃烧列为大质量恒星高级燃烧阶段；保留原 0.7 GK 锚点与 0.6–0.8 GK range。
  originalQuantity:
    value: 500000000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 0.6–0.8 GK 是中心温度的量级范围，半宽约 0.1 GK；密度、屏蔽、对流和模型会影响点火条件，0.7 GK 不是精确阈值。
visual:
  template: reaction-field
  profile: carbon-core
  caption: 碳燃烧核心
  note: >-
    核心燃料层与反应颗粒是示意，不能按画面判断真实密度或温度；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#f3c24f'
  symbol: C
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

碳聚变是恒星核心在氦燃烧之后把碳进一步聚合为氖、镁、钠等元素的阶段，属于大质量恒星的高级燃烧之一。[2][3] 这里的温度是核心中心区域的模型温度，不是恒星表面温度，也不是整颗星的平均温度；在洋葱状结构中，碳燃烧只发生在特定的核心壳层。[2]

## 怎样测到

恒星核心无法直接看到，温度主要来自恒星演化模型：把密度、成分、核反应率和对流混合输入方程，计算给定质量恒星在各阶段的中心温度。[1] 实验室核物理测量提供碳—碳反应率，反应率的不确定性会改变点火温度与演化时间。[1] NASA 的教学表把碳燃烧阶段列在约 0.8 GK，并把它与氧、硅阶段排成逐级升温的序列。[2]

## 数值与口径

0.7 GK 是 0.6–0.8 GK 区间的锚点，属于模型量级；它不是实测的核心温度，而是模型给出的量级。[1][3] NASA 表中的 0.8 GK 是该阶段的一个常用代表值，不代表所有质量、所有金属丰度的恒星都在同一温度点火；密度越高，所需温度可略低，电子屏蔽也会改变反应率。[1][2]

## 常见误解

第一，把“燃烧”理解成化学燃烧；这里是核聚变，产物与能量来源都不同。第二，把 0.7 GK 当成整颗恒星的温度；核心可达数亿开，表面却只有几千到几万开。[2] 第三，认为所有恒星都会经历碳燃烧；低质量恒星无法达到这一核心温度，会停在氦燃烧或白矮星阶段。[3]

## 与其他温区的关系

0.7 GK 高于氦燃烧的约 0.1 GK，低于氧燃烧的约 2 GK 和硅燃烧的约 3 GK，是逐级核燃烧链条中的中间一环。它远高于太阳核心的约 15 MK，也远高于任何恒星表面温度；比较这些数字时，必须明确它们分别属于核心、光球还是日冕。[1][2]
