---
id: space.co2-molecule
title: 二氧化碳分子
titleEn: Carbon Dioxide Molecule
dimension: length
category: 原子与分子
summary: 二氧化碳是直线形三原子分子，C=O 键长约 0.116 nm；本页取 0.33 nm 作为分子最大跨度，是动力学直径/范德华尺度口径，不是键长。
quantity:
  value: 3.3e-10
  unit: m
  measure: 分子最大跨度（动力学直径口径）
  approximate: true
displayValue: 约 0.33 nm（分子最大跨度/动力学直径）
related:
  - space.water-molecule
  - space.methane-molecule
  - space.oxygen-molecule
  - space.atom
  - space.crystal-lattice
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: 'CCCBDB experimental geometry for CO2 — CAS 124-38-9, charge 0'
    url: 'https://cccbdb.nist.gov/exp2x.asp?casno=124389&charge=0'
    publisher: NIST / Computational Chemistry Comparison and Benchmark Database
    accessed: '2026-11-07'
  - title: Data-Driven and Machine Learning to Screen Metal–Organic Frameworks for the Efficient Separation of Methane
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11243175/'
    publisher: Nanomaterials (MDPI) / PubMed Central
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  取中性气相 CO2 的直线形平衡几何；0.33 nm 是动力学直径/范德华尺度口径，不是 C=O 键长（NIST CCCBDB 实验值 1.162 Å），
  也不是两个氧核之间的距离（2.3242 Å）。该口径适用于气体碰撞与孔道筛分，不适用于干冰或液态 CO2 中的分子间距。
uncertainty: >-
  3.3 Å 来自气体分离文献中常用的动力学直径，个别文献写作 3.30–3.35 Å；它不是几何核间距，
  误差主要来自势函数、电子云边界与“跨度”定义，而不是单一测量精度。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 用 WebFetch 打开 NIST CCCBDB 的 CO2 实验几何页，核对 rCO = 1.162 Å、O–O = 2.3242 Å、O–C–O = 180°。
    - 用 WebFetch 打开 PMC11243175，核对气体分离文献把 CO2 的动力学直径列为 3.3 Å、CH4 列为 3.8 Å。
    - 正文明确区分键长、两端氧核距离与动力学直径三种口径，0.33 nm 不写作“键长”。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://cccbdb.nist.gov/exp2x.asp?casno=124389&charge=0；https://pmc.ncbi.nlm.nih.gov/articles/PMC11243175/），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: co2
  scene: space.object
  caption: 二氧化碳分子 · 约 0.33 nm 最大跨度
  note: 原子球、键线与颜色为示意；标线表示动力学直径/范德华尺度，不是 C=O 键长；示意，非按比例，非观测重建。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 纳米
conceptGroup: molecule
---
## 它是什么

二氧化碳分子由两个氧原子和一个碳原子组成，化学式 CO₂，三个原子核排成一条直线，碳在中间。[1] 它是无色气体，也是光合作用的原料和呼吸作用的产物。[2] 本页用约 0.33 纳米作为分子最大跨度，描述的是分子在碰撞与孔道筛分中表现出的外缘尺度，而不是某一条化学键的长度。

## 怎样知道

NIST CCCBDB 汇总光谱实验得到的平衡几何：CO₂ 的 C=O 键长为 1.162 埃，两个氧核之间的距离为 2.3242 埃，O—C—O 键角为 180 度。[1] 气体分离与吸附研究则常用“动力学直径”描述分子能通过多孔材料的最小孔径，文献把 CO₂ 记为约 3.3 埃。[2] 两个数字来自不同测量传统：前者是核间距，后者是包含电子云的碰撞与外缘尺度。

## 数值与口径

1.162 埃等于 0.1162 纳米，是碳氧双键的键长；2.3242 埃等于 0.2324 纳米，是直线分子两端氧核的距离；3.3 埃等于 0.33 纳米，则把电子云和范德华外缘算进去。[1][2] 因此 0.33 纳米不是键长，也不是 O—O 核间距，而是“分子最大跨度/动力学直径”这一口径。把三者混用，会让同一分子出现相差三倍的“尺寸”。

## 常见误解

常见误解之一是把 0.33 纳米写成 CO₂ 的键长；键长约 0.116 纳米，只有它的三分之一左右。[1] 另一个误解是拿 0.33 纳米当所有方向的直径：CO₂ 是长条形，纵向跨度与横向宽度并不相同。[2] 还有人把气相孤立分子的外缘直接套到干冰或液态 CO₂，凝聚态中分子相互接触，间距受温度和压力影响。

## 与其他尺度的关系

0.33 纳米比水分子和氧分子的核间距大，却仍远小于蛋白质、病毒与细胞。[1][2] 它与甲烷的 0.38 纳米、氮气的 0.364 纳米同属小分子气体，常用同一套孔道筛分口径比较。继续阅读甲烷、氧分子、氮分子与晶格间距，可看到“键长、分子跨度、晶格常数”并不是同一种长度。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]
