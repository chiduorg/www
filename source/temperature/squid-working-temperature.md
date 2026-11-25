---
id: temperature.squid-working-temperature
title: SQUID超导量子干涉仪
titleEn: SQUID device measurement temperature
dimension: temperature
category: 极低温
summary: >-
  SQUID 器件的性能需要连同工作条件说明。这里采用一项约瑟夫森结 SQUID 研究中的 4.2 K 测量温度，
  而不把所有超导量子干涉仪都设为这一温度，或列出缺少带宽的灵敏度纪录。
quantity:
  value: 4.2
  unit: K
  measure: 所引低温SQUID器件测量条件
  approximate: true
  measureLabel: 所引低温SQUID器件测量条件
displayValue: 4.2 K（器件研究条件）
related:
  - temperature.niobium-superconducting-transition
  - temperature.ybco-superconducting-transition
  - temperature.dilution-refrigerator
  - temperature.absolute-zero
  - temperature.helium-3-superfluid
  - space.cmb-surface
reviewStatus: reviewed
sources:
  - title: >-
      Towards ultra-sensitive SQUIDs based on sub-micrometer-sized Josephson
      Junctions
    url: 'https://arxiv.org/abs/2004.10064'
    publisher: 'Storm, Kieler and Körber, arXiv (2020, revised 2023)'
    accessed: '2026-11-06'
  - title: Sensors for a Magnetic World
    url: 'https://www.nist.gov/quantum-information-science/sensors-magnetic-world'
    publisher: NIST
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: squid-working-temperature
  icon: "\U0001F52C"
  relatedLabels: 约瑟夫森效应、超导、铌超导转变、磁通量子化、量子干涉、液氦温度、脑磁图、低温物理、量子计算、超导量子比特
conditions: >-
  2020 年（2023 修订）约瑟夫森结 SQUID 器件研究，在液氦杜瓦的 4.2 K 浴温下测得未耦合/耦合器件能量灵敏度；不是所有低温或高温
  SQUID 的共同工作温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - arXiv 摘要给出 4.2 K 下未耦合与耦合 SQUID 能量灵敏度 4.7 ħ 与 20 ħ，400 mK 下未耦合器件 0.65 ħ。
    - NIST 磁传感器科普页确认 SQUID 由超导环与约瑟夫森结构成、需低温工作，并用于脑磁图等弱磁测量。
    - 正文按五节结构重写；保留 4.2 K，补噪声单位带宽与器件条件。
  originalQuantity:
    value: 4.2
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 4.2 K 是液氦浴温与器件测量条件，不是器件自身温度上限；能量灵敏度随偏置、结面积、屏蔽与读出电子学变化，论文给出的数值只适用于该批器件。
visual:
  template: superconducting-sample
  profile: squid
  caption: SQUID 芯片与超导环
  note: >-
    特定液氦工作实例，不是所有 SQUID 的统一工作温度；超导环、结与布线为概念示意，非芯片显微照片重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#a2cdea'
  symbol: SQUID
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

SQUID 是超导量子干涉仪，核心是包含约瑟夫森结的超导环。穿过环路的磁通变化会改变结的干涉条件，从而把极小的磁场变化转换成可测的电信号。[2] 它是一种磁通传感器，不是温度计；所谓“工作温度”指器件所在的低温环境。超导环中的磁通是量子化的，干涉信号随磁通周期变化，因此它能分辨极小的磁场改变。[2]

## 怎样测到或为何是有效温度

所引研究在液氦杜瓦中把器件冷却到 4.2 K，测量未耦合与耦合 SQUID 的能量灵敏度，分别得到约 4.7 ħ 和 20 ħ。[1] 同一批未耦合器件在 400 mK 下还达到约 0.65 ħ 的白噪声水平，说明降低温度能改善噪声，但器件结构同样重要。[1] 这些数值是特定芯片、特定偏置下的测量结果。

## 数值与口径

4.2 K 等于 −268.95 °C，约等于液氦在 1 atm 下的沸点，因此该实验用液氦浴冷却器件。[2] 它是该实验的浴温或器件温度，不是所有 SQUID 的统一工作点；高温超导 SQUID 可以在液氮温区工作。比较噪声时必须带单位带宽，并说明是否耦合、是否扣除放大器噪声。

## 常见误解

第一，认为 SQUID 只能在 4.2 K 工作；材料体系不同，工作温区可以从毫开尔文延伸到液氮温区。第二，把单个特斯拉数值当成灵敏度纪录；没有带宽和定义，数字无法比较。第三，把 SQUID 当成温度传感器；它测磁通，温度只是工作条件。材料体系与结工艺决定了工作温区，不能把某一种器件的工作点当作普遍要求。[2]

## 与其他温区的关系

4.2 K 低于铌的超导转变温度约 9.2 K，因此铌器件仍处于超导态；它高于液氦-4 的 2.17 K 超流点，也远高于稀释制冷的 10 mK 和 421 μK 核退磁实验。与液氮温区的高温超导器件相比，4.2 K 属于传统低温超导的工作段。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
