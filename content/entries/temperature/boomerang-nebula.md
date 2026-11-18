---
id: temperature.boomerang-nebula
title: 回力棒星云
titleEn: Boomerang Nebula ultracold outflow
dimension: temperature
category: 极低温
summary: >-
  回力棒星云的快速外流包含极冷分子气体。ALMA 2017 年的研究说明其温度低于约 0.5 K；数轴用 0.5 K
  作为上界锚点，而非把整片星云都设成同一精确温度。
quantity:
  value: 0.5
  unit: K
  measure: 星云超冷外流温度量级上界参考
  approximate: true
  measureLabel: 星云超冷外流温度量级上界参考
  bound: upper
displayValue: 低于约 0.5 K（外流研究）
related:
  - temperature.cmb
  - temperature.absolute-zero
  - temperature.bose-einstein
  - temperature.coldest-brown-dwarf
reviewStatus: reviewed
sources:
  - title: ALMA Returns to Boomerang Nebula
    url: >-
      https://www.almaobservatory.org/en/press-releases/alma-returns-to-boomerang-nebula/
    publisher: ALMA Observatory (2017)
    accessed: '2026-11-06'
  - title: ALMA Reveals Ghostly Shape of Coldest Place in the Universe
    url: >-
      https://www.almaobservatory.org/en/press-releases/alma-reveals-ghostly-shape-of-coldest-place-in-the-universe/
    publisher: ALMA Observatory (2013)
    accessed: '2026-11-06'
legacy:
  id: boomerang-nebula
  icon: "\U0001F300"
  relatedLabels: 行星状星云、绝热膨胀、原行星状星云、恒星演化、宇宙微波背景辐射、哈勃空间望远镜、亚毫米波天文学、星际介质、双极外流
conditions: 半人马座方向、约 5000 光年外的原行星状星云中一氧化碳分子外流的气体动理学温度上界；外流快速绝热膨胀，非整片星云、中心恒星或尘埃盘的热平衡温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      ALMA 2017 新闻稿明确外流温度低于半开尔文，并给出膨胀速度约 164 km/s、背景 2.725 K；2013 新闻稿给出早期约 1 K
      的口径与吸收微波背景的测法。
    - 正文按五节结构重写；保留 0.5 K 上界与显示值，补充有效温度、非热平衡与区域口径。
  originalQuantity:
    value: 1
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  0.5 K
  是外流冷气体的上界而非中心值，由一氧化碳对宇宙微波背景的吸收深度、膨胀速度和辐射转移模型反演；不同视线区域温度不同，论文未把它作为单一精确测量值。
visual:
  template: nebula
  profile: bipolar
  caption: 回力棒星云的冷外流
  note: >-
    低于 0.5 K 指冷分子外流条件，不是整片星云统一温度；双极结构与颜色为解释性示意，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#9bbfda'
  symbol: Bipolar outflow
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

回力棒星云位于半人马座方向，距地球约 5000 光年，是一颗老年红巨星抛射外层物质形成的原行星状星云。[1] ALMA 观测显示，它有一个高速膨胀的分子外流，外流中的一氧化碳气体吸收宇宙微波背景，因而呈现极低的气体温度。[1][2]

## 怎样测到或为何是有效温度

研究者用 ALMA 观测一氧化碳谱线，比较外流气体对背后微波背景的吸收深度，再结合膨胀速度和几何模型反演气体温度。2013 年的介绍给出约 1 K；2017 年的后续分析把最冷区域限定在低于约 0.5 K。[1][2] 这不是把温度计插入星云，而是由辐射转移得到的有效温度；不同视线深度和速度分量可以有不同温度。

## 数值与口径

0.5 K 等于 −272.65 °C，是外流冷气体的上界锚点，不是整片星云的均温。[1] 中心恒星、尘埃盘和较外层气体都更暖；外流边缘甚至已开始被星光加热，略高于微波背景。[2] “低于”二字必须保留，0.5 K 不能当作精确测量值。

## 常见误解

第一，把“宇宙最冷”理解成星云中每个原子都停在 0.5 K；实际上只有快速膨胀的特定气体达到这个量级。第二，认为低于 2.725 K 的微波背景违反热力学；外流通过绝热膨胀把内能转成动能，气体可以暂时冷于辐射背景，但它并非与背景处于热平衡。第三，把 2017 年的上界当成永久纪录；实验室冷原子远低于此。

## 与其他温区的关系

它比 2.725 K 的宇宙微波背景更低，是少数“冷于背景”的天体气体；但与实验室的 170 nK 玻色—爱因斯坦凝聚、421 μK 核退磁电子温度相比仍高出几个量级。[1] 这也说明天体“有效温度”和实验室“热平衡温度”不是同一把尺子。
