---
id: temperature.a-type-star
title: A型星表面
titleEn: A-type stellar temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  A 型星是氢线很强的恒星类别。教学分类表把这一温区放在约 7,500–11,000 K， 本条目沿用约 9,500 K 的尺度锚点，并保留原记录的
  7,500–10,000 K 区间； 它不是某颗星的实测值，也不是整类恒星的统一温度。
quantity:
  value: 9500
  unit: K
  measure: A 型星温区内的示例参考
  approximate: true
  measureLabel: A 型星温区内的示例参考
  uncertainty: 1250
  uncertaintyType: 类别内部离散与区间取整
  range:
    min: 7500
    max: 10000
    unit: K
displayValue: '约 9,500 K（温区示例）'
related:
  - temperature.vega-surface
  - temperature.sirius-surface
  - temperature.f-type-star
  - temperature.sun-surface
  - temperature.white-dwarf-surface
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 'The Spectral Sequence'
    url: 'https://openstax.org/books/astronomy-2e/pages/17-3-the-spectral-sequence'
    publisher: 'OpenStax Astronomy 2e（CC BY 4.0）'
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
  id: a-type-star
  icon: ✨
  relatedLabels: 织女星表面、F型星、天狼星、白矮星表面
conditions: >-
  对象为主序 A 型星（约 A0–A9）；温度指光球有效温度，由光谱分类、视差、角直径与测热辐射流结合大气模型拟合得到。 教学表给出约
  7,500–11,000 K，本条的 9,500 K 是区间内锚点，range 保留原记录的 7,500–10,000 K；
  不同资料对类别上边界的取法不同，且有效温度不代表恒星表面每一局部的温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      核对 NMSU 光谱分类页：A 型约 7,500–11,000 K，代表值 9,500 K；Rochester 表 A0V 9,700 K、A5V
      8,100 K。
    - 'NASA Space Math 光谱分类页用织女星约 10,000 K 说明 A 型，并列出 O 型约 30,000 K 的冷端。'
    - '保留原 9,500 K 锚点与 7,500–10,000 K range，不把类别边界写成锐利统一值。'
  originalQuantity:
    value: 9500
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '9,500 K 是类别区间内的锚点，不是单颗恒星的有效温度测量；A0 至 A9 的类别内部离散、资料边界差异与取整合计可达约千开尔文量级。'
visual:
  template: stellar-atmosphere
  profile: photosphere
  caption: A 型星光球参考
  note: >-
    以有效温度和光谱类别作示意，不对应某颗 A 型星的局部实测；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#dce5ff'
  symbol: A
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

A 型星是光谱分类中的一类恒星，特征是中性氢吸收线很强，钙离子线到较晚亚类才明显。[1] 它的“表面温度”通常指有效温度，即把恒星总辐射折算成同半径黑体所得到的温度，不等于光球某一局部点的读数。织女星就是常用例子。[2] A 型的共同点是氢线强，但亚类从 A0 到 A9 的谱线细节连续变化，说明类别内部仍有温度梯度。[1]

## 怎样测到

分类先把恒星光谱与标准光谱比较，确定光谱型；再结合视差、干涉角直径和测热辐射流，用大气模型拟合有效温度。[1] 若没有可靠的角直径，测热辐射流只能给出表面通量，温度仍要依赖模型半径与消光假设。[1] 教学资料把 A 型放在约 7,500–11,000 K，并给出约 9,500 K 的代表值。[1] 另一份材料用织女星约 10,000 K 说明该类的量级。[2]

## 数值与口径

9,500 K 是尺度锚点，对应的温区约为 7,500–10,000 K。这个锚点不是某颗 A 型星的实测值，也不是整类恒星的统一温度；A0 与 A9 的有效温度可差数千开尔文，资料对类别上边界也有 10,000 与 11,000 K 两种写法。[1][3] 把 9,500 K 放到现代恒星抽样中，它只是 A 型中段的一个取整点，不能替代逐星拟合。[3]

## 常见误解

第一，把光谱型当成精确温度计；同一类型内不同亚类温度不同。第二，把有效温度当成表面处处同温；自转、对流和磁场都会造成局域差异。第三，看到蓝白色就以为 A 型已接近最热恒星；它远低于 O 型的数万开尔文。[3]

## 与其他温区的关系

9,500 K 高于太阳表面的约 5,800 K，低于 O 型代表温度的约 40,000 K，也与 F 型的约 6,000–7,500 K 相接。光谱分类是一条连续温区上的分段，边界随资料和判据变化，不能用一条锐利刻线理解。[1][3]
