---
id: temperature.glass_melting
title: Corning 7740 玻璃工作点
titleEn: Corning 7740 glass working point
dimension: temperature
category: 高温
summary: >-
  Corning 的 7740 硼硅酸盐玻璃资料表，将黏度 10⁴ poise 对应的工作点列为 1252°C，约 1525
  K。本条采用明确牌号和黏度指标，避免把玻璃加工温度写成所有玻璃共同的熔点。
quantity:
  value: 1525.15
  unit: K
  measure: Corning 7740玻璃在10⁴ poise黏度下的工作点
  measureLabel: Corning 7740玻璃在10⁴ poise黏度下的工作点
  approximate: true
  kind: manufacturer-reference
displayValue: '约 1,525 K（1252 °C，工作点）'
related:
  - temperature.aluminum-melting
  - temperature.silicon-melting
  - temperature.iron-melting
  - temperature.steelmaking_temp
  - temperature.lava-temperature
  - time.industrial-revolution
reviewStatus: reviewed
sources:
  - title: 'Corning Glass Material Properties — Soda Borosilicate, Code 7740'
    url: >-
      https://www.corning.com/media/worldwide/csm/documents/Soda_Borosilicate_7740.pdf
    publisher: 'Corning, manufacturer material data'
    accessed: '2026-11-06'
  - title: glass
    url: 'https://www.britannica.com/technology/glass'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: glass_melting
  icon: "\U0001FAD7"
  relatedLabels: 硅的熔点、炼钢温度、铁熔点、火山熔岩、陶瓷烧制、光纤通信、碳升华点、高温工业、建筑玻璃
conditions: >-
  厂家Corning Code 7740材料属性表；working point对应黏度10⁴ poise（10³ Pa·s），
  温度为1252°C。厂家未在表中给出该项测量不确定度，不视为所有玻璃的相变点或炉温设定。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      核对 Corning 7740 材料表：工作点 1252°C（10⁴ poise）、软化点 820°C（10⁷·⁶ poise）、退火点
      560°C（10¹³ poise）、应变点 510°C（10¹⁴ poise）。
    - Britannica glass 用于说明玻璃由熔体快速冷却、避免可见晶体形成，属于无长程有序的固体。
    - 保留牌号与黏度口径，不把工作点写成统一熔点；原 1673 K 记录保留。
  originalQuantity:
    value: 1673
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: 1673.15
      unit: K
      measure: 未指定配方的玻璃工艺参考
      approximate: true
      measureLabel: 未指定配方的玻璃工艺参考
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: Corning 表值给出 1252°C，未附该项测量不确定度；配方、含水量、热历史和黏度测量方法都会使同一黏度对应温度略有偏移。
visual:
  template: metal-furnace
  profile: glass
  caption: Corning7740玻璃工作点
  note: >-
    对应厂家表列10⁴poise黏度工作点，不是统一玻璃熔点；试样变形仅作示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: heat-flow
  color: '#ffc68d'
  symbol: Corning 7740
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

这里讨论的不是某种“玻璃的统一熔点”，而是 Corning 7740 硼硅酸盐玻璃的工作点。玻璃在冷却时没有像晶体那样固定的熔化或凝固温度，而是从黏性液体逐渐变硬；工程上用某一黏度对应的温度来描述加工阶段。[2] 7740 是钠硼硅酸盐玻璃，常用于耐热器皿和实验室玻璃。

## 怎样测到

Corning 的材料属性表按黏度给出特性点：工作点对应 10⁴ poise，即 10³ Pa·s，温度为 1,252 °C；同表还列出软化点 820 °C（10⁷·⁶ poise）、退火点 560 °C（10¹³ poise）和应变点 510 °C（10¹⁴ poise）。[1] 这些数值来自厂家对牌号 7740 的标准化黏度测量，不是对某一块玻璃的相变观测，也没有给出该项的测量不确定度。

## 数值与口径

1,252 °C 换算为 1,525.15 K，展示取约 1,525 K。[1] 工作点描述玻璃可以成形、拉制或吹制的黏度区间，不等于“熔化炉温”，也不等于软化开始。软化点、退火点和应变点分别对应更高黏度、更低温的工艺阶段；把 1,525 K 当成所有玻璃的熔点会混淆材料与口径。[1][2] 不同配方、含水量和热历史的玻璃，同一黏度对应的温度也不同。

## 常见误解

第一，认为玻璃有一个像冰一样的固定熔点；玻璃是缺乏长程有序的固体，转变是连续的动力学过程。[2] 第二，把工作点当成“必须加热到的炉温”；实际炉温通常高于工作点，且取决于成形工艺。第三，把 Corning 7740 的数值套到钠钙玻璃、石英玻璃或光纤玻璃；它们的黏度曲线不同。第四，忽略黏度单位：10⁴ poise 等于 10³ Pa·s，不是 10⁴ Pa·s。

## 与其他温区的关系

1,525 K 低于纯硅熔点 1,687 K 和纯铁熔点 1,811 K，高于铝熔点 933.15 K。它低于炼钢出钢的约 1,893 K，与本生灯高温区的 1,773 K 同一量级，说明玻璃软化并不需要达到金属熔化的温度；这与黏度口径有关。[1]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
