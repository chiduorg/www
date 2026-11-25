---
id: space.molecular-motor
title: 分子马达（驱动蛋白步幅）
titleEn: Molecular Motor
dimension: length
category: 原子与分子
summary: 驱动蛋白是一类沿微管逐步运动的分子马达；本页以单分子实验给出的约8.1纳米步幅作参照，说明它如何把ATP水解脱化为定向运输。
quantity:
  value: 8.1e-9
  unit: m
  measure: 所引常规驱动蛋白实验约8.1 nm的步幅
  approximate: true
displayValue: 约 8.1 nm（驱动蛋白步幅）
related:
  - space.mitochondria
  - space.cell
  - space.protein
  - space.ribosome
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: >-
      Coy et al. (1999), Kinesin Takes One 8-nm Step for Each ATP That It
      Hydrolyzes
    url: 'https://pubmed.ncbi.nlm.nih.gov/9920916/'
    publisher: Coy et al. / Journal of Biological Chemistry；PubMed作者摘要
    accessed: '2026-11-04'
  - title: 'Kinesin Motor Mechanics: Binding, Stepping, Tracking, Gating, and Limping'
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC1852353/'
    publisher: Block et al. / Biophysical Journal；PubMed Central
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: molecular-motor
  icon: ⚙
  relatedLabels: 驱动蛋白、动力蛋白、肌球蛋白、ATP合酶、微管、鞭毛、纳米马达、单分子生物物理
conditions: 运动步幅，不是全部分子马达的整体直径。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 全文依据所列primary资料重写，未复用旧站正文。
    - 量值、对象和测量口径按本条具体说明核对，不推广为全类别统一尺寸。
    - 第七轮深化：补充驱动蛋白的ATP—构象循环、微管轨道匹配、单分子测量与常见误解；新增综述来源；量值、图景与审核状态保持不变。
  originalQuantity:
    value: 1.e-8
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: motor
  variant: step
  color: '#c2ab83'
  referenceAxis: x
  caption: 驱动蛋白两落点间的一步位移
  note: 标线两端相隔一个8.1 nm步幅；马达和微管外形被夸张，动画是循环示意，不是真实运动速度或整体直径。
  framePadding: 0.37
  sourceMeasure: 所引常规驱动蛋白实验约8.1 nm的步幅
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 微观
---
## 分子马达是什么

驱动蛋白是一类沿微管运动的分子马达，能把ATP水解的化学能转化为机械步进，带动囊泡、细胞器或其他货物在细胞内运输。[1][2] 它不是“缩小版的发动机”，而是一个由多个结构域组成的蛋白质机器：头部结合微管和ATP，尾部连接货物，中间通过构象变化产生力。

## 步幅与测量

Coy等人的单分子实验给出常规驱动蛋白每水解一个ATP约前进8.1纳米，本页以此作为长度参照。[1] 后续综述把这一尺度概括为约8纳米，并指出它对应微管原纤维上相邻微管蛋白二聚体的轴向间距。[2] 这个值不是整个马达蛋白的外形长度，也不是所有分子马达的统一步幅；其他类型的分子马达运动方式和步幅不同。

## 为什么这个尺度重要

8纳米正好是微管“轨道”的重复单元，驱动蛋白每一步都落在下一个结合位点上。[2] 这种匹配使运动具有方向性和过程性；马达不是随机漂移，而是沿轨道逐步前进。单分子测量、光学镊子和高分辨率显微术是得到这些结论的主要手段，画面中的连续运动是把离散步骤做了视觉简化。[1][2]

## 常见误解

“分子马达和汽车发动机一样”不对：它没有宏观意义上的齿轮和燃料箱，而是靠ATP结合、水解和构象循环工作。[1] “8纳米是驱动蛋白的大小”也不对：它是步幅，不是分子外形尺寸；同一马达的外形可以比步幅大得多。另外，分子马达不是只存在于肌肉；细胞内运输、DNA复制和细胞分裂都涉及不同类型的马达。

## 与其他尺度的关系

8纳米的步幅处在分子尺度；如果把驱动蛋白走完1微米比作一段路程，大约需要一百多步，每一步都由一个ATP分子驱动。[1] 分子马达、核糖体和细胞膜共同构成细胞内的“机器层”，连接分子反应与细胞尺度运动。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 2.7e-8 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
