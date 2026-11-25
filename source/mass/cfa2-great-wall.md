---
id: mass.cfa2-great-wall
title: CfA2 长城：约 2.0×10⁴⁶ kg，星系组成的纤维状大尺度结构
summary: >-
  CfA2 长城是星系红移巡天发现的纤维状大尺度结构，总质量约 2.0×10⁴⁶ kg，折合约 1×10¹⁶
  个太阳质量，口径包含暗物质。数值由红移巡天与结构模型估算，相对不确定度约 50%，属量级估算。
dimension: mass
category: 星系与宇宙
displayValue: 2.0×10⁴⁶ kg
quantity:
  value: 2e+46
  unit: kg
  measure: CfA2 长城总质量（含暗物质，约 1×10¹⁶ 太阳质量）；由星系红移巡天与结构模型估算，相对不确定度约 50%
  approximate: true
grade: C
mass:
  type: total
  includesDarkMatter: true
  method: redshift survey and structure modeling
  uncertainty:
    value: 0.5
    unit: relative
related:
  - mass.coma-cluster
  - mass.laniakea
  - mass.virgo-cluster
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
  - 大尺度结构
  - CfA2长城
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: CfA2 长城总质量（含暗物质，约 1×10¹⁶ 太阳质量）；由星系红移巡天与结构模型估算，相对不确定度约 50%
  precision: C 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 50%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 2.0×10⁴⁶ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 46.301
  position: 92.8
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
titleEn: CfA2 Great Wall
---
## 这个读数是什么

CfA2 长城是二十世纪八十年代由星系红移巡天发现的纤维状结构，长边约五亿光年，本条记录它的总质量约 2.0×10⁴⁶ kg，折合约 1×10¹⁶ 个太阳质量。[1] 口径包含暗物质。它内部星系的恒星质量总和只占很小一部分，绝大部分质量分布在星系之间的暗物质与气体里。[2] 它是当时发现的宇宙最大结构之一。

## 口径与不确定度

长城不是一个引力束缚的单一天体，而是星系密度偏高的结构，质量随所选边界剧烈变化。[2] 本条采用含暗物质的估算口径。相对不确定度约 50%，因为边界没有公认定义，巡天又受观测天区限制，数值只能算量级估算，故标近似、定 C 级。[3]

## 怎么测出来的

红移巡天测出大量星系的位置与距离，把三维分布画出来后，密度高的片状与纤维状结构就显现出来。[1] 再结合结构形成的数值模拟，用星系密度反推总质量，并假设星系与暗物质的偏置关系。边界和偏置参数都是模型输入，误差由此而来。[3]

## 量级位置

2.0×10⁴⁶ kg 位于 B15 带上段偏外，约为后发座星系团的七倍，约为拉尼亚凯亚超星系团的十分之一。[1] 它已不是单个星系团，而是由多个团与群串成的结构。到这一步，“质量”更像是把一片宇宙区域里的物质加起来，而不是称一个孤立天体。边界一改，数值就会跟着改。

## 怎么继续走

想看更小的组成单元，去 mass.coma-cluster；想看同尺度的超星系团，去 mass.laniakea；想看邻近的富团，去 mass.virgo-cluster。[2] 这三条把长城放进星系团、超星系团与近邻参照三个层次。它也说明，到了宇宙网这一级，质量的边界本身就是一个人为约定。
