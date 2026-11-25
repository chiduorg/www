---
id: space.ecoli
title: 大肠杆菌
titleEn: Escherichia coli
dimension: length
category: 生命与人体
summary: 一种杆状革兰氏阴性细菌，典型营养细胞长约 2 微米，是理解原核生物尺度的常用参照。
quantity:
  value: 0.000002
  unit: m
  measure: 杆状营养细胞的长轴（杆长），所引概览记典型值约 2 μm
  approximate: true
displayValue: 约 2 μm
related:
  - space.bacteria
  - space.cell
  - space.ribosome
  - space.phage
  - mass.bacterium
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: bacteria
    url: 'https://www.britannica.com/science/bacteria'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 4.2 Prokaryotic Cells
    url: 'https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells'
    publisher: 'OpenStax, Rice University'
    accessed: '2026-11-06'
  - title: "Understanding biological factories — Front Row lecture, PDF p.6"
    url: "https://frontrow.scripps.edu/wp-content/uploads/2022/11/Williamson-front-row-lecture-slides-01182023.pdf"
    publisher: "Scripps Research / James R. Williamson"
    accessed: '2026-11-24'
  - title: "Molecule of the Month: Ribosome"
    url: "https://pdb101.rcsb.org/motm/121"
    publisher: "RCSB Protein Data Bank / David Goodsell"
    accessed: '2026-11-24'
conditions: 光学或电子显微镜下对固定、染色或培养的营养细胞做二维测量；菌株、培养阶段与制样收缩都会影响读数。
uncertainty: 2 μm 是杆长的入门代表值；不同菌株和分裂状态可从约 1 μm 到数微米，短轴直径通常只有约 0.5 μm，不能把长轴当成直径。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 已打开 Britannica 细菌条目与 OpenStax 原核细胞章节核对尺度。
    - 采用百科概览给出的 E. coli 约 2 μm 杆长，未把代表值写成所有菌株的定值。
    - 条目为新撰，数值口径仍需领域审校确认。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  scene: space.object
  caption: 一根杆状大肠杆菌与邻近红细胞的大小对比
  note: 示意/非按比例/非观测重建，仅用于尺度直观参照。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 细胞与微粒
---
## 它是什么

大肠杆菌（Escherichia coli）是革兰氏阴性、杆状的细菌，属于细菌域。它没有真正的细胞核，也没有线粒体、内质网等膜性细胞器，遗传物质集中在类核区[1]。它常存在于人和动物的肠道中，既有正常菌群成员，也有能引起腹泻或尿路感染的致病株；致病性与具体菌株、宿主状态关系很大[1]。它是分子生物学最常用的模式微生物之一，许多基础机制最早在这里被研究清楚[2]。

## 怎样知道

常规测量是在光学显微镜下对革兰染色或相差视野中的细胞做二维测量；要看清表面细节，则用扫描电子显微镜观察固定、脱水后的单个细胞[1]。这类制样会带来收缩和形变，所以同一菌株在不同实验室报出的数值常有出入[2]。严谨的做法是分别记录长轴与短轴，并说明培养温度、生长期和是否处于分裂中，而不是只给一个“大小”。

## 数值与口径

所引百科概览把典型大肠杆菌记为长约 2 μm、直径约 0.5 μm[1]；原核细胞总体的常见尺度则为 0.1–5 μm[2]。本条目取杆长 2 μm 作为入门参照，口径是营养细胞的长轴，而非菌落、孢子或整个种群。它是便于比较的代表值，不是所有菌株的定值：球菌形变体、丝状体、分裂中的细胞以及不同培养条件都会偏离这个数字。

## 常见误解

“大肠杆菌一定有害”并不成立，许多菌株是肠道正常菌群，只有部分致病型才与疾病相关[1]。另一个误区是把 2 μm 当成细胞直径：杆状细菌的长轴约为短轴的数倍，长与宽不能混用。还有人把培养基上的菌落大小当成单细胞大小，菌落是数以亿计细胞堆积的结果，和单个细胞不在同一尺度。

## 与其他尺度的关系

2 μm 大约是红细胞直径的四分之一到三分之一，也比典型动物细胞小一个数量级以上[2]。若把 2 μm 放大到一根头发直径（约 70 μm），需要约 35 倍；反过来，一个 20 μm 的动物细胞并排可以容纳约十条大肠杆菌。这个尺度正好落在光学显微镜勉强可辨、电子显微镜可细看之间的交界带，因此它常被用来建立“微观世界”的第一把标尺。

## 菌株与生长状态会改变读数

2 微米是营养细胞的长轴概览，不是所有大肠杆菌的定值。不同菌株、培养温度、营养条件和分裂阶段都会改变细胞长度与直径；丝状体或受损细胞可以明显偏离典型值。[1][2] 测量时应同时记录长轴、短轴、染色方法和生长阶段，而不是只写一个“2 微米”。

## 菌落不是单细胞

培养皿上的菌落由数百万到数十亿个细胞堆叠而成，直径可达毫米级；它与单个细胞的 2 微米相差三个数量级以上。[2] 把菌落大小当成细菌大小，会同时混淆个体与群体、二维投影与三维堆积。显微镜下的单细胞与肉眼可见的菌落，是两套尺度。

## 五轴对照

在空间轴，大肠杆菌约 2 微米；在质量轴，一个细胞湿重约 1 皮克；在温度轴，培养温度影响生长速率；在时间轴，它属于最早生命之后的单细胞阶段。尺寸、质量与代谢速率不能用一个数字互相替代。[1][2]

## 长度与直径要分开

大肠杆菌常被写成“约 2 微米”，这通常是杆状细胞的长轴；直径只有约 0.5–1 微米。长度受培养条件、细胞周期和菌株影响，同一个菌落在不同生长期可以差出一倍。正文把 2 微米作为长度锚点，而不是把大肠杆菌当成一个 2 微米的球。[1][S1]

## 延伸核对

补充的来源 [3]（Scripps Research / James R. Williamson）、[4]（RCSB Protein Data Bank / David Goodsell） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
