---
id: mass.human-heart
title: 成人心脏：0.31 kg，湿重均值
summary: 成人心脏约 0.31 kg（310 克），按成年个体均值、湿重计，指摘除后整颗心脏。含血与灌注后称重可差 5–10%，个体与性别差异使不确定度约 ±20%。
dimension: mass
category: 生命与人体
displayValue: 0.31 kg
quantity:
  value: 0.31
  unit: kg
  measure: 成年个体心脏湿重均值；摘除后整颗称重，含心腔残留血液，不确定度约 ±20%
  approximate: true
grade: B
related:
  - mass.human-liver
  - mass.human-brain
  - mass.cardiac-muscle-cell
  - mass.adult-human
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
  - title: "PNAS"
    url: "https://www.pnas.org/"
    publisher: "National Academy of Sciences"
    accessed: '2026-11-24'
  - title: "eLife"
    url: "https://elifesciences.org/"
    publisher: "eLife Sciences Publications"
    accessed: '2026-11-24'
tags:
  - 质量
  - 心脏
  - 器官
  - 湿重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 成年个体心脏湿重均值；摘除后整颗称重，含心腔残留血液，不确定度约 ±20%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B7 人体与家具 · 0.31 kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B7
  bandLabel: 人体与家具
  log10: -0.509
  position: 42.46
  color: '#e0b67b'
  scaleMin: -40
  scaleMax: 53
titleEn: Human heart
---
## 这个读数是什么

成人心脏的质量约为 0.31 kg，也就是 310 克。这是成年个体均值，按湿重计，指摘除后整颗心脏的质量，包含心肌、瓣膜、冠状血管与心腔内的残留血液。[1] 它不是“心室肌的质量”，也不是某一个具体人的测量值。

## 口径与不确定度

湿重是器官称重的默认口径：离体后不烘干、不脱水，直接称。含血与不含血的差别必须说明——心脏摘除时腔内和冠状血管里残留的血液可达几十克，尸检常规称的是含血心脏；如果先灌注冲洗再称，读数会低百分之五到百分之十。[2] 条目取 ±20%，覆盖性别、体型与年龄差异：成年男性心脏通常略重于女性，长期耐力训练者的心脏可以明显增大，而心力衰竭患者的心脏可能增重数倍。这里不写“精确到小数点后两位”，因为个体间的真实差异远大于称量误差。

## 怎么测出来的

最直接的路径是尸检时摘下心脏、剪开心包、在天平上称重。活体侧可以用 CT 或 MRI 勾画心脏轮廓，得到体积后乘以约 1.05 g/cm³ 的心肌密度换算；心脏移植与捐献评估中也会用超声测得的心室质量做旁证。[3] 影像法会把心包液和周围脂肪算进去或排除在外，不同研究的口径并不完全一致，这也是均值只能给到两位有效数字的原因。

## 量级位置

0.31 kg 落在 B7 带下段，约为成人整体质量 70 kg 的百分之零点四。[1] 它比脑的 1.4 kg 轻，比肝脏的 1.5 kg 更轻，却比单个心肌细胞的 2×10⁻¹¹ kg 重约 10¹⁰ 倍。心脏每天泵出约七千升血液，但这个做功并不改变它的质量——质量是静态读数，功能是另一回事。

## 运动性心脏增大不是病

长期耐力训练会让心室壁与心腔增大，心脏质量可超过一般均值；这是生理性适应，不是病理肥大。运动员心脏与心力衰竭心脏都可能增重，但结构、功能与纤维化程度不同。只看质量会混淆两种增大。[1][S2]

心脏质量与体重、身高、性别相关；运动员心脏可增大 20%–30%，心力衰竭心脏可超过 500 克。回声与 MRI 测的是心室质量，尸检称的是整颗心脏，两者不能直接比较。

心脏质量还可以按体重归一化：左心室质量指数常用 g/m² 表示，超过一定阈值提示肥厚；绝对质量不能单独诊断。

## 怎么继续走

想看同一口径下的其他内脏，去 mass.human-liver 与 mass.human-brain；想回到构成心脏的单个细胞，去 mass.cardiac-muscle-cell；想看这些器官加起来所属的整个人体，去 mass.adult-human。

## 运动性心脏增大不是病

长期耐力训练会让心室壁与心腔增大，心脏质量可超过一般均值；这是生理性适应，不是病理肥大。[1] 运动员心脏与心力衰竭心脏都可能增重，但结构、功能与纤维化程度不同。只看质量会混淆两种增大。

## 五轴对照

在质量轴，心脏约 0.31 千克；在空间轴，它位于胸腔；在时间轴，运动与疾病改变心肌；在温度轴，核心体温影响心肌代谢。质量、结构与功能必须一起读。[1][2]

## 读数的口径与换算

本条采用的量是 0.31 kg，口径是 成年个体心脏湿重均值；摘除后整颗称重，含心腔残留血液，不确定度约 ±20%。质量是广延量，读数依赖湿重/干重、含血/不含血、整备/满载等口径；样本与测量条件必须一起引用。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（National Academy of Sciences）、[5]（eLife Sciences Publications） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
