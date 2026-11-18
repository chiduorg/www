---
id: mass.jupiter
title: 木星：1.898×10²⁷ kg，太阳系最重的行星
summary: >-
  木星是太阳系质量最大的行星，行星总质量约 1.898×10²⁷ kg，约为地球质量的 318 倍。质量由航天器跟踪与伽利略卫星轨道拟合得出，相对不确定度约
  0.02%。
dimension: mass
category: 行星
displayValue: 1.898×10²⁷ kg
quantity:
  value: 1.898e+27
  unit: kg
  measure: 行星总质量（含大气与内核，不含暗物质）；由航天器跟踪与伽利略卫星轨道拟合得出，相对不确定度约 0.02%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft tracking and Galilean satellite orbits
  uncertainty:
    value: 0.0002
    unit: relative
related:
  - mass.saturn
  - mass.uranus
  - mass.earth
  - space.jupiter
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
  - 木星
  - 气态巨行星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 行星总质量（含大气与内核，不含暗物质）；由航天器跟踪与伽利略卫星轨道拟合得出，相对不确定度约 0.02%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.02%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B12 巨行星与系外行星 · 1.898×10²⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B12
  bandLabel: 巨行星与系外行星
  log10: 27.278
  position: 72.34
  color: '#7fb5e6'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

木星是太阳系第五颗行星，也是太阳系中质量最大的行星，质量超过其余七颗行星的总和。本条记录它的行星总质量约 1.898×10²⁷ kg。[1] 口径为行星总质量，包含大气、内部与内核，不包含暗物质。它约为地球质量的 318 倍，是理解巨行星的基准天体。

## 口径与不确定度

总质量口径包含大气、液态与金属氢内部以及可能的岩核，不把卫星与环计入主质量。[2] 航天器跟踪与伽利略卫星轨道拟合给出的相对不确定度约 0.02%，定为 A 级。木星质量还常被用作衡量其他天体质量的单位，在系外行星研究中频繁出现，例如木星质量这一口径。

## 怎么测出来的

先驱者、旅行者、伽利略、朱诺等探测器先后飞越或环绕木星，地面测控测量探测器轨道受引力产生的偏折与加速，从而拟合出木星质量与引力场。[2] 木卫一至木卫四的轨道周期与形状同样受木星质量支配，长期观测可独立校验。[3] 两条路径给出的结果高度一致，使木星质量成为定得最准的天体质量之一。

## 量级位置

1.898×10²⁷ kg 位于 B12 带的顶端，约为土星质量的 3.3 倍，约为地球质量的 318 倍。[1] 它约为褐矮星质量下限的十三分之一，但仍是货真价实的行星。再往上，质量就进入褐矮星与低质量恒星所在的量级，那条界线大约在十三个木星质量附近。

## 怎么继续走

想看次重的土星，去 mass.saturn；想看冰巨星，去 mass.uranus；想看地球参照，去 mass.earth；想看木星系统的空间图景，去 space.jupiter。[3] 从木星再往上一小步，就跨到了褐矮星与恒星的领域，这也是行星质量轴的自然终点，再往上便不再属于行星，而是褐矮星的世界。
