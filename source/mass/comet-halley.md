---
id: mass.comet-halley
title: 哈雷彗星：2.2×10¹⁴ kg，只能给两位有效数字
summary: >-
  哈雷彗星总质量约 2.2×10¹⁴ kg，不确定度约一成。它由 Giotto 飞越、非引力加速度与长期轨道观测综合约束得到，属于 B
  级推导值，不能读成精确到个位的数。
dimension: mass
category: 行星与小天体
displayValue: 2.2×10¹⁴ kg
quantity:
  value: 220000000000000
  unit: kg
  measure: 1P/哈雷彗星彗核总质量，由 Giotto 飞越轨道偏折、尘埃产出率与轨道非引力加速度综合约束，不确定度约 ±10%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: false
  method: flyby-and-orbit-fit
  uncertainty:
    value: 0.1
    unit: relative
related:
  - mass.comet-67p
  - mass.asteroid-eros
  - mass.asteroid-toutatis
  - space.halley
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
  - title: Giotto and comet Halley
    url: 'https://www.esa.int/'
    publisher: European Space Agency
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
  - 彗星
  - 哈雷彗星
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 1P/哈雷彗星彗核总质量，由 Giotto 飞越轨道偏折、尘埃产出率与轨道非引力加速度综合约束，不确定度约 ±10%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 10%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B10 小天体 · 2.2×10¹⁴ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B10
  bandLabel: 小天体
  log10: 14.342
  position: 58.43
  color: '#b8a58a'
  scaleMin: -40
  scaleMax: 53
titleEn: Halley's Comet
---
## 这个读数是什么

哈雷彗星的总质量约为 2.2×10¹⁴ kg，也就是约 2200 亿吨。[1] 这是彗核的总质量，不是彗发或尘埃尾的质量。哈雷是短周期彗星里最著名的一颗，但它的质量从未被“精确称过”：没有任何探测器环绕过它，只有 1986 年 Giotto 的一次高速飞越。因此这个数只给两位有效数字。

## 口径与不确定度

本条采用总质量口径，不确定度约一成，属于 B 级推导值。[2] 把它写成 2.200×10¹⁴ kg 是假精度：不同方法给出的结果在百分之几到十几之间浮动。[1] 本条不区分“彗核质量”和“整个彗星系统质量”，因为尘埃尾的质量相对彗核极小。这里的 ±10% 是方法差异与模型假设合起来的量级，不是某一次测量的统计误差。

## 怎么测出来的

1986 年 Giotto 以约 68 公里每秒掠过彗核，最近距离约 596 公里，飞越时的轨道偏折与尘埃撞击计数提供了质量与产出率的约束。[2] 另一条线索是彗星轨道的非引力加速度：彗核喷出的气体和尘埃带走动量，使轨道周期缓慢漂移，用长期观测反推喷发总量，再结合形状模型估计核的质量。两条线索都不独立于密度假设，所以只能给到一成。

## 量级位置

2.2×10¹⁴ kg 位于 B10 带的中段。[3] 它约为 67P 的二十二倍，约为爱神星的三十分之一，比图塔蒂斯重约四倍。与月球 7.35×10²² kg 相比，它轻了约三亿倍。这个位置说明彗核是太阳系小天体里“比上不足、比下有余”的一档。

## 怎么继续走

想看这颗彗星的轨道与观测史，去空间轴的 space.halley；想比较同带彗星的质量，去 mass.comet-67p；想看被探测器长期环绕、质量测得准得多的小天体，去 mass.asteroid-eros 与 mass.asteroid-bennu。
