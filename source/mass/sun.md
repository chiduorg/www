---
id: mass.sun
title: 太阳：1.989×10³⁰ kg，整条质量阶梯的定义锚点
summary: >-
  太阳的恒星总质量约 1.989×10³⁰ kg，即 1 太阳质量，常被用作整条质量阶梯的换算单位。数值由国际天文学联合会推荐的名义太阳质量参数 GM☉
  除以引力常数 G 换算，相对不确定度约 1×10⁻⁴。
dimension: mass
category: 恒星与致密天体
displayValue: 1.989×10³⁰ kg
quantity:
  value: 1.989e+30
  unit: kg
  measure: 太阳总质量（恒星质量口径，含全部物质，不含暗物质）；由 IAU 名义太阳质量参数 GM☉ 除以引力常数 G 换算，相对不确定度约 1×10⁻⁴
  approximate: false
grade: A
mass:
  type: stellar
  includesDarkMatter: false
  method: IAU nominal solar mass parameter and G
  uncertainty:
    value: 0.0001
    unit: relative
related:
  - mass.earth
  - mass.jupiter
  - space.sun
  - time.solar-system
  - temperature.sun-core
  - mass.sirius-a
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
  - title: IAU 2015 Resolution B3
    url: 'https://www.iau.org/'
    publisher: International Astronomical Union
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: SIMBAD Astronomical Database
    url: 'https://simbad.cds.unistra.fr/'
    publisher: CDS
    accessed: '2026-11-09'
  - title: "Planetary Fact Sheet"
    url: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/"
    publisher: "NASA Space Science Data Coordinated Archive"
    accessed: '2026-11-24'
  - title: "Solar System Dynamics"
    url: "https://ssd.jpl.nasa.gov/"
    publisher: "NASA Jet Propulsion Laboratory"
    accessed: '2026-11-24'
tags:
  - 质量
  - 恒星
  - 太阳
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 太阳总质量（恒星质量口径，含全部物质，不含暗物质）；由 IAU 名义太阳质量参数 GM☉ 除以引力常数 G 换算，相对不确定度约 1×10⁻⁴
  precision: A 级；记录值。
  massType: 恒星质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.01%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 1.989×10³⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 30.299
  position: 75.59
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
titleEn: Sun
---
## 这个读数是什么

太阳是离我们最近的恒星，本条记录它的恒星总质量约 1.989×10³⁰ kg。[1] 这个数值也被写成 1 太阳质量，是整条质量阶梯最常用的换算单位：地球约为它的三十三万分之一，木星约为它的千分之一。[2] 这个换算单位在天文学里也直接写成一个太阳质量。

## 口径与不确定度

口径为恒星总质量，包含太阳内部全部物质与日冕抛出的物质，不包含暗物质。[1] 它由国际天文学联合会推荐的名义太阳质量参数 GM☉ 除以引力常数 G 换算得到，相对不确定度约 1×10⁻⁴，定为 A 级。换算的不确定度几乎全部来自 G，而不是来自对太阳本身的观测。[2] 名义值是约定，不随每次新测量而改动，方便全球统一换算。

## 怎么测出来的

天文学上很少直接“称”太阳，而是先测引力参数 GM☉：行星轨道、探测器飞掠与日面振动的观测共同约束它，精度可达十亿分之一。[3] 因为 G 的相对测量精度只有约十万分之二，两者的比值才是太阳质量的误差来源。[2] 所以太阳质量能写到几位小数，取决于 G，而不取决于行星轨道测得多准。

## 量级位置

1.989×10³⁰ kg 位于 B13 带的中段，是恒星质量段的原点。[1] 褐矮星在它的百分之几以下，中子星与恒星级黑洞则在它的几倍到几十倍之间；把它与地球、木星放在一起，才看得出“恒星”与“行星”之间隔着一个千倍级的台阶。它是 B13 带的定义锚点，整条阶梯的倍数都以它为分母。

## 太阳每秒损失多少质量

太阳通过聚变把质量转为能量，每秒约损失 4×10⁹ 千克；再通过太阳风与辐射持续抛出物质。相对于 2×10³⁰ 千克的总质量，这个损失率极小，但在数十亿年尺度上会改变恒星结构。质量不是永恒不变的属性。[1][S2]

太阳质量还会随太阳风与日冕物质抛射减少，但损失率远低于核聚变的质量亏损；在红巨星阶段，质量损失会显著加快。现在的 1.989×10³⁰ 千克是当前太阳的质量，不是永恒值。

太阳质量还可以用开普勒第三定律从行星轨道反推：GM☉ 的精度远高于 G，因此太阳质量的误差主要来自引力常数。

## 怎么继续走

想知道行星一侧的参照，去 mass.earth 与 mass.jupiter；想沿着恒星序列往上走，去 mass.sirius-a；想看太阳在空间轴上的图景，去 space.sun。质量阶梯上每一条恒星条目，最终都要回答“是太阳的多少倍”，这也是把太阳放在 B13 中段的意义。它也是理解“太阳质量”这个单位的入口。

## 太阳每秒损失多少质量

太阳通过聚变把质量转为能量，每秒约损失 4×10⁹ 千克；再通过太阳风与辐射持续抛出物质。[1] 相对于 2×10³⁰ 千克的总质量，这个损失率极小，但在数十亿年尺度上会改变恒星结构。质量不是永恒不变的属性。

## 五轴对照

在质量轴，太阳约 1.989×10³⁰ 千克；在空间轴，半径约 69.6 万公里；在时间轴，它已燃烧约 46 亿年；在温度轴，核心约 1,500 万 K。质量、光度与寿命由同一组恒星结构方程联系。[1][2]

## 读数的口径与换算

本条采用的量是 1.989×10³⁰ kg，口径是 太阳总质量（恒星质量口径，含全部物质，不含暗物质）；由 IAU 名义太阳质量参数 GM☉ 除以引力常数 G 换算，相对不确定度约 1×10⁻⁴。质量是广延量，读数依赖湿重/干重、含血/不含血、整备/满载等口径；样本与测量条件必须一起引用。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（NASA Space Science Data Coordinated Archive）、[5]（NASA Jet Propulsion Laboratory） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
