---
id: temperature.water-triple-point
title: 水三相点
titleEn: Water triple-point temperature reference
dimension: temperature
category: 常温
summary: >-
  水的三相点在 ITS-90 中赋值为 273.16 K，即 0.01 °C，对应压力 611.657 Pa。它是冰、液态水与水蒸气共存的参考状态；自
  2019 年起，开尔文已改由玻尔兹曼常数定义。
quantity:
  value: 273.16
  unit: K
  measure: 水三相点ITS-90赋值与热力学参考
  approximate: true
  measureLabel: 水三相点ITS-90赋值与热力学参考
displayValue: 273.16 K（ITS-90；实温需不确定度）
related:
  - temperature.water-freezing
  - temperature.boiling-water
  - temperature.absolute-zero
  - temperature.co2-critical-point
  - temperature.ethanol_boiling
  - time.present
reviewStatus: reviewed
sources:
  - title: 'Kelvin: Present Realization'
    url: 'https://www.nist.gov/si-redefinition/kelvin/kelvin-present-realization'
    publisher: NIST
    accessed: '2026-11-06'
  - title: 'SI Brochure Appendix 2: mise en pratique for the kelvin'
    url: 'https://www.bipm.org/documents/20126/41489682/SI-App2-kelvin.pdf/'
    publisher: BIPM
    accessed: '2026-11-06'
  - title: 'Kelvin: ITS-90'
    url: 'https://www.nist.gov/si-redefinition/kelvin/kelvin-its-90'
    publisher: NIST
    accessed: '2026-11-06'
legacy:
  id: water-triple-point
  icon: "\U0001F52C"
  relatedLabels: 冰点、沸点、室温、超导
conditions: >-
  维也纳标准平均海水（VSMOW）组成的水，在冰、液态水与水蒸气三相共存、热平衡且压力为 611.657 Pa 时，ITS-90 赋值 273.16
  K；实际样品需按三相点容器规程实现。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 'NIST 的 Kelvin: Present Realization 页面给出三相点 273.16 K、压力 611.657 Pa、VSMOW 同位素组成与冰套退火至少 10 天的实现要求。'
    - BIPM 的 mise en pratique 说明开尔文在 2019 年后由玻尔兹曼常数定义，水三相点仍是重要实现参考。
    - NIST 的 ITS-90 页面把水三相点列为温标参考点之一，正文据此区分 ITS-90 赋值与热力学实温。
  originalQuantity:
    value: 273.16
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  273.16 K 是 ITS-90 赋值；实验室级三相点容器的实际温度在约 50 µK 范围内分布。2019
  年后开尔文由固定玻尔兹曼常数定义，真实水三相点的热力学温度需带不确定度表述。
visual:
  template: "phase-diagram"
  profile: "crystal"
  caption: "水三相点样品池"
  note: "冰、液态水与水蒸气三相共存的原理示意；三相结构与样品池比例均为说明性处理，非按比例绘制，也不是观测重建。 所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。"
  backdrop: "everyday"
  color: "#82b7cc"
  symbol: "H₂O triple point"
  scene: "temperature.object"
zone: 常温
tags:
  - 常温
  - 温度
  - 日常
conceptGroup: water
---
## 它是什么

水的三相点是冰、液态水与水蒸气三者共存并达到热平衡的状态，ITS-90 赋值为 273.16 K，即 0.01 °C，对应压力 611.657 Pa。[1][3] 它不是“0 °C 的冰点”，而是比常压冰点高 0.01 K 的特定平衡点。三相点的水还必须采用维也纳标准平均海水（VSMOW）的同位素组成，否则氢、氧同位素比例会改变温度。[1]

## 怎样测到

三相点用密封的三相点容器实现：容器内装入特定同位素组成的水，抽真空到约 611.657 Pa，再在中心测温井周围形成几毫米厚的冰套。冰套最初有应变，需要在水浴中退火至少 10 天；测量前用室温玻璃棒短暂插入测温井，形成薄薄一层融水，使冰套能自由转动。[1] 随后把标准铂电阻温度计放入测温井，等热平衡后读数。实验室级容器的实际三相点温度约在 50 µK 范围内分布。[1]

## 数值与口径

273.16 K − 273.15 K = 0.01 K，即 0.01 °C；611.657 Pa = 6.11657 hPa，约为地球海平面气压的 0.6%。[1] 常压下的冰点是 273.15 K，比三相点低 0.01 K，因为空气溶解和压力都会移动平衡。ITS-90 的 273.16 K 是温标赋值；2019 年后开尔文由玻尔兹曼常数定义，真实水三相点的热力学温度需要带不确定度，而不是“定义上绝对精确”。[2][3]

## 常见误解

“水三相点就是 0 °C”忽略了 0.01 K 的差异和压力条件：常压冰点是 273.15 K，三相点是 273.16 K。[1][3] 第二个误解是认为三相点不需要特定压力；611.657 Pa 是三相点存在的必要条件，压力偏离后就不再是三相交汇。第三，认为 273.16 K 至今仍定义开尔文；2019 年的修订已改用玻尔兹曼常数。[2] 最后，普通冰箱里的冰水混合物不是三相点容器，不能拿它来校准精密温度计。

## 与其他温区的关系

273.16 K 比常压冰点 273.15 K 高 0.01 K，比水的沸点 373.15 K 低整整 100 K，比二氧化碳临界温度 304.18 K 低约 31 K。[1][3] 它远高于绝对零度，也低于乙醇沸点 351.5 K。水三相点因此位于“冰点附近”的窄窗口，是温标链上连接低温物理与常温计量的一个关键锚点。
