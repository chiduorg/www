---
id: temperature.adiabatic-demagnetization
title: 绝热去磁
titleEn: Adiabatic demagnetization
dimension: temperature
category: 极低温
summary: >-
  绝热去磁利用磁有序熵随磁场变化制冷，装置通常工作在毫开尔文温区。NASA 设计示例可到约 35–50 mK， NIST 气球装置约 90–100
  mK；本条取约 1 mK 作为该温区的量级参考。
quantity:
  value: 0.001
  unit: K
  measure: 绝热去磁制冷温区参考
  approximate: true
  measureLabel: 绝热去磁制冷温区参考
displayValue: 约 1 mK（10⁻³ K）
related:
  - temperature.nuclear-demagnetization-cooling
  - temperature.dilution-refrigerator
  - temperature.absolute-zero
  - temperature.laser-cooling
  - temperature.squid-working-temperature
  - space.cmb-surface
reviewStatus: reviewed
sources:
  - title: 'X-ray Microcalorimeter Spectrometer: cooling system'
    url: 'https://asd.gsfc.nasa.gov/archive/ixo/print/xmsPrint.html'
    publisher: NASA Goddard Space Flight Center
    accessed: '2026-11-06'
  - title: 'High-Flying Science: How and Why We Sent a Refrigerator Halfway to Space'
    url: >-
      https://www.nist.gov/blogs/taking-measure/high-flying-science-how-and-why-we-sent-refrigerator-halfway-space
    publisher: NIST
    accessed: '2026-11-06'
  - title: Cryogenics
    url: 'https://www.nist.gov/programs-projects/cryogenics'
    publisher: NIST Quantum Sensors Group
    accessed: '2026-11-06'
conditions: 顺磁盐或磁性材料绝热去磁制冷，先用液氦、脉冲管或稀释制冷预冷到数开尔文，再在受控磁场下磁化并绝热去磁；报告值随材料、预冷温度、磁场和热负载变化。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NASA IXO 页面给出连续绝热去磁制冷机从低于 5 K 冷到约 35 mK、在 50 mK 提供冷却功率。
    - NIST 气球实验博客给出稀释制冷到 100 mK、飞行中探测器盒约 90 mK；NIST 低温项目页说明多级 ADR 的发展与用途。
    - 正文取约 1 mK 为毫开尔文量级参考，并说明实际装置多在数十至一百毫开尔文，核去磁可更低。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  1 mK 是绝热去磁温区的圆整量级参考；所引 NASA 设计约 35–50 mK，NIST 气球装置约 90–100 mK。
  读数受预冷温度、磁场强度、材料热容、热开关和漏热影响，且样品台、晶格与自旋系统的温度可能不相等。
visual:
  template: cryo-instrument
  profile: demagnetization
  caption: 绝热去磁冷级
  note: >-
    磁体、冷级和样品台为解释性示意，非按比例，也不是工程重建；温度对应制冷温区参考，不代表装置每个部件都处于同一温度。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#93bfe0'
  symbol: ADR
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

绝热去磁利用磁性离子或核自旋的取向熵随磁场变化来吸热。先在强磁场中让自旋有序并预冷，再在绝热条件下撤去磁场；自旋无序增加，系统温度下降，从而冷却与之热接触的样品。[1][2] 它是一类制冷循环，不是单纯把样品放进液氦。

## 怎样测到

绝热去磁制冷机通常先用液氦、脉冲管或稀释制冷预冷到数开尔文，再让磁性盐或磁性材料在磁场中磁化，随后绝热去磁。[3] NASA 的 X 射线微量热计设计用连续绝热去磁制冷机从低于 5 K 冷到约 35 mK，并能在 50 mK 提供冷却功率。[1] NIST 参与的高空气球实验先用稀释制冷到 100 mK，飞行中探测器盒约 90 mK。[2] 这些温度由样品台温度计和热平衡状态给出。

## 数值与口径

本条取约 1 mK 作为绝热去磁的毫开尔文量级参考，即 10⁻³ K。实际装置的报告值常在数十到一百毫开尔文：NASA 设计示例约 35–50 mK，NIST 气球装置约 90–100 mK。[1][2] 核绝热去磁可把电子或核自旋系统推到更低，但那属于另一套热接触与测温问题。[2][3] 1 mK 是温区量级，不是所有绝热去磁制冷机都能达到的保证值。

## 常见误解

第一，把绝热去磁当成“无限制地接近绝对零度”；它受预冷温度、磁场强度、材料热容和漏热限制。第二，把自旋温度、晶格温度和样品温度当成同一个数；低温下它们可能彼此脱离平衡。[2] 第三，把毫开尔文读成“没有热量”；温度低只说明热涨落小，不等于热流为零。第四，把绝热去磁与稀释制冷混为一谈；两者原理和温区不同。[3]

## 与其他温区的关系

1 mK 比稀释制冷的约 10 mK 低一个量级，比核退磁实验的约 421 μK 高；它远低于液氦的 4.2 K，也低于宇宙微波背景的 2.725 K，但高于激光冷却的约 1 μK。不同制冷机覆盖不同温区，比较时必须说明是样品台、自旋系统还是电子温度。[1][2]
