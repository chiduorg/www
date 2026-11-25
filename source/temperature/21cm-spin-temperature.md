---
id: temperature.21cm-spin-temperature
title: 氢 21 厘米自旋温度
titleEn: Hydrogen 21-cm spin temperature
dimension: temperature
category: 极低温
summary: >-
  中性氢的 21 厘米谱线来自电子与质子自旋取向不同的两个能级。自旋温度描述这两个 能级的布居比，典型冷中性云约为 100 K，常见范围约 10–1,000
  K。 它不等于气体动理学温度，而由碰撞、辐射场和莱曼阿尔法光子共同决定。
quantity:
  value: 100
  unit: K
  measure: 中性氢 21 厘米自旋温度
  approximate: true
  measureLabel: 自旋温度
  range:
    min: 10
    max: 1000
    unit: K
displayValue: 约 100 K（−173 °C；自旋温度）
related:
  - temperature.interstellar-medium
  - temperature.molecular-cloud
  - temperature.cmb
  - temperature.liquid-hydrogen
  - space.moon
  - mass.helium-nucleus
reviewStatus: reviewed
sources:
  - title: 'Essential Radio Astronomy, Chapter 7: Spectral Lines'
    url: 'https://www.cv.nrao.edu/~sransom/web/Ch7.html'
    publisher: NRAO / J. J. Condon & S. M. Ransom
    accessed: '2026-11-06'
  - title: Spectroscopy with the 21cm Hydrogen Line
    url: 'https://portia.astrophysik.uni-kiel.de/~koeppen/Haystack/spectro.html'
    publisher: 'J. Köppen, Université de Strasbourg'
    accessed: '2026-11-06'
  - title: >-
      The MeerKAT Absorption Line Survey (MALS) data release 3: Cold atomic gas
      associated with the Milky Way
    url: >-
      https://www.aanda.org/articles/aa/full_html/2025/06/aa52407-24/aa52407-24.html
    publisher: 'Astronomy & Astrophysics, MALS collaboration (2025)'
    accessed: '2026-11-06'
conditions: >-
  对象为中性氢气体；自旋温度是 21 厘米超精细跃迁两个能级的激发温度， 由碰撞、辐射场和莱曼阿尔法光子耦合决定。100 K 是冷中性云的典型锚点，
  不是气体动理学温度，也不是谱线亮温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 NRAO 教材：21 厘米线是中性氢基态超精细跃迁，波长约 21 厘米。
    - 核对 Köppen 讲义：自旋温度描述两个能级的平衡布居，100 K 氢原子热运动约 1 km/s；冷星际云常低于 100 K。
    - '核对 MALS：银河系中性氢温度跨度约 20–8,000 K，自旋温度随辐射场和碰撞条件变化。'
    - '取 100 K 作自旋温度锚点，range 写 10–1,000 K，强调口径与动理学温度不同。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 自旋温度依赖碰撞跃迁率、辐射场强度和莱曼阿尔法光子通量；同一云块的自旋温度与动理学温度 可以明显不同。100 K 是典型冷中性云的参考，不能代表所有中性氢。
visual:
  template: radiation-field
  scene: temperature.object
  caption: 中性氢云与 21 厘米谱线示意
  note: 以氢云、自旋翻转和射电波示意 21 厘米跃迁，不对应具体天区；画面非按比例， 波长、粒子与颜色均为解释性示意。
zone: 极低温
tags:
  - 极低温
  - 温度
  - 天体
---
## 中性氢发出的一条射电谱线

中性氢原子的基态会因电子与质子自旋平行或反平行而分裂，两种状态之间跃迁对应频率约 1,420.4 兆赫，波长约 21 厘米。[1] 这条谱线穿透尘埃能力强，是描绘银河系中性氢分布和运动的重要工具。

## 自旋温度描述什么

自旋温度是这两个超精细能级的激发温度，描述高、低能级的布居比。[2] 当碰撞足够频繁时，自旋温度会被拉向气体动理学温度；当辐射场很强时，它又会被拉向辐射温度。莱曼阿尔法光子的散射也能改变布居，因此自旋温度是一个耦合结果。

## 约 100 K 与常见范围

冷中性星际云的自旋温度常在约 100 K 量级，氢原子在此温度下的热运动速度约为每秒一公里。[2] 银河系中性氢的观测温度跨度可到约 20–8,000 K，具体取决于云块、辐射场和碰撞条件。[3] 本条取约 100 K 作锚点，并把常见范围写成约 10–1,000 K。

## 它不是动理学温度

光谱线给出的亮温度只说明辐射强度，自旋温度才描述能级布居；二者都不必然等于气体分子的动理学温度。[2] 在低密度、强辐射的环境中，自旋温度可远高于或低于动理学温度。把 21 厘米观测直接读成“氢气温度”，是常见但不可靠的简化。

## 与星际介质和宇宙学的关系

100 K 落在冷中性星际介质的典型温区，比分子云的约 10 K 暖，比电离氢区的约 10⁴ K 冷。[3] 在宇宙学中，21 厘米信号还被用来追踪早期中性氢，此时自旋温度与背景辐射温度的差异决定信号是发射还是吸收。理解这个口径，才能正确比较不同观测。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 100 K，即 -173.1 ℃（按 T/K−273.15 换算）；约为液氮沸点（77 K）的 1.3 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
