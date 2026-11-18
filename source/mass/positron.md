---
id: mass.positron
title: 正电子：与电子同质量的反粒子
summary: >-
  正电子是电子的反粒子，静质量与电子在实验精度内相等，CODATA 2022 给出 9.1093837139×10⁻³¹ kg。质量相等是 CPT
  对称性的直接检验。
dimension: mass
grade: A
category: 基本粒子
displayValue: 9.109×10⁻³¹ kg
quantity:
  value: 9.1093837139e-31
  unit: kg
  measure: CODATA 2022 电子质量；正电子质量在实验精度内与电子相等（CPT 检验）
  approximate: false
related:
  - mass.electron
  - time.electron-positron-annihilation
  - mass.photon
  - mass.muon
  - time.photon-epoch
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
  - title: Review of Particle Physics 2024
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-09'
tags:
  - 质量
  - 正电子
  - 反物质
  - 轻子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: CODATA 2022 电子质量；正电子质量在实验精度内与电子相等（CPT 检验）
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B1 中微子与轻子 · 9.109×10⁻³¹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B1
  bandLabel: 中微子与轻子
  log10: -30.041
  position: 10.71
  color: '#7fe8ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

正电子是电子的反粒子：电荷相反，自旋与质量相同。它的静质量与电子在实验精度内完全一致，条目沿用 CODATA 2022 的电子质量 9.1093837139×10⁻³¹ kg，而不是另造一个独立数值。[1] 这不是偷懒，而是因为现有实验还测不出任何质量差。

## 为什么质量相等很重要

粒子与反粒子的质量相等是 CPT 定理的推论：电荷共轭、宇称与时间反演联合变换下，粒子的质量与寿命必须相同。[2] 正电子与电子的质量差若被检出，就意味 CPT 破缺。迄今为止，Penning 阱比较给出的相对差上限远小于 10⁻⁹，所以条目里的“相等”本身就是一个受检验的事实。

## 质量从哪来

正电子的质量同样来自与 Higgs 场的汤川耦合，耦合常数与电子相同。反粒子并不是“负质量”，它的能量为正，引力行为也与普通物质一致。把反物质想象成会“向上掉”的说法没有实验依据，也不属于本条的口径。

标准模型把正电子与电子放进同一个 Dirac 场，质量项只有一个，因此两者的裸质量必然相同。[3] 实验能检验的是在辐射修正之后，这个相等是否仍然成立。

## 量级位置

正电子与电子在同一条十进位里，都是 10⁻³¹ kg 量级。它与电子相遇时，两者静质量可以全部转成光子能量；一次 511 keV 的湮灭给出两个反向光子，这是 PET 成像的物理基础。[3] 质量在这里没有消失，而是换成了能量。

## 怎么继续走

想看湮灭如何把质量变成光，去 time.electron-positron-annihilation；想看零质量的光子为什么不能参与质量阶梯，去 mass.photon；想看同代轻子的质量阶梯，去 mass.muon。
