---
id: time.big-bang
title: 宇宙大爆炸
titleEn: The Big Bang
dimension: cosmic-time
category: 太初宇宙
summary: 热大爆炸模型描述宇宙曾经更热、更密，并随膨胀冷却的历史。时间轴的零点是计时约定；微波背景、轻元素和星系观测支持这段历史，但没有拍下“零秒”。
quantity:
  value: 0
  unit: s
  measure: time-after-big-bang
  approximate: true
  measureLabel: 时间轴原点（约定）
displayValue: t = 0
related:
  - time.recombination
  - time.present
  - space.observable-universe
  - time.inflation
  - time.nucleosynthesis
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
  - title: 'Big-Bang Cosmology, 2025 update, §22.1'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: 'Big Bang Nucleosynthesis, 2025 update, §24.1'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: Planck and the cosmic microwave background
    url: >-
      https://sci.esa.int/web/planck/Planck_and_the_cosmic_microwave_background
    publisher: ESA / Planck
    accessed: '2026-11-06'
  - title: "cosmic microwave background"
    url: "https://www.britannica.com/science/cosmic-microwave-background"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
legacy:
  id: big-bang
  icon: "\U0001F4A5"
  relatedLabels: 宇宙膨胀、哈勃定律、奇点、广义相对论、宇宙微波背景辐射、普朗克温度、大统一理论、暗能量
visual:
  template: quantum-field
  profile: big-bang
  scene: time.big-bang
  backdrop: primordial
  caption: 宇宙诞生 · 早期膨胀示意
  note: 早期宇宙的艺术示意，不表示某个空间中的爆炸中心；画面为示意，非按比例，非观测重建。
review:
  method: source-check
  date: '2026-11-06'
  original:
    title: 宇宙大爆炸
    quantity:
      value: 0
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 0
  notes:
    - 移除无限密度奇点和“已知时空诞生”的确定性说法。CERN 与 PDG 均区分可描述的膨胀后历史与最初条件；零点是展示约定，非直接测量。
    - >-
      本轮按五节结构重写，并补 visual 的 template 键；NASA 页面无法打开，改用 CERN、PDG 与 ESA Planck
      的可读页面。
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.present
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: lookback time = presentSeconds - t；t=0 为外推约定起点
  precision: 约定坐标，不是测年精度
  note: 零点用于比较后续事件，不代表已观测到宇宙最初瞬间。
uncertainty: >-
  t=0
  是模型外推与展示约定，不是仪器测得的时刻；宇宙年龄约138亿年来自膨胀史拟合，不同数据组合会给出略有差异的数值，早期阶段的测年精度更不能由这个零点的位数推断。
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

热大爆炸模型描述宇宙曾经更热、更密，并随膨胀冷却的历史：从粒子等离子体到原子核、原子，再到恒星与星系。[1][2] “大爆炸”不是在一个已有空间里发生的爆炸，而是空间本身膨胀、物质与辐射密度下降的整体演化。[1][2] 本网站把这一演化的外推起点设为时间零点，作为比较后续事件的约定，而不是一个已经拍到的物理瞬间。[1][2]

## 怎样知道或为何是推断

哈勃发现的星系退行是重要线索，但单靠它不足以建立热大爆炸；原初轻元素丰度和宇宙微波背景提供了更热、更密过去的独立证据。[1][2] CERN 与 PDG 都强调，正是微波背景的发现让热大爆炸成为主流图景，而核合成计算又独立检验了早期条件。[1][2][3] ESA 的 Planck 资料说明，CMB 是复合时期留下的辐射，温度涨落记录当时物质与辐射的分布。[4] 这些观测支持“更热更密”的历史，却没有拍下零秒本身。[1][3]

## 时间坐标与口径

本条目 quantity 取 0 秒，口径是宇宙历史的约定起点，不是仪器测得的瞬间。[1][3] 常用宇宙年龄约 138 亿年，是把膨胀史向过去外推的结果；不同数据与模型会给出略有差异的年龄，因此时间零点不代表每个早期阶段的测年精度。[1][2] 把“t=0”写成已观测事件，会混淆坐标约定与物理证据；把年龄的位数当成早期事件的精度也是同类错误。[1][3]

## 常见误解

误解之一是把大爆炸想成空间中的一次爆炸，并问“爆炸中心在哪里”。均匀膨胀没有特殊中心，任何星系都会看到其他星系远离。[1][2] 另一个误解是认为大爆炸模型已经解释了最初条件。PDG 与 CERN 都区分可描述的膨胀后历史与尚未知道的极早期物理；模型能讲冷却史，不等于能讲“为什么存在”。[1][2][3]

## 与其他阶段的关系

时间零点之后依次可讨论暴胀、再加热、电弱、夸克—强子、轻子与核合成等阶段，但并非每个阶段都有同等证据强度。[2][3] 微波背景连接早期热历史与后来的结构生长；轻元素丰度则把最初数分钟与今天的观测连起来。[3][4] 阅读这些阶段时，应把“坐标越早”与“证据越直接”分开，也不要把相邻的模型阶段当成同一次事件。[1][3]


## 换一个尺度看它

138 亿年约是地球年龄的 3 倍，也是人类文明史的约 100 万倍。若把宇宙史压成一年，地球约在 9 月出现，恐龙在 12 月底灭绝，人类文字只有最后几分钟。这个换算不改变物理，却能把“深时”从抽象数字变成可感知的顺序。

## 证据强度不是同一档

CMB、轻元素丰度和星系退行都支持热大爆炸，但它们的证据类型不同：CMB 是直接遗留的辐射，轻元素丰度是核合成计算与观测的比对，星系退行是膨胀史的运动学证据。[1][2][3][4] 越往早期，直接观测越少，模型外推越多。把“有证据支持”与“已经直接看到”分开，是读早期宇宙时间线的关键。

## 五轴对照

在时间轴，t=0 是约定起点；在温度轴，早期宇宙对应 CMB 与更早的高温阶段；在空间轴，可观测宇宙的边界随膨胀变化；在质量轴，原初核合成决定了氢、氦与少量锂的丰度。四条轴都在讲同一段历史，但各自量的不是同一种东西。[1][3][4]

## 延伸核对

补充的来源 [5]（Encyclopaedia Britannica） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
