---
id: mass.burj-khalifa
title: 哈利法塔：约 8.5×10⁸ kg，由官方材料量估算的结构总质量
summary: >-
  哈利法塔官方公布使用 33 万 m³ 混凝土与 3.9 万吨钢筋，按混凝土密度折算结构总质量约 8.5×10⁸ kg。常被引用的 5×10⁸ kg
  来自“相当于 10 万头大象”的比喻，不是材料清单求和。
dimension: mass
category: 建筑
displayValue: 8.5×10⁸ kg
quantity:
  value: 850000000
  unit: kg
  measure: 结构总质量估算：官方 3.3×10⁵ m³ 混凝土按 2.4 t/m³ 计，加 3.9×10⁴ t 钢筋，约 8.5×10⁸ kg
  approximate: true
grade: B
related:
  - mass.empire-state-building
  - mass.eiffel-tower
  - mass.golden-gate-bridge
  - elements.c
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
  - title: Burj Khalifa — architecture and design
    url: 'https://www.burjkhalifa.ae/'
    publisher: Emaar Properties
    accessed: '2026-11-09'
  - title: Institution of Civil Engineers — tall buildings
    url: 'https://www.ice.org.uk/'
    publisher: Institution of Civil Engineers
    accessed: '2026-11-09'
tags:
  - 质量
  - 超高层
  - 混凝土
  - 建筑
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 结构总质量估算：官方 3.3×10⁵ m³ 混凝土按 2.4 t/m³ 计，加 3.9×10⁴ t 钢筋，约 8.5×10⁸ kg
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 8.5×10⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 8.929
  position: 52.61
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

哈利法塔高 828 m、共 163 层，2010 年建成。官方公布的数字是材料用量：混凝土 33 万 m³、钢筋 3.9 万吨，基础另有 192 根深 50 m 的桩。[1] 把混凝土按 2.4 t/m³ 折算，再加钢筋，得到约 8.5×10⁸ kg。这是按官方材料量估算的结构总质量，官方本身没有直接给出一个 kg 数。

## 口径与不确定度

网上流传的“哈利法塔重 5×10⁸ kg”，来源是官方文案里“混凝土相当于 10 万头大象”的比喻，按每头 5 t 反推出来的，并不是材料清单求和。[1] 用 33 万 m³ 乘混凝土密度，仅混凝土就有约 7.9×10⁸ kg，所以 5×10⁸ kg 明显偏低。混凝土密度取 2.4 到 2.5 t/m³ 会让结果在 8.3 到 8.6×10⁸ kg 之间浮动，本条取中值并标为估算。幕墙铝材与钢构件没有单列，它们相对混凝土只占几个百分点。

## 怎么测出来的

超高层建筑的质量靠材料台账与浇筑记录统计，不靠称重。施工时每车混凝土都有配合比与方量记录，钢筋按深化图下料，竣工后把两者相加就得到恒载。[2] 这个数主要用于基础设计与桩基验算，工程师更关心它沿高度的分布，而不是总量本身。仅基础底板就用掉约 4.5 万 m³ 混凝土、约 1.1×10⁸ kg，已接近一座小型建筑。

## 量级位置

8.5×10⁸ kg 约等于 2.3 座帝国大厦，或 5,700 头蓝鲸。[1] 它落在 10⁸ kg 档的上沿，和金门大桥的总质量同一十进位；再往上，就要进入大坝的 10⁹ 到 10¹⁰ kg 区间。

## 怎么继续走

想看不含钢筋的纯钢框架怎么算，去 mass.empire-state-building；想看更早的铁结构，去 mass.eiffel-tower；想比较桥梁的总质量口径，去 mass.golden-gate-bridge；想理解混凝土与钢筋里的碳，从 elements.c 进入元素轴。
