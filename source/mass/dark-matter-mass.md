---
id: mass.dark-matter-mass
title: 可观测宇宙的暗物质：8.4×10⁵³ kg
summary: >-
  可观测宇宙内暗物质的总质量约 8.4×10⁵³ kg，只算暗物质，不含普通物质与暗能量。数值由微波背景的 Ω_dm 与临界密度、共动体积换算，相对不确定度约
  3%。
dimension: mass
category: 星系与宇宙
displayValue: 8.4×10⁵³ kg
quantity:
  value: 8.4e+53
  unit: kg
  measure: 可观测宇宙内暗物质总质量，不含普通物质与暗能量；由宇宙微波背景的 Ω_dm 与临界密度、共动体积换算，相对不确定度约 3%
  approximate: false
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: CMB dark matter density times comoving volume
  uncertainty:
    value: 0.03
    unit: relative
related:
  - mass.observable-universe
  - mass.total-matter-universe
  - mass.hubble-volume
  - space.galaxy-cluster
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
    url: 'https://sci.esa.int/web/planck'
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
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 可观测宇宙内暗物质总质量，不含普通物质与暗能量；由宇宙微波背景的 Ω_dm 与临界密度、共动体积换算，相对不确定度约 3%
  precision: B 级；记录值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 3%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B16 宇宙尺度 · 8.4×10⁵³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B16
  bandLabel: 宇宙尺度
  log10: 53.924
  position: 100
  color: '#c9d8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Dark matter in the observable universe
---
## 这个读数是什么

可观测宇宙内暗物质的总质量约 8.4×10⁵³ kg。[1] 这个口径只算暗物质，不含普通物质，也不含暗能量。[2] 它由微波背景给出的暗物质密度参数 Ω_dm 乘临界密度与共动体积换算，是目前对不可见质量最整体的一次估计。它是普通物质的五倍多，也是宇宙物质预算里最大的一项。

## 口径与不确定度

本条与 mass.observable-universe、mass.total-matter-universe 是同一个可观测宇宙的同一体积，只是成分口径不同，并非三种互相独立的测量。[3] 暗物质约占宇宙总能量的百分之二十六点六，是普通物质的五倍多，所以 8.4 与 1.5 相加正好是 9.9。[1] 数值相对不确定度约百分之三，定为 B 级，比普通物质那条略大，因为暗物质密度对模型假设更敏感。

## 怎么测出来的

暗物质不发光，只能靠引力效应间接测定：星系旋转曲线、星系团的质量、引力透镜都指向额外的质量。[2] 在宇宙尺度上，微波背景声学峰的相对高度给出了 Ω_dm，这是最精确的一条路径。[3] 两类证据彼此独立却结论一致，是暗物质存在的主要理由。

## 量级位置

8.4×10⁵³ kg 位于 B16 带上段，比普通物质多出约五倍，也是最大长城的数万倍。[1] 它比哈勃体积的临界质量低一个量级，差别同时来自体积与成分两个因素。[2] 若把暗物质平均铺满可观测宇宙，密度只有每立方米几个质子质量，稀薄到难以直观想象。

## 怎么继续走

想看同一体积的另外两种口径，去 mass.observable-universe 与 mass.total-matter-universe；想看暗物质在局部如何被称重，去 space.galaxy-cluster。[3] 前两条与本条共享同一共动体积，是同一份总账的三种拆法，数值可以互相核对。普通物质与本条相加正好等于总物质，可作为回到总账时的校验。
