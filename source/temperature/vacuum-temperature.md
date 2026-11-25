---
id: temperature.vacuum-temperature
title: 真空温度
titleEn: Vacuum temperature
dimension: temperature
category: 极低温
summary: >-
  真空温度没有单一数值。理想真空没有热力学温度；量子场论的真空态可对加速观测者表现为热浴， 即 Unruh
  效应，其等效温度随加速度变化，因此本条不参与数轴比较。
quantity:
  value: null
  unit: K
  measure: 概念条目，量值未定
  measureLabel: 概念条目，量值未定
  status: undetermined
  approximate: true
displayValue: 未定（无统一数值）
related:
  - space.moon
  - mass.helium-nucleus
  - temperature.absolute-zero
  - temperature.hawking-temperature
  - temperature.space-background
  - temperature.quantum-degeneracy
reviewStatus: reviewed
sources:
  - title: A Primer for Black Hole Quantum Physics
    url: 'https://arxiv.org/abs/0710.4345'
    publisher: 'Brout, Massar, Parentani & Spindel, arXiv (2007)'
    accessed: '2026-11-06'
  - title: >-
      Inertial-to-Rindler Coordinates, with applications to the Twin Paradox,
      Radar Time and the Unruh Temperature
    url: 'https://arxiv.org/abs/2601.18956'
    publisher: 'Paul M. Alsing, arXiv (2026)'
    accessed: '2026-11-06'
  - title: WKB-like approach to the Unruh temperature for arbitrary acceleration
    url: 'https://arxiv.org/abs/2602.22534'
    publisher: 'Paul M. Alsing, arXiv (2026)'
    accessed: '2026-11-06'
conditions: >-
  概念条目，无统一实验条件。理想真空与惯性观测者不定义热力学温度；Unruh 温度针对匀加速观测者，取固有加速度 a，温度
  T_U=ħa/(2πck_B)，并需说明测量者与时空背景。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - Brout 等综述讨论均匀加速探测器的热化，以及真空态定义对观测者的依赖；用于区分“真空无温度”和“加速观测者的等效热浴”。
    - Alsing 的两篇 arXiv 文章给出 Unruh 温度与加速度的关系及 T_U=ħa/(2πck_B) 的定义，用于说明没有单一数值。
    - 正文不选固定数字；quantity.value 置 null、status 置 undetermined，保留概念条目身份。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  没有统一数值。理想真空没有热力学温度；Unruh 温度依赖观测者的固有加速度；宇宙学真空能不直接给出温度。
  因此本条不参与数轴比较，任何单一数字都必须附带定义、观测者与加速度条件。
visual:
  template: radiation-field
  profile: vacuum
  caption: 量子真空与加速观测者示意
  note: >-
    真空涨落、加速轨迹与热浴为概念示意，非按比例，也不是实验观测重建；画面不代表真空有一个统一温度，也不表示 Unruh 效应已被直接观测。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#b6a7e6'
  symbol: T_U
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

“真空温度”没有单一数值。普通热力学温度描述大量粒子的热平衡；理想真空没有粒子、没有热浴，也就没有通常意义下的温度。[1] 量子场论的真空仍有零点涨落和真空能，但零点能本身不等于温度，不能直接读成一个开尔文数。

## 怎样定义

在量子场论中，真空态的定义依赖观测者。惯性观测者看到的 Minkowski 真空，对匀加速观测者可以表现为热浴，这就是 Unruh 效应。[1][2] 其温度写作 T_U = ħa/(2πck_B)，与固有加速度 a 成正比；加速度越大，等效温度越高。[3] 因此“真空温度”必须先说明是谁、以什么运动状态测量。

## 数值与口径

本条不给出单一数值，因为不存在适用于所有定义的单一物理量。按 Unruh 公式，a = 1 m/s² 时 T_U 约 4×10⁻²¹ K；这一数值小到无法用普通温度计实现。[3] 宇宙学中的真空能、暗能量也不直接给出一个可比较的温度。把真空温度写成 0 K、2.725 K 或某个固定值，都会丢掉定义。

## 常见误解

第一，把“真空没有温度”当成“真空绝对零度”；两者不是同一命题。[1] 第二，把 Unruh 温度当成真空本身的温度；它是对加速观测者的等效热描述。第三，把宇宙微波背景的 2.725 K 当成真空温度；CMB 是光子气体，不是真空态。第四，把真空能密度直接换算成温度而不说明状态方程与单位。

## 与其他温区的关系

真空温度无法放进单一温标，只能与具体定义并列：绝对零度的 0 K 是热力学零点；CMB 的 2.725 K 是辐射场温度；霍金温度是黑洞视界的理论温度；Unruh 温度则随加速度变化。[1][2][3] 这些量都与量子真空有关，却不是同一个物理量。保留未定值比选一个无依据的数字更诚实。
