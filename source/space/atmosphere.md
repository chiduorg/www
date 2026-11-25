---
id: space.atmosphere
title: 地球大气层
titleEn: Atmosphere of Earth
dimension: length
category: 地球与地质
summary: 地球大气层没有突然结束的物理边界。本条采用海平面到卡门线100公里的约定高度作为有效厚度，不是大气全部高度或某个分子的飞行高度。
quantity:
  value: 100000
  unit: m
  measure: 海平面至卡门线的有效厚度（100 km 约定口径）
  approximate: true
displayValue: 100 km（至卡门线）
related:
  - space.earth
  - space.iss
  - space.everest
  - space.geostationary-orbit
  - space.pacific-ocean
  - temperature.earth-mantle
reviewStatus: reviewed
sources:
  - title: '65 Years Ago: First Factory Rollout of the X-15 Hypersonic Rocket Plane'
    url: >-
      https://www.nasa.gov/history/65-years-ago-first-factory-rollout-of-the-x-15-hypersonic-rocket-plane/
    publisher: NASA History
    accessed: '2026-11-06'
  - title: Kármán line
    url: 'https://www.britannica.com/science/Karman-line'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Layers of the Atmosphere
    url: 'https://www.noaa.gov/jetstream/atmosphere/layers-of-atmosphere'
    publisher: NOAA National Weather Service
    accessed: '2026-11-06'
conditions: 对象为地球大气层；测量口径为海平面至卡门线的约定高度，取100公里，不是大气层外缘、整层厚度或某一气体成分的标高。
uncertainty: 卡门线没有统一定义；FAI采用100公里，NASA与美国空军有时采用80公里。100公里是工程与纪录口径，大气本身仍向外延伸。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 用WebFetch打开NASA X-15历史页、Britannica卡门线条目与NOAA大气分层页，核对100公里、80公里及大气分层高度。
    - '正文采用国际航空纪录常用的100公里口径，并说明80公里是另一套机构口径、10,000公里是外逸层上界。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "distance"
  variant: "vertical"
  color: "#6fa8dc"
  caption: "海平面至卡门线100公里的有效厚度"
  note: "示意，非按比例，非观测重建；分层色带与高度标线为简化表示，不代表精确大气剖面。"
  scene: "space.object"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 地球与地质
  - 尺寸
  - 行星与地理
---
## 它是什么

地球大气层是包裹地球的气体层，密度随高度迅速降低，并没有一条物理上突然“结束”的边。本条量的是从海平面到卡门线的有效厚度，取100公里作为比较口径；它不是大气层的全部高度，也不是某个具体分子的飞行高度。[1][2]

## 怎样知道

大气分层由温度、成分和密度观测确定。NOAA把热层下界放在约85公里，热层延伸到约600公里，外逸层可到约10,000公里。[3] 卡门线则是工程与纪录用的约定边界：FAI采用100公里，NASA与美国空军有时采用80公里。[1][2] 这些高度来自火箭、卫星、雷达和探空仪测量，不是一条可以直接触摸的线。

## 数值与口径

本条采用100公里，即100,000米，因为它是国际航空纪录常用的卡门线口径；Britannica同时提醒，80至100公里都有人使用。[1][2] 100公里不是大气质量的上限：大部分大气质量集中在更低处，但稀薄气体仍延伸到数百甚至数千公里。[3] 因此“厚度”是约定边界的高度，不是大气的几何外缘。

## 常见误解

“过了100公里就没有空气”不对：那里空气极稀薄，但卫星仍会遇到阻力，需要轨道维持。把卡门线当成法律边界也不准确；它是工程与纪录约定，不同机构采用80或100公里。[1][2] 另一个误解是用大气厚度直接除以珠峰高度，得出“大气只有几个珠峰高”；这种比较忽略了密度随高度指数下降。

## 与其他尺度的关系

100公里约为珠峰高程8,848.86米的11.3倍，约为地球平均半径6,371公里的1.6%，也约为国际空间站约400公里轨道高度的四分之一。[1][3] 与地球直径12,742公里相比，100公里只是薄薄一层，却已包含绝大部分天气和飞机航线。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 100000 米，换算后是 100 千米；约 0.00785 个地球直径（1.2742×10⁷ 米）。这把尺子只改写单位，不改变量值；它把本条固定在空间轴的 10⁵ 量级附近。

读图时先看量级，再看倍数：10⁵ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。


## 深读一：量值口径

本条的核心量值是 1.000e+05 m，量的是海平面至卡门线的有效厚度（100 km 约定口径）。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：对象为地球大气层；测量口径为海平面至卡门线的约定高度，取100公里，不是大气层外缘、整层厚度或某一气体成分的标高。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照地球（1.274e+07）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
