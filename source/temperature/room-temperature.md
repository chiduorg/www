---
id: temperature.room-temperature
title: 室温
titleEn: Room-temperature example
dimension: temperature
category: 常温
summary: >-
  这里选择20°C，即293.15K，作为室内环境的日常示例。室温随地点、时段和使用情境而变化，不能把这个方便的参照点说成所有房间都具有的温度或生命活动的最佳值。
quantity:
  value: 293.15
  unit: K
  measure: 20°C室内温度示例
  approximate: true
  measureLabel: 20°C室内温度示例
displayValue: 293.15 K（20 °C，示例）
related:
  - temperature.water-freezing
  - temperature.human-body-temperature
  - temperature.boiling-water
  - space.human
  - time.present
reviewStatus: reviewed
sources:
  - title: 'Kelvin: Introduction'
    url: 'https://www.nist.gov/si-redefinition/kelvin-introduction'
    publisher: NIST
    accessed: '2026-11-04'
  - title: 'NIST Guide to the SI, Chapter 4 — Units and Degree Celsius'
    url: >-
      https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes
    publisher: NIST Special Publication 811
    accessed: '2026-11-04'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: room-temperature
  icon: "\U0001F3E0"
  relatedLabels: 生命、液态水、碳基化学、酶、热力学、宜居带、人体体温、水的沸点、水的冰点、标准条件、室温超导、地球
conditions: 为日常尺度比较选取20°C作室温示例；室温不是全球一致的定义点或最佳生命温度。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 293K与20°C对齐，明确人为示例，删除最佳生命温度断言。
    - 2026-11-04 内容深化：补充概念、来源所支持的机制、比较口径与常见误解；保留原quantity、轴坐标及图景配置。
  originalQuantity:
    value: 293
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "thermometer"
  profile: "room"
  caption: "室内温度计场景"
  note: "20 °C 是选定的室温示例，不是恒定自然常数或健康建议。 所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。"
  backdrop: "everyday"
  color: "#d8825a"
  symbol: "Room example"
  scene: "temperature.object"
zone: 常温
tags:
  - 常温
  - 温度
  - 日常
---
## 先选一个身边的参照

本站用20 °C代表一种室内环境示例，对应293.15 K。这个值由项目主动选择，目的是让读者从熟悉的温区出发；它不是对所有房间的测量结果。NIST的温度科普也采用约21 °C作日常例子，因此不应把某个方便的整数读成全球唯一的“室温定义”。[1][2]

## 摄氏度与开尔文怎样对应

两种温标的零点不同，但单位间隔相同。按定义，摄氏温度的数值等于开尔文温度数值减去273.15；20 °C与293.15 K描述的是同一温度。若从20 °C变到25 °C，温差是5 °C，也就是5 K，计算温差时不用再次加上273.15。[2]

## 20 °C不是10 °C的“两倍热”

摄氏温标的零点带有固定偏移，因此直接用20除以10，不能得到物理上的温度倍数。即使改用开尔文比较，也只是在比较相应热力学温度，不能据此说一个物体所含能量一定是另一个的多少倍。温度的单位K与能量的单位J不同；对象和物质的其他条件也不能省略。[1][2]

## 说室温时还需要什么信息

若在实验或材料说明中写“室温”，应另外给出实际温度及测量条件，不能让这个词代替读数。本文的20 °C没有同时规定湿度、压力、样品组成或测量位置，也不作为所有生命活动、材料保存或反应过程的最佳条件。读者可以把它当成温区路标，具体问题仍需具体条件。

## 从日常温区继续出发

可以把20 °C与水的冰点、人体体温或水的沸点并列，先注意每个条目到底测什么，再看温度差。本站按开尔文参考值排列条目，切换摄氏显示只改变读数表达，并不表示画面里的所有对象经历同一段加热过程。容器、颜色和粒子用于讲解，不是实时室内温度记录。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]


## 深读一：量值口径

本条的核心量值是 293.15 K，量的是20°C室内温度示例。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：为日常尺度比较选取20°C作室温示例；室温不是全球一致的定义点或最佳生命温度。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照水的冰点（273.15）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]

## 补充：怎样复核这条读数

复核时先把 293.15 K 还原到条目写明的参照与条件，再做单位换算；与相邻条目比较时，只比较同一口径下的量值，不把标题里的四舍五入值当成新测量。若换算后落在两个已知锚点之间，应同时报告两个锚点与所用倍率，方便读者复算。[1][2] 本条不新增独立测量，也不改变原有来源与引用编号。
