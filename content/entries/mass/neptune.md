---
id: mass.neptune
title: 海王星：1.024×10²⁶ kg，靠笔尖算出来的冰巨星
summary: >-
  海王星是太阳系第八颗行星，行星总质量约 1.024×10²⁶ kg，约为地球质量的 17.1 倍。质量由旅行者2号跟踪与卫星轨道拟合得出，相对不确定度约
  0.02%。
dimension: mass
category: 行星
displayValue: 1.024×10²⁶ kg
quantity:
  value: 1.024e+26
  unit: kg
  measure: 行星总质量（含大气、冰幔与岩核，不含暗物质）；由旅行者2号跟踪与卫星轨道评定，相对不确定度约 0.02%
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
  - mass.uranus
  - mass.saturn
  - mass.earth
  - space.neptune
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
  - 行星
  - 海王星
  - 冰巨星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 行星总质量（含大气、冰幔与岩核，不含暗物质）；由旅行者2号跟踪与卫星轨道评定，相对不确定度约 0.02%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.02%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B12 巨行星与系外行星 · 1.024×10²⁶ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B12
  bandLabel: 巨行星与系外行星
  log10: 26.01
  position: 70.98
  color: '#7fb5e6'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

海王星是太阳系第八颗行星，也是距太阳最远的行星，先由计算预言、后被望远镜证实。本条记录它的行星总质量约 1.024×10²⁶ kg。[1] 口径为行星总质量，包含大气、冰幔与岩核，不包含暗物质。它约为地球质量的 17.1 倍，是四颗巨行星中质量第三大的天体。

## 口径与不确定度

总质量口径包含大气、冰幔与岩石核心，不把卫星算进去。旅行者2号跟踪与卫星轨道拟合给出的相对不确定度约 0.02%，定为 A 级。[2] 与天王星一样，这个数值来自同一套行星历表体系，两者的比较因此具有一致的基准，也便于放在同一张图上排序。

## 怎么测出来的

1846 年海王星是先由天王星轨道的异常推算、再被观测证实的行星。现代质量值主要来自 1989 年旅行者2号飞越时的跟踪测量，探测器受引力减速的量直接反映行星质量。[2] 海卫一等卫星的轨道也为质量提供了独立约束，长期观测把结果稳定在 0.02% 的水平。[3] 这种先算后看的历史，使海王星成为天体力学最著名的成功案例之一。

## 量级位置

1.024×10²⁶ kg 位于 B12 带中低段，约为天王星质量的 1.18 倍，约为土星质量的 18%，约为木星质量的 5.4%。[1] 海王星与天王星质量相近而密度略高，是冰巨星家族中较重的一员。再往上就进入土星与木星所在的量级，质量要提高一个数量级左右。

## 怎么继续走

想看质量相近的天王星，去 mass.uranus；想看更大的土星，去 mass.saturn；想看地球参照，去 mass.earth；想看海王星的空间图景，去 space.neptune。[3] 这一带已接近行星质量的上限，再往上是褐矮星与恒星；往回看，则依次是天王星、土星与木星。整条质量轴在这里收束。
