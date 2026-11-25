---
id: temperature.neptune-cloud
title: 海王星云顶
titleEn: Neptune cloud-top temperature
dimension: temperature
category: 低温
summary: 海王星云顶温度通常取 1 bar 气压层作为参考，约 72 K（−201 ℃）。海王星是冰巨星， 没有固体表面；这个数值不是海王星有效温度或大气最低温度。
quantity:
  value: 72
  unit: K
  measure: 海王星云顶（1 bar 参考层）温度
  approximate: true
  measureLabel: 海王星云顶（1 bar 参考层）温度
displayValue: 约 72 K（−201 ℃）
related:
  - space.neptune
  - space.uranus
  - temperature.uranus-cloud
  - temperature.jupiter-cloud
  - temperature.saturn-cloud
reviewStatus: reviewed
sources:
  - title: Neptune Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/neptunefact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
  - title: Neptune
    url: 'https://www.britannica.com/place/Neptune-planet'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Neptune Facts
    url: 'https://solarsystem.nasa.gov/planets/neptune/in-depth/'
    publisher: NASA Science
    accessed: '2026-11-06'
conditions:
  body: 海王星
  location: 云顶参考层，约 1 bar 气压高度
  method: 旅行者 2 号射电掩星、红外光谱、地基观测与大气模型
  basis: 1 bar 处 72 K，0.1 bar 处 55 K，有效温度约 59 K
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NSSDC 海王星资料表给出 1 bar 处 72 K、0.1 bar 处 55 K，黑体温度 46.6 K。
    - >-
      Britannica 给出 1 bar 处约 74 K、0.1 bar 附近最低约 50 K、有效温度 59.3 K；NASA
      海王星资料页说明其大气组成与无固体表面。
    - 正文保留 72 K 作为轴值，并在不确定度中说明 Britannica 的 74 K 差异及不同口径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  72 K 是 1 bar 参考层的圆整温度，不同资料给出约 72–74 K，差异来自观测年代、反演与圆整。 它不是可见云顶、有效温度或内部温度；有效温度约
  59 K，0.1 bar 附近可低到约 50–55 K。 纬度、季节、风暴和采用的气压层都会改变读数，海王星内部热流还会影响高层温度结构。
visual:
  template: planet-environment
  profile: neptune
  caption: 海王星云顶参考层
  note: >-
    画面为海王星云顶温度示意，非按比例、非观测重建；深蓝色调、云带、风暴与光照均为解释性处理，
    不代表真实遥感影像。各对象分别调整显示大小，不能据此比较尺寸。
  backdrop: ice-giant
  color: '#6f9fd8'
  symbol: Neptune
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
conceptGroup: neptune
---
## 它是什么

海王星是太阳系最外侧的行星，也是冰巨星，大气以氢、氦和甲烷为主。它没有固体表面，云顶温度需要指定气压层，常用参考是 1 bar 层，约 72 K，即 −201 ℃。[1][3] 海王星的高层云和风暴位于更低压力处，温度与 1 bar 层并不相同。

## 怎样测到

旅行者 2 号在 1989 年的射电掩星提供了关键温度剖面，地基红外观测和后续光谱观测补充了全球约束。NSSDC 海王星资料表给出 1 bar 处 72 K、0.1 bar 处 55 K，黑体温度 46.6 K；Britannica 给出 1 bar 处约 74 K、0.1 bar 附近最低约 50 K、有效温度 59.3 K；NASA 海王星资料页说明其大气主要由氢、氦和甲烷组成，没有固体表面。[1][2][3]

## 数值与口径

72 K 等于 −201.15 ℃，约 −201 ℃。它是 1 bar 参考层的温度，不是可见云顶、有效温度或内部温度。[1] 海王星有效温度约 59 K，比 1 bar 层低约 13 K；0.1 bar 附近可低到约 50–55 K。[2] 不同资料对 1 bar 温度给出 72–74 K，差异不大但仍需注明来源与气压层定义。

## 常见误解

第一，把 72 K 当成海王星“表面温度”。海王星没有固体表面，1 bar 只是约定参考层。[1][3] 第二，认为海王星离太阳更远就必然比天王星冷得多。海王星内部热流较强，有效温度与天王星接近，1 bar 层也只低几开尔文。[2][3] 第三，把 72 K 与 46.6 K 的黑体温度混用。前者是具体气压层温度，后者是辐射平衡参考。[1][2] 第四，忽略云顶高度定义造成的差异。

## 与其他温区的关系

72 K 低于天王星云顶约 76 K、土星云顶约 134 K和木星云顶约 165 K。[1] 它也低于液氮的 77.4 K 沸点，高于液氦的 4.2 K。与土卫六表面约 94 K 相比，海王星 1 bar 层更冷；在太阳系行星云顶温区中，海王星与天王星同处最冷的一端。[1][3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 72 K，即 -201.1 ℃（按 T/K−273.15 换算）；约为液氮沸点（77 K）的 0.935 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10¹ 量级附近。

读图时先看量级，再看倍数：10¹ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
