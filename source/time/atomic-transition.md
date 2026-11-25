---
id: time.atomic-transition
title: 原子跃迁
titleEn: Atomic Transition
dimension: cosmic-time
category: 时长尺度
summary: 原子跃迁指电子在能级间转换；激发态自发辐射的平均持续时间即自发辐射寿命。电偶极允许跃迁的典型寿命约为10⁻⁹至10⁻⁸秒。
quantity:
  value: 1.e-8
  unit: s
  measure: duration-reference
  measureLabel: 电偶极允许跃迁的自发辐射寿命量级，取10⁻⁸秒作代表值
  approximate: true
displayValue: 约 10⁻⁹–10⁻⁸ 秒
chronology:
  status: duration
  plot: false
  note: 本条是持续时长/周期，不是大爆炸后的绝对时点，不放在绝对时间轴上
conditions:
  system: 孤立原子或稀薄气体
  transition: 电偶极允许跃迁
  band: 常见可见与紫外谱线
  quantity: 激发态平均寿命（Einstein A系数的倒数）
  caveat: 禁戒跃迁与亚稳态可长达数秒甚至更久
uncertainty: >-
  “10⁻⁹至10⁻⁸秒”是常见允许跃迁的数量级，不是所有谱线的统一值。
  寿命跨越多个数量级，取决于上下能级、选择定则与跃迁概率；碰撞、辐射场与温度会使测量值偏离内禀寿命。 引用时必须给出具体谱线与实验条件；NIST
  数据库按谱线分别列出跃迁概率。
related:
  - space.atom
  - space.hydrogen-21cm
  - space.helium-atom
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: spontaneous emission
    url: 'https://www.britannica.com/science/spontaneous-emission'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Atomic Spectra Database (Standard Reference Database 78)
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-06'
  - title: Chemistry 2e §6.3 — Development of Quantum Theory
    url: >-
      https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory
    publisher: OpenStax / Rice University
    accessed: '2026-11-24'
  - title: EDGES — Experiment to Detect the Global EoR Signature
    url: >-
      https://www.haystack.mit.edu/astronomy/astronomy-projects/edges-experiment-to-detect-the-global-eor-signature/
    publisher: MIT Haystack Observatory
    accessed: '2026-11-24'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - Britannica 自发辐射条目核实平均跃迁时间通常为10⁻⁹至10⁻⁸秒，并强调其为概率过程。
    - NIST 原子光谱数据库核实按谱线汇编能级、波长与跃迁概率，可作为寿命换算的实验与理论数据来源。
    - 取10⁻⁸秒为代表值，覆盖允许跃迁区间的上端；未把该值外推到禁戒跃迁。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: quantum-field
  scene: time.object
  caption: 原子跃迁 · 能级与光子发射示意
  note: 能级与光子为风格化示意，非按比例，非观测重建，不表示真实原子轨迹或特定谱线
mode: 时长
tags:
  - 时长尺度
  - 时长
---
## 它是什么

原子跃迁指电子在能级之间转换；当原子从激发态自发落到较低能态并发出光子时，这一过程有平均持续时间，称为自发辐射寿命。电偶极允许跃迁的典型寿命约为10⁻⁹至10⁻⁸秒。[1] 它描述的是“激发态能维持多久”，不是“原子在何时被激发”。

## 怎样知道

寿命由爱因斯坦A系数决定：跃迁概率越大，寿命越短。NIST 原子光谱数据库系统汇编了各谱线的跃迁概率与能级数据，实验上可通过测量谱线自然宽度或时间分辨荧光得到寿命。[2] Britannica 把自发辐射的平均时间概括为10⁻⁹至10⁻⁸秒，并强调它是概率过程而非固定时刻。[1] 不同谱线、不同上下能级给出的数值可相差多个数量级。

## 数值与口径

10⁻⁹至10⁻⁸秒适用于常见的电偶极允许跃迁；禁戒跃迁可长达数秒甚至更长，例如某些亚稳态。[1][2] 寿命还受碰撞、辐射场和温度影响，稀薄气体中的测量更接近内禀值。引用时应说明是哪条谱线、什么条件，而不能把“10⁻⁸秒”当成所有原子跃迁的统一时长。[2]

## 这是持续多久，不是发生在何时

这是激发态的平均存活时间，是一个持续时间；单个原子何时跃迁只能由概率分布描述，不能预告绝对时刻。

## 常见误解

误解之一是把寿命理解为“到点必发”。实际衰减遵循指数分布，平均寿命只是统计参数。[1] 另一误解是把跃迁寿命与谱线宽度割裂开：自然宽度与寿命互为倒数关系，测宽也是测寿命的一种方式。[2]

## 与其他尺度的关系

10⁻⁸秒比一次心跳短约数千万倍，比蛋白质折叠（约10⁻³秒）短十万倍，却比强相互作用时间（约10⁻²³秒）长千万亿倍。原子跃迁处在宏观时间与核过程之间，是理解“光如何产生”的基层时钟。[1][2]

## 来源交叉核对

本条的时间锚点另用 [3]（OpenStax / Rice University）交叉核对；不同来源对年代边界、纪年换算或历史分期的处理可能不同，正文以标注的口径为准。

## 来源交叉核对

本条的时间锚点另用 [4]（MIT Haystack Observatory）交叉核对；不同来源对年代边界、纪年换算或历史分期的处理可能不同，正文以标注的口径为准。
