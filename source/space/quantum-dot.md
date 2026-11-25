---
id: space.quantum-dot
title: 量子点
titleEn: Quantum Dot
dimension: length
category: 原子与分子
summary: 量子点是半导体纳米晶，常见直径约 2–10 纳米；本页取 5 纳米作为颗粒直径代表值，落在该范围中点，不代表某一种具体材料或尺寸。
quantity:
  value: 5.e-9
  unit: m
  measure: 颗粒直径
  approximate: true
displayValue: 约 5 nm（量子点代表直径）
related:
  - space.carbon-nanotube
  - space.graphene
  - space.atom
  - space.crystal-lattice
  - space.perovskite-cell
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: Nanotransducers — Quantum Dots and Nanoparticles (course handout)
    url: >-
      https://saliterman.umn.edu/sites/saliterman.umn.edu/files/Nanotransducers%20-%20Quantum%20Dots%20and%20Nanoparticles%20Handout_1.pdf
    publisher: University of Minnesota
    accessed: '2026-11-06'
  - title: quantum dot
    url: 'https://www.britannica.com/science/quantum-dot'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  采用半导体纳米晶量子点的常见直径范围 2–10 纳米，并取 5 纳米作为范围中点代表值；不同材料（CdSe、CdS、InP
  等）、核壳结构与合成条件会改变直径。该值描述颗粒外径，不含配体壳层与团聚体。
uncertainty: >-
  文献给出的范围是 2–10 纳米，部分报道可扩展到更大尺寸；5
  纳米只是区间中点，没有单一测量误差。量子点的光学性质强烈依赖尺寸，因此引用时必须同时说明材料与粒径，故保留 needs-review。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮新建条目；用 WebFetch 打开明尼苏达大学课程讲义 PDF，核对量子点“10–50 个原子、直径 2–10 纳米”的表述。
    - 用 WebFetch 打开 Britannica 量子点页，核对其为半导体纳米晶、性质随尺寸变化并与原子能级类比。
    - 5 纳米是 2–10 纳米范围的中点代表值而非具体样品测量，故保留 needs-review。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: crystal-lattice
  scene: space.object
  caption: 量子点 · 约 5 nm 代表直径
  note: 颗粒球体、核壳配色与发光为示意；标线表示粒径范围中点，不代表具体材料；非按比例，非观测重建。
  color: '#a9c6d8'
  variant: dot
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 微观
---
## 它是什么

量子点是半导体纳米晶，尺寸小到电子能级出现离散化，因而表现出类似原子的量子特性。[2] 它的直径通常在 2–10 纳米范围，常见材料包括 CdSe、CdS 与 InP，外面还可能有壳层与配体。[1] 本页用 5 纳米作为代表直径，是这一范围的中点，不是某一种量子点的实测值。

## 怎样知道

量子点的尺寸来自显微、散射与光谱的综合分析，也来自合成条件的统计。[1] 明尼苏达大学的课程讲义把量子点描述为由约 10–50 个原子组成、直径 2–10 纳米的半导体纳米晶，并说明核壳结构与配体壳层的角色。[1] Britannica 说明量子点是极小的半导体纳米晶，性质随尺寸变化，可像原子一样具有离散能级。[2] 这些资料支持“纳米颗粒”这一定位，但具体直径必须结合材料与批次。

## 数值与口径

5 纳米等于 5×10⁻⁹ 米。它落在 2–10 纳米范围的中点，便于在尺度轴上定位；但量子点的吸收与发射波长随直径连续变化，因此同一材料的 3 纳米与 7 纳米颗粒性质差别很大。[1][2] 这个数描述无机核心的直径，不含有机配体壳层，也不含溶液中的水合层或团聚体。[1] 所以 quantity 标记为近似值，conditions 说明它只是范围代表。

## 常见误解

常见误解之一是以为所有量子点都正好 5 纳米；实际直径随材料、合成方法与目标波长变化，范围可达 2–10 纳米。[1] 另一个误解是把量子点当成“超大原子”；它确实有离散能级，但仍由成千上万个原子组成，不是单个原子。[1][2] 还有人把核心直径与包括配体、壳层的流体力学直径混用；两者相差可能很大。

## 与其他尺度的关系

5 纳米使量子点位于“分子”与“纳米材料”之间：比蛋白质小或相近，比碳纳米管管径大，却远小于细胞。[1][2] 它和石墨烯、碳纳米管同属纳米碳/半导体材料家族，但量子点的零维限域使其能级离散。继续阅读碳纳米管、石墨烯、原子与晶格间距，可比较零维、一维、二维与三维结构的尺度。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 1.7e-8 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
