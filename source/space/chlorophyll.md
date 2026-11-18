---
id: space.chlorophyll
title: 叶绿素分子
titleEn: Chlorophyll Molecule
dimension: length
category: 原子与分子
summary: >-
  叶绿素a是含镁的吸光色素，分子式C₅₅H₇₂MgN₄O₅。它的空间“大小”取决于选取的结构、构象和测量端点，本页因此不设统一长度，而是解释结构、测量依据与尺度层级。
quantity:
  value: null
  unit: m
  measure: 原站1.5 nm参考值，分子端点和构象尚待核定
  approximate: true
  status: undetermined
displayValue: 比较长度未定（待明确样本与尺寸定义）
related:
  - space.chloroplast
  - space.protein
  - space.water-molecule
  - time.oxygenic-photosynthesis
reviewStatus: reviewed
sources:
  - title: Chemical Component CLA — Chlorophyll A
    url: 'https://www.rcsb.org/ligand/CLA'
    publisher: RCSB Protein Data Bank
    accessed: '2026-11-06'
  - title: 'Molecule of the Month: Photosystem II'
    url: 'https://pdb101.rcsb.org/motm/59'
    publisher: RCSB Protein Data Bank / David Goodsell
    accessed: '2026-11-06'
  - title: NIST Chemistry WebBook — Chlorophyll a
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C42617163&Units=CAL'
    publisher: NIST Standard Reference Database 69
    accessed: '2026-11-06'
legacy:
  id: chlorophyll
  icon: "\U0001F33F"
  relatedLabels: 光合作用、水分子、DNA、蛋白质分子、蓝藻、大氧化事件
conditions: 指叶绿素a这一具体色素分子，不指叶绿素b、细菌叶绿素或整个光系统；尚无统一测量端点，旧1.5 nm只保留为修订证据，不参与排序、比例或场景尺寸映射。
uncertainty: 本条不设统一长度；若选取不同构象、侧链端点或外包络，分子跨度会在约1–2纳米的量级内变化，而权威结构记录并未给出一个可直接引用的“直径”。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch打开RCSB CLA、PDB-101光系统II与NIST WebBook，核对分子式、结构角色与吸光机制。
    - 保留undetermined量值，不把旧1.5 nm写成已核实直径；来源只支持结构识别与功能说明，不支持统一跨度。
  originalQuantity:
    value: 1.5e-9
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: chlorophyll
  color: '#6f9d6a'
  referenceAxis: x
  caption: 叶绿素a的示意结构，不设统一比较长度
  note: 环状结构与侧链比例仅作概念示意；图中未按真实构象或原子半径绘制比较标线，不能据此读出分子直径；图为示意，非按比例，非观测重建。
  framePadding: 0.33
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 未定量值
---
## 它是什么

叶绿素a是一类参与吸收光能的含镁色素，化学组成为 C₅₅H₇₂MgN₄O₅。它有一个围绕镁离子的近似平面环状骨架，并带有一条较长的疏水侧链；在植物和蓝藻的光系统中，它被蛋白质固定在不同位置，承担捕光和传递能量的角色。[1][2] 它不是一颗内部均匀的绿色小球，也不是单一原子。

## 怎样知道

结构信息来自化学组分记录与蛋白质结构数据库。RCSB 的 CLA 记录列出叶绿素a的分子式、原子数、键数和分子量，并把它作为光系统结构中的非聚合物组分；PDB-101 的光系统II文章则解释这些色素如何排列在蛋白复合体中并完成能量传递。[1][2] NIST 的 WebBook 同样给出相同分子式与分子量，可用于核对化学身份。[3]

## 数值与口径

本页不给出统一长度，因为“叶绿素有多大”至少要选定三件事：哪一种叶绿素、哪一个构象、测量到哪个端点。环状部分的横宽、包含长侧链的最大跨度，以及按原子球半径画出的外包络，会得到不同的数。[1][2] 旧条目的 1.5 纳米没有说明这些条件，所以只作为修订证据保留在记录中，不用于比较。

## 常见误解

常见误解是把分子式或分子量直接换算成一条长度。分子式只说明原子种类与数量，分子量只说明质量，二者都不给出空间跨度。另一个误解是把示意图里的球棍比例当作真实尺寸；球棍图的原子球半径和键粗细是表达约定，不是测量结果。[1][2]

## 与其他尺度的关系

若把叶绿素放进本站尺度轴，它处在小分子与蛋白质之间：比水分子大一个数量级，却远小于叶绿体这类细胞器。[2][3] 它也不能与整个光系统等同，后者由多种蛋白质、色素和辅因子组成，尺度达到数十纳米。继续阅读叶绿体与蛋白质条目，可以把“单个色素”“蛋白复合体”“细胞器”三个层级分开。
