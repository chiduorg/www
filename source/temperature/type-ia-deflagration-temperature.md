---
id: temperature.type-ia-deflagration-temperature
title: Ia 型超新星爆燃温度
titleEn: Type Ia supernova deflagration temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  碳氧白矮星中心点燃碳聚变后，次音速爆燃火焰的温度约 10⁹ K。它描述燃烧波内的温度量级，不是整颗白矮星或爆发后遗迹的温度。
quantity:
  value: 1000000000
  unit: K
  measure: type-ia-supernova-deflagration-temperature
  measureLabel: 碳氧白矮星爆燃火焰温度
  approximate: true
displayValue: 约 10⁹ K（约 86 keV，爆燃火焰量级）
related:
  - temperature.type-ia-supernova
  - temperature.supernova
  - temperature.supernova-remnant
  - temperature.gamma-ray-burst
reviewStatus: reviewed
sources:
  - title: Flame Fronts in Type Ia Supernovae and Their Pulsational Stability
    url: 'https://academic.oup.com/mnras/article/433/4/2840/1747724'
    publisher: Glazyrin, Blinnikov & Dolgov, MNRAS 433 (2013)
    accessed: '2026-11-07'
  - title: Type Ia Supernova Models Arising from Different Distributions of Igniting Points
    url: 'https://www.aanda.org/articles/aa/full/2005/05/aa1628/aa1628.html'
    publisher: García-Senz & Bravo, A&A 430 (2005)
    accessed: '2026-11-07'
conditions: >-
  对象为接近钱德拉塞卡质量的碳氧白矮星中心、碳聚变点燃后的次音速爆燃火焰；取爆燃阶段、火焰后方的温度；10⁹ K 为取整量级，对应约 86 keV。
uncertainty: >-
  火焰温度随中心密度、碳氧比例和燃烧阶段变化；爆轰阶段可更高，不同模型给出的点燃温度也会上下浮动，不能当作精确测温。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：本地直连受站点反爬/限流限制，写作阶段已用 WebFetch 逐条打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: stellar-event
  scene: temperature.object
  caption: Ia 型超新星爆燃 · 10⁹ K 量级
  note: 白矮星、燃烧波与抛射物为示意，非按比例，非观测重建；颜色和流动不代表真实温度分布。
  color: '#ff9f80'
  variant: deflagration
  backdrop: extreme
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

Ia 型超新星通常起源于碳氧白矮星的热核失控。中心附近碳聚变点燃后，燃烧以次音速的爆燃方式向外传播，火焰后的物质被加热到约 10⁹ K。[1] 爆燃可能随后转为爆轰，但这里讨论的是爆燃阶段的火焰温度量级，不是整颗白矮星的均匀温度，也不是爆发后可见光球的温度。

## 怎样测到或为何是推断

我们无法直接给白矮星内部测温；温度来自核燃烧网络、流体动力学和辐射转移模型。计算表明，在接近钱德拉塞卡质量的白矮星中心，密度约 10⁹ g/cm³，碳氧火焰开始燃烧的温度约 10⁹ K。[1] 另一组三维爆燃模型也把中心升温到 10⁹ K 后碳燃烧得以启动。[2] 这些是模型推断，并与 Ia 型超新星光变曲线、光谱和元素丰度间接对照。

## 数值与口径

本条取 10⁹ K 作为爆燃火焰温度量级。按 1 MeV ≈ 1.16×10¹⁰ K 换算，10⁹ K 约等于 0.086 MeV，即约 86 keV；换成摄氏温标仍约为 10⁹ °C。实际火焰温度随密度、碳氧比例和燃烧阶段变化，爆轰阶段可更高；不同模型给出的点燃温度也会上下浮动。因此这是数量级参照，不是精确测温，不能当作所有 Ia 型超新星都相同的定值。[1][2]

## 常见误解

第一，把 10⁹ K 当成白矮星表面温度；表面只有约 10⁴–10⁵ K，内部才达到这一量级。第二，把爆燃与爆轰混为一谈；爆燃是次音速燃烧波，爆轰是超音速激波驱动的燃烧，两者温度与产物不同。[1] 第三，以为温度越高就越亮；Ia 型的光度主要由镍-56 放射性衰变供能。第四，把爆燃火焰温度当成超新星遗迹温度；遗迹已膨胀冷却到约 10⁶ K 量级。[2]

## 与其他尺度的关系

10⁹ K 与大爆炸核合成温度、超新星激波突破温度同量级，但三者对象不同：一个是早期宇宙等离子体，一个是激波后气体，一个是白矮星内部燃烧波。它高于太阳核心约 1.57×10⁷ K 约 60 倍，低于核心坍缩中微子球的 10¹¹ K 约 100 倍，更远低于夸克胶子等离子体的 5×10¹² K。与 Ia 型超新星爆发后遗迹的约 10⁶ K 相比，高约三个数量级。[1][2]
