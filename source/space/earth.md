---
id: space.earth
title: 地球
titleEn: Earth
dimension: length
category: 行星与太阳系
summary: 地球看起来近似球形，却没有一个适用于所有问题的“地球半径”。本页采用体积等效平均直径，结合赤道、两极与地表起伏，说明天体尺度和测地口径的区别。
quantity:
  value: 12742000
  unit: m
  measure: 体积等效平均直径（2 × 6371 km）
  approximate: true
displayValue: '12,742 km（体积等效平均直径）'
related:
  - space.moon
  - space.everest
  - mass.earth
  - time.earth-age
  - temperature.sea-surface
  - space.solar-system
reviewStatus: reviewed
sources:
  - title: Earth Fact Sheet
    url: 'https://nssdc.gsfc.nasa.gov/planetary/factsheet/earthfact.html'
    publisher: NASA NSSDC
    accessed: '2026-11-04'
  - title: Is the Earth round?
    url: 'https://oceanservice.noaa.gov/facts/earth-round.html'
    publisher: NOAA / National Ocean Service
    accessed: '2026-11-04'
  - title: "Moon Facts — Orbit and Rotation; Size and Distance"
    url: "https://science.nasa.gov/moon/facts/"
    publisher: "NASA Science"
    accessed: '2026-11-24'
  - title: "王毅出席中尼共同宣布珠峰高程活动"
    url: "https://www.mfa.gov.cn/gjhdq_676201/gj_676203/yz_676205/1206_676812/xgxw_676818/202012/t20201208_9301006.shtml"
    publisher: "中华人民共和国外交部"
    accessed: '2026-11-24'
legacy:
  id: earth
  icon: "\U0001F30D"
  relatedLabels: 大地测量学、地震学、板块构造、磁场、大气层、宜居带
conditions: 采用等体积球的平均半径；赤道和极向直径不同。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 全文依据所列来源重新撰写；移除未逐条核实的旧历史、人物及延伸断言。
    - 科学来源核对不等于外部同行评审；正文以 CC BY 4.0 提供。
    - '2026-11-24 L2 深化：补口径、误差账本与跨轴入口；量值、审核状态和 visual 保持不变。'
  originalQuantity:
    value: 12742000
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  scene: space.earth
  caption: 地球 · 我们的起点
  note: 采用体积等效平均直径；地表纹理映射与大气边缘光为示意，未重建真实扁率和实时气象。
measureType: 尺寸
tags:
  - 行星与太阳系
  - 尺寸
  - 行星与地理
conceptGroup: earth
---
## 先把口径说清楚

“地球直径 12,742 公里”是一个经过约定的平均值。地球自转使它沿赤道方向略微鼓起，山脉、海沟、冰盖和潮汐又让真实表面偏离光滑椭球。NOAA 把测量地球大小、形状、重力场和地表点位置的工作归入大地测量学；所以“地球多大”首先不是背一个数，而是选一套参考面。[2]

## 三个半径各回答什么

NASA 事实表给出体积等效平均半径 6,371 公里、赤道半径 6,378.137 公里、极半径 6,356.752 公里。[1] 本页取平均半径的两倍，得到 12,742 公里。它表示“一个与地球体积相同的球有多大”，不是从任意方向穿过地心都能得到的距离。赤道直径约 12,756 公里，极直径约 12,714 公里；三个数都对，只是问题不同。

## 扁率不是测量误差

赤道直径与极直径相差约 42–43 公里，相对 12,742 公里只有约 0.33%。这个差别来自自转造成的扁率，是地球形状的一部分，不是仪器坏了。[1] 做全球平均、轨道估算或数量级比较时，可以用平均球；做卫星定位、重力场或经纬度计算时，参考椭球和大地水准面就不能被一个整数替代。[2]

## 为什么常用平均直径

赤道直径更大，极直径更小。如果只报赤道直径，全球体积比较和轨道尺度会偏高；只报极直径，又会偏低。平均球把体积作为共同尺度，方便与月球、其他行星和太阳比较，也能让“地球直径是月球直径的几倍”有一个稳定分母。但它不适合精密定位：导航、重力场和卫星轨道需要参考椭球，而不是一个平均球。同一个地球，在不同问题里要用不同口径。

## 从局部基线到卫星测地

地面测量先量一段可到达的基线，再用角度和天文观测推算更大的弧长；现代大地测量则把卫星测高、全球定位、重力测量和地球自转参数拼成全球参考框架。[1][2] 不同框架给出的“半径”可能对应平均球、参考椭球或局部大地水准面。读到地球半径时，先问它属于哪套参考面，比记住更多小数更有用。

## 质量与重力：另一个“地球大小”

同一张事实表还给出地球质量约 5.97×10²⁴ 千克。[1] 质量与半径一起决定表面重力，也决定大气标高和卫星轨道。质量不是“体积乘以一个密度”这么简单：地球内部密度随深度变化，地核、地幔和地壳各自不同。长度轴说“多大”，质量轴说“有多重”，两者不能互相替代。

## 五轴对照

在长度轴，地球是 10⁷ 米级的行星；在质量轴，它是 10²⁴ 千克级的岩石行星；在时间轴，它记录约 45 亿年的演化；在温度轴，海表、大气和内部各有不同温区。把它们分开，才能避免“地球变大等于变重”或“地球直径就是海平面到地心距离”这类混淆。五个轴都在描述同一个对象，却各自回答不同问题；跨轴阅读不是把数字并排，而是把问题并排。

## 怎么继续走

想比较地球与月球，去 space.moon_diameter；想看它有多重，去 mass.earth；想看它什么时候形成，去 time.earth-age；想看海表温度，去 temperature.sea-surface。长度只是认识地球的一条入口，不是全部。

## 延伸核对

补充的来源 [3]（NASA Science）、[4]（中华人民共和国外交部） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
