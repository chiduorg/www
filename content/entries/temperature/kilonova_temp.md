---
id: temperature.kilonova_temp
title: AT 2017gfo 蓝千新星（并合后 1.5 天）
titleEn: AT 2017gfo blue kilonova at 1.5 days
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  Nicholl 等对 GW170817 电磁对应体的光谱研究，在并合后 1.5 天得到蓝成分约 5500 K
  的近似黑体拟合温度。这里采用这个明确时刻的辐射口径，替换没有模型依据的十亿 K 旧值。
quantity:
  value: 5500
  unit: K
  measure: 并合后1.5天光学光谱的近似黑体拟合温度
  measureLabel: 并合后1.5天光学光谱的近似黑体拟合温度
  approximate: true
  kind: spectral-fit
displayValue: '约 5,500 K（并合后 1.5 天）'
related:
  - temperature.hypernova
  - temperature.supernova
  - temperature.neutron-star-core
  - temperature.neutron-star-surface
reviewStatus: reviewed
sources:
  - title: Optical and UV Spectra of a Blue Kilonova From Fast Polar Ejecta
    url: 'https://arxiv.org/abs/1710.05456'
    publisher: 'Nicholl et al., ApJL (2017)'
    accessed: '2026-11-06'
  - title: Chandra Makes First Detection of X-Rays from a Gravitational Wave Source
    url: >-
      https://www.nasa.gov/image-article/chandra-makes-first-detection-of-x-rays-from-gravitational-wave-source/
    publisher: NASA Chandra X-ray Center
    accessed: '2026-11-06'
legacy:
  id: kilonova_temp
  icon: "\U0001F4A5"
  relatedLabels: 超新星爆发、极超新星、引力波、r过程、重元素合成、中子星合并、LIGO、GW170817、哈勃常数、致密物质物态方程
conditions: >-
  AT 2017gfo / GW170817；Nicholl 等 2017 年光学与紫外光谱研究，1.5 天为相对引力波信号的静止系时间；
  对象为蓝千新星光学/紫外辐射的近似黑体拟合，不是并合核心或全部抛射物；抛射物处于快速膨胀的非平衡状态。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - Nicholl 等摘要给出并合后 1.5 天蓝成分 T≈5500 K，随后迅速变红；光谱几乎无特征，符合轻 r 过程极向抛射物。
    - NASA Chandra 页面记录 GW170817 的光学、红外与 X 射线对应体，并说明光学/红外辐射可能来自重元素放射性余晖。
  originalQuantity:
    value: 1000000000
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: 1000000000
      unit: K
      measure: 并合高温旧模型参考（未定口径）
      approximate: true
      measureLabel: 并合高温旧模型参考（未定口径）
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 5,500 K 是并合后 1.5 天光学/紫外光谱的近似黑体拟合温度，不是精确的全体物质温度；
  黑体不能完全描述光谱形状，抛射物速度、元素丰度、视线方向和后期变红都会改变拟合结果。
visual:
  template: stellar-event
  profile: kilonova
  caption: AT2017gfo并合后1.5天
  note: >-
    展示蓝千新星抛射场景；量值为并合后 1.5 天光谱的近似黑体拟合温度，不是核心物质温度；
    画面非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#ddb1df'
  symbol: AT 2017gfo · 1.5 d
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

AT 2017gfo 是引力波事件 GW170817 的电磁对应体，来自两颗中子星的并合。并合后抛射出的富中子物质通过 r 过程合成重元素，放射性衰变加热抛射物，使其发出光学和红外辐射，这类事件被称为千新星。这里讨论的是并合后约 1.5 天的蓝千新星成分，而不是并合瞬间的碰撞核心。[1] 蓝成分来自速度较快、镧系元素较少的极向抛射物。

## 怎样测到或为何是推断

Nicholl 等在并合后 1.5 至 9.5 天取得 nightly 光谱，并用哈勃空间望远镜在 5.5 天取得紫外光谱。1.5 天的光谱可以用约 5,500 K 的黑体近似描述，随后迅速变红；光谱整体缺少明显特征谱线。[1] 这些颜色、快速演化和无特征光谱，与轻 r 过程极向抛射物的“蓝千新星”模型一致。Chandra 后来探测到 GW170817 的 X 射线余晖，并指出光学/红外辐射可能来自重元素放射性加热。[2] 温度是从光谱能量分布拟合出来的，不是直接测量抛射物内部。

## 数值与口径

本条采用约 5,500 K 作为并合后 1.5 天蓝成分的近似黑体拟合温度。它是亮温度或色温度，不是抛射物的热力学温度，也不是并合核心的温度。黑体只能近似描述光谱，实际光谱可能因元素混合、速度梯度和非局部热平衡而偏离黑体。[1] 千新星在同一时刻不同抛射物成分的温度也不同：蓝成分较热，红成分较冷；随着时间推移，整体又会变红变冷。因此这个数值必须与“1.5 天”和“蓝成分”一起使用，不能扩展成整个事件的统一温度。

## 常见误解

第一，把 5,500 K 当成并合瞬间的高温；并合核心可以热得多，但那是另一个对象和另一个时刻。第二，把千新星当成普通新星或超新星；千新星来自中子星并合的抛射物，能量来源和持续时间都不同。[2] 第三，把颜色温度当成物质温度；光谱拟合给出的是辐射特征，不是粒子运动温度。第四，把 1.5 天的值当成整个光变过程的代表；几天后光谱会显著变红，温度也随之变化。[1]

## 与其他温区的关系

5,500 K 与超新星光球温度同量级，但远低于核心坍缩超新星的 10¹¹ K 和中子星表面约 2×10⁶ K。它高于宇宙微波背景的 2.725 K，也高于绝对零度，但低于太阳表面 5,772 K 一点。与极超新星相比，千新星的温度更容易用一个明确时刻的光谱拟合来定位，因为它的抛射物更小、演化更快。比较时仍要记住：一个是抛射物光球，另一个是坍缩核心或星面。[1]
