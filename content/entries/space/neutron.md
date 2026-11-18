---
id: space.neutron
title: 中子
titleEn: Neutron
dimension: length
category: 量子与粒子
summary: 中子是电中性的核子，本页以 0.864 飞米的中子磁半径作为核子量级比较长度；它不是电荷半径，也不是中子的硬球直径。
quantity:
  value: 8.64e-16
  unit: m
  measure: 核子参考半径
  approximate: true
displayValue: 约 0.864 fm（中子磁半径）
related:
  - space.proton
  - space.deuteron
  - space.alpha-particle
  - space.atomic-nucleus
  - space.quark
reviewStatus: reviewed
sources:
  - title: PDG Live — neutron listings
    url: 'https://pdgprod.lbl.gov/pdgprod/pdgLive/Particle.action?init=0&node=S017'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: neutron
    url: 'https://www.britannica.com/science/neutron'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: atom
    url: 'https://www.britannica.com/science/atom'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: >-
  采用 PDG 给出的中子磁半径 0.864 fm
  作为比较长度；该量由磁形状因子提取，描述磁化分布，不是电荷半径，也不代表中子的几何外缘。数值适用于自由中子及常规核环境中的中子，不适用于把中子当成均匀硬球的情形。
uncertainty: >-
  PDG 磁半径为 0.864 +0.009/−0.008 fm；中子均方根电荷半径平方为 −0.1155 ± 0.0017
  fm²，为负值，不能开方得到正的电荷半径，因此本页没有用 0.864 fm 冒充电荷半径。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮新建条目；用 WebFetch 打开 PDG 中子 listings，核对磁半径与均方根电荷半径平方。
    - 用 Britannica 中子页核对组成、质量与整体电中性；用 Britannica 原子页核对飞米定义及核尺度范围。
    - 明确区分磁半径、电荷半径和硬球直径，并说明负的均方根电荷半径平方不能直接开方。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "nucleus"
  scene: "space.object"
  caption: "中子量级 · 0.864 fm 磁半径参照"
  note: "图中点云与颜色为示意；0.864 fm 是磁半径而非电荷半径或硬球直径；非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
  - 原子核
---
## 它是什么

中子是构成原子核的电中性核子，与质子质量相近，由一个上夸克和两个下夸克组成。[2] 本页把 0.864 飞米作为它在尺度轴上的比较长度，这个数来自中子的磁半径，而不是电荷半径；它描述磁化分布的范围，也不等于一个可以摸到的硬球表面。[1]

## 怎样知道

中子的尺寸不是用显微镜看出来的。散射实验测量中子与带电粒子或磁场的相互作用，再把数据拟合成形状因子，从而提取电荷半径与磁半径。[1] PDG 汇集的均方根电荷半径平方为 −0.1155 ± 0.0017 平方飞米；负号说明它描述的是电荷分布的细微偏置，不能直接开方当作普通半径。同一份 listings 给出的磁半径是 0.864 +0.009/−0.008 飞米。[1] Britannica 说明中子整体不带电，但仍具有磁矩，并且内部由夸克组成。[2] 核尺度常用飞米，1 飞米等于 10⁻¹⁵ 米。[3]

## 数值与口径

0.864 飞米等于 8.64×10⁻¹⁶ 米。它由磁形状因子提取，描述磁化强度的空间分布；若换成电荷形状因子，得到的均方根电荷半径平方是负值，二者不是同一个物理量。[1] 因此本页的 quantity 标记为近似值，并明确写成“磁半径”。读者若看到“中子半径约 0.8 飞米”，应先问清是电荷半径、磁半径还是核力半径，否则数字不可直接比较。[1][2]

## 常见误解

常见误解之一是中子不带电，所以内部没有电荷分布。实际上中子由带电夸克组成，整体电荷为零并不等于局部没有电荷。[2] 第二个误解是把 0.864 飞米当成直径；它是半径，而且只是磁半径这一种口径。[1] 第三个误解是认为中子和质子尺寸完全一样；两者质量相近，但电荷与磁分布并不相同，不能互相替代。[1][2]

## 与其他尺度的关系

把 0.864 飞米放回尺度轴，它比原子核的直径小：轻核直径约 4 飞米，重核可达约 15 飞米；而原子半径约 1–2 埃，比核大四个数量级以上。[3] 这些比较都必须标明半径还是直径。继续阅读质子、氘核与 α 粒子，可以把“单个核子有多大”和“多个核子组成的核有多大”分开。
