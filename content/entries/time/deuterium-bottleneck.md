---
id: time.deuterium-bottleneck
title: 氘瓶颈
titleEn: Deuterium Bottleneck
dimension: cosmic-time
category: 太初宇宙
summary: 原初核合成早期，刚形成的氘会被高能光子拆散，只有温度降到约 0.1 MeV 才稳定积累。约 200 秒是这一窗口的阶段导航，不是单次反应时刻。
quantity:
  value: 200
  unit: s
  measure: time-after-big-bang-epoch-reference
  measureLabel: 自大爆炸起的时期参考时间
  approximate: true
displayValue: t ≈ 200 秒
related:
  - time.nucleosynthesis
  - time.lithium-7-synthesis
  - temperature.cmb
  - time.recombination
  - time.neutrino-decoupling
reviewStatus: reviewed
sources:
  - title: 'Big Bang Nucleosynthesis, 2025 update, §24.2'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: big-bang model
    url: 'https://www.britannica.com/science/big-bang-model'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: deuterium-bottleneck
  icon: "\U0001F4A7"
  relatedLabels: 氘、原初核合成、光致解离、结合能、轻元素丰度
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 氘瓶颈
    quantity:
      value: 200
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t ≈ 200 秒
  notes:
    - >-
      PDG §24.2 核实氘结合能约 2.23 MeV、重子—光子比与约 0.1 MeV 的积累条件；CERN/Britannica
      核实轻核形成在最初几分钟。
    - 本轮按五节结构重写；200 秒保留为阶段导航，不写成氘瓶颈的精确开启秒数。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  modelTemperatureMeV: 0.1
  referenceSeconds: 200
  conversion: 温度降至约0.1 MeV时氘不再被立即光致解离
  precision: 阶段参考点，非单次反应时刻
  note: 采用所引模型的条件性时代参照，不是直接观测到的计时。
uncertainty: 200 秒是“数分钟”窗口的阶段导航；氘的净积累取决于高能光子尾部、重子—光子比与膨胀史，不是单一温度阈值。
visual:
  template: nuclear-network
  profile: deuterium
  caption: 氘瓶颈 · 三维参照
  note: >-
    产生与光致解离的竞争为示意，不表示氘在某一秒突然全部保留。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#9fc6d8'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

氘瓶颈指原初核合成早期的一个关卡：质子与中子结合成氘，但高能光子数量太多，刚形成的氘又会被光致解离。[1] 只有当温度降到足够低，光子能量分布尾部不足以大量拆散氘时，氘才能积累，后续反应才有起点。[1][2]

## 怎样知道或为何是推断

PDG 给出定量判据：氘的结合能约 2.23 MeV，但真正决定能否积累的是“每个重子对应的、能量高于解离阈值的光子数”，它约在温度 0.1 MeV 时降到 1 以下。[1] 这是用黑体辐射分布与重子—光子比算出的条件，不是直接观测到某次解离。[1] CERN 概述把“几分钟内形成核”作为同一阶段的粗线条，Britannica 则强调轻元素形成发生在宇宙最初几分钟。[2][3]

## 时间坐标与口径

本条用 200 秒作“数分钟”阶段的导航点；它不是氘瓶颈的精确开启时刻，也不对应单一温度。[1] 温度判据约 0.1 MeV 与秒数之间的换算依赖膨胀史和有效自由度，故 200 秒只是近似阶段坐标。[1][2] 氘瓶颈之后，反应网络继续运行，丰度在约 180 秒基本定型；两个数字描述的是同一窗口的不同侧面。[1]

## 常见误解

误解之一是把“瓶颈”想成一道实体墙或一次突然开关。它是产生与光致解离两种速率相对变化的结果，跨越一段时间。[1] 另一个误解是把氘的结合能直接当成“低于 2.23 MeV 就安全”；还要看高能光子尾部的丰度，判据落在约 0.1 MeV。[1][2]

## 与其他阶段的关系

氘瓶颈位于核合成窗口的前段，打开后才有氦-4 和锂-7 等后续产物。[1] 它上承弱脱耦固定的中子—质子比，下接原初核合成丰度定型与复合。[1][3] 与“锂-7合成”条目相连，可看到同一网络里不同产物的竞争；与微波背景条目相连，则可用重子密度约束这条链路。[1][2]
