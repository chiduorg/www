---
id: temperature.lake-surface
title: 湖面温度
titleEn: Lake surface temperature seasonal reference
dimension: temperature
category: 常温
summary: >-
  湖面温度是湖泊表层水的温度，随季节、纬度和湖泊大小显著变化。以大湖为例，近年卫星反演的年平均 表层水温约 15–18 ℃；这里取 288 K（约 15
  ℃）作季节性参考，冬季可接近 273 K，夏季可超过 293 K。
quantity:
  value: 288
  unit: K
  measure: 大湖表层水温季节平均参考
  approximate: true
  measureLabel: 大湖表层水温季节平均参考
displayValue: 约 288 K（约 15 ℃）
related:
  - temperature.ocean-thermocline
  - temperature.sea-surface
  - temperature.water-freezing
  - temperature.ice-sheet
  - space.human
reviewStatus: reviewed
sources:
  - title: GLSEA Annual Comparison
    url: >-
      https://coastwatch.glerl.noaa.gov/satellite-data-products/glsea-annual-comparison/
    publisher: NOAA Great Lakes CoastWatch
    accessed: '2026-11-06'
  - title: lake stratification
    url: 'https://www.britannica.com/science/lake-stratification'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 湖泊淡水表层
  location: 北美五大湖等大型湖泊；不同纬度与面积均适用
  season: 年平均与四季参考，冬季受结冰与混合影响
  basis: 卫星热红外反演、浮标与现场水温观测
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NOAA GLSEA 年度比较表给出 2026 年五大湖各湖表层水平均约 11.85–18.40 ℃，2025 年约 12.47–18.62 ℃。
    - Britannica 的湖泊分层条目说明，温带湖泊夏季表层升温形成上湖层，秋季冷却后发生翻转，结冰后进一步受隔断。
    - 正文取 288 K 作为大湖表层水温的季节平均圆整参考，同时说明冬季可接近冰点、夏季可明显更高。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  288 K 是大型湖泊表层水温的年平均圆整参考，不是任一季节的固定值；冬季可接近 273 K， 夏季可超过 293
  K，浅水湖与高纬湖的波动更大。湖泊面积、深度、风、云量和结冰时长都会改变表面温度。
visual:
  template: planet-environment
  scene: temperature.object
  caption: 湖面温度示意
  note: 湖岸线、分层与温度色带均为解释性示意，非按比例、非观测重建； 画面不代表某一湖泊或某一日期的真实卫星水温图。
zone: 常温
tags:
  - 常温
  - 温度
  - 日常
---
## 它是什么

湖面温度是湖泊最表层水的温度，不是岸边气温，也不是湖底温度。淡水湖吸收太阳辐射后表层升温，风把热量向下混合；秋季表层冷却、密度增大，水体发生翻转；冬季结冰后，冰盖又隔断大气与水的直接交换。[2] 这里取 288 K 描述大型湖泊表层水温的季节平均参考，强调“季节性”而非全年恒定。

## 怎样知道

湖面温度可由卫星热红外反演、浮标和现场观测获得。NOAA 的 GLSEA 产品按湖给出表层水平均温度：2026 年五大湖各湖约为 11.85–18.40 ℃，2025 年约为 12.47–18.62 ℃。[1] Britannica 的湖泊分层条目解释夏季上湖层、秋季翻转和结冰过程，说明表面温度为何随季节大幅变化。[2] 卫星反演覆盖整湖，但云、冰和岸边混合会影响单像素读数。

## 数值与口径

288 K 等于 14.85 ℃，约 15 ℃。它落在 NOAA 近年五大湖表层年平均 15–18 ℃ 的范围内。[1] 冬季表层可接近 273 K，结冰时甚至略低于冰点；夏季受强烈日照的表层可超过 293 K。不同湖泊差异明显：苏必利尔湖较冷，伊利湖较浅、升温更快；高纬或高山湖泊的年平均更低。因而 288 K 是季节平均的圆整值，需连同湖泊、季节和观测方式说明。

## 常见误解

第一，把 15 ℃ 当成全年水温；同一湖泊冬季可接近 0 ℃，夏季可超过 20 ℃。第二，把湖面水温与岸边气温等同；水的热容大，升温降温都更慢。第三，认为大湖和小塘温度一致；面积、深度和风混合决定热惯性。第四，忽略结冰与分层；冰盖会阻断热量交换，分层会阻止上下混合。[2]

## 与其他温区的关系

288 K 与地球表面年平均气温接近，也与海洋表层的中低纬参考相近，但湖泊更浅、更封闭，季节波动更大。它高于海洋温跃层的约 283 K，低于热带海洋表层的约 298 K。与冰盖表面的约 250 K 相比，湖面在夏季暖得多；与水的冰点 273.15 K 相比，288 K 仍有约 15 K 的余量。湖面温度因此是理解淡水热收支和结冰时机的直接指标。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
