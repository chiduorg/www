---
id: space.gluon-field
title: 胶子场禁闭尺度
titleEn: Gluon Field Confinement Scale
dimension: length
category: 量子与粒子
summary: 胶子让夸克之间的强相互作用成为可能，也参与了强子内部复杂的动力学。所谓禁闭尺度需要结合过程和能标理解，不能把它想成包住每个粒子的固定小壳。
quantity:
  value: null
  unit: m
  measure: 尚未选定可验证定义的胶子禁闭比较长度
  approximate: true
  status: undetermined
displayValue: 比较长度未定（需指定理论口径）
related:
  - space.quark
  - space.proton
  - space.strong-force
  - temperature.quark-gluon
reviewStatus: reviewed
sources:
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-06'
  - title: gluon
    url: 'https://www.britannica.com/science/gluon'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: strong force
    url: 'https://www.britannica.com/science/strong-force'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: gluon-field
  icon: "\U0001F535"
  relatedLabels: 夸克、强相互作用、量子色动力学、渐进自由、夸克-胶子等离子体、W/Z玻色子
conditions: 本条讨论强子内部与喷注过程的禁闭尺度；旧5×10⁻¹⁸米没有保留为可比较结论，引用时必须说明观测量与能标。
uncertainty: 禁闭不是单一尺度的测量对象；Λ≈200 MeV及ħc/Λ≈1飞米是常用约定，随方案与能标改变，不能给出一个固定直径的误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「胶子让夸克之间的强相互作用成为可能，也参与了强子内部复杂的动力学。所谓禁闭尺度需要结合过程和能标理解，不能把它想成包住每个粒子的固定小壳。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 本轮按五节结构重写；用WebFetch核对CERN标准模型与Britannica胶子、强作用页面，确认胶子自相互作用与约10⁻¹⁵米的强作用范围。
    - 禁闭尺度只作约定说明，不把旧占位值或喷注宽度当成胶子直径。
  originalQuantity:
    value: 5.e-18
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: field
  variant: confinement
  color: '#7aa6c9'
  referenceAxis: x
  caption: 强子内部的胶子场示意
  note: 色线、结点与点云为示意，非按比例，非观测重建；不代表胶子或强子的实体边界。
  framePadding: 0.3
  sourceMeasure: 强作用范围与QCD标度换算的约定长度
  scene: space.object
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
  - 未定量值
---
## 胶子场是什么

胶子是强相互作用的传递粒子，与夸克一起构成量子色动力学（QCD）的描述。它携带有色荷，因此不仅能与夸克相互作用，也能与其他胶子相互作用；这与不带电荷的光子不同。QCD 共有八种胶子，对应不同的色—反色组合。[1][2]

## 为什么“禁闭尺度”需要定义

QCD 的预言已被大量散射与喷注数据检验，1979 年 DESY 的电子—正电子碰撞中出现三喷注事件，被解释为夸克辐射胶子，成为胶子存在的关键证据。[2] 但禁闭本身不是一个可以直接量出的球壳。通常条件下夸克与胶子被束缚在强子中；高能碰撞中部分子经历辐射与强子化，探测器看到的是末态强子与喷注。[3] 所谓禁闭尺度，必须说明用的是哪种观测量、哪个能标和哪种定义。[1][3]

## 数值与口径

强作用的有效范围约 10⁻¹⁵ 米，接近质子直径；在这个范围内，夸克间距增大时作用变强，直到产生新的夸克—反夸克对。[3] 若取 QCD 标度 Λ≈200 MeV，按 ħc/Λ 换算约 1 飞米；这是常用约定，不是胶子的实体直径。[1] 旧条目中的 5×10⁻¹⁸ 米没有对应定义，本页不采用。

## 常见误解

误解之一是把胶子想成黏住夸克的胶水。胶子是规范玻色子，传递相互作用，不是有固定大小的黏合剂。[1][2] 误解之二是把喷注的宽度或探测器能分辨的最小距离当成胶子尺寸；这些是事件与仪器的量，不是粒子的边界。[3]

## 与其他尺度的关系

它上接质子（约 1 飞米），下接夸克与更高能的夸克—胶子等离子体；在这些尺度上，比较的分别是强子半径、相互作用范围与理论标度，而不是同一个粒子直径。[1][3] 沿尺度轴看，禁闭尺度与质子尺度同量级，比弱作用尺度大约三个数量级。
