---
id: space.cmb-surface
title: 最后散射面
titleEn: Surface of Last Scattering
dimension: length
category: 星系与宇宙
summary: >-
  最后散射面是宇宙微波背景光子最后一次与物质散射的宇宙学表面。本页采用NASA Cosmic Times的当前共动距离口径约470亿光年，换算约4.45 ×
  10²⁶米，不把它当作光行时距离或物理外壳。
quantity:
  value: 4.446543e+26
  unit: m
  measure: NASA Cosmic Times 口径下最后散射面的当前共动距离约470亿光年（半径）
  approximate: true
displayValue: 约 4.45 × 10²⁶ m（约470亿光年，共动距离）
related:
  - space.observable-universe
  - space.hubble-radius
  - space.light-year
  - space.milky-way
reviewStatus: reviewed
sources:
  - title: Age & Size of the Universe Through the Years
    url: >-
      https://imagine.gsfc.nasa.gov/educators/programs/cosmictimes/educators/guide/age_size.html
    publisher: NASA / Goddard Space Flight Center
    accessed: '2026-11-06'
  - title: Planck 2018 results. VI. Cosmological parameters
    url: 'https://arxiv.org/abs/1807.06209'
    publisher: Planck Collaboration / Astronomy & Astrophysics
    accessed: '2026-11-06'
  - title: Astrodynamic Parameters — Julian year and speed of light
    url: 'https://ssd.jpl.nasa.gov/astro_par.html'
    publisher: NASA / JPL Solar System Dynamics
    accessed: '2026-11-06'
conditions: 采用NASA Cosmic Times 2006年WMAP口径下的当前共动距离约470亿光年（半径）；这不是光行时距离、角直径距离，也不是宇宙的物理边界。
uncertainty: >-
  470亿光年为2006年WMAP参数下的近似值，Planck
  2018参数会给出略小的约460亿光年；不同距离定义之间差异显著，不能把470亿光年与138亿年混用。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      用WebFetch打开NASA Cosmic Times“Age &
      Size”页，核对最远可观测对象约470亿光年、可观测宇宙直径约940亿光年及膨胀解释。
    - 用Planck 2018摘要核对复合时期与ΛCDM参数背景；本条采用共动距离口径，不采用光行时距离。
    - 正文按1光年≈9.4607×10¹⁵米换算；47 billion light-years写成约470亿光年。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "sphere"
  scene: "space.object"
  caption: "最后散射面 · 共动距离示意"
  note: "球面与观察者位置为示意，未表示真实宇宙几何或各向异性；范围标示最后散射面的当前共动距离，非物理外壳；图为示意，非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 距离
tags:
  - 星系与宇宙
  - 距离
---
## 它是什么

最后散射面不是一层真实的物质壳，而是“宇宙微波背景光子最后一次与自由电子散射”这一事件在宇宙学中的等时面。我们今天接收到的背景光子来自这个面，其当前共动距离约470亿光年，约合4.45×10²⁶米。[1][2]

## 怎样知道

宇宙早期温度高、物质电离，光子频繁散射，宇宙像浓雾一样不透明。随着膨胀和冷却，电子与质子结合成中性氢，光子才得以自由传播；这一时期称为复合，发生在宇宙约38万岁、红移约1090时。[1][2] 今天观测到的2.725 K微波背景就是这些光子的红移遗迹，其微小温度各向异性记录了当时的密度起伏。

## 数值与口径

按1光年约9.4607×10¹⁵米换算，470亿光年约为4.45×10²⁶米。[1][3] 这个数字是当前共动距离，不是光行时距离；光子实际传播的时间约138亿年，但空间在传播期间膨胀，所以“今天它在哪里”要用共动坐标表示。[1] 它也与角直径距离不同，后者在宇宙学中要乘上(1+z)的关系才能与共动距离互换。

## 常见误解

最后散射面不是宇宙的“墙”，也不是大爆炸发生的位置；它是每个视线方向上光最后一次散射的事件集合，因此围绕我们形成一个球面。[1] 另一个误解是把470亿光年当成光走了470亿年；光行时约138亿年，二者不是同一个距离定义。也不能把最后散射面与可观测宇宙的粒子视界完全等同，两者定义不同但数值接近。

## 与其他尺度的关系

470亿光年约为哈勃半径145亿光年的3.2倍，约为可观测宇宙半径的量级，约为银河系盘直径的470,000倍。[1][2] 它标记的是宇宙学距离阶梯的顶端，而不是某个星系或星系团的大小。比较这类数字时，必须同时注明共动距离、光度距离或光行时距离，否则“多少光年”会指向不同的物理量。
