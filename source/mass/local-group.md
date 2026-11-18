---
id: mass.local-group
title: 本星系群：约 4.6×10⁴² kg，银河系所在的引力系统
summary: >-
  本星系群由银河系、仙女座星系及数十个矮星系组成，总质量约 4.6×10⁴² kg，折合约 2.3×10¹²
  个太阳质量，口径包含暗物质。数值由成员运动学估算，相对不确定度约 40%，属量级估算。
dimension: mass
category: 星系群
displayValue: 4.6×10⁴² kg
quantity:
  value: 4.6e+42
  unit: kg
  measure: 本星系群总质量（含暗物质，约 2.3×10¹² 太阳质量）；由成员星系运动学估算，相对不确定度约 40%
  approximate: true
grade: C
mass:
  type: total
  includesDarkMatter: true
  method: member kinematics
  uncertainty:
    value: 0.4
    unit: relative
related:
  - mass.milky-way
  - mass.andromeda
  - mass.large-magellanic-cloud
  - space.milky-way
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
  - title: ESA Science
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 星系群
  - 本星系群
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 本星系群总质量（含暗物质，约 2.3×10¹² 太阳质量）；由成员星系运动学估算，相对不确定度约 40%
  precision: C 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 40%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 4.6×10⁴² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 42.663
  position: 88.88
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

本星系群是银河系所在的星系群，成员约八十个，尺度约一千万光年，本条记录它的总质量约 4.6×10⁴² kg，折合约 2.3×10¹² 个太阳质量。[1] 口径包含暗物质，是把整群成员绑在一起的引力质量。成员星系的恒星质量加起来约为一成，其余是暗物质与气体。[2] 它也是研究星系形成与并合历史最直接的样本。

## 口径与不确定度

星系群没有明确边界，总质量随所选半径变化，这是它与单一天体最大的差别。[2] 本条采用包含暗物质的引力质量口径。相对不确定度约 40%，因为成员数目、轨道各向异性与外围示踪都只能粗略约束，结果属量级估算，故标近似、定 C 级。[3]

## 怎么测出来的

主要靠成员星系的视向速度：把各成员相对本群质心的速度与位置代入维里定理，估出总引力质量。银河系与仙女座的接近速度、以及它们卫星的运动，也能独立约束质量。[1] 由于成员少、分布不匀，维里估计只能给出量级，不能给精确值。[3]

## 量级位置

4.6×10⁴² kg 位于 B15 带下段偏上，约为银河系与仙女座各自总质量的一点五倍。[1] 它比单个星系重一个台阶，却比室女座星系团轻约五百倍。星系群正好是星系与星系团之间的过渡台阶，本星系群就是最贴近我们的样本。这个台阶把“星系”与“星系团”连了起来。

## 怎么继续走

想看两个主要成员，去 mass.milky-way 与 mass.andromeda；想看它的卫星星系样本，去 mass.large-magellanic-cloud；想看它所在的空间结构，去 space.milky-way。[2] 再往上一个量级，去 mass.virgo-cluster，看真正的星系团是什么重量。这样就把银河系从“单星系”放回了它所属的引力系统。这一步很关键。
