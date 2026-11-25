---
id: space.amino-acid
title: 氨基酸
titleEn: Amino Acid
dimension: length
category: 原子与分子
summary: 氨基酸由一个氨基、一个羧基和一个侧链连在同一个 α-碳上；本页取丙氨酸线性伸展长度约 5.5 埃作为分子长度代表值，侧链更小或更大的氨基酸会偏离此值。
quantity:
  value: 5.5e-10
  unit: m
  measure: 分子长度
  approximate: true
displayValue: 约 0.55 nm（丙氨酸线性伸展长度）
related:
  - space.protein
  - space.glucose
  - space.nucleotide
  - space.water-molecule
  - time.first-stars
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: >-
      BioNumbers: size of amino acid molecule estimated from bond length and
      bond angle (BNID 106983)
    url: >-
      https://bionumbers.hms.harvard.edu/files/Size%20of%20amino%20acid%20molecule%20estimated%20based%20on%20bond%20length%20and%20bond%20angle.pdf
    publisher: 'Harvard BioNumbers / Ching, Hidajat & Uddin'
    accessed: '2026-11-06'
  - title: amino acid
    url: 'https://www.britannica.com/science/amino-acid'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  采用丙氨酸（alanine）在线性伸展、不考虑卷曲与侧链折叠时的估算长度 5.5 埃；同表给出甘氨酸 3.9 埃、色氨酸 10.9
  埃。该值描述孤立分子的最大伸展方向，不是蛋白质中氨基酸残基的间距，也不是水合分子的流体力学尺寸。
uncertainty: >-
  表值由键长与键角估算，假设分子线性伸展，未考虑卷曲；原文明确说这只提供一般量级，不能用于精确扩散特性。不同氨基酸长度从 3.9 到 11.3
  埃不等，因此“氨基酸”没有单一长度，本页取丙氨酸作代表值并保留 needs-review。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮新建条目；用 WebFetch 打开 BioNumbers 链接的 PDF，核对表 2 中丙氨酸 5.5 埃、甘氨酸 3.9 埃、色氨酸
      10.9 埃等长度及线性伸展假设。
    - 用 WebFetch 打开 Britannica 氨基酸页，核对氨基、羧基、α-碳与侧链的共同结构。
    - 因 20 种常见氨基酸长度差异明显，本页只取丙氨酸代表值，故保留 needs-review。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: amino-acid
  scene: space.object
  caption: 氨基酸 · 约 0.55 nm 代表长度
  note: 原子球、侧链与键线为示意；标线表示线性伸展长度，不是蛋白质残基间距；非按比例，非观测重建。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
---
## 它是什么

氨基酸是一类有机分子，共同特征是同一个中心碳上连着氨基、羧基和一个独特的侧链，这个中心碳称为 α-碳。[2] 不同氨基酸的差别主要在侧链，因此它们的整体尺寸并不相同。本页用约 0.55 纳米作为代表长度，取自丙氨酸线性伸展时的估算值，而不是宣称所有氨基酸都这么大。

## 怎样知道

这些长度来自对键长与键角的几何估算。BioNumbers 收录的表 2 按线性伸展模型计算，丙氨酸长 5.5 埃、宽 3.3 埃；甘氨酸长 3.9 埃；色氨酸长 10.9 埃；赖氨酸可达 11.3 埃。[1] 原文提醒，这种估算没有考虑卷曲，只适合提供一般量级。[1] Britannica 说明氨基酸的共同结构：氨基、羧基与侧链都连在 α-碳上。[2] 两者结合，可以解释为什么“氨基酸大小”必须带上是哪一种。

## 数值与口径

5.5 埃等于 0.55 纳米。它描述丙氨酸从一端到另一端的最大伸展，而不是蛋白质链中相邻残基的间距。[1] 甘氨酸更小，色氨酸和赖氨酸更大；若取所有常见氨基酸的中间值，会得到另一个数，但那不是本页的口径。[1] 水合、带电状态与侧链构象也会改变有效尺寸，因此本页把 quantity 标为近似值。

## 常见误解

常见误解之一是以为所有氨基酸都一样大；表 2 中长度从 3.9 到 11.3 埃不等，差别明显。[1] 另一个误解是把氨基酸的伸展长度当成蛋白质中残基的重复间距；多肽链折叠后，残基间的空间关系由主链构象决定，不是简单的分子长度。[2] 还有人把氨基酸与肽混为一谈；氨基酸是单体，肽由多个氨基酸通过肽键连接。

## 与其他尺度的关系

0.55 纳米使氨基酸落在小分子区间：比水分子大，与葡萄糖、核苷酸同处一纳米上下，却远小于折叠蛋白质。[1][2] 当许多氨基酸连成多肽时，分子量线性增加，但三维尺寸受折叠控制，不能按单体长度简单相乘。继续阅读蛋白质、葡萄糖与核苷酸，可比较生物单体的尺寸与聚合后的尺度。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]
