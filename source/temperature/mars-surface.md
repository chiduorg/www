---
id: temperature.mars-surface
title: 火星表面平均温度
titleEn: Mars mean surface temperature reference
dimension: temperature
category: 低温
summary: >-
  火星近地表平均温度的资料值约 210 K（−63 °C），NASA 资料表另给出大气平均温度约 214 K（−59 °C）。 温度轴上的 208.15
  K（−65 °C）是概览资料的圆整值；它既不是某一着陆点的实测值，也不是昼夜或季节极值。
quantity:
  value: 208.15
  unit: K
  measure: NASA行星概览的平均温度参考
  approximate: true
  measureLabel: NASA行星概览的平均温度参考
displayValue: 约 208 K（−65 °C，概览参考）
related:
  - space.earth
  - temperature.venus-surface
  - temperature.pluto-surface
  - temperature.water-freezing
  - temperature.absolute-zero
  - space.moon
reviewStatus: reviewed
sources:
  - title: Mars Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
  - title: Mars
    url: 'https://www.britannica.com/place/Mars-planet'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: mars-surface
  icon: "\U0001F534"
  relatedLabels: 火星、行星大气、宜居性、温室效应、海盗号、火星探测、液态水、好奇号、毅力号、地球
conditions: 火星全球、多年平均的近地表温度参考；不是某一着陆点、某一时刻、某一季节或大气高层的温度，不能与昼夜极值混用。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - >-
      NASA NSSDCA Mars Fact Sheet 给出大气平均温度约 214 K（−59 °C），海盗 1 号着陆点昼夜范围 184–242
      K；Britannica 给出平均表面温度 210 K（−63 °C）。
    - >-
      温度轴沿用的 208.15 K（−65 °C）未被这两份资料直接列出，属于较早概览的圆整值；与 210–214 K 相差约 2–6
      K，已保留原值并在 uncertainty 说明。
    - 正文按五节重写，区分全球平均、昼夜极值与大气温度。
  originalQuantity:
    value: 210
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  不同资料的火星全球平均值在 210–214 K 之间，温度轴上的 208.15 K 与之相差约 2–6 K；海盗 1 号着陆点昼夜范围为 184–242
  K，局部与季节变化更大，不能把单一平均值当作任意时刻的实测温度。
visual:
  template: planet-environment
  profile: mars
  caption: 火星环境
  note: >-
    全球平均温度的概览示意；星球地形与颜色为非按比例的美术处理，不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: frost
  color: '#c8977f'
  symbol: Mars
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
conceptGroup: mars
---
## 它是什么

火星表面平均温度描述的是全球近地表、跨昼夜与季节的平均状态，而不是某一次探测读数。火星大气稀薄，表面气压约 6.36 mb，昼夜温差很大；同一地点白天与夜间的温度可以相差数十开尔文。[1] 因此“火星温度”必须先说明是全球平均、典型值、最高值还是最低值。

## 怎样测到

火星温度来自轨道器红外遥感、着陆器与巡视器的直接测温，以及大气和地表热模型。NASA NSSDCA 的 Mars Fact Sheet 给出大气平均温度约 214 K（−59 °C），并列出海盗 1 号着陆点的昼夜范围 184–242 K；Britannica 的火星条目给出平均表面温度 210 K（−63 °C），并说明低层大气特征温度约 200 K。[1][2] 这些数值来自不同时间跨度与加权方式，不能直接当成同一次测量。

## 数值与口径

温度轴上的 208.15 K 即 −65 °C，与 Britannica 的 210 K 表面平均值、NASA 的 214 K 大气平均值相差约 2–6 K。[1][2] 这种差异主要来自平均时段、地表与大气的高度选择、昼夜权重和圆整，而不是火星温度在短期内改变了数开尔文。208.15 K 只用于温区比较，不能当作全球均温的精密测定值。[1][2]

## 常见误解

第一，把全球平均温度当成每个地点都相同；火星昼夜与季节变化远大于平均值的资料差异。[1] 第二，把白天的 250 K 或夏季峰值 290 K 当作常年平均；Britannica 明确区分了平均表面温度与夏季白天峰值。[2] 第三，用平均温度单独判断液态水是否存在；液态水稳定性还取决于气压、盐度和持续时间。[1][2] 第四，把大气高层的温度与地表温度混为一谈。

## 与其他温区的关系

208 K 低于水的 273.15 K 冰点，也低于地球的典型地表温度，但高于冥王星的 24–55 K 表面温区。[1][2] 在太阳系行星表面温区的比较中，火星属于偏冷的一侧；同一颗火星上，184 K 的夜间低值与 242 K 的白天高值都围绕平均值分布，比较时不能只取一个端点。[1]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]


## 深读一：量值口径

本条的核心量值是 208.15 K，量的是NASA行星概览的平均温度参考。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：火星全球、多年平均的近地表温度参考；不是某一着陆点、某一时刻、某一季节或大气高层的温度，不能与昼夜极值混用。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照地球（1.274e+07）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
