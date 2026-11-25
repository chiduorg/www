---
id: mass.mercury
title: 水星：3.301×10²³ kg，MESSENGER 环绕测出的最轻行星
summary: >-
  水星是离太阳最近的行星，总质量约 3.301×10²³ kg，约为地球的十八分之一。它没有卫星，质量只能靠 MESSENGER
  的轨道跟踪反演，相对不确定度约 0.1%。
dimension: mass
category: 行星与小天体
displayValue: 3.301×10²³ kg
quantity:
  value: 3.301e+23
  unit: kg
  measure: 水星总质量（含铁镍核与硅酸盐幔，不含暗物质）；由 MESSENGER 在轨跟踪与引力场拟合得出，相对不确定度约 0.1%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft tracking and gravity-field fitting
  uncertainty:
    value: 0.001
    unit: relative
related:
  - mass.moon
  - mass.earth
  - mass.pluto
  - space.earth
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
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
  - 水星
  - 类地行星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 水星总质量（含铁镍核与硅酸盐幔，不含暗物质）；由 MESSENGER 在轨跟踪与引力场拟合得出，相对不确定度约 0.1%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.1%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 3.301×10²³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 23.519
  position: 68.3
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
titleEn: Mercury
---
## 这个读数是什么

水星是离太阳最近的行星，本条记录它的总质量约 3.301×10²³ kg。[1] 口径为天体总质量，包含巨大的铁镍核与硅酸盐幔，不包含暗物质。它只比月球重约 4.5 倍，却比地球轻约十八倍。

## 口径与不确定度

总质量口径包含全部岩石与金属。MESSENGER 在轨跟踪给出的相对不确定度约为 0.1%，定为 A 级，正文保留四位有效数字。[2] 水星的平均密度约为 5.43 g/cm³，接近地球，说明它的铁核占比很高；但密度是由质量与体积共同推出的，不能替代质量测量。

## 怎么测出来的

MESSENGER 在 2011 至 2015 年环绕水星，地面测控通过多普勒跟踪测量探测器速度变化，再由轨道摄动与引力场系数 J2 反演质量与低阶引力场。[2] 水星没有卫星，因此不能像冥王星那样借助卫星轨道反推质量，只能依赖航天器跟踪。[3] 这也让早期的水星质量估计长期带有较大误差。

## 量级位置

3.301×10²³ kg 位于 B11 带上段，约为地球质量的十八分之一、火星质量的九分之一。[1] 它比月球重约 4.5 倍，是太阳系八大行星中最轻的一颗。把它放在质量阶梯上，水星与火星之间的差距，恰好说明“类地行星”内部也有很大的质量跨度。水星的质量虽小，却因高密度铁核而拥有仅次于地球的未压缩平均密度。

## 怎么继续走

想看与它质量相近但更小的月球，去 mass.moon；想看更大的类地行星，去 mass.earth；想看同为岩石小天体的矮行星，去 mass.pluto；想看地球的空间图景，去 space.earth。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 3.301×10²³ 千克，换算后是 3.3×10²³ 千克；约为地球（5.972×10²⁴ 千克）的 0.0553 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10²³ 量级附近。

读图时先看量级，再看倍数：10²³ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。


## 深读一：量值口径

本条的核心量值是 3.301e+23 kg，量的是水星总质量（含铁镍核与硅酸盐幔，不含暗物质）；由 MESSENGER 在轨跟踪与引力场拟合得出，相对不确定度约 0.1%。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：reference=质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。；scope=水星总质量（含铁镍核与硅酸盐幔，不含暗物质）；由 MESSENGER 在轨跟踪与引力场拟合得出，相对不确定度约 0.1%；precision=A 级；记录值。；massType=总质量；includesDarkMatter=否。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照月球：7.346×10²² kg，激光测月把误差压到万分之一（7.346e+22）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：不确定度 0.001 relative。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
