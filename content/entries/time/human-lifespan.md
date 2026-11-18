---
id: time.human-lifespan
title: 人类寿命
titleEn: Human Lifespan
dimension: cosmic-time
category: 时长尺度
summary: 人类寿命这里取全球出生时预期寿命，2023年约为73.3年。它是按当年年龄别死亡率推算的人口统计平均值，不是个体的实际寿命，也不是寿命上限。
quantity:
  value: 2313172080
  unit: s
  measure: duration-reference
  measureLabel: 全球出生时预期寿命（2023年，两性合计）
  approximate: true
displayValue: 约 73.3 年 ≈ 2.31×10⁹ 秒
chronology:
  status: duration
  plot: false
  note: 本条是持续时长/周期，不是大爆炸后的绝对时点，不放在绝对时间轴上
conditions:
  sample: 全球人口
  indicator: 出生时预期寿命（life expectancy at birth）
  referenceYear: 2023
  sex: 两性合计
  assumption: 该年年龄别死亡率在假想出生队列的一生中保持不变
  notApplicable: 不代表任何个体的实际寿命或人类最长寿命
uncertainty: >-
  WHO 2023年估计为73.3年，2019年为73.4年，疫情期间曾下降；不同地区、性别和年龄组的数值差异很大。
  这是寿命表模型的合成估计，会随人口登记数据与死亡率模型修订；个体寿命分布远宽于平均值。
related:
  - time.first-humans
  - time.rise-homo-sapiens
  - space.human
  - time.cell-division
  - time.pregnancy
  - time.generation
reviewStatus: reviewed
sources:
  - title: 'GHE: Life expectancy and healthy life expectancy'
    url: >-
      https://www.who.int/data/gho/data/themes/mortality-and-global-health-estimates/ghe-life-expectancy-and-healthy-life-expectancy
    publisher: World Health Organization
    accessed: '2026-11-06'
  - title: life expectancy
    url: 'https://www.britannica.com/science/life-expectancy'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - WHO 全球健康估计页面核实2023年全球出生时预期寿命73.3年、2019年73.4年，并说明健康预期寿命恢复较慢。
    - Britannica 核实预期寿命的寿命表定义、出生队列假设及按性别、地区分列的必要性。
    - 换算采用 31557600 秒/年；秒数仅用于跨尺度比较，不代表新增测量精度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: settlement-workshop
  scene: time.object
  caption: 人类寿命 · 一生尺度示意
  note: 场景为风格化示意，非按比例，非观测重建，不表示具体个体或地区的人口结构
mode: 时长
tags:
  - 时长尺度
  - 时长
---
## 它是什么

人类寿命在这里指全球范围的出生时预期寿命，也就是在某一年的年龄别死亡水平保持不变时，一个新生儿平均能活多少年。它是一个人口统计指标，不是某个人的实际寿命，也不是人类生物学上的寿命上限。世界卫生组织全球健康估计给出的2023年全球值为73.3年。[1] 按每年31557600秒换算，约合2.31×10⁹秒。

## 怎样知道

预期寿命由寿命表计算：把某一年各年龄段的死亡率代入假想出生队列，逐龄推算存活人数与平均余寿。[1][2] 这类数字来自各国人口登记、死亡报告与模型补全，因此是估计值，会随数据修订以及疫情、饥荒、医疗条件变化而波动。[1] Britannica 强调，预期寿命是假设当年死亡水平不变的合成指标，通常按性别、地区分别给出。[2]

## 数值与口径

73.3年是2023年的全球两性合计出生时预期寿命；2019年为73.4年，随后受新冠疫情影响下降，2023年才大致恢复。[1] 不同地区差距可达数十年，同一地区的男女值也不同。[2] 换算成秒只用于跨尺度比较，多位数并不代表测量精度。真正要比较时，必须说明是出生时预期寿命、某年龄的余寿，还是某个群体的平均死亡年龄，这三者含义不同。[1][2]

## 这是持续多久，不是发生在何时

一个人活多久、一个群体平均活多久，都是持续时间；它不是“人类在某一时刻出现”，也不是“某年所有人同时出生”的时点。放在时长尺度上，它只能回答“大约持续多少秒”，不能回答“发生在何时”。

## 常见误解

最常见的误解是把预期寿命当作每个人的保证寿命。它只是按当年死亡率推算的平均值，婴儿死亡率下降会显著抬高出生时预期寿命，而老年人的余寿则是另一回事。[2] 另一个误解是把“平均寿命”与“已知最长寿个体”混为一谈；后者是极端值，不能代表群体。

## 与其他尺度的关系

73.3年约为23亿秒，相当于一个人一生中约27亿次心跳（按每分钟75次估算）或约6亿次呼吸。它比妊娠期（约280天）长约96倍，比典型细胞分裂周期长约2.7万倍。把这些周期叠起来看，才能体会“一生”是由无数短周期组成的，而不是一个不可分割的瞬间。[1]
