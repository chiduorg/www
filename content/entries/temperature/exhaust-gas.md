---
id: temperature.exhaust-gas
title: 汽车尾气温度
titleEn: Automotive exhaust gas temperature
dimension: temperature
category: 高温
summary: >-
  汽车尾气温度随工况和测点大幅变化。本条取约 900 K（627 °C）作为汽油车高负荷时的典型参考，
  它不是尾气在怠速、冷启动和全负荷下都保持的恒定值，也不是发动机冷却液温度。
quantity:
  value: 900
  unit: K
  measure: 汽油车尾气温度典型参考
  approximate: true
  measureLabel: 汽油车尾气温度典型参考
displayValue: '约 900 K（627 °C）'
related:
  - temperature.car-engine-coolant
  - temperature.jet-turbine
  - temperature.incinerator
  - temperature.oven
reviewStatus: reviewed
sources:
  - title: 'Automotive Thermoelectric Generator Design Issues'
    url: 'https://www.energy.gov/sites/prod/files/2014/03/f13/stabler_0.pdf'
    publisher: U.S. Department of Energy
    accessed: '2026-11-07'
  - title: catalytic converter
    url: 'https://www.britannica.com/technology/catalytic-converter'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
conditions: >-
  汽油乘用车排气系统，取接近排气歧管或催化器入口的尾气温度；发动机负荷、转速、空燃比、
  点火时刻、环境温度和测点位置都会改变读数。本条不指冷却液温度、催化器床温或尾管出口温度。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '核对美国能源部汽车热电发电机资料：汽油车排气入口典型温度约 600 °C，极端工况可短时接近 1,000 °C。'
    - '核对 Britannica「catalytic converter」：催化器让废气通过涂覆催化剂的蜂窝结构，氧化一氧化碳和碳氢化合物。'
    - '正文取 627 °C 的圆整值 900 K，并说明怠速、低负荷与高负荷下尾气温度差别很大。'
uncertainty: >-
  汽油车尾气温度常见约 400–1,000 K，具体取决于工况和测点；900 K 只是便于比较的典型参考，不是恒定值。
  柴油车、混合动力车和不同后处理装置的温度曲线也不同，不能用一个数字概括全部车型。
    - '2026-11-07 来源可访问性核对：https://www.energy.gov/sites/prod/files/2014/03/f13/stabler_0.pdf 返回可用响应；https://www.britannica.com/technology/catalytic-converter（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: heat-map
  profile: exhaust-gas
  backdrop: heat-flow
  caption: 汽车排气系统温度分布示意
  note: 画面为排气歧管、催化器和尾管的温度分布示意，管路结构、颜色和热区范围均经艺术处理；示意，非按比例，非观测重建；各对象分别调整显示大小。
  color: '#c96b4a'
  symbol: Exhaust gas
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 机械
---
## 它是什么

汽车尾气温度指发动机排出的废气在排气道、催化器或消声器附近的温度。本条取约 900 K（627 °C）作为汽油车高负荷时的典型参考，而不是尾气在任何时刻都保持的温度。[1] 从怠速、冷启动到全负荷，尾气温度可以相差数百开尔文。

## 怎样测到

尾气温度用铠装热电偶或红外测温在排气歧管、催化器入口和出口等位置测量；不同测点的读数差别很大。美国能源部的一份汽车热电发电机资料把汽油车排气入口的典型温度写作约 600 °C，并指出极端工况可短时接近 1,000 °C。[1] Britannica 说明催化器让废气通过涂有催化剂的蜂窝结构，把一氧化碳和碳氢化合物氧化。[2]

## 数值与口径

627 °C 换算为约 900 K。900 K 是便于比较的典型参考值，不是恒定值：怠速和低负荷时尾气可能降到约 400–700 K，高负荷或接近催化器入口时可达 900–1,200 K。测点越靠近气缸盖通常越高，经过涡轮、催化器和消声器后逐渐降低。[1][2]

## 常见误解

第一，把尾气温度当成发动机冷却液温度；冷却液通常维持在 363 K 左右，而尾气高得多。第二，把某一工况的读数当成全年平均值；城市低速行驶与高速爬坡的尾气温度完全不同。第三，认为催化器出口温度等于入口温度；催化反应和散热会改变温度。第四，把 900 K 当成所有车型的统一标准，柴油、汽油和混合动力车型的排气温度曲线并不相同。[1][2]

## 与其他温区的关系

900 K 高于水的沸点 373 K 和汽车冷却液的约 363 K，低于垃圾焚烧炉的 1,273 K，也低于焦炉的约 1,300 K。它大致处在家用烤箱设定与低温工业炉之间，说明汽车尾气虽热，但仍远低于冶金炉的温区。[1]
