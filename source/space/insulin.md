---
id: space.insulin
title: 胰岛素六聚体直径
titleEn: Insulin hexamer diameter
dimension: length
category: 原子与分子
summary: >-
  胰岛素六聚体近似球径约 5 nm，高约 3.5 nm；单个胰岛素单体约 2.5 nm，
  两者是不同层级的组装体，不能混用。
quantity:
  value: 5e-9
  unit: m
  measure: 六聚体近似球径
  approximate: true
displayValue: 约 5 nm（胰岛素六聚体直径）
related:
  - space.hemoglobin
  - space.antibody
  - space.amino-acid
  - space.dna
reviewStatus: reviewed
sources:
  - title: Ultra-Rapid Absorption of Recombinant Human Insulin
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3440144/'
    publisher: Journal of Diabetes Science and Technology / PubMed Central
    accessed: '2026-11-07'
  - title: "PPS '97 - Insulin"
    url: 'https://www.cryst.bbk.ac.uk/pps97/course/section11/insulin.html'
    publisher: Birkbeck College, University of London
    accessed: '2026-11-07'
conditions: >-
  取含锌胰岛素六聚体在溶液或晶体中的近似球形外形，量最大横向直径；
  高度约 3.5 nm，单体约 2.5 nm；不是单个氨基酸残基或肽链的长度。
uncertainty: >-
  动态光散射测得约 4.9 nm，晶体学给出 50 Å 直径，二者接近；不同组装状态与溶剂
  条件会改变流体力学直径，故取约 5 nm 并标为近似。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: insulin
  scene: space.object
  caption: 胰岛素六聚体 · 直径约 5 nm
  note: 六个单体与锌离子为示意排布；标线表示六聚体横向直径，不是高度 3.5 nm；非按比例，非观测重建。
  color: '#b7c9e2'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 蛋白质
---
## 它是什么

胰岛素是由 51 个氨基酸组成的小蛋白，两条肽链靠二硫键连接。[2] 在锌离子和适当条件下，六个胰岛素单体组装成六聚体；本页量的是六聚体的近似球径，单体尺寸另注，不能把两者混用。[1] 六个单体围绕三重轴排成环状，中心空腔可容纳两个锌离子，锌离子帮助稳定六聚体。

## 怎样知道

动态光散射测得市售胰岛素溶液中六聚体约 4.9 nm，单体约 2.3 nm；文献汇总给出的六聚体尺寸为 5×3.5 nm，单体为 2.5×2×3 nm。[1] 晶体学资料把六聚体描述为外径 50 Å、高 35 Å 的环状结构，两个锌离子位于中心空腔两侧。[2] 光散射给出流体力学直径，晶体学给出电子密度边界，两者定义不同但量级一致。

## 数值与口径

5 nm 等于 5×10⁻⁹ m、0.005 μm、50 Å。口径是六聚体的最大横向直径，不是它的高度 3.5 nm，也不是单个单体的长度。[1][2] 单体约 2.5 nm，只有六聚体的一半；二聚体介于两者之间。这个值是近似球径，不是精确的几何直径。六聚体高度 3.5 nm 与直径 5 nm 之比约 0.7，说明它更像扁环而不是完美球体。

## 常见误解

常见误解之一是把 5 nm 当成一个胰岛素分子的直径；生理条件下胰岛素可以单体、二聚体或六聚体存在。[1] 另一个误解是把六聚体的高度 3.5 nm 和直径 5 nm 对调；两者描述不同方向。[2] 还有人把溶液中的流体力学直径与晶体中的外形尺寸当成同一个测量。另一个容易忽略的混淆是把胰岛素原、C 肽等前体或片段也算进六聚体尺寸，它们并不参与同一组装。

## 与其他尺度的关系

5 nm 约为血红蛋白 6.4 nm 的 0.8 倍，约为抗体 10 nm 的一半。[1][2] 它比 DNA 直径 2 nm 大 2.5 倍，也比苯环大近 18 倍。继续阅读血红蛋白、抗体与氨基酸，可比较蛋白质寡聚体与单体的尺度。把 5 nm 与 2 nm 的 DNA、6.4 nm 的血红蛋白并排，可以看到小蛋白寡聚体的典型区间。
