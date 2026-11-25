---
id: temperature.magnetar-surface
title: 磁星表面
titleEn: Magnetar surface temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  磁星是磁场高达约 10¹⁴–10¹⁵ 高斯的孤立中子星。宁静表面温度通常在 约 10⁶ K 量级，活跃热斑和年轻磁星可到约 10⁷ K。这个温度由 X
  射线热辐射 与大气模型拟合得到，不是内部温度。
quantity:
  value: 1000000
  unit: K
  measure: 磁星表面有效温度
  approximate: true
  measureLabel: 表面温度
  range:
    min: 1000000
    max: 10000000
    unit: K
displayValue: 约 10⁶ K（约 10⁶ °C，量级）
related:
  - temperature.neutron-star-surface
  - temperature.neutron-star-core
  - temperature.millisecond_pulsar
  - temperature.supernova-remnant
  - temperature.gamma-ray-burst
  - space.neutron-star
reviewStatus: reviewed
sources:
  - title: RXTE Helps Confirm Existence of Magnetars
    url: 'https://heasarc.gsfc.nasa.gov/docs/xte/learning_center/discover_0698.html'
    publisher: NASA HEASARC / RXTE
    accessed: '2026-11-06'
  - title: Atmospheres and Spectra of Strongly Magnetized Neutron Stars
    url: 'https://arxiv.org/html/astro-ph/0104199v1'
    publisher: 'W. C. G. Ho and D. Lai (arXiv:astro-ph/0104199)'
    accessed: '2026-11-06'
  - title: NASA’s NICER Telescope Sees Hot Spots Merge on a Magnetar
    url: >-
      https://www.nasa.gov/universe/nasas-nicer-telescope-sees-hot-spots-merge-on-a-magnetar/
    publisher: NASA Goddard Space Flight Center
    accessed: '2026-11-06'
  - title: "The Remarkable Properties of Neutron Stars"
    url: "https://chandra.harvard.edu/blog/node/432"
    publisher: "NASA Chandra X-ray Center"
    accessed: '2026-11-24'
  - title: "Supernova remnant"
    url: "https://www.britannica.com/science/supernova-remnant"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
conditions: >-
  对象为磁场约 10¹⁴–10¹⁵ 高斯的孤立中子星表面；10⁶ K 指由 X 射线热谱和磁化大气模型
  拟合的有效温度，不是星体内部温度，也不表示整个表面均匀发热。热斑温度和年轻磁星可更高。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 RXTE 页面：磁星表面被加热到约 1,800 万华氏度，约合 1,000 万摄氏度，即约 10⁷ K。'
    - 核对 Ho & Lai 大气模型：强磁场中子星有效温度约 10⁶–10⁷ K，具体拟合值可在数百万开尔文。
    - 核对 NASA NICER：磁星表面存在数百万度的 X 射线热斑，并可移动、合并。
    - 取 10⁶ K 作宁静表面锚点，range 写 10⁶–10⁷ K，避免把热斑峰值当成整星温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  表面温度依赖磁场强度、大气成分、热斑覆盖率和观测波段；磁化大气模型与黑体拟合会给出不同结果。 10⁶ K
  是宁静表面的量级参考，不能替代逐源拟合，也不等于核心温度。
visual:
  template: compact-star
  scene: temperature.object
  caption: 磁星表面热斑与强磁场示意
  note: 以小型中子星、磁力线和表面热斑示意磁星，不对应具体天体；画面非按比例， 磁场线、颜色和热斑分布均为解释性示意。
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 城市大小的超强磁场中子星

磁星是一类孤立中子星，半径仅约十公里，磁场却可达约 10¹⁴–10¹⁵ 高斯，比普通中子星强得多。[1] 强磁场储存大量能量，偶尔通过星壳形变或磁重联释放，表现为 X 射线爆发和软伽马重复暴。

## 表面温度怎样测得

卫星接收磁星的热 X 射线，用黑体或磁化大气模型拟合能谱，得到有效温度和辐射半径。[2] 磁场会改变原子能级和辐射转移，因此不能直接把普通中子星的大气模型照搬。脉冲轮廓还能约束热斑的位置和大小。[3]

## 百万到千万开尔文的表面

宁静磁星的表面温度常取约 10⁶ K 量级；强磁场大气模型给出的有效温度范围约 10⁶–10⁷ K。[2] RXTE 报道的某个磁星表面被加热到约 1,800 万华氏度，约合 1,000 万摄氏度，即约 10⁷ K。[1] NICER 还观测到数百万度的热斑在表面移动并合并。[3] 本条因此以 10⁶ K 为锚点，把范围写到 10⁶–10⁷ K。

## 表面温度不等于内部温度

中子星内部温度可远高于表面，但 X 射线只来自最外层。表面温度还受热斑覆盖率影响：拟合得到一个有效温度，并不表示整颗星表面同温。[2] 磁星年轻时会更热，随时间冷却；不同源的年龄和磁场历史也会造成差异。

## 与其他致密天体比较

10⁶ K 与普通中子星的冷却表面温区相当，低于太阳耀斑的约 10⁷ K，远低于伽马射线暴火球的约 10⁹ K。磁星把强磁场、致密物质和高温表面集中在一个小尺度上，是检验极端物理的天然实验室。[1][3]

## 表面温度是一个“有效温度”

X射线热谱拟合给出的是有效温度：把整个可见表面近似为一个温度，再按辐射面积折算。磁星表面有强磁场、热斑和大气成分差异，实际温度分布并不均匀；同一颗星不同波段、不同模型会给出不同拟合值。[2][3] 10⁶ K是宁静表面的量级锚点，10⁷ K更接近年轻磁星或热斑峰值。

## 磁场从哪来

磁星的强磁场可能来自前身星的“化石磁场”被压缩保存，也可能由中子星诞生初期的对流与差异旋转发电机过程放大；具体哪条路径占主导，取决于质量、自转与冷却历史。[2][3] 磁场不是永久不变的：它会通过星壳的欧姆耗散逐渐衰减，磁星活动通常在年轻时最剧烈。[1] 因此“磁星”是一个演化阶段，而不是一种固定不变的天体类型。

## 热斑为什么重要

磁星表面的热斑不是装饰。热斑的位置、面积和亮度变化，能约束磁场拓扑、星壳导热与粒子加速过程；NICER 看到的多个热斑移动、合并，说明表面辐射区会随磁场演化重排。[3] 若只拟合一个均匀温度，热斑贡献会被平均掉，得到的半径与温度组合可能偏离真实分布。[2]

## 五轴对照

在温度轴，它是10⁶–10⁷ K的表面；在空间轴，磁星半径只有约10公里；在质量轴，它属于中子星质量档，但质量与半径一起决定引力；在时间轴，磁星会冷却并演化，年轻源更热。把“表面温度”当成“内部温度”会误判整颗星的热状态。[1][2][3]

## 磁场本身也在加热

磁星表面温度约 10⁶ K，除余热外，强磁场的耗散、磁层中的粒子加速与 X 射线回旋也参与加热。观测到的是热辐射与磁辐射的混合，拟合出的“表面温度”依赖大气模型与磁场几何。把磁星当成单纯冷却的中子星，会漏掉磁场这条热源。[1][S1]

## 延伸核对

补充的来源 [4]（NASA Chandra X-ray Center）、[5]（Encyclopaedia Britannica） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
