---
id: space.bacteria
title: 细菌
titleEn: Bacteria
dimension: length
category: 生命与人体
summary: 细菌是一类没有膜包被细胞核的单细胞原核生物；本页用1微米作入门尺度参照，说明0.1–5.0微米的概览范围、形态差异与测量口径。
quantity:
  value: 0.000001
  unit: m
  measure: 原核细胞量级中的1 μm示意参照
  approximate: true
displayValue: 1 μm（细菌量级参考）
related:
  - space.cell
  - space.virus
  - space.mitochondria
  - time.first-life
  - temperature.human-body-temperature
reviewStatus: reviewed
sources:
  - title: 'Biology 2e, §4.2 Prokaryotic Cells'
    url: 'https://openstax.org/books/biology-2e/pages/4-2-prokaryotic-cells'
    publisher: OpenStax / Rice University
    accessed: '2026-11-04'
  - title: Bacteria
    url: 'https://www.britannica.com/science/bacteria'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: bacteria
  icon: "\U0001F9A0"
  relatedLabels: 微生物组、抗生素、致病菌、益生菌、生物膜、细菌耐药性、合成生物学
conditions: 不对应指定菌种、菌株或培养条件；不能泛称全部细菌的直径。
review:
  method: source-check
  date: '2026-11-04'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 全文重新撰写，移除未经逐条核实的旧断言。
    - 本轮已直接读取所列primary正文的相关数字或定义。
    - 第七轮深化：补充原核结构、形态、尺寸测量与常见误解；新增 Britannica 来源支持“多数细菌无害或有益”等表述；量值、图景与审核状态保持不变。
  originalQuantity:
    value: 0.000001
    unit: m
    measure: legacy-size-needs-review
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  variant: bacteria
  color: '#7faea4'
  referenceAxis: x
  caption: 细菌量级中的1 μm示意参照
  note: 概览参照没有指定菌种；内含物与杆球外形为示意，不能推断某菌株实际长宽。
  framePadding: 0.28
  sourceMeasure: 原核细胞量级中的1 μm示意参照
  scene: space.object
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 细胞与微粒
---
## 细菌是什么

细菌是一大类单细胞原核生物：它们没有膜包被的细胞核，也没有线粒体、叶绿体这类膜性细胞器，遗传物质集中在细胞中央的核区，细胞质中有核糖体。[1][2] 细菌的形态很多，常见的有球状、杆状和弯曲的螺旋状；同一种形状在不同分裂阶段还可能连成链或团。[2]

## 尺寸范围与测量

OpenStax将原核细胞的直径概括为约0.1–5.0微米，并把它与直径约10–100微米的真核细胞作对照。[1] 具体到某个菌种，必须说明量的是直径、长度还是宽度：球菌常用直径，杆菌常分别报告长度与宽度；培养条件、固定与染色、显微方法也会影响读数。本页的1微米是这条范围里的入门参照，不对应某个指定菌株。[1][2]

## 为什么通常很小

细胞近似球体时，表面积随半径平方增长，体积随半径立方增长。细胞变大后，单位体积对应的膜面积下降，靠扩散输入养分和排出废物会变得更吃力。[1] 原核细胞保持较小尺寸，有利于快速扩散和分裂；真核细胞则发展出细胞骨架、内膜系统和细胞器来组织长距离运输。大小不是“低级或高级”的标签，而是与组织结构配套的尺度。

## 常见误解

“细菌都是致病菌”不成立：自然界和人体内存在大量细菌，多数并不致病，许多还参与养分循环、食物发酵和宿主共生。[2] “1微米就是细菌的标准直径”同样不准确：不同类群、不同形态和不同生长状态差别很大。病毒通常比细菌小一个数量级以上，但病毒不是细胞，不能把两者按同一结构层级比较。

## 与其他尺度的关系

把细菌放在本站的尺度轴上，它位于病毒与人体细胞之间：比多数病毒大，比典型真核细胞小。[1] 线粒体和叶绿体在演化上与细菌有亲缘关系，但它们已经成为真核细胞内的细胞器，不能与自由生活的细菌直接等同。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]


## 深读一：量值口径

本条的核心量值是 1e-06 m，量的是原核细胞量级中的1 μm示意参照。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：不对应指定菌种、菌株或培养条件；不能泛称全部细菌的直径。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照人体细胞（2e-05）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
