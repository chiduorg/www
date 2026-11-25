---
id: time.protein-folding
title: 蛋白质折叠
titleEn: Protein Folding
dimension: cosmic-time
category: 时长尺度
summary: 蛋白质折叠是新合成的多肽链形成特定三维结构的过程。小型单域蛋白的体外折叠通常在毫秒到秒之间，常取1毫秒即10⁻³秒作毫秒级的代表值。
quantity:
  value: 0.001
  unit: s
  measure: duration-reference
  measureLabel: 小型单域蛋白体外重折叠的典型时间，取1毫秒作毫秒级代表值
  approximate: true
displayValue: 约 10⁻³ 秒（毫秒级；常见范围 2×10⁻⁴–4 秒）
chronology:
  status: duration
  plot: false
  note: 本条是持续时长/周期，不是大爆炸后的绝对时点，不放在绝对时间轴上
conditions:
  sample: 小型单域蛋白
  setting: 体外重折叠实验
  trigger: 稀释复性或温度/溶剂跃变
  kinetics: 两态或近似两态折叠
  observedRange: 约200微秒至4秒
  caveat: 体内共翻译折叠、分子伴侣与分子拥挤会改变时间尺度
uncertainty: >-
  不同蛋白的折叠速率跨越四个数量级以上：综述给出的两态折叠时间从约200微秒到约4秒。
  另一篇综述把体外折叠概括为毫秒到秒量级。测定方法、温度、突变与是否含脯氨酸异构化步骤都会影响数值， 因此1毫秒只是数量级参照，不能视为普适折叠时长。
related:
  - space.protein
  - space.amino-acid
  - space.ribosome
  - time.cell-division
reviewStatus: reviewed
sources:
  - title: Fast Kinetics and Mechanisms in Protein Folding
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK2232/'
    publisher: Annual Review of Biophysics and Biomolecular Structure / NCBI Bookshelf
    accessed: '2026-11-06'
  - title: 'Protein Folding: Then and Now'
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2173875/'
    publisher: Archives of Biochemistry and Biophysics / PubMed Central
    accessed: '2026-11-06'
  - title: 'SI base unit: second (s)'
    url: 'https://www.bipm.org/en/si-base-units/second'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - Eaton 等综述核实两态折叠速率从约(200 μs)⁻¹到(4 s)⁻¹，即折叠时间约200微秒至4秒。
    - Chen 等综述核实早期体外研究把折叠过程概括为毫秒到秒的时间尺度。
    - 取1毫秒为毫秒级代表值，落在来源支持区间内；未把单一蛋白的速率当作通用常数。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbial-study
  scene: time.object
  caption: 蛋白质折叠 · 多肽链构象示意
  note: 链与结构域为风格化示意，非按比例，非观测重建，不代表真实分子动力学轨迹或特定蛋白结构
mode: 时长
tags:
  - 时长尺度
  - 时长
---
## 它是什么

蛋白质折叠是新合成的多肽链自发形成特定三维结构的过程。小型单域蛋白的体外折叠时间通常在毫秒到秒之间，常取10⁻³秒作毫秒级的代表值。[1][2] 它问的是“折叠一次要多久”，不是“蛋白质何时出现”。

## 怎样知道

停流荧光、温度跃变和单分子荧光共振能量转移等技术可以跟踪折叠过程中的结构变化。Eaton 等人的综述给出两态折叠速率跨越四个数量级，从约200微秒（λ阻遏蛋白）到约4秒（肌肉酰基磷酸酶）。[1] 另一篇综述指出，早期体外研究把折叠过程概括为毫秒到秒的时间尺度，远快于随机搜索所有构象的估计。[2] 这些数值来自不同蛋白和不同触发方式，不能简单平均成一个“通用折叠时间”。

## 数值与口径

10⁻³秒对应1毫秒；常见范围约为2×10⁻⁴至4秒，具体取决于链长、结构类型、温度和溶剂条件。[1] 体内折叠还受翻译速度、分子伴侣和拥挤环境影响，可能不同于试管中的重折叠。[2] 因此“1毫秒”只适合作为数量级参照，不能代表所有蛋白质。

## 这是持续多久，不是发生在何时

折叠时间是单个分子的持续时间，不是某个绝对时刻。不同分子在不同时刻开始折叠，测得的平均值来自大量分子的统计。

## 常见误解

误解之一是认为折叠必须穷举所有构象，因而需要天文数字般的时间；实际折叠走的是偏好的能量路径。[2] 另一误解是把体外测得的快速折叠直接套用到细胞内；共翻译折叠、伴侣结合和错误折叠都可能改变时间尺度。

## 与其他尺度的关系

1毫秒约为一次眨眼（0.3秒）的三百分之一，约为一次心跳（0.8秒）的八百分之一，却比原子自发辐射寿命（约10⁻⁸秒）长十万倍。一个细胞周期内可连续完成数千万轮这样的折叠；分子尺度的快过程累积成细胞尺度的慢过程。[1][2]

本条的时间单位与换算依据 BIPM 对秒的定义。[3]
