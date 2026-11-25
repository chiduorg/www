---
id: temperature.cloud-top-temperature
title: 云顶温度：250 K 的深对流云塔
titleEn: Cloud-top temperature at 250 K
dimension: temperature
category: 低温
summary: 云顶温度是云层顶部由卫星红外传感器推断的温度；250 K 约 −23 ℃，常见于发展到较高高度的对流云，不是云底或地面温度。
quantity:
  value: 250
  unit: K
  measure: −23 ℃云顶示例
  approximate: true
  measureLabel: 250 K（−23 ℃云顶示例）
displayValue: 250 K（−23 ℃云顶示例）
related:
  - space.cloud
  - temperature.troposphere
  - temperature.sea-surface
  - temperature.wet-bulb-temperature
reviewStatus: reviewed
sources:
  - title: Clouds
    url: 'https://www.noaa.gov/jetstream/clouds'
    publisher: NOAA JetStream
    accessed: '2026-11-23'
  - title: Clouds and the Earth’s Radiant Energy System
    url: 'https://ceres.larc.nasa.gov/'
    publisher: NASA CERES
    accessed: '2026-11-23'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 云顶冰晶与云上空气
  measurementSite: 卫星视场内的云顶
  duration: 卫星过境时刻
  basis: 红外亮温反演，不是探空仪直接测温
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - 本轮新增条目：按所列机构资料重写，核对温度口径、测量位置与适用条件。
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 250 K 是示例；云顶温度随云高、云型、季节和纬度变化，卫星反演还受云光学厚度与重叠云影响。
visual:
  template: planet-environment
  profile: cloud
  caption: 深对流云塔与卫星红外云顶温度的示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#7c9ec3'
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 环境
---
## 它是什么

云顶温度是云层最高处冰晶或水滴的温度。对流云发展得越高，云顶越接近对流层顶，温度通常越低；250 K 约 −23 ℃，可以是较高对流云顶的示例。[1] 它不是云底温度，也不是地面气温，更不能直接当成整层大气的温度。

## 怎样知道

气象卫星的红外传感器测量云顶向外辐射的亮温，再结合云型与大气廓线推断云顶温度。云顶越高、越冷，红外亮温通常越低；但薄云或重叠云会让卫星“看到”更低或更高的层。[2] 地面探空仪可以直接测气温廓线，却很难正好穿过云顶，因此卫星与雷达常一起使用。[1][2]

## 数值与口径

250 K 等于 −23.15 ℃。这个值描述云顶，不是云内所有高度的温度；同一积雨云底部可能接近 20 ℃，顶部却低于 −20 ℃。[1] 卫星亮温还受云发射率影响，薄卷云可能给出偏暖的亮温，因此“云顶温度”与“云顶高度”需要联合判读。

## 常见误解

常见误解是看到卫星图上很冷的云顶，就以为地面也会冷。云顶温度高低的直接意义是对流高度与云的发展，不是地面体感温度。[1][2] 另一个误解是把所有云顶都当成同一温度；层云、卷云与积雨云的厚度和高度差别很大。

## 与其他温度的关系

它远低于 room-temperature 的 20 ℃，但高于 tropopause 附近更低的高空温度；与 cloud 的尺度条目相比，本条测的是温度而不是云的水平宽度。它和 wet-bulb-temperature 都涉及水汽与相变，但一个看高空云顶，一个看近地面人体散热。[1]


云顶温度若接近对流层顶，常说明云塔发展到较高高度，可作为强对流的辅助线索。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 250 K，即 -23.15 ℃（按 T/K−273.15 换算）；约为冰点（273.1 K）的 0.915 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
