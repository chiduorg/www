---
id: mass.tau
title: τ 子：3.168×10⁻²⁷ kg，最重的带电轻子
summary: τ 子是第三代带电轻子，静质量 3.16754×10⁻²⁷ kg，约 1776.86 MeV/c²。它比质子重近两倍，寿命却只有 2.9×10⁻¹³ 秒。
dimension: mass
grade: A
category: 粒子与基本常数
displayValue: 3.168×10⁻²⁷ kg
quantity:
  value: 3.16754e-27
  unit: kg
  measure: PDG 2024 静质量 1776.86 ± 0.12 MeV/c²；由 τ 对产生阈值与衰变产物运动学拟合
  approximate: false
related:
  - space.tau
  - mass.muon
  - mass.electron
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
  - title: Review of Particle Physics 2024
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-09'
tags:
  - 质量
  - τ 子
  - 轻子
  - 基本粒子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 静质量 1776.86 ± 0.12 MeV/c²；由 τ 对产生阈值与衰变产物运动学拟合
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · 3.168×10⁻²⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -26.499
  position: 14.52
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Tau lepton
---
## 这个读数是什么

τ 子是三代带电轻子中最重的一个，静质量 1776.86 MeV/c²，即 3.16754×10⁻²⁷ kg。[1] 它比质子重约 1.89 倍，却因为弱作用衰变而寿命极短：约 2.9×10⁻¹³ 秒。τ 子不能稳定存在，只能在加速器或高能宇宙线相互作用中产生。

## 怎么测出来的

τ 质量最早由 e⁺e⁻ 对产生阈值确定：当质心能量刚好超过 2m_τc² 时，τ⁺τ⁻ 对开始出现，截面台阶的位置直接给出质量。[1] 后续实验用衰变产物的运动学分布进一步收紧误差。与 μ 子不同，τ 子的寿命太短，无法用 μ 子氢那样的光谱方法测量。

CODATA 给出的 τ 与电子质量比在 3477 量级，这个比值与轻子普适性检验直接相关。[2] 若 τ 与 μ 的耦合存在差异，比值就会偏离标准模型预言，因此它不只是质量记录，也是新物理的探针。[3]

## 质量从哪来

τ 子的质量来自它与 Higgs 场的汤川耦合，耦合强度是标准模型的自由参数。[3] 三代带电轻子的质量比约为 1 : 207 : 3477，这个强烈的层级没有任何已知的动力学解释。τ 子因此常被用作检验轻子普适性的对象：若它与 μ 子的耦合偏离标准模型预言，新物理可能藏在其中。

## 量级位置

3.168×10⁻²⁷ kg 落在 B2 带的上段，与氦核几乎同一水平。它比 μ 子重 16.8 倍，比电子重 3477 倍。这个质量足以让 τ 子衰变成大量强子，τ 衰变因此成为研究强作用末态的重要窗口。

## 怎么继续走

想看同一代但更轻的轻子，去 mass.muon；想看最轻的稳定轻子，去 mass.electron；想看质量谱如何影响早期宇宙的粒子丰度，从 time.big-bang 进入时间轴。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 3.168×10⁻²⁷ 千克，换算后是 3.17×10⁻²¹ 微克；约为质子质量（1.67×10⁻²⁷ 千克）的 1.9 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻²⁷ 量级附近。

读图时先看量级，再看倍数：10⁻²⁷ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
