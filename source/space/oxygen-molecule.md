---
id: space.oxygen-molecule
title: 氧分子
titleEn: Oxygen Molecule
dimension: length
category: 原子与分子
summary: 氧分子 O₂ 是双原子分子，两个氧核的平衡键长约 0.121 nm；本页以该键长作为分子内核间距，不含电子云外缘。
quantity:
  value: 1.21e-10
  unit: m
  measure: O—O 平衡键长
  approximate: true
displayValue: 约 0.121 nm（O—O 键长）
related:
  - space.nitrogen-molecule
  - space.co2-molecule
  - space.water-molecule
  - space.atom
  - space.hemoglobin
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: 'CCCBDB experimental geometry for O2 — CAS 7782-44-7, charge 0'
    url: 'https://cccbdb.nist.gov/exp2x.asp?casno=7782447&charge=0'
    publisher: NIST / Computational Chemistry Comparison and Benchmark Database
    accessed: '2026-11-07'
  - title: oxygen
    url: 'https://www.britannica.com/science/oxygen'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  取中性气相 O₂ 的平衡几何；量的是两个氧核之间的距离 1.2075 Å。该值不是范德华直径，也不是液态氧中分子间的接触距离；
  适用于孤立气相双原子分子，不适用于激发态、离子态或高压吸附体系。
uncertainty: >-
  NIST 表列实验键长 1.208 Å，笛卡尔坐标给出 1.2075 Å；分子振动使瞬时核间距在平衡值附近变化。
  引用时取约 1.21 Å，差异主要来自平衡量与瞬时值的口径，而不是测量精度。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 用 WebFetch 打开 NIST CCCBDB 的 O2 实验几何页，核对 rOO = 1.208 Å 与两核间距 1.2075 Å。
    - 用 WebFetch 打开 Britannica 氧条目，核对氧是第 16 族非金属元素、O2 为双原子气体及其在呼吸中的作用。
    - 正文明确 0.121 nm 是核间距，不把分子电子云外缘当作键长。
    - '2026-11-07 来源可访问性核对：https://cccbdb.nist.gov/exp2x.asp?casno=7782447&charge=0 返回可用响应；https://www.britannica.com/science/oxygen（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: oxygen
  scene: space.object
  caption: 氧分子 · O—O 键长约 0.121 nm
  note: 两个氧原子球与键线为示意；标线表示核间距，不是范德华外缘；示意，非按比例，非观测重建。
  color: '#8fb8d8'
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

氧分子由两个氧原子以双键结合，化学式 O₂，是空气的主要成分之一，也是细胞呼吸的氧化剂。[2] 两个氧核之间有一条确定的平衡距离，本页用约 0.121 纳米表示这条键长。它描述的是分子内部两个核的位置，不是整个分子电子云的外径。

## 怎样知道

NIST CCCBDB 的实验几何页列出 O₂ 的 O—O 键长为 1.208 埃，并由笛卡尔坐标给出两核间距 1.2075 埃。[1] 这些值来自光谱与转动能级分析，不是从分子图片上量出来的。Britannica 说明氧是第 16 族非金属元素，O₂ 是双原子气体，并介绍它在呼吸与燃烧中的作用。[2] 两者合起来支持“约 0.121 纳米”的量级与口径。

## 数值与口径

1.2075 埃等于 1.2075×10⁻¹⁰ 米，约 0.121 纳米。[1] 它只是两个氧核的平衡间距；若把电子云算进去，分子外形会更宽，范德华直径通常写成 0.3 纳米量级。[2] 键长会随振动在平衡值附近变化，因此严格说它是平衡量，不是刚性小球的直径。

## 常见误解

常见误解之一是把 0.121 纳米当成氧分子的“直径”，于是以为氧分子只有氢分子那么大；它只是两核间距，外侧还有电子云。[1] 另一个误解是把 O₂ 的键长与 O₃ 或 H₂O 中的 O—O、O—H 距离混用，不同分子的键级与键长并不相同。[2] 还有人把气态 O₂ 的核间距直接当作液态氧中分子间的接触距离，后者受凝聚态堆积影响。

## 与其他尺度的关系

0.121 纳米与氮分子的 0.110 纳米接近，二者都是双原子气体，键长只差约 10%。[1][2] 它比水分子内的 O—H 键略长，却远小于血红蛋白、病毒与细胞。在标准状态下，氧分子之间的平均距离远大于键长，气体整体仍接近理想气体。[1][2] 继续阅读氮分子、二氧化碳分子和水分子，可比较双原子与三原子分子的“键长”口径。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 4.0e-10 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
