---
id: mass.cargo-ship
title: 马士基 3E 级：约 2.2×10⁸ kg，满载排水量
summary: >-
  3E 级集装箱船载重吨约 1.65×10⁵ t，轻船质量约 6×10⁴ t，满载排水量约 2.2×10⁸ kg。1.95×10⁵
  的容积总吨是体积，不是质量；载重吨也只算可加载部分。
dimension: mass
category: 工程与交通
displayValue: 2.2×10⁸ kg
quantity:
  value: 220000000
  unit: kg
  measure: 满载排水量：由公开的载重吨 1.65×10⁵ t 与轻船质量约 6×10⁴ t 相加得到，约 2.2×10⁸ kg；容积总吨不计入
  approximate: true
grade: B
related:
  - mass.cruise-ship
  - mass.aircraft-carrier
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
  - title: Maersk — fleet and vessel specifications
    url: 'https://www.maersk.com/'
    publisher: A.P. Moller — Maersk
    accessed: '2026-11-09'
  - title: Institution of Civil Engineers — maritime and port engineering
    url: 'https://www.ice.org.uk/'
    publisher: Institution of Civil Engineers
    accessed: '2026-11-09'
  - title: 'SI base unit: kilogram (kg)'
    url: 'https://www.bipm.org/en/si-base-units/kilogram'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
tags:
  - 质量
  - 集装箱船
  - 排水量
  - 航运
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 满载排水量：由公开的载重吨 1.65×10⁵ t 与轻船质量约 6×10⁴ t 相加得到，约 2.2×10⁸ kg；容积总吨不计入
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 2.2×10⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 8.342
  position: 51.98
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
titleEn: Maersk 3E-class container ship
---
## 这个读数是什么

马士基 3E 级是 2013 年起投入欧亚航线的集装箱船，船长 399 m、宽 59 m，标称装载 18,270 个标准箱。[1] 它的满载排水量约 2.2×10⁸ kg：公开的载重吨约 1.65×10⁵ t，轻船质量约 6×10⁴ t，两者相加就是满载时的总质量。这个值是相加得到的，不是船厂直接公布的一个数。

## 口径与不确定度

集装箱船的四个数字常被混用：容积总吨约 1.95×10⁵，是量体积的；载重吨约 1.65×10⁵ t，只包括货物、燃油、淡水和备品；轻船质量约 6×10⁴ t，是空船本身；满载排水量才是船最重时的总质量。[1] 载重吨不是船重，容积总吨更不是 kg。由于轻船质量取自公开的近似值，本条标为估算，误差估计在一成以内。

## 怎么测出来的

设计时按型线图算出各吃水的排水体积，再乘海水密度；营运中靠载重线与吃水标尺控制装载。[2] 集装箱上船前还要按国际公约申报核实总重，港口据此配载，避免局部超载。因此 2.2×10⁸ kg 这个数由静水力计算与装载控制共同保证，而不是逐箱称完再汇总。

## 量级位置

2.2×10⁸ kg 约等于 0.6 座帝国大厦，或 1,470 头蓝鲸，也是玛丽皇后二号的 2.8 倍。[1] 它落在 10⁸ kg 档的中段：同样装两万个箱子，船的钢壳只占小部分，大部分质量是货、油和水。船上集装箱本身也计入载重吨，一船货可能上万吨，所以同一艘船每次航行的总质量都不一样。

## 怎么继续走

想看同量级的客船，去 mass.cruise-ship；想看越线的军舰，去 mass.aircraft-carrier；想比较钢结构桥梁的质量效率，去 mass.eiffel-tower；想理解船体用钢的成分，从 elements.fe 进入元素轴。

本条的质量单位与换算依据 BIPM 对千克的定义。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 2.2×10⁸ 千克，换算后是 2.2×10⁵ 吨；约为埃菲尔铁塔（7300 千克）的 3.01×10⁴ 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁸ 量级附近。

读图时先看量级，再看倍数：10⁸ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
