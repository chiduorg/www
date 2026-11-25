---
id: temperature.hawking-temperature
title: 霍金温度
titleEn: Hawking temperature
dimension: temperature
category: 极低温
summary: >-
  霍金温度是按黑洞质量计算的理论温度，T = ħc³/(8πGMk_B)。10 倍太阳质量的史瓦西黑洞约 6.2×10⁻⁹ K； 1 倍太阳质量约
  6.2×10⁻⁸ K。它不是实测温度，也不能脱离质量与度规单独引用。
quantity:
  value: 6.2e-9
  unit: K
  measure: 10 倍太阳质量史瓦西黑洞的霍金温度（理论）
  approximate: true
  measureLabel: 10 倍太阳质量史瓦西黑洞的霍金温度（理论）
displayValue: 约 6.2 × 10⁻⁹ K（10 倍太阳质量黑洞，理论）
related:
  - temperature.black-hole-accretion-disk
  - temperature.cmb
  - temperature.planck-temperature
  - temperature.neutron-star-surface
  - temperature.absolute-zero
  - mass.m87-black-hole
reviewStatus: reviewed
sources:
  - title: >-
      "Black holes ain't so black": An introduction to the great discoveries of
      Stephen Hawking
    url: 'https://arxiv.org/abs/1904.02010'
    publisher: 'Jorge Pinochet, arXiv (2019)'
    accessed: '2026-11-06'
  - title: Black Hole Thermodynamics
    url: 'https://arxiv.org/abs/1410.1486'
    publisher: 'S. Carlip, arXiv review (2015)'
    accessed: '2026-11-06'
  - title: A Primer for Black Hole Quantum Physics
    url: 'https://arxiv.org/abs/0710.4345'
    publisher: 'Brout, Massar, Parentani & Spindel, arXiv (2007)'
    accessed: '2026-11-06'
  - title: "NASA-Led Study Explains Decades of Black Hole Observations"
    url: "https://www.nasa.gov/universe/nasa-led-study-explains-decades-of-black-hole-observations/"
    publisher: "NASA Goddard, research-team report (2013)"
    accessed: '2026-11-24'
  - title: "FIRAS overview: cosmic microwave background spectrum"
    url: "https://lambda.gsfc.nasa.gov/product/cobe/firas_overview.html"
    publisher: "NASA LAMBDA / COBE"
    accessed: '2026-11-24'
conditions: >-
  球对称、无旋转、无电荷的史瓦西黑洞；质量取 10 倍太阳质量（约 1.99×10³¹
  kg），温度指无穷远观测者看到的霍金辐射黑体温度，不是视界局部温度或吸积盘气体温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - arXiv 1904.02010 给出 T_H = ħc³/(8πkGM) 与数值形式 1.23×10²³ K·kg/M，并说明温度在无穷远处测量。
    - >-
      按该式复算：1 倍太阳质量约 6.2×10⁻⁸ K，10 倍太阳质量约 6.2×10⁻⁹ K；任务参考中的 6.2×10⁻⁸ K 对应约 1
      倍太阳质量，正文采用按质量换算后的值并在口径中说明。
    - Carlip 综述与 Brout 等综述用于说明霍金辐射的理论地位、半经典推导与 Unruh 效应的关联。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  6.2×10⁻⁹ K 是按史瓦西公式对 10 倍太阳质量取一位有效数字的理论值；常数圆整、黑洞质量测量和自转/电荷都会改变结果。
  恒星级黑洞的霍金温度远低于宇宙微波背景，至今没有直接测温证据，不能当作观测值。
visual:
  template: compact-star
  profile: horizon
  caption: 黑洞视界与霍金辐射示意
  note: >-
    视界、霍金辐射粒子与周围环境为概念示意，非按比例，也不是观测重建；画面不代表黑洞附近物质的温度，也不表示辐射已被直接探测。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#c9a6e8'
  symbol: T_H
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

霍金温度是黑洞视界附近量子场效应所对应的黑体温度。经典广义相对论认为黑洞不发光，但把量子场论放到弯曲时空中后，黑洞会以热谱辐射，温度与质量成反比。[1][2] 它是理论温度，不是用温度计测到的天体表面温度。

## 怎样算

对史瓦西黑洞，霍金温度写作 T = ħc³/(8πGMk_B)。[1] 代入常数可得 T ≈ 1.23×10²³ K·kg / M。[1] 当 M 为 10 倍太阳质量（约 1.99×10³¹ kg）时，T ≈ 6.2×10⁻⁹ K；当 M 为 1 倍太阳质量时，T ≈ 6.2×10⁻⁸ K。[1][2] 质量越大，温度越低；恒星级黑洞的霍金温度远低于宇宙微波背景的 2.725 K。

## 数值与口径

本条采用 10 倍太阳质量史瓦西黑洞的约 6.2×10⁻⁹ K 作为理论参考，即 10⁻⁹ K 量级。它描述无穷远观测者看到的霍金辐射温度，不是视界局部的局域温度，也不是吸积盘气体的温度。[1][3] 6.2×10⁻⁸ K 常被误配给 10 倍太阳质量；实际上那个数值对应约 1 倍太阳质量。两者相差十倍，写法必须带质量条件。

## 常见误解

第一，把霍金温度当成黑洞附近物质的温度；吸积盘的辐射来自高温气体，而霍金温度是视界量子效应的理论温度。[1] 第二，把霍金辐射当成已被直接观测到的辐射；对恒星级黑洞，其温度低于背景，极难探测。第三，把温度与总辐射功率混为一谈；温度按 1/M 下降，功率按 1/M² 下降。第四，把霍金温度套到旋转或带电黑洞而不说明度规。

## 与其他温区的关系

6.2×10⁻⁹ K 比宇宙微波背景的 2.725 K 低约八个量级，也比激光冷却的 1 μK 低。它低于任何已测到的天体温度，只对极小质量黑洞才可能显著。[1][2] 与 Unruh 效应类似，它把加速度、引力和量子真空联系起来，但两者是不同的理论设定，不能直接互换。[3]

## 为什么恒星级黑洞几乎不可见

10 倍太阳质量黑洞的霍金温度约 6×10⁻⁹ K，远低于宇宙微波背景 2.725 K；它会吸收背景辐射多于发出霍金辐射。[1][2] 因此恒星级黑洞的霍金辐射无法用现有望远镜直接探测。只有极小质量原初黑洞才可能热到可见，但这类黑洞尚未被确认。

## 五轴对照

在温度轴，霍金温度约 10⁻⁹ K；在质量轴，温度与质量成反比；在空间轴，辐射来自视界附近；在时间轴，黑洞蒸发到最后阶段会急剧升温。质量、温度与寿命构成黑洞热力学的账本。[1][3]

## 负热容与蒸发

黑洞的霍金温度随质量减小而升高，热容为负：越蒸发越热，最后可能爆炸。恒星级黑洞的温度远低于宇宙微波背景，实际在吸收背景辐射而非净辐射。把霍金温度当成“黑洞表面温度计读数”，会忽略观测条件。[1][S2]

## 读数的口径与换算

本条采用的量是 约 6.2 × 10⁻⁹ K（10 倍太阳质量黑洞，理论），口径是 10 倍太阳质量史瓦西黑洞的霍金温度（理论）。温度是强度量，读数依赖温标、测点与热平衡；同一对象的不同部位、不同时刻可以有不同温度。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（NASA Goddard, research-team report (2013)）、[5]（NASA LAMBDA / COBE） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
