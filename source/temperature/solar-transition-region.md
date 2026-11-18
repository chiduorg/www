---
id: temperature.solar-transition-region
title: 太阳过渡区
titleEn: Solar transition region schematic range
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  太阳过渡区连接较冷的色球与更热的日冕。NASA 的分层示意把温度从约 8,000 K 快速升到约 500,000 K； 本条目保留这一范围，并在数轴上取上端
  500,000 K。它不是整层平均温度， 也不定义所有太阳大气模型的严格层界。
quantity:
  value: 500000
  unit: K
  measure: 所引太阳过渡区示意温区上端参考
  approximate: true
  measureLabel: 所引太阳过渡区示意温区上端参考
  uncertainty: 250000
  uncertaintyType: 示意区间半宽
  range:
    min: 8000
    max: 500000
    unit: K
displayValue: '约 8,000–500,000 K（轴取上端）'
related:
  - temperature.solar-chromosphere
  - temperature.solar-corona
  - temperature.sun-surface
  - temperature.sunspot
reviewStatus: reviewed
sources:
  - title: Layers of the Sun
    url: 'https://www.nasa.gov/image-article/layers-of-sun/'
    publisher: NASA
    accessed: '2026-11-06'
  - title: 'Sun: Facts'
    url: 'https://solarsystem.nasa.gov/solar-system/sun/in-depth/'
    publisher: NASA Science
    accessed: '2026-11-06'
  - title: Introduction to the Solar Interior and Atmosphere
    url: >-
      https://ntrs.nasa.gov/api/citations/20240004801/downloads/IAU388_gakkou_240331_for_submission_240417a.pdf
    publisher: 'NASA NTRS / A. Sterling, NASA MSFC'
    accessed: '2026-11-06'
legacy:
  id: solar-transition-region
  icon: "\U0001F321"
  relatedLabels: 太阳大气、日冕、色球层、太阳风、极紫外、磁重联、阿尔文波、IRIS、太阳表面、空间天气
conditions: >-
  对象为太阳色球与日冕之间的过渡区，通常厚约 100 km；温度指该薄层内等离子体从约 8,000 K 快速升至约 500,000 K 的示意范围。
  过渡区处于非局部热平衡、近似光学薄的条件，谱线诊断依赖模型；500,000 K 是所引范围的上端，不是全层平均温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 NASA Layers of the Sun：过渡区厚约 100 km，温度从约 8,000 K 急升至约 500,000 K。'
    - 核对 NASA Sun Facts：过渡区是色球向日冕快速加热的薄层，并非所有科学家都把它单列为独立区域。
    - 'NTRS 讲义把日冕与色球区分开；保留原 500,000 K 轴点与 8,000–500,000 K range，不写成均温。'
  originalQuantity:
    value: 500000
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  8,000–500,000 K 是厚约 100 km 薄层的示意范围，半宽约 25 万开尔文；实际剖面随活动区、磁场结构和模型变化，轴上的 500,000
  K 只是上端参考。
visual:
  template: stellar-atmosphere
  profile: transition
  caption: 太阳过渡区
  note: >-
    轴值选择资料示意范围的高端，非整层均温；放大的层厚不能当作太阳真实比例；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#d3ace9'
  symbol: Transition region
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

过渡区是太阳色球与日冕之间的薄层，厚度通常只有约 100 km；温度在这一薄层内从色球上端迅速升高，进入日冕。[1][2] 它不是一颗恒星的“表面”，而是大气中一个温度梯度极强的区域；这里说的温度是等离子体局地温度，不是光球有效温度。[1] 过渡区的厚度远小于太阳半径，在示意图上必须放大才能看见。

## 怎样测到

过渡区主要通过极紫外谱线观测，例如电离碳、氧、硅等离子的谱线强度与轮廓；把这些诊断量与电离平衡、非局部热平衡模型比较，反推电子温度与密度。[3] NASA 的分层示意把过渡区写成约 8,000–500,000 K，厚度约 100 km；这是一套教学用的简化剖面。[1]

## 数值与口径

这里保留 8,000–500,000 K 的示意温区，并在数轴上取上端 500,000 K，因为一维轴无法画出连续温度剖面。500,000 K 不是整层均温，也不是日冕温度；它只是所引示意范围的上端。[1][3] 真实过渡区在空间上极薄，温度梯度极大，观测还受仪器分辨率和视线积分影响；把 500,000 K 写成轴端，是为了与日冕百万开量级衔接，而非声称整层都达到该值。

## 常见误解

第一，把过渡区当成一个等温层；它的定义恰恰是温度快速变化。第二，把 500,000 K 当成整个太阳大气的平均温度；色球低得多，日冕又高得多。[1][2] 第三，认为温度梯度本身就能证明某一种加热机制；磁重联、波加热和湍流耗散都可能参与，仍需具体观测区分。[3]

## 与其他温区的关系

过渡区上端 500,000 K 高于色球的约 4,000–8,000 K，低于日冕的约 2 × 10⁶ K；它把两者连接起来，是太阳大气由“较冷”向“极热”过渡的关键薄层。与恒星内部数千万开的核燃烧温度相比，它仍低一个多数量级，但已远高于任何日常火焰。[1][2]
