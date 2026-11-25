---
id: temperature.urban-heat-island
title: 城市热岛：35 ℃的街区温差
titleEn: Urban heat island at 35 °C
dimension: temperature
category: 高温
summary: 城市热岛是城市建成区温度高于周边乡村的现象；35 ℃可以是夏季午后街区气温示例，真正要比较的是同一时刻城郊温差与地表材质。
quantity:
  value: 308
  unit: K
  measure: 35 ℃街区示例
  approximate: true
  measureLabel: 308 K（35 ℃街区示例）
displayValue: 308 K（35 ℃街区示例）
related:
  - temperature.room-temperature
  - temperature.wet-bulb-temperature
  - temperature.heatstroke-core
  - space.city
reviewStatus: reviewed
sources:
  - title: Heat Island Effect
    url: 'https://www.epa.gov/heatislands'
    publisher: US EPA
    accessed: '2026-11-23'
  - title: Heatwaves
    url: 'https://www.who.int/news-room/fact-sheets/detail/heatwaves'
    publisher: World Health Organization
    accessed: '2026-11-23'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 近地面空气与地表
  measurementSite: 城市街区百叶箱或地表遥感
  duration: 午后至夜间，随天气变化
  basis: 城郊同时刻对比，不是全球平均
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - 本轮新增条目：按所列机构资料重写，核对温度口径、测量位置与适用条件。
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 35 ℃只是街区示例；城市热岛强度随季节、风速、云量、建筑密度与绿地分布变化，白天与夜间的机制也不同。
visual:
  template: heat-map
  profile: urban
  caption: 沥青、混凝土与绿地之间的城市温差示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#b76b4f'
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 环境
---
## 它是什么

城市热岛指城市建成区在同一时段比周边乡村更热的现象。沥青、混凝土和砖石吸收太阳辐射，建筑密集减少通风，空调与交通排放废热，绿地与水体减少蒸发冷却，这些因素共同推高近地面温度。[1] 35 ℃可以是夏季午后一个街区的示例，但热岛强度要用城郊同时刻对比来定义。

## 怎样知道

气象站、街道路灯杆传感器、车载移动观测与卫星热红外遥感都能测量城市热岛。气象站百叶箱测气温，卫星多测地表温度，两者不能直接混用。[1] 研究通常比较城市与乡村站点的日最高、日最低和夜间温度；夜间热岛往往更明显，因为建筑白天储存的热量在夜间释放。[1][2]

## 数值与口径

308 K 等于 34.85 ℃，约 35 ℃。它不是“城市一定比乡村高 35 ℃”，而是一个街区气温示例。热岛强度通常用城郊温差表示，可能只有 1–3 ℃，也可能在特定天气下更大；地表温度差可以更剧烈。[1][2] 比较时必须说明是气温还是地表温度、白天还是夜间。

## 常见误解

常见误解是“多种树就能完全消除热岛”。绿地与水体有降温作用，但效果取决于面积、连通性、灌溉与风速；单一小公园难以抵消整个街区的热量。[1] 另一个误解是把城市热岛等同于全球变暖；前者是局地土地利用效应，后者是气候系统尺度。

## 与其他温度的关系

35 ℃接近 wet-bulb-temperature 的高湿风险区，但城市热岛通常先表现为干热或夜间高温。它高于 room-temperature 的 20 ℃，也高于 sea-surface 的全球平均；与 heatstroke-core 相连的是人体暴露，而不是城市平均温度。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 308 K，即 34.85 ℃（按 T/K−273.15 换算）；约为人体核心温度（310 K）的 0.994 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
