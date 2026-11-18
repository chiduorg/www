---
id: time.recombination
title: 复合
titleEn: Recombination and Photon Decoupling
dimension: cosmic-time
category: 太初宇宙
summary: 自由电子被原子核俘获，宇宙从等离子体变为中性气体，光子得以自由传播。约 38 万年是这段渐进过程的时代锚点，不是全体原子同时形成的一秒。
quantity:
  value: 11991888000000
  unit: s
  measure: time-after-big-bang
  measureLabel: 自大爆炸起的宇宙时间
  approximate: true
displayValue: t ≈ 38 万年
related:
  - time.matter-radiation-equality
  - time.dark-ages
  - time.reionization-epoch
  - temperature.cmb
  - time.nucleosynthesis
  - space.observable-universe
reviewStatus: reviewed
sources:
  - title: The cosmic microwave background and inflation
    url: >-
      https://www.esa.int/Science_Exploration/Space_Science/Planck/The_cosmic_microwave_background_and_inflation
    publisher: ESA / Planck
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
  - title: cosmic microwave background
    url: 'https://www.britannica.com/science/cosmic-microwave-background'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: recombination
  icon: "\U0001F4AB"
  relatedLabels: 宇宙微波背景、光子脱耦、原子形成、最后散射面
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 复合
    quantity:
      value: 12000000000000
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t ≈ 38万年
  notes:
    - ESA/Planck 与 CERN 正文核实约 38 万年；Britannica 核实微波背景来自中性原子形成后的透明时期。
    - 本轮按五节结构重写；补 visual.template，说明这是原子形成与光传播示意，不是观测重建。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  modelTemperatureK: 3000
  conversion: '约38万年 × 31,557,600 秒/年'
  precision: 渐进过程的圆整时代参考，非瞬时测年
  note: 采用所引模型的条件性时代参照，不是直接观测到的计时。
uncertainty: 复合是渐进过程，约 38 万年为圆整时代；不同宇宙学模型给出的精确时刻略有差异，不应读成单次事件测年。
visual:
  template: radiation-front
  profile: recombination
  caption: 复合与光子脱耦 · 三维参照
  note: >-
    原子形成与光子传播示意；轨道和数量不按实际比例，非观测重建。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: afterglow
  color: '#c9b7a6'
  scene: time.recombination
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

复合指早期等离子体中的自由电子被原子核俘获，形成中性原子。此前光子频繁与带电粒子散射，宇宙不透明；中性原子大量形成后，自由电子减少，光子终于能长距离传播。[1][2] 这里的“复合”是电子与原子核结合，不是原子核第一次诞生，也不是恒星形成。[2]

## 怎样知道或为何是推断

ESA 的 Planck 资料把复合定在大爆炸后约 38 万年，并说明微波背景保存了光子脱耦时的密度起伏。[1][2] 今天的微波背景是温度约 2.7 K 的黑体辐射，Britannica 指出它来自宇宙冷却后中性原子形成、辐射变得透明的时期。[3] 我们看到的不是当时的照片，而是经过红移拉伸的遗迹光；微小温度差异反映当时物质分布的细微差别。[1][3]

## 时间坐标与口径

本条采用约 38 万年作时代参考，对应约 1.2×10¹³ 秒；这是把时期边界换算成秒的近似值，不是单次事件的测年。[1][2] 复合与光子最后散射是近邻但不等同的过程：中性原子比例上升和光自由程变长都持续一段时间。[2] 不同模型给出的复合时刻略有差异，读数时应保留“约”字。[1][3]

## 常见误解

误解之一是把复合当成宇宙在某一秒全体同时“关灯”。实际是逐渐过程，先形成少量中性原子，再让光逐步逃逸。[2] 另一个误解是把微波背景当成今天星系的照片；它记录的是复合时期的物质—辐射分布，后来才演化出星系。[1][3]

## 与其他阶段的关系

复合发生在物质—辐射相等之后，是光子时代结束、黑暗时代开始的门槛。[1][2] 它上接核合成与等离子体热史，下接第一代恒星和再电离；与“重子声学振荡”共享同一段光子—重子流体背景。[2] 读时间轴时要把“原子形成”“光脱耦”“星系形成”分成相邻但不同的步骤。[1][3]
