---
id: temperature.dry-ice-sublimation
title: 干冰升华点
titleEn: Dry ice sublimation reference
dimension: temperature
category: 低温
summary: >-
  干冰是固态二氧化碳。在约一个标准大气压下，其固—气平衡温度约 194.7 K；这里由 NIST
  的低温蒸气压关系计算得到，不把它当成所有压力下都不经液相的规则。
quantity:
  value: 194.73
  unit: K
  measure: CO₂常压固气平衡温度计算参考
  approximate: true
  measureLabel: CO₂常压固气平衡温度计算参考
displayValue: 约 194.7 K（−78.5 °C）
related:
  - temperature.co2-critical-point
  - temperature.water-triple-point
  - temperature.ammonia_boiling
  - temperature.liquid-nitrogen
  - temperature.mars-surface
  - space.human
reviewStatus: reviewed
sources:
  - title: 'Carbon dioxide: phase change data and Antoine equation'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C124389&Mask=4'
    publisher: NIST Chemistry WebBook
    accessed: '2026-11-06'
  - title: carbon dioxide
    url: 'https://www.britannica.com/science/carbon-dioxide'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: dry-ice-sublimation
  icon: ❄️
  relatedLabels: 升华、相变、二氧化碳、热力学、水的冰点、温室效应、低温技术、水的沸点、碳循环、干冰清洗
conditions: >-
  纯 CO₂ 在 1 atm（1.01325 bar）附近的固—气平衡；由 NIST 154.26–195.89 K 区间的 Antoine
  方程反解，只适用于三相点压力以下，不能外推到高压液相区。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NIST WebBook 列出 154.26–195.89 K 的 Antoine 参数
      A=6.81228、B=1301.679、C=−3.494，并给出升华焓 26.1 kJ/mol。
    - Britannica 条目核实 CO₂ 为无色气体、是大气微量组分与温室气体，用于概念性表述而不用于精确数值。
    - 正文按五节结构重写；保留 194.73 K，补计算口径、三相点与压力条件。
  originalQuantity:
    value: 195
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  194.73 K 由 Antoine 方程在 1.01325 bar
  处反解得到，属于拟合计算值而非新实测点；结果受方程在温区边缘的拟合误差、压力取值与圆整影响，显示为 194.7 K。
visual:
  template: phase-vessel
  profile: crystal
  caption: 干冰升华容器
  note: >-
    常压附近的固—气平衡参考；可见雾和粒子仅说明外部环境，不是二氧化碳气体本色，画面为示意而非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: frost
  color: '#bbdfe7'
  symbol: CO₂ solid
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

干冰是固态二氧化碳。CO₂ 分子由一个碳和两个氧组成，固态时形成分子晶体；在 1 atm 下加热，它不经过液体直接变成气体，这个固—气平衡温度约为 194.7 K，即 −78.5 °C。[1][2] 干冰不是水冰，它的“白雾”主要是空气中的水汽冷凝，不是 CO₂ 气体本身。

## 怎样测到或为何是有效温度

CO₂ 的升华温度由蒸气压与温度的关系确定。NIST 收录了 154.26–195.89 K 区间的 Antoine 方程参数：log₁₀P = A − B/(T + C)，A=6.81228、B=1301.679、C=−3.494，P 用 bar、T 用 K。[1] 把 P 取为 1.01325 bar 反解，得到约 194.73 K。这是由实验蒸气压数据拟合出的平衡温度，不是新测点。在固—气平衡线上，温度与饱和蒸气压一一对应；给定压力，升华温度就是唯一的。[1] Antoine 方程是工程上常用的蒸气压拟合式，只适用于所列温区；把它外推到温区外会放大误差。[1]

## 数值与口径

194.73 K 约等于 −78.42 °C，面向比较写作 −78.5 °C。[1] 该值只在 1 atm 附近成立；压力高于三相点时，固态 CO₂ 可以先熔化。CO₂ 的三相点约 216 K、5.11 atm，临界点约 304 K、7.38 MPa，这些条件决定了“升华”还是“熔化”。194.7 K 比家用冰柜的 −18 °C（255 K）低约 60 K，比液氮的 77.4 K 高约 117 K。[1]

## 常见误解

第一，把干冰当成水冰；两者成分、升华温度和用途都不同。第二，认为干冰在任何压力下都只会升华；压力足够高时会出现液态 CO₂。第三，把白色雾气当成 CO₂ 气体；CO₂ 无色，雾是水汽凝结。干冰升华会吸热，可用来快速冷冻或维持低温运输，但它不能把物体冷却到 194.7 K 以下而不借助其他冷源。[2]

## 与其他温区的关系

194.7 K 低于水的冰点 273.15 K，也低于氨的沸点 239.8 K，但高于液氮的 77.4 K 和液氢的 20.3 K。它常被用作 −78 °C 附近的冷浴参考，但不能替代更低温度的液氮或液氦系统。与水的冰点、氨的沸点相比，它说明同一压力下不同物质的相变温度差别很大。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
