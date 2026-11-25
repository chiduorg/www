---
id: space.antibody
title: IgG 抗体跨度
titleEn: IgG Antibody Span
dimension: length
category: 生命与人体
summary: IgG 是 Y 形免疫球蛋白，典型轮廓约 4.0 纳米 × 8.5 纳米 × 14.5 纳米；本条取 10 纳米作为代表性跨度，铰链摆动会使尺度变化。
quantity:
  value: 1e-8
  unit: m
  measure: IgG 抗体分子的代表性跨度，取 Y 形轮廓的中间尺度约 10 纳米
  approximate: true
displayValue: 约 10 nm（IgG 抗体跨度）
related:
  - space.hemoglobin
  - space.protein
  - space.red-blood-cell
  - space.cell
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: Characterization of protein immobilization on nanoporous gold using atomic force microscopy and scanning electron microscopy
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3168530/'
    publisher: PubMed Central (PMC)
    accessed: '2026-11-07'
  - title: The structure of a typical antibody molecule — Immunobiology
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK27144/'
    publisher: NCBI Bookshelf
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 对象为单体 IgG 抗体；量取分子整体轮廓的代表性跨度，不含糖基化修饰与结合抗原后的构象变化；铰链区角度会改变两臂间距。
uncertainty: 10 纳米是取整的代表值；所引尺寸约为 4.0 × 8.5 × 14.5 纳米，10 纳米接近其中间尺度，完全展开时分子内尺度可超过 14.5 纳米，因此跨度是范围而非定值。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 打开 PMC 蛋白质固定化论文，核对 IgG 典型尺寸约 4.0 纳米 × 8.5 纳米 × 14.5 纳米。
    - 打开 NCBI Bookshelf《The structure of a typical antibody molecule》，核对四条多肽链组成的柔性 Y 形结构。
    - 10 纳米为代表性跨度，保留 needs-review，待逐条核对。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://pmc.ncbi.nlm.nih.gov/articles/PMC3168530/；https://www.ncbi.nlm.nih.gov/books/NBK27144/），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  scene: space.object
  caption: IgG 抗体跨度约 10 纳米示意
  note: 示意，非按比例，非观测重建。
  color: '#8fa9a7'
  variant: antibody
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 纳米
---
## 它是什么

抗体是免疫系统产生的 Y 形蛋白质，能识别并结合特定抗原。IgG 是最常见的抗体类型，由两条相同的重链和两条相同的轻链组成，形成两个 Fab 抗原结合臂和一个 Fc 恒定区[2]。本条比较的是 IgG 分子的跨度，也就是 Y 形结构两臂展开时的最大外形尺度，不是分子量或抗原结合位点的数量。

## 怎样知道

一项研究蛋白质固定化的论文引用文献给出 IgG 的典型尺寸约为 4.0 纳米 × 8.5 纳米 × 14.5 纳米[1]。NCBI Bookshelf 的免疫学章节把典型抗体分子描述为由四条多肽链组成的柔性 Y 形结构，每条链都有可变区与恒定区[2]。不同构象下，两臂夹角会变化，因此“跨度”是一个范围而不是单一常数。

## 数值与口径

本条取 10 纳米（1×10⁻⁸ 米）作为 IgG 抗体跨度的取整参照。它与上述尺寸中的 8.5 纳米宽度接近，而分子高度可达约 14.5 纳米[1]。若把两臂完全展开，柔性铰链区可使分子内尺度达到十几纳米；若只看 Fc 段，读数又会更小。因此 10 纳米描述的是代表性轮廓，不是所有 IgG 的固定直径。

## 常见误解

常见误解是把抗体当成刚性 Y 形支架。抗体的铰链区允许两臂相对摆动，结合抗原时构象会改变，“跨度”也随之变化[2]。另一个误解是把抗体与抗原混淆：抗体是免疫球蛋白，抗原是被识别的分子或结构；IgG 的 10 纳米尺度说的是抗体本身，不是它结合的抗原。

## 与其他尺度的关系

10 纳米约为血红蛋白最长径 6.4 纳米的 1.6 倍，也比 DNA 双螺旋直径约 2 纳米大数倍。它远小于红细胞 7.5 微米，二者相差约七百倍。抗体处在纳米级蛋白质尺度，却能在微米级的细胞表面识别抗原，体现了分子尺度与细胞尺度之间的衔接；这也是免疫识别能在极小空间内完成的原因之一。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 3.3e-8 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
