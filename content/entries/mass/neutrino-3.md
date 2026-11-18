---
id: mass.neutrino-3
title: ν₃：大气振荡给出的最重态下限
summary: >-
  ν₃ 与较轻两态的间距由 |Δm²31| ≈ 2.45×10⁻³ eV² 控制。在最轻态趋近于零时，ν₃ 至少约 0.0495 eV，即 8.8×10⁻³⁸
  kg；它究竟是不是最重态，取决于尚未确定的质量序。
dimension: mass
grade: C
category: 基本粒子
displayValue: ≥ 8.8×10⁻³⁸ kg（约 0.0495 eV，下限）
quantity:
  value: 8.8e-38
  unit: kg
  measure: 由 |Δm²31| ≈ 2.45×10⁻³ eV² 在 m1→0 时推得 m3 ≥ 0.0495 eV；质量序未定
  approximate: true
  bound: lower
related:
  - mass.neutrino-1
  - mass.neutrino-2
  - time.neutrino-background-formation
  - space.neutrino
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
  - title: Neutrino Masses (Review of Particle Physics 2024)
    url: 'https://pdg.lbl.gov/2024/reviews/rpp2024-rev-neutrinos-in-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: Dark Energy Spectroscopic Instrument (DESI)
    url: 'https://www.desi.lbl.gov/'
    publisher: Lawrence Berkeley National Laboratory
    accessed: '2026-11-09'
  - title: Planck Mission
    url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 中微子
  - 大气振荡
  - 质量序
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 由 |Δm²31| ≈ 2.45×10⁻³ eV² 在 m1→0 时推得 m3 ≥ 0.0495 eV；质量序未定
  precision: C 级；下限值，不是点值；近似。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B1 中微子与轻子 · ≥ 8.8×10⁻³⁸ kg（约 0.0495 eV，下限）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B1
  bandLabel: 中微子与轻子
  log10: -37.056
  position: 3.17
  color: '#7fe8ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

ν₃ 是大气振荡中主导的那个质量本征态。超级神冈、T2K 与 NOvA 把 |Δm²31| 定在 2.45×10⁻³ eV² 附近，比太阳缝隙大三十多倍。[1] 如果最轻态 ν₁ 接近零，ν₃ 就至少是 √|Δm²31| ≈ 0.0495 eV，即 8.8×10⁻³⁸ kg。这个数同样是推导出的下限，不是直接称重。

## 质量序仍未确定

ν₃ 是否最重，取决于中微子质量序：正常序下 ν₃ 在最上层，倒置序下它反而最轻，ν₁ 与 ν₂ 被抬到 0.05 eV 左右。[1] 当前振荡数据对两种序都有一定兼容度，宇宙学总和约束则在收紧上限。因此本条只写“ν₃ 的绝对值下限”，不把它写成“最重的中微子”。

普朗克卫星的 CMB 数据与重子声学振荡结合后，把三态质量之和压到 0.12 eV 量级；这个上限正好落在 ν₃ 下限附近，两者可以互相校核。[3] 若未来把总和上限压到 0.06 eV 以下，倒置序就会被排除，这也是质量序问题的关键判据。

## 质量从哪来

大气振荡测量的是 νμ 与 ντ 为主的混合组合，对应的质量间距由 ν₃ 与另外两态的平均值决定。质量矩阵的对角化给出三个本征值，但只有两个独立间距可测；第三个自由度，也就是整体能标，必须由 β 衰变端点或宇宙学补齐。[2]

## 量级位置

8.8×10⁻³⁸ kg 与 ν₁ 的上限几乎重合，两者在 B1 带内只差几个百分点。这不是巧合：若 ν₁ 真在 0.05 eV 附近，三态就会挤在很窄的区间里，这也是宇宙学总和约束最有判别力的区域。

## 怎么继续走

想看不依赖质量序的部分，回 ν₂ 的太阳缝隙；想看整体能标如何被宇宙学限制，去 time.neutrino-background-formation；想从大爆炸一路看到退耦，从 time.big-bang 进入时间轴。
