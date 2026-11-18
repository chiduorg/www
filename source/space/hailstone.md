---
id: space.hailstone
title: 冰雹
titleEn: Hailstone
dimension: length
category: 地球与地质
summary: 本条采用25.4毫米（1英寸）作为严重冰雹的直径阈值。它是国家气象局用于判定强雷暴的标准，不是典型冰雹大小或最大纪录。
quantity:
  value: 0.0254
  unit: m
  measure: 严重冰雹阈值（直径1英寸）
  approximate: true
displayValue: 25.4 mm（严重冰雹阈值）
related:
  - space.raindrop
  - space.snowflake
  - space.cloud
  - space.hurricane
  - space.everest
reviewStatus: reviewed
sources:
  - title: Spotter Weather Reports
    url: 'https://www.weather.gov/mrx/SpotterReports'
    publisher: NOAA / National Weather Service
    accessed: '2026-11-06'
  - title: NWS La Crosse Severe Thunderstorm Reference Table (Hail)
    url: 'https://www.weather.gov/arx/svrref_hail'
    publisher: NOAA / National Weather Service
    accessed: '2026-11-06'
conditions: 对象为雷暴云中形成的冰雹；样本为NWS冰雹尺寸参照表；口径为冰雹最大直径，不是质量、下落速度或降雹持续时间。
uncertainty: 冰雹直径从几毫米到超过10厘米；1英寸是“严重冰雹”的业务阈值，不是典型值或最大纪录。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开两份NWS冰雹尺寸参照页，核对1英寸严重阈值与豌豆、高尔夫球等尺寸对照。
    - 明确业务阈值、典型尺寸与最大纪录是不同概念。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "sphere"
  scene: "space.object"
  caption: "严重冰雹1英寸直径参照"
  note: "冰球与表面质感为示意，非按比例，非观测重建。"
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

冰雹是雷暴云中反复上升、冻结形成的冰球。本条量单颗冰雹的最大直径，不是质量、下落速度或一次降雹的总量。[1][2] 冰雹内部常有同心冰层，说明它在云中经历多次上下运动。直径越大，通常需要的上升气流越强，因此冰雹大小也是强对流强度的间接指标。

## 怎样知道

美国国家气象局把直径1英寸（25.4毫米）及以上定为严重雷暴冰雹标准，并用豌豆、硬币、高尔夫球等日常物体作尺寸参照。[1][2] 这些阈值用于地面观测员报告与预警，不是对每颗冰雹的精密测量。实际报告还会用硬币、球类等参照物帮助估计。冰雹形状不规则，业务上通常取最长方向的直径。

## 数值与口径

1英寸等于25.4毫米，即0.0254米。[1][2] 它表示“严重”门槛，而不是平均冰雹大小；更小的冰雹也可能造成损害。冰雹直径与质量近似按立方关系增长，直径翻倍不等于质量只翻倍。不同参照表把高尔夫球记为1.75英寸，说明同一物体尺寸也有取整差异。

## 常见误解

“冰雹至少1英寸才算冰雹”不对：1英寸只是严重天气的报告阈值，豌豆大小的冰雹同样存在。[1][2] 另一种误解是把冰雹直径当作降雪或雨滴大小；冰雹是冻结的冰球，形成机制与雨滴、雪花不同。比较冰雹时，应说明是直径、质量还是最大纪录。

## 与其他尺度的关系

25.4毫米约为雨滴2毫米直径的12.7倍，也约为雪花常见上限1.3厘米的2倍。[1][2] 与1公里的积云相比，冰雹很小；但与尘埃和雨滴相比，它已属厘米级。冰雹处在“毫米到厘米”尺度，向上连接雷暴与强上升气流。
