---
id: space.rice-grain
title: 大米粒
titleEn: Rice Grain
dimension: length
category: 生命与人体
summary: 不同品种与加工状态的米粒并不等大。本页主动选取5毫米长的未烹煮去壳米粒，作为日常长度参照，并说明它与稻谷、糙米、精米及熟饭粒的区别。
quantity:
  value: 0.005
  unit: m
  measure: 用于比较的5 mm未烹煮去壳米粒长度参照
  approximate: true
  status: reference
displayValue: 5 mm（自选米粒长度参照）
related:
  - space.sand-grain
  - space.pencil
  - time.agricultural-revolution
reviewStatus: reviewed
sources:
  - title: Codex Standard for Rice — CXS 198-1995
    url: 'https://www.fao.org/input/download/standards/61/CXS_198e.pdf'
    publisher: FAO / WHO Codex Alimentarius
    accessed: '2026-11-06'
  - title: Rice in human nutrition — Grain structure and quality criteria
    url: >-
      https://openknowledge.fao.org/server/api/core/bitstreams/15629ca6-abd7-4565-a09a-269c39aaad69/content/T0567E07.htm
    publisher: FAO / International Rice Research Institute
    accessed: '2026-11-06'
legacy:
  id: rice-grain
  icon: "\U0001F35A"
  relatedLabels: 杂交水稻、基因组测序、粮食安全、绿色革命、袁隆平、谷物驯化、农业文明
conditions: 自选未烹煮、去壳完整米粒的长轴长度5毫米；不是品种均值，不把稻谷、糙米、精米和熟饭粒混为同一尺寸。
uncertainty: >-
  5毫米是本站选定的“短粒”参照，不是实测平均；品种、产地、含水量、碾磨程度和是否烹煮都会改变长度，FAO资料给出的IRRI分类中短粒为小于5.50毫米，5毫米落在该类但不代表所有短粒米。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮按五节结构重写；用WebFetch打开FAO Codex米标准与FAO《Rice in human
      nutrition》，核对米粒定义与IRRI长度分类。
    - 5毫米是明确标注的自选参照，不声称是品种均值；量值、status与视觉配置保持不变。
  originalQuantity:
    value: 0.005
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: grain
  variant: rice
  color: '#d7ccb1'
  referenceAxis: x
  caption: 未烹煮去壳米粒5 mm长度参照
  note: 米粒长轴对应自选参照；宽厚、胚部和表面纹理仅作示意，不是指定品种平均尺寸；图为示意，非按比例，非观测重建。
  framePadding: 0.3
  sourceMeasure: 用于比较的5 mm未烹煮去壳米粒长度参照
  scene: space.object
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 日常
---
## 它是什么

大米粒是稻（Oryza sativa）的果实经脱壳或碾磨后留下的部分。稻谷还带外壳，糙米只去掉外壳而保留糠层和胚，精米再磨去部分或全部糠层与胚；熟饭粒则已经吸水膨胀。它们不是同一种状态下的同一个物体。[1] 本条取一粒未烹煮、去壳完整米粒的长轴作为长度参照。

## 怎样知道

Codex 的米标准把稻谷、糙米、精米和蒸谷米分别定义，并说明标准适用于供人直接消费的碾磨米等产品。[1] FAO 的《Rice in human nutrition》给出 IRRI 使用的粒长分类：特长粒大于7.50毫米，长粒6.61–7.50毫米，中粒5.51–6.60毫米，短粒小于5.50毫米。[2] 这两份资料分别支持“米粒有加工状态差异”和“粒长可按区间分类”，但都没有规定某一粒米必须是5毫米。

## 数值与口径

5毫米是本站选定的短粒参照，等于5000微米。它采用整粒长轴，不采用长宽比分类，也不把宽度或厚度算进来。[2] 由于品种和含水量不同，同样属于短粒的米也可能略长或略短；煮熟后吸水膨胀，长度会明显改变，因此本条不与熟饭粒共用同一口径。[1][2]

## 常见误解

常见误解是把5毫米当成“所有大米的标准长度”。稻米品种很多，长粒米可以超过7毫米，短粒米也可以小于5毫米；5毫米只是本条为日常比较选取的一个样本。[2] 另一个误解是把米粒长度与米饭口感直接挂钩：长度分类只是形态指标之一，直链淀粉含量、蒸煮方式和产地也会影响口感，不能由长度单独推断。

## 与其他尺度的关系

在尺度轴上，5毫米的米粒比0.5毫米的沙粒大十倍，比17.78厘米的铅笔短得多，也远小于人体。[1][2] 它能帮助读者从“毫米级颗粒”过渡到“厘米级日常物体”：十粒米首尾相接约5厘米，二十粒约10厘米。继续向上是手掌、餐具和人体，向下则是沙粒、尘螨和细胞。
