---
id: space.galactic-center
title: 银河系中心
titleEn: Galactic Center
dimension: length
category: 星系与宇宙
summary: 银河系中心指银河系核球与核星团所在的方向，距地球约2.7万光年，换算约2.55 × 10²⁰米；它不是银心区域或黑洞的直径。
quantity:
  value: 255439722759681600000
  unit: m
  measure: 所引ESA/Hubble资料中的地球至银河中心近似距离
  approximate: true
displayValue: 约 2.55 × 10²⁰ m（2.7万光年）
related:
  - space.milky-way
  - space.milky_way_disk
  - space.observable-universe
  - space.light-year
reviewStatus: reviewed
sources:
  - title: The Galactic Centre — heic1606a
    url: 'https://esahubble.org/images/heic1606a/'
    publisher: ESA / Hubble / NASA
    accessed: '2026-11-06'
  - title: The Milky Way — Cosmic Distance Scale
    url: 'https://imagine.gsfc.nasa.gov/features/cosmic/milkyway_info.html'
    publisher: NASA / GSFC / HEASARC
    accessed: '2026-11-06'
  - title: Astrodynamic Parameters — Julian year and speed of light
    url: 'https://ssd.jpl.nasa.gov/astro_par.html'
    publisher: NASA / JPL Solar System Dynamics
    accessed: '2026-11-06'
legacy:
  id: galactic-center
  icon: "\U0001F300"
  relatedLabels: 超大质量黑洞、人马座A*、自适应光学、事件视界望远镜、引力透镜、恒星动力学
conditions: 指定资料中地球到银河系中心的距离概览，不是中心区域、核星团或Sgr A*的事件视界直径。
uncertainty: >-
  2.7万光年来自ESA/Hubble红外图像说明的近似距离；NASA/GSFC以太阳距银心约8千秒差距（约2.6万光年）表述，二者相差约3%，主要来自银河系几何、距离阶梯和取整差异。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮按五节结构重写；用WebFetch打开ESA/Hubble
      heic1606a与NASA/GSFC页面，核对2.7万光年、8千秒差距及红外成像说明。
    - 补充中心距离与核区/黑洞尺度分离；quantity 数值、canonical 关系与visual原有键保持不变。
  originalQuantity:
    value: 250000000000000000000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: distance
  variant: star
  color: '#dfbf91'
  referenceAxis: x
  caption: 地球到银河中心的近似距离
  note: 中心间标线表示距离；银河中心光点不表示中心黑洞直径，端点外形和辉光均夸张；图为示意，非按比例，非观测重建。
  framePadding: 0.35
  sourceMeasure: 所引ESA/Hubble资料中的地球至银河中心近似距离
  scene: space.object
measureType: 距离
tags:
  - 星系与宇宙
  - 距离
---
## 它是什么

银河系中心是银河系核球与核星团所在的方向，位于人马座，距离地球约2.7万光年。本页量的是我们到银心的距离，不是银心区域或其中超大质量黑洞的直径。[1][2]

## 怎样知道

可见光被银道面上的尘埃大量遮挡，Hubble用红外波段穿透尘埃，拍到核星团及中央的Sgr A*。图像说明给出2.7万光年的距离。[1] 另一条证据来自恒星运动：长期监测银心附近恒星的开普勒轨道，可独立约束中心质量与距离。NASA/GSFC的资料则给出太阳距银心约8千秒差距，即约2.6万光年。[2] 两条口径相差约3%，属于不同测量传统与取整的结果。

## 数值与口径

按1光年约9.461×10¹⁵米，2.7万光年约合2.55×10²⁰米。[1][3] 8千秒差距约合2.61万光年，若采用8.3千秒差距等现代取值还会略变。可见2.7万光年是概览值，不是精确到个位的天测结果。[2] 银心区域的大小则要用核星团半径或黑洞质量另行描述。

## 常见误解

银心不是宇宙的中心，只是我们所在星系的一个内部位置。图像中央最亮的光点也不等于黑洞的事件视界；Sgr A*质量虽大，其视界直径仍远小于图中一个像素对应的尺度。[1] 还有人把银心距离与银河系直径混为一谈：2.7万光年只是半径方向的一段，而银盘直径约10万光年。[2]

## 与其他尺度的关系

太阳位于距银心约2.7万光年处；若把银盘直径按约10万光年计，太阳大致在半径的一半处。[1][2] 这个距离约等于地球到仙女座星系距离的1%，却已是太阳系到比邻星距离的数千倍。把银心放进尺度轴时，应把到中心的距离、核区大小和黑洞半径分别标注。
