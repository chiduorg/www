---
id: time.photon-epoch
title: 光子时代
titleEn: Photon Epoch
dimension: cosmic-time
category: 太初宇宙
summary: 光子时代指辐射能量密度主导膨胀的早期阶段。辐射不只可见光，阶段划分看能量占比；约 5.17 万年是物质—辐射相等的模型末端参照，不是起点。
quantity:
  value: 1632973440000
  unit: s
  measure: time-after-big-bang-epoch-reference
  measureLabel: 自大爆炸起的时期参考时间
  approximate: true
displayValue: 约5.17万年（辐射主导末端的模型参照）
related:
  - time.matter-radiation-equality
  - time.nucleosynthesis
  - time.recombination
  - time.dark-ages
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: 'Some Times in Standard Cosmology, arXiv:2411.07703v1'
    url: 'https://arxiv.org/html/2411.07703v1'
    publisher: Hergt & Scott / University of British Columbia
    accessed: '2026-11-06'
  - title: 'Big-Bang Cosmology, 2025 update, §22.3'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: The cosmic microwave background and inflation
    url: >-
      https://sci.esa.int/web/planck/The_cosmic_microwave_background_and_inflation
    publisher: ESA / Planck
    accessed: '2026-11-06'
legacy:
  id: photon-epoch
  icon: "\U0001F4AB"
  relatedLabels: 光子、辐射主导、物质—辐射相等、宇宙微波背景
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 光子时代
    quantity:
      value: 10
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 10 秒 ~ 38 万年
  notes:
    - 旧站以 10 秒作为光子时期起点；Hergt & Scott 表 2 的相等时刻 1.633×10^12 s 作为辐射主导阶段末端参照。
    - 本轮按五节结构重写；保留 quantity 与 chronology 结构，秒数仅作阶段边界换算。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  endReferenceSeconds: 1632973440000
  conversion: 以物质—辐射相等时刻作为阶段末端参照，不表示阶段起点
  precision: 模型后验均值，非精确测年
  note: 采用所引模型的条件性时代参照，不是直接观测到的计时。
uncertainty: 辐射主导的起点没有唯一“第一次光子出现”的坐标；5.17 万年只是相等时刻的阶段末端参照，不是精确测年。
visual:
  template: radiation-front
  profile: photon
  caption: 光子时代 · 三维参照
  note: >-
    浓雾中的光传播是热史示意图，不是宇宙当时可拍摄的照片。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#c8b174'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

光子时代指辐射能量密度主导膨胀的早期阶段。这里的“辐射”不只可见光，还包括红外、紫外、X 射线、伽马射线以及相对论性中微子；光子只是其中一部分。[1][2] 早期光子与带电粒子频繁散射，宇宙像炽热浓雾，光不能自由远行。[3]

## 怎样知道或为何是推断

Planck 的微波背景数据约束了辐射密度与物质密度，Hergt 与 Scott 据此推算出物质—辐射相等发生在约 5.17 万年。[1] 这不是对“光子时代开始”的直接观测，而是用今天的光子温度、N_eff 和宇宙参数反推热史。[1][2] ESA 的 Planck 资料说明，微波背景的微小温度起伏保存了复合前物质与辐射分布的信息，为这段热史提供独立检验。[3]

## 时间坐标与口径

本条把约 5.17 万年作为辐射主导阶段的末端参照，而不是起点；宇宙从更早的高温状态一路辐射主导，直到相等。[1] 名称容易让人以为“光子时代”从光子第一次出现算起，但光子在整个热史中都存在，阶段划分看的是能量占比。[2] 5.17 万年是平直 ΛCDM 模型的后验值，换成其他宇宙参数会移动，不能当作绝对日历。[1]

## 常见误解

误解之一是把“辐射主导”当成“宇宙已经透明”。辐射主导说的是能量密度占比，透明与否取决于光子能否自由传播，后者要到复合才实现。[2][3] 另一个误解是把光子时代等同于“只有光子”；中微子在相等之前也贡献大量辐射能量。[1][3]

## 与其他阶段的关系

光子时代上承原初核合成与轻子湮灭，下接物质—辐射相等和复合。[1][2] 核合成发生在辐射主导早期，复合则发生在物质主导开始之后；两者相差数十万年，不能混为一个阶段。[2][3] 与“物质—辐射相等”条目相连，可把“占比转变”和“透明度转变”分开理解。[1][3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.633×10¹² 秒，换算后是 5.17×10⁴ 年；约 1.12×10⁻⁵ 个地球年龄（46 亿年）。这把尺子只改写单位，不改变量值；它把本条固定在时间轴的 10¹² 量级附近。

读图时先看量级，再看倍数：10¹² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
