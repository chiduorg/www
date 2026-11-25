---
id: mass.muon
title: μ 子：1.884×10⁻²⁸ kg，电子的 207 倍
summary: >-
  μ 子是第二代带电轻子，静质量 1.883531627×10⁻²⁸ kg，约 105.66 MeV/c²。它比电子重 206.8
  倍，却与电子共享同一套弱作用与电磁作用。
dimension: mass
grade: A
category: 粒子与基本常数
displayValue: 1.884×10⁻²⁸ kg
quantity:
  value: 1.883531627e-28
  unit: kg
  measure: PDG 2024 静质量 105.6583755 MeV/c²；由回旋频率与 μ 子氢光谱综合
  approximate: false
related:
  - space.muon
  - time.muon-antimuon-annihilation
  - mass.electron
  - mass.tau
  - mass.proton
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
  - title: Review of Particle Physics 2024
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-09'
tags:
  - 质量
  - μ 子
  - 轻子
  - 基本粒子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 静质量 105.6583755 MeV/c²；由回旋频率与 μ 子氢光谱综合
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · 1.884×10⁻²⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -27.725
  position: 13.2
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Muon
---
## 这个读数是什么

μ 子是电子的第二代伙伴：电荷相同，自旋相同，质量却是电子的 206.8 倍。PDG 2024 给出 105.6583755 MeV/c²，即 1.883531627×10⁻²⁸ kg。[1] 这个精度足以支撑 μ 子磁矩的十亿分之一级检验，也让 μ 子成为探测新物理的敏感探针。

## 怎么测出来的

μ 子质量主要来自 μ 子氢（一个 μ 子绕质子转）的激光光谱与回旋频率测量。μ 子质量越小，μ 子氢的玻尔半径越大，能级对质子半径的敏感度也越高。[1] 两条路径给出的一致结果，使 μ 子质量成为少数精度优于 10⁻⁷ 的粒子质量之一。

CODATA 把 μ 子与电子的质量比列为基本常数，2022 年推荐值为 206.7682830，它与直接测量在误差内一致。[2] 这个比值不受绝对质量标尺影响，因此常被当作检验 QED 计算的独立标尺：理论值与测量值的比值一旦偏离，就说明新粒子或新相互作用在圈图里留下了痕迹。[1]

## 质量从哪来

μ 子的质量同样来自 Higgs 汤川耦合，但耦合常数与电子不同。[3] 标准模型不解释为什么第二代轻子比第一代重 207 倍；这个层级问题与夸克质量谱的层级并列，是味道物理尚未解决的部分。μ 子衰变由弱作用主导，寿命约 2.2 微秒。

## 量级位置

1.884×10⁻²⁸ kg 落在 B2 带的中段，比质子轻约 8.9 倍。这个质量足以让 μ 子在穿过物质时电离损失能量，却不足以参与核反应；因此 μ 子既是宇宙线的重要组成部分，也是探测器里最容易识别的穿透粒子。

## 怎么继续走

想看同代但更重的轻子，去 mass.tau；想看 μ 子与反 μ 子如何湮灭，去 time.muon-antimuon-annihilation；想看质量如何决定康普顿波长，从 space.muon 进入空间轴。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.884×10⁻²⁸ 千克，换算后是 1.88×10⁻²² 微克；约为质子质量（1.67×10⁻²⁷ 千克）的 0.113 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻²⁸ 量级附近。

读图时先看量级，再看倍数：10⁻²⁸ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
