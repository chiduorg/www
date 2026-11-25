---
id: mass.asteroid-itokawa
title: 糸川：3.51×10¹⁰ kg，隼鸟号测出的碎石堆
summary: >-
  糸川（25143 Itokawa）总质量 3.51×10¹⁰ kg，由隼鸟号的近距离轨道跟踪与形状模型联合测定。它长约 535 米，密度约 1900
  kg/m³，是首颗被采样返回的小行星。
dimension: mass
category: 行星与小天体
displayValue: 3.51×10¹⁰ kg
quantity:
  value: 35100000000
  unit: kg
  measure: 25143 Itokawa 总质量，由隼鸟号近距离悬停期间的无线电跟踪与引力场拟合得到，相对不确定度约 3%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft-tracking
  uncertainty:
    value: 0.03
    unit: relative
related:
  - mass.asteroid-bennu
  - mass.asteroid-eros
  - mass.comet-67p
  - space.asteroid-belt
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
  - title: Hayabusa mission to asteroid Itokawa
    url: 'https://www.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
  - title: JPL Small-Body Database
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: NASA Solar System Exploration
    url: 'https://solarsystem.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
tags:
  - 质量
  - 小行星
  - 糸川
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 25143 Itokawa 总质量，由隼鸟号近距离悬停期间的无线电跟踪与引力场拟合得到，相对不确定度约 3%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 3%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 3.51×10¹⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 10.545
  position: 54.35
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
titleEn: Itokawa
---
## 这个读数是什么

糸川（25143 Itokawa）的总质量是 3.51×10¹⁰ kg，约合三千五百万吨。[1] 它是一颗长约 535 米、形状像海参的近地小行星，也是隼鸟号采样返回的目标。这个数是整颗天体的总质量，包含两块相连的碎石主体，不包含被太阳风与微撞击剥离、已经离开的少量物质。

## 口径与不确定度

本条采用总质量口径，相对不确定度约百分之三，定为 A 级。[2] 糸川的引力极弱，探测器的轨道扰动很小，所以精度不如爱神星那样优于百分之一；但它仍是直接由引力测出的数，不是体积乘密度的估算。正文提到的约 1900 kg/m³ 平均密度同样是派生量，用来说明内部结构，不参与质量口径。

## 怎么测出来的

隼鸟号在 2005 年两次近距离停留，最近时距表面只有几公里，无线电测距与光学导航记录到探测器被糸川引力拉出的加速度；扣除太阳光压与热辐射后拟合出 GM，再得到质量。[2] 同时，激光测距仪与相机给出的形状模型确定了体积，质量除以体积得到密度。[3] 方法是航天器跟踪加轨道拟合，近距离悬停使引力信号强到可以测量。

## 量级位置

3.51×10¹⁰ kg 位于 B10 带的最低段。[3] 它约为贝努的一半，比图塔蒂斯轻约一千四百倍，比爱神星轻约十九万倍；与月球 7.35×10²² kg 相比小十二个数量级。这个质量对应的表面重力只有地球的约百万分之四，人轻轻一蹬就能离开表面。

## 怎么继续走

想看它的形状、表面碎石与样品，去空间轴的 space.asteroid-belt 一带；想比较另一颗采样返回目标，去 mass.asteroid-bennu；想看隼鸟二号的采样对象龙宫，去 space.ryugu。
