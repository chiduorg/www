---
id: time.muon-antimuon-annihilation
title: μ子-反μ子湮灭
titleEn: Declining Muon Abundance in the Early Universe
dimension: cosmic-time
category: 太初宇宙
summary: μ子及反μ子的丰度由产生、逆反应与衰变共同决定。所引研究在约 4.135 MeV 环境中得到丰度急降条件；这里的秒数是附加辐射主导近似后的导航参考。
quantity:
  value: 0.04
  unit: s
  measure: time-after-big-bang-model-reference
  measureLabel: 模型条件下的宇宙时代参考
  approximate: true
displayValue: 大爆炸后约0.04秒（所引模型换算参考）
related:
  - time.lepton-epoch
  - time.neutrino-decoupling
  - time.hadron-era
  - temperature.neutrino-background-temp
reviewStatus: reviewed
sources:
  - title: 'The muon abundance in the primordial Universe, arXiv:2103.07812v2'
    url: 'https://arxiv.org/pdf/2103.07812'
    publisher: Jan Rafelski and Cheng Tao Yang / University of Arizona
    accessed: '2026-11-06'
  - title: A Short Survey of Matter-Antimatter Evolution in the Primordial Universe
    url: 'https://arxiv.org/pdf/2305.09055'
    publisher: 'Johann Rafelski et al. / University of Arizona, Universe 2023'
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: muon-antimuon-annihilation
  icon: "\U0001F530"
  relatedLabels: μ子、反μ子、轻子时代、湮灭、量子电动力学、电弱相互作用、中微子、标准模型
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: μ子-反μ子湮灭
    quantity:
      value: 0.001
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 10⁻³ 秒
  notes:
    - >-
      读取 Rafelski/Yang 原始论文：4.135 MeV 以下衰变率超过产生率，μ子丰度准瞬时消失；消失温度附近
      n(μ)/n(B)≈0.644。
    - 0.04 秒沿用既有审核记录中的辐射主导换算，不把 μ子真空寿命或 Hubble 时标直接当宇宙年龄；本轮保留原 quantity。
chronology:
  status: model-reference
  plot: true
conditions:
  model: 所引μ子热产生/衰变模型；近似辐射主导且有效自由度变化可忽略
  sourceTemperatureMeV: 4.135
  sourceHubbleTimeSeconds: 0.084
  conversion: t ≈ (1/H)/2 = 0.042 s，圆整至 0.04 s
  precision: 模型与辐射主导近似下的量级参考
  note: 温度条件来自论文；秒数需叠加宇宙膨胀史换算，不是论文直接计时。
uncertainty: 模型与辐射主导近似下的量级参考，不是μ子全部湮灭的实测时间；4.135 MeV 是消失条件，不等于统一的宇宙秒数。
visual:
  template: particle-reaction
  profile: muon
  caption: 早期宇宙中μ子丰度的下降 · 三维参照
  note: >-
    丰度下降由产生与衰变竞争；不显示某一秒全部成对湮灭。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#d1b086'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

μ子与反μ子是早期等离子体中的带电轻子对。温度足够高时，电磁与弱相互作用能不断产生它们，它们也会通过湮灭和衰变消失；讨论的是热背景中的统计丰度，不是单个μ子的命运。[1] 在约 6 MeV 时，μ子对数量可比重子多约一千倍，随后迅速下降。[1]

## 怎样知道或为何是推断

Rafelski 与 Yang 逐项计算 γγ→μ⁺μ⁻、e⁺e⁻→μ⁺μ⁻ 的产生率以及μ子衰变率，比较两者随温度的走向，得到约 4.135 MeV 以下衰变率压过产生率的条件。[1] 这属于热场论模型计算，不是对早期宇宙的直接计时；2023 年的综述把μ子消失放在 10 MeV 到 2 MeV 的轻子—光子阶段中。[2] CERN 的早期宇宙概述只提供最初数微秒到数分钟的粗线条。[3]

## 时间坐标与口径

论文给出的是温度条件，不是秒数。要把 4.135 MeV 放进时间轴，还需假定辐射主导的膨胀史与有效自由度，换算出的约 0.04 秒只是模型导航值。[1] 同一篇论文指出，消失温度附近μ子数已接近重子数，说明“丰度急降”不等于所有μ子对同时成对湮灭。[1] 因此这里的秒数不能替代温度判据，也不能当作实测日期。[1][2]

## 常见误解

误解之一是用μ子在真空中的约 2.2×10⁻⁶ 秒寿命去推断宇宙中μ子群何时消失。热浴中不断有产生反应补充，寿命不是丰度存续时间。[1] 另一个误解是把“μ子消失”理解成宇宙从此没有μ子；它指的是热平衡丰度崩溃，后续反应仍可少量产生。[1][2]

## 与其他阶段的关系

μ子丰度下降发生在轻子时代内部，早于中微子完全脱耦和电子—正电子湮灭，也远早于原初核合成。[2][3] 它改变等离子体的能量密度与熵分配，因此会影响随后中微子与光子的温度关系。[1][2] 阅读时应把温度条件、模型换算的秒数与实验室粒子数据分开。[1][3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 0.04 秒，换算后是 0.04 秒；约 0.2 次人类反应时间（0.2 秒）。这把尺子只改写单位，不改变量值；它把本条固定在时间轴的 10⁻² 量级附近。

读图时先看量级，再看倍数：10⁻² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
