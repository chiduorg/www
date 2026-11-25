---
id: mass.uranus
title: 天王星：8.681×10²⁵ kg，躺着自转的冰巨星
summary: >-
  天王星是太阳系第七颗行星，行星总质量约 8.681×10²⁵ kg，约为地球质量的 14.5 倍。质量由旅行者2号飞越跟踪与卫星轨道拟合得出，相对不确定度约
  0.02%。
dimension: mass
category: 行星与小天体
displayValue: 8.681×10²⁵ kg
quantity:
  value: 8.681e+25
  unit: kg
  measure: 行星总质量（含大气、冰幔与岩核，不含暗物质）；由旅行者2号飞越跟踪与卫星轨道拟合得出，相对不确定度约 0.02%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: Voyager 2 tracking and satellite orbits
  uncertainty:
    value: 0.0002
    unit: relative
related:
  - mass.neptune
  - mass.saturn
  - mass.earth
  - space.uranus
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
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
  - 行星
  - 天王星
  - 冰巨星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 行星总质量（含大气、冰幔与岩核，不含暗物质）；由旅行者2号飞越跟踪与卫星轨道拟合得出，相对不确定度约 0.02%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.02%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B12 巨行星与系外行星 · 8.681×10²⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B12
  bandLabel: 巨行星与系外行星
  log10: 25.939
  position: 70.9
  color: '#7fb5e6'
  scaleMin: -40
  scaleMax: 53
titleEn: Uranus
---
## 这个读数是什么

天王星是太阳系第七颗行星，也是第一颗用望远镜发现的行星，自转轴几乎躺倒在轨道面上。本条记录它的行星总质量约 8.681×10²⁵ kg。[1] 口径为行星总质量，包含大气、冰幔与岩核，不包含暗物质。它约为地球质量的 14.5 倍，在四颗巨行星中质量排第四。

## 口径与不确定度

总质量口径把大气、冰幔与岩石核心都算在内，但不含环与卫星。旅行者2号飞越跟踪与卫星轨道拟合给出的相对不确定度约 0.02%，定为 A 级。[2] 这个精度已经足以支持对冰巨星内部结构的比较，正文因此保留四位有效数字；再多的位数对读者没有意义。

## 怎么测出来的

1986 年旅行者2号飞越天王星，地面测控测量探测器受引力产生的速度变化，从而定出天王星的质量与低阶引力场。[2] 天王星的多颗卫星轨道也受行星质量支配，长期观测卫星的轨道周期与形状，可以独立校验这一结果。[3] 两条路径互相印证，使质量值非常稳定，也成为后续历表的基础。

## 量级位置

8.681×10²⁵ kg 位于 B12 带低端偏上，约为海王星质量的 85%，约为木星质量的 4.6%。[1] 天王星与海王星质量接近，常被合称为冰巨星，二者的内部结构模型也常放在一起比较。它比土星轻约 6.5 倍，比地球重约 14.5 倍，平均密度只有水的 1.3 倍左右。

## 怎么继续走

想看相邻的冰巨星，去 mass.neptune；想看质量更大的土星，去 mass.saturn；想看地球作为参照，去 mass.earth；想看天王星的空间图景，去 space.uranus。[3] 这条质量轴从行星延伸到恒星，天王星正处在冰巨星这一段的中间位置，往上是气态巨行星，往下是类地行星。


## 深读一：量值口径

本条的核心量值是 8.681e+25 kg，量的是行星总质量（含大气、冰幔与岩核，不含暗物质）；由旅行者2号飞越跟踪与卫星轨道拟合得出，相对不确定度约 0.02%。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：reference=质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。；scope=行星总质量（含大气、冰幔与岩核，不含暗物质）；由旅行者2号飞越跟踪与卫星轨道拟合得出，相对不确定度约 0.02%；precision=A 级；记录值。；massType=总质量；includesDarkMatter=否。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照海王星：1.024×10²⁶ kg，靠笔尖算出来的冰巨星（1.024e+26）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：不确定度 0.0002 relative。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
