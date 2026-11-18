---
id: mass.golden-gate-bridge
title: 金门大桥：约 8.05×10⁸ kg，含锚碇与引桥的桥梁总质量
summary: >-
  金门大桥 1986 年官方统计的桥梁总质量为 887,000 吨，即 804,700,000 kg；不含锚碇与引桥的桥体约 3.82×10⁸
  kg。两个口径差一倍，混用会把这座桥说轻一半。
dimension: mass
category: 桥梁
displayValue: 8.05×10⁸ kg
quantity:
  value: 804700000
  unit: kg
  measure: '桥梁总质量（含锚碇与南北引桥）：官方 1986 年统计 887,000 短吨，即 8.047×10⁸ kg'
  approximate: false
grade: A
related:
  - mass.millau-viaduct
  - mass.empire-state-building
  - mass.eiffel-tower
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
    - >-
      来源角色：第 1 条来源提供对象的具体数值与参数；第 2 条为工程机构背景页，仅用于方法论与语境，不支撑具体数值。2026-11-09
      已移除与对象无直接关系的第 3 来源，正文 [3] 改为 [1]。
sources:
  - title: Golden Gate Bridge — design and construction statistics
    url: 'https://www.goldengate.org/'
    publisher: 'Golden Gate Bridge, Highway and Transportation District'
    accessed: '2026-11-09'
  - title: Institution of Civil Engineers — bridge engineering
    url: 'https://www.ice.org.uk/'
    publisher: Institution of Civil Engineers
    accessed: '2026-11-09'
tags:
  - 质量
  - 悬索桥
  - 钢结构
  - 桥梁
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: '桥梁总质量（含锚碇与南北引桥）：官方 1986 年统计 887,000 短吨，即 8.047×10⁸ kg'
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 8.05×10⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 8.906
  position: 52.59
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

金门大桥官方统计的桥梁总质量是 887,000 吨，即 8.047×10⁸ kg。[1] 这个数包含桥体、两座混凝土锚碇和南北引桥。1937 年通车时的原始总重是 894,500 吨，1986 年改造后减到 887,000 吨。桥全长 2,737 m，主跨 1,280 m，两座桥塔高 227 m。

## 口径与不确定度

官方同时给出两个口径：只算桥体、不含锚碇时约 840 百万磅，即 3.82×10⁸ kg；把锚碇与引桥算进去才是 887,000 吨。[1] 锚碇要把主缆的拉力传进地基，两块混凝土体量巨大，所以两个数字差近一倍。本条取“含锚碇与引桥”的总质量，并明确它是美制短吨换算值。引用桥梁质量时，如果不说明含不含锚碇，读者会以为两座桥差了一个量级。

## 怎么测出来的

设计阶段按构件清单与钢材密度逐项累加，主缆、加劲梁、桥塔、索夹都有独立账目；1986 年更换桥面与加劲结构后，运营方重新核算了总重。[2] 这种“清单加法”是桥梁工程的常规做法，因为没有人会把整座桥放上磅秤。主缆、索夹与吊索的质量都单列在清单里，索塔的混凝土与钢构件也分别计入，避免重复，这也是清单法能给出上亿吨级结果的原因。它的准确度取决于清单是否完整，而不是称量精度。

## 量级位置

8.05×10⁸ kg 约等于 80 座埃菲尔铁塔，或 2.2 座帝国大厦。[1] 它正好是 10⁸ kg 档接近上沿的位置，与米约高架桥同处一个十进位；再往上，就是 10⁹ kg 量级的大坝。

## 怎么继续走

想看另一座著名桥梁的总重口径，去 mass.millau-viaduct；想比较高层建筑的结构质量，去 mass.empire-state-building；想看更早的锻铁结构，去 mass.eiffel-tower；想理解主缆用钢，从 elements.fe 进入元素轴。
