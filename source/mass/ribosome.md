---
id: mass.ribosome
title: 大肠杆菌 70S 核糖体：4.2×10⁻²¹ kg，蛋白质合成的工厂
summary: >-
  大肠杆菌 70S 核糖体由 30S 与 50S 两个亚基组成，含三条 rRNA 与约 54 种蛋白，总质量约 2.5 MDa，合 4.15×10⁻²¹
  kg。这个值由冷冻电镜结构、沉降系数与质谱共同推导。
dimension: mass
category: 分子机器
displayValue: 4.2×10⁻²¹ kg（约 2.5 MDa）
quantity:
  value: 4.15e-21
  unit: kg
  measure: 由 70S 核糖体的 rRNA 长度、蛋白组分与冷冻电镜/质谱数据推导，约 2.5 MDa；非单次称重
  approximate: true
grade: B
related:
  - space.ribosome
  - space.dna
  - space.cell
  - mass.insulin
  - mass.hemoglobin
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
  - title: BioNumbers — The Database of Key Numbers in Molecular and Cell Biology
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
  - title: 'NCBI Bookshelf: Molecular Biology of the Cell'
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Springer Nature
    accessed: '2026-11-09'
tags:
  - 质量
  - 核糖体
  - 分子机器
  - 生物大分子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 由 70S 核糖体的 rRNA 长度、蛋白组分与冷冻电镜/质谱数据推导，约 2.5 MDa；非单次称重
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B3 分子与生物大分子 · 4.2×10⁻²¹ kg（约 2.5 MDa）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B3
  bandLabel: 分子与生物大分子
  log10: -20.382
  position: 21.09
  color: '#9cc8ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

核糖体是把信使 RNA 翻译成蛋白质的分子机器。大肠杆菌的 70S 核糖体由小亚基 30S 与大亚基 50S 组成，含 16S、23S、5S 三条 rRNA 和约 54 种核糖体蛋白。[1] 它的总质量约 2.5 MDa，折合 4.15×10⁻²¹ kg。这里的 70S 是沉降系数，不是质量单位，二者不能互相换算。

质量与体积、直径也不是一回事。核糖体直径约 20 nm，但同样大小的分子机器质量可以差很多，取决于 RNA 与蛋白的比例；本条只回答“它有多重”，尺寸与形貌应回到空间轴查看。[2] 另外，不同生长条件下核糖体蛋白的化学计量略有差异，2.5 MDa 是一个中心值，不是精确到个位的读数。

## 口径与不确定度

2.5 MDa 是由组分加和与实验测量共同给出的量级值，不同文献在 2.3–2.7 MDa 之间浮动，相对不确定度约 5%。[1] 因此本条标为 B 级并设 approximate 为真：它有明确来源，但不是像粒子静质量那样的单点测量值。30S 约 0.8 MDa、50S 约 1.5 MDa，两者相加与整体系一致。

## 怎么测出来的

早期用超速离心的沉降系数与光散射估算分子量，后来用质谱测各蛋白组分的化学计量，再按 rRNA 的序列长度计算核酸部分的质量。[1] 近年冷冻电镜把整个 70S 颗粒的形貌与组分位置解析到原子分辨率，结构模型与化学计量互相印证，质量估计因此收敛到 2.5 MDa 附近。[3]

## 量级位置

4.15×10⁻²¹ kg 位于 B3 带的最上段，比血红蛋白四聚体重约 39 倍，比一个典型病毒轻约两个数量级。一个快速生长的大肠杆菌含约 2 万个核糖体，核糖体加上相关 RNA 可占细胞干重的三成以上，是细胞内最占“质量预算”的单一机器。[2]

## 怎么继续走

想看它在空间轴上的形貌与两个亚基，去 space.ribosome；想看它读取的模板，去 space.dna；想看它合成的产物有多重，去 mass.insulin 与 mass.hemoglobin；想看它在细胞总质量中的占比，从 space.cell 进入空间轴。
