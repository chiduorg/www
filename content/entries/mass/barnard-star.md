---
id: mass.barnard-star
title: 巴纳德星：2.86×10²⁹ kg，自行最快的红矮星
summary: 巴纳德星质量约 2.86×10²⁹ kg，相当于 0.144 太阳质量。数值由质光关系定标，并用干涉测量得到的半径交叉检验，相对不确定度约 5%。
dimension: mass
category: 恒星
displayValue: 2.86×10²⁹ kg
quantity:
  value: 2.86e+29
  unit: kg
  measure: 恒星质量（约 0.144 太阳质量）；由质光关系定标，并用干涉测量所得半径约束，相对不确定度约 5%
  approximate: false
grade: B
mass:
  type: stellar
  includesDarkMatter: false
  method: mass-luminosity relation and interferometry
  uncertainty:
    value: 0.05
    unit: relative
related:
  - mass.proxima-centauri
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
  - 巴纳德星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 恒星质量（约 0.144 太阳质量）；由质光关系定标，并用干涉测量所得半径约束，相对不确定度约 5%
  precision: B 级；记录值。
  massType: 恒星质量
  includesDarkMatter: 否
  uncertainty: 相对约 5%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 2.86×10²⁹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 29.456
  position: 74.68
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

巴纳德星是蛇夫座的一颗 M4 型红矮星，距离约 5.96 光年，是离太阳最近的恒星之一。它的质量为 2.86×10²⁹ kg，约 0.144 太阳质量，只有太阳的七分之一。[1] 它的自行约每年 10.3 角秒，是已知自行最大的恒星，它是一颗单星，没有可测轨道的伴星。

## 口径与不确定度

口径为恒星质量，指这颗恒星的全部物质，不包含暗物质。[2] 质量由质光关系定标，并用干涉测量得到的角直径与已知距离换算半径作为约束，相对不确定度约 5%，定为 B 级。红矮星数量最多，却很少有可测轨道的伴星，因此质光关系是主要工具。这类恒星的质量范围很窄，5% 已算相当好的精度。

## 怎么测出来的

质光关系把恒星的光度与质量联系起来：测得绝对光度，就能反推质量，但关系式本身由双星样本定标，带有系统误差。[2] 光学干涉把巴纳德星的角直径测到百分之一角秒量级，结合距离得到物理半径，再用半径与质量的关系交叉检验。[3] 两条独立链条给出相近结果，才把不确定度压到 5% 左右。

## 量级位置

2.86×10²⁹ kg 位于 B13 带的下段，约为太阳的七分之一、木星的 150 倍。[1] 它质量虽小，却已足够点燃氢聚变，属于主序星；再往下到 0.08 太阳质量附近，恒星就退化为褐矮星。它的光度只有太阳的万分之四左右，肉眼完全不可见，只能在红外波段仔细寻找。

## 怎么继续走

想看同样处在红矮星段的邻居，去 mass.proxima-centauri；想看质量更低的褐矮星，去 mass.teide-1；想看太阳作为对照，去 mass.sun；想看它在空间轴上的图景，去 space.proxima-centauri。质量阶梯在这个区间条目稀疏，红矮星与褐矮星的过渡正是靠它们衔接。
