---
id: time.matter-radiation-equality
title: 物质-辐射相等
titleEn: Matter–Radiation Equality
dimension: cosmic-time
category: 人类与文明
summary: 宇宙的平均能量密度中，物质与辐射的占比在此前后发生交叉。Planck 似然拟合给出约 5.17 万年的模型后验；此后物质引力逐渐主导结构形成。
quantity:
  value: 1632973440000
  unit: s
  measure: time-after-big-bang
  measureLabel: 自大爆炸起的模型时间
  approximate: true
displayValue: (51.7 ± 0.8) 千年
related:
  - time.photon-epoch
  - time.dark-energy-domination
  - time.recombination
  - temperature.neutrino-background-temp
  - time.present
reviewStatus: reviewed
sources:
  - title: 'Some Times in Standard Cosmology, arXiv:2411.07703v1'
    url: 'https://arxiv.org/html/2411.07703v1'
    publisher: Hergt & Scott / University of British Columbia
    accessed: '2026-11-06'
  - title: 'Big-Bang Cosmology, 2025 update, §22.3'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: 'Neutrinos in Cosmology, 2025 update, §26.1'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrinos-in-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
legacy:
  id: matter-radiation-equality
  icon: ⚖
  relatedLabels: 宇宙学、物质主导、辐射主导、宇宙微波背景
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 物质-辐射相等
    quantity:
      value: 1580000000000
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 5 万年
  notes:
    - 读取 Hergt & Scott 表 2：t_eq = 1.633×10^12 s，即 51.7±0.8 kyr；明确以能量密度而非粒子数定义。
    - 本轮按五节结构重写；时间口径为自大爆炸起的模型时间，不用“距今”替换。
chronology:
  status: model-reference
  plot: true
conditions:
  model: 平直ΛCDM
  data: Planck低多极TT、LoLLiPoP低多极EE、HiLLiPoP高多极TTTEEE与NPIPE透镜似然
  timeBasis: time.big-bang
  conversion: presentSeconds仅作time.present对照，不替换本库时间基准
  precision: 后验均值±标准差，依赖模型与似然选择
  note: 时间值为原文表2后验均值，误差为标准差。
uncertainty: '约 ±0.8 千年的后验标准差；换算为秒时取年长 31,557,600 秒，末位因四舍五入略异。'
visual:
  template: radiation-front
  profile: equality
  caption: 物质—辐射相等 · 三维参照
  note: >-
    交叉只表示平均能量密度占比，不表示物质或辐射粒子在同一刻出现或消失。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#aebfd2'
  scene: time.object
mode: 时点
tags:
  - 人类与文明
  - 时点
  - 人类史
---
## 它是什么

物质—辐射相等指宇宙中物质与辐射的平均能量密度相等。物质包括普通物质和暗物质，辐射包括光子和相对论性中微子；比较的是能量密度，不是粒子数。[1][3] 相等之后，物质引力逐渐主导结构形成，宇宙从辐射控制膨胀转为物质控制膨胀。[1][2]

## 怎样知道或为何是推断

Hergt 与 Scott 用 Planck 微波背景温度、极化与透镜似然拟合平直 ΛCDM，再由两流体解和数值积分推出各时代时间，表 2 给出相等时刻约 5.17 万年。[1] 这不是直接看到“相等”的瞬间，而是由微波背景约束的宇宙参数反推；误差反映后验分布，不是单次计时精度。[1] PDG 综述说明，辐射与物质的密度随尺度因子以不同幂次下降，这是相等必然发生的物理基础。[2]

## 时间坐标与口径

本条取原文表 2 的 (51.7±0.8) 千年，即约 (1.633±0.024)×10¹² 秒，坐标是自大爆炸起的模型时间。[1] 它不同于“距今”年代，也不等同于复合或光子脱耦：相等之后辐射仍存在，只是不再主导膨胀。[1][2] 中微子是否算辐射会影响相等的精确位置，因此模型采用 N_eff=3.044 的辐射密度。[1][3]

## 常见误解

误解之一是把相等理解成“物质突然出现”或“辐射突然消失”。两者一直共存，只是密度占比交叉。[2] 另一个误解是把 5.17 万年当成复合时刻；复合约在 38 万年，晚得多。[1] 还有人把能量密度相等误读为粒子数相等，这忽略了光子与中微子的能量差异。[1][3]

## 与其他阶段的关系

相等是辐射主导阶段末端的标志，之后进入物质主导，为复合、声学振荡和结构形成提供背景。[1][2] 与“光子时代”条目相连，可区分“辐射主导”和“宇宙透明”；与“暗能量主导”条目相连，则看到更晚的第二次占比交叉。[2] 这三个时代共同构成膨胀史的骨架。[1][2]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1.633×10¹² 秒，换算后是 5.17×10⁴ 年；约 1.12×10⁻⁵ 个地球年龄（46 亿年）。这把尺子只改写单位，不改变量值；它把本条固定在时间轴的 10¹² 量级附近。

读图时先看量级，再看倍数：10¹² 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
