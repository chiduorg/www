---
id: temperature.legionella-hot-water
title: 军团菌与热水：60 ℃的储水温度
titleEn: Legionella hot-water storage at 60 °C
dimension: temperature
category: 高温
summary: 热水系统常建议把储水温度维持在 60 ℃以抑制军团菌，并在末端通过混水阀防止烫伤；60 ℃是风险管理示例，不是所有管路统一的杀菌温度。
quantity:
  value: 333.15
  unit: K
  measure: 60 ℃热水储水示例
  approximate: true
  measureLabel: 333.15 K（60 ℃热水储水示例）
displayValue: 333.15 K（60 ℃热水储水示例）
related:
  - temperature.sterilization-autoclave
  - temperature.pasteurization
  - temperature.boiling-water
  - temperature.room-temperature
  - space.human
reviewStatus: reviewed
sources:
  - title: Legionella (Legionnaires’ disease and Pontiac fever)
    url: 'https://www.cdc.gov/legionella/'
    publisher: US CDC
    accessed: '2026-11-23'
  - title: Legionella and the prevention of legionellosis
    url: 'https://www.who.int/publications/i/item/9241562978'
    publisher: World Health Organization
    accessed: '2026-11-23'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 生活热水与管路生物膜
  measurementSite: 储水罐出口与最远端
  duration: 持续运行与定期热冲击
  basis: 风险管理温度，不是临床治疗温度
review:
  method: source-check
  date: '2026-11-23'
  notes:
    - 本轮新增条目：按所列机构资料重写，核对温度口径、测量位置与适用条件。
    - reviewed 指编辑性来源核对，不是外部同行评审；临床与工程参数必须以具体指南和设备说明书为准。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供；第三方来源仅用于事实核对。
uncertainty: 60 ℃是常见储水建议；不同国家指南、系统类型与末端温度要求不同，且生物膜与停滞段会降低实际效果。
visual:
  template: thermometer
  profile: hot-water
  caption: 热水储罐、管路与混水阀的示意
  note: 画面为解释性示意，非按比例、非观测重建；颜色、粒子、光晕与流动均为讲解服务，不代表真实测量。
  color: '#b36f4d'
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 环境
---
## 它是什么

军团菌是自然水体中常见的细菌，在温水、停滞管路与生物膜中容易增殖，可通过气溶胶吸入引起军团病。热水系统把储水温度维持在约 60 ℃，是为了抑制其生长；末端再通过混水阀降到安全使用温度，防止烫伤。[1] 60 ℃不是“洗浴水温”，而是储水与管路风险管理参数。

## 怎样知道

公共卫生指南结合实验室培养、PCR 检测与管路温度监测评估风险；CDC 与 WHO 都强调水流停滞、死水段、喷头与冷却塔是重点。[1][2] 温度监测要覆盖储罐、回水与最远端，不能只看锅炉出口。

## 数值与口径

333.15 K 等于 60 ℃。军团菌在约 25—45 ℃的温水区间较活跃，60 ℃以上明显受抑制，但短时接触不一定立即杀灭生物膜中的菌。[1][2] 因此指南同时要求定期热冲击、清洗喷头与维持水流，而不是只设一个温度。

## 常见误解

常见误解是把热水器调到 60 ℃就能随便洗浴。60 ℃直接接触会烫伤，必须用混水阀把末端温度降到安全范围。[1] 另一个误解是“热水系统没闻到异味就没有军团菌”；生物膜与低浓度污染通常无味。

## 与其他温度的关系

它低于 pasteurization 的 72 ℃，也低于 boiling-water 的 100 ℃；与 sterilization-autoclave 的 121 ℃相比，热水系统靠持续温度管理与水力条件，而不是高压蒸汽。它高于 room-temperature 的 20 ℃，处在“抑制但非即时灭菌”的温区。[1][2]


热水系统还要避免死水段与低温回水；只把储罐加热到 60 ℃，而末端长期不用，生物膜仍可能成为污染源。[1][2]


回水温度也应定期监测，避免末端长期低于 50 ℃。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 333.1 K，即 60 ℃（按 T/K−273.15 换算）；约为人体核心温度（310 K）的 1.07 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
