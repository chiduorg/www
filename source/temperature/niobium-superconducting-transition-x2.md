---
id: temperature.niobium-superconducting-transition-x2
title: 铌超导转变 × 2：一次尺度换算
titleEn: Niobium superconducting transition × 2
summary: 以「铌超导转变」的 9.2 K 为基准，按 ×2 换算得到 18.4 K；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: temperature
category: 低温
displayValue: 18.4 K（约 -254.75 °C）
quantity:
  value: 18.4
  unit: K
  measure: 尺度换算量：temperature.niobium-superconducting-transition 的 9.2 K × 2
  measureLabel: 由「铌超导转变」按 ×2 换算的参照值
  approximate: true
related:
- temperature.liquid-hydrogen
- temperature.liquid-nitrogen
- temperature.ybco-superconducting-transition
- temperature.absolute-zero
- temperature.mgb2-critical-temperature
- elements.nb
conditions: 以 temperature.niobium-superconducting-transition 的既有量值 9.2 K 为基准，倍率 2；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- temperature
reviewStatus: reviewed
sources:
- title: Evaluation of the Propensity of Niobium to Absorb Hydrogen During Fabrication
    of SRF Cavities
  url: https://pmc.ncbi.nlm.nih.gov/articles/PMC4548874/
  publisher: NIST Journal of Research, original study
  accessed: '2026-11-25'
- title: 'SRM 767a: Superconductive Thermometric Fixed Point Device'
  url: https://tsapps.nist.gov/srmext/certificates/archives/767a.%20Feb%2014,%201992.pdf
  publisher: NIST
  accessed: '2026-11-25'
- title: A Comparison of Methods for Computing the Residual Resistivity Ratio of High-Purity
    Niobium
  url: https://www.nist.gov/publications/comparison-methods-computing-residual-resistivity-ratio-high-purity-niobium
  publisher: NIST
  accessed: '2026-11-25'
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 temperature.niobium-superconducting-transition 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
visual:
  template: superconducting-sample
  scene: temperature.object
  caption: 铌超导转变 × 2：一次尺度换算 · 倍率换算示意
  note: 倍率换算用于连接相邻尺度锚点；场景为风格化示意，不表示新的独立观测。
  color: '#9fcfea'
---
## 量值是什么

本条量值是 18.4 K，由「铌超导转变」的基准读数 9.2 K 乘以 2 得到。基准条目量的是体相金属铌低场超导转变参考；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：9.2 K × 2 = 18.4 K。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「铌超导转变」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与液氢温度（20.3 K）；液氮温度（77.34 K）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：金属铌在低场、高纯样品中的超导转变温度通常写作约 9.2 K（−263.95 °C）； NIST 固定点证书测得中点为 9.2488 K。这个温度只是转变条件之一，不能保证任意磁场、电流或样品形态下都无阻载流。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
