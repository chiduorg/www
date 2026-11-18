---
id: time.first-molecular-clouds
title: 最早分子云
titleEn: The First Molecular Clouds
dimension: cosmic-time
category: 复合与黑暗时代
summary: 复合之后，原初氢氦气体在暗物质晕中聚集，氢分子冷却使气体进一步塌缩，形成最早一批分子云。约 1 亿年是模型图景中的时代参考，不是所有云同时出现的日期。
quantity:
  value: 3155760000000000
  unit: s
  measure: time-after-big-bang-model-reference
  measureLabel: 模型下的宇宙时代参考
  approximate: true
displayValue: t ≈ 1 亿年（模型参考）
related:
  - time.recombination
  - time.dark-ages
  - time.first-molecules
  - time.first-dark-matter-halos
  - time.first-stars
reviewStatus: reviewed
sources:
  - title: Cosmic eras
    url: 'https://www.esa.int/Science_Exploration/Space_Science/Cosmic_eras'
    publisher: European Space Agency
    accessed: '2026-11-06'
  - title: 'First Light: A Brief Review'
    url: 'https://ned.ipac.caltech.edu/level5/Sept12/Wise/Wise1.html'
    publisher: NASA/IPAC Extragalactic Database / John H. Wise
    accessed: '2026-11-06'
  - title: 'Simulations of Early Structure Formation: Primordial Gas Clouds'
    url: 'https://arxiv.org/abs/astro-ph/0301645'
    publisher: 'Yoshida, Abel, Hernquist & Sugiyama / The Astrophysical Journal'
    accessed: '2026-11-06'
  - title: The lingering imprint of the first cosmic structures
    url: 'https://www.mpa-garching.mpg.de/1069215/hl202302'
    publisher: Max Planck Institute for Astrophysics
    accessed: '2026-11-06'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  notes:
    - >-
      用 WebFetch 打开 ESA Cosmic eras、NED Wise 综述、Yoshida 等模拟摘要与 MPA 亮点页；
      核对复合后的中性气体、H₂ 冷却、红移 25–30 的模拟对象以及约 1 亿年的首批结构。
    - 正文把 1 亿年写成量级参考，并说明分子云形成跨越多个阶段，不能读成单日事件。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  model: 冷暗物质层级形成 + 原初氢氦化学冷却模型
  precision: 模拟量级，非直接测时
  note: 模型依赖；约 1 亿年为模拟图景的时代锚点，不是统一的首现日期。
uncertainty: 首批分子云的出现窗口随暗物质模型、初始扰动谱、H₂ 形成率和紫外背景改变；约 1 亿年只是所引模型图景的量级。
visual:
  template: cosmic-web
  profile: molecular-cloud
  caption: 最早分子云 · 三维参照
  note: >-
    暗物质骨架与气体团块是模型示意，不是实际观测到的云，也不代表所有云同时形成。
    三维示意，非按比例，非观测重建；颜色、光线和尺寸独立归一化，不能作为空间或时间比例尺。
  backdrop: afterglow
  color: '#8fa8a0'
  scene: time.object
mode: 时点
tags:
  - 复合与黑暗时代
  - 时点
  - 早期宇宙
---
## 它是什么

最早分子云指复合之后、第一代恒星点亮之前，由原初氢和氦气体在引力势阱中聚集成的冷而密的团块。它们不是今天富含尘埃和重元素的巨型分子云；那时几乎没有碳、氧和硅，冷却主要靠氢分子 H₂ 的转动与振动谱线。[2][3] “分子云”强调气体已经形成分子并能够有效散热，而不是一团普通的中性原子气。

## 怎样知道或为何是推断

没有望远镜能直接看到宇宙最初这批云。证据来自宇宙学模拟与化学计算：在冷暗物质框架中，暗物质晕先形成，把原初气体吸进势阱；当 H₂ 丰度达到临界值，分子冷却使气体进一步塌缩成云。[2][3] 综述给出的首批冷却对象位于红移约 20–30、晕质量约 10⁶ 太阳质量；高分辨率模拟也在红移 25–30、质量 10⁵–10⁶ 太阳质量的范围讨论这些云。[2][3] 这些是模型预言，不是对单个云的成像。

## 时间坐标与口径

这里取大爆炸后约 1 亿年，约 3.16×10¹⁵ 秒，作为“最早分子云形成窗口”的时代参考。[1][4] 按常用宇宙学参数换算，红移 25–30 大致对应这一量级；模拟中的首批结构也以约 1 亿年为时代背景。[3][4] 形成不是某一天：复合后气体先保持中性，暗物质晕逐步增长，H₂ 在较低密度区缓慢生成，冷却和塌缩又受并合与紫外背景影响。[2][3] 因此 1 亿年是量级锚点，较早的一百万年只能说明“可能开始”，不能当成首批云普遍出现的日期。[1][4]

## 常见误解

误解之一是把分子云当成单个巨大的天体；早期云数量多、质量小，而且会不断并合。[3][4] 另一个误解是以为复合之后气体立刻变成分子云；中性原子形成只是前提，H₂ 的生成和冷却需要时间。[2] 还有人把“黑暗时代”理解成绝对没有辐射；微波背景仍充满宇宙，只是没有恒星这类光源。[1] “最早”也依赖所用模拟的分辨率与暗物质模型。

## 与其他阶段的关系

最早分子云是复合与第一代恒星之间的桥梁：它们把气体冷却到足以让引力战胜压力，为星族 III 恒星提供诞生场所。[2][3] 这些恒星随后产生紫外辐射和重元素，推动再电离与后续星系形成。[1] 与“第一批暗物质晕”相比，这里强调气体的化学与冷却；暗物质提供引力骨架，分子云则让普通物质真正凝聚。[3][4]
