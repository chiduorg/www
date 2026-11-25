---
id: mass.neutrino-2
title: ν₂：由 Δm²21 推得的下限，不是一次称重
summary: >-
  ν₂ 的绝对质量仍未知。太阳中微子振荡把 Δm²21 定到 7.53×10⁻⁵ eV²；在最轻态趋近于零的假设下，ν₂ 的质量下限约为 0.0087
  eV，即 1.55×10⁻³⁸ kg。
dimension: mass
grade: C
category: 粒子与基本常数
displayValue: ≥ 1.55×10⁻³⁸ kg（约 8.7×10⁻³ eV，下限）
quantity:
  value: 1.55e-38
  unit: kg
  measure: 由 Δm²21 = 7.53×10⁻⁵ eV² 在 m1→0 时推得 m2 ≥ 0.0087 eV；不是直接质量测量
  approximate: true
  bound: lower
related:
  - mass.neutrino-1
  - mass.neutrino-3
  - time.neutrino-decoupling
  - space.neutrino
  - mass.electron
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
  - title: KATRIN Experiment
    url: 'https://www.katrin.kit.edu/'
    publisher: Karlsruhe Institute of Technology
    accessed: '2026-11-09'
  - title: Neutrino oscillation (Review of Particle Physics 2024)
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
tags:
  - 质量
  - 中微子
  - 振荡
  - 下限
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 由 Δm²21 = 7.53×10⁻⁵ eV² 在 m1→0 时推得 m2 ≥ 0.0087 eV；不是直接质量测量
  precision: C 级；下限值，不是点值；近似。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B1 中微子与轻子 · ≥ 1.55×10⁻³⁸ kg（约 8.7×10⁻³ eV，下限）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B1
  bandLabel: 中微子与轻子
  log10: -37.81
  position: 2.36
  color: '#7fe8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Neutrino mass eigenstate ν₂
---
## 这个读数是什么

ν₂ 是三个质量本征态的中间态。太阳中微子实验把它的质量平方差定得很准：Δm²21 = 7.53×10⁻⁵ eV²，误差已压到百分之几。[1] 但平方差只给出间距，不给绝对高度。若最轻态 ν₁ 的质量趋近于零，ν₂ 就趋近于 √Δm²21 ≈ 0.0087 eV；1.55×10⁻³⁸ kg 正是这个下限，而不是一次称重结果。

## 为什么写成下限

只要 ν₁ 有质量，ν₂ 就只会更大，因此 0.0087 eV 是硬下限。反过来，宇宙学总和约束给它一个上限：三态之和小于 0.12 eV，ν₂ 不可能单独超过这个数。[2] 条目选下限作为 quantity.value，是因为振荡数据能确定地给出它；上限依赖宇宙学模型，写成正文而不是主读数。

## 质量从哪来

与 ν₁ 一样，ν₂ 的质量不是标准模型原始参数，而是质量矩阵被对角化后的本征值之一。太阳振荡对应的是 ν₁ 与 ν₂ 的混合，混合角 θ12 约 33°，所以太阳中微子在传播中会周期性地改变味。[1] 这条读数因此同时携带两个信息：质量间距确定，绝对能标仍开放。

PDG 的振荡综述把太阳、大气、反应堆与加速器数据放进同一个全局拟合，θ12 与 Δm²21 就是这套拟合的输出。[3] 单靠一类实验无法同时定出混合角与质量间距，必须合并所有通道。

## 量级位置

1.55×10⁻³⁸ kg 仍在 B1 带内，比 ν₁ 的允许上限低约 5.7 倍。它与 ν₃ 的间距由 |Δm²31| 控制，远大于 ν₁–ν₂ 的间距；这就是“太阳缝隙”与“大气缝隙”两个不同尺度。

## 怎么继续走

想看最轻态的上限，回 ν₁；想看最大的质量间距，去 ν₃；想理解振荡为什么需要质量本征态，从 time.neutrino-decoupling 看退耦时刻，再从 space.neutrino 看味本征态的定义。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.55×10⁻³⁸ 千克，换算后是 1.55×10⁻³² 微克；约为质子质量（1.67×10⁻²⁷ 千克）的 9.28×10⁻¹² 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻³⁸ 量级附近。

读图时先看量级，再看倍数：10⁻³⁸ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
