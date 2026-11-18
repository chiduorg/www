---
id: mass.moon
title: 月球：7.346×10²² kg，激光测月把误差压到万分之一
summary: >-
  月球是地球唯一的天然卫星，总质量约 7.346×10²² kg，约为地球的八十一分之一。激光测月与月球轨道器跟踪给出的相对不确定度约
  0.01%，是天体质量中测得最准的几个之一。
dimension: mass
category: 卫星
displayValue: 7.346×10²² kg
quantity:
  value: 7.346e+22
  unit: kg
  measure: 月球总质量（含岩石、月壤与极区水冰，不含暗物质）；由激光测月与月球轨道器跟踪综合，相对不确定度约 0.01%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: lunar laser ranging and orbiter tracking
  uncertainty:
    value: 0.0001
    unit: relative
related:
  - mass.earth
  - space.moon
  - mass.mercury
  - mass.pluto
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
  - 卫星
  - 月球
  - 地月系统
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 月球总质量（含岩石、月壤与极区水冰，不含暗物质）；由激光测月与月球轨道器跟踪综合，相对不确定度约 0.01%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.01%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 7.346×10²² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 22.866
  position: 67.6
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

月球是地球唯一的天然卫星，本条记录它的总质量约 7.346×10²² kg。[1] 口径为天体总质量，包含岩石、月壤与极区可能的水冰，不包含暗物质。它约为地球质量的八十一分之一。

## 口径与不确定度

总质量口径包含月球全部物质。激光测月与月球轨道器给出的相对不确定度约为 0.01%，定为 A 级，正文保留四位有效数字。[2] 月球的质量与地月距离、潮汐演化紧密相关：质心运动与激光反射器的测距数据共同约束了地月系统的质量比，精度远高于大多数小天体。月球的引力只有地球的六分之一，这也解释了它难以长期保有浓厚大气。

## 怎么测出来的

月球质量有三条独立路径：阿波罗与月球号留下的激光反射器支持激光测月，直接测量地月距离的变化；绕月探测器的轨道跟踪给出引力场系数 J2；地月共同质心的运动则由天文观测约束。[2] 三者互相校验，因此月球质量是目前测得很准的天体质量之一。[3] 这也说明“轨道动力学”是把引力场当尺子，而不是把体积当尺子。

## 量级位置

7.346×10²² kg 位于 B11 带中段，比冥王星重约五倍，比水星轻约 4.5 倍，比地球轻约八十一倍。[1] 在太阳系卫星里，它排在木卫三、土卫六、木卫四、木卫一之后，是第五大卫星。

## 怎么继续走

想看它的母行星与地月系统，去 mass.earth 与 space.moon；想看更大的岩石行星，去 mass.mercury；想看同为冰质世界的矮行星，去 mass.pluto。
