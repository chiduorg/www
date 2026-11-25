---
id: temperature.reentry-plasma-x10
title: 再入大气层等离子体 × 10：一次尺度换算
titleEn: Atmospheric reentry plasma × 10
summary: 以「再入大气层等离子体」的 10,000 K 为基准，按 ×10 换算得到 1.000×10^05 K；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: temperature
category: 极高温
displayValue: 1.000×10^05 K（约 99,726.9 °C）
quantity:
  value: 100000
  unit: K
  measure: 尺度换算量：temperature.reentry-plasma 的 10,000 K × 10
  measureLabel: 由「再入大气层等离子体」按 ×10 换算的参照值
  approximate: true
related:
- temperature.rocket_plume
- temperature.lightning
- temperature.thermosphere
- temperature.plasma-cutter
- space.iss
conditions: 以 temperature.reentry-plasma 的既有量值 10,000 K 为基准，倍率 10；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- temperature
reviewStatus: reviewed
sources:
- title: Plasma Science in Planetary Entry
  url: https://ntrs.nasa.gov/api/citations/20190026772/downloads/20190026772.pdf
  publisher: NASA Technical Reports Server
  accessed: '2026-11-25'
- title: Thermophysics Facilities – FAQ
  url: https://www.nasa.gov/thermophysics-facilities-faq/
  publisher: NASA
  accessed: '2026-11-25'
- title: How Hot Is Lightning?
  url: https://www.weather.gov/safety/lightning-temperature
  publisher: NOAA National Weather Service
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 temperature.reentry-plasma 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: radiation-field
  scene: temperature.object
  caption: 再入大气层等离子体 × 10：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#b5d5ff'
---
## 量值是什么

本条量值是 1.000×10^05 K，由「再入大气层等离子体」的基准读数 10,000 K 乘以 10 得到。基准条目量的是再入激波层等离子体温度量级估计；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：10,000 K × 10 = 1.000×10^05 K。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「再入大气层等离子体」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与RS-25燃烧室热气（参考）（3588.7055555555557 K）；闪电（28033.15 K）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：航天器再入大气层时，前方空气被强激波压缩加热并部分电离，形成包裹返回舱的等离子体鞘。本条取约 1 × 10⁴ K 作为激波层气体温度的量级估计；它不是防热大底表面温度，也不是舱内温度。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
