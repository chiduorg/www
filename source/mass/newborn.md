---
id: mass.newborn
title: 新生儿：3.3 kg，出生体重均值
summary: >-
  全球足月新生儿的出生体重均值约 3.3 kg，按出生后即刻、脱衣称得的整体湿重计。低于 2.5 kg 为低出生体重，高于 4.0 kg 为巨大儿，不确定度约
  ±15%。
dimension: mass
category: 生命与人体
displayValue: 3.3 kg
quantity:
  value: 3.3
  unit: kg
  measure: 全球足月新生儿出生体重均值；出生后即刻脱衣称重，整体湿重，不确定度约 ±15%
  approximate: true
grade: B
related:
  - mass.adult-human
  - mass.cat
  - mass.dog
  - mass.human-cell
  - space.human
  - temperature.human-body-temperature
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
  - 新生儿
  - 出生体重
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 全球足月新生儿出生体重均值；出生后即刻脱衣称重，整体湿重，不确定度约 ±15%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 3.3 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: 0.519
  position: 43.57
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
titleEn: Newborn baby
---
## 这个读数是什么

新生儿的质量取出生体重均值 3.3 kg，按全球足月新生儿的出生体重均值、湿重计。这个读数指婴儿出生后即刻、擦干、脱去衣物称得的整体质量，包含体液、胎脂与胎便，不含胎盘与脐带。[1] 它是质量轴上少数以“人群均值”而非“单个对象”定义的读数。

## 口径与不确定度

出生体重是产科的标准字段，测量时点必须写清：出生后立即称，还是生后一小时、洗完澡再称。新生儿在生后头几天会出现百分之五到十的生理性体重下降，所以“出生体重”与“入院体重”不是一回事。条目取 ±15%，覆盖足月儿的常见范围：低于 2.5 kg 为低出生体重，高于 4.0 kg 为巨大儿，两者都属于需要医学关注的分支。[2] 这里写均值与区间，不写小数点后两位的假精度。

## 怎么测出来的

产房里用婴儿电子秤称量，读数精确到十克，称前校准、垫布去皮，婴儿裸体。群体均值来自各国出生登记与 WHO 的儿童生长参考数据汇总，全球足月儿的均值大致在 3.3 kg 附近，区域差异明显：南亚部分人群偏低，北欧偏高。[3] 这些统计的分母是活产儿，早产儿与多胎会拉低均值，所以引用时必须说明人群。

## 量级位置

3.3 kg 落在 B7 带下段，约为成人 70 kg 的二十一分之一，比家猫 4.5 kg 轻，比高尔夫球 4.593×10⁻² kg 重约七十二倍。[1] 它和一只小型犬、一台笔记本电脑同处几千克的量级。出生体重是质量轴上少见的、与临床阈值直接挂钩的读数。

## 怎么继续走

想看同一个人长大后的读数，去 mass.adult-human；想看同量级的其他哺乳动物，去 mass.cat 与 mass.dog；想从整体下到细胞层，可以从 mass.human-cell 进入，看一个 3.3 kg 的婴儿由多少个细胞组成。
