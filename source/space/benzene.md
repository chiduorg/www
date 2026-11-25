---
id: space.benzene
title: 苯分子
titleEn: Benzene
dimension: length
category: 原子与分子
summary: 苯是平面六元环芳香分子，全部碳—碳键长约 1.40 埃；本页取对位碳原子间距约 2.80 埃作为分子环直径，不含范德华外缘。
quantity:
  value: 2.8e-10
  unit: m
  measure: 分子环直径
  approximate: true
displayValue: 约 0.28 nm（苯环对位碳间距）
related:
  - space.water-molecule
  - space.graphene
  - space.fullerene
  - space.crystal-lattice
  - space.cholesterol
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: benzene
    url: 'https://www.britannica.com/science/benzene'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: CCCBDB experimental data for benzene — CAS 71-43-2
    url: 'https://cccbdb.nist.gov/exp2x.asp?casno=71432&charge=0'
    publisher: NIST / Computational Chemistry Comparison and Benchmark Database
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  采用中性气相苯分子的平面正六边形几何；量的是两个对位碳原子核之间的距离，由 Britannica 给出的 1.40 埃碳—碳键长按正六边形几何换算为
  2.80 埃。该值不含氢原子、电子云外缘或范德华半径，也不是液态苯的分子间距离。
uncertainty: >-
  1.40 埃是 Britannica 给出的实验键长概数；正六边形换算把对位碳间距取为键长的两倍，得到约 2.80
  埃。分子振动、取代基与凝聚态环境会改变“大小”的取值，误差主要来自定义而非单一测量精度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮新建条目；用 WebFetch 打开 Britannica 苯页，核对平面结构、全部碳—碳键长约 1.40 埃与 120 度键角。
    - 用 WebFetch 打开 NIST CCCBDB 苯实验数据页，核对分子式 C6H6 与 D6h 平面构型。
    - 对位碳间距由正六边形几何按 2×1.40 埃换算，并在正文说明这不是范德华直径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "molecule"
  variant: "benzene"
  scene: "space.object"
  caption: "苯分子 · 对位碳间距约 0.28 nm"
  note: "碳氢原子球、键线与颜色为示意；标线表示对位碳核间距，不是范德华外缘；非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
---
## 它是什么

苯是一种平面芳香烃，分子式 C₆H₆，六个碳原子组成正六边形环，每个碳上连一个氢原子。[2] 环内碳—碳键不是交替的单键和双键，而是长度相等、电子离域的芳香键。[1] 本页用约 2.80 埃作为分子环直径，指的是两个对位碳原子核之间的距离，而不是整个分子电子云的外缘。

## 怎样知道

苯的结构来自光谱、衍射与化学证据的综合。Britannica 指出苯是平面分子，六个碳—碳键长度相等，约 1.40 埃，键角为 120 度；这种介于单键与双键之间的键长支持电子离域模型。[1] NIST CCCBDB 的实验数据页列出苯的分子式、D6h 点群与平面构型，与其规则六边形骨架一致。[2] 这些资料给的是键长与对称性，不是用分子图像估读的“直径”。

## 数值与口径

1.40 埃等于 0.140 纳米。正六边形中，两个对位碳原子相隔两条键的投影，距离等于键长的两倍，即约 2.80 埃，也就是 0.280 纳米。[1] 这个数只描述碳骨架的环直径；若把氢原子和电子云算进去，分子外形会更大，范德华直径通常也不同。[1][2] 因此本页把 quantity 标为近似值，并明确写成“对位碳间距”。

## 常见误解

常见误解之一是把 0.28 纳米当成苯分子的范德华直径；它只是碳环的对位核间距，不含氢原子与外层电子云。[1] 另一个误解是把苯画成单双键交替的固定结构；实验显示所有碳—碳键等长，电子在环上离域。[1][2] 还有人把苯环的碳骨架尺寸与液态苯中分子间的堆积距离混为一谈；后者受温度和聚集状态影响。

## 与其他尺度的关系

把 0.28 纳米放回尺度轴，苯环比水分子核间距大一些，却仍比蛋白质和细胞小得多。[1] 它与石墨烯、富勒烯共享 sp² 碳骨架，但苯是单个小分子，石墨烯是扩展的单层碳网络。[2] 继续阅读水分子、石墨烯与晶格间距，可比较小分子、二维材料与晶体中“原子间距”的不同口径。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]
