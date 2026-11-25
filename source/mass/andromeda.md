---
id: mass.andromeda
title: 仙女座星系：约 2.98×10⁴² kg，与银河系相当的总质量
summary: >-
  仙女座星系（M31）的总质量约 2.98×10⁴² kg，折合约 1.5×10¹²
  个太阳质量，口径包含暗物质晕。数值由旋转曲线与卫星星系运动联合拟合，恒星质量约 1×10¹¹ 个太阳质量，相对不确定度约 30%。
dimension: mass
category: 星系与宇宙
displayValue: 2.98×10⁴² kg
quantity:
  value: 2.98e+42
  unit: kg
  measure: 仙女座星系总质量（含暗物质晕，约 1.5×10¹² 太阳质量）；由旋转曲线与卫星星系运动拟合，相对不确定度约 30%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: rotation curve and satellite kinematics
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.milky-way
  - mass.local-group
  - space.andromeda-galaxy
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
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: ESA Science
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 星系
  - 仙女座星系
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 仙女座星系总质量（含暗物质晕，约 1.5×10¹² 太阳质量）；由旋转曲线与卫星星系运动拟合，相对不确定度约 30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 2.98×10⁴² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 42.474
  position: 88.68
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
titleEn: Andromeda Galaxy
---
## 这个读数是什么

仙女座星系是离银河系最近的大型旋涡星系，距我们约二百五十万光年，本条记录它的总质量约 2.98×10⁴² kg，折合约 1.5×10¹² 个太阳质量。[1] 口径包含暗物质晕。它的恒星质量约 1×10¹¹ 个太阳质量，约为总质量的百分之七。[2] 它与银河系构成本星系群的两大主体。

## 口径与不确定度

总质量来自引力运动，恒星质量来自光度与星族模型，前者约为后者的十五倍，差值就是暗物质与气体的份额。[2] 本条只采用含暗物质的总质量。相对不确定度约 30%，因为外晕缺少足够多的示踪天体，结果依赖模型外推，故标为近似值、定为 B 级。[3]

## 怎么测出来的

盘区的旋转曲线给出内层质量分布，中性氢观测把曲线延伸到很远的外围。卫星星系与球状星团的视向速度则约束更大的包围质量。[1] 两种方法各有系统误差：旋转曲线受盘倾斜影响，卫星运动受样本数量限制，合起来才有约三成的误差。[3] 这类观测需要长时间积分才能覆盖到外晕。

## 量级位置

2.98×10⁴² kg 与银河系几乎相同，两者构成本星系群的大部分质量。[1] 它约为大麦哲伦云的十倍，约为室女座星系团的八百分之一。在旋涡星系里，它属于偏重的一端，也是少数肉眼可见的河外星系之一，但仍处在 B15 带的下段。它也是本星系群中质量最大的成员之一。

## 怎么继续走

想和它的近邻对照，去 mass.milky-way；想看两者共同的引力系统，去 mass.local-group；想看它在空间轴上的位置，去 space.andromeda-galaxy。[2] 再往上走一个量级，去 mass.m87-galaxy，看一个星系团中心巨椭圆星系的总质量。这样就把同一质量轴从旋涡星系接到了巨椭圆星系。
