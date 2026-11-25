---
id: temperature.gold-melting-point
title: 金的熔点
titleEn: Gold freezing fixed point
dimension: temperature
category: 中温
summary: 'ITS-90 对高纯金凝固固定点的赋值为 1,337.33 K，约 1,064.18 °C。它是温标参考，不表示不同成色的金合金都在同一温度熔化。'
quantity:
  value: 1337.33
  unit: K
  measure: 高纯金凝固固定点（ITS-90）
  approximate: true
  measureLabel: 高纯金凝固固定点（ITS-90）
displayValue: '1,337.33 K（1,064.18 °C，ITS-90）'
related:
  - temperature.silver-melting
  - temperature.copper-melting-point
  - temperature.lead-melting-point
  - temperature.aluminum-melting
  - space.volcano
reviewStatus: reviewed
sources:
  - title: 'Kelvin: ITS-90'
    url: 'https://www.nist.gov/si-redefinition/kelvin/kelvin-its-90'
    publisher: NIST
    accessed: '2026-11-06'
  - title: The Kelvin and Temperature Measurements
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4865289/'
    publisher: NIST Journal of Research
    accessed: '2026-11-06'
  - title: 'Gold: element data'
    url: 'https://periodic-table.rsc.org/element/79/gold'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-06'
legacy:
  id: gold-melting-point
  icon: "\U0001F947"
  relatedLabels: 贵金属、冶金、货币、纳米金、王水、铜的熔点、铅的熔点、电子工业、催化、元素周期表
conditions: '高纯金在 1 atm 下的凝固固定点，ITS-90 赋值 1,337.33 K；实际实现仍有不确定度，不同成色的金合金不适用这一纯金数值。'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 'NIST 的 ITS-90 页面明确列出金凝固点 1,337.33 K，并给出 1,064 °C 的近似换算。'
    - 'NIST 温标论文的固定点表列出同一赋值；RSC 元素表列出 1,064.18 °C、1,337.33 K。'
    - 正文按五节结构重写，说明固定点赋值与首饰合金的差异，不把熔点当作成色鉴定方法。
  originalQuantity:
    value: 1337
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '1,337.33 K 是 ITS-90 的赋值；样品纯度、坩埚与测温实现带来不确定度，18K、9K 等合金的固相线与液相线另需按成分测定。'
visual:
  template: metal-furnace
  profile: metal
  caption: 金固定点试样炉
  note: >-
    高纯金固定点的计量示意；试样外形、亮度与炉体比例仅作说明，非按比例绘制，也不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: heat-flow
  color: '#ffd182'
  symbol: Au
  sampleColor: '#d9b765'
  scene: temperature.object
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

纯金在 1 atm 下于 1,337.33 K 凝固，换算为 1,064.18 °C。[1][2] 这是高纯金固相与液相平衡的温标参考，属于 ITS-90 的固定点；它描述的是纯元素，不是 24K、18K 或 9K 首饰的统一熔化温度。[1][3] 金合金加入银、铜等元素后，熔化通常变成一段温度区间，颜色和硬度也随之改变。

## 怎样测到

金固定点同样用受控凝固实现：高纯金在惰性气氛中完全熔化，再缓慢降温，温度会在凝固平台上停留。标准铂电阻温度计或高温计量装置记录平台温度，并与温标赋值比较。[1][2] NIST 的 ITS-90 页面把金凝固点列为 1,337.33 K，NIST 温标论文的固定点表给出同一数值；RSC 元素表则列出 1,064.18 °C，便于日常换算核对。[1][2][3] 样品中的微量杂质和坩埚反应会影响平台长度与读数。

## 数值与口径

1,337.33 K − 273.15 K = 1,064.18 °C。这个换算精确到 0.01 K，但温标赋值不等于每件金器的实测熔点。纯金的固定点用于校准温度计；首饰金合金的固相线通常低于纯金，液相线则取决于配方。[3] 比较不同金材时，必须同时记录成色、合金元素和测量条件，不能只报一个“金的熔点”。

## 常见误解

“金的熔点可以用来鉴定成色”并不成立：熔点只反映相变，成色还需要成分分析或密度、印记等证据。另一个误解是把 24K 纯金的固定点套到所有金合金上；18K 金含较多银、铜，熔化行为与纯金不同。[3] 还有人把“黄金耐高温”理解为在任何火场都不变形；远低于熔点时，薄金件也会软化、变形。最后，温标固定点的小数位不是首饰检测精度。

## 与其他温区的关系

1,337.33 K 比银的 1,234.93 K 高约 102.4 K，比铜的 1,357.77 K 低约 20.4 K，比铝的 933.473 K 高约 403.9 K。[1][3] 它低于铁的约 1,811 K，更远低于钨的约 3,695 K。金因此常被放在“贵金属固定点”与“高温结构材料”之间：足以熔化许多低熔点金属，却远不是最耐高温的金属。
