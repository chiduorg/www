---
id: temperature.solder-melting
title: 焊锡熔化
titleEn: Solder melting point
dimension: temperature
category: 中温
summary: >-
  Sn63Pb37 共晶焊锡在 456 K（183 °C）熔化，温度窄且接近单点；无铅 SAC305 的固相线约 490 K、液相线约 493
  K（217–220 °C）。焊锡是合金，必须说清成分与固/液相线。
quantity:
  value: 456
  unit: K
  measure: Sn63Pb37 共晶焊锡熔点
  approximate: true
  measureLabel: Sn63Pb37 共晶焊锡熔点
displayValue: 456 K（183 °C）；无铅 SAC305 约 490–493 K（217–220 °C）
related:
  - temperature.bronze-melting
  - temperature.copper-melting-point
  - temperature.lead-melting-point
  - temperature.tin-melting
  - space.human
reviewStatus: reviewed
sources:
  - title: 'Lead-Free Solders: A Change in the Electronics Infrastructure'
    url: >-
      https://www.nist.gov/publications/lead-free-solders-change-electronics-infrastructure
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-06'
  - title: Indalloy 256 (SAC305) for Preforms — Product Data Sheet
    url: >-
      https://www.indium.com/wp-content/uploads/2025/03/Indalloy256-for-Preforms-PDS-100346-R0-1.pdf
    publisher: Indium Corporation
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  Sn63Pb37（63% Sn、37% Pb，质量分数）共晶合金，或 Sn96.5Ag3.0Cu0.5（SAC305）无铅合金；约 1
  atm、清洁金属表面与合适助焊剂。合金成分、杂质、加热速率和氧化会改变固/液相线与润湿行为。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 NIST Handwerker 1999：Sn/Pb 约 63/37 的共晶焊锡在 183°C 熔化，糊状区接近 0°C。
    - 核对 Indium SAC305 产品数据表：固相线 217°C、液相线 220°C，成分 Sn96.5Ag3.0Cu0.5。
    - 正文区分共晶单点熔化与非共晶合金的固/液相线区间，并说明无铅焊锡温度更高。
uncertainty: >-
  183°C（456 K）是 Sn63Pb37 共晶附近的表列值，杂质和偏离共晶成分会形成糊状区；SAC305 的 217–220°C 也随 Ag/Cu
  比例和杂质轻微变化。焊接峰值温度通常还要高于液相线，不能把熔点当成工艺设定温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: metal-furnace
  profile: metal
  caption: 焊锡润湿与回流示意
  note: 画面为焊锡回流的示意表达；焊点光泽、热风与颜色均经艺术处理，不能据颜色判断温度；对象大小分别调整，非按比例。
  scene: temperature.object
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

焊锡是用于连接金属的低熔点合金，常见体系有锡铅和无铅锡银铜。Sn63Pb37 是共晶成分，约在 183 ℃ 从固体直接变为液体，糊状区很窄；这里的 456 K 就是这一共晶熔点。[1] 无铅 SAC305 指 Sn96.5Ag3.0Cu0.5，它在一个温度区间内熔化：固相线约 217 ℃，液相线约 220 ℃，即约 490–493 K。[2] 两者都是合金，不是纯锡或纯铅。

## 怎样测到

焊锡的熔化行为用示差扫描量热、热分析和润湿平衡测试测定。共晶合金在加热曲线上表现为接近单点的吸热峰；非共晶合金先到达固相线，出现液相，再继续升温到液相线才完全变为液体。NIST 的资料指出 Sn63Pb37 在 183 ℃ 熔化，糊状区接近 0 ℃；Indium 的 SAC305 数据表列出固相线 217 ℃、液相线 220 ℃。[1][2] 焊接工艺还要考虑助焊剂活性、母材润湿性和冷却速率。

## 数值与口径

456 K 对应 183 ℃，口径是 Sn63Pb37 共晶合金、约 1 atm、清洁金属表面。[1] SAC305 的 490–493 K 对应 217–220 ℃，是固相线与液相线之间的区间，不是单一熔点。[2] 含铅焊锡的熔点低，但铅在电子制造中受法规限制；无铅焊锡的熔点更高，回流峰值温度通常也要相应提高。把焊锡熔点直接当成焊接温度会忽略润湿、热容量和元件耐热限制。

## 常见误解

第一，把焊锡当成纯锡；Sn63Pb37 和 SAC305 都是合金，熔点与纯锡的 505.08 K 不同。第二，把 SAC305 的 217 ℃ 固相线当成完全熔化温度；液相线约 220 ℃，两者之间仍有糊状区。第三，把熔点当成回流峰值温度；实际工艺还要高于液相线并考虑助焊剂与元件。第四，认为所有无铅焊锡都一样；不同 Ag、Cu、Bi 配比的熔点差异很大。[1][2]

## 与其他温区的关系

456 K 低于纯锡熔点 505.08 K和纯铅熔点约 600 K，这正是合金化降低熔点的例子；SAC305 的 490–493 K 则接近纯锡熔点。[1][2] 与铜的 1,358 K 相比，焊锡熔点低约 900 K，因此可以用低得多的热输入连接铜导体。与橡胶硫化的 423–453 K 相比，Sn63Pb37 的 456 K 略高，二者同处中温工艺段但目的不同。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
