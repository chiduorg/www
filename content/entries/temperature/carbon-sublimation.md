---
id: temperature.carbon-sublimation
title: 石墨升华（常压研究参考）
titleEn: 'Graphite sublimation at one atmosphere: research reference'
dimension: temperature
category: 高温
summary: >-
  常压石墨受热后直接升华，没有稳定的液态阶段。Abrahamson 1974 年综合电弧与腔体实验， 把一大气压下石墨升华温度定在约 3,895–4,020
  K；本条以区间中点 3,957.5 K 定位， 这是文献分析结论，不是所有碳材料的统一常数。
quantity:
  value: 3957.5
  unit: K
  measure: 1974年研究分析的常压石墨升华范围
  measureLabel: 1974年研究分析的常压石墨升华范围
  approximate: true
  range:
    min: 3895
    max: 4020
    unit: K
    kind: 文献分析范围
  kind: reference-midpoint
displayValue: '约 3,895–4,020 K（常压石墨研究参考）'
related:
  - temperature.tungsten-melting
  - temperature.silicon-melting
  - temperature.glass_melting
  - temperature.iron-melting
reviewStatus: reviewed
sources:
  - title: 'Graphite sublimation temperatures, carbon arcs and crystallite erosion'
    url: 'https://scixplorer.org/abs/1974Carbo..12..111A/abstract'
    publisher: 'SciX (NASA ADS) abstract of Abrahamson, Carbon 12 (1974)'
    accessed: '2026-11-06'
  - title: Erosion Rates of Graphite Anodes in High Current Arcs
    url: 'https://pubs.acs.org/doi/pdf/10.1021/i160075a001'
    publisher: 'American Chemical Society, Ind. Eng. Chem. Fund. 19 (1980)'
    accessed: '2026-11-06'
  - title: >-
      The low current carbon arc and the properties of graphite near the
      sublimation temperature
    url: 'https://personal.ems.psu.edu/~radovic/1977/papers/1977_226.PDF'
    publisher: Penn State Materials Science (Lozier and Null)
    accessed: '2026-11-06'
legacy:
  id: carbon-sublimation
  icon: "\U0001F48E"
  relatedLabels: 钨熔点、镍熔点、恒星内部温度、白炽灯钨丝
conditions: >-
  Abrahamson 1974 年对石墨电弧与腔体实验的分析结论；对象为石墨，压力为一大气压， 温度指固—气平衡附近的表面温度，而非液态碳。取区间中点
  3957.5 K 用于轴定位，非新增实测值； 金刚石、无定形碳、高压碳和含杂质的碳材料不直接适用。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 直接核对 SciX/NASA ADS 的原文摘要：一大气压下石墨升华温度介于 3895 与 4020 K。
    - >-
      补核 ACS 1980 年电弧研究（约 3950 K 接近 1 atm 升华点）与 Penn State 1977 年低电流碳弧分析（坑面约
      3800 K、体相接近 4000 K）。
    - 保留区间与中点，未把 3957.5 K 写成新的单点测量；原 3915 K 与上一轮 4098 K 证据保留。
  originalQuantity:
    value: 3915
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: 4098
      unit: K
      measure: 碳升华表列参考（条件待补）
      approximate: true
      measureLabel: 碳升华表列参考（条件待补）
    decision: reviewed
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  3,895–4,020 K 是 1974 年文献对常压石墨的分析范围，区间宽度 125 K 反映实验解释与表面测温的分歧； 中点 3,957.5 K
  仅用于定位，不代表更小的测量误差。
visual:
  template: metal-furnace
  profile: carbon
  caption: 常压石墨升华研究参考
  note: >-
    采用 1974 年原作者对一大气压下石墨的研究分析范围；中点仅定位，不是所有碳材料的统一常数。
    画面为示意，非按比例，非观测重建；所有颜色、粒子、光晕、流动和转速均为解释性示意。
  backdrop: stellar-surface
  color: '#ffc493'
  symbol: C
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

石墨是碳的层状晶体。在 1 atm 下，它受热时不经过稳定的液态，而是从固态直接变成含碳气相分子，这个过程叫升华。所谓“石墨升华温度”指固—气平衡附近的条件，不是先把石墨熔成液体再汽化。[1] 碳还有金刚石、无定形碳等不同结构，各自相变条件不能直接互换。

## 怎样测到

1974 年 Abrahamson 综述电弧与腔体实验，讨论阳极反射率、微晶逸出和多孔表层如何干扰表面测温，并把一大气压下的结果收敛到 3,895–4,020 K。[1] 后续电弧研究测得约 3,950 K 的端面温度接近常压升华点；另一项低电流碳弧分析把坑面有效温度放在约 3,800 K，并指出体相石墨的升华温度接近 4,000 K。[2][3] 这些方法都在高温、强辐射和存在凝相粒子的条件下工作，读数对模型假设敏感。

## 数值与口径

区间中点 3,957.5 K 等于 3,684.35 °C，仅用于数轴定位。[1] 区间宽度 125 K 反映实验解释的分歧，而不是同一个样品在 125 K 内连续变化。3,895 K 与 4,020 K 分别约合 3,621.85 °C 和 3,746.85 °C。比较时须说明压力、碳材料形态、观测面位置以及是否把微晶云当成表面。常压石墨的升华温度高于铁的 1,811 K 和钨的 3,687 K。

## 常见误解

第一，认为石墨会先熔化再沸腾；常压下它更接近直接升华，液态碳需要更高压力或特殊条件。[1] 第二，把 3,957.5 K 当成精确单点；它只是文献区间中点，原始结论本身以范围表达。第三，把石墨数据套到金刚石或碳纤维；不同同素异形体的表面能、微晶尺寸和杂质都会改变结果。第四，用亮度颜色判断温度；高温表面辐射接近普朗克谱，必须结合发射率与波长分析。[2][3]

## 与其他温区的关系

石墨升华温区高于钨熔点 3,687 K，低于太阳表面约 5,772 K，也低于碳在恒星内部的燃烧阶段。它处在工程高温材料与天体等离子体之间的过渡带。与 1,773 K 的本生灯火焰相比，3,957.5 K 约为其两倍多；但温度高不代表总能量大，少量高温石墨与整团低温气体不能直接按温度比较。[3]
