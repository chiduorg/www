---
id: temperature.sea-ice
title: 海冰表面
titleEn: Arctic sea ice surface temperature
dimension: temperature
category: 低温
summary: >-
  冬季北极海冰表面常降到 −15 ℃ 以下；卫星产品把低于 −15 ℃ 的区域单独标色。 这里取 258 K（约 −15.15
  ℃）作代表值。它描述冰盖或雪盖最上层的温度， 既不是海水约 −1.8 ℃ 的冻结点，也不是整块冰的平均温度。
quantity:
  value: 258
  unit: K
  measure: 海冰表面温度
  approximate: true
displayValue: 约 −15.15 ℃（258 K）
related:
  - temperature.lake-freezing
  - temperature.water-freezing
  - temperature.antarctic_min_temp
  - temperature.permafrost
  - temperature.sea-surface
  - space.human
reviewStatus: reviewed
sources:
  - title: Daily Snow and Sea Ice Temperature over the North Pole
    url: 'https://svs.gsfc.nasa.gov/2982'
    publisher: NASA Goddard Space Flight Center (Scientific Visualization Studio)
    accessed: '2026-11-06'
  - title: Sea ice
    url: 'https://www.britannica.com/science/sea-ice'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 海冰与雪盖表面
  measurementSite: 冰盖最上层
  duration: 冬季持续低温阶段
  basis: 卫星遥感反演与现场观测
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NASA SVS 的海冰表面温度产品说明：低于 −15 ℃ 的区域用紫色表示，低于 −28 ℃ 用蓝灰色；正文据此取 258 K 作冬季代表值。
    - Britannica 说明海冰由海水冻结形成，盐分以卤水排出，冰面又常被雪覆盖；正文用它解释表面温度与海水冻结点不同。
    - 正文强调卫星反演、雪面发射率、云和季节差异，避免把单日读数当成整块冰的统一温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  −15 ℃ 是冬季北极海冰表面的常用代表值；实际表面温度随纬度、季节、云量、风速和雪厚变化。 海水冻结点约 −1.8
  ℃，冰底可接近该值，冰面则可低得多；卫星反演还受云和发射率影响。
visual:
  template: planet-environment
  scene: temperature.object
  caption: 北极海冰表面温度
  note: 画面为海冰表面温度的示意表达，非按比例、非观测重建；冰脊、雪面与冷色光晕仅用于区分温度层级， 不代表真实卫星影像或具体测温位置。
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

海冰表面温度指冰盖或雪盖最上层的温度，不是海水的冻结点，也不是整块冰的平均温度。冬季北极海冰表面常降到 −15 ℃ 以下；NASA 的卫星产品把低于 −15 ℃ 的区域标为紫色，低于 −28 ℃ 标为蓝灰色。[1] 这里取 258 K，约 −15.15 ℃，作为冬季北极表面的代表值。

## 怎样知道

NASA 的 MODIS 海冰表面温度产品由 Aqua 卫星遥感反演，能逐日给出北半球冰面温度；云层遮挡时用前一日有效值填补。[1] Britannica 说明海冰由海水冻结而成，盐分以卤水形式排出，冰面又常被雪覆盖。[2] 卫星看到的是辐射温度，受雪面发射率、云和反演算法影响。

## 数值与口径

258 K 等于约 −15.15 ℃。海水本身约在 −1.8 ℃ 开始冻结，[2] 但冰面在冬季会远低于这个值，因为冰和雪向寒冷大气持续散热。表面温度随纬度、季节、云量、风速和雪厚变化；同一块冰的底部可能接近海水冻结点，顶部却低得多。因此“海冰温度”必须说明是表面、底部还是平均。

## 常见误解

第一，把海冰表面温度当成海水冰点；两者相差十几 K。第二，认为冰面温度等于气温；辐射、雪盖和冰厚会造成差异。第三，把卫星反演的瞬时值当成气候平均；单日图受云和轨道影响。第四，认为海冰形成后温度不变；冰面会随季节和天气持续变化。[1][2]

## 与其他温度的关系

258 K 低于 lake-freezing 的 273.15 K，也低于 plant-frost 的 271 K；它高于 antarctic_min_temp 的极低记录。与 sea-surface 的全球平均约 290 K 相比，冬季北极冰面低约 30 K。它和 permafrost 同属冰冻圈，但一个是海洋表面的冰，一个是陆地下面的冻土。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 258 K，即 -15.15 ℃（按 T/K−273.15 换算）；约为冰点（273.1 K）的 0.945 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
