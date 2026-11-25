---
id: temperature.cement-kiln
title: 水泥窑
titleEn: Cement rotary kiln burning zone
dimension: temperature
category: 高温
summary: '水泥回转窑烧成带的物料温度通常取约 1,450 ℃（1,723 K）。这是移动料床的局部温度， 不是窑头火焰温度、预热器出口温度或熟料冷却后的温度。'
quantity:
  value: 1723
  unit: K
  measure: 水泥回转窑烧成带物料温度
  approximate: true
  measureLabel: 水泥回转窑烧成带物料温度
displayValue: '约 1,723 K（1,450 °C）'
related:
  - temperature.blast-furnace
  - temperature.steelmaking_temp
  - temperature.quartz-melting
  - temperature.glass_melting
  - temperature.lava-temperature
  - space.volcano
reviewStatus: reviewed
sources:
  - title: >-
      Review: Circulation of inorganic elements in combustion of alternative
      fuels in cement plants
    url: >-
      https://orbit.dtu.dk/files/128841320/Review_Circulation_of_inorganic_elements_postprint.pdf
    publisher: Technical University of Denmark (DTU)
    accessed: '2026-11-06'
  - title: How cement is made
    url: 'https://www.cement.org/cement-concrete/how-cement-is-made'
    publisher: Portland Cement Association
    accessed: '2026-11-06'
  - title: 'Clinkering: clinker formation, temperatures and process stages'
    url: 'https://www.cementequipment.org/home/clinkering/'
    publisher: Cement Equipment Corp.
    accessed: '2026-11-06'
conditions: >-
  现代干法回转窑的烧成带（物料热端）、石灰石—黏土配制的生料、部分熔融形成熟料； 测点指料床物料温度。窑型、燃料、生料配比和产量会使烧成带温度上下移动约
  50–100 K。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 DTU 综述：回转窑烧成带物料温度最高约 1,450 ℃，用于熟料矿物形成。'
    - >-
      核对 Portland Cement Association：窑内火焰使物料达到约 2,700 ℉（约 1,482
      ℃），说明火焰与物料温度接近但口径不同。
    - '核对 Cement Equipment Corp. 的 clinkering 资料：熟料温度约 1,350–1,450 ℃，烧成带为部分熔融区。'
    - '正文取 1,450 ℃ 的圆整值 1,723 K，并在正文区分物料温度、火焰温度和烟气温度。'
uncertainty: >-
  烧成带物料温度常见约 1,350–1,450 ℃（约 1,623–1,723 K）；不同窑型和燃料会改变上下限。
  窑内无法直接均匀布点，工业读数多为间接推断，单个测点不能代表整条窑的温度分布。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: metal-furnace
  profile: kiln
  caption: 水泥回转窑烧成带示意
  note: 画面为回转窑与高温料床的示意表达，炉体比例、火焰形状和颜色均经艺术处理， 不能据颜色判断精确温度；非按比例，非观测重建；各对象分别调整显示大小。
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

水泥窑是把石灰石、黏土等生料煅烧成水泥熟料的回转窑。这里讨论的是烧成带（物料温度最高的区段）的物料温度，常取约 1,450 ℃，即 1,723 K。[1] 它不是窑头火焰温度，也不是预热器出口或熟料冷却后的温度。生料在窑内先后经历干燥、预热、分解、烧成和冷却，烧成带只是其中温度最高的一段。[2]

## 怎样测到

回转窑内部难以直接插入热电偶，工业上多用窑壳测温、烟气成分、熟料岩相和红外测温来间接判断烧成带状态。[1] 丹麦技术大学的综述把烧成带物料温度写为最高约 1,450 ℃；美国波特兰水泥协会则用“约 2,700 ℉”描述窑内高温，约合 1,482 ℃。[1][2]

## 数值与口径

1,450 ℃ 换算为 1,723 K。[1] 物料在烧成带只停留数分钟到十几分钟，温度是移动料床的局部值，不是整窑平均温度。窑头火焰可超过 1,800 ℃，但火焰是燃气与空气的反应区，不能与物料温度混用。[2][3] 不同窑型、燃料和生料配比会把烧成带温度上下拉动约 50–100 K。[3]

## 常见误解

第一，把“窑温”当成一个均匀数字；窑内从预热带到冷却带存在数百开尔文的梯度。第二，把火焰温度当成物料温度；火焰辐射加热物料，但物料升温滞后。第三，把水泥窑温度与水泥使用温度混淆；水泥水化放热远低于煅烧温度。[1][2]

## 与其他温区的关系

1,723 K 低于石英熔化的约 1,986 K，高于玄武岩熔化的约 1,473 K，与高炉铁水的约 1,773 K 接近。它处在硅酸盐部分熔融的区间，足以让熟料矿物形成，但低于钨的熔点 3,695 K。[1][3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1723 K，即 1450 ℃（按 T/K−273.15 换算）；约为太阳表面（5772 K）的 0.299 倍。这把尺子只改写单位，不改变量值；它把本条固定在温度轴的 10³ 量级附近。

读图时先看量级，再看倍数：10³ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
