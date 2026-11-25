---
id: space.carbon-nucleus
title: 碳-12原子核
titleEn: Carbon-12 Nucleus
dimension: length
category: 原子与分子
summary: >-
  碳-12原子核的均方根电荷半径，在IAEA所引2013年评估表中为2.4702飞米，表列不确定度为0.0022飞米。这个量描述电荷分布，并非原子核硬球外壳的位置，也不是原子直径。
quantity:
  value: 2.4702e-15
  unit: m
  measure: 碳-12基态核的均方根电荷半径（2013评估表）
  approximate: true
displayValue: 约 2.4702 fm（rms电荷半径）
related:
  - space.proton
  - space.atom
  - space.iron-nucleus
  - space.uranium-nucleus
  - space.helium-atom
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: Nuclear Charge Radii — 12C row
    url: 'https://www-nds.iaea.org/radii/'
    publisher: IAEA Nuclear Data Services / Angeli & Marinova
    accessed: '2026-11-06'
  - title: 2022 CODATA — proton rms charge radius
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?rp'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: atom
    url: 'https://www.britannica.com/science/atom'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: carbon-nucleus
  icon: "\U0001F7E2"
  relatedLabels: 恒星核合成、三氦过程、人择原理、铁-56原子核、超新星爆发
conditions: 指定碳-12基态核；采用IAEA评估表的均方根电荷半径2.4702±0.0022 fm；这是电荷分布口径，不是核直径、硬球半径或原子半径。
uncertainty: 所引IAEA评估表给出表列不确定度0.0022 fm，反映评估数据与方法的综合误差；均方根电荷半径是拟合量，不是某一台仪器的单次读数。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；直接下载并查看IAEA核电荷半径表的碳-12行，确认2.4702±0.0022 fm。
    - 用NIST质子电荷半径页和Britannica原子页核对核子与原子尺度的比较口径。
  originalQuantity:
    value: 2.7e-15
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: nucleus
  variant: rms
  color: '#94b5d0'
  referenceAxis: x
  caption: 碳-12的一段rms电荷半径
  note: 从点云中心到标线端点表示一个rms半径，非核直径或清晰边缘；点云分布为示意，非按比例，非观测重建。
  framePadding: 0.82
  sourceMeasure: 碳-12基态核的均方根电荷半径（2013评估表）
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 原子核
---
## 它是什么

碳-12原子核由六个质子和六个中子组成，是碳元素中最常见的同位素。本条讨论的不是整个碳原子，而是原子核内部电荷分布的统计宽度：均方根电荷半径 2.4702 飞米。[1] 原子直径约 10⁻¹⁰ 米，原子核只占其中极小一部分；把两者画成同心球时，核几乎是一个点。[3]

## 怎样知道

IAEA 的核电荷半径表不是把各家测量简单堆在一起，而是把光学同位素位移、Kα X 射线位移，以及缪子谱和电子散射得到的绝对半径联合评估，给出一套自洽的均方根值。[1] 碳-12 这一行的 2013 年发表值为 2.4702 飞米，表列不确定度 0.0022 飞米；这类数值依赖核电荷分布的拟合模型，不能读成“核边缘到中心的硬距离”。

## 数值与口径

1 飞米等于 10⁻¹⁵ 米，所以 2.4702 飞米约为 2.47×10⁻¹⁵ 米。若把半径二倍成 4.9404 飞米，得到的只是“两倍电荷半径”，仍不是可直接称为直径的硬球尺寸。[1] 同一评估表中碳-13 为 2.4614 飞米、碳-14 为 2.5025 飞米，说明同位素之间也有差异；作为对照，质子的电荷半径约 0.84075 飞米。[1][2]

## 常见误解

把 2.4702 飞米说成“碳核的直径”，会把半径和直径混为一谈，数值被少算一半。另一个误解是把原子核半径当成原子半径；两者相差约五个数量级，原子的大小主要由电子分布决定。[3] 也不能认为所有碳同位素的核都一样大，或把电荷半径当成质量半径；不同测量定义回答的是不同问题。[1]

## 与其他尺度的关系

沿尺度轴排列，质子约 0.84 飞米，碳-12 核约 2.47 飞米，铁-56 核约 3.74 飞米，铀-238 核约 5.86 飞米，而原子约 0.1 纳米。[1][3] 这些核半径处在同一数量级，却仍随核素变化；比较时应统一使用电荷均方根半径，不能一边取半径、一边取直径。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 2.47×10⁻¹⁵ 米，换算后是 2.47×10⁻⁶ 纳米；约 3.09×10⁻¹¹ 根头发丝直径（8×10⁻⁵ 米）。这把尺子只改写单位，不改变量值；它把本条固定在空间轴的 10⁻¹⁵ 量级附近。

读图时先看量级，再看倍数：10⁻¹⁵ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
