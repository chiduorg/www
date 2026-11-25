---
id: mass.sirius-b
title: 天狼星 B：2.02×10³⁰ kg，地球大小的白矮星
summary: 天狼星 B 质量约 2.02×10³⁰ kg，约 1.02 太阳质量，半径却只有地球量级。数值由双星轨道拟合并结合引力红移测定，相对不确定度约 2%。
dimension: mass
category: 恒星与致密天体
displayValue: 2.02×10³⁰ kg
quantity:
  value: 2.02e+30
  unit: kg
  measure: 白矮星质量（约 1.02 太阳质量）；由与天狼星 A 的双星轨道拟合，并结合引力红移测定，相对不确定度约 2%
  approximate: false
grade: B
mass:
  type: stellar
  includesDarkMatter: false
  method: binary orbit and gravitational redshift
  uncertainty:
    value: 0.02
    unit: relative
related:
  - mass.sirius-a
  - mass.sun
  - mass.psr-j0348-0432
  - space.sun
  - temperature.sun-surface
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
  - title: IAU 2015 Resolution B3
    url: 'https://www.iau.org/'
    publisher: International Astronomical Union
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: SIMBAD Astronomical Database
    url: 'https://simbad.cds.unistra.fr/'
    publisher: CDS
    accessed: '2026-11-09'
tags:
  - 质量
  - 恒星
  - 白矮星
  - 天狼星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 白矮星质量（约 1.02 太阳质量）；由与天狼星 A 的双星轨道拟合，并结合引力红移测定，相对不确定度约 2%
  precision: B 级；记录值。
  massType: 恒星质量
  includesDarkMatter: 否
  uncertainty: 相对约 2%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 2.02×10³⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 30.305
  position: 75.6
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
titleEn: Sirius B
---
## 这个读数是什么

天狼星 B 是天狼星 A 的伴星，也是离我们最近的白矮星，距离约 8.6 光年。它的质量约 2.02×10³⁰ kg，即 1.02 太阳质量，半径却只有约 0.008 太阳半径，接近地球大小。[1] 一茶匙它的物质就重达数吨。它是第一颗被认出属于白矮星类别的天体，光谱中的氢线极宽。

## 口径与不确定度

口径为恒星质量里的白矮星分支，指这颗简并星的全部物质，不包含暗物质。[2] 数值由双星轨道拟合给出的质量比与总质量确定，并用引力红移独立检验，相对不确定度约 2%，定为 B 级。白矮星没有核燃烧，质量一旦确定，半径就由电子简并态的物态方程决定。质量与半径一旦都确定，还能反推内部成分，这也是白矮星质量分布集中的原因。

## 怎么测出来的

轨道法给出两星质量之和与质量比，天狼星 A 的质量已知，天狼星 B 的质量随之确定。[2] 另一条线索是引力红移：白矮星表面引力极强，谱线整体向红端移动，移动量正比于质量除以半径。[3] 两条独立方法给出相容结果，才使 2% 的不确定度可信。两条方法的误差来源不同，因此可以互相校核。

## 量级位置

2.02×10³⁰ kg 与太阳几乎相同，却压缩在行星大小的体积里，密度达到每立方厘米数吨。[1] 白矮星的质量上限约 1.4 太阳质量，超过这个值，电子简并压将无法支撑，星体会继续坍缩。这也意味着质量越大的白矮星反而越小。

## 怎么继续走

想看它的主星，去 mass.sirius-a；想看更极端的致密天体，去 mass.psr-j0348-0432；想看太阳作为对照，去 mass.sun。白矮星是中小质量恒星演化的终点，它与中子星之间还隔着一道坍缩门槛，中间要跨过电子俘获与中子化两重关卡。
