---
id: time.black-hole-evaporation
title: 黑洞蒸发时间
titleEn: Black Hole Evaporation Time
dimension: cosmic-time
category: 时长尺度
summary: >-
  黑洞蒸发时间指黑洞通过霍金辐射失去质量、最终消失所需的持续时间。按史瓦西黑洞近似，寿命与质量三次方成正比；10个太阳质量约对应10^77秒量级。这是模型推断，不是观测记录。
quantity:
  value: 6.6e+77
  unit: s
  measure: duration-model-reference
  measureLabel: 按史瓦西黑洞与霍金辐射模型推算的蒸发寿命
  approximate: true
displayValue: 约 6.6 × 10^77 秒（约 2 × 10^70 年）
chronology:
  status: duration-model
  plot: false
  note: 本条是持续时长，不是绝对时点；未来/理论量值不代表已观测
conditions:
  mode: theoretical-model
  definition: 史瓦西黑洞霍金蒸发公式 t ≈ 5120πG²M³/(ħc⁴)，取M=10个太阳质量
  note: 假设不旋转、无电荷、无吸积、无额外维度。
uncertainty: >-
  蒸发时间是模型推断，依赖史瓦西近似与霍金辐射理论。公式假设黑洞不旋转、不带电荷、周围没有物质落入，
  也没有额外维度；旋转、吸积或量子引力修正都会改变结果。[1][3]
related:
  - time.first-black-holes
  - time.heat-death-time
  - time.proton-decay-limit
  - space.milky-way
reviewStatus: reviewed
sources:
  - title: Hawking radiation
    url: 'https://www.britannica.com/science/Hawking-radiation'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: black hole
    url: 'https://www.britannica.com/science/black-hole'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'Lecture 47: Death in the Universe'
    url: 'https://www.astronomy.ohio-state.edu/gaudi.1/AST161/Unit7/lecture47.html'
    publisher: 'Ohio State University, Astronomy 161'
    accessed: '2026-11-06'
  - title: >-
      A CEERS Discovery of an Accreting Supermassive Black Hole 570 Myr after
      the Big Bang
    url: 'https://ntrs.nasa.gov/citations/10641293937096'
    publisher: NASA Technical Reports Server
    accessed: '2026-11-24'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      打开 Britannica 的 Hawking radiation 与 black hole
      条目，核对负能粒子进入视界使黑洞质量减少、原初小黑洞可蒸发。
    - 打开 Ohio State 的 Lecture 47，核对恒星级黑洞蒸发时标约10^67年、超大质量黑洞约10^100年，均远大于宇宙年龄。
    - 按公式代入M=10太阳质量计算得6.6×10^77秒（约2.1×10^70年）；正文明确这是模型推断。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: accretion-engine
  scene: time.object
  caption: 黑洞蒸发时间 · 视界与霍金辐射示意
  note: 黑洞、吸积盘与辐射为风格化示意，非按比例、非观测重建；颜色、光线与尺寸独立归一化，不能作为时间比例尺。
mode: 时长
tags:
  - 时长尺度
  - 时长
---
## 它是什么

黑洞蒸发时间指黑洞通过霍金辐射失去质量、最终消失所需的持续时间。按史瓦西黑洞近似，t ≈ 5120πG²M³/(ħc⁴)，寿命与质量三次方成正比。[1] 它是模型推算的寿命，不是对某个黑洞的观测记录。

## 怎样知道

霍金辐射理论认为，事件视界附近产生的粒子对中，负能粒子进入黑洞，使黑洞质量减少；黑洞越小，温度越高，蒸发越快。[1][2] 因此恒星级黑洞的寿命远长于宇宙年龄，而原初小质量黑洞可能早已蒸发。[2][3]

## 数值与口径

把M取为10个太阳质量，代入公式得约6.6×10^77秒，约2×10^70年。这个结果远大于约138亿年的宇宙年龄。[1][3] 公式假设不旋转、无电荷、周围没有物质落入，也没有额外维度；旋转或吸积会改变结果。

## 常见误解

把蒸发时间当成“黑洞现在正在消失”的确切日程，是把模型推断误当观测事实。对恒星级黑洞而言，蒸发时标比宇宙年龄大几十个数量级，当前宇宙中几乎可以忽略。[2][3] 另一误解是以为黑洞温度随质量增大而升高；实际是质量越小温度越高。

## 与其他尺度的关系

黑洞蒸发位于黑洞热力学与宇宙远期命运的交叉点：它上接恒星坍缩与黑洞形成，下接热死亡时间。[1][3] 与质子衰变实验下限相比，两者都是极长时标，但一个是引力理论推算，一个是粒子实验排除；不能混为一谈。在比较不同天体的寿命时，质量是主导变量；恒星级与超大质量黑洞的蒸发时标可相差数十个数量级。

## 来源交叉核对

本条的时间锚点另用 [4]（NASA Technical Reports Server）交叉核对；不同来源对年代边界、纪年换算或历史分期的处理可能不同，正文以标注的口径为准。

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 6.6×10⁷⁷ 秒，换算后是 2.09×10⁷⁰ 年；约 1.52×10⁶⁰ 个当前宇宙年龄（138 亿年）。这把尺子只改写单位，不改变量值；它把本条固定在时间轴的 10⁷⁷ 量级附近。

读图时先看量级，再看倍数：10⁷⁷ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
