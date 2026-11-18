---
id: mass.proxima-centauri
title: 比邻星：2.43×10²⁹ kg，离太阳最近的恒星
summary: 比邻星质量约 2.43×10²⁹ kg，相当于 0.122 太阳质量。数值由质光关系定标，并用天体测量给出的距离与轨道信息约束，相对不确定度约 5%。
dimension: mass
category: 恒星
displayValue: 2.43×10²⁹ kg
quantity:
  value: 2.43e+29
  unit: kg
  measure: 恒星质量（约 0.122 太阳质量）；由质光关系定标，并用天体测量所得距离与轨道信息约束，相对不确定度约 5%
  approximate: false
grade: B
mass:
  type: stellar
  includesDarkMatter: false
  method: mass-luminosity relation and astrometry
  uncertainty:
    value: 0.05
    unit: relative
related:
  - mass.barnard-star
  - mass.teide-1
  - mass.sun
  - space.proxima-centauri
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
  - title: IAU 2015 Resolution B3
    url: 'https://www.iau.org/'
    publisher: International Astronomical Union
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: SIMBAD Astronomical Database
    url: 'https://simbad.cds.unistra.fr/'
    publisher: CDS
    accessed: '2026-11-09'
tags:
  - 质量
  - 恒星
  - 红矮星
  - 比邻星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 恒星质量（约 0.122 太阳质量）；由质光关系定标，并用天体测量所得距离与轨道信息约束，相对不确定度约 5%
  precision: B 级；记录值。
  massType: 恒星质量
  includesDarkMatter: 否
  uncertainty: 相对约 5%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 2.43×10²⁹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 29.386
  position: 74.61
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

比邻星是半人马座 α 三合星系统中最小的一颗，距离约 4.24 光年，是离太阳最近的恒星。[1] 它的质量约 2.43×10²⁹ kg，即 0.122 太阳质量，半径只有太阳的七分之一左右，表面温度约三千开尔文。它是红矮星，也是离太阳最近的系外行星系统之一的宿主星。

## 口径与不确定度

本条记录恒星质量，包含这颗恒星的全部物质，不包含暗物质。[2] 数值由质光关系定标，并用天体测量给出的距离与轨道信息约束，相对不确定度约 5%，定为 B 级。它与半人马座 α AB 的引力绑定很弱，轨道周期长达数十万年，轨道法在这里帮助有限，因此它的质量更多依赖间接定标，而不是几何轨道。

## 怎么测出来的

主要手段是质光关系：测得比邻星在可见光与红外波段的绝对亮度，再代入由双星样本定标的关系式。[2] 干涉测量给出角直径，结合视差得到半径，可用来检验质量是否与恒星结构模型自洽。[3] 此外，它对半人马座 α AB 的相对运动也被用来估计整个系统的引力质量，作为独立旁证，三种方法互相印证。

## 量级位置

2.43×10²⁹ kg 在 B13 带下端，约为太阳的八分之一、木星的 128 倍。[1] 它正好处在红矮星质量范围的中间：既能稳定燃烧氢，又小到对流贯穿整个恒星，磁场活动格外强烈。它的宜居带很窄，行星必须在很近的距离上公转。

## 怎么继续走

想看同类的另一颗红矮星，去 mass.barnard-star；想看质量门槛以下的褐矮星，去 mass.teide-1；想看太阳作为对照，去 mass.sun；想看它在空间轴上的图景，去 space.proxima-centauri。若质量再低一点，它就跨不过氢燃烧的门槛，红矮星与褐矮星的边界正在这里。
