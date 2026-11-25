---
id: mass.asteroid-eros
title: 爱神星：6.687×10¹⁵ kg，NEAR 用轨道称出的石头
summary: >-
  爱神星（433 Eros）总质量 6.687×10¹⁵ kg，由 NEAR Shoemaker
  的无线电跟踪与轨道拟合测定，精度优于百分之一。它是第一颗被探测器环绕并“称重”的近地小行星。
dimension: mass
category: 行星与小天体
displayValue: 6.687×10¹⁵ kg
quantity:
  value: 6687000000000000
  unit: kg
  measure: 433 Eros 总质量，由 NEAR Shoemaker 环绕段的无线电测距测速与引力场拟合得到，相对不确定度优于 1%
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft-tracking
  uncertainty:
    value: 0.005
    unit: relative
related:
  - mass.asteroid-itokawa
  - mass.asteroid-bennu
  - mass.asteroid-toutatis
  - space.asteroid-belt
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
  - title: NEAR Shoemaker at asteroid Eros
    url: 'https://www.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
  - title: JPL Small-Body Database
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: NASA Solar System Exploration
    url: 'https://solarsystem.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
tags:
  - 质量
  - 小行星
  - 爱神星
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 433 Eros 总质量，由 NEAR Shoemaker 环绕段的无线电测距测速与引力场拟合得到，相对不确定度优于 1%
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.5%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B10 小天体 · 6.687×10¹⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B10
  bandLabel: 小天体
  log10: 15.825
  position: 60.03
  color: '#b8a58a'
  scaleMin: -40
  scaleMax: 53
titleEn: Eros
---
## 这个读数是什么

爱神星（433 Eros）的总质量是 6.687×10¹⁵ kg，约合 6.7 万亿吨。[1] 它是近地小行星中第一颗被探测器环绕并长期跟踪的天体，因此质量测定精度远高于只靠雷达成像的对象。这个数是总质量，包含整颗不规则石质天体的全部物质，不涉及任何“按体积乘密度”的估算。

## 口径与不确定度

本条采用总质量口径，相对不确定度优于百分之一，因此定为 A 级。[2] 爱神星形状狭长，长约 34 公里，若用体积乘假设密度，误差会随密度假设摆动；NEAR 的引力测量避开了这个问题。正文提到的平均密度约 2670 kg/m³ 是由质量除以形状模型体积反推的，属于派生量，不参与质量口径的定义。

## 怎么测出来的

NEAR Shoemaker 于 2000 年进入环绕轨道，此后一年多里无线电测距、测速记录了探测器在引力场中的加速度；把太阳光压、反照率与热辐射等非引力项扣除后，拟合出引力参数 GM，再换算为质量。[2] 2001 年它降落到表面，着陆段的低空跟踪进一步收紧了约束。方法是航天器跟踪加轨道拟合，是真正意义上的“用轨道称重”。[3]

## 量级位置

6.687×10¹⁵ kg 位于 B10 带的中上段。[3] 它约为 67P 的六百七十倍，约为糸川的一百九十倍，比图塔蒂斯重约一百三十倍；与地球 5.97×10²⁴ kg 相比仍小九个数量级。爱神星的质量已经接近“靠自身引力勉强维持碎石堆形状”的下限，但还不足以把自己压成球体。

## 怎么继续走

想看它的形状与任务档案，去空间轴的 space.asteroid-belt 一带；想比较质量测定的不同方法，去 mass.asteroid-itokawa（隼鸟号）与 mass.asteroid-bennu（OSIRIS-REx）；想看只有两成精度的雷达值，去 mass.asteroid-toutatis。
