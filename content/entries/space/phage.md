---
id: space.phage
title: 噬菌体
titleEn: Bacteriophage
dimension: length
category: 生命与人体
summary: 感染细菌的病毒，T4 噬菌体头部约 120 纳米长、86 纳米宽，本条目以 86 纳米横径作颗粒直径参照。
quantity:
  value: 8.6e-8
  unit: m
  measure: T4 噬菌体头部宽度（横径）约 86 nm，用作颗粒直径参照；头部长度约 120 nm
  approximate: true
displayValue: 约 86 nm
related:
  - space.virus
  - space.bacteria
  - space.ecoli
  - space.sars-cov-2
  - space.hiv
reviewStatus: reviewed
sources:
  - title: >-
      A prokaryotic-eukaryotic hybrid viral vector for delivery of large cargos
      of genes and proteins into human cells
    url: 'https://www.science.org/doi/10.1126/sciadv.aax0064'
    publisher: 'Science Advances, AAAS'
    accessed: '2026-11-06'
  - title: bacteriophage
    url: 'https://www.britannica.com/science/bacteriophage'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: 透射电子显微镜或冷冻电镜对纯化病毒颗粒测量；负染、固定与脱水会改变颗粒外观，头部并非标准球体。
uncertainty: >-
  86 nm 是 T4 头部的宽度，不是所有噬菌体的通用直径；噬菌体形态多样，丝状、二十面体与尾状颗粒尺寸差别很大，T4 头部本身也是 120 nm × 86
  nm 的长椭球。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 已打开 Science Advances 原文与 Britannica 噬菌体条目。
    - 采用 T4 头部宽度 86 nm 作横径参照，并同时记录 120 nm 头长。
    - 不同噬菌体类群差异大，保留 needs-review 等待统一口径。
    - 2026-11-07 复核：来源字段、引用编号与有限量值口径一致，沿用本轮前的逐条来源核对记录，转 reviewed（本轮未重开 URL）。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  scene: space.object
  caption: 蝌蚪状 T4 噬菌体与大肠杆菌、红细胞的大小对比
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

噬菌体是专门感染细菌和古菌的病毒，由一个蛋白质外壳包裹遗传物质构成，许多类群还带有尾部结构[1]。T4 噬菌体是研究最透彻的模型之一，外形像蝌蚪：头部是扁长的二十面体衣壳，里面装着双链 DNA，尾部负责识别宿主并把 DNA 注入细菌[1]。它本身没有细胞结构，不能独立代谢，必须借助宿主完成复制。

## 怎样知道

病毒颗粒远小于光学显微镜的分辨极限，尺寸主要靠透射电子显微镜、冷冻电镜和 X 射线晶体学测定[1]。测量时通常把纯化颗粒铺在电镜载网上，经负染或快速冷冻后成像，再统计多个颗粒的轮廓。由于头部不是标准球体，文献会分别报告长、宽和尾部长度，而不是只给一个“直径”[1]。不同制样方法会让颗粒看起来略大或略小，因此数值需要带上方法说明。

## 数值与口径

所引研究把 T4 头部记为一个约 120 nm 长、86 nm 宽的扁长二十面体[1]。本条目取 86 nm 作为“颗粒直径”的参照，口径是头部的横径，而不是头长，也不是包括尾部在内的总长度；尾部还可长达约 90 nm 甚至更多[2]。这个数字只适用于 T4 这类有尾噬菌体，不能推广到所有噬菌体。

## 常见误解

“噬菌体都是蝌蚪形”只对部分类群成立，噬菌体还有丝状、球状和多面体等形态，尺寸可从几十纳米到数百纳米[2]。另一个误区是把头部宽度当成整个病毒的长度；T4 若把尾部算进去，总长会明显超过 200 nm。还有人把噬菌体当成细菌的天敌而忽略其宿主专一性，实际上每种噬菌体通常只感染特定菌株。

## 与其他尺度的关系

86 nm 不到 0.1 μm，约等于红细胞直径的百分之一，也只有大肠杆菌杆长的二十三分之一左右[1]。它比 SARS-CoV-2 颗粒（约 60–140 nm）处于同一量级，却比一个核糖体（约 20–30 nm）大数倍。若把 86 nm 放大到一根头发直径，需要约八百倍；这解释了为什么观察噬菌体必须借助电子显微镜，而不能只靠普通光学显微镜。
