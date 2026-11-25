---
id: space.neuron
title: 神经元
titleEn: Neuron
dimension: length
category: 生命与人体
summary: 神经系统的基本细胞，典型胞体直径约 20 微米，但不同神经元可从数微米到数十微米。
quantity:
  value: 0.00002
  unit: m
  measure: 神经元胞体（soma）的直径，所引讲义记典型约 20 μm；组织学资料给出 6–80 μm 范围
  approximate: true
displayValue: 约 20 μm
related:
  - space.cell
  - space.cell_membrane
  - space.synaptic-cleft
  - mass.neuron
  - mass.human-brain
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: Characteristics of the Neuron
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK28209/'
    publisher: Basic Neurochemistry / NCBI Bookshelf
    accessed: '2026-11-06'
  - title: Cells of the nervous system (Chapter 2 slides)
    url: >-
      https://labs.la.utexas.edu/gonzalez-lima/files/2016/03/Chapter-2-slides-2.pdf
    publisher: University of Texas at Austin
    accessed: '2026-11-06'
  - title: "Biology 2e, §4.2 Prokaryotic Cells"
    url: "https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells"
    publisher: "OpenStax / Rice University"
    accessed: '2026-11-24'
  - title: "Cell"
    url: "https://www.britannica.com/science/cell-biology"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
conditions: 组织切片经固定、染色后在光学显微镜下测量胞体轮廓；切片厚度、细胞类型、固定收缩与切面角度都会影响读数。
uncertainty: >-
  20 μm 是“典型神经元”的教材代表值；小脑颗粒细胞胞体约 6–8 μm，浦肯野细胞和前角细胞可达 60–80 μm，因此 20 μm
  不能代表所有神经元。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 已打开 NCBI 神经化学章节与 UT Austin 神经科学讲义。
    - 采用典型胞体约 20 μm，并用 6–80 μm 范围说明类型差异。
    - 神经元突起长度远超胞体，保留 needs-review 等待口径统一。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  scene: space.object
  caption: 带树突和轴突的神经元胞体与红细胞、胶质细胞的尺度对比
  note: 示意/非按比例/非观测重建，仅用于尺度直观参照。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 细胞与微粒
---
## 它是什么

神经元是神经系统的基本功能细胞，由胞体、树突和轴突组成。胞体含有细胞核和多数细胞器，树突接收输入，轴突把电信号传向远端突触[1]。它属于高度极化的细胞：胞体直径只有几十微米，但轴突可以长达数十厘米，因此“神经元大小”必须说明测的是胞体、突起长度，还是整个细胞[2]。神经元通常不再分裂，损伤后的再生能力有限。

## 怎样知道

胞体直径多在固定、染色的组织切片上测量，常用的尼氏染色或免疫染色能勾勒胞体轮廓[1]。切片厚度、切面是否穿过胞体中心、固定造成的收缩都会影响读数；同一个细胞在不同切面可能呈现不同直径。更精细的研究用共聚焦显微镜或电子显微镜重建三维轮廓，并分别统计不同核团、不同细胞类型的胞体尺寸[2]。

## 数值与口径

所引讲义把“典型神经元”的胞体直径记为约 20 μm[2]；组织学资料则给出从小脑颗粒细胞约 6–8 μm，到浦肯野细胞和前角细胞约 60–80 μm 的范围[1]。本条目采用 20 μm 作为入门参照，口径是胞体直径，不含树突和轴突。它是代表值，不是所有神经元的定值；感觉、运动、中间神经元以及不同脑区的细胞差异很大。

## 常见误解

“神经元都很大”是常见误解：小脑颗粒细胞只有几微米，比红细胞还小；真正“巨大”的是浦肯野细胞或前角细胞，而且它们的突起长度更惊人[1]。另一个误区是把胞体大小当成整个神经元大小；一个 20 μm 的胞体可以伸出长达一米的轴突。还有人以为神经元尺寸固定不变，实际上发育、学习和病理状态都可能伴随胞体与突起的变化。

## 与其他尺度的关系

20 μm 约为红细胞直径的三倍，也接近中性粒细胞的上端[2]。它比卵细胞（约 120 μm）小六倍，却比酵母细胞（约 5 μm）大四倍。若只把胞体排成一行，五十个神经元才约一毫米；但若把轴突算入，单个神经元就能跨越整个脑区甚至更长的距离，这正是“胞体尺度”和“细胞尺度”需要分开讨论的原因。

## 胞体与突起是两种尺度

神经元的胞体直径约几十微米，但轴突可以长达数十厘米；把胞体大小当成整个神经元大小，会低估几个数量级。[1] 树突分支、轴突长度和髓鞘厚度都需要单独测量。所谓“神经元大小”，先要说明量的是胞体、突起还是整个细胞。

## 切片厚度会改变表观直径

组织切片是三维细胞的一个二维截面；切面是否穿过胞体中心、切片厚度和固定收缩都会影响读数。[1][2] 同一细胞在不同切面可能看起来更小或更大。共聚焦与电子显微镜的三维重建能减少这种偏差，但仍依赖染色与分割方法。

## 五轴对照

在空间轴，胞体约 20 微米，轴突可到厘米级；在质量轴，一个神经元约 1 纳克量级；在温度轴，体温影响酶与膜动力学；在时间轴，神经元发育与学习跨越一生。胞体、突起和整个细胞必须分开比较。[1][2]

## 胞体只是神经元的一部分

神经元胞体直径约 20 微米，但树突树和轴突可以延伸至毫米甚至厘米级。若只按胞体量尺寸，会把一个锥体细胞当成一个 20 微米的球；若把整条轴突算进去，长度又可达成百上千倍。正文的“神经元大小”通常指胞体，讨论网络连接时要换成突起长度与分支范围。[1][S1]

## 延伸核对

补充的来源 [3]（OpenStax / Rice University）、[4]（Encyclopaedia Britannica） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
