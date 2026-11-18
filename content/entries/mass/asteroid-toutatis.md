---
id: mass.asteroid-toutatis
title: 图塔蒂斯：5.0×10¹³ kg，只有两位有效数字的雷达质量
summary: >-
  图塔蒂斯（4179 Toutatis）总质量约 5.0×10¹³
  kg，不确定度约两成。它没有卫星也未被环绕探测，质量由雷达形状模型与密度约束联合给出，只能算 B 级推导值。
dimension: mass
category: 彗星与小行星
displayValue: 5.0×10¹³ kg
quantity:
  value: 50000000000000
  unit: kg
  measure: 4179 Toutatis 总质量，由地面雷达延迟—多普勒形状模型与密度区间联合估计，不确定度约 ±20%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: false
  method: radar-shape-and-density
  uncertainty:
    value: 0.2
    unit: relative
related:
  - mass.asteroid-yu55
  - mass.asteroid-eros
  - mass.asteroid-bennu
  - mass.comet-67p
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
  - title: JPL Small-Body Database
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: Radar imaging of near-Earth asteroids
    url: 'https://www.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
  - title: NASA Solar System Exploration
    url: 'https://solarsystem.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
tags:
  - 质量
  - 小行星
  - 图塔蒂斯
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 4179 Toutatis 总质量，由地面雷达延迟—多普勒形状模型与密度区间联合估计，不确定度约 ±20%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 20%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B10 小天体 · 5.0×10¹³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B10
  bandLabel: 小天体
  log10: 13.699
  position: 57.74
  color: '#b8a58a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

图塔蒂斯（4179 Toutatis）的总质量约为 5.0×10¹³ kg，约合五百亿吨。[1] 它是一颗形状极不规则、自转也不规则的近地小行星，长轴约 4.6 公里。这个数是整颗天体的总质量，只给两位有效数字，因为它的测定路径决定了精度上不去。

## 口径与不确定度

本条采用总质量口径，不确定度约两成，属于 B 级推导值。[2] 图塔蒂斯没有卫星，也没有探测器环绕过它，因此拿不到长期轨道跟踪给出的引力参数。质量只能由雷达形状模型给出体积，再乘上由光谱类型、热惯量与孔隙率约束的密度区间联合推出。这不是“精确称重”，把 5.0×10¹³ kg 读成 5.000×10¹³ kg 是假精度。

## 怎么测出来的

地面上 Arecibo 与 Goldstone 的雷达在多次近距离飞掠时做延迟—多普勒成像，重建出它由两块相连石块组成的形状；2012 年嫦娥二号以约 3.2 公里距离飞越，拍摄了高分辨率图像并修正了形状与自转模型。[2] 体积由此确定，密度则受碳质—石质分类与碎石堆孔隙率约束。严格说，这是雷达加飞越的联合估计，而不是动力学质量。[3]

## 量级位置

5.0×10¹³ kg 位于 B10 带的下段。[3] 它约为 67P 的五倍，约为糸川的一千四百倍，比爱神星轻约一百三十倍。与月球 7.35×10²² kg 相比，它轻约十亿倍。这个质量配上 4.6 公里的长度，说明它的密度只有约 2 g/cm³ 上下，内部相当松散。

## 怎么继续走

想看雷达如何给小天体成像，去 mass.asteroid-yu55，那是另一颗只靠雷达定质量的近地小行星；想看精度高得多的动力学质量，去 mass.asteroid-eros 与 mass.asteroid-bennu；想看彗核的同带读数，去 mass.comet-67p。
