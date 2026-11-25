---
id: temperature.pluto-surface
title: 冥王星表面温度
titleEn: Pluto surface-temperature range reference
dimension: temperature
category: 低温
summary: >-
  冥王星表面温度随区域、季节和观测资料变化：所引会议摘要给出约 33–55 K， NASA 资料表给出 24–38 K。温度轴上的 44 K 只是 33–55
  K 区间的中点，不是单独测得的全球均温或永久上下限。
quantity:
  value: 44
  unit: K
  measure: 冥王星表面温区内示例
  approximate: true
  measureLabel: 冥王星表面温区内示例
  range:
    min: 33
    max: 55
    unit: K
displayValue: 约 33–55 K（轴示例44 K）
related:
  - temperature.mars-surface
  - temperature.venus-surface
  - space.earth
  - temperature.methane-boiling
  - temperature.absolute-zero
  - space.moon
reviewStatus: reviewed
sources:
  - title: Active Processes on Pluto (Pluto System 2025 abstract 7016)
    url: 'https://www.hou.usra.edu/meetings/plutosystem2025/pdf/7016.pdf'
    publisher: Pluto System conference / USRA
    accessed: '2026-11-06'
  - title: Pluto Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/plutofact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: pluto-surface
  icon: "\U0001FA90"
  relatedLabels: 矮行星、柯伊伯带、新视野号、太阳系、氮冰、固态对流、行星大气、冰卫星、冥卫一、相变
conditions: >-
  冥王星近地表冰面温区的代表性示例；44 K 为 33–55 K 区间的中点，不是全球同时均温，也不代表大气高层或内部温度。不同研究给出的范围可低至 24
  K、高至 55 K。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - >-
      USRA/Pluto System 2025 会议摘要给出冥王星表面温度 33–55 K；NASA NSSDCA Pluto Fact Sheet
      给出 24–38 K、黑体温度 37.5 K。
    - 温度轴上的 44 K 是 33 与 55 的中点，仅用于区间定位；与 NASA 范围中点 31 K 不同，已在 uncertainty 说明。
    - 正文按五节重写，区分表面/大气、区域/季节与观测资料差异。
  originalQuantity:
    value: 44
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  表面温度资料存在两组范围：33–55 K（会议摘要）与 24–38 K（NASA 资料表）；温度轴上的 44 K
  是前者的中点，不是全球均温。区域、反照率、季节与观测波段都会改变结果。
visual:
  template: planet-environment
  profile: pluto
  caption: 冥王星冰质表面
  note: >-
    用资料中表面温区的代表点定位，不是整颗冥王星同时为此温度；表面纹理与颜色为非按比例的美术示意，不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#c4c5ce'
  symbol: Pluto
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
conceptGroup: pluto
---
## 它是什么

冥王星表面温度描述的是这颗矮行星近地表冰层的温度，而不是整颗天体内部或大气高层的统一温度。表面覆盖氮冰、甲烷冰和一氧化碳冰，太阳辐照很弱，温度只有几十开尔文。[1] 观测与研究给出的温区并不完全一致：一份 2025 年会议摘要写 33–55 K，NASA 的 Pluto Fact Sheet 写 24–38 K。[1][2]

## 怎样测到

表面温度来自新视野号飞掠的红外与辐射测量、地面掩星观测，以及冰物质热模型。会议摘要把冥王星表面温度概括为 33–55 K，并讨论氮冰升华、冰火山和地下海洋；NASA 资料表则给出表面温度 24–38 K、黑体温度 37.5 K。[1][2] 这些范围对应不同区域、不同季节和不同反照率，不能拼成一个“唯一值”。

## 数值与口径

温度轴上的 44 K 即 −229.15 °C，正好是 33 与 55 的中点，只用于绘图定位，不是新增观测。[1] 44 K 也不等于 NASA 区间 24–38 K 的中点 31 K。[2] 把两组范围放在一起时，应保留各自的来源和区域含义；冥王星表面温度会随纬度和季节变化，局部可能更冷或更暖。

## 常见误解

第一，把 44 K 当成冥王星全球同时均温；它只是区间中点的轴值。[1] 第二，把表面温度与大气温度混同；稀薄大气在不同高度有不同温度。第三，把 33–55 K 当成永久上下限；不同研究和季节可给出更宽的范围。[2] 第四，认为温度低就完全没有地质活动；氮冰对流与可能的冰火山说明表面仍在演化。[1]

## 与其他温区的关系

44 K 远低于火星的 208 K 平均表面温度，也低于氮的 77.4 K 沸点和甲烷的 111.7 K 沸点，但高于绝对零度。[1][2] 在这样的低温下，氮冰仍是固态，只有少量挥发性物质在季节循环中升华与凝结。它和火星、金星的表温共同展示了太阳系行星表面温区的巨大跨度。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]


## 深读一：量值口径

本条的核心量值是 44 K，区间 33–55 K，量的是冥王星表面温区内示例。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：冥王星近地表冰面温区的代表性示例；44 K 为 33–55 K 区间的中点，不是全球同时均温，也不代表大气高层或内部温度。不同研究给出的范围可低至 24 K、高至 55 K。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照火星表面平均温度（208.15）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
