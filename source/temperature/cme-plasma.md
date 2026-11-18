---
id: temperature.cme-plasma
title: 日冕物质抛射等离子体
titleEn: Coronal mass ejection plasma
dimension: temperature
category: 极高温
summary: >-
  日冕物质抛射把大团日冕等离子体和磁场抛向行星际空间。本条取约 1 × 10⁶ K 作为其中高温日冕成分的温度量级参考，
  并说明抛射体同时含有较冷物质，不能把这一数值当成整团抛射物的均温或单点实测值。
quantity:
  value: 1000000
  unit: K
  measure: 日冕物质抛射高温成分温度量级
  approximate: true
  measureLabel: 日冕物质抛射高温成分温度量级
displayValue: 约 1 × 10⁶ K（量级参考）
related:
  - temperature.solar-corona
  - temperature.solar-flare
  - temperature.solar-wind
  - temperature.sun-surface
reviewStatus: reviewed
sources:
  - title: 'Coronal Mass Ejections'
    url: 'https://www.swpc.noaa.gov/phenomena/coronal-mass-ejections'
    publisher: NOAA Space Weather Prediction Center
    accessed: '2026-11-07'
  - title: 'Layers of the Sun'
    url: 'https://www.nasa.gov/image-article/layers-of-sun/'
    publisher: NASA
    accessed: '2026-11-07'
conditions: >-
  对象为日冕物质抛射中的高温日冕等离子体成分；1 × 10⁶ K 指电子温度或谱线诊断温度的量级参考，
  不是整团抛射物的均温，也不包括较冷的日珥或色球物质。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - >-
      核对 NOAA SWPC：CME 是从日冕抛射的等离子体与磁场，可携带数十亿吨物质，速度可达近 3000 km/s。
    - >-
      核对 NASA Layers of the Sun：日冕温度约 50 万 K 至数百万 K；正文把 10⁶ K 限定为高温日冕成分的量级参考。
    - 本条为新增条目，reviewStatus 保持 needs-review，未声称逐点测温。
uncertainty: >-
  CME 是多温、膨胀中的等离子体：高温日冕成分可达约 10⁶ K，较冷的日珥或色球物质可低至约 10⁴ K；
  不同诊断与模型给出不同结果，不能当作单一实测值。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://www.swpc.noaa.gov/phenomena/coronal-mass-ejections；https://www.nasa.gov/image-article/layers-of-sun/），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: reaction-field
  profile: cme
  caption: 日冕物质抛射等离子体示意
  note: >-
    以抛射的等离子体和磁结构作示意表达，不对应某次具体事件；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#8fb8e8'
  symbol: CME plasma
  scene: temperature.object
zone: 极高温
tags:
  - 极高温
  - 温度
  - 天文
---
## 它是什么

日冕物质抛射是太阳日冕中的大团等离子体和磁场被抛向行星际空间的现象。NOAA 把它描述为可抛射数十亿吨日冕物质、速度从每秒数百公里到接近三千公里的爆发。[1] 这里的温度指抛出物质中那部分高温日冕等离子体的电子温度或谱线诊断温度，不是整个抛射体的统一温度，也不是太阳光球温度。

## 怎样测到

CME 本身主要靠日冕仪的白光成像追踪，温度则要借助极紫外与 X 射线谱线以及日冕的谱线诊断来推断。[1][2] NASA 的分层资料给出日冕温度约从 50 万 K 到数百万 K，且没有明确上界。[2] 把这些诊断用到 CME 上并不等于逐点测温：抛射体在膨胀、稀薄化，谱线比值还依赖电离态和模型。

## 数值与口径

本条取约 1 × 10⁶ K 作为高温日冕成分的量级参考。K 与 °C 在百万量级上数值几乎相同，但仍应说明来源给的是开尔文量级而不是精确读数。[2] 抛射体中常混有较冷的日冕物质和日珥物质，后者可只有约一万开尔文；因此不能把 1 × 10⁶ K 当成整团抛射物的平均温度，也不能把它当成某个位置的实测值。[1][2]

## 常见误解

第一，把 CME 温度等同于太阳表面温度；光球只有约 5,800 K，相差两个数量级。第二，认为 CME 越远越热；抛射体膨胀时整体会冷却，只是其中高温成分仍可被谱线识别。第三，把电子温度当成离子温度；在无碰撞或非平衡等离子体中二者可以不同。第四，用亮度或图像颜色直接判断温度。

## 与其他温区的关系

1 × 10⁶ K 与日冕的量级相当，高于太阳表面的约 5,800 K，也高于闪电通道的约 3 × 10⁴ K；它低于太阳核心的约 1.57 × 10⁷ K 和激光聚变热斑的约 10⁸ K。把 CME 放在这条温标上，是为了比较“日冕高温成分”的量级，而不是给整团抛射物指定一个温度。
