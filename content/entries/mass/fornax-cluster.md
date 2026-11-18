---
id: mass.fornax-cluster
title: 天炉座星系团：约 1.4×10⁴⁴ kg，南天富星系团的代表
summary: >-
  天炉座星系团是南天较近的富星系团，总质量约 1.4×10⁴⁴ kg，折合约 7×10¹³ 个太阳质量，口径包含暗物质。数值由 X
  射线热气与成员速度弥散联合给出，相对不确定度约 30%。
dimension: mass
category: 星系团
displayValue: 1.4×10⁴⁴ kg
quantity:
  value: 1.4e+44
  unit: kg
  measure: 天炉座星系团总质量（含暗物质，约 7×10¹³ 太阳质量）；由 X 射线热气与成员速度弥散联合给出，相对不确定度约 30%
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
  - mass.virgo-cluster
  - mass.centaurus-a-group
  - space.fornax-cluster
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
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: ESA Science
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 星系团
  - 天炉座星系团
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 天炉座星系团总质量（含暗物质，约 7×10¹³ 太阳质量）；由 X 射线热气与成员速度弥散联合给出，相对不确定度约 30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 1.4×10⁴⁴ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 44.146
  position: 90.48
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

天炉座星系团位于南天，距我们约六千二百万光年，成员星系约数十个，本条记录它的总质量约 1.4×10⁴⁴ kg，折合约 7×10¹³ 个太阳质量，口径包含暗物质。[1] 团内星系的恒星质量总和只有总质量的百分之几，其余大部分是暗物质与炽热气体。[2] 成员以椭圆星系和透镜星系为主。

## 口径与不确定度

星系团总质量是引力质量，包含暗物质、炽热气体和成员星系三部分；恒星质量只是其中很小的一块。[2] 本条只采用含暗物质的总质量。相对不确定度约 30%，来自气体是否处于流体静力学平衡、成员速度样本是否完整，属模型依赖的估计，故标近似、定 B 级。[3]

## 怎么测出来的

X 射线观测给出团内气体的温度与密度，假设流体静力学平衡后可反推包围质量。成员星系的红移给出速度弥散，用维里定理独立估算。[1] 两条路线在中间半径吻合较好，向外则因气体温度测量变难而分歧增大。[3]

## 量级位置

1.4×10⁴⁴ kg 位于 B15 带中段，约为半人马座 A 星系群的五倍，约为室女座星系团的十七分之一。[1] 它比单个巨星系重两个数量级，说明星系团的质量主要不在星系本身，而在星系之间的空间。它是“星系团”这一级的南天代表，到了这一级，暗物质已经成为质量的主体。

## 怎么继续走

想看更近的星系群，去 mass.centaurus-a-group；想看更富的星系团，去 mass.virgo-cluster；想看星系团的通用图景，去 space.fornax-cluster。[2] 这三条把天炉座星系团放进由群到团的连续序列里。若只想记住一个数，就记住它的总质量约七十万亿个太阳质量，其中恒星只占很小一份。
