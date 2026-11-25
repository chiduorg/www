---
id: mass.saturn
title: 土星：5.683×10²⁶ kg，带着环系的巨行星
summary: >-
  土星是太阳系第六颗行星，行星总质量约 5.683×10²⁶ kg，约为地球质量的 95 倍。质量由卡西尼号轨道跟踪与卫星轨道拟合得出，相对不确定度约
  0.02%。
dimension: mass
category: 行星与小天体
displayValue: 5.683×10²⁶ kg
quantity:
  value: 5.683e+26
  unit: kg
  measure: 行星总质量（含环系，不含暗物质）；由卡西尼号轨道跟踪与卫星轨道拟合得出，相对不确定度约 0.02%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: Cassini tracking and satellite orbits
  uncertainty:
    value: 0.0002
    unit: relative
related:
  - mass.jupiter
  - mass.uranus
  - mass.earth
  - space.saturn
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
  - 土星
  - 气态巨行星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 行星总质量（含环系，不含暗物质）；由卡西尼号轨道跟踪与卫星轨道拟合得出，相对不确定度约 0.02%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.02%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B12 巨行星与系外行星 · 5.683×10²⁶ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B12
  bandLabel: 巨行星与系外行星
  log10: 26.755
  position: 71.78
  color: '#7fb5e6'
  scaleMin: -40
  scaleMax: 53
titleEn: Saturn
---
## 这个读数是什么

土星是太阳系第六颗行星，以壮观的环系闻名，也是密度最低的行星。本条记录它的行星总质量约 5.683×10²⁶ kg。[1] 口径为行星总质量，包含大气、内部与环系物质，不包含暗物质。它约为地球质量的 95 倍，在太阳系行星中质量仅次于木星。

## 口径与不确定度

总质量口径包含大气、内部与环系，环的质量占比很小，但已计入。卡西尼号轨道跟踪与卫星轨道拟合给出的相对不确定度约 0.02%，定为 A 级。[2] 土星没有固体表面，质量只能通过引力作用间接测定，这也是巨行星质量测量的共同特点；密度则要结合半径才能推算。

## 怎么测出来的

卡西尼号在 2004 至 2017 年环绕土星，地面测控通过无线电跟踪测量探测器的加速度，进而拟合土星质量与引力场。[2] 土卫六、土卫二等卫星的轨道周期同样受土星质量支配，构成独立校验。[3] 卡西尼末期的近距离穿越环与行星之间，进一步提高了引力场精度，也让环的质量估计更可靠。

## 量级位置

5.683×10²⁶ kg 位于 B12 带中段，约为木星质量的三成，约为天王星质量的 6.5 倍，约为海王星质量的 5.6 倍。[1] 土星与木星同属气态巨行星，但质量只有后者的约 30%，内部金属氢层也更薄。再往上是木星，再往下是冰巨星，土星正好夹在两者之间。

## 怎么继续走

想看更重的木星，去 mass.jupiter；想看更轻的冰巨星，去 mass.uranus；想看地球参照，去 mass.earth；想看土星系统的图景，去 space.saturn。[3] 它的质量约为地球的九十五倍，是理解气态巨行星的关键一站，往上一级就是木星，两者相差约三倍，土星也因此常与木星成对讨论。
