---
id: temperature.gamma-ray-burst
title: 伽马射线暴
titleEn: Gamma-ray burst fireball temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  伽马射线暴是相对论性喷流产生的宇宙中最剧烈的电磁爆发。其热光球温度可由 约 100 keV 的黑体成分推断，约合 10⁹ K；初始火球模型内部还可更热。
  这是模型与谱拟合给出的温度，不是单一测点的读数。
quantity:
  value: 1000000000
  unit: K
  measure: 火球/光球温度（模型与热谱拟合）
  approximate: true
  measureLabel: 火球/光球温度
  range:
    min: 1000000000
    max: 10000000000
    unit: K
displayValue: 约 10⁹ K（温度量级；摄氏读数同量级）
related:
  - temperature.supernova
  - temperature.hypernova
  - temperature.kilonova_temp
  - temperature.black-hole-accretion-disk
  - temperature.magnetar-surface
  - temperature.quark-star
reviewStatus: reviewed
sources:
  - title: Fireballs
    url: 'https://ntrs.nasa.gov/api/citations/19960010269/downloads/19960010269.pdf'
    publisher: 'NASA Technical Reports Server, T. Piran'
    accessed: '2026-11-06'
  - title: Thermal Emission from Gamma-Ray Bursts
    url: 'https://arxiv.org/html/0809.0903v1'
    publisher: 'A. Pe’er (arXiv:0809.0903)'
    accessed: '2026-11-06'
  - title: 'Gamma-ray bursts: what do we know today that we did not know 10 years ago?'
    url: 'https://arxiv.org/html/2412.18681v1'
    publisher: 'A. Pe’er (arXiv:2412.18681)'
    accessed: '2026-11-06'
conditions: >-
  对象为伽马射线暴中心引擎产生的相对论性火球及其热光球；10⁹ K 指由热谱黑体成分 推断的温度，约对应 100
  keV。初始火球内部温度可更高，激波产生的非热辐射不能用单一 热平衡温度描述。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 Piran 火球讲义：初始火球在光学厚阶段达到热平衡，温度约为数 MeV 量级，对应 10¹⁰ K 以上。
    - 核对 Pe’er 2008：多个暴的热光球黑体温度在最初数秒约为 100 keV，约合 10⁹ K，随后衰减。
    - 核对 Pe’er 2024 综述：火球模型与激波耗散解释非热谱，热光球只是整体辐射的一部分。
    - 取 10⁹ K 作观测热光球锚点，range 写 10⁹–10¹⁰ K，并注明初始火球可更高。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  火球温度强烈依赖模型：初始温度、光球半径、洛伦兹因子和耗散位置都会改变拟合结果； 观测到的热成分也可能被非热谱掩盖。10⁹ K
  是热光球量级，不是所有暴的统一温度。
visual:
  template: stellar-event
  scene: temperature.object
  caption: 伽马射线暴喷流与火球示意
  note: 以相对论性喷流、激波和辐射锥示意伽马射线暴，不对应具体事件；画面非按比例， 颜色、光束和粒子轨迹均为解释性示意。
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 宇宙中最亮的瞬变事件

伽马射线暴是遥远星系中短时标、极高亮度的伽马射线爆发，通常由大质量恒星塌缩或致密双星并合驱动。[3] 中心引擎释放的能量把物质加速成相对论性喷流，喷流内部和外部激波再把它转化为辐射。

## 火球模型与热光球

在火球模型中，初始能量被囚禁在光学厚的电子—正负电子—光子等离子体中，直到膨胀到光球才逃逸。[1] 光球的热辐射应表现为黑体成分，叠加在非热的同步辐射或同步自康普顿谱上。[2] 观测到热成分，就能反推光球温度和喷流洛伦兹因子。

## 约 10⁹ K 的热光球温度

对一批暴的时间分辨谱拟合发现，热成分温度在最初数秒近似恒定，典型值约为 100 keV，约合 10⁹ K，随后按幂律衰减。[2] 火球初始内部温度在模型上可达到数 MeV，对应 10¹⁰ K 以上。[1] 本条因此取约 10⁹ K 作为热光球锚点，并用 10⁹–10¹⁰ K 概括模型与观测的温度跨度。

## 热平衡温度不能描述全部辐射

暴的观测谱主要呈非热形态，热光球只是其中一部分；激波加速电子的同步辐射不能用单一温度描述。[3] 把整个暴说成“温度 10⁹ K 的火球”，会忽略非热粒子分布和耗散区域。热光球温度是拟合参数，不是逐点温度计。

## 与其他极端事件比较

10⁹ K 高于磁星表面的约 10⁶ K 和太阳耀斑的约 10⁷ K，也高于超新星遗迹激波的约 10⁶ K。[2][3] 它接近早期宇宙等离子体的温区，但持续时间极短。理解这个温度，需要同时考虑相对论运动、光学厚度和辐射转移，而不能只凭亮度判断。
