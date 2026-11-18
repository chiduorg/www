---
id: mass.tablet
title: 500 mg 对乙酰氨基酚片：约 6×10⁻⁴ kg，单片含辅料的总质量
summary: >-
  标示 500 mg 的对乙酰氨基酚片，“500 mg”是有效成分含量，不是片重。加上填充剂、黏合剂、崩解剂与润滑剂，单片总质量约 6×10⁻⁴ kg（0.6
  g）。
dimension: mass
category: 药品
displayValue: 约 6×10⁻⁴ kg
quantity:
  value: 0.0006
  unit: kg
  measure: 单片 500 mg 对乙酰氨基酚片的总质量（含辅料），按成品片芯称量约 0.6 g；不含包装
  approximate: true
grade: B
related:
  - mass.paper-clip
  - mass.coin
  - mass.insulin
  - mass.water-molecule
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
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Nature Portfolio
    accessed: '2026-11-09'
  - title: ISO Standards
    url: 'https://www.iso.org/'
    publisher: International Organization for Standardization
    accessed: '2026-11-09'
tags:
  - 质量
  - 药片
  - 对乙酰氨基酚
  - 净重
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单片 500 mg 对乙酰氨基酚片的总质量（含辅料），按成品片芯称量约 0.6 g；不含包装
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B6 日常微粒 · 约 6×10⁻⁴ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B6
  bandLabel: 日常微粒
  log10: -3.222
  position: 39.55
  color: '#c9a77a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

药盒上写的“500 mg”指每片含对乙酰氨基酚 500 毫克，这是有效成分的标示量，不是这片药的总质量。[1] 把有效成分与填充剂、黏合剂、崩解剂、润滑剂和包衣加在一起，单片总质量通常在 0.6 克上下，即约 6×10⁻⁴ kg。本条记录的是片芯总质量，不是药物含量，两者不能互换。

## 口径与不确定度

片重由处方与压片工艺决定，同一品种不同厂家的辅料比例不同，片重可以从 0.55 克到 0.7 克；素片与薄膜衣片也略有差别。[2] 因此这里给约 6×10⁻⁴ kg 的估算值并标 approximate，不写成“0.600 克”。包装铝箔与纸盒不计入；若把整板药片连包装称重再除以片数，会高估单片质量。药典对片重差异有允许范围，但那是质量控制限，不是本条口径。

## 怎么测出来的

生产线上按批抽样，用分析天平逐片称量，计算平均片重与重量差异，这是药典规定的常规检验项。[1] 处方设计阶段则按各辅料的投料量与总混粉体的理论片重推算，再用压片机的填充深度校准。[3] 片剂含水量很低，室温称重即可，不需要像生物样品那样区分干湿重；但高湿环境下吸湿会让片重缓慢上升，所以称量前要按规定条件平衡。

## 量级位置

约 6×10⁻⁴ kg 位于 B6 带上段：比一枚回形针略重，约为一片干茶叶的十倍，约为一枚 5 分镍币的八分之一。[2] 这个量级也是成人单次服药常见质量的量级：一片 0.6 克的片子里，真正起作用的成分约占六分之五。

## 怎么继续走

想看同量级的金属件，去 mass.paper-clip 与 mass.coin；想看以分子计的药物，去 mass.insulin；想看片剂中的水分与辅料，去 mass.water-molecule。标示量、含量与片重是三个不同的量，质量轴只记录其中一个。
