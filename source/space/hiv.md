---
id: space.hiv
title: 艾滋病病毒
titleEn: HIV
dimension: length
category: 生命与人体
summary: 引起艾滋病的逆转录病毒，成熟病毒颗粒直径约 120 纳米，属于包膜病毒。
quantity:
  value: 1.2e-7
  unit: m
  measure: 成熟 HIV-1 病毒颗粒的直径，所引专著记约 120 nm
  approximate: true
displayValue: 约 120 nm
related:
  - space.virus
  - space.phage
  - space.sars-cov-2
  - space.cell_membrane
reviewStatus: reviewed
sources:
  - title: HUMAN IMMUNODEFICIENCY VIRUS-1
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK304351/'
    publisher: IARC Monographs / NCBI Bookshelf
    accessed: '2026-11-06'
  - title: HIV
    url: 'https://www.britannica.com/science/HIV'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: 透射电镜或冷冻电镜对纯化、成熟病毒颗粒测量；未成熟颗粒、制样收缩与包膜刺突是否计入会影响读数。
uncertainty: 120 nm 是成熟 HIV-1 颗粒的代表直径；未成熟颗粒通常更大或形态不同，不同测量方法与样本可给出约 100–130 nm 的分布，不能当作固定值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 已打开 NCBI Bookshelf 的 IARC HIV-1 专著与 Britannica HIV 条目。
    - 采用专著给出的约 120 nm 直径，并注明是成熟颗粒。
    - 颗粒形态与包膜状态影响尺寸，保留 needs-review。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  scene: space.object
  caption: 带包膜和表面刺突的 HIV 颗粒与红细胞、T4 噬菌体的尺度对比
  note: 示意/非按比例/非观测重建，仅用于尺度直观参照。
  color: '#9bbcd7'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 微观
---
## 它是什么

艾滋病病毒（HIV）是逆转录病毒科慢病毒属的包膜病毒，分 HIV-1 和 HIV-2 两型，全球流行以 HIV-1 为主[1]。它的核心是两条单链 RNA 基因组，外面包着圆锥形衣壳，再外层是来自宿主细胞膜的脂质包膜，包膜上嵌有病毒编码的包膜糖蛋白[1]。病毒本身不能独立复制，必须感染宿主细胞，把 RNA 逆转录为 DNA 并整合进宿主基因组。

## 怎样知道

HIV 颗粒的尺寸主要靠电子显微镜和冷冻电镜测定。纯化后的成熟颗粒在电镜下呈球形，包膜表面可见刺突；测量时通常统计多个颗粒的直径并给出分布，而不是只报一个数[1]。制样中的固定、染色和脱水会让颗粒收缩，未成熟颗粒又尚未完成衣壳浓缩，形态与成熟颗粒不同，因此“120 nm”需要和“成熟颗粒”这一前提一起使用。分子生物学和结构研究还能从包膜蛋白排列推算颗粒尺度[2]。

## 数值与口径

所引专著把 HIV-1 病毒颗粒记为直径约 120 nm[1]。本条目采用这一数值，口径是成熟颗粒的外径，包含脂质包膜但不把表面刺突的尖端单独计入。它是代表值，不是所有颗粒的定值：未成熟颗粒、不同宿主细胞来源的颗粒以及不同测量方法都可能给出更大的表观直径，文献中常见约 100–130 nm 的分布。

## 常见误解

“HIV 就是艾滋病”是常见混淆：HIV 是病毒，艾滋病是感染后期免疫系统严重受损的临床综合征[2]。另一个误区是把病毒颗粒当成细胞，HIV 没有细胞核、核糖体和代谢系统，尺寸也比人体细胞小两个数量级。还有人以为包膜是病毒自己合成的，实际上它取自宿主细胞膜，病毒只在其上装配自己的糖蛋白[1]。

## 与其他尺度的关系

120 nm 等于 0.12 μm，约为红细胞直径的六十分之一，也比大肠杆菌短轴（约 0.5 μm）小四倍左右[1]。它与 SARS-CoV-2 颗粒大致同量级，却比 T4 噬菌体头部宽度大约四成。若把 120 nm 放大到一根头发直径，需要约六百倍；这也说明为什么 HIV 的形态研究高度依赖电镜和结构生物学，而不是普通光学显微镜。
