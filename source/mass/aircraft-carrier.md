---
id: mass.aircraft-carrier
title: 杰拉尔德·R·福特号：约 1.0×10⁸ kg，满载排水量
summary: >-
  福特号（CVN-78）满载排水量约 100,000 长吨，即约 1.0×10⁸ kg；按 1 长吨 = 1,016 kg 换算约 1.02×10⁸
  kg。这是含航空燃油与弹药的全舰质量，不是标准排水量。
dimension: mass
category: 工程与交通
displayValue: 1.0×10⁸ kg
quantity:
  value: 100000000
  unit: kg
  measure: '满载排水量：美国海军公布约 100,000 长吨（约 1.02×10⁸ kg），含舰体、设备、航空燃油与弹药'
  approximate: false
grade: A
related:
  - mass.cruise-ship
  - mass.cargo-ship
  - mass.airliner
  - mass.iss
  - space.earth
  - time.world-war-ii
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
  - title: USS Gerald R. Ford (CVN 78) — official fact file
    url: 'https://www.navy.mil/'
    publisher: United States Navy
    accessed: '2026-11-09'
  - title: Institution of Civil Engineers — marine engineering
    url: 'https://www.ice.org.uk/'
    publisher: Institution of Civil Engineers
    accessed: '2026-11-09'
  - title: "Cunard — Queen Mary 2 ship information"
    url: "https://www.cunard.com/"
    publisher: "Cunard Line"
    accessed: '2026-11-24'
  - title: "Maersk — fleet and vessel specifications"
    url: "https://www.maersk.com/"
    publisher: "A.P. Moller — Maersk"
    accessed: '2026-11-24'
tags:
  - 质量
  - 航空母舰
  - 排水量
  - 海军
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: '满载排水量：美国海军公布约 100,000 长吨（约 1.02×10⁸ kg），含舰体、设备、航空燃油与弹药'
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 1.0×10⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 8
  position: 51.61
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
titleEn: Gerald R. Ford-class aircraft carrier
---
## 这个读数是什么

杰拉尔德·R·福特号是美国海军福特级首舰，满载排水量约 100,000 长吨，即约 1.0×10⁸ kg。[1] 舰长 337 m，飞行甲板宽 78 m，2017 年服役，用两座 A1B 压水堆驱动四根轴。满载排水量指舰体、设备、舰载机、航空燃油与弹药全部到位时的总质量，也是它最重时的吃水状态。

## 口径与不确定度

海军习惯用长吨报数，一长吨等于 1,016 kg，比公吨重约 1.6%，所以 100,000 长吨换算后是 1.02×10⁸ kg。[1] 另一个必须分开的是标准排水量：它不含燃油、滑油与备用锅炉水，数值会低一截。用哪一个口径，直接决定这艘船在质量轴上的位置。本条统一取满载排水量，并把长吨换算写明，避免把 10⁸ kg 当成精确到个位的读数。

## 怎么测出来的

船厂在船台与船坞阶段按分段称重，下水后做倾斜试验求重心，再用静水力曲线把吃水换成排水体积。[2] 核动力舰不烧舰用燃油，但航空燃油仍占很大一块，舰载机与弹药也要计入满载状态。最终公布的是一个按设计载况核算的值，误差主要来自载况定义，而不是秤的精度。

## 量级位置

1.0×10⁸ kg 约等于 1,700 辆主战坦克，或 670 头蓝鲸，比玛丽皇后二号重约三成。[1] 它刚好越过 10⁸ kg 这条线，是“十万吨级”的典型代表；再往上，就是 10⁹ kg 量级的大坝与超大型船舶。满载与轻载之间可差数万吨，出港与归港的吃水因此不同。

## 满载排水量包含什么

福特号的 10 万吨是满载排水量：舰体、设备、舰载机、航空燃油与弹药全部到位时的总质量。标准排水量不含燃油、滑油与备用锅炉水，会低一截。核动力不烧舰用燃油，但航空燃油仍是满载的一部分。[1][S2]

航母的满载排水量还随载况变化：执行不同任务时，舰载机联队、弹药与航空燃油配置不同，吃水与排水量随之改变。10 万吨是设计满载，不是每次出港的实测值。

航母质量还可以按排水体积换算：满载吃水下的水下体积乘海水密度，得到排水量；倾斜试验再给出重心位置。

## 怎么继续走

想看同量级的民用船，去 mass.cruise-ship；想看装得更多、但跑得更慢的商船，去 mass.cargo-ship；想比较会飞的钢铁结构，去 mass.airliner；想看长期在轨的工程物，去 mass.iss。

## 核动力不烧舰用燃油，但航空燃油仍很重

福特级用核反应堆提供动力，不需要舰用燃油，但舰载机使用的航空燃油仍是满载排水量的一部分。[1] 一次部署携带的航空燃油可达数千吨，直接影响吃水与补给周期。把“核动力”理解成“完全不需要燃料”，会漏掉航空燃油这笔账。

## 五轴对照

在质量轴，福特级满载约 10 万吨；在空间轴，舰长 337 米；在时间轴，航母在二战中成为主力舰种；在温度轴，反应堆与航空燃油各有热管理。质量、空间与动力共同定义航母。[1][2]

## 读数的口径与换算

本条采用的量是 1.0×10⁸ kg，口径是 满载排水量：美国海军公布约 100,000 长吨（约 1.02×10⁸ kg），含舰体、设备、航空燃油与弹药。质量是广延量，读数依赖湿重/干重、含血/不含血、整备/满载等口径；样本与测量条件必须一起引用。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [3]（Cunard Line）、[4]（A.P. Moller — Maersk） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
