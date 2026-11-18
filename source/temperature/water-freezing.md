---
id: temperature.water-freezing
title: 水的冰点
titleEn: Ice–water equilibrium
dimension: temperature
category: 常温
summary: >-
  标准大气压附近，冰与水的平衡温度约为 273.15 K（0
  °C）。这是带条件的相变参考值；精密测温需要考虑压力、成分和溶解气体，而非把所有水的冻结过程视为完全相同。
quantity:
  value: 273.15
  unit: K
  measure: ice-water-equilibrium-at-standard-atmosphere
  approximate: true
  measureLabel: 常压冰水平衡温度
displayValue: 约 273.15 K（0 °C）
related:
  - temperature.boiling-water
  - temperature.water-triple-point
  - temperature.room-temperature
  - temperature.snow-surface
  - space.human
  - time.present
reviewStatus: reviewed
sources:
  - title: >-
      Thermodynamic Analysis and Experimental Study of the Effect of Atmospheric
      Pressure on the Ice Point
    url: >-
      https://www.nist.gov/publications/thermodynamic-analysis-and-experimental-study-effect-atmospheric-pressure-ice-point
    publisher: 'NIST / Harvey, McLinden and Tew (2013)'
    accessed: '2026-11-04'
  - title: 'NIST Guide to the SI, Chapter 4 — Degree Celsius, §4.2.1.1'
    url: >-
      https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes
    publisher: NIST Special Publication 811
    accessed: '2026-11-04'
legacy:
  id: water-freezing
  icon: "\U0001F9CA"
  relatedLabels: 相变、氢键、热力学、水的沸点、室温、生命、结晶学、反照率、摄氏温标、人体体温、液氮温度
visual:
  scene: temperature.water-freezing
  backdrop: frost
  caption: 水的冰点 · 冰与水的交界
  note: 冰、水与温度读数为条目示意，实际相变取决于条件。
conditions: 与空气接触、标准大气压附近的冰水平衡参考；成分、溶解气体、气压和测量实现影响精密结果。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 纠正旧记录整数 273 K 与 0 °C 的混用；使用近似值而非宣称精确恒定。
    - 2026-11-04 内容深化：补充概念、来源所支持的机制、比较口径与常见误解；保留原quantity、轴坐标及图景配置。
  originalQuantity:
    value: 273
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
## 冰点描述的是一种平衡条件

日常把0 °C称作水的冰点，是一个很有用的近似参照。这里讨论的是冰、液态水与空气达到相应平衡时的温度，不是任何一杯水在任何环境中都会以同样速度、同一读数开始结冰。NIST的研究把压力和水中溶解的大气气体一并纳入了分析。[1]

## 为什么写“约273.15 K”

所引研究在标准大气压及其模型条件下，给出的冰点约为273.15002 K。本页为日常尺度取约273.15 K，并不使用论文中的更多小数位来暗示容器和温度计也有同样精度。研究还比较了不同海拔和气压下的测量，说明精密结果必须连同环境条件来读。[1]

## 温标换算的准确，与相变参考的近似

摄氏温度与开尔文温度的数值相差273.15，这是温标换算中的定义关系；温度升高1 °C与升高1 K表示相同的温差。所以0 °C对应273.15 K，而不是整数273 K。换算关系的准确，并不会把真实样品在给定条件下的相变温度也变成不带条件的自然常数。[2]

## 冰点与三相点不能混用

冰点实验中与空气接触的冰水体系，与用于精密测温的水三相点体系有不同的压力和气体条件。NIST论文正是通过二者的温度差来检验模型；论文讨论的压力效应和溶解空气效应都要计入。因此不能只因为两个数字很接近，就把0 °C、三相点和任意水样的冻结读数视为同一件事。[1]

## 怎样理解这里的画面

冰块、水面和容器表示固态与液态的联系，并没有计算结晶速率或容器内每一点的温度场。温度尺上的参考点回答“采用哪种相变条件”，动画快慢不回答“一杯水需要多久才能冻住”。继续阅读水的沸点，可以比较同一种物质在另一组压力与物态条件下的参考温度。[1]
