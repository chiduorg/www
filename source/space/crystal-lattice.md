---
id: space.crystal-lattice
title: 晶格间距
titleEn: Crystal Lattice Spacing
dimension: length
category: 原子与分子
summary: >-
  晶格间距描述晶体中原子或晶面的周期性间隔；本页取硅金刚石结构中最近邻原子间距约 0.235 纳米，由 NIST 晶格参数 0.543102 纳米按
  a√3/4 换算。
quantity:
  value: 2.3517e-10
  unit: m
  measure: 原子间距
  approximate: true
displayValue: 约 0.235 nm（硅最近邻原子间距）
related:
  - space.graphene
  - space.carbon-nanotube
  - space.benzene
  - space.quantum-dot
  - space.aluminum-alloy
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: 'CODATA Value: lattice parameter of silicon'
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?asil'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: crystal
    url: 'https://www.britannica.com/science/crystal'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: >-
  采用硅的金刚石立方结构，晶格参数 a = 0.5431020511 纳米；最近邻原子间距按 a√3/4 换算为约 0.2352
  纳米。该值适用于硅晶体，不是所有晶体的通用原子间距；离子晶体、金属与分子晶体的最近邻距离不同。
uncertainty: >-
  NIST 晶格参数的相对不确定度约
  1.6×10⁻⁸，换算后的主要不确定性来自“最近邻”与“晶格常数”的口径差异；不同晶面、温度与缺陷会使局部间距偏离。该值不是对所有晶体都适用的通用常数。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮新建条目；用 WebFetch 打开 NIST CODATA 硅晶格参数页，核对 a = 5.431020511×10⁻¹⁰ 米及不确定度。
    - 用 WebFetch 打开 Britannica 晶体页，核对晶体是原子按确定周期性格局排列、晶胞与晶格常数概念。
    - 最近邻间距由金刚石结构 a√3/4 换算，正文说明它特定于硅而非通用值。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "crystal-lattice"
  scene: "space.object"
  caption: "晶格间距 · 硅最近邻约 0.235 nm"
  note: "原子球、晶胞边框与周期排布为示意；标线表示最近邻核间距，不是晶格常数；非按比例，非观测重建。"
  color: "#a9c6d8"
  variant: "diamond"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
---
## 它是什么

晶格间距是晶体中原子、离子或晶面按周期性重复排列时相邻单元之间的距离。[2] 它不是一个放之四海皆准的常数：不同晶体结构、不同元素与不同晶面都有自己的间距。本页用硅晶体中最近邻原子的核间距约 0.235 纳米作为具体例子，而不是宣称所有晶体的原子间距都相同。

## 怎样知道

晶格参数由 X 射线衍射等方法测定：晶面间距通过布拉格定律从衍射角反推，晶胞参数再与原子位置模型结合。[2] NIST CODATA 给出硅的晶格参数 a = 5.431020511×10⁻¹⁰ 米，相对不确定度约 1.6×10⁻⁸。[1] 硅具有金刚石立方结构，最近邻原子沿体对角线方向的四分之一处，距离为 a√3/4，计算得到约 2.3517×10⁻¹⁰ 米。[1] Britannica 说明晶体由原子按确定周期性格局排列，并用晶胞描述其基本重复单元。[2]

## 数值与口径

0.2352 纳米等于 2.352×10⁻¹⁰ 米。它描述硅晶体中最近邻原子的核间距，不是晶格常数 a，也不是晶面间距 d。[1] 晶格常数 a 是晶胞边长，约 0.543 纳米；最近邻距离比它小，二者相差约 2.3 倍。[1][2] 若换成其他晶体，例如离子晶体或金属，最近邻距离由各自的晶格常数与结构决定，不能直接套用硅的数值。[2]

## 常见误解

常见误解之一是把“晶格间距”当成所有晶体通用的 0.2–0.3 纳米常数；它必须与具体材料、结构和晶面绑定。[2] 另一个误解是把晶格常数 a 与最近邻原子间距混为一谈；硅的 a 约 0.543 纳米，而最近邻距离约 0.235 纳米。[1] 还有人把晶面间距 d 与原子间距等同；X 射线衍射直接量的是晶面间距，换算到原子间距需要结构模型。

## 与其他尺度的关系

0.235 纳米处在原子间距的常见范围，与苯环碳间距、石墨烯层间距同一量级，却远小于晶粒、量子点与器件尺寸。[1][2] 晶格间距是“原子如何堆成固体”的基本尺度：它决定了 X 射线衍射峰的位置，也影响声子、电子能带与力学性质。继续阅读石墨烯、碳纳米管、苯分子与量子点，可比较分子内键长、层间距与晶体周期性的不同口径。
