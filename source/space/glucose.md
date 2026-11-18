---
id: space.glucose
title: 葡萄糖分子
titleEn: Glucose
dimension: length
category: 原子与分子
summary: 葡萄糖是六碳单糖，环状吡喃葡萄糖的分子长轴约 8.6 埃、短轴约 8.4 埃；本页取长轴约 0.86 纳米作为分子长度口径，不含水合层。
quantity:
  value: 8.6e-10
  unit: m
  measure: 分子长度
  approximate: true
displayValue: 约 0.86 nm（环状葡萄糖长轴）
related:
  - space.water-molecule
  - space.protein
  - space.amino-acid
  - space.nucleotide
  - space.cellulose
  - temperature.water-triple-point
reviewStatus: reviewed
sources:
  - title: 'BioNumbers: size of glucose ring molecule (BNID 110368)'
    url: 'https://bionumbers.hms.harvard.edu/bionumber.aspx?&id=110368'
    publisher: Harvard BioNumbers
    accessed: '2026-11-06'
  - title: glucose
    url: 'https://www.britannica.com/science/glucose'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: >-
  采用环状吡喃葡萄糖在中性、未水合、最低位阻构象下的计算尺寸；长轴 8.6 埃、短轴 8.4
  埃由键长、键角与范德华半径估算。它不是水溶液中葡萄糖的水合动力学直径，也不是开链形式的长度。
uncertainty: >-
  BioNumbers 条目给出的是计算构象的尺寸，未给出实验误差；长轴与短轴只差 0.2
  埃，说明分子接近球形，方向定义会显著影响“长度”。不同构象、水合与取代状态会改变数值，故取近似值。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      本轮新建条目；用 WebFetch 打开 Harvard BioNumbers BNID 110368，核对环状葡萄糖长轴 8.6 埃、短轴 8.4
      埃及 HyperChem 计算口径。
    - 用 WebFetch 打开 Britannica 葡萄糖页，核对分子式 C6H12O6、环状与开链形式及生物学角色。
    - 正文说明该值不含水合层，也不等同于开链葡萄糖的 1.5 纳米量级长度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "molecule"
  variant: "glucose"
  scene: "space.object"
  caption: "葡萄糖 · 约 0.86 nm 长轴"
  note: "原子球、键线与颜色为示意；标线表示环状分子长轴，不含水合层；非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
---
## 它是什么

葡萄糖是一种六碳单糖，分子式 C₆H₁₂O₆，是细胞常用的能量来源，也参与多糖的构成。[2] 在水溶液中它主要以环状吡喃形式存在，而不是一条直链。[2] 本页用约 0.86 纳米作为分子长度，指的是环状分子在最低位阻构象下的长轴，不是整个水合分子的外径。

## 怎样知道

这个尺寸不是用显微镜直接量出的。BioNumbers 收录的数值由 HyperChem 软件按键长、键角与范德华半径，对最低位阻构象计算得到；环状葡萄糖的长轴为 8.6 埃，短轴为 8.4 埃。[1] Britannica 说明葡萄糖的分子式、环状与开链形式，以及它在细胞中的能量角色。[2] 计算给出的是孤立分子的几何外形，实验上更常测的是水合半径或扩散系数，两者口径不同。

## 数值与口径

8.6 埃等于 0.86 纳米。长轴与短轴只差约 0.2 埃，说明环状葡萄糖接近球形，所谓“长度”对方向选择很敏感。[1] 开链形式的葡萄糖更长，文献中常见约 1.5 纳米的估计；本页不采用开链值，因为水溶液中环状形式占主导。[1][2] 水合层会进一步增大有效流体力学尺寸，但那是另一个量。

## 常见误解

常见误解之一是拿 0.86 纳米当作葡萄糖在水溶液中的“直径”；它只是孤立环状分子的计算长轴，不含水合层。[1] 另一个误解是把环状与开链形式的尺寸混用；两者几何不同，不能共用同一个数。[2] 还有人把葡萄糖单体尺寸直接乘上千倍来估多糖长度；聚合后链的构象与缠结会改变实际尺寸。

## 与其他尺度的关系

0.86 纳米比水分子核间距大，却远小于蛋白质和细胞。它处在“小分子”与“生物大分子单体”的交界处：氨基酸、核苷酸与葡萄糖都在一纳米上下，而蛋白质折叠后的尺度可达数纳米。[1][2] 继续阅读氨基酸、核苷酸与蛋白质，可比较不同生物单体的尺寸口径。
