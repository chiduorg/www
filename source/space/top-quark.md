---
id: space.top-quark
title: 顶夸克约化康普顿波长
titleEn: Top Quark Compton Wavelength
dimension: length
category: 量子与粒子
summary: 顶夸克是标准模型中最重的夸克。它的质量只能通过衰变产物间接重建，不同提取方法给出不同口径；质量可换算成特征波长，但顶夸克并没有测到实体半径。
quantity:
  value: 1.1435267756142793e-18
  unit: m
  measure: 以PDG顶夸克直接测量质量换算的约化康普顿波长ħ/(mc)
  approximate: true
  status: reference
displayValue: 约 1.144 × 10⁻¹⁸ m（约化康普顿波长）
related:
  - space.higgs-boson
  - space.w-z-boson
  - space.quark
reviewStatus: reviewed
sources:
  - title: 2025 PDG Review — Quarks
    url: 'https://pdg.lbl.gov/2025/tables/rpp2025-sum-quarks.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-06'
  - title: 2022 CODATA — Reduced Planck constant in eV s
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?hbarev'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
legacy:
  id: top-quark
  icon: "\U0001F535"
  relatedLabels: 标准模型、希格斯玻色子、Tevatron、大型强子对撞机、底夸克、W玻色子、电弱对称性破缺
conditions: 本条长度由顶夸克直接测量质量按约化康普顿波长换算，适用于质量尺度比较；不代表顶夸克半径或强子化尺寸。
uncertainty: 直接测量质量172.56±0.31 GeV；另存截面法与极点质量口径，数值不同。换算长度还依赖公式约定，不能给出实体半径误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch核对PDG夸克汇总表、CERN标准模型与NIST常数页面。
    - 并列展示直接测量、截面法与极点质量三种口径，不混用为单一数值。
  originalQuantity:
    value: 1e-19
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: wave
  variant: reduced
  color: '#a6b9dc'
  referenceAxis: x
  caption: 顶夸克约化康普顿波长ħ/(mc)
  note: 标线相隔一个弧度相位长度，非完整波长；亮点与波纹均不是顶夸克的实体尺寸或实测轨迹；图为示意，非按比例，非观测重建。
  framePadding: 0.27
  sourceMeasure: 以PDG顶夸克直接测量质量换算的约化康普顿波长ħ/(mc)
  scene: space.object
measureType: 波长
tags:
  - 量子与粒子
  - 波长
  - 原子核
---
## 顶夸克是什么

顶夸克是标准模型六种夸克中最重的一种，属于第三代，与底夸克配对。它带色荷，只能以无色组合出现在强子中；通过弱作用衰变，寿命极短，来不及形成强子。LHC 与 Tevatron 通过其衰变产物重建质量与性质。[1][2]

## 质量怎样测出

PDG 2025 给出直接测量质量 172.56±0.31 GeV，另有从截面提取的 162.5⁺²·¹₋₁·₅ GeV 与极点质量 172.4±0.7 GeV。[1] 这些数来自不同方法，定义并不相同；本页采用直接测量值，并明确它对应事件运动学重建，不是单一实验读数。直接测量依赖喷注能量刻度、底夸克标记与背景建模，多个实验的系统误差彼此相关，PDG 因此给出比例因子 S=1.6。[1]

## 数值与口径

按约化康普顿波长 ħ/(mc)，用 ħc≈197.3269804 MeV·fm 除以 172560 MeV，得约 1.144×10⁻¹⁸ 米。[1][3] 若用普通康普顿波长 h/(mc)，结果大 2π 倍，约 7.19×10⁻¹⁸ 米；这与顶夸克“半径”无关。[3] 质量不确定度 0.31 GeV 换算到长度约为千分之二，但理论公式本身不提供实体边界。

## 常见误解

误解之一是把 10⁻¹⁸ 米当成顶夸克的大小。它只是质量换算的特征波长；顶夸克宽度约 1.42 GeV，质量分布本身有固有宽度，对应寿命约 5×10⁻²⁵ 秒，远未达到强子化时间，因此不能把单一重建值当成无限精确的峰。[1] 误解之二是把不同质量提取方法的结果混用，导致数值前后不一致。[1]

## 与其他尺度的关系

它比质子（约 1 飞米）小三个数量级，属于亚原子尺度中的高质量端；与 W、Z 及希格斯玻色子条目比较时，应先按各自质量换算，并统一采用普通或约化康普顿波长口径。[1][3] 这些比较都在“质量换算波长”的同一口径下进行。它虽是质量最大的夸克，特征波长仍比普朗克长度大约十七个数量级，两者不可混为一谈。
