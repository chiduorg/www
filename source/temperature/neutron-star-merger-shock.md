---
id: temperature.neutron-star-merger-shock
title: 中子星并合激波温度
titleEn: Neutron star merger shock temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  双中子星并合时，接触界面和激波会把动能转成热能，模拟给出的峰值可达数十 MeV。本条取 10¹⁰ K（约 1
  MeV）作为较冷激波区与量级坐标，而不是接触层的最高温度。
quantity:
  value: 10000000000
  unit: K
  measure: neutron-star-merger-shock-temperature
  measureLabel: 并合界面激波加热的温度量级
  approximate: true
displayValue: 约 10¹⁰ K（约 1 MeV，激波加热量级参照）
related:
  - space.sun
  - time.first-stars
  - temperature.neutron-star-surface
  - temperature.neutron-star-core
  - temperature.kilonova_temp
  - temperature.gamma-ray-burst
reviewStatus: reviewed
sources:
  - title: >-
      Testing Approximations of Thermal Effects in Neutron Star Merger
      Simulations
    url: 'https://arxiv.org/abs/1006.3315'
    publisher: 'Bauswein, Janka & Oechslin, Phys. Rev. D 82, 084043 (2010)'
    accessed: '2026-11-07'
  - title: Free Neutron Ejection from Shock Breakout in Binary Neutron Star Mergers
    url: 'https://arxiv.org/abs/1805.04909'
    publisher: 'Ishii, Shigeyama & Tanaka, ApJ (2018)'
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为双中子星并合后数毫秒内的接触界面激波与受热物质；10¹⁰ K 是取整量级，对应约 1 MeV；模拟中接触层峰值更高（约 10–100
  MeV），本条不代表全过程的最高温度。
uncertainty: 不同物态方程、质量比、碰撞参数和数值分辨率给出不同峰值；10¹⁰ K 与接触层峰值可差一到两个数量级，不能当作精确测温或所有并合的普适值。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: stellar-event
  scene: temperature.object
  caption: 双中子星并合激波 · 10¹⁰ K 量级
  note: 中子星、激波界面与抛射物为示意，非按比例，非观测重建；颜色和流动不代表真实温度分布。
  color: '#ffcf8a'
  variant: merger
  backdrop: extreme
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

双中子星并合是两颗致密中子星在引力波辐射驱动下相互旋近、接触并合并的过程。接触界面形成强激波，把轨道动能转化为热能，局部物质被加热到高温，并可能抛出富中子物质。[1] 这里讨论的是并合瞬间激波加热的温度量级，不是并合后千新星的光球温度，也不是稳定中子星内部的温度。

## 怎样测到或为何是推断

并合事件可由引力波、伽马暴和光学/红外余辉联合观测，例如 GW170817 的多信使观测；但界面激波本身被致密物质包围，无法直接测温。温度主要来自相对论流体动力学模拟和物态方程计算。[1][2] 模拟显示接触层可被加热到约 10–100 MeV，约合 10¹¹–10¹² K；较冷激波区和抛射物则可低到 MeV 量级。因此观测支持并合产生高温，但具体数值依赖模型。

## 数值与口径

本条取 10¹⁰ K 作为量级参照。按 1 MeV ≈ 1.16×10¹⁰ K 换算，10¹⁰ K 约等于 0.86 MeV，即约 10¹⁰ °C。需要强调：这不是模拟给出的最高温度；接触层峰值常达数十 MeV，比本条高约一到两个数量级。取 10¹⁰ K 是为了与较冷激波区、抛射物加热和千新星前身状态做量级比较。它是数量级参照，不是精确测温，也不是所有并合都相同的定值。[1][2]

## 常见误解

第一，把 10¹⁰ K 当成并合界面的最高温度；模拟峰值更高，本条只是量级坐标。[1] 第二，把并合激波温度与千新星光球温度混同；后者观测到约几千 K，相差多个数量级。第三，以为温度越高就一定越亮；可见光亮度还取决于抛射物质量、不透明度和放射性加热。第四，把一次并合的温度当成所有并合的普适值；质量比、物态方程和碰撞参数都会改变结果。[2]

## 与其他尺度的关系

10¹⁰ K 约为太阳核心温度的 600 多倍，与早期宇宙中微子退耦温度同量级，但一个是并合激波，一个是宇宙学弱作用冻结。它高于 Ia 型超新星爆燃的约 10⁹ K，低于核心坍缩中微子球的 10¹¹ K，也低于夸克胶子等离子体的 5×10¹² K。若比较并合接触层峰值，则可达 10¹¹ K 以上，讨论时必须说明取的是哪一层物质。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
