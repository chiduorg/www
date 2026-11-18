---
id: space.nucleotide
title: 核苷酸
titleEn: Nucleotide
dimension: length
category: 原子与分子
summary: 核苷酸由碱基、糖和磷酸组成；本页取 B-DNA 中每个核苷酸沿螺旋轴的平均上升高度约 0.34 纳米作为分子长度口径，并说明它不是游离核苷酸的最长外形。
quantity:
  value: 3.4e-10
  unit: m
  measure: 分子长度
  approximate: true
displayValue: 约 0.34 nm（B-DNA 中每个核苷酸的轴向上升）
related:
  - space.dna
  - space.trna
  - space.amino-acid
  - space.glucose
reviewStatus: reviewed
sources:
  - title: 'Biochemistry, DNA Structure — StatPearls'
    url: 'https://www.ncbi.nlm.nih.gov/sites/books/NBK538241/'
    publisher: NCBI Bookshelf / StatPearls
    accessed: '2026-11-06'
  - title: nucleotide
    url: 'https://www.britannica.com/science/nucleotide'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: >-
  采用 B-DNA 双螺旋中碱基沿轴的平均间距 0.34
  纳米，作为“每个核苷酸重复单元沿链轴的长度”；该值描述聚合物中的轴向上升，不是游离核苷酸分子从碱基到磷酸末端的最长尺寸。适用于常规 B-DNA，不适用于单链
  RNA 或显著变形的 DNA。
uncertainty: >-
  0.34 纳米是 B-DNA
  的平均轴向上升，局部序列、螺旋变形与测量方法会带来小幅变化；游离核苷酸的最长外形通常大于该值。由于“分子长度”在这里被解释为聚合物重复单元长度，故保留
  needs-review。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮新建条目；用 WebFetch 打开 NCBI Bookshelf《Biochemistry, DNA Structure》，核对碱基沿轴间距
      0.34 纳米、每圈约 10 个碱基对、螺距 3.4 纳米与螺旋直径约 1.9 纳米。
    - 用 WebFetch 打开 Britannica 核苷酸页，核对碱基—糖—磷酸的组成及 AMP、ATP 等例子。
    - 正文明确 0.34 纳米是 B-DNA 中的轴向重复长度，不是游离核苷酸的最长外形，故保留 needs-review。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: nucleotide
  scene: space.object
  caption: 核苷酸 · B-DNA 中约 0.34 nm 轴向上升
  note: 碱基、糖与磷酸的排布为示意；标线表示沿螺旋轴的重复间距，不是游离分子最长尺寸；非按比例，非观测重建。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
---
## 它是什么

核苷酸是核酸的基本单元，由含氮碱基、五碳糖和磷酸基团组成。[2] 多个核苷酸通过磷酸二酯键连成 DNA 或 RNA 链。本页用约 0.34 纳米作为“分子长度”，量的是 B-DNA 双螺旋中每个核苷酸重复单元沿螺旋轴的平均上升高度，而不是一个游离核苷酸从碱基到磷酸末端的最长外形。

## 怎样知道

DNA 结构的经典模型来自 X 射线衍射与化学分析。NCBI 的 StatPearls 条目指出，碱基沿螺旋轴规则排列，间距约 0.34 纳米；每圈约十个碱基对，螺距约 3.4 纳米；双螺旋直径约 1.9 纳米。[1] Britannica 说明核苷酸由碱基、糖和磷酸三部分组成，并给出 AMP、ATP 等实例。[2] 这些资料支持“重复单元沿轴 0.34 纳米”，但并不直接给出游离核苷酸分子的最大长度。

## 数值与口径

0.34 纳米等于 3.4 埃。它描述的是聚合物链上的重复间距，因此同一碱基对在螺旋中的位置会决定这个数的含义；它不是把单个核苷酸拉直后从一端量到另一端。[1] 游离核苷酸包含碱基、糖和磷酸，最长方向通常超过 0.34 纳米；两者不能互换。[1][2] 本页把 quantity 标为近似值，并在 conditions 中说明这是 B-DNA 的轴向口径。

## 常见误解

常见误解之一是把 0.34 纳米当成游离核苷酸分子的长度；它只是 DNA 链上的轴向上升。[1] 另一个误解是把 0.34 纳米与碱基对宽度或双螺旋直径混为一谈；后者约 1.9 纳米，是完全不同的方向。[1] 还有人把 DNA 的每圈 3.4 纳米误写成每个核苷酸 3.4 纳米，差了十倍。

## 与其他尺度的关系

0.34 纳米处在小分子与生物大分子之间，与氨基酸、葡萄糖的尺寸同一量级。[1][2] 当核苷酸聚合成 DNA 时，轴向长度按碱基对数目线性增加，但双螺旋直径仍保持在纳米量级。继续阅读 DNA、tRNA、氨基酸与葡萄糖，可比较单体尺寸与聚合物尺度。
