---
id: mass.sand-grain
title: 0.5 毫米石英砂粒：1.7×10⁻⁷ kg，几何与密度的估算
summary: >-
  取直径 0.5 mm 的石英球体，半径 0.25 mm、密度 2650 kg/m³，体积约 6.5×10⁻¹¹ m³，质量约 1.7×10⁻⁷
  kg。真实砂粒有棱角、矿物混杂，这个读数只能算估算。
dimension: mass
category: 矿物颗粒
displayValue: 1.7×10⁻⁷ kg
quantity:
  value: 1.7e-7
  unit: kg
  measure: 按直径 0.5 mm 的石英球体估算：半径 0.25 mm、密度 2650 kg/m³，几何体积乘密度；真实颗粒形状与矿物差异约 ±30%
  approximate: true
grade: B
related:
  - mass.planck-mass
  - mass.rain-drop
  - mass.tea-leaf
  - elements.o
  - space.earth
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
  - title: ISO Standards
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags:
  - 质量
  - 砂粒
  - 石英
  - 估算
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 按直径 0.5 mm 的石英球体估算：半径 0.25 mm、密度 2650 kg/m³，几何体积乘密度；真实颗粒形状与矿物差异约 ±30%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B6 日常微粒 · 1.7×10⁻⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B6
  bandLabel: 日常微粒
  log10: -6.77
  position: 35.73
  color: '#c9a77a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

这里取一颗中细砂：筛分口径 0.5 mm，按石英球体计算。半径 0.25 mm 的球体积约 6.5×10⁻¹¹ m³，乘以 2650 kg/m³ 的密度，得到约 1.7×10⁻⁷ kg，也就是 0.17 毫克。[1] 这个数回答的是“这样一颗砂粒大约多重”，不是某一颗具体砂粒的称重结果。

## 口径与不确定度

估算链条只有两个输入：几何与密度。真实砂粒很少是完美球体，棱角、扁平与表面粗糙会让同粒径颗粒的体积差出两三成；矿物成分也从纯石英到长石、云母不等，密度在 2500–2900 kg/m³ 之间。[2] 因此条目给约 ±30% 的不确定度，并标 approximate。还要说明：0.5 mm 是筛分口径，代表能通过某一号筛、留在下一号筛上的颗粒，不等于每颗都正好 0.5 mm。

## 怎么测出来的

实验室里先用标准筛或激光粒度仪得到粒径分布，再用比重瓶或气体比重仪测颗粒密度，两者相乘得到单颗粒质量的均值。[1] 对少量颗粒，也可以挑出同一粒级的样品，在高精度天平上逐颗称量；若不先分级，粒径分布会把均值掩盖。[3] 显微镜三维形貌测量能修正形状因子，但成本高，通常只在方法研究里使用。

## 量级位置

1.7×10⁻⁷ kg 位于 B6 带下段，约为普朗克质量的八倍，是一滴 4.6 mm 雨滴的三百分之一。[2] 它也落在“粉尘—砂—砾”分界附近：同粒径下密度翻倍，质量只翻倍；粒径翻倍，质量却变成八倍，所以粒径比密度更主导读数。

## 怎么继续走

想看同一十进位里更小的锚点，去 mass.planck-mass；想比较液态颗粒，去 mass.rain-drop；想看砂粒的化学成分，去 elements.o；想看它在行星表面如何堆积，从 space.earth 进入空间轴。质量不能由直径单独推出，估算必须同时给密度与形状假设。
