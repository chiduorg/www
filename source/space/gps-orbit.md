---
id: space.gps-orbit
title: GPS卫星轨道
titleEn: GPS Satellite Orbit
dimension: length
category: 行星与太阳系
summary: 'GPS卫星运行在中地球轨道，轨道高度约20,200公里，周期约12小时。这个高度是距地表的高度，不是距地心的半径。'
quantity:
  value: 20200000
  unit: m
  measure: 轨道高度（距地表平均高度，非轨道半径）
  approximate: true
displayValue: '约 20,200 km（轨道高度）'
related:
  - space.geostationary-orbit
  - space.iss
  - space.earth
  - space.light-second
  - temperature.venus-surface
  - time.solar-system
reviewStatus: reviewed
sources:
  - title: GPS Space Segment
    url: 'https://www.gps.gov/gps'
    publisher: GPS.gov（美国政府）
    accessed: '2026-11-06'
  - title: GPS
    url: 'https://www.britannica.com/technology/GPS'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: '对象为GPS卫星星座的标称轨道高度；采用GPS.gov给出的约20,200公里；不含轨道偏心率造成的每颗卫星高度差，也不把轨道半径与高度混为一谈。'
uncertainty: >-
  GPS.gov给出约20,200公里（12,550英里）；若加地球平均半径6,371公里，轨道半径约26,571公里；不同来源可能写成26,560公里，差异来自地球半径取值与轨道模型。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开GPS.gov太空段页面与Britannica GPS条目，核对轨道高度、12小时周期、6个轨道平面与24个基线槽位。
    - '明确20,200公里是高度，不是半径；轨道半径约26,571公里，二者相差一个地球半径。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: orbital-system
  scene: space.object
  caption: GPS卫星轨道 · 中地球轨道
  note: 地球、轨道面与卫星位置为示意，非按比例，非观测重建；不复现真实星座布局与信号覆盖。
  color: '#7fa8c4'
  variant: orbit
  referenceAxis: x
  framePadding: 0.3
measureType: 距离
tags:
  - 行星与太阳系
  - 距离
  - 行星与地理
---
## 它是什么

GPS卫星轨道是GPS星座运行的中地球轨道。卫星分布在约20,200公里的高度上，绕地球一圈约12小时，因此同一颗卫星每天会两次经过同一片天空。本条量的是轨道高度，不是轨道半径，也不是地球到卫星的总距离。[1] 星座通常保持24颗以上可用卫星。

## 怎样知道

GPS.gov说明GPS卫星在中地球轨道运行，高度约20,200公里，每颗卫星每天绕地球两圈，星座分布在6个等间隔轨道面、每个面4个槽位。[1] 这些参数来自星座设计与长期测轨，不是单次观测。Britannica条目给出24颗主卫星、6个轨道、约12小时周期，与GPS.gov一致。[2] 轨道高度由地心半径减去地球半径得到，因此地球半径取值会影响换算结果。

## 数值与口径

本条取20,200公里，即2.02×10⁷米。若把地球平均半径6,371公里加上去，轨道半径约26,571公里；有些资料直接写26,560公里，是因为用了不同的地球半径或标称轨道模型。[1] 这个高度不含大气层，也不把卫星天线或太阳能板算进去。讨论“卫星离地心多远”时，应使用轨道半径；讨论“卫星离地面多高”时，才用本条的高度。

## 常见误解

常见误解是GPS卫星是地球静止卫星；静止轨道高度约35,786公里，周期约24小时，而GPS在约20,200公里、周期约12小时，属于中地球轨道。[1][2] 另一个误解是“24颗卫星”永远不变；实际星座会保持超过24颗在轨卫星以维持覆盖。还有人把轨道高度与轨道半径混用，导致距离被低估一个地球半径。

## 与其他尺度的关系

20,200公里约为地球平均半径6,371公里的3.17倍，约为国际空间站约400公里高度的50倍。[1] 它约为地球静止轨道高度35,786公里的0.56倍，也约为地月平均距离3.84×10⁵公里的0.053倍。[2] 光在20,200公里高度上往返约需0.13秒，这是GPS测距必须考虑的传播时间。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]
