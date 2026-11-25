---
id: temperature.venus-surface
title: 金星表面温度
titleEn: Venus mean surface-temperature reference
dimension: temperature
category: 中温
summary: >-
  NASA 的金星事实表把平均表面温度列为 737 K，约 464 °C，表面气压约 92
  bar。它是行星尺度的平均值，不等于云层顶部温度，也不代表每个地点和时刻完全一致。
quantity:
  value: 737.15
  unit: K
  measure: NASA行星温度概览均温参考
  approximate: true
  measureLabel: NASA行星温度概览均温参考
displayValue: 约 737 K（464 °C）
related:
  - temperature.mars-surface
  - temperature.lead-melting-point
  - temperature.co2-critical-point
  - temperature.water-triple-point
  - space.earth
reviewStatus: reviewed
sources:
  - title: Venus Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
  - title: Venus
    url: 'https://www.britannica.com/place/Venus-planet'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: venus-surface
  icon: "\U0001F7E0"
  relatedLabels: 温室效应、二氧化碳、行星大气、金星探测器、卡尔·萨根、行星科学、宜居带、气候变化、地球、火星表面
conditions: 金星平均表面温度 737 K（464 °C），表面气压约 92 bar，大气以 CO₂ 为主；这是行星尺度平均参考，不是单点瞬时测量。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - >-
      NASA NSSDCA 的 Venus Fact Sheet 明确列出平均温度 737 K（464 C）、表面气压 92 bar、CO₂ 占
      96.5%。
    - Britannica 金星条目提供金星大小、轨道与浓密 CO₂ 大气的背景，用于说明温室效应，不用于替代温度数值。
    - 正文按五节结构重写，把表面温度与云顶温度、单点测量和昼夜差异分开。
  originalQuantity:
    value: 737
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 737 K 是 NASA 事实表的平均表面值，原始页面按 1 K 给出；地形、海拔与测量年代会造成差异，日间温度变化在概览中约等于零，但不表示每点完全相同。
visual:
  template: planet-environment
  profile: venus
  caption: 金星稠密大气与表面
  note: >-
    金星表面平均温度的概念示意；云层厚度、地表起伏与颜色均为说明性处理，非按比例绘制，也不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: heat-flow
  color: '#d8b483'
  symbol: Venus
  scene: temperature.object
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
conceptGroup: venus
---
## 它是什么

金星的平均表面温度约为 737 K，即 464 °C，表面气压约 92 bar，大气以二氧化碳为主。[1][2] 这是行星尺度的平均参考，描述的是金星地表附近的环境，而不是云层顶部、极区高空或某个着陆点的瞬时读数。金星没有地球那样的四季，概览给出的日间温度变化接近零，但这不等于每个地点完全同温。

## 怎样测到

金星表面温度来自着陆器原位测量、轨道器红外与雷达观测，以及把这些数据整合成的行星事实表。[1] NASA NSSDCA 的 Venus Fact Sheet 以平均温度、表面气压和大气成分并列的方式给出概览值；Britannica 的金星条目则提供行星大小、轨道和浓密二氧化碳大气的背景。[1][2] 由于着陆任务数量有限，平均表面温度是多种测量的综合，而不是一张全球均匀的温度图。

## 数值与口径

737 K − 273.15 K = 463.85 °C，事实表圆整为 464 °C；若从 464 °C 反算，得到 737.15 K。[1] 这个换算不增加原始概览的精度。92 bar 约等于 9.2 MPa，是地球海平面气压的九十多倍；讨论“金星表面有多热”时，压力必须与温度一起说，因为那里的二氧化碳处于超临界状态，而不是普通常压气体。

## 常见误解

“金星离太阳更近，所以表面热”只解释了一部分；金星的高反照率本应反射较多阳光，真正把表面推高的是浓密二氧化碳大气的温室效应。[2] 第二个误解是把云顶温度当成地表温度；高空云层与地表是截然不同的环境。第三，认为 737 K 只比水的沸点高一点；它其实足以让铅熔化（铅熔点 600.612 K），也远高于水的临界温度。最后，平均温度不是每个着陆点的实测值。

## 与其他温区的关系

737 K 比地球表面平均约 288 K 高约 449 K，比火星表面平均约 210 K 高约 527 K；它高于铅的熔点 600.612 K，也高于水的沸点 373.15 K。[1] 它低于铝的熔点 933.473 K，更低于铁的约 1,811 K。金星表面因此处在“铅会熔化、铝仍固态”的温区，是行星科学中比较温室效应与材料稳定性的一个极端参照。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]


## 深读一：量值口径

本条的核心量值是 737.15 K，量的是NASA行星温度概览均温参考。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：金星平均表面温度 737 K（464 °C），表面气压约 92 bar，大气以 CO₂ 为主；这是行星尺度平均参考，不是单点瞬时测量。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照火星表面平均温度（208.15）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
