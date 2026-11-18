---
id: time.neutrino-decoupling
title: 中微子退耦
titleEn: Gradual Neutrino Decoupling
dimension: cosmic-time
category: 太初宇宙
summary: 中微子脱耦发生在相互作用逐渐难以维持热平衡的过程中。PDG 概述约 2 MeV 的退耦背景；1 秒只是圆整的时代参照，不是所有味态的共同截止时刻。
quantity:
  value: 1
  unit: s
  measure: time-after-big-bang-model-reference
  measureLabel: 模型条件下的宇宙时代参考
  approximate: true
displayValue: 大爆炸后约秒级（参考点1秒）
related:
  - time.neutrino-background-formation
  - time.electron-positron-annihilation
  - temperature.neutrino-background-temp
  - time.nucleosynthesis
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: 'Neutrinos in Cosmology, 2025 update'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrinos-in-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: Scientists Confirm Events that Occurred One Second after the Big Bang
    url: >-
      https://physicalsciences.ucsd.edu/media-events/articles/2019/scientists-confirm-events-that-occurred-one-second-after-the-big-bang.html
    publisher: UC San Diego School of Physical Sciences
    accessed: '2026-11-06'
  - title: 'Big Bang Nucleosynthesis, 2025 update'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
legacy:
  id: neutrino-decoupling
  icon: "\U0001F47B"
  relatedLabels: 宇宙中微子背景、弱相互作用、中微子振荡、宇宙膨胀、原初核合成、PTOLEMY实验、中微子质量、化石遗迹
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 中微子退耦
    quantity:
      value: 2
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = ~2 秒
  notes:
    - >-
      PDG §26.1 核实“约 2 MeV 逐渐脱耦”与 CνB 的三类间接证据；PDG §24.2 核实约 1 秒、约 1 MeV
      的核合成起始背景。
    - 本轮按五节结构重写；1 秒保留为数量级导航，不写成所有味态的共同脱耦时刻。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  modelTemperatureMeV: 2
  conversion: 温度—时间换算依赖辐射主导膨胀史与有效自由度
  precision: 约秒级量级参考，非精确测年
  note: 采用所引模型的条件性时代参照，不是直接观测到的计时。
uncertainty: 渐进脱耦受散射、味振荡与电子对湮灭期间的热量交换影响；1 秒只表示数量级，不由 2 MeV 直接作精密换算。
visual:
  template: radiation-front
  profile: neutrino
  caption: 中微子逐渐脱耦 · 三维参照
  note: >-
    渐进退耦的解释模型，不是已直接拍到的遗迹中微子。两条概念保留独立 ID。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#a4c9db'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

中微子与等离子体通过弱相互作用交换能量。早期温度高、反应快，三种中微子都维持热平衡；宇宙膨胀冷却到约 2 MeV 时，作用频率逐渐低于膨胀率，中微子开始退出平衡并自由传播。[1] 脱耦不是一个味单独“关掉开关”，而是在味振荡与电子对湮灭的热量交换中逐步发生。[1][3]

## 怎样知道或为何是推断

今天的宇宙中微子背景尚未被直接探测。PDG 指出，它的存在由三方面吻合间接支持：原初轻元素丰度、微波背景各向异性功率谱，以及大尺度结构的聚集。[1] 2019 年，国际合作团队用 BOSS 巡天约 120 万星系的位置，测到中微子对密度起伏的统计影响，把标准热史与今天的大尺度结构联系起来。[2] 这仍是间接证据，不是逐个捕获遗迹中微子。

## 时间坐标与口径

标准热史常把弱脱耦放在大爆炸后约 1 秒、温度约 1 MeV 附近；PDG 则用约 2 MeV 概括逐渐脱耦的开始。[1][3] 这两个数字不是同一件事：温度由反应率与膨胀率比较给出，秒数还要经过辐射主导膨胀史和有效自由度换算。[1][3] 本条取 1 秒作导航，表示秒级量级，不表示所有中微子在那一秒同时离开热浴。[1]

## 常见误解

常见误解是把“脱耦”当成粒子被关进盒子或突然停止运动。脱耦只意味着碰撞不足以维持平衡，中微子仍自由穿过物质，也不会在后来重新热化。[1][2] 另一个误解是把 1 秒读成精密测年；实际数值随退耦温度、味振荡和电子对湮灭处理而变，只能作为模型时代参考。[1][3]

## 与其他阶段的关系

脱耦发生在约 180 秒的原初核合成之前，为后者固定中子—质子比提供背景；随后电子—正电子湮灭把熵更多交给光子，使遗迹中微子温度低于光子。[1][3] 脱耦后的自由传播又影响复合时期的密度起伏，因此中微子背景条目与本条共享同一段热历史，但概念不同。[1][2]
