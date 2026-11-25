---
id: mass.dog
title: 拉布拉多犬：30 kg，成年个体湿重均值
summary: 拉布拉多犬的成年个体质量约 30 kg，按活体体重（整体湿重）计。公犬多在 29–36 kg、母犬多在 25–32 kg，体况差异使不确定度约 ±20%。
dimension: mass
category: 自然与生物
displayValue: 30 kg
quantity:
  value: 30
  unit: kg
  measure: 成年拉布拉多犬整体湿重（活体体重）均值；品种中心值，不确定度约 ±20%
  approximate: true
grade: B
related:
  - mass.cat
  - mass.adult-human
  - mass.motorcycle
  - space.dog
  - space.human
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
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
  - 犬
  - 哺乳动物
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 成年拉布拉多犬整体湿重（活体体重）均值；品种中心值，不确定度约 ±20%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 30 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: 1.477
  position: 44.6
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
titleEn: Labrador Retriever
---
## 这个读数是什么

拉布拉多犬的质量取 30 kg，按成年个体均值、湿重（即活体体重）计。拉布拉多是全球最常见的家犬品种之一，成年公犬通常在 29 至 36 kg，母犬通常在 25 至 32 kg，30 kg 是这个品种的合理中心值。[1] 这条读数明确指向一个可命名的品种，而不是“一条典型的狗”。

## 口径与不确定度

活体体重就是整只动物的湿重，但要说明称量条件：是否空腹、是否刚饮水、是否佩戴项圈与牵引绳。条目取 ±20%，覆盖性别、血统与体况差异；工作犬与赛级犬偏瘦，宠物犬偏胖，兽医常用的体况评分会把“超重”定义为超过理想体重的百分之十到十五。[2] 这里不写小数点后两位，因为同一只狗在一天内的体重波动就有几百克。

## 怎么测出来的

兽医诊所的平台秤是标准工具，大型犬可以让狗四脚站立直接读数；家庭常用人抱狗差减法，误差较大。品种的均值来自犬业俱乐部的体态标准、宠物医院病历与营养研究中的样本称量。[3] 这些样本的选择偏差很明显：去看病的狗偏胖，参加比赛的狗偏瘦，所以 30 kg 只能作为品种中心值，不能当作某只狗的实际质量。

## 量级位置

30 kg 约为成人 70 kg 的百分之四十三，比家猫 4.5 kg 重约六倍半，比新生儿 3.3 kg 重约九倍。[1] 它与一台三角钢琴的 300 kg 相差十倍，与摩托车 200 kg 相差约六倍半。同样是“成年个体均值”，狗与猫的差别说明品种与体型对质量的影响远大于称量误差。

## 怎么继续走

想看同量级的家养动物，去 mass.cat；想回到人类自身的两个锚点，去 mass.newborn 与 mass.adult-human；想跳到工程物的量级，去 mass.motorcycle，看 200 kg 的整备质量比一条大型犬重多少。


## 深读一：量值口径

本条的核心量值是 30 kg，量的是成年拉布拉多犬整体湿重（活体体重）均值；品种中心值，不确定度约 ±20%。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：reference=质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。；scope=成年拉布拉多犬整体湿重（活体体重）均值；品种中心值，不确定度约 ±20%；precision=B 级；近似值/均值。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照家猫：4.5 kg，成年家猫湿重均值（4.5）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]

## 补充：怎样复核这条读数

复核时先把 30 kg 还原到条目写明的参照与条件，再做单位换算；与相邻条目比较时，只比较同一口径下的量值，不把标题里的四舍五入值当成新测量。若换算后落在两个已知锚点之间，应同时报告两个锚点与所用倍率，方便读者复算。[1][2] 本条不新增独立测量，也不改变原有来源与引用编号。
