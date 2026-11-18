---
id: temperature.earths-core
title: 内核边界压力下的纯铁熔化
titleEn: Pure-iron melting extrapolation at inner-core boundary pressure
dimension: temperature
category: 高温
summary: >-
  Anzellini 等 2013 年以高压实验测定铁的熔化行为，并外推至约 330 GPa 的内核边界压力， 得到 6,230±500
  K。它约束的是纯铁熔化曲线，不能直接当作整个地核的实测温度。
quantity:
  value: 6230
  unit: K
  measure: 330 GPa下纯铁熔化曲线的实验外推
  measureLabel: 330 GPa下纯铁熔化曲线的实验外推
  approximate: true
  uncertainty: 500
  uncertaintyType: 论文所报外推不确定度
displayValue: '约 6,230 ± 500 K（纯铁外推）'
related:
  - space.earth
  - temperature.iron-melting
  - temperature.tungsten-melting
  - temperature.lava-temperature
  - temperature.sun-core
reviewStatus: reviewed
sources:
  - title: >-
      Melting of iron at Earth’s inner core boundary based on fast X-ray
      diffraction
    url: 'https://pubmed.ncbi.nlm.nih.gov/23620049/'
    publisher: 'Anzellini et al., Science 340 (2013), author abstract'
    accessed: '2026-11-06'
  - title: What do we know about the interior of the Earth?
    url: >-
      https://www.usgs.gov/index.php/media/audio/what-do-we-know-about-interior-earth-0
    publisher: U.S. Geological Survey
    accessed: '2026-11-06'
  - title: Earth's core
    url: 'https://www.britannica.com/science/Earths-core'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: earths-core
  icon: "\U0001F30D"
  relatedLabels: 地核、地磁场、铁镍合金、板块构造、地震学、地球动力学、太阳表面、铁熔点、钨熔点、地球
conditions: >-
  静态激光加热金刚石压砧实验最高约200GPa，快速同步辐射X射线衍射识别熔化，再外推至内核边界约330GPa；
  对象为纯铁，不是已确定地核合金组成的直接测温。6230K为论文外推值，±500K为其所报不确定度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 PubMed 摘要：激光加热金刚石压砧最高约 200 GPa、快速 X 射线衍射、330 GPa 外推得到 6230±500 K。
    - 补核 USGS CoreFacts 与 Britannica Earth's core：地核以铁镍为主，外核液态、内核因高压固态。
    - 保留纯铁外推口径，不把该值写成整个地核的实测均温；原 5700 K 记录保留。
  originalQuantity:
    value: 5700
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: 6230
      unit: K
      measure: 内核边界压力下纯铁熔化温度推断
      approximate: true
      measureLabel: 内核边界压力下纯铁熔化温度推断
      uncertainty: 500
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '论文把 200 GPa 以下的实验熔化曲线外推到 330 GPa，报告 6,230±500 K；外推模型、温度标定、样品纯度和相变判据都会影响结果。'
visual:
  template: planet-environment
  profile: core
  caption: 330GPa纯铁熔化外推
  note: >-
    采用2013年实验向内核边界压力外推的纯铁熔化温度，不是整个地核实测均温；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#f0b77b'
  symbol: High-pressure iron
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

这里说的不是整个地核的温度，而是“纯铁在内核边界压力下熔化”的参考温度。地球内核是固体，外核是液体，两者边界约在 330 GPa、深度约 5,000 多千米。地核主要由铁和镍组成，含少量轻元素；内核因高压保持固态。[2][3]

## 怎样测到

Anzellini 等用激光加热金刚石压砧，把纯铁样品加压到最高约 200 GPa，并用同步辐射快速 X 射线衍射判断熔化。[1] 实验不能直接达到内核边界压力，研究把测得的熔化曲线外推到约 330 GPa，得到 6,230±500 K。[1] 这类实验用激光短暂加热，样品存在温度梯度，压力标定和相变识别都有不确定度。

## 数值与口径

6,230 K 等于约 5,956.85 °C。±500 K 是论文报告的外推不确定度，不是温度计的分度值。它对应纯铁、特定压力标定和外推模型；真实地核是铁镍合金并含轻元素，熔点会偏移。[1][3] 因此这个数字不能直接当作“地核实测温度”，也不能代表整个内核从边界到中心的温度分布。

## 常见误解

第一，把 6,230 K 当成地核任何位置都一样的温度；实际内核边界与中心压力不同，温度也不同。第二，把纯铁外推当成地核合金的直接测量；成分差异会改变熔化曲线。[1][3] 第三，把±500 K 当成统计误差而忽略系统误差；压力标定、激光加热的温度梯度和相变判据都可能带来偏移。第四，把地核温度与太阳表面直接等同；两者只是量级相近，物理机制完全不同。

## 与其他温区的关系

6,230 K 高于纯铁常压熔点 1,811 K，也高于钨熔点 3,687 K；这是压力把熔点显著抬高。它低于太阳核心的约 1.57×10⁷ K，但接近太阳表面的 5,772 K 量级。与 1,433 K 的基拉韦厄熔岩相比，内核边界高约四千多开尔文；不过地核的高温伴随极高压力，不能只按温度理解其状态。
