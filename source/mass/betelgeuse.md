---
id: mass.betelgeuse
title: 参宿四：3.28×10³¹ kg，只能给量级的红超巨星
summary: >-
  参宿四质量约 3.28×10³¹ kg，大致在 16.5 到 19 太阳质量之间。它没有可测轨道的伴星，数值完全依赖演化模型，只能给量级，相对不确定度约
  30%。
dimension: mass
category: 恒星
displayValue: 3.28×10³¹ kg
quantity:
  value: 3.28e+31
  unit: kg
  measure: 恒星质量（演化模型反推，约 16.5–19 太阳质量）；由光度、有效温度与表面重力拟合演化轨迹得到，只能给量级，相对不确定度约 30%
  approximate: true
grade: C
mass:
  type: stellar
  includesDarkMatter: false
  method: evolutionary models
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.eta-carinae
  - mass.cygnus-x1
  - mass.sirius-a
  - space.betelgeuse
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
  - title: IAU 2015 Resolution B3
    url: 'https://www.iau.org/'
    publisher: International Astronomical Union
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: SIMBAD Astronomical Database
    url: 'https://simbad.cds.unistra.fr/'
    publisher: CDS
    accessed: '2026-11-09'
tags:
  - 质量
  - 恒星
  - 红超巨星
  - 参宿四
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 恒星质量（演化模型反推，约 16.5–19 太阳质量）；由光度、有效温度与表面重力拟合演化轨迹得到，只能给量级，相对不确定度约 30%
  precision: C 级；近似值/均值。
  massType: 恒星质量
  includesDarkMatter: 否
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 3.28×10³¹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 31.516
  position: 76.9
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

参宿四是猎户座 α，一颗距离约 550 光年的红超巨星，直径约为太阳的七百倍。[1] 它的质量约 3.28×10³¹ kg，按模型大致落在 16.5 到 19 太阳质量之间。它是夜空中最容易用肉眼辨认的恒星之一，也已经进入演化晚期。

## 口径与不确定度

口径为恒星质量，包含这颗恒星的全部物质，不包含暗物质。[2] 由于没有可测轨道的伴星，质量只能由演化模型结合光度、有效温度与表面重力反推，相对不确定度约 30%，定为 C 级。对这个对象只能给量级，不应把 16.5 或 19 当作精确读数。若距离或温度改动几个百分点，质量就会移动好几个太阳质量。

## 怎么测出来的

模型法是唯一可行的路径：先由干涉测量与光谱定出角直径、有效温度与光度，再把它们放到恒星演化轨迹上，寻找匹配的初始质量与年龄。[2] 表面重力由谱线形状估计，是第三个约束，但它本身误差不小。[3] 三条约束都不够锐利，结果自然只能给量级。不同研究给出的区间常有重叠，中心值却能差出几个太阳质量。

## 量级位置

3.28×10³¹ kg 位于 B13 带的上段，约为太阳的十七倍，属于大质量恒星。[1] 这类恒星寿命只有千万年量级，最终会以超新星或直接坍缩结束，留下中子星或黑洞。它的质量区间正处在两种结局的分界附近。这类恒星在星系化学演化中负责制造并抛撒氧、硅等元素。

## 怎么继续走

想看更极端的质量，去 mass.eta-carinae；想看它可能留下的致密天体，去 mass.cygnus-x1；想看天狼星作为中等质量恒星对照，去 mass.sirius-a；想看它在空间轴上的图景，去 space.betelgeuse。大质量恒星的质量无法“称”，只能“推”，这是本批 C 级条目的共同点。
