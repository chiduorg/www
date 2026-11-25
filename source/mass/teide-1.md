---
id: mass.teide-1
title: Teide 1：1.08×10²⁹ kg，第一个被确认的褐矮星
summary: >-
  Teide 1 的质量约 1.08×10²⁹ kg，相当于约 57 个木星质量。数值来自演化模型对星团年龄与光度的拟合，属于模型依赖值，相对不确定度约
  10%。
dimension: mass
category: 行星与小天体
displayValue: 1.08×10²⁹ kg
quantity:
  value: 1.08e+29
  unit: kg
  measure: 褐矮星总质量（约 57 个木星质量）；由演化模型结合昴星团年龄、光度与光谱拟合得到，相对不确定度约 10%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: false
  method: evolutionary models
  uncertainty:
    value: 0.1
    unit: relative
related:
  - mass.barnard-star
  - mass.proxima-centauri
  - mass.jupiter
  - space.earth
  - temperature.venus-surface
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
  - 褐矮星
  - 恒星
  - 昴星团
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 褐矮星总质量（约 57 个木星质量）；由演化模型结合昴星团年龄、光度与光谱拟合得到，相对不确定度约 10%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 10%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 1.08×10²⁹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 29.033
  position: 74.23
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
titleEn: Teide 1
---
## 这个读数是什么

Teide 1 位于昴星团，是 1995 年被确认的第一颗褐矮星。它的质量约为 1.08×10²⁹ kg，也就是约 57 个木星质量，只有太阳的百分之五左右。[1] 它没有稳定的氢核聚变，只靠余热缓慢冷却，光谱呈晚型 M 型，位于金牛座方向，是研究亚恒星天体的经典样本。

## 口径与不确定度

本条记录的是褐矮星总质量，包含它的全部物质，不包含暗物质。[2] 由于没有伴星可供轨道测量，质量只能靠演化模型结合星团年龄与光度反推，相对不确定度约 10%，定为 B 级。这类模型依赖值只能作为量级参考，不宜当作精确读数；换一套模型，结果可能相差十几个木星质量。

## 怎么测出来的

昴星团成员共享同一年龄，约一亿两千万年，这给模型提供了关键约束：把测得的光度与有效温度代入模型冷却轨迹，就能读出质量。[2] 光谱中的锂吸收线提供旁证——质量在约 65 个木星以上时，锂会被彻底耗尽。[3] 两条线索合起来，才把质量限制在 57 个木星质量附近，这也是褐矮星质量研究的标准做法。

## 量级位置

1.08×10²⁹ kg 处在 B13 带的下端，比木星重约 57 倍，却比太阳轻约 18 倍。[1] 这个区间正是氢燃烧的门槛附近：再重一些就成为红矮星，再轻一些则连氘燃烧都难以维持。它的半径与木星相近，密度却更高，说明电子简并压已在支撑内部，是“恒星”与“行星”之间那条模糊边界的实物样本。

## 怎么继续走

想看真正的红矮星，去 mass.barnard-star 与 mass.proxima-centauri；想看褐矮星与巨行星之间的连续过渡，去 mass.jupiter；想看这类天体在空间轴上的位置，去 space.exoplanet。褐矮星没有稳定的氢燃烧，大部分时间都在缓慢冷却，所以质量必须与年龄一起考虑，质量阶梯正是靠这些相邻条目把门槛两侧连起来。
