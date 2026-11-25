---
id: temperature.desert-ground
title: 沙漠地表
titleEn: Desert land surface temperature
dimension: temperature
category: 中温
summary: 夏季白天的干旱沙漠裸地，地表温度常在 60–70 ℃，本条取 70 ℃（343 K）。 这是沙、砾石或裸岩的表面温度，不是气象站百叶箱内的空气温度。
quantity:
  value: 343
  unit: K
  measure: 沙漠地表温度（夏季白天代表值）
  approximate: true
displayValue: 约 70 ℃（343 K）
related:
  - temperature.death-valley
  - temperature.oven
  - temperature.sun-surface
  - temperature.room-temperature
  - space.human
reviewStatus: reviewed
sources:
  - title: Where Is the Hottest Place on Earth?
    url: 'https://earthobservatory.nasa.gov/features/HottestSpot'
    publisher: NASA Earth Observatory
    accessed: '2026-11-06'
  - title: NASA’s ECOSTRESS Monitors California’s Record-Breaking Heat Wave
    url: >-
      https://www.nasa.gov/centers-and-facilities/jpl/nasas-ecostress-monitors-californias-record-breaking-heat-wave/
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 沙、砾石或裸岩表面
  measurementSite: 地表或浅层土壤，非百叶箱气温
  duration: 夏季白天正午前后
  basis: 卫星反演或地面探头实测
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NASA Earth Observatory 给出伊朗卢特沙漠 2005 年卫星陆表温度 70.7 ℃，并指出地表可比气温高约 40 ℃。
    - >-
      同文引用 1915 年亚利桑那沙漠实测：地表下 0.4 厘米为 71.5 ℃，离地约 1.2 米气温为 42.5
      ℃；正文据此说明地表与气温的口径差异。
    - >-
      NASA ECOSTRESS 在死亡谷记录到 50.29 ℃ 的地表温度，说明同一地区不同时刻差异很大；正文取 70 ℃（343
      K）作为夏季白天代表值。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  70 ℃ 是干旱裸地夏季白天的圆整代表值；沙色、含水量、风速、云量和植被覆盖都会改变结果。
  卫星像元是面积平均，地面探头是点测量，两者不能直接等同；夜间地表会迅速冷却。
visual:
  template: planet-environment
  scene: temperature.object
  caption: 沙漠地表温度
  note: 画面为沙漠地表高温的示意表达，非按比例、非观测重建；沙丘、热浪与色温均为解释性示意， 不代表真实卫星像元或具体沙漠地点。
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

沙漠地表温度是沙、砾石或裸岩表面的温度，不是气象站百叶箱内的空气温度。夏季白天，干旱沙漠的地表可达到 60–70 ℃；NASA 的卫星观测在伊朗卢特沙漠记录到 70.7 ℃ 的陆表温度，并指出这类地表可比气温高约 40 ℃。[1] 本条取 70 ℃（343 K）作为代表值。它描述的是地表吸收太阳辐射后的热状态，而不是人头部高度处的气温。

## 怎样知道

卫星遥感反演“陆表温度”（land surface temperature），红外传感器读取地表发射的辐射；地面站则可用埋在浅层的温度计测量土壤温度。[1] NASA 还引用了 1915 年亚利桑那沙漠的实测：正午阳光下、地表下 0.4 厘米处为 71.5 ℃，而离地约 1.2 米的气温为 42.5 ℃。[1] ECOSTRESS 在死亡谷也测到 50.29 ℃ 的地表温度，说明同一地区不同时刻差异很大。[2] 这些方法给出的是不同尺度的平均或点值。

## 数值与口径

343 K 等于 69.85 ℃，约 70 ℃。60–70 ℃ 是夏季白天裸地的常见范围，但沙色、含水量、风速和云量都会改变结果；深色岩石比浅色沙更热。[1] 卫星像元是面积平均，地面探头是点测量，两者不能直接等同。夜间地表会迅速辐射冷却，日较差可远大于气温日较差。引用时还应说明是卫星反演、土壤探头还是手持红外测温。

## 常见误解

第一，把地表温度当成气温；气象站气温有百叶箱和高度标准，地表温度没有。第二，把卫星像元读数当成某一点的精确温度；像元内包含不同材质和阴影。第三，认为沙漠永远比空气热；夜间或强风时地表可接近甚至低于气温。第四，把 70 ℃ 当成“沙漠到处如此”；它出现在夏季正午、干燥、无植被的裸地。

## 与其他温度的关系

70 ℃ 高于 death-valley 的 56.7 ℃ 空气纪录，也高于 room-temperature，但低于 boiling-water 的 100 ℃ 和 oven 的 180 ℃ 设定。与 sun-surface 相比，它只是地球表面在太阳辐射下的局地加热，远未达到恒星表面温区。把地表温度与气温并列时，必须记住前者没有标准气象观测高度。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
