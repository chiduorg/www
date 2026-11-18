---
id: space.triton
title: 海卫一
titleEn: Triton
dimension: length
category: 行星与太阳系
summary: 海卫一是海王星最大的卫星，平均直径约2700公里。它沿逆行轨道运行，常被认为是捕获的柯伊伯带天体，表面有氮冰和活跃喷流。
quantity:
  value: 2700000
  unit: m
  measure: 两倍JPL所列平均半径1352.60 km（约2705 km，取整为2700 km）
  approximate: true
displayValue: '约 2,700 km（平均直径）'
related:
  - space.neptune
  - space.pluto
  - space.kuiper-belt
  - space.enceladus
reviewStatus: reviewed
sources:
  - title: Planetary Satellite Physical Parameters
    url: 'https://ssd.jpl.nasa.gov/sats/phys_par/'
    publisher: NASA / JPL Solar System Dynamics
    accessed: '2026-11-07'
  - title: Triton
    url: 'https://science.nasa.gov/neptune/moons/triton/'
    publisher: NASA Science
    accessed: '2026-11-07'
conditions: 对象为海王星卫星海卫一的固体表面；采用JPL所列平均半径1352.60公里加倍；不含稀薄氮气大气，也不把轨道半径、喷流高度当作本体尺寸。
uncertainty: JPL列平均半径1352.60±2.40公里，直径约2705.2±4.8公里；NASA页面给出约2700公里，属于取整表达。海卫一接近球形但并非完美球体，平均直径不等于赤道或极直径。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 打开JPL卫星物理参数表与NASA海卫一条目，核对平均半径、直径、逆行轨道与表面活动。
    - 明确2700公里是平均直径，不把5.877天的轨道周期或喷流高度当作尺寸。
    - '2026-11-07 来源可访问性核对：https://science.nasa.gov/neptune/moons/triton/ 返回可用响应；https://ssd.jpl.nasa.gov/sats/phys_par/（TypeError: fetch failed） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: sphere
  scene: space.object
  caption: 海卫一平均直径
  note: 球体、表面纹理与光照为示意，非按比例，非观测重建；不复现真实氮冰分布与喷流位置。
  color: '#b9c2c4'
  variant: moon
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 行星与太阳系
  - 尺寸
  - 天体
---
## 它是什么

海卫一是海王星最大的卫星，1846年由拉塞尔发现。它沿逆行轨道绕海王星运行，是太阳系大卫星中唯一如此运行的天体，因此常被认为是被海王星捕获的柯伊伯带天体。[1] 旅行者2号1989年飞掠时发现其表面有氮冰、坎塔洛普地形和活跃的氮气喷流，表面温度约零下235摄氏度。它的自转与公转同步，始终以同一面朝向海王星，密度约2.06克每立方厘米。[1][2]

## 怎样知道

JPL卫星物理参数表列海卫一平均半径1352.60公里，不确定度2.40公里，加倍得约2705公里。[1] NASA海卫一条目给出直径约2700公里，并说明数据来自旅行者2号的影像与掩星观测。[2] 平均半径同样是把形状折算成同体积球体后的结果；海卫一不是完美球体，但扁率不大。

## 数值与口径

本条取2700公里，对应2.7×10⁶米。它是平均直径，不是赤道直径、极直径或轨道跨度。海王星的轨道半径约354万公里，海卫一绕行一周约5.877天；这些距离和时间都不能与直径混用。[1][2] 如果讨论喷流高度，应使用公里级的局部尺度，而不是整颗卫星的直径。

## 常见误解

常见误解是海卫一与海王星同时形成；逆行轨道和成分更支持它原本来自柯伊伯带。[2] 另一个误解是它比冥王星小：海卫一直径约2700公里，冥王星约2376公里，海卫一反而更大。[1] 还有人以为它表面静止；旅行者2号看到了喷发中的氮气羽流。

## 与其他尺度的关系

2700公里约为月球直径3474.8公里的0.78倍，约为冥王星2376公里的1.14倍，约为地球12742公里的21%。[1][2] 与海王星平均直径49528公里相比，它约占5.5%。在卫星中它大于冥王星，却仍远小于木卫三和土卫六。
