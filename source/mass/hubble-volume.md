---
id: mass.hubble-volume
title: 哈勃体积内的临界质量：8.8×10⁵² kg
summary: >-
  哈勃体积指以哈勃半径 c/H₀ 为半径的球，其内按临界密度折算的总质量约 8.8×10⁵²
  kg。这个口径包含暗能量的能量当量，不是普通物质质量，也不等于可观测宇宙内的物质总量。
dimension: mass
category: 星系与宇宙
displayValue: 8.8×10⁵² kg
quantity:
  value: 8.8e+52
  unit: kg
  measure: >-
    哈勃体积（半径 c/H₀ 的球）乘临界密度得到的总能量当量，含暗能量贡献，不是普通物质质量；由哈勃常数与 Planck 宇宙学参数换算，相对不确定度约
    5%
  approximate: false
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: critical density times Hubble volume
  uncertainty:
    value: 0.05
    unit: relative
related:
  - mass.observable-universe
  - mass.dark-matter-mass
  - mass.total-matter-universe
  - space.milky-way
  - temperature.cmb
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
  - title: ESA Planck
    url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck/Planck_and_the_cosmic_microwave_background'
    publisher: European Space Agency
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
tags:
  - 质量
  - 宇宙学
  - 临界密度
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: >-
    哈勃体积（半径 c/H₀ 的球）乘临界密度得到的总能量当量，含暗能量贡献，不是普通物质质量；由哈勃常数与 Planck 宇宙学参数换算，相对不确定度约
    5%
  precision: B 级；记录值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 5%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B16 宇宙尺度 · 8.8×10⁵² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B16
  bandLabel: 宇宙尺度
  log10: 52.944
  position: 99.94
  color: '#c9d8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Critical mass in the Hubble volume
---
## 这个读数是什么

哈勃体积指以哈勃半径 c/H₀ 为半径的球，其内按临界密度折算的总质量约 8.8×10⁵² kg。[1] 这里的质量是临界密度乘体积得到的能量当量，包含暗能量的贡献，并不是普通物质的质量。[2] 哈勃半径约 4.4 Gpc，对应体积约 10⁷⁹ 立方米，它只是一个方便的平均密度基准。

## 口径与不确定度

临界密度等于 3H₀² 除以 8πG，把全部能量形式都折成质量，其中暗能量约占七成。[2] 因此这条读数的口径是总能量密度当量，与只算重子的条目完全不同。[3] 它由哈勃常数与 Planck 宇宙学参数换算，相对不确定度约百分之五，定为 B 级；误差主要来自不同方法测得的 H₀ 之间的分歧。

## 怎么测出来的

哈勃常数可由造父变星、Ia 型超新星与宇宙微波背景等多条路径测定，取值之间仍有几个百分点的张力。[1] 把 H₀ 代入临界密度公式，再乘以球的体积，就得到这条读数。[3] 要注意体积用的是 c/H₀ 球，而不是可观测宇宙的共动体积：两者半径相差三倍多，体积相差约三十倍。

## 量级位置

8.8×10⁵² kg 位于 B16 带底部，比可观测宇宙的普通物质少一个量级，却比最大的长城高四个量级。[1] 它常被用作宇宙平均密度的参照：任何结构若平均密度远高于此，就算引力束缚系统。[2] 但它不是某个天体的质量，而是一个人为划出的体积内的平均量。

## 怎么继续走

想看在同一个可观测宇宙里按成分拆开的三个量，去 mass.observable-universe、mass.dark-matter-mass 与 mass.total-matter-universe。[3] 那三条共享可观测宇宙的共动体积，而含暗能量当量的这条哈勃体积是另一个体积，两者不能直接相减或相加。把体积想清楚比记住数值更重要：换一个体积，结论就换了一整套。
