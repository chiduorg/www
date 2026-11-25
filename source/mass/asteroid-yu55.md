---
id: mass.asteroid-yu55
title: 2005 YU55：6.7×10¹⁰ kg，雷达给出的三成误差
summary: >-
  小行星 2005 YU55 总质量约 6.7×10¹⁰ kg，不确定度约三成。它只在 2011
  年近距离飞掠地球时被雷达详细成像，没有探测器环绕，质量只能由雷达形状与密度约束联合推出。
dimension: mass
category: 行星与小天体
displayValue: 6.7×10¹⁰ kg
quantity:
  value: 67000000000
  unit: kg
  measure: 2005 YU55 总质量，由 2011 年飞掠期间 Goldstone 与 Arecibo 雷达形状模型与密度区间联合估计，不确定度约 ±30%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: false
  method: radar-shape-and-density
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.asteroid-toutatis
  - mass.asteroid-bennu
  - mass.asteroid-itokawa
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
  - title: JPL Small-Body Database
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: Radar observations of asteroid 2005 YU55
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
  - 2005 YU55
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 2005 YU55 总质量，由 2011 年飞掠期间 Goldstone 与 Arecibo 雷达形状模型与密度区间联合估计，不确定度约 ±30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 6.7×10¹⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 10.826
  position: 54.65
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
titleEn: 2005 YU55
---
## 这个读数是什么

小行星 2005 YU55 的总质量约为 6.7×10¹⁰ kg，约合六千七百万吨。[1] 它是一颗平均直径约 360 米的碳质近地小行星，2011 年 11 月从地球与月球之间掠过，最近距离约 32 万公里。这个数是整颗天体的总质量，只给两位有效数字。

## 口径与不确定度

本条采用总质量口径，不确定度约三成，属于 B 级推导值。[2] 它没有卫星，也没有探测器环绕，只在飞掠期间被雷达详细成像；质量由雷达形状模型给出的体积乘以密度区间得到。三成的误差主要来自密度与形状两端的假设，而不是某一次测量的统计误差。[1] 把它写成 6.700×10¹⁰ kg 是假精度。

## 怎么测出来的

2011 年飞掠期间，Goldstone 与 Arecibo 雷达连续多日做延迟—多普勒成像，重建出直径约 360 米、近乎球形的形状，并测出自转周期约 18 小时；此前的飞掠也留有雷达数据。[2] 体积由此确定，密度则受碳质分类与碎石堆孔隙率约束。严格说，这是雷达加密度假设的联合估计，没有动力学质量，因此只能给三成误差。[3]

## 量级位置

6.7×10¹⁰ kg 位于 B10 带的最下段。[3] 它与贝努几乎同一档，比糸川重约两倍，比图塔蒂斯轻约七百倍；与月球 7.35×10²² kg 相比小十二个数量级。按 360 米直径和这个质量反推，平均密度约 1.9 g/cm³，说明它同样是内部多孔的碎石堆。质量与直径不能互推，这一条正是例子。

## 怎么继续走

想看另一种雷达测质量的对象，去 mass.asteroid-toutatis；想看精度高得多的环绕探测结果，去 mass.asteroid-bennu 与 mass.asteroid-itokawa；想看这些小行星在太阳系中的位置，从 space.asteroid-belt 进入。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 6.7×10¹⁰ 千克，换算后是 6.7×10¹⁰ 千克；约为埃菲尔铁塔（7300 千克）的 9.18×10⁶ 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10¹⁰ 量级附近。

读图时先看量级，再看倍数：10¹⁰ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
