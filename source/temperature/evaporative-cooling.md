---
id: temperature.evaporative-cooling
title: 蒸发冷却
titleEn: Evaporative cooling
dimension: temperature
category: 极低温
summary: >-
  蒸发冷却让能量最高的原子逃离势阱，剩余气体重新热化后降温。1995 年 JILA 的铷气体在约 170 nK 出现玻色—爱因斯坦凝聚，后续实验可到约 3
  nK；本条取约 1 nK 作为纳开尔文量级实验参考。
quantity:
  value: 1.e-9
  unit: K
  measure: 蒸发冷却实验达到温度参考
  approximate: true
  measureLabel: 蒸发冷却实验达到温度参考
displayValue: 约 1 nK（10⁻⁹ K）
related:
  - space.moon
  - mass.helium-nucleus
  - temperature.laser-cooling
  - temperature.bose-einstein
  - temperature.quantum-degeneracy
  - temperature.dilution-refrigerator
reviewStatus: reviewed
sources:
  - title: Thirty years of Bose-Einstein Condensates
    url: >-
      https://jila.colorado.edu/news-events/articles/thirty-years-bose-einstein-condensates
    publisher: 'JILA, University of Colorado Boulder'
    accessed: '2026-11-06'
  - title: 'Bose-Einstein Condensate: A New Form of Matter'
    url: >-
      https://www.nist.gov/news-events/news/2001/10/bose-einstein-condensate-new-form-matter
    publisher: NIST
    accessed: '2026-11-06'
  - title: NIST/CU Scientists First to Observe New Quantum Gas
    url: >-
      https://www.nist.gov/news-events/news/1999/09/nistcu-scientists-first-observe-new-quantum-gas
    publisher: NIST
    accessed: '2026-11-06'
conditions: 稀薄碱金属原子气体在磁阱或光阱中的蒸发冷却实验；温度取决于原子种类、密度、势阱深度、射频移除选择和热化效率，不是所有装置共有的固定值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - JILA 回顾给出 1995 年约 10 万个铷-87 原子蒸发冷却到 170 nK、出现凝聚。
    - NIST 2001 年新闻稿给出后续实验约 3 nK；NIST 1999 年新闻稿给出费米气体约 300 nK 进入量子简并。
    - 正文取约 1 nK 为纳开尔文量级参考，并区分凝聚起始温度、更低实验温度与不同气体的简并温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  1 nK 是蒸发冷却实验达到温度的圆整量级参考；1995 年铷凝聚起始约 170 nK，后续报道约 3 nK， 费米气体约 300
  nK。读数受势阱参数、原子数、热化效率和飞行时间成像标定影响，不能当作普遍固定温度。
visual:
  template: cryo-instrument
  profile: evaporation
  caption: 蒸发冷却冷原子阱
  note: >-
    势阱、逃逸原子与原子云为解释性示意，非按比例，也不是实验观测重建；温度对应被俘获气体的温度，不是容器壁或整台装置的温度。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#8fc3df'
  symbol: Evaporative cooling
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

蒸发冷却是让能量最高的原子逃离势阱，剩余原子重新热化后平均能量下降。它和一杯热水靠蒸发变凉相似，但在冷原子实验中由射频场或光场选择性移除“最热”的原子。[1] 它冷却的是被俘获的稀薄气体，不是容器壁或整个实验室。

## 怎样测到

1995 年，JILA 团队先把约 10 万个铷-87 原子装在磁光阱中，再用蒸发冷却降到 170 nK，出现玻色—爱因斯坦凝聚。[1] 温度由关闭势阱后原子云的自由膨胀和速度分布拟合得到；凝聚峰与热背景分离，标志转变开始。[1] NIST 的回顾还提到，后续实验把同一类气体冷到约 3 nK。[2] 1999 年，费米原子气体在约 300 nK 进入量子简并。[3]

## 数值与口径

本条取约 1 nK 作为蒸发冷却实验达到温度的纳开尔文量级参考，即 10⁻⁹ K。它不是某个实验的精确读数：1995 年铷气体的凝聚起始约 170 nK，后续报道的更低温度约 3 nK，费米气体约 300 nK。[1][2][3] 这些数值分别对应不同原子、密度、势阱和测量判据。比较时应写成“某实验的蒸发冷却达到温度”，而不是“蒸发冷却的固定温度”。

## 常见误解

第一，把蒸发冷却理解为“把原子冻住”；逃逸的是最热原子，剩余气体通过碰撞重新分配能量。[1] 第二，把 1 nK 当成绝对零度；它仍高于 0 K，且实验有加热与原子损失。第三，把凝聚温度与装置温度混为一谈；温度计读数、气体温度和势阱参数不是同一口径。第四，以为蒸发冷却可以单独从室温开始；它通常需要激光冷却或磁阱预冷。

## 与其他温区的关系

1 nK 比激光冷却的约 1 μK 低三个量级，也比稀释制冷的 10 mK 低七个量级；它远低于宇宙微波背景的 2.725 K。与 0 K 相比，它仍不是零点。不同量子气体的简并温度随密度变化，蒸发冷却只是把系统推到那个温区的常用手段。[1][2][3]
