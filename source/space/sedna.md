---
id: space.sedna
title: 塞德娜远日点
titleEn: Sedna aphelion
dimension: length
category: 行星与太阳系
summary: >-
  塞德娜是一颗轨道极端偏心的海王星外天体。它的远日点约 937 au，约合 1.40×10¹⁴
  米；这里量的是它到太阳的远日点距离，不是天体直径，也不是轨道半长轴。
quantity:
  value: 140173204845900
  unit: m
  measure: 塞德娜远日点日心距离的轨道解参照（约 937 au）
  approximate: true
displayValue: 约 1.40 × 10¹⁴ m（937 au 远日点）
related:
  - mass.earth
  - temperature.venus-surface
  - space.solar-system
  - space.kuiper-belt
  - space.heliopause
  - space.oort-cloud
reviewStatus: reviewed
sources:
  - title: 90377 Sedna (2003 VB12) — Small-Body Database Lookup
    url: 'https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=90377'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-08'
  - title: Dwarf Planet Sedna
    url: 'https://science.nasa.gov/missions/hubble/nasa-is-the-moon-out-tonight/'
    publisher: NASA Science
    accessed: '2026-11-08'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 采用常用轨道解给出的远日点约 937 au；不同观测弧与拟合方案会给出略有差异的远日点，本条不是在天体实际到达远日点时进行的直接测距。
uncertainty: >-
  远日点由轨道拟合外推得到，观测弧长度、摄动模型与非引力参数都会影响结果；另有轨道解给出约 1,007 au。937 au 与 1,007 au
  都应视为模型值，而不是实测边界。
review:
  method: source-check
  date: '2026-11-08'
  notes:
    - 依据 JPL 小天体数据库与 NASA Science 的塞德娜条目，核对远日点约 937 au、近日点约 76 au、半长轴约 506 au。
    - '按 1 au = 149,597,870,700 米换算 937 au，得到约 1.4017×10¹⁴ 米；只在正文说明换算，不引入新的独立量值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: distance
  variant: orbit
  color: '#8fa6c2'
  referenceAxis: x
  caption: 太阳到塞德娜远日点的距离参照
  note: 椭圆轨道、太阳与天体位置均为示意，非按比例，非观测重建；单侧标线只代表远日点距离，不代表天体直径。
  framePadding: 0.55
  sourceMeasure: 塞德娜远日点日心距离的轨道解参照（约 937 au）
  scene: space.object
measureType: 距离
tags:
  - 行星与太阳系
  - 距离
  - 太阳系外缘
---

## 它是什么

塞德娜（90377 Sedna）是一颗轨道非常扁长的海王星外天体：近日点约 76 au，远日点约 937 au，半长轴约 506 au，绕日一周约需一万多年。[1] 本页取远日点约 937 au，换算后约 1.40×10¹⁴ 米。这个数回答的是“它最远能走到离太阳多远”，不是“它有多大”，也不是“它平均离太阳多远”。[1]

## 怎样知道

塞德娜的轨道来自多年观测点的拟合与外推，而不是在远日点现场测距。天体越靠近近日点、观测弧越长，轨道解通常越稳定；远日点仍是一个由引力模型算出的位置。JPL 小天体数据库给出的轨道要素，是这类距离最常用的公开口径。[1] NASA 的矮行星介绍则把塞德娜放在海王星外天体的背景中，说明它为何被视为太阳系外缘的极端样本。[2]

## 数值与口径

按 1 au = 149,597,870,700 米换算，937 au 约合 1.4017×10¹⁴ 米。不同轨道解并不完全一致：另有资料给出远日点约 1,007 au，二者相差约 7%。这不是测量误差的简单放大，而是观测弧、摄动模型与拟合选择共同造成的模型差异。本页保留 937 au 作为常用参照，并在不确定度中写明另一个量级相近的解。[1]

## 常见误解

常见误解之一是把远日点当成天体直径。塞德娜本体直径只有数百公里量级，远日点却是它到太阳的距离，两者不能放在同一把尺上直接比较。另一个误解是把 au 当成光年：937 au 约合 0.0148 光年，仍远小于比邻星的距离。[1] 还有一点容易被忽略：远日点不是“太阳引力终止处”，它只是这条椭圆轨道上离太阳最远的一点。

## 与其他尺度的关系

把塞德娜放进太阳系外缘的序列里：柯伊伯带主区外缘约 50 au，日球层顶约 121.6 au，塞德娜远日点约 937 au，奥尔特云内层约从 20,000 au 开始，外层模型上端约 100,000 au。[1][2] 它恰好落在日球层顶与奥尔特云之间的空档里，是理解“太阳系边界”不能只看一条线的良好参照。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]
