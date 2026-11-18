---
id: space.snowflake
title: 雪花
titleEn: Snowflake
dimension: length
category: 地球与地质
summary: 本条采用1.3厘米作为多数雪花横向尺寸的上限。它量的是聚合雪花的直径，不是单颗雪晶的尺寸、积雪深度或雪水当量。
quantity:
  value: 0.013
  unit: m
  measure: 多数雪花横向尺寸的上限（小于1.3厘米）
  approximate: true
displayValue: 小于 1.3 cm（多数雪花横向尺寸）
related:
  - space.cloud
  - space.raindrop
  - space.hailstone
  - space.everest
  - space.earth
reviewStatus: reviewed
sources:
  - title: Science of Snow
    url: 'https://nsidc.org/learn/parts-cryosphere/snow/science-snow'
    publisher: National Snow and Ice Data Center
    accessed: '2026-11-06'
  - title: snow grains
    url: 'https://nsidc.org/learn/cryosphere-glossary/snow-grains'
    publisher: National Snow and Ice Data Center
    accessed: '2026-11-06'
conditions: 对象为由多个雪晶聚合成的雪花；样本为NSIDC对雪花尺寸的概述；口径为雪花横向直径，不是单个雪晶尺寸、降雪深度或雪水当量。
uncertainty: 雪花尺寸随温度、风与聚合过程变化；多数小于1.3厘米，特殊条件下可接近5厘米，且没有常规测量。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开NSIDC雪科学与雪粒词条，核对1.3厘米常见上限、5厘米极端值与雪粒小于1毫米的区别。
    - 明确单颗雪晶、聚合雪花与积雪深度是不同口径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "crystal-lattice"
  scene: "space.object"
  caption: "雪花常见横向尺寸上限参照"
  note: "晶体轮廓与分支为示意，非按比例，非观测重建。"
  color: "#a9c6d8"
  variant: "snowflake"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 地球与地质
  - 尺寸
  - 日常
---
## 它是什么

雪花是多个雪晶聚合后落下的冰晶团。本条量雪花的横向直径，不是单个雪晶的尺寸、积雪深度或雪水当量。[1][2] 雪晶本身多为毫米级，聚合后可以变大；温度接近冰点、风小且大气不稳定时，更容易形成大而松散的雪花。雪花边缘不规则，直径只能按整体轮廓估计。

## 怎样知道

NSIDC说明，多数雪花小于1.3厘米（0.5英寸）宽；在特殊条件下，不规则大雪片可接近5厘米（2英寸）。[1] NSIDC还把“雪粒”定义为直径小于1毫米的白色不透明冰粒，与聚合雪花不同。[2] 这些数值来自观测概述，不是常规逐片测量；NSIDC明确说雪花的精确尺寸并非常规记录。

## 数值与口径

本条取1.3厘米作为多数雪花横向尺寸的上限，即0.013米。[1] 它不是平均直径，也不是最大纪录；接近5厘米的雪片属于特殊情形。单颗雪晶通常远小于1毫米到几毫米，聚合后的雪花才达到厘米级。[1][2] 积雪深度是许多雪花堆积后的厚度，不能由单朵雪花直径推算。这类数值通常以雪片整体外接宽度估计。

## 常见误解

“雪花就是一颗六角形冰晶”不完整：常见的六角对称结构属于雪晶，落地的大雪花往往是多颗雪晶的聚合物。[1][2] 另一种误解是把雪花大小与降雪量等同；降雪量取决于雪花数量、含水率和压实程度。比较雪花时，应说明是单晶、聚合雪花还是雪粒。

## 与其他尺度的关系

1.3厘米约为雨滴2毫米直径的6.5倍，也约为头发直径的180倍。[1][2] 与冰雹的厘米级尺寸相比，两者接近；但与云和风暴相比，雪花仍很小。雪花处在“毫米到厘米”尺度，是云中水汽变成地面降水的中间环节。
