---
id: space.psyche
title: 灵神星平均直径
titleEn: Psyche Mean Diameter
dimension: length
category: 行星与太阳系
summary: 灵神星是主小行星带中的金属富集小行星，三轴尺寸约279×232×189公里，体积等效平均直径约226公里。
quantity:
  value: 226000
  unit: m
  measure: 由三轴尺寸折算的体积等效平均直径
  approximate: true
displayValue: 约 226 km（体积等效平均直径）
related:
  - space.vesta
  - space.ceres
  - space.bennu
  - space.earth-core
  - mass.psyche
  - time.solar-system
reviewStatus: reviewed
sources:
  - title: The Asteroid 16 Psyche
    url: 'https://psyche.ssl.berkeley.edu/mission/the-asteroid/'
    publisher: 'Psyche Mission, NASA / Arizona State University'
    accessed: '2026-11-07'
  - title: Psyche (NSSDCA/COSPAR ID 2023-157A)
    url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2023-157A'
    publisher: NASA NSSDCA
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为小行星16
  Psyche的固体表面；采用任务团队给出的三轴尺寸279×232×189公里及其“若为完美球体则直径226公里”的折算口径；不含表面起伏、尘埃层与可能的卫星。
uncertainty: >-
  任务页面给出三轴几何平均约230公里，而官方折算值为226公里，差异约2%，来自形状模型与取整；三轴尺寸本身不确定度约10%，故平均直径的实际不确定范围约为204至249公里。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 2026-11-07 定稿复核：五项校验通过；来源可访问性扫描无 404，403/超时站点已用 WebFetch 打开核对数值。
    - >-
      2026-11-07 写作阶段已用 WebFetch 打开 Psyche 任务小行星页与 NASA NSSDCA
      探测器资料页，核对三轴尺寸与等效直径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: sphere
  scene: space.object
  caption: 灵神星 · 约 226 km 等效直径参照
  note: 不规则金属质块体与撞击坑为示意，非按比例，非观测重建。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 行星与太阳系
  - 尺寸
  - 天体
---
## 它是什么

灵神星是主小行星带中的一颗M型（金属富集）小行星，1852年由德·加斯帕里斯发现，被认为可能保留了某颗行星胚胎的金属核。[1][2] 本条量的是由三轴尺寸折算的平均直径，即把不规则块体换算成同体积球体的直径，不是最长边。

## 怎样知道

Psyche任务的官方页面给出的三轴尺寸为279×232×189公里，并明确若把它当作完美球体，直径为226公里。[1] NASA NSSDCA的探测器资料页重复了279×232×189公里这一组尺寸，并注明不确定度约10%。[2] 这些数值来自地面观测与雷达、热辐射建模，任务本身尚未抵达，因此仍属预探索阶段的估计。

## 数值与口径

2.26×10⁵米即226公里，是体积等效平均直径，不是最长轴279公里，也不是最短轴189公里。[1][2] 若用三轴几何平均计算，279×232×189的三次方根约为230公里，与226公里的官方折算值只差约2%，差异来自形状模型与取整。这个数不含表面起伏，也不把可能的尘埃层算进去。

## 常见误解

常见误解是灵神星为一整块实心铁；它的密度估计只有3.4至4.1克每立方厘米，接近岩石与金属混合物，而不是纯铁的约7.8。[2] 另一个误解是把279公里当成直径；那是最长方向，体积等效直径要小得多。[1] 还有人以为它已被探测器环绕，实际上Psyche号计划2029年才到达。

## 与其他尺度的关系

226公里约为灶神星526公里的0.43倍，约为谷神星940公里的0.24倍，约为月球3,474公里的0.065倍。[1][2] 它比贝努小行星的约490米大四百多倍，但在行星尺度上仍只是一块碎片。若把它放在地球旁边，其直径不到地球直径的2%。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 226000 米，换算后是 226 千米；约 0.0177 个地球直径（1.2742×10⁷ 米）。这把尺子只改写单位，不改变量值；它把本条固定在空间轴的 10⁵ 量级附近。

读图时先看量级，再看倍数：10⁵ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
