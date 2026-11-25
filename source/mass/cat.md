---
id: mass.cat
title: 家猫：4.5 kg，成年家猫湿重均值
summary: 成年家猫的整体质量约 4.5 kg，按活体体重（整体湿重）计。品种与体况差异很大，暹罗约 3–4 kg、缅因可到 6–8 kg，不确定度约 ±30%。
dimension: mass
category: 自然与生物
displayValue: 4.5 kg
quantity:
  value: 4.5
  unit: kg
  measure: 成年家猫整体湿重（活体体重）均值；不含品种限定，不确定度约 ±30%
  approximate: true
grade: B
related:
  - mass.dog
  - mass.newborn
  - mass.adult-human
  - space.cat
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
  - 家猫
  - 哺乳动物
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 成年家猫整体湿重（活体体重）均值；不含品种限定，不确定度约 ±30%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 4.5 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: 0.653
  position: 43.71
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
titleEn: Domestic cat
---
## 这个读数是什么

家猫的质量约为 4.5 kg，按成年家猫均值、湿重（即活体体重）计。这个读数指一只健康成年家猫的整体质量，包含骨骼、肌肉、内脏、体脂与消化道内容物，不指某个品种的赛级个体。[1] 猫是质量轴 B7 带里最典型的“小型哺乳动物”锚点。

## 口径与不确定度

整只动物的湿重就是活体体重，不需要像离体器官那样区分含血与不含血，但要说清是否空腹：胃内容物与膀胱尿液可以让同一只猫在一天内相差几百克。条目取 ±30%，因为品种与体况差异很大：暹罗猫成年常在 3 至 4 kg，缅因猫可以到 6 至 8 kg，室内绝育猫容易超重。[2] 这里给的是家猫群体的均值，不是“精确到小数点后两位”的单只读数。

## 怎么测出来的

最常用的方法是兽医诊所的电子平台秤，让猫站在秤盘上直接读数；家庭场景则常用“人抱猫称重再减去自身体重”的差减法，误差可达几百克。群体均值来自宠物医院的病历样本、品种俱乐部的体况统计与救助机构的入站称量。[3] 这些样本都有选择偏差：就诊的猫偏胖或偏瘦，救助的猫常偏瘦，所以均值只能取到一位小数。

## 量级位置

4.5 kg 约为成人 70 kg 的十五分之一，比新生儿 3.3 kg 重约三分之一，比高尔夫球 4.593×10⁻² kg 重约一百倍。[1] 它与一只小型犬、一只大型家兔同处几千克的量级。同样是哺乳动物，猫与狗的质量可以差出十倍，说明“类别”不能替代“个体”。

## 怎么继续走

想看同量级的另一种家养动物，去 mass.dog；想回到人类自身的出生与成年两个锚点，去 mass.newborn 与 mass.adult-human。质量轴在这里第一次出现“活体整体”而不是“离体器官”的口径，继续向上就是人的尺度。
