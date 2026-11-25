---
id: temperature.ethanol_boiling
title: 乙醇沸点
titleEn: Ethanol normal boiling point
dimension: temperature
category: 常温
summary: >-
  纯乙醇在 1 atm 下的正常沸点约为 351.5 K，即 78.35 °C。这里采用 NIST
  的资料均值；酒类、消毒液或乙醇水溶液的沸点随组成变化，不能直接套用纯乙醇值。
quantity:
  value: 351.5
  unit: K
  measure: 纯乙醇正常沸点资料均值
  approximate: true
  measureLabel: 纯乙醇正常沸点资料均值
  uncertainty: 0.2
displayValue: 约 351.5 K（78.35 °C）
related:
  - temperature.boiling-water
  - temperature.ammonia_boiling
  - temperature.bread_baking
  - temperature.mercury-boiling
  - space.human
  - time.present
reviewStatus: reviewed
sources:
  - title: 'Ethanol: phase-change data'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C64175&Mask=4'
    publisher: NIST Chemistry WebBook
    accessed: '2026-11-06'
  - title: ethanol
    url: 'https://www.britannica.com/science/ethanol'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: ethanol_boiling
  icon: "\U0001F377"
  relatedLabels: 水的沸点、氨的沸点、美拉德反应、蒸馏、发酵、可再生能源、消毒、面包烘烤温度、共沸混合物
conditions: 纯乙醇、1 atm、正常沸点；NIST 资料均值 351.5±0.2 K，不适用于乙醇水溶液、酒类或含添加剂的工业乙醇。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NIST Chemistry WebBook 的乙醇相变数据页给出正常沸点 351.5 K，并列出 0.2 K 的赋值不确定度。
    - >-
      Britannica 乙醇条目给出纯乙醇沸点 78.5 °C，并说明直接蒸馏最多得到含 95.6%
      质量分数乙醇的恒沸混合物，正文据此区分纯物质与混合物。
    - 正文按五节结构重写，补充 1 atm 条件、单位换算和共沸对沸点的影响。
  originalQuantity:
    value: 351.5
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 351.5 K 的赋值不确定度为 0.2 K；NIST 资料均值与 Britannica 的 78.5 °C 相差约 0.15 K，主要来自资料选择与圆整。
visual:
  template: phase-vessel
  profile: liquid
  caption: 乙醇常压沸腾安瓿
  note: >-
    纯乙醇在 1 atm 下沸腾的示意；液面、气泡与安瓿比例均为说明性处理，非按比例绘制，也不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: everyday
  color: '#bddfd9'
  symbol: C₂H₅OH
  scene: temperature.object
zone: 常温
tags:
  - 常温
  - 温度
  - 日常
---
## 它是什么

纯乙醇在 1 atm 下的正常沸点约为 351.5 K，即 78.35 °C。[1][2] 这是纯物质液相与气相在常压下的平衡温度；它不等于白酒、消毒酒精或乙醇水溶液的沸点。含水乙醇的沸点随组成变化，蒸馏时还会遇到恒沸混合物，因此“78.35 °C”只对应纯乙醇这一种状态。

## 怎样测到

正常沸点用沸腾法或蒸气压法测量：把纯乙醇置于可控压力的容器中，缓慢升温，记录液相持续沸腾并稳定在 1 atm 时的温度；也可由蒸气压曲线外推。[1] NIST Chemistry WebBook 汇总的相变数据给出 351.5 K，并标注 0.2 K 的赋值不确定度；Britannica 的乙醇条目给出 78.5 °C，作为百科层面的圆整值。[1][2] 样品含水量、压力控制和温度计校准都会影响读数。

## 数值与口径

351.5 K − 273.15 K = 78.35 °C；Britannica 的 78.5 °C 相差约 0.15 K，属于圆整与资料差异。[1][2] 这个换算不增加原始数据的精度。乙醇与水在常压下会形成恒沸混合物，直接蒸馏最多得到约 95.6% 质量分数的乙醇；此时沸点不再等于纯乙醇的 78.35 °C。[2] 比较“酒精沸点”时，必须说明是纯乙醇还是某一浓度的水溶液。

## 常见误解

“所有酒精都在 78.35 °C 沸腾”忽略了浓度：乙醇水溶液的沸点通常高于纯乙醇，且随组成连续变化。[2] 第二个误解是把沸点当成纯度判据；沸点只能说明相变条件，不能单独证明乙醇含量。第三，认为酒的沸点接近水的 100 °C；实际酒精度越高，初始沸腾温度越接近纯乙醇。最后，压力变化会移动沸点，高海拔处测得的数值不能直接与海平面值比较。

## 与其他温区的关系

351.5 K 比水的常压沸点 373.15 K 低约 21.7 K，比氨的沸点约 239.8 K 高约 112 K；它远低于汞的沸点 629.81 K，也低于钠的沸点约 1,156 K。[1] 它高于水的三相点 273.16 K，也高于室温约 293 K。乙醇沸点因此位于“常温附近即可汽化”的一端，是蒸馏、消毒和燃料挥发性讨论中常用的参照。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
