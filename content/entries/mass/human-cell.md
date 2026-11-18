---
id: mass.human-cell
title: 人体细胞：2.0×10⁻¹² kg，以 HeLa 细胞为代表的湿重均值
summary: >-
  以 HeLa 细胞为代表，一个培养的人体细胞湿重均值约 2.0×10⁻¹² kg（2 ng），干重约为湿重的 20–30%。不同细胞类型差异很大，条目取
  ±50% 的区间，不把它当作所有人体细胞的统一值。
dimension: mass
category: 人体细胞
displayValue: 2.0×10⁻¹² kg
quantity:
  value: 2.e-12
  unit: kg
  measure: 以 HeLa 细胞为代表的单个培养人体细胞湿重均值；由约 2–3 pL 的细胞体积与约 1.05 g/cm³ 的密度估算，不确定度约 ±50%
  approximate: true
grade: B
related:
  - mass.neuron
  - mass.red-blood-cell
  - mass.bacterium
  - mass.sperm-cell
  - space.cell
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
  - title: BioNumbers — The Database of Useful Biological Numbers
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: Cell Press
    url: 'https://www.cell.com/'
    publisher: Elsevier
    accessed: '2026-11-09'
tags:
  - 质量
  - 人体细胞
  - HeLa
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 以 HeLa 细胞为代表的单个培养人体细胞湿重均值；由约 2–3 pL 的细胞体积与约 1.05 g/cm³ 的密度估算，不确定度约 ±50%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B5 细胞 · 2.0×10⁻¹² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B5
  bandLabel: 细胞
  log10: -11.699
  position: 30.43
  color: '#b48cff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

“人体细胞”不是一个单一对象，而是几百种形态各异的细胞。为了让读数可复现，本条取实验室最常用的 HeLa 细胞作代表：一个培养中的 HeLa 细胞，湿重均值约为 2.0×10⁻¹² kg，也就是 2 纳克。[1] 这是整个细胞的质量，包含细胞核、细胞质、膜系统与水分。

## 口径与不确定度

这里仍是湿重均值。培养细胞干重通常约为湿重的 20–30%，其余是水；同一个细胞在不同培养密度、不同细胞周期阶段下的体积可以差出一倍。[2] 更要紧的是，人体细胞之间的差异远大于测量误差：红细胞约 0.1 ng，心肌细胞约 20 ng，卵细胞接近 1 微克。因此条目取 ±50%，并明确它只是 HeLa 代表值，不能当作“所有人体细胞都是 2 ng”。

## 怎么测出来的

体积是这条读数的入口。库尔特计数器与流式细胞术可以给出细胞体积分布，定量相位显微术可以直接测干质量，再把干质量按 20–30% 的干湿比换算回湿重。[1][3] 也有研究用显微成像测贴壁细胞的面积与厚度，做几何估算。所有路径都依赖密度或干湿比假设，所以条目标为估算，而不是直接称量。

## 量级位置

2.0×10⁻¹² kg 位于 B5 带的中段偏上，比红细胞重约二十倍，比大肠杆菌重约两千倍。它距 1 克还差九个数量级，却已经包含完整的基因组、膜系统与代谢机器；从这一档再往上，质量主要由细胞数量而非单个细胞大小决定。

## 怎么继续走

想看形状最特殊的神经细胞，去 mass.neuron；想看没有细胞核的红细胞，去 mass.red-blood-cell；想看细胞在空间轴上的尺度，去 space.cell。注意质量不是直径的函数，长而细的细胞可以比小而圆的细胞更轻。
