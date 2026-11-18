---
id: space.train-car
title: 铁路客车车厢长度
titleEn: Railway Passenger Car Length
dimension: length
category: 日常与人造
summary: >-
  量取单节铁路客车车钩连接面之间的纵向长度；取 25 米作为干线客车常用参照，中国 CRH2 中间车为 25 000 毫米，美国单层客车规范为 85 英尺。
quantity:
  value: 25
  unit: m
  measure: 车钩连接面之间的单节车辆长度（不含车钩本体）
  approximate: true
displayValue: 25 m（铁路客车车厢常用长度）
related:
  - space.bus
  - space.subway-car
  - space.boeing-747
  - space.cruise-ship
  - space.car
reviewStatus: reviewed
sources:
  - title: CRH2 型时速 200～250 公里长编组座车和卧车动车组总体技术方案
    url: 'https://www.nra.gov.cn/jglz/fgzd/gfwj/zt/qt/202204/P020220406008280926440.pdf'
    publisher: 国家铁路局
    accessed: '2026-11-07'
  - title: PRIIA 305 Single-Level Passenger Rail Cars, Chapter 1 Specification Summary
    url: 'https://www.nist.gov/system/files/documents/mep/specs_single_level_passenger_rail_car.pdf'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-07'
conditions: >-
  对象为干线铁路单节客车；测量口径为两端车钩连接面之间的车辆长度，不含车钩本体、缓冲装置与贯通道；不适用于机车、货车或整列编组。
uncertainty: >-
  25 米是常用车型的代表值，实际车辆在 25.0 至 25.9 米之间；不同规范对“车钩连接面”和“车体两端外缘”的量取方式不同，会产生近 1 米差异。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: vehicle
  scene: space.object
  caption: 铁路客车车厢 · 25 米长度示意
  note: 示意，非按比例，非观测重建；车厢线条、车窗与转向架为简化表示。
  color: '#9aa8b8'
  variant: train
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 日常与人造
  - 尺寸
  - 交通
---
## 它是什么

铁路客车车厢长度指一辆客车从一端车钩连接面到另一端车钩连接面的纵向尺寸，通常不含车钩本体。本条取 25 米作为干线铁路客车的常用参照；中国 CRH2 动车组的中间车车体最大长度为 25 000 毫米，头车为 25 450 毫米。[1] 这个数是单节车厢的长度，不是整列车编组长度。

## 怎样知道

铁路车辆尺寸由设计规范或采购技术条件规定。中国国家铁路局公布的 CRH2 总体技术方案把车体最大长度按头车与中间车分列，中间车为 25 000 毫米，车体最大宽度为 3 380 毫米。[1] 美国 PRIIA 单层客车规范要求整车长度 85 英尺，即约 25.9 米，量取位置为车钩牵引面之间。[2] 两套规范的量取面不同，所以数值有小幅差异。

## 数值与口径

25 米等于 2 500 厘米或 25 000 毫米。CRH2 中间车正好 25 000 毫米，头车多出的 450 毫米主要用于司机室造型。[1] 美国规范按车钩牵引面量得 85 英尺，换算约 25.9 米，比 25 米长近 0.9 米。[2] 若把车钩本体也算进去，两端还会各增加数十厘米，因此“车钩连接面之间”和“含车钩”不是同一个口径。

## 常见误解

“所有铁路客车都 25 米”不准确：普速客车与高速动车组的车体长度并不统一，市域列车还可能短得多。也不能把单节车长当成整列车长度，8 节或 16 节编组的列车会长达 200 米以上。另一个误解是把车体两端外缘与车钩连接面混用；两者相差一个车钩与缓冲装置的长度。[2]

## 与其他尺度的关系

25 米约等于 13.9 辆 1.8 米自行车首尾相接，也约等于 5.6 辆 4.5 米家用轿车。与 68.4 米的波音 747 相比，一节车厢约为其 37%；与 94 米的国际空间站相比约为其 27%。它还是 2.032 米标准门高的约 12.3 倍，站台上一节车厢通常要跨越十几个车门宽度。
