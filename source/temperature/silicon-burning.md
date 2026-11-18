---
id: temperature.silicon-burning
title: 硅燃烧
titleEn: Silicon burning quasi-equilibrium temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  硅燃烧是恒星核心走向铁峰元素前的最后核燃烧阶段。Hix 与 Thielemann 指出， 爆炸硅燃烧在约 3 GK 以上进入准平衡；NASA
  教学表把硅阶段列在约 3.3 GK， 而 NED 章节把硅燃烧开始写在约 5 GK。本条目采用约 3 × 10⁹ K 作量级参考， 并分别说明这些口径。
quantity:
  value: 3000000000
  unit: K
  measure: 硅燃烧准平衡温度量级参考
  approximate: true
  measureLabel: 硅燃烧准平衡温度量级参考
  uncertainty: 500000000
  uncertaintyType: 准平衡阈值与点火口径差异
displayValue: 约 3 × 10⁹ K（模型量级）
related:
  - temperature.oxygen-fusion
  - temperature.carbon-fusion
  - temperature.supernova
  - temperature.red-giant-core
  - temperature.sun-core
reviewStatus: reviewed
sources:
  - title: 'Silicon Burning II: Quasi-Equilibrium and Explosive Burning'
    url: 'https://arxiv.org/abs/astro-ph/9808203'
    publisher: 'Hix and Thielemann (1998), ApJ preprint'
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
  id: silicon-burning
  icon: "\U0001F525"
  relatedLabels: 硅燃烧、氧聚变、超新星、核合成、铁峰元素、大质量恒星、核心坍缩、准平衡、光致蜕变、中子星
conditions: >-
  对象为大质量恒星核心的硅燃烧/准平衡阶段；温度指核心中心区域的模型温度。 Hix 与 Thielemann 的判据是爆炸硅燃烧在约 3 GK
  以上进入准平衡；NASA 教学表列约 3.3 GK； NED 章节把硅燃烧开始写作约 5 GK。三者分别对应准平衡阈值、教学阶段代表值与完全硅燃烧口径，
  不能当成同一个精确点火温度，也不是整颗恒星温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 arXiv 摘要：爆炸硅燃烧在约 3 GK 以上，重要丰度遵循准平衡；论文讨论不完全燃烧、正常冻结与 α 富冻结。
    - 核对 NASA 教学表：硅阶段约 3.3 GK，主要产物为铁峰元素，持续时间约 0.01 年。
    - 核对 NED 章节：硅燃烧在约 5 × 10⁹ K 开始，伴随 28Si 的光致蜕变；正文据此区分三种口径。
  originalQuantity:
    value: 3000000000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 3 × 10⁹ K 是准平衡量级参考，约 ±0.5 GK 的差异来自“准平衡阈值/阶段代表值/完全燃烧开始”三种口径；不能当作精确点火温度。
visual:
  template: reaction-field
  profile: silicon-core
  caption: 硅燃烧核心
  note: >-
    铁峰元素与光致蜕变过程为示意，不代表单一温度下的均匀反应；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#e8d16b'
  symbol: Si
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

硅燃烧是大质量恒星核心在氧燃烧之后的最后阶段，核心继续升温，硅等元素通过聚变与光致蜕变走向铁峰元素。[2][3] 这里的温度是核心中心区域的模型温度，不是整颗恒星的温度；在洋葱结构中，硅燃烧发生在最内层，外层仍是更轻元素的燃烧壳层。[2]

## 怎样测到

核心温度由恒星演化与核合成模型给出：输入密度、温度、成分和核反应率，计算准平衡状态下的元素丰度。[1][2] Hix 与 Thielemann 研究爆炸硅燃烧，发现温度高于约 3 GK 时，重要丰度可用准平衡描述；NASA 的教学表把硅阶段列在约 3.3 GK；NED 的章节则把硅燃烧开始写成约 5 × 10⁹ K。[1][2][3]

## 数值与口径

这三个数字不是互相矛盾，而是口径不同：约 3 GK 是准平衡判据的起点，约 3.3 GK 是教学表中的阶段代表值，约 5 GK 是更完全的硅燃烧/光致蜕变阶段。这里取约 3 × 10⁹ K 作量级参考，不把它写成精确点火温度。[1][2][3] 实际阈值还随密度、电子丰度和燃烧是静水还是爆炸而变。

## 常见误解

第一，把硅燃烧理解成硅核简单相加；高温下光致蜕变与聚变同时起作用，产物分布由准平衡决定。[1] 第二，把 3 GK 当成所有硅燃烧都必须达到的精确温度；不同口径与不同模型给出不同数值。[1][3] 第三，认为硅燃烧会一直释放能量到铁以后；铁峰之后继续聚变不再净放能，核心将走向坍缩。[2]

## 与其他温区的关系

3 × 10⁹ K 高于氧燃烧的约 2 GK、碳燃烧的约 0.7 GK，也远高于太阳核心的约 15 MK；它低于某些完全硅燃烧口径的约 5 GK。它属于恒星核心的最热阶段之一，与光球、色球和日冕的几千到百万开完全不在同一区域；比较时必须标明“核心模型值”。[2][3]
