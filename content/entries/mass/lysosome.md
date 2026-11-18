---
id: mass.lysosome
title: 溶酶体：7.7×10⁻¹⁷ kg，细胞里的酸性降解车间
summary: >-
  溶酶体是动物细胞的酸性膜性细胞器，直径约 0.2–0.8 µm，常见 0.5 µm。单个溶酶体湿重均值约 7.7×10⁻¹⁷ kg，由等效球体积与 1.1
  g/cm³ 密度估算。
dimension: mass
category: 细胞器
displayValue: 7.7×10⁻¹⁷ kg
quantity:
  value: 7.7e-17
  unit: kg
  measure: 单个溶酶体湿重均值；湿重、密度按 1.1 g/cm³ 估算，等效球直径约 0.5 µm，不确定度约 ±50%
  approximate: true
grade: B
related:
  - mass.mitochondrion
  - space.cell
  - mass.exosome
  - mass.proton
  - space.bacteria
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
  - 溶酶体
  - 细胞降解
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个溶酶体湿重均值；湿重、密度按 1.1 g/cm³ 估算，等效球直径约 0.5 µm，不确定度约 ±50%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B4 病毒与细胞器 · 7.7×10⁻¹⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B4
  bandLabel: 病毒与细胞器
  log10: -16.114
  position: 25.68
  color: '#b7a6ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

溶酶体是动物细胞里负责降解的酸性膜性细胞器，内部维持约 pH 5 的环境，装着上百种水解酶。它的直径约 0.2–0.8 µm，肝细胞与巨噬细胞里常见 0.5 µm 左右。单个溶酶体的湿重均值取 7.7×10⁻¹⁷ kg，是“一个细胞器”的质量，不是一次提取物里所有溶酶体的合计。[1]

## 口径与不确定度

这是单个溶酶体的湿重均值，不是整个细胞的质量，也不是溶酶体酶提取物的干重。溶酶体大小随细胞类型与降解负荷变化，直径从 0.2 µm 到 0.8 µm，质量按体积三次方缩放，个体之间可以差几十倍。按 1.1 g/cm³ 的湿密度、等效球直径 0.5 µm 估算，取 7.7×10⁻¹⁷ kg，给 ±50% 的不确定度，只保留两位有效数字。[2]

## 怎么测出来的

单细胞器质量很难直接称量，常用密度梯度离心把溶酶体分离出来，再做粒径与颗粒计数，并用酸性磷酸酶等标志酶活性估纯度；电子显微镜与体视学给出体积分数。把体积分数乘细胞体积与湿密度，可以得到单个细胞器的平均质量。近年也有用微悬臂或质谱做单颗粒质量的尝试，但校准仍依赖体积模型，所以这里仍标为估算而非实测。[1][2]

## 量级位置

7.7×10⁻¹⁷ kg 比流感病毒颗粒重约五十倍，约为线粒体的三分之一，落在 B4 带的上段。它和线粒体同属“细胞器”尺度，但溶酶体数量更多、单体更轻；在肝细胞里，两者的总质量可以处在同一量级。

## 怎么继续走

想看同一细胞里更大的能量细胞器，去 mass.mitochondrion；想看溶酶体所在的空间尺度，去 space.cell；想看被它降解的细菌，去 space.bacteria；想回到基本质量锚点，去 mass.proton 与 mass.exosome。[3]
