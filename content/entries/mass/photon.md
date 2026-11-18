---
id: mass.photon
title: 光子：静质量为零的特例，不参与质量阶梯排序
summary: 标准模型给光子的静质量为零；实验只给出约 10⁻⁶³ kg 的上限。零质量粒子没有对数刻度位置，因此本条单独成条，不进入 16 个覆盖带。
dimension: mass
grade: C
category: 基本粒子
displayValue: 静质量 0 · 实验上限约 10⁻⁶³ kg
quantity:
  value: 0
  unit: kg
  measure: 标准模型静质量 = 0；实验上限约 10⁻⁶³ kg（约 10⁻²⁷ eV/c²）
  approximate: false
zeroMass: true
related:
  - mass.electron
  - mass.positron
  - time.photon-epoch
  - space.quantum-fluctuation
  - time.big-bang
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
  - title: Review of Particle Physics 2024
    url: 'https://pdg.lbl.gov/2024/listings/contents_listings.html'
    publisher: Particle Data Group
    accessed: '2026-11-09'
  - title: The Standard Model
    url: 'https://home.cern/science/physics/standard-model'
    publisher: CERN
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags:
  - 质量
  - 光子
  - 零质量
  - 特例
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 标准模型静质量 = 0；实验上限约 10⁻⁶³ kg（约 10⁻²⁷ eV/c²）
  precision: 零质量特例；实验上限不是点值，不参与对数阶梯排序。
visual:
  template: mass-zero
  scene: mass.scale
  caption: 零质量特例 · 静质量 0
  note: 零质量特例不参与对数阶梯排序；实验给出的是上限，不是点值。
  band: ZERO
  bandLabel: 零质量特例
  log10: null
  position: 0
  color: '#e8f0e6'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

光子的静质量按标准模型为零，实验给出的是上限而不是点值：约 10⁻²⁷ eV/c²，折合约 10⁻⁶³ kg。[1] 这个上限比中微子本征态还低二十多个数量级。条目把 quantity.value 固定为 0，并标记为零质量特例；它不是“测得 0”，而是模型值与实验上限共同支持的结果。

## 为什么不能放进阶梯

质量阶梯用 log10(m/kg) 定位，零没有对数。若硬把 0 塞进 B1，要么把轴下界拉到负无穷，要么给一个并不存在的“最小质量”。两种做法都会让刻度说谎。[2] 因此光子单独成条，显示在阶梯末尾的“零质量特例”区，不参与覆盖带计数，也不参与“已覆盖十进位”的统计。

## 静质量与能量等价质量

光子有能量 E，因而有 E/c² 的等价质量；但这不等于静质量。静质量是不变量，光子的四维动量平方为零，所以静质量为零。把 E/c² 写进质量条目，会让“质量”随参考系变化，这正是本条拒绝的做法。[1] 引力透镜与光子气体中的“有效质量”是能量密度的效应，不是光子自身的静质量。

## 实验上限意味着什么

上限来自对库仑定律、星系磁场与大尺度电磁过程的检验：如果光子有质量，电磁力会变成短程力，磁场的空间结构会改变。[3] 这些观测把上限压到 10⁻⁶³ kg 量级，但仍未给出非零信号。条目保留“上限”表述，不把它读成“已测为零”。

## 怎么继续走

想看质量如何转成能量，去 mass.electron 与 time.electron-positron-annihilation；想看光子主导宇宙的时代，去 time.photon-epoch；想看不变量质量的定义，从 space.quantum-fluctuation 进入空间轴。
