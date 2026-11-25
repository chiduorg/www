---
id: mass.tyrannosaurus
title: '霸王龙：8,000 kg，骨骼与软组织模型给出的估算'
summary: >-
  霸王龙成年个体质量的主流模型估算约 8,000 kg，合理区间 5–9 t。数值来自骨架三维重建、肌肉复原与组织密度假设，并非实测，标 C
  级、approximate。
dimension: mass
category: 自然与生物
displayValue: '8,000 kg'
quantity:
  value: 8000
  unit: kg
  measure: 基于骨骼三维重建与软组织复原的体积模型估算，组织密度取 0.9–1.0 g/cm³；区间 5–9 t
  approximate: true
grade: C
related:
  - mass.elephant
  - mass.blue-whale
  - mass.human-cell
  - mass.car
  - time.k-pg-extinction
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
sources:
  - title: Nature — dinosaur body mass estimation
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: Natural History Museum — Tyrannosaurus rex
    url: 'https://www.nhm.ac.uk/'
    publisher: 'Natural History Museum, London'
    accessed: '2026-11-09'
  - title: Field Museum — SUE the T. rex
    url: 'https://www.fieldmuseum.org/'
    publisher: Field Museum of Natural History
    accessed: '2026-11-09'
  - title: "IUCN Red List — African savanna elephant"
    url: "https://www.iucn.org/"
    publisher: "International Union for Conservation of Nature"
    accessed: '2026-11-24'
  - title: "Smithsonian — elephant species facts"
    url: "https://www.si.edu/"
    publisher: "Smithsonian Institution"
    accessed: '2026-11-24'
tags:
  - 质量
  - 恐龙
  - 霸王龙
  - 模型估算
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 基于骨骼三维重建与软组织复原的体积模型估算，组织密度取 0.9–1.0 g/cm³；区间 5–9 t
  precision: C 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B8 车辆与大型动物 · 8,000 kg'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 3.903
  position: 47.21
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
titleEn: Tyrannosaurus rex
---
## 这个读数是什么

霸王龙的成年个体质量，主流模型估算约 8,000 kg，合理区间 5–9 t。[1] 这个数不是称出来的，而是根据骨架三维重建、肌肉与软组织复原，再乘组织密度算出的体积质量；标 C 级，表示只能给出量级与模型区间。

它描述的是“一只成年霸王龙”，不是某一具化石。不同标本大小不同，同一具骨架换一套肌肉复原，结果也会移动，因此必须把区间与模型一起引用。

## 口径与不确定度

估算差异来自三处：骨架标本本身大小不同、软组织复原的厚度假设不同、以及鸟类与爬行类之间组织密度取值的分歧。[1][2] 不同研究给出的均值从 5 t 到 9 t 不等；同一具骨架换一套肌肉模型，结果可以差 30%。

因此本条的 8 t 是区间中值，approximate 为 true。它既不是化石的实测质量，也不是某个标本的确定值，而是“成年霸王龙大概多重”的最佳模型估计。把它写成 8,000 kg 的精确值，会掩盖模型依赖。

## 怎么测出来的

流程是：激光扫描或摄影测量得到骨骼点云，按现生鸟类与鳄类的肌肉附着标记复原肌肉，生成三维体模型，再用 CT 或切片估算体腔体积，最后乘以 0.9–1.0 g/cm³ 的组织密度。[2] 另一条路线是用股骨周长等骨骼指标做回归，与现生动物标定后外推。[3]

两条路线互相校验：体积法给绝对质量，回归法给独立估计，二者在 5–9 t 内重合，才使这个区间可信。博物馆的装架标本还提供了骨架尺寸的公共基准，便于不同研究对齐。

## 量级位置

8×10³ kg 约等于 6 辆卡罗拉，或 1.6 头非洲象。它落在 B8 带中段，比任何现存陆生食肉动物大一个数量级以上，但和蓝鲸比仍小近 20 倍。[3] 质量不是“恐龙都很大”的同义词：同期很多兽脚类只有几百千克。

## 骨骼与肌肉复原决定读数

霸王龙的质量不是直接称出来的，而是先重建骨架与肌肉，再按组织密度算体积。不同标本、不同肌肉厚度假设、不同密度取值，会让结果在 5–9 吨之间移动。把 8 吨写成精确值，会掩盖模型依赖。[1][S2]

霸王龙的质量估计还依赖个体年龄：幼体与成年个体差异很大，同一物种不同标本可相差数倍。8 吨是成年个体的模型中值，不是所有霸王龙的平均。

霸王龙的质量还可以按股骨周长回归估算：现生动物标定给出的结果与体积模型在 5–9 吨内重合，说明区间不是单一方法的产物。

## 怎么继续走

想找现存的质量参照，去 mass.elephant 与 mass.blue-whale；想看估算方法与工程读数的差别，去 mass.car；想从骨骼的元素组成看生物矿化，从 elements.c 进入元素轴。

## 骨骼与肌肉复原决定读数

霸王龙的质量不是直接称出来的，而是先重建骨架与肌肉，再按组织密度算体积。[1][2] 不同标本、不同肌肉厚度假设、不同密度取值，会让结果在 5–9 吨之间移动。把 8 吨写成精确值，会掩盖模型依赖。

## 五轴对照

在质量轴，霸王龙约 8,000 千克；在空间轴，体长约 12 米；在时间轴，它生活在白垩纪晚期；在温度轴，体温调节与代谢影响活动。质量、体长与代谢共同约束古生物学重建。[1][3]

## 延伸核对

补充的来源 [4]（International Union for Conservation of Nature）、[5]（Smithsonian Institution） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
