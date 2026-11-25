---
id: time.galaxy-cluster-crossing-x3600
title: 星系穿越星系团的时间 × 3600：一次尺度换算
titleEn: Galaxy Cluster Crossing Time × 3600
summary: 以「星系穿越星系团的时间」的 3.156×10^17 s 为基准，按 ×3600 换算得到 1.136×10^21 s；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: cosmic-time
category: 星系与结构
displayValue: 1.136×10^21 s（约 3.6e+13 年）
quantity:
  value: 1136073600000000000000
  unit: s
  measure: 尺度换算量：time.galaxy-cluster-crossing 的 3.156×10^17 s × 3600
  measureLabel: 由「星系穿越星系团的时间」按 ×3600 换算的参照值
  approximate: true
related:
- space.milky-way
- mass.milky-way
- time.galactic-year
- time.galaxy-formation
- time.one-quintillion-seconds
conditions: 以 time.galaxy-cluster-crossing 的既有量值 3.156×10^17 s 为基准，倍率 3600；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- time
reviewStatus: reviewed
sources:
- title: 'Modern Cosmological Observations and Problems: Clusters of Galaxies'
  url: https://ned.ipac.caltech.edu/level5/Bothun2/Bothun3_2_2.html
  publisher: NASA/IPAC Extragalactic Database (NED)
  accessed: '2026-11-25'
- title: 'How time weathers galaxies: The temporal impact of the cluster environment
    on galaxy formation and evolution'
  url: https://arxiv.org/pdf/2310.07754v1
  publisher: arXiv (O'Neil et al.)
  accessed: '2026-11-25'
- title: 'SI base unit: second (s)'
  url: https://www.bipm.org/en/si-base-units/second
  publisher: International Bureau of Weights and Measures (BIPM)
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 time.galaxy-cluster-crossing 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
mode: 时长
chronology:
  status: duration
  plot: false
  note: 本条是持续时间/周期的倍率换算，不是大爆炸后的绝对时点，不放在绝对时间轴上。
visual:
  template: cosmic-web
  scene: time.object
  caption: 星系穿越星系团的时间 × 3600：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#8fa9c9'
  variant: cluster-crossing
---
## 量值是什么

本条量值是 1.136×10^21 s，由「星系穿越星系团的时间」的基准读数 3.156×10^17 s 乘以 3600 得到。基准条目量的是持续时长，不是自大爆炸起的绝对时点；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：3.156×10^17 s × 3600 = 1.136×10^21 s。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「星系穿越星系团的时间」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与银河系（946073047258080000000 m）；银河系：约 2.98×10⁴² kg，含暗物质的总质量（2.98e+42 kg）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：星系穿越星系团的时间，指一个星系从团的一侧运动到另一侧所经历的典型时长。 本条取约 100 亿年，用团的大小和星系速度估算，不是星系形成或落入团中的绝对时刻。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
