---
id: temperature.supernova-shock-breakout
title: 超新星激波突破温度
titleEn: Supernova shock breakout temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  超新星激波到达恒星表面并突破时，后激波气体可被加热到约 10⁹ K 量级，辐射随后迅速逃逸。这是激波突破瞬间的气体温度，不是持续可见的光球温度。
quantity:
  value: 1000000000
  unit: K
  measure: supernova-shock-breakout-temperature
  measureLabel: 激波刚突破星表面时的后激波温度
  approximate: true
displayValue: 约 10⁹ K（约 86 keV）
related:
  - temperature.supernova
  - temperature.supernova-remnant
  - temperature.type-ia-supernova
  - temperature.gamma-ray-burst
reviewStatus: reviewed
sources:
  - title: X- and Gamma-Ray Flashes from Type Ia Supernovae?
    url: 'https://arxiv.org/abs/0909.1357'
    publisher: Höflich & Schaefer, ApJ 705 (2009)
    accessed: '2026-11-07'
  - title: 'Type IIP SN 2024bch: Hydrodynamic Model, Shock Breakout, and Circumstellar Interaction'
    url: 'https://arxiv.org/abs/2512.01552'
    publisher: Utrobin & Chugai, arXiv (2025)
    accessed: '2026-11-07'
conditions: >-
  对象为激波刚到达并突破恒星外层时、激波后方的受热气体；取爆发后数小时内的短暂时段；10⁹ K 为取整量级，对应约 86 keV。
uncertainty: >-
  实际温度随前身星半径、包层密度、激波速度和爆炸能量变化；不同超新星模型给出约 10⁸–10⁹ K 甚至更高的峰值，不能当作精确测温。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: stellar-event
  scene: temperature.object
  caption: 超新星激波突破 · 10⁹ K 量级
  note: 激波面、外层气体与辐射为示意，非按比例，非观测重建；颜色和流动不代表真实温度分布。
  color: '#ffd6a5'
  variant: breakout
  backdrop: extreme
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

核心坍缩超新星的激波从核心向外传播，到达恒星外层并突破表面时，会把最外层物质加热并短暂释放强烈辐射，这一阶段叫激波突破。按激波跃变条件，后激波气体温度可达约 10⁹ K；而辐射透出后观测到的光球温度通常低得多。[1] 这里说的是突破瞬间、激波后方的气体温度，不是整颗超新星或遗迹的温度。

## 怎样测到或为何是推断

激波突破的辐射多为紫外、X 射线甚至软伽马射线，持续时间短，常被外层物质遮挡，因此直接测温很难。温度可从辐射谱、光变曲线和流体动力学模型推断；Rankine–Hugoniot 跃变条件给出后激波温度约 10⁹ K，而观测到的早期闪光照度则约束激波能量和半径。[1][2] 这些是模型与观测结合的估计，不是对激波面的直接温度计读数。

## 数值与口径

本条取 10⁹ K 作为突破瞬间的量级坐标。按 1 MeV ≈ 1.16×10¹⁰ K 换算，10⁹ K 约等于 0.086 MeV，即约 86 keV；换成摄氏温标仍是约 10⁹ °C。Ia 型超新星激波突破的计算曾给出约 1.5×10⁹ K 的峰值，说明本条与具体模型同量级但不必精确。它是数量级参照，不是精确测温；实际温度随前身星半径、激波速度和外层密度变化。[1][2]

## 常见误解

第一，把激波突破温度当成超新星最亮时的光球温度；后者通常只有几千到几万 K。[2] 第二，以为激波突破一定很亮；对致密星周介质，辐射可能被吸收，观测到的闪光很弱。第三，把 10⁹ K 当成所有超新星都相同的定值；恒星半径、包层质量和爆炸能量都会改变突破温度。第四，忽略激波突破与后续遗迹阶段的区别；前者只持续很短时间，后者可延续数千年。[1]

## 与其他尺度的关系

10⁹ K 与 Ia 型爆燃火焰的约 10⁹ K 同量级，但一个是激波加热气体，一个是白矮星内部燃烧波。它高于太阳核心约 1.57×10⁷ K，低于核心坍缩中微子球的 10¹¹ K，也低于夸克胶子等离子体的 5×10¹² K。与超新星遗迹约 10⁶ K 相比，高约三个数量级；比较时应区分“突破瞬间”和“遗迹长期冷却”。[1][2]
