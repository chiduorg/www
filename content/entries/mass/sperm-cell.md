---
id: mass.sperm-cell
title: 人类精子细胞：2.0×10⁻¹⁴ kg，大部分质量是水
summary: >-
  单个成熟人类精子细胞的湿重均值约 2.0×10⁻¹⁴ kg（20 pg），干重约为湿重的 20–30%。它由头部与鞭毛组成，单倍体基因组 DNA 只占约
  3.3 pg，其余主要是水与蛋白质。
dimension: mass
category: 生殖细胞
displayValue: 2.0×10⁻¹⁴ kg
quantity:
  value: 2.e-14
  unit: kg
  measure: 单个成熟人类精子细胞湿重均值；由头部与鞭毛体积及约 1.1 g/cm³ 的密度估算，样本离散约 ±30%
  approximate: true
grade: B
related:
  - mass.egg-cell
  - mass.human-cell
  - space.cell
  - time.first-life
  - elements.h
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
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: eLife
    url: 'https://elifesciences.org/'
    publisher: eLife Sciences Publications
    accessed: '2026-11-09'
tags:
  - 质量
  - 精子
  - 生殖细胞
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个成熟人类精子细胞湿重均值；由头部与鞭毛体积及约 1.1 g/cm³ 的密度估算，样本离散约 ±30%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B5 细胞 · 2.0×10⁻¹⁴ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B5
  bandLabel: 细胞
  log10: -13.699
  position: 28.28
  color: '#b48cff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

人类精子细胞是高度特化的生殖细胞，由头部、中段和鞭毛组成。一个成熟精子的湿重均值约为 2.0×10⁻¹⁴ kg，即 20 皮克。[1] 这个读数指整个细胞，包括顶体、细胞核、线粒体鞘和整条鞭毛，而不是只称头部。

## 口径与不确定度

湿润状态下的精子约含四分之三的水，干重通常只有湿重的 20–30%。[2] 单倍体基因组的 DNA 质量约为 3.3 pg，折合 3.3×10⁻¹⁵ kg，只占整个精子湿重的六分之一左右；其余干物质主要是核蛋白、膜脂与鞭毛的细胞骨架。不同个体、不同精液样本的精子尺寸差异明显，正常形态的比例也不高，因此条目取 ±30% 的区间，只给均值，不给“精确到小数后两位”的假精度。

## 怎么测出来的

精子的质量很难直接称量。常用方法是用显微成像测出头部长、宽与鞭毛长度，按椭球加细圆柱做几何估算，再乘以接近水的密度；也有研究用库尔特计数器或微流控阻抗法测单个精子的体积分布。[1] 定量相位显微术可以测干质量，但需要先知道折射率增量。[3] 这些手段都依赖模型与样本均值，所以只能标为估算。

## 量级位置

2.0×10⁻¹⁴ kg 位于 B5 带中段，比大肠杆菌重约二十倍，比红细胞轻约五倍。它与卵细胞相差约四万五千倍，这个巨大的不对称正是生殖生物学里“卵子提供细胞质、精子几乎只提供基因组”的物质基础。

## 怎么继续走

想看与之配对的巨大细胞，去 mass.egg-cell；想看普通人体细胞的量级，去 mass.human-cell；想看细胞在空间轴上的尺度，去 space.cell。质量与尺寸不能互推，精子很长，但质量并不由长度决定。
