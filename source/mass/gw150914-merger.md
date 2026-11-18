---
id: mass.gw150914-merger
title: GW150914 并合：1.23×10³² kg，第一次被听见的黑洞并合
summary: >-
  GW150914 并合后的黑洞质量约 1.23×10³² kg，即 62 太阳质量。数值由引力波波形反演得到，相对不确定度约
  4%，是人类首次直接探测到的双黑洞并合产物。
dimension: mass
category: 黑洞
displayValue: 1.23×10³² kg
quantity:
  value: 1.23e+32
  unit: kg
  measure: 并合后黑洞质量（约 62 太阳质量）；由 LIGO 探测到的引力波波形做贝叶斯反演得出，相对不确定度约 4%
  approximate: false
grade: A
mass:
  type: dynamical
  includesDarkMatter: false
  method: gravitational-wave waveform inference
  uncertainty:
    value: 0.04
    unit: relative
related:
  - mass.gw190521-merger
  - mass.cygnus-x1
  - mass.psr-j0348-0432
  - space.black-hole-event-horizon
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
  - 双黑洞并合
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 并合后黑洞质量（约 62 太阳质量）；由 LIGO 探测到的引力波波形做贝叶斯反演得出，相对不确定度约 4%
  precision: A 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 4%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 1.23×10³² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 32.09
  position: 77.52
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

GW150914 是 2015 年 9 月 14 日由 LIGO 两台探测器同时记录到的引力波事件，来自约 13 亿光年外两个黑洞的并合。[1] 并合后的黑洞质量约 1.23×10³² kg，即 62 太阳质量，其中约 3 太阳质量的能量以引力波形式辐射出去。这是人类第一次直接探测到引力波。整个事件持续约 0.2 秒，峰值应变约 1×10⁻²¹。

## 口径与不确定度

口径为并合后黑洞质量，是引力波波形反演出的时空参数，不包含暗物质。[2] 它描述并合产物的引力场，而不是“把物质放上天平称重”。相对不确定度约 4%，定为 A 级，误差主要来自波形模型与探测器校准。这 4% 在引力波天文学里已属于高精度，探测器校准的不确定度约占一半。

## 怎么测出来的

两个黑洞旋近、并合与铃宕三个阶段辐射的波形，频率与振幅随时间的变化编码了质量、自旋与距离。[2] 把探测到的应变信号与大量数值相对论波形模板做贝叶斯匹配，就能反演出各参数及其后验分布。[3] 多个独立模板族给出一致结果，是这次测量可信的关键。整个并合过程在不到一秒内完成。

## 量级位置

1.23×10³² kg 位于 B13 带顶端之上，是恒星级黑洞与中等质量黑洞之间的过渡质量。[1] 并合前的两个黑洞分别约 36 与 29 太阳质量，这说明数十倍太阳质量的黑洞确实能通过并合继续长大。这也是第一次用引力波证实并合能造出更重的黑洞。

## 怎么继续走

想看更重的并合产物，去 mass.gw190521-merger；想看单个恒星级黑洞，去 mass.cygnus-x1；想看中子星的质量上限，去 mass.psr-j0348-0432；想看黑洞的时空图景，去 space.black-hole-event-horizon。引力波条目的质量都来自波形反演，与其他条目方法不同，读时要注意口径，但仍可与光学测量互相印证。
