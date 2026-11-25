---
id: space.earth-moon-distance
title: 地球到月球距离
titleEn: Earth-Moon Distance
dimension: length
category: 行星与太阳系
summary: 'NASA月球事实表给出的轨道半长轴约为384,400公里。本页用它作为地月距离参照；月球轨道并非正圆，所以实际地心到月心距离会随轨道位置改变。'
quantity:
  value: 384400000
  unit: m
  measure: 月球绕地球轨道的平均半长轴
  approximate: true
displayValue: '384,400 km（轨道半长轴）'
related:
  - space.earth
  - space.moon
  - space.moon_diameter
  - space.light-second
  - mass.moon
  - time.moon-age
reviewStatus: reviewed
sources:
  - title: Moon Fact Sheet — Orbital Parameters
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/moonfact.html'
    publisher: NASA NSSDC
    accessed: '2026-11-06'
  - title: "Moon Facts"
    url: 'https://science.nasa.gov/moon/facts/'
    publisher: "NASA Science"
    accessed: '2026-11-06'
  - title: Moon — Distinctive features
    url: 'https://www.britannica.com/place/Moon/Distinctive-features'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: "Is the Earth round?"
    url: "https://oceanservice.noaa.gov/facts/earth-round.html"
    publisher: "NOAA / National Ocean Service"
    accessed: '2026-11-24'
  - title: "Moon Facts — Orbit and Rotation; Size and Distance"
    url: "https://science.nasa.gov/moon/facts/"
    publisher: "NASA Science"
    accessed: '2026-11-24'
legacy:
  id: earth-moon-distance
  icon: "\U0001F319"
  relatedLabels: 月球激光测距、阿波罗计划、近地点、远地点、潮汐力、广义相对论检验、行星际空间
conditions: 对象为地月系统；样本是月球绕地球的轨道；测量口径为地心到月心的平均半长轴，不是地表到月面距离、某一瞬间距离或地球引力边界。
uncertainty: '半长轴384,400公里是平均轨道值；瞬时地心—月心距离随位置在约363,300–405,500公里间变化，不同历表还会有公里级差异。'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch打开NASA月球事实表、NASA月球数据页与Britannica月球条目，核对半长轴、近地点与远地点。
    - '区分平均轨道参数、瞬时距离与地表到月面距离，不把384,400公里写成固定值。'
  originalQuantity:
    value: 380000000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: distance
  variant: centers
  color: '#a1b5c4'
  referenceAxis: x
  caption: 以轨道半长轴表示的地月距离参照
  note: 中心间标线表示采用的平均轨道参数，不是瞬时固定距离；地球月球端点为示意放大，非按比例，非观测重建。
  framePadding: 0.34
  sourceMeasure: 月球绕地球轨道的平均半长轴
  scene: space.object
measureType: 距离
tags:
  - 行星与太阳系
  - 距离
  - 行星与地理
---
## 它是什么

地月距离是地球中心到月球中心的距离。本条采用轨道半长轴，不是地表到月面，也不是某一瞬间的固定值。[1] 月球轨道略呈椭圆，地球与月球还围绕共同质心运动，因此“距离”本身随轨道位置变化。天文学里常用平均半长轴作一维尺度，但观测资料也会给出近地点和远地点。

## 怎样知道

NASA月球事实表列半长轴384,400公里，近地点约363,300公里、远地点约405,500公里；NASA数据页也给同一平均轨道距离。[1][2] 阿波罗任务在月面放置反光镜后，地面激光测距可以测到厘米级距离变化，轨道模型据此改进。Britannica把平均距离概括为约384,000公里。[3] 这些方法测量的是地心—月心，而不是地表两点。

## 数值与口径

384,400公里是平均半长轴；实际距离在约36.3万到40.5万公里间变化，月球轨道偏心率0.0549。[1][2] 地心—月心与地表—月面还差约一个地球半径加一个月球半径。近地点、远地点和半长轴是三种不同的轨道量；若要比较“月球看起来多大”，还要把距离与月球直径一起考虑。月球每年远离地球约3.8厘米，长期看平均距离并非永恒不变。

## 常见误解

“月球总是离地球384,400公里”不对：这是平均轨道参数；近地点与远地点相差约4万公里。也不能把它当成地球引力的固定边界。[1][2][3] 另一种误解是把地月距离当成光走1秒；实际光走这段平均距离约需1.28秒。距离变化还会影响潮汐和视直径，不能把平均值当成每天的状态。

## 与其他尺度的关系

384,400公里约是地球直径12742公里的30倍。光走这段距离约1.28秒，比一光秒299,792,458米略长。与日地平均距离1.496亿公里相比，地月距离约为其1/390。[3]

## 平均距离不是每天的距离

384,400 公里是轨道半长轴；近地点约 363,300 公里，远地点约 405,500 公里，相差约 4.2 万公里。[1][2] 月球轨道偏心率约 0.0549，地球与月球还绕共同质心运动。每天的距离要按轨道位置计算，不能用平均值代替。

## 地心—月心与地表—月面

激光测距量的是地面站到月面反射器的距离，再折算成地心—月心；两者相差约一个地球半径加一个月球半径。[2] 把“地球到月球”说成地表到月面，会让数字少约 8,000 公里。平均距离、瞬时距离和光行距离是三种口径。

## 五轴对照

在空间轴，地月平均距离约 38.4 万公里；在质量轴，月球质量约 7.346×10²² 千克；在时间轴，月球每年远离约 3.8 厘米；在温度轴，月面与地球环境差异极大。距离、质量与轨道演化要一起读。[1][2]

## 平均距离与瞬时距离

地月平均距离约 384,400 公里，但月球轨道是椭圆，近地点与远地点可差约 42,000 公里；潮汐与地震还会让瞬时距离在厘米级抖动。激光测月给出的是往返光行时换算的距离，精度可达毫米，但必须先扣除大气延迟与台站坐标。正文的 38.4 万公里是平均口径。[1][S1]

## 延伸核对

补充的来源 [4]（NOAA / National Ocean Service）、[5]（NASA Science） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
