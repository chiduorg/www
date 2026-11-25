---
id: temperature.laser-cooling
title: 激光冷却
titleEn: Laser cooling
dimension: temperature
category: 极低温
summary: >-
  激光冷却利用光子与原子之间的动量交换降低气体温度。多普勒冷却在钠实验中约 240 μK， 亚多普勒冷却可到亚微开尔文；本条取约 1 μK
  作为实验达到温度参考，不把它当作理论下限。
quantity:
  value: 0.000001
  unit: K
  measure: 激光冷却实验达到温度参考
  approximate: true
  measureLabel: 激光冷却实验达到温度参考
displayValue: 约 1 μK（10⁻⁶ K）
related:
  - temperature.evaporative-cooling
  - temperature.bose-einstein
  - temperature.absolute-zero
  - space.atom
  - mass.electron
  - time.present
reviewStatus: reviewed
sources:
  - title: 'The Nobel Moment: Bill Phillips'
    url: >-
      https://www.nist.gov/nist-and-nobel/bill-phillips/nobel-moment-bill-phillips
    publisher: NIST
    accessed: '2026-11-06'
  - title: Quenched narrow-line cooling of neutral calcium
    url: 'https://tf.nist.gov/ofm/calcium/Quenchedcooling.htm'
    publisher: NIST Time and Frequency Division
    accessed: '2026-11-06'
  - title: >-
      Laser cooling 88Sr to microkelvin temperature with an integrated-photonics
      system
    url: 'https://arxiv.org/abs/2404.13210'
    publisher: 'Ferdinand et al., arXiv (2024)'
    accessed: '2026-11-06'
  - title: "Thirty years of Bose-Einstein Condensates"
    url: "https://jila.colorado.edu/news-events/articles/thirty-years-bose-einstein-condensates"
    publisher: "JILA, University of Colorado Boulder"
    accessed: '2026-11-24'
  - title: "Bose-Einstein condensate"
    url: "https://www.britannica.com/science/Bose-Einstein-condensate"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
conditions: 稀薄原子气体的激光冷却实验；不同原子、跃迁线宽、光强、失谐与磁场给出不同温度，多普勒冷却通常在毫开尔文到数百微开尔文，亚多普勒冷却可进入微开尔文。
review:
  method: source-check
  date: '2026-11-08'
  notes:
    - NIST 回顾给出钠光学黏胶 240 μK 的多普勒极限、40 μK 的亚多普勒结果、2.5 μK 与 0.7 μK 的后续实验。
    - NIST 钙实验页说明 423 nm 跃迁的纯多普勒极限约 1 mK；arXiv 2404.13210 摘要给出锶红磁光阱约 2 μK。
    - 正文取约 1 μK 为亚多普勒实验达到温度的圆整参考，并区分实验值与理论极限。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  1 μK 是亚多普勒激光冷却实验达到温度的圆整量级参考；多普勒极限随跃迁线宽变化（钠约 240 μK，钙约 1 mK），
  实际读数还受光强、失谐、磁场、原子种类和测量方法影响。它不是所有激光冷却实验的共同温度，也不是理论下限。
visual:
  template: cryo-instrument
  profile: laser
  caption: 激光冷却原子云
  note: >-
    原子云、激光束与光学黏胶为解释性示意，非按比例，也不是实验观测重建；温度对应原子气体平动温度，不是真空腔整体温度。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#9cc7e8'
  symbol: Laser cooling
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

激光冷却利用激光光子与原子之间的动量交换，把原子气体的热运动减慢。原子反复吸收迎面而来的光子、再向任意方向自发辐射，平均每次循环都损失一点前向动量，速度分布因此变窄。[1] 它冷却的是原子气体的平动温度，不是把整台装置或容器降到同一温度；激光本身也不等于“制冷剂”。

## 怎样测到

1985 年，Chu 等用三对相向激光形成“光学黏胶”，测得钠原子约 240 μK，这接近当时认为的多普勒冷却极限。[1] Phillips 团队改进测量后发现可低至 40 μK，随后巴黎小组报道 2.5 μK，1995 年 Phillips 团队达到 0.7 μK。[1] 亚多普勒机制使温度突破多普勒极限；不同跃迁线宽给出不同极限，例如钙的 423 nm 跃迁约 1 mK。[2] 2024 年，锶原子在集成光子学磁光阱中报道约 2 μK。[3]

## 数值与口径

本条取约 1 μK 作为激光冷却实验达到温度的圆整参考，即 10⁻⁶ K、0.001 mK。它接近亚多普勒冷却的冷端；多普勒极限随跃迁线宽变化，从钠的约 240 μK 到钙的约 1 mK，因此 1 μK 不适用于所有原子与跃迁。[1][2] 温度通常由释放后的飞行时间成像或速度分布拟合得到，读数依赖光强、失谐、磁场和测量方法；它是实验达到值，不是理论下限。

## 常见误解

第一，把激光冷却当成无限制的“激光冰箱”；激光冷却仍受自发辐射、加热和碰撞限制，通常只能到微开尔文，进一步降温要靠蒸发冷却。[3] 第二，把 1 μK 当成绝对零度；它仍比 0 K 高约 10⁻⁶ K。第三，把多普勒极限当成不可突破的定律；亚多普勒机制正是对它的修正。[1] 第四，把原子云温度当成整个真空腔的温度。

## 与其他温区的关系

1 μK 比玻色—爱因斯坦凝聚的约 170 nK 高，比稀释制冷的约 10 mK 低四个量级；它远低于宇宙微波背景的 2.725 K，也远高于 0 K。激光冷却是冷原子实验的第一级，蒸发冷却再把温度推进到纳开尔文。[1][3]

## 多普勒冷却与亚多普勒

激光频率略低于原子跃迁时，迎面运动的原子更接近共振，优先吸收反向光子，从而减速；这就是多普勒冷却。[1] 它有一个温度下限，由跃迁线宽决定。亚多普勒机制利用偏振梯度或速度选择性相干，能突破这个下限，把温度推进到微开尔文甚至更低。[2] 两种机制不是同一种“激光越强越冷”。

## 五轴对照

在温度轴，激光冷却约 1 μK；在空间轴，原子被激光与磁场限制在毫米级区域；在质量轴，原子质量影响反冲温度；在时间轴，冷却与测量按毫秒计。温度、约束与时间共同决定实验。[1][3]

## 多普勒冷却与亚多普勒

激光频率略低于原子跃迁时，迎面运动的原子更接近共振，优先吸收反向光子而减速，这就是多普勒冷却。它有一个由跃迁线宽决定的下限；亚多普勒机制利用偏振梯度突破这个下限，把温度推进到微开尔文。两者不是“激光越强越冷”。[1][S2]

## 读数的口径与换算

本条采用的量是 约 1 μK（10⁻⁶ K），口径是 激光冷却实验达到温度参考。温度是强度量，读数依赖温标、测点与热平衡；同一对象的不同部位、不同时刻可以有不同温度。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（JILA, University of Colorado Boulder）、[5]（Encyclopaedia Britannica） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
