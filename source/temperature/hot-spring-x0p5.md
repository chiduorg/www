---
id: temperature.hot-spring-x0p5
title: 温泉 × 0.5（缩小）：一次尺度换算
titleEn: Hot spring water temperature × 0.5
summary: 以「温泉」的 313 K 为基准，按 ×0.5 换算得到 156.5 K；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: temperature
category: 中温
displayValue: 156.5 K（约 -116.65 °C）
quantity:
  value: 156.5
  unit: K
  measure: 尺度换算量：temperature.hot-spring 的 313 K × 0.5
  measureLabel: 由「温泉」按 ×0.5 换算的参照值
  approximate: true
related:
- temperature.sauna
- temperature.hydrothermal-vent
- temperature.boiling-water
- temperature.lava-temperature
- space.human
conditions: 以 temperature.hot-spring 的既有量值 313 K 为基准，倍率 0.5；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- temperature
reviewStatus: reviewed
sources:
- title: hot spring
  url: https://www.britannica.com/science/hot-spring
  publisher: Encyclopaedia Britannica
  accessed: '2026-11-25'
- title: The ABCs for the Safe and Secure Use of Onsen
  url: https://www.env.go.jp/nature/onsen/pdf/top_en.pdf
  publisher: Ministry of the Environment, Japan
  accessed: '2026-11-25'
- title: Caution for using Onsen (for bathing)
  url: https://www.spa.or.jp/en/caution_bathing/
  publisher: Japan Spa Association
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 temperature.hot-spring 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: planet-environment
  scene: temperature.object
  caption: 温泉 × 0.5（缩小）：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
---
## 量值是什么

本条量值是 156.5 K，由「温泉」的基准读数 313 K 乘以 0.5 得到。基准条目量的是泉水或浴池水温；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：313 K × 0.5 = 156.5 K。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「温泉」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与桑拿房空气（353 K）；深海热液（623 K）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：供人浸泡的温泉多在 30–45 ℃，本条取 40 ℃（313 K）。它指泉水或浴池水温， 不是地下热储层温度；出水口、池中与降温后的测点差异必须说明。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
