---
id: space.strong-force
title: 强相互作用与作用尺度
titleEn: Strong Force Range
dimension: length
category: 原子与分子
summary: >-
  强相互作用既联系夸克与胶子的动力学，也在原子核层级表现为核子间的剩余作用。讨论它的“范围”之前，需要说明研究对象、能量条件及模型，不能寻找一个统一硬截止半径。
quantity:
  value: null
  unit: m
  measure: 未限定过程与作用定义的强相互作用长度
  approximate: true
  status: undetermined
displayValue: 比较长度未定（需区分夸克作用与剩余核力）
related:
  - space.proton
  - space.pion
  - space.gluon-field
  - space.uranium-nucleus
  - space.quark
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: strong force
    url: 'https://www.britannica.com/science/strong-force'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: DOE Explains…The Strong Force
    url: 'https://www.energy.gov/science/doe-explainsthe-strong-force'
    publisher: U.S. Department of Energy / Office of Science
    accessed: '2026-11-06'
  - title: quantum chromodynamics
    url: 'https://www.britannica.com/science/quantum-chromodynamics'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Nuclear Charge Radii
    url: 'https://www-nds.iaea.org/radii/'
    publisher: IAEA Nuclear Data Services / Angeli & Marinova
    accessed: '2026-11-06'
legacy:
  id: strong-force
  icon: "\U0001F4AA"
  relatedLabels: 量子色动力学、胶子、色禁闭、渐近自由、格点QCD、核力、中子星、夸克物质
conditions: 只作概念与数量级比较；没有单一硬截止半径，需指定过程、模型和“范围”的定义，不能用一个旧数值概括夸克作用与核子间剩余作用。
uncertainty: >-
  本条不给出单一数值，因为“力程”依赖定义：Britannica以约10⁻¹⁵米、接近质子直径描述短程作用，DOE以约10⁻⁵原子直径作数量级说明；两者都不是可重复的硬截止测量。value保持null。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「强相互作用既联系夸克与胶子的动力学，也在原子核层级表现为核子间的剩余作用。讨论它的“范围”之前，需要说明研究对象、能量条件及模型，不能寻找一个统一硬截止半径。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 本轮按五节结构重写；用WebFetch打开Britannica强作用与量子色动力学页、DOE强作用页，核对层级、传递粒子与数量级表述。
    - 用IAEA核电荷半径表核对核子、碳-12与铀-238的比较数值。
    - 保留未定值：所引资料只给数量级或不同判据，不能据此建立统一力程；审稿状态继续标为needs-review。
    - 2026-11-07 保留 needs-review：相互作用长度口径未定义：未限定过程（束缚态、散射或有效力程）与定义方式。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：“力程”依赖定义：夸克间作用与核子间剩余核力不是同一个长度，资料只给数量级。'
  originalQuantity:
    value: 1.e-16
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: field
  scene: space.proton
  caption: 强相互作用 · 质子尺度的场示意
  note: 场线与发光区域为示意，表示相互作用范围的概念图，非按比例，非观测重建；不代表胶子或核力的真实边界。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 未定量值
---
## 它是什么

强相互作用是标准模型描述的基本相互作用之一，源自信号“色”，由胶子传递。[1][3] 在夸克层级，它把夸克束缚成质子和中子；在核子层级，它的剩余效应又把质子和中子结合成原子核。[1][2] 两个层级都叫“强”，但研究对象、有效描述和所量的物理量并不相同，不能只把不同对象都称作一团核物质。

## 怎样知道

加速器实验通过深度非弹性散射、喷注和强子产生来检验量子色动力学，格点计算则从理论一侧给出强子结构。[3] Britannica 把强作用的短程范围概括为约 10⁻¹⁵ 米，接近质子或中子的直径；DOE 则说它约比电磁作用强 100 倍，作用距离约比原子直径小 10⁵ 倍。[1][2] 这些都是数量级描述，不是某台仪器读出的硬截止。

## 数值与口径

本条 quantity.value 保持 null，因为没有一个同时适用于夸克禁闭和核子间剩余作用的“力程”。夸克禁闭没有锐利边界；核子—核子作用常用势模型描述，其吸引部分的特征长度常与 π 介子交换相联系；不同模型给出的等效范围可以接近，却不等于同一个定义。[1][3] 把原子核半径直接当作强作用力程，也是把两类量混在一起。

## 常见误解

把强作用画成连接所有核子的同一根弹簧，会误导人以为力在跨过某个距离后突然归零。实际上，夸克间距增大时作用增强，直到能量足以产生新的夸克—反夸克对；在更短距离上反而出现渐近自由。[3] “强 100 倍”也只是质子尺度附近的比较，不能推广为任意距离上的固定倍率。[2]

## 与其他尺度的关系

在尺度轴上，核子电荷半径约 0.84 飞米，碳-12 核约 2.47 飞米，铀-238 核约 5.86 飞米，而原子整体约 0.1 纳米。[4] 强作用的数量级范围与原子核尺寸相近，但“作用范围”“核半径”和“核直径”仍是不同口径；阅读时应先问清楚所比较的是哪一种长度。
