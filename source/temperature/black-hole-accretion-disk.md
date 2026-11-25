---
id: temperature.black-hole-accretion-disk
title: 黑洞吸积盘热气体（模拟参考）
titleEn: 'Black-hole accretion disk gas: simulation reference'
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  广义相对论磁流体模拟显示，非旋转黑洞吸积盘内气体可靠近中心时达到约千万 K，
  盘上日冕则更热。本条只比较盘气体的量级，不把它当成黑洞本体温度，也不与日冕混用。
quantity:
  value: 10000000
  unit: K
  measure: 非旋转黑洞吸积盘气体温度量级
  measureLabel: 非旋转黑洞吸积盘气体温度量级
  approximate: true
displayValue: 约 10⁷ K（吸积盘模拟量级）
related:
  - space.sun
  - mass.sun
  - temperature.sun-core
  - temperature.neutron-star-surface
  - temperature.supernova
  - temperature.quark-gluon
reviewStatus: reviewed
sources:
  - title: NASA-Led Study Explains Decades of Black Hole Observations
    url: >-
      https://www.nasa.gov/universe/nasa-led-study-explains-decades-of-black-hole-observations/
    publisher: 'NASA Goddard, research-team report (2013)'
    accessed: '2026-11-06'
  - title: X-ray Spectra from MHD Simulations of Accreting Black Holes
    url: 'https://arxiv.org/abs/1207.2693'
    publisher: 'Schnittman, Krolik & Noble, ApJ 769 (2013)'
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: black-hole-accretion-disk
  icon: "\U0001F573"
  relatedLabels: 黑洞、X射线天文学、类星体、事件视界望远镜、吸积过程、广义相对论、主动星系核、天鹅座X-1、M87*、太阳核心
conditions: >-
  2013 年 Schnittman、Krolik 与 Noble 对非旋转黑洞的广义相对论磁流体模拟及辐射输运计算；
  对象为事件视界外吸积盘气体，不是黑洞本体或盘上日冕；盘气体非整体热平衡，取一位有效数字的量级。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 'NASA 报道给出盘气体约 1,200 万 °C、盘上日冕达数十亿度；arXiv 1207.2693 摘要给出非旋转黑洞磁流体与辐射输运模型。'
    - 本条取盘气体 10⁷ K 量级，不把日冕的 10⁹ K 或视界温度并入同一坐标。
  originalQuantity:
    value: 10000000
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: 10000000
      unit: K
      measure: 吸积盘高温量级示例
      approximate: true
      measureLabel: 吸积盘高温量级示例
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 10⁷ K 是按模拟值 1.2×10⁷ K 取一位有效数字的量级；盘内温度随半径、高度与吸积率变化，
  模拟还假定非旋转黑洞，不能当作某颗黑洞的实测温度或更高精度的拟合值。
visual:
  template: accretion-disk
  profile: disk
  caption: 非旋转黑洞吸积盘模拟
  note: >-
    量值对应模拟中的盘气体，不是黑洞本体或更热的盘上日冕；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#f5b790'
  symbol: Accretion disk
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

黑洞吸积盘是气体在黑洞引力下落时形成的扁平旋转结构。气体并非直接掉进视界，而是在盘内因磁流体湍流和黏性作用缓慢向内迁移，被压缩、加热并发出低能软 X 射线。[1] 这里讨论的对象是事件视界之外的盘气体，不是黑洞本体，也不是盘上方那层更稀薄的日冕。

## 怎样测到或为何是推断

吸积盘离我们极远，望远镜通常无法分辨其内部细节。研究者把广义相对论磁流体模拟与辐射输运计算结合，生成合成 X 射线谱，再与恒星质量黑洞的观测特征比较。[2] 2013 年的模拟采用非旋转黑洞，盘气体靠近中心时可达约 1,200 万摄氏度，盘上日冕则可达数十亿度。[1] 这些温度来自模型计算，不是对某一颗黑洞的直接温度计读数，因此必须把模拟条件一并说明。

## 数值与口径

本条采用约 10⁷ K 作为盘气体的量级坐标，对应模拟中的约 1.2×10⁷ K，只保留一位有效数字。它不是日冕的 10⁹ K 量级，也不是视界的霍金温度。盘气体并非整体热平衡：温度随半径、高度和吸积率变化，模拟还固定了黑洞不旋转、盘结构特定等前提。[1][2] 因此这个数字适合数量级比较，不适合当作精确的盘面温度分布。

## 常见误解

第一，把 10⁷ K 当成黑洞本体的温度；视界并不像普通物体那样有一个可直接测温的表面。第二，把盘气体与盘上日冕混为一谈；硬 X 射线主要来自更热的日冕。[1] 第三，把模拟量级当成某颗黑洞的实测峰值；它只说明这类盘气体可以达到千万开尔文量级。第四，把软 X 射线的“软”误当成温度低或肉眼可见；它仍然是高能辐射。

## 与其他温区的关系

10⁷ K 约为太阳核心 1.57×10⁷ K 的一半，远高于太阳表面 5,772 K，也高于中子星表面约 2×10⁶ K 的例子。它低于核心坍缩超新星的 10¹¹ K 量级，更远低于夸克—胶子等离子体约 1.8×10¹² K 的理论温标。比较时要注意，这些数值分别属于盘气体、恒星核心、坍缩核心和理论相变，并不是同一种测量对象。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
