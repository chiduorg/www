---
id: space.proton
title: 质子与中子
titleEn: Proton & Neutron
dimension: length
category: 原子与分子
summary: >-
  在核子尺度，本页选择1飞米作为比较长度。2022
  CODATA列出的质子均方根电荷半径约0.84075飞米；这种半径描述电荷分布，不能直接当成硬球边界。中子整体电中性，但内部仍有电荷分布。
quantity:
  value: 1.e-15
  unit: m
  measure: 核子比较参考长度（1 fm），非质子或中子的硬球直径
  approximate: true
displayValue: 1 × 10⁻¹⁵ m（1 飞米，参考长度）
related:
  - space.atom
  - space.strong-force
  - space.quark
  - mass.proton
  - mass.neutron
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 2022 CODATA — proton rms charge radius
    url: 'https://physics.nist.gov/cgi-bin/cuu/Value?rp'
    publisher: NIST / CODATA
    accessed: '2026-11-06'
  - title: proton
    url: 'https://www.britannica.com/science/proton-subatomic-particle'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: neutron
    url: 'https://www.britannica.com/science/neutron'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Nuclear Charge Radii
    url: 'https://www-nds.iaea.org/radii/'
    publisher: IAEA Nuclear Data Services / Angeli & Marinova
    accessed: '2026-11-06'
  - title: atom
    url: 'https://www.britannica.com/science/atom'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: "Chemistry 2e §6.3 — Development of Quantum Theory"
    url: "https://openstax.org/books/chemistry-2e/pages/6-3-development-of-quantum-theory"
    publisher: "OpenStax / Rice University"
    accessed: '2026-11-24'
legacy:
  id: proton
  icon: ◉
  relatedLabels: 中子、原子核、夸克模型、深度非弹性散射、质子半径之谜、反物质、粒子加速器
conditions: 1 fm是本图谱选用的核子量级参考长度；质子电荷半径0.84075 fm描述电荷分布，不等于质子或中子的硬球直径，也不代表两个核子具有同一精确尺寸。
uncertainty: >-
  1 fm是人为选定的参考长度，本身没有测量误差；所引质子电荷半径的标准不确定度为0.00064
  fm（相对不确定度约7.6×10⁻⁴）。中子的电荷分布不能由质子数值代替。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 本轮按五节结构重写；用WebFetch打开NIST质子电荷半径页、Britannica质子与中子页，核对数值、定义与组成表述。
    - 用IAEA核电荷半径页核对核电荷半径的测量方法，用Britannica原子页核对原子与核的尺度差别。
    - 明确区分“1 fm参考长度”“质子电荷半径”和“硬球直径”，并说明中子整体电中性不等于没有内部电荷分布。
  originalQuantity:
    value: 1.e-15
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "nucleus"
  scene: "space.proton"
  caption: "核子量级 · 1 fm 参照"
  note: "1 fm 是本条的比较参考长度，非核子硬球直径；内部点云与颜色为示意，非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 原子核
---
## 它是什么

质子与中子是构成原子核的两种核子。质子带一个单位正电荷，中子整体电中性；两者都由夸克和胶子组成，质量相近但并不相同。[2][3] 本条沿用图谱选择的 1 飞米作为核子量级的比较长度，目的是把这些对象放进同一尺度轴，而不是宣布核子有一个统一的硬壳。[1]

## 怎样知道

核子的电荷半径不是用一把尺子直接量出来的。电子散射实验测量电荷分布对入射电子的影响，缪子原子谱则利用缪子轨道对核电荷分布更敏感的特点，再结合理论模型提取均方根电荷半径。[1][4] 2022 CODATA 给出的质子均方根电荷半径是 0.84075 飞米，标准不确定度 0.00064 飞米；中子的整体电荷为零，但内部仍有电荷分布，不能把质子的数值直接搬给中子。[1][2][3]

## 数值与口径

1 飞米等于 10⁻¹⁵ 米。本页 quantity 的 1 飞米是选定的参考长度，近似标记为 true，并不等于质子半径；若把 0.84075 飞米当成半径，二倍约为 1.6815 飞米，也只能叫“两倍电荷半径”，不能称为清晰的直径。[1] 半径描述的是电荷分布的统计宽度，不是核子边缘的位置。

## 常见误解

把 1 飞米说成“质子的直径”是常见混淆：参考长度、电荷半径和硬球直径是三种口径。另一个误解是认为质子和中子尺寸完全一样；它们质量相近、都含三个夸克，但电荷分布并不相同，中子也不能因为没有净电荷就被当作没有内部结构。[2][3] 核子远小于原子，原子直径约 10⁻¹⁰ 米，两者相差约五个数量级。[5]

## 与其他尺度的关系

在尺度轴上，核子位于原子核与原子之间：碳-12 核的电荷半径约 2.47 飞米，铀-238 约 5.86 飞米，而原子整体约 0.1 纳米。[4][5] 这些比较都把半径放在同一口径下；若拿核子半径和原子直径直接相比，倍数会因定义不同而失真。继续阅读夸克、π 介子和强相互作用，可以把“核子由什么组成”与“核子有多大”分开。

## 电荷半径的两种测量

电子散射与缪子原子谱是两条独立路径。电子散射直接探测电荷分布，缪子原子谱利用缪子波函数与核电荷的重叠；两条路径长期给出略有差异的半径，促成了“质子半径之谜”的讨论。[1][4] 2022 CODATA 采用 0.84075 飞米，并保留不确定度，不把单一方法当成最终答案。测量的是电荷分布的统计宽度，不是质子边缘。

## 质量主要不来自“三个夸克相加”

质子的质量约 938 MeV/c²，但三个价夸克的质量加起来只占很小一部分；其余大部分来自量子色动力学中的胶子场能量与夸克动能。[3] 这也是为什么质子质量不能简单写成“三个夸克相加”。质量在这里是束缚系统的能量账本，不是零件清单的算术和。

## 五轴对照

在空间轴，质子约 1 飞米；在质量轴，它是 1.673×10⁻²⁷ 千克的核子；在时间轴，早期宇宙的核合成决定了氢与氦的丰度；在温度轴，恒星核心的高温让质子聚变。把“质子大小”和“质子质量”分开，才不会被 1 飞米这个参考长度误导。[1][3]

## 质子与中子的口径

本条标题写“质子与中子”，但正文主读数是质子质量；中子质量是另一个独立读数，两者只差约 0.14%。把这对核子放在一起，是为了说明 QCD 能标给出的共同质量尺度，而不是把两个粒子当成同一种东西。引用时要确认说的是质子、中子，还是氘核、氦核这类束缚系统。[1][S1]

## 延伸核对

补充的来源 [6]（OpenStax / Rice University） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
