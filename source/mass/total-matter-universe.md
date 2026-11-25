---
id: mass.total-matter-universe
title: 可观测宇宙的总物质：9.9×10⁵³ kg
summary: 可观测宇宙内普通物质与暗物质合计约 9.9×10⁵³ kg，只含物质、不含暗能量。数值由 Ω_m 与临界密度、共动体积换算，相对不确定度约 2%。
dimension: mass
category: 星系与宇宙
displayValue: 9.9×10⁵³ kg
quantity:
  value: 9.9e+53
  unit: kg
  measure: 可观测宇宙内普通物质与暗物质合计，不含暗能量；由宇宙微波背景的 Ω_m 与临界密度、共动体积换算，相对不确定度约 2%
  approximate: false
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: CMB matter density times comoving volume
  uncertainty:
    value: 0.02
    unit: relative
related:
  - mass.observable-universe
  - mass.dark-matter-mass
  - mass.hubble-volume
  - space.observable-universe
  - time.big-bang
  - temperature.cmb
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
  - title: ESA Planck
    url: 'https://sci.esa.int/web/planck'
    publisher: European Space Agency
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: "Gott et al. (2005), A Map of the Universe, §II"
    url: "https://arxiv.org/html/astro-ph/0310571v2"
    publisher: "J. Richard Gott III et al. / The Astrophysical Journal"
    accessed: '2026-11-24'
  - title: "Ask an Astrophysicist — Cosmology: horizons, distance and lookback time"
    url: "https://imagine.gsfc.nasa.gov/ask_astro/cosmology.html"
    publisher: "NASA / GSFC / HEASARC"
    accessed: '2026-11-24'
tags:
  - 质量
  - 宇宙学
  - 总物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 可观测宇宙内普通物质与暗物质合计，不含暗能量；由宇宙微波背景的 Ω_m 与临界密度、共动体积换算，相对不确定度约 2%
  precision: B 级；记录值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 2%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B16 宇宙尺度 · 9.9×10⁵³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B16
  bandLabel: 宇宙尺度
  log10: 53.996
  position: 100
  color: '#c9d8ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Total matter in the observable universe
---
## 这个读数是什么

可观测宇宙内普通物质与暗物质合计约 9.9×10⁵³ kg。[1] 口径是总物质，只含重子与暗物质，不含暗能量，因此它不等于宇宙的总能量。[2] 它等于物质密度参数 Ω_m 乘临界密度与共动体积，是把所有有质量的成分加在一起的总账。

## 口径与不确定度

要强调：本条与 mass.observable-universe、mass.dark-matter-mass 是同一个可观测宇宙的同一体积，只是成分口径不同——一条只算重子，一条只算暗物质，本条是两者之和。[3] 三者可以相加核对：1.5 加 8.4 约等于 9.9，这说明它们是同一份账的三种拆法，而不是三种不同测量。[1] 数值由 Ω_m 与临界密度、共动体积换算，相对不确定度约百分之二，定为 B 级。

## 怎么测出来的

Ω_m 同样来自宇宙微波背景的声学峰，再与超新星、重子声学振荡的观测交叉检验。[2] 把 Ω_m 乘临界密度，再乘可观测宇宙的共动体积，就得到总物质质量。[3] 暗能量不计入其中：它均匀分布、不参与成团，只能通过膨胀历史间接约束，不属于物质这一口径。

## 量级位置

9.9×10⁵³ kg 位于 B16 带上段，是可观测宇宙普通物质的六倍多，也是最大长城的约两万倍。[1] 它与哈勃体积的临界质量同处 10⁵³ kg 量级，但后者含暗能量当量、体积也不同，两者不可互换。[2] 走到这个数，质量阶梯已经抵达宇宙中物质总量这一层。

## 物质不等于能量

总物质约 9.9×10⁵³ 千克，只含重子与暗物质；暗能量不在这笔账里，它均匀分布、不参与成团。宇宙的总能量还包括辐射与暗能量，不能把“物质质量”直接套成“宇宙总重量”。质能等价不等于所有能量都能归入物质口径。[1][S2]

总物质质量还依赖可观测宇宙的体积定义：共动半径 465 亿光年对应的是粒子视界，不是整个宇宙。若宇宙有限或更大，这个 9.9×10⁵³ 千克只描述我们能观测到的那一块。

## 怎么继续走

想看拆开的两个成分，去 mass.observable-universe 与 mass.dark-matter-mass；想看清体积的差别，去 mass.hubble-volume；想回到结构一侧，去 mass.hercules-corona-borealis-great-wall。[3] 这四条里只有前三条共享同一共动体积，第四条只是可作对照的最大结构。这也是本条与墙类条目最大的差别：一个是全宇宙的统计，一个是局部结构的粗略估算。

## 物质不等于能量

总物质约 9.9×10⁵³ 千克，只含重子与暗物质；暗能量不在这笔账里，它均匀分布、不参与成团。[1] 宇宙的总能量还包括辐射与暗能量，不能把“物质质量”直接套成“宇宙总重量”。质能等价不等于所有能量都能归入物质口径。

## 五轴对照

在质量轴，总物质约 10⁵⁴ 千克；在空间轴，可观测宇宙半径约 465 亿光年；在时间轴，这个质量随宇宙膨胀稀释；在温度轴，宇宙微波背景记录了早期热状态。质量、体积与膨胀共同定义宇宙的物质账本。[1][2]

## 延伸核对

补充的来源 [4]（J. Richard Gott III et al. / The Astrophysical Journal）、[5]（NASA / GSFC / HEASARC） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
