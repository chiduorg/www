---
id: space.tsunami-wavelength
title: 海啸波长
titleEn: Tsunami Wavelength
dimension: length
category: 地球与地质
summary: 本条采用约300公里作为深海海啸波长的代表值，位于NWS给出的60–300英里范围内。它量的是相邻波峰之间的波长，不是波高、周期或近岸爬高。
quantity:
  value: 300000
  unit: m
  measure: 深海海啸波长的代表值（约300公里，位于60–300英里范围内）
  approximate: true
displayValue: 约 300 km（深海海啸波长）
related:
  - space.pacific-ocean
  - space.earth
  - space.hurricane
  - space.great-barrier-reef
  - space.mid-ocean-ridge
reviewStatus: reviewed
sources:
  - title: Tsunami Frequently Asked Questions
    url: 'https://ntwc.ncep.noaa.gov/?page=tsunamiFAQ'
    publisher: NOAA / National Weather Service
    accessed: '2026-11-06'
  - title: Tsunami Information
    url: 'https://www.weather.gov/mtr/tsunami_info'
    publisher: NOAA / National Weather Service
    accessed: '2026-11-06'
conditions: 对象为深海传播中的海啸波；样本为NWS海啸问答与地方台说明；口径为相邻波峰间的波长，不是波高、周期、传播速度或近岸爬高。
uncertainty: 海啸波长随水深与波源变化，常见约100–480公里；本条取300公里作代表值，近岸变浅时波长会缩短。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开NWS海啸问答与旧金山湾区海啸信息页，核对60–300英里波长范围与“数百英里”描述。
    - 明确波长、波高、周期与传播速度是不同量。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "wave"
  scene: "space.object"
  caption: "深海海啸约300 km波长参照"
  note: "波峰间距与波形为示意，非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 波长
tags:
  - 地球与地质
  - 波长
  - 行星与地理
---
## 它是什么

海啸是由海底突然位移激发的一列长周期重力波。本条量相邻波峰之间的波长，不是波高、周期、传播速度或近岸爬高。[1][2] 在深海，海啸波峰间距可达数百公里，波高却可能只有几十厘米，船只几乎察觉不到。波长是理解它为何能跨越整个大洋的关键参数之一。

## 怎样知道

美国国家海啸预警中心的问答表把海啸波长列为60–300英里，并说明深海波长可达数百英里。[1] 旧金山湾区气象台的说明也指出，海啸在深海具有极长波长，常超过50海里，振幅只有几十厘米。[2] 这些数值来自海浪理论与观测总结，不是单次事件的固定值。两类资料都强调波长是范围值，而非固定常数；不同海盆与震源也会改变结果。

## 数值与口径

本条取300公里作为深海海啸波长的代表值，落在60–300英里（约100–480公里）范围内。[1][2] 300公里等于300000米。波长与周期、速度相关：波长越长，越接近浅水波，传播速度约由水深决定。近岸水深变浅后，波长缩短、波高增大。

## 常见误解

“海啸波长就是两个浪尖的距离，所以海啸一定很高”不对：深海海啸波长很长而波高很小，危险主要在近岸。[1][2] 另一种误解是把波长当作传播距离或影响范围；波长描述相邻波峰间隔，不是海啸能走多远。比较海啸时，应说明水深、波源与测量位置。

## 与其他尺度的关系

300公里约为台湾本岛纵长394公里的76%，也约为典型飓风直径480公里的63%。[1][2] 与地球直径12742公里相比，它约为后者的2.4%。海啸波长属于海洋盆地尺度，向上连接板块运动，向下连接近岸波浪。
