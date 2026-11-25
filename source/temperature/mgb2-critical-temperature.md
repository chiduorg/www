---
id: temperature.mgb2-critical-temperature
title: 二硼化镁超导转变温度
titleEn: Magnesium diboride critical temperature
dimension: temperature
category: 极低温
summary: >-
  二硼化镁（MgB₂）在约 39 K（−234.15 °C）进入超导态。这个温度是零场、近零电流条件下的超导临界温度 Tc，
  不是器件的工作温度；样品、磁场、应变与测量判据都会改变读数。
quantity:
  value: 39
  unit: K
  measure: MgB₂超导临界温度参考
  approximate: true
  measureLabel: MgB₂超导临界温度参考
displayValue: 约 39 K（−234.15 °C）
related:
  - temperature.niobium-superconducting-transition
  - temperature.ybco-superconducting-transition
  - temperature.liquid-hydrogen
  - temperature.liquid-nitrogen
  - temperature.absolute-zero
  - space.moon
reviewStatus: reviewed
sources:
  - title: 'Superconductivity at 39 K in magnesium diboride'
    url: 'https://doi.org/10.1038/35065039'
    publisher: Nature
    accessed: '2026-11-07'
  - title: 'Review of superconducting properties of MgB₂'
    url: 'https://arxiv.org/abs/cond-mat/0108265'
    publisher: arXiv (Cristina Buzea and Tsutomu Yamashita)
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  高纯、致密、近零外磁场下的 MgB₂ 样品在电阻—温度或磁化曲线上进入超导态的中点参考；薄膜、掺杂、应变、
  外磁场、电流与测量判据都会改变转变温度或加宽转变。
uncertainty: >-
  39 K 是原始 Nature 论文报告值；后续综述常把 MgB₂ 的 Tc 写作约 39–40 K。不同样品形态、纯度与测量判据
  会带来约 1 K 或更大的差异，不能当作精密固定点。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 'Nagamatsu 等 Nature 2001 报告 MgB₂ 超导转变 39 K；后续综述常取约 40 K 的圆整值。'
    - '正文按五节撰写，区分临界温度、临界磁场/电流与工作温度；39 K 为圆整参考。'
    - '2026-11-07 来源可访问性核对：https://arxiv.org/abs/cond-mat/0108265 与 https://doi.org/10.1038/35065039 均返回可用响应。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: cryo-instrument
  profile: mgb2
  caption: 二硼化镁超导样品测量
  note: >-
    样品、冷台与测量线路均为示意，非按比例；悬浮、光晕与磁力线只说明超导场景，不是特定装置的观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#b7c6d9'
  symbol: MgB₂
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 超导
---
## 它是什么

二硼化镁（MgB₂）是一种金属间化合物超导体，2001 年被发现时在约 39 K 进入超导态。它属于常规的声子媒介超导体，与铜氧化物的高温超导机制不同；39 K 是临界温度，不是器件的工作温度。[1][2] 它的晶体结构简单、元素储量丰富，因此在应用上与脆性铜氧化物走的是不同的加工路径。

## 怎样测到

常用四引线电阻法和磁化测量：降温时记录电阻骤降或抗磁信号，取转变曲线中点作为 Tc。原始 Nature 论文报告块体 MgB₂ 的转变温度为 39 K；后续综述常把它写作约 39–40 K，反映样品、测量判据与圆整的差异。[1][2] 电阻曲线常有转变宽度，起始点、中点与零电阻温度并不相同，报告 Tc 时应注明判据。

## 数值与口径

39 K 换算为 −234.15 °C，比液氢的 20.3 K 高，但比液氮的 77.4 K 低。临界温度只说明零场、零电流极限下正常态与超导态的转变；实际磁体还要面对临界磁场、临界电流、各向异性与交流损耗。[1][2] MgB₂ 还有两个超导能隙和各向异性的临界场，这些性质会影响实用带材在磁场下的表现。

## 常见误解

第一，把 39 K 当成“室温超导”；它仍比 293 K 的室温低约 254 K。第二，把 MgB₂ 与铜氧化物混为一谈；两者机制与温区不同。第三，认为 Tc 高就不需要冷却；常压液氦仍是最常用冷源之一，器件设计还需考虑热泄漏与温度均匀性。[1][2] 第四，把 39 K 当成所有 MgB₂ 样品的唯一值；掺杂、应变与薄膜生长都会改变 Tc 和转变宽度。

## 与其他温区的关系

39 K 高于铌的 9.2 K 和液氢的 20.3 K，低于液氮的 77.4 K，也低于铜氧化物中 Hg1223 的约 138 K 参考值。[1][2] 它处在液氢与液氮之间的温区，适合用来说明“临界温度”与“可实际使用的冷源”并不是同一个问题。液氢与液氖的温区也与 39 K 接近，但工程上选择冷源还要看安全性、成本与热负载。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
