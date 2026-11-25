---
id: temperature.weld-arc
title: 焊接电弧
titleEn: Welding arc plasma temperature
dimension: temperature
category: 极高温
summary: >-
  焊接电弧的等离子体温度常取约 3,500 K（约 3,227 ℃）作为工程代表值。电弧内部梯度极大， 阴极附近可高达约 17,000
  K；这不是焊件整体温度，也不是焊缝金属的熔点。
quantity:
  value: 3500
  unit: K
  measure: 焊接电弧等离子体等效温度
  approximate: true
  measureLabel: 焊接电弧等离子体等效温度
displayValue: '约 3,500 K（约 3,227 °C）'
related:
  - temperature.steelmaking_temp
  - temperature.plasma-cutter
  - temperature.arc-lamp
  - temperature.oxyacetylene-flame
  - temperature.iron-melting
  - space.sun
reviewStatus: reviewed
sources:
  - title: 'Arc welding: metallurgy'
    url: 'https://www.britannica.com/technology/arc-welding'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'Welding: overview of types and hazards'
    url: 'https://www.ccohs.ca/oshanswers/safety_haz/welding/overview.html'
    publisher: Canadian Centre for Occupational Health and Safety
    accessed: '2026-11-06'
  - title: An introduction to physical phenomena in arc welding processes
    url: 'https://www.tandfonline.com/doi/abs/10.1533/wint.2004.3342'
    publisher: Taylor & Francis (Welding International)
    accessed: '2026-11-06'
conditions: 电弧焊的电极—焊件间隙、常压保护气氛或药皮气氛；温度随焊接方法、电流、极性、气体种类和弧长变化。 测点指电弧等离子体，不是熔池、热影响区或焊件整体。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 Britannica 弧焊条目：说明电弧作为持续放电热源，熔化填充金属与母材。
    - 核对 CCOHS：说明电弧是电极与母材之间的间隙放电，用于区分电弧与焊件。
    - '核对 Welding International 综述：钨阴极端部约 3,500 K，阴极附近弧柱约 17,000 K，阳极中心约 900 K。'
    - '正文取 3,500 K 作为工程代表值，并明确弧柱核心远高于此，不能把局部峰值当成整体温度。'
uncertainty: >-
  常用工程范围约 3,000–4,000 K（约 2,727–3,727 ℃）；弧柱核心和阴极斑点可达约 1.7×10^4 K。
  电流、保护气体、极性和弧长都会改变温度分布，单一数值不能覆盖所有焊接工艺。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: reaction-field
  profile: arc
  caption: 焊接电弧等离子体示意
  note: 画面为电极、电弧与焊件的示意表达，弧光颜色、等离子体亮度和飞溅均经艺术处理， 不能据颜色判断精确温度；非按比例，非观测重建；各对象分别调整显示大小。
  scene: temperature.object
zone: 极高温
tags:
  - 极高温
  - 温度
  - 日常
---
## 它是什么

焊接电弧是电极与焊件之间持续的气体放电。本条取约 3,500 K（约 3,227 ℃）作为电弧等离子体的工程代表温度；它不是焊件整体温度，也不是焊缝金属的熔点。电弧的稳定性依赖电极、保护气和电流波形，交流与直流的表现不同。[1][2]

## 怎样测到

电弧温度难以用接触式传感器测量，常用光谱诊断、发射谱线和数值模型反推。[3] 一项焊接电弧物理研究给出：钨阴极端部约 3,500 K，阴极附近弧柱可高达约 17,000 K，而阳极中心约 900 K；这说明同一电弧内部存在巨大梯度。[3] Britannica 把弧焊描述为用持续电弧作为热源熔化填充金属和母材。[1]

## 数值与口径

3,500 K 约合 3,227 ℃。[3] 工程上常说的 3,000–4,000 K 是电弧等离子体的量级估计；弧柱核心、阴极斑点和阳极熔池的温度并不相同。焊件只吸收一部分热量，熔池温度通常接近钢的液相线，而不是电弧温度；热影响区虽然达不到电弧温度，但仍可能改变金属组织。[1][2]

## 常见误解

第一，把电弧温度当成焊缝温度；熔池只有局部达到熔点以上。第二，把 3,500 K 当成整个电弧均匀温度；弧柱中心可高出一个数量级。第三，把电弧亮度当成温度；亮度和发射率、波长有关，不同焊接方法的电弧形态差异很大，不能用一个数值概括全部工艺。[3]

## 与其他温区的关系

3,500 K 高于钢的熔点约 1,811 K 和出钢温度约 1,893 K，低于等离子切割的约 8,000 K 和弧光灯正极 crater 的约 4,000 K。它处在冶金熔焊的高温端，足以熔化多数工程金属，但远低于聚变等离子体。[1][3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 3500 K，即 3227 ℃（按 T/K−273.15 换算）；约为太阳表面（5772 K）的 0.606 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10³ 量级附近。

读图时先看量级，再看倍数：10³ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
