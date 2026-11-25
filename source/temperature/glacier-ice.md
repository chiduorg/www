---
id: temperature.glacier-ice
title: 冰川冰温
titleEn: Glacier ice temperature reference
dimension: temperature
category: 低温
summary: >-
  冰川冰温指冰体内部的温度，受表面气温、积雪绝缘、冰流和地热共同影响。温带冰川接近压熔点， 冷冰川可低至约 −16 ℃；这里取 260 K（−13
  ℃）作冷冰川冰温的圆整参考，随深度逐渐接近压熔点。
quantity:
  value: 260
  unit: K
  measure: 冷冰川冰体温度参考
  approximate: true
  measureLabel: 冷冰川冰体温度参考
displayValue: 约 260 K（−13 ℃）
related:
  - space.antarctic-ice-thickness
  - mass.water-molecule
  - temperature.ice-sheet
  - temperature.permafrost
  - temperature.sea-ice
  - temperature.water-freezing
reviewStatus: reviewed
sources:
  - title: 'Glaciers: Things to Know'
    url: >-
      https://www.usgs.gov/special-topics/water-science-school/science/glaciers-things-know
    publisher: U.S. Geological Survey
    accessed: '2026-11-06'
  - title: >-
      Characteristics of a crater glacier at Ushkovsky volcano, Kamchatka,
      Russia, as revealed by the physical properties of ice cores and borehole
      thermometry
    url: 'https://www.cambridge.org/core/product/7172D10A493C2EEACE3F529FC12F2CAB'
    publisher: Journal of Glaciology / Cambridge University Press
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 冰川冰体，含气泡、积雪与杂质
  depth: 10–200 m 深度参考，接近底部时受压力与地热影响
  season: 年际与深度平均，表层受冬季冷却影响
  basis: 钻孔测温、冰芯与热流模型
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - USGS 说明阿拉斯加多数冰川属于温带冰川，冰温只比熔点低零点几摄氏度，只有表层数米受冬季冷却；冷冰川则整体低于压熔点。
    - >-
      Journal of Glaciology 的 Ushkovsky 火山口冰川研究给出 10 m 深度温度 −15.8 ℃（约 257 K），20
      m 深度约 −14.7 ℃（约 258 K）。
    - 正文取 260 K 作为冷冰川冰温的圆整参考，同时说明温带冰川可接近 273 K，深度增加时温度受压力熔点和地热影响。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  260 K 是冷冰川冰体的圆整参考，不是所有冰川的统一温度；温带冰川可接近压熔点 273 K， 冷冰川表层可低至约 257 K
  甚至更低。深度、积累率、地热、冰流和表面积雪都会改变温度廓线。
visual:
  template: cryo-instrument
  scene: temperature.object
  caption: 冰川冰温示意
  note: 冰体剖面、气泡与测温探头均为解释性示意，非按比例、非观测重建； 画面不代表某一冰川的真实钻孔温度曲线。
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

冰川冰温指冰川内部冰体的温度，而不是冰面气温。冰川由多年积雪压实成冰并在重力作用下流动，冰体内部温度受表面气温、积雪绝缘、冰流变形和地热共同控制。[1] 同一座冰川，表面数米会随冬季冷却，深处则可能因压力熔点下降和地热加热而接近融化点。这里取 260 K 描述冷冰川冰体的典型偏冷状态。

## 怎样知道

冰温主要靠钻孔测温、冰芯和热流模型获得。USGS 指出，阿拉斯加多数冰川属于温带冰川，冰温只比熔点低零点几摄氏度，只有表层数米在冬季被冷却；整体低于压熔点的则称为冷冰川。[1] 堪察加 Ushkovsky 火山口冰川的钻孔研究给出 10 m 深度温度 −15.8 ℃，约 257 K；20 m 深度约 −14.7 ℃，约 258 K。[2] 这些原位测量比卫星表面温度更能代表冰体内部。

## 数值与口径

260 K 等于 −13.15 ℃，约 −13 ℃。它接近冷冰川上层 10–20 m 的实测温区，但低于温带冰川接近 273 K 的状态。[1][2] 随深度增加，上覆冰的压力会使压熔点略微降低，地热和冰流摩擦又会补充热量，因此深部温度可能回升到接近压熔点。比较冰温时，必须说明深度、冰川类型和测量季节；单点钻孔值不能代表整条冰川。

## 常见误解

第一，认为所有冰川冰都比冰箱冷冻室更冷；温带冰川可以只比 0 ℃ 低零点几摄氏度。第二，把冰面气温当作冰体温度；积雪是良好的绝缘层，表面冷却向深部传递很慢。第三，认为冰在 0 ℃ 就一定融化；压力会使熔点略降，含杂质的冰也会改变融点。第四，用一座冰川的钻孔值推广到极地冰盖；冰盖更厚、更冷，热历史也更长。

## 与其他温区的关系

260 K 低于水的冰点 273.15 K，与冰盖表面的约 250 K 相近，却高于南极极端低温。它高于液氮的 77 K，也高于干冰的约 195 K，说明冰川冰仍是相对“温暖”的低温固体。冰川冰温连接着表面气候与底部融水：当深部接近压熔点时，底部可能出现液态水，进而影响冰川滑动和冰下水系。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
