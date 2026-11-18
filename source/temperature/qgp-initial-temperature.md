---
id: temperature.qgp-initial-temperature
title: 夸克胶子等离子体初始温度
titleEn: Initial temperature of quark-gluon plasma
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  重离子碰撞在极短时间内形成夸克胶子等离子体火球，模型与直接光子观测给出的初始温度约 400–500 MeV，约合 5×10¹² K。它描述碰撞火球的初始温度，与 QCD 手征过渡温标不是同一个量。
quantity:
  value: 5000000000000
  unit: K
  measure: quark-gluon-plasma-initial-temperature
  measureLabel: 重离子碰撞火球的初始温度
  approximate: true
displayValue: 约 5×10¹² K（约 430 MeV，初始温度量级）
related:
  - temperature.quark-gluon
  - temperature.electroweak
  - temperature.planck-temperature
  - temperature.supernova
reviewStatus: reviewed
sources:
  - title: Equation of State and Initial Temperature of Quark Gluon Plasma at RHIC
    url: 'https://arxiv.org/abs/1101.1279'
    publisher: Csanád & Majer, Cent. Eur. J. Phys. 10 (2012)
    accessed: '2026-11-07'
  - title: Heavy-Ion Physics (HASCO Summer School 2024)
    url: 'https://indico.cern.ch/event/1370092/contributions/5761587/attachments/2906507/5099098/reygers_hasco_school_2024.pdf'
    publisher: CERN / HASCO Summer School (K. Reygers)
    accessed: '2026-11-07'
conditions: >-
  对象为重离子碰撞后在约 1–2 fm/c 内达到局部热平衡的火球中心；取碰撞初期、火球尚未显著膨胀时的温度；5×10¹² K 为取整量级，对应约 430 MeV。
uncertainty: >-
  不同碰撞能量、中心度、初始时间假设和流体动力学模型给出约 300–600 MeV 的范围；RHIC 与 LHC 的结果不同，不能当作精确测温。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: reaction-field
  scene: temperature.object
  caption: 重离子碰撞火球 · 5×10¹² K 初始温度
  note: 火球、粒子轨迹与色荷为示意，非按比例，非观测重建；颜色和流动不代表真实温度分布。
  color: '#c9a0ff'
  variant: qgp
  backdrop: extreme
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 量子与粒子
---
## 它是什么

重离子碰撞把两个原子核加速到极高能量，碰撞区域在约 1–2 fm/c 内达到局部热平衡，形成夸克胶子等离子体火球，随后迅速膨胀冷却。这里讨论的是火球形成后不久的初始温度，约 400–500 MeV，约合 5×10¹² K。[1] 它既不是 QCD 手征 cross-over 的约 156.5 MeV 温标，也不是碰撞后长期演化的化学冻结温度。

## 怎样测到或为何是推断

火球寿命极短，无法用普通温度计测量。研究者用直接光子、喷注淬火、集体流和粒子产额等观测量，结合流体动力学模型反推初始温度。RHIC 的直接光子分析给出火球中心初始温度约 507±12 MeV；LHC 重离子讲座则把预期初始温度放在 500 MeV 或更高。[1][2] 这些是“观测量—模型”联合推断，不是对火球内部某一点的实际测温。

## 数值与口径

本条取 5×10¹² K 作为初始温度量级坐标。按 1 MeV ≈ 1.16×10¹⁰ K 换算，5×10¹² K 约等于 431 MeV，即约 5×10¹² °C。不同碰撞能量、中心度和初始时间假设会给出 300–600 MeV 的范围；RHIC 与 LHC 的结果也不同。因此它是数量级参照，不是精确测温，更不能与 QCD 过渡温标混为同一个数。[1][2]

## 常见误解

第一，把初始温度当成 QCD 手征过渡温度；后者约 156.5 MeV，明显更低，而且两者描述不同条件下的特征。[2] 第二，以为火球温度可以直接用温度计测得；实际全靠观测量和模型反推。第三，把初始温度当成火球整个寿命的平均温度；火球在膨胀中快速冷却。第四，以为所有碰撞都达到同一温度；碰撞能量、系统尺寸和中心度都会改变结果。[1]

## 与其他尺度的关系

5×10¹² K 约为 QCD 过渡温标 1.8×10¹² K 的 3 倍，也高于核心坍缩中微子球的 10¹¹ K 约 50 倍。它低于电弱过渡的约 1.85×10¹⁵ K 约两个多数量级，更远低于普朗克温度。与早期宇宙 10⁻⁴ 秒的 1.5×10¹² K 相比，高约 3 倍，但一个是实验室火球，一个是宇宙整体热浴。[1][2]
