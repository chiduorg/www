---
id: mass.earth-x0p01
title: 地球：5.972×10²⁴ kg，含大气与海洋的总质量 × 0.01（缩小）：一次尺度换算
titleEn: Earth × 0.01
summary: 以「地球：5.972×10²⁴ kg，含大气与海洋的总质量」的 5.972×10^24 kg 为基准，按 ×0.01 换算得到 5.972×10^22
  kg；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: mass
category: 行星与小天体
displayValue: 5.972×10^22 kg
quantity:
  value: 5.972000000000001e+22
  unit: kg
  measure: 尺度换算量：mass.earth 的 5.972×10^24 kg × 0.01
  measureLabel: 由「地球：5.972×10²⁴ kg，含大气与海洋的总质量」按 ×0.01 换算的参照值
  approximate: true
related:
- mass.moon
- mass.mercury
- mass.pluto
- space.earth
- elements.fe
conditions: 以 mass.earth 的既有量值 5.972×10^24 kg 为基准，倍率 0.01；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- mass
reviewStatus: reviewed
sources:
- title: Planetary Fact Sheet
  url: https://nssdc.gsfc.nasa.gov/planetary/factsheet/
  publisher: NASA Space Science Data Coordinated Archive
  accessed: '2026-11-25'
- title: Solar System Dynamics
  url: https://ssd.jpl.nasa.gov/
  publisher: NASA Jet Propulsion Laboratory
  accessed: '2026-11-25'
- title: NASA Science
  url: https://science.nasa.gov/
  publisher: NASA
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 mass.earth 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
mass:
  type: total
  includesDarkMatter: false
  method: derived from mass.earth
grade: B
---
## 量值是什么

本条量值是 5.972×10^22 kg，由「地球：5.972×10²⁴ kg，含大气与海洋的总质量」的基准读数 5.972×10^24 kg 乘以 0.01 得到。基准条目量的是地球总质量（含大气与海洋，不含暗物质）；由人造卫星轨道跟踪与引力场模型拟合得出，相对不确定度约 1×10⁻³；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：5.972×10^24 kg × 0.01 = 5.972×10^22 kg。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「地球：5.972×10²⁴ kg，含大气与海洋的总质量」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与月球：7.346×10²² kg，激光测月把误差压到万分之一（7.346e+22 kg）；水星：3.301×10²³ kg，MESSENGER 环绕测出的最轻行星（3.301e+23 kg）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：地球总质量约 5.972×10²⁴ kg，明确包含大气与海洋。数值由人造卫星轨道跟踪与引力场模型拟合，相对不确定度约 1×10⁻³，主要受引力常数 G 的精度限制。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
