---
id: mass.gw190521-merger
title: GW190521 并合：2.82×10³² kg，跨进中等质量门槛的黑洞
summary: >-
  GW190521 并合后的黑洞质量约 2.82×10³² kg，即 142 太阳质量。数值由引力波波形反演得到，相对不确定度约
  10%，是首个明确落入中等质量范围的并合产物。
dimension: mass
category: 恒星与致密天体
displayValue: 2.82×10³² kg
quantity:
  value: 2.82e+32
  unit: kg
  measure: 并合后黑洞质量（约 142 太阳质量）；由 LIGO 与 Virgo 的引力波波形做贝叶斯反演得出，相对不确定度约 10%
  approximate: false
grade: A
mass:
  type: dynamical
  includesDarkMatter: false
  method: gravitational-wave waveform inference
  uncertainty:
    value: 0.1
    unit: relative
related:
  - mass.gw150914-merger
  - mass.cygnus-x1
  - mass.psr-j0348-0432
  - space.sagittarius-a-star
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      本轮复核：结构、引用编号与量值口径完整；quantity.value 与 displayValue
      数量级一致，bound/zeroMass/approximate、mass.type 与 includesDarkMatter
      逐条核对；太阳、地球、银河、可观测宇宙、总物质、暗物质、哈勃体积、中微子与光子的人工复核一致。
    - >-
      来源可达性：72 个唯一来源中 48 个直接返回 2xx；其余为站点反爬、限流或超时。已修复 PDG 2024 目录页路径与中微子综述 PDF
      两个死链。本轮未逐页重读全文，沿用条目既有 accessed 记录。
    - >-
      reviewed 指结构与来源口径核对，不是外部同行评审；总质量、重子质量、恒星质量与含暗物质口径按 quantity.measure 与 mass
      字段保留。
sources:
  - title: LIGO Scientific Collaboration
    url: 'https://www.ligo.org/'
    publisher: LIGO
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: arXiv
    url: 'https://arxiv.org/'
    publisher: arXiv
    accessed: '2026-11-09'
tags:
  - 质量
  - 黑洞
  - 引力波
  - 中等质量黑洞
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 并合后黑洞质量（约 142 太阳质量）；由 LIGO 与 Virgo 的引力波波形做贝叶斯反演得出，相对不确定度约 10%
  precision: A 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 10%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 2.82×10³² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 32.45
  position: 77.9
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
titleEn: GW190521 merger
---
## 这个读数是什么

GW190521 是 LIGO 与 Virgo 在 2019 年 5 月 21 日探测到的引力波事件，来自约 170 亿光年外两个黑洞的并合。[1] 并合后的黑洞质量约 2.82×10³² kg，即 142 太阳质量，约有 9 太阳质量的能量被引力波带走。它被认为是首个确凿的中等质量黑洞。并合前的两个黑洞分别约 85 与 66 太阳质量，本身就已不同寻常。

## 口径与不确定度

口径为并合后黑洞质量，属于引力波波形反演的时空参数，不包含暗物质。[2] 与所有黑洞质量一样，它衡量的是引力场强度，而不是物质称重。相对不确定度约 10%，定为 A 级；这个事件信噪比不高，波形持续时间短，误差因此比 GW150914 大。这次事件的信噪比约 14，低于 GW150914。

## 怎么测出来的

信号只持续约十分之一秒，频率从约 60 赫兹升到约 100 赫兹，恰好落在探测器最灵敏频段的边缘。[2] 把波形与包含高阶模式与进动的模板库做贝叶斯反演，得到前后质量与自旋的后验分布。[3] 由于前身黑洞之一可能落在对不稳定性质量空隙内，这个结果也引发了对形成通道的讨论。一种解释是它来自星团中的逐级并合。

## 量级位置

2.82×10³² kg 已越过恒星级黑洞的上端，进入中等质量黑洞区间，约为 GW150914 产物的两倍多。[1] 它填补了恒星级黑洞与星系中心超大质量黑洞之间的观测空白。统计上，这类并合可能比恒星级并合更稀有。它在质量坐标上跨越了约三个数量级。

## 怎么继续走

想看较轻的并合产物，去 mass.gw150914-merger；想看单个恒星级黑洞，去 mass.cygnus-x1；想看中子星的质量上限，去 mass.psr-j0348-0432；想看星系中心的超大质量黑洞，去 space.sagittarius-a-star。两条引力波条目并列，能看出信噪比对质量精度的影响，它们的口径都是并合后产物。
