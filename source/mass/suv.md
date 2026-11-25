---
id: mass.suv
title: '丰田陆地巡洋舰：2,600 kg，全尺寸越野车的整备质量'
summary: >-
  丰田陆地巡洋舰 300 系整备质量约 2,600 kg，非承载式车身、四驱系统与大油箱都计入其中。规格书按配置给出 2,495–2,600
  kg，最大允许总质量约 3,000 kg。
dimension: mass
category: 工程与交通
displayValue: '2,600 kg'
quantity:
  value: 2600
  unit: kg
  measure: 制造商整备质量（curb mass）：原厂状态、含全部油液与随车工具，不含乘员、行李与改装件
  approximate: false
grade: A
related:
  - mass.car
  - mass.truck
  - mass.elephant
  - mass.bus
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
  - title: Toyota official site — Land Cruiser specifications
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
tags:
  - 质量
  - SUV
  - 整备质量
  - 交通
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商整备质量（curb mass）：原厂状态、含全部油液与随车工具，不含乘员、行李与改装件
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B8 车辆与大型动物 · 2,600 kg'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 3.415
  position: 46.68
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
titleEn: Toyota Land Cruiser
---
## 这个读数是什么

丰田陆地巡洋舰（Land Cruiser 300 系）的整备质量约 2,600 kg。它是非承载式车身的全尺寸越野车：梯形大梁、双速分动箱、四驱系统与较大的油箱都在这个数里。[1] 制造商规格书按配置给出 2,495–2,600 kg 的区间，2,600 kg 取的是高配一端。

这个读数描述的是“原厂状态”的车。它包含全部油液与随车工具，不含乘员、行李与任何加装件。同一款车在不同市场因法规件与选装包不同，数字也会小幅移动。

## 口径与不确定度

越野车的整备质量对配置格外敏感：第三排座椅、天窗、绞盘、行李架、副油箱、越野轮胎都能各加减几十千克，改装后很容易越过 2,800 kg。[1] 因此跨车主比较时，必须先问清是否原厂状态，否则“同一辆车”可以差出两百千克。

另一个容易混淆的量是最大允许总质量，约 3,000 kg 以上。减去整备质量后只剩三四百千克的载质量，七座满载加行李时余量很小。[2] 这也是这类车常被讨论“载重不够”的原因。整备质量与总质量的口径差异，在欧洲登记数据里同样被严格区分。[3]

## 怎么测出来的

制造商在整车下线后按整备状态称重，并公布前后轴荷与最大总质量；法规要求铭牌上标出这些值，用于道路限重与制动认证。[2] 称量时四轮落在同一组轴荷秤上，前后轴分别读数，加总得到整车质量。

第三方媒体与车主也会用地磅复核，得到的数通常比规格值高 1%–3%，差额来自选装与油量。对越野车而言，前后轴分配比总质量更影响通过性：前轴过轻会削弱转向抓地力。

## 量级位置

2.6×10³ kg 约为卡罗拉的两倍，也接近一头成年雌性非洲象的下限。它和 9 t 的牵引车之间还隔着皮卡与轻型货车；这说明“车辆”不是一个量级，而是一条连续带。[3] 同样 2.6 t，做成越野车占约 6 m³，做成钢锭不到 0.35 m³。

## 怎么继续走

想向下比较乘用车，去 mass.car；想向上看牵引车，去 mass.truck；想看同质量的生命体，去 mass.elephant；想看城市载客车辆，去 mass.bus；材料层面从 elements.fe 进入元素轴。
