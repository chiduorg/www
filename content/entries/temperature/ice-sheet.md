---
id: temperature.ice-sheet
title: 冰盖表面
titleEn: Ice sheet surface temperature reference
dimension: temperature
category: 低温
summary: >-
  冰盖是覆盖大陆尺度区域的厚冰体，现存最大的两个位于南极和格陵兰。其表面温度随纬度、季节和海拔变化， 这里取 250 K（−23
  ℃）作冰盖表面温区的圆整参考；南极内陆冬季更低，大陆尺度年平均约 240 K。
quantity:
  value: 250
  unit: K
  measure: 冰盖表面温区圆整参考
  approximate: true
  measureLabel: 冰盖表面温区圆整参考
displayValue: 约 250 K（−23 ℃）
related:
  - temperature.glacier-ice
  - temperature.antarctic_min_temp
  - temperature.sea-ice
  - temperature.permafrost
  - temperature.water-freezing
reviewStatus: reviewed
sources:
  - title: >-
      WMO verifies one temperature record for Antarctic continent and rejects
      another
    url: >-
      https://public.wmo.int/media/news/wmo-verifies-one-temperature-record-antarctic-continent-and-rejects-another
    publisher: World Meteorological Organization
    accessed: '2026-11-06'
  - title: >-
      Revisiting temperature sensitivity: how does Antarctic precipitation
      change with temperature?
    url: 'https://tc.copernicus.org/articles/17/2563/2023/tc-17-2563-2023.pdf'
    publisher: The Cryosphere / Copernicus
    accessed: '2026-11-06'
  - title: Ice Sheets
    url: 'https://nsidc.org/learn/parts-cryosphere/ice-sheets'
    publisher: National Snow and Ice Data Center
    accessed: '2026-11-06'
conditions:
  medium: 积雪与冰盖表层
  location: 南极冰盖与格陵兰冰盖，海拔自海岸至高原
  season: 年平均与冬季参考，南极内陆冬季显著更低
  basis: 卫星热红外、自动气象站与再分析资料
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - WMO 给出南极年平均气温从沿岸约 −10 ℃ 到内陆最高处约 −60 ℃，对应约 263 K 至 213 K。
    - >-
      The Cryosphere 论文采用 1981–2000 年 ERA5-Land 再分析，给出南极大陆尺度年平均地表气温 239.6 K（约
      −33.6 ℃）。
    - NSIDC 定义冰盖为面积超过 5 万平方公里的陆地冰体，并说明现今只有南极和格陵兰两大冰盖。
    - 正文取 250 K 作为冰盖表面温区的圆整参考，同时说明它不是大陆尺度年平均，也不是冰盖底部温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  250 K 是冰盖表面温区的圆整参考，不是整个冰盖的年平均；南极大陆尺度年平均约 239.6 K， 沿岸约 263 K，内陆最高处可到约 213
  K。表面气温与冰体内部温度不同，后者还受积雪绝缘、地热和冰流影响。
visual:
  template: planet-environment
  scene: temperature.object
  caption: 冰盖表面温度示意
  note: 冰盖轮廓、裂隙与温度色带均为解释性示意，非按比例、非观测重建； 画面不代表南极或格陵兰某一区域的实际表面温度。
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

冰盖是覆盖大陆尺度区域的厚冰体，通常指面积超过 5 万平方公里的陆地冰。[3] 现今地球上有两个主要冰盖：南极冰盖和格陵兰冰盖。这里说的温度是冰盖表面的雪冰界面温度，不是冰盖底部的温度，也不是周围海水的温度。表面温度受太阳高度、云量、反照率、海拔和风的影响，具有明显的季节与空间差异。

## 怎样知道

冰盖表面温度可由卫星热红外遥感、自动气象站和再分析资料获得。WMO 给出南极年平均气温从沿岸约 −10 ℃ 到内陆最高处约 −60 ℃，即约 263 K 至 213 K。[1] The Cryosphere 的一项研究采用再分析资料，给出南极大陆尺度年平均地表气温约 239.6 K，即 −33.6 ℃。[2] 这些数值来自不同时间跨度与空间加权方式，不能与某个站点的单日读数直接比较。

## 数值与口径

250 K 等于 −23.15 ℃，约 −23 ℃。它落在南极沿岸约 263 K 与内陆约 213 K 之间，适合作为“冰盖表面温区”的圆整参考，但不等于大陆尺度年平均。[1][2] 南极内陆冬季可远低于 250 K，夏季沿岸可接近或略高于冰点；格陵兰冰盖的海拔和纬度组合又给出另一套分布。比较时必须说明是表面气温、雪面温度还是冰体内部温度。

## 常见误解

第一，把 250 K 当成整块冰盖都一样的温度；冰盖跨越海岸到高原，温差可达数十开尔文。第二，把冰盖表面温度与冰盖底部温度混淆；底部受地热和压力影响，可能接近压熔点。第三，把冰盖与海冰混为一谈；冰盖位于陆地上，海冰漂浮在海洋上，形成与消融机制不同。[3] 第四，用单次极端低温代表气候平均；南极记录到极低表面温度，但那是特定晴空和静风条件下的局地事件。

## 与其他温区的关系

250 K 低于水的冰点 273.15 K，也低于冰川冰的约 260 K，却高于南极极端低温的记录值。它和火星表面的冷侧温区相近，但地球冰盖表面有积雪绝缘和季节性融化，热行为不同。冰盖表面温度是气候系统的重要边界条件：它影响融化、冰流和反照率，却不能单独代表整个冰盖的热含量。
