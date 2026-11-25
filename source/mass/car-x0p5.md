---
id: mass.car-x0p5
title: 丰田卡罗拉：1,310 kg，紧凑级轿车的整备质量 × 0.5（缩小）：一次尺度换算
titleEn: Toyota Corolla × 0.5
summary: 以「丰田卡罗拉：1,310 kg，紧凑级轿车的整备质量」的 1,310 kg 为基准，按 ×0.5 换算得到 655 kg；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: mass
category: 工程与交通
displayValue: 655 kg
quantity:
  value: 655.0
  unit: kg
  measure: 尺度换算量：mass.car 的 1,310 kg × 0.5
  measureLabel: 由「丰田卡罗拉：1,310 kg，紧凑级轿车的整备质量」按 ×0.5 换算的参照值
  approximate: true
related:
- mass.suv
- mass.truck
- mass.bus
- elements.fe
- space.earth
conditions: 以 mass.car 的既有量值 1,310 kg 为基准，倍率 0.5；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- mass
reviewStatus: reviewed
sources:
- title: Toyota official site — vehicle specifications
  url: https://www.toyota.com/
  publisher: Toyota Motor North America
  accessed: '2026-11-25'
- title: 'ISO 1176: Road vehicles — Masses — Vocabulary and codes'
  url: https://www.iso.org/
  publisher: International Organization for Standardization
  accessed: '2026-11-25'
- title: Vehicle mass and registration data
  url: https://www.acea.auto/
  publisher: European Automobile Manufacturers' Association
  accessed: '2026-11-25'
visual:
  template: mass-scale
  scene: mass.scale
  caption: "丰田卡罗拉：1,310 kg，紧凑级轿车的整备质量 × 0.5（缩小）：一次尺度换算 · 655 kg"
  note: 位置按 log10(m/kg) 计算；本条为倍率换算，显示在对应质量档位，不代表新的独立测量。
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 mass.car 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
mass:
  type: baryonic
  includesDarkMatter: false
  method: derived from mass.car
grade: B
---
## 量值是什么

本条量值是 655 kg，由「丰田卡罗拉：1,310 kg，紧凑级轿车的整备质量」的基准读数 1,310 kg 乘以 0.5 得到。基准条目量的是制造商整备质量（curb mass）：整车加满油液、装好备胎与工具后的质量，不含乘员与货物；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：1,310 kg × 0.5 = 655 kg。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「丰田卡罗拉：1,310 kg，紧凑级轿车的整备质量」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与丰田陆地巡洋舰：2,600 kg，全尺寸越野车的整备质量（2600 kg）；沃尔沃 FH16 牵引车：9,000 kg，不含挂车的车头质量（9000 kg）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：丰田卡罗拉整备质量约 1,310 kg，含全部油液、备胎与随车工具，不含乘员与货物。同车系不同配置在 1,290–1,395 kg 之间浮动，最大允许总质量约 1,800 kg。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
