---
id: temperature.cmb
title: 宇宙微波背景辐射
titleEn: Cosmic microwave background
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  宇宙微波背景辐射具有接近黑体的光谱。NASA 的 COBE/FIRAS 概览给出约 2.725 K
  的谱温度；这描述辐射场，不等于太空中每个物体、气体或尘埃的温度。
quantity:
  value: 2.725
  unit: K
  measure: CMB黑体光谱温度
  approximate: true
  measureLabel: CMB黑体光谱温度
  uncertainty: 0.002
displayValue: 约 2.725 K
related:
  - time.recombination
  - temperature.neutrino-background-temp
  - time.big-bang
  - temperature.absolute-zero
  - space.sun
  - space.observable-universe
reviewStatus: reviewed
sources:
  - title: 'FIRAS overview: cosmic microwave background spectrum'
    url: 'https://lambda.gsfc.nasa.gov/product/cobe/firas_overview.html'
    publisher: NASA LAMBDA / COBE
    accessed: '2026-11-06'
  - title: Planck
    url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck/Planck_and_the_cosmic_microwave_background'
    publisher: European Space Agency
    accessed: '2026-11-06'
  - title: "The early universe"
    url: "https://home.cern/science/physics/early-universe"
    publisher: "CERN"
    accessed: '2026-11-24'
  - title: "cosmic microwave background"
    url: "https://www.britannica.com/science/cosmic-microwave-background"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
legacy:
  id: cmb
  icon: "\U0001F310"
  relatedLabels: 大爆炸理论、宇宙膨胀、暗物质、宇宙学、普朗克卫星、原初涨落、宇宙暴胀、可观测宇宙、暗能量、重子声学振荡、再电离
conditions: >-
  COBE/FIRAS 的全天微波光谱测量；对象为宇宙微波背景辐射场，不是某个物体或气体； 近完美黑体谱说明辐射场已热化；2.725 K
  是黑体谱温度，也可视为该辐射的亮温度，不是物质温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NASA LAMBDA 的 FIRAS 概览给出 2.725±0.002 K，并说明光谱与热大爆炸预言高度吻合。
    - >-
      ESA Planck 页面说明 Planck 绘制了约 38 万年时遗留下来的 CMB 温度与偏振图，支持把 CMB
      当作背景辐射场而非局部环境温度。
  originalQuantity:
    value: 2.725
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  2.725±0.002 K 是 COBE/FIRAS 全天光谱拟合的黑体温度；不同频率通道、定标与前景扣除会带来微小差异， 但这个精度足以确认 CMB
  是近乎完美的黑体谱。
visual:
  template: radiation-field
  profile: cmb
  caption: 微波背景辐射天空
  note: >-
    温度属于黑体光谱；红蓝斑点是夸张的涨落示意，不是物体表面温度，也不是肉眼可见的微波颜色；
    画面非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#9ac6df'
  symbol: CMB
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

宇宙微波背景辐射是宇宙早期复合之后保留下来的辐射场，充满整个天空。它不是某颗恒星发出的光，也不是星际空间里某一团气体的温度，而是一整片已经热化的光子气体。它的光谱非常接近黑体，对应的温度约为 2.725 K。[1] 这种辐射携带了宇宙大约 38 万年时的信息，Planck 卫星据此绘制了温度与偏振的天图。[2]

## 怎样测到或为何是推断

COBE 卫星上的 FIRAS 仪器测量了全天微波光谱，把不同频率的辐射强度与黑体曲线比较，得到 2.725±0.002 K 的谱温度。[1] 这是实际测量，不是单纯的理论推断。Planck 进一步测量了不同方向上的微小温度差异，也就是各向异性；这些差异对应早期宇宙的密度涨落。[2] 需要区分的是：2.725 K 描述平均背景，红蓝斑点的幅度通常只有几十到几百微开尔文，并不是说天空各处真的冷热相差几度。

## 数值与口径

本条采用 2.725 K 作为 CMB 的黑体谱温度，不确定度为 0.002 K。它是辐射场的温度，也可以理解为该辐射的亮温度；它不是太空中所有物质的温度，更不是地球或太阳附近的温度。CMB 在复合时期更热，随着宇宙膨胀而冷却到今天约 2.725 K。这个数值是全天平均，不同方向有微小涨落，但涨落不等于整体温度。[1][2] 因此把它写成“太空的温度”会丢掉对象与口径。

## 常见误解

第一，把 2.725 K 当成太空环境温度；太空没有统一的物质温度，航天器表面温度取决于日照、辐射和自身热控。第二，把红蓝斑点当成实际温度差；图上的颜色经过夸张，真实涨落非常小。第三，把 CMB 当成某颗星的光；它来自整个宇宙的早期辐射场。第四，因为 2.725 K 很低就以为它没有能量；微波光子数量很大，CMB 仍是宇宙重要的辐射能量来源之一。[1]

## 与其他温区的关系

2.725 K 略高于绝对零度，也高于宇宙中微子背景约 1.95 K 的理论参数。它低于液氢约 20.3 K 和液氮约 77 K，更远低于恒星表面、白矮星表面与超新星核心。与太阳表面 5,772 K 相比，CMB 低了三个数量级；但它覆盖整个天空，不能按单个物体的温度来理解。把这些温标放在一起时，最重要的是分清辐射场、物质和局部环境。[1][2]


## 换一个尺度看它

2.725 K 比绝对零度高 2.725 K，约为室温的 1%。它低于液氦沸点 4.2 K，也低于宇宙中许多分子云。CMB 是宇宙最古老的光，今天被红移冷却到微波波段；把它当成“宇宙边缘的温度”会混淆最后散射面与当前宇宙。

## 误差与前景

2.725 K 的误差约 0.002 K，但这个精度是全天光谱拟合的结果，不等于每个方向都一样。银河系尘埃、同步辐射和仪器定标会污染微波天空，必须先扣除前景，才能得到 CMB 的微小涨落。[1][2] 红蓝斑点的幅度通常只有几十到几百微开尔文，颜色是夸张映射；把它当成“天空各处差几度”会读错图。

## 五轴对照

在温度轴，它是 2.725 K 的辐射场；在时间轴，它来自复合时期，约 38 万年；在空间轴，它覆盖整个可观测天空；在质量轴，光子的静质量为零，但辐射能量参与宇宙的总能量账本。把 CMB 当成“太空的温度”或“某颗星的光”，都会丢掉对象与口径。[1][2]

## 延伸核对

补充的来源 [3]（CERN）、[4]（Encyclopaedia Britannica） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
