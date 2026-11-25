---
id: temperature.lightning
title: 闪电
titleEn: Air heated by lightning
dimension: temperature
category: 高温
summary: >-
  闪电会使其通道附近的空气迅速升温。美国国家气象局用可达约 50,000 °F 的量级描述这种加热， 约合 2.8 万
  K；这指受热空气和通道等离子体，不能把电荷运动本身当成一个固定温度的物体。
quantity:
  value: 28033.15
  unit: K
  measure: 闪电加热空气的高温量级参考
  approximate: true
  measureLabel: 闪电加热空气的高温量级参考
  kind: attainable-reference
displayValue: '可达约 2.8 × 10⁴ K（50,000 °F量级）'
related:
  - temperature.sun-surface
  - temperature.thermosphere
  - temperature.solar-corona
  - temperature.rocket_plume
  - temperature.ball-lightning
  - space.earth
reviewStatus: reviewed
sources:
  - title: How Hot Is Lightning?
    url: 'https://www.weather.gov/safety/lightning-temperature'
    publisher: NOAA National Weather Service
    accessed: '2026-11-06'
  - title: How Hot Can Lightning Get?
    url: 'https://www.britannica.com/science/How-Hot-Can-Lightning-Get'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: lightning
    url: 'https://www.britannica.com/science/lightning-meteorology'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: "IAU 2015 Resolution B3: recommended nominal solar and planetary conversion constants — full resolution"
    url: "https://arxiv.org/pdf/1510.07674"
    publisher: "International Astronomical Union, Resolution B3 (2015)"
    accessed: '2026-11-24'
  - title: "Sun: Facts"
    url: "https://science.nasa.gov/sun/facts/"
    publisher: "NASA Science"
    accessed: '2026-11-24'
legacy:
  id: lightning
  icon: ⚡
  relatedLabels: 等离子体、放电、电离、大气电学、太阳表面、地球内核温度、氮循环、电磁波、雷电物理
conditions: >-
  美国国家气象局科普所述闪电可把空气加热至约 50,000 °F；Britannica 给出约 50,000 °F （27,760
  °C）的峰值，并说明回击通道电流可达 30,000 A、速度约为光速三分之一。 该值指通道峰值量级，不是每次闪电的固定温度，也不是整个雷暴云的温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 NOAA NWS：闪电是电荷运动，空气被加热到 50,000°F，约为太阳表面五倍。'
    - >-
      核对 Britannica How Hot Can Lightning Get：约 50,000°F（27,760°C），回击通道 30,000
      A、约三分之一光速。
    - 补核 Britannica lightning 条目，确认闪电是放电通道加热空气/等离子体；正文标注非热平衡。
  originalQuantity:
    value: 30000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '50,000 °F 是通道峰值或“可达”量级，不同回击、通道位置和诊断方法会给出不同峰值；持续时间仅毫秒量级，不能当作稳定温度。'
visual:
  template: planet-environment
  profile: lightning
  caption: 闪电通道加热空气
  note: >-
    对应闪电加热空气可达到的参考量级；闪光周期与亮度均不代表实测持续时间或温度；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#b5d5ff'
  symbol: Heated air
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

闪电是云与云、云与地之间的电荷运动，本身不是一个有固定温度的物体。电流通过空气时，空气被迅速加热、电离成等离子体通道，发出强光；所谓“闪电温度”指的是这条通道中空气的有效温度，而不是电荷或整个雷暴云的温度。[1][3]

## 怎样测到

美国国家气象局用“可把空气加热到 50,000 °F”来描述这种加热，并强调受热的是被电流穿过的材料。[1] Britannica 给出约 50,000 °F（27,760 °C）的峰值，并说明回击通道电流可达 30,000 A、速度约为光速的三分之一。[2] 这些数值来自光谱诊断、电流与通道模型以及高速摄影的综合估计，不是把温度计放进闪电的读数。

## 数值与口径

50,000 °F 按 (50,000 − 32) × 5/9 换算为 27,760 °C，即约 28,033 K。[1][2] 它是通道峰值或“可达”量级，持续时间只有毫秒量级，通道各段温度并不相同。[2] 50,000 °F 约为太阳表面 5,772 K 的五倍；但太阳表面是持续辐射源，闪电是短暂的脉冲，两者不能只按温度等同。

## 常见误解

第一，认为闪电本身有温度；严格说温度属于被加热的空气和通道等离子体。[1] 第二，把 28,033 K 当成每次闪电的固定值；不同回击、通道位置和观测方法会给出不同峰值。第三，把峰值温度当成整个雷暴云的温度；云内大部分空气仍接近环境温度。第四，把高温等同于总能量最大；闪电的总能量还取决于电流、持续时间和通道长度。

## 与其他温区的关系

28,033 K 高于太阳表面 5,772 K，也高于炼钢出钢的 1,893 K 和钨熔点 3,687 K。它低于太阳核心的约 1.57×10⁷ K，也低于聚变等离子体的上亿开尔文。闪电属于大气中短暂存在的非热平衡等离子体，处在高温工程与天体等离子体之间的量级。

## 通道温度与总能量

闪电通道峰值可达约 28,000 K，但持续时间只有毫秒量级，总能量取决于电流、通道长度与持续时间。[1][2] 高温不等于能量最大；一次长持续时间回击可能比一次短促高峰更危险。把温度当成能量，会误判破坏力。

## 五轴对照

在温度轴，通道约 28,000 K；在空间轴，闪电连接云与地；在质量轴，通道空气被电离；在时间轴，回击在毫秒内完成。温度、电流与时间是三个独立量。[1][2]

## 通道温度与总能量

闪电通道峰值可达约 28,000 K，但持续时间只有毫秒量级，总能量取决于电流、通道长度与持续时间。高温不等于能量最大；一次长持续时间回击可能比一次短促高峰更危险。把温度当成能量，会误判破坏力。[1][S2]

## 读数的口径与换算

本条采用的量是 可达约 2.8 × 10⁴ K（50,000 °F量级），口径是 闪电加热空气的高温量级参考。温度是强度量，读数依赖温标、测点与热平衡；同一对象的不同部位、不同时刻可以有不同温度。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（International Astronomical Union, Resolution B3 (2015)）、[5]（NASA Science） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
