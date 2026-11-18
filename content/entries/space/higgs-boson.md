---
id: space.higgs-boson
title: 希格斯玻色子康普顿波长
titleEn: Higgs Boson Compton Wavelength
dimension: length
category: 量子与粒子
summary: 希格斯玻色子是希格斯场的激发，2012年在LHC被发现。其质量已测到125.065 GeV；质量可换算成特征波长，但这不是粒子的实体直径。
quantity:
  value: 9.913580812633452e-18
  unit: m
  measure: 按CMS 125.065 GeV/c²质量换算的普通康普顿波长h/(mc)
  approximate: true
displayValue: 约 9.914 × 10⁻¹⁸ m（普通康普顿波长）
related:
  - space.electron-compton
  - space.proton
  - space.top-quark
  - space.w-z-boson
reviewStatus: reviewed
sources:
  - title: How much does the Higgs boson weigh? CMS gives its most precise answer yet
    url: >-
      https://cms.cern/index.php/news/how-much-does-higgs-boson-weigh-cms-gives-its-most-precise-answer-yet
    publisher: CERN / CMS Collaboration
    accessed: '2026-11-06'
  - title: The Higgs boson
    url: 'https://home.cern/science/physics/higgs-boson'
    publisher: CERN
    accessed: '2026-11-06'
  - title: 2022 CODATA — Reduced Planck constant in eV s
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?hbarev'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
legacy:
  id: higgs-boson
  icon: "\U0001F52E"
  relatedLabels: 希格斯机制、标准模型、大型强子对撞机、电弱对称性破缺、标量场、真空期望值、上帝粒子
conditions: 本条长度由质量按普通康普顿波长换算，适用于统一比较粒子质量尺度；不代表粒子半径或相互作用截面。
uncertainty: 质量测量不确定度约88 MeV（相对约0.07%）；换算长度的精度受质量与公式约定共同限制，理论公式本身不提供实体边界。
review:
  method: source-check
  date: '2026-11-08'
  notes:
    - 本轮按五节结构重写；用WebFetch核对CMS最新质量测量、CERN希格斯页面与NIST常数页面。
    - 质量用125.065 GeV，长度明确标为换算值而非粒子直径。
  originalQuantity:
    value: 1e-17
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: wave
  variant: ordinary
  color: '#b9abd3'
  referenceAxis: x
  caption: 希格斯普通康普顿波长h/(mc)
  note: 整周期标线表示普通波长；波幅、亮点和动画不代表粒子实体边界、真实振动或寿命；图为示意，非按比例，非观测重建。
  framePadding: 0.27
  sourceMeasure: 按CMS 125.065 GeV/c²质量换算的普通康普顿波长h/(mc)
  scene: space.object
measureType: 波长
tags:
  - 量子与粒子
  - 波长
  - 原子核
---
## 希格斯玻色子是什么

希格斯玻色子是希格斯场的激发。按标准模型，粒子通过与希格斯场相互作用获得质量；2012 年 ATLAS 与 CMS 在 LHC 发现了一个性质相符的新粒子，随后确认它不带电荷，且是标准模型中唯一自旋为零的基本粒子。[1][2]

## 怎样知道它的质量

CMS 在 2026 年公布的最新分析把 H→γγ 与 H→ZZ→4l 两个衰变道合并，得到 125.065 GeV，不确定度仅 88 MeV，相对精度约 0.07%。[1] 这是对质量的实验测量，不是对粒子大小的测量；质量确定后，才能按公式换算出特征长度。由于希格斯玻色子只在约十亿分之一的 LHC 碰撞中产生，信号必须依靠大量事件的统计分析，而不是单次碰撞的“照片”。[1][2]

## 数值与口径

本页取普通康普顿波长 λ=h/(mc)。由 NIST 的约化普朗克常数与光速相乘得 ħc≈197.3 MeV·fm，再乘 2π 得 hc≈1.2398×10⁻⁶ eV·m；除以 125.065 GeV，得到约 9.914×10⁻¹⁸ 米。[3] 若直接用 ħ 则得约化波长，数值小 2π 倍；两者都不是粒子直径，引用时必须注明。[3] 粒子物理常把 ħ 与 c 取为 1，此时质量与长度互为倒数；换回国际单位时必须补回这两个常数，否则会把 10⁻¹⁸ 米误写成 10⁻¹⁸ 吉电子伏特。质量本身还有约 88 MeV 的测量误差，换算出的小数位不代表真实精度。[1]

## 常见误解

误解之一是把希格斯玻色子叫作“上帝粒子”，仿佛它单独赋予一切质量；按标准模型，粒子是通过与希格斯场相互作用获得质量，光子不参与这种相互作用，因此没有质量。[2] 误解之二是把 10⁻¹⁸ 米当成希格斯粒子的实体半径；它只是把质量换算成波长的理论参照。[1][3]

## 与其他尺度的关系

它比质子（约 1 飞米）小约两个数量级，比原子（约 10⁻¹⁰ 米）小约七个数量级；在电弱尺度上与 W、Z 玻色子及顶夸克的特征波长相邻。[1][3] 这些长度都来自质量换算，比较时应统一采用普通或约化康普顿波长。
