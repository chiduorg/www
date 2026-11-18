---
id: mass.human-liver
title: 成人肝脏：1.5 kg，最重的内脏
summary: 成人肝脏约 1.5 kg，按成年个体均值、湿重计，指整颗摘除后的肝脏。肝脏血供丰富，含血与灌注后称重可差 10–20%，脂肪肝与体型使不确定度约 ±25%。
dimension: mass
category: 人体器官
displayValue: 1.5 kg
quantity:
  value: 1.5
  unit: kg
  measure: 成年个体肝脏湿重均值；摘除后整颗称重，含肝内血液，不确定度约 ±25%
  approximate: true
grade: B
related:
  - mass.human-heart
  - mass.human-brain
  - mass.adult-human
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
  - title: NCBI Bookshelf
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: BioNumbers — The Database of Useful Biological Numbers
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
tags:
  - 质量
  - 肝脏
  - 器官
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 成年个体肝脏湿重均值；摘除后整颗称重，含肝内血液，不确定度约 ±25%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 1.5 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: 0.176
  position: 43.2
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

成人肝脏的质量约为 1.5 kg，按成年个体均值、湿重计。肝脏是人体最重的内脏器官，约占成年人体重的百分之二，由肝实质、胆管系统、血管与血窦组成。[1] 这个读数指整颗摘除后的肝脏，不含周围脂肪等附着组织，胆囊通常另行计算。

## 口径与不确定度

器官质量的口径必须写清三件事：是不是湿重、含不含血、怎么摘。湿重是离体后直接称量的质量；肝脏血供极丰富，正常肝血容量可达数百毫升，摘除时含血与灌注冲洗后的读数可以差出百分之十到二十。[2] 条目取 ±25%，因为它比心脏更容易受个体差异影响：体型、性别、饮酒史与脂肪肝都会显著改变肝重，脂肪肝患者的肝脏可以超过两千克。这里给的是健康成年人的均值区间，不是精确值。

## 怎么测出来的

尸检称重是最经典的方法，操作是摘除后剪去附着组织、吸去表面液体再上秤。活体侧可以用 CT 或 MRI 做肝脏体积测量，再乘以约 1.05 g/cm³ 的密度换算成质量；活体肝移植前的供肝评估就用这套办法，把预测肝重与受者体重比作为安全指标之一。[3] 影像分割的边界选择、呼吸时相与扫描层厚都会带来系统偏差，所以换算值与尸检值通常只对齐到几个百分点。

## 量级位置

1.5 kg 与脑的 1.4 kg 几乎同处一个十进位，两者常被拿来比较，但肝脏的质量随代谢需求变化，脑的质量则相对稳定。它约为成人整体 70 kg 的百分之二，比心脏 0.31 kg 重近五倍。[1] 同为 1.5 kg 左右，肝脏的体积明显大于脑，说明质量相同并不等于体积相同。

## 怎么继续走

想看与它质量相近的器官，去 mass.human-brain；想看循环系统的主角，去 mass.human-heart；想看肝脏里数量最多的功能细胞属于哪个量级，可以从 mass.human-cell 进入细胞层，再回到 mass.adult-human 收束到整体。
