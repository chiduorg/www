---
id: temperature.neon-triple-point
title: 氖三相点
titleEn: Neon triple point on ITS-90
dimension: temperature
category: 低温
summary: >-
  氖的三相点是 ITS-90 的定义固定点，赋值为 24.5561 K（−248.5939 °C），对应约 0.4337 bar。
  温标赋值与实际样品实现的温度不是同一个精度概念，三相共存还必须满足相应压力条件。
quantity:
  value: 24.5561
  unit: K
  measure: 氖三相点ITS-90赋值
  approximate: true
  measureLabel: 氖三相点ITS-90赋值
displayValue: 24.5561 K（ITS-90）
related:
  - temperature.neon-boiling-point
  - temperature.water-triple-point
  - temperature.liquid-hydrogen
  - temperature.absolute-zero
  - space.moon
reviewStatus: reviewed
sources:
  - title: The International Temperature Scale of 1990 (ITS-90)
    url: >-
      https://www.nist.gov/system/files/documents/pml/div685/grp01/ITS-90_metrologia.pdf
    publisher: NIST / Metrologia
    accessed: '2026-11-06'
  - title: 'Neon: phase-change data'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440019&Mask=4'
    publisher: NIST Chemistry WebBook
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: neon-triple-point
  icon: "\U0001F4A1"
  relatedLabels: 液氦超流相变、超导、稀释制冷、水三相点
conditions: >-
  氖的固、液、气三相共存点在 ITS-90 温标中的定义固定点赋值 24.5561 K，对应三相点压力约 0.4337
  bar；不适用于常压沸点或任意压力下的液氖。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NIST 重印的 ITS-90 文本把氖三相点列为 24.5561 K，并规定 3.0 K 至该点用氦气体温度计标定。
    - >-
      NIST WebBook 给出 Ttriple 24.56 K、TRC 不确定度 0.001 K、Ptriple 0.4337 bar，与
      ITS-90 赋值一致。
    - 正文按五节重写，区分温标赋值、装置实现精度与常压沸点；quantity 数值未改。
  originalQuantity:
    value: 24.56
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  24.5561 K 是 ITS-90 的赋值，实际复现受样品纯度、静压头、温度计校准与热流影响；NIST WebBook 对三相点温度给出的不确定度为
  0.001 K，不代表每台装置都能达到。
visual:
  template: "phase-diagram"
  profile: "crystal"
  caption: "氖三相点样品池"
  note: "三相点需同时满足压力条件；晶体与气液布局只解释三相概念，为非按比例的示意，不是实验观测重建。 所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。"
  backdrop: "deep-cold"
  color: "#82b7cc"
  symbol: "Ne triple point"
  scene: "temperature.object"
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

三相点是物质固、液、气三相同时共存的唯一温度—压力组合。氖的三相点被选为 ITS-90 的定义固定点之一，赋值为 24.5561 K，即 −248.5939 °C。[1] 它不等于氖的正常沸点 27.1 K，也不等于任意压力下液氖的温度。

## 怎样测到

三相点用密封样品池实现：抽出杂质后，让高纯氖在池内形成固、液、气三相，缓慢加热或冷却并观察温度平台。NIST 重印的 ITS-90 文本把氖三相点列为 24.5561 K，并给出该温标在 3.0 K 到 24.5561 K 之间用氦气体温度计标定。[1] NIST WebBook 的相变数据列 Ttriple 为 24.56 K，TRC 不确定度 0.001 K，三相点压力 0.4337 bar。[2] 温标校准正是利用这一平台，把气体温度计在 3.0 K 与 24.5561 K 之间的读数连接起来。

## 数值与口径

24.5561 K 换算为 −248.5939 °C；这个多位小数是温标赋值，不是每次实验都能复现到 0.0001 K。[1][2] 三相点压力约 0.4337 bar，即约 43.37 kPa，远低于 101.325 kPa，所以三相点与常压沸点的压力条件不同。实际实现的精度受样品纯度、静压头、温度计校准和热流影响，必须单独记录不确定度。[2]

## 常见误解

第一，把三相点当成沸点；两者对应的压力和相态不同。[1][2] 第二，把 24.5561 K 当成氖的“熔点”或“冰点”；常压熔点与三相点温度接近，但不是同一概念。第三，把 ITS-90 的赋值当成热力学温度的绝对真值；温标是协商定义的近似体系。第四，认为多位小数自动代表更高测量精度；赋值精度与装置复现精度要分开。

## 与其他温区的关系

24.5561 K 低于氖的正常沸点 27.104 K，高于氢的沸点 20.3 K 和平衡氢三相点 13.8033 K，也高于氦的 4.2 K。[1][2] 它处在 ITS-90 低温段的校准节点，连接 3 K 附近的氦气体温度计温区与更高的氖、氧、氩固定点。它与常压沸点 27.104 K 的差值约 2.5 K，正好对应氖狭窄的液态温区。把它与水的三相点 273.16 K 相比，可见不同物质的三相点跨越了很宽的温度范围。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
