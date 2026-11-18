---
id: mass.hoover-dam
title: 胡佛大坝：约 6.6×10⁹ kg，官方混凝土总量
summary: >-
  胡佛大坝坝体浇筑混凝土 3,250,335 立方码，垦务局记为 6,600,000 吨，约 6.6×10⁹ kg；若按美制短吨折算约 6.0×10⁹
  kg。全工程含厂房的混凝土为 4.36×10⁶ 立方码。
dimension: mass
category: 水利工程
displayValue: 6.6×10⁹ kg
quantity:
  value: 6600000000
  unit: kg
  measure: '混凝土与结构总质量：美国垦务局公布坝体混凝土 3,250,335 立方码、约 6,600,000 吨，取 6.6×10⁹ kg'
  approximate: false
grade: A
related:
  - mass.three-gorges-dam
  - mass.grand-coulee-dam
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
  - title: Hoover Dam — Bureau of Reclamation project page
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
  scope: '混凝土与结构总质量：美国垦务局公布坝体混凝土 3,250,335 立方码、约 6,600,000 吨，取 6.6×10⁹ kg'
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 6.6×10⁹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 9.82
  position: 53.57
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

胡佛大坝 1936 年建成，坝高 221 m、坝顶长 379 m，是科罗拉多河上的混凝土拱坝。[1] 美国垦务局公布坝体混凝土量为 3,250,335 立方码，并记为 6,600,000 吨，也就是约 6.6×10⁹ kg。这个读数是大坝本体混凝土的质量，不含厂房、溢洪道与金属结构。

## 口径与不确定度

垦务局把坝体混凝土与全工程混凝土分开统计：坝体 3,250,335 立方码，含厂房、进水口等附属建筑则达 4.36×10⁶ 立方码。[1] 同一份资料里的“6,600,000 吨”是按美制短吨记的，折算成公制约 6.0×10⁹ kg；本条沿用官方吨数与量级，并在正文说明这一差异。另一个边界是钢材与闸门：它们在全工程中占比很小，但不能说“大坝只有混凝土”。

## 怎么测出来的

施工时混凝土由拌合楼按配比生产，每盘的水泥、砂石与水量都有记录，方量再乘湿密度得到质量，最后与设计方量核对。[2] 大坝分块浇筑，每块埋设冷却水管，避免水化热开裂。混凝土用 8 立方码的吊罐入仓，浇筑高峰期每天上千罐，方量统计由此逐日累积。这套记录让“3,250,335 立方码”成为可追溯的工程量，而不是竣工后的估算。

## 量级位置

6.6×10⁹ kg 约等于 18 座帝国大厦，或 44,000 头蓝鲸。[1] 它位于 10⁹ kg 档，是“人造单体”第一次稳定越过 10⁹ kg 的标志性工程；向上一个数量级，就是三峡与大古力这类 10¹⁰ kg 级的大坝。

## 怎么继续走

想看更大的混凝土坝，去 mass.three-gorges-dam；想看同一条河系上的另一座重力坝，去 mass.grand-coulee-dam；想比较建筑与坝体的质量效率，去 mass.empire-state-building；想理解水泥与骨料的成分，从 elements.c 进入元素轴。
