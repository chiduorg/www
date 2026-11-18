---
id: time.21cm-absorption
title: 21 厘米吸收信号时代
titleEn: The Era of the 21-cm Absorption Signal
dimension: cosmic-time
category: 复合与黑暗时代
summary: 本条把大爆炸后约 2.2 亿年作为中性氢 21 厘米吸收信号出现的参考锚点，不是对某次观测事件的直接计时。
quantity:
  value: 6942672000000000
  unit: s
  measure: time-after-big-bang-derived-reference
  measureLabel: 自大爆炸起的推算参考时间
  approximate: true
displayValue: 大爆炸后约 2.2 亿年（参考锚点）
related:
  - time.dark-ages
  - time.cosmic-dawn
  - time.first-stars
reviewStatus: reviewed
sources:
  - title: 'An absorption profile centred at 78 megahertz in the sky-averaged spectrum'
    url: 'https://www.nature.com/articles/nature25792'
    publisher: Nature / EDGES Collaboration
    accessed: '2026-11-07'
  - title: 'The Anomalous 21-cm Absorption at High Redshifts'
    url: 'https://arxiv.org/html/2103.04241v1'
    publisher: 'Fulvio Melia / The University of Arizona'
    accessed: '2026-11-07'
chronology:
  status: reference
  plot: true
conditions:
  timeBasis: time.big-bang
  secondsPerYear: 31557600
  yearsAfterBigBang: 220000000
  conversion: yearsAfterBigBang × secondsPerYear
  note: 取大爆炸后约 2.2 亿年的参考锚点，对应红移约 17 的 21 厘米吸收特征；秒数只用于排序。
uncertainty: EDGES 报告的吸收中心在 78 兆赫附近，对应红移约 17.2，红移范围约 15–20；红移到宇宙年龄的换算依赖宇宙学模型，不同参数会给出不同秒数，本条取 2.2 亿年仅作参考锚点。该探测本身仍存在争议，后续观测尚未一致确认。
review:
  method: source-check
  date: '2026-11-08'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连均可访问，写作阶段已用 WebFetch 逐条核对数值。'
    - '2026-11-08 校正：原数值按“距今”换算（4.28457328×10¹⁷ s），与“大爆炸后 2.2 亿年”不符；改为自大爆炸起 2.2 亿年，即 6.942672×10¹⁵ s。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: radiation-front
  scene: time.object
  caption: 中性氢 21 厘米吸收 · 红移约 17 参照
  note: 示意，非按比例，非观测重建。
  color: '#c49bc1'
  variant: radiation
mode: 时点
tags:
  - 复合与黑暗时代
  - 时间
  - 宇宙学
---
## 它是什么

21 厘米吸收信号来自中性氢原子的自旋翻转跃迁。当气体自旋温度低于宇宙微波背景温度时，氢会吸收背景光子，在射电频谱上留下一个凹陷。[1][2] 本条把“大爆炸后约 2.2 亿年”作为这一吸收特征出现的参考锚点，对应红移约 17 的宇宙黎明阶段，而不是某台望远镜记录到信号的时刻。

## 怎样知道

EDGES 合作组在天空平均频谱中报告了一个中心约 78 兆赫的扁平吸收剖面，并把它解释为宇宙黎明时期中性氢的吸收。[1] 后续评述指出，该特征的平台中心约 76–78 兆赫，对应红移 17.2，信号跨越红移约 15–20，幅度约 500 毫开尔文。[2] 这些数值是射电测量与模型解释的结合，不是直接拍到的气体照片。

## 数值与口径

本条取 4.28457328×10¹⁷ 秒，即回溯 2.2 亿年，按每年 31,557,600 秒从当前宇宙年龄中扣除。EDGES 给的是频率与红移，年龄要经宇宙学模型换算；红移 17.2 在不同模型下会得到不同的“亿年”读数。[1][2] 因此表中秒数只用于排序，不能反过来当作对红移的独立测量。

## 常见误解

不要把 21 厘米吸收当成“看见了第一颗恒星”。它探测的是大量中性氢的整体吸收，恒星只是提供背景演化的条件之一。[1][2] 另一个误解是认为该信号已经被普遍确认；EDGES 的结果仍面对前景建模与系统误差的争议，后续实验尚未给出一致结论。还有人把红移 17 直接等同于 2.2 亿年，忽略了换算对宇宙学参数的依赖。

## 与其他尺度的关系

这个时代位于黑暗时代之后、宇宙黎明之中，早于再电离基本完成，也早于 3.5 亿年气体加热变得普遍的阶段。[2] 2.2 亿年约为 4 亿年第一批星系锚点的一半多一点，说明吸收信号记录的是恒星与星系尚未充分照亮宇宙的较早时刻。它与第一代恒星的出现窗口相接，却不等同于恒星形成本身。
