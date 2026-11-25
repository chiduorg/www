---
id: time.thermal-equilibrium
title: 热平衡建立
titleEn: Establishing Thermal Equilibrium
dimension: cosmic-time
category: 太初宇宙
summary: 暴胀把宇宙拉伸到极冷，随后暴胀场的能量转交粒子，碰撞与散射让等离子体逐步进入热状态。约 10⁻³² 秒是模型时间线上的量级参考，不是测得的统一时刻。
quantity:
  value: 1.e-32
  unit: s
  measure: time-after-big-bang-model-reference
  measureLabel: 模型下的宇宙时代参考
  approximate: true
displayValue: t ≈ 10⁻³² 秒（模型参考）
related:
  - space.observable-universe
  - mass.total-matter-universe
  - time.inflation
  - time.reheating
  - time.quark-hadron-phase-transition
  - time.electroweak-epoch
reviewStatus: reviewed
sources:
  - title: Time-line in an Inflationary Big Bang Cosmology
    url: 'https://aether.lbl.gov/www/science/inflation-history.html'
    publisher: Lawrence Berkeley Laboratory
    accessed: '2026-11-06'
  - title: 'Nonperturbative Dynamics of Reheating After Inflation: A Review'
    url: 'https://arxiv.org/abs/1410.3808'
    publisher: >-
      Amin, Hertzberg, Kaiser & Karouby / International Journal of Modern
      Physics D
    accessed: '2026-11-06'
  - title: The very early universe — Inflation
    url: 'https://www.britannica.com/science/cosmology-astronomy/Inflation'
    publisher: Encyclopaedia Britannica
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
      用 WebFetch 打开 LBL 暴胀时间线、Amin 等再加热综述摘要与 Britannica 暴胀页；LBL 明确 10⁻³²
      秒为再加热开始， 并自注这些数值是给定宇宙学参数下的粗略估计。
    - 正文按模型参考处理，同时保留热化不是单一瞬间、不同耦合会移动时刻的限制。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  model: 暴胀后再加热热史（势能与耦合未固定）
  precision: 量级参考，非事件测时
  note: 模型依赖；10⁻³² 秒为粗略时间线参考，不是测得时刻。
uncertainty: 热化时刻取决于暴胀势能、耦合强度与热化判据；10⁻³² 秒只是特定热史量级，不同模型可给出更早或更晚的窗口。
visual:
  template: particle-reaction
  profile: thermalization
  caption: 热平衡建立 · 三维参照
  note: >-
    粒子碰撞与能量交换是示意，不是实际观测轨迹，也不代表统一的全体热化瞬间。
    模型为解释性三维示意，不是实物或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: primordial
  color: '#c9a27e'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

热平衡建立指早期宇宙中的粒子通过频繁碰撞和相互作用，使不同种类粒子共享温度、能量按统计规律分布的过程。暴胀把宇宙拉伸得极冷，暴胀场随后衰变，把能量交给普通粒子，宇宙重新变为高温稠密的等离子体。[1][2] 这里的“建立”不是某个开关被按下的一刻，而是能量转移、粒子产生与散射逐步让气体进入热状态的一段过程。[2] 它也不等于所有粒子立刻达到相同温度；中微子等弱相互作用粒子可能先脱耦，留下自己的遗迹背景。

## 怎样知道或为何是推断

没有直接观测能回放这一刻。支持来自宇宙热史的推断：原初核合成的轻元素丰度、微波背景的黑体谱，都要求早期宇宙经历过高温热平衡阶段。[2][3] 再加热综述指出，暴胀结束到核合成之间的状态仍不完整，热化细节取决于暴胀场与标准模型粒子的耦合。[2] 常见时间线把再加热开始放在约 10⁻³² 秒，但这类表是给定宇宙学参数的粗略估计，不是测得的事件时刻。[1]

## 时间坐标与口径

这里取约 10⁻³² 秒作模型参考，采用“自大爆炸起”的秒数坐标。[1] 同一条时间线还列出 10⁻³⁸ 秒的“微扰相互作用热化极限”，说明热化并不是一个边界清晰的瞬间；不同模型可以给出更早或更晚的热化时刻。[1][2] 因此这个数字只适合作为量级锚点，读数时应连同暴胀势能、耦合强度和热化判据一起理解。[2][3] 把它当成全宇宙统一的生日，会高估精度。

## 常见误解

误解之一是把热平衡当成“宇宙整体温度处处相同”。在膨胀宇宙中，热平衡是局部的、动态的，不同粒子种类可以先后脱耦。[2] 另一误解是把再加热当成暴胀之前的一次加热；再加热发生在暴胀之后，且“再”字不保证此前存在已确认的热时期。[3] 还有人把模型时间线当成观测证据；它描述的是理论热史，不是望远镜拍到的画面。[1][2]

## 与其他阶段的关系

热平衡建立为后续的电弱阶段、夸克—强子相变和原初核合成准备初始条件。[2][3] 它承接暴胀与再加热，向下影响中微子脱耦和轻元素丰度；若热化历史不同，这些遗迹的预言也会改变。[1][2] 与复合相比，这里说的是等离子体内部的热化，而不是中性原子形成；两者相隔极远，不能混为一个“早期瞬间”。[3]
