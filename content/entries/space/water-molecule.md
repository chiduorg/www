---
id: space.water-molecule
title: 水分子
titleEn: Water Molecule
dimension: length
category: 原子与分子
summary: >-
  水分子由一个氧核和两个氢核组成，呈弯折结构。本页采用NIST
  CCCBDB中性气相水平衡几何中的H—H核间距1.5144埃，约为0.15144纳米，并说明这一口径与其他“分子大小”的区别。
quantity:
  value: 1.5144e-10
  unit: m
  measure: 中性气相水分子平衡几何中的H—H核间距
  approximate: true
displayValue: 约 0.15144 nm（H—H核间距）
related:
  - space.atom
  - space.dna
  - temperature.water-triple-point
  - time.first-stars
reviewStatus: reviewed
sources:
  - title: 'CCCBDB experimental geometry for neutral H2O — CAS 7732-18-5, charge 0'
    url: 'https://cccbdb.nist.gov/exp2x.asp?casno=7732185&charge=0'
    publisher: NIST / Computational Chemistry Comparison and Benchmark Database
    accessed: '2026-11-06'
  - title: Water — chemical compound
    url: 'https://www.britannica.com/science/water'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: water-molecule
  icon: "\U0001F4A7"
  relatedLabels: 氢键、极性分子、溶剂、水合作用、水的反常性质、纳米尺度、生物化学
conditions: NIST CCCBDB中性气相H₂O实验平衡几何；量的是两个氢核之间的距离1.5144 Å；不是液态水的动力学直径、范德华外形直径或单个原子的直径。
uncertainty: >-
  1.5144 Å
  是实验平衡几何的核间距；分子振动、不同构象、电子云边界和液态水中的氢键环境都会让“大小”取到不同数值，误差主要来自定义差异而非单一测量精度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch打开NIST CCCBDB与Britannica水条目，核对H—H、O—H核间距与键角。
    - 明确核间距、电子云包络与液态水合尺寸是不同口径，不把1.5144 Å外推为分子“直径”。
  originalQuantity:
    value: 2.8e-10
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: water
  color: '#a4bac1'
  referenceAxis: x
  caption: 水分子两个氢核之间的间距
  note: H—H核间标线相距图中的参考标线；O—H/H—H比例取NIST平衡几何，原子球半径和键粗细夸张，非分子动力学直径；图为示意，非按比例，非观测重建。
  framePadding: 0.33
  sourceMeasure: 中性气相水分子平衡几何中的H—H核间距
  parameters:
    hydrogenDistanceAngstrom: 1.5144
    oxygenHydrogenDistanceAngstrom: 0.9578
    source: 'https://cccbdb.nist.gov/exp2x.asp?casno=7732185&charge=0'
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
conceptGroup: water
---
## 它是什么

水分子由一个氧原子和两个氢原子组成，化学式 H₂O。三个原子核不在一条直线上，而是形成弯折的角形结构；两个氢核之间隔着氧核，因此“两个氢核之间的距离”与“氧—氢键长”并不是同一个量。[1][2] 它也不是一颗表面均匀的小球，原子核之外还有电子云和不断振动的化学键。

## 怎样知道

NIST 的 CCCBDB 汇集了光谱实验给出的平衡几何。该页对中性气相水分子列出 O—H 核间距约 0.9578 埃、H—H 核间距 1.5144 埃，H—O—H 键角约 104.48 度；这些值来自实验数据整理，不是按分子图片估读。[1] Britannica 则把水作为化合物介绍，说明它由氢和氧组成，并强调其物理化学性质并不因分子式简单而简单。[2]

## 数值与口径

本页的 1.5144 埃等于 0.15144 纳米，也就是约 1.5 埃。它描述的是平衡构象中两个氢核的位置间距，不包含电子云外缘，也不包含液态水中邻近分子形成的氢键网络。[1] 同一页给出的 O—H 距离约 0.9578 埃；若引用“水分子直径”，必须同时说明量的是核间距、范德华包络还是动力学直径，否则数字不可比。[1][2]

## 常见误解

常见误解之一是把旧条的 0.28 纳米当成水的固定直径。0.28 纳米没有说明测量端点，可能接近某种范德华包络，却不能与这里的 H—H 核间距直接互换。[1] 另一个误解是把气态单分子的几何直接套到液态水上：液态水分子之间有氢键，平均间距和取向会随温度、压力改变。[1][2]

## 与其他尺度的关系

把 0.151 纳米放回尺度轴，它比蛋白质和细胞小得多，也比本站 DNA 条目所用的纳米级宽度小一个数量级左右。[1] 它与原子条目只差几倍：氢原子的玻尔半径约 0.053 纳米，而水分子的核间距约为它的三倍。继续向下看是原子核与电子尺度，向上看则是大分子、细胞膜和细胞。
