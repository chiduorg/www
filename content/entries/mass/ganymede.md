---
id: mass.ganymede
title: 木卫三：1.482×10²³ kg，太阳系最大的卫星
summary: >-
  木卫三是木星最大的卫星，也是太阳系最大的卫星，总质量约 1.482×10²³ kg，比水星略轻。Galileo 与 Juno 的跟踪数据给出约 0.1%
  的相对不确定度。
dimension: mass
category: 卫星
displayValue: 1.482×10²³ kg
quantity:
  value: 1.482e+23
  unit: kg
  measure: 木卫三总质量（含岩石内核、冰幔与可能的液态水层，不含暗物质）；由 Galileo 与 Juno 跟踪数据反演，相对不确定度约 0.1%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft tracking and gravity-field fitting
  uncertainty:
    value: 0.001
    unit: relative
related:
  - mass.titan
  - mass.europa
  - space.jupiter
  - mass.mercury
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
  - 卫星
  - 木卫三
  - 伽利略卫星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 木卫三总质量（含岩石内核、冰幔与可能的液态水层，不含暗物质）；由 Galileo 与 Juno 跟踪数据反演，相对不确定度约 0.1%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.1%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 1.482×10²³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 23.171
  position: 67.93
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

木卫三是木星最大的卫星，也是太阳系里最大的卫星。本条记录它的总质量约 1.482×10²³ kg。[1] 口径为天体总质量，包含岩石内核、冰幔与可能的液态水层，不包含暗物质。它比水星略轻，却比月球重约两倍。

## 口径与不确定度

总质量口径包含冰壳与内部所有物质。Galileo 与 Juno 的跟踪数据共同给出的相对不确定度约为 0.1%，定为 A 级，正文保留四位有效数字。[2] 木卫三是唯一已知拥有自身磁场的卫星，磁场与内部结构的研究让它的引力场也受到了更多关注；但磁场不能直接给出质量。

## 怎么测出来的

Galileo 在 1996 至 2003 年多次飞掠木卫三，Juno 在木星轨道上也对伽利略卫星做过跟踪，地面测控通过多普勒测速与轨道摄动反演质量与低阶引力场系数 J2。[2] 多源数据的联合拟合能显著压低系统误差。[3] 这与“由直径和密度互推质量”是两回事：后者只是估算，前者才是实测。

## 量级位置

1.482×10²³ kg 位于 B11 带上段，比土卫六略重，比月球重约两倍，比地球轻约四十倍。[1] 在太阳系卫星中它排第一，在全部天体中也进入了“行星级”质量区间，只是它绕的是木星而不是太阳。木卫三的质量足以让它在形成早期保留较多挥发分，从而形成厚厚的冰幔。

## 怎么继续走

想看质量相近的土卫六，去 mass.titan；想看冰壳海洋的木卫二，去 mass.europa；想看木星系统与伽利略卫星的图景，去 space.jupiter；想看略重的类地行星水星，去 mass.mercury。
