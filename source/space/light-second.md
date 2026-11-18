---
id: space.light-second
title: 光行进一秒
titleEn: Light Second
dimension: length
category: 行星与太阳系
summary: 一光秒表示光在真空中一秒走过的长度。真空光速的SI定义值为299792458米每秒，所以一光秒对应精确的299792458米。
quantity:
  value: 299792458
  unit: m
  measure: 真空光速精确定义值乘以1秒所得长度
  approximate: false
displayValue: '299,792,458 m（1光秒）'
related:
  - space.earth-moon-distance
  - space.au
  - space.earth
  - space.sun
  - space.light-year
reviewStatus: reviewed
sources:
  - title: 2022 CODATA — Complete Listing of Fundamental Constants
    url: 'https://physics.nist.gov/cuu/Constants/Table/allascii.txt'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: SI base unit — metre (m)
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: Bureau International des Poids et Mesures
    accessed: '2026-11-06'
  - title: light-year
    url: 'https://www.britannica.com/science/light-year'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: light-second
  icon: "\U0001F4A1"
  relatedLabels: 光速、罗默、迈克耳孙、深空通信、信号延迟、天文距离单位、时空
conditions: 对象为真空中的光传播；样本是国际单位制定义的真空光速；测量口径为1秒内走过的长度，不适用于玻璃、水、光纤等介质中的传播速度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮按五节结构重写；用WebFetch打开NIST
      CODATA常数表、BIPM米定义页与Britannica光年条目，核对299,792,458米每秒的定义值。
    - 明确光秒是长度单位，不是时间单位；介质中的光速另需条件。
  originalQuantity:
    value: 300000000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: wave
  variant: light
  color: '#a3d6df'
  referenceAxis: x
  caption: 光在真空1 s内走过的定义长度
  note: 端点距离为1光秒；光点、波形、振幅和播放速度为视觉提示，为示意，非按比例，非观测重建。
  framePadding: 0.27
  sourceMeasure: 真空光速精确定义值乘以1秒所得长度
  scene: space.object
measureType: 波长
tags:
  - 行星与太阳系
  - 波长
  - 行星与地理
---
## 它是什么

一光秒是光在真空中1秒内传播的长度，是一个长度单位，不是时间单位，也不是某颗天体的直径。[1][2] 它常用于描述太阳系内的信号延迟与天体间距，例如地球到月球、地球到太阳的距离都可以用光秒表示。把“光走多久”换算成“走了多远”，前提是明确传播介质是真空。

## 怎样知道

米的定义把真空光速固定为299,792,458米每秒；因此1秒对应299,792,458米，这是定义值，不是新一轮测量。[1][2] 1983年国际计量大会通过这一米定义后，光速不再需要单独测量，而成为定义常数。Britannica也用同一光速值定义光年。[3] 所以光秒的精度来自单位制定义，而不是某台仪器的误差。

## 数值与口径

精确值299,792,458米，没有测量不确定度。若换成水、玻璃或光纤，光速变慢，1秒走过的长度就不再是这个值。[1][2] 按儒略年365.25天计算，一光年约含31,557,600光秒；一光秒也等于299,792.458公里。这些换算都建立在真空光速不变的前提上。光秒也可写成约30万公里，便于口算，但精确比较仍需使用定义值；深空通信的往返延迟则按双程计算。

## 常见误解

“光秒是时间单位”不对：它量的是长度。也不能把“光年”与“光秒”混用，光年是光走一年的长度，约9.46万亿公里。[3] 另一种误解是认为光在光纤中也走299,792,458米每秒；介质折射率会使有效速度降低，通信延迟因此更长。光秒描述真空，不直接等于工程介质中的传播距离。

## 与其他尺度的关系

地月平均距离384,400公里约合1.28光秒；日地平均距离1.496亿公里约合499光秒。一光秒约为地球赤道周长40,030公里的7.5倍，却只是光年的一小部分。[1][3]
