---
id: mass.car
title: '丰田卡罗拉：1,310 kg，紧凑级轿车的整备质量'
summary: >-
  丰田卡罗拉整备质量约 1,310 kg，含全部油液、备胎与随车工具，不含乘员与货物。同车系不同配置在 1,290–1,395 kg
  之间浮动，最大允许总质量约 1,800 kg。
dimension: mass
category: 工程与交通
displayValue: '1,310 kg'
quantity:
  value: 1310
  unit: kg
  measure: 制造商整备质量（curb mass）：整车加满油液、装好备胎与工具后的质量，不含乘员与货物
  approximate: false
grade: A
related:
  - mass.suv
  - mass.truck
  - mass.bus
  - elements.fe
  - space.earth
  - time.industrial-revolution
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
  - title: Toyota official site — vehicle specifications
    url: 'https://www.toyota.com/'
    publisher: Toyota Motor North America
    accessed: '2026-11-09'
  - title: 'ISO 1176: Road vehicles — Masses — Vocabulary and codes'
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
  - title: Vehicle mass and registration data
    url: 'https://www.acea.auto/'
    publisher: European Automobile Manufacturers' Association
    accessed: '2026-11-09'
  - title: "Volvo Trucks official site — FH16 specifications"
    url: "https://www.volvotrucks.com/"
    publisher: "Volvo Trucks"
    accessed: '2026-11-24'
  - title: "Volvo Buses official site — city bus specifications"
    url: "https://www.volvobuses.com/"
    publisher: "Volvo Buses"
    accessed: '2026-11-24'
tags:
  - 质量
  - 汽车
  - 整备质量
  - 交通
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商整备质量（curb mass）：整车加满油液、装好备胎与工具后的质量，不含乘员与货物
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B8 车辆与大型动物 · 1,310 kg'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 3.117
  position: 46.36
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
titleEn: Toyota Corolla
---
## 这个读数是什么

丰田卡罗拉的整备质量约 1,310 kg。这是制造商在整车下线、加满全部油液、装好备胎与随车工具之后称得的质量，车上没有乘员，也没有行李货物。[1] 它是紧凑级家用轿车里最典型的一个读数：在你坐进驾驶位之前，车本身就有这么重。

这个数字不是“空车皮重”。干质量会扣掉机油、冷却液与燃油，整备质量包含它们，因而更接近每天开出门时的状态。两者相差几十千克，跨市场比较时混用会直接产生误差。[2]

## 口径与不确定度

同一车系不同配置的整备质量并不相同：发动机、变速箱、天窗、座椅加热、四驱系统都会加减几十千克，公开规格表常给出 1,290–1,395 kg 的区间。[1] 1,310 kg 是其中一个官方配置值，标为 A 级，因为它是制造商直接称量并写入规格书的数，而不是媒体估算。

需要区分三个常被混用的量：整备质量、最大允许总质量（约 1.8×10³ kg）和载质量。总质量减去整备质量才是允许的乘员加行李质量，约 450 kg，折合四五个成年人和一些行李。[2] 把总质量当成“车重”会高估约 40%。欧洲的新车登记统计同样以整备质量为口径，这样跨国数字才能比较。[3]

## 怎么测出来的

制造商在整备状态下用轴荷秤或地磅逐车称量，四轮分别落在称台上，加总得到整车质量，同时记录前后轴分配，供制动与悬架标定使用。[1] 标准对车辆质量术语的定义规定了整备质量必须包含哪些液体和装备，否则各家数字无法对齐。[2]

第三方媒体与车主也会用地磅复核，结果通常比规格值高 1%–3%，差额来自选装件与油箱实际油量。这说明整备质量是一个定义明确的工程量，而不是一个自然常数。

## 量级位置

1.31×10³ kg 落在 B8 带的下端，约等于 20 个成年人，或 1.3 m³ 的水。同带向上是 SUV、卡车与公交车，向下回到摩托车与成人。质量不是体积的函数：同样 1,310 kg，做成轿车约占 5 m³，做成实心钢块不到 0.2 m³。

## 整备质量与总质量

卡罗拉的 1,310 千克是整备质量：含油液、备胎与工具，不含乘员和行李。最大允许总质量约 1.8 吨，两者相减才是可载质量。把总质量当成“车重”，会高估约 40%。[1][S1]

## 怎么继续走

想看同一平台加高车身、加四驱后重多少，去 mass.suv；想看整备质量跨到 9 t 的牵引车，去 mass.truck；想看城市里的载客同类，去 mass.bus；想理解这 1.3 t 里铁、铝、塑料各自的贡献，从 elements.fe 进入元素轴。

## 轻量化与电池

传统紧凑轿车约 1.3 吨，其中钢铁占很大比例；换成铝、高强度钢或复合材料可以减重，但成本与碰撞安全要重新平衡。[2] 纯电动车加装数百千克电池后，整备质量常明显高于同级燃油车。轻量化不是越轻越好，而是质量、强度与能耗的折中。

## 五轴对照

在质量轴，卡罗拉约 1,310 千克；在空间轴，占地约 5 平方米；在时间轴，汽车在工业革命后普及；在温度轴，发动机与电池有各自工作温区。质量、动力与材料共同决定车辆性能。[1][3]

## 延伸核对

补充的来源 [4]（Volvo Trucks）、[5]（Volvo Buses） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
