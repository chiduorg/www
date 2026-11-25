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
  - mass.adult-human
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
  - title: "2021 Anthropometry Procedures Manual"
    url: "https://stacks.cdc.gov/view/cdc/127207/cdc_127207_DS1.pdf"
    publisher: "CDC / National Center for Health Statistics"
    accessed: '2026-11-24'
  - title: "Anthropometry — physical anthropology"
    url: "https://www.britannica.com/science/anthropometry"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
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


## 这个数值的误差账本

人体核心温度约 37 ℃，但正常范围随测量部位、时间与个体变化。腋温通常低于核心温度，额温受环境与设备影响；直肠、食管、膀胱更接近核心。37 ℃不是“发烧界线”，发热阈值常取 38 ℃或更高，具体依指南与人群。

## 换一个尺度看它

37 ℃等于 310.15 K，约为室温 293 K 的 1.06 倍；与太阳表面 5772 K 相比微不足道。人体靠约 37 ℃的窄窗口维持酶与细胞功能，核心温度升高 3–4 ℃就可能危及生命。这个尺度说明“温度不高”不等于“影响不大”。

## 核心温度与体表温度不是一回事

核心温度指心、脑等深部组织的温度，常用直肠、食管或膀胱探头测量；腋温、额温、耳温是间接估计。[1] 外周血管收缩、出汗和环境温度都会让体表读数偏离核心温度。把腋温 36.5 ℃当成核心温度，可能低估或高估真实状态。

## 37 ℃为什么不是精确常数

大样本研究给出的平均口腔温度约 36.6 ℃，个体、年龄、时段和测量方式都会改变读数。[3] 37 ℃是历史形成的参考值，便于交流，不是所有人都必须命中的目标。体温的“正常范围”比一个整数更有意义。

## 五轴对照

在温度轴，核心约 37 ℃；在空间轴，人体尺度约 1.7 米；在质量轴，成人约 70 千克；在时间轴，体温随昼夜节律波动。体温是生理状态，不是环境温度。[1][3]

## 延伸核对

补充的来源 [4]（CDC / National Center for Health Statistics）、[5]（Encyclopaedia Britannica） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
