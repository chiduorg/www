---
id: temperature.rocket_plume
title: RS-25燃烧室热气（参考）
titleEn: RS-25 hot combustion gas
dimension: temperature
category: 高温
summary: >-
  NASA 关于 RS-25 的资料用约 6000°F 描述燃烧室的高温尺度，约合 3600 K。这里比较的是
  燃烧室热气，不把它当作喷嘴外所有位置的喷焰温度，也不从火焰颜色直接读出温度。
quantity:
  value: 3588.7055555555557
  unit: K
  measure: RS-25燃烧室高温量级参考
  approximate: true
  measureLabel: RS-25燃烧室高温量级参考
displayValue: '约 3,600 K（6,000 °F量级）'
related:
  - temperature.fusion-reactor-plasma
  - temperature.liquid-hydrogen
  - temperature.tungsten-melting
  - temperature.reentry-plasma
  - space.solar-system
  - time.space-age
reviewStatus: reviewed
sources:
  - title: 'Aerospace Castings: RS-25 combustion chamber'
    url: 'https://ntrs.nasa.gov/api/citations/20170012457/downloads/20170012457.pdf'
    publisher: NASA Technical Reports Server (2017)
    accessed: '2026-11-06'
  - title: Test Firing of 3-D Printed Part
    url: 'https://www.nasa.gov/image-article/test-firing-of-3-d-printed-part/'
    publisher: NASA
    accessed: '2026-11-06'
  - title: 'Space Shuttle Main Engine Testing: T Plus 30 Years and Counting'
    url: >-
      https://www.nasa.gov/centers/stennis/news/newsreleases/2005/MBO-05-143.html
    publisher: NASA Stennis Space Center
    accessed: '2026-11-06'
  - title: "ITER Facts and Figures: plasma temperature design"
    url: "https://www.iter.org/facts-figures"
    publisher: "ITER Organization"
    accessed: '2026-11-24'
  - title: "About Cryogenics: normal boiling points"
    url: "https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics"
    publisher: "NIST"
    accessed: '2026-11-24'
legacy:
  id: rocket_plume
  icon: "\U0001F680"
  relatedLabels: 氧乙炔火焰、钨熔点、炼钢温度、高温材料、航天推进、燃烧诊断、超音速喷嘴、再生冷却、比冲、热力学
conditions: >-
  NASA 资料中的 RS-25 主燃烧室约 6000°F，换算约 3589 K；对象为液氧/液氢分级燃烧燃气， 室压约 2,994 psia（109%
  RPL）。不是喷嘴出口或下游整片喷焰的统一温度，也不是所有化学火箭的通用值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 NASA NTRS 2017 资料：RS-25 燃烧室达 +6,000°F，并给出 2,994 psia 室压。'
    - '补核 NASA 图像报道与 Stennis 2005 年新闻稿：试验部件/主燃烧室约 6,000°F。'
    - '保留燃烧室口径，不把 3,589 K 写成喷嘴出口或整片尾焰温度；原 3300 K 记录保留。'
  originalQuantity:
    value: 3300
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '约 6,000°F 是 NASA 资料给出的工程量级，随发动机工况、混合比和测点变化；喷嘴膨胀使燃气降温，公开尾焰照片不能直接给出燃烧室温度。'
visual:
  template: rocket-chamber
  profile: rs25
  caption: 火箭发动机燃烧室剖视
  note: >-
    对应 RS-25 燃烧室气体温度参考，不是膨胀后全部尾焰温度；流动图样不用于发动机设计；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#ffd0a1'
  symbol: RS-25 chamber
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

这里讨论的是 RS-25 主燃烧室内的燃气温度，不是喷嘴出口或整片尾焰的温度。RS-25 是航天飞机主发动机和 SLS 芯级使用的液氧/液氢分级燃烧发动机；推进剂在燃烧室中反应，产生高温高压燃气，随后经喷管膨胀加速。[1][2]

## 怎样测到

NASA 的 RS-25 资料把主燃烧室温度描述为约 6,000 °F；NASA 图像报道也提到试验中部件暴露于近 6,000 °F 的燃气。[2][3] 这些温度来自发动机试车中的热电偶、热流计和结构测温，以及燃烧与传热模型，不是对公开尾焰的照片测温。燃烧室壁由再生冷却和涂层保护，燃气温度高于壁面温度。试车数据通常区分燃气总温、静温和壁温，不能把其中一个读数直接当作另一个。

## 数值与口径

6,000 °F 换算为 (6,000 − 32) × 5/9 ≈ 3,315.6 °C，即约 3,588.7 K，展示取约 3,600 K。[1][2] 这是燃烧室燃气的高温量级，随发动机工况、混合比和测点变化；喷嘴内膨胀会迅速降温，出口尾焰还与环境空气混合。[1][3] “约 6,000 °F”是工程量级，不是每次试车的精确峰值。

## 常见误解

第一，把燃烧室温度当成整个尾焰温度；喷管膨胀把热能和压力能转化为高速气流，静温显著下降。[1] 第二，把尾焰亮度当成温度计；高温燃气可能透明，亮度和颜色受推进剂、颗粒和观测条件影响。第三，认为所有化学火箭都一样；不同推进剂组合、室压和喷管设计的温度不同。第四，把燃气温度当成发动机壁温；再生冷却使壁面远低于燃气。

## 与其他温区的关系

3,589 K 高于纯铁熔点 1,811 K，也高于氧乙炔火焰的约 3,473 K，但低于钨熔点 3,687 K；这解释了燃烧室内衬为何需要耐高温合金和再生冷却。[1][3] 它仍远低于太阳表面 5,772 K 和聚变等离子体的上亿开尔文。

## 燃烧室与尾焰不是同一个温度

RS-25 燃烧室燃气约 3,600 K，但喷管膨胀把热能转为高速气流，出口静温显著下降；尾焰与空气混合后还会继续降温。[1][2] 把燃烧室温度当成整片尾焰温度，会高估尾焰的热负荷。发动机壁面靠再生冷却保护，也远低于燃气温度。

## 五轴对照

在温度轴，燃烧室约 3,600 K；在空间轴，喷管把燃气加速到高速；在质量轴，推进剂流量决定推力；在时间轴，试车点火持续数百秒。温度、压力与流量共同决定发动机性能。[1][2]

## 燃烧室与尾焰不是同一个温度

RS-25 燃烧室燃气约 3,600 K，但喷管膨胀把热能转为高速气流，出口静温显著下降；尾焰与空气混合后还会继续降温。把燃烧室温度当成整片尾焰温度，会高估尾焰热负荷。发动机壁面靠再生冷却保护，也远低于燃气温度。[1][S2]

## 读数的口径与换算

本条采用的量是 约 3,600 K（6,000 °F量级），口径是 RS-25燃烧室高温量级参考。温度是强度量，读数依赖温标、测点与热平衡；同一对象的不同部位、不同时刻可以有不同温度。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（ITER Organization）、[5]（NIST） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
