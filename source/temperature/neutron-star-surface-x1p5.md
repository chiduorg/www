---
id: temperature.neutron-star-surface-x1p5
title: 仙后座A中子星表面 × 1.5：一次尺度换算
titleEn: Cassiopeia A neutron-star surface reference × 1.5
summary: 以「仙后座A中子星表面」的 2.000×10^06 K 为基准，按 ×1.5 换算得到 3.000×10^06 K；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: temperature
category: 恒星与宇宙极端
displayValue: 3.000×10^06 K（约 2.99973e+06 °C）
quantity:
  value: 3000000.0
  unit: K
  measure: 尺度换算量：temperature.neutron-star-surface 的 2.000×10^06 K × 1.5
  measureLabel: 由「仙后座A中子星表面」按 ×1.5 换算的参照值
  approximate: true
related:
- temperature.neutron-star-core
- temperature.millisecond_pulsar
- temperature.supernova-remnant
- temperature.neutron-star-merger-shock
- space.neutron-star
conditions: 以 temperature.neutron-star-surface 的既有量值 2.000×10^06 K 为基准，倍率 1.5；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- temperature
reviewStatus: reviewed
sources:
- title: The Remarkable Properties of Neutron Stars
  url: https://chandra.harvard.edu/blog/node/432
  publisher: NASA Chandra X-ray Center
  accessed: '2026-11-25'
- title: Carbon Atmosphere Discovered On Neutron Star
  url: https://chandra.harvard.edu/press/09_releases/press_110409.html
  publisher: NASA Chandra X-ray Center
  accessed: '2026-11-25'
- title: Rapid Cooling of the Neutron Star in Cassiopeia A Triggered by Neutron Superfluidity
    in Dense Matter
  url: https://arxiv.org/abs/1011.6142
  publisher: Page et al., Phys. Rev. Lett. 106 (2011)
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 temperature.neutron-star-surface 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: compact-star
  scene: temperature.object
  caption: 仙后座A中子星表面 × 1.5：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#b8d9f1'
---
## 量值是什么

本条量值是 3.000×10^06 K，由「仙后座A中子星表面」的基准读数 2.000×10^06 K 乘以 1.5 得到。基准条目量的是Cas A中子星表面光谱推断温度量级；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：2.000×10^06 K × 1.5 = 3.000×10^06 K。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「仙后座A中子星表面」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与中子星核心（需指定冷却模型）（None K）；毫秒脉冲星 J0030+0451 热区（1000000 K）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：仙后座 A 遗迹内的中子星给出了一个具体的表面温度例子。Chandra 的研究说明将其描述为接近两百万度的量级； 这来自 X 射线观测与大气模型分析，而不是把所有中子星设为同一温度。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
