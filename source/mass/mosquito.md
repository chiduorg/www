---
id: mass.mosquito
title: 成年雌蚊：约 2.5×10⁻⁶ kg，单个成体的湿重均值
summary: >-
  以常见蚊种为样本，单个成年雌蚊在未吸血状态下的湿重均值约 2.5×10⁻⁶ kg（约 2.5 mg），样本间差异约
  ±40%。吸血后短时间内的体重可以翻数倍。
dimension: mass
category: 自然与生物
displayValue: 约 2.5×10⁻⁶ kg
quantity:
  value: 0.0000025
  unit: kg
  measure: 单个成年雌蚊未吸血状态的湿重均值；不同蚊种、营养与含水状态差异约 ±40%
  approximate: true
grade: B
related:
  - mass.rain-drop
  - mass.tea-leaf
  - mass.sand-grain
  - space.human
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
  - 蚊子
  - 昆虫
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个成年雌蚊未吸血状态的湿重均值；不同蚊种、营养与含水状态差异约 ±40%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B6 日常微粒 · 约 2.5×10⁻⁶ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B6
  bandLabel: 日常微粒
  log10: -5.602
  position: 36.99
  color: '#c9a77a'
  scaleMin: -40
  scaleMax: 53
titleEn: Adult female mosquito
---
## 这个读数是什么

一只成年雌蚊的湿重均值约为 2.5×10⁻⁶ kg，也就是约 2.5 毫克。[1] 这里说的是单个成体、未吸血状态下的整体湿重，包含外骨骼、肌肉、消化道内容物与体内水分；不是干重，也不是某一部位的质量。写成“约 2.5 毫克”而不是 2.500 毫克，是因为样本本身的离散比天平的分度大得多。

## 口径与不确定度

蚊子的质量随状态变化很大：刚羽化、吸食花蜜、吸血、产卵前后都不相同，吸血后短时间内的体重可以翻几倍。不同蚊种之间也有差异，小型伊蚊比大型按蚊轻。因此本条取“未吸血成体湿重均值”，给约 ±40% 的离散范围，并标 approximate。[2] 干重通常只有湿重的四分之一左右，若论文给的是干重，不能直接与这里的数值比较。

## 怎么测出来的

常规做法是把单只蚊虫冷冻或麻醉后放上微量天平称重，天平分辨率要到微克级；群体研究则称一批同条件个体再除以数量，得到均值。[1] 也有研究用微量毛细管或压电传感器测活体质量变化，用来观察吸血前后与飞行中的重量波动。[3] 所有方法给出的都是样本均值，单只蚊子会围绕它上下分布，所以条目记录的是均值与范围，不是某一只的读数。

## 量级位置

约 2.5 mg 位于 B6 带中段：约为一片干茶叶的二十分之一，也是一滴 4.6 mm 雨滴的二十分之一，比一粒 0.5 mm 砂粒重约十四倍。[2] 在会飞的动物里它属于最轻的一档，再往下就是尘埃与单个细胞，往上才是蝇、蜂等更大的昆虫。

## 怎么继续走

想比较同量级的水滴，去 mass.rain-drop；想看植物干物质的量级，去 mass.tea-leaf；想看更小的颗粒，去 mass.sand-grain；想看它与人类的关系，例如叮咬与疾病传播，从 space.human 进入空间轴。质量轴对同一对象只取一个口径，这里固定为未吸血成体湿重。
