---
id: time.earth-formation
title: 地球形成
titleEn: Formation of Earth
dimension: cosmic-time
category: 太阳系与地球
summary: 约45亿年前，太阳系中的气体和尘埃在引力作用下聚集，地球逐渐形成。行星形成包含吸积与内部演化，不能把一个近似年龄理解为所有结构在同一瞬间完成。
quantity:
  value: 293390800000000000
  unit: s
  measure: time-after-big-bang-derived-reference
  measureLabel: 自大爆炸起的推算参考时间
  approximate: true
displayValue: 距今约45亿年（形成过程参考）
related:
  - time.solar-system
  - time.giant-impact
  - space.earth
  - time.first-life
  - space.human
  - elements.source-abundance
reviewStatus: reviewed
sources:
  - title: Facts About Earth — Formation
    url: 'https://science.nasa.gov/earth/facts/'
    publisher: NASA
    accessed: '2026-11-04'
  - title: How Do You Know the Age of Fossils and Other Old Things?
    url: >-
      https://www.nist.gov/how-do-you-measure-it/how-do-you-know-age-fossils-and-other-old-things
    publisher: NIST
    accessed: '2026-11-04'
  - title: 'SI base unit: second (s)'
    url: 'https://www.bipm.org/en/si-base-units/second'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: earth-formation
  icon: "\U0001F30D"
  relatedLabels: 地球（空间尺度）、大碰撞假说、月球、板块构造、地核、地球内核温度、放射性测年、大气层
chronology:
  status: reference
  plot: true
review:
  method: source-check
  date: '2026-11-04'
  reviewer: assistant-source-check
  original:
    title: 地球形成
    quantity:
      value: 292000000000000000
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 93 亿年
  notes:
    - 前轮按NASA概述选4.5Ga圆整参照；本轮新增NIST测年解释，仍不以更细估计替换导航点。
    - 本次整篇重新撰写并核对可访问的机构或论文正文；资料核对不等于外部同行评审。
    - 2026-11-04 内容深化：补充概念、来源所支持的机制、比较口径与常见误解；保留原quantity、轴坐标及图景配置。
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
conditions:
  timeBasis: time.present
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  lookbackYears: 4500000000
  conversion: presentSeconds - lookbackYears × secondsPerYear
  precision: 内部参考坐标，不具有所存储位数的测量精度
visual:
  template: planet-foundry
  profile: accretion
  caption: 地球形成 · 三维参照
  note: >-
    凝聚与长期聚集过程示意，不表示地球所有分层和表面同时形成。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: solar-disk
  color: '#c1a181'
  scene: time.object
mode: 时点
tags:
  - 太阳系与地球
  - 时点
  - 地球与生命
conceptGroup: earth
---
## 行星是一点点形成的

地球的形成发生在年轻太阳系中。NASA的概述说明，引力使周围盘状分布的气体和尘埃逐渐聚集，形成地球这样的岩质行星。这里的“形成”是一段物质汇聚和演化的过程，不是一颗已经具备今天海洋、地壳和大气的蓝色星球在某一秒突然出现。[1]

## 怎样知道如此久远的年代

放射性测年利用某些同位素按一定速率衰变的规律。例如铀逐步衰变成铅，研究者测量矿物中有关同位素的比例，再结合形成条件推算年代。NIST介绍，地球、月球和陨石中的矿物记录共同帮助估计地球年龄。这是用自然界的“时钟”约束历史，不是依靠一段从形成之日连续保存到今天的录像。[2]

## 45亿年是怎样的参照

本站保留NASA概述中的距今约45亿年作为导航点。NIST的测年介绍另给出约45.4亿年、约0.5亿年不确定范围的概览估计；两种表达采用不同精细程度。本文不把较细估计与圆整数混成一个精确日期，也不把一块矿物的年龄等同于地球所有组成和结构同时完成的时刻。[1][2]

## 为什么时间轴不是直接写“45亿”

此站的横轴统一表示从热大爆炸起经过的时间，所以需要用库中“现在”的参考坐标减去约45亿年。存储的秒数只是换算和排序结果，不意味着科学家把地球形成测到了秒。它也不同于过程持续时间：回答“发生在多久以前”，还不能自动回答“整个形成过程花了多久”。

## 接着发生了什么

NASA将今天的地球描述为具有核心、岩石地幔和固体地壳的行星。认识其历史，需要把物质聚集、内部演化以及后来的表面环境分别讨论。你可以沿关联条目走向月球形成假说或早期生命记录；这些是另一组历史问题，并不由一个行星年龄直接给出答案。[1]

本条的时间单位与换算依据 BIPM 对秒的定义。[3]
