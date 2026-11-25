---
id: mass.influenza-virion
title: 流感病毒颗粒：1.6×10⁻¹⁸ kg，多形包膜病毒的湿重
summary: >-
  流感病毒是有包膜的负链 RNA 病毒，包膜直径约 100 nm，也常见拉长的丝状颗粒。单个颗粒湿重均值约 1.6×10⁻¹⁸ kg，按等效球直径约 140
  nm 与 1.1 g/cm³ 密度估算。
dimension: mass
category: 生命与人体
displayValue: 1.6×10⁻¹⁸ kg
quantity:
  value: 1.6e-18
  unit: kg
  measure: 单个病毒颗粒湿重均值；湿重、密度按 1.1 g/cm³ 估算，按等效球直径约 140 nm 计，不确定度约 ±40%
  approximate: true
grade: B
related:
  - mass.bacteriophage-t4
  - mass.exosome
  - space.virus
  - space.dna
  - mass.proton
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
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Springer Nature
    accessed: '2026-11-09'
tags:
  - 质量
  - 病毒
  - 流感病毒
  - 包膜病毒
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个病毒颗粒湿重均值；湿重、密度按 1.1 g/cm³ 估算，按等效球直径约 140 nm 计，不确定度约 ±40%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B4 病毒与细胞器 · 1.6×10⁻¹⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B4
  bandLabel: 病毒与细胞器
  log10: -17.796
  position: 23.88
  color: '#b7a6ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Influenza virion
---
## 这个读数是什么

流感病毒是有包膜的负链 RNA 病毒，颗粒形态并不单一：冷冻电镜量到的包膜直径约 100 nm，也常见拉长到数百纳米的丝状颗粒。单个病毒颗粒的湿重均值取 1.6×10⁻¹⁸ kg，按等效球直径约 140 nm 与 1.1 g/cm³ 的湿密度估算，包含包膜、基质蛋白、核糖核蛋白与表面糖蛋白。[1]

## 口径与不确定度

这是单个病毒颗粒的湿重均值，不是纯化批次的平均干重，也不是感染性颗粒的当量。流感病毒形态不均一，宿主细胞类型与实验室传代都会改变颗粒长度与刺突密度。一个直径 100 nm 的纯球状颗粒按同样密度只有约 6×10⁻¹⁹ kg；实际颗粒多形、表面带糖蛋白刺突，等效体积更大，所以取 1.6×10⁻¹⁸ kg，并给 ±40% 的不确定度，只保留两位有效数字。[2]

## 怎么测出来的

质量证据来自冷冻电镜与冷冻电子断层：可以直接数包膜直径、刺突密度与核糖核蛋白束；蔗糖或碘克沙醇梯度给出浮力密度；基因组测序与蛋白定量给出干重下限。把等效体积乘 1.1 g/cm³ 的湿密度，得到 10⁻¹⁸ kg 量级。这是形态学加密度的估算，不能把某一张电镜照片的直径当成全部颗粒的实测质量。[1][2]

## 量级位置

1.6×10⁻¹⁸ kg 比 T4 噬菌体重约五倍，比溶酶体轻约五十倍。它落在 B4 带的上段，说明“一个病毒颗粒”与“一个细胞器”之间只隔一个十进位左右，但两者的组织复杂度完全不同：病毒没有自己的代谢，靠宿主细胞的机器复制。

## 怎么继续走

想看不带包膜的二十面体病毒，去 mass.bacteriophage-t4；想看尺寸重叠的细胞外囊泡，去 mass.exosome；想看病毒进入的宿主细胞与基因组，去 space.virus、space.dna 与 mass.proton。[3]
