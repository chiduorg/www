---
id: space.mercury-orbit
title: 水星轨道
titleEn: Mercury Orbit
dimension: length
category: 行星与太阳系
summary: 水星轨道半长轴为5790.9万公里，即约5.7909×10¹⁰米。它描述椭圆轨道的整体尺度，不是水星到太阳的瞬时距离。
quantity:
  value: 57909000000
  unit: m
  measure: 水星绕太阳轨道半长轴
  approximate: true
displayValue: 约 5.7909 × 10¹⁰ m（轨道半长轴）
related:
  - space.au
  - space.solar-system
  - space.earth
reviewStatus: reviewed
sources:
  - title: Mercury Fact Sheet — Orbital Parameters
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html'
    publisher: NASA NSSDC
    accessed: '2026-11-06'
  - title: Mercury
    url: 'https://www.britannica.com/place/Mercury-planet'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: mercury-orbit
  icon: ☿
  relatedLabels: 广义相对论、近日点进动、爱因斯坦、勒维耶、信使号探测器、引力理论、天体测量学
conditions: 轨道半长轴，适用于描述水星椭圆轨道尺度；不是水星直径、瞬时日距或整条轨道周长。
uncertainty: 半长轴 57.909×10⁶ km 是轨道拟合值，随历元与观测更新有微小变化；本条按 NASA 事实表数值取整到 5.7909×10¹⁰ m。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用 WebFetch 打开 NASA 水星事实表与 Britannica 水星页，核对半长轴、偏心率、近日点、远日点与公转周期。
    - 明确半长轴、瞬时日距与轨道周长的区别；quantity 数值保持不变。
  originalQuantity:
    value: 58000000000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: distance
  variant: orbit
  color: '#b8b092'
  referenceAxis: x
  caption: 椭圆几何中心到长轴端点的半长轴
  note: 标线长为一个半长轴，不是整个长轴或太阳至水星的瞬时距离；太阳位于焦点，e=0.2056，行星点未按实体尺度绘制；非按比例，非观测重建。
  framePadding: 0.69
  sourceMeasure: 水星绕太阳轨道半长轴
  parameters:
    eccentricity: 0.2056
    source: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/mercuryfact.html'
  scene: space.object
measureType: 距离
tags:
  - 行星与太阳系
  - 距离
  - 恒星与行星系
---
## 它是什么

水星轨道是水星绕太阳运行的椭圆路径。轨道半长轴是椭圆长轴的一半，用来描述轨道整体尺度，不随时间改变。[1] 它不等于水星到太阳的瞬时距离，也不等于水星直径。半长轴与偏心率共同决定近日点和远日点，后者比前者远约52%。

## 怎样知道

NASA行星事实表依据长期光学与雷达观测、航天器跟踪给出轨道参数：半长轴57.909×10⁶公里，偏心率0.2056，近日点46.000×10⁶公里，远日点69.818×10⁶公里，公转周期87.969日。[1] Britannica给出的平均轨道距离约5,800万公里、公转约88日，与之一致。[2] 水星近日点的额外进动曾是天体测量学的经典检验。雷达测距与信使号轨道跟踪把半长轴误差压到公里级，但不同历元仍会更新。

## 数值与口径

本条采用半长轴57.909×10⁶公里，即5.7909×10¹⁰米。[1] 因为它偏心率高，近日点与远日点相差约2,380万公里；把半长轴说成“水星到太阳的距离”会丢掉这一变化。[1] 图景中标线只表示一个半长轴，太阳位于椭圆焦点，而非几何中心。若把半长轴误当平均日距，会低估近日点附近的强烈日照变化。

## 常见误解

常见误解是把半长轴当成轨道周长，或把椭圆画成圆。半长轴只是一条几何长度；周长约等于2πa乘一个接近1的椭圆修正因子。[1] 另一个误解是把轨道半长轴与水星半径2,440公里混用：前者约是后者的两万倍。[2]

## 与其他尺度的关系

5.79×10¹⁰米约合0.387 au。[1] 它比地球轨道半长轴1 au小得多，却仍远大于太阳直径1.39×10⁹米——约为后者的42倍。这使它成为太阳系中公转最快的行星。水星轨道也远在日球层顶121.6 au之内。水星公转周期只有88天，因此同一地球年内它绕太阳四圈多。
