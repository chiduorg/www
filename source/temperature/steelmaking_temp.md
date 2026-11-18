---
id: temperature.steelmaking_temp
title: 电弧炉出钢温度（约1620°C）
titleEn: Electric arc furnace tapping temperature reference
dimension: temperature
category: 高温
summary: >-
  电弧炉炼钢的出钢温度是钢液倒入钢包时的目标温度，常取约 1620°C，即约 1893 K。它高于钢的液相线，也远低于炉内电弧的约
  3500°C；本条不把它写成所有钢种或所有炼钢炉的统一温度。
quantity:
  value: 1893.15
  unit: K
  measure: 电弧炉出钢温度工序参考
  measureLabel: 电弧炉出钢温度工序参考
  approximate: true
  kind: process-target
displayValue: '约 1,893 K（1620 °C，出钢目标）'
related:
  - temperature.iron-melting
  - temperature.glass_melting
  - temperature.tungsten-melting
  - temperature.rocket_plume
  - temperature.aluminum-melting
  - time.industrial-revolution
reviewStatus: reviewed
sources:
  - title: How does a steel mill work?
    url: 'https://www.pittini.it/en/pittini-answers/how-does-a-steel-mill-work/'
    publisher: Pittini Group
    accessed: '2026-11-06'
  - title: What is steel and how is steel made?
    url: >-
      https://www.eurofer.eu/about-steel/learn-about-steel/what-is-steel-and-how-is-steel-made/
    publisher: 'EUROFER, the European Steel Association'
    accessed: '2026-11-06'
  - title: 'Steel: Secondary steelmaking'
    url: 'https://www.britannica.com/technology/steel/Secondary-steelmaking'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: steelmaking_temp
  icon: "\U0001F3ED"
  relatedLabels: 铁熔点、玻璃熔化温度、火箭引擎喷焰、高温材料、冶金工程、碳减排、氢冶金、高炉、连铸、金属相变
conditions: >-
  电弧炉（EAF）以废钢为主要原料，石墨电极产生电弧熔化炉料；出钢温度指钢液倒入钢包时的目标温度。 本条采用约 1620°C
  的工序参考，适用于特定工厂和钢种；钢种、合金加入量、钢包预热和连铸节奏都会使目标上下移动。 不是炉内电弧温度、钢的熔点或所有 EAF 的统一标准。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 Pittini Group 工艺说明：电弧可超过 3,500°C，钢液完全熔化后出钢温度约 1620°C。'
    - '核对 EUROFER：EAF 电弧可达 3,500°C，熔池金属约 1,800°C；说明电弧与钢液温度不是同一口径。'
    - >-
      补核 Britannica Secondary steelmaking 的钢包与出钢流程；原 Springer 现场研究页未能在本地读取到
      1620°C 断言，故不再作为该量值来源，保留原 quantity。
  originalQuantity:
    value: 1973
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: null
      unit: K
      measure: 未指定钢种工序和采样位置的工艺温度
      approximate: true
      measureLabel: 未指定钢种工序和采样位置的工艺温度
      status: undetermined
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 约 1620°C 是特定工厂的出钢工序参考，不同钢种和流程会在更宽范围内调整；它不是单炉实测均值，也不是行业统一标准。
visual:
  template: metal-furnace
  profile: metal
  caption: 电弧炉出钢温度参考
  note: >-
    模型只说明高温钢液与工业炉场景，不复刻具体钢厂设备；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: heat-flow
  color: '#ffbe8a'
  sampleColor: '#c7b5a0'
  symbol: EAF tapping
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

这里讨论电弧炉炼钢的出钢温度，即把熔池中的钢液倒入钢包时的目标温度。它不是炉内电弧的温度，也不是钢的熔点。EAF 以废钢为主要原料，用石墨电极产生电弧熔化炉料，随后按后续精炼和连铸节奏控制出钢温度。[1][3]

## 怎样测到

出钢温度通常用一次性热电偶或连续测温探头在钢包中测量，操作员根据钢种、钢包状态和下游等待时间设定目标。Pittini 集团的工艺说明给出出钢阶段约 1,620 °C 的典型温度，并指出电弧本身可超过 3,500 °C。[1] EUROFER 则把 EAF 熔池金属温度描述为约 1,800 °C，电弧可达 3,500 °C。[2] 两者并不矛盾：一个指出钢目标，一个说熔池或电弧的高温端。

## 数值与口径

1,620 °C 换算为 1,893.15 K，展示取约 1,893 K。[1] 这个数字是特定工厂和钢种的出钢目标，不是所有 EAF 的统一标准；钢种、合金加入量、钢包预热和连铸节奏都会使目标上下移动。[1][2] 3,500 °C 的电弧温度不能当成钢液温度，因为电弧只占炉内很小体积，熔池靠对流和搅拌受热。[2]

## 常见误解

第一，把出钢温度当成钢的熔点；钢的液相线约 1,500 °C 量级，出钢需要过热以保证流动和精炼。[1] 第二，把电弧温度当成熔池温度；3,500 °C 是电弧局部温度，熔池平均温度低得多。[2] 第三，认为所有钢厂都取 1,620 °C；不同钢种和流程会在更宽范围内调整。第四，把出钢温度当成炉温设定；它还是节奏、耐材和夹杂物控制的结果。[3]

## 与其他温区的关系

1,893 K 高于纯铁熔点 1,811 K，也高于硅熔点 1,687 K，低于钨熔点 3,687 K。它高于基拉韦厄熔岩的 1,433 K，低于氧乙炔火焰的 3,473 K。炼钢出钢处在“金属熔化后过热”的温区，温度不高到能熔化钨，但足以使钢液流动和浇注。
