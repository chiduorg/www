---
id: mass.egg-cell
title: 人类卵细胞：9.0×10⁻¹⁰ kg，人体最大的细胞
summary: >-
  单个成熟人类卵母细胞（不含透明带与放射冠）的湿重均值约 9.0×10⁻¹⁰ kg（0.9 µg），直径约 120 µm。干重约为湿重的
  20–30%，个体与成熟阶段差异使不确定度约 ±20%。
dimension: mass
category: 生殖细胞
displayValue: 9.0×10⁻¹⁰ kg
quantity:
  value: 9.e-10
  unit: kg
  measure: 单个成熟人类卵母细胞湿重均值，不含透明带与放射冠；由约 120 µm 直径的球体体积与接近水的密度估算，不确定度约 ±20%
  approximate: true
grade: B
related:
  - mass.sperm-cell
  - mass.human-cell
  - space.cell
  - time.first-life
  - elements.c
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
  - title: eLife
    url: 'https://elifesciences.org/'
    publisher: eLife Sciences Publications
    accessed: '2026-11-09'
tags:
  - 质量
  - 卵细胞
  - 生殖细胞
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个成熟人类卵母细胞湿重均值，不含透明带与放射冠；由约 120 µm 直径的球体体积与接近水的密度估算，不确定度约 ±20%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B5 细胞 · 9.0×10⁻¹⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B5
  bandLabel: 细胞
  log10: -9.046
  position: 33.28
  color: '#b48cff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

人类卵母细胞是人体体积最大的细胞，成熟的次级卵母细胞直径约一百二十微米，肉眼勉强可见。它的湿重均值约为 9.0×10⁻¹⁰ kg，即 0.9 微克。[1] 这条读数只算卵细胞本体，不包含外面的透明带和放射冠细胞；若把透明带计入，质量会增加约一到两成。

## 口径与不确定度

这里用的是湿重均值。卵细胞富含细胞质与储备物质，干重通常约为湿重的 20–30%，其余是水。[2] 直径从初级卵泡到成熟卵母细胞变化很大，个体之间也有差异，因此条目取 ±20% 的区间，只给代表值。它和精子相差约四万五千倍，这个比例说明卵细胞贡献的不只是基因组，还有受精后早期胚胎所需的全部细胞质与营养。

## 怎么测出来的

卵细胞的质量通常由体积换算。胚胎学中用显微镜测透明带内径与细胞直径，按球体公式算体积，再乘以接近水的密度；也有研究用微吸管或微流控装置测单个卵细胞的体积变化。[1] 定量相位显微术可以测干质量，但需要知道细胞质的折射率增量。[3] 这些方法都依赖几何假设，卵细胞也不是完美球体，所以条目标为估算而非直接称量。

## 量级位置

9.0×10⁻¹⁰ kg 位于 B5 带的最上端，接近 10⁻⁹ kg，是“单细胞”这一档的封顶对象。它比红细胞重约九千倍，比 HeLa 细胞重约四百五十倍，但仍比一滴水轻约五万倍。再往上，质量就进入多细胞组织与器官的范畴。

## 怎么继续走

想看与之配对的小细胞，去 mass.sperm-cell；想看普通人体细胞的量级，去 mass.human-cell；想看卵细胞在空间轴上的尺度，去 space.cell；想看生命最早出现的时间位置，从 time.first-life 进入时间轴。
