---
id: temperature.interstellar-medium
title: 星际介质
titleEn: Interstellar medium temperature
dimension: temperature
category: 极低温
summary: >-
  星际介质是恒星之间稀薄的气体与尘埃。它以多个热相共存，冷中性相约 100 K， 暖电离相可达约 10⁴ K，热相约 10⁶ K；本条目以冷中性相的 100
  K 为锚点， 说明约 10–10⁴ K 的相温度跨度，而不是给整片空间安上一个统一温度。
quantity:
  value: 100
  unit: K
  measure: 冷中性介质典型温度（多相介质参考）
  approximate: true
  measureLabel: 冷中性介质典型温度
  range:
    min: 10
    max: 10000
    unit: K
displayValue: 约 100 K（−173 °C；冷中性相）
related:
  - temperature.molecular-cloud
  - temperature.21cm-spin-temperature
  - temperature.hii-region
  - temperature.cmb
  - space.moon
  - mass.helium-nucleus
reviewStatus: reviewed
sources:
  - title: The Interstellar Medium (X-rated)
    url: 'https://heasarc.gsfc.nasa.gov/docs/xrayschool-2003/RKS_ISM.pdf'
    publisher: NASA HEASARC / Chandra X-ray Center
    accessed: '2026-11-06'
  - title: Interstellar medium
    url: 'https://www.britannica.com/science/interstellar-medium'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为银河系星际介质中的气体。100 K 指冷中性相由谱线激发和吸收推断的动理学温度， 不是整片介质的单一温度；暖中性相约 1,000 K，暖电离相约
  10⁴ K，热相约 10⁶ K。 观测口径包括 21 厘米谱线、吸收线和 X 射线，不同相需分别测量。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 HEASARC 讲义：冷中性相约 100 K，暖中性相约 1,000 K，暖电离相约 10⁴ K，热相约 10⁶ K。'
    - 核对 Britannica：分子云可低至约 10 K，热星际气体可达约 10⁷ K；正文只用其相温区与质量占比。
    - 保留 100 K 作为冷中性相锚点，range 写 10–10⁴ K，避免把多相介质压成单值。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 相温度是典型值而非每个云块的实测值；同一相内密度、金属丰度和辐射场不同， 温度可上下浮动。100 K 主要适用于冷中性相，不能外推到暖电离相或热相。
visual:
  template: nebula
  scene: temperature.object
  caption: 星际介质的多相结构示意
  note: 以气体与尘埃的分布示意冷、暖、热相共存，不对应具体天区；画面非按比例， 颜色和丝状结构均为解释性示意。
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 恒星之间并非真空

星际介质是恒星系统之间那部分稀薄的气体、尘埃和磁场，银河系中它只占星系总质量的一小部分，却参与恒星诞生与死亡的循环。[2] 它没有像行星表面那样明确的边界，密度和温度都随位置变化，因此“星际介质的温度”天然是一个分布问题，而不是一个读数。

## 温度靠多种观测拼出来

中性氢的 21 厘米谱线、背景星的吸收线、尘埃连续谱和高温气体的 X 射线各自探测不同相。[1][2] 谱线形状给出气体的动理学温度，吸收强度给出柱密度，X 射线则主要来自最热的那一层。单张图看到的往往只是视线方向上多相气体的叠加。

## 几个主要相的温度

冷中性相约为 100 K，密度较高而填充体积不大；暖中性相约 1,000 K；暖电离相可达约 10⁴ K；热星际介质约 10⁶ K。[1] 分子云还能冷到约 10 K。[2] 因此本条把 100 K 作为冷中性相的锚点，用约 10–10⁴ K 概括冷相到暖电离相的跨度。

## 100 K 说的是哪一层气体

这个 100 K 是由冷中性气体的谱线激发与吸收推断的动理学温度，不是整片空间的平均温度。[1] 同一条视线里可能同时有 10 K 的分子云、100 K 的冷中性云和 10⁴ K 的电离气体；把它们相加不会得到一个物理上统一的温度。尘埃温度与气体温度也可能不同，因为二者靠碰撞和辐射场耦合，耦合未必充分。

## 与邻近温标怎样比较

100 K 比宇宙微波背景的约 2.7 K 高得多，却比分子云的约 10 K 暖；比起电离氢区的约 10⁴ K 又低两个量级。[2] 这些数字适合用来辨认“哪一相”，不能用来断定某一团气体的全部热内容。多相结构正是星际介质最关键的物理特征。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
