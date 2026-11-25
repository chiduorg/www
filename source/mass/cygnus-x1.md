---
id: mass.cygnus-x1
title: 天鹅座 X-1：4.22×10³¹ kg，第一个被确认的恒星级黑洞
summary: >-
  天鹅座 X-1 的动力学质量约 4.22×10³¹ kg，即 21.2 太阳质量。数值由双星轨道拟合得到，相对不确定度约
  1%，是最可靠的恒星级黑洞质量之一。
dimension: mass
category: 恒星与致密天体
displayValue: 4.22×10³¹ kg
quantity:
  value: 4.22e+31
  unit: kg
  measure: 黑洞动力学质量（约 21.2 太阳质量）；由与 O 型超巨星伴星的双星轨道拟合得到，相对不确定度约 1%
  approximate: false
grade: A
mass:
  type: dynamical
  includesDarkMatter: false
  method: binary orbit fitting
  uncertainty:
    value: 0.01
    unit: relative
related:
  - mass.psr-j0348-0432
  - mass.gw150914-merger
  - mass.betelgeuse
  - space.black-hole-event-horizon
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
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
tags:
  - 质量
  - 黑洞
  - 恒星级黑洞
  - X 射线双星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞动力学质量（约 21.2 太阳质量）；由与 O 型超巨星伴星的双星轨道拟合得到，相对不确定度约 1%
  precision: A 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 1%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 4.22×10³¹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 31.625
  position: 77.02
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
titleEn: Cygnus X-1
---
## 这个读数是什么

天鹅座 X-1 是一个 X 射线双星，由一颗 O 型超巨星与一个不可见致密天体组成，距离约 7200 光年。[1] 致密天体的动力学质量约 4.22×10³¹ kg，即 21.2 太阳质量，远超中子星的质量上限，因此被认定为黑洞。它也是第一个被广泛接受的黑洞候选体。它位于天鹅座，是 X 射线天文史上最重要的源之一，也是黑洞研究的起点。

## 口径与不确定度

口径为动力学质量，指由伴星轨道反推出的引力质量，不包含暗物质。[2] 这里的质量是时空参数，描述引力场的强弱，而不是把物质放上天平称出来的重量。这也是全条目不写“重多少吨”的原因，质量只作为引力场参数出现。相对不确定度约 1%，定为 A 级。

## 怎么测出来的

O 型星的谱线周期变化给出轨道周期与视向速度，再结合轨道倾角与质量函数，就能解出致密天体的质量。[2] 倾角的确定依赖对椭球状伴星的测光与光谱建模，这一步是误差的主要来源。[3] 多组独立分析收敛到 21 太阳质量附近，才使这个值达到 1% 的精度。倾角一旦偏小，质量就会被低估，反之则被高估。

## 量级位置

4.22×10³¹ kg 位于 B13 带上段，约为太阳的二十一倍。[1] 它比最重的中子星还重约十倍，恰好落在观测上的“质量空隙”之上，是恒星坍缩能留下什么样残骸的直接证据。从 21 到 60 多太阳质量，并合可以把黑洞推过这道门槛。

## 怎么继续走

想看中子星一侧的上限，去 mass.psr-j0348-0432；想看并合形成的黑洞，去 mass.gw150914-merger；想看更重的恒星前身，去 mass.betelgeuse；想看事件视界本身，去 space.black-hole-event-horizon。把单颗黑洞、并合产物与中子星上限放在一起读，质量序列才完整。这是理解 X 射线双星演化的关键一步。


## 深读一：量值口径

本条的核心量值是 4.220e+31 kg，量的是黑洞动力学质量（约 21.2 太阳质量）；由与 O 型超巨星伴星的双星轨道拟合得到，相对不确定度约 1%。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：reference=质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。；scope=黑洞动力学质量（约 21.2 太阳质量）；由与 O 型超巨星伴星的双星轨道拟合得到，相对不确定度约 1%；precision=A 级；记录值。；massType=动力学质量；includesDarkMatter=否。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照PSR J0348+0432：4.00×10³⁰ kg，两倍太阳质量的中子星（4e+30）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：不确定度 0.01 relative。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
