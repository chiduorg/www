---
id: space.observable-universe-x0p1
title: 可观测宇宙 × 0.1（缩小）：一次尺度换算
titleEn: Observable Universe × 0.1
summary: 以「可观测宇宙」的 8.800×10^26 m 为基准，按 ×0.1 换算得到 8.800×10^25 m；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: length
category: 星系与宇宙
displayValue: 8.800×10^25 m（约 8.8e+22 km）
quantity:
  value: 8.8e+25
  unit: m
  measure: 尺度换算量：space.observable-universe 的 8.800×10^26 m × 0.1
  measureLabel: 由「可观测宇宙」按 ×0.1 换算的参照值
  approximate: true
related:
- time.present
- time.recombination
- space.milky-way
- space.light-year
- time.galaxy-formation
conditions: 以 space.observable-universe 的既有量值 8.800×10^26 m 为基准，倍率 0.1；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- space
reviewStatus: reviewed
sources:
- title: Gott et al. (2005), A Map of the Universe, §II
  url: https://arxiv.org/html/astro-ph/0310571v2
  publisher: J. Richard Gott III et al. / The Astrophysical Journal
  accessed: '2026-11-25'
- title: 'Ask an Astrophysicist — Cosmology: horizons, distance and lookback time'
  url: https://imagine.gsfc.nasa.gov/ask_astro/cosmology.html
  publisher: NASA / GSFC / HEASARC
  accessed: '2026-11-25'
- title: How Was the Universe Born?
  url: https://www.nist.gov/measuring-cosmos/how-was-universe-born
  publisher: NIST
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 space.observable-universe 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  scene: space.observable-universe
  caption: 可观测宇宙 × 0.1（缩小）：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
---
## 量值是什么

本条量值是 8.800×10^25 m，由「可观测宇宙」的基准读数 8.800×10^26 m 乘以 0.1 得到。基准条目量的是特定宇宙学模型中当前时刻粒子视界直径的约数；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：8.800×10^26 m × 0.1 = 8.800×10^25 m。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「可观测宇宙」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与此时此刻（435400000000000000 s）；复合（11991888000000 s）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：可观测宇宙描述信息能够抵达观察者的范围，而非宇宙整体的外壳。本页的约930亿光年直径采用特定宇宙学模型中的当前距离口径，需要与回溯时间和微波背景区分。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
