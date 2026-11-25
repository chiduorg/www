---
id: temperature.nova-outburst
title: LMC 2009a 新星的超软 X 射线阶段
titleEn: Nova LMC 2009a supersoft X-ray phase
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  Orio 等对 LMC 2009a 新星的 XMM–Newton 光谱研究，把主导连续谱解释为壳层燃烧白矮星的大气， 峰值有效温度约 81 万至 100 万
  K。这里取该模型范围中点定位，不再使用无区域条件的 1 亿 K。
quantity:
  value: 905000
  unit: K
  measure: LMC2009a白矮星大气峰值有效温度的模型范围
  measureLabel: LMC2009a白矮星大气峰值有效温度的模型范围
  approximate: true
  range:
    min: 810000
    max: 1000000
    unit: K
    kind: 大气模型峰值有效温度范围
  kind: reference-midpoint
displayValue: 约 0.81–1.00 MK（大气拟合峰值）
related:
  - temperature.white-dwarf-surface
  - temperature.kilonova_temp
  - temperature.type-ia-supernova
  - temperature.sirius-surface
  - time.first-stars
  - space.supernova-remnant
reviewStatus: reviewed
sources:
  - title: 'Nova LMC 2009a as observed with XMM–Newton, compared with other novae'
    url: 'https://academic.oup.com/mnras/article/505/3/3113/6279690'
    publisher: 'Orio et al., MNRAS 505 (2021)'
    accessed: '2026-11-06'
  - title: nova
    url: 'https://www.britannica.com/science/nova-astronomy'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: nova-outburst
  icon: "\U0001F31F"
  relatedLabels: 白矮星、热核反应、双星系统、吸积过程、Ia型超新星、白矮星表面、物质抛射、元素合成、恒星演化
conditions: >-
  Orio 等 2021 年研究：2009 年 LMC 2009a 新星爆发的四组高分辨 RGS 光谱； 主导白矮星大气连续谱的模型峰值有效温度范围
  810,000–1,000,000 K； 对象为超软 X 射线阶段的大气辐射层，不是深处燃烧层；轴取中点 905,000 K，并非额外观测点。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 'Orio 等摘要给出壳层燃烧白矮星大气连续谱的峰值有效温度介于 810,000 与 1,000,000 K。'
    - Britannica 说明新星是白矮星表面的热核爆发，光度可短暂升高数千至十万倍，与 Ia 型毁星爆炸不同。
  originalQuantity:
    value: 100000000
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: null
      unit: K
      measure: 未指定新星区域与阶段的温度
      approximate: true
      measureLabel: 未指定新星区域与阶段的温度
      status: undetermined
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 0.81–1.00 MK 是大气模型拟合的峰值有效温度范围，中点 905,000 K 仅用于轴定位；
  ​​不同光谱时段、大气成分、吸收线与模型假设都会改变结果，不能当作精确的单一温度。
visual:
  template: compact-star
  profile: white-dwarf
  caption: LMC2009a新星的白矮星大气
  note: >-
    对应特定新星超软 X 射线阶段的大气峰值有效温度范围，中点只定位；不是核燃烧层温度；
    画面非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#d5def7'
  symbol: LMC 2009a
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

LMC 2009a 是大麦哲伦云中的一颗复发新星。新星发生在双星系统中：白矮星从伴星吸积富含氢的物质，壳层在高压高温下发生热核爆发，光度短暂升高，随后把部分物质抛射出去。[2] 在爆发后的超软 X 射线阶段，白矮星表面仍在燃烧，大气发出能量较低但数量很多的 X 射线。这里讨论的是这一阶段白矮星大气的峰值有效温度，不是爆发前吸积盘的温度，也不是白矮星核心的温度。

## 怎样测到或为何是推断

Orio 等分析了 LMC 2009a 在 2009 年爆发期间的四组 XMM–Newton 高分辨率 RGS 光谱。光谱中有复杂的吸收和发射特征，但主导连续谱可以用仍在壳层燃烧的白矮星大气模型解释。拟合得到的峰值有效温度介于约 810,000 K 与 1,000,000 K。[1] 这不是直接测量某个表面点的温度，而是把整段光谱与大气模型比较后得到的有效温度。模型中的大气成分、表面重力、吸收线处理和距离都会影响结果，因此论文给出的是一个范围，而不是单一值。

## 数值与口径

本条采用 905,000 K 作为范围中点，用于在温度轴上定位；真实范围是 810,000–1,000,000 K。这个中点不声称是某次观测的最佳拟合，也不代表所有新星。它是大气有效温度，不是深处核燃烧层的物质温度；燃烧层可以更热，但被大气遮蔽。超软 X 射线阶段的温度还会随白矮星冷却和壳层燃烧耗尽而变化。[1] 因此这个数值必须与“LMC 2009a”“超软 X 射线阶段”“大气模型”一起使用。

## 常见误解

第一，把新星当成 Ia 型超新星；新星通常只抛射表面壳层，白矮星仍然存在，而 Ia 型会摧毁白矮星。[2] 第二，把大气有效温度当成燃烧层温度；两者相差很大，观测只能看到外层辐射。第三，把范围中点当成最佳拟合或唯一温度；中点只是坐标定位。第四，把所有新星的峰值温度都设成同一值；不同新星、不同阶段和不同大气模型会给出不同结果。[1]

## 与其他温区的关系

约 90 万 K 高于天狼星 B 表面的 25,000 K，也高于太阳表面 5,772 K。它低于中子星表面约 2×10⁶ K 的例子，远低于核心坍缩超新星的 10¹¹ K。与千新星光谱拟合的 5,500 K 相比，它又高出两个数量级，因为新星大气处于持续燃烧阶段，而千新星抛射物已经迅速膨胀冷却。比较时要区分白矮星大气、中子星表面和爆发抛射物。[1]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
