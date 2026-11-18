---
id: temperature.aurora
title: 极光
titleEn: Aurora excited-state temperature reference
dimension: temperature
category: 极高温
summary: >-
  极光是高层大气中氧、氮被高能电子激发后发出的光，不是热平衡下的环境气温。强极光中受热电子和激发态 可对应约 10,000 K 量级的等效温度；这里取
  10,000 K，并明确它是非热平衡的激发态/电子温度参考。
quantity:
  value: 10000
  unit: K
  measure: 极光激发态电子等效温度（非热平衡）
  approximate: true
  measureLabel: 极光激发态电子等效温度（非热平衡）
displayValue: '约 10,000 K（约 9,727 ℃，非热平衡）'
related:
  - temperature.thermosphere
  - temperature.lightning
  - temperature.fusion-reactor-plasma
  - space.atmosphere
  - temperature.sun-surface
reviewStatus: reviewed
sources:
  - title: >-
      Excitation of tall auroral rays by ohmic heating in field-aligned current
      filaments at F region heights
    url: 'https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2002JA009423'
    publisher: 'AGU / Journal of Geophysical Research: Space Physics'
    accessed: '2026-11-06'
  - title: What Causes an Aurora?
    url: >-
      https://svs.gsfc.nasa.gov/vis/a000000/a004900/a004934/Aurora_Infographic.pdf
    publisher: NASA Goddard Space Flight Center
    accessed: '2026-11-06'
conditions:
  medium: 热层/电离层中的稀薄氧氮气体与等离子体
  height: 约 80–200 km，红色与高射线可延伸到更高处
  season: 与太阳活动、地磁暴和夜侧观测条件有关
  basis: 光谱观测、探空火箭原位测量与等离子体模拟
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 'AGU 论文的模拟给出，强场向电流的欧姆加热可使上部 F 区电子温度超过 10,000 K，并以此解释高红色极光射线。'
    - NASA 的极光科普图说明太阳风粒子沿磁场进入高层大气，与氧、氮碰撞并把能量以光的形式释放。
    - '正文把 10,000 K 限定为激发态/受热电子等效温度，明确它不是环境气温，也不是热平衡下的中性气体温度。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  10,000 K 是非热平衡的激发态/电子等效温度参考，不是环境气温。极光中电子、离子和中性气体可以有不同的 能量分布，电子温度可从数千开尔文升到
  10,000 K 以上，而中性气体仍冷得多；颜色、高度和太阳活动都会改变观测值。
visual:
  template: radiation-field
  scene: temperature.object
  caption: 极光激发态发光示意
  note: 极光形态、颜色分层与粒子轨迹均为解释性示意，非按比例、非观测重建； 画面不代表真实极光照片或某一地点的光谱测量。
zone: 极高温
tags:
  - 极高温
  - 温度
  - 日常
---
## 它是什么

极光不是一层被加热到几千摄氏度的空气，而是高层大气中的氧、氮原子或分子被高能粒子撞击后进入激发态，再以光子形式释放能量。[2] 因此，极光的“温度”通常指激发态或受热电子的等效温度，而不是热平衡下的环境气温。这里取 10,000 K 作为强极光电子温度的量级参考，并明确它是非热平衡描述。

## 怎样知道

极光温度可通过光谱、雷达、探空火箭和等离子体模拟推断。AGU 的一项模拟研究指出，强场向电流的欧姆加热能把上部 F 区电子加热到超过 10,000 K，从而产生可见的红色极光射线。[1] NASA 的科普图则说明，太阳风粒子沿地球磁场进入高层大气，与氧、氮碰撞，把额外能量以光释放。[2] 光谱线宽和强度可以反推电子能量分布，但无法用一个普通温度计直接测量整片极光。

## 数值与口径

10,000 K 等于约 9,727 ℃。这个数值描述的是受热电子或激发态所对应的能量尺度，不是整片极光气体的热平衡温度。[1] 在极光中，电子、离子和中性气体的碰撞频率不同，能量分布也不一致：电子可以很“热”，中性气体却仍接近热层背景温度；同一高度不同种类粒子的温度也可能不同。因而 10,000 K 只能作为量级参考，必须连同“非热平衡”“激发态”一起理解。

## 常见误解

第一，把 10,000 K 当作极光发生时头顶的气温；实际中性气体远没有这么热，极光也不是热辐射。第二，认为极光会像火焰一样烤热物体；它的能量主要以光子形式释放，通量很低。第三，把极光只归因于“冷空气”；极光出现在热层和电离层，与地面气温没有直接关系。第四，把颜色当成温度计；绿色、红色和蓝色主要取决于被激发的气体种类与高度，而不是单一温度。[2]

## 与其他温区的关系

10,000 K 高于太阳表面的约 5,772 K，也高于钨的熔点，却低于聚变等离子体的百万开尔文量级。它和热层的 500–2,000 K 背景温度不是同一口径：热层温度描述稀薄气体的平均动能，极光的 10,000 K 描述受热电子或激发态的能量尺度。[1] 与闪电的通道温度相比，极光的光度高但气体密度极低，因而不能把“温度高”直接等同于“热量大”。
