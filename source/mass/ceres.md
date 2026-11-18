---
id: mass.ceres
title: 谷神星：9.383×10²⁰ kg，主带之王也是一颗矮行星
summary: 谷神星是小行星带质量最大的天体，也是唯一位于主带的矮行星，总质量约 9.383×10²⁰ kg。Dawn 探测器环绕跟踪给出的相对不确定度约 1%。
dimension: mass
category: 矮行星
displayValue: 9.383×10²⁰ kg
quantity:
  value: 938300000000000000000
  unit: kg
  measure: 谷神星总质量（含岩石、冰与含水矿物，不含暗物质）；由 Dawn 探测器轨道跟踪与引力场拟合得出，相对不确定度约 1%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft tracking and gravity-field fitting
  uncertainty:
    value: 0.01
    unit: relative
related:
  - mass.vesta
  - mass.psyche
  - space.ceres
  - mass.earth
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
  - title: Planetary Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/'
    publisher: NASA Space Science Data Coordinated Archive
    accessed: '2026-11-09'
  - title: Solar System Dynamics
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
tags:
  - 质量
  - 矮行星
  - 谷神星
  - 主带
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 谷神星总质量（含岩石、冰与含水矿物，不含暗物质）；由 Dawn 探测器轨道跟踪与引力场拟合得出，相对不确定度约 1%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 1%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 9.383×10²⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 20.972
  position: 65.56
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

谷神星是小行星带里质量最大的天体，也是唯一位于主带的矮行星。本条记录它的总质量约 9.383×10²⁰ kg。[1] 口径为天体总质量，包含岩石、冰与含水矿物，不包含暗物质。它约占整个主带总质量的三分之一。

## 口径与不确定度

这里用的是总质量口径，包含表面与内部的冰、盐水和孔隙。Dawn 探测器给出的相对不确定度约为 1%，定为 A 级，正文保留四位有效数字。[2] 谷神星的平均密度约为 2.16 g/cm³，明显低于灶神星，说明它含有可观的水冰与含水矿物；但密度是由质量与体积共同推出的，不能反过来当作质量读数。

## 怎么测出来的

Dawn 在 2015 至 2018 年环绕谷神星，通过无线电跟踪测量探测器的多普勒频移，再由轨道摄动与引力场系数 J2 反演质量。[2] 同一条跟踪数据还能约束它的自转与内部质量分布。[3] 这类测量对航天器轨道的几何形状很敏感，因此需要长时间、多圈次的跟踪；这些数据同时约束了谷神星的自转轴朝向与低阶引力场，使质量与形状模型能够相互印证。

## 量级位置

9.383×10²⁰ kg 位于 B11 带下段，约为月球的八十分之一、地球的六千四百分之一。[1] 它比灶神星重约 3.6 倍，却仍远小于任何行星。小行星带的总质量加起来也只有月球质量的百分之几，所以谷神星虽是“主带之王”，在这个阶梯上仍属小字辈。

## 怎么继续走

想看主带第二大的灶神星，去 mass.vesta；想看金属小行星，去 mass.psyche；想看它的空间图景与表面特征，去 space.ceres；想看更大的岩石行星，去 mass.earth。
