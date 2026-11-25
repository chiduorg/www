---
id: mass.eta-carinae
title: 船底座 η：1.99×10³² kg，只能给量级的大质量双星
summary: 船底座 η 的主星质量约 1.99×10³² kg，大致为 100 太阳质量。数值依赖演化模型与双星结构假设，只能给量级，相对不确定度约 30%。
dimension: mass
category: 恒星与致密天体
displayValue: 1.99×10³² kg
quantity:
  value: 1.99e+32
  unit: kg
  measure: 恒星质量（演化模型反推，约 100 太阳质量）；由光度、有效温度与质量损失历史拟合得到，只能给量级，相对不确定度约 30%
  approximate: true
grade: C
mass:
  type: stellar
  includesDarkMatter: false
  method: evolutionary models
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.betelgeuse
  - mass.cygnus-x1
  - mass.sun
  - space.supergiant-star
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
tags:
  - 质量
  - 恒星
  - 高光度蓝变星
  - 船底座
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 恒星质量（演化模型反推，约 100 太阳质量）；由光度、有效温度与质量损失历史拟合得到，只能给量级，相对不确定度约 30%
  precision: C 级；近似值/均值。
  massType: 恒星质量
  includesDarkMatter: 否
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 1.99×10³² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 32.299
  position: 77.74
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
titleEn: Eta Carinae
---
## 这个读数是什么

船底座 η 是位于船底座星云中的高光度蓝变星，距离约 7500 光年。十九世纪它经历过一次剧烈爆发，抛出的物质形成今日的哑铃状星云。[1] 它的主星质量约 1.99×10³² kg，按模型约为 100 太阳质量，是银河系中质量最大的恒星之一。

## 口径与不确定度

口径为恒星质量，包含主星的全部物质，不包含暗物质。[2] 它所在的是双星系统，伴星质量与轨道仍未完全确定，主星质量只能由演化模型反推，相对不确定度约 30%，定为 C 级。对这类对象只能给量级，写成 100 太阳质量是为了便于比较，不是精确读数。这是大质量恒星质量测定的通病。

## 怎么测出来的

模型法从可观测量出发：光度由距离与消光改正后得到，有效温度由光谱拟合得到，二者把恒星放到演化轨迹上，再结合表面重力与质量损失历史挑选匹配的初始质量。[2] 星云中抛出的物质总量又提供了一个独立但粗糙的下限。[3] 由于它接近爱丁顿极限，辐射压让外层不稳定，模型之间的分歧很难消除。这也是为什么不同论文给出的质量能差出一倍。

## 量级位置

1.99×10³² kg 位于 B13 带的顶端，约为太阳的一百倍。[1] 这类恒星寿命只有几百万年，强烈的星风每年抛掉大量物质，最终可能以极超新星结束，留下黑洞。它抛出的物质已在星云里凝结成尘埃，成为红外天文的重要目标。

## 怎么继续走

想看稍轻一些的红超巨星，去 mass.betelgeuse；想看它可能留下的黑洞，去 mass.cygnus-x1；想看太阳作为对照，去 mass.sun；想看大质量恒星在空间轴上的图景，去 space.supergiant-star。把参宿四与它并列，可以看出大质量恒星的质量不确定性有多宽。
