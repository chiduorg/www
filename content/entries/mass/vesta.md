---
id: mass.vesta
title: 灶神星：2.590×10²⁰ kg，Dawn 近距离测出的主带第二
summary: >-
  灶神星是主带第二大的小行星，总质量约 2.590×10²⁰ kg。Dawn 探测器环绕时的无线电跟踪把相对不确定度压到约
  1%，是少数由航天器近距离测定质量的小行星。
dimension: mass
category: 小行星
displayValue: 2.590×10²⁰ kg
quantity:
  value: 259000000000000000000
  unit: kg
  measure: 灶神星总质量（含岩石、金属与风化层，不含暗物质）；由 Dawn 探测器轨道跟踪与引力场拟合得出，相对不确定度约 1%
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
  - mass.psyche
  - mass.ceres
  - space.ceres
  - elements.si
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
  - 小行星
  - 灶神星
  - 主带
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 灶神星总质量（含岩石、金属与风化层，不含暗物质）；由 Dawn 探测器轨道跟踪与引力场拟合得出，相对不确定度约 1%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 1%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B11 小行星与类地行星 · 2.590×10²⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B11
  bandLabel: 小行星与类地行星
  log10: 20.413
  position: 64.96
  color: '#8fc9d8'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

灶神星是主带中质量第二大的小行星，本条记录它的总质量约 2.590×10²⁰ kg。[1] 这个数是天体整体的总质量，包含岩石、金属与表面风化层，不包含暗物质。它比灵神星重约十一倍，却仍只有月球的约三千五百分之一。

## 口径与不确定度

口径为总质量，含内部所有物质与孔隙。Dawn 探测器在轨跟踪给出的相对不确定度约为 1%，因此本条定为 A 级，正文保留四位有效数字。[2] 质量与直径、体积是彼此独立的量：由形状模型得到的体积只能配合质量算平均密度，不能当成质量的替代测量。灶神星的平均密度约为 3.4 g/cm³，接近未分异或仅部分分异的岩石天体。

## 怎么测出来的

Dawn 在 2011 至 2012 年环绕灶神星，地面测控通过多普勒跟踪测量探测器速度的微小变化，再结合引力场系数 J2 与轨道摄动反演出质量。[2] 这种方法本质上测的是引力场，不是“称重”。航天器越靠近、跟踪弧段越长，质量与低阶引力场系数的相关性就越容易解开。JPL 的小天体轨道数据库也给出相容的引力参数，可作交叉核对。[3]

## 量级位置

2.590×10²⁰ kg 位于 B11 带下段，比谷神星轻约 3.6 倍，比月球轻约 2.8×10² 倍。[1] 它约占整个小行星带总质量的百分之九，是主带里少数已由航天器近距离测定质量的天体之一。

## 怎么继续走

想看金属性更强、精度更松的近邻，去 mass.psyche；想看主带最大天体与矮行星身份，去 mass.ceres 与 space.ceres；想看硅酸盐骨架的元素背景，从 elements.si 进入元素轴。
