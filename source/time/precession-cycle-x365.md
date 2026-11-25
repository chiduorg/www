---
id: time.precession-cycle-x365
title: 岁差周期 × 365：一次尺度换算
titleEn: Precession Cycle × 365
summary: 以「岁差周期」的 8.133×10^11 s 为基准，按 ×365 换算得到 2.969×10^14 s；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: cosmic-time
category: 时长尺度
displayValue: 2.969×10^14 s（约 9.40678e+06 年）
quantity:
  value: 296855400528000
  unit: s
  measure: 尺度换算量：time.precession-cycle 的 8.133×10^11 s × 365
  measureLabel: 由「岁差周期」按 ×365 换算的参照值
  approximate: true
related:
- time.milankovitch-cycle
- time.year
- time.present
- space.earth
- mass.earth
conditions: 以 time.precession-cycle 的既有量值 8.133×10^11 s 为基准，倍率 365；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- time
reviewStatus: reviewed
sources:
- title: precession of the equinoxes
  url: https://www.britannica.com/science/precession-of-the-equinoxes
  publisher: Encyclopaedia Britannica
  accessed: '2026-11-25'
- title: precession
  url: https://www.britannica.com/science/precession
  publisher: Encyclopaedia Britannica
  accessed: '2026-11-25'
- title: Milutin Milankovitch
  url: https://earthobservatory.nasa.gov/features/Milankovitch
  publisher: NASA Earth Observatory
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 time.precession-cycle 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
mode: 时长
chronology:
  status: duration
  plot: false
  note: 本条是持续时间/周期的倍率换算，不是大爆炸后的绝对时点，不放在绝对时间轴上。
visual:
  template: planet-foundry
  scene: time.object
  caption: 岁差周期 × 365：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
---
## 量值是什么

本条量值是 2.969×10^14 s，由「岁差周期」的基准读数 8.133×10^11 s 乘以 365 得到。基准条目量的是地轴进动周期；取 25 772 年；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：8.133×10^11 s × 365 = 2.969×10^14 s。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「岁差周期」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与米兰科维奇周期（1293861600000 s）；一年（31556952 s）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：岁差是地球自转轴像陀螺一样缓慢绕行一圈的现象，周期约为 25 772 年。它描述地轴指向完成一轮摆动需要多久，不是地轴在某个时刻突然翻转，也不是某个历史事件的发生时间。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
