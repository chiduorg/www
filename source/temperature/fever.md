---
id: temperature.fever
title: 发热体温
titleEn: Fever body temperature reference
dimension: temperature
category: 常温
summary: 口温达到或超过 38.0 ℃（311.15 K）通常被视为发热。阈值随测量部位、 设备与个体差异而变化，本条以口温口径给出代表值，不把单次读数当作诊断结论。
quantity:
  value: 311.15
  unit: K
  measure: 口温发热阈值
  approximate: true
displayValue: 约 38.0 ℃（311.15 K）
related:
  - temperature.human-body-temperature
  - temperature.hypothermia
  - temperature.room-temperature
  - temperature.oven
reviewStatus: reviewed
sources:
  - title: >-
      Questions and Answers about the Final Rule for Control of Communicable
      Diseases: Interstate (Domestic) and Foreign Quarantine
    url: >-
      https://archive.cdc.gov/www_cdc_gov/quarantine/qa-final-rule-communicable-diseases.html
    publisher: Centers for Disease Control and Prevention (CDC)
    accessed: '2026-11-06'
  - title: Fever
    url: 'https://www.britannica.com/science/fever'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions:
  medium: 人体组织（口腔）
  measurementSite: 舌下口腔
  duration: 静息状态下单次测量，异常时规范复测
  basis: 实测阈值
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - CDC 检疫规则问答把发热定义为测得体温 100.4 °F（38 ℃）或以上，正文据此取口温 38.0 ℃（311.15 K）。
    - Britannica 发热条目给出通常高于 99 °F（37.22 ℃）的教科书描述，并说明致热原与下丘脑机制；两者口径不同，正文已分别说明。
    - 未找到覆盖所有年龄与测量部位的统一定量标准；腋温、耳温等换算需按设备与临床指南，正文保留这一限制。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  38.0 ℃ 是口温筛查阈值的圆整值；腋温通常低于口温，耳温与额温受设备及环境影响，
  个体基线也随年龄、昼夜节律和活动变化。单次读数不能替代规范复测与临床判断。
visual:
  template: "thermometer"
  scene: "temperature.object"
  caption: "发热体温的口温参考"
  note: "画面为发热体温的示意表达，非按比例、非观测重建；颜色、光晕与容器形状仅用于区分温度层级， 不代表真实人体解剖或具体测量设备。"
  color: "#d8825a"
zone: 常温
tags:
  - 常温
  - 温度
  - 日常
---
## 它是什么

发热不是一种独立的温度，而是人体核心温度因病理性原因升高的状态。临床与公共卫生资料通常把口温达到或超过 38.0 ℃（100.4 °F）视为发热；这一阈值对应 311.15 K。[1] 正常体温因测量部位、昼夜节律、年龄和活动状态而波动，所以“发热”是带条件的判断，而不是所有人在任何时刻都相同的固定数值。[2]

## 怎样知道

判断发热依赖体温计测量。口腔、腋下、耳道、直肠等部位读数并不等价：口腔测量方便，直肠或食管更接近核心温度；腋下读数通常偏低，需要按相应标准解释。CDC 的传染病检疫规则采用“测得体温 38.0 ℃ 或以上”作为发热定义，并强调测量值优先于“摸起来发热”的主观感受。[1] 家用电子体温计、红外耳温计和临床探头各有误差范围，单次异常读数应在规范条件下复测。

## 数值与口径

本条取口温 38.0 ℃，即 311.15 K。Britannica 把发热描述为通常高于 99 °F（37.22 ℃）的异常体温，并解释其由致热原作用于下丘脑引起。[2] 两个数字的差别来自定义目的与测量部位：前者是公共卫生筛查阈值，后者是教科书式的生理描述。若用腋温、耳温或额温，必须连同部位、设备、静息时间和是否刚进食或运动一起记录；不能把 38.0 ℃ 直接套到所有部位。

## 常见误解

第一，把 38.0 ℃ 当成“所有人发烧的唯一边界”；老年人、婴幼儿和免疫抑制者的基线及反应可能不同。第二，把体温高低直接等同于病情轻重；发热程度与感染病原、病程和个体反应有关，不能只凭一个读数判断。第三，用手摸额头代替测量；触感受环境温度和手温影响，不能给出可比较的数值。第四，忽略测量部位；同一人不同部位可差零点几摄氏度，跨部位比较会把正常波动误读为发热。

## 与其他温度的关系

发热阈值高于正常核心体温约 1 ℃，明显低于 boiling-water 的 100 ℃，也低于 sauna 的空气温度。它处在 human-body-temperature 的窄幅波动区间上端；与 hypothermia 的 35 ℃ 阈值分居正常体温两侧。理解这个数值的关键不是记住一个点，而是同时记住介质（组织）、位置（口腔或核心）和测量方式。只有口径一致，才能把发热与低体温、环境高温放在同一张温度表上比较。
