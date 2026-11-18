---
id: temperature.big-bang-nucleosynthesis-temperature
title: 大爆炸核合成温度
titleEn: Big Bang nucleosynthesis temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  大爆炸核合成启动时的等离子体温度量级约为 10 亿开尔文。它描述的是氘瓶颈附近的温度门槛，不是整段核合成过程的恒温值。
quantity:
  value: 1000000000
  unit: K
  measure: big-bang-nucleosynthesis-plasma-temperature
  measureLabel: 氘瓶颈附近的等离子体温度
  approximate: true
displayValue: 约 10⁹ K（约 0.1 MeV，氘瓶颈量级）
related:
  - time.big-bang
  - temperature.neutrino-decoupling-temperature
  - temperature.electron-positron-annihilation-temperature
  - temperature.supernova
reviewStatus: reviewed
sources:
  - title: 'Week 3: Thermal History of the Universe (Cosmology Ay127)'
    url: 'https://sites.astro.caltech.edu/~george/ay127/kamionkowski-earlyuniverse-notes.pdf'
    publisher: Caltech Astronomy
    accessed: '2026-11-07'
  - title: Big Bang Nucleosynthesis (Review of Particle Physics 2026)
    url: 'https://pdg.lbl.gov/2026/reviews/rpp2026-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-07'
conditions: >-
  对象为辐射主导早期宇宙中的光子—重子等离子体；取氘光致瓦解与氘合成接近平衡的“氘瓶颈”附近；10⁹ K 为取整量级，对应约 0.1 MeV，并随膨胀继续下降。
uncertainty: >-
  不同资料把核合成启动温度放在 0.07–0.1 MeV（约 0.8–1.2×10⁹ K）；结果还依赖重子密度、中子寿命和核反应截面，不能当作精确测温。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: radiation-field
  scene: temperature.object
  caption: 早期宇宙核合成 · 10⁹ K 量级
  note: 等离子体、光子与核反应为示意，非按比例，非观测重建；颜色和流动不代表真实光谱。
  color: '#d9c48a'
  variant: bbn
  backdrop: extreme
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 宇宙学
---
## 它是什么

大爆炸核合成是宇宙最初几分钟把质子和中子合成氘、氦-4、氦-3 和痕量锂的过程。真正让核反应大规模启动的，是温度降到约 10⁹ K、对应光子能量约 0.1 MeV 的时候；再早，高能光子会把刚形成的氘打散。[1] 所以这里说的温度是一个“启动门槛”，不是整段核合成的恒温值，也不是今天恒星内部的温度。

## 怎样测到或为何是推断

早期宇宙早已随膨胀冷却，无法直接测温；这一温度来自大爆炸模型、核反应网络和轻元素丰度的联合推断。理论计算给出氘瓶颈附近约 0.1 MeV，而观测到的氘、氦丰度与模型相符。[1][2] 它不是某台温度计的读数，而是用轻元素丰度反推的等离子体热力学量；不同重子密度会改变冻结时刻和最终丰度。

## 数值与口径

本条取 10⁹ K 作为氘瓶颈附近的量级坐标。按 1 MeV ≈ 1.16×10¹⁰ K 换算，10⁹ K 约等于 0.086 MeV，即约 86 keV；换成摄氏温标只比开尔文低 273.15，仍是约 10 亿 °C。这个数字是数量级参照，不是精确测温；它描述的是核合成刚启动时的等离子体，而不是随后几分钟里缓慢下降的整条温度曲线。[1][2]

## 常见误解

第一，把 10⁹ K 当成宇宙从一开始就有的温度；早期宇宙要热得多，核合成只是冷却到这一门槛后才开始。[1] 第二，把它当成恒星核聚变的温度；太阳核心约 1.57×10⁷ K，比这里低约两个数量级。第三，以为核合成在某一瞬间完成；实际持续约几分钟，温度一路下降。第四，把温度门槛等同于反应速率；丰度还取决于密度、膨胀速率和中子寿命。[2]

## 与其他尺度的关系

10⁹ K 约为太阳核心温度的 64 倍，与 Ia 型超新星爆燃火焰的约 10⁹ K 属同一量级，但两者对象完全不同：一个是早期宇宙等离子体，一个是白矮星内部的燃烧波。它低于正负电子湮灭的约 10¹⁰ K 和中微子退耦的约 10¹⁰ K，更远低于夸克胶子等离子体的 10¹² K 量级。跨条目比较时，应先对齐“测的是什么”，再比较数字。[1][2]
