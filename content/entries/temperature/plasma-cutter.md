---
id: temperature.plasma-cutter
title: 等离子切割
titleEn: Plasma cutting arc temperature
dimension: temperature
category: 极高温
summary: >-
  等离子切割的弧/射流温度常被取在 5,000–10,000 K 量级，本条采用约 8,000 K（约 7,727 ℃）。
  这是等离子体本身的温度，不是被切钢板的整体温度，也不是割炬外壳温度。
quantity:
  value: 8000
  unit: K
  measure: 等离子切割弧射流温度
  approximate: true
  measureLabel: 等离子切割弧射流温度
displayValue: '约 8,000 K（约 7,727 °C）'
related:
  - temperature.weld-arc
  - temperature.arc-lamp
  - temperature.lightning
  - temperature.oxyacetylene-flame
reviewStatus: reviewed
sources:
  - title: 'Thermal cutting fumes assessment: plasma, oxy-fuel and laser cutting'
    url: 'https://occhygiene.com.au/thermal-cutting-fumes/'
    publisher: Occupational Hygiene (Australia)
    accessed: '2026-11-06'
  - title: What is plasma cutting?
    url: >-
      https://www.twi-global.com/technical-knowledge/faqs/faq-what-is-plasma-cutting
    publisher: TWI Global
    accessed: '2026-11-06'
conditions: >-
  等离子弧切割（PAC）割炬内的压缩电弧与喷嘴出口射流，常压、空气或氩/氮保护气；
  温度随电源功率、气体种类、喷嘴结构和切割速度变化。测点指等离子体，不是切缝或工件整体。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 Occupational Hygiene 热切割文章：等离子弧温度超过 8,000–10,000 K。'
    - '核对 TWI 等离子切割说明：射流是温度高于 20,000 ℃ 的电离气体，用于说明核心与射流的差异。'
    - '正文取 8,000 K 作为 5,000–10,000 K 区间的代表值，并在正文说明更高读数对应弧柱核心或不同测点。'
uncertainty: >-
  切割射流常被引用为 5,000–10,000 K（约 4,727–9,727 ℃）；弧柱核心和不同功率设备可给出更高值。
  光谱诊断、焓平衡和喷嘴热流模型各有假设，单一读数不能代表整个流场。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: reaction-field
  profile: plasma
  caption: 等离子切割射流示意
  note: 画面为割炬、压缩电弧和金属切缝的示意表达，等离子体颜色、火花和烟尘均经艺术处理， 不能据颜色判断精确温度；非按比例，非观测重建；各对象分别调整显示大小。
  scene: temperature.object
zone: 极高温
tags:
  - 极高温
  - 温度
  - 日常
---
## 它是什么

等离子切割利用高速电离气体射流熔化并吹除金属。切割弧的温度常被描述在 5,000–10,000 K 量级，本条取约 8,000 K（约 7,727 ℃）作为代表值。[1] 它指等离子体射流本身，不是被切钢板的整体温度。割炬内部的电弧被喷嘴孔道压缩，能量集中到很小的体积，因此热流密度极高。

## 怎样测到

等离子弧温度靠光谱诊断、焓平衡和喷嘴热流模型估算；割炬内电弧被水或空气冷却喷嘴压缩，形成窄而高速的射流。[2] 职业卫生资料把等离子切割弧温写为超过 8,000–10,000 K；TWI 则强调射流是温度高于 20,000 ℃ 的电离气体，说明不同测点和功率下数值可以更高。[1][2]

## 数值与口径

8,000 K 约合 7,727 ℃。[1] “5,000–10,000 K”是切割射流的常用工程范围；弧柱核心、喷嘴出口和工件表面的温度依次降低。切割能力来自局部热流密度和高速气流，而不是整个割炬均匀受热。离开喷嘴后射流迅速与空气混合并膨胀，温度和速度都会下降。[2]

## 常见误解

第一，把等离子温度当成工件温度；工件只在切缝附近熔化。第二，把 8,000 K 与焊接电弧的 3,500 K 混用；两者功率密度和气体约束不同。第三，认为温度越高切得越厚；厚度还受电源功率、气压和切割速度限制，实际切割质量还取决于割嘴高度和板材表面状态，干切与水下切割的测温环境也不同。[1][2]

## 与其他温区的关系

8,000 K 高于焊接电弧的约 3,500 K、弧光灯正极 crater 的约 4,000 K 和钨的熔点 3,695 K，低于闪电通道的约 30,000 K。它处在热等离子体加工区间，足以熔化多数导电材料。[1]
