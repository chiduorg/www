---
id: mass.charm-quark
title: 粲夸克：1.27 GeV 的流质量，跨过强子质量的门槛
summary: 粲夸克的流质量约为 1.27 GeV/c²，即 2.264×10⁻²⁷ kg。它比质子还重，含粲夸克的强子因此必须通过弱作用衰变，寿命远短于奇异粒子。
dimension: mass
grade: A
category: 粒子与基本常数
displayValue: ≈ 2.264×10⁻²⁷ kg（流质量 1.27 GeV）
quantity:
  value: 2.264e-27
  unit: kg
  measure: PDG 2024 MS-bar 流质量 m_c(3 GeV) = 1.27 ± 0.02 GeV/c²；无法孤立观测
  approximate: true
related:
  - mass.strange-quark
  - mass.bottom-quark
  - mass.proton
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
  - 粲
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 MS-bar 流质量 m_c(3 GeV) = 1.27 ± 0.02 GeV/c²；无法孤立观测
  precision: A 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · ≈ 2.264×10⁻²⁷ kg（流质量 1.27 GeV）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -26.645
  position: 14.36
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Charm quark
---
## 这个读数是什么

粲夸克是第二代夸克中较重的一个，流质量约为 1.27 GeV/c²，即 2.264×10⁻²⁷ kg。[1] 这个值在 3 GeV 标度下给出，比质子的 0.938 GeV 还大。含粲夸克的强子（如 J/ψ、D 介子）因此不能再通过强作用迅速衰变，只能走弱作用，寿命被拉长到 10⁻¹² 秒量级。

## 为什么标度不同

粲夸克质量的抽取标度是 3 GeV，而不是上、下、奇异夸克常用的 2 GeV。[1] 这不是随意选择：粲夸克质量与标度同量级，微扰展开需要一个与质量匹配的能标。把不同标度的流质量直接横向比较，会引入额外的跑动修正；条目把标度写进口径，正是为了避免这种误读。

PDG 同时给出 3 GeV 与 m_c 标度下的值，两者相差约 100 MeV；条目选用 3 GeV，是为了与格点计算的常用约定对齐。[2] 若不写标度，读者会误以为粲夸克质量只有一个固定答案。

## 质量从哪来

粲夸克的质量同样来自 Higgs 汤川耦合，但它与上、下夸克的差别不是“代”本身的属性，而是三个独立的耦合参数。[3] 标准模型不解释为什么 m_c 是 m_u 的约 600 倍；这个层级问题仍是味道物理的核心谜题之一。

## 量级位置

2.264×10⁻²⁷ kg 落在 B2 带的上段，约为质子的 1.35 倍。它刚好跨过“强子质量”的门槛：含粲强子可以衰变成更轻的强子，却不会像奇异粒子那样长寿。这个位置让粲物理成为检验 QCD 与弱作用交界的好窗口。

## 怎么继续走

想看更重的下一代夸克，去 mass.bottom-quark；想看核子质量的基准，去 mass.proton；想看早期宇宙中重夸克如何消失，从 time.quark-era 进入时间轴。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 2.264×10⁻²⁷ 千克，换算后是 2.26×10⁻²¹ 微克；约为质子质量（1.67×10⁻²⁷ 千克）的 1.36 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻²⁷ 量级附近。

读图时先看量级，再看倍数：10⁻²⁷ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
