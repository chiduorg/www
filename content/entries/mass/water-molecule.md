---
id: mass.water-molecule
title: 水分子：2.99×10⁻²⁶ kg，最常见的三原子分子
summary: >-
  一个水分子由两个氢原子和一个氧原子组成，分子质量 18.0153 u，合 2.9915×10⁻²⁶
  kg。它的质量略小于三个孤立原子之和，差额就是分子结合能。
dimension: mass
category: 分子
displayValue: 2.99×10⁻²⁶ kg（18.0153 u）
quantity:
  value: 2.9915e-26
  unit: kg
  measure: 由 IUPAC 原子量计算的分子质量 18.0153 u，按 CODATA 原子质量常数换算；含结合能亏损
  approximate: false
grade: A
related:
  - space.water-molecule
  - mass.hydrogen-atom
  - mass.proton
  - elements.o
  - elements.h
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
  - title: 'PubChem: Water (CID 962)'
    url: 'https://pubchem.ncbi.nlm.nih.gov/'
    publisher: National Library of Medicine
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: BioNumbers — The Database of Key Numbers in Molecular and Cell Biology
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
tags:
  - 质量
  - 水分子
  - 分子
  - 原子质量单位
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 由 IUPAC 原子量计算的分子质量 18.0153 u，按 CODATA 原子质量常数换算；含结合能亏损
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B3 分子与生物大分子 · 2.99×10⁻²⁶ kg（18.0153 u）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B3
  bandLabel: 分子与生物大分子
  log10: -25.524
  position: 15.57
  color: '#9cc8ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

一个水分子由两个氢原子和一个氧原子组成，化学式 H₂O。按 IUPAC 原子量，氢约 1.008 u、氧约 15.999 u，合起来是 18.0153 u；乘上原子质量常数 1.66053907×10⁻²⁷ kg/u，得到 2.9915×10⁻²⁶ kg。[1][2] 这是单个分子的质量，不是一摩尔水的 18.0153 克。

这个数比两个氢原子加一个氧原子的质量之和略小，差额约几个 eV/c²，来自化学键的结合能。质量轴把它记作分子的整体质量，而不是把三个原子质量直接相加：结合能亏损虽然只有十亿分之几，但口径上必须说清楚。[2] 冰、液态水与水蒸气用的是同一个分子质量，相变改变的是分子间排列，不是分子本身。

## 口径与不确定度

这里的 18.0153 u 是常规原子量，已经按地球样品的同位素丰度平均；如果换成纯 ¹H₂¹⁶O，分子质量会落在 18.0106 u，比平均值小约 0.026%。[1] 因此本条记录的是“常规水”，不是某一种同位素体。相对不确定度在 10⁻⁵ 量级，远小于同位素组成在不同水源之间的自然波动。

## 怎么测出来的

分子质量不是称出来的，而是由原子量体系换算而来。原子量通过质谱测量各同位素的原子质量，再按丰度加权；原子质量单位则由 ¹²C 定义，并通过阿伏伽德罗常数与千克联系。[2] 对水分子，还可以用高分辨质谱直接测 m/z，但结果同样要回到原子质量标尺上，独立“称一个分子”在原理上做不到。

## 量级位置

2.9915×10⁻²⁶ kg 落在 B3 带的下段，比质子重约 17.9 倍，比一个葡萄糖分子轻约一个数量级。它是质量轴上少数能直接对应日常经验的读数：1 升水约 3.3×10²⁵ 个分子，一摩尔水 18 克，这些换算都从同一个 18.0153 u 出发。[3]

## 怎么继续走

想看它在空间轴上的尺寸与氢键网络，去 space.water-molecule；想看组成它的原子，去 mass.hydrogen-atom、elements.h 与 elements.o；想看水在细胞里占多大比重，从 space.cell 进入空间轴。
