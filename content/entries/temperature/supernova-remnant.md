---
id: temperature.supernova-remnant
title: 超新星遗迹
titleEn: Supernova remnant shock temperature
dimension: temperature
category: 极高温
summary: >-
  超新星遗迹是爆炸抛射物与周围介质相互作用形成的膨胀气壳。激波把气体加热到 约 10⁶ K 量级并发出 X 射线；年轻遗迹可更热，达到约 10⁷ K。
  这是后激波气体的温度，不是爆发瞬间的光球温度。
quantity:
  value: 1000000
  unit: K
  measure: 超新星遗迹后激波气体温度
  approximate: true
  measureLabel: 激波气体温度
  range:
    min: 1000000
    max: 10000000
    unit: K
displayValue: 约 10⁶ K（约 10⁶ °C，量级）
related:
  - temperature.supernova
  - temperature.neutron-star-surface
  - temperature.magnetar-surface
  - temperature.interstellar-medium
  - temperature.hypernova
  - temperature.supernova-shock-breakout
reviewStatus: reviewed
sources:
  - title: Supernova remnant
    url: 'https://www.britannica.com/science/supernova-remnant'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: >-
      N132D: NASA Space Observatories Glimpse Faint Afterglow of Nearby Stellar
      Explosion
    url: 'https://chandra.si.edu/photo/2005/n132d/index.html'
    publisher: NASA Chandra X-ray Observatory
    accessed: '2026-11-06'
conditions: >-
  对象为超新星遗迹中由激波加热的星际气体或抛射气体；10⁶ K 指后激波气体的 X 射线拟合温度，
  不是遗迹中所有物质的统一温度，也不是超新星爆发瞬间的光球温度。年轻遗迹可到约 10⁷ K， 老遗迹会逐渐冷却。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 Britannica：遗迹激波把星际气体加热到数百万开尔文，并以 X 射线辐射冷却。
    - '核对 Chandra N132D：激波加热气体约 1,000 万摄氏度，即约 10⁷ K。'
    - 取 10⁶ K 作为遗迹激波气体的量级锚点，range 写 10⁶–10⁷ K，区分年轻与较老遗迹。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 激波温度取决于激波速度、周围介质密度和遗迹年龄，X 射线拟合还受非平衡电离与电子—离子平衡影响； 10⁶ K 是量级参考，不能替代逐遗迹的谱线拟合。
visual:
  template: stellar-event
  scene: temperature.object
  caption: 超新星遗迹的激波壳层示意
  note: 以膨胀壳层和激波前沿示意遗迹结构，不对应具体天体；画面非按比例， 颜色、丝状结构和亮度均为解释性示意。
zone: 极高温
tags:
  - 极高温
  - 温度
  - 日常
---
## 爆炸之后留下的膨胀气壳

超新星遗迹是大质量恒星爆炸后抛出的物质与周围星际介质相互作用形成的膨胀结构。[1] 爆炸把大量能量注入气体，激波扫过之处密度和温度骤升，随后气壳逐渐冷却、减速并融入星际介质。

## X 射线怎样读出激波温度

后激波气体热到能发出软 X 射线，卫星用谱线拟合得到电子温度和电离状态。[1] 年轻遗迹的激波速度快，后激波温度高；较老遗迹速度下降，辐射也会减弱。射电波段的同步辐射则主要追踪相对论电子，不能直接当作热气体温度计。

## 百万到千万开尔文的量级

遗迹激波加热的气体通常在数百万开尔文量级，本条取约 10⁶ K 作为锚点。[1] 年轻遗迹可以更热：Chandra 观测的 N132D 中，激波把气体加热到约 1,000 万摄氏度，即约 10⁷ K。[2] 因此 range 写为约 10⁶–10⁷ K，以容纳不同年龄和环境的遗迹。

## 不是整团遗迹同温

遗迹里有向前推进的激波、被扫过的壳层、反向激波和内部抛射物，各自的温度与电离状态不同。[1] X 射线图像看到的是这些成分的叠加。把某个亮环的温度当成整个遗迹的温度，会忽略内部结构和投影效应。

## 与其他极端温区比较

10⁶ K 高于电离氢区的约 10⁴ K，也远高于分子云的约 10 K；年轻遗迹的 10⁷ K 则接近太阳耀斑等离子体的温区。[2] 但超新星遗迹的热来自爆炸动能，而不是恒星稳定燃烧，这一点把它与行星状星云和普通电离氢区区分开。
