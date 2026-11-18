---
id: mass.grand-coulee-dam
title: 大古力坝：约 2.2×10¹⁰ kg，混凝土体积×密度估算
summary: >-
  大古力坝混凝土总量 11,975,521 立方码（约 9.16×10⁶ m³），按 2.4 t/m³ 折算约 2.2×10¹⁰
  kg。垦务局只公布体积，未给总质量；这是混凝土的估算质量，不含金属结构与机组。
dimension: mass
category: 水利工程
displayValue: 2.2×10¹⁰ kg
quantity:
  value: 22000000000
  unit: kg
  measure: 混凝土体积×密度估算：9.156×10⁶ m³ × 2.4 t/m³ ≈ 2.2×10¹⁰ kg；不含金属结构与机组
  approximate: true
grade: B
related:
  - mass.hoover-dam
  - mass.three-gorges-dam
  - mass.empire-state-building
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
    - >-
      来源角色：第 1 条来源提供对象的具体数值与参数；第 2 条为工程机构背景页，仅用于方法论与语境，不支撑具体数值。2026-11-09
      已移除与对象无直接关系的第 3 来源，正文 [3] 改为 [1]。
sources:
  - title: Grand Coulee Dam — Bureau of Reclamation statistics and facts
    url: 'https://www.usbr.gov/'
    publisher: U.S. Bureau of Reclamation
    accessed: '2026-11-09'
  - title: Institution of Civil Engineers — dam engineering
    url: 'https://www.ice.org.uk/'
    publisher: Institution of Civil Engineers
    accessed: '2026-11-09'
tags:
  - 质量
  - 大坝
  - 混凝土
  - 水利
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 混凝土体积×密度估算：9.156×10⁶ m³ × 2.4 t/m³ ≈ 2.2×10¹⁰ kg；不含金属结构与机组
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 2.2×10¹⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 10.342
  position: 54.13
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

大古力坝位于华盛顿州哥伦比亚河上，1933 到 1941 年建成，坝高 168 m、坝顶长 1,592 m，是北美最大的混凝土重力坝。[1] 垦务局公布混凝土总量 11,975,521 立方码，折合约 9.16×10⁶ m³。按 2.4 t/m³ 折算，质量约 2.2×10¹⁰ kg。这是混凝土的估算质量，装机容量 6,809 MW 的机组与金属结构不在其中。

## 口径与不确定度

垦务局公布的是体积，不是质量，所以这个 kg 数一定带密度假设。[1] 混凝土密度取 2.4 到 2.5 t/m³，结果会在 2.2 到 2.3×10¹⁰ kg 之间。另一个容易混的是开挖量：工程挖填土石约 3,490 万 m³，那些土石并不属于坝体，不能加进来。坝基以下的岩体同样不计。本条只算浇筑混凝土，并把“体积×密度”的口径写在 measure 里。

## 怎么测出来的

质量由拌合楼的配料记录与浇筑方量反推。每盘混凝土的水泥、砂、石、水都按配比称量，累计方量再乘湿密度；大坝分块浇筑，每块的方量与温控记录一一对应。[2] 这类统计的误差主要来自密度取值，而不是方量本身，因为方量是按仓面几何逐块核对的。

## 量级位置

2.2×10¹⁰ kg 约等于 60 座帝国大厦，或 15 万头蓝鲸。[1] 它是三峡大坝混凝土量的三分之一，也是胡佛大坝的三倍多；三座坝正好把 10⁹ 到 10¹⁰ kg 这一段串起来。大坝同时承担灌溉、防洪与发电，坝体之外的泵站与厂房同样不计入本条。它是一座重力坝，靠自身重量维持稳定，质量在这里不是附注，而是设计原理本身。

## 怎么继续走

想看更大的混凝土坝，去 mass.three-gorges-dam；想看 10⁹ kg 档的拱坝，去 mass.hoover-dam；想比较建筑与坝体的质量，去 mass.empire-state-building；想理解水泥与骨料的成分，从 elements.c 进入元素轴。
