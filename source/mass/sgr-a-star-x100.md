---
id: mass.sgr-a-star-x100
title: 人马座 A*：8.55×10³⁶ kg，银心黑洞的轨道称重 × 100：一次尺度换算
titleEn: Sagittarius A* × 100
summary: 以「人马座 A*：8.55×10³⁶ kg，银心黑洞的轨道称重」的 8.550×10^36 kg 为基准，按 ×100 换算得到 8.550×10^38
  kg；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: mass
category: 恒星与致密天体
displayValue: 8.550×10^38 kg
quantity:
  value: 8.55e+38
  unit: kg
  measure: 尺度换算量：mass.sgr-a-star 的 8.550×10^36 kg × 100
  measureLabel: 由「人马座 A*：8.55×10³⁶ kg，银心黑洞的轨道称重」按 ×100 换算的参照值
  approximate: true
related:
- mass.gcirs-13e
- mass.m87-black-hole
- space.sagittarius-a-star
- temperature.black-hole-accretion-disk
- time.present
conditions: 以 mass.sgr-a-star 的既有量值 8.550×10^36 kg 为基准，倍率 100；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- mass
reviewStatus: reviewed
sources:
- title: Event Horizon Telescope
  url: https://eventhorizontelescope.org/
  publisher: EHT Collaboration
  accessed: '2026-11-25'
- title: Chandra X-ray Observatory
  url: https://chandra.harvard.edu/
  publisher: NASA/CXC
  accessed: '2026-11-25'
- title: ESA Science
  url: https://www.esa.int/
  publisher: European Space Agency
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 mass.sgr-a-star 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
mass:
  type: dynamical
  includesDarkMatter: false
  method: derived from mass.sgr-a-star
grade: B
---
## 量值是什么

本条量值是 8.550×10^38 kg，由「人马座 A*：8.55×10³⁶ kg，银心黑洞的轨道称重」的基准读数 8.550×10^36 kg 乘以 100 得到。基准条目量的是黑洞动力学质量（约 4.297×10⁶ 太阳质量）；由银心 S 星轨道拟合得出，相对不确定度约 0.3%；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：8.550×10^36 kg × 100 = 8.550×10^38 kg。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「人马座 A*：8.55×10³⁶ kg，银心黑洞的轨道称重」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与GCIRS 13E：2.59×10³³ kg，银心附近的中等质量黑洞候选（2.59e+33 kg）；M87*：1.29×10⁴⁰ kg，第一个被拍到阴影的黑洞（1.29e+40 kg）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：人马座 A* 是银河系中心的超大质量黑洞，质量约 8.55×10³⁶ kg，折合 4.297×10⁶ 个太阳质量。数值由银心 S 星轨道拟合得出，GRAVITY 干涉测量把相对不确定度压到约 0.3%。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
