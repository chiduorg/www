---
id: temperature.forest-fire
title: 森林大火
titleEn: Wildfire flame temperature
dimension: temperature
category: 高温
summary: >-
  森林大火可见火焰的代表温度约 800 ℃（1,073 K），实测火焰常在约 800–1,200 K。
  这是火焰前锋的燃烧气体温度，不是火场空气温度、地表土壤温度或整场火灾的平均温度。
quantity:
  value: 1073
  unit: K
  measure: 森林大火火焰代表性温度
  approximate: true
  measureLabel: 森林大火火焰代表性温度
displayValue: '约 1,073 K（800 °C；火焰约 800–1,200 K）'
related:
  - temperature.incinerator
  - temperature.cremation
  - temperature.paper-autoignition
  - temperature.lava-temperature
  - space.earth
  - time.carboniferous-period
reviewStatus: reviewed
sources:
  - title: 'Bushfire in Australia: understanding ''hell on Earth'''
    url: >-
      https://www.csiro.au/en/news/All/Articles/2015/December/bushfire-in-australia-understanding-hell-on-earth
    publisher: CSIRO
    accessed: '2026-11-06'
  - title: Remote measurement of energy and carbon flux from wildfires in Brazil
    url: 'https://www.fireimaging.com/reference/Riggan_Ecol_Appl_June_2004.pdf'
    publisher: Ecological Society of America / USDA Forest Service
    accessed: '2026-11-06'
  - title: "A citizen's guide to incineration"
    url: "https://19january2021snapshot.epa.gov/sites/static/files/2015-04/documents/a_citizens_guide_to_incineration.pdf"
    publisher: "U.S. Environmental Protection Agency"
    accessed: '2026-11-24'
  - title: "Problems and solutions: incineration"
    url: "https://www.epd.gov.hk/epd/english/environmentinhk/waste/prob_solutions/WFdev_IWMFtech.html"
    publisher: "Hong Kong Environmental Protection Department"
    accessed: '2026-11-24'
conditions: >-
  开放环境中的森林/灌木火焰，燃料为活体或枯死植被，火焰前锋的燃烧气体；
  测量口径为红外遥感亮温或热电偶实测。燃料含水率、风速、火焰高度和测点位置都会改变读数。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 CSIRO：反应区可接近 1,600 ℃ 绝热值，火焰底部最高约 1,100 ℃，火焰尖端约 600 ℃，说明位置决定读数。'
    - >-
      核对 Riggan 等 2004：火线前锋有时超过 1,600 K，内部活跃火线多在 900–1,200 K，90% 以上辐射能来自
      830–1,440 K。
    - '正文取 1,073 K 作为可见火焰的代表值，并明确它不是反应区峰值或火场平均温度。'
uncertainty: >-
  火焰实测约 830–1,440 K，常见 900–1,200 K；1,073 K 是便于比较的圆整代表值。
  红外遥感得到的是像素平均亮温，需经发射率校正；火焰不同高度的温度差异很大。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "combustion"
  profile: "wildfire"
  caption: "森林大火火焰温度示意"
  note: "画面为火线与树冠燃烧的示意表达，火焰颜色、烟雾和火星均经艺术处理， 不能据颜色判断精确温度；非按比例，非观测重建；各对象分别调整显示大小。"
  scene: "temperature.object"
  color: "#e0834f"
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

森林大火的“火焰温度”是火焰前锋中气体燃烧反应区的温度，不是地表土壤温度，也不是整片火场的平均温度。本条取约 800 ℃（1,073 K）作为代表性火焰温度，实测火焰常在约 800–1,200 K。火线前沿与火焰内部也不同，前沿氧气充足、燃烧更剧烈，内部常处于缺氧状态。[1][2]

## 怎样测到

火线温度用红外成像光谱仪、热电偶阵列和航空遥感测量。[2] CSIRO 说明灌木火反应区可接近 1,600 ℃ 的绝热值，但火焰因与环境空气混合，底部最高约 1,100 ℃，火焰尖端约 600 ℃。[1] Riggan 等人在巴西野火中测得火线前锋有时超过 1,600 K，而内部活跃火线多在 900–1,200 K，超过 90% 的辐射能来自 830–1,440 K。[2]

## 数值与口径

1,073 K 约合 800 ℃。[1] 这个值适合描述可见火焰的典型温度，不是最高反应区温度。火焰位置（底部、中部、尖端）、燃料含水率和风速都会改变读数；遥感得到的是像素平均亮温，需经发射率校正。测量高度通常取火焰中部，避免把地面辐射或烟雾温度混入，同一火场在不同时间也会变化。[2]

## 常见误解

第一，把火焰温度当成火场空气温度；几米外空气可能只有几十摄氏度。第二，把 1,600 K 当成所有火焰温度；那是反应区上限或前锋峰值。第三，把火焰温度与热释放率等同；后者还取决于面积和燃料消耗速率。[1][2]

## 与其他温区的关系

1,073 K 高于纸的自动点火温度约 505 K 和水的沸点 373 K，低于垃圾焚烧炉的约 1,273 K 和水泥窑的 1,723 K。它与火化炉设定温度相近，但森林大火是开放、湍流的扩散火焰，热量大量辐射到环境。[1][2]

## 火焰温度不是土壤温度

森林大火火焰可达 800–1,200 K，但地表土壤几厘米深处可能仍低得多；热量被灰烬、水分和辐射带走。[1][2] 遥感像元平均也会把火焰、烟雾和未燃地面混在一起。把火焰温度当成整片火场温度，会高估生态影响的范围。

## 五轴对照

在温度轴，火焰约 800–1,200 K；在空间轴，火线前锋与内部缺氧区不同；在质量轴，燃料负荷决定热释放；在时间轴，火势随风速与含水率变化。温度只是火行为的一个参数。[1][2]

## 火焰温度不是土壤温度

森林大火火焰可达 800–1,200 K，但地表土壤几厘米深处可能仍低得多；热量被灰烬、水分和辐射带走。遥感像元平均也会把火焰、烟雾与未燃地面混在一起。把火焰温度当成整片火场温度，会高估生态影响范围。[1][S2]

## 读数的口径与换算

本条采用的量是 约 1,073 K（800 °C；火焰约 800–1,200 K），口径是 森林大火火焰代表性温度。温度是强度量，读数依赖温标、测点与热平衡；同一对象的不同部位、不同时刻可以有不同温度。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [3]（U.S. Environmental Protection Agency）、[4]（Hong Kong Environmental Protection Department） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
