---
id: space.quark
title: 夸克（基本粒子）
titleEn: Quarks & Electrons
dimension: length
category: 量子与粒子
summary: 夸克是标准模型中的基本物质粒子，共有六种味并带色荷。实验能约束其内部结构的尺度上限，但夸克没有被测到过经典直径；质量数值还依赖重整化方案与能标。
quantity:
  value: null
  unit: m
  measure: 夸克实体直径尚未定义为本页可比较量
  approximate: true
  status: undetermined
displayValue: 比较直径未定（不采用旧硬球尺寸）
related:
  - space.proton
  - space.gluon-field
  - space.top-quark
  - space.strong-force
  - time.present
  - temperature.room-temperature
reviewStatus: reviewed
sources:
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-06'
  - title: PDG 2025 — Quark Summary
    url: 'https://pdg.lbl.gov/2025/tables/rpp2025-sum-quarks.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: quark
    url: 'https://www.britannica.com/science/quark'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: quark
  icon: ●
  relatedLabels: 量子色动力学、胶子、色荷、渐近自由、色禁闭、夸克-胶子等离子体、深度非弹性散射、标准模型
conditions: 本条不把散射分辨率上限当作夸克直径；质量数值依赖方案与能标，跨条目比较时必须统一重整化口径。
uncertainty: 夸克无测得半径，只有散射给出的上限；u、d、s质量为2 GeV处MS质量，c、b为自身质量处MS质量，t由事件运动学提取，彼此不能直接互换误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch核对CERN标准模型、PDG夸克汇总表与Britannica夸克页面。
    - 保留“无经典直径”的定位，并注明各味质量的重整化方案差异。
  originalQuantity:
    value: 1.e-18
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: field
  variant: quarks
  color: '#d08a72'
  referenceAxis: x
  caption: 强子内部夸克组份的理论示意
  note: 色点与连线为示意，非按比例，非观测重建；不代表夸克的实体大小或颜色。
  framePadding: 0.3
  sourceMeasure: 散射与喷注给出的组份尺度参照
  scene: space.object
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
  - 未定量值
---
## 夸克是什么

夸克是标准模型中的基本物质粒子，共有六种“味”：上、下、粲、奇、顶、底，分为三代，每代包含一个上型和一个下型夸克。它们带色荷，通过强作用结合成强子；质子与中子都由夸克组合而成。[1][3]

## 怎样研究它们

夸克不能单独存在，实验只能从高能碰撞产物的方向、能量与种类反推强子内部组成。标准模型要求夸克只以无色组合出现，因此探测器记录到的往往是末态强子与喷注，而不是单个自由夸克。[1] “分辨出更小结构”与“测到夸克直径”是两件事：前者是探针分辨率，后者需要明确的形状量。[1][3]

## 数值与口径

PDG 2025 给出的质量是方案相关的：u、d、s 为 2 GeV 处的 MS 质量，分别约 2.16、4.70、93.5 MeV；c、b 约 1.273 与 4.183 GeV；顶夸克由事件运动学给出 172.56 GeV。[2] 这些数值不能直接换算成“半径”，因为质量与长度不是同一口径。[2][3]

## 常见误解

误解之一是把不同夸克的质量差当成大小差；顶夸克质量约为上夸克的八万倍，但没有证据表明它的“直径”也大八万倍。[2][3] 误解之二是把实验给出的分辨率上限当成测得的直径；上限只说明“小于某个尺度仍看不见结构”。[1][2] 另一种误解是把“色荷”当成真实颜色；它只是强作用荷的名称，与可见光无关，也不能用来判断夸克“看起来是什么样”。[1][3]

## 与其他尺度的关系

夸克被束缚在约 1 飞米的强子内，因此谈论“夸克尺寸”必须说明是自由夸克、组分还是相互作用尺度。[1] 与胶子、质子条目并读，可以区分基本成分、传递相互作用的场与复合粒子这三层概念。六种夸克的质量跨越约五个数量级，说明“味”不是按大小排序，而是按代与质量层级排列。
