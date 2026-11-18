---
id: mass.bottom-quark
title: 底夸克：4.18 GeV 的流质量，B 物理的质量标尺
summary: 底夸克的流质量约为 4.18 GeV/c²，即 7.452×10⁻²⁷ kg。它比粲夸克重三倍多，是 B 介子、CP 破坏与希格斯衰变研究的关键质量参数。
dimension: mass
grade: A
category: 基本粒子
displayValue: ≈ 7.452×10⁻²⁷ kg（流质量 4.18 GeV）
quantity:
  value: 7.452e-27
  unit: kg
  measure: PDG 2024 MS-bar 流质量 m_b(m_b) = 4.18（+0.03/−0.02）GeV/c²；无法孤立观测
  approximate: true
related:
  - mass.charm-quark
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
  - B 物理
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 MS-bar 流质量 m_b(m_b) = 4.18（+0.03/−0.02）GeV/c²；无法孤立观测
  precision: A 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · ≈ 7.452×10⁻²⁷ kg（流质量 4.18 GeV）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -26.128
  position: 14.92
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

底夸克是第三代夸克中较轻的一个，流质量约为 4.18 GeV/c²，即 7.452×10⁻²⁷ kg。[1] 它在自身质量标度附近给出，误差已压到约 0.5%。含底夸克的 B 介子寿命约 1.5×10⁻¹² 秒，足以在探测器里飞出一段可测距离，这让 B 物理成为测量 CP 破坏的主力。

## 为什么用 m_b(m_b)

底夸克质量用“在 m_b 标度下取值”的 MS-bar 质量，记为 m_b(m_b)。[1] 这个约定把跑动效应吸收进定义，使不同实验的拟合可以直接比较。若改用固定 2 GeV 标度，数值会明显变大；条目把标度写进口径，避免把不同定义混为一谈。

PDG 的综述同时汇总了不同实验与格点计算给出的 m_b，条目取其中的平均中心值，而不采用单一测量的极值。[2] 这一点在重夸克上尤其重要：底夸克无法孤立存在，所有数值都是通过 B 介子质量、衰变谱与格点 QCD 间接反演出来的。[1]

## 质量从哪来

底夸克的质量仍由 Higgs 汤川耦合给出，是标准模型的输入参数之一。[3] 它比粲夸克重约 3.3 倍，比顶夸克轻约 40 倍；这个跨度使三代夸克的质量谱呈现强烈的层级结构。希格斯衰变到底夸克对的分支比，正是由这个耦合决定的。

## 量级位置

7.452×10⁻²⁷ kg 落在 B2 带的上段，约为质子的 4.5 倍。它已经远离“轻夸克”区域，含底夸克的强子不再由手征对称性主导，而是更接近非相对论量子色动力学可以处理的重夸克体系。

## 怎么继续走

想看质量谱的另一端，去 mass.charm-quark 与 mass.proton；想看早期宇宙中重夸克何时被囚禁，去 time.quark-hadron-phase-transition；想看夸克质量的整体口径，从 space.quark 进入空间轴。
