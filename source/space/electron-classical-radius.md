---
id: space.electron-classical-radius
title: 电子经典半径
titleEn: Classical Electron Radius
dimension: length
category: 量子与粒子
summary: 电子经典半径是经典电磁模型由电子自能导出的长度，2022 CODATA 值为 2.8179403205 飞米；它是模型参数，不是电子的实测实体半径。
quantity:
  value: 2.8179403205e-15
  unit: m
  measure: 经典半径（注明非实体半径）
  approximate: true
displayValue: 2.8179403205 fm（经典半径，非实体半径）
related:
  - space.electron-compton
  - space.atom
  - space.planck
  - space.proton
  - temperature.planck-temperature
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 'CODATA Value: classical electron radius'
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?re'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: electron
    url: 'https://www.britannica.com/science/electron'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  2022 CODATA 的经典电子半径 r_e =
  e²/(4πε₀m_ec²)，适用于把电子视为带电荷球并计算其静电自能的经典模型；它不是电子在标准模型中的物理尺寸。高能散射把电子视为点粒子，经典半径只作为换算尺度使用。
uncertainty: >-
  CODATA 标准不确定度为 1.3×10⁻²⁴ 米，相对约
  4.7×10⁻¹⁰；该值由基本常数组合定义，精度很高，但“半径”本身是经典模型概念，不能据此宣称电子有实体边界。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮新建条目；用 WebFetch 打开 NIST CODATA 经典电子半径页，核对数值、公式与不确定度。
    - 用 Britannica 电子页核对电子是最轻的带电粒子、被视为基本粒子及点状描述。
    - 明确经典半径是模型尺度而非实测实体半径，避免把公式输出当成电子外径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: field
  scene: space.object
  caption: 电子经典半径 · 2.82 fm 模型尺度
  note: 场纹、颜色与粒子标记为示意；标线表示经典模型长度，不是电子实体边界；非按比例，非观测重建。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
  - 原子核
---
## 它是什么

电子经典半径是一个由经典电磁理论导出的长度：假设电子是带电荷的球，并让其静电自能与质量能量相对应，就得到 r_e = e²/(4πε₀m_ec²)。[1] 它约等于 2.82 飞米。这个数常出现在散射截面与辐射公式中，但它不是电子的实测半径；在标准模型中，电子被视为点粒子。[2]

## 怎样知道

经典半径不是用散射测出的“电子外径”，而是由电子电荷、质量与真空介电常数组合计算出的尺度。[1] 2022 CODATA 给出 2.8179403205×10⁻¹⁵ 米，标准不确定度 1.3×10⁻²⁴ 米。[1] Britannica 把电子描述为最轻的带电基本粒子，并说明它没有已知的内部结构。[2] 高能散射实验对电子尺寸给出很小的上限，但并没有给出一个等于经典半径的实体边界。

## 数值与口径

2.8179403205 飞米等于 2.8179403205×10⁻¹⁵ 米。它比质子电荷半径大约 3.35 倍，但两者含义不同：前者是经典电磁模型的参数，后者是核电荷分布的测量结果。[1] 经典半径与康普顿波长也常被混淆；二者相差一个精细结构常数因子，数值和物理意义都不同。[1][2] 引用时应写明“经典半径”，不要简写成“电子半径”。

## 常见误解

误解之一是认为电子真有一个 2.82 飞米的硬球边界；经典半径只是把电子当成带电球时的模型尺度。[2] 另一个误解是把它与电子的康普顿波长或德布罗意波长混用；这些长度定义不同，不能互相替代。[1] 还有人把经典半径当成实验测得的“电子大小上限”；散射给出的上限与这个模型参数不是同一回事。

## 与其他尺度的关系

经典电子半径与康普顿波长、玻尔半径构成电子相关的三个不同尺度：经典半径约 2.82 飞米，康普顿波长在皮米量级，玻尔半径约 0.053 纳米。[1] 它们依次描述经典电磁模型、量子散射与原子结构，不能放在同一口径下直接比较“电子大小”。继续阅读电子康普顿波长、原子与普朗克长度，可看清这些尺度的区别。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]
