---
id: mass.cardiac-muscle-cell
title: 心肌细胞：2.0×10⁻¹¹ kg，约 20 纳克
summary: >-
  单个心室心肌细胞的湿重均值约 2.0×10⁻¹¹ kg（20 ng），干重约为湿重的
  20–30%。细胞呈长柱状，长度约一百微米，由体积与密度估算，肥大与个体差异使不确定度达 ±50%。
dimension: mass
category: 肌细胞
displayValue: 2.0×10⁻¹¹ kg
quantity:
  value: 2.e-11
  unit: kg
  measure: 单个人类心室心肌细胞湿重均值；由约 20–30 pL 的细胞体积与约 1.06 g/cm³ 的密度估算，不确定度约 ±50%
  approximate: true
grade: B
related:
  - mass.human-cell
  - mass.neuron
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
  - title: PNAS
    url: 'https://www.pnas.org/'
    publisher: National Academy of Sciences
    accessed: '2026-11-09'
  - title: eLife
    url: 'https://elifesciences.org/'
    publisher: eLife Sciences Publications
    accessed: '2026-11-09'
tags:
  - 质量
  - 心肌细胞
  - 肌细胞
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个人类心室心肌细胞湿重均值；由约 20–30 pL 的细胞体积与约 1.06 g/cm³ 的密度估算，不确定度约 ±50%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B5 细胞 · 2.0×10⁻¹¹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B5
  bandLabel: 细胞
  log10: -10.699
  position: 31.51
  color: '#b48cff'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

心肌细胞是心脏收缩的动力单元。一个人类心室肌细胞呈长柱状，长约一百微米、粗约二十微米，湿重均值约为 2.0×10⁻¹¹ kg，即 20 纳克。[1] 这个读数指单个细胞，包含肌原纤维、线粒体、细胞核与水分，心肌组织中的胶原与血管不计入。

## 口径与不确定度

这里用的是湿重均值。心肌细胞干重通常只占湿重的 20–30%，其余是水；但它也是人体内线粒体密度最高的细胞之一，干物质里蛋白质与膜的比例很高。[2] 心肌细胞常为双核，体积随负荷与疾病状态显著变化，健康成人与心力衰竭患者可以差出数倍。条目取 ±50%，并说明它代表健康成年个体的心室肌细胞，而不是某个具体病人的测量值。

## 怎么测出来的

离体心肌细胞可通过酶解分离后，用库尔特计数器或流式细胞术测体积分布，再乘以约 1.06 g/cm³ 的密度得到质量。[1] 也可以在共聚焦显微镜下测量细胞的长度、宽度与厚度，按圆柱或椭球做几何估算；定量相位显微术能直接给出干质量，再按干湿比换算。[3] 完整心脏的组织学切片也能反推平均细胞体积，但会引入收缩状态与固定处理的偏差。

## 量级位置

2.0×10⁻¹¹ kg 位于 B5 带上段，比红细胞重约二百倍，比 HeLa 细胞重约十倍，比卵细胞轻约四十五倍。一个成年人的心脏约三百克，心肌细胞占其质量的大部分；按 20 ng 一个估算，数量级在十的九到十次方个，与组织学计数相符。

## 怎么继续走

想看同一量级的其他人体细胞，去 mass.human-cell；想看形状更不规则的神经元，去 mass.neuron；想看最小的血细胞，去 mass.red-blood-cell。心肌细胞比红细胞重两个数量级，但两者在空间轴上的长度只差一个数量级，质量与尺寸不能互推。
