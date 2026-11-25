---
id: space.quantum-fluctuation
title: 量子涨落
titleEn: Quantum Fluctuation
dimension: length
category: 量子与粒子
summary: 量子涨落描述量子态中物理量的统计变化。以电磁真空为例，研究者可以测量特定设置下的场相关性；这不同于观察一颗有固定尺寸的粒子，也不同于证实时空泡沫。
quantity:
  value: null
  unit: m
  measure: 未指定场、状态与相关函数的涨落长度
  approximate: true
  status: undetermined
displayValue: 比较长度未定（量子涨落没有统一直径）
related:
  - space.quantum-foam-bubble
  - space.planck
  - temperature.absolute-zero
  - temperature.room-temperature
reviewStatus: reviewed
sources:
  - title: Vacuum Field Fluctuations
    url: 'https://qoe.ethz.ch/research/vac-field-fluc.html'
    publisher: ETH Zurich / Quantum Optoelectronics Group
    accessed: '2026-11-06'
  - title: Fluctuations in the void
    url: >-
      https://ethz.ch/en/news-and-events/eth-news/news/2019/04/fluctuations-in-the-void.html
    publisher: ETH Zurich
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: quantum-fluctuation
  icon: "\U0001F30A"
  relatedLabels: 不确定性原理、卡西米尔效应、真空涨落、霍金辐射、宇宙暴胀、量子泡沫、时空拓扑
conditions: 本条只讨论指定场、频带与相关函数下的涨落测量；未指定观测量和实验设置时，不参与长度轴比较。
uncertainty: 涨落本身是统计分布，没有单一尺寸；实验给出的相关长度与频带、晶体、温度及信号处理有关，不能外推为普适误差或通用直径。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch核对ETH研究页与新闻页，确认直接测量的是太赫兹电场的时空相关性。
    - 明确区分实验室真空涨落与量子引力时空泡沫，不把信号说成虚粒子轨迹。
  originalQuantity:
    value: 1.e-33
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: field
  variant: vacuum
  color: '#8fb7c9'
  referenceAxis: x
  caption: 电磁真空场相关的测量示意
  note: 场线与采样点为示意，非按比例，非观测重建；不代表虚粒子的实体边界。
  framePadding: 0.3
  sourceMeasure: 太赫兹频带内的电场时空相关性，仅作概念参照
  scene: space.object
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
  - 未定量值
---
## 量子涨落是什么

量子涨落指量子态中物理量的统计起伏。以电磁场为例，即使处于能量最低的真空态，电场仍会在平均值附近涨落；平均值接近零，不等于每次测量都得到零。这种零点场不是普通的热噪声：把温度降到绝对零度，真空态仍保留涨落。[1][2]

## 怎样知道它存在

真空涨落早期多通过间接效应认识，如自发辐射、兰姆位移和卡西米尔力。2019 年 ETH 团队首次直接测量真空中太赫兹电场的时空相关性，方法是用电光采样让电场改变探测光的偏振，再用两束短脉冲比较不同时间与位置的场。[2] 这是对特定频带、特定状态的场相关测量，不是“看见虚粒子”。[1]

## 数值与口径

实验把装置冷却到约 −269 ℃，以压低热辐射，使剩余信号来自真空态；探测频率在太赫兹量级（约 10¹² 赫兹），对应自由空间波长约 0.3 毫米。[2] 测量在时间与空间上都优于一个振荡周期，这说的是相关测量有多精细，不是场量子有多大；这些数字描述装置与频带，不是涨落本身的“直径”。[2]

## 常见误解

误解之一是把量子涨落画成不断冒出又消失的小球；场相关是统计量，单次事件不能定义它的边界。[1] 误解之二是把真空涨落与时空泡沫混为一谈：前者已在实验室测量，后者仍是量子引力模型中的假说。[2]

## 与其他尺度的关系

本条的参照是探测频带与相关函数的尺度：约 10¹² 赫兹对应约 0.3 毫米波长，远大于原子（约 10⁻¹⁰ 米），更远大于普朗克长度。具体比较必须先说明取的是波长、相关长度还是单次采样分辨率，否则没有唯一数值。[1][2] 与绝对零度条目相连可理解“降温只压低热噪声，不关闭量子涨落”。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]
