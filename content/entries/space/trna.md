---
id: space.trna
title: tRNA（苯丙氨酸转运RNA参照）
titleEn: Transfer RNA
dimension: length
category: 原子与分子
summary: 转运RNA是把遗传密码翻译成氨基酸的适配器；本页采用苯丙氨酸tRNA晶体结构的约8纳米最大外形尺度作参照，说明它的L形结构与翻译角色。
quantity:
  value: 8.e-9
  unit: m
  measure: 论文援引tRNAᴾʰᵉ晶体结构的近似最大外形尺度
  approximate: true
displayValue: 约 8 nm（tRNAᴾʰᵉ结构最大尺度参照）
related:
  - space.ribosome
  - space.dna
  - space.protein
  - space.bacteria
  - space.mitochondria
reviewStatus: reviewed
sources:
  - title: >-
      Solid-state nanopore sensing reveals conformational changes induced by a
      mutation in a neuron-specific tRNAArg — full text
    url: 'https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12834567/fullTextXML'
    publisher: Nucleic Acids Research authors / EMBL-EBI Europe PMC
    accessed: '2026-11-04'
  - title: 'Molecule of the Month: Transfer RNA'
    url: 'https://pdb101.rcsb.org/motm/15'
    publisher: RCSB Protein Data Bank / David Goodsell
    accessed: '2026-11-04'
legacy:
  id: trna
  icon: "\U0001F340"
  relatedLabels: DNA双螺旋、核糖体、蛋白质分子、mRNA、遗传密码、RNA世界假说
conditions: Nucleic Acids Research纳米孔研究援引的苯丙氨酸tRNA晶体结构约8 nm最大尺度；不是所有tRNA的统一长度。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 全文依据所列直接可读primary资料重新撰写，未沿用旧站正文。
    - 比较对象、样本与长度口径以本条条件为限，不推广为整个类别的统一尺寸。
    - 第七轮深化：补充tRNA的适配器角色、L形结构、反密码子与氨基酸端、修饰碱基及常见误解；量值、图景与审核状态保持不变。
  originalQuantity:
    value: 1.5e-8
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: trna
  color: '#a9c2ae'
  referenceAxis: diagonal
  caption: tRNA结构两端之间的最大尺度参照
  note: 对角标线两端相距图中的参考标线；L形、双链与节点比例仅作结构示意，非指定晶体原子坐标。
  framePadding: 0.31
  sourceMeasure: 论文援引tRNAᴾʰᵉ晶体结构的近似最大外形尺度
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 微观
---
## tRNA是什么

转运RNA是把遗传密码翻译成氨基酸的适配器：它的一端读取mRNA上的密码子，另一端携带对应的氨基酸。[1][2] tRNA分子折叠成L形，一端是反密码子臂，另一端是氨基酸接受臂；这种形状让它能在核糖体上同时接触mRNA和正在延伸的多肽链。

## 尺寸与测量

本页采用一篇纳米孔研究论文所援引的苯丙氨酸tRNA晶体结构参照：最大外形尺度约8纳米。[1] 这里的8纳米是结构外形的近似最大跨度，不是RNA单链展开后的长度，也不是纳米孔径的实测值。RCSB PDB展示的L形折叠、反密码子端和氨基酸端，说明tRNA的形状取决于序列、修饰和结合状态。[2] 不同tRNA的长度通常在70–90个核苷酸之间，具体数值应按序列和结构条目核对。

## 为什么形状重要

tRNA必须同时被核糖体和氨酰-tRNA合成酶识别；L形折叠把反密码子和氨基酸端分开，使它们在空间上各司其职。[2] 密码子与反密码子的配对、氨基酸的活化以及核糖体上的移位，共同保证遗传信息按顺序翻译。tRNA的修饰碱基也会影响配对和稳定性。[2]

## 常见误解

“tRNA就是一条短RNA”不完整：它有保守的二级、三级结构，不是随机线团。[2] “8纳米是tRNA的长度”也不准确：本页取的是晶体结构的最大外形跨度；展开的单链长度和不同构象会给出不同数值。[1] 另外，tRNA不是mRNA；mRNA携带密码序列，tRNA是解读密码并携带氨基酸的适配器。

## 与其他尺度的关系

8纳米的tRNA处在核酸与蛋白质机器的交界尺度：它比单个核苷酸大得多，却远小于核糖体和细胞。[1] 在翻译过程中，tRNA、mRNA和核糖体共同组成一个更大的复合体，尺度又上升一个层次。
