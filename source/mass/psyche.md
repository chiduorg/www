---
id: mass.psyche
title: 灵神星：2.287×10¹⁹ kg，一颗待近距离称重的金属小行星
summary: >-
  灵神星是主带里的大质量小行星，总质量约 2.287×10¹⁹ kg，当前相对不确定度约 10%。数值来自地面观测与形状—密度模型，Psyche
  探测器抵达后才会由引力场给出更准的读数。
dimension: mass
category: 行星与小天体
displayValue: 2.287×10¹⁹ kg
quantity:
  value: 22870000000000000000
  unit: kg
  measure: 灵神星总质量（含风化层与内部物质，不含暗物质）；由地面观测、热辐射与形状—密度模型组合，相对不确定度约 10%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: false
  method: ground-based observations and shape-density modeling
  uncertainty:
    value: 0.1
    unit: relative
related:
  - mass.vesta
  - mass.ceres
  - space.ceres
  - elements.fe
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
  - title: Planetary Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/'
    publisher: NASA Space Science Data Coordinated Archive
    accessed: '2026-11-09'
  - title: Solar System Dynamics
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
tags:
  - 质量
  - 小行星
  - 灵神星
  - 主带
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 灵神星总质量（含风化层与内部物质，不含暗物质）；由地面观测、热辐射与形状—密度模型组合，相对不确定度约 10%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 10%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 2.287×10¹⁹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 19.359
  position: 63.83
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
titleEn: Psyche
---
## 这个读数是什么

灵神星是火星与木星之间主带里的一颗大质量小行星，本条记录它的总质量约 2.287×10¹⁹ kg，也就是约 2.3×10¹⁹ kg。[1] 这个读数针对天体整体，包含它表面的风化层与内部未分异或部分分异的物质，不包含任何暗物质。它常被称为“金属小行星”，但质量本身并不能直接说明它就是裸露的金属核。

## 口径与不确定度

这里用的是总质量口径，含岩石、金属与孔隙，不含暗物质。当前最佳估计的相对不确定度约为 10%，属于 B 级：数值来自地面观测、热辐射与形状模型的组合，而不是航天器在近处测得的引力场。[2] 因此正文只保留四位有效数字，不能把它当作精确到个位的定值。把它和直径、体积相互换算只能得到平均密度，不能反过来当作独立的质量测量。

## 怎么测出来的

在 Psyche 探测器抵达之前，灵神星的质量主要靠它与附近天体或背景恒星的相互作用、以及热惯量与形状模型来约束。[3] 一旦航天器进入环绕轨道，通过跟踪其轨道受摄动的情况，就能把引力场系数 J2 等量解出来，质量的不确定度会显著下降。这也是为什么同一颗天体在不同任务阶段会给出不同精度的读数。

## 量级位置

2.287×10¹⁹ kg 落在 B11 带的下端，比谷神星轻约一个量级，比月球轻约三千倍。[1] 它大约相当于地球质量的十亿分之四。小行星带的总质量也不过月球质量的百分之几，所以单个小行星在这个阶梯上只是“行星建材”的一小块。

## 怎么继续走

想看同带更规则的硅酸盐天体，去 mass.vesta；想看小行星带里最大的矮行星，去 mass.ceres 与 space.ceres；想看金属与铁镍核的地球化学背景，从 elements.fe 进入元素轴。
