---
id: mass.europa
title: 木卫二：4.800×10²² kg，冰壳下藏着海洋的卫星
summary: 木卫二是木星的伽利略卫星之一，总质量约 4.800×10²² kg，约为月球的 65%。Galileo 多次飞掠的轨道跟踪把相对不确定度压到约 1%。
dimension: mass
category: 卫星
displayValue: 4.800×10²² kg
quantity:
  value: 4.8e+22
  unit: kg
  measure: 木卫二总质量（含岩石内核、冰壳与液态水层，不含暗物质）；由 Galileo 探测器飞掠跟踪与引力场拟合得出，相对不确定度约 1%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft flyby tracking and gravity-field fitting
  uncertainty:
    value: 0.01
    unit: relative
related:
  - mass.ganymede
  - mass.titan
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
  - 木卫二
  - 伽利略卫星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 木卫二总质量（含岩石内核、冰壳与液态水层，不含暗物质）；由 Galileo 探测器飞掠跟踪与引力场拟合得出，相对不确定度约 1%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 1%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 4.800×10²² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 22.681
  position: 67.4
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

木卫二是木星的第四颗伽利略卫星，本条记录它的总质量约 4.800×10²² kg。[1] 口径为天体总质量，包含岩石内核、全球性冰壳与其下的液态水层，不包含暗物质。它比月球略轻，约为月球质量的 65%。

## 口径与不确定度

总质量口径包含冰壳、海洋与岩石部分。Galileo 探测器在轨跟踪给出的相对不确定度约为 1%，定为 A 级，正文保留四位有效数字。[2] 木卫二的平均密度约为 3.0 g/cm³，说明它既有岩石也有大量水；但密度与体积不能替代质量测量，质量仍要靠引力场来定。

## 怎么测出来的

Galileo 在 1995 至 2003 年多次飞掠木卫二，地面测控测量探测器在飞掠前后的速度变化，再由轨道摄动与引力场系数 J2 反演质量。[2] 飞掠距离越近，质量与低阶引力场系数的相关性越容易分离。[3] 未来的 Europa Clipper 若进入环绕轨道，会给出更高精度的引力场。

## 量级位置

4.800×10²² kg 位于 B11 带中段，比月球轻约三分之一，比木卫三轻约三倍，比地球轻约一百二十四倍。[1] 它和木卫一、木卫三、木卫四一起构成伽利略卫星群，四者的质量加起来约占木星系全部卫星质量的百分之九十九以上。它的质量虽不及月球，却因冰壳下的液态水成为天体生物学最关注的重要目标之一。

## 怎么继续走

想看更大的冰卫星与它的磁场，去 mass.ganymede；想看拥有浓密大气的土卫六，去 mass.titan；想看木星系统的整体图景，去 space.jupiter；想看地球质量作为参照，去 mass.earth。
