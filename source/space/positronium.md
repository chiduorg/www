---
id: space.positronium
title: 电子偶素
titleEn: Positronium
dimension: length
category: 原子与分子
summary: 电子偶素由电子与正电子组成。本页选取最简单库仑束缚模型中的相对坐标玻尔长度2a₀，约为0.1058纳米，作为理论比较参照，而不是实测的原子硬边界直径。
quantity:
  value: 1.058354421088e-10
  unit: m
  measure: 基态非相对论模型的电子—正电子相对坐标玻尔长度2a₀
  approximate: true
  status: reference
displayValue: 约 0.1058 nm（相对坐标的玻尔长度2a₀）
related:
  - space.atom
  - space.electron-compton
  - space.proton
  - time.electron-positron-annihilation
reviewStatus: reviewed
sources:
  - title: 2022 CODATA — Bohr radius
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?bohrrada0'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: positronium
    url: 'https://www.britannica.com/science/positronium'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: quantum electrodynamics
    url: 'https://www.britannica.com/science/quantum-electrodynamics-physics'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 2022 CODATA — Compton wavelength
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?ecomwl'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
legacy:
  id: positronium
  icon: ☯
  relatedLabels: 氢原子、正电子、量子电动力学、CPT对称性、物质-反物质不对称
conditions: 非相对论库仑束缚模型，电子—正电子约化质量取mₑ/2；给出的是相对坐标玻尔长度a_Ps=2a₀，不是以质心为原点的硬球半径或实测直径。
uncertainty: >-
  2a₀由NIST玻尔半径a₀=5.29177210544×10⁻¹¹米乘2得到，a₀标准不确定度8.2×10⁻²¹米；这是非相对论库仑模型的参照值，未含量子电动力学修正与有限寿命效应。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch打开NIST玻尔半径页、Britannica电子偶素与量子电动力学页，核对数值、寿命与模型表述。
    - 用NIST普通康普顿波长页核对与电子康普顿波长的尺度比较。
    - '明确0.1058 nm是相对坐标的a_Ps=2a₀，不是电子偶素硬球直径；原量值与status: reference保留。'
  originalQuantity:
    value: 2.e-10
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: atom
  variant: positronium
  color: '#a5bbd4'
  referenceAxis: x
  caption: 电子—正电子相对坐标的玻尔长度
  note: 两端参考标记相距2a₀；亮点不是固定粒子位置，曲线不是轨道，节点光晕为示意，非按比例，非观测重建。
  framePadding: 0.34
  sourceMeasure: 基态非相对论模型的电子—正电子相对坐标玻尔长度2a₀
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
---
## 它是什么

电子偶素是电子与正电子组成的短寿命束缚系统，常被描述为类氢原子，但它没有质子或中子构成的核，只有一个电子和一个正电子绕共同质心运动。[2] 电子与正电子自旋相反时形成仲电子偶素，自旋相同时形成正电子偶素；两种状态的湮灭方式和寿命不同。本条的 0.1058 纳米是理论模型给出的相对坐标尺度，不是实测的外壳直径。

## 怎样知道

电子偶素通常在正电子进入物质后被减速、再被电子俘获时形成；Britannica 记载仲电子偶素约在 0.1 纳秒内湮灭为两个光子，正电子偶素约在 100 纳秒内湮灭为三个光子。[2] 它的能级与衰变率被用作量子电动力学的检验对象，因为这是一个只有两个粒子的简单束缚系统。[3] 这些实验确认了系统的存在与寿命，却不直接给出一条“电子偶素半径”的硬边界。

## 数值与口径

把氢原子的玻尔公式用于电子—正电子系统时，约化质量变为 mₑ/2，特征长度因此是氢原子玻尔半径的两倍，即 a_Ps=2a₀。[1] NIST 给出的玻尔半径 a₀ 为 5.29177210544×10⁻¹¹ 米，乘 2 得 1.058354421088×10⁻¹⁰ 米，约 0.1058 纳米。这里的 a_Ps 描述电子与正电子之间的相对坐标，不是把系统画成一个半径为 0.1058 纳米的球。

## 常见误解

电子偶素不是稳定的普通原子，基态最终会湮灭，因此不能把它的“大小”与长寿原子的外壳直接类比。[2] 也不能把 0.1058 纳米当成直径；若把它当直径，会与相对坐标半径的口径混淆。另一个误解是认为电子偶素与氢原子一样大：由于约化质量减半，它的玻尔尺度约为氢原子的两倍。[1] 寿命长短与空间尺度是两回事。

## 与其他尺度的关系

氢原子的玻尔半径约 0.0529 纳米，电子偶素的特征尺度约 0.1058 纳米，正好约为前者的两倍。[1] 它仍处在原子尺度（约 0.1 纳米）内，却比电子康普顿波长（约 2.426 皮米）大约四十倍。[4] 与原子核尺度相比，它又大了五个数量级。湮灭产生的光子能量与这些尺度通过常数相连，但不应把波长、半径和寿命混成同一个“大小”。
