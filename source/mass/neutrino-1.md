---
id: mass.neutrino-1
title: ν₁：最轻的中微子质量本征态，目前只有上限
summary: ν₁ 是三个质量本征态里最轻的一个。振荡实验只能定出质量平方差，绝对值缺失；宇宙学总和约束给出约 0.05 eV、即 8.9×10⁻³⁸ kg 的上限。
dimension: mass
grade: C
category: 粒子与基本常数
displayValue: ≤ 8.9×10⁻³⁸ kg（约 0.05 eV，上限）
quantity:
  value: 8.9e-38
  unit: kg
  measure: 宇宙学总和约束 Σmν < 0.12 eV 推得的单态上限约 0.05 eV；没有对 ν₁ 的绝对质量测量
  approximate: true
  bound: upper
related:
  - mass.neutrino-2
  - mass.neutrino-3
  - space.neutrino
  - time.neutrino-decoupling
  - time.neutrino-background-formation
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
  - title: KATRIN Experiment
    url: 'https://www.katrin.kit.edu/'
    publisher: Karlsruhe Institute of Technology
    accessed: '2026-11-09'
tags:
  - 质量
  - 中微子
  - 基本粒子
  - 上限
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 宇宙学总和约束 Σmν < 0.12 eV 推得的单态上限约 0.05 eV；没有对 ν₁ 的绝对质量测量
  precision: C 级；上限值，不是点值；近似。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B1 中微子与轻子 · ≤ 8.9×10⁻³⁸ kg（约 0.05 eV，上限）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B1
  bandLabel: 中微子与轻子
  log10: -37.051
  position: 3.17
  color: '#7fe8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Neutrino mass eigenstate ν₁
---
## 这个读数是什么

ν₁ 是三个中微子质量本征态中最轻的一个。中微子不会以单一质量出现：弱作用产生的是味本征态，传播的是质量本征态，二者通过 PMNS 矩阵混合。[1] 因此本条不给“电子中微子的质量”，只给 ν₁ 在宇宙学观测下的上限。0.05 eV 来自 Σmν < 0.12 eV 的总和约束，按三态近似分摊，不是对 ν₁ 的直接测量。[2]

## 为什么只有一个上限

振荡实验测的是质量平方差，不是绝对质量。Δm²21 = 7.53×10⁻⁵ eV² 与 |Δm²31| ≈ 2.45×10⁻³ eV² 只能固定三态之间的间距，整体平移仍然自由。[1] KATRIN 用氚 β 衰变端点给出有效质量上限，仍比宇宙学约束宽一个量级以上。[3] 把 8.9×10⁻³⁸ kg 读成“中微子就这么重”是误读：它只是当前允许的上界。

## 质量从哪来

标准模型里的中微子原本没有质量项，需要加入右手中微子或马约拉纳质量项。无论哪种机制，ν₁ 的质量都不是 Higgs 耦合的直接读数，而是新物理能标的间接痕迹。这也是为什么它的绝对值必须靠宇宙学总和与 β 衰变端点来夹逼，而不能像电子那样写成一个确定的数。目前还没有任何实验直接测到 ν₁ 的质量本征值。[1]

## 量级位置

8.9×10⁻³⁸ kg 比电子轻约 10⁷ 倍，落在 B1 带的最下段。把 0.05 eV 换成温度约为 580 K；宇宙中微子背景今天的温度是 1.95 K，所以这些粒子早已处于非相对论状态，只以质量形式贡献宇宙的能量密度。

## 怎么继续走

想看振荡如何把三态拆开，去 ν₂、ν₃ 两条；想看中微子何时退耦，去时间轴的 neutrino-decoupling；想看味本征态如何混合，从 space.neutrino 进入空间轴。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 8.9×10⁻³⁸ 千克，换算后是 8.9×10⁻³² 微克；约为质子质量（1.67×10⁻²⁷ 千克）的 5.33×10⁻¹¹ 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻³⁸ 量级附近。

读图时先看量级，再看倍数：10⁻³⁸ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
