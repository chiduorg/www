---
id: temperature.b-type-star
title: B 型星表面
titleEn: B-type star effective temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  B 型星是光谱分类中的高温蓝色恒星，表面有效温度约 10,000–30,000 K。 本条取约 20,000 K
  作为中段锚点；它是光球有效温度，不是色温度， 也不表示整颗星表面处处同温。
quantity:
  value: 20000
  unit: K
  measure: B 型星光球有效温度
  approximate: true
  measureLabel: 有效温度
  range:
    min: 10000
    max: 30000
    unit: K
displayValue: '约 20,000 K（约 19,727 °C）'
related:
  - temperature.o-type-star-surface
  - temperature.a-type-star
  - temperature.rigel-surface
  - temperature.k-type-star
  - temperature.sirius-surface
reviewStatus: reviewed
sources:
  - title: 'The Spectral Sequence'
    url: 'https://openstax.org/books/astronomy-2e/pages/17-3-the-spectral-sequence'
    publisher: 'OpenStax Astronomy 2e（CC BY 4.0）'
    accessed: '2026-11-07'
  - title: >-
      A Modern Mean Dwarf Stellar Color and Effective Temperature Sequence,
      version 2022.04.16
    url: 'https://www.pas.rochester.edu/~emamajek/EEM_dwarf_UBVIJHK_colors_Teff.txt'
    publisher: 'University of Rochester, E. Mamajek'
    accessed: '2026-11-06'
conditions: >-
  对象为主序 B 型星（约 B0–B9）；温度指光球有效温度，由光谱分类、角直径、视差和测热辐射流 结合大气模型拟合得到。20,000 K 是中段锚点，B0
  与 B9 的有效温度差异很大。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 NMSU 分类页：B 型温区约 11,000–30,000 K，氢电离、氦线强。'
    - '核对 Mamajek 表：B0V 约 31,400 K、B5V 约 15,700 K、B8V 约 12,300 K。'
    - '取 20,000 K 作为中段锚点，range 按任务口径写 10,000–30,000 K。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 'B 型星的有效温度随亚型、质量、自转和金属丰度变化，B0 与 B9 可差约两万开尔文； 20,000 K 只是类别中段的取整参考，不能替代逐星拟合。'
visual:
  template: stellar-atmosphere
  scene: temperature.object
  caption: B 型星蓝色光球示意
  note: 以有效温度和光谱类别示意高温恒星表面，不对应某颗 B 型星；画面非按比例， 蓝色调、光晕与表面纹理均为解释性示意。
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 蓝色高温主序星

B 型星是光谱分类中介于 O 型与 A 型之间的一类恒星，氢大多已电离，氦线明显，整体呈蓝色。[1] 它们通常比太阳质量更大、光度更高，寿命更短，是星团和电离氢区中显眼的热源。

## 有效温度的测量链条

先由谱线特征确定光谱型和亚型，再结合视差、角直径和测热辐射流，用大气模型拟合有效温度。[1] 对远离我们的星，角直径往往难以直接测量，温度更多依赖模型与光度关系。有效温度描述整体辐射，不等于色温度或某一波段的亮温度。

## 约 20,000 K 的锚点

教学分类把 B 型放在约 11,000–30,000 K。[1] 主序星抽样给出 B0V 约 31,400 K、B5V 约 15,700 K、B8V 约 12,300 K。[2] 这些值跨越很大，因此本条取 20,000 K 作为中段锚点，并用约 10,000–30,000 K 概括整个类别。

## 高温带来的表面差异

B 型星表面并非均匀发光体。快速自转会造成赤道鼓起和重力变暗，强辐射压、星风和磁场也会改变局部结构。[2] 有效温度是把这些复杂表面折算成一个整体指标，不能据此推断每一处的实际温度。此外，B 型星常出现在星团和电离氢区，强紫外辐射会加热周围气体，使星云温度与恒星有效温度成为两个不同口径。[1] 观测上还用多条氢线与氦线联合定类，再用测热辐射流校正距离和消光；任一环节的误差都会传导到温度。

## 在恒星温标上的位置

20,000 K 高于 A 型星的约 7,500–11,000 K，也高于太阳的约 5,772 K；它低于 O 型星，后者约在 30,000 K 以上。[1][2] 再往冷端走便进入 A 型、F 型和 G 型。B 型星因此是理解大质量恒星加热星际介质的关键一环。
