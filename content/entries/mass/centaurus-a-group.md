---
id: mass.centaurus-a-group
title: 半人马座 A 星系群：约 2.6×10⁴³ kg，南天最近的星系群之一
summary: >-
  半人马座 A 星系群以 NGC 5128 为核心，总质量约 2.6×10⁴³ kg，折合约 1.3×10¹³
  个太阳质量，口径包含暗物质。数值由成员星系速度弥散估算，相对不确定度约 50%，属量级估算。
dimension: mass
category: 星系群
displayValue: 2.6×10⁴³ kg
quantity:
  value: 2.6e+43
  unit: kg
  measure: 半人马座 A 星系群总质量（含暗物质，约 1.3×10¹³ 太阳质量）；由成员星系速度弥散估算，相对不确定度约 50%
  approximate: true
grade: C
mass:
  type: total
  includesDarkMatter: true
  method: member velocity dispersion
  uncertainty:
    value: 0.5
    unit: relative
related:
  - mass.local-group
  - mass.fornax-cluster
  - space.centaurus-a
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
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
  - title: ESA Science
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 星系群
  - 半人马座A
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 半人马座 A 星系群总质量（含暗物质，约 1.3×10¹³ 太阳质量）；由成员星系速度弥散估算，相对不确定度约 50%
  precision: C 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 50%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 2.6×10⁴³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 43.415
  position: 89.69
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

半人马座 A 星系群是南天最近的星系群之一，核心是射电源半人马座 A，即 NGC 5128，距我们约一千三百万光年，本条记录它的总质量约 2.6×10⁴³ kg，折合约 1.3×10¹³ 个太阳质量。[1] 口径包含暗物质。成员星系的恒星质量总和约一万亿个太阳质量，不到总质量的一成。[2] 半人马座 A 本身就是一次星系并合的产物。

## 口径与不确定度

星系群质量依赖成员判定与半径选取，边界一改，数值就会变。[2] 本条采用含暗物质的引力质量口径。相对不确定度约 50%，因为成员数目有限、速度样本不完整，且群与近邻结构可能相连，结果只能算量级估算，故标近似、定 C 级。[3]

## 怎么测出来的

把成员星系的红移换算成视向速度，求相对群中心的平均速度与弥散，再由维里定理估出引力质量。[1] 半人马座 A 本身的气体与壳层运动也能提供约束。难点在于区分真正束缚的成员与沿视线偶然重叠的背景星系，误判会直接改变质量。[3]

## 量级位置

2.6×10⁴³ kg 位于 B15 带中段，约为本星系群总质量的六倍，约为室女座星系团的九十分之一。[1] 它比单个巨椭圆星系重约五倍，说明星系群的质量已明显由成员之间的引力共同贡献。它是“星系群”这一级的典型样本，也说明星系群不是星系的简单堆叠。

## 怎么继续走

想看更轻的星系群，去 mass.local-group；想看它核心的射电星系图景，去 space.centaurus-a；想看再上一个量级的星系团，去 mass.fornax-cluster。[2] 这三条给出星系群从轻到重、再到星系团的连续台阶。它也提醒我们，群的质量大部分藏在成员星系之间的暗物质里。
