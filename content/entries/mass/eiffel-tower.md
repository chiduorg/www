---
id: mass.eiffel-tower
title: 埃菲尔铁塔：1.01×10⁷ kg，官方公布的结构总质量
summary: >-
  埃菲尔铁塔结构总质量约 1.01×10⁷ kg，其中锻铁框架约 7,300 t，其余为楼板、楼梯、电梯、设备与涂装。铁塔高 300 m，1889 年建成，由
  18,038 个铁构件与 250 万颗铆钉组成。
dimension: mass
category: 建筑
displayValue: 1.01×10⁷ kg
quantity:
  value: 10100000
  unit: kg
  measure: 运营方公布的结构总质量；锻铁框架约 7.3×10⁶ kg，含楼板、电梯、设备与涂装，不含基础
  approximate: false
grade: A
related:
  - mass.wind-turbine
  - mass.iss
  - mass.train-car
  - elements.fe
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
  - title: Eiffel Tower official site — key figures
    url: 'https://www.toureiffel.paris/en'
    publisher: SETE — Eiffel Tower Operating Company
    accessed: '2026-11-09'
  - title: 'UNESCO World Heritage Centre — Paris, banks of the Seine'
    url: 'https://whc.unesco.org/'
    publisher: UNESCO
    accessed: '2026-11-09'
  - title: City of Paris official site
    url: 'https://www.paris.fr/'
    publisher: Mairie de Paris
    accessed: '2026-11-09'
tags:
  - 质量
  - 埃菲尔铁塔
  - 钢结构
  - 建筑
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 运营方公布的结构总质量；锻铁框架约 7.3×10⁶ kg，含楼板、电梯、设备与涂装，不含基础
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B8 车辆与大型动物 · 1.01×10⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 7.004
  position: 50.54
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

埃菲尔铁塔的结构总质量约 1.01×10⁷ kg。这是官方公布的整体结构质量，其中锻铁框架约 7,300 t，其余为楼板、楼梯、电梯、设备与涂装层。[1] 铁塔高 300 m，含顶部天线约 330 m，1889 年建成时是世界最高的建筑。

这个读数描述的是“立在地面上的那座结构”，不含地基与石砌基础。它也不是“总重”意义上的估算，而是运营方维护的构件台账给出的数。

## 口径与不确定度

必须区分金属框架与整座结构：7,300 t 是 18,038 个锻铁构件与 250 万颗铆钉的质量，10,100 t 才包含平台、电梯与附属设施。[1][2] 本条目取官方整体结构值，标 A 级，因为它是运营方公布的数，不是按体积估算。

另一个常被忽略的部分是基础。四条支腿各自坐在石砌基础上，基础与地基不计入上述质量。[2] 因此 10,100 t 不是“一整座山的重量”，而只是钢铁与设备的重量。涂装层看起来微不足道，每七年重涂一次却要用掉约 60 t 漆。

## 怎么测出来的

19 世纪没有计算机，工程师靠手工计算与构件清单累加；今天运营方维护着完整的构件台账，通过材料清单与替换记录持续复核，而不是把塔拆下来称一遍。[1] 每七年一次的重涂工程同时提供锈蚀与更换记录，可用于校正质量台账。

作为世界遗产的一部分，铁塔的维修与改动都受保护规划约束，任何结构更换都要登记。[3] 这些档案让“10,100 t”成为一个可追溯的工程数字，而不是旅游文案里的约数。

## 量级位置

1.01×10⁷ kg 约等于 7,700 辆卡罗拉，或 67 头蓝鲸。它落在 B8 带顶端，正好是 10⁷ 档的锚点：再往上一个十进位，是大型船舶与体育场屋顶。令人意外的是，同样 10,000 t 的铁若压成实心块只有约 1,300 m³，而铁塔靠桁架把这份质量摊到 300 m 的高度上。

## 怎么继续走

想看同样以钢结构为主的现代巨型机械，去 mass.wind-turbine；想看“大质量但轻结构”的对照，去 mass.iss；想理解锻铁与钢的差别，从 elements.fe 进入元素轴；想比较地面交通工具，去 mass.train-car。
