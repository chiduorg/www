---
id: mass.wind-turbine
title: 陆上风机：1.0×10⁶ kg，含塔筒的安装总质量
summary: >-
  一台 4–5 MW 级陆上风机的整机安装总质量约 1.0×10⁶ kg，含塔筒、机舱、轮毂与三支叶片，不含基础。塔筒 150–250 t、机舱 70–120
  t、叶片每支 15–25 t。
dimension: mass
category: 能源设备
displayValue: 1.0×10⁶ kg
quantity:
  value: 1000000
  unit: kg
  measure: 制造商安装总质量：塔筒、机舱、轮毂与叶片之和，不含基础与吊装工装
  approximate: true
grade: B
related:
  - mass.eiffel-tower
  - mass.car
  - mass.iss
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
  - title: Vestas official site — onshore wind turbines
    url: 'https://www.vestas.com/'
    publisher: Vestas Wind Systems
    accessed: '2026-11-09'
  - title: Siemens Gamesa official site — onshore platforms
    url: 'https://www.siemensgamesa.com/'
    publisher: Siemens Gamesa Renewable Energy
    accessed: '2026-11-09'
  - title: IEC 61400 — wind energy generation systems
    url: 'https://www.iec.ch/'
    publisher: International Electrotechnical Commission
    accessed: '2026-11-09'
tags:
  - 质量
  - 风机
  - 风电
  - 安装总质量
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 制造商安装总质量：塔筒、机舱、轮毂与叶片之和，不含基础与吊装工装
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B8 车辆与大型动物 · 1.0×10⁶ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B8
  bandLabel: 车辆与大型动物
  log10: 6
  position: 49.46
  color: '#e6c17c'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

一台陆上风机的整机安装总质量约 1.0×10⁶ kg，含塔筒、机舱、轮毂与三支叶片，不含基础。[1] 以 4–5 MW 级、轮毂高度 100–150 m、风轮直径 130–150 m 的机型为例，这是制造商给出的吊装总质量。

这个读数描述的是“吊到天上、立在地面上的那一整套设备”，不是整座风电场，也不是含混凝土基础的全部土建质量。口径不同，数字可以差三倍。

## 口径与不确定度

拆分大致是：塔筒 150–250 t，机舱（含齿轮箱、发电机、变流器）70–120 t，叶片每支 15–25 t，轮毂 30–50 t。[1][2] 加起来落在 700–1,200 t，随机型与塔筒高度变化；1,000 t 是中位代表值，标 B 级，approximate 为 true。

基础（混凝土与钢筋）常重达上千吨，但它是土建结构，不计入“风机整机”；吊装时的吊车与工装同样不在内。[2] 口径不清，就会把 1,000 t 与 3,000 t 混为一谈。不同制造商的拆分口径也不完全一致，跨机型比较时应看整机总质量而不是单件。

## 怎么测出来的

制造商按部件出厂质量累加，并在吊装前逐件复核；塔筒分段法兰、机舱重心与叶片质量都影响吊装方案。[2] 现场用吊车载荷表与称重传感器校验，确保单钩载荷在安全范围内。

载荷工况与结构安全要求由 IEC 61400 系列标准规定，它约束的是整机与部件的设计载荷，而非直接称重。[3] 制造商在型式认证中提交的质量与重心数据，会成为现场吊装与基础设计的输入。

## 量级位置

1×10⁶ kg 约等于 760 辆卡罗拉，或 6.7 头蓝鲸。它落在 B8 带最上端，再往上一个十进位就是埃菲尔铁塔与大型建筑。质量在这里主要来自钢材：塔筒是卷制钢板，叶片是玻璃纤维与碳纤维复合材料。

## 怎么继续走

想看同一十进位的巨型金属结构，去 mass.eiffel-tower；想看“重但会飞”的对照，去 mass.iss；想理解塔筒用钢，从 elements.fe 进入元素轴；想比较地面运输工具，去 mass.car。
