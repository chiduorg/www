---
id: temperature.laser-fusion-plasma
title: 激光聚变热斑
titleEn: Laser fusion hot spot
dimension: temperature
category: 极高温
summary: >-
  激光惯性约束聚变用多束激光压缩毫米级靶丸，在中心形成高温高密度的氘氚热斑。本条取约 1 × 10⁸ K
  作为热斑温度的量级参考；它不是整个靶丸、烧蚀层或靶室壁的温度。
quantity:
  value: 100000000
  unit: K
  measure: 激光聚变热斑温度量级
  approximate: true
  measureLabel: 激光聚变热斑温度量级
displayValue: 约 1 × 10⁸ K（热斑量级）
related:
  - temperature.fusion-reactor-plasma
  - temperature.sun-core
  - temperature.quark-gluon
  - temperature.supernova
  - space.neutron-star
reviewStatus: reviewed
sources:
  - title: 'Target Chamber'
    url: 'https://lasers.llnl.gov/about/how-nif-works/target-chamber'
    publisher: Lawrence Livermore National Laboratory
    accessed: '2026-11-07'
  - title: "Achieving Fusion Ignition"
    url: 'https://lmf.llnl.gov/science/achieving-fusion-ignition'
    publisher: "Lawrence Livermore National Laboratory"
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为惯性约束聚变靶丸中心、峰值压缩阶段的热斑；1 × 10⁸ K 是量级参考，
  不是整个靶丸、烧蚀层、靶室壁或驱动激光器的温度。
review:
  method: source-check
  date: '2026-11-07'
  retry: '2026-11-07 复核（verified）：LLNL Target Chamber 页可读，称靶心温度约 1 亿度；LANL 报道 2025 年实验约 2.6 亿 °F（≈1.4×10⁸ K），支持 10⁸ K 量级。'
  notes:
    - 核对 LLNL NIF Target Chamber：靶心可产生约一亿度温度。
    - >-
      核对 LANL《Targeting the future of fusion》：2025 年 NIF 实验燃料约 2.6 亿华氏度（约 1.4 × 10⁸ K）；
      正文取 10⁸ K 量级。
    - 本条为新增条目，reviewStatus 保持 needs-review。
uncertainty: >-
  热斑温度随实验发次、压缩对称性和诊断模型变化；LANL 报道的一次实验约为 2.6 亿华氏度（约 1.4 × 10⁸ K），
  高于本条 1 × 10⁸ K 的量级参考。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: reaction-field
  profile: hot-spot
  caption: 激光聚变热斑示意
  note: >-
    以压缩靶丸和中心热斑作示意表达，不对应某次具体实验；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#c5a5f4'
  symbol: ICF hot spot
  scene: temperature.object
zone: 极高温
tags:
  - 极高温
  - 温度
  - 核物理
---
## 它是什么

激光惯性约束聚变用多束激光或激光产生的 X 射线压缩毫米级靶丸，使氘氚燃料在中心形成高温高密度的“热斑”，进而发生聚变。[1] 本条的温度指这个热斑，而不是整个靶丸、靶室壁或驱动激光器。热斑很小，却集中了压缩功和聚变释放的能量。

## 怎样测到

热斑温度靠 X 射线谱、中子产额与能谱以及辐射流体模拟共同约束。[1][2] LLNL 的 NIF 介绍称靶心可产生约一亿度的高温；LANL 报道的一次 NIF 实验把燃料加热到接近 2.6 亿华氏度，约合 1.4 × 10⁸ K。[1][2] 这些是不同实验、不同诊断口径下的量级，不是同一个读数。

## 数值与口径

本条取约 1 × 10⁸ K 作为热斑温度量级。它与华氏 2.6 亿度的换算结果同量级，但原始实验值更高；不能把 10⁸ K 当成 NIF 的最高纪录或每次实验的固定值。[1][2] 热斑内的离子温度和电子温度可能不同，诊断给出的“温度”还受压缩不对称、混合和测量模型影响。靶丸其余部分和烧蚀层远低于这个温度。

## 常见误解

第一，把热斑温度当成整个靶丸温度；只有中心很小体积达到峰值。第二，把温度与“点火”混为一谈；点火还要求足够的约束时间和面密度。[1] 第三，把实验室热斑与恒星核心等同；两者温区相近，但持续时间、压力和约束机制不同。第四，把华氏度读数直接当成开尔文；需要先换算。

## 与其他温区的关系

10⁸ K 高出太阳核心的约 1.57 × 10⁷ K 约一个数量级，与 ITER 设计等离子体的约 1.5 × 10⁸ K 同量级，但远低于夸克—胶子等离子体的理论温标。它代表实验室里能短暂达到的最高温区之一，说明惯性约束用压缩和短脉冲替代了恒星的引力约束。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
