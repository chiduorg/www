---
id: space.tectonic-plate
title: 构造板块
titleEn: Tectonic Plate
dimension: length
category: 地球与地质
summary: '构造板块是岩石圈被边界切开的巨大刚性块体。本条以5,000公里作为大型板块典型宽度的数量级参照，不代表任一板块的实测宽度。'
quantity:
  value: 5000000
  unit: m
  measure: '大型构造板块典型宽度的数量级参照（USGS 所述数百至数千公里，取5,000 km）'
  approximate: true
displayValue: '5,000 km（典型宽度数量级参照）'
related:
  - space.earth
  - space.crust
  - space.earth-core
  - space.himalaya
  - space.mariana-trench
  - temperature.earth-mantle
reviewStatus: reviewed
sources:
  - title: What is a tectonic plate?
    url: 'https://pubs.usgs.gov/gip/dynamic/tectonic.html'
    publisher: U.S. Geological Survey
    accessed: '2026-11-06'
  - title: Plate tectonics
    url: 'https://www.britannica.com/science/plate-tectonics'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: '对象为大型构造板块的水平展布；测量口径为“典型宽度”的数量级参照，取5,000公里，不是任一板块的精确边界距离，也不是板块厚度。'
uncertainty: '板块没有统一的标准宽度；USGS只说从数百到数千公里不等。5,000公里是为进入数轴比较而取的整数参照，实际板块可明显大于或小于它。'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开USGS板块说明与Britannica板块构造条目，核对板块尺寸范围、岩石圈厚度及主要板块举例。
    - '保留 needs-review：来源只给“数百至数千公里”的量级，没有单一典型宽度；5,000公里是明确标注的数量级参照，不是实测值。'
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: field
  variant: plates
  color: '#7f8c8d'
  caption: 岩石圈板块的水平展布与边界示意
  note: 示意，非按比例，非观测重建；板块轮廓、边界与运动箭头为简化表示，不代表精确测绘边界。
  scene: space.object
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 地球与地质
  - 尺寸
  - 行星与地理
---
## 它是什么

构造板块是岩石圈被边界切开后形成的巨大刚性块体，既包括大陆地壳，也包括海洋地壳及其下的上地幔顶部。本条量的是大型板块的典型宽度，取5,000公里作为数量级参照；它不是某一板块的精确尺寸，也不是板块厚度。[1][2]

## 怎样知道

板块边界由地震带、火山带、洋中脊和转换断层的位置勾画，板块运动则用GPS、甚长基线干涉和磁异常条带测量。[1][2] USGS指出，板块大小从数百公里到数千公里不等，太平洋板块和南极板块属于最大的一类；厚度从年轻大洋岩石圈的不足15公里到古老大陆岩石圈的约200公里。[1] 因此“宽度”和“厚度”必须分开说。

## 数值与口径

本条采用5,000公里，是在USGS“数百至数千公里”量级中取的整数参照，用来把板块放进数轴；它不是太平洋板块或任一板块的实测宽度，具体板块可明显大于或小于它。[1] 板块厚度另有一组数：大洋岩石圈可小于15公里，古老大陆岩石圈可达200公里以上。[1][2] 宽度是水平尺度，厚度是垂直尺度，不能互换。

## 常见误解

“板块就是大陆”不对：许多板块同时包含大陆和海洋，太平洋板块几乎全是海洋岩石圈。把板块边界当成固定不变的线也不对，板块会移动、拼合、裂开，边界位置随时间改变。[1][2] 另一个误解是给所有板块规定同一个“标准宽度”；微板块只有数百公里，大型板块则可达数千公里。

## 与其他尺度的关系

5,000公里约为地球平均半径6,371公里的78%，约为大陆地壳平均厚度30公里的167倍，也约为珠峰高程8,848.86米的565倍。它描述的是地表板块的横向延展，不是地球内部半径。[1][2]

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 5×10⁶ 米，换算后是 5×10³ 千米；约 0.392 个地球直径（1.2742×10⁷ 米）。这把尺子只改写单位，不改变量值；它把本条固定在空间轴的 10⁶ 量级附近。

读图时先看量级，再看倍数：10⁶ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
