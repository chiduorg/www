---
id: temperature.liquid-oxygen
title: 液氧温度
titleEn: Liquid oxygen normal boiling reference
dimension: temperature
category: 低温
summary: >-
  纯氧在 1 atm 下的正常沸点约为 90.2 K（−183.0 °C）。这是气—液平衡的相变参考，
  不是任意液氧储罐、压力或运行工况下的实测温度；样品纯度与压力都必须一并说明。
quantity:
  value: 90.2
  unit: K
  measure: 氧的常压沸点参考
  approximate: true
  measureLabel: 氧的常压沸点参考
  uncertainty: 0.2
displayValue: 约 90.2 K（−182.95 °C）
related:
  - temperature.liquid-hydrogen
  - temperature.liquid-nitrogen
  - temperature.methane-boiling
  - temperature.oxygen-boiling
  - temperature.boiling-water
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 'Oxygen: phase-change data'
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
  id: liquid-oxygen
  icon: "\U0001F9EA"
  relatedLabels: 液氢温度、火箭推进、低温技术、空气分离、氧化剂、液氮温度、航天、冶金、氧气疗法
conditions: 纯氧（O₂）在 1 atm（101.325 kPa）下液—气平衡的正常沸点；样品需为纯氧，不适用于液氧储罐在增压、泄压或含杂质工况下的实际温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - >-
      NIST WebBook 列出 Tboil 90.2 K，TRC 给定不确定度 0.2 K；NIST 低温资料表与 Britannica 均给出
      −183.0 °C，与 90.2 K 自洽。
    - 正文按五节重写，补饱和蒸气压、纯氧与储罐工况、三相点区分；quantity 数值未改。
  originalQuantity:
    value: 90
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: ±0.2 K 是 NIST 对常压沸点的圆整不确定度；样品纯度、压力取值与温度计校准会带来额外偏差，储罐实际温度可因增压或漏热偏离该参考。
visual:
  template: phase-vessel
  profile: liquid
  caption: 液氧低温容器
  note: >-
    对应纯氧在 1 atm 下的正常沸点参考；容器、液面与气泡为示意，非按比例绘制，也不是对某台设备的观测重建。
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

液氧是氧在 1 atm 下冷却到约 90.2 K 时形成的淡蓝色液体。[1][3] 这里的“液氧温度”通常指纯氧的正常沸点，即气—液平衡温度，而不是储罐里任意时刻的读数。氧在常压下的凝固点约为 54.8 K，因此液氧只稳定存在于约 54.8 K 到 90.2 K 的窄温区；低于凝固点会变成固态氧。[1][3]

## 怎样测到

正常沸点的测量是把纯氧样品置于可调压容器中，等气液两相达到热平衡，再找饱和蒸气压恰好等于 101.325 kPa 的温度。[1][2] NIST Chemistry WebBook 的相变数据表列 Tboil 为 90.2 K，并注明 0.2 K 的合成不确定度；NIST 低温技术资料表把氧列为 90.2 K（−183.0 °C）；Britannica 的性质表同样给出 −183.0 °C。[1][2][3] 这些资料都使用常压口径，测量对象是纯氧，而不是含氩、氮的工业液氧。

## 数值与口径

90.2 K 减 273.15 得 −182.95 °C，资料按一位小数写作 −183.0 °C，差异只是圆整。[1][2][3] 90.2 K 是近似值，不能把 0.2 K 不确定度当成每个样品的固定误差。沸点随外压变化：压力低于 101.325 kPa 时沸点下降，加压时升高；储罐为了减少蒸发常略高于常压运行，因此罐内温度并不必然等于 90.2 K。[1] 氧的三相点为 54.33 K，与常压凝固点 54.8 K 不是同一个概念。[1]

## 常见误解

第一，把液氧的淡蓝色当成容器染色；资料描述纯氧在 −183 °C 以下为淡蓝色液体，颜色来自氧分子本身。[3] 第二，把 90.2 K 说成“接近绝对零度所以极难获得”；它比液氮的 77.4 K 高，空气分馏即可大量生产。[2] 第三，把正常沸点直接当作某型号火箭的储箱温度；实际推进系统还受增压压力、过冷与漏热影响。第四，把“氧气在 90 K”推广成“所有气体在 90 K 都是液体”，不同气体的相变温度差别很大。[2]

## 与其他温区的关系

90.2 K 高于液氮的 77.4 K，低于甲烷的 111.7 K，远高于液氢的 20.3 K 和液氦的 4.2 K。[2] 它处在空气分馏的低温段，也是液氧作为氧化剂需要维持的常压参考温区。与水的 273.15 K 冰点相比，90.2 K 只有其约三分之一，说明液氧属于典型的低温液体，而不是日常冷藏温度。[1][2]


## 深读一：量值口径

本条的核心量值是 90.2 K，量的是氧的常压沸点参考。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：纯氧（O₂）在 1 atm（101.325 kPa）下液—气平衡的正常沸点；样品需为纯氧，不适用于液氧储罐在增压、泄压或含杂质工况下的实际温度。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照液氢温度（20.3）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
