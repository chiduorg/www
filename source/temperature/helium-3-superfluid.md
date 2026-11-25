---
id: temperature.helium-3-superfluid
title: 氦-3 超流 A 点（PLTS-2000）
titleEn: Helium-3 superfluid A point on the PLTS-2000
dimension: temperature
category: 极低温
summary: >-
  BIPM 的 PLTS-2000 把氦-3 熔化线上的超流 A 点列为 2.444 mK、3.43407 MPa。本条以这个明确温标固定点 代替无压力条件的
  2.5 mK；它不是任意压力下氦-3 的统一转变温度。
quantity:
  value: 0.002444
  unit: K
  measure: PLTS-2000氦-3熔化线上的超流A点
  measureLabel: PLTS-2000氦-3熔化线上的超流A点
  approximate: true
  uncertainty: 0.000048
  uncertaintyType: 相对热力学温度的标准不确定度，k=1
  kind: temperature-scale-fixed-point
displayValue: 2.444 mK（PLTS-2000，3.43407 MPa）
related:
  - temperature.dilution-refrigerator
  - temperature.superfluid
  - temperature.bose-einstein
  - temperature.nuclear-demagnetization-cooling
  - temperature.absolute-zero
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 'The Provisional Low Temperature Scale from 0.9 mK to 1 K, PLTS-2000'
    url: 'https://www.bipm.org/documents/20126/41791796/PLTS-2000.pdf'
    publisher: BIPM / CIPM Recommendation C1 (2000)
    accessed: '2026-11-06'
  - title: Supplementary Information for the Realization of the PLTS-2000
    url: >-
      https://www.bipm.org/documents/20126/41773843/Guide-PLTS-2000.pdf/43f543da-0a62-2677-fc38-c8ab70d0539a
    publisher: BIPM / Consultative Committee for Thermometry
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: helium-3-superfluid
  icon: "\U0001F9DB"
  relatedLabels: 库珀配对、费米子、超流、超导、量子力学、核退磁制冷、绝对零度、量子涡旋、拓扑缺陷、液氦超流相变
conditions: >-
  纯氦-3 熔化曲线上的正常液体至超流 A 相特征点；PLTS-2000 赋值 T2000=2.444 mK、压力 3.43407 MPa。 BIPM 指南表
  1 给出相对热力学温度标准不确定度 48 μK（k=1），最佳实现的不确定度 0.7 μK 属另一口径。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      BIPM PLTS-2000 附录列出 A 点 3.43407 MPa、2.444 mK，并列出 A–B 与奈尔点；实现指南表 1 列出 48 μK
      与 0.7 μK 两种不确定度。
    - 正文按五节结构重写；保留 0.002444 K、不确定度与温标固定点属性，强调压力与相态条件。
  originalQuantity:
    value: 0.0025
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-06'
    previousQuantity:
      value: 0.0025
      unit: K
      measure: 氦-3超流毫开尔文温区示例
      approximate: true
      measureLabel: 氦-3超流毫开尔文温区示例
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: phase-vessel
  profile: helium
  caption: 氦-3的PLTS-2000超流A点
  note: >-
    对应熔化线上 3.43407 MPa 的 A 点，不是任意压力的氦-3 统一转变点；容器与相区颜色为示意，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#a8bdda'
  symbol: ³He
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

氦-3 是费米子，在极低温下会形成库珀对并进入超流相。PLTS-2000 温标用氦-3 的熔化压力定义 0.9 mK 到 1 K 的温区，其中 A 点是熔化曲线上正常液体转变为超流 A 相的特征点。[1] 这个点不是任意压力下的相变温度，而是有明确压力坐标的温标固定点。在 PLTS-2000 中，它与 A–B 转变、奈尔点一起构成低温温标的检查点。[1]

## 怎样测到或为何是有效温度

实现时把氦-3 装入熔化压力池，用原位压力传感器测量熔化压力，再按 PLTS-2000 的多项式把压力换算成 T₂₀₀₀。[1][2] A 点对应的压力为 3.43407 MPa，温度为 2.444 mK；同一温标还列出 A–B 转变 1.896 mK 和奈尔点 0.902 mK。[1] 熔化压力池必须原位测压，因为低温下感压毛细管会被固态氦-3 堵塞。[2] 这是温标赋值，不是单次温度计读数。

## 数值与口径

2.444 mK 等于 0.002444 K。BIPM 指南给出的 A 点相对热力学温度标准不确定度为 48 μK（k=1），而最佳实际实现的不确定度约 0.7 μK；两者口径不同，不能混用。[2] 因此它适合作为温标锚点，不应被当作“氦-3 在任意条件下都于 2.444 mK 转变”的常数。同一温标中 A 点与 A–B 点相差约 0.548 mK，与奈尔点相差约 1.542 mK。[1]

## 常见误解

第一，把 2.444 mK 直接套到低压氦-3 或氦-4；氦-4 的 λ 转变在约 2.17 K，相差三个量级。第二，把 A 点、A–B 点和奈尔点当成同一个转变；它们是熔化曲线上不同的相变特征。第三，把温标不确定度当成实验装置的分辨率；48 μK 是热力学赋值的不确定度，不是温度计的最小刻度。[2]

## 与其他温区的关系

2.444 mK 低于稀释制冷的 10 mK，高于核退磁实验的 421 μK 电子温度，也高于 170 nK 的玻色凝聚。它比氦-4 的 2.17 K 超流转变低约九百倍，说明同位素量子统计差异会把同一元素的相变温区拉开极大距离。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
