---
id: space.mercury
title: 水星
titleEn: Mercury
dimension: length
category: 行星与太阳系
summary: '水星的体积等效平均直径为4,879公里，由NASA事实表的平均半径2,439.7公里加倍得到。赤道与极半径略有差别，但差异不足0.1%。'
quantity:
  value: 4879400
  unit: m
  measure: NASA事实表口径的体积等效平均直径（不含外逸层）
  approximate: true
displayValue: '4,879 km（体积等效平均直径）'
related:
  - space.venus
  - space.earth
  - space.sun
  - space.solar-system
  - space.moon_diameter
reviewStatus: reviewed
sources:
  - title: Mercury Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
  - title: Mercury
    url: 'https://www.britannica.com/place/Mercury-planet'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: '对象为水星固体表面；采用NASA事实表的体积平均半径2,439.7公里加倍；不包含稀薄外逸层，也不按赤道或极方向单独取值。'
uncertainty: '2,439.7公里乘二得4,879.4公里，取整为4,879公里；赤道直径约4,881公里、极直径约4,876.6公里，差别来自微小扁率而非测量矛盾。'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开NASA水星事实表与Britannica水星条目，核对赤道半径、极半径、体积平均半径及质量与轨道参数。
    - 明确本条采用体积等效平均直径，不把从地球看到的视直径当作真实直径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "sphere"
  scene: "space.object"
  caption: "水星 · 行星"
  note: "球体、撞击坑纹理和光照为示意，非按比例，非观测重建；不复现真实表面细节与当日相位。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 行星与太阳系
  - 尺寸
  - 行星与地理
conceptGroup: mercury
---
## 它是什么

水星是离太阳最近、也是八大行星中最小的一颗，没有浓厚大气，表面布满撞击坑。本条量的是它的体积等效平均直径，即把略扁的球体按体积折算成同样体积的球体。[1] 水星几乎没有扁率，赤道与两极半径只差几公里，因此平均直径与赤道直径很接近。它的自转很慢，一个恒星日约58.6个地球日。

## 怎样知道

NASA事实表列出赤道半径2,440.5公里、极半径2,438.3公里和体积平均半径2,439.7公里；这些值来自飞掠影像、雷达测距与轨道动力学。[1] 水星没有海洋，所谓半径以固体表面为准，不像气态巨行星要指定气压层。Britannica条目给出约2,440公里的半径，与事实表一致，但只保留到十公里量级。[2] 掩星和航天器跟踪还能独立约束它的形状。

## 数值与口径

按2×2,439.7公里计算，本条取4,879.4公里，显示为4,879公里。赤道直径约4,881公里，极直径约4,876.6公里，差别不到0.1%。[1] 这个数不含稀薄外逸层，也不把任何环形结构计入。若只关心赤道宽度，应改用赤道半径，而不是平均半径。

## 常见误解

常见误解是把水星当成最热行星。它离太阳最近，但几乎没有大气保温，夜面可降到约100 K，昼夜温差极大；金星才有更厚的二氧化碳大气和更高的表面温度。[2] 另一个误解是用视直径代替真实直径；从地球看到的角直径随距离变化，不能直接换算成大小。

## 与其他尺度的关系

4,879公里约为地球平均直径12,742公里的0.38倍，也约为月球直径3,474公里的1.4倍。[2] 它比木卫三的5,268公里小，但比冥王星的2,376公里大一倍多。水星轨道半长轴约0.387 au，与它的身体尺寸是两回事。[1]
