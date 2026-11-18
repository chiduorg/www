---
id: space.methane-molecule
title: 甲烷分子
titleEn: Methane Molecule
dimension: length
category: 原子与分子
summary: 甲烷是正四面体形分子，C–H 键长约 0.1087 nm；本页取 0.38 nm 作为分子最大跨度（动力学直径），不是 C–H 键长。
quantity:
  value: 3.8e-10
  unit: m
  measure: 分子最大跨度（动力学直径口径）
  approximate: true
displayValue: 约 0.38 nm（分子跨度/动力学直径）
related:
  - space.co2-molecule
  - space.water-molecule
  - space.atom
  - space.crystal-lattice
  - space.urea
reviewStatus: reviewed
sources:
  - title: 'CCCBDB experimental geometry for methane — CAS 74-82-8, charge 0'
    url: 'https://cccbdb.nist.gov/exp2x.asp?casno=74828&charge=0'
    publisher: NIST / Computational Chemistry Comparison and Benchmark Database
    accessed: '2026-11-07'
  - title: Data-Driven and Machine Learning to Screen Metal–Organic Frameworks for the Efficient Separation of Methane
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11243175/'
    publisher: Nanomaterials (MDPI) / PubMed Central
    accessed: '2026-11-07'
conditions: >-
  取中性气相 CH4 的正四面体平衡几何；0.38 nm 是动力学直径/范德华尺度口径，不是 C–H 键长（1.087 Å），
  也不是两个氢核之间的距离（约 1.78 Å）。该口径适用于气体碰撞与孔道筛分，不适用于液态或水合甲烷。
uncertainty: >-
  0.38 nm 在分离文献中常写作 3.8 Å，个别表给出 3.76–3.80 Å；它不是几何核间距，
  误差主要来自势函数、电子云边界与“跨度”定义，而不是单一测量精度。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 用 WebFetch 打开 NIST CCCBDB 的甲烷实验几何页，核对 rCH = 1.087 Å 与 H–C–H 键角约 109.5°。
    - 用 WebFetch 打开 PMC11243175，核对气体分离文献把 CH4 的动力学直径列为 3.8 Å、CO2 列为 3.3 Å。
    - 正文明确区分 C–H 键长、H–H 核间距与动力学直径，0.38 nm 不写作“键长”。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://cccbdb.nist.gov/exp2x.asp?casno=74828&charge=0；https://pmc.ncbi.nlm.nih.gov/articles/PMC11243175/），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: methane
  scene: space.object
  caption: 甲烷分子 · 约 0.38 nm 最大跨度
  note: 原子球、键线与颜色为示意；标线表示动力学直径/范德华尺度，不是 C–H 键长；示意，非按比例，非观测重建。
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

甲烷是最简单的烷烃，化学式 CH₄，一个碳原子位于中心，四个氢原子指向正四面体的四个顶点。[1] 它是天然气的主要成分，也是重要的温室气体。[2] 本页用约 0.38 纳米表示分子最大跨度，指的是分子在碰撞、扩散和孔道筛分中呈现的外缘尺度，不是某一条碳氢键的长度。

## 怎样知道

NIST CCCBDB 的实验几何页给出甲烷的 C—H 键长为 1.087 埃，H—C—H 键角约 109.5 度，与正四面体模型一致。[1] 气体分离文献则用动力学直径描述分子尺度：甲烷的动力学直径约为 3.8 埃，与二氧化碳的 3.3 埃、氮气的 3.64 埃并列。[2] 前者是核间距，后者是包含电子云的碰撞尺度。

## 数值与口径

1.087 埃等于 0.1087 纳米，是 C—H 键长；按正四面体几何，两个氢核之间的距离约为 1.78 埃，即 0.178 纳米。[1] 3.8 埃等于 0.38 纳米，才是本页采用的“分子跨度”，它把氢原子的电子云和范德华半径都算进去。[2] 所以 0.38 纳米不是 C—H 键长，二者相差三倍以上。

## 常见误解

常见误解之一是把 0.38 纳米写成甲烷的键长；C—H 键只有约 0.109 纳米。[1] 另一个误解是把 0.38 纳米当成两个氢核的间距；核间距约 0.178 纳米，正好是键长的约 1.63 倍。[1][2] 还有人拿气相动力学直径直接估算液态甲烷的分子间距，凝聚态中分子彼此接触，数值与自由气体不同。

## 与其他尺度的关系

0.38 纳米比二氧化碳的 0.33 纳米略大，却仍远小于蛋白质与细胞。[2] 在气体分离与吸附研究中，甲烷、二氧化碳、氮气和氧分子常用同一套动力学直径比较，因此“分子大小”在这里是一种工程口径，而不是几何外壳。继续阅读二氧化碳、氧分子、氮分子与水分子，可看到同一尺度轴上不同口径的差别。
