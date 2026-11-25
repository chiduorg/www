---
id: temperature.liquid-nitrogen-x4
title: 液氮温度 × 4：一次尺度换算
titleEn: Liquid nitrogen × 4
summary: 以「液氮温度」的 77.34 K 为基准，按 ×4 换算得到 309.36 K；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: temperature
category: 低温
displayValue: 309.36 K（约 36.21 °C）
quantity:
  value: 309.36
  unit: K
  measure: 尺度换算量：temperature.liquid-nitrogen 的 77.34 K × 4
  measureLabel: 由「液氮温度」按 ×4 换算的参照值
  approximate: true
related:
- temperature.liquid-oxygen
- temperature.absolute-zero
- temperature.dilution-refrigerator
- temperature.liquid-argon
- space.moon
conditions: 以 temperature.liquid-nitrogen 的既有量值 77.34 K 为基准，倍率 4；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- temperature
reviewStatus: reviewed
sources:
- title: 'Nitrogen: Phase change data'
  url: https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=4
  publisher: NIST Chemistry WebBook, SRD 69
  accessed: '2026-11-25'
- title: 'Kelvin: Introduction'
  url: https://www.nist.gov/si-redefinition/kelvin-introduction
  publisher: NIST
  accessed: '2026-11-25'
- title: 'Nitrogen Asphyxiation — report appendix: nitrogen material safety data'
  url: https://www.csb.gov/assets/1/20/final_union_carbide_report.pdf?13768=
  publisher: U.S. Chemical Safety and Hazard Investigation Board, report 98-05-I-LA,
    appended nitrogen data
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 temperature.liquid-nitrogen 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  scene: temperature.liquid-nitrogen
  caption: 液氮温度 × 4：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
---
## 量值是什么

本条量值是 309.36 K，由「液氮温度」的基准读数 77.34 K 乘以 4 得到。基准条目量的是氮常压沸点参考；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：77.34 K × 4 = 309.36 K。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「液氮温度」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与液氧温度（90.2 K）；绝对零度（0 K）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：氮在正常沸点附近约为 77.34 K，折合约 −195.81 °C。这里的温度对应给定压力下的沸腾状态，不是所有液氮都具有的唯一温度。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
