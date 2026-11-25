---
id: space.venus
title: 金星
titleEn: Venus
dimension: length
category: 行星与太阳系
summary: '金星的体积等效平均直径为12,104公里，由平均半径6,051.8公里加倍得到。它的赤道与极半径几乎相同，是太阳系中形状最接近球体的行星之一。'
quantity:
  value: 12103600
  unit: m
  measure: NASA事实表口径的体积等效平均直径（固体表面，不含大气）
  approximate: true
displayValue: '12,104 km（体积等效平均直径）'
related:
  - mass.earth
  - temperature.venus-surface
  - space.mercury
  - space.earth
  - space.mars
  - space.sun
reviewStatus: reviewed
sources:
  - title: Venus Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/venusfact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
  - title: Venus
    url: 'https://www.britannica.com/place/Venus-planet'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: '对象为金星固体表面；采用平均半径6,051.8公里加倍；不含厚约数十公里的二氧化碳大气，也不把云顶当作表面。'
uncertainty: >-
  6,051.8公里乘二得12,103.6公里，取整为12,104公里；NASA事实表列赤道与极半径均为6,051.8公里，扁率显示为零，实际差异在测量精度以内。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开NASA金星事实表与Britannica金星条目，核对平均半径、扁率、表面温度与轨道半长轴。
    - 明确直径指固体表面，不把云顶或大气层顶当作金星外壳。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: sphere
  scene: space.object
  caption: 金星 · 行星
  note: 球体、云层纹理和光照为示意，非按比例，非观测重建；不复现真实云带与当日相位。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 行星与太阳系
  - 尺寸
  - 行星与地理
conceptGroup: venus
---
## 它是什么

金星是离太阳第二近的行星，半径与地球接近，常被称为地球的双胞胎。但它被厚重的二氧化碳大气包裹，温室效应使地表温度约737 K，远高于离太阳更近的水星。本条量的是固体表面的体积等效平均直径。[1] 金星自转极慢，一个恒星日约243个地球日，比它的公转周期还长。

## 怎样知道

NASA事实表列出赤道半径、极半径和体积平均半径均为6,051.8公里，扁率显示为零。[1] 这些数据来自雷达测距、麦哲伦号等轨道器的测绘以及掩星观测；雷达能穿透云层，直接约束固体表面形状。Britannica条目同样给出平均半径6,051.8公里，并列出约0.723 au 的轨道半长轴。[2] 两个来源在半径上完全一致，差别只在有效数字。

## 数值与口径

按2×6,051.8公里计算，本条取12,103.6公里，显示为12,104公里。这个数不含大气层；若把云顶算进去，可见轮廓会比固体表面大几十公里，但那不是行星本体的直径。[1] 它的直径约为地球12,742公里的0.950倍，体积约为地球的0.857倍，两者不能混用。

## 常见误解

常见误解是金星离太阳更近，所以一定比水星热；这其实成立，但原因不只是距离，还有厚大气的温室效应。另一个误解是把金星叫作地球的“复制品”：它的直径和密度接近地球，表面压力却约为92巴，环境完全不同。[2] 还有人把望远镜里看到的亮面当作固体表面，那主要是云层反射的阳光。[1]

## 与其他尺度的关系

12,104公里约为地球直径的95%，比火星的6,779公里大近一倍，约为水星4,879公里的2.5倍。[1] 金星轨道半长轴约0.723 au，与地球的1 au 相差约0.28 au；这个距离差与行星直径是不同量纲的比较。[2]

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.21×10⁷ 米，换算后是 1.21×10⁴ 千米；约 0.95 个地球直径（1.2742×10⁷ 米）。这把尺子只改写单位，不改变量值；它把本条固定在空间轴的 10⁷ 量级附近。

读图时先看量级，再看倍数：10⁷ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
