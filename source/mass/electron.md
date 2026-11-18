---
id: mass.electron
title: 电子：9.109×10⁻³¹ kg，粒子物理最精确的质量之一
summary: >-
  电子的静质量由 Penning 阱与原子反冲测量共同锁定，CODATA 2022 给出 9.1093837139×10⁻³¹ kg，相对不确定度约
  3×10⁻¹⁰。
dimension: mass
grade: A
category: 基本粒子
displayValue: 9.109×10⁻³¹ kg
quantity:
  value: 9.1093837139e-31
  unit: kg
  measure: CODATA 2022 推荐静质量，由 Penning 阱回旋频率与原子反冲测量综合
  approximate: false
related:
  - mass.positron
  - mass.proton
  - mass.neutron
  - space.electron-compton
  - elements.h
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
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: Review of Particle Physics 2024
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-09'
tags:
  - 质量
  - 电子
  - 轻子
  - 基本粒子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: CODATA 2022 推荐静质量，由 Penning 阱回旋频率与原子反冲测量综合
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B1 中微子与轻子 · 9.109×10⁻³¹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B1
  bandLabel: 中微子与轻子
  log10: -30.041
  position: 10.71
  color: '#7fe8ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

电子是带负电的稳定轻子，静质量为 9.1093837139×10⁻³¹ kg，约 0.511 MeV/c²。[1] 这里的“静质量”是不变量质量：无论电子如何运动，这个数不变。相对论里常说的高速运动“质量增加”只是能量增加，不是本条记录的对象；能量等价质量不能混入静质量。

## 怎么测出来的

电子的质量主要通过两种独立路径锁定。第一种是在 Penning 阱中测回旋频率，用已知磁场把质荷比转成质量；第二种是原子反冲与里德伯常数组合，把电子质量与原子质量标尺连起来。[1] 两条路径在误差范围内一致，CODATA 才给出约 3×10⁻¹⁰ 的相对不确定度。[2] 这类测量不依赖“称重”，而是把质量变成频率比。

这套频率比还让电子质量成为连接原子标尺与基本常数的枢纽，CODATA 每年据此更新整套常数网络。[2]

## 质量从哪来

在标准模型里，电子的质量来自它与 Higgs 场的汤川耦合。耦合强度不是一个可计算的数，而是必须由实验输入的参数。[3] 因此 9.109×10⁻³¹ kg 既是一个测量值，也是模型的一个自由参数；它解释了为什么电子比顶夸克轻五个数量级，却没有解释耦合为什么取这个值。

## 量级位置

电子是 B1 带里唯一有确定点值的粒子：比中微子本征态重约 10⁷ 倍，比质子轻 1836 倍。这个比例决定了原子的尺度：电子质量越小，玻尔半径越大，氢原子的 1s 云才会铺到 10⁻¹⁰ m 量级。

## 怎么继续走

想看它的反粒子，去 mass.positron；想看它与质子如何组成氢，去 mass.hydrogen-atom 与 elements.h；想看康普顿波长如何把质量换成长度，从 space.electron-compton 进入空间轴。
