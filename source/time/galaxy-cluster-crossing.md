---
id: time.galaxy-cluster-crossing
title: 星系穿越星系团的时间
titleEn: Galaxy Cluster Crossing Time
dimension: cosmic-time
category: 星系与结构
summary: >-
  星系穿越星系团的时间，指一个星系从团的一侧运动到另一侧所经历的典型时长。 本条取约 100
  亿年，用团的大小和星系速度估算，不是星系形成或落入团中的绝对时刻。
quantity:
  value: 315576000000000000
  unit: s
  measure: duration-interval
  measureLabel: 持续时长，不是自大爆炸起的绝对时点
  approximate: true
displayValue: 约 100 亿年
related:
  - space.milky-way
  - mass.milky-way
  - time.galactic-year
  - time.galaxy-formation
  - time.one-quintillion-seconds
  - time.one-quadrillion-seconds
reviewStatus: reviewed
sources:
  - title: 'Modern Cosmological Observations and Problems: Clusters of Galaxies'
    url: 'https://ned.ipac.caltech.edu/level5/Bothun2/Bothun3_2_2.html'
    publisher: NASA/IPAC Extragalactic Database (NED)
    accessed: '2026-11-07'
  - title: >-
      How time weathers galaxies: The temporal impact of the cluster environment
      on galaxy formation and evolution
    url: 'https://arxiv.org/pdf/2310.07754v1'
    publisher: arXiv (O'Neil et al.)
    accessed: '2026-11-07'
  - title: 'SI base unit: second (s)'
    url: 'https://www.bipm.org/en/si-base-units/second'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
chronology:
  status: duration
  plot: false
  note: 本条是持续时长，不是大爆炸后的绝对时点，不放在绝对时间轴上
conditions:
  mode: duration
  definition: 星系从星系团一侧穿到另一侧所用时间，量级为团的直径除以星系相对速度
  conversion: 10¹⁰ × 31 557 600 = 315 576 000 000 000 000 秒
  note: 只表示间隔长度，不是自大爆炸起的绝对时点
uncertainty: >-
  团的边界没有唯一定义，取核心区还是外围、用半径还是直径，结果可相差约两倍。 本条采用约 5 百万秒差距的特征半径与约 1000 公里/秒的速度，给出 100
  亿年的量级。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: cosmic-web
  scene: time.object
  caption: 星系团穿越 · 星系运动与团结构示意
  note: 星系、纤维状结构与颜色为风格化示意，非按比例、非观测重建。
  color: '#8fa9c9'
  variant: cluster-crossing
mode: 时长
tags:
  - 星系与结构
  - 时长
---
## 它是什么

星系穿越星系团的时间，指一个星系从团的一侧运动到另一侧所经历的典型时长。本条取约 100 亿年。它不是星系形成的时刻，也不是某个星系第一次落入团中的绝对时间，而是用团的大小和星系速度估算出的持续间隔。一个富团可含数百到上千个星系，特征尺度从约 1 百万秒差距延伸到数千万秒差距，因此“穿越”必须先说明取哪一段。

## 怎样知道

天体物理学家把团交叉时间写成 t ≈ R/σ，R 是团的特征半径，σ 是成员星系的速度弥散[1]。在宇宙学模拟中，星系团的“一次交叉时间”常取约 50 亿年；把从一侧进、另一侧出视为约两个交叉半径，就得到约 100 亿年[2]。这类估计依赖团的质晕边界和速度结构。速度弥散描述成员星系在引力势中的随机运动；把半径除以它，就得到系统“沟通”一次所需的时间。

## 数值与口径

100 亿年按一年 31 557 600 秒换算，等于 3.15576×10¹⁷ 秒；100 亿年与这串秒数只是同一物理量的不同写法。若取特征半径约 5 百万秒差距、速度约 1000 公里/秒，R/σ 约为 50 亿年；再乘 2 得约 100 亿年[1][2]。不同文献对“穿越”的定义不同：有的用半径，有的用直径，有的用轨道周期，结果会相差约两倍。5 百万秒差距约合 1.5×10²³ 米，1000 公里/秒即 10⁶ 米/秒，相除约 1.5×10¹⁷ 秒，约 50 亿年。

## 常见误解

常见误解是把 100 亿年当作“星系在团中静止不动的时间”，实际星系一直在运动。另一个误解是把它与星系年龄或宇宙年龄混同：它是穿过一个结构的持续时间，不是宇宙从大爆炸到现在的时间[1]。还要注意，团的边界没有唯一画法，取核心区还是外围，数值差别很大。团交叉时间也不是团的年龄；一个团可能已经存在数十亿年，而成员星系仍在其中穿行。

## 与其他尺度的关系

100 亿年约为地球年龄 45.4 亿年的 2.2 倍，也约为十亿秒的 31.69 年的 3.16 亿倍、一万亿秒的 3.17 万年的约 31.6 万倍、一千万亿秒的 3169 万年的约 31.6 倍、一百亿亿秒的 316.9 亿年的约 0.32 倍。它比银河年约 2.3 亿年长约 43 倍，属于星系团尺度上的动力学时间[2]。

本条的时间单位与换算依据 BIPM 对秒的定义。[3]
