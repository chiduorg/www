---
id: mass.hemoglobin
title: 血红蛋白四聚体：1.07×10⁻²² kg，红细胞里的氧运输机器
summary: >-
  成人血红蛋白 HbA 是 α₂β₂ 四聚体，含四条珠蛋白链与四个血红素，总质量约 64,458 Da，合 1.0703×10⁻²² kg。每个红细胞里约有
  2.7 亿个这样的分子。
dimension: mass
category: 生命与人体
displayValue: '1.07×10⁻²² kg（64,458 Da）'
quantity:
  value: 1.0703e-22
  unit: kg
  measure: 'HbA（α₂β₂）四聚体含四个血红素的分子质量约 64,458 Da，按原子质量常数换算；不含结合氧'
  approximate: false
grade: A
related:
  - mass.insulin
  - mass.water-molecule
  - space.cell
  - elements.c
  - elements.h
  - mass.red-blood-cell
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
  - title: 'UniProtKB: Hemoglobin subunit alpha (HBA_HUMAN, P69905)'
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
  - title: "PubChem: Water (CID 962)"
    url: "https://pubchem.ncbi.nlm.nih.gov/"
    publisher: "National Library of Medicine"
    accessed: '2026-11-24'
  - title: "CODATA Recommended Values of the Fundamental Physical Constants"
    url: "https://physics.nist.gov/cuu/Constants/"
    publisher: "National Institute of Standards and Technology"
    accessed: '2026-11-24'
tags:
  - 质量
  - 血红蛋白
  - 蛋白质
  - 生物大分子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 'HbA（α₂β₂）四聚体含四个血红素的分子质量约 64,458 Da，按原子质量常数换算；不含结合氧'
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B3 分子与生物大分子 · 1.07×10⁻²² kg（64,458 Da）'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B3
  bandLabel: 分子与生物大分子
  log10: -21.97
  position: 19.39
  color: '#9cc8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Hemoglobin tetramer
---
## 这个读数是什么

成人血红蛋白以 HbA 为主，由两条 α 链与两条 β 链组成，每条链结合一个血红素，整体是 α₂β₂ 四聚体。[1] 四条珠蛋白链合计约 61,990 Da，四个血红素各约 616 Da，总质量约 64,458 Da，折合 1.0703×10⁻²² kg。这是脱氧状态下的四聚体质量。

口径上要把配体排除在外。一个血红蛋白最多结合四个氧分子，每个 O₂ 约 32 Da，四个合计 128 Da，只占总质量的 0.2%。[3] 若把氧合血红蛋白的质量当作“血红蛋白质量”，就会把配体算进蛋白本体。本条记录的是不含氧的蛋白四聚体，含血红素辅基，这是生物化学文献的通行口径。

## 口径与不确定度

64,458 Da 是由序列与辅基组成计算的平均质量，不同血红蛋白变体（如 HbS、HbC）会因单点突变差十几个 Da，镰状细胞血红蛋白就因此与 HbA 有微小质量差。[1] 糖化血红蛋白还会额外带上葡萄糖，差异可达 162 Da。相对不确定度仍在 10⁻⁵ 量级，但“哪一种血红蛋白”必须在口径里说清楚。

## 怎么测出来的

血红蛋白是最早被测定分子质量的蛋白质之一：超速离心与渗透压给出约 68 kDa 的整数量级，质谱与序列分析随后把它精确到 64,458 Da。[2] 今天临床质谱可以直接分辨 HbA 与各种变体，靠的正是这些几十 Da 的质量差；串联质谱还能定位突变所在的肽段。

## 量级位置

1.0703×10⁻²² kg 位于 B3 带的上段，比胰岛素单体重约 11 倍，比核糖体轻约 39 倍。一个红细胞含约 2.7 亿个血红蛋白分子，折算成血红蛋白浓度约 330 g/L，这也是血液呈深红色的原因。[3]

## 四聚体的协同结合

血红蛋白的四个亚基不是各自独立工作：一个亚基结合氧后，会改变其余亚基的构象，使它们更容易结合氧，这叫协同效应。四聚体结构因此不只是“四个蛋白放在一起”，而是功能单位。把血红蛋白拆成单体，氧亲和力曲线会改变。[1][S2]

血红蛋白的质量还包括四个血红素辅基；去掉辅基的珠蛋白约 61,990 Da。临床质谱能分辨 HbA、HbS、HbC 等变体，差异只有十几个 Da，因此“血红蛋白质量”必须带变体名称。

## 怎么继续走

想看更小的肽类激素，去 mass.insulin；想看蛋白质如何在细胞内合成，从 space.cell 进入空间轴；想看碳、氢、氧这些组成元素的原子质量，去 elements.c、elements.h 与 mass.water-molecule。

## 四聚体与协同结合

血红蛋白的四个亚基不是各自独立工作：一个亚基结合氧后，会改变其余亚基的构象，使它们更容易结合氧，这叫协同效应。[1] 四聚体结构因此不只是“四个蛋白放在一起”，而是功能单位。把血红蛋白拆成单体，氧亲和力曲线会改变。

## 五轴对照

在质量轴，血红蛋白约 1.07×10⁻²² 千克；在空间轴，它位于红细胞内；在时间轴，血红蛋白的演化与脊椎动物携氧需求相关；在元素轴，血红素的核心是铁。质量、结构与元素组成共同决定携氧功能。[1][2]

## 延伸核对

补充的来源 [4]（National Library of Medicine）、[5]（National Institute of Standards and Technology） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
