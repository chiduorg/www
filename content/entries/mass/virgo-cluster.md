---
id: mass.virgo-cluster
title: 室女座星系团：约 2.4×10⁴⁵ kg，离我们最近的富星系团
summary: >-
  室女座星系团是离我们最近的富星系团，总质量约 2.4×10⁴⁵ kg，折合约 1.2×10¹⁵ 个太阳质量，口径包含暗物质。数值由 X
  射线热气与成员速度弥散联合给出，相对不确定度约 30%。
dimension: mass
category: 星系团
displayValue: 2.4×10⁴⁵ kg
quantity:
  value: 2.4e+45
  unit: kg
  measure: 室女座星系团总质量（含暗物质，约 1.2×10¹⁵ 太阳质量）；由 X 射线热气与成员速度弥散联合给出，相对不确定度约 30%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: X-ray gas and velocity dispersion
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.m87-galaxy
  - mass.coma-cluster
  - mass.local-group
  - mass.laniakea
  - space.galaxy-cluster
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
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
tags:
  - 质量
  - 星系团
  - 室女座星系团
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 室女座星系团总质量（含暗物质，约 1.2×10¹⁵ 太阳质量）；由 X 射线热气与成员速度弥散联合给出，相对不确定度约 30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 2.4×10⁴⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 45.38
  position: 91.81
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

室女座星系团是离我们最近的富星系团，距我们约五千四百万光年，成员星系上千个，中心是巨椭圆星系 M87，本条记录它的总质量约 2.4×10⁴⁵ kg，折合约 1.2×10¹⁵ 个太阳质量。[1] 口径包含暗物质。团内星系的恒星质量总和只占百分之一二，其余主要是暗物质与高温气体。[2] 它的引力主导着本超星系团的核心区域。

## 口径与不确定度

总质量把暗物质、炽热气体与成员星系一并算入，恒星质量只是重子物质的一小部分。[2] 本条固定采用含暗物质的总质量口径。相对不确定度约 30%，来自气体平衡假设、成员判定与投影效应，不同作者的结果会有两三成的离散，故标近似、定 B 级。[3]

## 怎么测出来的

X 射线望远镜测得团内气体的表面亮度与温度剖面，由流体静力学平衡反推质量。成员星系的红移给出速度弥散，用维里定理给出独立估计。[1] 室女座星系团离得近、角尺度大，反而给全天扫描带来困难，早期巡天常漏掉外围成员。[3]

## 量级位置

2.4×10⁴⁵ kg 位于 B15 带上段，约为天炉座星系团的十七倍，约为后发座星系团的八成。[1] 它是本超星系团的引力核心，银河系所在的本星系群只是它外围的一个小成员。这个总质量约为银河系的八百倍，星系团这一级的质量尺度由此可见。

## 怎么继续走

想看它的中心巨星系，去 mass.m87-galaxy；想看更重的星系团，去 mass.coma-cluster；想看自己所在星系群的起点，去 mass.local-group；想理解这类系统的空间图景，可去 space.galaxy-cluster。[2] 这四条把室女座星系团放进中心、对比、起点与图景四个视角。若想继续往外，可去 mass.laniakea 看它所属的超星系团。
