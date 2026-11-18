---
id: temperature.moon-day
title: 月球昼侧
titleEn: Lunar dayside surface temperature
dimension: temperature
category: 中温
summary: >-
  月球昼侧受照地表在赤道正午附近可达约 390 K（117 ℃）。它是无大气天体的昼侧表面参考值，
  既不是月球全球平均温度，也不是月壤深处或所谓月球大气的温度。
quantity:
  value: 390
  unit: K
  measure: 月球昼侧表面温度
  approximate: true
  measureLabel: 月球昼侧表面温度
displayValue: 约 390 K（117 ℃）
related:
  - space.moon
  - temperature.moon-night
  - temperature.mercury-day
  - temperature.sun-surface
  - temperature.room-temperature
  - temperature.water-freezing
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
  location: 赤道及昼侧受照表面
  method: 阿波罗月面实验、轨道器红外遥感与热模型
  basis: 赤道昼夜范围 95–390 K，正午日照区可接近 400 K
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NSSDC 月球资料表给出赤道昼夜温度范围 95–390 K；NASA 月球资料页给出满日照约 127 ℃（约 400 K）、黑暗约 −173
      ℃（约 100 K）。
    - UCLA Diviner 资料称赤道正午平均表面温度接近 400 K；与 NSSDC 的 390 K 差异来自参考时段、表面反照率与圆整。
    - 正文区分昼侧表面、全球平均与月壤内部温度，并说明无大气条件下的昼夜差异。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  390 K 是月球赤道昼侧表面的圆整参考值，不是全月球昼侧均温；正午日照区可接近 390–400 K。
  温度随纬度、太阳高度、反照率、坡向和月壤热惯量变化，极区低太阳高度处明显更低。
  表面温度也不等于月壤深处温度，后者昼夜波动更小；月球没有可定义的全球大气温度。
visual:
  template: planet-environment
  profile: moon
  caption: 月球昼侧受照表面
  note: >-
    画面为月球昼侧表面温度示意，非按比例、非观测重建；地形起伏、阴影、颜色与光照均为解释性处理，
    不代表真实遥感影像或具体着陆点。各对象分别调整显示大小，不能据此比较尺寸。
  backdrop: lunar-dust
  color: '#c9c2b6'
  symbol: Moon
  scene: temperature.object
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
conceptGroup: moon
---
## 它是什么

月球昼侧指的是月球面向太阳的半球，所谓昼侧表面温度就是这一区域表层的温度，最常引用的是赤道正午前后。月球几乎没有大气，热量无法靠大气环流从昼侧搬到夜侧，所以受照面升温快，背阳面散热也快。[1][2] 赤道附近的昼夜范围约 95–390 K，昼侧高端约 390 K，即 117 ℃。

## 怎样测到

阿波罗月面实验装置曾直接测量表层与浅层温度，长期覆盖则依靠轨道器红外辐射计，例如月球勘测轨道器的 Diviner 仪器。[3] NASA 的月球资料页给出满日照时约 127 ℃，约合 400 K；NSSDC 月球资料表给出赤道昼夜 95–390 K。[1][2] 遥感反演要把辐射亮度换算成温度，必须同时估计表面反照率、发射率和坡度，因此不同数据集会给出略有差别的数值。

## 数值与口径

390 K 等于 116.85 ℃，约 117 ℃。它描述的是昼侧受照表面，不是全月球平均温度，也不是月壤深处温度。[1][2] 月球全球平均通常接近有效温度约 270 K，而昼侧正午表面可以比这个平均值高出一百多开尔文；这说明“平均温度”和“昼侧表面温度”是两个不同口径。[1] 引用时最好同时给出区域、太阳高度和观测方式。

## 常见误解

第一，把 390 K 当成月球整体温度。月球夜侧可降到约 100 K，昼夜差接近 300 K。[1][2] 第二，把表面温度当成深层温度。月壤导热差，几厘米以下的昼夜波动明显减弱。第三，把月球当作有普通大气的天体。月球只有极稀薄的外逸层，所谓“月球大气温度”不能与表面温度混用。[2][3] 第四，忽略反照率：同样日照下，颜色较亮、反射较强的区域会更凉。

## 与其他温区的关系

390 K 高于水的冰点 273.15 K，也高于地球海表平均约 290 K，但低于水星昼侧约 700 K。[1][2] 它接近家用烤箱的低档烘烤温区，却远低于火焰温度。把昼侧与夜侧放在一起看，同一颗天体仅因有无日照就跨越冰点上下两个温区，这正是无大气天体热环境的典型特征。[2][3]
