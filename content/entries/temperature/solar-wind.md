---
id: temperature.solar-wind
title: 太阳风
titleEn: Solar wind particle temperature
dimension: temperature
category: 极高温
summary: >-
  太阳风是从日冕持续向外流出的等离子体。其粒子温度约在 10⁵ K 量级， 但质子和电子并不处于同一热平衡：慢风质子约 3×10⁴ K、电子可达约 10⁵
  K， 快风质子又可更热。它不是一个能用单支温度计读出的均匀气体。
quantity:
  value: 100000
  unit: K
  measure: 太阳风粒子温度（质子与电子分温）
  approximate: true
  measureLabel: 粒子温度（非热平衡）
  range:
    min: 10000
    max: 1000000
    unit: K
displayValue: 约 10⁵ K（约 10⁵ °C，量级）
related:
  - temperature.solar-corona
  - temperature.sun-surface
  - temperature.solar-flare
  - temperature.thermosphere
  - temperature.aurora
reviewStatus: reviewed
sources:
  - title: >-
      Effect of superthermal electrons on Alfvén wave propagation in the dusty
      plasmas of solar and stellar winds
    url: 'https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2009JA015217'
    publisher: 'Journal of Geophysical Research: Space Physics, Gaelzer et al. (2010)'
    accessed: '2026-11-06'
  - title: Polytropic relationship in interplanetary magnetic clouds
    url: 'https://wind.nasa.gov/imp8/abstracts/93-Osherovich.htm'
    publisher: 'NASA Goddard Space Flight Center / WIND, Osherovich et al.'
    accessed: '2026-11-06'
conditions: >-
  对象为太阳风中的质子和电子群体；10⁵ K 是粒子温度的量级参考，不是单一热平衡温度。 慢风质子约 3×10⁴ K、电子约 10⁵ K；快风质子可到约
  2×10⁵ K。超热尾部和波—粒子相互作用 使速度分布偏离麦克斯韦分布。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      核对 Gaelzer 等：慢风典型质子温度约 3.4×10⁴ K、电子温度约 1.3×10⁵ K；快风质子约 2.3×10⁵ K、电子约 10⁵
      K。
    - 核对 Osherovich 等：磁云中电子与离子不处于热平衡，电子温度可比质子高一个量级。
    - 取 10⁵ K 作粒子温度量级锚点，range 写 10⁴–10⁶ K，并明确非热平衡与质子和电子的差异。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  太阳风温度随日心距离、风速、磁场结构和活动周期变化；质子与电子温度不同， 且高速尾部使“温度”本身只是拟合参数。10⁵ K
  是量级参考，不能代表所有太阳风等离子体。
visual:
  template: radiation-field
  scene: temperature.object
  caption: 太阳风等离子体流与磁场示意
  note: 以从日面向外流动的粒子流和磁力线示意太阳风，不对应具体时刻；画面非按比例， 粒子密度、速度与颜色均为解释性示意。
zone: 极高温
tags:
  - 极高温
  - 温度
  - 日常
---
## 从日冕持续流出的等离子体

太阳风是日冕上层气体因压力梯度和磁力线开放而持续向外膨胀形成的等离子体流。[1] 它携带质子和电子，也携带少量重离子和磁场，一直吹到地球磁层甚至更远，是空间天气的主要驱动源之一。

## 温度靠就地测量

太阳风温度不能像恒星表面那样靠遥感谱线整体拟合，而要靠探测器穿越等离子体时测量粒子速度分布。[1] 质子与电子需要分别测量，因为它们的质量不同、受波和湍流加热的方式也不同。磁场结构还会改变局地各向异性。

## 质子和电子并不一样热

慢太阳风中，质子温度典型约为 3.4×10⁴ K，电子温度约为 1.3×10⁵ K；快太阳风中质子可升到约 2.3×10⁵ K，电子仍约 10⁵ K。[1] 这不是热平衡等离子体：电子和离子之间能量交换慢，磁云中电子温度甚至可比质子高一个量级。[2] 本条取约 10⁵ K 作为粒子温度的量级锚点。

## 温度只是拟合参数

太阳风粒子的速度分布常有超热尾部，不完全服从单一麦克斯韦分布。[2] 用双麦克斯韦或各向异性模型拟合时，得到的温度会随拟合方式和方向变化。所谓“太阳风温度”通常指某一粒子群体的有效温度，而不是整团等离子体的统一温度。

## 与日冕和地球大气的比较

10⁵ K 远高于地球热层的温度，却低于日冕核心的百万开尔文量级。[1] 太阳风在向外膨胀时冷却，但波和湍流又会持续加热，因此温度随距离的下降并非简单绝热。把它与耀斑的 10⁷ K 区分开，有助于理解太阳大气的不同能量过程。
