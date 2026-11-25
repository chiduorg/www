---
id: mass.bacterium
title: 大肠杆菌：1.0×10⁻¹⁵ kg，一个细胞的湿重均值
summary: >-
  单个大肠杆菌的湿重均值约 1.0×10⁻¹⁵ kg（1 pg），干重约为湿重的 20–30%。由细胞体积约 1 立方微米与接近水的密度估算，样本间差异约
  ±30%。
dimension: mass
category: 生命与人体
displayValue: 1.0×10⁻¹⁵ kg
quantity:
  value: 1.e-15
  unit: kg
  measure: 单个大肠杆菌细胞湿重均值；由细胞体积约 1 µm³ 与约 1.1 g/cm³ 的密度估算，样本离散约 ±30%
  approximate: true
grade: B
related:
  - space.bacteria
  - mass.human-cell
  - mass.red-blood-cell
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
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: "Biology 2e, §4.2 Prokaryotic Cells"
    url: "https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells"
    publisher: "OpenStax / Rice University"
    accessed: '2026-11-24'
  - title: "Bacteria"
    url: "https://www.britannica.com/science/bacteria"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
tags:
  - 质量
  - 细菌
  - 单细胞
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个大肠杆菌细胞湿重均值；由细胞体积约 1 µm³ 与约 1.1 g/cm³ 的密度估算，样本离散约 ±30%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B5 细胞 · 1.0×10⁻¹⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B5
  bandLabel: 细胞
  log10: -15
  position: 26.88
  color: '#b48cff'
  scaleMin: -40
  scaleMax: 53
titleEn: Escherichia coli
---
## 这个读数是什么

大肠杆菌是实验室里最常用的单细胞生物。一个营养充足、正处于对数生长期的细胞，湿重均值约为 1.0×10⁻¹⁵ kg，也就是 1 皮克。[1] 这是一个细胞整体的质量，包含细胞壁、细胞膜、细胞质、核糖体、DNA 与水分，而不是某一种成分的质量。

## 口径与不确定度

这里用的是湿重，即细胞在自然含水状态下称得的质量。大肠杆菌的干重通常只占湿重的 20–30%，其余主要是水；如果把细胞烘干再称，读数会降到约 0.2–0.3 pg。[2] 同一菌株在不同培养基、不同生长阶段下的体积与含水量都会变，因此条目给出 ±30% 的不确定度，而不写“精确到小数点后两位”的假精度。质量轴对同一对象只取一个口径，本条的 value 固定为湿重均值。

## 怎么测出来的

单个细胞不能直接放上天平。常用做法有三类：用库尔特计数器测细胞体积分布，再乘以接近水的密度；用沉降或密度梯度平衡估计细胞密度与体积；用显微成像量出长度与直径，按圆柱加半球做几何估算。[1] 近年还会用质谱或单细胞称重装置做交叉验证。[3] 这些方法给出的都是均值与分布，不是某一个细胞的精确质量。

## 量级位置

1.0×10⁻¹⁵ kg 落在 B5 带的下端，是“生命质量”的起点之一。它比一个红细胞轻约一百倍，比一个典型人体细胞轻约两千倍；反过来，它比一个水分子重约 3×10¹⁰ 倍。这个跨度说明，从分子到细胞，质量不是平滑放大，而是跨过一个由体积和含水量决定的台阶。

## 湿重与干重

大肠杆菌的 1.0×10⁻¹⁵ 千克是湿重均值，干重只占约 20–30%，其余是水。不同培养条件、菌株与生长期会让质量差出一倍。把湿重当成“细胞物质”的全部，会高估蛋白质与核酸的份额。[1][S1]

## 怎么继续走

想看细菌在空间轴上的尺寸，去 space.bacteria；想看更大一档的细胞，去 mass.red-blood-cell 与 mass.human-cell；想看生命最早出现的时间位置，从 time.first-life 进入时间轴。

## 湿重与干重差在哪里

湿重包含细胞内的水、胞质与储存物；干重只留下蛋白质、核酸、脂质与矿物质。大肠杆菌干重约为湿重的 20–30%，所以同一个细胞可以同时写成 1 pg 湿重和 0.2–0.3 pg 干重。[2] 两个数都对，但用途不同：湿重对应离心、过滤与载荷，干重对应元素与生物量核算。

## 为什么常用大肠杆菌作标准

大肠杆菌易于培养、世代短、基因组清楚，因而常被用作单细胞质量的参照；但“标准”不等于“代表所有细菌”。[1][3] 不同菌株、不同培养基和不同生长阶段的细胞体积差别明显，球菌与杆菌的质量也不能直接互换。本条的 1 pg 只锁定大肠杆菌在特定条件下的湿重均值，换对象就要换口径。这也是比较细菌质量时，必须先说明菌种、状态与湿/干重的原因。

## 五轴对照

在质量轴，它是 10⁻¹⁵ 千克的细胞；在空间轴，大肠杆菌约 1–2 微米长；在时间轴，它属于最早生命之后的单细胞阶段；在元素轴，细胞质量主要由碳、氢、氧、氮组成。把“一个细胞”当成一个点，会漏掉体积、含水量与生长阶段对质量的改变。[1][2][3]

## 延伸核对

补充的来源 [4]（OpenStax / Rice University）、[5]（Encyclopaedia Britannica） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
