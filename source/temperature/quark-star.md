---
id: temperature.quark-star
title: 夸克星（理论）
titleEn: Quark star (theoretical)
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  夸克星是理论上由奇异夸克物质构成的致密天体，尚未获得确认。它的表面温度没有 可靠、唯一的预测：裸露夸克表面、带壳结构和冷却历史会给出不同结果。 因此本条保留
  quantity.value 为 null，不把某个模型值当成对象温度。
quantity:
  value: null
  unit: K
  status: undetermined
  measure: 理论表面温度（量值未定）
  approximate: true
  measureLabel: 理论表面温度（未定）
displayValue: 理论温度未定
related:
  - temperature.neutron-star-core
  - temperature.neutron-star-surface
  - temperature.quark-gluon
  - temperature.magnetar-surface
  - temperature.planck-temperature
reviewStatus: reviewed
sources:
  - title: Cooling of quark stars from perturbative QCD
    url: 'https://arxiv.org/html/2508.11056'
    publisher: 'Ú. Fonseca and E. S. Fraga (arXiv:2508.11056)'
    accessed: '2026-11-06'
  - title: 'Quark matter in neutron stars: an aperçu'
    url: 'https://arxiv.org/pdf/astro-ph/0608345'
    publisher: 'P. Jaikumar, S. Reddy and A. W. Steiner (arXiv:astro-ph/0608345)'
    accessed: '2026-11-06'
conditions: >-
  对象为理论假说中的夸克星，即由解禁闭夸克物质构成的致密天体，尚未被观测确认。 温度口径应为表面有效温度，但其数值取决于状态方程、壳层结构、配对与冷却历史，
  目前没有可靠统一预测，故不参与数值比较。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 Fonseca & Fraga：夸克星冷却与表面温度依赖状态方程和是否带强子壳层，裸露夸克星冷却过快，模型差异显著。
    - 核对 Jaikumar 等综述：夸克物质在致密星内部的比例由状态方程决定，夸克星仍是理论可能性，观测判据尚不唯一。
    - 保留 quantity.value 为 null、status 为 undetermined；正文解释为何不能给出单一温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 表面温度不是单一可观测量：它依赖状态方程、壳层、超流/超导配对、质量、年龄和吸积历史； 不同冷却模型可给出相差多个量级的结果，且对象本身尚未确认。
visual:
  template: compact-star
  scene: temperature.object
  caption: 夸克星内部结构理论示意
  note: 以夸克物质核心与可能的壳层示意理论夸克星，不对应已确认天体；画面非按比例， 内部结构、颜色和粒子分布均为解释性示意。
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 一种尚未确认的致密天体

夸克星是理论假说中的致密天体：如果核心密度足够高，中子可能解体为解禁闭的夸克，整颗星由奇异夸克物质支撑。[2] 它与中子星的质量、半径相近，但内部物质状态不同。至今还没有一个对象被公认为夸克星。

## 为什么不能给出一个温度

表面温度取决于太多未定因素：状态方程决定半径和引力，壳层决定辐射如何从内部传出，配对与超流改变比热和冷却速度，质量与年龄又决定当前热状态。[1][2] 同一个“夸克星”在不同模型里可以处于完全不同的温度，不能取一个平均值冒充观测值。

## 冷却模型给出的线索

冷却计算表明，新生夸克星表面可以极热，随后因中微子发射迅速降温；裸露夸克星冷却过快，带强子壳层的构型则较慢，二者对观测热辐射的预测不同。[1] 这些结果说明温度是模型输出，而不是对象自带的固定标签。即使给出某个年龄的温度，也必须连同模型一起说明。

## 需要什么证据才能定量

要建立可比较的温度口径，至少需要确认对象身份、测量热 X 射线谱、约束半径和质量，并独立判断表面是裸露夸克物质还是带壳层。[1][2] 引力波、脉冲计时和冷却曲线也能提供辅助约束。在这些条件满足前，把某个理论值写进温标会制造虚假精度。

## 在温标上的位置

本条不参与温度数轴比较，但可以把它与已知致密天体并置理解：中子星表面常在约 10⁶ K 量级，磁星可到约 10⁷ K，而夸克星若存在，其表面温度可能落在相近或更宽的范围。问题不在于“猜一个数”，而在于先确认对象并建立可复现的测量口径。[2]
