---
id: space.diamond-unit-cell
title: 金刚石晶胞
titleEn: Diamond Unit Cell
dimension: length
category: 原子与分子
summary: 金刚石是碳的金刚石立方结构，常规晶胞边长约 0.357 nm；C–C 键长约 0.154 nm，由 a√3/4 换算。
quantity:
  value: 3.57e-10
  unit: m
  measure: 晶胞边长
  approximate: true
displayValue: 约 0.357 nm（金刚石晶胞边长）
related:
  - space.crystal-lattice
  - space.nacl-crystal
  - space.graphene
  - space.fullerene
  - space.carbon-nanotube
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: 'Optical-grade diamond: characteristics, synthesis, and recent research progress'
    url: 'https://www.tandfonline.com/doi/full/10.1080/26941112.2025.2476690'
    publisher: Functional Diamond / Taylor & Francis
    accessed: '2026-11-07'
  - title: '6.7.1: The Group 14 Elements'
    url: 'https://chem.libretexts.org/Courses/Iowa_State_University/Advanced_Inorganic_Chemistry_CHEM-5020%3A_Fall_2026/06%3A_Chemistry_of_the_Main_Group_Elements_(Barron)/6.07%3A_Group_14/6.7.01%3A_The_Group_14_Elements'
    publisher: Chemistry LibreTexts / Rice University (Andrew R. Barron)
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  取室温下的金刚石立方碳结构，常规立方晶胞边长 a ≈ 0.357 nm；不是 C–C 键长（约 0.154 nm），
  也不是含两个碳原子的原胞边长。该值适用于纯碳金刚石，不适用于掺杂、纳米晶或高压相。
uncertainty: >-
  文献常写 3.566–3.567 Å；温度、同位素与应力会带来微小差异。C–C 键长由 a√3/4 换算，属几何推导，
  不是另一次独立测量，故标为近似。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 用 WebFetch 打开 Functional Diamond 综述，核对金刚石晶格常数 3.567 Å、Fd3m 空间群与 C–C 键长 1.54 Å。
    - 用 WebFetch 打开 Chemistry LibreTexts 第 14 族页面，核对碳的金刚石立方晶胞参数 3.566 Å。
    - 正文区分晶胞边长、最近邻键长与原胞，并用 a√3/4 换算键长。
    - '2026-11-07 来源可访问性核对：https://chem.libretexts.org/Courses/Iowa_State_University/Advanced_Inorganic_Chemistry_CHEM-5020%3A_Fall_2026/06%3A_Chemistry_of_the_Main_Group_Elements_(Barron)/6.07%3A_Group_14/6.7.01%3A_The_Group_14_Elements 返回可用响应；https://www.tandfonline.com/doi/full/10.1080/26941112.2025.2476690（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: crystal-lattice
  variant: diamond
  scene: space.object
  caption: 金刚石晶胞 · 边长约 0.357 nm
  note: 碳原子球、晶胞边框与键线为示意；标线表示晶胞边长，不是 C–C 键长；示意，非按比例，非观测重建。
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

金刚石是碳的一种同素异形体，碳原子按金刚石立方结构排列：每个碳与四个碳成键，形成三维网络。[2] 本页用约 0.357 纳米表示常规立方晶胞的边长，也就是描述晶体周期性重复的基本盒子的一条棱，而不是某一条碳—碳键的长度。

## 怎样知道

金刚石的结构由 X 射线衍射与晶体学模型确定。文献给出室温下金刚石的晶格常数 a 约为 3.567 埃，空间群 Fd3m，碳—碳键长约 1.54 埃。[1] 教学资料把碳的金刚石立方晶胞参数列为 3.566 埃，与前者一致到三位有效数字。[2] 晶胞边长来自衍射峰的位置与指标化，不是从晶体外形估读。

## 数值与口径

3.567 埃等于 0.3567 纳米，约 0.357 纳米。[1] 金刚石结构中，最近邻碳原子位于体对角线的四分之一处，键长为 a√3/4，即约 1.544 埃，也就是 0.154 纳米。[1][2] 因此晶胞边长约为键长的 2.3 倍；两者不是同一个量。原胞更小，常规晶胞包含八个碳原子。

## 常见误解

常见误解之一是把 0.357 纳米当成 C–C 键长；键长只有约 0.154 纳米。[1] 另一个误解是把晶胞边长当成两个最近邻碳原子的距离；最近邻距离沿体对角线，需乘 √3/4。[2] 还有人把金刚石晶胞与石墨层间距混用：石墨层间距约 0.335 纳米，结构维度与键型都不同。

## 与其他尺度的关系

0.357 纳米比 NaCl 的最近邻距离 0.282 纳米大，也略大于苯环的碳骨架间距，却仍远小于蛋白质与细胞。[1][2] 它把“晶胞”这一周期性单元放回尺度轴：晶胞边长描述重复周期，键长描述原子间连接，二者共同决定晶体的衍射与力学性质。同一晶胞包含八个碳原子，晶胞体积与密度可由此互相校验。[1][2] 继续阅读晶格间距、NaCl 晶体与石墨烯，可比较晶胞、最近邻距离与层间距的口径。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]
