---
id: mass.synaptic-vesicle
title: 突触囊泡：3.0×10⁻²⁰ kg，一个神经递质包裹
summary: >-
  突触囊泡直径约 40 nm，单个囊泡湿重均值约 3.0×10⁻²⁰ kg，约合 1.8×10⁷ Da。数值由粒径分布与 1.1 g/cm³
  的湿密度估算，随囊泡大小与递质装载量变化。
dimension: mass
category: 生命与人体
displayValue: 3.0×10⁻²⁰ kg
quantity:
  value: 3.e-20
  unit: kg
  measure: 单个囊泡湿重均值；湿重、密度按 1.1 g/cm³ 估算，直径约 40 nm，不确定度约 ±30%
  approximate: true
grade: B
related:
  - mass.exosome
  - space.cell
  - mass.proton
  - space.ribosome
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
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Springer Nature
    accessed: '2026-11-09'
tags:
  - 质量
  - 细胞器
  - 突触囊泡
  - 神经递质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个囊泡湿重均值；湿重、密度按 1.1 g/cm³ 估算，直径约 40 nm，不确定度约 ±30%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B4 病毒与细胞器 · 3.0×10⁻²⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B4
  bandLabel: 病毒与细胞器
  log10: -19.523
  position: 22.02
  color: '#b7a6ff'
  scaleMin: -40
  scaleMax: 53
titleEn: Synaptic vesicle
---
## 这个读数是什么

突触囊泡是神经元突触前末梢里储存神经递质的小膜泡，直径约 40 nm。单个囊泡的湿重均值取 3.0×10⁻²⁰ kg，约合 1.8×10⁷ Da。它由脂双层、腔内递质与膜蛋白组成，不是一枚固定规格的零件：囊泡大小与递质装载量都会让单颗粒质量上下浮动。[1]

## 口径与不确定度

这里说的是单个囊泡的湿重均值，不是整片突触末梢的质量，也不是去掉水分后的干重。样本常来自小鼠或大鼠脑匀浆，粒径分布通常落在 35–50 nm；按 1.1 g/cm³ 的湿密度与球体体积估算，直径每变化 10%，质量约变化 30%。因此给出 ±30% 的不确定度，只保留两位有效数字，不写成精确到小数点后两位的假精度。[2]

## 怎么测出来的

直接给单个囊泡称重做不到，常用三条独立证据拼合：电镜或冷冻电镜量出粒径分布；蔗糖密度梯度配合蛋白标志物判断纯度；脂质与膜蛋白的化学计量给出干重下限。把粒径中位数代进球体积，再乘 1.1 g/cm³ 的湿密度，就得到 3×10⁻²⁰ kg 的量级。这是估算，不是天平读数，也不能拿囊泡直径去反推一个“实测质量”。[1][2]

## 量级位置

3.0×10⁻²⁰ kg 位于 B4 带的下段，约为核糖体的十倍，比 T4 噬菌体小一个量级。它提醒我们：神经信号传递的物质基础可以轻到 10⁻²⁰ kg 级，而同一个突触里成千上万个囊泡的合计才进入 10⁻¹⁶ kg 量级。

## 怎么继续走

想看同样由膜包裹、但尺寸更大的颗粒，去 mass.exosome；想看神经元与细胞骨架的空间尺度，去 space.cell；想回到更基本的质量锚点，去 mass.proton 与 space.ribosome。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 3×10⁻²⁰ 千克，换算后是 3×10⁻¹⁴ 微克；约为一个 DNA 分子（1×10⁻¹⁸ 千克）的 0.03 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻²⁰ 量级附近。

读图时先看量级，再看倍数：10⁻²⁰ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
