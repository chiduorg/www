---
id: space.cosmic-web-x1000
title: 宇宙网 × 1000：一次尺度换算
titleEn: Cosmic Web × 1000
summary: 以「宇宙网」的 2.314×10^24 m 为基准，按 ×1000 换算得到 2.314×10^27 m；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: length
category: 星系与宇宙
displayValue: 2.314×10^27 m（约 2.31426e+24 km）
quantity:
  value: 2.314258e+27
  unit: m
  measure: 尺度换算量：space.cosmic-web 的 2.314×10^24 m × 1000
  measureLabel: 由「宇宙网」按 ×1000 换算的参照值
  approximate: true
related:
- space.galaxy-cluster
- space.coma-cluster
- space.virgo-supercluster
- space.boots-void
- mass.total-matter-universe
conditions: 以 space.cosmic-web 的既有量值 2.314×10^24 m 为基准，倍率 1000；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- space
reviewStatus: reviewed
sources:
- title: Void and Density Walls Inhomogeneous Cosmic Web and Dark Energy
  url: https://arxiv.org/html/2503.20912
  publisher: J. W. Moffat / arXiv
  accessed: '2026-11-25'
- title: Astrodynamic Parameters — Julian year and speed of light
  url: https://ssd.jpl.nasa.gov/astro_par.html
  publisher: NASA / JPL Solar System Dynamics
  accessed: '2026-11-25'
- title: 'Cluster Merger: Galaxy Clusters Caught in a First Kiss'
  url: https://chandra.si.edu/photo/2019/cluster_merge/
  publisher: NASA / Chandra X-ray Center
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 space.cosmic-web 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: field
  scene: space.object
  caption: 宇宙网 × 1000：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#9bbcd7'
  referenceAxis: x
---
## 量值是什么

本条量值是 2.314×10^27 m，由「宇宙网」的基准读数 2.314×10^24 m 乘以 1000 得到。基准条目量的是综述中宇宙纤维典型长度50—100 Mpc的概览中值，取75 Mpc；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：2.314×10^24 m × 1000 = 2.314×10^27 m。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「宇宙网」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与星系团（通用）（9.46073e+22 m）；后发座星系团（1.892146e+23 m）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：宇宙网是星系、气体和暗物质在大尺度上形成的纤维、墙、节点与空洞网络。本页取综述中典型纤维长度50—100 Mpc的中值约75 Mpc，换算约2.31 × 10²⁴米。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
