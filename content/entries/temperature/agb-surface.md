---
id: temperature.agb-surface
title: 渐近巨星支表面温度
titleEn: Asymptotic giant branch effective temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  渐近巨星支是中等质量恒星演化的晚期阶段，外层包层膨胀变冷，光球有效温度通常处在约 3,000 K 或更低的温区。
  这一量级描述的是冷包层，不是接近 10⁸ K 的核心氦燃烧温度，也不是单颗天体的精确测量。
quantity:
  value: 3000
  unit: K
  measure: 渐近巨星支光球有效温度量级
  approximate: true
  measureLabel: 渐近巨星支光球有效温度量级
displayValue: '约 3,000 K（约 2,700 °C）'
related:
  - temperature.red-giant-core
  - temperature.betelgeuse-surface
  - temperature.planetary-nebula
  - temperature.white-dwarf-surface
reviewStatus: reviewed
sources:
  - title: Characterizing AGB Stars in Wide-field Infrared Survey Explorer (WISE) Bands
    url: 'https://www.aanda.org/articles/aa/full_html/2014/04/aa22818-13/aa22818-13.html'
    publisher: 'J. Lian et al., Astronomy & Astrophysics 564, A84 (2014)'
    accessed: '2026-11-07'
  - title: 'Basic Properties and Variability (The M-Type Stars)'
    url: 'https://ntrs.nasa.gov/citations/19880002211'
    publisher: 'F. R. Querci, NASA Technical Reports Server'
    accessed: '2026-11-07'
conditions: >-
  对象为渐近巨星支恒星的外层光球；约 3,000 K 是接近冷端上界的量级参考，许多 AGB 星的有效温度低于 3,000 K。
  碳氧比、脉动、尘埃遮蔽和观测波段会改变拟合值；它不是核心温度，也不表示整颗星均匀冷却。
review:
  method: source-check
  date: '2026-11-07'
  retry: '2026-11-07 复核（verified）：A&A 564 A84 全文可读，明确给出 AGB 有效温度低于 3000 K；NTRS 19880002211 引用页可读，摘要未列温区（5000 K 至 2000 K 需查该书 PDF），未替换来源。'
  notes:
    - '核对 A&A 564, A84：AGB 星具有较低的表面有效温度，通常低于 3,000 K，并伴随强烈质量损失。'
    - '核对 NASA NTRS 19880002211：红巨星 M、S、C 星的光球温度可从约 5,000 K 延伸到低于 2,000 K。'
    - 取 3 × 10³ K 作便于比较的上端参考，正文明确许多 AGB 星更冷，且核心远热于光球。
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  3,000 K 是量级参考，不是所有 AGB 星的定义温度；A&A 资料给出的趋势是“低于 3,000 K”，NASA 综述则给出约
  5,000 K 到低于 2,000 K 的更宽范围。恒星质量、演化阶段、尘埃和脉动都会造成差异，核心温度也不能由光球温度外推。
visual:
  template: stellar-atmosphere
  profile: photosphere
  caption: 渐近巨星支光球
  note: >-
    以膨胀的红色包层与尘埃示意渐近巨星支，不对应具体天体；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#e7a07a'
  symbol: AGB star
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 恒星
---
## 它是什么

渐近巨星支是中等质量恒星（约 1–8 倍太阳质量）演化的最后阶段之一。恒星此时拥有简并的碳氧核心、氦燃烧壳和氢燃烧壳，外层包层膨胀变冷，并通过星风大量抛射物质。[1] 这里的表面温度指包层光球的有效温度，不是核心温度；AGB 的冷外表与热核心可以同时存在。

## 表面温度怎样得到

有效温度由光谱、红外测光和大气/尘埃模型共同约束。A&A 的研究指出，AGB 星的表面有效温度通常低于 3,000 K，并伴随强烈的质量损失。[1] NASA NTRS 的综述则把红巨星光谱型 M、S、C 星的光球温度概括为约 5,000 K 到低于 2,000 K，最冷的 Mira 型变量还要更低。[2] 这些数值是分类与模型拟合的量级，不是单颗星的直接测温。

## 数值与口径

本条采用约 3 × 10³ K 作为一个便于比较的上端参考，而不是所有 AGB 星都在同一温度。许多 AGB 星比 3,000 K 更冷，碳氧比、脉动、尘埃遮蔽和观测波段都会改变拟合结果。[1] 同样重要的是，3,000 K 只属于光球；核心的氦燃烧温度接近 10⁸ K，而更晚的碳燃烧还会更高。把两者混在一起，就会把“冷巨星”误读成“整颗星都很冷”。[1][2]

## 常见误解

第一，把 3,000 K 当成 AGB 的定义温度；它只是量级，冷端可以低得多。第二，把表面冷当成核心也冷；核心正在高温燃烧。第三，把红外增亮直接当成表面升温；尘埃包层会吸收并再辐射，改变我们看到的颜色。第四，把 AGB 与红巨星主序阶段混为一谈；前者是晚期阶段，质量损失和内部结构都不同。[1][2]

## 与其他温区的关系

3,000 K 低于太阳表面的约 5,772 K，也低于参宿四的约 3,600 K；它与红矮星和褐矮星的温区有部分重叠，但半径和演化阶段完全不同。它远低于红巨星核心的约 10⁸ K，也低于行星状星云中心星的更高温区。比较时必须同时说明对象是包层光球还是核心。[1][2]
