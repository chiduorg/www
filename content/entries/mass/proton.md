---
id: mass.proton
title: 质子：1.673×10⁻²⁷ kg，99% 来自胶子场
summary: >-
  质子静质量 1.67262192595×10⁻²⁷ kg，约 938.272 MeV/c²。三个价夸克的流质量之和不到质子质量的
  1%，其余来自胶子场与夸克动能。
dimension: mass
grade: A
category: 强子
displayValue: 1.673×10⁻²⁷ kg
quantity:
  value: 1.67262192595e-27
  unit: kg
  measure: CODATA 2022 质子静质量；由 Penning 阱与原子质量标尺综合
  approximate: false
related:
  - mass.neutron
  - mass.electron
  - mass.hydrogen-atom
  - space.proton
  - elements.h
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
  - 质子
  - 核子
  - 强子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: CODATA 2022 质子静质量；由 Penning 阱与原子质量标尺综合
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · 1.673×10⁻²⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -26.777
  position: 14.22
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

质子是氢原子的核，也是唯一稳定的自由核子。它的静质量为 1.67262192595×10⁻²⁷ kg，约 938.272 MeV/c²。[1] 这个数不是三个夸克质量的简单相加：上、上、下三个价夸克的流质量合计只有约 9 MeV，不到质子质量的 1%。

## 剩下 99% 从哪来

其余质量来自量子色动力学的结合能：胶子场能量、夸克动能与真空 condensate 的贡献。[2] 换句话说，质子的大部分质量不是“物质的质量”，而是“束缚能与场能的质量”。这也是质量轴要区分“组分质量”与“束缚系统质量”的原因；把夸克质量相加得到质子质量，会漏掉 99% 的物理。

标准模型的希格斯机制只解释夸克与轻子的质量，不解释核子质量的主体；质子的 938 MeV 里，汤川耦合只贡献约 9 MeV，其余由 QCD 能标给出。[3] 这也是为什么核子质量几乎不随 Higgs 耦合的变化而移动。

## 怎么测出来的

质子质量通过 Penning 阱测量质子的回旋频率，再与碳-12 原子质量标尺比较得到。[1] 由于质子是最轻的稳定核子，它的质量也是原子质量单位与阿伏伽德罗常数链条上的关键节点。CODATA 给出的相对不确定度约为 3×10⁻¹⁰。

## 量级位置

1.673×10⁻²⁷ kg 落在 B2 带的上段，与中子、氢原子、氦核几乎同一十进位。它比电子重 1836 倍，这个比例决定了原子尺度的玻尔半径，也决定了物质在常温下的密度范围。

## 怎么继续走

想看它如何与电子组成氢，去 mass.hydrogen-atom 与 elements.h；想看它比中子轻多少、为什么自由中子会衰变，去 mass.neutron；想看宇宙中质子的第一次出现，从 time.big-bang 进入时间轴。
