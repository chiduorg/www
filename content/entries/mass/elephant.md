---
id: mass.elephant
title: '非洲象：5,000 kg，成年雄性的湿重均值'
summary: >-
  非洲象成年雄性湿重约 5,000 kg，给 ±20% 的个体波动。成年雄性常在 4–6 t，雌性约 2.7–3.5 t；肩高约 3.2
  m，是现存最大的陆生动物。
dimension: mass
category: 动物
displayValue: '5,000 kg'
quantity:
  value: 5000
  unit: kg
  measure: 成年雄性湿重均值；样本来自野外与保护区称重，个体波动约 ±20%
  approximate: true
grade: B
related:
  - mass.blue-whale
  - mass.tyrannosaurus
  - mass.car
  - mass.human-cell
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
  - title: Nature — research on large mammal body mass
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: IUCN Red List — African savanna elephant
    url: 'https://www.iucn.org/'
    publisher: International Union for Conservation of Nature
    accessed: '2026-11-09'
  - title: Smithsonian — elephant species facts
    url: 'https://www.si.edu/'
    publisher: Smithsonian Institution
    accessed: '2026-11-09'
tags:
  - 质量
  - 大象
  - 湿重
  - 动物
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 成年雄性湿重均值；样本来自野外与保护区称重，个体波动约 ±20%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B8 车辆与大型动物 · 5,000 kg'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 3.699
  position: 46.99
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

非洲象成年雄性的质量约 5,000 kg，这是湿重，也就是活着时的整只动物质量。[1] 成年雄性肩高约 3.2 m；雌性小一些，约 2,700–3,500 kg。本条的 5 t 指雄性均值，并给 ±20% 的个体波动。它是现存最大的陆生动物。

“大象有多重”听起来简单，实际必须先限定性别与年龄。把成年雄性、成年雌性和幼象混在一个均值里，会得到一个既不描述谁、也无法复现的数。

## 口径与不确定度

性别、年龄、种群与季节都影响体重：成年雄性常在 4–6 t，极少数超过 7 t；圈养个体常偏重，野生个体随旱雨季波动。[1][2] 因此 5 t 是均值口径，标 B 级，approximate 为 true；把它当成每头象的精确值就会出错。

称量本身也难。活体无法站上普通地磅，通常用围栏内的平台秤，或麻醉后用吊秤分部位称重；更多数据来自尸体解剖时的分段称量。[2] 湿重与去内脏后的质量差别可达 20% 以上，文献引用时必须确认是哪一种。

## 怎么测出来的

野外研究用体长、肩高与胸围拟合回归式估算体重，再用品台秤或吊秤校正；保护区会给驯化象定期称重，得到纵向生长曲线。[2] 博物馆的标本记录则提供骨骼与器官质量，可用于校验估算式。[3]

这些曲线显示雄性在 20–30 岁后继续增重，40 岁前后达到平台；雌性更早成熟，平台也更低。质量因此不是一个物种常数，而是一条随年龄变化的曲线上的一个点。

## 量级位置

5×10³ kg 约等于 4 辆卡罗拉，或 1/30 头蓝鲸。它落在 B8 带中段，与 SUV 同一十进位。质量不等于体积：一头象的体积约 5 m³，而同样 5 t 的铁只有 0.6 m³。[3] 这也解释了大象为何需要宽大的脚掌来分摊地面压强。

## 怎么继续走

想比较海洋里的巨型哺乳动物，去 mass.blue-whale；想看更大的已灭绝陆生动物候选，去 mass.tyrannosaurus；想看它和汽车的直观比例，去 mass.car；想从细胞层面拆解这 5 t，去 mass.human-cell。
