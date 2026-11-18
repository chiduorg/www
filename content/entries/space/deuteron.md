---
id: space.deuteron
title: 氘核
titleEn: Deuteron
dimension: length
category: 量子与粒子
summary: 氘核由一个质子和一个中子束缚而成，本页采用 2022 CODATA 的均方根电荷半径 2.12778 飞米，作为核半径口径；它不是氘核的硬球直径。
quantity:
  value: 2.12778e-15
  unit: m
  measure: 核半径
  approximate: true
displayValue: 2.12778 fm（均方根电荷半径）
related:
  - space.proton
  - space.neutron
  - space.alpha-particle
  - space.atomic-nucleus
  - space.strong-force
reviewStatus: reviewed
sources:
  - title: 'CODATA Value: deuteron rms charge radius'
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?rd'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: deuteron
    url: 'https://www.britannica.com/science/deuteron'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: >-
  2022 CODATA
  推荐的氘核均方根电荷半径，适用于氘核基态；数值描述电荷分布的整体宽度，不是核子的可见边界。它不直接等于质子与中子各自半径的简单相加，也不适用于激发态或其他同位素。
uncertainty: >-
  CODATA 给出的标准不确定度为 0.00027 飞米，相对不确定度约
  1.3×10⁻⁴；“半径”取决于用电荷分布还是物质分布定义，不同定义会得到不同数值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮新建条目；用 WebFetch 打开 NIST CODATA 氘核均方根电荷半径页，核对数值与不确定度。
    - 用 Britannica 氘核页核对“一个质子加一个中子”的组成及形成方式。
    - 明确这是电荷半径而非硬球直径，并提示不同半径定义会给出不同数值。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "nucleus"
  scene: "space.object"
  caption: "氘核 · 2.13 fm 电荷半径参照"
  note: "质子与中子点云、颜色和连线为示意；标线表示均方根电荷半径，不是硬球直径；非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
  - 原子核
---
## 它是什么

氘核是氘原子被剥去电子后剩下的原子核，由一个质子和一个中子束缚在一起。[2] 它不是两个独立核子简单并排的小球，而是一个由核力维系的束缚态；本页用 2.12778 飞米作为它在尺度轴上的比较长度，这个数描述的是电荷分布的均方根半径。[1]

## 怎样知道

氘核半径来自电子散射、缪子谱等实验，再结合核模型从形状因子中提取。[1] 2022 CODATA 给出的氘核均方根电荷半径为 2.12778 飞米，标准不确定度 0.00027 飞米。[1] Britannica 说明氘核可由电离氘原子或质子俘获慢中子形成，并作为核反应中的轰击粒子使用。[2] 这些实验测的是电荷分布对探针的影响，不是用尺子量一个球的外径。

## 数值与口径

2.12778 飞米等于 2.12778×10⁻¹⁵ 米。它比质子的均方根电荷半径大约 2.5 倍，但这一比较只在“电荷半径”口径下成立。[1] 氘核的电荷分布还包含质子与中子的相对运动，因此不能把 2.12778 飞米拆成两个核子半径相加，也不能把它乘以二称为“氘核直径”。[1][2] 若引用物质半径，数值会与电荷半径不同。

## 常见误解

把 2.13 飞米当成氘核的硬球直径，是最常见的口径错误；它是半径，而且描述的是电荷分布。[1] 另一个误解是认为氘核等于质子加中子，所以半径也应等于两者半径之和；束缚态的内部运动与波函数重叠使这种相加没有定义。[2] 还有人把氘核与氘原子混为一谈；氘原子还包括一个电子，尺度在埃的量级，远大于氘核。

## 与其他尺度的关系

在核子与原子核之间，氘核是结构最简单的复合核：它比单个核子大，却比 α 粒子和典型原子核小。[1][2] 把 2.13 飞米与 1 飞米量级的核子、几飞米到十几飞米的原子核放在同一条轴上，可以直观看到“核子组成核”时尺度只增加数倍，而原子整体却比核大四个数量级以上。继续阅读质子、中子和 α 粒子，可比较不同核系统的半径口径。
