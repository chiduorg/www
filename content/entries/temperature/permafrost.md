---
id: temperature.permafrost
title: 多年冻土
titleEn: Permafrost ground temperature
dimension: temperature
category: 低温
summary: >-
  多年冻土地温在连续冻土带常见 −5 至 −15 ℃，本条取 −10 ℃（263 K）。 它指地下土壤或岩石的温度，不是地表气温；0 ℃
  是冻土存在的温度上限。
quantity:
  value: 263
  unit: K
  measure: 多年冻土地温（连续冻土带代表值）
  approximate: true
displayValue: 约 −10 ℃（263 K）
related:
  - temperature.deep-ocean
  - temperature.water-freezing
  - temperature.antarctic_min_temp
  - temperature.freezer
  - space.moon
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: Frozen Ground & Permafrost
    url: 'https://nsidc.org/learn/parts-cryosphere/frozen-ground-permafrost'
    publisher: National Snow and Ice Data Center (NSIDC)
    accessed: '2026-11-06'
  - title: >-
      Thermal state of permafrost in North America: A contribution to the
      international polar year
    url: >-
      https://www.usgs.gov/publications/thermal-state-permafrost-north-america-a-contribution-international-polar-year
    publisher: U.S. Geological Survey
    accessed: '2026-11-06'
conditions:
  medium: 土壤、沉积物或岩石
  measurementSite: 钻孔中的多年冻土层，非地表气温
  duration: 年平均地温，活动层随季节冻融
  basis: 钻孔温度长期实测
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NSIDC 把多年冻土定义为连续两年或更久保持 0 ℃ 或以下的地面、土壤、沉积物或岩石，并强调定义只看温度与持续时间。
    - USGS 基于 350 个钻孔的资料指出，不连续冻土带地温一般高于 −3 ℃，连续带可低至 −15 ℃；正文取 −10 ℃（263 K）作为代表值。
    - 冻土地温不是气温，活动层夏季融化、冬季冻结；正文明确深度和季节口径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  −10 ℃ 是连续冻土带年平均地温的圆整代表值；−5 至 −15 ℃ 范围内随地点、深度、积雪和含水量变化。
  活动层会随季节冻融，单次读数不能代表全年冻土状态。
visual:
  template: planet-environment
  scene: temperature.object
  caption: 多年冻土地温
  note: 画面为多年冻土的示意表达，非按比例、非观测重建；冻土剖面、冰楔与冷色均为解释性示意， 不代表真实钻孔岩芯或具体冻土站点。
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

多年冻土是连续两年或更久保持 0 ℃ 或以下的地面、土壤、沉积物或岩石。[1] “多年冻土温度”指冻土内部的地温，不是地表气温。连续冻土带的地温可低到约 −15 ℃，不连续带通常高于 −3 ℃；本条取 −10 ℃（263 K）作为代表值。[2] 0 ℃ 是冻土存在的上限，但达到 0 ℃并不等于土壤一定含有大量冰。

## 怎样知道

地温由钻孔中的温度记录仪长期测量，深度通常从地表到多年冻土上限以下。NSIDC 强调，冻土的定义只看温度与持续时间，不看含水量、积雪或位置。[1] USGS 基于 350 个钻孔的资料指出，不连续冻土带地温一般高于 −3 ℃，连续带可低至 −15 ℃。[2] 这些是年平均地温，不是某一天的气温。积雪的保温作用会让地温高于气温，活动层则会随季节冻融。

## 数值与口径

263 K 等于 −10.15 ℃，约 −10 ℃。−5 至 −15 ℃ 是连续冻土带的常见年平均地温范围，但活动层在夏季会融化，冬季又冻结；因此“冻土温度”必须说明深度和季节。[2] 地表气温可能远低于或高于地温，积雪的保温作用也会让地温高于气温。0 ℃ 是冻土存在的上限，而不是唯一温度。

## 常见误解

第一，把冻土温度当成气温；冻土是地下介质，热惯性大，季节变化滞后。第二，认为冻土全年都是同一个温度；活动层会随季节冻融。第三，把 0 ℃ 当成“冻土一定很冷”；定义只要求 ≤0 ℃，实际可在 −0.1 ℃ 附近。第四，认为冻土只存在于极地；高海拔地区也有多年冻土。

## 与其他温度的关系

约 −10 ℃ 低于 water-freezing 的 0 ℃，也低于 fridge 的 4 ℃，但高于 freezer 的 −18 ℃。它高于 absolute-zero，远低于 human-body-temperature。与 deep-ocean 的约 2 ℃ 相比，二者都冷，但一个是含冰土壤、一个是液态海水。理解冻土温度，关键是把地温、气温和冰点三者的口径分开。
