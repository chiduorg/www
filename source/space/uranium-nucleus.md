---
id: space.uranium-nucleus
title: 铀-238原子核
titleEn: Uranium Nucleus
dimension: length
category: 原子与分子
summary: >-
  本页指定铀-238这一核素，并采用IAEA核电荷半径数据库所列的均方根电荷半径5.8571飞米，评估不确定度0.0033飞米。它是电荷分布口径，不是原子直径或核硬球直径。
quantity:
  value: 5.8571e-15
  unit: m
  measure: 铀-238核电荷分布的均方根半径
  approximate: true
displayValue: 约 5.8571 fm（²³⁸U电荷rms半径）
related:
  - space.carbon-nucleus
  - space.iron-nucleus
  - space.proton
  - space.atom
  - space.strong-force
  - time.u238-half-life
reviewStatus: reviewed
sources:
  - title: Nuclear Charge Radii — 238U row
    url: 'https://www-nds.iaea.org/radii/'
    publisher: IAEA Nuclear Data Services / I. Angeli and K. Marinova
    accessed: '2026-11-06'
  - title: uranium
    url: 'https://www.britannica.com/science/uranium'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: atom
    url: 'https://www.britannica.com/science/atom'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: uranium-nucleus
  icon: ☢
  relatedLabels: 核裂变、放射性衰变、核反应堆、核武器、液滴模型、壳模型、超重元素
conditions: 指定核素²³⁸U；采用IAEA评估表rms电荷半径5.8571±0.0033 fm；不是原子直径、核硬球半径或旧概述中的15 fm核直径。
uncertainty: 所引IAEA评估表给出表列不确定度0.0033 fm；均方根电荷半径由多类实验联合评估，属于拟合口径，不是单次测量的硬边界误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；直接下载IAEA核电荷半径表并定位铀-238行，确认5.8571±0.0033 fm。
    - 用Britannica铀页和原子页核对铀的放射性、同位素及原子与核的尺度差别。
  originalQuantity:
    value: 1.5e-14
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: nucleus
  variant: rms
  color: '#b9b4c9'
  referenceAxis: x
  caption: 铀-238的一段rms电荷半径
  note: 从点云中心到标线端点表示一个rms半径，非核直径或清晰边缘；点云分布为示意，非按比例，非观测重建。
  framePadding: 0.82
  sourceMeasure: 铀-238核电荷分布的均方根半径
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 原子核
---
## 它是什么

铀-238 是铀的一种放射性同位素，原子核含 92 个质子和 146 个中子。[2] 本页的 5.8571 飞米指核内电荷分布的均方根半径，而不是整个铀原子的半径，也不是原子核的硬球外壳。[1] 铀原子仍由电子云决定大小，直径约 10⁻¹⁰ 米，核与原子之间相差约五个数量级。[3]

## 怎样知道

IAEA 的评估表把光学同位素位移、Kα X 射线位移、缪子谱和电子散射等资料联合起来，对核电荷半径作自洽评估。[1] 铀-238 一行列出 5.8571 飞米，不确定度 0.0033 飞米。这个数值描述电荷分布的平均展宽，并不是从核中心走到“边缘”的某一次距离测量；因此它既能用于不同核素间的比较，也保留了模型与数据的限制。

## 数值与口径

1 飞米等于 10⁻¹⁵ 米，5.8571 飞米约合 5.86×10⁻¹⁵ 米。若把半径二倍，得到约 11.7142 飞米，但那只能叫“两倍电荷半径”，不能当作核直径。[1] 旧条目曾用约 15 飞米作概述，那是口径不清的旧值；现在改用 ²³⁸U 的电荷均方根半径，比较时也必须与碳-12、铁-56 使用同一口径。

## 常见误解

把 5.8571 飞米理解成“铀核直径约 5.86 飞米”，会把半径当成直径，数值差一倍；把它当成铀原子半径，则会把核与电子云混在一起。[1][3] 还有人说“铀核最大，所以铀原子也最大”，这也是尺度层级的混淆：原子大小主要由电子结构决定，重核与轻核的原子直径差别远小于核半径之间的差别。[2][3] 铀的放射性来自核的不稳定，不是“核特别大”本身。

## 与其他尺度的关系

铀-238 核是本站核素比较中的大端：碳-12 约 2.47 飞米，铁-56 约 3.74 飞米，铀-238 约 5.86 飞米，三者都落在 10⁻¹⁵ 米量级。[1] 再往外是约 10⁻¹⁰ 米的原子、约 10⁻⁷ 米的病毒与细胞，以及更宏观的对象。把核半径放进这条轴时，统一用半径口径，才能避免把“核很大”误读成“原子很大”。
