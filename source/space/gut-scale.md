---
id: space.gut-scale
title: 大统一尺度
titleEn: GUT Scale
dimension: length
category: 量子与粒子
summary: 大统一理论讨论强作用与电弱作用能否在更高能量下归于统一描述。它的“尺度”首先是模型中的能标；把能标换成长度，还需要说明公式、参数和实验限制。
quantity:
  value: null
  unit: m
  measure: 大统一模型的特征长度尚未指定
  approximate: true
  status: undetermined
displayValue: 比较长度未定（需指定模型与能标）
related:
  - space.strong-force
  - space.w-z-boson
  - space.planck
  - space.superstring
  - time.grand-unification-epoch
reviewStatus: reviewed
sources:
  - title: Unified forces
    url: 'https://home.cern/science/physics/unified-forces'
    publisher: CERN
    accessed: '2026-11-06'
  - title: Cosmology — Superunification and the Planck era
    url: >-
      https://www.britannica.com/science/cosmology-astronomy/Superunification-and-the-Planck-era
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 2022 CODATA — Reduced Planck constant in eV s
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?hbarev'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
legacy:
  id: gut-scale
  icon: "\U0001F517"
  relatedLabels: 规范场论、耦合常数跑动、质子衰变、磁单极子、重子数不对称、超对称大统一、弦理论唯象学
conditions: 本条讨论大统一模型的能量标度及其换算长度，不指某个已观测物体的尺寸；未选定模型时不做数值排序。
uncertainty: 大统一能标依赖模型、耦合常数跑动与阈值修正，没有统一值；文中10¹⁶ GeV只是常见量级示例，换算长度是约定，不是测量误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「大统一理论讨论强作用与电弱作用能否在更高能量下归于统一描述。它的“尺度”首先是模型中的能标；把能标换成长度，还需要说明公式、参数和实验限制。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 本轮按五节结构重写；用WebFetch核对CERN、Britannica与NIST页面，保留“理论预言”与“已观测”的区分。
    - 能标换算长度明确标为约定，不把小尺度当成宇宙或粒子的实体直径。
  originalQuantity:
    value: 1.e-27
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: field
  variant: unification
  color: '#b79ac9'
  referenceAxis: x
  caption: 大统一能标换算长度的理论示意
  note: 点云与标尺表示理论能标对应的长度约定，为示意，非按比例，非观测重建；不代表存在同样大小的实体。
  framePadding: 0.3
  sourceMeasure: 常见大统一能标10¹⁶ GeV按ħc/E换算的约定长度
  scene: space.object
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
  - 未定量值
---
## 大统一尺度是什么

大统一理论尝试把强相互作用与电弱相互作用放进同一个更高能量的描述。这里的“尺度”首先是能量标度，其次才可能被换算成长度；它不是某个粒子的直径，也不是早期宇宙整体的半径。[1][2]

## 为什么它是理论推断

电弱统一已有实验支持：W、Z 玻色子的性质与电弱理论相符。但把强作用也并入同一框架，尚无直接证据。CERN 明确说，相关能量至少比现有加速器能到达的高出十亿倍，只能借助早期宇宙条件或间接实验寻找后果。[1] 因此“大统一”是模型预言，不是已观测事实；不同模型的粒子内容、耦合常数和预言并不相同。[1][2]

## 数值与口径

常见模型把大统一能标放在 10¹⁶ GeV 量级附近，但这个数字依赖模型与耦合常数跑动，不能当作普适常数。[1] 若取 E=10¹⁶ GeV，用 ħc/E 可换算出约 2×10⁻³² 米；这是约定长度，不是测到的物体尺寸。ħc 由 NIST 的约化普朗克常数与光速相乘得到，约 197.3 MeV·fm。[3] 换成 hc/E 会相差 2π，比较时必须注明公式。

## 常见误解

误解之一是把“统一”理解成几种力在日常环境中强度相同；实际上统一描述发生在极高能量下，低能时它们仍表现为不同的力。[1] 误解之二是把能标换算出的长度当成“宇宙在某一时刻只有这么大”；该长度只对应一个能量条件，和可观测宇宙的尺寸不是同一概念。[1][3]

## 与其他尺度的关系

它比 W 玻色子的约化康普顿波长（约 2.5×10⁻¹⁸ 米）小十几个数量级，却仍比普朗克长度大约三个数量级。[3] 沿尺度轴向上是电弱尺度，向下是普朗克尺度；这条链条展示的是理论能标，而不是一串实际物体。LHC 寻找超对称等低能后果，只能约束模型，不能把“尚未发现”直接读成“统一不存在”。[1][3]
