---
id: mass.truck
title: '沃尔沃 FH16 牵引车：9,000 kg，不含挂车的车头质量'
summary: >-
  沃尔沃 FH16 牵引车整备质量约 9,000 kg，指车头本身：底盘、驾驶室、D16 柴油机、变速箱、后桥、鞍座与油液，不含挂车与货物。6×4
  长驾驶室配置常在 8.5–9.5 t。
dimension: mass
category: 工程与交通
displayValue: '9,000 kg'
quantity:
  value: 9000
  unit: kg
  measure: 制造商整备质量（curb mass）：牵引车头，不含挂车、货物与驾驶员
  approximate: false
grade: A
related:
  - mass.car
  - mass.suv
  - mass.bus
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
  - title: Volvo Trucks official site — FH16 specifications
    url: 'https://www.volvotrucks.com/'
    publisher: Volvo Trucks
    accessed: '2026-11-09'
  - title: 'ISO 1176: Road vehicles — Masses — Vocabulary and codes'
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
  - title: Commercial vehicle mass categories
    url: 'https://www.acea.auto/'
    publisher: European Automobile Manufacturers' Association
    accessed: '2026-11-09'
tags:
  - 质量
  - 卡车
  - 牵引车
  - 整备质量
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商整备质量（curb mass）：牵引车头，不含挂车、货物与驾驶员
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B8 车辆与大型动物 · 9,000 kg'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 3.954
  position: 47.26
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
titleEn: Volvo FH16 tractor unit
---
## 这个读数是什么

沃尔沃 FH16 牵引车的整备质量约 9,000 kg。这是车头本身的质量：底盘、驾驶室、D16 柴油机、变速箱、后桥、鞍座与全部油液，不含挂车，也不含任何货物。[1] 它是一台能合法拖到 60–80 t 组合总质量的机器，但自己只有 9 t。

必须先说清“车头”与“列车”。牵引车是工具，挂车是可更换的载货容器；把两者的质量混在一起，得到的数会差五倍。本条只承载车头这一个对象。

## 口径与不确定度

牵引车的整备质量随轴数、驾驶室长度、油箱容积与鞍座位置变化：6×4 的长驾驶室车型常落在 8.5–9.5 t，双油箱与大容量冷却系统会把数字推向区间上端。[1] 制造商按配置公布，标 A 级，因为它来自出厂称重而非估算。

必须把三个量分开：整备质量 9 t、单车最大允许总质量（约 18–26 t）、最大组合质量（列车总重 60–80 t）。[2] 把“40 t 卡车”理解为车头自重是常见错误：40 t 通常指满载列车的允许总重，两者相差四倍以上。欧洲的商用车辆登记与限重法规也按同一套口径分级。[3]

## 怎么测出来的

出厂时逐车过轴荷秤，分别记录前桥、驱动桥与鞍座载荷；鞍座载荷决定挂车如何分配重量，也决定收费站与桥梁的分级。[2] 上牌与年检时还会复称，改装货箱、加装吊机都必须重新标定。

对牵引车来说，轴荷分配比总质量更关键：驱动桥载荷不足会失去牵引力，前轴超载则影响转向与制动。这也是为什么同一台车换不同鞍座位置，合格证上的数字会变。

## 量级位置

9×10³ kg 约等于 7 辆卡罗拉、1.8 头非洲象。它落在 B8 带中段，向上一个十进位就是公交车与动车车厢，向下是 SUV 与皮卡。质量在这里不再由体积决定：一台 9 t 的车头可以拖走 50 t 货物，靠的是把载荷分布在不同车轴与挂车上。[3]

## 怎么继续走

想看大运量轨道车辆的单节质量，去 mass.train-car；想比较乘用车，去 mass.car 与 mass.suv；想看载客的同类，去 mass.bus；想理解大梁与车架中的钢材，从 elements.fe 进入元素轴。
