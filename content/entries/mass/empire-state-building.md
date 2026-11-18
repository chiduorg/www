---
id: mass.empire-state-building
title: 帝国大厦：约 3.65×10⁸ kg，官方公布的结构总质量
summary: >-
  帝国大厦运营方公布建筑重量为 365,000 吨，约 3.65×10⁸ kg。原文只写 tons、未注明吨制，若按美制短吨折算约 3.3×10⁸
  kg，相差约一成；本条取官方吨数按公吨换算。
dimension: mass
category: 建筑
displayValue: 3.65×10⁸ kg
quantity:
  value: 365000000
  unit: kg
  measure: '结构总质量：运营方公布 365,000 吨，含钢框架、砌体、楼板、幕墙与设备，不含基础与地基'
  approximate: false
grade: A
related:
  - mass.eiffel-tower
  - mass.burj-khalifa
  - mass.golden-gate-bridge
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
  - title: Empire State Building — facts and figures
    url: 'https://www.esbnyc.com/'
    publisher: Empire State Realty Trust
    accessed: '2026-11-09'
  - title: City of New York — buildings and landmarks
    url: 'https://www.nyc.gov/'
    publisher: City of New York
    accessed: '2026-11-09'
  - title: Institution of Civil Engineers — structural engineering
    url: 'https://www.ice.org.uk/'
    publisher: Institution of Civil Engineers
    accessed: '2026-11-09'
tags:
  - 质量
  - 摩天大楼
  - 钢结构
  - 建筑
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: '结构总质量：运营方公布 365,000 吨，含钢框架、砌体、楼板、幕墙与设备，不含基础与地基'
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 3.65×10⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 8.562
  position: 52.22
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

帝国大厦运营方公布的建筑重量是 365,000 吨，约 3.65×10⁸ kg。[1] 这座 1931 年落成的摩天大楼高 381 m、共 102 层，用掉约 1,000 万块砖、730 t 铝与不锈钢，以及约 5,700 m³ 的石灰岩和花岗岩。这个读数描述的是从基础顶面往上的一整座楼，而不是某一种材料的用量。

## 口径与不确定度

官方原文只写“365,000 tons”，没有说明是公吨还是美制短吨。按公吨换算是 3.65×10⁸ kg，按短吨则约 3.3×10⁸ kg，两者差约一成。[1] 这类历史建筑的数据多半来自施工材料清单的累加，本身带两位有效数字。另一个边界是基础：桩基与地坪以下的混凝土通常不计入“建筑重量”，所以这个数不是“整块地基加楼”的总重。楼内租户、家具与设备属于活载，通常也不计入结构自重，这又是另一个口径。

## 怎么测出来的

1930 年代没有电子称重，工程师按钢材、砖石、混凝土与设备的订货量逐项汇总，再与施工记录核对。[2] 今天运营方维护着改造台账，每次更换幕墙、电梯或机电设备都会更新荷载记录。结构工程师关心的是恒载与活载的分布，而不是总质量本身，但两者共用同一套材料清单。

## 量级位置

3.65×10⁸ kg 约等于 2,400 头蓝鲸，或 36 座埃菲尔铁塔的结构质量。[3] 它落在 10⁸ kg 档的上段，与金门大桥的桥体部分相近；再往上一个十进位，就是胡佛大坝的混凝土量。

## 怎么继续走

想看更早的钢铁结构，去 mass.eiffel-tower；想看更高的混凝土建筑怎么算质量，去 mass.burj-khalifa；想比较桥梁的总质量口径，去 mass.golden-gate-bridge；想理解钢框架的材料，从 elements.fe 进入元素轴。
