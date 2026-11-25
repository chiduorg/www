---
id: temperature.sterilization-autoclave
title: 高压蒸汽灭菌：121 ℃的医疗标准
titleEn: Autoclave sterilization at 121 °C
dimension: temperature
category: 高温
summary: 高压蒸汽灭菌常用 121 ℃、15—20 分钟的组合杀灭包括芽孢在内的微生物；121 ℃是饱和蒸汽压力下的示例，不是干热灭菌或所有器械的统一参数。
quantity:
  value: 394.15
  unit: K
  measure: 121 ℃高压蒸汽示例
  approximate: true
  measureLabel: 394.15 K（121 ℃高压蒸汽示例）
displayValue: 394.15 K（121 ℃高压蒸汽示例）
related:
  - temperature.pasteurization
  - temperature.boiling-water
  - temperature.vaccine-cold-chain
  - temperature.legionella-hot-water
  - space.human
reviewStatus: reviewed
sources:
  - title: "Recommendations for Disinfection and Sterilization in Healthcare Facilities"
    url: >-
      https://www.cdc.gov/infection-control/hcp/disinfection-sterilization/summary-recommendations.html
    publisher: "US CDC"
    accessed: '2026-11-23'
  - title: "Decontamination and reprocessing of medical devices for health-care facilities"
    url: 'https://www.who.int/westernpacific/publications/i/item/9789241549851'
    publisher: "World Health Organization"
    accessed: '2026-11-23'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 饱和蒸汽与器械表面
  measurementSite: 灭菌腔内部
  duration: 约 15—20 分钟
  basis: 121 ℃饱和蒸汽，按器械与包装验证
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - 本轮新增条目：按所列机构资料重写，核对温度口径、测量位置与适用条件。
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 121 ℃/15—20 分钟是常见示例；实际周期取决于负载、包装、排空与生物指示剂验证。
visual:
  template: metal-furnace
  profile: autoclave
  caption: 高压灭菌锅、蒸汽与器械托盘的示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#9d6a50'
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 环境
---
## 它是什么

高压蒸汽灭菌（autoclave）在加压饱和蒸汽中处理器械，常用 121 ℃、15—20 分钟的组合。压力使蒸汽温度高于 100 ℃，从而杀灭细菌芽孢等耐热结构。[1] 它不是把器械“煮一下”，而是需要排尽冷空气、让蒸汽接触所有表面并验证周期。

## 怎样知道

医疗机构用物理监测（温度、压力、时间）、化学指示卡与生物指示剂共同验证灭菌效果；生物指示剂含耐热芽孢，是最直接的失效检查。[1][2] WHO 的器械再处理指南强调清洗、包装、装载与干燥同样影响结果。

## 数值与口径

394.15 K 等于 121 ℃。这个温度是在饱和蒸汽压力下的示例，不是干热灭菌的温度；干热通常需要更高温度与更长的时间。[1] 121 ℃也不是所有负载的统一设定，密度大或包装厚的器械需要延长周期并做验证。

## 常见误解

常见误解是“压力锅冒气就算灭菌完成”。未排尽冷空气时，腔内可能形成气团，蒸汽无法接触器械表面；装载过满也会阻挡蒸汽。[2] 另一个误解是灭菌前不彻底清洗；有机物与盐类会保护微生物并腐蚀器械。

## 与其他温度的关系

它高于 pasteurization 的 72 ℃和 boiling-water 的 100 ℃，也高于 legionella-hot-water 的 60 ℃；但与 metal-furnace 的工业高温相比，121 ℃只是医疗灭菌的常用温区。与 vaccine-cold-chain 相反，灭菌靠高温，冷链靠低温抑制。[1][2]


灭菌周期的验证还包括干燥与包装完整性；湿包会被视为污染风险，不能只看温度达标。[1][2]


灭菌结束后还要做生物指示剂或化学指示卡验证，不能仅凭温度曲线放行。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 394.1 K，即 121 ℃（按 T/K−273.15 换算）；约为水的沸点（373.1 K）的 1.06 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
