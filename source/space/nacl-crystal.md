---
id: space.nacl-crystal
title: NaCl 晶体
titleEn: Sodium Chloride Crystal
dimension: length
category: 原子与分子
summary: NaCl 是岩盐结构离子晶体，Na–Cl 最近邻距离约 0.282 nm；晶胞边长 a 约 0.564 nm，是最近邻距离的两倍。
quantity:
  value: 2.82e-10
  unit: m
  measure: Na–Cl 最近邻距离
  approximate: true
displayValue: 约 0.282 nm（Na–Cl 最近邻距离）
related:
  - space.crystal-lattice
  - space.diamond-unit-cell
  - space.atom
  - space.water-molecule
  - space.graphene
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: 'Chimie du solide — Description de NaCl'
    url: 'https://www.iutenligne.net/rsc/rsc-public/chimie/valls/chimie-du-solide%20-%20copie/binaires_nacl.htm'
    publisher: IUT en ligne / Université d’Aix-Marseille (Robert Valls)
    accessed: '2026-11-07'
  - title: Evolving few-ion clusters of Na and Cl
    url: 'https://www.fisica.unam.mx/karo/home/papers/ajp66s1998s231.pdf'
    publisher: American Journal of Physics / Universidad Nacional Autónoma de México
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  取常温常压下的岩盐结构 NaCl；0.282 nm 是 Na–Cl 最近邻核间距，0.564 nm 是立方晶胞边长 a。
  二者不是同一个量；该值不是钠离子或氯离子的单独半径，也不是溶液中水合离子的间距。
uncertainty: >-
  r0 = 2.82 Å 由电子衍射与晶体密度两种独立方法支持；晶胞边长 a = 2r0 是岩盐结构的几何关系。
  温度、缺陷与表面弛豫会使局部距离略偏，故标为近似。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 用 WebFetch 打开 IUT en ligne 的 NaCl 晶体页，核对 a = 564 pm、d[Na–Cl] = 282 pm、6:6 八面体配位。
    - 用 WebFetch 打开 American Journal of Physics 论文 PDF，核对电子衍射给出的 Na–Cl 最近邻距离 2.82 Å。
    - 正文区分最近邻距离、晶格常数与晶胞边长，并说明离子晶体中没有独立的 NaCl 分子。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://www.iutenligne.net/rsc/rsc-public/chimie/valls/chimie-du-solide%20-%20copie/binaires_nacl.htm；https://www.fisica.unam.mx/karo/home/papers/ajp66s1998s231.pdf），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: crystal-lattice
  variant: nacl
  scene: space.object
  caption: NaCl 晶体 · Na–Cl 最近邻约 0.282 nm
  note: 离子球、晶胞边框与周期排布为示意；标线表示最近邻核间距，不是晶胞边长；示意，非按比例，非观测重建。
  color: '#a9c6d8'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 纳米
conceptGroup: crystal
---
## 它是什么

氯化钠就是食盐，由钠离子和氯离子按岩盐结构交替排列成三维晶体。[1] 每个离子被六个异号离子包围，形成八面体配位。[2] 本页用约 0.282 纳米表示 Na–Cl 最近邻距离，即一个钠离子到最近氯离子中心的距离，而不是整个晶胞的边长。

## 怎样知道

电子衍射实验给出常温常压下的 Na–Cl 最近邻距离 r₀ = 2.82 埃；晶体的密度与结构模型给出独立的第二种估计，结果一致。[2] 岩盐结构中，离子沿立方轴方向交替排列，因此晶胞边长 a 等于两倍最近邻距离，即约 5.64 埃，也就是 0.564 纳米。[1] 这一倍数是几何关系，不是另一次测量。

## 数值与口径

2.82 埃等于 0.282 纳米，描述的是异号离子的核间距；5.64 埃等于 0.564 纳米，描述的是晶胞边长。[1][2] 最近邻距离与晶胞边长相差两倍，二者不能互换。若把 0.282 纳米叫作“NaCl 分子直径”也不准确：离子晶体中没有独立的 NaCl 分子，只有按周期重复的离子网络。

## 常见误解

常见误解之一是把晶格常数 0.564 纳米当成 Na–Cl 距离；最近邻距离只有它的一半。[2] 另一个误解是把 0.282 纳米当成 Na⁺ 或 Cl⁻ 的离子半径；半径之和约等于这个距离，但单个离子的边界取决于定义。[1] 还有人把晶体中的最近邻距离与溶液中的水合离子间距混用，水合层会显著改变有效距离。

## 与其他尺度的关系

0.282 纳米与金刚石、硅等晶体中的原子间距同一量级，却比分子内的共价键长。[1][2] 它把“离子键长度”与“晶胞周期”连接起来：同样的 0.282 纳米重复两次，才构成 0.564 纳米长的晶胞边。继续阅读晶格间距与金刚石晶胞，可比较最近邻距离、晶格常数与晶胞边长的不同口径。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 2.82×10⁻¹⁰ 米，换算后是 0.282 纳米；约 3.52×10⁻⁶ 根头发丝直径（8×10⁻⁵ 米）。这把尺子只改写单位，不改变量值；它把本条固定在空间轴的 10⁻¹⁰ 量级附近。

读图时先看量级，再看倍数：10⁻¹⁰ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
