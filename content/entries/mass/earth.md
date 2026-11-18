---
id: mass.earth
title: 地球：5.972×10²⁴ kg，含大气与海洋的总质量
summary: >-
  地球总质量约 5.972×10²⁴ kg，明确包含大气与海洋。数值由人造卫星轨道跟踪与引力场模型拟合，相对不确定度约 1×10⁻³，主要受引力常数 G
  的精度限制。
dimension: mass
category: 行星
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
---
## 这个读数是什么

地球是太阳系第三颗行星，本条记录它的总质量约 5.972×10²⁴ kg。[1] 口径为天体总质量，明确包含大气与海洋，也包含地壳、地幔与地核，不包含暗物质。它约为月球质量的八十一倍。

## 口径与不确定度

总质量口径包含大气、海洋、冰盖与固体地球的全部物质。卫星轨道与引力场模型给出的相对不确定度约为 1×10⁻³，定为 A 级，正文保留四位有效数字。[2] 地球质量常被写成 5.97×10²⁴ kg 或 5.972×10²⁴ kg，两者的差别只在于保留的有效数字，不是两次不同的测量。

## 怎么测出来的

地球质量主要通过人造卫星的轨道跟踪与引力场系数来定：卫星受到的引力由地球质量与引力场分布决定，地面测站测量卫星的距离与速度变化，再拟合出地心引力常数 GM，除以引力常数 G 得到质量。[2] 这条链条的精度受 G 的测量精度限制，因此地球质量的相对不确定度比 GM 本身要大。[3] 这也是“地球多重”这类问题在不同资料里会出现细微差别的原因。

## 量级位置

5.972×10²⁴ kg 位于 B11 带的顶端，比水星重约十八倍，比冥王星重约四百六十倍。[1] 它是类地行星中质量最大的，也是本批 10 个天体里唯一以“含大气与海洋”为口径必须特别注明的对象。再往上就进入巨行星与恒星所在的 B12 及更高带。

## 怎么继续走

想看它的卫星与地月系统，去 mass.moon；想看更小的类地行星，去 mass.mercury；想看冰质矮行星，去 mass.pluto；想看地球的空间图景，去 space.earth；想看铁在地球核中的角色，从 elements.fe 进入元素轴。
