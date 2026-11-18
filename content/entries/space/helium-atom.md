---
id: space.helium-atom
title: 氦原子
titleEn: Helium Atom
dimension: length
category: 原子与分子
summary: >-
  氦原子的大小取决于所用半径定义。英国皇家化学学会的元素资料列出非成键半径1.400埃；本页采用它的两倍，即约0.28纳米，作为明确口径的比较长度，而不是唯一原子硬边界。
quantity:
  value: 2.8e-10
  unit: m
  measure: 两倍RSC所列氦原子非成键半径1.400 Å
  approximate: true
displayValue: 约 0.28 nm（2倍非成键半径）
related:
  - space.atom
  - space.proton
  - space.carbon-nucleus
  - space.electron-compton
  - space.water-molecule
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: Helium — Atomic Data
    url: 'https://periodic-table.rsc.org/element/2/helium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-06'
  - title: helium
    url: 'https://www.britannica.com/science/helium-chemical-element'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: atom
    url: 'https://www.britannica.com/science/atom'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 2022 CODATA — Bohr radius
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?bohrrada0'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
legacy:
  id: helium-atom
  icon: "\U0001F388"
  relatedLabels: 量子电动力学、多体问题、变分法、超流性、大爆炸核合成、低温物理、光谱学
conditions: 以RSC非成键半径1.400 Å为定义口径，取其两倍作比较长度；不是唯一原子硬边界直径，也不等同于共价半径口径。
uncertainty: RSC未给出非成键半径的单一不确定度；该值由多种方法综合给出，原子半径定义随化学环境与配位方式变化，故0.28 nm是定义口径下的近似比较长度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch打开RSC氦元素页，核对非成键半径1.400 Å、共价半径0.37 Å及定义。
    - 用Britannica氦与原子页核对惰性气体性质及原子尺度表述。
  originalQuantity:
    value: 3.1e-11
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: atom
  variant: helium
  color: '#9bbadb'
  referenceAxis: x
  caption: 两倍氦非成键半径的比较长度
  note: 标线两端对应所选直径口径；电子云无硬边界，中心小球和渐层光晕为示意，非按比例，非观测重建。
  framePadding: 0.31
  sourceMeasure: 两倍RSC所列氦原子非成键半径1.400 Å
  scene: space.object
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
---
## 它是什么

氦原子是原子序数为 2 的元素，常见同位素氦-4 的核含两个质子和两个中子，核外有两个电子，基态排布为 1s²。[1][2] 它是惰性气体，化学性质极不活泼。讨论“氦原子多大”时，必须先说明用的是非成键半径、共价半径还是电子云的计算边界；本条选用非成键半径口径，取其两倍作为比较长度。

## 怎样知道

英国皇家化学学会的元素资料把非成键半径定义为：两个同种未成键原子在静电力平衡时的间距的一半；共价半径则是单个共价键中两个原子核间距的一半。[1] 同一页面列出氦的非成键半径为 1.400 埃，共价半径为 0.37 埃。两种数值来自不同的结构情境，不能互相替代；它们也不是用显微镜直接看到的电子云边缘。

## 数值与口径

1 埃等于 10⁻¹⁰ 米，1.400 埃就是 0.140 纳米，两倍为 0.28 纳米，约合 2.8×10⁻¹⁰ 米。[1] 这是本页 quantity 的来源，近似标记为 true。若改用共价半径 0.37 埃，两倍只有 0.074 纳米，差别接近四倍；这说明“氦原子直径”没有唯一答案。电子云在远处逐渐衰减，所谓边界只是所选定义的结果。[1][3]

## 常见误解

把 0.28 纳米说成氦原子的固定硬直径，是最常见的误解；原子没有可触摸的外壳，电子云也没有一条清晰的终止线。[3] 另一个误解是把非成键半径与共价半径混用，或者把某个温度、压强或聚集状态下的有效尺寸推广到所有氦原子。[1] 氦原子比氢原子大，但两者都处在 10⁻¹⁰ 米量级，不能用“大多少倍”代替体积或质量比较。

## 与其他尺度的关系

在原子尺度内，氢原子的玻尔半径约 0.0529 纳米，氦的非成键半径 0.140 纳米约为它的 2.6 倍，而本条的两倍值 0.28 纳米约为 5.3 倍。[1][3][4] 与原子核（约 10⁻¹⁵ 米）相比，原子直径约大五个数量级；与可见光波长（约 400 至 700 纳米）相比，氦原子又小得多。尺度轴上的位置取决于所选半径口径，而不是一个孤立数字。
