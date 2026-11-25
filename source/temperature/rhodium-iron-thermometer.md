---
id: temperature.rhodium-iron-thermometer
title: 铑铁温度计（参考函数温区）
titleEn: Rhodium-iron thermometer reference-function interval
dimension: temperature
category: 极低温
summary: >-
  铑铁电阻温度计需要在校准温区内使用。NIST 研究给出的参考函数覆盖约 0.65–24.5561 K；这是温标
  插值区间的下端，不是所有该类器件的绝对最低温，更不是 0.1 mK 的测量能力。
quantity:
  value: 0.65
  unit: K
  measure: 所引铑铁参考函数的温区下端
  approximate: true
  measureLabel: 所引铑铁参考函数的温区下端
  range:
    min: 0.65
    max: 24.5561
    unit: K
displayValue: 参考函数约 0.65–24.5561 K（轴取0.65 K）
related:
  - space.moon
  - mass.helium-nucleus
  - temperature.neon-triple-point
  - temperature.dilution-refrigerator
  - temperature.nuclear-demagnetization-cooling
  - temperature.absolute-zero
reviewStatus: reviewed
sources:
  - title: >-
      A Standardized Interpolation of Temperature using Rhodium-Iron Resistance
      Thermometers
    url: >-
      https://www.nist.gov/publications/standardized-interpolation-temperature-using-rhodium-iron-resistance-thermometers-over
    publisher: 'Tew et al., NIST / International Journal of Thermophysics (2015)'
    accessed: '2026-11-06'
  - title: >-
      Calibration of Cryogenic Resistance Thermometers between 0.65 K and 165 K
      on the International Temperature Scale of 1990
    url: 'https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=908763'
    publisher: NIST / Special Publication 250-91
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: rhodium-iron-thermometer
  icon: "\U0001F321"
  relatedLabels: 低温物理、国际温标、近藤效应、电阻温度计、稀释制冷机、核退磁制冷、超导磁体、温度计量、量子技术
conditions: >-
  铑铁（0.5% Fe）电阻温度计的 ITS-90 参考函数适用区间 0.65–24.5561 K；约 1 mK 的插值不确定度结果对应
  4.2–24.5561 K 样本，不能把区间下端当作器件可测最低温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NIST 2015 摘要给出参考函数 0.65–24.5561 K，并说明多数样本在 4.2–24.5561 K 区间插值不确定度约 1 mK
      或更小。
    - NIST SP 250-91 目录与正文确认铑铁温度计章节、0.65 K 起的 ITS-90 实现与 24.5561 K 上端。
    - 正文按五节结构重写；保留 0.65 K 与 range，明确参考函数端点与测量能力不是同一概念。
  originalQuantity:
    value: 0.0001
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 0.65 K 是参考函数适用下限，不是测量结果；区间内约 1 mK 的不确定度主要针对 4.2 K 以上样本，低温端还受电阻测量、自热和校准链限制。
visual:
  template: cryo-instrument
  profile: thermometer
  caption: 铑铁电阻温度计
  note: >-
    量值取参考函数适用范围的下端，不是传感器达到的最低物理温度；探头与电桥接线为示意，非产品重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#afcfe3'
  symbol: Rh–Fe thermometer
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

铑铁电阻温度计是一种低温电阻温度计，利用铑铁合金的电阻随温度变化来测温。它常作为传递标准，在 0.65 K 到 24.5561 K 的区间内按 ITS-90 的参考函数和偏差函数插值。[1] 它测的是器件自身的电阻，不是直接测热力学温度。

## 怎样测到或为何是有效温度

NIST 的研究汇总了 60 支不同批次铑铁温度计的数据，建立了覆盖 0.65–24.5561 K 的参考函数；多数样本在 4.2–24.5561 K 区间的插值不确定度约为 1 mK 或更小。[1] 校准时只需六个校准点，就能把电阻读数换算成温度。[1] 这属于比对式温标实现，读数依赖校准链。参考函数只描述平均行为，单支温度计还要用偏差函数修正。[1]

## 数值与口径

0.65 K 是所引参考函数的适用下限，不是传感器能达到的最低温度；在该温区 NIST 还用氦-4 和氦-3 蒸气压定义温度。[2] 24.5561 K 对应氖三相点，是 ITS-90 定义中重要的低温固定点，也是这段参考函数的上端。[1][2] 量程、分辨率和不确定度不是同一个概念，不能把区间端点当成“0.1 mK 能力”。

## 常见误解

第一，认为参考函数下端就是器件最好的分辨率；分辨率取决于电桥、噪声和校准。第二，认为买来一支温度计就能直接读出热力学温度；没有校准曲线，电阻只是一个数。第三，把 1 mK 不确定度推广到整个 0.65–24.5561 K 区间；论文的约 1 mK 结论主要针对 4.2 K 以上。[1] 校准点数量有限时，偏差函数还可能放大局部误差。[2]

## 与其他温区的关系

0.65 K 低于液氦-4 的 2.17 K 超流转变，也低于液氦的 4.2 K 沸点，因此这类温度计常与稀释制冷或氦-3 系统配合。它与核退磁实验的 421 μK、氦-3 的 2.444 mK 相比仍属较暖的低温段，适合做温标传递而不是极限冷却。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
