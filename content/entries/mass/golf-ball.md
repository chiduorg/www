---
id: mass.golf-ball
title: 高尔夫球：4.593×10⁻² kg，规则上限而不是平均值
summary: >-
  比赛用高尔夫球的质量不得超过 45.93 克，即 4.593×10⁻² kg，直径不得小于 42.67 毫米。这是 R&A 与 USGA
  共同维护的合规门槛，不是某一颗球的实测值；合规球的质量散布通常不到一克。
dimension: mass
category: 日常物品
displayValue: 4.593×10⁻² kg
quantity:
  value: 0.04593
  unit: kg
  measure: R&A 与 USGA《高尔夫规则》规定的比赛用球质量上限 45.93 g；合规上限，非单球实测均值
  approximate: false
grade: A
related:
  - mass.newborn
  - mass.adult-human
  - mass.proton
  - mass.water-molecule
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
  - title: R&A
    url: 'https://www.randa.org/'
    publisher: The R&A
    accessed: '2026-11-09'
  - title: USGA
    url: 'https://www.usga.org/'
    publisher: United States Golf Association
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
tags:
  - 质量
  - 高尔夫球
  - 规则上限
  - 日常物品
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: R&A 与 USGA《高尔夫规则》规定的比赛用球质量上限 45.93 g；合规上限，非单球实测均值
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 4.593×10⁻² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: -1.338
  position: 41.57
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

高尔夫球是少数由规则直接规定质量的日常物品。R&A 与 USGA 共同维护的《高尔夫规则》规定，比赛用球的质量不得超过 45.93 克，也就是 4.593×10⁻² kg，同时直径不得小于 42.67 毫米。[1] 这两个数字是合规的上限与下限，不是某一颗球的实际称量值。把规则门槛当作“一颗球的质量”，是这条读数最容易被误读的地方。

## 口径与不确定度

45.93 克是“不得超过”，而不是“等于”。制造商为了在规则内获得稳定的飞行性能，通常把球做在贴近上限的位置，量产单球的质量散布很小，一般不到一克。[2] 这里没有可以写成“精确到小数点后两位”的实测均值，所以 value 采用规则上限本身，不确定度应理解为合规球的质量区间。球体吸水、涂层磨损与温度变化都会让单球质量轻微漂移。

## 怎么测出来的

规则符合性测试用校准过的电子天平逐球称量，测试前要让球在规定的温湿度下平衡，同一批球还要做直径、初速度与对称性测试。实验室里也会用排水法测体积，再结合质量算平均密度，用来判断球是实心结构还是多层缠绕结构。[3] 需要注意的是，质量与直径不能互推：直径相同的两颗球，内部结构不同，质量可以差出几克。

## 量级位置

4.593×10⁻² kg 位于 B7 带的下缘，是“几十克”与“百克”之间的过渡点。它比一个水分子重约 10²⁴ 倍，比新生儿 3.3 kg 轻约七十二倍，比成人 70 kg 轻约一千五百倍。[1] 高尔夫球与鸡蛋、柠檬同处几十克的量级，但它的质量是被规则钉住的，这一点在日常物品里并不常见。

## 怎么继续走

想看同一个十进位里由生物学给出的均值，去 mass.newborn；想看质量轴再往上的人体整体读数，去 mass.adult-human；想看这条轴向下二十多个十进位的那一端，去 mass.proton。三条连起来，就是质量阶梯从粒子到人体的第一段。
