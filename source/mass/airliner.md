---
id: mass.airliner
title: '波音 747-8：220,000 kg，空重与最大起飞质量的一半'
summary: >-
  波音 747-8 的运行空重约 220,000 kg，含机体、发动机、系统、内饰与不可用燃油，不含载荷与可加燃油。最大起飞质量约 447,700
  kg，空重略低于它的一半。
dimension: mass
category: 工程与交通
displayValue: '220,000 kg'
quantity:
  value: 220000
  unit: kg
  measure: 制造商运行空重（operating empty weight）：机体、发动机、系统、内饰与不可用燃油，不含商载与可用燃油
  approximate: false
grade: A
related:
  - mass.train-car
  - mass.iss
  - mass.truck
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
  - title: Boeing official site — 747-8 technical specifications
    url: 'https://www.boeing.com/'
    publisher: The Boeing Company
    accessed: '2026-11-09'
  - title: IATA — aircraft weight and balance definitions
    url: 'https://www.iata.org/'
    publisher: International Air Transport Association
    accessed: '2026-11-09'
  - title: FAA — aircraft weight and balance handbook
    url: 'https://www.faa.gov/'
    publisher: Federal Aviation Administration
    accessed: '2026-11-09'
tags:
  - 质量
  - 飞机
  - 空重
  - 航空
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商运行空重（operating empty weight）：机体、发动机、系统、内饰与不可用燃油，不含商载与可用燃油
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B8 车辆与大型动物 · 220,000 kg'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 5.342
  position: 48.76
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
titleEn: Boeing 747-8
---
## 这个读数是什么

波音 747-8 的空重约 220,000 kg。空重是飞机可以飞起来的最小质量：机体、发动机、系统、内饰、座椅与不可用燃油，不含乘客、货物与可加油量。[1] 它的最大起飞质量约 447,700 kg，空重略低于这个上限的一半。

这个读数描述的是“飞机自己有多重”，不是“飞机能装多少”。把它和最大起飞质量混为一谈，是航空数据里最常见的误读。

## 口径与不确定度

航空业有三个必须分开的质量：空重、零燃油质量（空重加载荷）、最大起飞质量。[2] 747-8 的商载约 76 t（客机）到 137 t（货机），可加燃油约 240 t；三者相加接近最大起飞质量。把最大起飞质量当“飞机重”会高估一倍，把空重当“能装多少”则会漏掉燃油。

同一机型不同航空公司的空重可以差几吨，取决于座椅密度、厨房、娱乐系统与货舱配置。[1] 220,000 kg 是制造商公布的典型值，标 A 级。运行中还要区分“空重”与“使用空重”，后者可能包含机组与配餐。

## 怎么测出来的

新飞机出厂时在地磅上逐轮称重，得到空重与重心；之后每次大改（换内饰、加装设备）都要重新称重并更新载重平衡手册。[3] 航空公司日常运行靠载重表计算，而不是每次称重，因此手册里的空重必须准确到几百千克。

称重的关键不是总重，而是重心：同样的质量，前后分布不同会改变配平与油耗。地磅给出每个机轮的读数，工程师据此同时得到质量和重心位置。

## 量级位置

2.2×10⁵ kg 约为 168 辆卡罗拉，或 1.5 头蓝鲸。它落在 B8 带上端，与空间站同十进位；但飞机质量的大头是结构与燃油，空间站则是舱段与太阳翼。同样 220 t，飞机要飞，空间站只要不掉下来。[3]

## 怎么继续走

想比较轨道上的同类，去 mass.iss；想看地面大运量交通工具，去 mass.train-car；想理解铝合金与复合材料在机体中的比例，从 elements.c 进入元素轴；想比较载货能力，去 mass.truck。
