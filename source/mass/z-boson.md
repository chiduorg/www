---
id: mass.z-boson
title: Z 玻色子：1.626×10⁻²⁵ kg，弱中性流的载体
summary: >-
  Z 玻色子静质量 91.1876 GeV/c²，合 1.6255×10⁻²⁵ kg，是电弱理论里最精确的读数之一。它的衰变线型在 LEP
  上被逐点扫描，由此定出中微子只有三代。
dimension: mass
category: 粒子与基本常数
displayValue: 1.626×10⁻²⁵ kg（91.1876 GeV/c²）
quantity:
  value: 1.6255e-25
  unit: kg
  measure: PDG 2024 静质量 91.1876 GeV/c²；由 LEP 与 SLC 的 Z 共振线型扫描拟合
  approximate: false
grade: A
related:
  - mass.w-boson
  - mass.higgs-boson
  - mass.top-quark
  - mass.electron
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
  - title: 'Review of Particle Physics 2024: Gauge and Higgs Bosons'
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags:
  - 质量
  - Z 玻色子
  - 规范玻色子
  - 电弱
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 静质量 91.1876 GeV/c²；由 LEP 与 SLC 的 Z 共振线型扫描拟合
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B3 分子与生物大分子 · 1.626×10⁻²⁵ kg（91.1876 GeV/c²）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B3
  bandLabel: 分子与生物大分子
  log10: -24.789
  position: 16.36
  color: '#9cc8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Z boson
---
## 这个读数是什么

Z 玻色子是弱中性流的传播子，不带电荷，静质量 91.1876 GeV/c²，折合 1.6255×10⁻²⁵ kg。[1][3] 它比 W 玻色子重约 10.2 GeV，这个差额不是任意的：在电弱理论里，W 与 Z 的质量比由弱混合角决定，测量两者就能反过来定出这个角。

静质量与能量等价质量的区别在这里同样适用。Z 的静质量是洛伦兹不变量，对撞机中它的动能只会抬高系统总能量，不会写进本条读数。[3] 而 Z 作为虚粒子交换时处于离壳状态，动量转移可以远大于 91 GeV，那描述的是相互作用的尺度，不是 Z 本身有多重。

## 口径与不确定度

本条采用 PDG 的 Z 共振参数拟合值，误差约 0.0021 GeV，相对不确定度约 2×10⁻⁵，是整个质量轴上精度最高的读数之一。[1] 同样重要的是宽度：Z 的总宽度约 2.495 GeV，对应寿命约 2.5×10⁻²⁵ 秒。宽度与质量之比决定了它在 e⁺e⁻ 对撞中呈现一条极窄的共振峰。

## 怎么测出来的

LEP 与 SLC 在 1990 年代把质心能量逐点调到 Z 峰附近，测量 e⁺e⁻→Z→强子、轻子对的截面，拟合出 Breit-Wigner 线型，同时读出峰位质量、总宽度与各衰变道的分宽度。[1] 由于中微子道不可见，它的贡献表现为“不可见宽度”；把这部分与理论预言比较，得出轻中微子代数只有三代。[2] 这也是 Z 质量成为标准模型基石的原因之一。

## 量级位置

1.6255×10⁻²⁵ kg 位于 B3 带中段，比质子重约 97 倍，比顶夸克轻约 1.9 倍，与希格斯玻色子同一十进位。它的寿命短到无法留下径迹，实验只能通过衰变产物的不变质量重建它，这也让 Z→ℓ⁺ℓ⁻ 成为对撞机上最干净的“标尺”衰变道。[3]

## 怎么继续走

想看带电的伙伴，去 mass.w-boson；想看给它质量的希格斯机制，去 mass.higgs-boson 与 mass.top-quark；想看 Z 在早期宇宙中如何与中微子一起维持平衡，从 time.big-bang 进入时间轴。
