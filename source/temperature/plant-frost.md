---
id: temperature.plant-frost
title: 植物冻害
titleEn: Plant frost injury threshold
dimension: temperature
category: 低温
summary: >-
  植物冻害不是空气温度本身，而是叶面或细胞间隙结冰造成的组织损伤。轻霜常出现在 0 至 −2 ℃，硬冻约在 −2.2 ℃ 以下。这里取 271 K（约
  −2.15 ℃）作代表值， 它位于轻霜与硬冻的交界附近；不同物种、部位和持续时间差异很大。
quantity:
  value: 271
  unit: K
  measure: 植物冻害温度阈值
  approximate: true
displayValue: 约 −2.15 ℃（271 K）
related:
  - temperature.water-freezing
  - temperature.freezer
  - temperature.lake-freezing
  - temperature.sea-ice
  - temperature.antarctic_min_temp
  - space.human
reviewStatus: reviewed
sources:
  - title: How to Protect Plants from Frost and Freeze
    url: >-
      https://yardandgarden.extension.iastate.edu/how-to/how-protect-plants-frost-and-freeze
    publisher: Iowa State University Extension and Outreach
    accessed: '2026-11-06'
  - title: 'Garden Advice: Steps to take when frost is in the forecast'
    url: >-
      https://anrcatalog.ucanr.edu/sites/default/files/2025-11/PD-11-08-25-Frost.pdf
    publisher: University of California Agriculture and Natural Resources
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 植物组织与叶面
  measurementSite: 叶面、花芽与细胞间隙
  duration: 低温持续时间与降温速率
  basis: 田间受害观察与园艺指南
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - Iowa State 推广资料区分霜与冻：霜是叶面结冰，冻是植物内部降到 0 ℃ 以下；并给出霜冻预警与覆盖失效的低温条件。
    - UC ANR 园艺指南把 32 ℉ 以下定为冻警告、28 ℉ 以下定为硬冻，即约 −2.2 ℃，正文据此取 271 K 作为交界代表值。
    - 正文强调物种、部位、降温速度与持续时间差异，不把单一阈值套到所有植物。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  0 至 −2 ℃ 是轻霜与硬冻的常用分界；热带植物、开花中的果树和幼叶更敏感，耐寒品种可承受更低温度。
  叶面温度可低于百叶箱气温，降温速度、持续时间、风速和土壤湿度都会改变受害程度。
visual:
  template: planet-environment
  scene: temperature.object
  caption: 植物叶面的霜冻
  note: 画面为植物冻害的示意表达，非按比例、非观测重建；霜晶、叶色与环境光仅用于区分受害阶段， 不代表真实植物组织或具体测温位置。
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

植物冻害阈值指植物组织因低温受伤的温度，不是空气温度本身。霜冻发生在叶面或细胞间隙结冰；轻霜常在 0 至 −2 ℃ 出现，持续低温或更低温度会造成细胞膜损伤、叶片水浸状、褐变和萎蔫。[1] 这里取 271 K，约 −2.15 ℃，作为轻霜与硬冻交界附近的代表值。

## 怎样知道

农业推广资料把“霜”和“冻”分开：霜是叶面结冰，即使气温略高于冰点也可能发生；冻是植物内部降到 0 ℃ 以下并结冰。[1] 另一份园艺指南把 32 ℉ 以下定为冻警告，28 ℉ 以下定为硬冻，即约 −2.2 ℃。[2] 这些阈值来自田间观察和区域气候经验，不是实验室里对某一物种的精确测定。

## 数值与口径

271 K 等于约 −2.15 ℃。它描述敏感植物开始明显受害的低温段，不代表所有植物都在同一温度受伤。热带植物、开花中的果树和刚萌发的新叶更敏感；耐寒蔬菜和休眠枝条可承受更低的温度。[1] 受害程度还取决于降温速度、持续时间、风速和土壤湿度，突然降温比逐步适应更危险。

## 常见误解

第一，把气温当作叶面温度；晴朗无风的夜里，叶面可低于百叶箱气温。第二，认为 0 ℃ 以上绝不会结霜；局部表面仍可能降到冰点。第三，把一次霜冻等同于整株死亡；许多植物只是花芽或幼叶受损。第四，忽略持续时间；同样的 −2 ℃，持续数小时与短暂经过的后果不同。[2]

## 与其他温度的关系

271 K 略低于 lake-freezing 的 273.15 K，说明植物组织可以在淡水冰点附近或稍低时受害。它高于 freezer 的约 255 K，也高于 sea-ice 表面的 258 K 附近。与 water-freezing 相比，271 K 不是水的相变点，而是生物组织对低温的综合响应阈值。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
