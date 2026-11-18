---
id: space.platelet
title: 血小板
titleEn: Platelet
dimension: length
category: 生命与人体
summary: 参与止血的无核细胞质碎片，典型直径约 2 微米，是血液中最小的细胞样成分。
quantity:
  value: 0.000002
  unit: m
  measure: 血涂片中血小板的最大直径，所引组织学资料记典型值约 2 μm
  approximate: true
displayValue: 约 2 μm
related:
  - space.white-blood-cell
  - space.red-blood-cell
  - space.capillary
  - space.cell
reviewStatus: reviewed
sources:
  - title: 'Histology, Platelets'
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK557800/'
    publisher: StatPearls / NCBI Bookshelf
    accessed: '2026-11-06'
  - title: platelet
    url: 'https://www.britannica.com/science/platelet'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: 抗凝血涂片经染色后在光学显微镜下测量；血小板易聚集、活化并改变形状，抗凝剂与制样时间会影响读数。
uncertainty: 2 μm 是静息血小板的典型直径；活化或聚集后形状变圆、伸出伪足，表观尺寸增大，不同个体与计数方法也可给出约 1.5–3 μm 的分布。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 已打开 NCBI 血小板组织学条目与 Britannica 血小板条目。
    - 采用典型约 2 μm 直径，并说明活化与聚集会改变表观尺寸。
    - 血小板尺寸分布较窄但受制样影响，保留 needs-review。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  scene: space.object
  caption: 圆盘状血小板与红细胞、中性粒细胞的尺度对比
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

血小板（platelet）不是完整的细胞，而是骨髓中巨核细胞成熟后脱落的细胞质碎片，没有细胞核，直径通常只有约 2 μm[1]。它主要参与止血和凝血：当血管受损时，血小板黏附到暴露的胶原上，被激活后聚集并释放颗粒内容物，为凝血因子提供表面，最终帮助形成血栓[2]。因此，它更像“可移动的止血工具包”，而不是能独立分裂的细胞。

## 怎样知道

最常用的方法是在抗凝血涂片上染色，于光学显微镜下观察并测量最大直径[1]。血小板在体外很容易活化，活化后从扁盘状变成球形并伸出伪足，表观尺寸会变大；涂片制备的厚度、抗凝剂种类和放置时间也会影响结果。研究层面还会用电子显微镜观察内部颗粒与开放管道系统，用流式细胞术统计体积分布，但这些方法给出的参数与显微镜直径不能直接互换。

## 数值与口径

所引组织学资料把血小板记为直径约 2 μm[1]。本条目采用这一数值，口径是静息状态下扁盘状血小板的最大直径，而不是活化后包括伪足的长度。它是典型代表值，不是所有血小板的定值；文献中常见约 1.5–3 μm 的分布，巨大血小板或活化聚集体的表观尺寸会明显超出这个范围。

## 常见误解

“血小板是一种完整细胞”并不正确：它没有细胞核，不能像白细胞那样独立复制，只是巨核细胞脱落的膜包裹片段[2]。另一个误区是把血小板数量与尺寸混为一谈；血小板计数是单位体积血液中的数量，单个血小板大小则用直径或体积描述。还有人以为血小板只在血管破损时才出现，实际上静息血小板持续在血液中循环并参与日常血管维护。

## 与其他尺度的关系

2 μm 约为红细胞直径的四分之一，也比中性粒细胞小七倍左右[1]。它与大肠杆菌短轴（约 0.5 μm）相比仍大四倍，但远小于一个典型动物细胞。若把 2 μm 放大到一根头发直径，需要约三十五倍；这也解释了为什么血小板在普通血涂片上只是细小的紫色点，需要油镜或更高分辨率方法才能看清形态细节。
