---
id: mass.higgs-boson
title: 希格斯玻色子：2.232×10⁻²⁵ kg，唯一的基本标量粒子
summary: >-
  希格斯玻色子静质量 125.20 GeV/c²，合 2.2319×10⁻²⁵ kg。它是标准模型里唯一自旋为零的基本粒子，2012 年在 LHC
  上被发现；它的质量不由任何对称性预言，只能测量。
dimension: mass
category: 粒子与基本常数
displayValue: 2.232×10⁻²⁵ kg（125.20 GeV/c²）
quantity:
  value: 2.2319e-25
  unit: kg
  measure: PDG 2024 静质量 125.20 GeV/c²；由 ATLAS 与 CMS 的 H→γγ、H→4ℓ 等衰变道联合拟合
  approximate: false
grade: A
related:
  - mass.w-boson
  - mass.z-boson
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
  - title: 'Review of Particle Physics 2024: Higgs Boson'
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
  - 希格斯玻色子
  - 标量粒子
  - 基本粒子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 静质量 125.20 GeV/c²；由 ATLAS 与 CMS 的 H→γγ、H→4ℓ 等衰变道联合拟合
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B3 分子与生物大分子 · 2.232×10⁻²⁵ kg（125.20 GeV/c²）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B3
  bandLabel: 分子与生物大分子
  log10: -24.651
  position: 16.5
  color: '#9cc8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Higgs boson
---
## 这个读数是什么

希格斯玻色子是标准模型里唯一自旋为零的基本粒子，静质量 125.20 GeV/c²，折合 2.2319×10⁻²⁵ kg。[1][3] 它与其他基本粒子的质量来源有关，但自身质量并不由希格斯机制“解释”：在标准模型里，希格斯质量是一个自由参数，必须由实验输入，理论只能给出它应当低于某个尺度，否则电弱真空会失稳。

静质量与能量等价质量在这里尤其容易混淆。125.20 GeV/c² 是不变量质量，由衰变产物的不变质量峰位读出；质子—质子对撞的质心能量高达 13 TeV，那是碰撞能量，不是希格斯的质量。[3] 希格斯与场的自相互作用能也不计入这个读数，它已经是拉格朗日量里的参数本身。

## 口径与不确定度

本条采用 PDG 对 ATLAS 与 CMS 数据的联合值，误差约 0.11 GeV，相对不确定度约 0.09%。[1] 这个精度足以支撑对希格斯耦合的检验：耦合强度预言正比于粒子质量，因此 W、Z、顶夸克与 τ 的耦合都应落在同一条直线上，测量偏差就是新物理的线索。

## 怎么测出来的

2012 年 ATLAS 与 CMS 在 H→γγ 与 H→ZZ*→4ℓ 两个高分辨道里同时看到约 125 GeV 的峰，随后 H→WW*、H→bb̄、H→ττ 等道陆续被确认。[1][2] 质量主要来自 γγ 与 4ℓ 道：光子和轻子末态的能量分辨率最好，峰位拟合的误差最小。强子末态本底大，更多用于测耦合而不是测质量。

## 量级位置

2.2319×10⁻²⁵ kg 是 B3 带里最重的基本粒子读数之一，比质子重约 133 倍，比 Z 玻色子重约 1.37 倍。它的质量恰好落在 LHC 能触及的窗口内：再重一倍，2012 年的发现就要推迟；再轻很多，希格斯衰变到 b 夸克的通道会压倒高分辨道，发现会更困难。[2]

## 怎么继续走

想看给它“让位”的规范玻色子，去 mass.w-boson 与 mass.z-boson；想看耦合最强的费米子，去 mass.top-quark；想看电弱对称破缺在早期宇宙中如何发生，从 time.big-bang 进入时间轴。
