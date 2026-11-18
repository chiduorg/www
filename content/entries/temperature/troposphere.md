---
id: temperature.troposphere
title: 对流层
titleEn: Troposphere mean temperature reference
dimension: temperature
category: 低温
summary: >-
  对流层是大气最底层，集中了约四分之三的大气质量与几乎所有天气。按质量加权的典型平均温度约为 255 K（−18 ℃）； 它介于地表约 288 K
  与对流层顶约 216 K 之间，随纬度、季节和高度变化很大。
quantity:
  value: 255
  unit: K
  measure: 对流层质量加权平均温度参考
  approximate: true
  measureLabel: 对流层质量加权平均温度参考
displayValue: 约 255 K（−18 ℃）
related:
  - temperature.stratosphere
  - temperature.mesosphere
  - temperature.sea-surface
  - space.atmosphere
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: 'Chapter 3: The vertical structure of the atmosphere'
    url: 'https://weathertank.mit.edu/wp-content/uploads/2017/04/chap3.pdf'
    publisher: MIT Weather Tank
    accessed: '2026-11-06'
  - title: The Troposphere
    url: 'https://scied.ucar.edu/learning-zone/atmosphere/troposphere'
    publisher: UCAR Center for Science Education
    accessed: '2026-11-06'
conditions:
  medium: 大气中的氮氧混合气体
  height: 地面至约 10 km；赤道可达约 20 km，极地冬季可低至约 7 km
  season: 年平均参考，随纬度与季节变化
  basis: 探空、卫星与再分析资料的统计平均
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - MIT 大气科学教材第 3 章指出，观测温度廓线的质量加权平均温度接近 255 K，并说明大部分大气质量集中在底部 10 km。
    - UCAR 的对流层条目给出约 10 km 的典型厚度、极地 7 km 与赤道 20 km 的变化范围，并说明气温随高度降低。
    - 正文用 255 K 作为整层质量加权参考，同时明确地表约 288 K、对流层顶约 216 K，避免把平均值当作任一高度的实际气温。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  255 K 是质量加权的整层平均，不是地表气温或某一高度读数；地表年平均约 288 K，对流层顶约 216 K。
  纬度、季节、海陆分布和天气系统会造成数十开尔文的差异，赤道与极地的对流层厚度也不同。
visual:
  template: "heat-map"
  scene: "temperature.object"
  caption: "对流层温度示意"
  note: "大气层厚度、云系与温度色带均为解释性示意，非按比例、非观测重建； 画面不代表某一地区或某一时刻的真实探空廓线。"
  color: "#93bfb0"
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

对流层是地球大气最靠近地面的一层，从地表向上延伸到约 10 km；赤道上空可达约 20 km，极地冬季可低至约 7 km。[2] 它集中了约 75–80% 的大气质量，几乎所有天气现象和大部分水汽都在这里。这里说的 255 K 是整层按质量加权的典型平均温度，而不是地面气温，也不是某一座城市的气温。

## 怎样知道

对流层温度来自探空气球、飞机、卫星遥感和地面站，再经数值天气预报同化形成网格资料。MIT 的大气科学教材指出，观测温度廓线的质量加权平均温度接近 255 K，并解释这是因为大部分大气质量集中在底部 10 km。[1] UCAR 的对流层条目则说明气温随高度降低，并给出赤道与极地对流层顶高度的差异。[2] 这些结果都是统计平均，不是单次探空。

## 数值与口径

255 K 等于 −18.15 ℃，约 −18 ℃。它位于地表年平均约 288 K 与对流层顶约 216 K 之间。[1][2] 对流层内平均每上升 1 km 降温约 6.5 K，但实际递减率随湿度、稳定度和天气系统变化。低纬地区整层更厚、更暖，高纬地区更薄、更冷；同一地点夏季与冬季的平均值也不同。因此 255 K 适合描述“整层大气的平均热状态”，不适合作为某个高度的标准温度。

## 常见误解

第一，把 255 K 当成地面平均温度；地表年平均约 288 K，255 K 更接近整层质量加权值。第二，认为对流层内温度随高度线性下降；实际递减率会随湿度和稳定度改变，还可能出现逆温。第三，把“高处更冷”解释为“离太阳更近或更远”；主要原因是气压降低时空气膨胀做功、以及地表加热的对流输送。第四，忽略纬度与季节差异，把中纬度平均值套用到赤道或极地。

## 与其他温区的关系

255 K 低于水的冰点 273.15 K，也低于人类舒适室温的约 295 K，却高于平流层的约 220 K 和中间层的约 190 K。它比同温层的稀薄气体温度低得多，但那些高层大气密度极低，传热能力与对流层完全不同。对流层顶的 216 K 常被当作对流层与平流层的分界参考；再往上，平流层因臭氧吸收紫外线而重新升温。
