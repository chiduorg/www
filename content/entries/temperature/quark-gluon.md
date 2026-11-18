---
id: temperature.quark-gluon
title: 夸克胶子等离子体与QCD过渡
titleEn: QCD chiral crossover reference
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  格点 QCD 研究给出特定条件下约 156.5 MeV 的手征过渡温标，约合 1.82 万亿 K。
  这个理论参考与实验中具体碰撞火球的初始温度、寿命和空间分布需要分别说明。
quantity:
  value: 1816107086022.6252
  unit: K
  measure: 零化学势QCD手征过渡计算温标
  approximate: true
  measureLabel: 零化学势QCD手征过渡计算温标
  uncertainty: 17406777182.32548
displayValue: 约 1.82 × 10¹² K（156.5 MeV，模型参考）
related:
  - temperature.electroweak
  - temperature.neutron-star-core
  - temperature.gut
  - temperature.planck-temperature
  - temperature.early-universe-1e-4-seconds
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: Chiral crossover in QCD at zero and non-zero chemical potentials
    url: 'https://arxiv.org/abs/1812.08235'
    publisher: 'Bazavov et al., Phys. Lett. B 795 (2019)'
    accessed: '2026-11-06'
  - title: '2022 CODATA constants: complete listing'
    url: 'https://physics.nist.gov/cuu/Constants/Table/allascii.txt'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: Heavy ions and quark-gluon plasma
    url: 'https://home.cern/science/physics/heavy-ions-and-quark-gluon-plasma'
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: quark-gluon
  icon: "\U0001F52E"
  relatedLabels: 夸克禁闭、强相互作用、量子色动力学、重离子碰撞、LHC、宇宙早期、中子星核心、大统一相变、电弱统一相变、渐近自由、夸克
conditions: >-
  Bazavov 等格点 QCD 结果在零化学势下 T_c=156.5±1.5 MeV；用 k_BT 换算； 对象为零化学势格点模型的手征
  cross-over 温标，不是每场重离子碰撞火球的实际最高温度； 重离子火球接近局部热平衡，但其演化需另由动力学与观测约束。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 原论文摘要给出零化学势 T_c(0)=156.5±1.5 MeV，并说明手征 cross-over 与化学冻结附近的热力学条件。
    - CERN 重离子页面说明 LHC 通过铅核碰撞制造夸克—胶子等离子体，并观测喷注淬火；这是火球存在的证据，不直接给出本条温标。
  originalQuantity:
    value: 2000000000000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  1.82×10¹² K 由 156.5±1.5 MeV 换算而来，不确定度约 1.74×10¹⁰ K；它依赖零化学势、格点作用量、 物理夸克质量和
  continuum extrapolation 等模型选择，不能当作碰撞火球的实测温度。
visual:
  template: reaction-field
  profile: qcd
  caption: 量子色动力学交叉过渡
  note: >-
    温度来自零化学势格点 QCD 的交叉过渡计算，不是所有重离子碰撞的唯一温度；粒子与色荷为示意，
    非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: extreme
  color: '#bfabec'
  symbol: QCD crossover
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

夸克胶子等离子体是夸克和胶子不再被囚禁在强子内部、可以在较大体积内自由运动的物质相。它被认为存在于早期宇宙和重离子碰撞的火球中。这里讨论的温度对象是量子色动力学的手征 cross-over 温标：当温度升到这一量级，夸克凝聚和手征对称性发生平滑改变。[1] 它不是某一次碰撞的最高温度，也不是一个已经测得的普适常数，而是格点 QCD 在特定条件下计算出的特征温标。

## 怎样测到或为何是推断

格点 QCD 把时空离散化，用蒙特卡洛方法计算有限温度下的热力学量。Bazavov 等在零化学势下得到手征 cross-over 的伪临界温度 T_c=156.5±1.5 MeV，并给出非零化学势下的展开系数。[1] 用 NIST 的玻尔兹曼常数把 MeV 换成 K，得到约 1.82×10¹² K。[2] 另一方面，CERN 的重离子碰撞把铅核加速到极高能量，产生短暂的火球；喷注淬火等观测支持火球中形成了夸克胶子等离子体。[3] 但火球的初始温度、寿命和空间分布要靠动力学模型与多种观测量联合推断，不能直接等同于格点计算的 cross-over 温标。

## 数值与口径

本条采用约 1.82×10¹² K 作为零化学势 QCD 手征 cross-over 的理论温标，不确定度约 1.74×10¹⁰ K。它是“伪临界”温度，因为手征过渡是平滑的，没有唯一相变点；不同定义（手征易感率、Polyakov 圈等）会给出略有差异的值。模型限定为零化学势、物理夸克质量、特定格点作用量和连续极限外推。[1] 重离子火球则处于快速膨胀、接近局部热平衡的状态，其最高温度通常高于 cross-over 温标，且随碰撞能量变化。把两者混为一个数字，会忽略对象和观测方式。

## 常见误解

第一，把 1.82×10¹² K 当成对撞机中实测到的温度；它是格点计算的特征温标，火球温度需另由模型与数据推断。[3] 第二，把夸克胶子等离子体当成普通气体；它表现出接近完美流体的低黏性行为。第三，把 cross-over 当成一级相变；标准 QCD 在零化学势附近是平滑过渡，没有明显的潜热。第四，把 cross-over 温标当成火球初温；后者通常更高，而且随碰撞能量和系统尺寸变化。[1][2]

## 与其他温区的关系

1.82×10¹² K 高于核心坍缩超新星的 10¹¹ K 量级，也高于中子星核心的 10⁸–10⁹ K 模型温区。它低于电弱过渡的 1.85×10¹⁵ K，更低于大统一能标与普朗克温度。与超新星核心相比，两者都属于致密高温物质，但一个由引力坍缩驱动，一个由重离子碰撞或早期宇宙加热驱动，不能仅凭温度判断物态相同。[1][3]
