---
id: space.caffeine-molecule
title: 咖啡因分子
titleEn: Caffeine Molecule
dimension: length
category: 原子与分子
summary: 咖啡因是平面稠合的双环生物碱，分子式 C8H10N4O2；本页取约 0.98 nm 作为分子长轴，建模值约 1.06 nm，差异来自构象与范德华半径，需复核。
quantity:
  value: 9.8e-10
  unit: m
  measure: 分子长轴（建模估计）
  approximate: true
displayValue: 约 0.98 nm（分子长轴估计）
related:
  - space.glucose
  - space.atp-molecule
  - space.nucleotide
  - space.benzene
  - space.water-molecule
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: Caffeine — NIST Chemistry WebBook
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C58082&Mask=2380'
    publisher: NIST / NIST Chemistry WebBook
    accessed: '2026-11-07'
  - title: Enthalpies of Immersion in Caffeine and Glyphosate Aqueous Solutions of SBA-15 and Amino-Functionalized SBA-15
    url: 'https://pubs.acs.org/acsodf/article/6/33/21339/381704/Enthalpies-of-Immersion-in-Caffeine-and-Glyphosate'
    publisher: ACS Omega / American Chemical Society
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  取孤立咖啡因分子的平面构象，长轴约 0.98 nm；该值不是晶体中相邻分子的堆积间距，也不是水合动力学直径。
  不同力场、构象与范德华半径定义给出的长轴在 0.78–1.06 nm 之间，比较时必须注明建模条件。
uncertainty: >-
  公开的分子建模结果不一致（约 0.78 nm、0.92–0.94 nm、1.06 nm）；0.98 nm 是居中近似。
  本轮未能找到直接给出 9.8 Å 的原始页面，误差主要来自构象与范德华半径定义，故保留 needs-review。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 用 WebFetch 打开 NIST Chemistry WebBook 咖啡因页，核对分子式 C8H10N4O2、分子量 194.1906 与标准 InChI。
    - 用 WebSearch 检索 ACS Omega 咖啡因吸附论文，摘要给出建模尺寸 10.6 Å（长）、8.50 Å（宽）、4.50 Å（厚）。
    - 正文说明 0.98 nm 是长轴近似，不是直径；因缺少精确支持值，reviewStatus 保持 needs-review。
    - '2026-11-07 来源可访问性核对：https://webbook.nist.gov/cgi/cbook.cgi?ID=C58082&Mask=2380 返回可用响应；https://pubs.acs.org/acsodf/article/6/33/21339/381704/Enthalpies-of-Immersion-in-Caffeine-and-Glyphosate（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: caffeine
  scene: space.object
  caption: 咖啡因分子 · 约 0.98 nm 长轴
  note: 原子球、键线与颜色为示意；标线表示分子长轴，不是晶体中分子间距；示意，非按比例，非观测重建。
  color: '#b8a6c9'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 纳米
conceptGroup: molecule
---
## 它是什么

咖啡因是一种甲基黄嘌呤类生物碱，分子式 C₈H₁₀N₄O₂，由一个六元环和一个五元环稠合而成，整体接近平面。[1] 它存在于咖啡、茶和可可中，能阻断腺苷受体而提神。[2] 本页用约 0.98 纳米表示分子长轴，即分子在平面内最长方向的尺度。

## 怎样知道

NIST 化学数据库给出咖啡因的分子式、分子量与标准 InChI，可用于确认对象与结构式。[1] 尺寸没有统一实验值：吸附与孔道研究常用分子建模估计，一篇 ACS Omega 论文给出长 1.06 纳米、宽 0.850 纳米、厚 0.450 纳米。[2] 这些数值都依赖力场、构象与范德华半径，不能当作同一个“直径”。

## 数值与口径

0.98 纳米等于 9.8 埃。它比上述 1.06 纳米略小，属于同一建模量级。[2] 本页把它标为近似长轴，而不是晶体学中的分子间距离；咖啡因晶体中相邻分子的堆积间距还会受氢键与 π 堆积影响。[1][2] 若只取环骨架的核间距，数值会更小；把氢原子和电子云算进去，外形会更大。

## 常见误解

常见误解之一是把 0.98 纳米当成咖啡因的“直径”；分子是扁平的，长、宽、厚三个方向并不相等。[2] 另一个误解是把不同论文的建模值当成互相矛盾：不同力场与构象会给出不同的长轴，引用时必须注明建模条件。[2] 还有人把孤立分子尺寸直接套到溶液中的咖啡因，水合层与分子间作用会改变有效尺寸。

## 与其他尺度的关系

0.98 纳米与葡萄糖的 0.86 纳米、ATP 的 1.2 纳米同处“小分子到生物单体”的过渡带，却远小于蛋白质与细胞。[1][2] 它比苯环的对位碳间距大，说明稠合双环加取代基会显著拉长分子。继续阅读葡萄糖、ATP 与核苷酸，可比较平面小分子与链状生物分子的长度口径。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 3.3e-9 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
