---
id: mass.coin
title: 美国 5 分镍币：5.000×10⁻³ kg，铸币局的法定规格
summary: >-
  美国 5 分镍币的法定质量为 5.000 g，即 5.000×10⁻³ kg；直径 21.21 mm、厚 1.95 mm，成分为 75% 铜、25%
  镍。这是单枚净重，由美国铸币局规格规定。
dimension: mass
category: 硬币
displayValue: 5.000×10⁻³ kg
quantity:
  value: 0.005
  unit: kg
  measure: 美国铸币局法定单枚质量 5.000 g；铜镍合金（75% Cu、25% Ni），不含包装
  approximate: false
grade: A
related:
  - mass.paper-clip
  - mass.tablet
  - mass.sand-grain
  - mass.rain-drop
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
  - title: United States Mint
    url: 'https://www.usmint.gov/'
    publisher: United States Mint
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: ISO Standards
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
tags:
  - 质量
  - 硬币
  - 镍币
  - 法定规格
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 美国铸币局法定单枚质量 5.000 g；铜镍合金（75% Cu、25% Ni），不含包装
  precision: A 级；记录值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B6 日常微粒 · 5.000×10⁻³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B6
  bandLabel: 日常微粒
  log10: -2.301
  position: 40.54
  color: '#c9a77a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

美国 5 分镍币的法定质量是 5.000 克，即 5.000×10⁻³ kg。[1] 它由 75% 铜与 25% 镍的合金制成，直径 21.21 毫米、厚 1.95 毫米。这个数是单枚硬币的净重，不含卷纸、币盒或运输包装，也不是一千枚一箱的总重。

## 口径与不确定度

这是规格值，不是抽样均值：铸币局在生产中按公差控制，出厂硬币围绕 5.000 克有小幅波动，流通磨损还会再减一点，但条目记录的是法定规格。[1] 需要与“面值”区分：5 分是面值，5 克是质量，两者没有换算关系；也不要把“镍币”误解为纯镍，它含镍只有四分之一。同系列的 25 美分硬币质量为 5.670 克，不能混用；不同年份的合金配比也曾变化，本条只取现行铜镍材质。

## 怎么测出来的

法定质量来自设计阶段的合金密度与坯饼尺寸：按直径、厚度与合金密度算出目标体积与质量，再在压印后抽检。[1] 造币厂的检重设备会逐枚或抽样称量，把超出公差的坯饼剔除；计量溯源则接到国家标准机构的质量标尺上。[2] 2019 年国际单位制修订后，千克改由普朗克常数定义，[3] 硬币的法定质量仍以克为表述，但溯源链条已换成基本常数。工艺成熟，所以 5.000 克可以写到三位小数而不算假精度。

## 量级位置

5.000×10⁻³ kg 位于 B6 带的最上端：约为一枚回形针的十倍，约为一片 500 mg 药片的八倍，是一粒 0.5 mm 砂粒的三万倍。[2] 它也是“小物件”与“千克”之间的台阶：一千枚这样的硬币正好约 5 千克。

## 怎么继续走

想看同量级的日常物件，去 mass.paper-clip 与 mass.tablet；想看更小的颗粒如何累加，去 mass.sand-grain；想看液态小质量，去 mass.rain-drop。硬币的读数来自法定规格，而不是每次上秤的实测，这一点与估算条目不同。
