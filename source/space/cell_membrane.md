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
  - space.synaptic-cleft
  - space.mitochondria
  - space.chloroplast
  - temperature.human-body-temperature
  - mass.human-cell
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
  - title: "Cell"
    url: "https://www.britannica.com/science/cell-biology"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
  - title: "Neuroscience Online: Organization of Cell Types, §8.8"
    url: "https://nba.uth.tmc.edu/neuroscience/m/s1/chapter08.html"
    publisher: "UTHealth Houston / McGovern Medical School"
    accessed: '2026-11-24'
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

## 膜厚度与膜面积不是一回事

细胞膜厚约 3–5 纳米，但一个细胞的膜面积可以很大：微绒毛、褶皱和突起让同一层膜覆盖更多表面。[1] 厚度描述脂质双层的横向尺度，面积描述界面的大小；两者不能互相换算。膜蛋白还会从膜的一侧伸出数纳米，改变“可见厚度”。

## 流动镶嵌不是静态三明治

脂质分子能在膜平面内扩散，蛋白质也能移动、聚集或内吞；膜的整体形状还会随细胞状态改变。[2] 冷冻断裂、X 射线和中子散射看到的“厚度”依赖样品制备与界面定义。把膜画成固定厚度的墙，会漏掉它的流动性和选择性。

## 五轴对照

在空间轴，膜厚约 5 纳米；在质量轴，膜上的脂质与蛋白只占细胞质量的一小部分；在温度轴，温度改变膜的流动性与相变；在时间轴，膜结构随细胞演化与发育变化。厚度只是膜的一个参数，不是细胞的边界尺寸。[1][2]

## 膜厚是干态还是活态

细胞膜厚约 4–5 纳米，这个数多来自电镜横截面：样品经过固定、脱水、染色，膜蛋白与脂质的水化层被去掉。活细胞膜含水、可弯曲，厚度会随张力、温度和胆固醇含量变化。把电镜下的“干膜厚度”当成活细胞的实际厚度，会忽略几个埃的水化层与动态起伏。[1][S2]

## 读数的口径与换算

本条采用的量是 约 5 nm（膜厚度参考），口径是 生物膜厚度概览中的5 nm参照。空间轴上的长度还要区分半径、直径、距离与投影跨度；同一对象在不同参考面下会给出不同数值。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [3]（Encyclopaedia Britannica）、[4]（UTHealth Houston / McGovern Medical School） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
