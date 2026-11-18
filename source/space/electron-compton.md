---
id: space.electron-compton
title: 电子康普顿波长
titleEn: Electron Compton Wavelength
dimension: length
category: 原子与分子
summary: 电子的普通康普顿波长约为2.4263皮米。它由h/(mₑc)定义；NIST另列的约化康普顿波长约为0.3862皮米，两者相差2π，不能互换。
quantity:
  value: 2.42631023538e-12
  unit: m
  measure: 电子普通康普顿波长 h/(mₑc)，非约化康普顿波长
  approximate: true
displayValue: 约 2.4263 pm（普通康普顿波长）
related:
  - space.atom
  - space.proton
  - space.positronium
  - space.quantum-fluctuation
  - space.helium-atom
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: 2022 CODATA — Compton wavelength
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?ecomwl'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: 2022 CODATA — reduced Compton wavelength
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?ecomwlbar'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: Compton effect
    url: 'https://www.britannica.com/science/Compton-effect'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: atom
    url: 'https://www.britannica.com/science/atom'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: electron-compton
  icon: ⚡
  relatedLabels: 量子电动力学、康普顿散射、光子、费曼图、非线性康普顿散射、汤姆逊散射
conditions: 电子在普通康普顿波长定义下的特征长度；不是电子硬球直径，也不等同于除以2π的约化值或运动电子的德布罗意波长。
uncertainty: 2022 CODATA给出的标准不确定度为7.6×10⁻²²米，相对不确定度约3.1×10⁻¹⁰；数值是常数组合的计算结果，不是对电子边界的直接测量。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch打开NIST普通与约化康普顿波长页，核对数值、单位说明与不确定度。
    - 用Britannica康普顿效应页核对散射中波长增加的定义，用Britannica原子页核对原子尺度；明确普通值与约化值差2π。
  originalQuantity:
    value: 2.4e-12
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: wave
  variant: ordinary
  color: '#93bddb'
  referenceAxis: x
  caption: 电子普通康普顿波长h/(mc)
  note: 同相位两端之间一整周期对应参考长度；波纹振幅与粒子亮点为示意，非按比例，非观测重建，不代表电子实体边界或真实运动。
  framePadding: 0.27
  sourceMeasure: 电子普通康普顿波长 h/(mₑc)，非约化康普顿波长
  scene: space.object
measureType: 波长
tags:
  - 原子与分子
  - 波长
---
## 它是什么

电子的康普顿波长是由电子质量、光速和普朗克常数组合出来的特征长度，普通定义写作 λC=h/(mₑc)。[1] 它出现在光子被电子散射的公式里，描述波长随散射角改变的比例，而不是电子这个粒子的外径。2022 CODATA 给出的普通康普顿波长约为 2.4263 皮米，属于常数组合的计算值，不是某台仪器对电子边界的读数。

## 怎样知道

康普顿在 X 射线被电子散射的实验中观察到，散射后光子的波长变长，且改变量与散射角有关；这一现象不能用经典波动图像解释，却与光子—电子碰撞的能量、动量守恒相符。[3] 现代数值则由 NIST 根据电子质量等基本常数计算并发布，普通值与约化值分别列表，单位和定义都写明。[1][2] 因此“怎样知道”包括两层：实验确认散射规律，常数测量提供精确数值。

## 数值与口径

NIST 给出的普通康普顿波长为 2.42631023538×10⁻¹² 米，标准不确定度 7.6×10⁻²² 米；约化康普顿波长为 3.8615926744×10⁻¹³ 米，即约 0.3862 皮米。[1][2] 两者相差 2π，因为约化值使用 ħ 而不是 h。NIST 还注明普通值的单位按“米每周期”理解；引用时必须写清是哪一种定义，不能把 2.4263 皮米和 0.3862 皮米当成两个不同粒子的尺寸。

## 常见误解

最常见的误解是把康普顿波长当成电子半径或直径。它只是一个出现在散射公式中的特征长度，电子在现有实验里没有可分辨的硬球边界。[1] 另一个误解是把它与运动电子的德布罗意波长混为一谈：后者随电子动量变化，前者只由电子质量决定。把普通值与约化值互换，也会让结果差 2π 倍。[2]

## 与其他尺度的关系

在尺度轴上，2.4263 皮米等于 0.0024263 纳米，约为原子直径（约 0.1 纳米）的四十分之一。[1][4] 它远大于核子电荷半径，也小于康普顿实验所用 X 射线的波长。[3] 电子—正电子湮灭产生的 511 千电子伏光子，其波长也落在这一量级；这说明康普顿波长连接的是粒子质量与辐射波长，而不是给粒子量“身高”。
