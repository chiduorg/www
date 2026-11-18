---
id: space.sars-cov-2
title: 新冠病毒
titleEn: SARS-CoV-2
dimension: length
category: 生命与人体
summary: 引起 COVID-19 的包膜冠状病毒，病毒颗粒直径约 60–140 纳米，通常取约 100 纳米作参照。
quantity:
  value: 1.e-7
  unit: m
  measure: SARS-CoV-2 病毒颗粒直径，所引综述给出 60–140 nm 范围，取 100 nm 作参照
  approximate: true
displayValue: 约 100 nm
related:
  - space.virus
  - space.phage
  - space.hiv
  - space.cell_membrane
reviewStatus: reviewed
sources:
  - title: >-
      Chitosan and its derivatives as polymeric anti-viral therapeutics and
      potential anti-SARS-CoV-2 nanomedicine
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9020865/'
    publisher: 'Carbohydrate Polymers / PMC, NCBI'
    accessed: '2026-11-06'
  - title: >-
      Physicochemical properties of SARS-CoV-2 for drug targeting, virus
      inactivation and attenuation, vaccine formulation and quality control
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7283733/'
    publisher: 'Electrophoresis / PMC, NCBI'
    accessed: '2026-11-06'
conditions: 透射电镜或冷冻电镜对负染、固定或快速冷冻的病毒颗粒测量；包膜刺突是否计入、颗粒多形性与制样都会影响读数。
uncertainty: >-
  100 nm 是 60–140 nm 范围内便于比较的中段参照；颗粒常呈圆形、椭圆形或多形，计入表面刺突时表观直径可更大，不能把 100 nm
  当作所有颗粒的定值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 已打开两篇 PMC 综述并核对 60–140 nm 范围及 100 nm 代表值。
    - 采用 100 nm 作范围内参照，同时保留完整范围与多形性说明。
    - 病毒颗粒尺寸受制样影响，保留 needs-review。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  scene: space.object
  caption: 带冠状刺突的 SARS-CoV-2 颗粒与 HIV、噬菌体头部的尺度对比
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

新冠病毒（SARS-CoV-2）是冠状病毒科的一种有包膜单股正链 RNA 病毒，是 2019 年出现的新型冠状病毒病的病原体[1]。病毒颗粒近似球形，外层是脂质包膜，包膜上嵌有刺突糖蛋白，内部由核衣壳蛋白包裹 RNA 基因组[1]。表面的刺突像日冕，冠状病毒因此得名；这些刺突负责识别宿主细胞受体并介导膜融合。

## 怎样知道

病毒颗粒的大小主要靠电子显微镜测量。负染透射电镜、冷冻电镜和冷冻电子断层扫描都能直接看到颗粒轮廓；研究者统计多个颗粒的直径，并注明是否把表面刺突算入[1]。由于颗粒常呈圆形、椭圆形甚至多形，单一数字只能代表统计中心，不能描述全部个体[2]。分子与结构研究还能从刺突蛋白长度、包膜厚度等参数交叉校验尺度。

## 数值与口径

所引综述把 SARS-CoV-2 颗粒记为直径约 100 nm，范围 60–140 nm[1]；另一篇综述同样给出约 60–140 nm 的范围，并指出颗粒可为圆形或椭圆形[2]。本条目取 100 nm 作为入门参照，口径是颗粒外径，原则上不含刺突尖端。它是范围内代表值，不是所有颗粒的定值；计入约 10 nm 长的刺突后，表观直径会更大。

## 常见误解

“病毒颗粒就是一个标准圆球”过于简化：电镜下可见圆形、椭圆和多形颗粒，尺寸分布连续[2]。另一个误区是把病毒和细菌混为一谈；SARS-CoV-2 没有细胞结构，比细菌小一至两个数量级。还有人把核酸检测目标（RNA）的大小当成病毒颗粒大小，RNA 分子只是被包裹在颗粒内部，不能直接换算成颗粒直径。

## 与其他尺度的关系

100 nm 等于 0.1 μm，约为红细胞直径的七十二分之一，也比大肠杆菌短轴小五倍左右[1]。它与 HIV 颗粒（约 120 nm）接近，比 T4 噬菌体头部宽度（约 86 nm）略大。若把 100 nm 放大到一根头发直径，需要约七百倍；这说明新冠病毒的形态观察必须依赖电子显微镜，普通光学显微镜只能看到被感染细胞的改变。
