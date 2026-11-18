---
id: space.ribosome
title: 核糖体（讲座尺度参照）
titleEn: Ribosome
dimension: length
category: 生命与人体
summary: >-
  核糖体是由RNA和蛋白质组成、负责蛋白质合成的分子机器；本页采用Scripps
  Research讲座所示约100×200埃的外形尺度，取较长方向约20纳米作参照。
quantity:
  value: 2.e-8
  unit: m
  measure: Scripps研究讲座所示核糖体较长外形尺度
  approximate: true
  status: reference
displayValue: 约 20 nm（讲座所示10 × 20 nm外形参照）
related:
  - space.trna
  - space.protein
  - space.bacteria
  - space.cell
  - space.mitochondria
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: 'Understanding biological factories — Front Row lecture, PDF p.6'
    url: >-
      https://frontrow.scripps.edu/wp-content/uploads/2022/11/Williamson-front-row-lecture-slides-01182023.pdf
    publisher: Scripps Research / James R. Williamson
    accessed: '2026-11-04'
  - title: 'Molecule of the Month: Ribosome'
    url: 'https://pdb101.rcsb.org/motm/121'
    publisher: RCSB Protein Data Bank / David Goodsell
    accessed: '2026-11-04'
legacy:
  id: ribosome
  icon: "\U0001F3ED"
  relatedLabels: 蛋白质合成、mRNA、tRNA、翻译、抗生素、冷冻电镜、中心法则
conditions: Scripps研究讲座中的约100 × 200 Å示意外形，采用较长方向；未指定所有物种与功能状态的统一直径。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 全文依据所列直接可读primary资料重新撰写，未沿用旧站正文。
    - 比较对象、样本与长度口径以本条条件为限，不推广为整个类别的统一尺寸。
    - 展示值为明确说明的模型或自选参照，不作为总体平均值或实体硬边界。
    - 第七轮深化：补充核糖体组成、亚基、翻译功能、沉降系数与抗生素选择性；量值、图景与审核状态保持不变。
  originalQuantity:
    value: 2.5e-8
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: organelle
  variant: ribosome
  color: '#a0b4b2'
  referenceAxis: x
  caption: 讲座所示核糖体较长方向20 nm参照
  note: 大小亚基和RNA通道为结构示意，非指定PDB原子模型；参考方向是较长外形而非统一球径。
  framePadding: 0.31
  sourceMeasure: Scripps研究讲座所示核糖体较长外形尺度
  scene: space.object
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 微观
---
## 核糖体是什么

核糖体是细胞中合成蛋白质的分子机器：它读取信使RNA的密码，按顺序把氨基酸连接成多肽链。核糖体由大、小两个亚基组成，每个亚基都包含核糖体RNA和多种蛋白质。[1][2] 它没有膜结构，因此不属于膜性细胞器；原核细胞和真核细胞都有核糖体，但具体组成和沉降系数不同。[2]

## 尺寸与测量

本页采用Scripps Research讲座所示约100×200埃的外形尺度，取较长方向约20纳米。[1] 这不是统一球径，而是讲座对整体外形的概览。RCSB PDB说明不同生命类群的核糖体结构不同；70S、80S中的S表示沉降系数，不是纳米长度，也不能把大小亚基的数值简单相加。[2] 需要精确尺寸时，应指定物种、结构条目、组装状态和测量方向。

## 为什么是“机器”而不是“零件”

核糖体在蛋白质合成中发生构象变化，催化肽键形成；它把遗传信息、氨基酸活化和多肽链延伸连在一起。[1][2] 核糖体不是一次性消耗的酶，而是可以重复使用的复合体；多个核糖体还可以同时结合同一条mRNA，形成多聚核糖体。细菌的核糖体与真核细胞质核糖体在结构上有差异，这也是某些抗生素能选择性作用的基础。[2]

## 常见误解

“核糖体就是蛋白质”不对：它由RNA和蛋白质共同组成，催化核心主要依赖RNA。[2] “20纳米是所有核糖体的直径”也不对：本页只是取讲座概览的较长方向；不同物种、不同亚基和不同构象会给出不同外形。[1][2] 另外，沉降系数S不是长度单位，70S核糖体并不比80S核糖体“短10纳米”。

## 与其他尺度的关系

20纳米的核糖体比细菌（约1微米）小约五十倍，比典型细胞（20微米）小约一千倍；它却包含数十种蛋白质和长链RNA。[1] 核糖体、tRNA和蛋白质分子共同构成细胞内的分子机器层，位于细胞器与原子之间的尺度。
