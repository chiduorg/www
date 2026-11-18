---
id: temperature.hypothermia
title: 低体温阈值
titleEn: Hypothermia core temperature threshold
dimension: temperature
category: 常温
summary: 核心体温低于 35.0 ℃（308.15 K）即进入低体温范围。它描述的是人体深部温度， 不是皮肤或环境温度；测量部位、暴露时间与个体状态都会改变判断。
quantity:
  value: 308.15
  unit: K
  measure: 核心温度低体温阈值
  approximate: true
displayValue: 约 35.0 ℃（308.15 K）
related:
  - temperature.human-body-temperature
  - temperature.fever
  - temperature.water-freezing
  - temperature.antarctic_min_temp
reviewStatus: reviewed
sources:
  - title: 'Hypothermia-Related Deaths — Wisconsin, 2014, and United States, 2003–2013'
    url: 'https://stacks.cdc.gov/view/cdc/55010'
    publisher: Centers for Disease Control and Prevention (CDC)
    accessed: '2026-11-06'
  - title: Hypothermia
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK545239/'
    publisher: NCBI Bookshelf (StatPearls)
    accessed: '2026-11-06'
conditions:
  medium: 人体深部组织
  measurementSite: 直肠、食管或膀胱等核心温度测点
  duration: 持续低于阈值，而非单次瞬时读数
  basis: 实测核心温度
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - CDC 的 MMWR 资料把低体温定义为核心体温低于 95 °F（35 ℃），正文取 35.0 ℃（308.15 K）。
    - >-
      StatPearls 条目同样以低于 35 ℃ 为界，并给出轻度 32–35 ℃、中度 28–32 ℃、重度低于 28 ℃
      的分层，正文采用其分层说明。
    - 体表温度不能可靠替代核心温度；正文明确测量部位与暴露条件，不把环境气温当作诊断依据。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  35.0 ℃ 是核心温度的临床阈值；不同指南的分层边界略有差异，测量设备与操作也会带来误差。
  在寒冷、潮湿或有风的环境中，体表读数可能明显低于核心温度，必须结合暴露史与意识状态判断。
visual:
  template: "thermometer"
  scene: "temperature.object"
  caption: "低体温核心温度阈值"
  note: "画面为低体温阈值的示意表达，非按比例、非观测重建；仪表、光晕与冷色仅用于区分温区， 不代表真实临床设备或人体剖面。"
  color: "#d8825a"
zone: 常温
tags:
  - 常温
  - 温度
  - 日常
---
## 它是什么

低体温是核心体温下降到 35.0 ℃（95 °F，308.15 K）以下的状态。[1] 它不是“感觉冷”，而是身体产热与散热失衡后，深部组织温度持续低于正常范围。临床上按核心温度分层：32–35 ℃ 为轻度，28–32 ℃ 为中度，低于 28 ℃ 为重度。[2] 这一定义强调“核心”，因为体表温度无法可靠反映心、脑等深部器官的热状态。

## 怎样知道

核心温度需用直肠、食管或膀胱探头测量；耳温、腋温在寒冷环境中可能受外周血管收缩影响，不能单独作为确诊依据。[2] CDC 的监测资料以核心温度低于 35 ℃ 定义低体温，并指出环境暴露、药物中毒、代谢或神经系统功能障碍都可导致。[1] 现场判断还要结合暴露时间、衣物是否潮湿、风速和意识状态，而不是只看一个读数。

## 数值与口径

35.0 ℃ 等于 308.15 K，也等于 95 °F。它比正常核心体温约 37 ℃ 低约 2 ℃，但已足以触发明显的生理代偿失败。轻度低体温的 32–35 ℃ 区间意味着“低于阈值”本身有宽度；不同指南对分层边界略有差异，所以正文把 35.0 ℃ 作为进入低体温的统一起点，而不把某一分层当作唯一标准。[2] 核心温度还应说明是持续测量还是单次读数。

## 常见误解

第一，认为只有在冰点以下才会发生低体温；CDC 指出即使气温高于 40 °F（约 4 ℃），淋雨、出汗或冷水浸泡仍可导致。[1] 第二，用腋温或手摸皮肤判断；外周温度低不等于核心温度低。第三，把“发抖”当成唯一信号；严重低体温时发抖可能停止，反而出现意识混乱和行动迟缓。第四，把 35 ℃ 当成绝对安全线；个体基础体温和测量误差都会影响判断。

## 与其他温度的关系

35 ℃ 低于 human-body-temperature 的正常范围，也低于 fever 的 38 ℃ 阈值；它高于 water-freezing 的 0 ℃，因此低体温并不要求环境结冰。与 permafrost 的约 −10 ℃ 相比，35 ℃ 仍属“温暖”，说明核心温度阈值描述的是人体热平衡，而不是环境温度本身。把核心温度与环境气温分开，是理解本条的关键。
