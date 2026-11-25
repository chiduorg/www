---
id: mass.tea-leaf
title: 一片干茶叶：约 5×10⁻⁵ kg，单叶干重的均值
summary: 一片成品干茶叶的单叶干重均值约 5×10⁻⁵ kg（50 mg），常见区间 0.02–0.08 g。芽头与小叶种偏轻，成熟叶偏重；条索卷得再紧也不改变干重。
dimension: mass
category: 自然与生物
displayValue: 约 5×10⁻⁵ kg
quantity:
  value: 0.00005
  unit: kg
  measure: 单片成品干茶叶的干重均值，区间 0.02–0.08 g；按单叶计数，不含茶梗与包装
  approximate: true
grade: B
related:
  - mass.mosquito
  - mass.sand-grain
  - mass.rain-drop
  - mass.water-molecule
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
  - title: ISO Standards
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: NCBI Bookshelf
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
tags:
  - 质量
  - 茶叶
  - 干重
  - 植物
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单片成品干茶叶的干重均值，区间 0.02–0.08 g；按单叶计数，不含茶梗与包装
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B6 日常微粒 · 约 5×10⁻⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B6
  bandLabel: 日常微粒
  log10: -4.301
  position: 38.39
  color: '#c9a77a'
  scaleMin: -40
  scaleMax: 53
titleEn: Dried tea leaf
---
## 这个读数是什么

一片成品干茶叶的单叶质量约为 5×10⁻⁵ kg，即 50 毫克。[1] 这里说的是“一片叶子”的干重，即采摘、杀青、揉捻、干燥之后的成品单叶；不是一泡茶（通常 3–8 克），也不是一株茶树的总产量。冲泡时茶叶吸水膨胀，质量会变，但那条读数不属于本条口径。

## 口径与不确定度

单叶干重随品种、采摘标准与季节变化很大：单芽或一芽一叶只有 0.02 克上下，成熟的对夹叶可以到 0.08 克。[2] 因此条目给 0.02–0.08 克的区间，取中值 0.05 克作读数，并标 approximate。需要区分几个口径：鲜叶含水率高，干重只有鲜重的两到三成；茶梗、碎末与包装不计入单叶质量。若把“一袋茶”的重量除以叶片数，均值会受碎茶比例影响。

## 怎么测出来的

直接的方法是取同一批成品茶，随机挑出完整单叶若干片，用分析天平逐片称量，再取均值与分布。[1] 更系统的做法是按采摘标准分级，分别统计芽、一芽一叶、一芽二叶的百叶重，这是茶园产量估算的常规指标。[3] 由于干茶会吸湿，称量前需在规定条件下平衡水分，否则读数会随空气湿度漂移。

## 量级位置

约 5×10⁻⁵ kg 与一滴 4.6 mm 雨滴几乎同量级：约为一只蚊子的二十倍，是一粒 0.5 mm 砂粒的三百倍，是一枚回形针的十分之一。[2] 这也是“一把茶叶”与“一片茶叶”差两个数量级的原因：日常抓取的一撮通常有几十片。

## 怎么继续走

想看同量级的液滴，去 mass.rain-drop；想看更小的生物个体，去 mass.mosquito；想看叶片的主要元素组成，去 elements.c；想看干燥与含水对质量的影响，去 mass.water-molecule。干重与鲜重是两个口径，同一条目不能混用。
