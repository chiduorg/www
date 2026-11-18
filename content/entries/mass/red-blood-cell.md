---
id: mass.red-blood-cell
title: 人类红细胞：1.0×10⁻¹³ kg，约九成体积是水
summary: >-
  单个成熟人类红细胞的湿重均值约 1.0×10⁻¹³ kg（100 pg），干重约占三分之一，其中血红蛋白约 30 pg。由约 90 飞升的细胞体积与约
  1.1 g/cm³ 的密度估算，不确定度约 ±15%。
dimension: mass
category: 血细胞
displayValue: 1.0×10⁻¹³ kg
quantity:
  value: 1.e-13
  unit: kg
  measure: 单个成熟人类红细胞湿重均值；由约 90 fL 的平均体积与约 1.1 g/cm³ 的密度换算，个体差异约 ±15%
  approximate: true
grade: B
related:
  - mass.human-cell
  - mass.bacterium
  - mass.sperm-cell
  - space.cell
  - elements.o
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
  - title: NCBI Bookshelf
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: Cell Press
    url: 'https://www.cell.com/'
    publisher: Elsevier
    accessed: '2026-11-09'
tags:
  - 质量
  - 红细胞
  - 血细胞
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个成熟人类红细胞湿重均值；由约 90 fL 的平均体积与约 1.1 g/cm³ 的密度换算，个体差异约 ±15%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B5 细胞 · 1.0×10⁻¹³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B5
  bandLabel: 细胞
  log10: -13
  position: 29.03
  color: '#b48cff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

成熟的人类红细胞是一个没有细胞核、没有线粒体的双凹圆盘，直径约七到八微米。它的湿重均值约为 1.0×10⁻¹³ kg，即 100 皮克。[1] 这是整个细胞的质量，包含细胞膜、细胞质、血红蛋白与水，不包括血浆。

## 口径与不确定度

红细胞平均体积约为 90 飞升，按接近水的密度换算，质量就在 100 pg 上下。[2] 它的干重比例比一般细胞高：血红蛋白本身约占 30 pg，加上膜与酶，干重接近湿重的三分之一；而细胞干重通常约为湿重的 20–30%，红细胞属于偏干的一端。健康成人的红细胞体积分布很窄，但仍随年龄、性别与个体状态变化，所以条目取 ±15%，不把均值写成某个人的精确值。

## 怎么测出来的

红细胞质量很少被直接称量，通常由体积换算。临床与实验室用库尔特计数器（电阻抗法）测单个细胞的体积分布，得到平均红细胞体积；用流式细胞术做交叉校验；用微量血细胞比容与密度梯度离心估计整体密度。[1] 有了体积与密度，乘出质量。[3] 这类换算依赖“密度接近水”的假设，因此条目标为估算而非直接测量。

## 量级位置

1.0×10⁻¹³ kg 位于 B5 带中部，比大肠杆菌重约一百倍，比一个 HeLa 细胞轻约二十倍。它是血液里数量最多的细胞成分，成年人体内约有二十五万亿个红细胞，合起来约两三千克，接近一个成年人全部血液的质量。

## 怎么继续走

想看它的“表亲”——有核的人体细胞，去 mass.human-cell；想看更小的单细胞生物，去 mass.bacterium；想看红细胞在空间轴上的尺寸与形状，去 space.cell。
