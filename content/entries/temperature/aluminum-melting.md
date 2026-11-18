---
id: temperature.aluminum-melting
title: 铝熔点
titleEn: Aluminium melting reference
dimension: temperature
category: 中温
summary: >-
  高纯铝的凝固点是国际实用温标 ITS-90 的固定点，赋值为 933.473 K，约 660.323
  °C。它适合说明纯金属的相变参考，不是所有铝合金的统一熔化温度。
quantity:
  value: 933.473
  unit: K
  measure: 纯铝凝固固定点（ITS-90）
  approximate: true
  measureLabel: 纯铝凝固固定点（ITS-90）
displayValue: 933.473 K（660.323 °C，ITS-90）
related:
  - temperature.copper-melting-point
  - temperature.magnesium-melting
  - temperature.iron-melting
  - temperature.silicon-melting
  - temperature.glass_melting
  - time.industrial-revolution
reviewStatus: reviewed
sources:
  - title: 'Kelvin: ITS-90'
    url: 'https://www.nist.gov/si-redefinition/kelvin/kelvin-its-90'
    publisher: NIST
    accessed: '2026-11-06'
  - title: The Kelvin and Temperature Measurements
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4865289/'
    publisher: NIST Journal of Research
    accessed: '2026-11-06'
  - title: 'Aluminium: element data'
    url: 'https://periodic-table.rsc.org/element/13/aluminium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-06'
legacy:
  id: aluminum-melting
  icon: "\U0001F529"
  relatedLabels: 冶金、电解法、航空材料、地壳元素、热力学、铁熔点、钨熔点、汞的沸点、工业革命
conditions: 高纯铝在 1 atm 下的凝固固定点，ITS-90 赋值 933.473 K；样品纯度、坩埚与测温实现会引入不确定度，铝合金另有固相线与液相线。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NIST 的 ITS-90 说明列出铝凝固点 933.473 K；NIST 温标论文的固定点表给出同一赋值，RSC 元素表列出 660.323
      °C。
    - 三个页面都区分纯元素与工业材料，正文据此写明合金不适用单一固定点。
    - 正文按五节结构重写，补充凝固平台、固液共存区与“熔点不等于使用温度上限”的说明。
  originalQuantity:
    value: 933
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 933.473 K 是 ITS-90 的温标赋值，按定义给出；实际固定点容器的纯度、坩埚反应和温度计位置会带来不确定度，商业纯铝与铝合金不能套用这一位小数。
visual:
  template: metal-furnace
  profile: metal
  caption: 铝固定点试样炉
  note: >-
    高纯铝凝固固定点的计量示意；炉体、坩埚与试样大小均为概念布局，非按比例绘制，也不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: heat-flow
  color: '#ffbb77'
  symbol: Al
  sampleColor: '#c8cfd5'
  scene: temperature.object
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

纯铝在 1 atm 下于 933.473 K 熔化，换算为 660.323 °C。[1][2] 这是高纯铝固相与液相平衡的温度，也是国际实用温标 ITS-90 的固定点之一；它描述的是纯元素，不是铝箔、铝锅或某一牌号铝合金的统一熔化温度。[2][3] 工业铝合金往往在更宽的温度区间内出现固相线、液相线和部分熔化，不能用一个点概括。

## 怎样测到

ITS-90 的铝固定点用受控凝固过程实现：把高纯铝装入石墨坩埚，在惰性气氛中完全熔化后缓慢降温，记录它在凝固平台上持续的温度。标准铂电阻温度计插入固定点容器，等温度均匀后读数。[1][2] NIST 的温标说明把铝凝固点列为 933.473 K，NIST 的温标论文给出同一赋值；RSC 的元素表也列出 660.323 °C，用于日常核对。[1][2][3] 固定点容器的纯度、坩埚材料和测温位置都会引入不确定度。

## 数值与口径

933.473 K − 273.15 K = 660.323 °C，反过来 660.323 °C + 273.15 = 933.473 K。这个换算精确到毫开，但不代表每个铝样品的熔点都精确到 0.001 K。温标赋值是按定义固定的参考值，实物实现仍有不确定度；商业纯铝中的铁、硅等杂质会使熔点略降，合金则可能跨越数十 K 的熔化区间。[2][3] 比较材料时，应同时记录纯度、状态和压力。

## 常见误解

铝箔能在烤箱里使用，并不意味着它要到 660 °C 才“开始变软”；薄箔的机械强度、氧化膜和局部热流才是关键。把“熔点”当成材料的最高使用温度也不准确：在远低于熔点的温度下，铝就会明显软化、蠕变。另一个误解是把铝合金的熔化区间与纯铝固定点混为一谈；不同牌号的固相线可以相差很多。最后，熔点不是“加热到这一刻瞬间全部变成液体”的开关，熔化需要持续供热并跨越固液共存区。[2][3]

## 与其他温区的关系

933.473 K 比镁的约 923 K 高约 10 K，比银的 1234.93 K 低约 301 K，也比铜的 1357.77 K 低约 424 K。[1][3] 它远高于钠的 370.944 K，却低于铁的约 1811 K。把铝放在这条温标上，可以看作“轻金属熔化”与“高温合金”之间的门槛：普通炉具、烘焙和热水都达不到它，而金属熔炼、焊接和铸造则围绕它展开。
