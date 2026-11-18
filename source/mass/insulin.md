---
id: mass.insulin
title: 胰岛素单体：9.64×10⁻²⁴ kg，51 个氨基酸的小蛋白
summary: >-
  人胰岛素单体由 A 链 21 个、B 链 30 个氨基酸组成，共 51 个残基，分子质量约 5808 Da，合 9.644×10⁻²⁴
  kg。它在胰腺中储存为含锌六聚体，进入血液后以单体起作用。
dimension: mass
category: 蛋白质
displayValue: 9.64×10⁻²⁴ kg（5808 Da）
quantity:
  value: 9.644e-24
  unit: kg
  measure: UniProt P01308 成熟胰岛素（A 链 21 aa + B 链 30 aa）的分子质量 5808 Da，按原子质量常数换算
  approximate: false
grade: A
related:
  - mass.hemoglobin
  - mass.water-molecule
  - space.dna
  - space.cell
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
  - title: 'UniProtKB: Insulin (INS_HUMAN, P01308)'
    url: 'https://www.uniprot.org/'
    publisher: UniProt Consortium
    accessed: '2026-11-09'
  - title: 'NCBI Bookshelf: Molecular Biology of the Cell'
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: BioNumbers — The Database of Key Numbers in Molecular and Cell Biology
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
tags:
  - 质量
  - 胰岛素
  - 蛋白质
  - 生物大分子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: UniProt P01308 成熟胰岛素（A 链 21 aa + B 链 30 aa）的分子质量 5808 Da，按原子质量常数换算
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B3 分子与生物大分子 · 9.64×10⁻²⁴ kg（5808 Da）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B3
  bandLabel: 分子与生物大分子
  log10: -23.016
  position: 18.26
  color: '#9cc8ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

胰岛素是胰岛 β 细胞分泌的肽类激素。人的成熟胰岛素由两条链组成：A 链 21 个氨基酸，B 链 30 个氨基酸，合计 51 个残基，靠三对二硫键连在一起。[1] 它的分子质量约 5808 Da，按原子质量常数折合 9.644×10⁻²⁴ kg。这是单体的质量，不含锌离子，也不含储存状态下的多聚体。

口径上要说清楚是哪一种“胰岛素”。基因编码的是 110 个残基的胰岛素原前体，经切除信号肽与 C 肽后才变成成熟的双链单体。[1] 本条记录的是成熟单体，不是前体，也不是药物制剂里加锌的六聚体。不同口径的质量可以差到六倍，混用会让读数失去意义。

## 口径与不确定度

5808 Da 是由氨基酸序列计算出的平均分子质量，不是单次质谱读数的拟合值；换算成 kg 后相对不确定度在 10⁻⁵ 量级，主要来自原子质量常数的精度。[1][3] 翻译后修饰、二硫键的氧化状态会带来几个 Da 的差异，但相对 5808 Da 不到千分之一，因此本条按未修饰单体记录。

## 怎么测出来的

蛋白质质量的主方法是质谱：把分子离子化，测质荷比，再由相邻电荷态的间隔反推中性质量。胰岛素是最早被这样测序与称重的蛋白质之一，1950 年代就由 Sanger 定出氨基酸序列。[2] 今天电喷雾与 MALDI 质谱可以在皮摩尔量级上把误差压到 1 Da 以内，序列已知时也可以直接由原子组成计算。

## 量级位置

9.644×10⁻²⁴ kg 位于 B3 带的上段，比水分子重约 322 倍，比血红蛋白四聚体轻约 11 倍。一个 β 细胞内约有 20 万个胰岛素分子，储存于分泌颗粒中；一次释放的胰岛素总量在微克量级，对应约 10¹⁷ 个单体。[3]

## 怎么继续走

想看更大的氧运输蛋白，去 mass.hemoglobin；想看编码它的基因长度，去 space.dna；想看它从合成到分泌的细胞过程，从 space.cell 进入空间轴。
