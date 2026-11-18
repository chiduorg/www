---
id: space.infrared
title: 红外线
titleEn: Infrared
dimension: length
category: 量子与粒子
summary: 红外线是可见光红光端之外、微波之前的电磁波段，人眼不可见，常表现为热辐射。本条取10微米作为代表波长，量的是真空中的波长。
quantity:
  value: 0.00001
  unit: m
  measure: 波长（红外波段代表值，约10 µm）
  approximate: true
displayValue: 约 10 µm（红外波段代表波长）
related:
  - space.microwave
  - space.visible-light
  - space.red-light
  - space.atmosphere
  - space.earth
  - space.terahertz
reviewStatus: reviewed
sources:
  - title: infrared radiation
    url: 'https://www.britannica.com/science/infrared-radiation'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: The Electromagnetic Spectrum — Introduction
    url: 'https://imagine.gsfc.nasa.gov/science/toolbox/emspectrum1.html'
    publisher: NASA Goddard Space Flight Center
    accessed: '2026-11-06'
conditions: 对象为红外波段的电磁波波长；介质取真空，地面观测路径中的水汽与二氧化碳会吸收部分红外；10微米是代表值。
uncertainty: 红外分近、中、远三区，边界随探测器响应与大气窗口变化；常见总范围为0.7至1000微米，本条取10微米。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用 WebFetch 打开 Britannica 红外辐射页与 NASA Imagine 电磁波谱介绍页，核对近、中、远红外分区与微米口径。
    - 按五节结构新撰；说明红外亮度还取决于温度与发射率，不能直接读成温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "field"
  scene: "space.object"
  caption: "红外波段约10微米波长参照"
  note: "色带与热场分布为示意，非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 波长
tags:
  - 量子与粒子
  - 波长
  - 细胞与微粒
---
## 它是什么

红外线是可见光红光端之外、微波之前的电磁波段，人眼不可见，常表现为热辐射。[1] 本条量的是真空中的波长，不是温度，也不是总能量。红外在空气中传播时会受水汽和二氧化碳吸收，因此地面红外观测多选干燥高海拔站点，或把望远镜送入太空。

## 怎样知道

Britannica 把红外分为近红外0.78至约2.5微米、中红外2.5至约50微米、远红外50至1000微米。[1] NASA 的近似谱段表给出700纳米至1毫米，并说明红外天文学常用微米作单位。[2] 这些边界随探测器响应和大气窗口变化，所以不同教材的数字略有差别。红外观测的亮暗还取决于物体温度与发射率，不能直接把亮度读成温度。

## 数值与口径

本条取10微米作为代表波长，approximate 为 true，位于中红外。[1] 10微米等于0.00001米，对应约30太赫兹。[1][2] 若取近红外1微米，则更接近可见光；若取远红外100微米，则更接近微波。比较红外数据时，必须同时说明波段、介质，以及数值是峰值波长还是某一谱线。

## 常见误解

“红外就是热”并不准确：有温度的物体都发射红外，但红外亮度还取决于发射率与表面性质。[1] 另一个误解是把红外夜视等同于“看到温度”；设备把红外辐射转成可见图像，读数仍需标定。也不能把红外波长与可见光颜色一一对应，红外本身没有可被人眼直接感知的颜色。

## 与其他尺度的关系

10微米约为头发直径的几分之一，比红光700纳米长约14倍。[1][2] 红外位于可见光与微波之间，是热辐射与分子振动谱的主要窗口。地面红外受水汽影响明显，空间红外望远镜因此常需要低温冷却和轨道环境。[2]
