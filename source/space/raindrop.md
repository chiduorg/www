---
id: space.raindrop
title: 雨滴
titleEn: Raindrop
dimension: length
category: 地球与地质
summary: 本条采用约2毫米作为大雨雨滴的水平直径，接近USGS降水表中2.05毫米的中位值。它量的是单滴雨水的直径，不是雨强、降水量或下落距离。
quantity:
  value: 0.002
  unit: m
  measure: 大雨雨滴的中位直径约2毫米（来源给出2.05毫米）
  approximate: true
displayValue: 约 2 mm（大雨雨滴中位直径）
related:
  - space.cloud
  - space.hurricane
  - space.snowflake
  - space.hailstone
  - space.earth
  - time.nanosecond
reviewStatus: reviewed
sources:
  - title: Raindrops are Different Sizes
    url: >-
      https://www.usgs.gov/water-science-school/science/raindrops-are-different-sizes
    publisher: U.S. Geological Survey
    accessed: '2026-11-06'
  - title: Precipitation and the Water Cycle
    url: >-
      https://www.usgs.gov/water-science-school/science/precipitation-and-water-cycle
    publisher: U.S. Geological Survey
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 对象为液态降雨雨滴；样本为USGS降水强度表与雨滴形成说明；口径为雨滴水平直径，不是下落距离、雨强或雨滴体积。
uncertainty: 雨滴直径通常在0.5–4毫米之间；不同雨强与云型给出不同中位直径，约2毫米只是便于比较的代表值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开USGS两篇降水科普页，核对雨滴形成、0.5毫米下限、4毫米分裂上限及不同雨强中位直径表。
    - 明确单滴直径、半径与降水量是不同口径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "sphere"
  scene: "space.object"
  caption: "雨滴约2 mm直径参照"
  note: "球体与色块为示意，非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 地球与地质
  - 尺寸
  - 日常
---
## 它是什么

雨滴是云中水滴增大后落到地面的液态降水。本条量单个雨滴的水平直径，不是雨强、降水量或雨滴下落的距离。[1][2] 雨滴在空气中会变形：小雨滴接近球形，较大的雨滴底部变平，再大则会破碎。因此雨滴没有固定形状，直径也需要按统计口径描述。

## 怎样知道

USGS说明，水滴靠凝结与碰并增长，达到0.5毫米才算雨滴，超过约4毫米通常会分裂。[1] USGS的降水表按雨强列出中位直径：小雨约1.24毫米，中雨约1.60毫米，大雨约2.05毫米，暴雨约2.40毫米。[2] 这些是地面观测与气象教材中的统计值，不是对某一滴雨水的精确测量。

## 数值与口径

本条取2毫米，接近大雨中位直径2.05毫米的取整值。[2] 2毫米等于2000微米，也等于0.002米。它描述的是水平宽度，不是雨滴体积；直径增大一倍，体积约增大到八倍，不能按长度倍数换算。[1][2] 不同降雨强度、不同地区与不同测量方法都会给出不同中位直径。雨滴大小的分布通常用中位数描述，平均值会被少数大滴拉高。

## 常见误解

“雨滴是泪珠形”是常见误解：小雨滴近似球形，大滴底部变平，更大时像降落伞并很快分裂。[1] 另一种误解是把雨滴直径当作降水量；降水量是许多雨滴在平面上累积的深度，与单滴大小不是同一件事。[2] 引用雨滴大小时，应说明是直径、半径还是体积等效直径。

## 与其他尺度的关系

2毫米约为一张纸厚度的20倍，也约为头发直径的30倍。[1][2] 与1公里的积云相比，雨滴小50万倍；与25毫米的严重冰雹相比，它又小一个量级。雨滴处在“毫米”尺度，向上连接云与风暴，向下连接尘埃与细胞。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 0.0067 纳秒，在时间轴上量级接近「纳秒」。[3]
