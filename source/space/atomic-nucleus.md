---
id: space.atomic-nucleus
title: 原子核（通用）
titleEn: Atomic Nucleus (General)
dimension: length
category: 量子与粒子
summary: 原子核由质子和中子组成，直径随核子数从约 4 飞米到约 15 飞米变化；本页取约 10 飞米作为通用核直径参考，并说明它不是某一核素的实测值。
quantity:
  value: 1.e-14
  unit: m
  measure: 核直径参考
  approximate: true
displayValue: 约 10 fm（通用核直径参考）
related:
  - space.proton
  - space.neutron
  - space.atom
  - mass.helium-nucleus
  - elements.c
  - temperature.sun-core
reviewStatus: reviewed
sources:
  - title: atom
    url: 'https://www.britannica.com/science/atom'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Nuclear Charge Radii
    url: 'https://www-nds.iaea.org/radii/'
    publisher: IAEA Nuclear Data Services / Angeli & Marinova
    accessed: '2026-11-06'
  - title: "2022 CODATA — proton rms charge radius"
    url: "https://physics.nist.gov/cgi-bin/cuu/Value?rp"
    publisher: "NIST / CODATA"
    accessed: '2026-11-24'
  - title: "PDG Live — neutron listings"
    url: "https://pdgprod.lbl.gov/pdgprod/pdgLive/Particle.action?init=0&node=S017"
    publisher: "Particle Data Group"
    accessed: '2026-11-24'
conditions: >-
  本页的 10 fm 是人为选取的通用核直径参考，来源只给出轻核约 4 fm、重核约 15
  fm的范围；它不是某一个具体核素的测量值，也不是所有原子核的统一尺寸。比较具体核素时应改用该核素的电荷半径或直径。
uncertainty: >-
  核直径随核子数变化，轻核与重核相差数倍；10 fm 是 4–15 fm
  区间的圆整中点，本身没有单一测量误差。不同核的电荷分布、激发态与定义口径还会带来额外差异，因此保留为 needs-review。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮新建条目；用 WebFetch 打开 Britannica 原子页，核对“轻核约 4 fm、重核约 15 fm”的直径范围与飞米定义。
    - 用 WebFetch 打开 IAEA 核电荷半径页，核对其为 1H 至 96Cm 共 909 个同位素的自洽均方根电荷半径汇编。
    - 本页 10 fm 是区间中点参考而非实测值，故保留 needs-review；正文说明具体核素应使用各自数据。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: nucleus
  scene: space.object
  caption: 原子核 · 约 10 fm 通用参考
  note: 核子点云、颜色与排布为示意；10 fm 是通用参考直径，不是某一核素实测值；非按比例，非观测重建。
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

原子核是原子中心由质子和中子组成的束缚系统，几乎集中了原子的全部质量。[1] 它不是所有元素都相同大小的球：核子数越多，核通常越大。本页用约 10 飞米作为通用参考，是为了把“原子核”放进尺度轴，而不是宣布每个核都正好这么大。[1]

## 怎样知道

核尺寸主要从散射与谱学实验推断：电子或缪子与核电荷相互作用，实验数据被拟合成电荷分布，再得到均方根半径。[2] IAEA 的汇编覆盖从氢到锔的 909 个同位素，结合光学同位素移位、缪子谱与电子散射，给出自洽的均方根电荷半径。[2] Britannica 则给出量级范围：轻核如碳的直径约 4 飞米，重核如铅约 15 飞米。[1] 这些数据支持“核在几飞米量级”，但不支持一个适用于所有核的精确数字。

## 数值与口径

本页的 1×10⁻¹⁴ 米等于 10 飞米，是 4–15 飞米区间的圆整中点，标记为近似值。[1] 它不是某个核的实测直径，也不是把 909 个核的半径简单平均。具体比较应使用该核素的电荷半径：例如碳核与铀核的数值不同，且半径与直径相差两倍。[2] 若用物质半径而非电荷半径，数值也会改变。

## 常见误解

常见误解之一是以为所有原子核都一样大；实际上从氢核到重核，尺寸可以相差数倍。[1] 另一个误解是把 10 飞米当成“原子核的标准直径”，再拿它去和原子直径相比；原子半径约 1–2 埃，二者相差四个数量级以上，但比例会随核素变化。[1][2] 还有人把原子核与原子混为一谈；原子还包括电子云，尺度由电子分布决定。

## 与其他尺度的关系

原子核位于核子与原子之间：单个核子约 1 飞米，原子核直径约几到十几飞米，原子半径约 0.1 纳米。[1] 这条尺度轴上，核只占原子极小部分，却集中了几乎全部质量。继续阅读质子、中子、碳核与铀核，可把“通用量级”替换成具体核素的口径。

## 电荷半径与物质半径

核半径常被画成一个球，但实验给出的通常是电荷半径：质子分布的中途密度位置，或均方根半径。物质半径还包含中子分布，重核的中子皮可能比质子分布更外扩。[2] 同一个核用不同观测量会得到不同半径，不能只写一个“核直径”。本页的 10 飞米是通用量级，不是某个核素的实测值。

## 为什么没有统一直径

从氢核到铅核，核子数增加，半径大致按 A¹ᐟ³ 增长，但系数依核素与测量口径而变。[1][2] 轻核与重核不能共用一个精确直径；用电子散射、缪子谱和光学同位素移位得到的结果也需要分别标注。把“原子核大小”写成一个数，只是入门阶段的方便说法。

## 五轴对照

在空间轴，核在几飞米；在质量轴，核子质量几乎撑起整个原子质量；在温度轴，恒星核心的聚变温度决定核能否结合；在时间轴，核合成发生在宇宙早期。四条轴共用“核”这个对象，但各自量的不是同一个属性。[1][2]

## 电荷半径与物质半径

原子核的“半径”至少有两套口径：电荷半径由电子散射或原子光谱给出，描述质子分布的均方根；物质半径由核力分布或高能散射推断，通常略大。铅-208 的电荷半径约 5.5 费米，物质半径会因中子皮而不同。正文若只写一个“核半径”，必须说明是哪一种，否则不同实验的数值无法直接比较。[1][S1]

## 延伸核对

补充的来源 [3]（NIST / CODATA）、[4]（Particle Data Group） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
