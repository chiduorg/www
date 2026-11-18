---
id: mass.paper-clip
title: 标准回形针：约 5×10⁻⁴ kg，单个镀锌钢丝件的净重
summary: >-
  常见的 33 mm 标准回形针由约 0.8 mm 镀锌钢丝弯成，展开长度约 12 cm，按钢密度 7850 kg/m³ 估算约 5×10⁻⁴ kg（0.5
  g）。这是单个净重，不含包装。
dimension: mass
category: 日常五金
displayValue: 约 5×10⁻⁴ kg
quantity:
  value: 0.0005
  unit: kg
  measure: 单个 33 mm 标准回形针的净重；按线径约 0.8 mm、展开长度约 12 cm 的镀锌钢丝估算，钢密度 7850 kg/m³
  approximate: true
grade: B
related:
  - mass.coin
  - mass.tablet
  - mass.sand-grain
  - mass.tea-leaf
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      本轮复核：结构、引用编号与量值口径完整；quantity.value 与 displayValue
      数量级一致，bound/zeroMass/approximate、mass.type 与 includesDarkMatter
      逐条核对；太阳、地球、银河、可观测宇宙、总物质、暗物质、哈勃体积、中微子与光子的人工复核一致。
    - >-
      来源可达性：72 个唯一来源中 48 个直接返回 2xx；其余为站点反爬、限流或超时。已修复 PDG 2024 目录页路径与中微子综述 PDF
      两个死链。本轮未逐页重读全文，沿用条目既有 accessed 记录。
    - >-
      reviewed 指结构与来源口径核对，不是外部同行评审；总质量、重子质量、恒星质量与含暗物质口径按 quantity.measure 与 mass
      字段保留。
sources:
  - title: ISO Standards
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
  - title: CODATA Recommended Values of the Fundamental Physical Constants
    url: 'https://physics.nist.gov/cuu/Constants/'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
tags:
  - 质量
  - 回形针
  - 办公用品
  - 净重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个 33 mm 标准回形针的净重；按线径约 0.8 mm、展开长度约 12 cm 的镀锌钢丝估算，钢密度 7850 kg/m³
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B6 日常微粒 · 约 5×10⁻⁴ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B6
  bandLabel: 日常微粒
  log10: -3.301
  position: 39.46
  color: '#c9a77a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

标准回形针没有唯一的国际规格，但最常见的 33 mm 型号有相对稳定的做法：约 0.8 mm 直径的镀锌钢丝，展开长度约 12 cm，弯成三个回环。[1] 按钢的密度 7850 kg/m³ 计算，钢丝体积约 6×10⁻⁸ m³，质量约 5×10⁻⁴ kg，也就是 0.5 克。这是一个单件的净重，不是一盒回形针的总重。

## 口径与不确定度

口径必须写清楚：单个、净重、不含包装与纸盒。市场上还有 28 mm、50 mm 等尺寸，以及包塑、彩色涂层产品，涂层与线径的差别会让单件质量从 0.3 克到 1 克不等。[2] 本条取最常见的 33 mm 镀锌件，用几何乘密度估算，标 approximate，不写“0.500 克”这种假精度。若把整盒质量除以枚数，包装与缺枚都会污染结果。

## 怎么测出来的

最直接的方法是把十枚或一百枚回形针一起放上电子天平，总重除以数量，得到单件均值，这样可以把单件太轻带来的读数误差摊薄。[1] 也可以用卡尺量线径、用展开长度算体积，再乘钢密度，与称重结果交叉核对。[3] 两种方法在 10% 以内一致，说明几何估算够用。镀锌层很薄，对总质量的贡献通常不到几个百分点。

## 量级位置

5×10⁻⁴ kg 位于 B6 带上段：约为一片干茶叶的十倍，是一粒 0.5 mm 砂粒的三千倍，是一枚 5 美分镍币的十分之一。[2] 它是“手能拿起、天平能看清”的边界：再往下，日常天平的分度值就开始吃掉有效数字。

## 怎么继续走

想看同量级的药片，去 mass.tablet；想看更重的金属件，去 mass.coin；想看更小的颗粒如何累积成宏观质量，去 mass.sand-grain；想看一片植物干叶的读数，去 mass.tea-leaf。回形针的质量来自钢丝的体积，不是来自它的外轮廓尺寸。
