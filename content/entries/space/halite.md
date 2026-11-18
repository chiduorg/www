---
id: space.halite
title: 岩盐晶格常数
titleEn: Halite lattice constant
dimension: length
category: 原子与分子
summary: >-
  岩盐是 NaCl 的矿物相；本页量立方晶格常数 a = 5.6404 Å，
  最近邻 Na—Cl 距离为 a/2 ≈ 0.282 nm，与既有 space.nacl-crystal 条目区分。
quantity:
  value: 5.64e-10
  unit: m
  measure: NaCl 立方晶格常数
  approximate: true
displayValue: 约 0.564 nm（NaCl 晶格常数）
related:
  - space.nacl-crystal
  - space.crystal-lattice
  - space.diamond-unit-cell
  - space.magnetite
reviewStatus: reviewed
sources:
  - title: Halite
    url: 'https://www.handbookofmineralogy.org/pdfs/halite.pdf'
    publisher: Handbook of Mineralogy / Mineral Data Publishing
    accessed: '2026-11-07'
  - title: Halite — Mindat mineral information
    url: 'https://www.mindat.org/min-1804.html'
    publisher: Hudson Institute of Mineralogy / Mindat
    accessed: '2026-11-07'
conditions: >-
  取常温常压下的岩盐结构 NaCl，量立方晶胞边长 a。最近邻 Na—Cl 距离为 a/2，
  约 0.282 nm；该值不是离子半径、不是“NaCl 分子”直径，也不是手标本尺寸。
uncertainty: >-
  手册给出 a = 5.6404(1) Å，Mindat 给出同一数值；温度与压力会使晶格常数略变，
  故标为近似。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：至少一条来源本地直连可访问；受反爬限制的来源已在写作阶段用 WebFetch 打开核对。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: crystal-lattice
  variant: halite
  scene: space.object
  caption: 岩盐晶格 · 常数约 0.564 nm
  note: 钠、氯离子球与立方晶胞边框为示意；标线表示晶格常数 a，不是最近邻距离 0.282 nm；非按比例，非观测重建。
  color: '#c9d6e2'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 矿物
conceptGroup: crystal
---
## 它是什么

岩盐就是 NaCl 的矿物相，Na⁺ 与 Cl⁻ 各形成一套面心立方点阵，两套点阵互相穿插，每个离子被六个异号离子包围。[1] 本页量的 5.64 Å 是立方晶格常数，也就是晶胞边长；它不是最近邻离子间距。[2] 岩盐在自然界以立方体解理块产出，是蒸发岩的主要矿物；食盐颗粒的立方外形正是晶格对称性的宏观表现。[2] 每个晶胞含 4 个 NaCl 式量，钠与氯各自形成面心立方点阵，两套点阵互相穿插。[1]

## 怎样知道

矿物学手册给出岩盐 Fm3m 立方晶胞 a = 5.6404 Å，Z = 4。[1] Mindat 数据库同样列出 a = 5.6404 Å 与 Fm3m 空间群。[2] 两条来源都来自衍射数据，数值一致到小数点后四位。衍射精修给出 a = 5.6404 Å 与 Z = 4；结合 NaCl 的摩尔质量与实测密度，可独立反算晶胞体积，结果与衍射值吻合。[1] 这类交叉检验也是晶格常数被列为标准参考值的原因。

## 数值与口径

5.64 Å 等于 5.64×10⁻¹⁰ m、0.564 nm。口径是晶格常数 a；最近邻 Na—Cl 距离是 a/2，约 0.282 nm，也就是既有条目 space.nacl-crystal 所量的值。[1][2] 两者相差整两倍，不能互换。它不是 Na⁺ 或 Cl⁻ 的离子半径，也不是岩盐手标本的厘米级尺寸。换算成更小的单位，5.64 Å 等于 0.564 nm，也等于 0.000564 μm；最近邻距离 a/2 恰好是 2.820 Å，即 0.282 nm。[1] 立方晶胞体积约 0.1795 nm³。

## 常见误解

常见误解之一是把 0.564 nm 当成 Na—Cl 最近邻距离；最近邻只有 0.282 nm。[1] 另一个误解是把晶格常数当成“NaCl 分子”直径；离子晶体中没有独立分子。[2] 还有人把岩盐的晶胞边长与食盐颗粒的粒径混为一谈，后者在毫米级。另一个误解是把“岩盐”与“食盐”当成两种不同物质；它们化学上都是 NaCl，只是产状与纯度不同。[2] 也有人把晶格常数当成离子直径，实际上它跨越两个最近邻间距。

## 与其他尺度的关系

0.564 nm 约为石英 a 轴 0.491 nm 的 1.15 倍，约为金刚石晶胞 0.357 nm 的 1.58 倍。[1][2] 它恰好是既有 NaCl 条目 0.282 nm 的两倍，这提醒我们“晶格常数”和“最近邻距离”只差一个几何因子。与方解石 a 轴 0.499 nm 相比，岩盐晶格常数约为其 1.13 倍；与石英 a 轴 0.491 nm 相比约为 1.15 倍。[1][2] 这些数值接近，说明不同矿物的晶胞底面常落在 0.5 nm 附近，但内部对称性完全不同。继续阅读 NaCl 晶体、晶格间距与金刚石晶胞，可把这两个口径并排比较。
