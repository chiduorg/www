---
id: temperature.neutron-star-core
title: 中子星核心（需指定冷却模型）
titleEn: Neutron-star core requires a specified cooling model
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  中子星核心是研究超密物质的场所。观测表面 X 射线随时间的变化，再结合大气、包层和冷却模型，
  可以约束内部热状态与超流性质；核心实际温度和超流临界温度必须分别说明。
quantity:
  value: null
  unit: K
  measure: 尚未指定对象时期与模型的核心温度
  measureLabel: 尚未指定对象时期与模型的核心温度
  approximate: true
  status: undetermined
displayValue: 需指定核心温度模型（仅阅读）
related:
  - temperature.neutron-star-surface
  - temperature.millisecond_pulsar
  - temperature.superfluid
  - temperature.quark-gluon
  - space.sun
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: >-
      Rapid Cooling of the Neutron Star in Cassiopeia A Triggered by Neutron
      Superfluidity in Dense Matter
    url: 'https://arxiv.org/abs/1011.6142'
    publisher: 'Page et al., Phys. Rev. Lett. 106 (2011)'
    accessed: '2026-11-06'
  - title: >-
      Cooling neutron star in the Cassiopeia A supernova remnant: Evidence for
      superfluidity in the core
    url: 'https://arxiv.org/abs/1012.0045'
    publisher: 'Shternin et al., MNRAS Letters 412 (2011)'
    accessed: '2026-11-06'
  - title: The Remarkable Properties of Neutron Stars
    url: 'https://chandra.harvard.edu/blog/node/432'
    publisher: NASA Chandra X-ray Center
    accessed: '2026-11-06'
legacy:
  id: neutron-star-core
  icon: "\U0001F30C"
  relatedLabels: 夸克物质、奇异物质、物态方程、强相互作用、量子色动力学、中子星表面、夸克-胶子等离子体、超新星爆发、引力波、色超导
conditions: >-
  本条不选定天体、年龄与冷却模型，因此不设核心温度数值；引用仙后座 A 冷却观测及其超流临界温度模型，
  临界温度不等于当前核心均温；核心处于非热平衡的冷却演化中，表面有效温度与内部模型温度须分开。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      Page 等与 Shternin 等分别用中子超流库珀对形成解释仙后座 A 的快速冷却，给出约 5×10⁸ K 与 (7–9)×10⁸ K
      的临界温度约束。
    - Chandra 综述说明中子星表面热 X 射线只能间接联系内部冷却；未指定天体与时刻时仍维持 null。
    - 2026-11-07 保留 needs-review：核心温度取决于状态方程与对象时期，模型间差异大，未选定唯一代表值。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：核心温度随质量、年龄、包层成分、物态方程与中微子冷却模型变化。'
  originalQuantity:
    value: 1000000000
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: null
      unit: K
      measure: 未指定对象与冷却模型的核心温度
      approximate: true
      measureLabel: 未指定对象与冷却模型的核心温度
      status: undetermined
    decision: needs-review
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  核心温度没有单一数值：它随天体质量、年龄、包层成分、物态方程和中微子冷却模型变化。 文献中的约 5×10⁸ K 与 (7–9)×10⁸ K
  是超流临界温度的模型约束，不是当前核心均温，不能直接填成单一温度数值。
visual:
  template: compact-star
  profile: core
  caption: 中子星核心与冷却模型
  note: >-
    核心结构、超流配对与中微子辐射均为模型示意，不是望远镜穿透星体得到的图像；画面非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#a9c7e8'
  symbol: Neutron-star core
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

中子星核心是恒星坍缩后留下的超密物质区域，半径约十几公里，密度可达核饱和密度的数倍。那里由中子、质子、电子以及可能的超导质子、超流中子和奇异粒子组成。核心温度决定中微子怎样带走能量，也影响星体在数百年到数万年尺度上的冷却。望远镜只能看到外层热 X 射线，不能穿透核心，因此“核心温度”需要模型才能回答。[1][2]

## 怎样测到或为何是推断

观测路径是从表面热 X 射线光谱出发，用碳大气或氢大气模型拟合出表面有效温度，再把不同年份的读数连成冷却曲线。仙后座 A 的中子星是一个关键例子：它的表面温度在约十年内明显下降。Page 等提出，核心中子进入 3P2 超流态后，库珀对的形成与破缺会增强中微子辐射，使冷却暂时加快；Shternin 等用独立观测确认下降趋势，并据此约束超流临界温度。[1][2] Chandra 的综述则把这类表面观测与内部冷却过程联系起来。[3] 链条依赖大气、包层、距离、年龄和中微子过程，任一环变化都会改变推断。

## 数值与口径

这里不指定天体、年龄和冷却模型，因此不给单一核心温度。文献中的约 5×10⁸ K 和 (7–9)×10⁸ K 是超流临界温度的不同模型约束，不是仙后座 A 当前核心的均匀温度，也不是所有中子星共有的值。核心还处于非热平衡的冷却演化中：温度随半径变化，内部可能同时存在超流、超导和普通核物质。把表面有效温度、引力红移修正后的温度与内部模型温度混在同一条曲线上，会制造并不存在的“统一核心温度”。[1][2][3]

## 常见误解

第一，把超流临界温度当成当前核心温度；临界温度只说明某种量子配对在什么温区出现，不等于星体现在的平均温度。第二，把表面温度当成核心温度；两者相差多个数量级，观测方式也不同。第三，把 10⁹ K 当作普适值；没有天体、年龄和模型，它无法对应任何具体对象。第四，把“超流”理解成普通液体流动；它指致密核物质的量子配对，与日常流体不同。[1]

## 与其他温区的关系

中子星核心的模型温度通常在 10⁸–10⁹ K 量级，高于表面约 2×10⁶ K 的例子。它低于核心坍缩超新星的 10¹¹ K 量级，更远低于夸克—胶子等离子体约 1.8×10¹² K 的理论温标。与毫秒脉冲星表面热区相比，核心温度不是同一层次的观测量。[2][3]
