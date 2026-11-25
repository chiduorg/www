---
id: temperature.moon-night
title: 月球夜侧
titleEn: Lunar nightside surface temperature
dimension: temperature
category: 低温
summary: >-
  月球夜侧地表在赤道附近约 100 K（−173 ℃）。月夜持续约 14 个地球日，表面持续向太空辐射散热；
  这个数值是夜侧表面参考，不是月球全球平均或月壤内部温度。
quantity:
  value: 100
  unit: K
  measure: 月球夜侧表面温度
  approximate: true
  measureLabel: 月球夜侧表面温度
displayValue: 约 100 K（−173 ℃）
related:
  - space.moon
  - temperature.moon-day
  - temperature.absolute-zero
  - temperature.mercury-day
  - temperature.pluto-surface
  - temperature.lunar-permanent-shadow
reviewStatus: reviewed
sources:
  - title: Moon Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html'
    publisher: NASA NSSDCA
    accessed: '2026-11-06'
  - title: 'Moon Facts: Earth''s Moon'
    url: 'https://solarsystem.nasa.gov/moons/earths-moon/in-depth/'
    publisher: NASA Science
    accessed: '2026-11-06'
  - title: The Lunar Thermal Environment
    url: 'https://www.diviner.ucla.edu/science'
    publisher: UCLA Diviner Lunar Radiometer Experiment
    accessed: '2026-11-06'
conditions:
  body: 月球
  location: 赤道及夜侧背阳表面
  method: 阿波罗热流实验、轨道器红外遥感与热模型
  basis: 赤道昼夜范围 95–390 K，夜间可降至 95–100 K
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NSSDC 月球资料表给出赤道昼夜 95–390 K；NASA 月球资料页给出黑暗中约 −173 ℃（约 100 K）；Diviner
      资料称夜间低于 100 K。
    - 100 K 与资料表的 95 K 下限接近，取整为夜侧代表值；极区永久阴影区可更低，已写入不确定度。
    - 正文区分夜侧表面、月壤内部与月球外逸层，并说明月球自转周期造成的长夜。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  100 K 是月球赤道夜侧表面的圆整参考值，不是全月球夜侧均温；不同资料给出约 95–100 K。 极区永久阴影坑可低到约 30–50
  K，地形遮蔽和坡向也会造成差异。 表面温度不等于月壤内部温度，几厘米深处昼夜波动显著减弱；月球外逸层极稀薄，不存在可比的“大气温度”。
visual:
  template: planet-environment
  profile: moon
  caption: 月球夜侧表面
  note: 画面为月球夜侧表面温度示意，非按比例、非观测重建；明暗、地形与颜色均为解释性处理， 不代表真实夜间遥感影像。各对象分别调整显示大小，不能据此比较尺寸。
  backdrop: deep-night
  color: '#8f99a6'
  symbol: Moon
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
conceptGroup: moon
---
## 它是什么

月球夜侧是背向太阳的半球，夜侧表面温度指这一区域表层的温度，通常取赤道附近月夜中段。月球自转周期约 27.3 个地球日，一个昼夜各约 14 个地球日，表面有足够时间向太空辐射散热。[1][2] 赤道夜间可降到约 100 K，即 −173 ℃。

## 怎样测到

阿波罗热流实验曾在月面直接记录温度，轨道器红外遥感则提供大范围夜间分布。[3] NSSDC 月球资料表给出赤道昼夜范围 95–390 K；NASA 月球资料页给出黑暗中约 −173 ℃；Diviner 资料称赤道夜间低于 100 K。[1][2][3] 夜侧没有太阳辐射，遥感只能接收月面自身的热辐射，反演对发射率和浅层温度梯度较敏感。

## 数值与口径

100 K 等于 −173.15 ℃，约 −173 ℃。它是赤道夜侧表面的代表值，不是整个夜半球的平均温度。[1][2] 极区永久阴影坑可低到约 30–50 K，而低纬度夜间多在 95–100 K。表面温度与月壤内部温度也不同：月壤导热差，几厘米深处对夜间的降温响应明显滞后且幅度更小。[3]

## 常见误解

第一，把月球夜侧想成“接近绝对零度”。100 K 仍高于液氮的 77.4 K 和液氦的 4.2 K，并不是极低温实验温区。[1] 第二，认为夜侧到处同温。地形遮蔽、坡向和表层物质会改变散热速度。第三，把月夜温度当作月球大气温度。月球只有极稀薄的外逸层，无法像地球大气那样建立温度剖面。[2][3]

## 与其他温度的关系

100 K 低于水的冰点、室温与海表平均温度，也低于火星夜侧约 150 K，但高于冥王星表面 33–55 K 的区间。[1][2] 与月球昼侧的 390 K 相比，昼夜差约 290 K。月球表面在这样低的温度和近真空条件下无法稳定存在液态水，这与夜侧低温及极低气压共同有关。[1][3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 100 K，即 -173.1 ℃（按 T/K−273.15 换算）；约为液氮沸点（77 K）的 1.3 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10² 量级附近。

读图时先看量级，再看倍数：10² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
