---
id: space.fatty-acid
title: 硬脂酸分子链长
titleEn: Stearic acid chain length
dimension: length
category: 原子与分子
summary: >-
  硬脂酸是含 18 个碳原子的饱和脂肪酸；本页量全反式构象下碳链两端距离约 2.5 nm，
  不是分子量，也不是单层膜的厚度。
quantity:
  value: 2.5e-9
  unit: m
  measure: 全反式碳链两端距离
  approximate: true
displayValue: 约 2.5 nm（硬脂酸碳链长度）
related:
  - space.benzene
  - space.methane-molecule
  - space.co2-molecule
  - space.amino-acid
  - time.nuclear-timescale
reviewStatus: reviewed
sources:
  - title: Langmuir–Blodgett Transfer of Nanocrystal Monolayers
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11279929/'
    publisher: Nanomaterials / PubMed Central
    accessed: '2026-11-07'
  - title: Solid-Liquid Phase Transition in the Octadecanoic Acid Film
    url: 'https://arxiv.org/html/1810.09258v1'
    publisher: arXiv
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  取中性、孤立硬脂酸分子的全反式平面锯齿构象，量甲基末端到羧基末端的原子核间距；
  不含氢原子与电子云的范德华外缘，也不是脂肪酸在膜中的堆积厚度。
uncertainty: >-
  文献给出约 2.5–2.56 nm，差异来自端基定义与构象；出现 gauche 弯折或顺式双键时，
  端到端距离会明显缩短，故标为近似。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: fattyacid
  scene: space.object
  caption: 硬脂酸分子 · 碳链约 2.5 nm
  note: 碳、氧、氢原子球与键线为示意；标线表示全反式碳链两端核间距，不是范德华外缘；非按比例，非观测重建。
  color: '#c9d8a6'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 纳米
---
## 它是什么

硬脂酸是一种含 18 个碳原子的饱和脂肪酸，化学式 CH₃(CH₂)₁₆COOH。室温下碳链倾向取全反式平面锯齿构象，本页量的是从甲基末端到羧基末端的最长方向，不是分子量，也不是它在膜中的占据面积。[1] 羧基使它具有两亲性：一端亲水，另一端是疏水的碳氢链，这一性质决定了它在界面上的取向。

## 怎样知道

Langmuir–Blodgett 膜研究把硬脂酸作为长链脂肪酸的参照：单个分子在界面上的投影面积约 0.20 nm²，长度约 2.5 nm，体积约 0.5 nm³。[1] 另一项界面 X 射线研究直接按键长计算：17 个 C—C 键每个投影 0.127 nm，再加甲基与羧基端基，得到约 2.56 nm。[2] 两种方法互相独立，结果一致。这类测量通常先把分子铺成单层，再沿法线方向测厚度，或从界面散射曲线反推分子长度。

## 数值与口径

2.5 nm 等于 2.5×10⁻⁹ m，也就是 0.0025 μm、25 Å。口径是全反式、孤立分子的两端原子核间距；若链发生 gauche 弯折，端到端距离会明显缩短。[2] 它不等于分子量 284.5，也不等于单层膜的物理厚度。分子量描述的是摩尔质量，单位是克每摩尔，与几何长度没有可比性。

## 常见误解

常见误解之一是把 2.5 nm 当成硬脂酸分子的“直径”；长链分子只有一个方向特别长，横向只有约 0.4 nm。[1] 另一个误解是以为所有 18 碳脂肪酸都一样长；油酸有一个顺式双键，链会弯折，端到端距离短于硬脂酸。[2] 还有人把链长与脂肪酸在膜中的堆积厚度混为一谈。另一个常见混淆是把 18 个碳逐个相加当成 18 个键长，忽略了锯齿链的投影关系。

## 与其他尺度的关系

2.5 nm 约为苯环对位碳间距 0.28 nm 的 9 倍，也约为 DNA 直径 2 nm 的 1.2 倍。[1][2] 它比尿素的 0.5 nm 大五倍，却与胰岛素单体 2.5 nm 相当——两者恰好落在同一尺度。继续阅读苯、甲烷与二氧化碳，可比较小分子与长链分子的“长度”口径。把 2.5 nm 与 1 nm 的氨基酸、0.3 nm 的苯环并排，能看到从单体到长链的连续过渡。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 8.3e-9 纳秒，在时间轴上量级接近「强相互作用时间」。[3]
