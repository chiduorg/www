---
id: mass.helium-nucleus
title: 氦核：6.645×10⁻²⁷ kg，α 粒子的结合能账本
summary: >-
  氦-4 原子核（α 粒子）质量约 6.644657×10⁻²⁷ kg，即 4.001506 u。它比两个质子加两个中子之和轻约 28.3
  MeV/c²，这个亏损就是核聚变放能的来源。
dimension: mass
grade: A
category: 原子核
displayValue: 6.645×10⁻²⁷ kg
quantity:
  value: 6.644657e-27
  unit: kg
  measure: ⁴He 原子核质量，由中性氦原子质量扣除两个电子与原子结合能
  approximate: false
related:
  - mass.proton
  - mass.neutron
  - mass.hydrogen-atom
  - elements.he
  - space.alpha-particle
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
  - title: Atomic Weights and Isotopic Compositions
    url: >-
      https://www.nist.gov/pml/atomic-weights-and-isotopic-compositions-relative-atomic-masses
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: Review of Particle Physics 2024
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags:
  - 质量
  - 氦核
  - α 粒子
  - 结合能
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: ⁴He 原子核质量，由中性氦原子质量扣除两个电子与原子结合能
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · 6.645×10⁻²⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -26.178
  position: 14.86
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

氦-4 原子核由两个质子与两个中子组成，也就是 α 粒子。它的质量约为 6.644657×10⁻²⁷ kg，即 4.001506 原子质量单位。[1] 这是裸核质量，不含电子；若用中性氦原子质量，需要再加上两个电子的质量并扣除相应的原子结合能。

## 质量亏损在哪里

两个质子加两个中子的质量之和约为 6.644657×10⁻²⁷ kg 加上 28.3 MeV/c² 的亏损，也就是约 5.0×10⁻²⁹ kg。[2] 这部分质量在核聚变中以伽马射线与中微子的形式释放出去。氦-4 的每核子结合能约 7.07 MeV，是轻核中最高的之一，因此它既是聚变的产物，也是聚变链条的终点之一。

## 怎么测出来的

氦核质量不能直接称量，而是由中性氦原子的质谱值扣除电子质量与原子结合能得到。[1] 这条链条把核质量、原子质量与电子质量连在一起；每一步的误差都会传播到最终值。条目采用原子质量单位换算，避免在正文里自行做多步加减。

CODATA 的电子质量与原子质量单位换算给出同一条链条的另一端，两个来源在 10⁻¹⁰ 相对精度内一致。[3] 若把氦核质量写成四个核子相加，就会漏掉 28.3 MeV 的结合能。[2]

## 量级位置

6.645×10⁻²⁷ kg 是 B2 带的上端，约为氢原子的 3.97 倍、质子的 3.97 倍。它已经接近“四个核子”的整数倍，说明核子质量尺度在轻核中非常稳定；真正让质量轴跨数量级的，是原子、分子与宏观物体，而不是核子内部的差别。

## 怎么继续走

想看四个核子如何逐个搭起来，去 mass.proton、mass.neutron 与 mass.hydrogen-atom；想看氦在元素轴上的闭壳位置，去 elements.he；想看原初核合成如何留下氦-4，从 time.big-bang 进入时间轴。
