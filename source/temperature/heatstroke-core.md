---
id: temperature.heatstroke-core
title: 热射病核心温度：40 ℃的急症阈值
titleEn: Heatstroke core temperature at 40 °C
dimension: temperature
category: 高温
summary: 热射病常以核心温度超过 40 ℃并伴中枢神经异常为临床标志；40 ℃是急症阈值示例，不是普通发烧的通用界线，也不能单凭体表温度判断。
quantity:
  value: 313.15
  unit: K
  measure: 40 ℃核心温度示例
  approximate: true
  measureLabel: 313.15 K（40 ℃核心温度示例）
displayValue: 313.15 K（40 ℃核心温度示例）
related:
  - temperature.human-body-temperature
  - temperature.wet-bulb-temperature
  - temperature.fever
  - temperature.hypothermia
  - space.human
reviewStatus: reviewed
sources:
  - title: Heatstroke
    url: 'https://www.who.int/news-room/fact-sheets/detail/heatwaves'
    publisher: World Health Organization
    accessed: '2026-11-23'
  - title: Heat and Health
    url: 'https://www.cdc.gov/heat-health/'
    publisher: US CDC
    accessed: '2026-11-23'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 人体核心
  measurementSite: 直肠、食管或膀胱等核心温度
  duration: 急症评估时刻
  basis: 临床核心温度，不是腋下或额温
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - 本轮新增条目：按所列机构资料重写，核对温度口径、测量位置与适用条件。
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 40 ℃是经典热射病阈值之一；不同指南与人群的界定略有差异，且核心温度测量部位与时间会影响读数。
visual:
  template: thermometer
  profile: medical
  caption: 核心体温、散热失败与急救降温的示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#b4534a'
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 医疗
---
## 它是什么

热射病是严重的热相关急症，核心温度通常超过 40 ℃，并伴有意识改变、抽搐、昏迷等中枢神经异常。它不是“普通中暑加重一点”，而是需要立即降温与急救的状态。[1] 40 ℃是经典阈值示例，但临床判断不能只靠一个数字。

## 怎样知道

核心温度需要用直肠、食管或膀胱等部位测量，腋温与额温可能明显偏低；急救现场也常结合暴露史、意识状态、皮肤表现与心率判断。[1][2] WHO 与 CDC 的 heat-health 资料强调，热射病的诊断与处置要看整体临床图景，不能只凭体表温度。

## 数值与口径

313.15 K 等于 40 ℃。这个值描述核心温度，不是环境气温；普通发烧也可能达到 40 ℃，但热射病的关键是热暴露与散热失败，并伴随器官功能异常。[1] 降温目标是尽快把核心温度降到安全范围，而不是慢慢观察。

## 常见误解

常见误解是“只要不出汗就不是热射病”或“体表摸着不烫就没事”。劳力型热射病可能仍在出汗，核心温度却很高；老年患者可能体温升高不明显但症状严重。[2] 另一个误解是给患者大量喝冰水代替急救；意识不清时有误吸风险，应优先呼叫急救并积极降温。

## 与其他温度的关系

它高于 human-body-temperature 的正常约 37 ℃，也高于 fever 的常见范围；与 wet-bulb-temperature 的 35 ℃相比，后者描述环境散热上限，前者描述人体已经失控的核心温度。与 hypothermia 的低温方向相反，但同样属于体温调节失衡的急症。[1][2]


现场降温应优先脱除衣物、冷水浸泡或冰敷，并尽快转运；延迟降温比温度数字本身更危险。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 313.1 K，即 40 ℃（按 T/K−273.15 换算）；约为人体核心温度（310 K）的 1.01 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
