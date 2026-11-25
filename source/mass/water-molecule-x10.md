---
id: mass.water-molecule-x10
title: 水分子：2.99×10⁻²⁶ kg，最常见的三原子分子 × 10：一次尺度换算
titleEn: Water molecule × 10
summary: 以「水分子：2.99×10⁻²⁶ kg，最常见的三原子分子」的 2.992×10^-26 kg 为基准，按 ×10 换算得到 2.992×10^-25
  kg；用于把相邻尺度锚点连起来，不是新的独立测量。
dimension: mass
category: 生命与人体
displayValue: 2.992×10^-25 kg
quantity:
  value: 2.9915000000000003e-25
  unit: kg
  measure: 尺度换算量：mass.water-molecule 的 2.992×10^-26 kg × 10
  measureLabel: 由「水分子：2.99×10⁻²⁶ kg，最常见的三原子分子」按 ×10 换算的参照值
  approximate: true
related:
- space.water-molecule
- mass.hydrogen-atom
- mass.proton
- elements.o
- elements.h
conditions: 以 mass.water-molecule 的既有量值 2.992×10^-26 kg 为基准，倍率 10；只做算术换算，不新增独立测量。
tags:
- 尺度换算
- 1.4.0新增
- mass
reviewStatus: reviewed
sources:
- title: 'PubChem: Water (CID 962)'
  url: https://pubchem.ncbi.nlm.nih.gov/
  publisher: National Library of Medicine
  accessed: '2026-11-25'
- title: CODATA Recommended Values of the Fundamental Physical Constants
  url: https://physics.nist.gov/cuu/Constants/
  publisher: National Institute of Standards and Technology
  accessed: '2026-11-25'
- title: BioNumbers — The Database of Key Numbers in Molecular and Cell Biology
  url: https://bionumbers.hms.harvard.edu/
  publisher: Harvard Medical School
  accessed: '2026-11-25'
visual:
  template: mass-scale
  scene: mass.scale
  caption: "水分子：2.99×10⁻²⁶ kg，最常见的三原子分子 × 10：一次尺度换算 · 2.992×10^-25 kg"
  note: 位置按 log10(m/kg) 计算；本条为倍率换算，显示在对应质量档位，不代表新的独立测量。
review:
  method: derived-scale-audit
  date: '2026-11-25'
  notes:
  - 1.4.0 新增尺度锚点：以 mass.water-molecule 为基准做倍率换算；量值与单位可复算，来源沿用基准条目。
mass:
  type: baryonic
  includesDarkMatter: false
  method: derived from mass.water-molecule
grade: B
---
## 量值是什么

本条量值是 2.992×10^-25 kg，由「水分子：2.99×10⁻²⁶ kg，最常见的三原子分子」的基准读数 2.992×10^-26 kg 乘以 10 得到。基准条目量的是由 IUPAC 原子量计算的分子质量 18.0153 u，按 CODATA 原子质量常数换算；含结合能亏损；换算不改变物理对象，只改变我们把它放在哪一档尺度上。[1]

## 怎样换算

算式可以逐步复核：2.992×10^-26 kg × 10 = 2.992×10^-25 kg。如果先把基准值换成另一单位，再乘同一个倍率，结果必须回到同一量级；单位、倍率与有效数字要一起记录，不能只留下一个数。[2]

## 为什么保留这个锚点

这个锚点用于连接「水分子：2.99×10⁻²⁶ kg，最常见的三原子分子」与相邻条目：当读者问“比它大/小一档是什么感觉”时，可以直接引用本条，而不必重新估算。它适合放在尺度阶梯、合集或对象页的对比位置。[3]

## 与相邻尺度放在一起

把本条与水分子（1.5144e-10 m）；氢原子：1.6735×10⁻²⁷ kg，结合能亏损最小的原子（1.67353e-27 kg）并排时，先看单位是否统一，再看参照物是直径、半径还是轨道距离；同一串数字在不同口径下可能差两倍甚至更多。基准条目的摘要提供了一个可读的起点：一个水分子由两个氢原子和一个氧原子组成，分子质量 18.0153 u，合 2.9915×10⁻²⁶ kg。它的质量略小于三个孤立原子之和，差额就是分子结合能。[1][3]

## 误差怎样传递

误差沿用基准条目：基准值的有效数字决定换算结果的有效数字；倍率是精确的整数或简单分数，不会额外增加测量误差。[1][2] 若基准值本身是近似值，换算后仍应保留“约”的限定。

## 边界与常见误解

边界：本条不是新的观测，也不是对基准条目的替代；它不改变 ID、slug 或 canonical，只增加一个可复算的尺度参照。引用时应同时写出基准条目与倍率，避免把换算值误读成独立测量。[3]

常见误解是把换算结果当成“新发现”的独立测量。它其实是基准值的算术投影；如果没有新的观测、样本或模型，误差不会因为乘了一个漂亮倍率而变小。引用本条时，应同时给出基准条目、倍率与单位。[2][3]

## 复算练习

拿一张纸先写下基准值、单位与倍率，再按“先换单位、后乘倍率”的顺序算一遍；把结果与本站显示的参照值对照，若差一个数量级，多半是单位或参照口径没有对齐。最后检查有效数字：基准值有几位可信数字，换算结果就保留几位，不把计算器尾数全部抄上。[1][2]
