---
id: time.baryon-asymmetry-establishment
title: 重子不对称性的起源问题
titleEn: Origin of the Baryon Asymmetry
dimension: cosmic-time
category: 太初宇宙
summary: “物质比反物质多”既是观测问题，也是起源问题。粒子实验、原初元素与微波背景约束不同环节，不能把其中任何一个结果直接当作不对称建立的时刻。
quantity:
  value: null
  unit: s
  measure: undetermined-cosmic-time
  measureLabel: 宇宙时间未核定
  approximate: true
  status: undetermined
displayValue: 建立机制与发生时间未定
related:
  - time.baryogenesis
  - time.recombination
  - space.proton
  - time.electroweak-epoch
  - time.proton-antiproton-annihilation
reviewStatus: reviewed
sources:
  - title: Antimatter
    url: 'https://home.cern/science/physics/antimatter'
    publisher: CERN
    accessed: '2026-11-06'
  - title: 'Big-Bang Cosmology, 2025 update'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: Observation of charge-parity symmetry breaking in baryon decays
    url: 'https://arxiv.org/html/2503.16954v2'
    publisher: LHCb Collaboration / Nature
    accessed: '2026-11-06'
  - title: Planck 2018 results. VI. Cosmological parameters
    url: 'https://arxiv.org/abs/1807.06209'
    publisher: Planck Collaboration / Astronomy & Astrophysics
    accessed: '2026-11-06'
  - title: 'Big Bang Nucleosynthesis, 2025 update, §§24.1–24.2'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
legacy:
  id: baryon-asymmetry-establishment
  icon: "\U0001F3AF"
  relatedLabels: 重子不对称性、萨哈罗夫条件、重子生成、轻子生成、CP破坏、反物质、物质起源、大统一理论
chronology:
  status: undetermined
  plot: false
review:
  method: source-check
  date: '2026-11-06'
  original:
    title: 重子-反重子不对称性建立
    quantity:
      value: 1.e-10
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 10⁻¹⁰ 秒
  notes:
    - >-
      撤销旧 10⁻¹⁰ 秒及“萨哈罗夫条件在此阶段已满足”的确定性断言；PDG BBN 与 Planck 2018 分别支持轻元素与 CMB
      的重子密度约束，LHCb 提供 CP 破坏实验证据。
    - 本条仍保留“未定”状态，因为观测约束不等于起源时刻已核定；来源可打开且已核对。
    - >-
      2026-11-07 保留“未定”状态：早期宇宙节点：quantity 为 null，属模型/假说，尚无统一核定时刻；保留
      “未定”状态。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：轻元素与 CMB 约束的是不同时代的重子含量，没有单一的“建立时刻”。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
conditions:
  timeBasis: time.big-bang
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: 本条不进入历史轴；CMB 与 BBN 给出不同时代的重子含量约束，不反推唯一起源时刻
  precision: 参考时刻未核定
  note: 当前不提供确定宇宙时间，不进入历史坐标轴。
uncertainty: 本条没有已核定的不对称建立时刻；轻元素与 CMB 约束的是不同时代的重子含量，旧 10⁻¹⁰ 秒只作审核证据，不能当作当前科学数值。
visual:
  template: particle-reaction
  profile: asymmetry
  caption: 重子—反重子差额的观测与机制 · 三维参照
  note: >-
    粒子对比表示净差额概念，不是某一实验事件的影像，也不指定建立时刻。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: primordial
  color: '#b9a6c8'
  scene: time.big-bang
mode: 未定
tags:
  - 太初宇宙
  - 未定
  - 早期宇宙
---
## 它是什么

这一条关注“物质比反物质多”这个观测结果的建立与约束，而不是具体哪一种粒子物理机制制造了差额。[1][2] 重子不对称通常用重子数与光子数之比描述；它是一个很小的净余额，不是宇宙中完全没有反物质。[1][2] 恒星、行星与人体由重子组成，而反物质只在实验和宇宙射线中以少量形式出现，这个对比就是问题的起点。[1][3]

## 怎样知道或为何是推断

原初核合成的轻元素丰度对重子密度敏感，天文测量与核反应计算可以反推净重子量。[2][5] 宇宙微波背景的温度与偏振数据独立拟合出普通重子密度，Planck 2018 给出与核合成相容的结果。[4][5] 两条路线来自不同时代与不同物理，却指向同一量级，这构成交叉检验。[2][4][5] 但它们是“结果”的证据，不是“差额何时建立”的直接记录；LHCb 的 CP 破坏测量则属于机制侧的实验线索。[3]

## 时间坐标与口径

重子不对称的“建立时刻”没有唯一答案：观测能约束的是某个时代已经存在的重子含量，而差额最初在哪一刻产生取决于具体机制。[1][2][4] 复合时期测到的重子密度是结果，不是起点；不同机制可以把产生时刻放在电弱相变、大统一尺度或更早。[1][4] 因此本条不给出单一秒数，而把可观测约束与模型推断分开：前者来自 CMB 与轻元素丰度，后者依赖 CP 破坏和偏离平衡的条件。[2][4]

## 常见误解

误解之一是把微波背景测出的重子密度当成重子生成的时刻。CMB 记录的是复合时期的状态，不是起源瞬间。[4][5] 另一个误解是把“净重子数很小”理解为“物质和反物质几乎相等所以无关紧要”；正是这极小的差额留下了今天的物质世界，而湮灭后的辐射也仍在宇宙中。[1][2]

## 与其他阶段的关系

它与重子生成分工：本条强调观测结果与约束，重子生成条目强调候选机制。两者都要与电弱相变、大统一假说和核合成对照。[1][2][5] 若未来实验找到新的 CP 破坏或偏离平衡的信号，约束会更新，但“何时建立”仍需模型与观测共同限定。[3][4] 阅读时可把它放在“结果—机制”链条的前半段，而不是把观测数字直接当成历史起点。[1][4]
