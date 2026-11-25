---
id: mass.observable-universe
title: 可观测宇宙的普通物质：1.5×10⁵³ kg
summary: >-
  可观测宇宙内普通物质（重子）的总质量约 1.5×10⁵³ kg，只算重子，不含暗物质与暗能量。数值由宇宙微波背景的 Ω_b
  与临界密度、共动体积换算，相对不确定度约 2%。
dimension: mass
category: 星系与宇宙
displayValue: 1.5×10⁵³ kg
quantity:
  value: 1.5e+53
  unit: kg
  measure: 可观测宇宙内普通物质（重子）总质量，不含暗物质与暗能量；由宇宙微波背景的 Ω_b 与临界密度、共动体积换算，相对不确定度约 2%
  approximate: false
grade: B
mass:
  type: baryonic
  includesDarkMatter: false
  method: CMB baryon density times comoving volume
  uncertainty:
    value: 0.02
    unit: relative
related:
  - mass.dark-matter-mass
  - mass.total-matter-universe
  - mass.hubble-volume
  - space.observable-universe
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
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
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: ESA Planck
    url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck/Planck_and_the_cosmic_microwave_background'
    publisher: European Space Agency
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
tags:
  - 质量
  - 宇宙学
  - 重子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 可观测宇宙内普通物质（重子）总质量，不含暗物质与暗能量；由宇宙微波背景的 Ω_b 与临界密度、共动体积换算，相对不确定度约 2%
  precision: B 级；记录值。
  massType: 重子质量
  includesDarkMatter: 否
  uncertainty: 相对约 2%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B16 宇宙尺度 · 1.5×10⁵³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B16
  bandLabel: 宇宙尺度
  log10: 53.176
  position: 100
  color: '#c9d8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Ordinary matter in the observable universe
---
## 这个读数是什么

可观测宇宙内普通物质即重子的总质量约 1.5×10⁵³ kg。[1] 这个口径只算重子，也就是构成恒星、星系际气体和等离子体的质子、中子与电子，不含暗物质，也不含暗能量。[2] 它等于可观测宇宙的共动体积乘以重子密度，是我们熟悉的那部分物质的总账。

## 口径与不确定度

必须说清：本条与 mass.dark-matter-mass、mass.total-matter-universe 是同一个可观测宇宙的同一体积，只是成分口径不同，三者不是三次独立测量。[3] 普通物质约占宇宙总能量的百分之四点九，所以 1.5×10⁵³ kg 明显小于总物质。[1] 数值由微波背景给出的 Ω_b 与临界密度、共动体积换算，相对不确定度约百分之二，定为 B 级。

## 怎么测出来的

宇宙微波背景的温度涨落谱中，重子会改变声学峰的相对高度，Planck 卫星据此定出重子密度参数 Ω_b。[2] 再乘临界密度与可观测宇宙的共动体积，就得到总重子质量。[3] 这条路径精度很高，但依赖宇宙学模型：一旦模型参数整体移动，换算结果也会同向改变。

## 量级位置

1.5×10⁵³ kg 位于 B16 带中段，是 BOSS 长城的约十万倍，却只有总物质的约六分之一。[1] 与太阳相比，它是 10⁵³ 对 10³⁰，相差二十三个数量级。[2] 这个数常被引用为宇宙中普通物质的总量，但普通物质并不都发光：大部分重子以极稀薄的气体形式存在。

## 怎么继续走

想看同一体积里另外两种成分，去 mass.dark-matter-mass 与 mass.total-matter-universe；想弄清体积这个前提本身，去 mass.hubble-volume。[3] 前两条与本条共享同一共动体积，可互相加减核对；哈勃体积那条则是另一个体积，还含暗能量当量，不能混入这份账。把体积和成分这两件事分开记，比只记住数字更有用。


## 深读一：量值口径

本条的核心量值是 1.500e+53 kg，量的是可观测宇宙内普通物质（重子）总质量，不含暗物质与暗能量；由宇宙微波背景的 Ω_b 与临界密度、共动体积换算，相对不确定度约 2%。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：reference=质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。；scope=可观测宇宙内普通物质（重子）总质量，不含暗物质与暗能量；由宇宙微波背景的 Ω_b 与临界密度、共动体积换算，相对不确定度约 2%；precision=B 级；记录值。；massType=重子质量；includesDarkMatter=否。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照可观测宇宙的暗物质：8.4×10⁵³ kg（8.400e+53）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：不确定度 0.02 relative。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
