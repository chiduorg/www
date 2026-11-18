---
id: temperature.vega-surface
title: 织女星表面
titleEn: Vega gravity-darkened temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  织女星快速自转，表面温度不能用一个数概括。Aufdenberg 等的干涉与大气模型给出赤道有效温度约 7,900 K， 极区比赤道高约 2,250
  K；本条目取极区约 10,150 K 作数轴参考， 并说明这是模型中的极区值，不是整颗星的单一有效温度。
quantity:
  value: 10150
  unit: K
  measure: 织女星极区模型有效温度参考
  approximate: true
  measureLabel: 织女星极区模型有效温度参考
  uncertainty: 1125
  uncertaintyType: 极区—赤道差与模型范围
  range:
    min: 7900
    max: 10150
    unit: K
displayValue: '约 7,900–10,150 K（模型；轴取极区）'
related:
  - temperature.a-type-star
  - temperature.sirius-surface
  - temperature.f-type-star
  - temperature.sun-surface
reviewStatus: reviewed
sources:
  - title: >-
      First Results from the CHARA Array VII: Long-Baseline Interferometric
      Measurements of Vega Consistent with a Pole-On, Rapidly Rotating Star
    url: 'https://arxiv.org/abs/astro-ph/0603327'
    publisher: 'Aufdenberg et al. (2006), ApJ preprint'
    accessed: '2026-11-06'
  - title: 'The Spectral Sequence'
    url: 'https://openstax.org/books/astronomy-2e/pages/17-3-the-spectral-sequence'
    publisher: 'OpenStax Astronomy 2e（CC BY 4.0）'
    accessed: '2026-11-07'
  - title: Vega
    url: 'https://www.britannica.com/place/Vega-star'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: vega-surface
  icon: ✨
  relatedLabels: A型星、天狼星、主序星、自转、引力昏暗、红外 excess、星际尘埃盘、光谱型、太阳表面
conditions: >-
  对象为 A0V 主序星织女星；温度指 CHARA 干涉测量并结合洛希—冯·蔡佩尔引力昏暗大气模型得到的局地有效温度。 模型给出赤道约 7,900
  K、极区与赤道差约 2,250 K，故极区约 10,150 K；这条记录取极区值作数轴参考，
  不代表整颗星只有一个有效温度，也不代表观测视线看到的是赤道温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 arXiv 摘要：模型给出赤道有效温度 7,900 K、极赤差 2,250 K、自转约为临界速度的 91%、倾角约 5 度。'
    - '正文因此把极区推算为约 10,150 K，并明确它是局地模型值，不是整星单温。'
    - 'NMSU 光谱分类页 A 型约 7,500–11,000 K；Britannica 确认织女星光谱型 A、亮度级 V，并提到周围尘埃盘。'
  originalQuantity:
    value: 9600
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '极区约 10,150 K 由 7,900 K 赤道值与 2,250 K 极赤差推算，取整误差与模型差异约一千开尔文；它不是直接测得的单一有效温度。'
visual:
  template: stellar-atmosphere
  profile: photosphere
  caption: 织女星快速自转
  note: >-
    以极区与赤道温度差示意引力昏暗，不表示整颗星均匀发光；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#e6ebff'
  symbol: α Lyrae
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

织女星是 A0V 型主序星，也是北天最亮的恒星之一，周围还有一圈尘埃盘。[3] 它的“表面温度”通常指有效温度，但织女星自转很快，离心力使赤道膨胀、重力变弱，形成引力昏暗：极区比赤道热，因此整颗星没有单一的表面温度。[1] 引力昏暗使极区重力较大、温度较高，赤道则较冷且可能对流。

## 怎样测到

Aufdenberg 等用 CHARA 阵列在 K′ 波段测量干涉可见度，发现超出“慢速自转单温模型”的预期；把可见度与洛希—冯·蔡佩尔引力昏暗大气模型比较，拟合出自转速度、倾角和温度分布。[1] 模型给出赤道有效温度约 7,900 K，极区与赤道相差约 2,250 K，并推断自转轴与视线夹角只有约 5 度。[1]

## 数值与口径

极区约 10,150 K 是尺度取值，温区约为 7,900–10,150 K；这两个数都是模型中的局地有效温度，不是整颗星的平均值。[1] 由于织女星几乎以极区朝向地球，观测看到的可见度混合了不同纬度的贡献；把它写成“7,900 K”或“10,150 K”都会丢掉自转造成的温度结构。[1][2] 把温区写成 7,900–10,150 K，是为了保留模型内部的温度分布，而不是给出观测误差。

## 常见误解

第一，把织女星当成温度均匀的 A 型星；快速自转使它成为引力昏暗的典型。第二，把赤道 7,900 K 当成整星有效温度；极区明显更热。[1] 第三，把“A0V”直接换算成固定温度；光谱型只给出类别，具体温度还取决于自转、重力和大气模型。[2][3]

## 与其他温区的关系

极区约 10,150 K 与天狼星 A 的约 9,845 K 相近，高于太阳表面的约 5,800 K，也高于 F 型星的主体温区。它说明恒星表面温度可以因自转而出现上千开的差异；与日冕或核心温度相比，这个温区仍属光球层，不能混用。[2][3]
