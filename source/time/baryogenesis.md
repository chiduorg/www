---
id: time.baryogenesis
title: 重子生成：物质为何留存
titleEn: Baryogenesis
dimension: cosmic-time
category: 太初宇宙
summary: 宇宙留下的净物质从何而来？重子生成把这个问题连接到粒子反应、对称性与热平衡；实验已看见若干必要现象，但尚未确认完整的宇宙学机制。
quantity:
  value: null
  unit: s
  measure: undetermined-cosmic-time
  measureLabel: 宇宙时间未核定
  approximate: true
  status: undetermined
displayValue: 发生时间未定（理论机制问题）
related:
  - time.baryon-asymmetry-establishment
  - time.electroweak-symmetry-breaking
  - space.proton
  - time.reheating
reviewStatus: reviewed
sources:
  - title: 'Big-Bang Cosmology, 2025 update'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: Antimatter
    url: 'https://home.cern/science/physics/antimatter'
    publisher: CERN
    accessed: '2026-11-06'
  - title: Observation of charge-parity symmetry breaking in baryon decays
    url: 'https://arxiv.org/html/2503.16954v2'
    publisher: LHCb Collaboration / Nature
    accessed: '2026-11-06'
  - title: Electroweak baryogenesis
    url: 'https://arxiv.org/pdf/1206.2942'
    publisher: Morrissey & Ramsey-Musolf / New Journal of Physics
    accessed: '2026-11-06'
legacy:
  id: baryogenesis
  icon: ⚖️
  relatedLabels: 重子不对称性、萨哈罗夫条件、轻子生成、CP破坏、反物质、电弱相变、大统一理论、物质起源
chronology:
  status: undetermined
  plot: false
review:
  method: source-check
  date: '2026-11-06'
  original:
    title: 重子生成
    quantity:
      value: 1.e-37
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 10⁻³⁷ 秒
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「宇宙留下的净物质从何而来？重子生成把这个问题连接到粒子反应、对称性与热平衡；实验已看见若干必要现象，但尚未确认完整的宇宙学机制。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - >-
      删除旧 10⁻³⁷ 秒的无依据时刻；PDG 综述给出萨哈罗夫条件与候选机制框架，CERN 说明物质—反物质不对称问题，LHCb 给出重子衰变中的
      CP 破坏证据。
    - 本条仍保留“未定”状态，因为重子生成时刻没有统一核定值；来源可打开且已核对。
    - >-
      2026-11-07 保留“未定”状态：早期宇宙节点：quantity 为 null，属模型/假说，尚无统一核定时刻；保留
      “未定”状态。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：重子生成可能发生在电弱相变、大统一尺度或更早，候选机制不共享一个时刻。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
conditions:
  timeBasis: time.big-bang
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: 本条不进入历史轴；候选机制各自给出条件性时段，不能换算成通用秒数
  precision: 参考时刻未核定
  note: 当前不提供确定宇宙时间，不进入历史坐标轴。
uncertainty: 重子生成可能发生在电弱相变、大统一尺度或更早，候选机制不共享一个时刻；本条没有已核定的通用形成时间，旧秒数只作审核证据。
visual:
  template: particle-reaction
  profile: baryon
  caption: 重子生成的可能粒子反应 · 三维参照
  note: >-
    粒子轨迹表示候选反应，不是已观测到的宇宙事件，也不指定某一种重子生成机制。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: primordial
  color: '#c9b28e'
  scene: time.big-bang
mode: 未定
tags:
  - 太初宇宙
  - 未定
  - 早期宇宙
---
## 它是什么

重子生成要解释为什么宇宙留下净重子数：恒星、行星和人体主要由质子与中子构成，而反物质没有以同等数量留存。[1][2] 这不是“反物质不存在”的问题；实验能产生反粒子，宇宙射线中也有反粒子。问题是早期演化为什么留下了差额，而不是怎样制造一对粒子与反粒子。[1][2]

## 怎样知道或为何是推断

观测上，轻元素丰度和微波背景约束重子与光子的比例，证明净重子数很小但非零。[1] 理论上，萨哈罗夫条件给出产生差额所需的三类要素：重子数改变、C 与 CP 对称性破坏、偏离热平衡。[1][4] LHCb 在含底夸克重子的衰变中观测到 CP 破坏，为研究物质—反物质差别提供了新证据；但论文也指出，已知夸克机制不足以解释宇宙总量。[3] 因此“差额存在”有观测支持，“差额怎样产生”仍是模型问题。[1][3]

## 时间坐标与口径

重子生成可能发生在电弱相变、大统一尺度或更早，候选机制并不共享一个时刻，因此不存在一个通用的“重子诞生秒数”。[1][4] 可检验的是机制所需的条件：足够的 CP 破坏、偏离平衡的过程，以及能留下当前重子密度的效率。[1][2] 这些条件可以在不同能标下实现，所以文献给出的时间只对应各自模型，不能当成统一历史坐标。[1][4]

## 常见误解

误解之一是把“实验室看到 CP 破坏”当成“宇宙重子生成已经解决”。LHCb 测到的是一个衰变通道的差别，不能直接换算成宇宙净重子比例。[3] 另一个误解是把重子生成等同于“所有反物质都消失了”。实际是正反物质大量湮灭后留下很小的净差额；差额很小，却足以构成今天的物质世界。[1][2]

## 与其他阶段的关系

重子生成与电弱对称性破缺关系密切：某些方案需要一阶电弱相变提供偏离平衡的条件，但标准模型格点计算给出平滑交叉，使这类方案需要扩展模型。[1][4] 它也为核合成提供初始重子密度，进而影响轻元素丰度；这条链把粒子物理与宇宙学观测连在一起。[1] 与“重子不对称性的起源”条目相比，本条更侧重机制，两条应并读而非互相替代。[1][2]
