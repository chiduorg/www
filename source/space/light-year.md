---
id: space.light-year
title: 光年
titleEn: Light Year
dimension: length
category: 恒星与星际
summary: '光年是长度单位，不是时间单位。真空光速乘以365.25日儒略年，得到9,460,730,472,580,800米。'
quantity:
  value: 9460730472580800
  unit: m
  measure: 真空光速乘以365.25日儒略年的长度
  approximate: false
displayValue: '9,460,730,472,580,800 m（1光年）'
related:
  - space.light-second
  - space.au
  - space.proxima-centauri
  - space.omega-centauri
  - time.first-stars
  - temperature.sun-surface
reviewStatus: reviewed
sources:
  - title: Astrodynamic Parameters — Julian Year and Speed of Light
    url: 'https://ssd.jpl.nasa.gov/astro_par.html'
    publisher: NASA / JPL Solar System Dynamics
    accessed: '2026-11-06'
  - title: light-year
    url: 'https://www.britannica.com/science/light-year'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: How far away are the stars?
    url: 'https://supernova.eso.org/exhibition/0404/?lang=en'
    publisher: ESO Supernova
    accessed: '2026-11-06'
legacy:
  id: light-year
  icon: "\U0001F4AB"
  relatedLabels: 光速、恒星视差、盖亚任务、天体测量学、星际介质、光行差
conditions: 以儒略年365.25日、每日86400秒和真空光速299792458米每秒为定义约定；是长度单位，不是时间单位，也不是某一历元的实测距离。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮按五节结构重写；用 WebFetch 打开 JPL 天文动力学参数页、Britannica 光年页与 ESO
      恒星距离页，核对光速、儒略年、换算关系与比邻星距离。
    - 明确光年定义与“看到过去”的区别；quantity 数值保持不变。
  originalQuantity:
    value: 9461000000000000
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
  caption: 光在一个儒略年内走过的定义长度
  note: 端点距离为1光年；时间不是画面播放时长，波形和信号动画不构成真实光速模拟；非按比例，非观测重建。
  framePadding: 0.27
  sourceMeasure: 真空光速乘以365.25日儒略年的长度
  scene: space.object
measureType: 波长
tags:
  - 恒星与星际
  - 波长
  - 星际
---
## 它是什么

光年是长度单位，表示光在真空中一个儒略年走过的距离，不是时间单位。[1][2] 它把光速这个定义值和一年这个时间约定相乘，得到一个便于描述恒星际距离的尺度。它是天文科普与星际比较中最常用的长度单位之一。在专业文献中，恒星距离更常用秒差距，1秒差距约3.262光年。

## 怎样知道

JPL把真空光速取为299,792,458米每秒、儒略年取为365.25日、每日86,400秒。[1] 三者相乘得9,460,730,472,580,800米。Britannica给出约9.46073×10¹²公里，并说明63,241 au等于1光年、3.262光年等于1秒差距。[2] 这些都是定义与换算，不是对某颗星的一次测距。光速是定义值，不再依赖新的测量；年的长度则来自历法约定。

## 数值与口径

本条quantity是定义值，approximate为false。[1] 采用儒略年而非回归年或恒星年，是天文学中的约定；换用别的“年”会得到略有差异的长度。[2] 光在介质中速度较慢，但光年定义明确使用真空光速。因此光年的有效数字由年的定义与光速共同决定，而不是由某次天文观测决定。

## 常见误解

常见误解是把光年当成时间，说“某星多少光年远”时误以为在说年龄。[2] 另一个误解是把“看到的是过去”与单位混淆：距离用光年表达，正说明光行时间；这两件事相关但不等同。[2] 把光年写成“光年/年”或当作速度也是错误；它没有时间量纲。

## 与其他尺度的关系

1光年约合63,241 au，也约合9.46×10¹²公里。[2] 比邻星距太阳约4.26光年，即约4.03×10¹⁶米，是1 au的约27万倍。[3] 银河系盘尺度则以千光年计，需用千秒差距或万光年描述。1光年约合9.46万亿公里，民航客机飞完需约120万年。这个单位在科普中常用，在专业星表里则多与秒差距并列。
