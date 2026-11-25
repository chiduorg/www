---
id: temperature.boiling-water
title: 水的沸点
titleEn: Boiling water
dimension: temperature
category: 常温
summary: 在标准大气压附近，水约在 100 °C（373.15 K）沸腾。沸点随压力变化：较低压力下会在较低温度沸腾，较高压力下则需要更高温度。
quantity:
  value: 373.15
  unit: K
  measure: water-normal-boiling-temperature-reference
  approximate: true
  measureLabel: 水常压沸点近似
displayValue: 约 373.15 K（100 °C）
related:
  - temperature.water-freezing
  - temperature.water-triple-point
  - temperature.pasteurization
  - space.human
  - time.present
  - mass.water-molecule
reviewStatus: reviewed
sources:
  - title: 'FAQs About Water and Steam: effect of pressure on boiling'
    url: 'https://iapws.org/faqs/faq1'
    publisher: International Association for the Properties of Water and Steam
    accessed: '2026-11-04'
  - title: 'Kelvin: Introduction'
    url: 'https://www.nist.gov/si-redefinition/kelvin-introduction'
    publisher: NIST
    accessed: '2026-11-04'
  - title: "SI Brochure Appendix 2: mise en pratique for the kelvin"
    url: "https://www.bipm.org/documents/20126/41489682/SI-App2-kelvin.pdf/"
    publisher: "BIPM"
    accessed: '2026-11-24'
  - title: "Raw Milk Questions & Answers"
    url: "https://www.fda.gov/food/buy-store-serve-safe-food/raw-milk-questions-answers"
    publisher: "US FDA"
    accessed: '2026-11-24'
legacy:
  id: boiling-water
  icon: ♨
  relatedLabels: 相变、汽化、潜热、热力学、蒸汽机、工业革命、水的冰点、室温、人体体温、地球、大气压
visual:
  scene: temperature.boiling-water
  backdrop: heat-flow
  caption: 沸腾的水 · 气泡与蒸汽
  note: 沸水、气泡与蒸汽为示意，沸点取决于压力。
conditions: 标准大气压 101.325 kPa 附近的水沸点近似参考，不是与压力无关的精确常数。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 将整数 373 K 改为与 100 °C 对齐的 373.15 K；明确只是标准大气压附近的近似值。
  originalQuantity:
    value: 373
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
conceptGroup: water
---
## 沸腾并不只是液面冒白气

水分子可以从液面进入气相；沸腾则与液体内部气泡能够形成和长大有关。IAPWS 用蒸气压解释这一过程：当水的蒸气压达到周围压力时，便具备沸腾条件。因此，沸点从一开始就是温度与压力共同限定的物性。[1]

## 为什么这里写约 100°C

本页采用标准大气压 101.325 kPa 附近约 100°C 的日常参考，即约 373.15 K。它适合比较水和其他物质的温度量级，但不是压力任意变化时都成立的精确读数；换算后多出的数字，也不意味着日常测量具有同样精度。[1][2]

## 海拔和加压怎样改变结果

海拔较高处的周围气压通常较低，水的蒸气压在较低温度就能与之平衡；加压环境则相反。观察两个容器里的水时，即使都在沸腾，也不能据此断定它们温度相同。要使比较可重复，应同时记录压力和测温条件。[1]

## 温度达到条件，气泡也需开始形成

IAPWS 还说明，气泡形成需要成核过程；缺少合适成核条件时，液体可能高于通常沸点而暂未明显沸腾。这解释了为什么“已经到某个数字”和“看见持续气泡”并非完全同一件事，也不能只凭动画中气泡数量估算真实温度。[1]

因此，比较表格中的沸点时，可以先检查它采用一大气压还是其他压力，再检查数字属于日常近似还是精密温标。单纯增加小数位而不补这些信息，会让两个本来不矛盾的记录看上去相互冲突。[1]

## 与精密温标怎样衔接

高精度资料必须进一步区分温标口径：IAPWS 给出的标准大气压水沸点在 ITS-90 上约为 99.974°C。水并没有因此改变性质，而是温标定义与测量实现更精细。本页保留约 100°C 的比较锚点；研究或标定应采用明确温标下的数据。[1]

## 沸点随压力变化

标准大气压下水约 100 ℃沸腾；高海拔气压低，沸点降低，低海拔或加压则升高。[1] 压力锅把水加热到 110 ℃以上，正是利用这一点。说“水在 100 ℃沸腾”时，必须同时给出压力条件，否则只是日常近似。

## 汽化潜热不是升温

把水从 100 ℃的液态变成 100 ℃的蒸汽，需要吸收大量潜热，温度却不上升。[1] 这也是蒸汽烫伤比同温度热水更严重的原因之一：蒸汽凝结时会释放潜热。沸点描述相变条件，不是热量总量。

## 五轴对照

在温度轴，常压沸点约 373.15 K；在空间轴，水分子进入气相；在质量轴，汽化潜热与分子间氢键有关；在时间轴，沸腾需要成核与持续加热。温度、压力与相态共同定义沸点。[1][2]

## 沸点、潜热与压力

常压下水在 100 ℃沸腾，但沸点随气压变化：高海拔约 90 ℃，压力锅可到 120 ℃。汽化潜热让水在沸点继续吸热而不升温，这也是蒸汽烫伤更严重的原因。正文的 100 ℃必须带“标准大气压”这个条件。[1][S2]

## 读数的口径与换算

本条采用的量是 约 373.15 K（100 °C），口径是 water-normal-boiling-temperature-reference。温度是强度量，读数依赖温标、测点与热平衡；同一对象的不同部位、不同时刻可以有不同温度。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [3]（BIPM）、[4]（US FDA） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
