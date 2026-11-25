---
id: temperature.hypernova
title: 极超新星（以 SN 1998bw 为例）
titleEn: 'Hypernova: SN 1998bw as an example'
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  SN 1998bw 是研究高能恒星爆发及其与伽马射线暴联系的重要实例。天文学家用光谱、亮度演化和流体模型研究它；
  爆发能量、局部物质温度与光球辐射温度各有口径，不能合为一个通用温度。
quantity:
  value: null
  unit: K
  measure: 未选定爆发区域和阶段的温度
  measureLabel: 未选定爆发区域和阶段的温度
  approximate: true
  status: undetermined
displayValue: 温度口径未指定（仅阅读）
related:
  - temperature.supernova
  - temperature.kilonova_temp
  - temperature.o-type-star-surface
  - temperature.type-ia-supernova
  - time.first-stars
  - space.supernova-remnant
reviewStatus: reviewed
sources:
  - title: A Strange Supernova with a Gamma-Ray Burst
    url: 'https://www.hq.eso.org/public/news/eso9847/'
    publisher: 'European Southern Observatory, SN 1998bw research report (1998)'
    accessed: '2026-11-06'
  - title: >-
      A Hypernova model for SN 1998bw associated with gamma-ray burst of 25
      April 1998
    url: 'https://arxiv.org/abs/astro-ph/9806382'
    publisher: 'Iwamoto et al., Nature (1998)'
    accessed: '2026-11-06'
  - title: >-
      Light Curve and Spectral Models for the Hypernova SN 1998bw associated
      with GRB980425
    url: 'https://arxiv.org/abs/astro-ph/0007010'
    publisher: 'Nakamura et al., ApJ (2001)'
    accessed: '2026-11-06'
legacy:
  id: hypernova
  icon: "\U0001F4A5"
  relatedLabels: 伽马射线暴、黑洞、相对论性喷流、超新星爆发、r过程、引力波、O型星表面、大质量恒星、重元素合成、恒星演化
conditions: >-
  以 ESO 对 SN 1998bw 的观测报告说明事件；本条未指定爆发区域与阶段，故不设温度数值；
  爆发的总能量、抛射物动能、光球辐射温度与可能存在的吸积盘温度是不同物理量，不能直接互换。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - ESO 1998 年报告记录 SN 1998bw 的多波段观测及其与 GRB 980425 的关联，但未给出可坐标化的统一温度。
    - Iwamoto 等用 2–5×10⁵² erg 的 C+O 星爆发模型解释光谱与光变；Nakamura 等指出晚期光变需要较低能量或非球对称结构。
    - 2026-11-07 保留 needs-review：爆发区域与阶段未选定，温度随模型与时刻变化，无唯一代表值。
    - 2026-11-07 B5 复核：量值保持 undetermined；原因：抛射物光球、核反应区、激波与吸积盘温度不同，且随爆发阶段变化。
  originalQuantity:
    value: 1000000000000
    unit: K
    measure: temperature
    approximate: true
  secondRound:
    date: '2026-11-04'
    previousQuantity:
      value: 1000000000000
      unit: K
      measure: 未绑定模型的极超新星旧参考
      approximate: true
      measureLabel: 未绑定模型的极超新星旧参考
    decision: needs-review
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  极超新星没有单一温度：抛射物光球、深处核反应区、激波和可能的吸积盘各有不同温度，且随爆发阶段变化。
  公开观测主要约束能量、速度、元素丰度和光变，不能直接给出一个可填写的温度数值。
visual:
  template: stellar-event
  profile: supernova
  caption: SN 1998bw 极超新星模型
  note: >-
    抛射物、喷流与光球颜色为模型示意，不是按温度着色的实测图像；画面非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: extreme
  color: '#f2b48f'
  symbol: SN 1998bw
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

SN 1998bw 是一颗光谱类型为 Ic 的特殊超新星，因与伽马射线暴 GRB 980425 在时间和方向上接近而受到持续关注。天文学家把这类能量远超普通超新星的爆发称为“极超新星”。[1] 这个名称首先提示爆发的能量和可能的相对论性喷流，并不是“达到某个温度就自动适用”的温度分类。这里讨论的对象可以是抛射物光球、深处核反应区或喷流，但它们在同一个事件中的温度并不相同。

## 怎样测到或为何是推断

ESO 团队在发现后连续取得多波段图像和光谱，追踪亮度、颜色和谱线怎样变化，并把观测与合成光谱、光变曲线及膨胀速度比较。[1] Iwamoto 等用一颗失去氢、氦包层的碳氧星模型解释观测，给出约 2–5×10⁵² 尔格的动能，远高于普通超新星。[2] Nakamura 等的后续模型发现，能重现早期观测的高能球对称模型不能同样解释晚期光变尾部，因而讨论了更稠密内区或非球对称结构。[3] 这些研究约束的是能量、质量和抛射物结构；温度只能在同一模型内按区域和时刻推断。

## 数值与口径

这里不选定爆发区域和阶段，因此不给单一温度。极超新星的“极”描述能量，不直接描述温度；总能量可以分配到动能、辐射、中微子和磁场，不能简单用一个温度概括。光球温度通常远低于内部核反应区温度，而喷流和激波又各有自己的热结构。[2][3] 因此没有一个可以脱离模型与区域、直接填进坐标的数值。

## 常见误解

第一，把“极超新星”当成温度更高的超新星；它主要描述爆发能量和可能的伽马射线暴关联。[1] 第二，把亮度直接换算成温度；亮度还取决于发光面积、膨胀速度和辐射效率。第三，把早期光变拟合固定为整个爆发的状态；晚期光变可能需要不同的能量分布或几何结构。[3] 第四，把伽马射线暴的能量当成热温度；伽马射线暴涉及相对论性喷流，不能与热平衡物质温度互换。

## 与其他温区的关系

极超新星与核心坍缩超新星、千新星和 O 型星表面相连，但它们不是同一层次的温度对象。核心坍缩超新星的坍缩核心可达 10¹¹ K 量级，千新星光谱拟合温度约为 5,500 K，O 型星表面则可达数万 K。极超新星本身没有统一温度，比较时应先说明是光球、核反应区还是喷流；能量高并不等于所有物质都更热。[1][3]
