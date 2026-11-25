---
id: space.solar-system
title: 太阳系
titleEn: Solar System
dimension: length
category: 行星与太阳系
summary: 太阳系没有单一外边界。本页以海王星平均日距的两倍约90亿公里，表示主要行星轨道区域的参考宽度。
quantity:
  value: 9000000000000
  unit: m
  measure: 以海王星平均轨道距离的两倍表示的行星轨道区域参考宽度
  approximate: true
displayValue: 约 9 × 10¹² m（海王星轨道区域参考宽度）
related:
  - time.solar-system
  - space.sun
  - space.earth
  - space.kuiper-belt
  - temperature.sun-surface
  - mass.sun
reviewStatus: reviewed
sources:
  - title: Neptune Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/neptunefact.html'
    publisher: NASA / NSSDCA
    accessed: '2026-11-06'
  - title: Oort cloud
    url: 'https://www.britannica.com/science/Oort-cloud'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Kuiper Belt and Oort Cloud (NASA lithograph)
    url: >-
      https://www.nasa.gov/sites/default/files/files/Kuiper_Belt_Lithograph_h.pdf
    publisher: NASA
    accessed: '2026-11-06'
  - title: "How Did the Solar System Form?"
    url: "https://spaceplace.nasa.gov/solar-system-formation/en/"
    publisher: "NASA Space Place"
    accessed: '2026-11-24'
  - title: "Solar System Facts — Formation and Structure"
    url: "https://science.nasa.gov/solar-system/solar-system-facts/"
    publisher: "NASA"
    accessed: '2026-11-24'
legacy:
  id: solar-system
  icon: "\U0001FA90"
  relatedLabels: 行星科学、太阳系形成、小行星带、柯伊伯带、日球层、行星际介质
conditions: 行星轨道区域参考宽度，适用于行星系统概览；不是整个太阳系的唯一边界，也不等同于日球层顶或奥尔特云外缘。
uncertainty: 9×10¹² m 由海王星半长轴约30.18 au 的两倍取整而来（约60.4 au），是轨道区域概览值，不是某时刻两个天体的实测距离。
review:
  method: source-check
  date: '2026-11-08'
  notes:
    - >-
      本轮按五节结构重写；用 WebFetch 打开 NASA 海王星事实表、Britannica 奥尔特云页与 NASA 图版
      PDF，核对海王星轨道尺度与多层边界定义。
    - 明确“行星轨道区域”与日球层顶、柯伊伯带、奥尔特云的区别；quantity 数值保持不变。
  originalQuantity:
    value: 9000000000000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "distance"
  scene: "space.solar-system"
  caption: "太阳系 · 行星轨道区域"
  note: "外轨道直径作为比较参照，不代表整个太阳系边界；行星图标为可见性放大，天体大小与轨道距离不采用同一比例；图为示意，非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 距离
tags:
  - 行星与太阳系
  - 距离
  - 恒星与行星系
---
## 它是什么

太阳系是以太阳为中心、受其引力束缚的天体系统，包括八颗行星、矮行星、卫星、小行星、彗星与行星际介质。[1] 它没有唯一外边界：不同问题要用不同定义，例如行星轨道区域、日球层顶或奥尔特云外缘。太阳占太阳系总质量的99%以上，是引力与能量的主导源。

## 怎样知道

行星轨道由长期天体测量与航天器跟踪确定。NASA海王星事实表给出轨道半长轴4,514.953×10⁶公里，约30.18 au，近日点约29.89 au、远日点约30.47 au。[1] 更外侧的柯伊伯带、散射盘与奥尔特云则靠小天体编目、彗星轨道反推和模型估计，而非直接成像。[2][3] 对更远天体，轨道周期与近日点分布比单次成像更能约束其归属。

## 数值与口径

本条用海王星平均轨道距离的两倍表示主要行星轨道区域的参考宽度：约45.15亿公里×2≈90.3亿公里，取整为9×10¹²米。[1] 这是“行星区域”口径，不是整个太阳系的直径。行星轨道区域近似以海王星为外缘，但海王星轨道本身也是椭圆。日球层顶在约121.6 au，奥尔特云外缘可到100,000 au，二者都远超这个宽度。[3]

## 常见误解

常见误解是太阳系有一个公认的球形外壳，或把海王星轨道当成太阳系终点。海王星之外还有柯伊伯带、散射盘与奥尔特云。[2][3] 另一个误解是把轨道图上的行星大小与间距按同一比例理解；示意图通常放大天体、压缩距离。

## 与其他尺度的关系

9×10¹²米约合60 au，约为地球轨道半径的60倍。它比日球层顶121.6 au小一半，比奥尔特云外缘100,000 au小约一千七百倍。[3] 因此“太阳系大小”必须先说明采用哪一层边界。若把奥尔特云计入，太阳系尺度可再扩大约三个数量级。

## 太阳系边界有几种

行星区域以海王星轨道为参考，约 30 au；日球层顶约 121.6 au；奥尔特云外缘可到约 100,000 au。[2][3] 三种边界回答不同问题：行星系统到哪里、太阳风在哪里终止、彗星储库延伸多远。把它们混成一个“太阳系直径”，会相差三个数量级。

## 轨道图不是按比例的地图

教科书图常放大行星、压缩间距，否则行星在页面上会小到看不见。海王星轨道约 30 au，而地球轨道 1 au；若按同一比例画，行星直径只有微米级。读图时要先看标注，不能从画面测量距离。

## 五轴对照

在空间轴，行星区域约 60 au 宽；在质量轴，太阳占太阳系总质量的 99% 以上；在时间轴，太阳系形成于约 46 亿年前；在温度轴，太阳表面与行星大气差异巨大。太阳系的“大小”取决于边界定义，不是单一数字。[1][3]

## 太阳系边界有三种说法

太阳系边界可以指行星轨道范围、柯伊伯带外缘，或太阳引力主导的奥尔特云。三者的尺度从几十天文单位到几万天文单位，差三个数量级。正文若写“太阳系直径”，必须说明采用哪一种边界；把奥尔特云算进来，太阳系比通常的行星盘大得多。[1][S1]

## 读数的口径与换算

本条采用的量是 约 9 × 10¹² m（海王星轨道区域参考宽度），口径是 以海王星平均轨道距离的两倍表示的行星轨道区域参考宽度。空间轴上的长度还要区分半径、直径、距离与投影跨度；同一对象在不同参考面下会给出不同数值。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（NASA Space Place）、[5]（NASA） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
