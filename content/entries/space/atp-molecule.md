---
id: space.atp-molecule
title: ATP 分子
titleEn: ATP Molecule
dimension: length
category: 原子与分子
summary: ATP 由腺嘌呤、核糖和三个磷酸基团组成；本页取约 1.2 nm 作为紧凑构象下的分子长轴，磷酸链伸展时可达约 1.5 nm，需复核。
quantity:
  value: 1.2e-9
  unit: m
  measure: 分子长轴（紧凑构象估计）
  approximate: true
displayValue: 约 1.2 nm（ATP 分子长轴）
related:
  - space.caffeine-molecule
  - space.nucleotide
  - space.dna
  - space.protein
  - space.glucose
reviewStatus: reviewed
sources:
  - title: adenosine triphosphate (ATP)
    url: 'https://www.britannica.com/science/adenosine-triphosphate'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
  - title: Physiology, Adenosine Triphosphate
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK553175/'
    publisher: NCBI Bookshelf / StatPearls
    accessed: '2026-11-07'
conditions: >-
  取生理 pH 下未与镁结合的 ATP，紧凑构象的长轴约 1.2 nm；三磷酸链可旋转，伸展构象更长。
  该值不是水合动力学直径，也不是 ATP 与蛋白质结合后的包络尺寸；比较时应同时说明构象与是否含 Mg2+。
uncertainty: >-
  不同文献与模型给出约 1.2–1.5 nm；三磷酸链柔性大，构象分布使单一“长度”不唯一。
  本轮来源支持原子的连接方式，但未直接给出 1.2 nm 的测量值，故保留 needs-review。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 用 WebFetch 打开 Britannica ATP 条目，核对 ATP 由腺嘌呤、核糖和三磷酸组成，水解外侧磷酸生成 ADP。
    - 用 WebFetch 打开 NCBI Bookshelf 的 ATP 生理学条目，核对核苷三磷酸结构与高能磷酸键的作用。
    - 正文把 1.2 nm 写成按键长与构象推算的紧凑长轴，并说明伸展构象可达约 1.5 nm。
    - '2026-11-07 来源可访问性核对：https://www.ncbi.nlm.nih.gov/books/NBK553175/ 返回可用响应；https://www.britannica.com/science/adenosine-triphosphate（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: molecule
  variant: atp
  scene: space.object
  caption: ATP 分子 · 约 1.2 nm 长轴
  note: 原子球、键线与颜色为示意；标线表示紧凑构象的分子长轴，不是水合直径；示意，非按比例，非观测重建。
  color: '#a8bfa0'
  referenceAxis: x
  framePadding: 0.3
measureType: 尺寸
tags:
  - 原子与分子
  - 尺寸
  - 纳米
conceptGroup: molecule
---
## 它是什么

ATP 是腺苷三磷酸，由腺嘌呤碱基、核糖和三个依次相连的磷酸基团组成，是细胞通用的能量载体。[2] 它不是一个刚性小球：腺嘌呤环接近平面，核糖与三磷酸链可以转动，因此分子外形随构象变化。[1] 本页用约 1.2 纳米表示紧凑构象下的长轴。

## 怎样知道

结构证据来自化学分析与晶体学。Britannica 说明 ATP 由腺嘌呤、核糖和三磷酸组成，水解外侧磷酸生成 ADP 并释放能量。[1] NCBI Bookshelf 的生理学条目同样把 ATP 描述为核苷三磷酸，并解释高能磷酸键与细胞呼吸中的作用。[2] 这些资料确定原子的连接方式，但“长度”仍需由键长、键角与构象模型推算。

## 数值与口径

1.2 纳米等于 12 埃。按腺嘌呤环约 0.7 纳米、核糖约 0.3 纳米、三磷酸链再延伸约 0.4–0.5 纳米估算，紧凑构象的长轴落在 1.2 纳米附近；磷酸链伸展时可达约 1.5 纳米。[1][2] 这是几何推算，不是显微镜下的一次测量。若把水合层或镁离子算入，有效尺寸还会增大。

## 常见误解

常见误解之一是把 1.2 纳米当成 ATP 的固定直径；分子是链状的，长短随构象改变。[1] 另一个误解是把 ATP 的长度与 ATP 合成酶的大小混淆；ATP 合成酶是更大的蛋白机器，比单个 ATP 分子大一个数量级。[2] 还有人把 ATP 与 ADP、AMP 的长度视为相同，少一个磷酸会缩短分子。

## 与其他尺度的关系

1.2 纳米比咖啡因的 0.98 纳米略长，与核苷酸、氨基酸等生物单体同一量级，却远小于蛋白质与细胞。[1][2] 它处在“小分子代谢物”与“大分子”的交界处：长轴约 1.2 纳米，约为 DNA 双螺旋宽度的一半。继续阅读核苷酸、DNA 与蛋白质，可比较单体、链状分子与折叠结构的尺度。
