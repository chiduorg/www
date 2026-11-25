---
id: mass.boss-great-wall
title: BOSS 长城：2.0×10⁴⁸ kg，十亿光年尺度的星系超结构
summary: >-
  BOSS 长城是红移约 0.47 处的星系超结构，总质量约 2.0×10⁴⁸ kg，折合约 1×10¹⁸
  个太阳质量。口径为含暗物质的总质量，数值由红移巡天的星系密度场与结构模型反推，相对不确定度约 50%，只能给量级。
dimension: mass
category: 星系与宇宙
displayValue: 2.0×10⁴⁸ kg
quantity:
  value: 2e+48
  unit: kg
  measure: BOSS 长城的总质量（含暗物质，约 1×10¹⁸ 太阳质量）；由重子振荡光谱巡天红移数据与结构模型反推，并非直接称重，相对不确定度约 50%
  approximate: false
grade: C
mass:
  type: total
  includesDarkMatter: true
  method: redshift survey and structure modeling
  uncertainty:
    value: 0.5
    unit: relative
related:
  - mass.sloan-great-wall
  - mass.hercules-corona-borealis-great-wall
  - mass.observable-universe
  - space.milky-way
  - temperature.cmb
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
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: ESA Planck
    url: 'https://sci.esa.int/web/planck'
    publisher: European Space Agency
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
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
  scope: BOSS 长城的总质量（含暗物质，约 1×10¹⁸ 太阳质量）；由重子振荡光谱巡天红移数据与结构模型反推，并非直接称重，相对不确定度约 50%
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
titleEn: BOSS Great Wall
---
## 这个读数是什么

BOSS 长城是重子振荡光谱巡天在红移约零点四七处识别出的星系超结构，总质量约 2.0×10⁴⁸ kg，折合约 1×10¹⁸ 个太阳质量。[1] 口径是总质量，包含暗物质，因为这类结构靠引力把星系与暗物质晕一起束缚在一起。[2] 它由若干超星系团沿一条弧线连成，跨度接近十亿光年，长期被列为已知最大的结构之一。

## 口径与不确定度

这里的质量把整个结构当成一个引力系统来算，包含星系、星系际气体和暗物质，不区分各成分。[2] 它由红移巡天的星系密度场叠加大尺度结构模型反推，并不是直接称重，相对不确定度约百分之五十，因此只定为 C 级。[3] 结构边界与质量定义本身有争议，只能给量级：换一种边界阈值，数值就会明显移动。

## 怎么测出来的

巡天先测大批星系的红移，把它们的空间位置画成三维分布，再用星系成团性模型把密度起伏换算成质量。[1] 这类方法依赖星系偏袒因子与暗物质晕之间的统计关系，需要宇宙学模拟来标定。[3] 样本量虽大，但结构形状不规则，边界只能人为划定，所以结果是一个区间而不是一个精确数。

## 量级位置

2.0×10⁴⁸ kg 落在 B16 带的下沿，约是银河系的十万倍，却只有可观测宇宙普通物质总量的十万分之一。[1] 它比单个大星系团重两个量级，说明长城是结构的结构：星系团再串成纤维状网络。[2] 在整条质量阶梯上，它第一次把天体的概念推到超出单个引力束缚系统的尺度。

## 怎么继续走

想看同量级的另一堵墙，去 mass.sloan-great-wall；想看更大的那一堵，去 mass.hercules-corona-borealis-great-wall；想换到宇宙整体的口径，去 mass.observable-universe。[1][3] 三条分别给出同量级参照、更大一级的边界和宇宙尺度的总量，注意后者的质量口径与墙并不相同。这三条都不是直接称重，读的时候要把不确定度放在心上。
