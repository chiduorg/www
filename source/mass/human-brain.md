---
id: mass.human-brain
title: 成人脑：1.4 kg，湿重均值
summary: 成人脑约 1.4 kg，按成年个体均值、湿重计，指摘除后的全脑，不含颅骨、硬脑膜与脑脊液。成年男女均值略有差异，个体分布使不确定度约 ±10%。
dimension: mass
category: 生命与人体
displayValue: 1.4 kg
quantity:
  value: 1.4
  unit: kg
  measure: 成年个体全脑湿重均值；摘除后称重，不含颅骨、硬脑膜与脑脊液，不确定度约 ±10%
  approximate: true
grade: B
related:
  - mass.human-heart
  - mass.human-liver
  - mass.neuron
  - mass.adult-human
  - space.neuron
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
  - title: NCBI Bookshelf
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: BioNumbers — The Database of Useful Biological Numbers
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: "World Health Organization"
    url: "https://www.who.int/"
    publisher: "World Health Organization"
    accessed: '2026-11-24'
  - title: "Cells of the nervous system (Chapter 2 slides)"
    url: "https://labs.la.utexas.edu/gonzalez-lima/files/2016/03/Chapter-2-slides-2.pdf"
    publisher: "University of Texas at Austin"
    accessed: '2026-11-24'
tags:
  - 质量
  - 脑
  - 器官
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 成年个体全脑湿重均值；摘除后称重，不含颅骨、硬脑膜与脑脊液，不确定度约 ±10%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 1.4 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: 0.146
  position: 43.17
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
titleEn: Human brain
---
## 这个读数是什么

成人脑的质量约为 1.4 kg，按成年个体均值、湿重计。这个读数指摘除后的全脑，包含大脑、小脑与脑干，不含颅骨、硬脑膜与脑脊液。[1] 脑是代谢最旺盛的器官之一，但它的质量并不随思考量变化。

## 口径与不确定度

湿重是离体称重的默认口径；含血与不含血的差别在这里同样存在，脑组织含水量高，摘除后表面血液与脑室内的脑脊液是否吸净，会让读数差出几十克。硬脑膜剥不剥也是口径的一部分。条目取 ±10%，因为成年脑质量的个体差异相对小：成年男性多在 1.3 至 1.4 kg，成年女性多在 1.2 至 1.3 kg，随年龄增长缓慢下降。[2] 这个 ±10% 是群体分布，不是称量误差，所以正文不写小数点后两位。

## 怎么测出来的

尸检时摘除全脑、称重，是最直接的方法，历史上有大量按年龄与性别分层的统计。活体侧用 MRI 做颅内分割，得到脑体积后乘以约 1.04 g/cm³ 的密度换算，或者用专门的脑实质分割算法直接估计体积。[3] 影像法难以把脑沟里的脑脊液完全排除，通常会高估；尸检法则受固定处理与取材完整性影响，两者相差几个百分点属于正常。

## 量级位置

1.4 kg 与肝脏 1.5 kg 同处 B7 带，约为成人整体 70 kg 的百分之二。[1] 它比心脏 0.31 kg 重约四倍半，比单个神经元 1×10⁻¹² kg 重约 10¹² 倍。脑约含八百六十亿个神经元，但神经元数量与脑质量没有简单比例：大象的脑更重，小脑的比例也更高。

## 脑质量与智力没有简单比例

成人脑约 1.4 千克，个体差异不大；智力更多取决于网络、髓鞘、突触与经验，而不是单纯质量。大象脑更重，但其神经元数量与组织方式不同。把脑质量当成智力指标，会忽略结构与功能。[1][S2]

脑质量还随年龄变化：新生儿约 0.35 千克，青春期接近成人，老年缓慢下降；阿尔茨海默病等神经退行性疾病会进一步减少脑实质。1.4 千克是成年均值，不是终身常数。

脑质量还可以按体积估算：成人脑体积约 1,200–1,500 立方厘米，乘 1.04 g/cm³ 得到约 1.3–1.5 千克；MRI 分割与尸检称重可以互相校验。

## 怎么继续走

想看质量相近的内脏，去 mass.human-liver；想看脑的供血泵，去 mass.human-heart；想从整体下到细胞层，去 mass.neuron 与 space.neuron，再回到 mass.adult-human 看这些器官如何组成一个人。

## 脑质量与智力没有简单比例

成人脑约 1.4 千克，个体差异不大；智力更多取决于网络、髓鞘、突触与经验，而不是单纯质量。[1] 大象脑更重，但其神经元数量与组织方式不同。把脑质量当成智力指标，会忽略结构与功能。

## 五轴对照

在质量轴，脑约 1.4 千克；在空间轴，它位于颅腔内；在时间轴，脑在发育与衰老中改变；在温度轴，脑温随核心体温维持。质量、结构与功能不是同一个量。[1][3]

## 读数的口径与换算

本条采用的量是 1.4 kg，口径是 成年个体全脑湿重均值；摘除后称重，不含颅骨、硬脑膜与脑脊液，不确定度约 ±10%。质量是广延量，读数依赖湿重/干重、含血/不含血、整备/满载等口径；样本与测量条件必须一起引用。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（World Health Organization）、[5]（University of Texas at Austin） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
