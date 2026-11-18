---
id: space.sun_diameter
title: 太阳直径
titleEn: Sun Diameter
dimension: length
category: 恒星与星际
summary: '太阳直径采用与主条目一致的体积等效平均口径：NASA 平均半径695,700公里的两倍，即139.14万公里。'
quantity:
  value: 1391400000
  unit: m
  measure: 太阳体积等效平均半径695700 km的两倍
  approximate: true
displayValue: 约 139.14 万 km（体积等效平均直径）
related:
  - space.sun
  - space.earth
  - temperature.sun-surface
  - space.betelgeuse
reviewStatus: reviewed
sources:
  - title: Sun Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html'
    publisher: NASA / NSSDCA
    accessed: '2026-11-06'
  - title: Sun
    url: 'https://www.britannica.com/place/Sun'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: sun_diameter
  icon: ☀️
  relatedLabels: 太阳、核聚变、日震学、太阳风、参宿四、恒星演化、天文单位
conditions: 与 space.sun 相同的 NASA 体积等效平均直径，适用于光球层尺度比较；不含延伸日冕，不是地球上看到的角直径。
uncertainty: '1,391,400 km 由 695,700 km 平均半径乘 2 得到，半径本身是体积等效平均模型值；太阳自转与磁场造成的微小扁率在此精度下可忽略。'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用 WebFetch 打开 NASA 太阳事实表与 Britannica 太阳页，核对平均半径、角直径与地球半径比值。
    - 明确光球直径、日冕与角直径的区别；quantity 数值保持不变。
  originalQuantity:
    value: 1390000000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: sphere
  variant: star
  color: '#e4b57a'
  referenceAxis: x
  caption: 太阳平均直径（兼容入口）
  note: 与 space.sun 同一平均口径；程序表面和光晕为示意，日冕不计入直径；非按比例，非观测重建。
  framePadding: 0.31
  sourceMeasure: 太阳体积等效平均半径695700 km的两倍
  scene: space.object
measureType: 尺寸
tags:
  - 恒星与星际
  - 尺寸
  - 恒星与行星系
conceptGroup: sun
---
## 它是什么

太阳直径是太阳光球层的尺度，通常用体积等效平均半径的两倍表示。NASA给出太阳体积等效平均半径695,700公里，因此平均直径约1,391,400公里。[1] 它是光球层的几何尺度，不是日冕或太阳风层的范围。太阳是G2V型主序星，光球是可见光的主要来源。

## 怎样知道

太阳半径可由角直径与日地距离推算：NASA事实表给出1 au处角直径约1,919角秒，结合日地距离即可得到线性半径。[1] 日震学、引力场与轨道动力学也提供独立约束。Britannica用“约为地球半径109倍”作数量级描述。[2] 米粒组织与临边昏暗说明光球并非均匀发光面，半径是拟合出的等效值。

## 数值与口径

本条采用1,391,400,000米，即1.3914×10⁹米。[1] 这是体积等效平均直径，不是赤道直径与极直径的分别测量，也不包含延伸日冕。[1] 太阳并非完美球体，自转与磁场会造成微小扁率，但在此精度下可忽略。若用赤道半径与极半径分别计算，差异只有约十万分之几。同一颗太阳在不同定义下会有微小差别，因此必须写明光球与平均半径。

## 常见误解

常见误解是把太阳直径与它到地球的距离混用，或把日冕、日珥的外缘算进直径。[1] 另一个误解是把“角直径1,919角秒”当成固定值；它随日地距离变化，在近日点与远日点略有不同。[1] 把太阳直径与太阳系直径混用也不对：后者取决于所选边界，可大出十几个数量级。

## 与其他尺度的关系

1.39×10⁹米约合4.64光秒，约为地球直径的109倍。[2] 它比水星轨道半长轴5.79×10¹⁰米小约42倍，也比参宿四的模型直径1.39×10¹²米小约1000倍。太阳半径常用R☉作为恒星尺度单位；1 au约等于215个太阳半径。
