---
id: temperature.fridge
title: 冰箱冷藏室
titleEn: Refrigerator set temperature
dimension: temperature
category: 低温
summary: >-
  家用冰箱冷藏室的安全目标温度是 40 °F（4 ℃）或以下，本条取 4 ℃（277 K）。
  这是储存设定或目标空气温度，不是冰箱内每个食物包装内部的实测温度。
quantity:
  value: 277
  unit: K
  measure: 冷藏室设定温度
  approximate: true
displayValue: 约 4 ℃（277 K）
related:
  - temperature.freezer
  - temperature.water-freezing
  - temperature.room-temperature
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: Refrigeration & Food Safety
    url: >-
      https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/refrigeration
    publisher: USDA Food Safety and Inspection Service
    accessed: '2026-11-06'
  - title: Cold Food Storage Chart
    url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts'
    publisher: FoodSafety.gov (USDA/FDA/HHS)
    accessed: '2026-11-06'
conditions:
  medium: 冰箱冷藏室空气
  measurementSite: 冷藏室中部，避开出风口与门架
  duration: 稳定运行时的目标温度
  basis: 设定值与温度计实测
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      USDA FSIS 的冷藏资料建议冰箱保持在 40 °F 或以下，并建议放置专用温度计监测；40 °F 约等于 4.4 ℃，正文取 4 ℃（277
      K）作为圆整目标值。
    - FoodSafety.gov 的冷藏储存表以 40 °F（4 ℃）或以下为冷藏条件，正文据此统一口径。
    - 设定温度与实际空气温度、食物中心温度不同；正文分别说明，并指出开关门、装载量与出风口会造成偏差。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  4 ℃ 是冷藏安全目标的圆整值；实际冰箱可能在 3–5 ℃ 间波动，门架、出风口与装载量会造成分层。
  冷藏只能减缓微生物生长，不能依赖低温杀菌；食物中心温度达到目标值需要时间。
visual:
  template: kitchen
  scene: temperature.object
  caption: 冰箱冷藏室温度
  note: 画面为冰箱冷藏室的示意表达，非按比例、非观测重建；搁架、冷光与食物摆放均为解释性示意， 不代表真实冰箱结构或具体测温位置。
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

冰箱冷藏室温度通常指家用冰箱冷藏区的设定或目标空气温度。美国农业部与 FoodSafety.gov 建议冷藏室保持在 40 °F（4 ℃）或以下；本条取 4 ℃（277 K）。[1][2] 这是储存安全目标，不是冰箱内每个搁架、每个食物包装内部的实测温度。它也不等同于冷冻室的 −18 ℃。

## 怎样知道

冰箱温度可用内置温度计或独立冰箱温度计测量；USDA 建议没有内置温度计的冰箱放置专用温度计，并定期查看。[1] 测量时应把温度计放在冷藏室中部、避开出风口和门架，待读数稳定后再记录。FoodSafety.gov 的冷藏储存表同样以 40 °F（4 ℃）或以下作为冷藏条件。[2] 开关门、放入热食和装载量都会让温度短时上升，因此单次读数需要结合使用习惯解释。

## 数值与口径

277 K 等于 3.85 ℃，约 4 ℃。40 °F 严格换算为 4.4 ℃，所以“4 ℃”是方便记忆的圆整目标值；实际设定可略高或略低。[1][2] 冷藏室的空气温度存在分层：靠近出风口更冷，门架更暖。食物中心温度达到 4 ℃需要时间，不能把空气读数直接当成食物温度。安全储存还取决于时间，而不只是温度；冷藏超过建议期限仍可能变质。

## 常见误解

第一，把设定温度当成实测温度；门开、装载过多或结霜都会使实际温度偏离。第二，认为 4 ℃ 能杀死细菌；冷藏只是减缓生长，李斯特菌等仍可在低温下繁殖。第三，把冷藏室与冷冻室混为一谈；两者目标温度和储存期限不同。第四，忽略食物摆放；把易腐食物放在门架或出风口附近会加大温度波动。

## 与其他温度的关系

4 ℃ 低于 room-temperature，也低于 human-body-temperature；它高于 freezer 的 −18 ℃，比 water-freezing 的 0 ℃ 高约 4 ℃。与 permafrost 的约 −10 ℃ 相比，冷藏室仍属“低温但不结冰”的区间。这个温度处在食品安全“危险区”的下边界附近，因此设定值和实测值都需要留有余量，不能把 4 ℃ 当作可以无限期保存的保证。
