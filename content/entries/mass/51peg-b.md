---
id: mass.51peg-b
title: 51 Pegasi b：8.73×10²⁶ kg，第一颗被发现的系外行星
summary: >-
  51 Pegasi b 是人类确认的第一颗围绕主序星运行的系外行星，行星总质量约 8.73×10²⁶ kg，约合 0.46
  个木星质量。质量由视向速度法测得，相对不确定度约 10%。
dimension: mass
category: 系外行星
displayValue: 8.73×10²⁶ kg
quantity:
  value: 8.73e+26
  unit: kg
  measure: 行星总质量（不含暗物质）；由视向速度法测得，约 0.46 个木星质量，相对不确定度约 10%
  approximate: false
grade: B
mass:
  type: total
  includesDarkMatter: false
  method: radial velocity
  uncertainty:
    value: 0.1
    unit: relative
related:
  - mass.jupiter
  - mass.earth
  - space.exoplanet
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
  - title: NASA Exoplanet Archive
    url: 'https://exoplanetarchive.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: Exoplanet Exploration
    url: 'https://exoplanets.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
tags:
  - 质量
  - 系外行星
  - 热木星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 行星总质量（不含暗物质）；由视向速度法测得，约 0.46 个木星质量，相对不确定度约 10%
  precision: B 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 10%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B12 巨行星与系外行星 · 8.73×10²⁶ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B12
  bandLabel: 巨行星与系外行星
  log10: 26.941
  position: 71.98
  color: '#7fb5e6'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

51 Pegasi b 是飞马座 51 星周围的一颗系外行星，1995 年被发现，是人类确认的第一颗围绕主序星运行的系外行星。本条记录它的行星总质量约 8.73×10²⁶ kg。[1] 口径为行星总质量，不包含暗物质。它约合 0.46 个木星质量，轨道周期只有约 4.2 天，离母星非常近。

## 口径与不确定度

视向速度法只能给出行星质量的下限，严格说是质量与轨道倾角正弦的乘积，因此这里说的是行星总质量的估计值。[2] 相对不确定度约 10%，定为 B 级。倾角未知时真实质量可能略大于此值，但不会更小，这是该方法固有的口径限制，也是引用这类数值时必须说明的地方。

## 怎么测出来的

恒星受行星引力牵引，会绕系统质心做周期性摆动，光谱中的吸收线因此出现周期性的多普勒位移。[1] 测出位移幅度、周期与恒星质量，就能反推行星质量。[2] 51 Pegasi b 的位移幅度约为每秒五十多米，周期约 4.2 天，正是热木星的典型信号，也说明它离母星比水星离太阳近得多。[3]

## 量级位置

8.73×10²⁶ kg 位于 B12 带的中高段，约为木星质量的 46%，约为地球质量的 146 倍。[1] 它的质量与土星接近而轨道更靠近恒星，是热木星的代表。它的发现改变了人们对行星系统多样性的认识，也拉开了系外行星研究的序幕，说明行星可以在极近轨道上存在。

## 怎么继续走

想看质量相近的木星，去 mass.jupiter；想看地球参照，去 mass.earth；想看系外行星的探测方法与更多样本，去 space.exoplanet。[3] 从这颗行星出发，继续往上就是木星与行星质量伴星所在的量级，这条轴的上端连接着褐矮星与恒星，再往上才是褐矮星。
