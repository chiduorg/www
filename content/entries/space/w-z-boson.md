---
id: space.w-z-boson
title: W/Z玻色子（W约化康普顿波长参照）
titleEn: W/Z Boson Compton Wavelength
dimension: length
category: 量子与粒子
summary: >-
  W与Z是弱相互作用的传递粒子，1983年在CERN被发现。W的质量已测到约80.37
  GeV；按康普顿波长换算约2.46×10⁻¹⁸米，但这不是弱作用的硬边界。
quantity:
  value: 2.4552562474181655e-18
  unit: m
  measure: 以PDG W玻色子质量换算的约化康普顿波长ħ/(mc)
  approximate: true
  status: reference
displayValue: 约 2.455 × 10⁻¹⁸ m（W玻色子约化康普顿波长）
related:
  - space.higgs-boson
  - space.top-quark
  - space.strong-force
  - time.present
  - temperature.room-temperature
reviewStatus: reviewed
sources:
  - title: PDG 2025 — W Boson Listings
    url: 'https://pdg.lbl.gov/2025/listings/rpp2025-list-w-boson.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: 'W boson: Sunshine and stardust'
    url: 'https://home.cern/science/physics/w-boson-sunshine-and-stardust'
    publisher: CERN
    accessed: '2026-11-06'
  - title: 2022 CODATA — Reduced Planck constant in eV s
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?hbarev'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
legacy:
  id: w-z-boson
  icon: ⚡
  relatedLabels: 电弱统一理论、希格斯机制、CERN、标准模型、规范玻色子、质子-反质子对撞机、随机冷却
conditions: 本条长度由W质量按约化康普顿波长换算，适用于与电弱尺度比较；不代表W或Z的实体半径，也不等于弱作用力的固定作用距离。
uncertainty: W质量80.3692±0.0133 GeV为世界平均，且剔除CDF-II后兼容性更好；换算长度只反映质量精度与公式约定，不给出粒子半径误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch核对PDG的W玻色子列表、CERN的W玻色子页面与NIST常数页。
    - 只对W做数值换算，Z需按自身质量另算，避免把两者混成一个尺寸。
  originalQuantity:
    value: 1e-18
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: wave
  variant: reduced
  color: '#b2bfd4'
  referenceAxis: x
  caption: 特指W玻色子的约化康普顿波长
  note: 标线相隔一个弧度相位长度；Z需按自身质量另算，本图不表示二者共用一个精确实体尺寸；图为示意，非按比例，非观测重建。
  framePadding: 0.27
  sourceMeasure: 以PDG W玻色子质量换算的约化康普顿波长ħ/(mc)
  scene: space.object
measureType: 波长
tags:
  - 量子与粒子
  - 波长
  - 原子核
---
## W 和 Z 玻色子是什么

W 与 Z 是弱相互作用的传递粒子。W 带 ±1 电荷，能改变粒子种类，参与核衰变与恒星燃烧；Z 不带电，是 W 的中性伙伴。二者与光子同属电弱规范玻色子，在 1983 年由 CERN 的 UA1、UA2 实验发现，其质量与希格斯机制有关。[1][2]

## 数值与口径

PDG 2025 的 W 质量为 80.3692±0.0133 GeV，并注明这是带质量相关宽度的 Breit–Wigner 分布参数；全球平均值在剔除 CDF-II 结果后兼容性更好。[1] 本页只取 W，不把 W 与 Z 混成一个数。[1] 1983 年发现后，LEP 与 LHC 持续提高质量测量精度；任何与理论预言的偏离都可能指向尚未认识的新物理，因此这个数值也是电弱检验的一部分。[2]

## 换算成长度

按约化康普顿波长 ħ/(mc)：ħc≈197.3269804 MeV·fm，除以 80369.2 MeV，得约 2.455×10⁻¹⁸ 米。[1][3] 若用普通康普顿波长 h/(mc)，结果大 2π 倍，约 1.543×10⁻¹⁷ 米；两者都必须注明约定。[3] 质量不确定度 0.0133 GeV 对应长度约万分之一点七，但这不是“量到边界”的精度。

## 常见误解

误解之一是把 W 的约化康普顿波长当成弱作用的“硬截止半径”。弱作用在约 10⁻¹⁸ 米量级有效，但作用范围由过程与能量决定，不是一个固定球壳。[1][2] 误解之二是让 W 与 Z 共用一个尺寸；Z 质量不同，必须按自身质量另算。W 的质量与 Z 质量、希格斯真空期望值由电弱关系联系，不能把其中一个数值随意单独改动而不影响整套描述。[1][2]

## 与其他尺度的关系

它比质子（约 1 飞米）小约三个数量级，处在电弱尺度与强子尺度之间；与顶夸克、希格斯玻色子比较时，应按各自质量统一换算，不能直接沿用 W 的长度。[1][3] 与电弱条目对读，可把“质量—波长—作用范围”三者分开，而不是把 10⁻¹⁸ 米当成一个粒子的大小。原子核比这个特征波长大三个数量级，这正对应弱作用只在亚核距离上显效。
