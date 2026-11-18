---
id: space.iron-nucleus
title: 铁-56原子核
titleEn: Iron-56 Nucleus
dimension: length
category: 原子与分子
summary: >-
  IAEA核电荷半径评估表给出铁-56的均方根电荷半径3.7377飞米，表列不确定度0.0016飞米。本页使用这一明确的电荷分布量替换旧的4.6飞米，并说明它不等于铁原子半径。
quantity:
  value: 3.7377e-15
  unit: m
  measure: 铁-56基态核均方根电荷半径（2013评估表）
  approximate: true
displayValue: 约 3.7377 fm（rms电荷半径）
related:
  - space.carbon-nucleus
  - space.proton
  - space.uranium-nucleus
  - space.atom
  - space.neutron-star
reviewStatus: reviewed
sources:
  - title: Nuclear Charge Radii — 56Fe row
    url: 'https://www-nds.iaea.org/radii/'
    publisher: IAEA Nuclear Data Services / Angeli & Marinova
    accessed: '2026-11-06'
  - title: 2022 CODATA — proton rms charge radius
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?rp'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: nuclear binding energy
    url: 'https://www.britannica.com/science/nuclear-binding-energy'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: atom
    url: 'https://www.britannica.com/science/atom'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: iron-nucleus
  icon: "\U0001F7E4"
  relatedLabels: 恒星核合成、超新星爆发、碳-12原子核、铀原子核、硅燃烧阶段
conditions: 指定铁-56基态核；采用IAEA评估表均方根电荷半径3.7377±0.0016 fm；这是电荷分布口径，不是铁核硬球直径，也不是铁原子半径。
uncertainty: 所引IAEA评估表给出表列不确定度0.0016 fm；均方根电荷半径是联合评估的拟合量，不能当作单次测量的硬边界误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；直接下载并查看IAEA核电荷半径表的铁-56行，确认3.7377±0.0016 fm。
    - 用NIST质子页、Britannica核结合能页和Britannica原子页核对核子尺度、“铁峰”表述与原子尺度。
  originalQuantity:
    value: 4.6e-15
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: nucleus
  variant: rms
  color: '#b0b8ca'
  referenceAxis: x
  caption: 铁-56的一段rms电荷半径
  note: 从点云中心到标线端点表示一个rms半径，非核直径或清晰边缘；点云分布为示意，非按比例，非观测重建。
  framePadding: 0.82
  sourceMeasure: 铁-56基态核均方根电荷半径（2013评估表）
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 原子核
---
## 它是什么

铁-56原子核由 26 个质子和 30 个中子组成，是铁的一种稳定同位素。本条给出的 3.7377 飞米是它的均方根电荷半径，描述核内电荷分布相对中心的统计展宽，不是原子核的清晰外壳。[1] 铁原子整体仍由电子云决定大小，直径在 10⁻¹⁰ 米量级，和核半径差约五个数量级。[4]

## 怎样知道

IAEA 评估表把光学同位素位移、缪子谱与电子散射等资料联合起来，得到一套自洽的均方根电荷半径。[1] 铁-56 一行列出 3.7377 飞米，表列不确定度 0.0016 飞米。这里的“评估”意味着数值经过多组数据协调，而不是某一次实验直接拍出一颗核的边缘；不同核素的数值也因此可以放在同一口径下比较。

## 数值与口径

1 飞米等于 10⁻¹⁵ 米，3.7377 飞米约合 3.74×10⁻¹⁵ 米。半径不是直径：二倍得到约 7.4754 飞米，也只是“两倍电荷半径”，不能叫硬球直径。[1] 同一张表中铁-54 为 3.6933 飞米、铁-57 为 3.7532 飞米、铁-58 为 3.7745 飞米，说明铁的同位素各有自己的电荷半径；作为核子参照，质子约 0.84075 飞米。[1][2]

## 常见误解

常听到“铁-56是结合能最高、因此最稳定的核”，但 Britannica 只把每核子结合能曲线的最大值描述在“铁附近”，并未把某一核素的绝对排名钉死；而且本条量的是电荷半径，不能用来证明稳定性排序。[3] 另一个误解是把 3.7377 飞米当成铁原子半径，或认为所有铁同位素的核大小相同。[1] 半径、结合能与原子半径是三种不同口径。

## 与其他尺度的关系

铁-56 核在尺度轴上位于碳-12 核（约 2.47 飞米）与铀-238 核（约 5.86 飞米）之间，三者都属于 10⁻¹⁵ 米量级。[1] 它们与原子（约 10⁻¹⁰ 米）之间隔着约五个数量级，与中子星（约 10 千米）之间则隔着更多数量级。比较这些对象时，统一取半径或统一取直径，比记住单个数字更重要。
