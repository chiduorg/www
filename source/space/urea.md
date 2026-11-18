---
id: space.urea
title: 尿素分子长度
titleEn: Urea molecular length
dimension: length
category: 原子与分子
summary: >-
  尿素是平面型 H₂N—CO—NH₂ 分子；两个氮核间距 0.232 nm，外侧氢核间距 0.400 nm，
  计入氮的范德华外缘后分子跨度约 0.5 nm，不是晶胞尺寸。
quantity:
  value: 5e-10
  unit: m
  measure: 两个氨基间最长跨度
  approximate: true
displayValue: 约 0.5 nm（尿素分子跨度）
related:
  - space.co2-molecule
  - space.methane-molecule
  - space.benzene
  - space.amino-acid
reviewStatus: reviewed
sources:
  - title: CCCBDB experimental data for urea — CAS 57-13-6
    url: 'https://cccbdb.nist.gov/exp2x.asp?casno=57136&charge=0'
    publisher: NIST / Computational Chemistry Comparison and Benchmark Database
    accessed: '2026-11-07'
  - title: urea
    url: 'https://www.britannica.com/science/urea'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
conditions: >-
  取中性、孤立尿素分子的实验几何；量两个氨基氮之间的跨度，并在两端加氮的范德华半径。
  不是尿素晶体的晶胞边长，也不是分子量 60.06，更不是溶液中水合分子的流体力学直径。
uncertainty: >-
  实验几何给出 N···N 0.232 nm、H···H 0.400 nm；范德华半径取约 0.15 nm 是常用近似，
  因此 0.5 nm 为取整后的分子外形尺寸，误差主要来自外缘定义。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：至少一条来源本地直连可访问；受反爬限制的来源已在写作阶段用 WebFetch 打开核对。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: urea
  scene: space.object
  caption: 尿素分子 · 跨度约 0.5 nm
  note: 碳、氮、氧、氢原子球与键线为示意；标线表示两氨基间的分子外形跨度，含氮的范德华外缘；非按比例，非观测重建。
  color: '#cfd8e8'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 纳米
---
## 它是什么

尿素是碳酸的二酰胺，分子式 H₂N—CO—NH₂，两个氨基连在同一个羰基碳上。[2] 本页量的是两个氨基之间的最大跨度，并计入氮原子的范德华外缘；它不是晶胞尺寸，也不是分子量 60。尿素最早因存在于尿液而得名，如今主要由氨与二氧化碳合成，是使用量最大的氮肥之一。[2] 羰基的 π 电子向两个氮原子离域，使 C—N 键带有部分双键性质，分子骨架因此趋于平面。

## 怎样知道

NIST CCCBDB 给出尿素的实验几何：分子近似平面，两个氮原子核间距为 0.232 nm，两个外侧氢原子核间距为 0.400 nm，C—N 与 C=O 键长也在实验值范围内。[1] Britannica 确认其结构为两个氨基共享一个羰基，并说明它在常温下是结晶固体。[2] 由于共振，C—N 键长短于典型的 C—N 单键，这一点与平面构型互相印证。[1] NIST 的数据来自气相实验几何，Britannica 则从化学结构角度描述其骨架与结晶性质。[1][2]

## 数值与口径

以两个氮核间距 0.232 nm 为骨架，在两端各加约 0.15 nm 的氮范德华半径，得到约 0.53 nm；本页取整为 0.5 nm，即 5×10⁻¹⁰ m、0.0005 μm。[1] 换算成其他单位，0.5 nm 等于 5 Å，也等于 0.0005 μm，仍是病毒直径的几十分之一。若只取两个氮核之间的距离，是 0.232 nm；加上外侧氢核为 0.400 nm；再计入范德华外缘才得到 0.5 nm。三个数字对应三种口径，不能混用。[1] 口径是分子外形，不是晶体中相邻分子的间距。[2] 因为包含范德华外缘，quantity 标为近似。

## 常见误解

常见误解之一是把 0.5 nm 当成尿素的晶胞边长；晶体中的周期要大一个数量级。[1] 另一个误解是以为尿素是蛋白质或高分子；它只是最简单的有机酰胺之一。[2] 还有人把分子量 60 与分子长度混用，两者单位完全不同。另有一个误解是把晶体尿素中分子头尾相接的氢键排列当成分子的长度；分子间氢键会拉长周期，却不改变单个分子的跨度。[1]

## 与其他尺度的关系

0.5 nm 约为苯环对位间距 0.28 nm 的 1.8 倍，约为甲烷分子跨度的 3 倍。[1][2] 它比氨基酸的 0.7–1 nm 小，比硬脂酸链 2.5 nm 小五倍。与更小的对象相比，0.5 nm 约为氢原子范德华直径 0.24 nm 的两倍。这些比较说明尿素虽是最小的有机分子之一，却已明显大于单个原子。继续阅读二氧化碳、甲烷与苯，可比较小分子骨架与范德华外形的不同口径。
