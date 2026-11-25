---
id: mass.mitochondrion
title: 线粒体：2.0×10⁻¹⁶ kg，肝细胞里的能量细胞器
summary: >-
  肝细胞线粒体常呈长约 1 µm、直径约 0.5 µm 的短棒状。单个线粒体湿重均值约 2.0×10⁻¹⁶ kg，由圆柱等效体积与 1.1 g/cm³
  密度估算，随融合分裂状态变化。
dimension: mass
category: 生命与人体
displayValue: 2.0×10⁻¹⁶ kg
quantity:
  value: 2.e-16
  unit: kg
  measure: 单个线粒体湿重均值；湿重、密度按 1.1 g/cm³ 估算，按长约 1 µm、直径约 0.5 µm 的圆柱体计，不确定度约 ±40%
  approximate: true
grade: B
related:
  - mass.lysosome
  - space.mitochondria
  - space.cell
  - mass.proton
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
  - title: 'BioNumbers: The Database of Key Numbers in Molecular and Cell Biology'
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
  - title: Molecular Biology of the Cell（NCBI Bookshelf）
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: Cell Press
    url: 'https://www.cell.com/'
    publisher: Cell Press
    accessed: '2026-11-09'
tags:
  - 质量
  - 细胞器
  - 线粒体
  - 能量代谢
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个线粒体湿重均值；湿重、密度按 1.1 g/cm³ 估算，按长约 1 µm、直径约 0.5 µm 的圆柱体计，不确定度约 ±40%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B4 病毒与细胞器 · 2.0×10⁻¹⁶ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B4
  bandLabel: 病毒与细胞器
  log10: -15.699
  position: 26.13
  color: '#b7a6ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Mitochondrion
---
## 这个读数是什么

线粒体是真核细胞的能量细胞器，内膜折叠成嵴，负责氧化磷酸化与 ATP 合成。肝细胞里的线粒体常呈长约 1 µm、直径约 0.5 µm 的短棒状。取单个肝细胞线粒体的湿重均值为 2.0×10⁻¹⁶ kg，这是“一个细胞器”的质量，不是细胞内全部线粒体的总质量。[1]

## 口径与不确定度

这里给的是单个线粒体的湿重均值，不是分离线粒体制剂的干重，也不是整个细胞的质量。线粒体是动态网络，会不断融合与分裂，长度从 0.5 µm 到几 µm 不等，形状也不总是规则圆柱。按 1.1 g/cm³ 的湿密度与圆柱等效体积估算，取 2.0×10⁻¹⁶ kg，给 ±40% 的不确定度，样本间差异主要来自器官类型与代谢状态，只保留两位有效数字。[2]

## 怎么测出来的

常规方法是先分离线粒体，做蛋白定量与颗粒计数，得到“每毫克蛋白对应多少个线粒体”，再换算单颗粒质量；体视学与连续切片电镜给出体积；膜电位与标志酶活性用于判断纯度。单颗粒质量也可以由沉降系数与扩散系数间接求得，但仍依赖形状模型。换句话说，这个数来自体积与密度，而不是把线粒体放到天平上称出来的实测值。[1][2]

## 量级位置

2.0×10⁻¹⁶ kg 位于 B4 带上端，约为溶酶体的三倍，比大肠杆菌轻约五倍，比红细胞轻约两个量级。它把“细胞器”与“细菌”放在同一十进位附近，也解释了为什么线粒体起源的内共生假说在尺度上并不突兀。

## 怎么继续走

想看同一细胞里的降解细胞器，去 mass.lysosome；想看线粒体的空间形态与分布，去 space.mitochondria 与 space.cell；想看内共生与生命起源的时间线，去 time.first-life。[3]
