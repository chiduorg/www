---
id: mass.adult-human
title: 成人：70 kg，全球成年个体湿重均值
summary: 成人质量取 70 kg，按全球成年个体均值、湿重（活体体重）计。区域与性别差异明显，部分亚洲人群均值约 55–65 kg，北美偏高，不确定度约 ±20%。
dimension: mass
category: 人体
displayValue: 70 kg
quantity:
  value: 70
  unit: kg
  measure: 全球成年人整体湿重（活体体重）均值；不含衣物与随身物品，不确定度约 ±20%
  approximate: true
grade: B
related:
  - mass.newborn
  - mass.dog
  - mass.cat
  - mass.human-brain
  - space.human
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
  - title: World Health Organization
    url: 'https://www.who.int/'
    publisher: World Health Organization
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
  - 成人
  - 人体
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 全球成年人整体湿重（活体体重）均值；不含衣物与随身物品，不确定度约 ±20%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 70 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: 1.845
  position: 44.99
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

成人的质量取 70 kg，按全球成年个体均值、湿重（即活体体重）计。这个读数指一名成年人的整体质量，包含骨骼、肌肉、内脏、体脂与体液，不含衣物与随身物品。[1] 它是质量轴上最常用的换算锚点：药物剂量、能量消耗与座椅载荷都以它为参考。

## 口径与不确定度

活体体重就是整体湿重，但要写清条件：晨起空腹、排空膀胱、只穿内衣称量，读数最稳定；进食、饮水与出汗可以让同一个人在一天内波动一到两千克。条目取 ±20%，覆盖全球成年人群的分布：部分亚洲人群的均值在 55 至 65 kg，北美与欧洲的均值偏高，性别差异也很明显。[2] 这里给的是人群均值与区间，不是某个人的精确质量。

## 怎么测出来的

体重秤是最普通的测量工具，人群均值则来自各国健康调查与 WHO 的汇总数据，样本量通常以万计。[3] 这些调查用抽样加权来代表全国人口，但自报体重普遍偏低、自报身高偏高，会带来系统偏差；体脂率无法由体重单独推出，所以 70 kg 的构成在不同人身上可以完全不同。质量是标量，体成分是另一层信息。

## 量级位置

70 kg 位于 B7 带中段，是这条轴上唯一直接对应“人”的整体读数。[1] 它比新生儿 3.3 kg 重约二十一倍，比家猫 4.5 kg 重约十五倍，比拉布拉多犬 30 kg 重约两倍多，比摩托车 200 kg 轻约三分之二。器官条目里的心脏 0.31 kg、肝脏 1.5 kg、脑 1.4 kg 加起来只占它很小一部分。

## 怎么继续走

想看这个整体里的单个器官，去 mass.human-heart、mass.human-liver 与 mass.human-brain；想回到出生时的起点，去 mass.newborn；想继续向上跳到工程物，去 mass.motorcycle 与 mass.piano。这条轴的每一次跳跃都换了一个口径，读数值前先确认口径。
