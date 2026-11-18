---
id: temperature.jupiter-cloud
title: 木星云顶
titleEn: Jupiter cloud-top temperature
dimension: temperature
category: 低温
summary: >-
  木星云顶温度通常取 1 bar 气压层作为参考，约 165 K（−108 ℃）。木星没有固体表面，
  可见云层位于更冷的高空；这个数值不是木星有效温度或内部温度。
quantity:
  value: 165
  unit: K
  measure: 木星云顶（1 bar 参考层）温度
  approximate: true
  measureLabel: 木星云顶（1 bar 参考层）温度
displayValue: 约 165 K（−108 ℃）
related:
  - space.jupiter
  - temperature.saturn-cloud
  - temperature.uranus-cloud
  - temperature.neptune-cloud
  - space.europa
reviewStatus: reviewed
sources:
  - title: Jupiter Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/jupiterfact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
  - title: Jupiter
    url: 'https://www.britannica.com/place/Jupiter-planet'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Jupiter Facts
    url: 'https://solarsystem.nasa.gov/planets/jupiter/in-depth/'
    publisher: NASA Science
    accessed: '2026-11-06'
conditions:
  body: 木星
  location: 云顶参考层，约 1 bar 气压高度
  method: 红外与射电遥感、掩星、大气模型
  basis: 1 bar 处 165 K，0.1 bar 处 112 K
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NSSDC 木星资料表给出 1 bar 处 165 K、0.1 bar 处 112 K，黑体温度 109.9 K。
    - Britannica 说明木星没有固体表面、内部有热源且大气以氢氦为主；NASA 木星资料页说明可见云层由氨和水冰组成。
    - 正文把 1 bar 云顶参考层、可见云顶与有效温度分开，并说明不同气压层会给出不同数值。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  165 K 是 1 bar 参考层的圆整温度，不是可见云顶、云底或内部温度。不同文献把“云顶”定义在不同气压层， 0.1 bar 处约 112
  K，差异显著。纬度、季节、风暴与云粒组成会造成局部偏差； 木星有效温度约 109.9 K，描述行星辐射平衡，不能与 1 bar 层温度互换。
visual:
  template: planet-environment
  profile: jupiter
  caption: 木星云顶参考层
  note: 画面为木星云顶温度示意，非按比例、非观测重建；云带、涡旋、颜色与光照均为解释性处理， 不代表真实遥感影像。各对象分别调整显示大小，不能据此比较尺寸。
  backdrop: gas-giant
  color: '#c8a882'
  symbol: Jupiter
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
conceptGroup: jupiter
---
## 它是什么

木星是气态巨行星，没有可供站立的固体表面，因此“云顶温度”必须先说明取哪一层。常用做法是取 1 bar 气压层作为参考，该层温度约 165 K，即 −108 ℃。[1] 可见的云带和涡旋位于更低压力、更高海拔的位置，通常比 1 bar 层更冷；木星云顶并不是一个单一等温面。[1][3]

## 怎样测到

云顶温度由地基与航天器红外光谱、射电掩星和大气模型共同反演。NSSDC 木星资料表给出 1 bar 处 165 K、0.1 bar 处 112 K，并给出黑体温度 109.9 K；NASA 木星资料页说明可见条纹是氨和水云；Britannica 说明木星没有固体表面，且内部热源使其辐射的能量多于接收的太阳能。[1][2][3] 掩星提供温度剖面，红外光谱提供云顶亮温，两者约束的是不同高度。

## 数值与口径

165 K 等于 −108.15 ℃，约 −108 ℃。它是 1 bar 参考层的温度，不是可见云顶、云底或内部温度。[1] 0.1 bar 处约 112 K，说明向上更冷；木星有效温度约 109.9 K，接近高层云区而不是 1 bar 层。[1] 因此引用“木星云顶温度”时，最好同时注明气压层或高度，否则 165 K 与 112 K 会被误当成同一口径。

## 常见误解

第一，把 165 K 当成木星“表面温度”。木星没有固体表面，1 bar 只是约定参考层。[2][3] 第二，把云顶温度当成内部温度。越往深处压力越高，温度可升到数千开尔文。[3] 第三，把云带颜色当作温度的直接标尺。颜色更多反映云粒成分、大小和高度，而不是单一温度读数。[1][2] 第四，忽略不同资料对云顶高度的定义差异。

## 与其他温区的关系

165 K 低于水的冰点 273.15 K，高于土星云顶约 134 K、天王星云顶约 76 K和海王星云顶约 72 K。[1] 它也高于月球夜侧约 100 K和火星夜侧约 150 K，但仍属于低温温区。木星有效温度约 109.9 K 比 1 bar 层低约 55 K，说明云顶温度与行星辐射平衡温度必须分开理解。[1][3]
