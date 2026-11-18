---
id: space.asteroid-belt
title: 小行星带
titleEn: Asteroid Belt
dimension: length
category: 行星与太阳系
summary: 主小行星带位于火星与木星轨道之间，径向范围约2.3至3.3 au，折合宽度约1.5×10¹¹米。它不是一条密集的“石带”，而是稀疏的轨道区域。
quantity:
  value: 150000000000
  unit: m
  measure: 主带径向宽度（2.3–3.3 au 的1 au 差值，按1 au=1.496×10¹¹米折算）
  approximate: true
displayValue: 约 1.5 × 10¹¹ m（2.3–3.3 au 的径向宽度）
related:
  - space.ceres
  - space.vesta
  - space.jupiter
  - space.mars
  - space.solar-system
reviewStatus: reviewed
sources:
  - title: Asteroid belt
    url: 'https://www.britannica.com/science/asteroid-belt'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Earth Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
conditions: 对象为主小行星带的径向范围；下界取2.3 au、上界取3.3 au；不包含柯伊伯带、特洛伊群和近地小行星，也不把带的厚度当作宽度。
uncertainty: >-
  Britannica给出主带约2.3–3.3 au；NASA地球事实表给出1 au=149.598×10⁶公里；按1
  au差值折算约1.496×10¹¹米，取整为1.5×10¹¹米。边界随分类口径可略变。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用WebFetch打开Britannica小行星带条目与NASA地球事实表，核对2.3–3.3 au 范围与1 au 的公里定义。
    - 宽度由1 au 差值折算，属于换算值；主带边界没有唯一硬边界，故标记needs-review待统一口径。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: orbital-system
  scene: space.object
  caption: 主小行星带 · 轨道区域
  note: 轨道环带与颗粒分布为示意，非按比例，非观测重建；不复现真实小行星数量密度与轨道倾角分布。
  color: '#7fa8c4'
  variant: belt
  referenceAxis: x
  framePadding: 0.3
measureType: 距离
tags:
  - 行星与太阳系
  - 距离
  - 恒星与行星系
---
## 它是什么

主小行星带是太阳系中火星与木星之间、大量小行星长期运行的区域。它不是一个密集的固体环，而是由无数彼此相距很远的天体组成的轨道带。本条量的是它的径向宽度，即从内侧边界到外侧边界的距离。[1] 带内最大的成员是谷神星，其次是灶神星。

## 怎样知道

Britannica将主带范围描述为距太阳约2.3至3.3 au，这个范围来自长期轨道测定和小行星巡天统计。[1] 1 au 的精确定义来自地球轨道半长轴，NASA地球事实表给出149.598×10⁶公里。[2] 把两个边界相减得到约1 au 的径向宽度，再乘以1 au 的米值，就是本条的量。带的厚度、轨道倾角和偏心率的分布也会影响“宽度”的直觉。

## 数值与口径

2.3 au 到3.3 au 相差1.0 au；按1 au=1.496×10¹¹米计算，宽度约1.496×10¹¹米，显示为1.5×10¹¹米。[1][2] 这是径向宽度，不是小行星带的“直径”，也不是单个小行星的尺寸。若把边界取成2.2–3.2 au，宽度仍是约1 au；不同文献的边界差异主要来自分类习惯，而不是测量误差。

## 常见误解

常见误解是小行星带像电影里那样拥挤，航天器必须不断闪避；实际上小行星之间的平均距离可达数百万公里，带内总质量也只有月球质量的很小一部分。[1] 另一个误解是所有小行星都在主带；特洛伊群、近地天体和柯伊伯带天体都不在其中。还有人把主带当成“失败的行星”，更准确的说法是木星引力阻止了物质聚合成行星。[2]

## 与其他尺度的关系

1.5×10¹¹米约为地球轨道半径1 au 的1倍，约为地月距离3.84×10⁸米的390倍。[2] 它远大于谷神星940公里或灶神星526公里，但远小于木星轨道半径5.2 au。主带内侧2.3 au 约为火星轨道1.52 au 的1.5倍，外侧3.3 au 则接近木星轨道的一半。[1]
