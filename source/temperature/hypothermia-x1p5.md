---
id: temperature.hypothermia-x1p5
title: 低体温阈值 × 1.5：一次尺度换算
titleEn: Hypothermia core temperature threshold × 1.5
summary: 以「低体温阈值」的 308.15 K 为基准，按 ×1.5 换算得到 462.225 K；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: temperature
category: 常温
displayValue: 462.225 K（约 189.075 °C）
quantity:
  value: 462.22499999999997
  unit: K
  measure: 尺度换算量：temperature.hypothermia 的 308.15 K × 1.5
  measureLabel: 由「低体温阈值」按 ×1.5 换算的参照值
  approximate: true
related:
- temperature.human-body-temperature
- temperature.fever
- temperature.water-freezing
- temperature.antarctic_min_temp
- space.human
conditions: 以 temperature.hypothermia 的既有量值 308.15 K 为基准，倍率 1.5；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- temperature
reviewStatus: reviewed
sources:
- title: Hypothermia-Related Deaths — Wisconsin, 2014, and United States, 2003–2013
  url: https://stacks.cdc.gov/view/cdc/55010
  publisher: Centers for Disease Control and Prevention (CDC)
  accessed: '2026-11-25'
- title: Hypothermia
  url: https://www.ncbi.nlm.nih.gov/books/NBK545239/
  publisher: NCBI Bookshelf (StatPearls)
  accessed: '2026-11-25'
- title: Temperature measurement
  url: https://www.medlineplus.gov/ency/article/003400.htm
  publisher: U.S. National Library of Medicine / MedlinePlus
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 temperature.hypothermia 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: thermometer
  scene: temperature.object
  caption: 低体温阈值 × 1.5：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#d8825a'
---
## 量值是什么

本条量值是 462.225 K，由「低体温阈值」的基准读数 308.15 K 乘以 1.5 得到。基准条目量的是核心温度低体温阈值；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：308.15 K × 1.5 = 462.225 K。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「低体温阈值」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与人体体温（310.15 K）；发热体温（311.15 K）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：核心体温低于 35.0 ℃（308.15 K）即进入低体温范围。它描述的是人体深部温度， 不是皮肤或环境温度；测量部位、暴露时间与个体状态都会改变判断。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
