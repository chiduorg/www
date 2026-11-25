---
id: temperature.fusion-reactor-plasma
title: 聚变堆等离子体
titleEn: ITER plasma design reference
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  ITER 以约 1.5 亿摄氏度的等离子体为设计温度量级。这里以约 1.5 亿 K 展示同一数量级；
  它属于具体装置的设计参考，不是所有聚变反应的唯一温度门槛，也不是已经实现的发电成绩。
quantity:
  value: 150000000
  unit: K
  measure: ITER等离子体设计温度量级
  approximate: true
  measureLabel: ITER等离子体设计温度量级
displayValue: 约 1.5 × 10⁸ K（设计参考）
related:
  - temperature.sun-core
  - temperature.tungsten-melting
  - temperature.quark-gluon
  - temperature.laser-fusion-plasma
  - space.sun
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 'ITER Facts and Figures: plasma temperature design'
    url: 'https://www.iter.org/facts-figures'
    publisher: ITER Organization
    accessed: '2026-11-06'
  - title: Fusion
    url: 'https://www.iter.org/fusion'
    publisher: ITER Organization
    accessed: '2026-11-06'
  - title: "Sun: Facts"
    url: "https://science.nasa.gov/sun/facts/"
    publisher: "NASA Science"
    accessed: '2026-11-24'
  - title: "Helioseismology"
    url: "https://nso.edu/research/helioseismology/"
    publisher: "NSF National Solar Observatory, Jack Harvey and Shukur Kholikov"
    accessed: '2026-11-24'
legacy:
  id: fusion-reactor-plasma
  icon: ⚛
  relatedLabels: 核聚变、托卡马克、等离子体、ITER、磁场约束、太阳核心、氘、氚、清洁能源、超导磁体、中子星表面
conditions: >-
  ITER 公布的约 1.5 亿 °C 等离子体设计量级；对象为磁约束氘氚等离子体，不是真空室壁或磁体； 设计阶段尚未实现该参数；K 与 °C
  在该取整精度下近似同数量级，离子与电子温度也可能分别测量。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - ITER 官方 Facts & Figures 页给出托卡马克等离子体设计温度 1.5 亿 °C，约为太阳核心的十倍。
    - ITER Fusion 页面说明聚变是轻核结合并释放能量，支持把温度对象限定为等离子体而非装置结构。
  originalQuantity:
    value: 150000000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 1.5×10⁸ K 是 ITER 的设计目标，不是已实现运行参数；实际等离子体温度随加热功率、约束时间和杂质变化，
  离子温度与电子温度也可能不同，不能当作单一已测值。
visual:
  template: reaction-field
  profile: tokamak
  caption: 托卡马克中的聚变等离子体
  note: >-
    对应 ITER 等离子体设计温度量级，不是金属磁体或真空室壁温；光环、粒子与磁面仅作约束结构说明，
    非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#c5a5f4'
  symbol: ITER plasma
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

聚变堆等离子体是氘氚燃料被加热电离后形成的带电粒子气体，需要被磁场约束在托卡马克中，避免接触容器壁。聚变反应要把轻核结合成更重的核并释放能量；[2] 在磁约束装置里，高温是弥补引力约束不足的手段。这里讨论的对象是等离子体本身，不是包围它的真空室、超导磁体或冷却系统。ITER 的设计目标是把等离子体加热到约 1.5 亿摄氏度，约为太阳核心温度的十倍。[1]

## 怎样测到或为何是推断

在已运行的托卡马克中，等离子体温度可以通过光谱、汤姆孙散射、中子产额和辐射诊断来测量，但 ITER 的 1.5 亿摄氏度是设计参数，不是已经完成的运行读数。官方资料把它列为装置将达到的温度量级，并说明聚变功率目标为 500 兆瓦、输入加热功率为 50 兆瓦。[1] 这些数字描述设计能力，而不是商业电站的净输出。设计值与运行值之间还隔着等离子体约束、杂质控制、材料耐受和加热效率等工程问题。

## 数值与口径

本条采用约 1.5×10⁸ K 作为 ITER 等离子体的设计温度量级。K 与 °C 相差 273.15，在这个取整到千万级的数值上可以忽略，但仍应说明原始资料写的是摄氏度。[1] 它不是壁温，也不是磁体温度；装置结构必须保持在室温附近或低温超导状态。等离子体内部离子温度和电子温度也可能不同，诊断会分别给出不同结果。因此这个数字是设计目标，不是某一个运行时刻的精确温度。

## 常见误解

第一，把设计温度当成已经实现；ITER 仍在建设与调试阶段，1.5 亿摄氏度是目标参数。[1] 第二，把等离子体温度当成容器壁温度；壁和磁体由冷却与屏蔽保护，不能承受这样的高温。第三，把达到高温当成净能量增益；输入加热功率、聚变输出和电站净输出是不同概念。第四，把 1.5×10⁸ K 当成所有聚变路线的唯一门槛；不同燃料循环和约束方式有不同的温度与密度要求。[2]

## 与其他温区的关系

1.5×10⁸ K 约为太阳核心 1.57×10⁷ K 的十倍，远高于闪电通道约 3×10⁴ K 和钨的熔点约 3,695 K。它也高于中子星表面约 2×10⁶ K 的例子，但远低于夸克—胶子等离子体的 1.82×10¹² K 理论温标。与这些温区比较时，要记住聚变等离子体是靠磁场和加热维持的实验室对象，不是恒星内部或致密天体。[1]

## 劳森判据与“点火”

聚变要净输出能量，需要同时满足温度、密度和约束时间三个条件，这就是劳森判据的工程版本。[1][2] “点火”指聚变产生的能量足以维持等离子体温度，不再依赖外部加热；它与“达到高温”不是同义词。ITER 的 1.5 亿度是设计温度，不是点火已经实现。

## 五轴对照

在温度轴，等离子体约 1.5×10⁸ K；在空间轴，磁场把等离子体约束在环内；在质量轴，燃料离子质量影响碰撞与聚变截面；在时间轴，约束时间需足够长。温度、密度与时间必须同时达标。[1][2]

## 劳森判据与“点火”

聚变要净输出能量，需要同时满足温度、密度和约束时间三个条件，这就是劳森判据的工程版本。“点火”指聚变产生的能量足以维持等离子体温度，不再依赖外部加热；它与“达到高温”不是同义词。ITER 的 1.5 亿度是设计温度，不是点火已经实现。[1][S2]

## 延伸核对

补充的来源 [3]（NASA Science）、[4]（NSF National Solar Observatory, Jack Harvey and Shukur Kholikov） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
