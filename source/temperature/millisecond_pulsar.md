---
id: temperature.millisecond_pulsar
title: 毫秒脉冲星 J0030+0451 热区
titleEn: J0030+0451 hot surface regions
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  NICER 对毫秒脉冲星 J0030+0451 的热 X 射线研究推断，其表面若干热区约为百万 K。
  这里比较的是特定天体的局部高温区域，不是整颗中子星，也不是所有毫秒脉冲星共有的温度。
quantity:
  value: 1000000
  unit: K
  measure: NICER推断的表面热区温度量级
  approximate: true
  measureLabel: NICER推断的表面热区温度量级
displayValue: 约 10⁶ K（J0030+0451热区）
related:
  - temperature.neutron-star-surface
  - temperature.neutron-star-core
  - temperature.supernova
  - temperature.black-hole-accretion-disk
  - space.sun
  - mass.sun
reviewStatus: reviewed
sources:
  - title: 'NICER Nuggets: 2 January 2020, J0030+0451 surface regions'
    url: 'https://heasarc.gsfc.nasa.gov/docs/nicer/science_nuggets/20200102.html'
    publisher: NASA NICER / HEASARC
    accessed: '2026-11-06'
  - title: >-
      PSR J0030+0451 Mass and Radius from NICER Data and Implications for the
      Properties of Neutron Star Matter
    url: 'https://arxiv.org/abs/1912.05705'
    publisher: 'Miller et al., ApJL 887 (2019)'
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: millisecond_pulsar
  icon: ⚡
  relatedLabels: 中子星表面、脉冲星计时、引力波、吸积过程、中子星核心、双星演化、FAST、LOFAR、NANOGrav、球状星团
conditions: >-
  NICER 对 PSR J0030+0451 热 X 射线脉冲波形的拟合；对象为表面热斑，不是整颗中子星；
  热斑模型假设表面辐射近似局部热平衡并采用大气或黑体模型；10⁶ K 是有效温度量级，不是亮温度或核心温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NICER 2020 年 1 月 2 日科学简报给出 J0030+0451 热区约 100 万 K，并说明热区位于南半球、形状不对称。
    - arXiv 1912.05705 摘要给出三块椭圆形均匀温度热斑的贝叶斯质量半径拟合，未把局部热区温度当作整星平均。
  originalQuantity:
    value: 1000000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 10⁶ K 是 NICER 热区模型的量级，不是整星平均温度；发光斑数量、形状、大气成分与观测能段都会改变推断，
  不同研究给出的热斑温度和半径也不完全一致。
visual:
  template: compact-star
  profile: pulsar
  caption: 毫秒脉冲星热点
  note: >-
    对应特定脉冲星的局部热区模型，不是整颗星或核心温度；慢转、波束和光斑均为便于观看的示意，
    非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#c3dafa'
  symbol: PSR J0030+0451
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

毫秒脉冲星是自转周期只有几毫秒的中子星。J0030+0451 的自转频率约为 205.53 赫兹，属于典型的毫秒脉冲星。它表面的热 X 射线并非来自整颗星的均匀发光，而是集中在若干温度较高的斑块。[1] 这些热斑位于磁极附近，是磁力线与星面相交的区域，因此讨论温度时必须先说清是“局部热区”而不是“整颗星”。

## 怎样测到或为何是推断

NICER 通过长时间记录 X 射线到达时间，得到随自转变化的脉冲波形，再用大气辐射模型和热斑几何模型拟合。2020 年的科学简报指出，J0030+0451 的高温区域约为 100 万 K，而且两个热区都位于南半球，其中一个较小而圆，另一个较大且呈新月形。[1] Miller 等用贝叶斯方法分析能量依赖的热 X 射线波形，最佳模型包含三块椭圆形、温度均匀的发光斑，并由此估计质量与半径。[2] 这些温度是模型反演的结果，不是用温度计接触星面得到的直接读数。

## 数值与口径

本条采用约 10⁶ K 作为热区有效温度的量级坐标，只保留一位有效数字。它不是整颗中子星的平均表面温度，也不是核心温度；核心可以比表面热得多，但只能通过冷却模型间接约束。热斑的面积、形状、大气成分、磁场配置和所选能段都会影响拟合。[1][2] 同一颗星在不同热斑模型下也可能给出不同的局部温度，因此这个数字适合量级比较，不适合当作精确的表面温度图。

## 常见误解

第一，把局部热区当成整颗星的平均温度；X 射线只显示较热的部分，星面其余区域可能暗得多。第二，把自转快当成温度高；毫秒脉冲星之所以转得快，主要与双星吸积加速有关，并不直接决定表面温度。第三，把 10⁶ K 与核心的 10⁹ K 量级混用；两者属于不同层次，证据类型也不同。[1] 第四，把 X 射线的颜色直接换算成温度；还必须考虑大气模型、能段响应和热斑几何。

## 与其他温区的关系

10⁶ K 高于太阳表面 5,772 K，约为仙后座 A 中子星表面 2×10⁶ K 的一半。它远低于核心坍缩超新星的 10¹¹ K 量级，更低于夸克—胶子等离子体约 1.8×10¹² K 的理论温标。与黑洞吸积盘气体的 10⁷ K 相比，它又低一个数量级。把这些数值放在一起时，要记住它们分别对应热斑、星面、坍缩核心和模拟盘气体，而不是同一种物理环境。[2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
