---
id: mass.top-quark
title: 顶夸克：3.076×10⁻²⁵ kg，标准模型里最重的基本粒子
summary: >-
  顶夸克 MS-bar 流质量 172.57 GeV/c²，合 3.076×10⁻²⁵
  kg，约与一个钨原子相当。它寿命极短，来不及形成强子，是唯一能观测裸夸克衰变产物的夸克。
dimension: mass
category: 基本粒子
displayValue: 3.076×10⁻²⁵ kg（MS-bar 流质量）
quantity:
  value: 3.076e-25
  unit: kg
  measure: PDG 2024 MS-bar 流质量 172.57 GeV/c²；夸克不能孤立观测，此值依赖重整化方案
  approximate: false
grade: A
related:
  - mass.bottom-quark
  - mass.z-boson
  - mass.w-boson
  - mass.higgs-boson
  - mass.proton
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
  - title: 'Review of Particle Physics 2024: Quark Masses'
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
  - 顶夸克
  - 夸克
  - 基本粒子
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: PDG 2024 MS-bar 流质量 172.57 GeV/c²；夸克不能孤立观测，此值依赖重整化方案
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B3 分子与生物大分子 · 3.076×10⁻²⁵ kg（MS-bar 流质量）
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B3
  bandLabel: 分子与生物大分子
  log10: -24.512
  position: 16.65
  color: '#9cc8ff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

顶夸克是第三代上型夸克，也是标准模型里最重的基本粒子。PDG 2024 给出的 MS-bar 流质量为 172.57 GeV/c²，按 CODATA 的换算关系折合 3.076×10⁻²⁵ kg。[1][3] 这个数不能像质子那样理解为组分之和：夸克不能被孤立取出，只存在于强子或夸克—胶子等离子体中，因此不存在对“自由顶夸克”的直接称重。

这里必须区分静质量与能量等价质量。静质量是不变量质量，等于粒子在自身静止系中的 m；加速器里顶夸克的动能会增加总能量，但那部分能量等价质量不属于本条记录的读数。[3] 顶夸克与胶子场的相互作用能同样不计入流质量，它是重整化方案下的参数，而不是某个束缚系统的整体质量。

## 口径与不确定度

文献里的“顶夸克质量”至少有三种口径：MS-bar 流质量、蒙特卡洛质量与极点质量，彼此相差可达 1 GeV 量级，正落在实验误差边缘。[1] 本条采用 PDG 推荐的 MS-bar 流质量，相对不确定度约 0.2%，是质量轴里少数精度优于 1% 的夸克读数。写成近似值会掩盖方案差异，所以不做四舍五入式的假精度。

## 怎么测出来的

顶夸克 1995 年在费米实验室的 Tevatron 上被发现，此后 LHC 的 ATLAS 与 CMS 用三条路径收紧它的质量：顶夸克对产生截面、单顶夸克产生，以及衰变产物中 W 玻色子与 b 夸克喷注的不变质量拟合。[1][2] 顶夸克寿命约 5×10⁻²⁵ 秒，远短于强子化所需的时间，它会在形成强子之前衰变，实验看到的因此是裸夸克的衰变产物。[2]

## 量级位置

3.076×10⁻²⁵ kg 落在 B3 带的上段，约等于一个钨原子（183 u）的质量，比质子重约 184 倍，也是希格斯玻色子的约 1.38 倍。它和重原子同量级，但二者不是一回事：一个是基本粒子，一个是含 183 个核子的束缚系统，后者的质量主要来自结合能。[1]

## 怎么继续走

想看同一代的规范玻色子，去 mass.w-boson 与 mass.z-boson；想看质量谱的另一端，去 mass.higgs-boson 与 mass.bottom-quark；想看这些粒子在早期宇宙里如何成对产生又湮灭，从 time.big-bang 进入时间轴。
