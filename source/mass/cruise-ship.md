---
id: mass.cruise-ship
title: 玛丽皇后二号：约 7.9×10⁷ kg，满载排水量
summary: >-
  玛丽皇后二号满载排水量约 79,000 t，即约 7.9×10⁷ kg。常被引用的 1.49×10⁵ 是容积总吨（GT），不是质量；把 GT
  与排水量混用，会让这艘邮轮“重”了近一倍。
dimension: mass
category: 船舶
displayValue: 7.9×10⁷ kg
quantity:
  value: 79000000
  unit: kg
  measure: '满载排水量：船级社与船舶登记数据约 79,000 t，由排水体积乘海水密度换算'
  approximate: true
grade: A
related:
  - mass.aircraft-carrier
  - mass.cargo-ship
  - mass.iss
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
    - >-
      来源角色：第 1 条来源提供对象的具体数值与参数；第 2 条为工程机构背景页，仅用于方法论与语境，不支撑具体数值。2026-11-09
      已移除与对象无直接关系的第 3 来源，正文 [3] 改为 [1]。
sources:
  - title: Cunard — Queen Mary 2 ship information
    url: 'https://www.cunard.com/'
    publisher: Cunard Line
    accessed: '2026-11-09'
  - title: Institution of Civil Engineers — civil and maritime engineering
    url: 'https://www.ice.org.uk/'
    publisher: Institution of Civil Engineers
    accessed: '2026-11-09'
tags:
  - 质量
  - 邮轮
  - 排水量
  - 船舶
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: '满载排水量：船级社与船舶登记数据约 79,000 t，由排水体积乘海水密度换算'
  precision: A 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B8 车辆与大型动物 · 7.9×10⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 7.898
  position: 51.5
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

玛丽皇后二号的满载排水量约 7.9×10⁷ kg，也就是约 79,000 t。[1] 它 2003 年投入跨大西洋航线，全长 345 m、宽 41 m，可载约 2,700 名乘客和 1,200 多名船员。排水量按阿基米德原理定义：船体排开的海水质量，等于船在该吃水下的总质量。

## 口径与不确定度

船舶数据里最容易被混用的是三个量：容积总吨、载重吨与排水量。这艘船的容积总吨约 1.49×10⁵，单位是每 100 立方英尺折一吨的容积，量纲是体积，不是 kg。[1] 把它当质量，就会得到 1.49×10⁸ kg 这个流传很广的错误读数。载重吨只算货物、燃油、淡水与备品的可加载质量，同样不是船自身质量。本条只采用满载排水量，且标明它是按标准海水密度换算的工程值。

## 怎么测出来的

设计阶段用型线图积分出各吃水对应的排水体积，再乘海水密度得到排水量；下水后靠倾斜试验、静水称重与试航吃水读数校正。[2] 船级社把这条曲线写进稳性手册，船员读吃水标尺就能查得当前排水量。所以这个数字是计算加试验的结果，不是把船吊起来称出来的。

## 量级位置

7.9×10⁷ kg 约等于 6 万辆家用轿车，或 530 头蓝鲸，也约是埃菲尔铁塔结构质量的 7.8 倍。[1] 它正好卡在 10⁸ kg 门槛下方：同样被叫作“十万吨级”，航母与大型货轮已经越线，这艘邮轮还差一点。同一条船空载与满载可以差两万吨以上，所以谈质量必须先说载况。

## 怎么继续走

想看越线的军舰，去 mass.aircraft-carrier；想看更大的商船，去 mass.cargo-ship；想比较轨道上的工程物，去 mass.iss；想从浮力与海水密度回到行星尺度，去 space.earth。
