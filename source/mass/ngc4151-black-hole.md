---
id: mass.ngc4151-black-hole
title: NGC 4151 中心黑洞：7.96×10³⁷ kg，反响映射的经典标定对象
summary: >-
  NGC 4151 是天空中最亮的塞弗特星系核之一，中心黑洞质量约 7.96×10³⁷ kg，折合约四千万个太阳质量。数值来自宽线区反响映射，相对不确定度约
  15%。
dimension: mass
category: 恒星与致密天体
displayValue: 7.96×10³⁷ kg
quantity:
  value: 7.96e+37
  unit: kg
  measure: 黑洞反响映射质量（约 4×10⁷ 太阳质量）；由宽线区时延与谱线宽度经维里关系换算得出，相对不确定度约 15%
  approximate: false
grade: B
mass:
  type: dynamical
  includesDarkMatter: false
  method: reverberation mapping
  uncertainty:
    value: 0.15
    unit: relative
related:
  - mass.ngc4395-black-hole
  - mass.3c273
  - space.black-hole-event-horizon
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
  - 黑洞
  - 活动星系核
  - 反响映射
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞反响映射质量（约 4×10⁷ 太阳质量）；由宽线区时延与谱线宽度经维里关系换算得出，相对不确定度约 15%
  precision: B 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 15%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B14 黑洞与类星体 · 7.96×10³⁷ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B14
  bandLabel: 黑洞与类星体
  log10: 37.901
  position: 83.76
  color: '#ff9a4a'
  scaleMin: -40
  scaleMax: 53
titleEn: NGC 4151 black hole
---
## 这个读数是什么

NGC 4151 是天空中最亮的塞弗特星系核之一，中心黑洞质量约 7.96×10³⁷ kg，折合约四千万个太阳质量。[1] 口径是反响映射质量，质量是时空参数，不是把黑洞当物质称重。它是反响映射方法最经典的标定对象之一。它的黑洞虽然不算极重，却因为距离近、亮度高，成为检验质量测量方法的标准靶。

## 口径与不确定度

质量由宽线区半径与谱线速度联合求得，再用维里因子换算。相对不确定度约 15%，定为 B 级，正文保留两位有效数字。[2] 这一不确定度主要来自宽线区几何与倾角未知，而不是观测噪声；不同谱线给出的结果也会略有差异。若改用不同的发射线或不同年份的数据，结果通常落在十几到二十几个百分点的范围内。

## 怎么测出来的

多台望远镜对氢宽线与连续谱做了长期同步监测，测到约数天的滞后，从而定出宽线区半径。[2] 把半径与谱线宽度代入维里关系即可得到质量。NGC 4151 的连续谱变化剧烈，正好适合做这种延时测量，但尘埃与吸收也会带来系统误差。[3]

## 量级位置

7.96×10³⁷ kg 是 NGC 4395 中心黑洞的一百多倍，是人马座 A* 的九倍多。[1] 它落在中等偏上的质量段，正处于 B14 带中部。这一类星系核的黑洞质量跨度极大，从几十万到几十亿太阳质量都有，说明星系与黑洞的共同演化并不简单。从它出发向两端看，质量可以小到几十万太阳质量，也可以大到上百亿太阳质量。

## 怎么继续走

想看同一方法在更低质量端的应用，去 mass.ngc4395-black-hole；想看方法相同、质量高得多的类星体，去 mass.3c273；想了解事件视界与吸积的关系，去 space.black-hole-event-horizon。这三条分别指向低质量端、高质量端与黑洞边界，方便把数值放回整条质量轴上。
