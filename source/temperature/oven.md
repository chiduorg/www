---
id: temperature.oven
title: 烤箱设定
titleEn: Oven set air temperature
dimension: temperature
category: 中温
summary: 家用烤箱常见的烘焙设定是 180 ℃（350 °F），即 453 K 的圆整目标值。 它指腔内空气设定温度，不是食物中心温度，也不是烤箱每一处的实测温度。
quantity:
  value: 453
  unit: K
  measure: 烤箱空气设定温度
  approximate: true
displayValue: 约 180 ℃（453 K）
related:
  - temperature.fridge
  - temperature.sauna
  - temperature.boiling-water
  - temperature.desert-ground
  - space.earth
  - time.industrial-revolution
reviewStatus: reviewed
sources:
  - title: 'Metric Kitchen: Culinary Temperature'
    url: 'https://www.nist.gov/pml/owm/metric-kitchen-culinary-temperature'
    publisher: National Institute of Standards and Technology (NIST)
    accessed: '2026-11-06'
  - title: >-
      The effect of deep frying or conventional oven cooking on inactivation of
      Shiga toxin-producing cells of Escherichia coli (STEC) in meatballs
    url: >-
      https://www.ars.usda.gov/research/publications/publication/?seqNo115=320335
    publisher: USDA Agricultural Research Service
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 烤箱腔内空气
  measurementSite: 烤箱中部，避开加热元件与门边
  duration: 预热稳定后的设定值
  basis: 控温器设定与温度计实测
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - >-
      NIST 的烹饪温度表把 180–190 ℃（350–375 °F）归为 moderate，并列出蛋糕、饼干、香蕉面包等常用 180 ℃；正文取
      180 ℃（453 K）。
    - USDA ARS 的研究在 176.7 ℃（350 °F）的对流烤箱中烘烤肉丸，说明 350 °F 是常见的实际烹饪设定；正文用它对照摄氏圆整值。
    - 设定温度不等于腔内实测温度，也不等于食物中心温度；正文分别说明预热、开门、搁架位置与热风循环的影响。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  180 ℃ 是食谱常用设定的圆整值；180–190 ℃ 都可被归为中等烤箱温度，老旧烤箱的实际温度可能偏差十几摄氏度。
  食物中心温度需单独用探针测量，不能由烤箱设定值推断。
visual:
  template: kitchen
  scene: temperature.object
  caption: 烤箱设定温度
  note: 画面为烤箱设定温度的示意表达，非按比例、非观测重建；加热管、烤盘与暖色均为解释性示意， 不代表真实烤箱结构或具体测温位置。
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

烤箱设定温度是用户在选择烘焙或烘烤模式时设定的目标空气温度。180 ℃（350 °F）是食谱中最常见的“中等”设定之一；NIST 把 180–190 ℃（350–375 °F）归为 moderate，并列出蛋糕、饼干、香蕉面包等常用 180 ℃。[1] 本条取 180 ℃（453 K）。它描述的是腔内空气的控制目标，不是食物中心温度。

## 怎样知道

烤箱温控器根据腔体内温度传感器通断加热元件，但显示温度是设定值或控制目标，不等于腔内每一点的实测温度。NIST 的烹饪温度表是近似换算，明确提示温度可能变化、应遵循食谱。[1] USDA 的研究在 176.7 ℃（350 °F）的对流烤箱中烘烤肉丸，说明 350 °F 是常见的实际烹饪设定。[2] 用烤箱温度计可检查实际空气温度，探针温度计则用于食物中心。

## 数值与口径

453 K 等于 179.85 ℃，约 180 ℃。设定 180 ℃不等于腔内瞬间达到 180 ℃：预热需要时间，开门的瞬间会掉温，搁架位置和热风循环造成热点与冷点。[1] 食物内部温度又是另一个量，必须用探针测量，不能把烤箱空气温度当作食物中心温度。烘焙食谱中的 180 ℃通常是空气温度，不是烤盘表面温度，也不是烤箱外壳温度。

## 常见误解

第一，把设定温度当成实测温度；老旧烤箱可能偏差十几摄氏度。第二，把烤箱温度当成食物内部温度；两者目标完全不同。第三，认为所有食谱的 180 ℃都精确等价；不同烤箱、模式和装载量会改变结果。第四，把华氏 350 °F与摄氏 180 ℃当成严格相等；换算约为 176.7 ℃，食谱通常圆整到 180 ℃。

## 与其他温度的关系

180 ℃ 高于 boiling-water 的 100 ℃，也高于 sauna 的约 80 ℃，但低于 lava-temperature 与 metal-furnace 类工业温区。它高于 fridge 的 4 ℃ 和 freezer 的 −18 ℃，说明同一个厨房里存在从冷冻到烘烤的宽温区。把 oven 的设定值与 desert-ground 的地表温度并列时，也要记住一个是设备空气目标，一个是自然表面实测。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]


## 深读一：量值口径

本条的核心量值是 453 K，量的是烤箱空气设定温度。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：medium=烤箱腔内空气；measurementSite=烤箱中部，避开加热元件与门边；duration=预热稳定后的设定值；basis=控温器设定与温度计实测。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照冰箱冷藏室（277）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]

## 补充：怎样复核这条读数

复核时先把 453 K 还原到条目写明的参照与条件，再做单位换算；与相邻条目比较时，只比较同一口径下的量值，不把标题里的四舍五入值当成新测量。若换算后落在两个已知锚点之间，应同时报告两个锚点与所用倍率，方便读者复算。[1][2] 本条不新增独立测量，也不改变原有来源与引用编号。
