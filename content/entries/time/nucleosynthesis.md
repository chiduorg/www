---
id: time.nucleosynthesis
title: 原初核合成
titleEn: Big Bang Nucleosynthesis
dimension: cosmic-time
category: 太初宇宙
summary: 宇宙最初几分钟内，质子和中子通过核反应形成轻原子核。产物以氘、氦-3、氦-4和少量锂-7为主；约 180 秒是轻元素丰度基本定型的阶段参考。
quantity:
  value: 180
  unit: s
  measure: time-after-big-bang-epoch-reference
  measureLabel: 自大爆炸起的时期参考时间
  approximate: true
displayValue: t ≈ 180 秒
related:
  - time.deuterium-bottleneck
  - time.lithium-7-synthesis
  - time.baryon-asymmetry-establishment
  - temperature.cmb
  - elements.source-bigbang
  - space.observable-universe
reviewStatus: reviewed
sources:
  - title: 'Big Bang Nucleosynthesis, 2025 update'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
  - title: big-bang model
    url: 'https://www.britannica.com/science/big-bang-model'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: nucleosynthesis
  icon: ⚛
  relatedLabels: 原初核合成、轻元素、宇宙丰度、中子、质子
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 原初核合成
    quantity:
      value: 180
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t ≈ 180 秒
  notes:
    - >-
      PDG §24.1–24.3 核实约 1 MeV、约 1 秒的弱冻结背景与约 180 秒的丰度定型；CERN 与 Britannica
      核实轻核形成发生在最初几分钟。
    - 本轮按五节结构重写；统一 use 阿拉伯数字 180 秒，不把核合成与复合混为同一阶段。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  modelTemperatureMeV: 1
  referenceSeconds: 180
  conversion: 温度约1 MeV对应年龄约1秒；轻元素丰度在约180秒基本定型
  precision: 阶段参考，非统一完成时刻
  note: 采用所引模型的条件性时代/量级参照，不是直接观测到的计时。
uncertainty: 180 秒是丰度基本定型的阶段参考，不是各核素同一瞬间完成；中子寿命、反应率与重子密度都会移动细节。
visual:
  template: nuclear-network
  profile: bbn
  caption: 原初核合成 · 三维参照
  note: >-
    网络节点与连线为反应通道示意，不表示每个核素在同一秒完成。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#d7c58a'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

原初核合成是早期宇宙中质子与中子通过核反应形成轻原子核的阶段。产物主要是氘、氦-3、氦-4 和少量锂-7，而不是碳、氧、铁等重元素。[1][2] 它发生在宇宙冷却到核反应不再被高能光子立即拆散的窗口内。[1]

## 怎样知道或为何是推断

PDG 的核合成综述用标准粒子物理与核反应率计算丰度，再把预言与贫金属恒星、类星体吸收系统等观测比较；氘和氦的测量与理论总体吻合，锂则存在待解差异。[1] 这不是直接看到早期反应，而是用今天遗留的轻元素丰度反推当时条件。[1] CERN 概述指出，宇宙最初几分钟内质子和中子结合成核，随后才在约 38 万年形成原子。[2]

## 时间坐标与口径

PDG 指出，轻元素丰度在约 180 秒时基本定型；更早约 1 秒、温度约 1 MeV 时，弱相互作用还在固定中子—质子比。[1] 180 秒是阶段完成参考，不是每个核素在同一瞬间生成；不同反应有不同速率和冻结过程。[1] 本条保留 180 秒导航，不把它当作精确测年，也不与原子形成的 38 万年混淆。[2][3]

## 常见误解

误解之一是把核合成当成“宇宙炼金术”造出所有元素。它主要生成轻元素，重元素来自恒星演化和超新星等后续过程。[1][2] 另一个误解是把核合成时的“原子核”当成完整原子；中性原子要等电子结合，发生在远晚的复合时期。[2][3]

## 与其他阶段的关系

核合成上承弱脱耦和轻子湮灭，下接物质主导、复合与恒星形成。[1][2] 它固定了宇宙的轻元素库存，为后来恒星和行星提供原料；重元素的积累则是另一条更晚的历史。[1][3] 与“氘瓶颈”“锂-7合成”条目相连，可看到同一反应网络的不同节点。[1]
