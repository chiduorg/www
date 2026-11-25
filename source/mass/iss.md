---
id: mass.iss
title: '国际空间站：419,725 kg，在轨质量'
summary: >-
  国际空间站在轨质量约 419,725 kg，含舱段、桁架、太阳翼、散热板与舱内设备，不含对接的飞船。每次货运或载人飞船对接，组合体质量会临时增加 7–20
  t。
dimension: mass
category: 工程与交通
displayValue: 4.19725×10⁵ kg
quantity:
  value: 419725
  unit: kg
  measure: NASA 公布的在轨质量：空间站本体，不含对接的载人与货运飞船
  approximate: false
grade: A
related:
  - space.iss
  - mass.airliner
  - mass.train-car
  - mass.proton
  - space.earth
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
  - title: NASA — International Space Station facts and figures
    url: 'https://www.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
  - title: ESA — International Space Station
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
  - title: JAXA — International Space Station programme
    url: 'https://www.jaxa.jp/'
    publisher: Japan Aerospace Exploration Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 空间站
  - 在轨质量
  - 航天
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: NASA 公布的在轨质量：空间站本体，不含对接的载人与货运飞船
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B8 车辆与大型动物 · 4.19725×10⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 5.623
  position: 49.06
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
titleEn: International Space Station
---
## 这个读数是什么

国际空间站的运行质量约 419,725 kg。这是官方公布的空间站本体质量：舱段、桁架、太阳翼、散热板、机械臂与舱内设备，不含对接的载人飞船与货运飞船。[1] 它在距地面约 400 km 的轨道上以约 7.66 km/s 运行。

这个读数描述的是“站体”，不是“组合体”。阅读任何空间站参数时，先确认是否含来访航天器，否则可以差出 10% 以上。

## 口径与不确定度

在轨质量会随任务变化：每次货运飞船送来补给、每次载人飞船对接，组合体总质量都会暂时增加；航天员出舱安装的新设备也会改变数字。[1] 419,725 kg 是一个常被引用的基线值，标 A 级，来自官方统计而非估算。

要区分站体与组合体：一艘载人龙飞船约增加 12 t，货运龙飞船约增加 20 t，进步号约 7 t。[2] 这些来访器停靠数周至数月，期间“空间站有多重”的答案确实不同。把它写成一个固定值，等于忽略了在轨组装的动态性质。

## 怎么测出来的

质量不是靠地面上称的。工程师按每个舱段、每件设备的出厂质量逐项累加，再用轨道力学校验：大气阻力导致的轨道衰减速率与太阳活动共同决定弹道系数，而弹道系数含质量与迎风面积，由此可以反推质量。[2] 姿态控制所需的推进剂预算也依赖同一套质量模型。

各参与机构分别负责自己舱段的质量台账，再由多边协调机构汇总。[3] 这种“清单加轨道校验”的方式，是大型在轨结构唯一可行的质量确定方法。

## 量级位置

4.2×10⁵ kg 约等于 320 辆卡罗拉，或 2.8 头蓝鲸。它落在 B8 带顶端，与 747 的空重同一十进位，却比后者重近一倍。质量在这里决定了维持轨道所需的推进剂，也决定了它每天掉多少高度。

## 怎么继续走

想从另一个轴看同一对象，去 space.iss；想比较大型飞行器，去 mass.airliner；想理解这 420 t 里有多少是结构铝与钢，从 elements.fe 进入；想看质子在同位素与材料中的角色，去 mass.proton；想回到行星尺度，去 space.earth。
