---
id: temperature.f-type-star
title: F型星表面
titleEn: F-type stellar temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  F 型星是氢线由强转弱、钙离子线增强的恒星类别。教学表把这一温区放在约 5,900–7,500 K， 本条目沿用 7,000 K
  作区间内锚点，并保留原记录的 6,000–7,500 K； 它不是所有 F 型星共同的温度、质量或寿命。
quantity:
  value: 7000
  unit: K
  measure: F型星温区示例参考
  approximate: true
  measureLabel: F型星温区示例参考
  uncertainty: 750
  uncertaintyType: 类别内部离散与区间取整
  range:
    min: 6000
    max: 7500
    unit: K
displayValue: '约 7,000 K（温区示例）'
related:
  - space.sun
  - time.first-stars
  - temperature.sun-surface
  - temperature.a-type-star
  - temperature.vega-surface
  - temperature.sirius-surface
reviewStatus: reviewed
sources:
  - title: The Spectra of Stars (and Brown Dwarfs)
    url: 'https://openstax.org/books/astronomy-2e/pages/17-3-the-spectra-of-stars-and-brown-dwarfs'
    publisher: OpenStax Astronomy 2e（CC BY 4.0）
    accessed: '2026-11-07'
  - title: Spectral Classification of Stars (Space Math 43)
    url: >-
      https://science.gsfc.nasa.gov/attic/spacemath.gsfc.nasa.gov/stars/5Page43.pdf
    publisher: NASA Space Math
    accessed: '2026-11-06'
  - title: >-
      A Modern Mean Dwarf Stellar Color and Effective Temperature Sequence,
      version 2022.04.16
    url: 'https://www.pas.rochester.edu/~emamajek/EEM_dwarf_UBVIJHK_colors_Teff.txt'
    publisher: 'University of Rochester, E. Mamajek'
    accessed: '2026-11-06'
legacy:
  id: f-type-star
  icon: ⭐
  relatedLabels: 红矮星表面、天狼星、织女星表面、太阳表面
conditions: >-
  对象为主序 F 型星（约 F0–F9）；温度指光球有效温度，由光谱分类、视差、角直径与测热辐射流结合大气模型得到。 教学表给出约 5,900–7,500
  K，本条的 7,000 K 是区间内锚点，range 保留原记录 6,000–7,500 K； 类别内部亚类差异与原记录取整不能被压成一个统一值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      核对 NMSU 光谱分类页：F 型约 5,900–7,500 K，代表值 7,240 K；Rochester 表 F0V 7,220 K、F5V
      6,550 K。
    - NASA Space Math 光谱分类页给出 O 至 M 的序列关系，用于说明类别是连续温区分段。
    - '保留原 7,000 K 锚点与 6,000–7,500 K range，不改写为单颗恒星实测。'
  originalQuantity:
    value: 7000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '7,000 K 是类别区间内的锚点；F0 至 F9 的有效温度跨度、资料边界差异与取整合计可达数百开尔文，不能当作单颗恒星的有效温度测量。'
visual:
  template: stellar-atmosphere
  profile: photosphere
  caption: F 型星光球参考
  note: >-
    以类型范围内的代表点定位，不表示每颗 F 型星温度相同；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#f4edd9'
  symbol: F
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

F 型星是光谱分类中介于 A 型与 G 型的恒星，氢吸收线从很强逐渐变弱，钙离子线变强。[1] 它的表面温度通常用有效温度表示，即整颗星按总辐射折算出的黑体温度，而不是光球上某个点的局部温度。南河三常被用作这一类的例子。[2] F 型的光球温度比太阳高，但质量与寿命的跨度仍然很大，不能由类别直接推断年龄。[3]

## 怎样测到

光谱分类先比较标准光谱与目标星的谱线强度，再结合视差、角直径和测热辐射流，用恒星大气模型拟合有效温度与重力。[1] 没有角直径时，模型半径与消光假设会进入误差预算。[1] 教学资料把 F 型放在约 5,900–7,500 K，并给出 7,240 K 的代表值；另一份大学序列表给出 F0V 约 7,220 K、F5V 约 6,550 K。[1][3]

## 数值与口径

7,000 K 是尺度锚点，对应的温区约为 6,000–7,500 K。这个锚点不是某颗 F 型星的实测值，也不是整类恒星的统一温度；F0 与 F9 之间、主序与巨星之间都可能有明显差异。[2][3] 近似与取整的不确定度约为数百开尔文量级；把 7,000 K 当作类别代表值，是为了在数轴上定位，而非替代逐星的光谱拟合。[1]

## 常见误解

第一，把 F 型当成“太阳的精确同类”；太阳是 G2V，F 型整体更热。第二，把有效温度当成表面处处同温；自转、对流和磁场会造成局域差异。第三，由光谱类别直接推断宜居带宽度或生命条件；这些还需要恒星年龄、行星轨道和大气等独立资料。[1][3] 光谱型也不等于肉眼看到的颜色，颜色还受观测条件与显示器影响。

## 与其他温区的关系

7,000 K 高于太阳表面的约 5,800 K，低于 A 型星的约 9,000 K 量级，也与 G 型星的上端相接。光谱序列 O、B、A、F、G、K、M 是一条连续温区上的分段，F 型正好处在氢线由强转弱的过渡带。[2][3]
