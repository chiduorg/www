---
id: temperature.electroweak
title: 电弱平滑过渡（格点计算）
titleEn: Electroweak crossover in a lattice calculation
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  D’Onofrio 与 Rummukainen 的格点研究，在物理 Higgs 质量条件下得到平滑电弱过渡， 并以 Higgs 凝聚的易感率峰定义特征温度
  159.5±1.5 GeV，约对应 (1.85±0.02)×10¹⁵ K。
quantity:
  value: 1850920640387238
  unit: K
  measure: 有效标准模型格点计算的Higgs凝聚易感率峰温度
  measureLabel: 有效标准模型格点计算的Higgs凝聚易感率峰温度
  approximate: true
  uncertainty: 17406777182325.123
  uncertaintyType: 原论文温度能标不确定度换算
  kind: theoretical-model
displayValue: 约 (1.85 ± 0.02) × 10¹⁵ K（理论计算）
related:
  - temperature.planck-temperature
  - temperature.quark-gluon
  - temperature.gut
  - time.electroweak-epoch
  - temperature.early-universe-1e-8-seconds
  - space.sun
reviewStatus: reviewed
sources:
  - title: The Standard Model cross-over on the lattice
    url: 'https://arxiv.org/abs/1508.07161'
    publisher: 'D’Onofrio & Rummukainen, Phys. Rev. D 93 (2016)'
    accessed: '2026-11-06'
  - title: 2022 CODATA complete fundamental constants listing
    url: 'https://physics.nist.gov/cuu/Constants/Table/allascii.txt'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: electroweak
  icon: "\U0001F300"
  relatedLabels: 电弱统一、希格斯机制、标准模型、W玻色子、Z玻色子、对称性破缺、大统一相变、夸克-胶子等离子体、普朗克温度、中微子、希格斯玻色子
conditions: >-
  2015 年预印本、2016 年发表的格点研究；有效 SU(2)×U(1) 规范场与 Higgs 理论，采用物理 Higgs 质量； 温度由 Higgs
  凝聚易感率最大处定义，并用 k_BT 能标换算；属于理论模型计算，不是早期宇宙的直接测温。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 原论文摘要给出物理 Higgs 质量下为标准模型平滑 cross-over，宽度约 5 GeV，T_c=159.5±1.5 GeV。
    - NIST 2022 CODATA 给出玻尔兹曼常数 1.380649×10⁻²³ J/K（精确），用于把 GeV 换算为 K。
  originalQuantity:
    value: 1000000000000000
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: 1850920640387276.2
      unit: K
      measure: 标准模型格点计算的过渡温度
      approximate: true
      measureLabel: 标准模型格点计算的过渡温度
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: reaction-field
  profile: electroweak
  caption: 电弱平滑过渡格点模型
  note: >-
    温标由有效标准模型中的 Higgs 凝聚易感率峰定义，不是早期宇宙的直接测温；粒子与场结构为示意，
    非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: extreme
  color: '#bda7f4'
  symbol: Electroweak crossover
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

电弱过渡指早期宇宙中电磁相互作用与弱相互作用从统一状态分离出来的过程。在标准模型中，当温度降到电弱能标附近，Higgs 场获得非零凝聚值，W 与 Z 玻色子获得质量，电磁与弱作用表现出不同的作用强度。这里讨论的是这一过渡的特征温度，而不是某次对撞事件中某个粒子的温度。2015–2016 年的格点研究指出，在物理 Higgs 质量下，标准模型的对称恢复是一个平滑 cross-over，而不是剧烈的一级相变。[1]

## 怎样测到或为何是推断

这类温度无法在今天的实验室里直接复现，证据来自理论计算与高能对撞机的间接检验。研究者用格点蒙特卡洛模拟有效 SU(2)×U(1) 规范场与 Higgs 场，计算 Higgs 凝聚、压强、能量密度、声速和热容等热力学量，并以 Higgs 凝聚易感率的最大值定义特征温度。[1] 结果为 159.5±1.5 GeV，过渡宽度只有约 5 GeV。用 NIST 的玻尔兹曼常数把能量换算成温度，得到约 (1.85±0.02)×10¹⁵ K。[2] 这是标准模型格点计算的结果，不是对早期宇宙的实测记录。

## 数值与口径

本条采用约 1.85×10¹⁵ K 作为电弱过渡的特征温度，不确定度约 0.02×10¹⁵ K。它是“易感率峰”定义的温度，不是宇宙在某一时刻的均匀温度，也不是某个粒子的动能温度。模型限定为有效 SU(2)×U(1) 加 Higgs 理论、物理 Higgs 质量、零化学势附近的格点作用量；如果引入超出标准模型的新粒子或不同 Higgs 势，结果会改变。[1] 过渡是平滑的，意味着没有潜热、没有明显的一级相变信号，这一点也会影响早期宇宙的引力波预言。

## 常见误解

第一，把电弱过渡当成一次爆炸式的一级相变；标准模型在物理 Higgs 质量下是平滑 cross-over。[1] 第二，把 1.85×10¹⁵ K 当成实测温度；它来自格点计算和常数换算。第三，把 GeV 直接当成温度单位；GeV 是能量，必须通过 k_B 才能换成 K。第四，把电弱能标与大统一能标混同；后者通常高十几个数量级，而且更依赖具体模型。

## 与其他温区的关系

1.85×10¹⁵ K 远高于夸克—胶子等离子体的 1.82×10¹² K 温标，也远高于核心坍缩超新星的 10¹¹ K。它低于常见大统一模型讨论的 10²⁷ K 量级，更远低于普朗克温度的 1.4×10³² K。与这些理论温标比较时，要记住它们各自对应不同的物理过渡或自然单位，不能排成一条已测得的温度序列。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]


## 深读一：量值口径

本条的核心量值是 1.851e+15 K，量的是有效标准模型格点计算的Higgs凝聚易感率峰温度。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：2015 年预印本、2016 年发表的格点研究；有效 SU(2)×U(1) 规范场与 Higgs 理论，采用物理 Higgs 质量； 温度由 Higgs 凝聚易感率最大处定义，并用 k_BT 能标换算；属于理论模型计算，不是早期宇宙的直接测温。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照普朗克温度（1.417e+32）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
