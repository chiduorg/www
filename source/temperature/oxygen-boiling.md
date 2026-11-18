---
id: temperature.oxygen-boiling
title: 氧沸点
titleEn: Oxygen normal boiling point
dimension: temperature
category: 低温
summary: >-
  纯氧在 1 atm 下的正常沸点为 90.2 K（−183.0 °C），与“液氧温度”描述同一物理量。
  这个条目保留为独立入口，重点说明沸点的压力口径与常见混淆，而不是另造一个数值。
quantity:
  value: 90.2
  unit: K
  measure: 纯氧正常沸点参考
  approximate: true
  measureLabel: 纯氧正常沸点参考
  uncertainty: 0.2
displayValue: 约 90.2 K（−182.95 °C）
related:
  - temperature.liquid-oxygen
  - temperature.liquid-nitrogen
  - temperature.liquid-hydrogen
  - temperature.methane-boiling
  - temperature.boiling-water
reviewStatus: reviewed
sources:
  - title: 'Oxygen: phase change data'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782447&Mask=4'
    publisher: NIST Chemistry WebBook
    accessed: '2026-11-06'
  - title: 'About Cryogenics: normal boiling points'
    url: >-
      https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics
    publisher: NIST
    accessed: '2026-11-06'
  - title: Oxygen
    url: 'https://www.britannica.com/science/oxygen'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: oxygen-boiling
  icon: "\U0001FAE7"
  relatedLabels: 液氮、液氢、航天、氧乙炔火焰
conditions: >-
  纯氧（O₂）在 1 atm（101.325 kPa）下液—气平衡的正常沸点；与 temperature.liquid-oxygen
  使用同一物理口径，不适用于加压储罐或含杂质的工业氧。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NIST WebBook 列出 Tboil 90.2 K、不确定度 0.2 K；NIST 低温资料表与 Britannica 均给出 −183.0
      °C。
    - 该条目与液氧温度采用同一常压相变参考；正文按五节独立撰写，说明名称关系、压力口径与常见误解，quantity 数值未改。
  originalQuantity:
    value: 90.2
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 90.2 K 是 1 atm 下的圆整沸点，NIST WebBook 给出 0.2 K 不确定度；压力、样品纯度与测量方法会带来额外偏差。
visual:
  template: phase-vessel
  profile: liquid
  caption: 氧常压沸点参考
  note: >-
    与液氧条目为同一物理参考；容器与气泡为示意，非按比例绘制，也不是另一种氧相变的观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#8dbff2'
  symbol: O₂
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

氧沸点指纯氧在 1 atm 下由液态变为气态、气液两相平衡的温度，约 90.2 K，即 −183.0 °C。[1][2] 它与“液氧温度”指向同一个物理量：液氧之所以能在常压下存在，是因为温度低于这个沸点；两者不是两次独立测量，也不是两种不同的氧。

## 怎样测到

测量时把纯氧封入可恒温的容器，记录不同温度下的饱和蒸气压，找到蒸气压等于 101.325 kPa 的点。NIST Chemistry WebBook 给出 Tboil 90.2 K 和 0.2 K 不确定度；NIST 低温资料表列出氧 90.2 K（−183.0 °C）；Britannica 的氧性质表同样给出 −183.0 °C。[1][2][3] 三份资料采用相同常压口径，差别只在圆整。测量应沿氧的饱和蒸气压曲线取点，避免把超临界区或已凝固的样品误当作正常沸点。

## 数值与口径

90.2 K 减 273.15 得 −182.95 °C，资料写作 −183.0 °C。[1][2] 这个数值附有 1 atm 条件；若压力降到 50 kPa，氧的沸点会明显低于 90.2 K，加压储存时则高于 90.2 K。氧的三相点为 54.33 K，凝固点约 54.8 K，均低于正常沸点，说明固态氧、液态氧和气态氧各有不同的稳定区间。[1]

## 常见误解

第一，把“沸点”理解成“变成液体的温度”；对冷却过程而言，90.2 K 也是常压下的凝结温度，但方向相反。第二，把氧沸点当成所有气体的液化温度；氮为 77.4 K、甲烷为 111.7 K，各不相同。[2] 第三，把 90.2 K 当成储罐的日常运行温度；实际储罐可能增压或过冷。[1] 第四，认为液氧的蓝色来自容器；纯氧在 −183 °C 以下本身呈淡蓝色。[3] 第五，把 90.2 K 与三相点 54.33 K 当成同一种相变；三相点只对应一个特定压力，正常沸点则固定于 1 atm。

## 与其他温区的关系

90.2 K 高于氮的 77.4 K，低于甲烷的 111.7 K，远高于氢的 20.3 K 和氦的 4.2 K。[2] 它位于空气分馏塔的低温段，是分离氧与氮的关键温区之一；与甲烷的 111.7 K 相比，氧沸点低约 21.5 K。与水的 273.15 K 冰点相比，90.2 K 约为其三分之一，属于低温液体而非日常冷冻温度。[1][3]
