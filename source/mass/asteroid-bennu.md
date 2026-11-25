---
id: mass.asteroid-bennu
title: 贝努：7.329×10¹⁰ kg，OSIRIS-REx 近距离称重
summary: >-
  贝努（101955 Bennu）总质量 7.329×10¹⁰ kg，由 OSIRIS-REx 的轨道跟踪与引力场拟合测定，相对不确定度约千分之一。平均密度约
  1190 kg/m³，是空隙率很高的碎石堆。
dimension: mass
category: 行星与小天体
displayValue: 7.329×10¹⁰ kg
quantity:
  value: 73290000000
  unit: kg
  measure: 101955 Bennu 总质量，由 OSIRIS-REx 近距离无线电跟踪与引力场拟合得到，相对不确定度约千分之一
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft-tracking
  uncertainty:
    value: 0.0012
    unit: relative
related:
  - mass.asteroid-itokawa
  - mass.asteroid-didymos
  - mass.comet-67p
  - space.bennu
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      本轮复核：结构、引用编号与量值口径完整；quantity.value 与 displayValue
      数量级一致，bound/zeroMass/approximate、mass.type 与 includesDarkMatter
      逐条核对；太阳、地球、银河、可观测宇宙、总物质、暗物质、哈勃体积、中微子与光子的人工复核一致。
    - >-
      来源可达性：72 个唯一来源中 48 个直接返回 2xx；其余为站点反爬、限流或超时。已修复 PDG 2024 目录页路径与中微子综述 PDF
      两个死链。本轮未逐页重读全文，沿用条目既有 accessed 记录。
    - >-
      reviewed 指结构与来源口径核对，不是外部同行评审；总质量、重子质量、恒星质量与含暗物质口径按 quantity.measure 与 mass
      字段保留。
sources:
  - title: OSIRIS-REx at asteroid Bennu
    url: 'https://www.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
  - title: JPL Small-Body Database
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: NASA Solar System Exploration
    url: 'https://solarsystem.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
tags:
  - 质量
  - 小行星
  - 贝努
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 101955 Bennu 总质量，由 OSIRIS-REx 近距离无线电跟踪与引力场拟合得到，相对不确定度约千分之一
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.12%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 7.329×10¹⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 10.865
  position: 54.69
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
titleEn: Bennu
---
## 这个读数是什么

贝努（101955 Bennu）的总质量是 7.329×10¹⁰ kg，约合七千三百万吨。[1] 它是一颗平均直径约 490 米的碳质近地小行星，也是 OSIRIS-REx 的采样目标。这个数是整颗碎石堆天体的总质量，包含表面松散碎石与内部固体物质，不包括已经被抛出的少量尘埃。

## 口径与不确定度

本条采用总质量口径，相对不确定度约千分之一，属于 A 级。[2] 贝努形状不规则、表面粗糙，若用体积乘密度估算，结果会随密度假设摆动；OSIRIS-REx 的引力测量避开了这一层。正文给出的平均密度约 1190 kg/m³ 是由质量除以形状模型体积反推的派生量，不是质量口径的输入。

## 怎么测出来的

OSIRIS-REx 于 2018 年抵达贝努，此后两年多在半径约一公里的近距离上做无线电跟踪与光学导航；探测器受到的引力加速度、太阳光压与热辐射被一起拟合，解出引力参数 GM，再换算成质量。[2] 采样触地时机械臂与着陆动力学也提供了独立的交叉校验。方法是航天器跟踪加轨道拟合，是环绕探测的标准做法。[3]

## 量级位置

7.329×10¹⁰ kg 位于 B10 带的最下段。[3] 它比糸川重约两倍，比图塔蒂斯轻约七百倍，比 67P 轻约一百三十六倍；与月球 7.35×10²² kg 相比轻十二个数量级。密度只有约 1.19 g/cm³，接近水的密度，说明这颗小行星内部空隙占了很大体积，是一堆被微弱引力拢住的碎石。

## 怎么继续走

想看它的形状、采样区与返回样品，去空间轴的 space.bennu；想比较同带质量，去 mass.asteroid-itokawa 与 mass.asteroid-didymos；想看彗核那一端的读数，去 mass.comet-67p。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 7.329×10¹⁰ 千克，换算后是 7.33×10¹⁰ 千克；约为埃菲尔铁塔（7300 千克）的 1×10⁷ 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10¹⁰ 量级附近。

读图时先看量级，再看倍数：10¹⁰ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
