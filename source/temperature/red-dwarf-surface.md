---
id: temperature.red-dwarf-surface
title: 红矮星表面
titleEn: M-dwarf temperature examples
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  红矮星属于 M 型主序星，并不共享一个表面温度。教学表把 M 型放在约 2,500–3,900 K， 大学序列表给出 M0V 约 3,850 K、M5V 约
  3,060 K、M7V 约 2,680 K； 本条目保留原记录的 2,400–3,900 K 区间，并以 3,000 K 作尺度锚点。
quantity:
  value: 3000
  unit: K
  measure: 红矮星特征表温区示例
  approximate: true
  measureLabel: 红矮星特征表温区示例
  uncertainty: 750
  uncertaintyType: 类别内部离散与区间取整
  range:
    min: 2400
    max: 3900
    unit: K
displayValue: '约 2,400–3,900 K（轴示例3,000 K）'
related:
  - space.sun
  - mass.sun
  - temperature.coldest-brown-dwarf
  - temperature.sun-surface
  - temperature.f-type-star
  - temperature.a-type-star
reviewStatus: reviewed
sources:
  - title: The Spectra of Stars (and Brown Dwarfs)
    url: 'https://openstax.org/books/astronomy-2e/pages/17-3-the-spectra-of-stars-and-brown-dwarfs'
    publisher: OpenStax Astronomy 2e（CC BY 4.0）
    accessed: '2026-11-07'
  - title: >-
      A Modern Mean Dwarf Stellar Color and Effective Temperature Sequence,
      version 2022.04.16
    url: 'https://www.pas.rochester.edu/~emamajek/EEM_dwarf_UBVIJHK_colors_Teff.txt'
    publisher: 'University of Rochester, E. Mamajek'
    accessed: '2026-11-06'
  - title: red dwarf star
    url: 'https://www.britannica.com/science/red-dwarf-star'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: red-dwarf-surface
  icon: "\U0001F534"
  relatedLabels: 太阳表面、F型星、A型星、褐矮星、氘聚变
conditions: >-
  对象为 M 型主序红矮星（约 M0–M9）；温度指光球有效温度，由光谱分类、测光、视差与大气模型拟合得到。 教学表给出 M 型约 2,500–3,900
  K，大学序列表给出 M0V 3,850 K、M5V 3,060 K、M7V 2,680 K； range 保留原记录的 2,400–3,900
  K，下界对应更晚型与较旧资料，不能当成全类严格极限。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 NMSU 光谱分类页：M 型约 2,500–3,900 K，并注明该带同时包含红矮星与红巨星。'
    - >-
      核对 Rochester 序列表：M0V 3,850 K、M5V 3,060 K、M6V 2,810 K、M7V 2,680
      K，支持类别内部的下降趋势。
    - >-
      Britannica 红矮星条目说明其质量为约 0.08–0.6 太阳质量、是数量最多的一类恒星；保留原 3,000 K 锚点与
      2,400–3,900 K range。
  originalQuantity:
    value: 2500
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  3,000 K 是 M 型温区内的锚点，不是全类均值；M0 至晚 M 型的有效温度可相差约一千多开尔文，原记录下界 2,400 K 与常用教学下界
  2,500 K 之间也有资料差异。
visual:
  template: stellar-atmosphere
  profile: photosphere
  caption: 红矮星光球示例
  note: >-
    类型温区中的代表点，有效温度不能直接等同局部光球层温度；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#f0a780'
  symbol: M dwarf
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

红矮星是质量约 0.08–0.6 倍太阳质量的主序星，光谱型属于 M 型，是宇宙中数量最多的一类恒星。[3] 它的“表面温度”指光球有效温度，即整颗星按总辐射折算出的黑体温度，不是某个局部斑点或色球层的温度。[1] M 型光谱既包含红矮星，也包含红巨星，单看温度不能判断半径与演化阶段。[1]

## 怎样测到

先由光谱中的分子带和氢线强度确定 M 型及亚类，再结合测光、视差和大气模型拟合有效温度。[1] 教学表把 M 型放在约 2,500–3,900 K；大学序列表给出 M0V 约 3,850 K、M5V 约 3,060 K、M7V 约 2,680 K，显示越晚型越冷。[2] 晚型红矮星常被磁场斑点污染，拟合时需把斑点覆盖率与光球温度分开。[2]

## 数值与口径

3,000 K 是尺度锚点，对应的温区约为 2,400–3,900 K；它接近 M5V 的量级，但不是整类恒星的均值。2,400 K 的下界对应更晚型与较旧资料，和常用教学下界 2,500 K 有小差异。[1][2] 红矮星表面常有强磁场斑点，测得的“有效温度”与未斑点光球温度也不完全相同。3,000 K 只是便于定位的取整值，M5V 附近约 3,060 K，M7V 已降到约 2,680 K。[2]

## 常见误解

第一，把所有红矮星都设成 2,500 K 或 3,000 K；实际 M0 至 M9 的温度一路下降。第二，把低温直接等同于生命条件；宜居性还取决于行星轨道、潮汐锁定、耀斑和大气。第三，把红矮星当成小号太阳；它们的对流结构、磁活动和寿命都与太阳不同。[2][3] 也不要把 2,400 K 的下界当作所有红矮星都低于 2,500 K，资料边界并不相同。

## 与其他温区的关系

3,000 K 低于太阳表面的约 5,800 K，也低于 F 型与 A 型星；它高于超冷褐矮星的约 250 K，正好处在恒星与褐矮星之间的低温边界附近。M 型温区同时包含红矮星和红巨星，判断对象还要看亮度和半径，而不能只看温度。[1][3]
