---
id: space.city-x2
title: 城市 × 2：一次尺度换算
titleEn: City × 2
summary: 以「城市」的 1.000×10^05 m 为基准，按 ×2 换算得到 2.000×10^05 m；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: length
category: 地球与地质
displayValue: 2.000×10^05 m（约 200 km）
quantity:
  value: 200000
  unit: m
  measure: 尺度换算量：space.city 的 1.000×10^05 m × 2
  measureLabel: 由「城市」按 ×2 换算的参照值
  approximate: true
related:
- space.burj-khalifa
- space.golden-gate-bridge
- space.island
- space.everest
- time.earth-formation
conditions: 以 space.city 的既有量值 1.000×10^05 m 为基准，倍率 2；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- space
reviewStatus: reviewed
sources:
- title: OECD Definition of Cities and Functional Urban Areas
  url: https://www.oecd.org/en/data/datasets/oecd-definition-of-cities-and-functional-urban-areas.html
  publisher: OECD
  accessed: '2026-11-25'
- title: 'Cities — Methodology: Concepts and definitions'
  url: https://ec.europa.eu/eurostat/web/cities/methodology
  publisher: European Commission / Eurostat
  accessed: '2026-11-25'
- title: 自然状况（2005）— 上海统计年鉴
  url: https://tjj.sh.gov.cn/tjnj/nj06.htm?d1=2006tjnj/C0100.htm
  publisher: 上海市统计局
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 space.city 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: terrain
  scene: space.earth
  caption: 城市 × 2：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#9bbcd7'
  referenceAxis: x
---
## 量值是什么

本条量值是 2.000×10^05 m，由「城市」的基准读数 1.000×10^05 m 乘以 2 得到。基准条目量的是上海市行政区东西向最大跨度（行政边界口径的样本值）；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：1.000×10^05 m × 2 = 2.000×10^05 m。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「城市」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与哈利法塔（828 m）；金门大桥（2737 m）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：城市没有一种天然统一的直径。本条以中国上海市行政区为样本，用东西向最大跨度约 100 公里作为可复现的比较值，并说明行政边界、人口聚集区和通勤联系区的差别。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
