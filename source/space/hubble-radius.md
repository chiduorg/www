---
id: space.hubble-radius
title: 哈勃半径
titleEn: Hubble Radius
dimension: length
category: 星系与宇宙
summary: >-
  哈勃半径是c/H0给出的宇宙学尺度，不是宇宙的边缘。按Planck 2018的H0≈67.4 km/s/Mpc计算，约1.37 ×
  10²⁶米，即约145亿光年，属于当前共动尺度。
quantity:
  value: 1.372497e+26
  unit: m
  measure: 按Planck 2018 H0=67.4 km/s/Mpc 计算的 c/H0 共动尺度
  approximate: true
displayValue: 约 1.37 × 10²⁶ m（约145亿光年，c/H0）
related:
  - space.observable-universe
  - space.cmb-surface
  - space.light-year
  - space.local-group
  - mass.observable-universe
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: Planck 2018 results. VI. Cosmological parameters
    url: 'https://arxiv.org/abs/1807.06209'
    publisher: Planck Collaboration / Astronomy & Astrophysics
    accessed: '2026-11-06'
  - title: Astrodynamic Parameters — Julian year and speed of light
    url: 'https://ssd.jpl.nasa.gov/astro_par.html'
    publisher: NASA / JPL Solar System Dynamics
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  采用Planck 2018基础ΛCDM的H0=67.4 km/s/Mpc，并取c=299792458
  m/s；哈勃半径是共动尺度c/H0，不是粒子视界、事件视界或可观测宇宙边缘。
uncertainty: H0的测量值在不同方法间存在约8%的“哈勃张力”，取67.4或73 km/s/Mpc会改变结果；c/H0本身只是量级尺度，不附带对宇宙整体大小的精确断言。
review:
  method: source-check
  date: '2026-11-08'
  notes:
    - >-
      用WebFetch打开Planck 2018 VI论文摘要，核对H0=(67.4±0.5)
      km/s/Mpc；用NASA/JPL常数页核对c=299792458 m/s与Mpc换算。
    - 明确哈勃半径是c/H0的共动尺度，不是可观测宇宙半径；本页数值为换算结果，不冒充新增测量。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: distance
  scene: space.object
  caption: 哈勃半径 · c/H0 尺度示意
  note: 同心球与标尺为示意，未表示真实宇宙几何或观察者位置；范围只标示c/H0尺度，非宇宙边缘；图为示意，非按比例，非观测重建。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 星系与宇宙
  - 尺寸
---
## 它是什么

哈勃半径是把光速除以哈勃常数得到的长度，记作c/H0。它给出一个方便的量级尺子，约145亿光年，约合1.37×10²⁶米，但并不是宇宙的边界，也不是光所能到达的最远距离。[1][2]

## 怎样知道

Planck 2018根据宇宙微波背景的角功率谱等数据，在基础ΛCDM模型中拟合出H0约为67.4 km/s/Mpc。[1] 把H0换算成秒的倒数，再用光速除以H0，就得到c/H0。这里用的是当前共动坐标下的膨胀率，因此结果是一个共动尺度，而不是某个天体发出的光走过的距离。它也不依赖某一颗星系的距离，而是由背景辐射标定的整体膨胀率推出。

## 数值与口径

H0=67.4 km/s/Mpc约等于2.184×10⁻¹⁸ s⁻¹；取c=299792458 m/s，c/H0约为1.37×10²⁶米，即约1.45×10¹⁰光年。[1][2] 这个数字是换算结果，不是直接测量。若改用局部距离阶梯给出的H0≈73 km/s/Mpc，c/H0会缩短到约134亿光年；两种口径的差异反映的是哈勃常数测量分歧，而不是宇宙真的变小了。

## 常见误解

哈勃半径不是可观测宇宙的半径。可观测宇宙的粒子视界约470亿光年，远大于145亿光年，因为空间在光传播期间持续膨胀。[1] 它也不是“星系退行速度达到光速”的球面；在膨胀宇宙中，超光速退行并不等同于相对论意义上的局域超光速运动。把c/H0乘以宇宙年龄，也不能得到可观测宇宙的大小。

## 与其他尺度的关系

145亿光年约为可观测宇宙半径470亿光年的31%，约为最后散射面共动距离的31%，约为银河系盘直径的145,000倍。[1] 它位于星系宇宙学尺度，向上连接粒子视界，向下连接超星系团。哈勃半径只是由H0设定的一把尺子，比较不同宇宙学距离时必须说明是共动距离、光度距离还是光行时距离。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.372×10²⁶ 米，换算后是 1.451×10¹⁰ 光年；约 1.45×10¹⁰ 光年（9.461×10¹⁵ 米）。这把尺子只改写单位，不改变量值；它把本条固定在空间轴的 10²⁶ 量级附近。

读图时先看量级，再看倍数：10²⁶ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
