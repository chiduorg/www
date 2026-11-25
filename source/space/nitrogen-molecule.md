---
id: space.nitrogen-molecule
title: 氮分子
titleEn: Nitrogen Molecule
dimension: length
category: 原子与分子
summary: 氮分子 N₂ 是双原子分子，两个氮核的平衡键长约 0.110 nm；本页以该键长作为分子内核间距，不含电子云外缘。
quantity:
  value: 1.10e-10
  unit: m
  measure: N—N 平衡键长
  approximate: true
displayValue: 约 0.110 nm（N—N 键长）
related:
  - space.oxygen-molecule
  - space.co2-molecule
  - space.water-molecule
  - space.atom
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: 'CCCBDB experimental geometry for N2 — CAS 7727-37-9, charge 0'
    url: 'https://cccbdb.nist.gov/exp2x.asp?casno=7727379&charge=0'
    publisher: NIST / Computational Chemistry Comparison and Benchmark Database
    accessed: '2026-11-07'
  - title: nitrogen
    url: 'https://www.britannica.com/science/nitrogen'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  取中性气相 N₂ 的平衡几何；量的是 N≡N 三键的两个氮核间距 1.0977 Å。该值不是范德华直径，也不是液氮中分子间的接触距离；
  适用于孤立气相双原子分子，不适用于离子态或高压吸附体系。
uncertainty: >-
  NIST 表列实验键长 1.098 Å，笛卡尔坐标给出 1.0977 Å；分子振动使瞬时核间距在平衡值附近变化。
  引用时取约 1.10 Å，差异主要来自平衡量与瞬时值的口径。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 用 WebFetch 打开 NIST CCCBDB 的 N2 实验几何页，核对 rNN = 1.098 Å 与两核间距 1.0977 Å。
    - 用 WebFetch 打开 Britannica 氮条目，核对氮是第 15 族元素、N2 为双原子气体及氮循环中的作用。
    - 正文明确 0.110 nm 是核间距与三键键长，不把它当成分子外径。
    - '2026-11-07 来源可访问性核对：https://cccbdb.nist.gov/exp2x.asp?casno=7727379&charge=0 返回可用响应；https://www.britannica.com/science/nitrogen（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: nitrogen
  scene: space.object
  caption: 氮分子 · N—N 键长约 0.110 nm
  note: 两个氮原子球与键线为示意；标线表示核间距，不是范德华外缘；示意，非按比例，非观测重建。
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

氮分子由两个氮原子以三键结合，化学式 N₂，约占地球大气的 78%。[2] 两个氮核之间有一条确定的平衡距离，本页用约 0.110 纳米表示这条键长。它描述的是分子内部两个核的位置，不是整个分子电子云的外径，也不是氮气在液体中的分子间距。

## 怎样知道

NIST CCCBDB 的实验几何页列出 N₂ 的 N—N 键长为 1.098 埃，并由笛卡尔坐标给出两核间距 1.0977 埃。[1] 这些值来自光谱与转动能级分析，键级为三，键长比氧分子的双键更短。Britannica 说明氮是第 15 族元素，N₂ 是双原子气体，并介绍它在蛋白质与氮循环中的角色。[2] 两者共同支持“约 0.110 纳米”的量级与口径。

## 数值与口径

1.0977 埃等于 1.0977×10⁻¹⁰ 米，约 0.110 纳米。[1] 它只是两个氮核的平衡间距；若把电子云算进去，分子外形会更宽，范德华直径通常写成 0.3 纳米量级。[2] 三键把两个核拉得比氧分子更近，因此氮分子的键长比氧分子短约 9%，但两者的电子云外缘尺度接近。

## 常见误解

常见误解之一是把 0.110 纳米当成氮分子的“直径”，于是以为氮分子比氧分子小很多；两核间距只差约 0.011 纳米。[1] 另一个误解是把 N₂ 的键长与含氮化合物中的 N—O、N—H 键混用，不同成键对象的键长并不相同。[2] 还有人把气态 N₂ 的核间距直接当作液氮中分子间的接触距离，后者受凝聚态堆积与温度影响。

## 与其他尺度的关系

0.110 纳米与氧分子的 0.121 纳米接近，二者都是双原子气体，键长只差约 9%。[1][2] 它比水分子内的 O—H 键略长，却远小于蛋白质、病毒与细胞。继续阅读氧分子、二氧化碳分子和水分子，可比较双原子与三原子分子的“键长”口径。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 3.7e-10 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
