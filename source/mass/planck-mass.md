---
id: mass.planck-mass
title: 普朗克质量：2.176×10⁻⁸ kg，由三个常数拼出的质量锚点
summary: >-
  普朗克质量 m_P = √(ħc/G) ≈ 2.176434×10⁻⁸ kg，由 CODATA 2022
  的约化普朗克常数、光速与引力常数组合得出。它不是某个粒子的实测质量，而是量子引力效应变得不可忽略的质量标尺。
dimension: mass
category: 粒子与基本常数
displayValue: 2.176×10⁻⁸ kg
quantity:
  value: 2.176434e-8
  unit: kg
  measure: CODATA 2022 基本常数组合 √(ħc/G) 得出；非单次称重，相对不确定度约 1×10⁻⁵
  approximate: false
grade: A
related:
  - mass.proton
  - mass.electron
  - mass.sand-grain
  - time.big-bang
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      本轮复核：结构、引用编号与量值口径完整；quantity.value 与 displayValue
      数量级一致，bound/zeroMass/approximate、mass.type 与 includesDarkMatter
      逐条核对；太阳、地球、银河、可观测宇宙、总物质、暗物质、哈勃体积、中微子与光子的人工复核一致。
    - >-
      来源可达性：72 个唯一来源中 48 个直接返回 2xx；其余为站点反爬、限流或超时。已修复 PDG 2024 目录页路径与中微子综述 PDF
      两个死链。本轮未逐页重读全文，沿用条目既有 accessed 记录。
    - >-
      reviewed 指结构与来源口径核对，不是外部同行评审；总质量、重子质量、恒星质量与含暗物质口径按 quantity.measure 与 mass
      字段保留。
sources:
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: ISO Standards
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
tags:
  - 质量
  - 普朗克质量
  - 物理常数
  - 量子引力
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: CODATA 2022 基本常数组合 √(ħc/G) 得出；非单次称重，相对不确定度约 1×10⁻⁵
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B6 日常微粒 · 2.176×10⁻⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B6
  bandLabel: 日常微粒
  log10: -7.662
  position: 34.77
  color: '#c9a77a'
  scaleMin: -40
  scaleMax: 53
titleEn: Planck mass
---
## 这个读数是什么

普朗克质量约为 2.176×10⁻⁸ kg，也就是 21.8 微克。[1] 它既不是“最小的质量”，也不是某个粒子的质量。把约化普朗克常数 ħ、真空光速 c 与牛顿引力常数 G 按 √(ħc/G) 组合，量纲正好是质量，数值就落在这里。这是量纲分析给出的组合，不是天平读数。

## 为什么需要它

在普朗克质量附近，一个粒子的康普顿波长与它的史瓦西半径同量级，量子力学与广义相对论无法再各自独立使用。[2] 所以它标记的是“引力的量子效应不可忽略”的边界，而不是某个可称量的物体。宇宙中没有已知基本粒子的静质量接近它：最重的顶夸克也只有约 3×10⁻²⁵ kg，比它轻十七个数量级。

## 口径与不确定度

本条记录的是由常数组合得到的推导值，不是测量点值。CODATA 给出 2.176434×10⁻⁸ kg，相对不确定度约 1×10⁻⁵，主要来自 G 的测量误差，因为 ħ 与 c 的精度高得多。[1] 2019 年国际单位制修订后，千克本身由普朗克常数反定义，[3] 这让普朗克质量与千克的关系更直接，但并没有把它变成可称量的实物。它的“精确”来自公式，不来自称重；若要讨论实验误差，应归到 G 上。

## 量级位置

2.176×10⁻⁸ kg 位于 B6 带的下端：比质子重约 1.3×10¹⁹ 倍，比一粒 0.5 mm 石英砂轻约八倍，比一只蚊子轻约一百倍。[2] 在这条轴上，它是唯一由常数定义而非由样品称出的锚点：往上进入日常微粒，往下回到粒子与原子。

## 怎么继续走

想看这一带的普通物质读数，去 mass.sand-grain 与 mass.mosquito；想看质量的微观来源如何由核子拼起，去 mass.proton 与 mass.electron；想看普朗克时间与宇宙起点，从 time.big-bang 进入时间轴。质量不是体积的函数，普朗克质量尤其如此：它没有对应的“大小”。
