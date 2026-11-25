---
id: time.moon-age-x1000
title: 月球年龄 × 1000：一次尺度换算
titleEn: Age of the Moon × 1000
summary: 以「月球年龄」的 1.420×10^17 s 为基准，按 ×1000 换算得到 1.420×10^20 s；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: cosmic-time
category: 太阳系与地球
displayValue: 1.420×10^20 s（约 4.5e+12 年）
quantity:
  value: 142009200000000000000
  unit: s
  measure: 尺度换算量：time.moon-age 的 1.420×10^17 s × 1000
  measureLabel: 由「月球年龄」按 ×1000 换算的参照值
  approximate: true
related:
- time.earth-age
- time.sun-age
- time.giant-impact
- time.earth-formation
- time.oldest-rock
- mass.moon
conditions: 以 time.moon-age 的既有量值 1.420×10^17 s 为基准，倍率 1000；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- time
reviewStatus: reviewed
sources:
- title: Early formation of the Moon 4.51 billion years ago
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC5226643/
  publisher: Science Advances (Barboni et al.), via PubMed Central
  accessed: '2026-11-25'
- title: Age of the Earth
  url: https://pubs.usgs.gov/gip/geotime/age.html
  publisher: United States Geological Survey (USGS)
  accessed: '2026-11-25'
- title: 'SI base unit: second (s)'
  url: https://www.bipm.org/en/si-base-units/second
  publisher: International Bureau of Weights and Measures (BIPM)
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 time.moon-age 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
mode: 时长
chronology:
  status: duration
  plot: false
  note: 本条是持续时间/周期的倍率换算，不是大爆炸后的绝对时点，不放在绝对时间轴上。
visual:
  template: chronometer
  scene: time.object
  caption: 月球年龄 × 1000：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#b8bcc4'
  variant: moon
---
## 量值是什么

本条量值是 1.420×10^20 s，由「月球年龄」的基准读数 1.420×10^17 s 乘以 1000 得到。基准条目量的是持续时长，不是自大爆炸起的绝对时点；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：1.420×10^17 s × 1000 = 1.420×10^20 s。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「月球年龄」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与地球年龄（143271504000000000 s）；太阳年龄（145164960000000000 s）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：月球年龄指月球形成至今已经过去的时间，本条取约 45 亿年。它是一段年龄， 不是月球形成那个绝对时点；锆石定年给出约 45.1 亿年的约束。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
