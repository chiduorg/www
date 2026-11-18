---
id: mass.large-magellanic-cloud
title: 大麦哲伦云：约 2.8×10⁴¹ kg，银河系最亮的卫星星系
summary: >-
  大麦哲伦云是银河系最亮的卫星星系，总质量约 2.8×10⁴¹ kg，折合约 1.4×10¹¹
  个太阳质量，口径包含暗物质晕。数值由卫星星系运动学与旋转曲线拟合给出，恒星质量仅约 2.7×10⁹ 个太阳质量，相对不确定度约 30%。
dimension: mass
category: 星系
displayValue: 2.8×10⁴¹ kg
quantity:
  value: 2.8e+41
  unit: kg
  measure: 大麦哲伦云总质量（含暗物质晕，约 1.4×10¹¹ 太阳质量）；由卫星星系运动学与旋转曲线拟合，相对不确定度约 30%
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
  - mass.milky-way
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
  - 大麦哲伦云
  - 卫星星系
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 大麦哲伦云总质量（含暗物质晕，约 1.4×10¹¹ 太阳质量）；由卫星星系运动学与旋转曲线拟合，相对不确定度约 30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 2.8×10⁴¹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 41.447
  position: 87.58
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

大麦哲伦云是南天最醒目的卫星星系，距银河系约十六万光年，本条记录的是它的总质量约 2.8×10⁴¹ kg，折合约 1.4×10¹¹ 个太阳质量。[1] 这个口径把暗物质晕一并算入，而不是只称看得见的恒星和气体。它的恒星质量只有约 2.7×10⁹ 个太阳质量，两者相差约五十倍。[2]

## 口径与不确定度

总质量与恒星质量是两个不同口径：前者由引力效应推出，包含暗物质；后者由星族合成与光度换算，只计重子物质。[2] 本条只用总质量口径，不把两者混写。相对不确定度约 30%，属模型依赖的量级估算，因此标为近似值并定为 B 级。[3]

## 怎么测出来的

一类办法是看它的卫星星系如何运动：成员系统的速度弥散与轨道束缚给出引力质量。另一类是测中性氢的旋转曲线，由转速随半径的变化推算包围质量。[1] 两条路线都要假设暗物质晕的密度轮廓，结果随之上下浮动，这是三成误差的主要来源。[3]

## 量级位置

2.8×10⁴¹ kg 位于 B15 带下沿，约为银河系总质量的十分之一，在卫星星系里已属重量级。[1] 它比一个普通球状星团重几个数量级，又远轻于一个星系群。把它放在银河系旁边，能看出卫星星系与宿主星系之间仍隔着一个十倍级的台阶。

## 怎么继续走

想沿质量轴往上走，去 mass.milky-way 看它的宿主星系；想看它在引力系统里的归属，去 mass.local-group；想看同一片天区的空间图景，去 space.milky-way。[2] 这三条分别把大麦哲伦云放进星系、星系群与空间尺度三个层次里。若想先弄清总质量与恒星质量的差别，可回到第二节，再对照银河系那条的同一口径。
