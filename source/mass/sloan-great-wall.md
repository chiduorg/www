---
id: mass.sloan-great-wall
title: 斯隆长城：2.0×10⁴⁸ kg，SDSS 巡天发现的星系长链
summary: >-
  斯隆长城是斯隆数字巡天在红移约 0.08 处发现的星系超结构，总质量约 2.0×10⁴⁸ kg，折合约 1×10¹⁸
  个太阳质量。口径为含暗物质的总质量，数值由 SDSS 红移巡天与结构模型估算，相对不确定度约 50%，只能给量级。
dimension: mass
category: 星系与宇宙
displayValue: 2.0×10⁴⁸ kg
quantity:
  value: 2e+48
  unit: kg
  measure: 斯隆长城的总质量（含暗物质，约 1×10¹⁸ 太阳质量）；由 SDSS 红移巡天星系密度场与结构模型估算，相对不确定度约 50%
  approximate: false
grade: C
mass:
  type: total
  includesDarkMatter: true
  method: SDSS redshift survey and structure modeling
  uncertainty:
    value: 0.5
    unit: relative
related:
  - mass.boss-great-wall
  - mass.hercules-corona-borealis-great-wall
  - mass.total-matter-universe
  - space.sloan-great-wall
  - space.milky-way
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
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: ESA Planck
    url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck/Planck_and_the_cosmic_microwave_background'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 宇宙学
  - 大尺度结构
  - 超结构
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 斯隆长城的总质量（含暗物质，约 1×10¹⁸ 太阳质量）；由 SDSS 红移巡天星系密度场与结构模型估算，相对不确定度约 50%
  precision: C 级；记录值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 50%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B16 宇宙尺度 · 2.0×10⁴⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B16
  bandLabel: 宇宙尺度
  log10: 48.301
  position: 94.95
  color: '#c9d8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Sloan Great Wall
---
## 这个读数是什么

斯隆长城是斯隆数字巡天在红移约零点零八处发现的星系超结构，总质量约 2.0×10⁴⁸ kg，折合约 1×10¹⁸ 个太阳质量。[1] 口径为总质量，包含暗物质，因为可见星系只占整个结构质量的一小部分。[2] 它由多个超星系团沿一条弧线排列，跨度超过十亿光年，长期被列为已知最大的结构之一。

## 口径与不确定度

质量指整个结构的总引力质量，含星系、星系际气体与暗物质，不区分可见与不可见成分。[2] 数值由 SDSS 红移巡天的星系密度场配合结构模型估算，相对不确定度约百分之五十，因此定为 C 级。[3] 结构边界与质量定义本身有争议，只能给量级：若改用速度场或弱引力透镜标定，中心值会偏移，但仍落在同一区间。

## 怎么测出来的

SDSS 先用多波段成像选出星系，再用光谱测出红移，得到百万量级星系的三维分布。[1] 长城在其中表现为一条明显的高密度带，研究者用平滑密度场与成团性模型把它换算成总质量。[3] 暗物质无法直接看到，模型要靠数值模拟给出星系与暗物质的比例，这一步是不确定度的主要来源。

## 量级位置

2.0×10⁴⁸ kg 与 BOSS 长城同量级，都在 10¹⁸ 太阳质量级，比银河系重约十万倍。[1] 在 B16 带里它位于最下沿，向上到 10⁴⁹ kg 还有一堵更大的墙，向下则接到星系团与单颗星系。[2] 这个位置提醒我们：所谓最大结构，取决于巡天看到多远、边界怎么切。

## 怎么继续走

想对照另一种巡天发现的长城，去 mass.boss-great-wall；想看目前报道中跨度和质量都更大的一堵，去 mass.hercules-corona-borealis-great-wall；想回到宇宙总量，去 mass.total-matter-universe。[3] 两条墙共享"含暗物质的总质量"口径，而宇宙那一条是全宇宙体积内的成分统计，不能直接并列排序。
