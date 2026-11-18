---
id: mass.piano
title: 三角钢琴：300 kg，雅马哈 C3 制造商整备质量
summary: 雅马哈 C3 三角钢琴的整备质量约 300 kg，取自制造商型号规格，指可演奏状态的整机，不含琴凳与包装。铸铁板约占整机四成，是承受弦张力的骨架。
dimension: mass
category: 乐器
displayValue: 300 kg
quantity:
  value: 300
  unit: kg
  measure: 制造商整备质量（可演奏状态整机，含铸铁板、音板、弦列、击弦机与琴壳，不含琴凳与包装）；雅马哈 C3 规格
  approximate: false
grade: A
related:
  - mass.motorcycle
  - mass.adult-human
  - mass.golf-ball
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
  - title: Yamaha United States
    url: 'https://usa.yamaha.com/'
    publisher: Yamaha Corporation of America
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: NCBI Bookshelf
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
tags:
  - 质量
  - 钢琴
  - 整备质量
  - 乐器
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商整备质量（可演奏状态整机，含铸铁板、音板、弦列、击弦机与琴壳，不含琴凳与包装）；雅马哈 C3 规格
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 300 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: 2.477
  position: 45.67
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

雅马哈 C3 三角钢琴的整备质量取 300 kg。这个数字来自制造商公布的型号规格，指一架标准配置的 C3 在出厂状态下的质量，包含铸铁板、音板、弦列、击弦机、琴壳与键盘，不含琴凳、包装与运输支架。[1] C3 是常见的音乐学院与小型音乐厅用琴，长度约 186 厘米。

## 口径与不确定度

整备质量在这里指“可演奏状态”的整机质量，不含外包装；加了静音系统、演奏记录系统或特殊饰面，质量会有几十千克的变化。不同批次的用料与铸铁板厚度也会带来小幅差异，所以本条只采用制造商规格的百千克量级，不写小数点后两位，也不采用二手交易网站上的估算。[2] 搬运与楼板荷载计算必须以这个整备质量为准，而不是“听起来差不多”的数字。

## 怎么测出来的

钢琴出厂时整机吊装到地磅上称量，或在装配完成后用称重模块逐点测量、再累加得到整机质量；运输公司也会在装车前复称。质量分布很不均匀：铸铁板通常占整机质量的四成左右，是承受二十吨级弦张力的骨架。[3] 这也解释了为什么三角钢琴不能用普通家具的搬运方式——300 kg 集中在三条腿上，楼板与地板的局部荷载远高于按面积平均的值。

## 量级位置

300 kg 位于 B7 带上段，约为成人 70 kg 的四倍多，比摩托车 200 kg 重一半，比拉布拉多犬 30 kg 重十倍。[1] 它与一台小型三角钢琴、一批大型乐器的航空集装箱同处几百千克的量级。这里再次出现“整备质量”这个口径：工程物的质量总是附带条件。

## 怎么继续走

想看同量级、同样由制造商给规格的交通工具，去 mass.motorcycle；想回到人体的锚点，去 mass.adult-human；想继续向上看 B8 带的汽车，可以沿质量阶梯再走一个十进位。一个三百千克的读数背后，是搬运、楼板荷载与运输包装三套完全不同的工程问题。
