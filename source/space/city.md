---
id: space.city
title: 城市
titleEn: City
dimension: length
category: 地球与地质
summary: 城市没有一种天然统一的直径。本条以中国上海市行政区为样本，用东西向最大跨度约 100 公里作为可复现的比较值，并说明行政边界、人口聚集区和通勤联系区的差别。
quantity:
  value: 100000
  unit: m
  measure: 上海市行政区东西向最大跨度（行政边界口径的样本值）
  approximate: true
displayValue: 约 100 km（上海市行政区东西跨度）
related:
  - space.burj-khalifa
  - space.golden-gate-bridge
  - space.island
  - space.everest
  - time.earth-formation
  - temperature.earth-mantle
reviewStatus: reviewed
sources:
  - title: OECD Definition of Cities and Functional Urban Areas
    url: >-
      https://www.oecd.org/en/data/datasets/oecd-definition-of-cities-and-functional-urban-areas.html
    publisher: OECD
    accessed: '2026-11-06'
  - title: 'Cities — Methodology: Concepts and definitions'
    url: 'https://ec.europa.eu/eurostat/web/cities/methodology'
    publisher: European Commission / Eurostat
    accessed: '2026-11-06'
  - title: 自然状况（2005）— 上海统计年鉴
    url: 'https://tjj.sh.gov.cn/tjnj/nj06.htm?d1=2006tjnj/C0100.htm'
    publisher: 上海市统计局
    accessed: '2026-11-07'
  - title: Shanghai — Location and Area
    url: 'https://www.xinhuanet.com/APEC2001/english/chinaAPEC/shanghai.htm'
    publisher: 新华网
    accessed: '2026-11-07'
legacy:
  id: city
  icon: "\U0001F3D9"
  relatedLabels: 城市规划、地理学、城市化、可持续发展、智慧城市、城市生态学
conditions: >-
  对象限定为中国上海市行政区（2024 年边界），量取东西向最大跨度；采用行政边界口径，不含海域与跨市通勤区；其他城市、年份与边界口径不能直接套用该值。
uncertainty: >-
  上海市统计局与官方概况给出东西宽约 100 公里、南北长约 120 公里；这是行政区划边界的近似跨度，随填海、边界调整与端点取法略有变化。若改用城市核心建成区或功能城市区口径，数值会明显不同。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 本轮按五节结构重写；用WebFetch打开OECD城市定义页与Eurostat城市统计方法页，核对城市、通勤区与功能城市区的定义。
    - 保留未定量值：尚无指定城市、边界版本与测量方向，旧示意值只留作修订证据。
    - 2026-11-07 保留 needs-review：城市比较口径未定义：未指定城市、行政边界与测量方向，无法固定唯一跨度。
    - 2026-11-07 B5 口径定义：以中国上海市行政区为样本、东西向最大跨度为口径；上海统计年鉴给出东西宽约 100 公里、南北长约 120 公里，官方概况页同量级，据此转 reviewed。
  originalQuantity:
    value: 10000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: terrain
  scene: space.earth
  caption: 城市边界与范围示意
  note: 城市轮廓、边界与建筑分布为示意，非按比例，非观测重建；不代表任何真实城市的行政边界或建成区范围。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 地球与地质
  - 尺寸
  - 未定量值
---
## 它是什么

“城市”没有天然统一边界。本条想比较的是城市实体范围，它可能指行政市、人口密集的城市核心，或含通勤区的功能城市区。[1][2] 行政边界常沿道路、河流或历史界线划定，未必与连续建成区重合；同一个地名在不同统计口径下可能对应不同面积。城市内部还有空地、水域和农田，因此边界内的总面积也不等于建筑覆盖面积。

## 怎样知道

OECD用人口密度与连续建成区识别城市，再把与中心通勤联系密切的周边地区并入功能城市区；Eurostat把城市核心定为至少5万居民，并要求通勤区至少15%就业人口进城工作。[1][2] 具体到样本，上海市统计局的《上海统计年鉴》自然状况页写明：全市面积6340.5平方公里，南北长约120公里，东西宽约100公里。[3] 新华社的上海概况页给出同一量级。[4]

## 数值与口径

本条取上海市行政区东西向最大跨度约100公里（1×10⁵米）作为样本值，南北向约120公里仅作对照。[3][4] 行政边界口径与城市核心、功能城市区不可互换：同一城市按不同边界量，面积可能相差数倍。要复现这个数，必须固定城市、边界版本、年份与方向；旧10公里示意值没有这些条件，已不采用。[1][2]

## 常见误解

“城市大小就是一个直径”不对：城市形状不规则，面积相同也可能一狭长一紧凑；人口多不等于跨度大。面积也不能直接开平方当作真实宽度。[1][2] 另一种误解是把行政边界内的全部土地都算作建成区；边界内往往包含山地、水域和农地。比较城市时，先说明是行政市、城市核心还是功能城市区，再谈大小。

## 与其他尺度的关系

100公里约为金门大桥全长2.7公里的37倍，也约为珠穆朗玛峰高度8.849公里的11倍；它不到北京到天津直线距离的一半。建筑高度与桥梁长度只描述城市中的局部构件，不决定城市边界。[1][3] 城市尺度之上还有岛屿、山脉和行星尺度；同一张地图上，这些对象的边界来源并不相同。


## 深读一：量值口径

本条的核心量值是 100,000 m，量的是上海市行政区东西向最大跨度（行政边界口径的样本值）。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：对象限定为中国上海市行政区（2024 年边界），量取东西向最大跨度；采用行政边界口径，不含海域与跨市通勤区；其他城市、年份与边界口径不能直接套用该值。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照哈利法塔（828）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
