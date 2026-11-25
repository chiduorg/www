---
id: temperature.solar-flare
title: 太阳耀斑
titleEn: Solar flare plasma temperature
dimension: temperature
category: 极高温
summary: >-
  太阳耀斑是磁场能量突然释放引起的剧烈增亮，等离子体可被加热到约 10⁷ K。 这是由 X 射线谱推断的耀斑等离子体温度，不是光球温度；耀斑内部通常同时存在
  多个温区，最高可到数千万甚至上亿开尔文。
quantity:
  value: 10000000
  unit: K
  measure: 耀斑等离子体温度
  approximate: true
  measureLabel: 耀斑等离子体温度
  range:
    min: 10000000
    max: 50000000
    unit: K
displayValue: 约 10⁷ K（约 10⁷ °C，量级）
related:
  - temperature.solar-corona
  - temperature.solar-chromosphere
  - temperature.solar-transition-region
  - temperature.sunspot
  - temperature.solar-wind
  - space.neutron-star
reviewStatus: reviewed
sources:
  - title: What is a Solar Flare?
    url: 'https://hesperia.gsfc.nasa.gov/~benedict/flaref.htm'
    publisher: 'NASA Goddard Space Flight Center, Solar Flare Homepage'
    accessed: '2026-11-06'
  - title: Solar eruptive events
    url: >-
      https://ntrs.nasa.gov/api/citations/20120013202/downloads/20120013202.pdf?attachment=true
    publisher: 'NASA Technical Reports Server, G. D. Holman'
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为太阳大气活动区中的耀斑等离子体；10⁷ K 指由软 X 射线谱和发射线拟合得到的温度，
  不是光球或色球的背景温度。耀斑常呈多温结构，单个拟合值只是加权结果。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 Hesperia 页面：日冕平时约数百万开尔文，耀斑内常达 1,000 万至 2,000 万开尔文，极端可达 1 亿开尔文。'
    - '核对 NASA NTRS 文章：耀斑可把等离子体加热到最高约 5,000 万开尔文，典型耀斑环约 1,000 万开尔文。'
    - 取 10⁷ K 为锚点，range 写 10⁷–5×10⁷ K，并说明多温结构与极端上限。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  耀斑温度随时间、位置和波段变化，X 射线拟合受多温等离子体、非平衡电离和仪器响应影响； 10⁷ K
  是典型量级，不能代表耀斑每个体积元，也不等于日冕的静止温度。
visual:
  template: stellar-event
  scene: temperature.object
  caption: 耀斑磁环与高温等离子体示意
  note: 以日面磁环和爆发亮斑示意耀斑，不对应某次具体事件；画面非按比例， 颜色、亮度和粒子流均为解释性示意。
zone: 极高温
tags:
  - 极高温
  - 温度
  - 日常
---
## 磁场能量突然释放

太阳耀斑是太阳大气中磁场重联或磁能突然释放造成的剧烈增亮，能量可在短时间内转化为热、辐射和粒子加速。[1] 它发生在活动区，常与太阳黑子和日冕物质抛射相伴，但并不等于整颗太阳升温。

## 温度从 X 射线谱读出

耀斑的高温等离子体发出软 X 射线，卫星用谱线强度和电离态拟合电子温度与发射度。[1] 不同波段看到不同高度的层次，硬 X 射线还追踪被加速电子。把某一条谱线或某一张图像当成整个耀斑的温度，会忽略其多温、动态的结构。

## 约 10⁷ K 的典型耀斑

日冕平时已有数百万开尔文，耀斑可把它进一步加热到约 1,000 万至 2,000 万开尔文，极端情形可达约 1 亿开尔文。[1] 另一份 NASA 资料给出典型耀斑环约 1,000 万开尔文、最高约 5,000 万开尔文。[2] 本条以约 10⁷ K 为锚点，并用 10⁷–5×10⁷ K 概括常见高温区。

## 为什么不是一个统一温度

耀斑由多个磁环、多个时间和多个温区组成，X 射线谱看到的是沿视线的叠加。[2] 热核、蒸发流和加速粒子区的温度差别很大。有效温度、色温度和电子温度在这里也不能混用：耀斑讨论的通常是等离子体电子温度，而不是恒星整体有效温度。

## 与日冕和其他温区比较

10⁷ K 比光球的约 5,772 K 高三个多量级，也比电离氢区的约 10⁴ K 热得多。[1] 它接近年轻超新星遗迹的激波温度，却远低于伽马射线暴火球的约 10⁹ K。耀斑说明太阳大气可以局部、短暂地进入极端高温状态。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1×10⁷ K，即 10×10⁶ ℃（按 T/K−273.15 换算）；约为太阳核心（1.57×10⁷ K）的 0.637 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10⁷ 量级附近。

读图时先看量级，再看倍数：10⁷ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
