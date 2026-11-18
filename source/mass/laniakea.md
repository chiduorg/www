---
id: mass.laniakea
title: 拉尼亚凯亚超星系团：约 2.0×10⁴⁷ kg，银河系所在的超星系团
summary: >-
  拉尼亚凯亚超星系团是以巨引源为中心的庞大结构，总质量约 2.0×10⁴⁷ kg，折合约 1×10¹⁷
  个太阳质量，口径包含暗物质。数值由星系流场与引力盆划分估算，相对不确定度约 50%，属量级估算。
dimension: mass
category: 超星系团
displayValue: 2.0×10⁴⁷ kg
quantity:
  value: 2e+47
  unit: kg
  measure: 拉尼亚凯亚超星系团总质量（含暗物质，约 1×10¹⁷ 太阳质量）；由星系流场与引力盆划分估算，相对不确定度约 50%
  approximate: true
grade: C
mass:
  type: total
  includesDarkMatter: true
  method: galaxy velocity flow and gravitational basin
  uncertainty:
    value: 0.5
    unit: relative
related:
  - mass.virgo-cluster
  - mass.cfa2-great-wall
  - mass.local-group
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
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: arXiv
    url: 'https://arxiv.org/'
    publisher: arXiv
    accessed: '2026-11-09'
tags:
  - 质量
  - 超星系团
  - 拉尼亚凯亚
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 拉尼亚凯亚超星系团总质量（含暗物质，约 1×10¹⁷ 太阳质量）；由星系流场与引力盆划分估算，相对不确定度约 50%
  precision: C 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 50%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 2.0×10⁴⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 47.301
  position: 93.87
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

拉尼亚凯亚超星系团是 2014 年依据星系流场划分出的结构，直径约五亿光年，银河系位于它的边缘，本条记录它的总质量约 2.0×10⁴⁷ kg，折合约 1×10¹⁷ 个太阳质量。[1] 口径包含暗物质。它包含约十万个星系，但星系的恒星质量总和只占总质量的很小一部分。[2] 它的名字在夏威夷语里意为“无边无际的天空”。

## 口径与不确定度

超星系团是由引力盆定义的区域，不是像星系团那样紧密束缚的天体，边界取决于速度场模型。[2] 本条采用含暗物质的引力质量口径。相对不确定度约 50%，因为流场测量受本动速度与距离误差影响，划分方法也有多种，结果属量级估算，故标近似、定 C 级。[3]

## 怎么测出来的

用星系的红移减去宇宙膨胀，得到本动速度，再据此画出流场。流场汇聚的区域被划为同一个引力盆，拉尼亚凯亚就是这样被界定的。[1] 巨引源位于其中心附近，它的引力主导了周围星系的运动。距离误差会直接放大速度误差，这是主要难点。[3]

## 量级位置

2.0×10⁴⁷ kg 位于 B15 带的最高一档，约为 CfA2 长城的十倍，约为室女座星系团的八十倍。[1] 它已接近可观测宇宙中最大结构的量级。再往上就进入宇宙网的整体描述。到这里，质量记录的对象从“天体”变成了“宇宙区域”，口径的不确定性也随之变大。

## 怎么继续走

想看它内部的星系团，去 mass.virgo-cluster；想看同量级的纤维结构，去 mass.cfa2-great-wall；想看银河系所在的引力群，去 mass.local-group。[2] 再往外，就超出本批的量程，进入可观测宇宙的整体尺度。到那一步，质量已经很难再用“称重”的方式来理解。
