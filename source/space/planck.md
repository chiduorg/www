---
id: space.planck
title: 普朗克长度
titleEn: Planck Length
dimension: length
category: 量子与粒子
summary: >-
  普朗克长度由约化普朗克常数、万有引力常数和光速组合定义，2022 CODATA 给出约1.616 ×
  10⁻³⁵米。它是理论特征尺度，不是已观测到的空间像素。
quantity:
  value: 1.616255e-35
  unit: m
  measure: 由 ħ、G、c 组合定义的普朗克长度
  approximate: true
displayValue: 约 1.616 × 10⁻³⁵ m
related:
  - time.planck-era
  - space.quantum-foam-bubble
  - space.gut-scale
  - time.big-bang
  - temperature.planck-temperature
  - mass.planck-mass
reviewStatus: reviewed
sources:
  - title: 2022 CODATA — Planck length
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?eqplkl'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: Planck length
    url: 'https://www.britannica.com/science/Planck-length'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Cosmology — Superunification and the Planck era
    url: >-
      https://www.britannica.com/science/cosmology-astronomy/Superunification-and-the-Planck-era
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: "NASA Telescopes Set Limits on Space-time Quantum Foam"
    url: "https://chandra.harvard.edu/photo/2015/quantum/"
    publisher: "NASA / Chandra X-ray Center"
    accessed: '2026-11-24'
  - title: "New Constraints on Quantum Gravity from X-ray and Gamma-Ray Observations"
    url: "https://arxiv.org/html/1411.7262v5"
    publisher: "E. S. Perlman et al. / The Astrophysical Journal"
    accessed: '2026-11-24'
legacy:
  id: planck
  icon: ⚛
  relatedLabels: 普朗克时间（~5.39×10⁻⁴⁴秒）、普朗克质量（~2.18×10⁻⁸千克）、量子泡沫、弦理论、圈量子引力、黑洞热力学、全息原理
conditions: 本条指由常数组合定义的理论长度，不是已观测的空间单元、粒子直径或仪器分辨率；适用于量子引力讨论的入门参照。
uncertainty: 数值是常数组合的计算结果，标准不确定度0.000018×10⁻³⁵米，主要来自万有引力常数G；理论图景本身无法给出实验误差。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；逐条用WebFetch打开NIST与Britannica页面核对数值、定义与理论表述。
    - 明确区分“常数组合给出的数值”与“已观测长度”，不把普朗克长度写成空间像素。
  originalQuantity:
    value: 1.6e-35
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  scene: "space.planck"
  caption: "普朗克长度 · 理论参照"
  note: "理论长度的标尺与波纹示意，不代表已经观测到最小空间颗粒；图为示意，非按比例，非观测重建。"
  template: "field"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 量子与粒子
  - 尺寸
---
## 普朗克长度是什么

普朗克长度是由约化普朗克常数 ħ、万有引力常数 G 和光速 c 组合而成的特征长度，记作 ℓP=√(ħG/c³)。它把量子力学的作用量、引力的强度和相对论的速度放进同一个表达式，因此常被看作讨论量子引力时绕不开的尺度。[1][2] 它不是一个物体的尺寸，也不是一把已经校准到 10⁻³⁵ 米的尺子；它更像理论内部的一个坐标，用来标记经典时空描述可能开始失效的量级。[1][3]

## 理论定义与已观测的边界

这一条必须分清两层：公式和数值来自理论定义加常数测量，普朗克长度本身从未被直接量出来。NIST 给出的是由常数组合算出的值，不是某台仪器读出的长度。[1] 望远镜和加速器探测的结构都远大于它；Britannica 也指出，它远小于地面加速器能够分辨的距离。[2] 量子引力的具体图景仍是模型，普朗克长度不能自动证明时空由离散单元组成。[3]

## 数值与口径

2022 CODATA 给出 1.616 255×10⁻³⁵ 米，标准不确定度 0.000 018×10⁻³⁵ 米，相对不确定度约 1.1×10⁻⁵，主要来自引力常数 G 的不确定度。[1] 若改用普朗克常数 h 而不是 ħ，表达式和数值都会不同；引用时必须写明采用哪一种约定，不能把两个定义混成一个。[1][2]

## 常见误解

常见误解是把普朗克长度当成空间的最小像素。现有实验没有显示空间在这一点上离散；它只是说，用已知理论描述比这更短的距离时，引力的量子效应不能忽略。[1][3] 另一个误解是把它当成粒子直径；质子都比它大约 10²⁰ 倍，任何“粒子有普朗克长度那么大”的说法都混淆了特征尺度与实体边界。[2]

## 与其他尺度的关系

在尺度轴上，它位于质子（约 1 飞米，10⁻¹⁵ 米）以下约 20 个数量级，也远小于原子（约 10⁻¹⁰ 米）。[2] 与之相邻的还有普朗克时间与普朗克温度，它们同样由常数组合定义；这些量共同构成理论参照，而不是一串已经拍到的物体。[3] 阅读时可把“理论可讨论的最小尺度”和“实验已分辨的最小结构”分开。

## 为什么还没有直接测到

普朗克长度比质子还小约 20 个数量级；要直接分辨它，需要约 10¹⁹ GeV 量级的能量，远超当前对撞机。现有实验只能给出“在这个尺度之上没有新结构”的上限，不能证明空间在普朗克长度处离散。[2] 这也是量子引力理论缺少直接实验检验的原因：它不是一台望远镜能拍到的对象，而是理论内部的特征尺度。[1][3]

## 与“量子泡沫”的区别

量子泡沫是描述普朗克尺度时空可能剧烈涨落的图像，属于理论猜想，不是已经拍到的泡沫结构。[3] 普朗克长度只是这个讨论中的长度标尺；它既不证明时空由泡沫组成，也不等于某个涨落的大小。把两者当成同义词，会把“理论定义”误读成“观测对象”。[1][3]

## 五轴对照

在空间轴，它是 10⁻³⁵ 米；在时间轴，对应普朗克时间约 5.4×10⁻⁴⁴ 秒；在温度轴，对应普朗克温度约 1.4×10³² K；在质量轴，对应普朗克质量约 2.2×10⁻⁸ 千克。四个量都由同一组常数组合定义，彼此换算，却不等于四个已经测到的实体。[1][3]

## 延伸核对

补充的来源 [4]（NASA / Chandra X-ray Center）、[5]（E. S. Perlman et al. / The Astrophysical Journal） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
