---
id: temperature.battery-thermal-runaway
title: 电池热失控：150 ℃的链式升温
titleEn: Battery thermal runaway at 150 °C
dimension: temperature
category: 高温
summary: 锂离子电池热失控常从约 80—150 ℃的异常升温开始，150 ℃是链式反应示例；它不是所有电池统一的起爆温度，也不等于火焰温度。
quantity:
  value: 423.15
  unit: K
  measure: 150 ℃热失控示例
  approximate: true
  measureLabel: 423.15 K（150 ℃热失控示例）
displayValue: 423.15 K（150 ℃热失控示例）
related:
  - temperature.grid-battery-coolant
  - temperature.steelmaking_temp
  - temperature.data-center-inlet
  - temperature.hydrogen-fuel-cell
  - space.human
reviewStatus: reviewed
sources:
  - title: "Batteries"
    url: 'https://www.energy.gov/eere/vehicles/batteries'
    publisher: "US Department of Energy"
    accessed: '2026-11-23'
  - title: Battery Thermal Runaway
    url: 'https://www.nrel.gov/docs/fy19osti/73641.pdf'
    publisher: National Renewable Energy Laboratory
    accessed: '2026-11-23'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 锂离子电芯内部与模组
  measurementSite: 电芯表面或内部热电偶
  duration: 从异常升温到热失控
  basis: 特定化学体系与荷电状态，不是通用阈值
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - 本轮新增条目：按所列机构资料重写，核对温度口径、测量位置与适用条件。
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 80—150 ℃是常见起始区间；不同正极、电解液、荷电状态与封装会显著改变触发温度与传播速度。
visual:
  template: metal-furnace
  profile: battery
  caption: 电芯、隔膜与热失控链式反应的示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#b45d43'
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 工业
---
## 它是什么

热失控是电池内部产热速率超过散热速率后，温度与反应速率相互放大的过程。锂离子电池在过充、内短路、机械挤压或外部加热下，可能先在约 80—150 ℃出现隔膜收缩、电解液分解等异常，再进入链式升温。[1] 150 ℃是这一区间的示例，不是所有电芯的固定起爆点。

## 怎样知道

研究者用加速量热仪、绝热炉、针刺与外部加热试验测量电芯的产热曲线、气体成分与传播速度；模组层面还要做热扩散测试。[2] 美国能源部的科普资料解释锂离子电池的充放电与热风险，NREL 的报告则给出热失控实验方法与模组设计考虑。[1][2]

## 数值与口径

423.15 K 等于 150 ℃。这个温度描述电芯异常升温的示例，不是火焰温度，也不是环境气温；热失控后局部温度可以远高于此。[1] 评估要看荷电状态、化学体系、散热设计与触发方式，不能只记一个阈值。

## 常见误解

常见误解是“电池只要不到 150 ℃就绝对安全”。内短路可能在局部瞬间形成热点，表面热电偶未必捕捉到；不同电芯的触发温度也不同。[2] 另一个误解是用水直接扑救所有电池火灾；锂离子电池热失控可能复燃，需要按设备与消防规范处置。

## 与其他温度的关系

它远高于 data-center-inlet 的 18 ℃和 room-temperature 的 20 ℃，也高于 water-boiling 的 100 ℃；与 metal-furnace 的工业高温相比，150 ℃只是热失控链式反应的起点。与 hydrogen-fuel-cell 的 80 ℃相比，两者都在“能量转换设备”里，但失效模式不同。[1][2]


热失控的传播速度比单个电芯的触发温度更值得关注，模组里的隔热与泄压设计决定是否会连锁。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 423.1 K，即 150 ℃（按 T/K−273.15 换算）；约为水的沸点（373.1 K）的 1.13 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
