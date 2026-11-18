---
id: temperature.type-ia-supernova
title: Ia 型超新星（温度需指定模型）
titleEn: Type Ia supernova temperature requires a model and region
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  Ia 型超新星的热核爆发研究把白矮星结构、核燃烧与抛射物联系起来。三维模拟能跟踪区域随时间的演变，
  光谱与光变又检验模型；燃烧区温度、光球辐射和模型阈值不能互相替代。
quantity:
  value: null
  unit: K
  measure: 未选定Ia型模型中区域和时刻的温度
  measureLabel: 未选定Ia型模型中区域和时刻的温度
  approximate: true
  status: undetermined
displayValue: 需指定爆发模型与区域（仅阅读）
related:
  - temperature.white-dwarf-surface
  - temperature.carbon-fusion
  - temperature.supernova
  - temperature.nova-outburst
  - temperature.type-ia-deflagration-temperature
reviewStatus: reviewed
sources:
  - title: >-
      Three-dimensional delayed-detonation models with nucleosynthesis for Type
      Ia supernovae
    url: 'https://arxiv.org/abs/1211.3015'
    publisher: 'Seitenzahl et al., MNRAS (2013)'
    accessed: '2026-11-06'
  - title: Type Ia supernova
    url: 'https://www.britannica.com/science/Type-Ia-supernova'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Supernovas & Supernova Remnants
    url: 'https://chandra.harvard.edu/xray_sources/supernovas.html'
    publisher: NASA Chandra X-ray Center
    accessed: '2026-11-06'
legacy:
  id: type-ia-supernova
  icon: "\U0001F4A3"
  relatedLabels: 标准烛光、暗能量、宇宙加速膨胀、钱德拉塞卡极限、碳爆燃、白矮星表面、新星爆发、铁峰元素、宇宙学、超新星爆发
conditions: >-
  本条不选定 Ia 型模型、爆发区域和时刻，故不设温度数值；引用三维延迟爆轰模型说明区域与模型依赖；
  燃烧区处于非热平衡的快速膨胀中，光谱与光变只间接约束温度和密度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      Seitenzahl 等给出 14 组三维延迟爆轰模型，初始白矮星中心密度 2.9×10⁹ g/cm³，产生 0.32–1.11 太阳质量
      ⁵⁶Ni。
    - Britannica 与 Chandra 说明 Ia 型来自白矮星热核爆炸，但均未给出可适用于全部事件的单一温度；维持 null。
    - 2026-11-07 保留 needs-review：Ia 型超新星温度随模型、区域与爆发时刻变化，无统一代表值。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：燃烧前沿、未燃核心、抛射物光球与激波区温度不同，且随模型与时刻变化。'
  originalQuantity:
    value: 5000000000
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: null
      unit: K
      measure: 未指定Ia模型区域和时刻的温度
      approximate: true
      measureLabel: 未指定Ia模型区域和时刻的温度
      status: undetermined
    decision: needs-review
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  Ia 型没有单一温度：燃烧前沿、未燃核心、抛射物光球和激波区各有不同温度，且随模型与时刻变化。
  三维模拟中的温度还依赖点火结构、中心密度、湍流模型和核反应网络，不能压缩成一个类别常数。
visual:
  template: stellar-event
  profile: supernova
  caption: Ia 型超新星延迟爆轰模型
  note: >-
    燃烧前沿、抛射物与光球的颜色均为模型示意，不是按温度着色的实测图像；画面非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: extreme
  color: '#f0c48a'
  symbol: Type Ia supernova
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

Ia 型超新星是白矮星在双星系统中吸积物质、接近钱德拉塞卡极限后发生的热核爆炸。爆炸把白矮星几乎完全瓦解，抛射物迅速膨胀并发出强光，因此常被用作宇宙距离的“标准烛光”。[2] 但“标准烛光”说的是光度经验关系，不等于每个事件都有同一个温度。这里讨论的对象是白矮星内部的核燃烧区、抛射物光球和激波区，它们在同一场爆发中温度并不相同。

## 怎样测到或为何是推断

远方 Ia 型超新星无法分辨内部结构，证据主要来自光谱、光变曲线和抛射物中的元素丰度。研究者用三维流体模拟重现爆燃转爆轰过程，再计算核合成产物并与观测比较。Seitenzahl 等的 14 组模型改变点火结构和初始中心密度，得到 0.32–1.11 太阳质量的 ⁵⁶Ni，并显示铁族元素出现在中等速度壳层。[1] 这些结果约束了温度、密度和反应历史，但温度本身仍来自模型，不是直接测到的燃烧前沿读数。[3]

## 数值与口径

这里不选定模型、区域和时刻，因此不给单一温度。白矮星内部的爆燃区可以很热，抛射物光球却会迅速冷却；同一事件在不同时刻、不同半径也没有统一温度。模型中的初始中心密度、点火核数量、湍流转变概率和核反应网络都会改变结果。把某个反应阈值、某个光球色温度或某组模拟的峰值直接当成“Ia 型温度”，都会丢掉对象与口径。[1][2]

## 常见误解

第一，把模型中的反应阈值当成事件实测峰温；阈值说明燃烧能否进行，不等于爆发时某处的真实温度。第二，把光球的颜色温度当成内部燃烧温度；光球只代表光学厚面附近的辐射。第三，把所有 Ia 型都当成同一种前身星和同一光度；Ia 型本身仍有子类型与观测分散。[2] 第四，把 Ia 型与核心坍缩超新星混同；前者是白矮星热核爆炸，后者是大质量恒星核心坍缩。[3]

## 与其他温区的关系

Ia 型与白矮星表面、碳聚变和核心坍缩超新星相连。白矮星表面温度可以只有约 25,000 K，而内部燃烧区远高于此；核心坍缩超新星的坍缩核心可达 10¹¹ K 量级，但那是另一种能源机制。Ia 型的光球温度通常远低于其内部燃烧温度，因此把不同层次的数值放在一起比较时，必须先确认说的是燃烧前沿、光球还是整个抛射物。[1][3]
