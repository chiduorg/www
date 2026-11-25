---
id: temperature.nuclear-demagnetization-cooling
title: 核退磁制冷（纳米电子实验）
titleEn: Nuclear refrigeration electron-temperature experiment
dimension: temperature
category: 极低温
summary: >-
  一项纳米电子器件实验结合片上与片外核制冷，报告电子温度约 421±35 μK。这里采用具体实验结果，
  区分电子温度、晶格温度和核自旋温度，不把它称为全实验室的最低温纪录。
quantity:
  value: 0.000421
  unit: K
  measure: 特定核制冷实验的电子温度
  approximate: true
  measureLabel: 特定核制冷实验的电子温度
  uncertainty: 0.000035
  uncertaintyType: 3sigma
displayValue: 约 421 ± 35 μK
related:
  - space.moon
  - mass.helium-nucleus
  - temperature.dilution-refrigerator
  - temperature.bose-einstein
  - temperature.helium-3-superfluid
  - temperature.absolute-zero
reviewStatus: reviewed
sources:
  - title: 500 microkelvin nanoelectronics
    url: 'https://www.nature.com/articles/s41467-020-15201-3'
    publisher: 'Sarsby, Yurttagül and Geresdi, Nature Communications (2020)'
    accessed: '2026-11-06'
  - title: Adiabatic demagnetization
    url: 'https://www.britannica.com/science/adiabatic-demagnetization'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: nuclear-demagnetization-cooling
  icon: "\U0001F9F2"
  relatedLabels: 绝热退磁、核自旋、量子相干、绝对零度、玻色-爱因斯坦凝聚、低温物理、量子计算、氦-3超流相变、量子相变
conditions: >-
  Sarsby 等 2020 年片上/片外核制冷纳米器件实验，预冷 13 mK、12 T，降至 0.1 T 后测得电子温度 421±35
  μK（3σ）；不是晶格或核自旋系统的统一温度，也不是普适最低温纪录。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      Nature Communications 正文给出最低电子温度 421 ± 35 μK、1 小时平均、3σ 置信区间，以及 1.7 μK/h
      回温速率和 700 μK 以下 85 小时维持时间。
    - 正文按五节结构重写；保留 0.000421 K 与原不确定度，补充电子/晶格/自旋温度的区别。
  originalQuantity:
    value: 0.000001
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  421 ± 35 μK 由自校准库仑阻塞温度计的 1 小时平均电导数据拟合得到，±35 μK 为论文的 3σ
  置信区间；测量受模型、电导标定和热接触影响，且只代表电子系统。
visual:
  template: cryo-instrument
  profile: demagnetization
  caption: 核退磁实验冷级
  note: >-
    温度为特定实验的电子温度及不确定度，不代表所有冷级、声子与核自旋均处于同一温度；冷级与布线为示意，非工程重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#9dbde1'
  symbol: Electron cooling
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

核退磁制冷利用核自旋在磁场中的取向无序来吸热。先把核自旋系统在强磁场中预冷，再绝热撤去磁场，自旋无序增加、温度下降，从而冷却与它热接触的电子系统。[1][2] 本条对应一项纳米电子器件实验，而不是整间实验室的空调式制冷。核自旋与电子的热接触通过金属中的相互作用建立，接触好坏直接影响能达到的电子温度。[1][2]

## 怎样测到或为何是有效温度

Sarsby 等人先用稀释制冷把器件预冷到 13 mK、12 T，再以受控速率把磁场降到 0.1 T，使电子温度继续下降。[1] 温度由自校准库仑阻塞温度计测量，并用马尔可夫链模型拟合电导，得到最低电子温度 421 ± 35 μK，取 1 小时平均。论文明确 ±35 μK 是 3σ 置信区间。[1]

## 数值与口径

421 μK 等于 4.21 × 10⁻⁴ K。它描述的是电子温度，不是晶格温度，也不是核自旋温度；三者通过热导耦合，但在低温下可能不相等。[1] 把 421 μK 换算成 0.000421 K，它比 10 mK 低约 24 倍，却比 170 nK 的玻色凝聚高约 2.5 倍。实验还报告约 1.7 μK/h 的回温速率，以及在 700 μK 以下维持约 85 小时的能力，这些都与“最低温度”本身不同。[1]

## 常见误解

第一，把 421 μK 当成整个装置每个部件都达到的温度；样品、布线、声子和核自旋各有自己的温度。第二，把一次实验的最低读数当成世界纪录；纪录会随装置和测量方法变化。第三，把微开尔文读成“没有热运动”；原子仍在运动，只是热激发被大幅压低。温度越低，电子与晶格的热耦合越弱，读数越依赖模型与校准。[1]

## 与其他温区的关系

421 μK 低于稀释制冷的 10 mK，也低于氦-3 的 2.444 mK，但高于玻色—爱因斯坦凝聚的 170 nK。它说明电子、声子和自旋系统可以在同一装置中处于不同温区；比较时必须先问“测的是哪一部分”。[1]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
