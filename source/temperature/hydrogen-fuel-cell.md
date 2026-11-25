---
id: temperature.hydrogen-fuel-cell
title: 氢燃料电池：80 ℃的运行温度
titleEn: Hydrogen fuel cell operating at 80 °C
dimension: temperature
category: 高温
summary: 质子交换膜氢燃料电池常运行在约 60—80 ℃；80 ℃是示例，不是所有电堆的统一温度，它受膜材料、冷却与负载控制。
quantity:
  value: 353.15
  unit: K
  measure: 80 ℃运行示例
  approximate: true
  measureLabel: 353.15 K（80 ℃运行示例）
displayValue: 353.15 K（80 ℃运行示例）
related:
  - temperature.battery-thermal-runaway
  - temperature.data-center-inlet
  - temperature.boiling-water
  - elements.h
reviewStatus: reviewed
sources:
  - title: "Hydrogen and Fuel Cell Technologies Office Plans, Implementation, and Results"
    url: 'https://www.energy.gov/cmei/fuels/hydrogen-and-fuel-cell-technologies-office-plans-implementation-and-results'
    publisher: "US Department of Energy"
    accessed: '2026-11-23'
  - title: Hydrogen
    url: 'https://www.iea.org/energy-system/low-emission-fuels/hydrogen'
    publisher: International Energy Agency
    accessed: '2026-11-23'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 质子交换膜电堆
  measurementSite: 电堆冷却液出口或膜电极
  duration: 稳定负载工况
  basis: PEMFC 运行温度示例，不是环境温度
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - 本轮新增条目：按所列机构资料重写，核对温度口径、测量位置与适用条件。
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 60—80 ℃是常见 PEMFC 区间；高温膜、低压运行与不同负载策略会改变温度设定。
visual:
  template: metal-furnace
  profile: fuel-cell
  caption: 电堆、双极板与冷却回路的示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#6f8c9f'
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 环境
---
## 它是什么

氢燃料电池把氢与氧的化学能直接转成电与热，质子交换膜（PEM）电堆常运行在约 60—80 ℃。80 ℃是示例，目的是让膜保持良好质子传导、催化剂活性与水量平衡。[1] 它不是燃烧温度，也不等于排气管温度。

## 怎样知道

电堆测试台测量电流—电压曲线、冷却液进出口温度、膜阻抗与尾气湿度；系统还要控制空气计量比、氢气循环与热管理。[1][2] IEA 的氢能评估则把燃料电池效率、寿命与基础设施放在应用背景中。[2] 温度过高会加速膜降解，过低则可能积水、催化活性不足。

## 数值与口径

353.15 K 等于 80 ℃。这个值描述电堆冷却液或膜电极附近的工作温度，不是氢火焰温度，也不是环境气温。[1] 电堆内部不同位置有温差，负载变化时温度也会波动；评估寿命要看热循环与启停次数。

## 常见误解

常见误解是“氢燃料电池车不会发热”。燃料电池效率虽高，仍有大量废热需要散热器与冷却回路。[1] 另一个误解是把 80 ℃当成安全上限；不同膜材料与电堆设计有不同允许范围。

## 与其他温度的关系

它高于 data-center-inlet 的 18 ℃，低于 boiling-water 的 100 ℃；与 battery-thermal-runaway 的 150 ℃相比，80 ℃是正常运行而不是失控。与 pasteurization 的 72 ℃温度接近，但一个是食品杀菌，一个是电化学运行，不能类比。[1][2]


电堆启停与低温环境还会造成膜内结冰或水量失衡，因此热管理不仅要维持 80 ℃，还要控制升温速率与冷却液流量。[1][2]


冷启动时还应预热冷却液，避免局部过湿或结冰。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 353.1 K，即 80 ℃（按 T/K−273.15 换算）；约为水的沸点（373.1 K）的 0.946 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
