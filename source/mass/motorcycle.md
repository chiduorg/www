---
id: mass.motorcycle
title: 摩托车：214 kg，本田 CB750 制造商整备质量
summary: 本田 CB750 的整备质量约 214 kg，取自制造商整车规格：满油、含全部工作液，不含骑手与行李。整备质量不是干重，两者通常差十几到二十千克。
dimension: mass
category: 工程与交通
displayValue: 214 kg
quantity:
  value: 214
  unit: kg
  measure: 制造商整备质量（满油、含全部工作液、电池与随车工具，不含骑手与行李）；本田 CB750 规格
  approximate: false
grade: A
related:
  - mass.piano
  - mass.dog
  - mass.adult-human
  - space.motorcycle
  - space.everest
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
  - title: Honda
    url: 'https://www.honda.com/'
    publisher: Honda Motor Co.
    accessed: '2026-11-09'
  - title: Yamaha Motor USA
    url: 'https://usa.yamaha.com/'
    publisher: 'Yamaha Motor Corporation, U.S.A.'
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
tags:
  - 质量
  - 摩托车
  - 整备质量
  - 交通工具
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商整备质量（满油、含全部工作液、电池与随车工具，不含骑手与行李）；本田 CB750 规格
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 214 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: 2.33
  position: 45.52
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
titleEn: Honda CB750
---
## 这个读数是什么

本田 CB750 的整备质量取 214 kg。这个数字来自制造商公布的整车规格，指车辆在满油、含全部工作液（机油、冷却液、刹车液）、装上电池与随车工具后的质量，不含骑手、乘客与行李。[1] 工程上把这一口径叫整备质量，英文常写作 curb mass 或 wet weight。

## 口径与不确定度

整备质量与干重不是一回事：干重不含燃油与部分工作液，通常比整备质量轻十几到二十千克，CB750 的油箱容量对应十几千克汽油，这个差别不能忽略。同一车型不同年份与不同配置的整备质量也会有变化，所以本条只采用制造商规格，不写“精确到小数点后两位”，也不采用百科网站的估算值。[2] 引用工程物的质量时，第一件事是确认厂商写的是整备质量还是干重。

## 怎么测出来的

制造商在型式认证与出厂检验中用整车地磅称量，按标准加注燃油与工作液后读数；媒体评测常用同一台地磅复称，结果与厂方规格相差通常在几千克以内。整备质量还会进入制动距离、油耗与排放的认证计算，所以厂商必须给出可复现的口径。[3] 这些测量都比“按密度和体积估算”可靠，因为它直接称的是整车。

## 量级位置

214 kg 位于 B7 带上段，约为成人 70 kg 的百分之三百零六，比拉布拉多犬 30 kg 重约七倍，比三角钢琴 300 kg 轻约百分之二十九。[1] 它与一台大型摩托车、一艘小型快艇的拖车同处几百千克的量级。质量在这里第一次由“整备”定义，而不是由生物均值定义。

## 怎么继续走

想看同一量级、同样由制造商给规格的物体，去 mass.piano；想回到人体的锚点，去 mass.adult-human；想确认这条轴向上还有多大空间，可以继续走到 B8 带的汽车条目。工程物的质量读数永远附带一个口径，读之前先问“含不含油”。
