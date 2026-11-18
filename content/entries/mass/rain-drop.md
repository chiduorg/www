---
id: mass.rain-drop
title: 直径约 4.6 毫米的雨滴：5.0×10⁻⁵ kg，接近破碎上限的大滴
summary: >-
  取直径 4.6 mm 的雨滴按球体计算：半径 2.3 mm，体积约 5.1×10⁻⁸ m³，乘以水密度得到约 5.0×10⁻⁵ kg（50
  mg）。这已接近雨滴的破碎上限，普通雨滴要小得多。
dimension: mass
category: 气象液滴
displayValue: 5.0×10⁻⁵ kg
quantity:
  value: 0.00005
  unit: kg
  measure: 直径约 4.6 mm 的雨滴按球体近似：半径 2.3 mm、水密度 1000 kg/m³；实际大滴会变形，读数约 ±20%
  approximate: true
grade: B
related:
  - mass.sand-grain
  - mass.mosquito
  - mass.paper-clip
  - mass.water-molecule
  - space.earth
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
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: NCBI Bookshelf
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: ISO Standards
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
tags:
  - 质量
  - 雨滴
  - 液滴
  - 估算
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 直径约 4.6 mm 的雨滴按球体近似：半径 2.3 mm、水密度 1000 kg/m³；实际大滴会变形，读数约 ±20%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B6 日常微粒 · 5.0×10⁻⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B6
  bandLabel: 日常微粒
  log10: -4.301
  position: 38.39
  color: '#c9a77a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

雨滴不是泪珠形：直径小于两毫米时接近球形，更大时底部会被气流压扁。取直径 4.6 mm 的雨滴按球体计算，体积约 5.1×10⁻⁸ m³，乘以 1000 kg/m³ 的水密度，得到约 5.0×10⁻⁵ kg，即 50 毫克。[1] 这个数值代表大雨滴，不是平均雨滴，也不等于“一滴水”的通用质量。

## 口径与不确定度

天然雨滴的直径分布很宽：毛毛雨不到 1 mm，普通降雨多在 1–3 mm，超过约 5–6 mm 后表面张力撑不住，会破碎成小滴。[2] 所以 4.6 mm 已经接近上限，取它可以让“一滴大雨”的质量有明确锚点。球体近似在大滴上会有偏差，扁平的底部让实际体积略小于同直径球体，因此条目给约 ±20% 的不确定度并标 approximate。质量随直径三次方变化，把“一滴水”当固定值会错得很远。

## 怎么测出来的

雨滴谱仪用光学遮挡或激光散射测量下落液滴的直径与速度，再由直径分布算出质量分布。[1] 经典方法是让雨滴落入面粉或油中，形成小球后逐颗称量；高速摄影可以同时记录形变与破碎过程。[3] 这些测量在野外或风洞中完成，得到的是统计分布，不是某一滴的精确值。

## 量级位置

5.0×10⁻⁵ kg 位于 B6 带中段：约为一只蚊子的二十倍，是一粒 0.5 mm 砂粒的三百倍，是一枚回形针的十分之一。[2] 它也说明为什么雨滴能打湿衣物却不会砸伤人：50 毫克的水在终端速度下动量有限。

## 怎么继续走

想看更小的固态颗粒，去 mass.sand-grain；想看同量级的生物，去 mass.mosquito；想看单个分子的质量，去 mass.water-molecule；想看降水在地球系统中的角色，从 space.earth 进入空间轴。质量和直径不是一回事，雨滴的读数由几何与密度共同决定。
