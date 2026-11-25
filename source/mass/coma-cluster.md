---
id: mass.coma-cluster
title: 后发座星系团：约 3.0×10⁴⁵ kg，暗物质证据的经典舞台
summary: >-
  后发座星系团是著名的富星系团，总质量约 3.0×10⁴⁵ kg，折合约 1.5×10¹⁵ 个太阳质量，口径包含暗物质。数值由 X
  射线热气与引力透镜联合给出，相对不确定度约 30%。
dimension: mass
category: 星系与宇宙
displayValue: 3.0×10⁴⁵ kg
quantity:
  value: 3e+45
  unit: kg
  measure: 后发座星系团总质量（含暗物质，约 1.5×10¹⁵ 太阳质量）；由 X 射线热气与引力透镜联合给出，相对不确定度约 30%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: X-ray gas and gravitational lensing
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.virgo-cluster
  - mass.bullet-cluster
  - space.coma-cluster
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
  - 后发座星系团
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 后发座星系团总质量（含暗物质，约 1.5×10¹⁵ 太阳质量）；由 X 射线热气与引力透镜联合给出，相对不确定度约 30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 3.0×10⁴⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 45.477
  position: 91.91
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
titleEn: Coma Cluster
---
## 这个读数是什么

后发座星系团位于后发座方向，距我们约三亿三千万光年，成员星系上千个，本条记录它的总质量约 3.0×10⁴⁵ kg，折合约 1.5×10¹⁵ 个太阳质量。[1] 口径包含暗物质。把成员星系的恒星质量全部加起来，只有总质量的百分之一二，这个差距正是暗物质问题的起点。[2] 团内气体温度可达上亿开尔文。

## 口径与不确定度

总质量是引力质量，包含暗物质、炽热气体与星系；恒星质量只计重子物质中的恒星部分。[2] 本条只用含暗物质的总质量口径。相对不确定度约 30%，来自气体平衡假设、透镜建模与投影效应，不同方法给出的结果在此范围内一致，故标近似、定 B 级。[3]

## 怎么测出来的

1933 年茨威基用成员星系的速度弥散发现，按维里定理算出的质量远大于可见物质，这是暗物质的最早线索之一。[1] 现在的主力是 X 射线气体测量与弱引力透镜：前者给出气体质量与总质量剖面，后者直接测视线方向的引力畸变。[3]

## 量级位置

3.0×10⁴⁵ kg 位于 B15 带上段，约为室女座星系团的一点二倍，约为天炉座星系团的二十倍。[1] 它约为银河系总质量的一千倍。后发座星系团因此常被当作“典型富星系团”的标尺，用来校准其他团的质量。它的质量也常被用来检验暗物质模型。

## 怎么继续走

想看稍轻的富星系团，去 mass.virgo-cluster；想看碰撞中的极端案例，去 mass.bullet-cluster；想看星系团的通用图景，去 space.coma-cluster。[2] 这三条分别给出静态、合并与概览三种视角。后发座星系团的质量之所以重要，是因为它第一次让天文学家意识到可见物质远远不够。
