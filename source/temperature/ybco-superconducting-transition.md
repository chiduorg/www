---
id: temperature.ybco-superconducting-transition
title: 钇钡铜氧超导转变
titleEn: Optimally doped YBCO critical-temperature reference
dimension: temperature
category: 低温
summary: >-
  优化掺杂的 YBa₂Cu₃O₇−δ 超导临界温度通常写作约 92 K（−181.15 °C）。 NIST 的氧含量—Tc 数据表明，同一体系在 x≈6.94
  时约为 90.4 K，且不确定度约 ±3 K； 因此 92 K 是材料条件相关的参考，不是所有 YBCO 样品的固定值。
quantity:
  value: 92
  unit: K
  measure: 优化掺杂YBCO超导转变参考
  approximate: true
  measureLabel: 优化掺杂YBCO超导转变参考
displayValue: 约 92 K（材料条件相关）
related:
  - temperature.liquid-nitrogen
  - temperature.niobium-superconducting-transition
  - temperature.liquid-oxygen
  - temperature.liquid-hydrogen
  - temperature.cuprate-critical-temperature
  - space.moon
reviewStatus: reviewed
sources:
  - title: >-
      Disentangling bond lengths and orbital symmetries in controlling Tc in
      YBa2Cu3O7
    url: 'https://arxiv.org/abs/2012.04897'
    publisher: arXiv (Physical Review Research)
    accessed: '2026-11-06'
  - title: 'NIST Property Data Summary: Orthorhombic Y:123 (YBa2Cu3Ox)'
    url: 'https://srdata.nist.gov/CeramicDataPortal/Pds/Htsy123'
    publisher: NIST Standard Reference Database 150
    accessed: '2026-11-06'
  - title: Superconductivity
    url: 'https://www.britannica.com/science/superconductivity'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: ybco-superconducting-transition
  icon: "\U0001F48E"
  relatedLabels: 高温超导、铜氧化物、强关联电子、液氮温度、超导磁体、凝聚态物理、铌超导转变、迈斯纳效应、库珀配对、量子力学、量子临界
conditions: >-
  优化掺杂、氧有序的 YBa₂Cu₃O₇−δ 块体或薄膜样品的超导临界温度参考；氧含量、掺杂、应变、磁场与测量判据都会改变 Tc，不适用于任意 YBCO
  器件。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      所引 2020 年研究以优化掺杂 YBCO 的 Tc 约 92 K 为背景；NIST 陶瓷数据门户给出 Tc 随氧含量变化，x≈6.94 时约
      90.4 K、不确定度 ±3 K。
    - Britannica 超导条目用于说明高温超导体可用液氮冷却及其材料加工限制，不用于证明 92 K 的具体数值。
    - 正文按五节重写，区分 92 K 参考、氧含量依赖与液氮温区关系；quantity 数值未改。
  originalQuantity:
    value: 92
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  92 K 是优化掺杂 YBCO 的圆整参考；NIST 数据在 x≈6.94 时给出约 90.4 K，差异约 1.6 K，落在其 ±3 K
  合成不确定度内。氧含量、有序度、应变与样品形态都会改变 Tc。
visual:
  template: superconducting-sample
  profile: ybco
  caption: YBCO 超导陶瓷与磁体
  note: >-
    临界温度依氧含量和样品条件变化；悬浮与磁力线仅说明超导场景，为非按比例的示意，不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#a3c9e9'
  symbol: YBa₂Cu₃O₇−δ
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

钇钡铜氧（YBCO，化学式 YBa₂Cu₃O₇−δ）是铜氧化物高温超导体。优化掺杂样品的超导临界温度约为 92 K，即 −181.15 °C，高于液氮的 77.4 K。[1][3] “92 K”描述的是正常态到超导态的转变，不是材料在常温下已经超导，也不是所有氧含量的 YBCO 都相同。

## 怎样测到

Tc 通常用四引线电阻法测量：降温时记录电阻随温度的变化，取电阻骤降的中点；也可用磁化或比热测量确认迈斯纳效应。所引 2020 年研究把优化掺杂 YBCO 的 Tc 作为 92 K 的背景值，讨论键长、轨道与应变的作用。[1] NIST 陶瓷数据门户则给出 Tc 随氧含量 x 变化的序列：x 从 6.40 升到 6.94 时，Tc 从 28.8 K 升到约 90.4 K，并给出 ±3 K 的合成不确定度。[2]

## 数值与口径

92 K 换算为 −181.15 °C。NIST 数据在 x≈6.94 时给出 90.4 K，与 92 K 相差约 1.6 K，落在其 ±3 K 的不确定度内。[1][2] 因此 92 K 是优化掺杂样品的圆整参考，不是精密固定点，也不是热力学温标的定义值。比较不同实验时必须说明氧含量、有序度、薄膜或块体、应变和磁场；同一化学式在不同工艺下可以有明显不同的 Tc。[2]

## 常见误解

第一，把 92 K 当成“室温超导”；它仍比室温 293 K 低约 200 K。[1] 第二，认为所有 YBCO 样品都精确等于 92 K；氧含量和结构会改变 Tc。[2] 第三，因为 Tc 高于液氮沸点就认为器件一定便宜好用；液氮冷却可行，但材料脆性、临界电流和磁场下的性能仍需工程解决。[3] 第四，把 Tc 与临界磁场、临界电流混为一个条件。

## 与其他温区的关系

92 K 高于铌的 9.2 K、液氮的 77.4 K 和液氧的 90.2 K，低于水的 273.15 K 冰点。[1][2] 它比液氮的 77.4 K 高约 14.6 K，正好跨过液氮沸点，使 YBCO 可以用常压液氮冷却，而不必像低温超导体那样依赖液氦。与铌相比，YBCO 的转变温度高约一个数量级，但材料加工和磁场性能的取舍不同。[1][3]
