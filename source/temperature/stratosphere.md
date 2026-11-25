---
id: temperature.stratosphere
title: 平流层
titleEn: Stratosphere mean temperature reference
dimension: temperature
category: 低温
summary: >-
  平流层位于对流层顶之上、约 50 km 以下，臭氧吸收紫外线使温度随高度上升。其底部约 216 K， 本条取 220 K（−53
  ℃）作整层偏冷的典型参考；平流层顶可升到约 270 K。
quantity:
  value: 220
  unit: K
  measure: 平流层下部典型温度参考
  approximate: true
  measureLabel: 平流层下部典型温度参考
displayValue: 约 220 K（−53 ℃）
related:
  - temperature.troposphere
  - temperature.mesosphere
  - temperature.thermosphere
  - space.atmosphere
  - temperature.antarctic_min_temp
  - temperature.ozone-layer
reviewStatus: reviewed
sources:
  - title: Earth Atmosphere Model - Metric Units
    url: 'https://www.grc.nasa.gov/WWW/k-12/airplane/atmosmet.html'
    publisher: NASA Glenn Research Center
    accessed: '2026-11-06'
  - title: The Stratosphere
    url: 'https://scied.ucar.edu/learning-zone/atmosphere/stratosphere'
    publisher: UCAR Center for Science Education
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 大气中的氮氧混合气体，含臭氧层
  height: 约 10–50 km；赤道下界可高至约 20 km，极地冬季可低至约 7 km
  season: 年平均参考，极地冬季平流层下部更冷
  basis: 探空、卫星与标准大气模型
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NASA 的 Earth Atmosphere Model 给出 11–25 km 的下平流层温度约为 −56.46 ℃，即约 216.7 K；25
      km 以上温度随高度回升。
    - UCAR 的平流层条目说明臭氧吸收紫外线使该层温度随高度升高，并给出下界约 10 km、上界约 50 km 以及极地冬季可低至 7 km。
    - 正文取 220 K 作为平流层下部偏冷的圆整参考，同时说明平流层顶可升至约 270 K，避免把下部值当作整层均温。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  220 K 是平流层下部偏冷的典型参考，不是整层平均；底部约 216 K，平流层顶可升至约 270 K。
  纬度、季节、臭氧分布与火山气溶胶都会改变温度廓线，极地冬季的下平流层可明显低于中低纬。
visual:
  template: "heat-map"
  scene: "temperature.object"
  caption: "平流层温度示意"
  note: "大气层厚度、臭氧层与温度色带均为解释性示意，非按比例、非观测重建； 画面不代表某一季节或某一纬度的真实温度廓线。"
  color: "#93bfb0"
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

平流层是大气第二层，位于对流层顶之上，向上延伸到约 50 km。它的下界高度随纬度和季节变化：中纬度约 10 km，赤道可高至约 20 km，极地冬季可低至约 7 km。[2] 与对流层不同，平流层中的臭氧会吸收太阳紫外线，把能量转化为热，因此温度总体上随高度上升。这里取 220 K 描述其下部偏冷的典型状态。

## 怎样知道

平流层温度由探空气球、卫星遥感和标准大气模型给出。NASA 的简化地球大气模型把 11–25 km 的下平流层温度取为约 −56.46 ℃，即约 216.7 K，并让 25 km 以上的温度随高度回升。[1] UCAR 的平流层条目说明臭氧吸收紫外线使该层升温，并解释这种逆温结构抑制了对流与混合。[2] 这些资料共同支持“底部冷、顶部暖”的基本廓线。

## 数值与口径

220 K 等于 −53.15 ℃，约 −53 ℃。它略高于下平流层的约 216 K，低于平流层顶的约 270 K。[1][2] 平流层内的温度并非到处相同：低纬与极地的下界高度不同，极地冬季的平流层下部会更冷；火山喷发进入平流层的气溶胶也会短时改变辐射平衡。因而 220 K 是下部温区的圆整参考，而不是某一高度或某一季节的精确读数。

## 常见误解

第一，把平流层理解为“一直很冷”；它其实越往上越暖，顶部可比对流层顶暖几十开尔文。第二，把平流层与臭氧层完全等同；臭氧层位于平流层内，但平流层的范围更大。第三，认为臭氧空洞直接等于平流层整体降温；臭氧损耗改变局地加热，但温度响应还取决于环流和季节。第四，把平流层下部温度拿来描述整层，忽略顶部升温。

## 与其他温区的关系

220 K 低于水的冰点，也低于对流层的质量加权平均约 255 K，却高于中间层的约 190 K。它处在“低温”与“中温”之间的过渡带：从平流层顶继续向上，温度先升到约 270 K，再在中间层重新下降。与热层动理学温度的数百至数千开尔文相比，平流层气体密度高得多，温度数值虽低，实际热量和传热能力却更强。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
