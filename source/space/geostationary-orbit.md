---
id: space.geostationary-orbit
title: 地球同步轨道
titleEn: Geostationary Orbit
dimension: length
category: 日常与人造
summary: '地球静止轨道位于赤道上空约 35,786 公里。NOAA 的两处资料分别以公里和英里登记这一高度。本条比较轨道高度，而不是到地心距离或轨道周长。'
quantity:
  value: 35786000
  unit: m
  measure: 轨道高度（赤道上空 35 786 公里）
  approximate: true
displayValue: '35,786 km（轨道高度）'
related:
  - time.blink
  - space.earth
  - space.moon
  - space.iss
  - space.lhc
  - space.jwst-mirror
reviewStatus: reviewed
sources:
  - title: Geostationary Earth Orbit Satellite (GEO)
    url: >-
      https://coastwatch.noaa.gov/cwn/platform-types/geostationary-earth-orbit-satellite-geo.html
    publisher: NOAA CoastWatch
    accessed: '2026-11-06'
  - title: Geostationary Satellites — NOAA's GOES-R Series
    url: >-
      https://www.nesdis.noaa.gov/our-satellites/currently-flying/geostationary-satellites
    publisher: NOAA NESDIS
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为地球赤道上空的地球静止轨道（GEO）；测量口径为轨道高度，即赤道海平面到圆轨道的高度，不是到地心距离、轨道周长或卫星尺寸；不适用于倾斜地球同步轨道或其他行星的同步轨道。
uncertainty: >-
  NOAA CoastWatch 给 35,786 公里，NOAA NESDIS 给 22,236 英里（换算 35,786
  公里），两者一致。实际静止卫星需做位置保持，轨道高度存在公里级调整，本条取标称值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '用 WebFetch 打开 NOAA CoastWatch 的 GEO 词条，核对“赤道上空 35,786 公里”。'
    - '用 WebFetch 打开 NOAA NESDIS 静止卫星页，核对“赤道上空 22,236 英里”。'
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: orbital-system
  scene: space.object
  caption: '地球静止轨道高度 35,786 公里示意'
  note: 示意图，非按比例，非观测重建。
  color: '#7fa8c4'
  variant: orbit
  referenceAxis: x
  framePadding: 0.3
measureType: 距离
tags:
  - 日常与人造
  - 距离
  - 建筑与地貌
---
## 它是什么

地球同步轨道是卫星以与地球自转相同角速度运行的圆轨道。当轨道面与赤道面重合、运行方向与地球自转一致时，卫星相对地面某点保持静止，因此又称地球静止轨道。[1][2] 本条比较的是轨道高度：从赤道海平面到轨道的高度，而不是轨道周长、卫星尺寸或到月球的距离。

## 怎样知道

这个高度由轨道力学决定：卫星绕地周期必须等于一个恒星日，才能与地面同步。NOAA CoastWatch 的词条给出“赤道上空 35,786 公里”。[1] NOAA NESDIS 的静止卫星页写“赤道上空 22,236 英里”。[2] 22,236 英里换算为 35,786 公里，两处读数一致，说明这一高度是国际通用的标称值。

## 数值与口径

本条采用 35,786 公里，即 35,786,000 米。[1][2] 这是圆轨道相对赤道海平面的高度，不是到地心的距离；到地心还应加上地球赤道半径。轨道周长、单星覆盖范围和卫星离地距离是不同量。地球静止轨道要求轨道面在赤道面内；若轨道倾角不为零，卫星每天会在南北方向画出一个“8”字，周期相同但不再严格静止。

## 常见误解

把 35,786 公里当成到地心距离，会少算地球半径，进而使轨道速度与周期的计算出现偏差。也不要把“地球同步”与“地球静止”完全等同：同步只要求周期匹配，静止还要求轨道在赤道面内且接近圆轨道。[1] 另一种误解是把这一高度当作卫星本身的尺度；它描述的是轨道高度，与卫星大小无关。

## 与其他尺度的关系

35,786 公里约为地球直径 12,742 公里的 2.8 倍，约为地月平均距离 384,400 公里的 9.3%。它相当于约 94 米国际空间站桁架长度的 38 万倍。与地球半径相比，这个高度约为 5.6 个地球半径。正因为距离远，单颗静止卫星可覆盖约三分之一的地球表面，但信号往返延迟也明显增加。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 119 毫秒，在时间轴上量级接近「眨眼」。[3]
