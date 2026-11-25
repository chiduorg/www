---
id: space.au
title: 天文单位
titleEn: Astronomical Unit
dimension: length
category: 行星与太阳系
summary: '天文单位现在被定义为精确的149,597,870,700米，适合表达太阳系内距离；它不等于每个时刻的日地距离。'
quantity:
  value: 149597870700
  unit: m
  measure: IAU定义的一个天文单位长度
  approximate: false
displayValue: '149,597,870,700 m（1 au，定义值）'
related:
  - space.solar-system
  - space.earth
  - space.light-year
  - space.mercury-orbit
  - time.solar-system
  - temperature.sun-surface
reviewStatus: reviewed
sources:
  - title: astronomical unit
    url: 'https://www.britannica.com/science/astronomical-unit'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Astrodynamic Parameters
    url: 'https://ssd.jpl.nasa.gov/astro_par.html'
    publisher: NASA / JPL Solar System Dynamics
    accessed: '2026-11-06'
  - title: Sun Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/sunfact.html'
    publisher: NASA / NSSDCA
    accessed: '2026-11-06'
legacy:
  id: au
  icon: "\U0001F30F"
  relatedLabels: 视差测量、金星凌日、雷达天文学、开普勒定律、行星轨道、恒星视差
conditions: 精确定义的长度单位，适用于太阳系内距离换算；不是随地球公转变化的瞬时日地距离，也不能与角秒或秒差距直接互换。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮按五节结构重写；用 WebFetch 打开 Britannica 天文单位页、JPL 天文动力学参数页与 NASA
      太阳事实表，核对定义值、光行时与日地距离范围。
    - 明确区分 IAU 定义的固定单位与逐日变化的日地实际距离；quantity 数值保持不变。
  originalQuantity:
    value: 149600000000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: distance
  variant: unit
  color: '#c4af80'
  referenceAxis: x
  caption: 精确定义的一个天文单位
  note: 标线表示单位长度；两个端点为抽象标记，不暗示地球与太阳的瞬时距离恒定；图为示意，非按比例，非观测重建。
  framePadding: 0.32
  sourceMeasure: IAU定义的一个天文单位长度
  scene: space.object
measureType: 距离
tags:
  - 行星与太阳系
  - 距离
  - 恒星与行星系
---
## 它是什么

天文单位（au）是太阳系内距离的常用长度单位。2012年国际天文学联合会把它的数值固定为149,597,870,700米，约1.496亿公里。[1][2] 它不再由地球到太阳的瞬时距离定义，而是一个约定值，可理解为地球轨道半长轴的现代标定。[1]

## 怎样知道

这个定义来自历史上的视差、金星凌日与雷达测距等多轮测量，最终在2012年由IAU决议固定。[1][2] JPL把1 au与光速、儒略年并列给出，便于把天文距离换算成光行时：1 au约合499.005光秒。[2] 定义固定后，单位本身不再有测量误差，但具体天体的轨道解仍带误差。早期以金星凌日测定太阳视差，20世纪改用雷达测距，精度逐步提高；2012年固定后，观测重点转向行星历表。

## 数值与口径

本条记录的是单位定义值，因此 approximate 为 false。[1] 地球与太阳的实际距离仍随公转变化：NASA给出平均约1.496亿公里，近日约1.471亿公里，远日约1.521亿公里。[3] 这三个数说的是瞬时或平均日地距离，不是“1 au”这个单位在变。

## 常见误解

常见误解是“天文单位就是当下的日地距离”，或以为地球离太阳变远时1 au也变大。前者把单位与瞬时测量混在一起，后者把定义与观测值颠倒。[3] 另一个误解是把au当作角度单位；它是长度单位，不能与角秒、秒差距直接互换。把au与光年混用也是常犯错误：1光年约等于63,241 au，两者相差四个多数量级。

## 与其他尺度的关系

在尺度轴上，1 au约等于地球轨道半长轴，也约等于8.3光分。海王星轨道半长轴约30 au，柯伊伯带主带约30–55 au，奥尔特云外缘可达约10万 au。[2] 因此au适合描述行星系统，描述恒星际距离时用光年或秒差距更方便。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.496×10¹¹ 米，换算后是 1×10⁰ 个天文单位；约 1 个天文单位（1.496×10¹¹ 米）。这把尺子只改写单位，不改变量值；它把本条固定在空间轴的 10¹¹ 量级附近。

读图时先看量级，再看倍数：10¹¹ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
