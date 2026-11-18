---
id: time.planck-era
title: 普朗克时间尺度与早期理论边界
titleEn: The Planck Time Scale
dimension: cosmic-time
category: 太初宇宙
summary: 普朗克时间由引力常数、约化普朗克常数和光速组合定义。它为讨论早期宇宙的理论边界提供尺度，不是已经观测到的一段历史，也不是被证实的最小时间格。
quantity:
  value: 1.e-43
  unit: s
  measure: time-after-big-bang
  measureLabel: 模型条件下的宇宙时代参考
  approximate: true
displayValue: t = 10⁻⁴³ 秒
related:
  - time.big-bang
  - time.graviton-decoupling
  - space.planck
  - temperature.planck-temperature
reviewStatus: reviewed
sources:
  - title: 2022 CODATA — Planck time
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?eqplkt'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: Cosmology — Superunification and the Planck era
    url: >-
      https://www.britannica.com/science/cosmology-astronomy/Superunification-and-the-Planck-era
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 2022 CODATA Fundamental Physical Constants — Complete Listing
    url: 'https://physics.nist.gov/cuu/Constants/Table/allascii.txt'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
legacy:
  id: planck-era
  icon: ⚡
  relatedLabels: 普朗克长度、普朗克温度、量子引力、弦理论、圈量子引力、量子泡沫、量子涨落、大统一理论
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  original:
    title: 普朗克时期
    quantity:
      value: 1.e-43
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 10⁻⁴³ 秒
  notes:
    - >-
      NIST 2022 CODATA 页面核实 5.391247×10⁻⁴⁴ 秒，标准不确定度 0.000060×10⁻⁴⁴ 秒；Britannica
      把普朗克时代列为量子引力与超级统一的理论背景。
    - 本轮按五节结构重写；明确区分常数组合的数值、模型时代参照与已观测历史。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: 模型时间坐标 t；presentSeconds 仅作与 time.present 的对照，不把模型时刻当测年结果
  precision: 常数组合值高精度，历史时刻仅为理论量级
  note: 采用量子引力讨论中的条件性时代参照，不是直接观测到的计时。
uncertainty: 常数组合的标准不确定度为0.000060×10⁻⁴⁴秒；这来自G、ħ、c的测量，不等于宇宙某次事件或某个理论时期边界的测量误差。
visual:
  template: quantum-field
  profile: planck
  caption: 普朗克时间尺度与早期理论边界 · 三维参照
  note: >-
    普朗克常数尺度不表示时间已证明离散，网格不是观测影像。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: primordial
  color: '#b9c8dc'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

普朗克时间由约化普朗克常数 ħ、万有引力常数 G 和光速 c 组合而成，记作 tP=√(ħG/c⁵)，2022 CODATA 给出约 5.39×10⁻⁴⁴ 秒。它把量子力学的作用量、引力的强度和相对论的速度放进同一个时间量纲表达式，因此常被用作讨论量子引力的入门坐标。[1] 不过，它不是一台宇宙秒表读出的历史时刻，而是理论内部标记经典时空描述可能开始失效的量级。[1][2] 在标准宇宙学叙述中，人们常把这一量级称作“普朗克时代”，但这是模型语言。[1][2]

## 怎样知道或为何是推断

数值来自常数测量与公式组合，而不是对早期宇宙的直接计时。NIST 给出 5.391 247×10⁻⁴⁴ 秒，标准不确定度 0.000 060×10⁻⁴⁴ 秒，相对标准不确定度约 1.1×10⁻⁵。[1] 这是常数不确定度传递到组合量的结果，不能读成宇宙年龄的误差。[1][3] 至于“大爆炸后 10⁻⁴³ 秒”的普朗克时代，Britannica 把它放在超级统一与量子引力的理论讨论中，明确属于推测性图景；现有望远镜和加速器都没有分辨到这个时间尺度。[2] 我们能检验的是候选理论留下的低能后果，而不是那张时间表本身。[2]

## 时间坐标与口径

本条取 10⁻⁴³ 秒量级，CODATA 具体值为 5.391247×10⁻⁴⁴ 秒；口径是“自大爆炸起的模型参考”，不是距今年代。[1] t=10⁻⁴³ 秒应说明是数量级表述；保留更多位数会让人误以为存在同等精度的历史测量。[1] 10⁻⁴³ 与 10⁻⁴⁴ 在口语中常被抹平，但引用具体数值时仍要写清采用哪一种定义与哪个常数版本。[1][3] 普朗克时间本身是理论边界，不是已观测到的宇宙开端。[1][2]

## 常见误解

常见误解之一是把普朗克时间当成时间的最小格子，仿佛宇宙像电影帧一样逐格播放。现有物理没有证明时间离散；普朗克尺度只说明已知理论在这里需要量子引力修正。[1][2] 另一个误解是把“普朗克时代”当成已经观测到的宇宙第一阶段。它更像理论地图的边缘：边缘之外不是“什么都没有”，而是现有描述失效，需要新理论才能继续提问。[2]

## 与其他阶段的关系

在时间轴上，这一量级早于大统一假说所讨论的 10⁻³⁴ 秒量级，也远早于暴胀、电弱转变与核合成。[1][2] 普朗克时间与普朗克长度、普朗克温度一样由常数组合定义，构成同一组理论参照，而不是一串已经拍到的物体或事件。[3] 阅读后续阶段时，应把“模型给出的坐标”与“观测支持的历史”分开，不要因为坐标精确到很多位就赋予它同等证据强度。[1][2]
