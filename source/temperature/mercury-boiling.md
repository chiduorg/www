---
id: temperature.mercury-boiling
title: 汞的沸点
titleEn: Mercury normal boiling point
dimension: temperature
category: 中温
summary: 纯汞在 1 atm 下的正常沸点约为 629.81 K，即 356.66 °C。它是液态金属在常压下的汽化参考，不是温度计可测上限，也不适用于汞合金。
quantity:
  value: 629.81
  unit: K
  measure: 汞的常压沸点资料参考
  measureLabel: 汞的常压沸点资料参考
  approximate: true
  uncertainty: 0.01
displayValue: 约 629.81 K（356.66 °C）
related:
  - temperature.ethanol_boiling
  - temperature.water-triple-point
  - temperature.sodium-melting
  - temperature.ammonia_boiling
  - space.volcano
reviewStatus: reviewed
sources:
  - title: 'Mercury: phase change data'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7439976&Mask=4'
    publisher: NIST Chemistry WebBook
    accessed: '2026-11-06'
  - title: 'Mercury: element data'
    url: 'https://periodic-table.rsc.org/element/80/mercury'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: mercury-boiling
  icon: "\U0001F321"
  relatedLabels: 液态金属、温度计、气压计、汞蒸气、毒性、乙醇沸点、水的沸点、钠熔点、低温物理、热膨胀
conditions: 纯汞、1 atm、正常沸点；NIST/TRC 给 629.81 K（不确定度 0.01 K），RSC 表列 629.769 K，差异约 0.04 K。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NIST Chemistry WebBook 的相变数据页列出正常沸点 629.81 K，TRC 赋不确定度 0.01
      K，并注明推荐作温度计固定点。
    - RSC 汞元素表列出沸点 356.619 °C、629.769 K，与 NIST 值相差约 0.04 K，正文据此说明来源差异。
    - 正文按五节结构重写，强调 1 atm 条件，并区分沸点、温度计上限与熔化温度。
  originalQuantity:
    value: 630
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: NIST/TRC 给 0.01 K 的赋值不确定度，RSC 表列到 0.001 K 但未给不确定度；两者相差约 0.04 K，主要来自资料选择与圆整。
visual:
  template: phase-vessel
  profile: liquid
  caption: 汞的正常沸点
  note: >-
    汞在 1 atm 下汽化的概念示意；液面、蒸气与容器比例均为说明性布局，非按比例绘制，也不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: heat-flow
  color: '#c7ccd4'
  symbol: Hg
  sampleColor: '#9aa3ad'
  scene: temperature.object
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
conceptGroup: mercury
---
## 它是什么

纯汞在 1 atm 下的正常沸点约为 629.81 K，即 356.66 °C。[1][2] 这是液相与气相在常压下的平衡温度，描述的是纯汞；它不等于汞合金的沸点，也不等于汞温度计能够测量的上限。汞在室温下是液体，熔点在 234 K 附近，因此“液态金属”与“低沸点”常被同时提到，但两者是不同的相变。

## 怎样测到

正常沸点通常用沸腾法或蒸气压法测量：把纯汞置于可控压力的容器中，缓慢升温，记录液相开始持续沸腾并稳定在 1 atm 时的温度；也可由蒸气压曲线外推到 1 atm。[1] NIST Chemistry WebBook 的相变数据页列出 629.81 K，并给出 0.01 K 的赋值不确定度，注明该值可推荐作温度计固定点；RSC 元素表列出 629.769 K，用于交叉核对。[1][2] 压力、汞纯度和测温位置都会影响读数。

## 数值与口径

629.81 K − 273.15 K = 356.66 °C；RSC 的 629.769 K 对应 356.619 °C，两者差约 0.041 K。[1][2] 这个差异很小，但说明“沸点”必须连同压力、纯度和资料来源一起写。若压力低于 1 atm，汞会在更低的温度沸腾；反之则升高。汞温度计的刻度上限通常接近但不超过其沸点，因为感温泡内的汞一旦沸腾，读数就失去意义。

## 常见误解

“汞温度计能测到汞的沸点”不准确：温度计依靠汞的体积膨胀读数，当工作液体本身接近沸腾时，液柱行为已不稳定。第二个误解是把沸点当成熔点；汞在 234 K 左右熔化，在 629.81 K 才沸腾，两者相差近 400 K。[1] 第三，把纯汞数据套到汞合金或含汞灯具材料上也不成立。最后，汞在室温下就有蒸气压，不能因为“还没沸腾”就忽略蒸气。

## 与其他温区的关系

629.81 K 比水的常压沸点 373.15 K 高约 256.7 K，比乙醇沸点 351.5 K 高约 278.3 K；它比钠的沸点约 1,156 K 低得多，也比铅的沸点约 2,022 K 低。[1][2] 汞的沸点因此位于“常见液体汽化”与“低熔点金属汽化”之间，是理解液态金属蒸气压的一个方便参照。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
