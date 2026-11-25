---
id: space.jupiter-x30
title: 木星 × 30：一次尺度换算
titleEn: Jupiter × 30
summary: 以「木星」的 1.398×10^08 m 为基准，按 ×30 换算得到 4.195×10^09 m；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: length
category: 行星与太阳系
displayValue: 4.195×10^09 m（约 4.19466e+06 km）
quantity:
  value: 4194660000
  unit: m
  measure: 尺度换算量：space.jupiter 的 1.398×10^08 m × 30
  measureLabel: 由「木星」按 ×30 换算的参照值
  approximate: true
related:
- space.solar-system
- space.saturn
- space.ganymede
- space.sun
- temperature.sun-surface
conditions: 以 space.jupiter 的既有量值 1.398×10^08 m 为基准，倍率 30；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- space
reviewStatus: reviewed
sources:
- title: Jupiter Fact Sheet
  url: https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html
  publisher: NASA NSSDC
  accessed: '2026-11-25'
- title: Jupiter
  url: https://www.britannica.com/place/Jupiter-planet
  publisher: Encyclopaedia Britannica
  accessed: '2026-11-25'
- title: Kuiper Belt and Oort Cloud (NASA lithograph)
  url: https://www.nasa.gov/sites/default/files/files/Kuiper_Belt_Lithograph_h.pdf
  publisher: NASA
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 space.jupiter 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: planet-environment
  scene: space.jupiter
  caption: 木星 × 30：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#9bbcd7'
  referenceAxis: x
---
## 量值是什么

本条量值是 4.195×10^09 m，由「木星」的基准读数 1.398×10^08 m 乘以 30 得到。基准条目量的是NASA事实表口径的体积等效平均直径（不含环）；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：1.398×10^08 m × 30 = 4.195×10^09 m。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「木星」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与太阳系（9000000000000 m）；土星（116464000 m）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：木星的体积等效平均直径在本页取139,822公里，是NASA事实表中平均半径69,911公里的两倍。它的赤道与两极半径不同，比较时必须保留所采用的口径。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
