---
id: space.neutrino
title: 中微子散射与尺度
titleEn: Neutrino Cross Section
dimension: length
category: 量子与粒子
summary: 中微子不带电荷、质量极小，几乎只通过弱作用与物质碰撞。它没有可定义的经典直径；实验中能比较的是特定能量下的相互作用截面，而不是粒子的几何边界。
quantity:
  value: null
  unit: m
  measure: 中微子散射截面是面积量，尚无本条适用的比较长度
  approximate: true
  status: undetermined
displayValue: 比较长度未定（截面不能直接当长度）
related:
  - space.w-z-boson
  - space.electron-compton
  - space.proton
  - temperature.neutrino-background-temp
reviewStatus: reviewed
sources:
  - title: What’s a neutrino?
    url: 'https://neutrinos.fnal.gov/whats-a-neutrino/'
    publisher: Fermilab
    accessed: '2026-11-06'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-06'
  - title: FASER measures high-energy neutrino interaction strength
    url: >-
      https://home.cern/faser-measures-high-energy-neutrino-interaction-strength/
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: neutrino
  icon: "\U0001F47B"
  relatedLabels: β衰变、中微子振荡、标准模型、超新星中微子、太阳中微子问题、惰性中微子、无中微子双β衰变
conditions: 本条不使用中微子直径；只在指定反应道与能量下讨论相互作用截面，并说明截面不是粒子几何面积。
uncertainty: 中微子质量与截面随能量、味和反应道变化；FASER结果只覆盖500–1700 GeV的特定反应，不能推广为普适尺寸或固定误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch核对Fermilab、CERN标准模型与CERN的FASER测量页面。
    - 用截面换算的等效半径仅作单位说明，明确它不是中微子直径。
  originalQuantity:
    value: 1.e-21
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: field
  variant: neutrino
  color: '#b8b8c9'
  referenceAxis: x
  caption: 中微子相互作用的探测示意
  note: 轨迹、靶板与点云为示意，非按比例，非观测重建；不代表中微子的实体边界。
  framePadding: 0.3
  sourceMeasure: FASER在500–1700 GeV能区测得的相互作用截面
  scene: space.object
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
  - 未定量值
---
## 中微子是什么

中微子是标准模型中的基本粒子，与电子同属轻子，不带电荷，质量很小但并非为零。它们只通过弱作用与引力与其他物质相互作用，因此能穿过地球而几乎不留痕迹。[1][2] 太阳、超新星与宇宙射线都会产生中微子；在大爆炸遗留的宇宙中微子背景里，它们的数量极其庞大，是宇宙中最丰富的有质量粒子之一。[1]

## 探测器怎样“看见”它

实验看到的通常不是入射中微子本身，而是它碰撞后产生的带电轻子与其他粒子。FASER 用 730 层钨板与乳胶片，记录 2022 年 LHC 碰撞产生的高能中微子；找到可追溯到同一顶点的轨迹，并识别其中的高能电子或缪子。[3] 这是事件重建，不是给中微子量直径。[3]

## 数值与口径

FASER 在 500–1700 GeV 能量范围测得电子中微子截面约 (1.2⁺⁰·⁹₋₀·₈)×10⁻³⁸ cm²/GeV，缪子中微子约 (0.5±0.2)×10⁻³⁸ cm²/GeV。[3] 截面是面积量，且按能量归一化；1 cm² 等于 10⁻⁴ 平方米，所以 10⁻³⁸ cm² 对应 10⁻⁴² 平方米。若硬把 1×10⁻³⁸ cm² 折成圆盘面积，其半径约 6×10⁻²² 米，但这只是单位换算，不是中微子大小。[3]

## 常见误解

误解之一是把“相互作用概率小”当成“几何尺寸小”。截面依赖能量、靶物质与反应道，弱作用截面小不等于粒子是点。[1][3] 误解之二是把探测器体积当成中微子体积；FASER 的探测器是数百米尺度装置，与粒子本身无关。[3] 还要注意，中微子质量很小但并非为零，把“质量为零”当成已定事实同样不符合当前认识。[1]

## 与其他尺度的关系

中微子没有可定义的实体直径，因此本条不参与长度排序；能比较的是特定能量下的截面，或它在宇宙中微子背景中的平均间距。[1][2] 与质子、电子康普顿波长等条目并读时，应比较“定义了什么量”，而不是把截面改写成半径。
