---
id: space.graphite
title: 石墨片层堆垛厚度
titleEn: Graphite layer-stack thickness
dimension: length
category: 原子与分子
summary: >-
  石墨是石墨烯层按 AB 顺序堆叠成的晶体；本页取约 100 层的堆垛厚度 33.5 纳米，
  用层间距 0.335 纳米换算得到，不是单层厚度，也不是整块石墨的尺寸。
quantity:
  value: 3.35e-8
  unit: m
  measure: 堆垛厚度
  approximate: true
displayValue: 约 33.5 nm（约 100 层石墨烯堆垛）
related:
  - space.graphene
  - space.crystal-lattice
  - space.carbon-nanotube
  - space.fullerene
  - time.nanosecond
reviewStatus: reviewed
sources:
  - title: Improved crystallographic data for graphite
    url: 'https://materias.df.uba.ar/e2a2019c1/files/2012/07/Howe_XRD_graphite_PDJ000150.pdf'
    publisher: J. Res. Natl. Inst. Stand. Technol. / Howe et al.
    accessed: '2026-11-07'
  - title: Review Graphite
    url: 'https://www.acsu.buffalo.edu/~ddlchung/Graphite.pdf'
    publisher: Journal of Materials Science / D. D. L. Chung, University at Buffalo
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  以 AB 堆叠的六方石墨为对象，取约 100 层、层间距 0.335 纳米的乘积作为堆垛厚度；
  不适用于插层石墨、湍层石墨或褶皱多层体系。
uncertainty: >-
  层间距文献值在 0.335 纳米附近小幅变化，100 层又只是本页选定的计数口径，
  因此 33.5 纳米是近似换算值，不是某一石墨晶粒的实测厚度。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: crystal-lattice
  scene: space.object
  caption: 石墨片层 · 约 100 层堆垛 33.5 nm 参照
  note: 六元环网格、层数与透视均为示意，标线表示 100 层堆垛厚度，非按比例，非观测重建。
  color: '#6d7f8c'
  variant: graphite
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 碳材料
---
## 它是什么

石墨是石墨烯层按 AB 顺序堆叠成的三维晶体。本页量的是“约 100 层”这样的堆垛厚度，而不是单层厚度，也不是整块石墨的尺寸。100 层乘上 0.335 纳米的层间距，得到约 33.5 纳米，即 3.35×10⁻⁸ 米。[1][2]

## 怎样知道

层间距来自 X 射线衍射：石墨六方晶胞的 c 轴约 6.71 埃，相邻碳层间距为 3.355 埃，即约 0.3355 纳米。[1] 综述也把相邻层间距写作 3.35 埃，并说明层间靠范德华力结合。[2] 100 层是人为选取的层数，用来把原子尺度换算到几十纳米的堆垛尺度；它不是某种标准样品的固定厚度。衍射峰位置对层间距敏感，少量插层或应力会使峰位移动，因此文献给出的是统计平均值。[1][2]

## 数值与口径

约 100 层 × 0.335 纳米 = 33.5 纳米 = 3.35×10⁻⁸ 米，也等于 0.0335 微米。层数改变时厚度按比例变化：10 层约 3.35 纳米，1000 层约 335 纳米。层间距本身受堆叠方式、插层和应力影响，文献值在 0.335 纳米附近小幅波动。[1][2] 若把 100 层看作 100 个重复周期，总厚度还应包含每个碳原子面的厚度；本页直接以层间距乘以层数，是常用的工程估算口径。[2]

## 常见误解

第一，把 33.5 纳米当成石墨的“晶粒尺寸”；实际石墨微晶沿 c 轴的尺寸可由几十纳米到更厚，100 层只是本页选定的计数口径。第二，把堆垛厚度与单层石墨烯厚度混同；单层约 0.335 纳米，是同一层间距的约定值。[1] 第三，把层间距当成碳原子直径；它描述层与层的法向距离，不是原子大小。[2]

## 与其他尺度的关系

33.5 纳米约为单层石墨烯的 100 倍，也约为二硫化钼单层 0.65 纳米的 50 倍；它比碳纳米管直径 1 纳米大三十多倍，却只有碳纤维直径 7 微米的约 1/200。放到日常尺度，它约为头发丝直径 100 微米的 1/3000。继续比较石墨烯、晶格间距与碳纳米管，可看出“层内”“层间”“堆垛”是三种不同口径。它处在“纳米材料”与“亚微米组织”之间，用纳米或几十纳米表达都合适。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 1.1e-7 纳秒，在时间轴上量级接近「纳秒」。[3]
