---
id: mass.neutron-x0p01
title: 中子：比质子重 0.14%，却决定了自由中子的寿命 × 0.01（缩小）：一次尺度换算
titleEn: Neutron × 0.01
summary: 以「中子：比质子重 0.14%，却决定了自由中子的寿命」的 1.675×10^-27 kg 为基准，按 ×0.01 换算得到 1.675×10^-29
  kg；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: mass
category: 粒子与基本常数
displayValue: 1.675×10^-29 kg
quantity:
  value: 1.67492750056e-29
  unit: kg
  measure: 尺度换算量：mass.neutron 的 1.675×10^-27 kg × 0.01
  measureLabel: 由「中子：比质子重 0.14%，却决定了自由中子的寿命」按 ×0.01 换算的参照值
  approximate: true
related:
- mass.proton
- mass.hydrogen-atom
- space.neutron
- time.neutron-star-merger
- time.neutrino-decoupling
conditions: 以 mass.neutron 的既有量值 1.675×10^-27 kg 为基准，倍率 0.01；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- mass
reviewStatus: reviewed
sources:
- title: CODATA Recommended Values of the Fundamental Physical Constants
  url: https://physics.nist.gov/cuu/Constants/
  publisher: National Institute of Standards and Technology
  accessed: '2026-11-25'
- title: Review of Particle Physics 2024
  url: https://pdg.lbl.gov/2024/listings/contents_listings.html
  publisher: Particle Data Group
  accessed: '2026-11-25'
- title: The Standard Model
  url: https://home.cern/science/physics/standard-model
  publisher: CERN
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 mass.neutron 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
mass:
  type: baryonic
  includesDarkMatter: false
  method: derived from mass.neutron
grade: B
---
## 量值是什么

本条量值是 1.675×10^-29 kg，由「中子：比质子重 0.14%，却决定了自由中子的寿命」的基准读数 1.675×10^-27 kg 乘以 0.01 得到。基准条目量的是CODATA 2022 中子静质量；由 Penning 阱与核反应运动学综合；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：1.675×10^-27 kg × 0.01 = 1.675×10^-29 kg。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「中子：比质子重 0.14%，却决定了自由中子的寿命」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与质子：1.673×10⁻²⁷ kg，99% 来自胶子场（1.67262192595e-27 kg）；氢原子：1.6735×10⁻²⁷ kg，结合能亏损最小的原子（1.67353e-27 kg）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：中子静质量 1.67492750056×10⁻²⁷ kg，约 939.565 MeV/c²。它与质子的质量差约 1.293 MeV，足以让自由中子通过 β 衰变变成质子、电子与反中微子。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
