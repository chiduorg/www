---
id: mass.strange-quark
title: 奇异夸克：93.4 MeV 的流质量，夸克代际的第一道台阶
summary: >-
  奇异夸克的流质量在 2 GeV 标度下约为 93.4 MeV/c²，即 1.665×10⁻²⁸
  kg。它比上、下夸克重一个数量级以上，却仍轻到能在中子星与强子物理中扮演角色。
dimension: mass
grade: A
category: 粒子与基本常数
displayValue: ≈ 1.665×10⁻²⁸ kg（流质量 93.4 MeV）
quantity:
  value: 1.665e-28
  unit: kg
  measure: PDG 2024 MS-bar 流质量 m_s(2 GeV) = 93.4（+8.6/−3.4）MeV/c²；无法孤立观测
  approximate: true
related:
  - mass.up-quark
  - mass.charm-quark
  - time.strange-quark-matter
  - space.quark
  - mass.neutron
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
  - 奇异数
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 MS-bar 流质量 m_s(2 GeV) = 93.4（+8.6/−3.4）MeV/c²；无法孤立观测
  precision: A 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · ≈ 1.665×10⁻²⁸ kg（流质量 93.4 MeV）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -27.779
  position: 13.14
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Strange quark
---
## 这个读数是什么

奇异夸克是第二代夸克中较轻的一个，流质量在 2 GeV 标度下约为 93.4 MeV/c²，即 1.665×10⁻²⁸ kg。[1] 它比上、下夸克重二十到四十倍，却仍明显轻于粲、底、顶夸克。这个“中间位置”使它成为检验手征微扰论与格点 QCD 的常用标尺。

## 为什么误差不对称

奇异夸克质量的误差是 +8.6/−3.4 MeV，明显偏向上方。[1] 这不是笔误：格点 QCD 与味道物理的拟合在低端有更强的约束，高端则受高圈修正与标度不确定性影响。条目保留不对称误差，避免把中心值写成“精确值”。

PDG 汇总的格点平均同时列出 2 GeV 与 3 GeV 两个标度的值，条目采用与上、下夸克一致的 2 GeV，保证横向比较时标度统一。[2] 标度不同会让数值差出几个 MeV，足以影响奇异夸克对核子质量的贡献估计。

## 质量从哪来

奇异夸克同样通过 Higgs 汤川耦合获得质量，但它的质量远大于上、下夸克，说明三代夸克的汤川耦合并不是同一个数。[3] 在强子中，奇异夸克会带来“奇异数”这个量子数；含奇异夸克的强子统称奇异粒子，它们的衰变通常比不含奇异夸克的强子慢，因为弱作用要改变奇异数。

## 量级位置

1.665×10⁻²⁸ kg 落在 B2 带的中段，约为 μ 子的 0.88 倍、质子的 0.1 倍。这个质量足以让含奇异夸克的强子通过弱作用衰变，又不至于像粲夸克那样迅速消失，因此奇异粒子在宇宙线与人造束流中都留下了清晰信号。

## 怎么继续走

想看下一代夸克的跃迁，去 mass.charm-quark；想看奇异夸克在致密物质中的角色，去 time.strange-quark-matter；想看核子质量的来源，回 mass.proton。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.665×10⁻²⁸ 千克，换算后是 1.67×10⁻²² 微克；约为质子质量（1.67×10⁻²⁷ 千克）的 0.0997 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻²⁸ 量级附近。

读图时先看量级，再看倍数：10⁻²⁸ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
