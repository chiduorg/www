---
id: space.hydrogen-molecule
title: 氢分子
titleEn: Hydrogen Molecule
dimension: length
category: 原子与分子
summary: 氢分子 H₂ 是最小的双原子分子，平衡几何中的两个氢原子核间距约 0.7414 埃；本页以该核间距作为分子直径口径，不含范德华外缘。
quantity:
  value: 7.414e-11
  unit: m
  measure: 分子直径
  approximate: true
displayValue: 约 0.0741 nm（H—H 核间距）
related:
  - space.water-molecule
  - space.atom
  - space.helium-atom
  - space.proton
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: CCCBDB experimental data for hydrogen — CAS 1333-74-0
    url: 'https://cccbdb.nist.gov/exp2x.asp?casno=1333740&charge=0'
    publisher: NIST / Computational Chemistry Comparison and Benchmark Database
    accessed: '2026-11-06'
  - title: hydrogen
    url: 'https://www.britannica.com/science/hydrogen'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  采用中性氢分子 H₂ 的平衡几何，量的是两个氢原子核之间的平衡距离 0.7414 埃；该值不是范德华直径，也不含电子云外缘或分子间接触距离。适用于孤立气相
  H₂，不适用于高压、吸附或激发态。
uncertainty: >-
  CCCBDB 给出实验平衡键长 0.7414
  埃；分子振动使瞬时核间距在平衡值附近变化，误差与定义口径有关。范德华直径会显著大于该核间距，引用时必须说明量的是哪一条距离。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮新建条目；用 WebFetch 打开 NIST CCCBDB 氢分子实验数据页，核对 H—H 平衡键长 0.7414 埃。
    - 用 WebFetch 打开 Britannica 氢页，核对氢是最轻元素、H₂ 为双原子分子及其基本性质。
    - 明确 0.0741 纳米是核间距而非范德华直径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "molecule"
  variant: "hydrogen"
  scene: "space.object"
  caption: "氢分子 · H—H 核间距约 0.074 nm"
  note: "两个氢原子球、电子云与键线为示意；标线表示核间距，不是范德华外缘；非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
---
## 它是什么

氢分子由两个氢原子以共价键结合而成，分子式 H₂，是最轻、最小的双原子分子。[2] 本页用约 0.0741 纳米作为分子直径，量的是平衡几何中两个氢原子核之间的距离；这个数不含电子云外缘，也不是分子间接触时的范德华直径。

## 怎样知道

氢分子的键长来自光谱与量子化学计算。NIST CCCBDB 的实验数据页列出 H₂ 的平衡核间距为 0.7414 埃。[1] 光谱测量通过转动与振动能级反推这个距离，精度很高；理论计算则从电子结构出发得到一致结果。[1] Britannica 说明氢是最轻元素，H₂ 是双原子气体，并记录其物理化学性质。[2] 这些资料共同支持“H—H 核间距约 0.074 纳米”。

## 数值与口径

0.7414 埃等于 7.414×10⁻¹¹ 米，也就是约 0.0741 纳米。它描述两个原子核的平衡距离，而不是两个氢原子球的“外缘相切”距离。[1] 若把电子云和范德华半径算进去，分子外形会更大，数值取决于所用半径模型。[1][2] 分子振动会让瞬时核间距在平衡值附近变化，因此严格说这是一个平衡量，不是固定刚性距离。

## 常见误解

常见误解之一是把 0.074 纳米当成氢分子的范德华直径；它只是核间距，电子云在外侧还有分布。[1] 另一个误解是把氢原子半径与氢分子键长混用；原子尺度与分子内两个核的距离不是同一个量。[2] 还有人把 H₂ 的键长与 H₂O 的 O—H 键长混淆；水分子有三原子和不同键角，不能直接类比。

## 与其他尺度的关系

0.074 纳米使氢分子成为尺度轴上的小分子端点：它比水分子小，比单个氢原子大，却仍远小于蛋白质与细胞。[1][2] 把它与苯环、葡萄糖和氨基酸并排，可以看到“分子直径”会因原子数、键长与定义口径而变化。继续阅读水分子、原子与氦原子，可比较不同分子的核间距与电子云尺度。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 2.5e-10 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
