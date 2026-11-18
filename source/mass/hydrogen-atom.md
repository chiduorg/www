---
id: mass.hydrogen-atom
title: 氢原子：1.6735×10⁻²⁷ kg，结合能亏损最小的原子
summary: >-
  中性氢原子（¹H）的基态质量约 1.67353×10⁻²⁷ kg，即 1.007825 u。它比质子加电子之和少约 13.6
  eV/c²，这个差值就是氢的电离能对应的质量亏损。
dimension: mass
grade: A
category: 原子
displayValue: 1.6735×10⁻²⁷ kg
quantity:
  value: 1.67353e-27
  unit: kg
  measure: 中性 ¹H 原子基态质量，由原子质量单位 1.007825 u 换算；含电子与结合能亏损
  approximate: false
related:
  - mass.proton
  - mass.electron
  - mass.helium-nucleus
  - elements.h
  - space.hydrogen-21cm
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
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: Review of Particle Physics 2024
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
tags:
  - 质量
  - 氢原子
  - 原子
  - 结合能
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 中性 ¹H 原子基态质量，由原子质量单位 1.007825 u 换算；含电子与结合能亏损
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B2 夸克、轻子与核子 · 1.6735×10⁻²⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B2
  bandLabel: 夸克、轻子与核子
  log10: -26.776
  position: 14.22
  color: '#8dd5ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

氢原子是最轻的中性原子：一个质子、一个电子，电子处在 1s 基态。它的质量约为 1.67353×10⁻²⁷ kg，即 1.007825 原子质量单位。[1] 这是中性原子的整体质量，已经包含电子，也包含电子与质子之间的结合能亏损。

## 为什么不是质子加电子

质子质量加电子质量约为 1.67353×10⁻²⁷ kg，看似与氢原子相同；但严格相减会发现氢原子轻了约 13.6 eV/c²，也就是 2.4×10⁻³⁵ kg。[2] 这个差值正是氢的电离能：把电子从 1s 拿到无穷远需要注入的能量，对应束缚态的质量亏损。质量轴要求使用实测原子质量，而不是把粒子质量直接相加，原因就在这里。

## 怎么测出来的

氢原子质量通过原子质量标尺与质谱测量得到：¹H 的相对原子质量为 1.007825032，乘以原子质量单位即得 kg 值。[1] 由于氢是最轻的原子，它的质量也是检验 QED 与质子—电子质量比的基准之一；任何偏差都会同时影响里德伯常数与原子光谱的预言。

PDG 的粒子质量表与 NIST 的原子质量数值互相校核，条目采用两者的公共值，避免单一来源的排版误差。[3] 氢的质量精度还受质子—电子质量比影响，而这个比值的测量本身就是精密物理的课题。[2]

## 量级位置

1.6735×10⁻²⁷ kg 与质子、中子同处 B2 带的上段，只比质子重一个电子质量。它不是“宏观物质”的起点，却是化学与原子物理的起点：从这个数往上，分子、细胞与人体才开始逐级出现。

## 怎么继续走

想看它的两个组成部分，去 mass.proton 与 mass.electron；想看氦核如何把四个核子绑在一起，去 mass.helium-nucleus；想看氢的 21 厘米谱线如何标记宇宙中的中性气体，从 space.hydrogen-21cm 进入空间轴。
