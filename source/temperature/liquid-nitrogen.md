---
id: temperature.liquid-nitrogen
title: 液氮温度
titleEn: Liquid nitrogen
dimension: temperature
category: 低温
summary: 氮在正常沸点附近约为 77.34 K，折合约 −195.81 °C。这里的温度对应给定压力下的沸腾状态，不是所有液氮都具有的唯一温度。
quantity:
  value: 77.34
  unit: K
  measure: nitrogen-normal-boiling-temperature
  approximate: true
  measureLabel: 氮常压沸点参考
displayValue: 约 77.34 K（−195.81 °C）
related:
  - temperature.liquid-oxygen
  - temperature.absolute-zero
  - temperature.dilution-refrigerator
  - temperature.liquid-argon
  - space.moon
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 'Nitrogen: Phase change data'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=4'
    publisher: 'NIST Chemistry WebBook, SRD 69'
    accessed: '2026-11-04'
  - title: 'Kelvin: Introduction'
    url: 'https://www.nist.gov/si-redefinition/kelvin-introduction'
    publisher: NIST
    accessed: '2026-11-04'
  - title: 'Nitrogen Asphyxiation — report appendix: nitrogen material safety data'
    url: 'https://www.csb.gov/assets/1/20/final_union_carbide_report.pdf?13768='
    publisher: >-
      U.S. Chemical Safety and Hazard Investigation Board, report 98-05-I-LA,
      appended nitrogen data
    accessed: '2026-11-04'
legacy:
  id: liquid-nitrogen
  icon: "\U0001F9CA"
  relatedLabels: 高温超导、钇钡铜氧超导转变、低温物理、迈斯纳效应、超导磁体、液氦温度、铌超导转变、冷冻保存、MRI、氮循环
visual:
  scene: temperature.liquid-nitrogen
  backdrop: deep-cold
  caption: 液氮 · 杜瓦容器与冷凝雾
  note: 容器、液面和冷凝雾为示意；雾不是氮气本身的颜色。
conditions: 约一个标准大气压下氮的正常沸点参考；液氮本身可以处在其他温压条件。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 删除“液氮冷却磁体广泛用于 MRI”等未获本次来源支持的泛化断言；补压力口径。
  originalQuantity:
    value: 77
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 熟悉的气体也能成为液体

液氮是氮的液态，而不是另一种元素。NIST 的氮相变表列出正常沸点 77.34 K，本页据此给它定位。减去 273.15，可得到约 −195.81°C；负摄氏数并不表示负的热力学温度，只表示低于摄氏温标零点。[1][2]

## 为什么沸点要带压力条件

77.34 K 对应正常沸点口径，不能理解为任何容器内的液氮都恰好具有这个温度。描述液态样品，需要同时说明压力和它是否处于气液平衡。把液面、气泡或白雾看成温度计，都省略了这些必要条件。[1]

## 数据表怎样组织实验知识

NIST 不只列一个数字，还给出文献来源，并把沸点、熔化点、三相点等分别排列。它甚至保留了不同研究的数值与部分不确定度说明。这提示我们：精确比较时，应使用同一物理量和相近条件，不能把三相点误当成常压沸点。[1]

## 容器外的白雾是什么

冷液体附近的白色云雾容易让人以为氮气本身是白色。美国化学安全委员会报告所附氮资料说明，低温释放会使周围空气中的水分凝结，形成冰雾或水雾。可见云团因此包含周围环境的反应，而不只是样品物态的直接照片。[3]

例如比较液氮与液氧，值得比较的是各自的正常沸点；若一边取三相点，另一边取沸点，数字虽然都以 K 表示，物理问题却已经换了。单位相同只是比较的起点，物态和压力才使坐标真正可解释。[1]

## 在低温尺度上读这个位置

液氮把日常室温与更低温研究联系起来，但 77 K 仍明显高于 0 K。这里展示的是一个有条件的相变参考，既不代表冷却技术的终点，也不代表杜瓦容器外壁、内部液体和周围雾气具有同一温度。模型的颜色与雾量均不承担测量功能。[1][2]
