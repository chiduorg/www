---
id: mass.down-quark
title: 下夸克：4.67 MeV 的流质量，决定了中子比质子重
summary: >-
  下夸克的流质量在 2 GeV 标度下约为 4.67 MeV/c²，即 8.33×10⁻³⁰ kg。它比上夸克重，这个差值经强相互作用放大后，使中子比质子重约
  1.29 MeV。
dimension: mass
grade: A
category: 基本粒子
displayValue: ≈ 8.33×10⁻³⁰ kg（流质量 4.67 MeV）
quantity:
  value: 8.33e-30
  unit: kg
  measure: PDG 2024 MS-bar 流质量 m_d(2 GeV) = 4.67（+0.48/−0.17）MeV/c²；无法孤立观测
  approximate: true
related:
  - mass.up-quark
  - mass.proton
  - mass.neutron
  - space.quark
  - time.quark-hadron-phase-transition
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
  scope: PDG 2024 MS-bar 流质量 m_d(2 GeV) = 4.67（+0.48/−0.17）MeV/c²；无法孤立观测
  precision: A 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · ≈ 8.33×10⁻³⁰ kg（流质量 4.67 MeV）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -29.079
  position: 11.74
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

下夸克与上夸克一起构成质子和中子。它的流质量在 2 GeV 标度下约为 4.67 MeV/c²，即 8.33×10⁻³⁰ kg，约为上夸克的两倍。[1] 与所有夸克质量一样，这个数不能通过“称一个孤立夸克”获得；它是 MS-bar 方案下、指定能标的质量参数。

## 为什么它决定中子寿命

质子由 uud 组成，中子由 udd 组成。把下夸克换成上夸克会改变电磁自能与强相互作用细节，最终使中子比质子重约 1.29 MeV/c²，也就是 2.3×10⁻³⁰ kg。[2] 这个差值大于电子质量，所以自由中子可以衰变成质子、电子与反中微子；如果上、下夸克的质量关系反过来，氢原子核的稳定性就会改写。

## 质量从哪来

下夸克质量同样来自 Higgs 汤川耦合，数值由实验拟合。它在强子中的“组分质量”远大于流质量：质子质量的绝大部分来自胶子场与夸克动能，而不是三种价夸克的质量之和。[3] 因此不能把 4.67 MeV 乘以 3 当作核子质量的估算。

## 量级位置

8.33×10⁻³⁰ kg 与上夸克同处 B2 带的最下段，两者相差约 2.2 倍。这个比例在强子层面被放大成质子—中子质量差，进而影响β衰变、核合成与中微子背景的形成时间。

流质量之差只有约 2.5 MeV，却要在强子层面变成 1.29 MeV 的核子质量差，这说明组分质量与流质量不是同一把尺子。[1] 强相互作用与电磁自能各自贡献一部分，符号与大小都要靠格点 QCD 计算。[3]

## 怎么继续走

想看这个差值如何变成核子质量，去 mass.proton 与 mass.neutron；想看早期宇宙中夸克何时被囚禁成强子，去 time.quark-hadron-phase-transition；想看更重的夸克代，去 mass.strange-quark。
