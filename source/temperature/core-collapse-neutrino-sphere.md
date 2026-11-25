---
id: temperature.core-collapse-neutrino-sphere
title: 核心坍缩中微子球温度
titleEn: Core-collapse neutrinosphere temperature
dimension: temperature
category: 恒星与宇宙极端
summary: 核心坍缩超新星中，原中子星表面的中微子球温度约 10 MeV，约合 10¹¹ K。它描述中微子最后散射面的热辐射温度，不是整个坍缩核心的均匀温度。
quantity:
  value: 100000000000
  unit: K
  measure: core-collapse-neutrino-sphere-temperature
  measureLabel: 原中子星表面中微子球的辐射温度
  approximate: true
displayValue: 约 10¹¹ K（约 10 MeV）
related:
  - temperature.supernova
  - temperature.neutron-star-core
  - temperature.neutron-star-surface
  - temperature.gamma-ray-burst
  - time.first-stars
  - space.supernova-remnant
reviewStatus: reviewed
sources:
  - title: Diffuse Supernova Neutrinos at Underground Laboratories
    url: 'https://arxiv.org/abs/1007.3252'
    publisher: 'C. Lunardini, Astropart. Phys. 79 (2016)'
    accessed: '2026-11-07'
  - title: 'Stellar Explosions: From Supernovae to Gamma-Ray Bursts'
    url: 'https://arxiv.org/abs/astro-ph/0410349'
    publisher: 'K. Postnov, arXiv (2004)'
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 对象为核心坍缩后形成的原中子星表面、不同味道中微子的最后散射层；取坍缩后约数秒内、中微子能谱对应的准热温度；10¹¹ K 为取整量级，对应约 10 MeV。
uncertainty: 不同味道中微子的平均能量和最后散射层不同，温度可在约 5–20 MeV 范围变化；坍缩早期与后期也不同，不能当作精确测温或整个原中子星的最高温度。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: compact-star
  scene: temperature.object
  caption: 核心坍缩中微子球 · 10¹¹ K 量级
  note: 原中子星、中微子球与中微子流为示意，非按比例，非观测重建；颜色和流动不代表真实温度分布。
  color: '#c7b6ff'
  variant: neutrino-sphere
  backdrop: extreme
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

大质量恒星铁核坍缩后形成原中子星，核心释放的引力能主要以中微子形式带走。中微子在致密物质中反复散射，最后从“中微子球”附近逃逸；这一层的物质温度约 10 MeV，约合 10¹¹ K。[1] 中微子球不是几何上锐利的球面，而是不同味道中微子最后散射概率显著下降的区域，因此不同味道的“球”半径和温度略有差别。

## 怎样测到或为何是推断

1987A 超新星的中微子暴直接证明了核心坍缩会释放大量中微子，但中微子球本身仍被外层物质遮蔽。温度由中微子能谱、原中子星模型和中微子输运计算推断；观测到的中微子平均能量约 10–20 MeV，可反过来约束中微子球温度。[1][2] 这是一条“能谱—温度”推断链，不是对中微子球表面的直接温度计读数。

## 数值与口径

本条取 10¹¹ K 作为中微子球的量级坐标。按 1 MeV ≈ 1.16×10¹⁰ K 换算，10¹¹ K 约等于 8.6 MeV；换成摄氏温标仍是约 10¹¹ °C。不同味道中微子的平均能量和最后散射层不同，温度可在约 5–20 MeV 范围变化；坍缩早期与后期也不同。因此 10¹¹ K 是数量级参照，不是精确测温，更不是整个原中子星内部的最高温度。[1][2]

## 常见误解

第一，把中微子球温度当成原中子星核心温度；核心更深、更热，中微子球只是中微子逃逸的最后散射层。第二，以为中微子球是一个固定半径的锐利球面；它随味道、能量和时间变化。[1] 第三，把 10¹¹ K 当成超新星可见光球温度；可见光光球只有几千到几万 K。第四，以为中微子能谱是单能的；实际是带高能尾巴的准热谱，温度与平均能量不能简单等同。[2]

## 与其他尺度的关系

10¹¹ K 约为太阳核心温度的 6000 倍，与核心坍缩超新星的 10¹¹ K 量级温标处于同一层次，但本条限定在中微子球而非整个坍缩核心。它高于中子星表面约 2×10⁶ K 和超新星遗迹约 10⁶ K，低于夸克胶子等离子体的 5×10¹² K，也低于电弱过渡与普朗克温度。与早期宇宙中微子退耦的 10¹⁰ K 相比，高约一个数量级，但一个是致密天体表面，一个是宇宙学背景。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
