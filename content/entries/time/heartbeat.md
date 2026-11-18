---
id: time.heartbeat
title: 心跳周期
titleEn: Heartbeat Interval
dimension: cosmic-time
category: 时长尺度
summary: 心跳周期是相邻两次心跳的间隔，等于心率的倒数。健康成人静息心率60至100次/分，对应每次0.6至1.0秒；取75次/分作代表值，周期约0.8秒。
quantity:
  value: 0.8
  unit: s
  measure: duration-reference
  measureLabel: 健康成人静息心率60–100次/分对应的周期，取75次/分作代表值
  approximate: true
displayValue: 0.6–1.0 秒/次（60–100 次/分）
chronology:
  status: duration
  plot: false
  note: 本条是持续时长/周期，不是大爆炸后的绝对时点，不放在绝对时间轴上
conditions:
  population: 健康成人
  state: 静息、安静休息后
  rhythm: 窦性心律
  heartRateRange: 60–100 次/分
  representativeRate: 75 次/分
  conversion: 周期（秒）= 60 ÷ 心率（次/分）
uncertainty: >-
  60至100次/分是临床参考区间，不是个体恒定值；经常锻炼者可低至40次/分，运动、发热、贫血、情绪和药物可使其升高。
  单次测量受体位、测量方法与心律不齐影响，换算得到的0.8秒只代表该区间中段的量级。
related:
  - time.breath
  - time.circadian-rhythm
  - space.human
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: Target Heart Rates Chart
    url: >-
      https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates
    publisher: American Heart Association
    accessed: '2026-11-06'
  - title: Vital signs
    url: 'https://medlineplus.gov/ency/article/002341.htm'
    publisher: 'MedlinePlus, U.S. National Library of Medicine'
    accessed: '2026-11-06'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 美国心脏协会页面核实多数成人静息心率60至100次/分，并说明运动员可低至40次/分。
    - MedlinePlus 生命体征页核实健康成人静息脉搏60至100次/分，并指出正常值随年龄、性别、体重与健康状况变化。
    - 0.6至1.0秒由60÷100与60÷60换算得到；0.8秒为75次/分的代表值，不是新测量结果。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: scientific-instrument
  scene: time.object
  caption: 心跳周期 · 节律测量示意
  note: 波形与仪表为解释性示意，非按比例，非观测重建，不是真实心电图或个体心率的记录
mode: 时长
tags:
  - 时长尺度
  - 时长
---
## 它是什么

心跳周期是相邻两次心跳之间的时间，等于心率的倒数。健康成人静息心率通常为每分钟60至100次，对应每次0.6至1.0秒；取中间值75次/分，周期约0.8秒。[1][2] 这里说的是“多久跳一次”，不是“心脏何时开始跳”。

## 怎样知道

心率可通过触摸桡动脉计数、听诊或心电图测量；静息心率应在安静休息后测定。美国心脏协会指出，多数成人静息心率为60至100次/分，经常锻炼的人可低至40次/分；MedlinePlus 把60至100次/分列为健康成人静息参考范围。[1][2] 由于心率随情绪、体温、药物和体位变化，单次读数只是当时条件的结果。

## 数值与口径

把60至100次/分取倒数，得到0.6至1.0秒；若以75次/分作代表值，周期为0.8秒，一天约10.8万次心跳。[1] 这个范围针对静息成人，不包括运动时的目标心率，也不适用于新生儿和儿童，他们的心率明显更快。[1] 换算成秒时保留两位有效数字即可，不必把0.800秒当作测量精度。

## 这是持续多久，不是发生在何时

心跳周期回答“每隔多久跳一次”，是一个重复的持续时间；它不表示心脏在某个绝对时刻首次收缩。把周期乘以次数，才能得到总时长。

## 常见误解

常见误解是把60至100次/分当作所有人都必须落入的健康区间。运动员、睡眠中的人和发热患者都可能越出该范围而无异常。[1] 另一个误解是把心率与心跳周期混为一谈：前者是频率，后者是时间，两者互为倒数。

## 与其他尺度的关系

0.8秒的周期比一次眨眼（约0.3秒）长，比一次静息呼吸（约4秒）短。按75次/分算，一生约73年可完成约27亿次心跳；把心跳周期与呼吸周期、昼夜节律并排看，能看到人体内部几种时钟的嵌套关系。[1][2]
