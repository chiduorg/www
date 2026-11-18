---
id: space.steel-grain
title: 钢晶粒直径
titleEn: Steel grain diameter
dimension: length
category: 原子与分子
summary: >-
  钢是多晶体，本页量的是工程钢中一个晶粒的横向直径，取 10 微米作为典型值；
  它不是晶胞，也不是晶界厚度或材料强度。
quantity:
  value: 1e-5
  unit: m
  measure: 晶粒直径
  approximate: true
displayValue: 约 10 μm（典型工程钢晶粒）
related:
  - space.crystal-lattice
  - space.diamond-unit-cell
  - space.hair
  - space.cell
reviewStatus: reviewed
sources:
  - title: E112 Standard Test Methods for Determining Average Grain Size
    url: 'https://www.astm.org/e0112-10.html'
    publisher: ASTM International
    accessed: '2026-11-07'
  - title: ASTM Grain Size Chart for Tool Steel
    url: 'https://aobosteel.com/astm-grain-size-chart-tool-steel/'
    publisher: Aobo Steel
    accessed: '2026-11-07'
conditions: >-
  以单相或近似单相的工程钢为对象，取金相截面上的平均晶粒直径约 10 微米；
  冷加工、热处理和合金成分会改变晶粒大小，本值不适用于所有钢种。
uncertainty: >-
  工程钢晶粒常见几微米到几十微米，10 微米只是圆整代表值；ASTM 晶粒号 G10 约为 11 微米，
  与 10 微米相差约一成，故标记为近似值。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: grain
  scene: space.object
  caption: 钢晶粒 · 约 10 μm 直径参照
  note: 晶粒多边形、晶界与明暗均为示意，标线表示晶粒直径，非按比例，非观测重建。
  color: '#8a9ba8'
  variant: steel
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 金属组织
---
## 它是什么

钢是多晶体：许多取向不同的晶粒由晶界拼合而成。本页量的是晶粒的横向直径，不是晶胞，也不是晶界厚度。工程钢常见晶粒在几微米到几十微米，本页取 10 微米作为典型值，即 1×10⁻⁵ 米。

## 怎样知道

晶粒尺寸用金相截面统计。ASTM E112 规定比较法、面积法和截线法，测的是二维截面上的平均晶粒或平均截距。[1] 该标准用晶粒号 G 表达结果，晶粒号每增加 1，单位面积晶粒数约翻倍。按常用换算表，G10 对应平均直径约 11 微米，G8 约 22 微米，G12 约 5.6 微米。[2] 统计时通常取至少三个视场，每个视场覆盖足够多晶粒，以减小截面随机性的影响。[1]

## 数值与口径

10 微米 = 0.01 毫米 = 10 000 纳米。它落在 G9–G11 附近：G10 的 11 微米与本页取值只差约一成，因此“10 微米”是圆整代表值，而不是某一炉钢的精确测量。[1][2] 同一块钢的纵向与横向截面、表层与心部都可能有差别，统计时必须说明截面和放大倍数。若按面积法，平均晶粒面积约 100 平方微米，反推等效圆直径约 11 微米，与截线法结果接近。[1][2]

## 常见误解

第一，把晶粒当成晶胞；晶胞只有零点几纳米，晶粒包含成千上万个晶胞。第二，把晶粒尺寸当成晶界厚度；晶界通常只有几个原子层厚，远小于晶粒。第三，以为晶粒越细强度必然越高；细化通常提高强度，但 10 微米是尺寸，不是强度数值。[1] 此外，晶粒号越大表示晶粒越细，而不是越粗。[2]

## 与其他尺度的关系

10 微米约为头发丝直径 100 微米的 1/10，约为人体细胞 20 微米的一半，也约为红细胞 7.5 微米的 1.3 倍。沿原子方向看，它相当于约 5 万个 0.2 纳米的晶格间距。与 A4 纸 297 毫米相比，则小约三万倍。把它与晶格间距、金刚石晶胞并置，能直观看到“原子—晶粒—零件”之间的层级。若把 10 微米晶粒与 10 毫米厚的钢板相比，厚度方向约可容纳 1000 个晶粒。
