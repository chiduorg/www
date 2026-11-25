---
id: mass.bus
title: '城市公交车：12,000 kg，12 m 级柴油单机的整备质量'
summary: >-
  12 m 级柴油城市公交的整备质量约 12,000 kg，含车身、底盘、空调、座椅与全部油液，不含乘客。同长度纯电动车型因电池通常再重 2–3
  t，最大允许总质量约 18–19.5 t。
dimension: mass
category: 工程与交通
displayValue: '12,000 kg'
quantity:
  value: 12000
  unit: kg
  measure: 制造商整备质量（curb mass）：12 m 级柴油城市公交的整车规格值，不含乘客与行李
  approximate: false
grade: A
related:
  - mass.car
  - mass.truck
  - mass.train-car
  - mass.suv
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
  - title: Volvo Buses official site — city bus specifications
    url: 'https://www.volvobuses.com/'
    publisher: Volvo Buses
    accessed: '2026-11-09'
  - title: 'ISO 1176: Road vehicles — Masses — Vocabulary and codes'
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
  - title: Bus and coach mass categories
    url: 'https://www.acea.auto/'
    publisher: European Automobile Manufacturers' Association
    accessed: '2026-11-09'
tags:
  - 质量
  - 公交车
  - 整备质量
  - 公共交通
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商整备质量（curb mass）：12 m 级柴油城市公交的整车规格值，不含乘客与行李
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: 'B8 车辆与大型动物 · 12,000 kg'
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 4.079
  position: 47.4
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
titleEn: City bus
---
## 这个读数是什么

一辆 12 m 级柴油城市公交的整备质量约 12,000 kg。这包括车身、底盘、发动机、变速箱、空调、座椅、全部油液与随车工具，不含乘客。[1] 它对应城市里最常见的单机公交尺寸：车厢长约 12 m，两轴，低地板，能站能坐。

这个读数只覆盖“一台 12 m 柴油单机”。铰接车、双层车与纯电动车的数字都不在这一条里；它们属于同一功能类别，却是不同的质量对象。

## 口径与不确定度

同长度公交的整备质量随动力形式变化很大：柴油车约 11–13 t；纯电动因电池包通常再重 2–3 t；18 m 铰接车可到 18 t。[1] 12 t 是本条取的 12 m 柴油车代表值，标 A 级，因为它对应制造商的整车规格，而不是由载客量反推。

载客能力来自差值：最大允许总质量约 18–19.5 t，减去整备质量后剩 6–7 t。按每人 65 kg 计，约合 90–100 人，这正是“满载”的算法。[2] 把总质量当整备质量，会把它误读成 18 t 的“车重”。欧洲的公交车分级与登记数据也按整备质量与总质量两栏分别记录。[3]

## 怎么测出来的

制造商在整备状态下用轴荷秤称量，公布前轴与后轴分配；公交采购合同与年检都以这个数为基准，因为轴荷直接决定轮胎、制动与路面负荷。[2] 运营中还会抽查满载轴荷，防止超载。

低地板结构把设备移到车顶与车尾，轴荷分配因此比传统客车更敏感。电池车型还需要按电池布置重新标定，这也是电动公交常出现“前轴偏轻”问题的原因。

## 量级位置

1.2×10⁴ kg 约等于 9 辆卡罗拉，或 2.4 头非洲象。它比动车车厢轻三倍多，却比卡车车头重；在 B8 带里，它代表“城市基础设施级别的移动质量”。质量与载客量不是一回事：一辆 12 t 的车可以装下近百人。[3]

## 怎么继续走

想看更重的轨道车辆，去 mass.train-car；想看载货而非载人的同类，去 mass.truck；想比较乘用车，去 mass.car 与 mass.suv；想从材料层面看车体钢材，去 elements.fe。
