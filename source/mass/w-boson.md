---
id: mass.w-boson
title: W 玻色子：1.433×10⁻²⁵ kg，弱作用的带电载体
summary: >-
  W± 玻色子静质量 80.3692 GeV/c²，合 1.433×10⁻²⁵ kg。它是弱相互作用的中介粒子，寿命约 3×10⁻²⁵ 秒；它的质量与 Z
  玻色子的差异，正是弱中性流与带电流强度不同的来源。
dimension: mass
category: 规范玻色子
displayValue: 1.433×10⁻²⁵ kg（80.3692 GeV/c²）
quantity:
  value: 1.433e-25
  unit: kg
  measure: PDG 2024 静质量 80.3692 GeV/c²；由 LEP2 阈值扫描与 Tevatron、LHC 的衰变运动学联合拟合
  approximate: false
grade: A
related:
  - mass.z-boson
  - mass.higgs-boson
  - mass.top-quark
  - mass.proton
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
  - W 玻色子
  - 规范玻色子
  - 基本粒子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 静质量 80.3692 GeV/c²；由 LEP2 阈值扫描与 Tevatron、LHC 的衰变运动学联合拟合
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B3 分子与生物大分子 · 1.433×10⁻²⁵ kg（80.3692 GeV/c²）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B3
  bandLabel: 分子与生物大分子
  log10: -24.844
  position: 16.3
  color: '#9cc8ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

W 玻色子是弱相互作用的带电传播子，分 W⁺ 与 W⁻ 两种，静质量为 80.3692 GeV/c²，折合 1.433×10⁻²⁵ kg。[1][3] 它和光子一样属于规范玻色子，但光子静质量为零，W 却有接近 100 个质子重的质量，这个差别来自电弱对称性的自发破缺。

粒子的静质量与能量等价质量要分开看。静质量是洛伦兹不变量，任何参考系下都相同；对撞机里 W 由高速夸克发射时携带的动能，会增加系统的总能量，却不改变这条记录的 80.3692 GeV/c²。[3] 另外，作为交换的虚 W 可以远离壳层、取值不固定，那属于传播子的动量转移，不是它的质量。

## 口径与不确定度

本条采用 PDG 的电弱联合拟合值，误差约 0.013 GeV，相对不确定度约 0.017%。[1] W 质量不是孤立参数：它与顶夸克质量、希格斯质量通过辐射修正联系在一起，三者必须放进同一套拟合里才能自洽。2022 年 CDF 合作组曾给出明显偏高的测量，与全球拟合存在张力，目前尚未定论，因此本条仍以 PDG 的联合值为准。

## 怎么测出来的

LEP2 用 e⁺e⁻ 湮灭扫描 W⁺W⁻ 对产生的阈值，质心能量刚好越过 2m_W c² 时截面出现台阶，台阶位置直接给出质量。[1] Tevatron 与 LHC 则依靠 W→ℓν 衰变的横质量分布：中微子逃逸，但横向动量失衡可以重建出 W 的横质量，分布的上端点对应 m_W。两条路径互为检验，才把误差压到 0.02% 量级。[2]

## 量级位置

1.433×10⁻²⁵ kg 落在 B3 带的中段，比质子重约 85.7 倍，比 Z 玻色子轻约 10.2 GeV。这个质量决定了费米常数：弱作用的强度正比于 g²/m_W²，W 越重，低能下的弱作用就显得越弱，β 衰变才会慢到以分钟计。[3]

## 怎么继续走

想看它的中性伙伴，去 mass.z-boson；想看电弱对称破缺的另一块拼图，去 mass.higgs-boson 与 mass.top-quark；想看 W 在早期宇宙中如何维持弱平衡，从 time.big-bang 进入时间轴。
