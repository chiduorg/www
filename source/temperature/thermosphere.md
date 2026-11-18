---
id: temperature.thermosphere
title: 地球热层气体温度
titleEn: Thermospheric gas kinetic-temperature reference
dimension: temperature
category: 中温
summary: '热层稀薄气体的动理学温度通常在约 500–2,000 K，这里取 1,000 K 作轴示例。它描述气体粒子的平均动能，不等于放在该高度的物体一定达到的温度。'
quantity:
  value: 1000
  unit: K
  measure: 热层稀薄气体动理学温度示例
  approximate: true
  measureLabel: 热层稀薄气体动理学温度示例
  range:
    min: 500
    max: 2000
    unit: K
displayValue: '约 500–2,000 K（轴示例1,000 K）'
related:
  - space.earth
  - temperature.mars-surface
  - temperature.venus-surface
  - temperature.antarctic_min_temp
  - temperature.sun-surface
  - time.industrial-revolution
reviewStatus: reviewed
sources:
  - title: Low Earth Orbit Spacecraft Charging Design Standard (NASA-STD-(I)-4005)
    url: >-
      https://standards.nasa.gov/sites/default/files/standards/NASA/Baseline/0/NASASTD_I_4005.pdf
    publisher: NASA
    accessed: '2026-11-06'
  - title: The Thermosphere
    url: 'https://scied.ucar.edu/learning-zone/atmosphere/thermosphere'
    publisher: UCAR Center for Science Education
    accessed: '2026-11-06'
  - title: thermosphere
    url: 'https://www.britannica.com/science/thermosphere'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: thermosphere
  icon: "\U0001F4E1"
  relatedLabels: 电离层、大气层、太阳辐射、空间天气、极光、卫星轨道、无线电通信、大气阻力、太阳风、中间层
conditions: >-
  热层约从 90 km 延伸到 500–1,000 km；中性气体动理学温度通常取 500–2,000 K，随高度、昼夜和太阳活动变化。1,000 K
  只是区间内示例，不是全层均温。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NASA-STD-(I)-4005 说明低轨中性气体动理学温度通常在 500 到 2000 K 之间，并给出环境压力范围，支持本条区间。
    - 'UCAR 的平流层以上层次说明给出热层约 90 km 起、顶部 500–1,000 km，并说明温度随太阳活动变化。'
    - Britannica 条目给出热层位于中间层之上、热层顶约 450 km 的边界描述；正文据此区分热层与电离层。
  originalQuantity:
    value: 1000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '500–2,000 K 是典型范围而非固定值；太阳活动、昼夜、纬度和高度都会改变动理学温度，1,000 K 示例不宜当作某一高度的精确读数。'
visual:
  template: "heat-map"
  profile: "thermosphere"
  caption: "地球热层与稀薄气体"
  note: "稀薄气体动理学温度的概念示意；大气层厚度、粒子密度与卫星比例均经夸张，非按比例绘制，也不是观测重建。 所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。"
  backdrop: "heat-flow"
  color: "#93bfb0"
  symbol: "Thermosphere"
  scene: "temperature.object"
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

热层是地球大气中约从 90 km 延伸到 500–1,000 km 的区域，位于中间层之上、外逸层之下。[2][3] 这里的气体极其稀薄，温度通常用动理学温度描述：它对应气体粒子的平均动能，常用 500–2,000 K 的典型范围，1,000 K 只是轴上的一个示例。[1] 它不是一整层“均匀热气体”，也不是电离层本身。

## 怎样测到

热层温度不能靠普通温度计直接接触测量。常用手段包括卫星阻力反演、质谱仪与朗缪尔探针的原位测量、非相干散射雷达，以及基于这些数据建立的工程大气模型。[1][2] NASA 的低轨航天器充电设计标准把中性气体动理学温度写作 500–2,000 K，并给出相应的环境压力范围，作为工程输入。[1] 这些结果通常是高度、纬度、地方时和太阳活动的函数，而不是一个常数。

## 数值与口径

1,000 K 换算为 1,000 − 273.15 = 726.85 °C，约 727 °C。[1] 但“727 °C”不能直接理解为该高度的空气会像烤箱一样加热物体：热层密度极低，粒子碰撞少，向物体传热的效率很有限。温度还随太阳活动增强而升高，昼夜和纬度也会造成差异，因此工程上更常用范围与模型剖面，而不是单一读数。

## 常见误解

“热层 1,000 K，所以卫星会被烧到 1,000 K”混淆了气体动理学温度与物体平衡温度；稀薄气体能传递的热量很少。第二个误解是把热层与电离层完全等同：两者空间重叠，但热层按温度结构划分，电离层按电离程度划分。[2][3] 第三，认为热层温度随高度一直升高；实际在低热层上升较快，更高处趋于平缓并受太阳活动调制。最后，1,000 K 不是“某一天某一高度的实测值”。

## 与其他温区的关系

1,000 K 高于金星表面平均约 737 K，也高于铝的熔点 933.473 K，却低于铁的约 1,811 K，更远低于太阳表面约 5,772 K。它比地球表面约 288 K 高出七百多 K，但因为气体密度极低，不能把温度数值直接换算成“热感”或“加热能力”。热层正好说明：温度是分子平均动能的度量，传热还要看物质有多少。
