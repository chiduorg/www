---
id: mass.exosome
title: 外泌体：2.0×10⁻¹⁹ kg，细胞外囊泡的中位颗粒
summary: >-
  外泌体直径约 30–150 nm，单个颗粒湿重均值约 2.0×10⁻¹⁹ kg，对应约 70 nm
  的等效球。粒径跨五倍，质量按体积三次方缩放，同批样品可差两个量级以上。
dimension: mass
category: 生命与人体
displayValue: 2.0×10⁻¹⁹ kg
quantity:
  value: 2.e-19
  unit: kg
  measure: 单个外泌体湿重均值；湿重、密度按 1.1 g/cm³ 估算，取 30–150 nm 粒径分布的对数中位径约 70 nm，不确定度约 ±40%
  approximate: true
grade: B
related:
  - mass.synaptic-vesicle
  - mass.influenza-virion
  - mass.bacteriophage-t4
  - space.cell
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
  - title: 'BioNumbers: The Database of Key Numbers in Molecular and Cell Biology'
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
  - title: Molecular Biology of the Cell（NCBI Bookshelf）
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: eLife
    url: 'https://elifesciences.org/'
    publisher: eLife Sciences Publications
    accessed: '2026-11-09'
tags:
  - 质量
  - 细胞器
  - 外泌体
  - 细胞外囊泡
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个外泌体湿重均值；湿重、密度按 1.1 g/cm³ 估算，取 30–150 nm 粒径分布的对数中位径约 70 nm，不确定度约 ±40%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B4 病毒与细胞器 · 2.0×10⁻¹⁹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B4
  bandLabel: 病毒与细胞器
  log10: -18.699
  position: 22.9
  color: '#b7a6ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Exosome
---
## 这个读数是什么

外泌体是细胞分泌的膜性小囊泡，直径约 30–150 nm，腔内携带蛋白、脂质与 RNA，表面带有一层膜蛋白。单个颗粒的湿重均值取 2.0×10⁻¹⁹ kg，对应直径约 70 nm 的等效球。它是“细胞外囊泡”家族里较小的一类，不是细胞碎片，也不是人工脂质体。[1]

## 口径与不确定度

这是单个外泌体的湿重均值，不是一次分离产物的总质量，也不是外泌体群体的平均干重。粒径分布跨五倍，而质量按体积的三次方缩放，所以同一批样品里最小与最大的颗粒可以差两个量级以上。按 1.1 g/cm³ 的湿密度估算，取对数中位径 70 nm，给 ±40% 的不确定度，只保留两位有效数字，不写成精确到小数点后两位的假精度。[2]

## 怎么测出来的

外泌体质量没有直接天平，靠三条独立证据拼出：纳米颗粒跟踪分析或冷冻电镜量粒径分布；蛋白与脂质定量给出干重；密度梯度离心给出浮力密度。把粒径中位数代入球体积，乘 1.1 g/cm³ 的湿密度，得到 10⁻¹⁹ kg 量级。这是“粒径加密度”的估算，不能把粒径当作质量本身。[1][2]

## 量级位置

2.0×10⁻¹⁹ kg 与 T4 噬菌体几乎同带，比突触囊泡重约七倍，比溶酶体轻两个量级。它说明“细胞外囊泡”并不等于小细胞：一个外泌体只相当于一个细胞的千万分之一量级，却仍能携带可被检测到的核酸与蛋白货物。

## 怎么继续走

想看更小的突触囊泡，去 mass.synaptic-vesicle；想看与它尺寸重叠的包膜病毒，去 mass.influenza-virion；想看分泌它的细胞与对照的噬菌体，去 space.cell 与 mass.bacteriophage-t4。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 2×10⁻¹⁹ 千克，换算后是 2×10⁻¹³ 微克；约为一个 DNA 分子（1×10⁻¹⁸ 千克）的 0.2 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻¹⁹ 量级附近。

读图时先看量级，再看倍数：10⁻¹⁹ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
