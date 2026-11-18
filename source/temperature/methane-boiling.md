---
id: temperature.methane-boiling
title: 甲烷沸点
titleEn: Methane normal boiling point
dimension: temperature
category: 低温
summary: >-
  纯甲烷在 1 atm 下的正常沸点约 111.7 K（−161.5 °C）。资料之间从 111 K 到 −162 °C
  的差异来自圆整与数据选择；液化天然气是混合物，不能直接套用纯甲烷数值。
quantity:
  value: 111.7
  unit: K
  measure: 甲烷常压沸点近似参考
  approximate: true
  measureLabel: 甲烷常压沸点近似参考
displayValue: 约 111.7 K（−161.45 °C）
related:
  - temperature.liquid-hydrogen
  - temperature.liquid-oxygen
  - temperature.ammonia_boiling
  - temperature.water-freezing
  - temperature.absolute-zero
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 'About Cryogenics: normal boiling points'
    url: >-
      https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics
    publisher: NIST
    accessed: '2026-11-06'
  - title: 'Methane: phase-change data'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C74828&Mask=4'
    publisher: NIST Chemistry WebBook
    accessed: '2026-11-06'
  - title: Methane
    url: 'https://www.britannica.com/science/methane'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: methane-boiling
  icon: "\U0001F9CA"
  relatedLabels: 液氮、液氢、氧沸点、温室效应
conditions: 纯甲烷（CH₄）在 1 atm（101.325 kPa）下液—气平衡的正常沸点；不含乙烷、丙烷、氮等组分的液化天然气，也不适用于其他储存压力。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NIST 低温资料表列甲烷 111.7 K（−161.5 °C）；NIST WebBook 给出 Tboil 111 ± 2 K，为 13
      个测量值的平均；Britannica 给出 −162 °C。
    - 三者差别约 0.5 K，来自圆整与原始数据选择；正文保留 111.7 K 并说明纯甲烷与液化天然气的区别。
  originalQuantity:
    value: 111.7
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  111.7 K 是常压正常沸点的圆整参考，NIST WebBook 的同类数据离散约 ±2 K，Britannica 取整为 −162
  °C；纯度、压力与样品组成会改变实际沸点。
visual:
  template: phase-vessel
  profile: liquid
  caption: 甲烷低温样品池
  note: >-
    纯甲烷常压沸点的示意样品池；液体颜色与气泡是可视化编码，非按比例绘制，也不是实验观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: frost
  color: '#a2d3de'
  symbol: CH₄
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

甲烷是最简单的烃，常压下是无色气体；冷到约 111.7 K 时液化。这个温度是纯甲烷的正常沸点，不是天然气的统一沸点，也不是甲烷的燃烧温度。甲烷在 1 atm 下的熔点约为 −182.5 °C（90.65 K），因此液态纯甲烷的常压稳定温区大致是 90.7–111.7 K。[3]

## 怎样测到

沸点由饱和蒸气压与外压平衡决定：把纯甲烷样品置于恒温浴中，测量液—气两相平衡时的蒸气压，找到蒸气压等于 101.325 kPa 的温度。NIST 低温资料表列甲烷为 111.7 K（−161.5 °C）；NIST WebBook 的相变数据给出 111 ± 2 K，是 13 个测量值的平均；Britannica 给出 −162 °C。[1][2][3] 三者的差别只有约 0.5 K，主要来自圆整和原始数据选择。测量还要求样品中氮等不凝性气体足够少，否则总压会被杂质分压抬高，读出的沸点随之偏移。

## 数值与口径

111.7 K 减 273.15 得 −161.45 °C，NIST 表按一位小数写成 −161.5 °C，Britannica 取整为 −162 °C。[1][3] 111 ± 2 K 中的 ±2 K 是数据离散范围，不是每次测量的固定误差。[2] 沸点必须附压力；压力降低时甲烷在更低温度沸腾，加压则升高。液化天然气含乙烷、丙烷等重组分，其泡点通常高于纯甲烷，不能把 111.7 K 当作所有液化天然气的储运温度。

## 常见误解

第一，把天然气等同于纯甲烷；混合物各组分的沸点不同，储运设计要按组成计算。[2][3] 第二，把沸点当成“燃烧所需的温度”；甲烷的点燃与火焰温度是另一类问题，常压沸点只描述相变。第三，把 111.7 K 读成 111.7 °C；两者相差 273.15 K。第四，认为低沸点就等于高热值；按质量与按体积的热值口径不同。第五，把储罐压力与沸点混为一谈；储罐接近常压，但蒸发会改变气相组成与泡点。

## 与其他温区的关系

111.7 K 高于氧的 90.2 K 和氮的 77.4 K，低于氨的 239.8 K 和水的 373.15 K。[1][3] 它比液氢的 20.3 K 暖得多，因此液化天然气所需的制冷量低于液化氢，但仍属于低温工程范围。与甲烷熔点 90.65 K 相比，常压液态甲烷只存在于约 21 K 的窄温区内。[3]
