---
id: temperature.quantum-degeneracy
title: 量子简并温度
titleEn: Quantum degeneracy temperature
dimension: temperature
category: 极低温
summary: >-
  量子简并温度不是单一材料常数。稀薄原子气体的简并温区约 10⁻⁶ K 量级， 金属电子气的费米温度却可达 10⁴ K；本条取 10⁻⁶ K
  作稀薄气体参考，并强调定义依赖系统。
quantity:
  value: 0.000001
  unit: K
  measure: 稀薄原子气体量子简并参考温区
  approximate: true
  measureLabel: 稀薄原子气体量子简并参考温区
displayValue: 约 1 μK（10⁻⁶ K，稀薄原子气体参考）
related:
  - temperature.bose-einstein
  - temperature.laser-cooling
  - temperature.evaporative-cooling
  - temperature.absolute-zero
  - temperature.superfluid
  - temperature.dilution-refrigerator
reviewStatus: reviewed
sources:
  - title: NIST/CU Scientists First to Observe New Quantum Gas
    url: >-
      https://www.nist.gov/news-events/news/1999/09/nistcu-scientists-first-observe-new-quantum-gas
    publisher: NIST
    accessed: '2026-11-06'
  - title: 'Bose-Einstein Condensate: A New Form of Matter'
    url: >-
      https://www.nist.gov/news-events/news/2001/10/bose-einstein-condensate-new-form-matter
    publisher: NIST
    accessed: '2026-11-06'
  - title: 'Fermi Energies, Fermi Temperatures, and Fermi Velocities'
    url: 'https://hyperphysics.phy-astr.gsu.edu/hbase/Tables/fermi.html'
    publisher: 'HyperPhysics, Georgia State University（数据据 Ashcroft & Mermin）'
    accessed: '2026-11-06'
conditions: >-
  稀薄原子气体参考取约 10⁻⁶ K；实际简并温度随粒子质量、数密度、自旋态和势阱变化。金属电子气的费米温度由电子密度决定，铜约 8.16×10⁴
  K；两条温区不能通用。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NIST 1999 年新闻稿给出约百万个钾原子在约 300 nK 进入费米简并，并说明简并温度通常低于百万分之一开尔文。
    - NIST 2001 年新闻稿给出铷气体约 170 nK 出现玻色凝聚、后续约 3 nK；用于说明稀薄气体的纳开尔文到微开尔文量级。
    - HyperPhysics 据 Ashcroft 与 Mermin 的自由电子气数据列出铜的费米温度 8.16×10⁴ K，用于说明“定义依赖系统”。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  10⁻⁶ K 只是稀薄原子气体的量级参考，不是普适阈值；简并温度定义依赖系统，随密度、质量与自旋态改变。 金属电子气的费米温度可达 10⁴
  K，说明同一个名称在气体与固体中对应完全不同的温区，不能用一个数字比较。
visual:
  template: cryo-instrument
  profile: degeneracy
  caption: 量子简并气体示意
  note: >-
    原子云、势阱与量子统计波纹为解释性示意，非按比例，也不是实验观测重建；温度是稀薄气体参考温区，不代表金属电子或超导体的费米温度。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#9ec8e8'
  symbol: Quantum degeneracy
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

量子简并温度是描述“粒子开始不能按经典方式区分”的温度尺度。当气体温度低于某个特征温度时，粒子的热德布罗意波长与粒子间距相当，玻色子或费米子开始表现出量子统计。[1] 它不是一种材料的固定相变点，而是随密度、粒子质量和自旋态改变的尺度。

## 怎样测到

对稀薄原子气体，简并温度通常写成费米温度或玻色凝聚临界温度，由势阱频率、原子数和温度拟合得到。JILA 在 1995 年把铷气体冷到约 170 nK 出现玻色凝聚；1999 年又把约百万个钾原子冷到约 300 nK，观察到费米简并。[1][2] 这些温度由飞行时间成像和能量分布分析给出，属于实验达到的温区。[1]

## 数值与口径

本条取约 1 μK（10⁻⁶ K）作为稀薄原子气体的量子简并参考温区。它只是量级：不同实验的简并温度可从数十 nK 到数 μK。对金属中的电子，费米温度却可高到 10⁴ K 量级，例如铜的自由电子气约 8.16×10⁴ K。[3] 因此“量子简并温度”定义依赖系统，不能用一个数字概括气体、金属和超导体。[2][3]

## 常见误解

第一，把 1 μK 当成所有量子简并的阈值；金属电子在室温下早已简并。第二，把简并温度当成相变温度；它更像量子统计开始重要的能量尺度，具体转变还取决于相互作用和维度。[3] 第三，把费米温度与实验温度混同；费米温度是系统参数，实验温度可以远低于它。第四，把玻色凝聚与费米简并当成同一现象；两者遵循不同统计。

## 与其他温区的关系

稀薄气体的 1 μK 与激光冷却的约 1 μK 同量级，比蒸发冷却的约 1 nK 高三个量级；金属电子的 10⁴ K 则接近白矮星表面等天体温区。它远低于宇宙微波背景的 2.725 K，也远高于 0 K。比较时要把“哪一种粒子、什么密度、哪个特征温度”一起写出。[1][2][3]
