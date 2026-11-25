---
id: temperature.data-center-inlet
title: 数据中心进风温度：18 ℃的运行窗口
titleEn: Data-centre inlet temperature at 18 °C
dimension: temperature
category: 常温
summary: 数据中心冷通道进风温度常用 18—27 ℃的推荐范围；18 ℃是偏低端示例，用于说明服务器散热与能效之间的折中，不是所有机房统一设定。
quantity:
  value: 291.15
  unit: K
  measure: 18 ℃进风示例
  approximate: true
  measureLabel: 291.15 K（18 ℃进风示例）
displayValue: 291.15 K（18 ℃进风示例）
related:
  - temperature.room-temperature
  - temperature.steelmaking_temp
  - temperature.grid-battery-coolant
  - space.city
reviewStatus: reviewed
sources:
  - title: ASHRAE Technical Committee 9.9 Datacom Series
    url: 'https://www.ashrae.org/technical-resources/bookstore/datacom-series'
    publisher: ASHRAE
    accessed: '2026-11-23'
  - title: "New Cooling Method for Supercomputers to Save Millions of Gallons of Water"
    url: 'https://www.energy.gov/technologycommercialization/articles/new-cooling-method-supercomputers-save-millions-gallons-water'
    publisher: "US Department of Energy"
    accessed: '2026-11-23'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 进入服务器前的冷却空气
  measurementSite: 机柜进风口
  duration: 稳定运行工况
  basis: ASHRAE 推荐温区，不是芯片结温
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - 本轮新增条目：按所列机构资料重写，核对温度口径、测量位置与适用条件。
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 18 ℃是推荐区间的偏低示例；具体设定受设备等级、湿度、海拔、冗余与节能策略影响。
visual:
  template: heat-map
  profile: data-centre
  caption: 服务器机柜、冷通道与气流组织的示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#5b83a6'
  scene: temperature.object
zone: 常温
tags:
  - 常温
  - 温度
  - 环境
---
## 它是什么

数据中心进风温度是冷却空气进入服务器机柜前的温度。它不等于芯片结温，也不等于机房任意位置的温度；机柜前后、冷通道与热通道会有明显差异。[1] 18 ℃是一个偏低端示例，许多推荐范围把冷通道进风控制在约 18—27 ℃。

## 怎样知道

ASHRAE 的 datacom 系列按设备等级给出温湿度允许范围，行业常用“冷通道进风”作为可测量边界；数据中心用机柜传感器、冷通道温度探头与 CFD 气流模型核对。[1] 美国能源部的资料则把冷却能耗与气流组织、设定点联系起来。[2] 测点位置不同，读数不能直接比较。

## 数值与口径

291.15 K 等于 18 ℃。它描述进风，不是 CPU 或 GPU 的结温；芯片结温通常更高，靠散热器与风扇维持。提高进风温度可以节省制冷能耗，但会缩小设备安全余量，并影响电池、硬盘与电源寿命。[1][2] 所以“18 ℃”不是越冷越好的道德判断，而是系统设计参数。

## 常见误解

常见误解是把机房温度设得越低越可靠。过低会浪费制冷能耗，也可能造成局部结露；真正要控制的是设备进风、湿度与气流短路。[1] 另一个误解是只看空调回风温度，不看机柜进风。

## 与其他温度的关系

它接近 room-temperature 的 20 ℃，但比人体舒适温度更强调设备边界；与 semiconductor-junction 的更高结温相比，18 ℃只是散热链的起点。与 grid-battery-coolant 的 25 ℃相比，两者都是“把废热搬走”的工程温区，不是自然温度。[1][2]


实际运维还要同时看湿度与露点：过低湿度会增加静电风险，过高则可能结露。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 291.1 K，即 18 ℃（按 T/K−273.15 换算）；约为室温（293 K）的 0.994 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
