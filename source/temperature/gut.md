---
id: temperature.gut
title: 大统一理论（需指定模型）
titleEn: Grand unification requires a specified model
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  大统一理论尝试以同一框架描述强相互作用与电弱相互作用。它把极高能量下的粒子物理与早期宇宙联系起来，
  也可通过质子衰变等后果接受检验；温度能标依赖具体模型，本条不设置统一数值。
quantity:
  value: null
  unit: K
  measure: 尚未选定大统一模型的温度能标
  measureLabel: 尚未选定大统一模型的温度能标
  approximate: true
  status: undetermined
displayValue: 需指定大统一模型（仅阅读）
related:
  - temperature.electroweak
  - temperature.planck-temperature
  - temperature.quark-gluon
  - space.gut-scale
  - time.grand-unification-epoch
  - temperature.compost-pile
reviewStatus: reviewed
sources:
  - title: Unified forces
    url: 'https://home.web.cern.ch/science/physics/unified-forces/'
    publisher: CERN
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
  - title: Physics — Grand unified theories and proton decay research
    url: 'https://www-sk.icrr.u-tokyo.ac.jp/en/hk/about/research/'
    publisher: 'Hyper-Kamiokande / Kamioka Observatory, ICRR, University of Tokyo'
    accessed: '2026-11-06'
  - title: 2022 CODATA complete fundamental constants listing
    url: 'https://physics.nist.gov/cuu/Constants/Table/allascii.txt'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
legacy:
  id: gut
  icon: "\U0001F517"
  relatedLabels: 大统一理论、规范场论、质子衰变、磁单极子、超对称、重子数不对称、宇宙暴胀、电弱统一相变、夸克-胶子等离子体、普朗克温度、超弦理论
conditions: 本条未选择具体大统一理论、耦合演化或热相变模型；旧教学示意温度不继续作为可比较物理点； 讨论的能标属于早期宇宙或高能外推的理论推断，不是加速器实测温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「大统一理论尝试以同一框架描述强相互作用与电弱相互作用。它把极高能量下的粒子物理与早期宇宙联系起来， 也可通过质子衰变等后果接受检验；温度能标依赖具体模型，本条不设置统一数值。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - CERN 说明大统一是极高能假说，所需能量远高于加速器，并可能通过质子衰变等低能后果检验。
    - CMS 教学时间线把大统一时期示意为约 10²⁷ K、10¹⁶ GeV；两者按玻尔兹曼常数严格换算相差约两个数量级，正文已说明这是数量级示意而非等值换算。Hyper-K 以质子衰变搜寻检验大统一，但尚无发现。
    - 2026-11-07 保留 needs-review：大统一为极高能假说，温度能标取决于所选模型，无统一核定值。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：大统一能标没有唯一值，常见模型约 10^16 GeV，但存在 10^15 GeV 或更高能标变体。'
  originalQuantity:
    value: 1e+27
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: 1e+27
      unit: K
      measure: 大统一假说的示意温度量级
      approximate: true
      measureLabel: 大统一假说的示意温度量级
    decision: needs-review
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  大统一能标没有唯一值：常见模型讨论 10¹⁶ GeV 附近，但也存在 10¹⁵ GeV 或更高能标的变体；
  质子寿命、耦合统一和低能实验约束都会改变模型。10²⁷ K 是教学时间线的常见示意值，10¹⁶ GeV 严格换算约为 10²⁹ K，二者都不是测量结果。
visual:
  template: reaction-field
  profile: gut
  caption: 大统一能标示意
  note: >-
    统一耦合、质子衰变与早期宇宙能标均为理论示意，不是实验图像；画面非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: extreme
  color: '#a99be8'
  symbol: Grand unification
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

大统一理论试图把强相互作用与电弱相互作用放进同一个规范理论框架。它不包含引力，也不表示日常世界中的这几种力已经无法区分；它描述的是一种极高能标下耦合强度可能汇合的情形。[1] 这里的温度指这种统一状态可能出现的早期宇宙能标，而不是加速器已达到的温度；具体能标和对称破缺方式依赖所选模型。

## 怎样测到或为何是推断

目前没有加速器能直接达到大统一能标。研究者通过三条路径间接检验：一是把标准模型的耦合强度随能量演化外推，看它们是否在高能处汇合；二是搜寻质子衰变等低能后果；三是用早期宇宙的热史和原初涨落约束相关模型。[1] Hyper-Kamiokande 计划用大型水切伦科夫探测器寻找极稀少的质子衰变事例，这是检验某些大统一模型的直接途径，但迄今没有确认发现。[3] 一些科普时间线把大统一时期标在约 10²⁷ K 或 10¹⁶ GeV 的能标（两者按玻尔兹曼常数严格换算并不完全对应），这属于理论外推和科普示意，不是观测数据。[2] 把 GeV 换成 K 还需要 NIST 的玻尔兹曼常数。[4]

## 数值与口径

这里不选定具体大统一模型，也没有指定“统一”的判据，因此不给单一温度。常见模型讨论 10¹⁶ GeV 附近的能标，按 k_BT 换算约为 10²⁹ K（科普时间线常写 10²⁷ K，属数量级示意），但这不是唯一值：不同规范群、耦合演化和阈值修正会给出不同结果，有些模型甚至可以更低或更高。教学时间线上的 10²⁷ K 只能帮助建立数量级印象，不能当成实测温度或已证明的宇宙最高温。[2][3] 把它写成“大统一温度”时，必须同时说明模型和所用判据。

## 常见误解

第一，把大统一当成已经统一了所有四种基本力；标准大统一通常不含引力，引力的统一是更进一步且更未经验证的设想。[1] 第二，把 10²⁷ K 当成实测温度；它来自理论外推和教学示意。第三，把质子衰变当成已经发现；目前的搜寻只给出寿命下限。第四，把大统一能标与电弱能标混同；两者相差十几个数量级，物理过渡也不同。[3]

## 与其他温区的关系

大统一能标远高于电弱过渡的 1.85×10¹⁵ K，也远高于夸克—胶子等离子体的 1.82×10¹² K。它低于普朗克温度的 1.4×10³² K，但两者都属于极端理论外推，不能排成一条已测得的温度序列。与核心坍缩超新星和中子星表面相比，大统一能标高出更多个数量级；这些比较只用于数量级定位，不表示同一时刻或同一对象。[2][4]
