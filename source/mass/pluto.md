---
id: mass.pluto
title: 冥王星：1.303×10²² kg，New Horizons 飞掠定下的矮行星
summary: >-
  冥王星是柯伊伯带最著名的矮行星，总质量约 1.303×10²² kg，约为月球的五分之一。New Horizons 飞掠与冥卫一轨道数据把相对不确定度压到约
  0.5%。
dimension: mass
category: 行星与小天体
displayValue: 1.303×10²² kg
quantity:
  value: 1.303e+22
  unit: kg
  measure: 冥王星总质量（含岩石与冰质外壳，不含暗物质）；由 New Horizons 飞掠跟踪与冥卫一轨道反演得出，相对不确定度约 0.5%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft flyby tracking and satellite-orbit dynamics
  uncertainty:
    value: 0.005
    unit: relative
related:
  - mass.moon
  - mass.ceres
  - space.pluto
  - mass.earth
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
  - 矮行星
  - 冥王星
  - 柯伊伯带
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 冥王星总质量（含岩石与冰质外壳，不含暗物质）；由 New Horizons 飞掠跟踪与冥卫一轨道反演得出，相对不确定度约 0.5%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.5%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 1.303×10²² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 22.115
  position: 66.79
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
titleEn: Pluto
---
## 这个读数是什么

冥王星是柯伊伯带里最著名的矮行星，本条记录它的总质量约 1.303×10²² kg。[1] 口径为天体总质量，包含岩石与冰质外壳，不包含暗物质。它的质量只有月球的约五分之一，比木卫二轻约 3.7 倍。

## 口径与不确定度

总质量口径包含氮冰、甲烷冰与内部岩石。New Horizons 飞掠后的分析给出的相对不确定度约为 0.5%，定为 A 级，正文保留四位有效数字。[2] 冥王星与冥卫一构成双天体系统，两者的质量都可由共同的质心运动解出；这也是它质量精度较高的原因之一。

## 怎么测出来的

New Horizons 在 2015 年飞掠冥王星，地面测控通过多普勒跟踪测量探测器的速度变化，并结合冥卫一的轨道周期与半长轴，用开普勒第三定律反演出系统总质量，再分摊到两颗天体上。[2] 早期地基观测只能给出较粗的估计，航天器近距离数据把不确定度压到了百分之一以内。[3]

## 量级位置

1.303×10²² kg 位于 B11 带中段偏下，约为地球质量的四百六十分之一。[1] 它比谷神星重约十四倍，却仍不到月球质量的四分之一。把它和体积对比会发现，冥王星的平均密度约为 1.85 g/cm³，说明冰在它的组成中占比很高。它的轨道偏心率与倾角都很大，但它与冥卫一的质量比在太阳系中相当突出。

## 怎么继续走

想看与它大小相近的卫星，去 mass.moon；想看主带矮行星，去 mass.ceres；想看冥王星的空间图景与表面，去 space.pluto；想看地球质量作为参照，去 mass.earth。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.303×10²² 千克，换算后是 1.3×10²² 千克；约为地球（5.972×10²⁴ 千克）的 0.00218 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10²² 量级附近。

读图时先看量级，再看倍数：10²² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
