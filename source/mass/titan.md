---
id: mass.titan
title: 土卫六：1.345×10²³ kg，唯一拥有浓密大气的卫星
summary: >-
  土卫六是土星最大的卫星，总质量约 1.345×10²³ kg，比月球重约 1.8 倍。Cassini 多次飞掠的轨道跟踪把相对不确定度压到约
  0.1%，但必须同时建模大气阻力。
dimension: mass
category: 行星与小天体
displayValue: 1.345×10²³ kg
quantity:
  value: 1.345e+23
  unit: kg
  measure: 土卫六总质量（含岩石内核、冰幔、液态水层与浓密氮气大气，不含暗物质）；由 Cassini 飞掠跟踪与引力场拟合得出，相对不确定度约 0.1%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft flyby tracking and gravity-field fitting
  uncertainty:
    value: 0.001
    unit: relative
related:
  - mass.ganymede
  - mass.europa
  - space.jupiter
  - mass.earth
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
  - 土卫六
  - 土星系统
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 土卫六总质量（含岩石内核、冰幔、液态水层与浓密氮气大气，不含暗物质）；由 Cassini 飞掠跟踪与引力场拟合得出，相对不确定度约 0.1%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.1%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 1.345×10²³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 23.129
  position: 67.88
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
titleEn: Titan
---
## 这个读数是什么

土卫六是土星最大的卫星，也是太阳系里唯一拥有浓密大气的卫星。本条记录它的总质量约 1.345×10²³ kg。[1] 口径为天体总质量，包含岩石内核、冰幔、液态水层与浓密氮气大气，不包含暗物质。

## 口径与不确定度

总质量口径包含大气与冰壳。Cassini 探测器在轨跟踪给出的相对不确定度约为 0.1%，定为 A 级，正文保留四位有效数字。[2] 土卫六的平均密度约为 1.88 g/cm³，说明冰在它的组成中占比很高；但密度与体积不能替代质量测量，质量仍要靠引力场来定。

## 怎么测出来的

Cassini 在 2004 至 2017 年环绕土星并多次飞掠土卫六，地面测控测量探测器飞掠前后的速度变化，再由轨道摄动与引力场系数 J2 反演质量。[2] 土卫六的浓密大气也会对探测器产生阻力，这部分影响必须一并建模，否则会污染质量反演。[3] 这也是“含大气”口径必须写清楚的原因。

## 量级位置

1.345×10²³ kg 位于 B11 带上段，比木卫三略轻，比月球重约 1.8 倍，比地球轻约四十四倍。[1] 它是太阳系第二大卫星，仅次于木卫三。把它和体积放在一起看，土卫六的“大”更多来自冰与大气，而不是岩石。土卫六的质量足以让它长期保留浓密大气，这一点在太阳系卫星中十分罕见；大气中的甲烷循环也与质量密切相关。

## 怎么继续走

想看质量略大的木卫三，去 mass.ganymede；想看冰壳下的海洋世界，去 mass.europa；想看另一颗巨行星的卫星系统作为对照，去 space.jupiter；想看地球质量作为参照，去 mass.earth。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.345×10²³ 千克，换算后是 1.35×10²³ 千克；约为地球（5.972×10²⁴ 千克）的 0.0225 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10²³ 量级附近。

读图时先看量级，再看倍数：10²³ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
