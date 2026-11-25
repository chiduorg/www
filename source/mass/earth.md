---
id: mass.earth
title: 地球：5.972×10²⁴ kg，含大气与海洋的总质量
summary: >-
  地球总质量约 5.972×10²⁴ kg，明确包含大气与海洋。数值由人造卫星轨道跟踪与引力场模型拟合，相对不确定度约 1×10⁻³，主要受引力常数 G
  的精度限制。
dimension: mass
category: 行星与小天体
displayValue: 5.972×10²⁴ kg
quantity:
  value: 5.972e+24
  unit: kg
  measure: 地球总质量（含大气与海洋，不含暗物质）；由人造卫星轨道跟踪与引力场模型拟合得出，相对不确定度约 1×10⁻³
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: satellite orbits and gravity-field modeling
  uncertainty:
    value: 0.001
    unit: relative
related:
  - mass.moon
  - mass.mercury
  - mass.pluto
  - space.earth
  - elements.fe
  - time.earth-age
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
  - title: "Is the Earth round?"
    url: "https://oceanservice.noaa.gov/facts/earth-round.html"
    publisher: "NOAA / National Ocean Service"
    accessed: '2026-11-24'
  - title: "PubChem Element Summary: Iron"
    url: "https://pubchem.ncbi.nlm.nih.gov/element/26"
    publisher: "U.S. National Library of Medicine"
    accessed: '2026-11-24'
tags:
  - 质量
  - 行星
  - 地球
  - 类地行星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 地球总质量（含大气与海洋，不含暗物质）；由人造卫星轨道跟踪与引力场模型拟合得出，相对不确定度约 1×10⁻³
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.1%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 5.972×10²⁴ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 24.776
  position: 69.65
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
titleEn: Earth
---
## 这个读数是什么

地球是太阳系第三颗行星，本条记录它的总质量约 5.972×10²⁴ kg。[1] 口径为天体总质量，明确包含大气与海洋，也包含地壳、地幔与地核，不包含暗物质。它约为月球质量的八十一倍。

## 口径与不确定度

总质量口径包含大气、海洋、冰盖与固体地球的全部物质。卫星轨道与引力场模型给出的相对不确定度约为 1×10⁻³，定为 A 级，正文保留四位有效数字。[2] 地球质量常被写成 5.97×10²⁴ kg 或 5.972×10²⁴ kg，两者的差别只在于保留的有效数字，不是两次不同的测量。

## 怎么测出来的

地球质量主要通过人造卫星的轨道跟踪与引力场系数来定：卫星受到的引力由地球质量与引力场分布决定，地面测站测量卫星的距离与速度变化，再拟合出地心引力常数 GM，除以引力常数 G 得到质量。[2] 这条链条的精度受 G 的测量精度限制，因此地球质量的相对不确定度比 GM 本身要大。[3] 这也是“地球多重”这类问题在不同资料里会出现细微差别的原因。

## 量级位置

5.972×10²⁴ kg 位于 B11 带的顶端，比水星重约十八倍，比冥王星重约四百六十倍。[1] 它是类地行星中质量最大的，也是本批 10 个天体里唯一以“含大气与海洋”为口径必须特别注明的对象。再往上就进入巨行星与恒星所在的 B12 及更高带。

## 总质量包含大气与海洋

地球质量 5.972×10²⁴ 千克包含固体、海洋与大气；大气只有约 5×10¹⁸ 千克，海洋约 1.4×10²¹ 千克，两者合计不到总质量的 0.03%。质量主要由地幔与地核贡献，地壳只是薄薄一层。[1][S2]

## 怎么继续走

想看它的卫星与地月系统，去 mass.moon；想看更小的类地行星，去 mass.mercury；想看冰质矮行星，去 mass.pluto；想看地球的空间图景，去 space.earth；想看铁在地球核中的角色，从 elements.fe 进入元素轴。


## 这个数值的误差账本

地球质量约 5.972×10²⁴ kg，由重力、轨道与卫星测距组合推算；它包含大气、海洋、地壳、地幔与地核的总质量。不同模型给出的值在 10¹⁷ kg 量级内一致。把地球质量当成“岩石质量”会忽略大气与海洋，虽然它们占比很小。

## 换一个尺度看它

地球质量约为月球的 81 倍，约为太阳的 1/333,000。若把地球缩成 1 千克，月球约 12 克，太阳约 333 吨。这个比例说明太阳主导太阳系引力，而地球质量足以塑造月球轨道与地月共同质心。

## 误差账本：0.1% 不是“精确到个位”

地球质量的相对不确定度约 1×10⁻³，主要受引力常数 G 的精度限制。卫星轨道与引力场模型给出的是 GM，除以 G 才得到质量；G 的不确定度会直接进入结果。[2][3] 5.972×10²⁴ kg 保留四位有效数字，不表示可以精确到 10²⁰ kg。不同资料写成 5.97 或 5.972，是有效数字取舍，不是两次测量。

## 五轴对照

在质量轴，地球是 10²⁴ kg 的岩石行星；在空间轴，平均直径约 12,742 公里；在时间轴，年龄约 45.4 亿年；在温度轴，海表、大气与内部各有不同温区。质量与半径一起决定重力，年龄与热演化一起解释内部结构；四个量不能互相替代。[1][2][3]

## 延伸核对

补充的来源 [4]（NOAA / National Ocean Service）、[5]（U.S. National Library of Medicine） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
