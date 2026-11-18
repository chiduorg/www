---
id: space.iceberg
title: 大型冰山
titleEn: Large Iceberg
dimension: length
category: 地球与地质
summary: '冰山是从冰川、冰盖或冰架断裂后漂浮在海洋中的大块冰。本条量的是大型冰山水面以上最长水平跨度，取分类上限约200米，不是总长度、出水高度或水下体积。'
quantity:
  value: 200
  unit: m
  measure: 大型冰山水面以上的最长水平跨度（大型与特大型分类的分界）
  approximate: true
displayValue: '200 m（大型冰山跨度上限）'
related:
  - space.glacier
  - space.earth
  - space.pacific-ocean
  - space.everest
reviewStatus: reviewed
sources:
  - title: 'Manual of Ice (MANICE): chapter 1 — General Terminology'
    url: 'https://www.canada.ca/en/environment-climate-change/services/weather-manuals-documentation/manice-manual-of-ice/chapter-1.html'
    publisher: Environment and Climate Change Canada
    accessed: '2026-11-07'
  - title: International System of Sea-Ice Symbols (WMO No. 259, Vol. III)
    url: 'https://download.dmi.dk/public/ICESERVICE/2024_download_readme/WMO259_Vol_III_en.pdf'
    publisher: World Meteorological Organization / Danish Meteorological Institute
    accessed: '2026-11-07'
conditions: 对象为漂浮在海洋中的大型冰山；测量口径为水面以上可见部分的最长水平跨度，取大型冰山分类的上限，不是冰山总长度、出水高度、水下体积或冰山的平均尺寸。
uncertainty: >-
  加拿大《海冰手册》把大型冰山定为水面以上长度121至200米，特大型冰山为超过200米；200米是分类分界，不是所有大型冰山的平均值。不同观测角度与海况会使同一座冰山的量测值上下浮动。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '用WebFetch打开加拿大《海冰手册》第一章，核对大型冰山121至200米、特大型超过200米及46至75米出水高度。'
    - '用WMO海冰符号规范PDF核对国际冰情巡逻分类表；正文明确200米是分类上限而非平均值。'
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://www.canada.ca/en/environment-climate-change/services/weather-manuals-documentation/manice-manual-of-ice/chapter-1.html；https://download.dmi.dk/public/ICESERVICE/2024_download_readme/WMO259_Vol_III_en.pdf），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: 'terrain'
  variant: 'ice'
  color: '#9bbcd7'
  caption: '大型冰山水面以上跨度参照'
  note: '示意，非按比例，非观测重建；冰山轮廓、水面与水下部分为简化表示，不代表精确测量。'
  scene: 'space.object'
  referenceAxis: 'x'
  framePadding: 0.3
measureType: 尺寸
tags:
  - 地球与地质
  - 尺寸
  - 地理
---
## 它是什么

冰山是从冰川、冰盖或冰架断裂后漂浮在海洋中的大块冰。本条量的是大型冰山水面以上最长水平跨度，取分类上限约200米；不是冰山总长度、出水高度，也不是水下体积。[1][2]

## 怎样知道

冰山尺寸由船舶、飞机、卫星和雷达观测，并按水面上可见的长度与高度分类。加拿大《海冰手册》把“大型冰山”定为水面以上长度121至200米、出水高度46至75米；“特大型冰山”则是长度超过200米、出水高度超过75米[1]。世界气象组织的海冰符号规范采用同一套国际冰情巡逻分类表[2]。因此200米是大型与特大型之间的分界，不是所有冰山的平均值。

## 数值与口径

本条采用200米作为大型冰山跨度的上限。冰山的水上部分通常只占总体积的约十分之一，因此200米的水面长度对应更大的水下体积；出水高度与长度也不是同一个方向。[1][2] 不同观测者受海浪、光照和角度影响，同一座冰山可能得到略有差异的尺寸。分类只描述水面以上可见尺寸，不能据此推断整座冰山的质量或吃水深度。同一座冰山在融化与断裂过程中会从大型变为中型，分类也会随之改变。

## 常见误解

把冰山跨度当成冰山总长度，会忽略水下部分。把200米理解为“典型大型冰山”也不准确，许多大型冰山只有数十至一百多米，特大型冰山则可达数百米甚至数公里。[2] 另一个误解是用出水高度乘十倍估算总厚度；这个经验比例只是粗略近似。

## 与其他尺度的关系

200米约为珠穆朗玛峰雪面高程8,848.86米的2.3%，约为长江6,300公里的3%。它与大型岛屿的数百公里尺度相差三个数量级，说明冰山只是海洋中相对较小的漂浮冰体。[1][2]
