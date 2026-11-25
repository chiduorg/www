---
id: time.electron-positron-annihilation
title: 电子-正电子湮灭
titleEn: Electron–Positron Annihilation
dimension: cosmic-time
category: 太初宇宙
summary: 早期电子与正电子的数量随冷却显著下降，能量与熵重新分配给粒子热浴。这是有明确物理基础的持续过程，不能压成所有粒子同时消失的一秒。
quantity:
  value: null
  unit: s
  measure: undetermined-cosmic-time
  measureLabel: 宇宙时间未核定
  approximate: true
  status: undetermined
displayValue: 早期热演化过程，统一参考时刻未核定
related:
  - time.dark-matter-freeze-out
  - time.recombination
  - time.neutrino-decoupling
  - time.neutrino-background-formation
  - temperature.neutrino-background-temp
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: 'Neutrinos in Cosmology, 2025 update, §26.1'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrinos-in-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: Electron-Positron Annihilation Freeze-Out in the Early Universe
    url: 'https://arxiv.org/html/1910.14050v1'
    publisher: Thomas et al. / Physical Review D
    accessed: '2026-11-06'
  - title: A Short Survey of Matter-Antimatter Evolution in the Primordial Universe
    url: 'https://arxiv.org/pdf/2305.09055'
    publisher: 'Johann Rafelski et al. / University of Arizona, Universe 2023'
    accessed: '2026-11-06'
legacy:
  id: electron-positron-annihilation
  icon: ✨
  relatedLabels: 正电子、电子、湮灭、量子电动力学、反物质、PET扫描、LEP、狄拉克方程
chronology:
  status: undetermined
  plot: false
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 电子-正电子湮灭
    quantity:
      value: 5
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = ~5 秒
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「早期电子与正电子的数量随冷却显著下降，能量与熵重新分配给粒子热浴。这是有明确物理基础的持续过程，不能压成所有粒子同时消失的一秒。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 依据 PDG §26.1 与 Thomas 等人 §II–§IV 重写；主要湮灭、化学平衡退出和 16 keV 尾部冻结是不同阶段，仍不设统一秒数。
    - 保留“未定”状态：本条 quantity 仍为 null，未选定可比较的统一参考时刻，因此不上时间轴；不采用旧 5 秒值。
    - >-
      2026-11-07 保留“未定”状态：早期宇宙节点：quantity 为 null，属模型/假说，尚无统一核定时刻；保留
      “未定”状态。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：主要湮灭、化学平衡退出与 16 keV 尾部冻结不是同一事件，缺少统一时间口径。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
conditions:
  timeBasis: time.big-bang
  modelTemperatureKeV: 16
  conversion: 温度—时间换算依赖 BBN 阶段膨胀史，未采用单一时刻
  precision: 过程性阶段，无统一参考时刻
  note: 当前不提供确定宇宙时间，不进入历史坐标轴；原始旧值仅保留在 review.original。
uncertainty: 主要湮灭、化学平衡退出与约 16 keV 的尾部冻结并非同一事件；缺少可比较的统一时间口径，故保持未定。
visual:
  template: particle-reaction
  profile: electron
  caption: 早期宇宙中的电子—正电子湮灭 · 三维参照
  note: >-
    成对产生与湮灭的解释模型，不表示所有电子在某一秒同时消失。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#c9b7a6'
  scene: time.object
mode: 未定
tags:
  - 太初宇宙
  - 未定
  - 早期宇宙
---
## 它是什么

电子与正电子是早期等离子体中的带电轻子对。高温时，光子可以成对产生电子—正电子，电子对也能湮灭成光子，二者维持化学平衡。[2] 随着冷却，成对产生被运动学抑制，湮灭占优，电子与正电子的平衡数量大幅下降，能量和熵转入光子热浴。[2]

## 怎样知道或为何是推断

Thomas 等人的计算用 Klein–Nishina 振幅和费米阻塞、玻色增强等统计因子，自洽求解碰撞积分，发现湮灭在光子—电子—正电子—重子等离子体约 16 keV 时冻结，此后反应率低于哈勃率。[2] 这不是直接观测到的早期事件，而是把粒子物理反应率代入热史模型的推断；同一过程会影响原初核合成产物与相对论自由度。[2] PDG 指出，精确处理还需考虑中微子脱耦并非瞬时、味振荡与等离子体修正。[1]

## 时间坐标与口径

本条不设统一宇宙时刻，因为“主要湮灭”“化学平衡退出”和“尾部冻结”是不同阶段，不能压成一个秒数。[2] 约 16 keV 是所引模型的冻结温度；换成时间要依赖当时的膨胀史与有效自由度，而不同计算给出的阶段边界并不相同。[2] 遗迹中微子温度与光子温度的比例 (4/11)^(1/3) 只是瞬时脱耦近似，实际修正仍在百分之一量级。[1]

## 常见误解

误解之一是把湮灭理解成所有电子与正电子在某一秒相互撞光。实际是一边产生、一边湮灭的统计过程，净数量逐渐下降。[2] 另一个误解是把“电子—正电子湮灭结束”当成电子从此消失；普通物质中的电子仍然存在，后来还要参与复合形成原子。[2][3]

## 与其他阶段的关系

这一过程发生在中微子脱耦之后、原初核合成期间及稍后，是轻子时代向辐射—物质背景过渡的一环。[2][3] 它把熵优先交给光子，使中微子背景温度相对光子降低，从而影响微波背景与 N_eff 的推断。[1][2] 与后来的复合相比，它改变的是粒子库存与热浴分配，而不是原子形成。[1][3]
