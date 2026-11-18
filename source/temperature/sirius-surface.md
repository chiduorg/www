---
id: temperature.sirius-surface
title: 天狼星A有效温度
titleEn: Sirius A effective temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  Davis 等结合 SUSI 角直径、VLTI 结果与总辐射通量，得到天狼星 A 的有效温度 9,845 ± 64 K。 这个值属于 A
  星，不属于更热的白矮星伴星天狼星 B； 温度高低也不单独决定恒星的总光度。
quantity:
  value: 9845
  unit: K
  measure: Sirius A角直径与总辐射通量推断
  approximate: true
  measureLabel: Sirius A角直径与总辐射通量推断
  uncertainty: 64
  uncertaintyType: 论文报告的有效温度不确定度
displayValue: '约 9,845 ± 64 K'
related:
  - temperature.a-type-star
  - temperature.white-dwarf-surface
  - temperature.vega-surface
  - temperature.rigel-surface
  - temperature.sun-surface
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: The Angular Diameter and Fundamental Parameters of Sirius A
    url: 'https://arxiv.org/abs/1010.3790'
    publisher: >-
      Davis et al. (2010), Publications of the Astronomical Society of Australia
      preprint
    accessed: '2026-11-06'
  - title: Sirius
    url: 'https://www.britannica.com/place/Sirius-star'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'The Spectral Sequence'
    url: 'https://openstax.org/books/astronomy-2e/pages/17-3-the-spectral-sequence'
    publisher: 'OpenStax Astronomy 2e（CC BY 4.0）'
    accessed: '2026-11-07'
legacy:
  id: sirius-surface
  icon: ⭐
  relatedLabels: 主序星、A型星、双星系统、白矮星、恒星演化、光谱型、太阳表面、参宿七表面、比邻星、光年、恒星视差
conditions: >-
  对象为天狼星双星系统中的主星 Sirius A（光谱型 A1V）；温度指由临边昏暗角直径与总辐射通量推得的整星有效温度，
  不是表面局部亮温度，也不适用于白矮星伴星 Sirius B；9,845 ± 64 K 是论文在特定角直径与测热口径下的结果。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      核对 arXiv 摘要：SUSI 在 694.1 nm 测得临边昏暗角直径 6.048±0.040 mas，结合通量得有效温度 9,845±64
      K。
    - 'Britannica 天狼星条目给出约 9,940 K、半径 1.71 倍太阳、光度 25.4 倍太阳，并明确伴星 Sirius B 是白矮星。'
    - 'NMSU 光谱分类页给出 A 型约 7,500–11,000 K；9,845 K 的差异来自测量方法与资料取整，保留原量值。'
  originalQuantity:
    value: 9940
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  9,845 ± 64 K 是论文所报的拟合不确定度，主要来自角直径、总辐射通量与定标；不同角直径测量和不同资料会给出约 9,900–9,940 K
  的相近值，差异不属于实时温度变化。
visual:
  template: stellar-atmosphere
  profile: photosphere
  caption: 天狼星 A 光球
  note: >-
    对应文献模型得到的有效温度，不对应伴星天狼星 B；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#e0e5ff'
  symbol: Sirius A
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

天狼星是夜空最亮的恒星，实际是一个双星系统：主星 Sirius A 是蓝白色的 A1V 型主序星，伴星 Sirius B 是白矮星。[2] 这里说的温度只指 Sirius A 的整星有效温度，即由总辐射和角直径折算出的黑体温度，不是它的表面局部温度。[1] 天狼星 A 的半径约 1.71 倍太阳，光度约 25.4 倍太阳，温度只是这些基本参数之一。[2]

## 怎样测到

Davis 等用悉尼大学恒星干涉仪在 694.1 nm 测量天狼星 A 的临边昏暗角直径，得到 6.048 ± 0.040 毫角秒；再结合已发表测光与分光光度得到的总辐射通量，推得有效温度 9,845 ± 64 K。[1] 同一研究还把 SUSI 与 VLTI 的角直径结果加权平均，说明不同干涉口径会给出略有差异的中心值，单一结果仍需交叉核对。

## 数值与口径

9,845 K 落在 A 型星约 7,500–11,000 K 的温区内；Britannica 给出约 9,940 K，与论文值相差约 95 K，属于测量方法、角直径与取整差异，不是恒星突然变热或变冷。[1][2][3] ±64 K 只是论文的拟合不确定度，不包含不同资料之间的系统差异；9,845 K 与 9,940 K 的差异约 1%，属于测量系统差异而非短期变化。[2]

## 常见误解

第一，把天狼星 A 与天狼星 B 的温度互换；B 是白矮星，体积小、表面温度高，但总光度低。[2] 第二，看到天狼星很亮就以为它的温度最高；亮度由光度与距离共同决定，天狼星近而亮；白矮星伴星温度高，但发光面积小，总光度仍低。第三，把有效温度当成表面处处同温；A 型星也有自转、对流和磁场造成的局域差异。[1][3]

## 与其他温区的关系

9,845 K 低于织女星极区的模型值约 10,150 K，高于太阳表面的约 5,800 K，也高于红矮星的约 3,000 K。它和参宿七的约 11,000 K 同处 A–B 型过渡附近，但天狼星 A 是主序星，参宿七是蓝超巨星，温度和光度不能只看一个数。[2][3]
