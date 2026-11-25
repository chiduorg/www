---
id: space.m87-black-hole-x100
title: M87* × 100：一次尺度换算
titleEn: M87* × 100
summary: 以「M87*」的 3.800×10^13 m 为基准，按 ×100 换算得到 3.800×10^15 m；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: length
category: 恒星与星际
displayValue: 3.800×10^15 m（约 3.8e+12 km）
quantity:
  value: 3800000000000000
  unit: m
  measure: 尺度换算量：space.m87-black-hole 的 3.800×10^13 m × 100
  measureLabel: 由「M87*」按 ×100 换算的参照值
  approximate: true
related:
- space.black-hole-event-horizon
- space.sagittarius-a-star
- space.virgo-cluster
- space.milky-way
- mass.m87-black-hole
conditions: 以 space.m87-black-hole 的既有量值 3.800×10^13 m 为基准，倍率 100；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- space
reviewStatus: reviewed
sources:
- title: 'Press Release (April 10, 2019): Astronomers Capture First Image of a Black
    Hole'
  url: https://eventhorizontelescope.org/press-release-april-10-2019-astronomers-capture-first-image-black-hole
  publisher: Event Horizon Telescope Collaboration
  accessed: '2026-11-25'
- title: black hole
  url: https://www.britannica.com/science/black-hole
  publisher: Encyclopaedia Britannica
  accessed: '2026-11-25'
- title: Black Holes
  url: https://imagine.gsfc.nasa.gov/science/objects/black_holes1.html
  publisher: NASA / GSFC / Imagine the Universe
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 space.m87-black-hole 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: galaxy
  scene: space.object
  caption: M87* × 100：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#9bbcd7'
  referenceAxis: x
---
## 量值是什么

本条量值是 3.800×10^15 m，由「M87*」的基准读数 3.800×10^13 m 乘以 100 得到。基准条目量的是事件视界直径（约 380 亿公里，由约 65 亿太阳质量推算的 2Rs）；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：3.800×10^13 m × 100 = 3.800×10^15 m。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「M87*」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与恒星级黑洞事件视界（29500 m）；人马座 A*（24000000000 m）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：M87* 是室女座星系 M87 中心的超大质量黑洞，质量约为 65 亿太阳质量。由质量推算的事件视界直径约 3.8×10¹³ 米，即约 380 亿公里；它不是 EHT 图像中的阴影直径。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
