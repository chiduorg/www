---
id: space.cell_membrane
title: 细胞膜厚度
titleEn: Cell Membrane Thickness
dimension: length
category: 生命与人体
summary: 细胞膜是由磷脂双分子层和蛋白质组成的薄膜，厚度约3–5纳米；本页取5纳米作比较参照，说明它与细胞直径、膜蛋白和流动镶嵌模型的关系。
quantity:
  value: 5.e-9
  unit: m
  measure: 生物膜厚度概览中的5 nm参照
  approximate: true
displayValue: 约 5 nm（膜厚度参考）
related:
  - space.cell
  - space.dna
  - space.synaptic-cleft
  - space.mitochondria
  - space.chloroplast
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: >-
      Collective Dynamics in Model Biological Membranes Measured by Neutron Spin
      Echo Spectroscopy
    url: >-
      https://www.nist.gov/publications/collective-dynamics-model-biological-membranes-measured-neutron-spin-echo-spectroscopy
    publisher: NIST / M. Nagao
    accessed: '2026-11-04'
  - title: 'Biology 2e, §5.1 Components and Structure'
    url: 'https://openstax.org/books/biology-2e/pages/5-1-components-and-structure'
    publisher: OpenStax / Rice University
    accessed: '2026-11-06'
legacy:
  id: cell_membrane
  icon: "\U0001F9EC"
  relatedLabels: 脂质双分子层、流动镶嵌模型、膜蛋白、细胞、突触间隙、线粒体、叶绿体
conditions: 不同膜组成、结构和测量定义可给出不同厚度；不是所有细胞膜统一常数。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 全文重新撰写，移除未经逐条核实的旧断言。
    - 本轮已直接读取所列primary正文的相关数字或定义。
    - 第七轮深化：补充磷脂双分子层、流动镶嵌模型、厚度定义与测量差异；新增 OpenStax 膜结构来源；量值、图景与审核状态保持不变。
  originalQuantity:
    value: 7.e-9
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: membrane
  variant: bilayer
  color: '#9cbbb0'
  referenceAxis: 'y'
  caption: 膜两侧外表面之间的厚度
  note: 图中的参考标线表示两侧磷脂头基之间的间距；头尾比例、分子数量和局部范围为示意。
  framePadding: 0.32
  sourceMeasure: 生物膜厚度概览中的5 nm参照
  scene: space.object
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 微观
---
## 细胞膜是什么

细胞膜是包在细胞外的一层薄膜，主要由磷脂双分子层和嵌入其中的蛋白质组成，外侧还可能带糖脂和糖蛋白。磷脂的亲水头朝外、疏水尾朝内，形成约几纳米厚的双层；蛋白质可以跨膜、附着在表面或部分嵌入。[1][2] 它既把细胞内容物与外界隔开，又允许物质选择性通过。

## 厚度与测量

NIST的中子自旋回波研究把模型生物膜的厚度概括在约3–5纳米范围；本页取5纳米作为比较参照。[1] 这里的“厚度”指膜两侧界面之间的距离，不是整个细胞的直径，也不是膜蛋白伸出胞外部分的总高度。不同脂质组成、温度、水合状态和测量定义都会改变读数；冷冻电镜、X射线和中子散射给出的“厚度”也可能对应不同的界面定义。

## 为什么不是一堵墙

细胞膜是流动的：脂质分子可以在膜平面内移动，蛋白质也能扩散或聚集，这就是“流动镶嵌模型”的基本图景。[2] 膜的选择透过性来自脂质层的疏水屏障、通道蛋白、载体蛋白和泵，而不是一层坚硬的壳。膜还会弯曲、出芽、融合，参与运输和信号传递。

## 常见误解

“细胞膜厚度5纳米”不等于所有膜、所有位置都一样厚；它是概览值。“膜就是脂质”也不对：蛋白质、糖链和胆固醇等成分会影响膜的力学与功能。[2] 另外，膜厚度与膜面积不是一回事：细胞可以通过褶皱或突起增加交换面积，而不必把膜本身变厚。

## 与其他尺度的关系

5纳米只有典型细胞直径（约20微米）的四千分之一，也远小于线粒体（约2微米）和细菌（约1微米）。[1] 这条尺度提醒我们：细胞膜是一层分子级结构，但它在细胞尺度上承担了边界、运输和信号三种角色。
