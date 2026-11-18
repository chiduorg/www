---
id: temperature.human-body-temperature
title: 人体体温
titleEn: Human body temperature
dimension: temperature
category: 常温
summary: 约 37 °C（310.15 K）是常用的体温参考值，而非每个人每时每刻都具有的精确温度。体温读数会随个体、时段和测量部位等因素变化。
quantity:
  value: 310.15
  unit: K
  measure: human-body-temperature-educational-reference
  approximate: true
  measureLabel: 人体体温日常参考
displayValue: 约 310.15 K（37 °C）
related:
  - space.human
  - temperature.room-temperature
  - temperature.water-freezing
  - temperature.bath-water
  - time.present
reviewStatus: reviewed
sources:
  - title: Temperature measurement
    url: 'https://www.medlineplus.gov/ency/article/003400.htm'
    publisher: U.S. National Library of Medicine / MedlinePlus
    accessed: '2026-11-04'
  - title: 'Kelvin: Introduction'
    url: 'https://www.nist.gov/si-redefinition/kelvin-introduction'
    publisher: NIST
    accessed: '2026-11-04'
  - title: >-
      Defining Usual Oral Temperature Ranges in Outpatients Using an
      Unsupervised Learning Algorithm
    url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2809098'
    publisher: 'Ley et al., JAMA Internal Medicine (2023), original investigation'
    accessed: '2026-11-04'
legacy:
  id: human-body-temperature
  icon: ❤️
  relatedLabels: 恒温动物、酶、稳态、新陈代谢、免疫系统、体温调节、室温、水的沸点、水的冰点、细胞、蛋白质、DNA
visual:
  scene: temperature.human-body
  backdrop: everyday
  caption: 人体温度 · 人形与体温读数
  note: 热分布配色为示意，不是人体热成像或诊断数据。
conditions: 以常用约 37 °C 的体温参考作尺度比较；个体、时段、年龄和测量部位不同，读数不同。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 去掉“精确维持”“最佳温度”“生命窗口中心”以及发热诊断暗示；纠正 310 K 与 37 °C 混写。
  originalQuantity:
    value: 310
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
zone: 常温
tags:
  - 常温
  - 温度
  - 日常
---
## 37°C 是参考，不是人人相同的常数

日常说的体温约 37°C，是便于交流的参考值。MedlinePlus 明确列出个体、年龄、时段和测量方式造成的变化；一个人不同时间的读数，也不必始终等于这个整数。人体没有一张处处相同、永远不变的温度标签。[1]

## 仪器到底在测哪里

口腔、腋下、耳部和额部的读数属于不同测量口径。皮肤温度也不能直接当作身体内部温度。比较两组数据时，除了数字，还要看测量部位、仪器及取得读数的条件；来源也提醒，不同方法之间不能机械套用一个绝对固定的换算差。[1]

## 大样本研究怎样处理变化

Ley 等 2023 年分析同一医疗系统的成人门诊记录，通过算法筛除某些与温度分布异常相关的记录，再建立口腔温度模型。该研究分析集的平均值约 36.64°C，显示“常见值”取决于样本和定义，而不是新找到了一条对所有人通用的常数。[3]

## 换成开尔文能告诉我们什么

37°C 换算为 310.15 K，只改变温标表达，不会让原本近似的生理参考突然变得精确。若以 20°C 的房间作假定参照，两者温差为 17 K；不能直接用摄氏数值相除，把结果解释成热能或生理状态的倍数。[2]

统计平均与个体读数回答的其实是两个问题：前者概括所选人群，后者记录一个人在某种条件下的状态。要把两者连接起来，需要研究设计与测量口径，不能仅看它们离 37°C 有几位小数的差别。[1][3]

## 读图的边界

本页仍用约 37°C 作为日常尺度坐标，不以群体平均值替个人作判断。研究限定于特定成人门诊数据，不能自动推及所有年龄与情境；人形配色也只是解释图，并非某个人的热成像或诊断结果。[1][3]
