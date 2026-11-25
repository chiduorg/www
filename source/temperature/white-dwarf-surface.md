---
id: temperature.white-dwarf-surface
title: 白矮星天狼星B表面
titleEn: Sirius B white-dwarf surface reference
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  白矮星天狼星 B 的表面温度在 NASA/Chandra 的说明中约为 25,000 K。
  这里采用这个具体对象，不能把整个白矮星类别都设成同一温度，也不能与主星天狼星 A 的温度混用。
quantity:
  value: 25000
  unit: K
  measure: NASA天狼星B表面温度概览
  approximate: true
  measureLabel: NASA天狼星B表面温度概览
displayValue: '约 25,000 K（Sirius B参考）'
related:
  - temperature.sirius-surface
  - temperature.neutron-star-surface
  - temperature.nova-outburst
  - temperature.type-ia-supernova
  - space.sun
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: X-Rays From Sirius B
    url: 'https://apod.nasa.gov/apod/ap001006.html'
    publisher: 'NASA / Chandra / SAO (2000), APOD'
    accessed: '2026-11-06'
  - title: 'Sirius A and B: A Double Star System In The Constellation Canis Major'
    url: 'https://chandra.harvard.edu/photo/2000/0065/'
    publisher: NASA Chandra X-ray Center
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: white-dwarf-surface
  icon: ⚪
  relatedLabels: 简并电子、钱德拉塞卡极限、恒星演化、天狼星表面、Ia型超新星、暗能量、新星爆发、中子星表面、宇宙距离尺度
conditions: >-
  NASA/Chandra 对天狼星 B 热 X 射线与大气模型的说明；对象为该白矮星的表面辐射层， 不是核心；表面大气近似处于辐射平衡；25,000 K
  是有效温度概览值，不是亮温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 'APOD 2000 年 10 月 6 日说明给出天狼星 B 表面温度约 25,000 K，并指出其半径略小于地球。'
    - 'Chandra 2000 年天狼星 A/B 图像说明给出约 25,000 摄氏度，二者在量级与取整上一致。'
  originalQuantity:
    value: 25000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 25,000 K 是天狼星 B 表面有效温度的概览值；大气成分、表面重力、距离与观测波段都会影响拟合，
  不同文献的取整也可能略有差异，不能当作所有白矮星的通用温度。
visual:
  template: compact-star
  profile: white-dwarf
  caption: 天狼星 B 白矮星
  note: >-
    对应特定白矮星的有效温度，不是核心温度；与中子星模型分别归一化，大小不可直接比较；
    画面非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#e1e6ff'
  symbol: Sirius B
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

天狼星 B 是天狼星双星系统中的白矮星，质量约与太阳相当，直径却只有地球的约九成。它由电子简并物质支撑，表面有一层薄大气，向外发出热 X 射线。这里讨论的是这层大气的有效温度，不是简并核心的温度。Chandra 的图像说明给出其表面温度约为 25,000 摄氏度，APOD 则写作约 25,000 K。[1][2] 这两个说法在取整精度内一致。

## 怎样测到或为何是推断

天狼星 B 本身很小，又与明亮的天狼星 A 靠得很近，光学观测长期受主星干扰。Chandra 在 1999 年首次把它的 X 射线与主星分开，探测到来自白矮星热表面的低能 X 射线。[2] 温度并不是直接从图像颜色读出的，而是把 X 射线光谱或辐射特征与白矮星大气模型比较后得到的。大气成分、表面重力和距离进入拟合；模型改变，推断温度也会改变。因此 25,000 K 是有效温度概览值，不是接触式测温。

## 数值与口径

本条采用约 25,000 K 作为天狼星 B 表面有效温度的量级坐标。它不是核心温度；白矮星内部由简并电子支撑，热结构和表面完全不同。它也不是亮度温度；亮度温度依赖波段和辐射机制，而有效温度描述单位面积的总辐射。[1][2] 白矮星会逐渐冷却，不同年龄、质量和大气成分的白矮星表面温度差异很大，所以这个值只对应天狼星 B 这一个对象。

## 常见误解

第一，把表面温度当成核心温度；白矮星内部可以更热或经历不同的冷却历史，但望远镜只能看到外层辐射。第二，把 25,000 K 当成所有白矮星的通用值；年轻、年老、氢大气和氦大气的白矮星各有不同温度。第三，把温度高直接等同于可见光更亮；天狼星 B 虽然比太阳表面热，却比天狼星 A 暗约一万倍，因为它的表面积很小。[2] 第四，把天狼星 A 与 B 的记录混用；两者是同一个双星系统中的不同成员。

## 与其他温区的关系

25,000 K 约为太阳表面 5,772 K 的四倍多，却远低于中子星表面约 2×10⁶ K 的例子。它也低于 Ia 型超新星内部燃烧区的温度，更无法与坍缩核心的 10¹¹ K 量级相比。与宇宙微波背景的 2.725 K 相比，它又高出四个数量级。温度高低只能说明表面辐射，不能单独决定天体的总光度或演化阶段。[1]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
