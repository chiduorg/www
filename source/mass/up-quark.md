---
id: mass.up-quark
title: 上夸克：2.16 MeV 的流质量，不能孤立称重
summary: >-
  上夸克的流质量在 2 GeV 标度下约为 2.16 MeV/c²，即 3.85×10⁻³⁰
  kg。夸克受色禁闭约束，不能孤立观测；这个数是跑动质量，不是把夸克拿在手里的读数。
dimension: mass
grade: A
category: 粒子与基本常数
displayValue: ≈ 3.85×10⁻³⁰ kg（流质量 2.16 MeV）
quantity:
  value: 3.85e-30
  unit: kg
  measure: PDG 2024 MS-bar 流质量 m_u(2 GeV) = 2.16（+0.49/−0.26）MeV/c²；无法孤立观测
  approximate: true
related:
  - mass.down-quark
  - mass.proton
  - mass.neutron
  - space.quark
  - time.quark-era
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
  - title: Quark Masses (Review of Particle Physics 2024)
    url: 'https://pdg.lbl.gov/2024/reviews/rpp2024-rev-quark-masses.pdf'
    publisher: Particle Data Group
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
  - 夸克
  - 流质量
  - 基本粒子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 MS-bar 流质量 m_u(2 GeV) = 2.16（+0.49/−0.26）MeV/c²；无法孤立观测
  precision: A 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · ≈ 3.85×10⁻³⁰ kg（流质量 2.16 MeV）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -29.415
  position: 11.38
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Up quark
---
## 这个读数是什么

上夸克是组成质子与中子的两种轻夸克之一。它的流质量在 2 GeV 标度下约为 2.16 MeV/c²，即 3.85×10⁻³⁰ kg。[1] “流质量”指拉氏量里的质量参数，不是把夸克从强子中拉出来称得的质量；色禁闭让孤立夸克无法存在，任何“单个夸克的质量”都只能是模型内的量。

## 为什么写流质量

强子里的夸克还携带胶子场能量与动能，质子质量只有约 1% 来自上、下夸克的流质量之和。若把“组分质量”当作夸克质量，就会把胶子能量重复计入。[2] 因此本条明确采用 MS-bar 方案、标度 2 GeV 的流质量，并保留不对称误差：上夸克的误差比下夸克更大，因为它的质量更轻、抽取更依赖手征微扰论。

格点 QCD 近年把 m_u 的误差压到 0.3 MeV 左右，但仍无法把夸克从强子中取出来单独称量。[1] 这也是流质量只能作为模型参数、不能作为实物读数的原因。

## 质量从哪来

在标准模型里，上夸克的质量来自与 Higgs 场的汤川耦合，但数值本身不是理论预言，而是由实验拟合的参数。[3] 它随能标跑动：在更高能标下，强耦合变小，流质量的对数值下降。所以“2.16 MeV”必须带标度，单独一个数没有意义。

## 量级位置

3.85×10⁻³⁰ kg 落在 B2 带的最下段。它比电子轻约 4 倍，却比中微子本征态重八个数量级。上、下夸克的质量差决定了中子比质子重，从而决定了自由中子会衰变、氢原子核不会。

## 怎么继续走

想看它的伙伴，去 mass.down-quark；想看流质量如何组合成核子质量，去 mass.proton 与 mass.neutron；想看夸克在早期宇宙何时被囚禁，去 time.quark-era。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 3.85×10⁻³⁰ 千克，换算后是 3.85×10⁻²⁴ 微克；约为质子质量（1.67×10⁻²⁷ 千克）的 0.00231 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻³⁰ 量级附近。

读图时先看量级，再看倍数：10⁻³⁰ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
