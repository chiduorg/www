---
id: temperature.freezer
title: 冷冻室
titleEn: Freezer set temperature
dimension: temperature
category: 低温
summary: >-
  家用冷冻室的安全储存目标是 0 °F（−18 ℃）或以下，本条取 −18 ℃（255 K）。
  它是长期储存的目标空气温度，不是速冻温度，也不是食物中心的瞬时温度。
quantity:
  value: 255
  unit: K
  measure: 冷冻室设定温度
  approximate: true
displayValue: 约 −18 ℃（255 K）
related:
  - temperature.fridge
  - temperature.water-freezing
  - temperature.permafrost
  - temperature.dry-ice-sublimation
  - temperature.ice-cream-freezer
reviewStatus: reviewed
sources:
  - title: Freezing and Food Safety
    url: >-
      https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/freezing-and-food-safety
    publisher: USDA Food Safety and Inspection Service
    accessed: '2026-11-06'
  - title: Cold Food Storage Chart
    url: 'https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts'
    publisher: FoodSafety.gov (USDA/FDA/HHS)
    accessed: '2026-11-06'
conditions:
  medium: 冷冻室空气
  measurementSite: 冷冻室中部，避开出风口与门架
  duration: 稳定运行时的目标温度
  basis: 设定值与温度计实测
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - USDA FSIS 的冷冻资料指出，持续保存在 0 °F 的食物在安全性上可靠；0 °F 约等于 −17.8 ℃，正文取 −18 ℃（255 K）。
    - FoodSafety.gov 的冷食储存表把 0 °F（−18 ℃）或以下列为冷冻条件，并给出不同食物的建议储存期限。
    - 设定温度、空气温度与食物中心温度不同；正文说明无霜循环、开门和装载量会造成波动。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  −18 ℃ 是家用冷冻储存目标的圆整值；无霜冰箱会周期性升温化霜，实际空气温度可能在 −16 至 −20 ℃ 间波动。 大块食物中心达到 −18
  ℃需要较长时间，冷冻主要保证安全储存，不等于速冻。
visual:
  template: kitchen
  scene: temperature.object
  caption: 冷冻室温度
  note: 画面为冷冻室的示意表达，非按比例、非观测重建；霜层、冷雾与储物均为解释性示意， 不代表真实冰箱结构或具体测温位置。
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

冷冻室温度通常指家用冷冻区的目标空气温度。USDA 与 FoodSafety.gov 建议冷冻室保持在 0 °F（−18 ℃）或以下；本条取 −18 ℃（255 K）。[1][2] 这是长期储存的安全目标，不是“速冻”温度，也不是食物中心温度瞬间达到的值。它与冷藏室的 4 ℃ 分属两个不同的储存区间。

## 怎样知道

冷冻室温度可用内置或独立温度计测量；测量点应避开出风口和门架，并在装载稳定后读数。USDA 的资料指出，持续保存在 0 °F 的食物在安全性上是可靠的，但品质仍会随时间下降。[1] FoodSafety.gov 的储存表把 0 °F（−18 ℃）或以下列为冷冻条件，并给出不同食物的建议期限。[2] 无霜冰箱会周期性升温化霜，空气温度并非恒定，因此读数应说明测量时刻。

## 数值与口径

255 K 等于 −18.15 ℃，约 −18 ℃。0 °F 严格换算为 −17.78 ℃，所以 −18 ℃ 是圆整值。[1][2] 冷冻室的空气温度会随化霜循环、开门和放入未冷冻食物而波动；食物中心温度下降更慢。快速冷冻通常需要更低温度和更强气流，家用冷冻室主要保证长期储存，而不是瞬间冻结。引用温度时还应区分空气、包装表面和食物中心。

## 常见误解

第一，认为 −18 ℃ 能杀死所有微生物；冷冻主要让微生物进入休眠，解冻后仍可繁殖。第二，把设定值当成食物温度；大块食物内部达到 −18 ℃需要很长时间。第三，认为冷冻会无限期保持品质；安全上可以长期保存，但脂肪氧化和冻烧会影响风味。第四，把冷冻室温度与冰箱冷藏室温度混用。

## 与其他温度的关系

−18 ℃ 低于 fridge 的 4 ℃ 和 water-freezing 的 0 ℃，也低于 human-body-temperature 与 room-temperature。它高于 absolute-zero，却低于 permafrost 的约 −10 ℃ 和 dry-ice-sublimation 的约 −78.5 ℃。这个温度处在家用冷冻与低温工程的交界处：对食品足够冷，但远未达到液氮或液氦温区。
