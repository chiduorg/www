---
id: time.quark-hadron-phase-transition
title: 夸克物质向强子物质的转变
titleEn: The QCD Crossover and Hadronisation
dimension: cosmic-time
category: 太初宇宙
summary: 冷却改变了强相互作用物质的状态。所引格点计算在低化学势条件下给出平滑交叉的伪临界温度；数十微秒是另一热史模型的时代参照，不能当成实测瞬间。
quantity:
  value: 5.e-7
  unit: s
  measure: time-after-big-bang
  measureLabel: 模型条件下的宇宙时代参考
  approximate: true
displayValue: t = ~10⁻⁶ 秒
related:
  - time.quark-era
  - time.hadron-era
  - temperature.quark-gluon
  - time.strange-quark-matter
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: >-
      Chiral crossover in QCD at zero and non-zero chemical potentials,
      arXiv:1812.08235v2
    url: 'https://arxiv.org/abs/1812.08235'
    publisher: A. Bazavov et al. / Physics Letters B 2019
    accessed: '2026-11-06'
  - title: A Short Survey of Matter-Antimatter Evolution in the Primordial Universe
    url: 'https://arxiv.org/pdf/2305.09055'
    publisher: 'Johann Rafelski et al. / University of Arizona, Universe 2023'
    accessed: '2026-11-06'
  - title: Heavy ions and quark-gluon plasma
    url: 'https://home.cern/science/physics/heavy-ions-and-quark-gluon-plasma'
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: quark-hadron-phase-transition
  icon: "\U0001F504"
  relatedLabels: 量子色动力学、夸克禁闭、手征对称性破缺、强子、重离子对撞、格点QCD、QCD相图、质子
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  original:
    title: 夸克-强子相变
    quantity:
      value: 5.e-7
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = ~10⁻⁶ 秒
  notes:
    - >-
      读取 Bazavov 等原始摘要 Tc(0)=156.5±1.5 MeV 与 crossover；Rafelski 等 2023 综述把原初 QGP
      阶段与约 150 MeV 强子化放在同一热史框架；采用 25 微秒模型参照，非把 Tc 直接当时间。
    - 本轮按五节结构重写；温度与年代分开说明。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: 模型时间坐标 t；由特定热史模型的温度—时间关系给出，presentSeconds 仅作对照
  precision: 25 微秒为模型参照，非测年精度
  note: 采用所引模型的条件性时代量级参照，不是直接观测到的计时。
uncertainty: 25 微秒来自所引热史概述；格点的 156.5±1.5 MeV 为特定低化学势条件下伪临界温度，不是历史秒数误差，也不证明一阶相变。
visual:
  template: particle-reaction
  profile: hadron
  caption: 夸克物质向强子物质的转变 · 三维参照
  note: >-
    珠群表达强子化，25 微秒来自特定热史模型；不把低化学势平滑交叉画成已证实的一阶爆炸。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: primordial
  color: '#bfa8c6'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

这一条讨论夸克物质向强子物质转变的性质：是剧烈的一阶相变，还是平滑交叉。[1] 强子化把高温下解禁闭的夸克、胶子与低温下被禁闭在强子中的物质联系起来。[1][2] 它不是把几颗自由夸克机械拼成质子的单次事件，而是集体热性质的改变。[1][3]

## 怎样知道或为何是推断

格点 QCD 在零化学势附近计算手征交叉，Bazavov 等人给出伪临界温度 Tc(0)=156.5±1.5 MeV。[1] 这是理论计算，不是宇宙历史的直接测量。[1] Rafelski 等人的热史综述把原初 QGP 阶段放在数十微秒量级，并描述约 150 MeV 附近的强子化转变。[2] 重离子碰撞实验则研究类似条件下的物质性质，但不能直接重放宇宙膨胀。[3]

## 时间坐标与口径

强子化发生在约 150–160 MeV 的温标附近，换算成时间约为数十微秒量级；具体秒数依赖状态方程、粒子自由度和膨胀史，因此不是实测读数。[2] 不同热史计算会给出相近但不相同的时刻，不能把某一个值当成唯一边界。[1][2] 把温标与历史时刻分开，是理解本条的关键；否则一个温度数值会被误读成宇宙钟表读数。[1][2]

## 常见误解

误解之一是把伪临界温度当成“相变发生的精确温度计读数”；它是在特定低化学势条件下的计算量。[1] 另一个误解是把所有强子化都画成气泡碰撞的一阶爆炸；标准模型格点结果支持平滑交叉，气泡图景需要额外条件。[1][2] 图中的珠群也只是强子化概念示意，不是实际事件的快照。[1]

## 与其他阶段的关系

它发生在夸克时代与强子时代之间，是两段时代描述的衔接点。[1][3] 转变性质还会影响奇异夸克物质等假说的形成路线：若实际是平滑交叉，依赖一阶相变产生大团块的旧方案就受挑战。[1][2] 阅读时可把它看作“时代坐标”与“物态转变机制”之间的桥梁，不把温度、时间和相变类型混成一个结论。[1][2]
