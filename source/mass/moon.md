---
id: mass.moon
title: 月球：7.346×10²² kg，激光测月把误差压到万分之一
summary: >-
  月球是地球唯一的天然卫星，总质量约 7.346×10²² kg，约为地球的八十一分之一。激光测月与月球轨道器跟踪给出的相对不确定度约
  0.01%，是天体质量中测得最准的几个之一。
dimension: mass
category: 行星与小天体
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
  - time.moon-age
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
  - title: "Early formation of the Moon 4.51 billion years ago"
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5226643/"
    publisher: "Science Advances (Barboni et al.), via PubMed Central"
    accessed: '2026-11-24'
  - title: "Age of the Earth"
    url: "https://pubs.usgs.gov/gip/geotime/age.html"
    publisher: "United States Geological Survey (USGS)"
    accessed: '2026-11-24'
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
titleEn: Moon
---
## 这个读数是什么

月球是地球唯一的天然卫星，本条记录它的总质量约 7.346×10²² kg。[1] 口径为天体总质量，包含岩石、月壤与极区可能的水冰，不包含暗物质。它约为地球质量的八十一分之一。

## 口径与不确定度

总质量口径包含月球全部物质。激光测月与月球轨道器给出的相对不确定度约为 0.01%，定为 A 级，正文保留四位有效数字。[2] 月球的质量与地月距离、潮汐演化紧密相关：质心运动与激光反射器的测距数据共同约束了地月系统的质量比，精度远高于大多数小天体。月球的引力只有地球的六分之一，这也解释了它难以长期保有浓厚大气。

## 怎么测出来的

月球质量有三条独立路径：阿波罗与月球号留下的激光反射器支持激光测月，直接测量地月距离的变化；绕月探测器的轨道跟踪给出引力场系数 J2；地月共同质心的运动则由天文观测约束。[2] 三者互相校验，因此月球质量是目前测得很准的天体质量之一。[3] 这也说明“轨道动力学”是把引力场当尺子，而不是把体积当尺子。

## 量级位置

7.346×10²² kg 位于 B11 带中段，比冥王星重约五倍，比水星轻约 4.5 倍，比地球轻约八十一倍。[1] 在太阳系卫星里，它排在木卫三、土卫六、木卫四、木卫一之后，是第五大卫星。

## 激光测月把误差压到厘米

月球质量主要由轨道动力学给出，激光测月通过阿波罗与月球勘测轨道器留下的反射镜，测量地月距离到厘米级。质量与距离、轨道周期共同约束，误差约万分之一。正文的 7.346×10²² 千克是动力学质量，不是把月球放上秤。[1][S2]

## 怎么继续走

想看它的母行星与地月系统，去 mass.earth 与 space.moon；想看更大的岩石行星，去 mass.mercury；想看同为冰质世界的矮行星，去 mass.pluto。

## 为什么月球质量测得这么准

月球质量主要不是靠“看大小”估出来的，而是靠轨道动力学：激光测月测量地球与月球反射器之间的距离变化，轨道器跟踪给出引力场系数，地月共同质心运动约束质量比。[2][3] 这些数据把月球质量压到约 0.01% 的相对不确定度，远优于大多数小天体。

## 激光反射器怎样工作

阿波罗 11、14、15 号以及月球号探测器在月面留下了角反射器阵列。地面站向这些反射器发射激光，测量往返时间，再换算成地月距离；多次测距还能得到月球轨道的细微变化。[2][3] 角反射器把入射光按原方向返回，使回波强度足以被探测。月球质量与地月距离的约束，正是从这类长期测距和轨道跟踪中来的。

## 质量与重力不是一回事

月球质量约 7.346×10²² 千克，表面重力却只有地球的约六分之一，因为重力还取决于半径。若只知道质量、不知道半径，就不能推出表面重力；反过来，仅凭重力也不能唯一确定质量。[1][2] 这也是行星科学里总把质量、半径和轨道参数一起报告的原因。

## 五轴对照

在质量轴，月球是 10²² 千克级卫星；在空间轴，它的直径约 3,475 公里；在时间轴，月球年龄与地月潮汐演化相关；在温度轴，月球表面昼夜温差极大。质量与直径一起决定表面重力，但不能用“看起来小”推断“质量小”。[1][2]

## 延伸核对

补充的来源 [4]（Science Advances (Barboni et al.), via PubMed Central）、[5]（United States Geological Survey (USGS)） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
