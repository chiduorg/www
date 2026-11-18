---
id: mass.neuron
title: 人类神经元：1.0×10⁻¹² kg，一个锥体细胞的湿重均值估计
summary: >-
  以大脑皮层锥体细胞为代表，一个人类神经元的湿重均值估计约 1.0×10⁻¹² kg（1
  ng），不确定度可达一个量级。胞体与树突、轴突的体积很难完整测量，条目只能给量级，不给精确值。
dimension: mass
category: 神经细胞
displayValue: 1.0×10⁻¹² kg
quantity:
  value: 1.e-12
  unit: kg
  measure: 以皮层锥体细胞为代表的单个神经元湿重均值估计；由胞体与突起的三维重建体积及干湿比换算，不确定度约一个量级
  approximate: true
grade: B
related:
  - space.neuron
  - mass.human-cell
  - mass.red-blood-cell
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
  - title: BioNumbers — The Database of Useful Biological Numbers
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
  - title: NCBI Bookshelf
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
tags:
  - 质量
  - 神经元
  - 脑
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 以皮层锥体细胞为代表的单个神经元湿重均值估计；由胞体与突起的三维重建体积及干湿比换算，不确定度约一个量级
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B5 细胞 · 1.0×10⁻¹² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B5
  bandLabel: 细胞
  log10: -12
  position: 30.11
  color: '#b48cff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

神经元是形态最不规则的细胞之一：一个胞体伸出多根树突和一根细长的轴突，长度可以从几十微米到一米。本条取大脑皮层的锥体细胞作代表，单个神经元的湿重均值估计约为 1.0×10⁻¹² kg，即 1 纳克。[1] 这是整个神经元的质量，包含胞体、树突树、轴突与突触末梢。

## 口径与不确定度

这个数的核心困难不是称重，而是“一个神经元到哪里算结束”。胞体直径约二十微米，单看胞体就有几个纳克；但树突和轴突极细，体积难以完整重建，不同神经元类型的差异又极大——小脑浦肯野细胞比皮层锥体细胞大得多。干重同样只占湿重的 20–30%，其余是水。[2] 因此本条只给量级，不确定度约一个量级，不写“精确到小数点后两位”。

## 怎么测出来的

常用路径是先把单个神经元染色并在显微镜下做三维重建，量出胞体与突起的体积，再乘以接近水的密度；也可以用连续切片电子显微镜重建整条轴突。[1] 定量相位显微术能测培养神经元的干质量，但活体人脑神经元无法直接上机。[3] 由于这些方法都依赖重建完整性，不同研究给出的值可以差十倍，所以只能标为估算。

## 量级位置

1.0×10⁻¹² kg 与 HeLa 细胞同处 B5 带中段，但两者的构成完全不同：HeLa 细胞的质量集中在胞体，神经元的质量有相当部分在细长的突起里。它比红细胞重约十倍，比卵细胞轻约九百倍。人脑约 860 亿个神经元，若每个按 1 ng 计，仅神经元本体就有约 86 克。

## 怎么继续走

想看神经元在空间轴上的形态与尺度，去 space.neuron；想看普通人体细胞的量级，去 mass.human-cell；想比较没有突起的细胞，去 mass.red-blood-cell。质量不能由长度直接推算，一米长的轴突可能只占极小一部分质量。
