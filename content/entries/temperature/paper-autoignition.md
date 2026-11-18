---
id: temperature.paper-autoignition
title: 纸张受热着火
titleEn: Ignition of cellulosic paper
dimension: temperature
category: 中温
summary: 纸张受热着火不是单一温度，而是随纸样、热流、气流、方向和测点变化的点燃过程。条目保留未定数值，只描述试验条件与判据。
quantity:
  value: null
  unit: K
  measure: 未指定纸样与试验条件的着火温度
  status: undetermined
  approximate: true
  measureLabel: 未指定纸样与试验条件的着火温度
displayValue: 需指定纸样与试验（仅阅读）
related:
  - temperature.cooking_oil_smoke
  - temperature.bunsen-burner-flame
  - temperature.bread_baking
  - temperature.tungsten-filament
  - temperature.boiling-water
reviewStatus: reviewed
sources:
  - title: Ignition of Cellulosic Paper at Low Radiant Fluxes
    url: 'https://ntrs.nasa.gov/api/citations/19960048690/downloads/19960048690.pdf'
    publisher: NASA Technical Memorandum 107311
    accessed: '2026-11-06'
  - title: Ignition of Cellulosic Paper at Low Radiant Fluxes (record)
    url: 'https://ntrs.nasa.gov/citations/19960048690'
    publisher: NASA NTRS
    accessed: '2026-11-06'
  - title: >-
      Ignition of Cellulosic Fuels by Heated and Radiative Surfaces (NIST TN
      1481)
    url: >-
      https://www.nist.gov/publications/ignition-cellulosic-fuels-heated-and-radiative-surfaces-nist-tn-1481
    publisher: NIST
    accessed: '2026-11-06'
legacy:
  id: paper-autoignition
  icon: "\U0001F4C4"
  relatedLabels: 纤维素、热解、引燃、自燃、辐射热流、阻燃、火灾科学、纸品、热重分析、锥形量热仪
conditions: 纸张（纤维素材料）在指定辐射热流、气流、取向与引燃方式下的着火；引燃与无引燃自燃必须分开，表面温度与气相温度也必须分开。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NASA TM 107311 记录低辐射热流下纸张着火的实验：入射热流、聚焦或漫射源、引燃源位置、自然对流和水平试样都会改变着火时间。
    - NIST TN 1481 的摘要说明纤维素燃料的点燃时间随表面温度降低而增加，并受风速、燃料种类和引燃方式影响。
    - 条目仍保留 needs-review：不同纸样与试验装置无法归并为一个可比较的温度值，quantity 继续为空；正文只写条件与判据。
    - 2026-11-07 保留 needs-review：着火温度依赖纸样、厚度、含氧量与试验条件，不能写成单值。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：纸种、定量、含水率、气流、辐射热流与测温点都会改变着火判据。'
  originalQuantity:
    value: 506
    unit: K
    measure: legacy-temperature-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 没有单一数值可给：纸种、定量、含水率、表面朝向、环境气流、辐射热流和测温点都会改变结果；引燃与无引燃自燃也给出不同的着火判据。
visual:
  template: burner
  profile: bunsen
  caption: 纸张低热流着火试验示意
  note: >-
    纸张受热着火的试验示意，不代表任何具体纸样或热流；火焰、试样和支架均为概念布局，非按比例绘制，也不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: heat-flow
  color: '#ff9d5c'
  symbol: Paper ignition
  scene: temperature.object
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

纸张受热着火是纤维素材料在外部热源作用下经历干燥、热解、挥发物析出和点燃的过程，不是某个固定的“纸张燃点”。需要区分三种判据：有引燃源时的点燃、无引燃源时的自燃，以及只出现灼热燃烧而尚未转为明火的阶段。[1][3] 同一种纸在不同热流和气流下，着火时间与表面温度可以明显不同，因此不能用一个数代表“纸的着火温度”。

## 怎样测到

NASA TM 107311 用低辐射热流加热纸样，研究入射功率、聚焦或漫射光源、独立引燃源位置、自然对流和试样方向对着火的影响。[1][2] NIST TN 1481 则用加热板与锥形量热仪，在受控热流和风速下测量点燃时间，并记录从灼热燃烧到明火的转变。[3] 这些实验记录的是时间、热流、表面温度与是否引燃，而不是把某一瞬间读成一个普适温度。

## 数值与口径

条目不给单一数值，因为“温度”必须连同热流、气流、纸样和测点一起定义。[1][3] 文献中常被引用的 451 °F 约合 232.8 °C、505.9 K，但它来自特定叙述，并不是所有纸张的自燃点；把它当成普适常数会忽略材料与条件差异。若必须比较不同试验，至少要同时报告纸种、定量、含水率、入射热流、引燃方式和测温位置。

## 常见误解

“纸在 233 °C 就自动着火”是最常见的误读：233 °C 只是 451 °F 的换算，并非经过统一定义的物性常数。第二个误解是把看到明火当成唯一起点；实验里先出现灼热燃烧，再过渡到明火，判据不同，时间也不同。[3] 第三，认为热流越强、着火温度一定越高；NASA 的记录显示，热流增强时着火时间缩短，表面着火温度往往随热流改变而下降。[1] 最后，纸的厚度、颜色和含水率都会改变吸热与热损失。

## 与其他温区的关系

水的常压沸点 373.15 K 低于纸张着火所涉及的表面温度，烘烤设定 491.5 K 和新鲜油样烟点约 493 K 也都低于它；这说明“能烤面包、能冒烟”并不等于纸张已经进入点燃阶段。它远低于铝的熔点 933.473 K，也低于许多金属的固相线。纸张着火处在“日常加热”与“材料熔化”之间的火灾科学温区，关键变量是热流与时间，而不是一个孤立的温度数字。
