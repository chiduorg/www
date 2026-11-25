---
id: temperature.ammonia_boiling
title: 氨的沸点
titleEn: Ammonia normal boiling point
dimension: temperature
category: 低温
summary: 无水氨在约一个标准大气压下的沸点约为 239.8 K。必须区分纯氨与氨水溶液； 同一物质在不同压力下也不能只用一个不带条件的沸点来描述。
quantity:
  value: 239.8
  unit: K
  measure: 无水氨常压沸点参考
  approximate: true
  measureLabel: 无水氨常压沸点参考
displayValue: 约 239.8 K（−33.35 °C）
related:
  - temperature.boiling-water
  - temperature.ethanol_boiling
  - temperature.methane-boiling
  - temperature.dry-ice-sublimation
  - temperature.liquid-hydrogen
  - space.human
reviewStatus: reviewed
sources:
  - title: 'Ammonia, anhydrous: physical and chemical properties'
    url: 'https://m.cameochemicals.noaa.gov/chris/AMA.pdf'
    publisher: NOAA CAMEO / CHRIS
    accessed: '2026-11-06'
  - title: Ammonia phase change data
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7664417&Mask=4'
    publisher: NIST Chemistry WebBook
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: ammonia_boiling
  icon: "\U0001F4A8"
  relatedLabels: 氮肥、哈伯-博施法、工业制冷、氢能经济、二氧化碳、甲烷沸点、水的沸点、乙醇沸点、化学反应平衡
conditions: 无水纯氨（NH₃）在 1 atm（101.325 kPa）下的液—气平衡沸点；不等同于氨水溶液的沸点，也不适用于其他压力或含杂质工业氨。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NOAA CAMEO/CHRIS 第 9.3 项列出 1 atm 沸点 −33.4 °C（239.8 K），并给出临界温度与临界压力。
    - NIST WebBook 给出 239 K 附近的汽化焓与蒸气压方程参数，用于交叉核对常压附近的相变数据。
    - 正文按五节结构重写；保留 239.8 K，补压力、纯氨/氨水与状态区分。
  originalQuantity:
    value: 239.8
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 239.8 K 为 1 atm 下的圆整沸点，资料按 0.1 °C 报出；实际沸点随压力、纯度与溶解气体变化，氨水溶液还会随浓度改变，不能当作单一常数。
visual:
  template: phase-vessel
  profile: liquid
  caption: 氨的常压相变安瓿
  note: >-
    对应氨在给定压力下的沸点参考，不表示氨实际呈蓝色；容器与气泡为示意，非实验重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: frost
  color: '#a5dce7'
  symbol: NH₃
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

氨（NH₃）在常温常压下是无色气体，冷却或加压后液化。无水氨在 1 atm 下的沸点为 239.8 K，即 −33.4 °C。[1] 这里的“氨”指纯氨分子，不是含氨的水溶液。

## 怎样测到或为何是有效温度

沸点测量本质上是找饱和蒸气压等于外界压力的温度。NOAA 的 CHRIS 资料把 1 atm 沸点列为 −33.4 °C（239.8 K），并给出临界温度 406.2 K、临界压力约 11.27 MPa。[1] NIST 的相变数据表也列出 239 K 附近的汽化焓和蒸气压方程，可用于交叉核对。[2] 沸点时液氨的饱和蒸气压恰为 101.325 kPa；外界压力低于此值，氨会在更低温度沸腾，反之则需要更高温度。[1][2]

## 数值与口径

239.8 K 减 273.15 得 −33.35 °C，资料按一位小数报出 −33.4 °C，差异来自圆整。[1] 沸点必须附压力：1 atm 等于 101.325 kPa；压力降低时沸点下降，压力升高时沸点上升。把 239.8 K 与水的 373.15 K 相比，可见氨在常压下比水更容易沸腾。[1][2] 氨水溶液的沸点还随浓度变化，不能与纯氨混用。氨的分子量为 17.03，临界温度 406.2 K、临界压力 11.27 MPa，说明它在常温下只需加压就能液化。[1][2]

## 常见误解

第一，把氨水当成氨；氨水是 NH₃ 的水溶液，浓度改变沸点和蒸气压。第二，认为沸点是物质常数而与压力无关；它只在指定压力下唯一。第三，看到常温下氨是气体，就以为它在常温下“已经沸腾”；沸点描述的是液—气平衡，不是常温状态本身。工业氨常含水分和润滑油气，实际沸点会偏离纯氨，比较数据时要看样品纯度。[2]

## 与其他温区的关系

239.8 K 低于水的 373.15 K 沸点，高于干冰的 194.7 K 升华点，也高于液氮的 77.4 K。它和甲烷 111.7 K、乙醇约 351 K 等常压沸点一起，展示了分子间作用力对相变温度的影响。这些数值都采用 1 atm 口径，若换成其他压力，彼此的相对顺序也可能改变。[1]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
