---
id: temperature.supernova
title: 核心坍缩超新星温标
titleEn: Core-collapse supernova temperature scale
dimension: temperature
category: 恒星与宇宙极端
summary: 大质量恒星核心坍缩时可以出现约千亿度的高温量级。这里比较的是坍缩核心， 不把它称为整片超新星残骸或可见光表面的统一温度，也不由此概括所有重元素的起源。
quantity:
  value: 100000000000
  unit: K
  measure: 核心坍缩过程的高温量级参考
  approximate: true
  measureLabel: 核心坍缩过程的高温量级参考
displayValue: 约 10¹¹ K（坍缩核心量级）
related:
  - temperature.neutron-star-core
  - temperature.type-ia-supernova
  - temperature.hypernova
  - temperature.kilonova_temp
  - temperature.silicon-burning
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: Supernovas & Supernova Remnants
    url: 'https://chandra.harvard.edu/xray_sources/supernovas.html'
    publisher: NASA Chandra X-ray Center
    accessed: '2026-11-06'
  - title: supernova
    url: 'https://www.britannica.com/science/supernova'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'Chandra X-Ray Observatory Field Guide: Supernovas and Supernova Remnants'
    url: 'https://www.chandra.si.edu/xray_sources/pdf/supernovae.pdf'
    publisher: NASA Chandra X-ray Center
    accessed: '2026-11-06'
legacy:
  id: supernova
  icon: "\U0001F4AB"
  relatedLabels: 重元素合成、r过程、中子星、黑洞、引力波、宇宙线、硅燃烧阶段、碳核聚变、可观测宇宙、暗能量、中子星表面、元素周期表
conditions: >-
  大质量恒星铁核坍缩阶段的理论与观测约束；对象为坍缩核心，不是可见光光球或膨胀遗迹； 核心处于非热平衡坍缩，温度随时间和半径变化；10¹¹ K
  为取整量级，机构说明常只写“数十亿度”。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - Chandra 超新星资料把核心坍缩后的升温描述为数十亿度，并区分 II 型、Ib/Ic 型与 Ia 型机制。
    - Britannica 说明核心坍缩形成中子星或黑洞；Chandra PDF 同样只给“数十亿度”量级，故 10¹¹ K 属取整偏高的量级参考。
  originalQuantity:
    value: 100000000000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 10¹¹ K 是坍缩核心的取整量级参考；公开机构说明常只写“数十亿度”，对应 10⁹–10¹⁰ K 量级，
  本条坐标可能偏高，保留原值仅供数量级比较，不能当作精确测温结果。
visual:
  template: stellar-event
  profile: supernova
  caption: 核心坍缩超新星模型
  note: >-
    量值对应坍缩核心阶段，不能解读成可见膨胀云的光球温度或所有爆发的实测值；核心与激波结构为示意，
    非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: extreme
  color: '#b8c1f2'
  symbol: Core collapse
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

核心坍缩超新星发生在大质量恒星耗尽核燃料之后。铁核无法继续通过聚变释放能量，失去支撑后迅速坍缩，随后反弹并向外抛射物质，留下中子星或黑洞。[1] 这里讨论的温度对象是坍缩中的核心，而不是我们后来看到的膨胀气体云，也不是超新星遗迹的整体温度。核心被压缩到极高密度，中微子带走大量能量，整个过程远离热平衡。

## 怎样测到或为何是推断

超新星可以被光学望远镜、X 射线卫星和中微子探测器观测到，但坍缩核心本身被外层物质遮蔽。1987A 超新星的中微子暴提供了核心坍缩的直接证据，温度则要依靠坍缩模型、物态方程和中微子输运计算来推断。[2] Chandra 的资料描述，物质落到新生中子星上时温度可升到数十亿度，随后发生爆发。[3] 这些数字来自模型与间接观测的组合，不是对核心的直接温度计读数。不同类型超新星的能源机制也不同，不能把热核爆炸与核心坍缩混为一谈。

## 数值与口径

本条采用约 10¹¹ K 作为坍缩核心的量级坐标，只保留一位有效数字。它不是可见光光球的温度，后者通常只有几千到几万 K；也不是整个遗迹的均匀温度。核心温度随坍缩阶段、半径和质量变化，中微子发射会使热量不断转移。需要说明的是，Chandra 与 Britannica 的公开说明多写“数十亿度”，对应 10⁹–10¹⁰ K 量级，而本条沿用 10¹¹ K 的取整坐标，可能偏高。[1][3]

## 常见误解

第一，把 10¹¹ K 当成超新星可见表面的温度；我们看到的明亮光球要冷得多。第二，把所有超新星都当成同一种机制；Ia 型来自白矮星热核爆炸，核心坍缩型来自大质量恒星。[1] 第三，把爆发总能量直接换算成温度；能量分布在激波、抛射物、中微子和辐射中，不能简单用一个温度概括。第四，把重元素的全部来源都归给超新星；不同元素和事件需要各自的核合成证据。[2]

## 与其他温区的关系

10¹¹ K 远高于太阳核心约 1.57×10⁷ K、中子星表面约 2×10⁶ K 和白矮星表面 25,000 K。它低于夸克—胶子等离子体约 1.8×10¹² K 的理论温标，也远低于电弱能标与普朗克温度。与千新星光谱拟合出的约 5,500 K 相比，两者相差多个数量级，因为一个是坍缩核心，另一个是抛射物光球。比较这些数字时，对象和证据类型比大小本身更重要。[1][3]
