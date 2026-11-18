---
id: mass.milky-way
title: 银河系：约 2.98×10⁴² kg，含暗物质的总质量
summary: >-
  银河系的总质量约 2.98×10⁴² kg，折合约 1.5×10¹² 个太阳质量，口径包含暗物质晕。数值由卫星星系运动与旋转曲线联合拟合，恒星质量仅约
  6×10¹⁰ 个太阳质量，相对不确定度约 30%。
dimension: mass
category: 星系
displayValue: 2.98×10⁴² kg
quantity:
  value: 2.98e+42
  unit: kg
  measure: 银河系总质量（含暗物质晕，约 1.5×10¹² 太阳质量）；由卫星星系运动与旋转曲线拟合，相对不确定度约 30%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: satellite kinematics and rotation curve
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.andromeda
  - mass.local-group
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
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: ESA Gaia
    url: 'https://www.cosmos.esa.int/web/gaia'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 星系
  - 银河系
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 银河系总质量（含暗物质晕，约 1.5×10¹² 太阳质量）；由卫星星系运动与旋转曲线拟合，相对不确定度约 30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 2.98×10⁴² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 42.474
  position: 88.68
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

银河系是太阳所在的棒旋星系，本条记录它的总质量约 2.98×10⁴² kg，折合约 1.5×10¹² 个太阳质量。[1] 这个口径包含暗物质晕，是把整个引力束缚系统一起称重。若只算恒星，银河系的恒星质量约 6×10¹⁰ 个太阳质量，只占总质量的百分之四左右。[2]

## 口径与不确定度

总质量由引力效应反推，恒星质量由光度与星族模型换算，两者相差二十多倍，不能混用。[2] 本条固定采用含暗物质的总质量口径。相对不确定度约 30%，主要来自暗物质晕的密度轮廓与最外围示踪天体太少，因此标为近似值，定为 B 级。[3]

## 怎么测出来的

一条路线是银河系外围的卫星星系与球状星团：它们的视向速度与自行给出速度弥散，从而约束包围质量。另一条是中性氢与恒星的旋转曲线，由转速随银心距下降的快慢判断质量分布。[1] 盖亚任务的精确自行让前一条路线近年明显收紧。[3]

## 量级位置

2.98×10⁴² kg 位于 B15 带下段，约为大麦哲伦云的十倍，与本星系群另一主角仙女座星系几乎相同。[1] 它比已知最重的黑洞还重几十倍，却只有室女座星系团的八百分之一。银河系处在“星系”这一级的典型位置，往上便是星系群与星系团。它的总质量里恒星只占很小一份，这正是暗物质存在的间接证据。

## 怎么继续走

想看几乎等重的邻居，去 mass.andromeda；想看它所在的引力系统，去 mass.local-group；想看它在空间轴上的图景，去 space.milky-way。[2] 想再往上一个量级，则去 mass.virgo-cluster，那里是银河系所在的本超星系团的核心。两条路线都指向同一个问题：把暗物质算进来，星系的真实重量远大于夜空中看到的光。
