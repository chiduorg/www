---
id: space.betelgeuse
title: 参宿四直径
titleEn: Betelgeuse Diameter
dimension: length
category: 恒星与星际
summary: 参宿四直径依赖角直径、距离与表面定义。所引2022年研究采用约1000太阳半径作工作假设，本页据此给出约1.39×10¹²米的比较直径。
quantity:
  value: 1391400000000
  unit: m
  measure: 所引2022年研究采用1000太阳半径时的两倍半径
  approximate: true
displayValue: 约 1.39 × 10¹² m（特定研究采用值）
related:
  - space.sun
  - space.sun_diameter
  - space.proxima-centauri
  - space.crab-nebula
  - space.supergiant-star
reviewStatus: reviewed
sources:
  - title: >-
      Dupree et al. (2022), The Great Dimming of Betelgeuse: a Surface Mass
      Ejection and its Consequences, §1
    url: >-
      https://assets.science.nasa.gov/content/dam/science/missions/hubble/releases/2022/08/STScI-01GA6PQQ0RZEDP76CKEDD01A74.pdf
    publisher: Dupree et al. / NASA-hosted author manuscript
    accessed: '2026-11-06'
  - title: Sun Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html'
    publisher: NASA / NSSDCA
    accessed: '2026-11-06'
legacy:
  id: betelgeuse
  icon: "\U0001F534"
  relatedLabels: 太阳、天文单位、超新星爆发、猎户座大星云、恒星核合成
conditions: 指参宿四光球层在特定研究采用 1000 太阳半径假设下的直径，适用于恒星尺度比较；不是永久不变的真实边界，也不含延伸大气与光晕。
uncertainty: >-
  1000 R☉ 是 Dupree 等 2022 年采用的工作假设（引自 Ohnaka 等 2011、Harper 等
  2017），不是本轮新测量；角直径与距离组合不同会给出不同半径，故本条只是该假设下的换算值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮按五节结构重写；用 WebFetch 打开 Dupree 等 2022 年论文 PDF 与 NASA 太阳事实表，核对 1000 R☉
      假设及太阳半径换算。
    - 明确该值来自模型采用假设而非直接测量，避免把参宿四写成固定尺寸；quantity 数值保持不变。
  originalQuantity:
    value: 1200000000000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: sphere
  variant: star
  color: '#df9271'
  referenceAxis: x
  caption: 指定研究假设下的参宿四直径
  note: 比较轴对应两倍采用半径；表面纹理与辉光为程序示意，光晕不计入直径；非按比例，非观测重建。
  framePadding: 0.31
  sourceMeasure: 所引2022年研究采用1000太阳半径时的两倍半径
  scene: space.object
measureType: 尺寸
tags:
  - 恒星与星际
  - 尺寸
  - 恒星与行星系
---
## 它是什么

参宿四是猎户座的红超巨星，质量约为太阳的十几到二十倍。它的“直径”不是一条可直接测量的硬边，而是由角直径、距离和表面定义共同推出的尺度。[1] 红超巨星在演化晚期膨胀，光球温度较低而半径很大。

## 怎样知道

恒星干涉与光谱观测给出角直径，再乘以距离得到线性半径；距离本身依赖视差与模型。[1] Dupree等人在2022年分析参宿四“大暗化”时，采用R*=1000 R☉作为延伸大气计算的工作假设，并注明引自Ohnaka等与Harper等的研究。[1] 该文并不把1000 R☉当作一次新的直接测量。干涉测量在不同波段给出不同角直径，因为各波段对应的恒星层不同。

## 数值与口径

按1000个太阳半径、太阳体积等效平均半径695,700公里计算，半径约6.957×10¹¹米，直径约1.3914×10¹²米。[2] 这是模型采用值，不是参宿四永久不变的唯一尺寸；不同距离与角直径组合会给出不同结果。[1] 本条quantity正对应“1000 R☉假设下的两倍半径”。若改用较小的半径估计，直径会相应缩短；本条不追求单一“真值”。

## 常见误解

常见误解是把参宿四的直径与它到地球的距离混为一谈，或以为红超巨星一定比所有恒星都大。直径是物体尺度，距离是另一回事。[1] 另一个误解是把光晕或延伸大气的外缘算进光球直径；观测定义通常指光球层。报告半径或直径时，必须与所用距离和表面定义一起说明。

## 与其他尺度的关系

1.39×10¹²米约合9.3 au，约为太阳直径的1000倍。[2] 把它放进太阳系，直径可延伸到木星轨道附近；但与它到地球的恒星际距离相比，这个尺寸仍极小。9.3 au也约等于日地距离的9.3倍，可容纳多颗内行星轨道。
