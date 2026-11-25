---
id: temperature.hii-region
title: 电离氢区
titleEn: H II region electron temperature
dimension: temperature
category: 极高温
summary: >-
  电离氢区是热星周围被紫外光电离的氢气体，其电子温度通常约为 10⁴ K。 这个温度描述自由电子的动理学能量，不等同于电离星的有效温度，
  也不表示整片星云处处同温。
quantity:
  value: 10000
  unit: K
  measure: 电离氢区电子温度
  approximate: true
  measureLabel: 电子温度
  range:
    min: 8000
    max: 12000
    unit: K
displayValue: '约 10,000 K（约 9,727 °C）'
related:
  - temperature.planetary-nebula
  - temperature.supernova-remnant
  - temperature.molecular-cloud
  - temperature.sun-surface
  - temperature.solar-corona
  - space.white-dwarf
reviewStatus: reviewed
sources:
  - title: H II region
    url: 'https://www.britannica.com/science/H-II-region'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'Essential Radio Astronomy, Chapter 4: Free–Free Radiation'
    url: 'https://www.cv.nrao.edu/~sransom/web/Ch4.html'
    publisher: NRAO / J. J. Condon & S. M. Ransom
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为由 O、B 型热星紫外辐射电离的氢云；10⁴ K 指自由电子的动理学温度， 由发射线比值和射电自由—自由辐射拟合得到。电离星本身的有效温度可高得多，
  且星云中心与边缘、致密团块与稀薄区温度并不相同。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 Britannica：H II 区气体被热星紫外光电离，典型温度约 8,000 K。'
    - 核对 NRAO 教材：电离氢区在加热与冷却平衡时接近 T≈10⁴ K，远高于中性星际气体的初温。
    - '取 10⁴ K 为电子温度锚点，range 写 8,000–12,000 K，并区分电子温度与电离星有效温度。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  电子温度依赖金属丰度、密度结构和尘埃加热，不同星区可在数千到一万多开尔文之间变化； 发射线诊断还受未分辨温度梯度影响。10⁴ K
  是典型量级，不是单一星云的精确测量。
visual:
  template: nebula
  scene: temperature.object
  caption: 电离氢区的发光气体与电离星示意
  note: 以发光云气和中心热星示意电离结构，不对应具体星云；画面非按比例， 颜色、丝状结构和光晕均为解释性示意。
zone: 极高温
tags:
  - 极高温
  - 温度
  - 日常
---
## 热星周围的电离气泡

电离氢区是星际介质中被强烈紫外光照射的区域，氢原子被剥离电子，形成自由电子与离子组成的等离子体。[1] 这类区域通常出现在炽热 O、B 型星附近，星风与辐射把周围气体吹成空腔或壳层。猎户座大星云就是常被引用的例子。

## 电子温度怎样测量

天文上常用若干禁线的强度比来求电子温度，例如氧和氮的离子线对温度敏感；射电波段的自由—自由辐射也携带电子温度信息。[2] 这些诊断假设电离平衡和一定的丰度，若星云中存在未分辨的冷热团块，得到的往往是加权平均。

## 约 10⁴ K 的含义

加热与冷却达到平衡时，电离氢区温度接近约 10⁴ K，明显高于进入电离区之前的中性气体。[2] 教学资料给出的典型值约为 8,000 K，而本条采用约 10⁴ K 作为电子温度锚点，并用约 8,000–12,000 K 概括常见离散。[1][2]

## 别把它和恒星温度混淆

电离星的有效温度可以是数万开尔文，远高于被它电离的气体温度；有效温度描述恒星整体辐射，电子温度描述星云中自由电子的热运动。[1] 二者相关但不等同。星云内部也不是恒温箱：靠近星的一侧电离更强、温度结构更复杂，外围和致密团块则可能更冷。

## 在温标上的位置

10⁴ K 比分子云的约 10 K 和冷中性星际介质的约 100 K 高得多，却低于超新星遗迹激波气体的约 10⁶ K。[2] 行星状星云的气体也大致处于同一温区，但两者的能量来源和寿命不同。把电离氢区放在这条温标上，有助于区分“被恒星照亮的气体”和“被爆炸加热的气体”。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
