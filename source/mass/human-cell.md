---
id: mass.human-cell
title: 人体细胞：2.0×10⁻¹² kg，以 HeLa 细胞为代表的湿重均值
summary: >-
  以 HeLa 细胞为代表，一个培养的人体细胞湿重均值约 2.0×10⁻¹² kg（2 ng），干重约为湿重的 20–30%。不同细胞类型差异很大，条目取
  ±50% 的区间，不把它当作所有人体细胞的统一值。
dimension: mass
category: 生命与人体
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
  - time.first-life
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
  - title: "NCBI Bookshelf"
    url: "https://www.ncbi.nlm.nih.gov/books/"
    publisher: "National Center for Biotechnology Information"
    accessed: '2026-11-24'
  - title: "eLife"
    url: "https://elifesciences.org/"
    publisher: "eLife Sciences Publications"
    accessed: '2026-11-24'
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
titleEn: Human cell
---
## 这个读数是什么

“人体细胞”不是一个单一对象，而是几百种形态各异的细胞。为了让读数可复现，本条取实验室最常用的 HeLa 细胞作代表：一个培养中的 HeLa 细胞，湿重均值约为 2.0×10⁻¹² kg，也就是 2 纳克。[1] 这是整个细胞的质量，包含细胞核、细胞质、膜系统与水分。

## 口径与不确定度

这里仍是湿重均值。培养细胞干重通常约为湿重的 20–30%，其余是水；同一个细胞在不同培养密度、不同细胞周期阶段下的体积可以差出一倍。[2] 更要紧的是，人体细胞之间的差异远大于测量误差：红细胞约 0.1 ng，心肌细胞约 20 ng，卵细胞接近 1 微克。因此条目取 ±50%，并明确它只是 HeLa 代表值，不能当作“所有人体细胞都是 2 ng”。

## 怎么测出来的

体积是这条读数的入口。库尔特计数器与流式细胞术可以给出细胞体积分布，定量相位显微术可以直接测干质量，再把干质量按 20–30% 的干湿比换算回湿重。[1][3] 也有研究用显微成像测贴壁细胞的面积与厚度，做几何估算。所有路径都依赖密度或干湿比假设，所以条目标为估算，而不是直接称量。

## 量级位置

2.0×10⁻¹² kg 位于 B5 带的中段偏上，比红细胞重约二十倍，比大肠杆菌重约两千倍。它距 1 克还差九个数量级，却已经包含完整的基因组、膜系统与代谢机器；从这一档再往上，质量主要由细胞数量而非单个细胞大小决定。

## HeLa 只是代表

HeLa 细胞约 2 纳克，但人体细胞差异远大于测量误差：红细胞约 0.1 纳克，心肌细胞可达 20 纳克，卵细胞接近 1 微克。用 HeLa 代表“人体细胞”，只是选择一个实验常用参照。细胞类型、体积、含水量与细胞周期都会改变质量。[1][S2]

细胞质量还随细胞周期变化：分裂前细胞体积接近加倍，G1 期与 G2 期的湿重可以差一倍。2 纳克是培养群体均值，不是每一个 HeLa 细胞的固定值。

细胞质量还可以用干质量表示：HeLa 细胞干重约 0.4–0.6 纳克，约为湿重的 20%–30%；不同测量方法给出的干湿比不同。

## 怎么继续走

想看形状最特殊的神经细胞，去 mass.neuron；想看没有细胞核的红细胞，去 mass.red-blood-cell；想看细胞在空间轴上的尺度，去 space.cell。注意质量不是直径的函数，长而细的细胞可以比小而圆的细胞更轻。

## 人体细胞差异远大于测量误差

红细胞约 0.1 纳克，心肌细胞可达 20 纳克，卵细胞接近 1 微克；用 HeLa 细胞的 2 纳克代表“人体细胞”，只是选择一个实验常用参照。[1][2] 细胞类型、体积、含水量与细胞周期都会改变质量。把 2 纳克当成所有细胞，会低估差异。

## 五轴对照

在质量轴，HeLa 细胞约 2×10⁻¹² 千克；在空间轴，它约 10–20 微米；在时间轴，细胞周期影响体积；在温度轴，培养温度影响生长。质量、尺寸与状态必须一起记录。[1][3]

## 读数的口径与换算

本条采用的量是 2.0×10⁻¹² kg，口径是 以 HeLa 细胞为代表的单个培养人体细胞湿重均值；由约 2–3 pL 的细胞体积与约 1.05 g/cm³ 的密度估算，不确定度约 ±50%。质量是广延量，读数依赖湿重/干重、含血/不含血、整备/满载等口径；样本与测量条件必须一起引用。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（National Center for Biotechnology Information）、[5]（eLife Sciences Publications） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
