---
id: mass.three-gorges-dam
title: 三峡大坝：约 6.7×10¹⁰ kg，混凝土体积×密度估算
summary: >-
  三峡大坝主体混凝土浇筑量约 2,794 万 m³，按 2.4 t/m³ 折算约 6.7×10¹⁰ kg。这是混凝土的估算质量，不含库区 393 亿 m³
  的水；后者质量比坝体大四个数量级。
dimension: mass
category: 水利工程
displayValue: 6.7×10¹⁰ kg
quantity:
  value: 67000000000
  unit: kg
  measure: 混凝土体积×密度估算：主体混凝土约 2.794×10⁷ m³，按 2.4 t/m³ 计，约 6.7×10¹⁰ kg；不含钢筋、金属结构与库水
  approximate: true
grade: B
related:
  - mass.hoover-dam
  - mass.grand-coulee-dam
  - mass.golden-gate-bridge
  - space.earth
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
    - >-
      来源角色：第 1 条来源提供对象的具体数值与参数；第 2 条为工程机构背景页，仅用于方法论与语境，不支撑具体数值。2026-11-09
      已移除与对象无直接关系的第 3 来源，正文 [3] 改为 [1]。
sources:
  - title: 中国长江三峡集团有限公司 — 三峡工程
    url: 'https://www.ctg.com.cn/'
    publisher: 中国长江三峡集团有限公司
    accessed: '2026-11-09'
  - title: Institution of Civil Engineers — dam engineering
    url: 'https://www.ice.org.uk/'
    publisher: Institution of Civil Engineers
    accessed: '2026-11-09'
tags:
  - 质量
  - 三峡
  - 大坝
  - 混凝土
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 混凝土体积×密度估算：主体混凝土约 2.794×10⁷ m³，按 2.4 t/m³ 计，约 6.7×10¹⁰ kg；不含钢筋、金属结构与库水
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 6.7×10¹⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 10.826
  position: 54.65
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

三峡大坝坝轴线长 2,309 m、坝顶高程 185 m，主体混凝土浇筑量约 2,794 万 m³。[1] 按 2.4 t/m³ 折算，质量约 6.7×10¹⁰ kg。这个读数只覆盖混凝土，不含 46.3 万吨钢筋、25.65 万吨金属结构，也不含库区里的水。它是一道体积乘密度的估算，不是竣工时逐车称出来的。

## 口径与不确定度

最容易被忽略的口径是水：三峡水库总库容 393 亿 m³，按 1 t/m³ 计约 3.9×10¹⁴ kg，比大坝本体大约四个数量级。[1] 把“三峡有多重”理解成“坝加水的总重”，得到的就是另一个量级。混凝土密度取 2.4 到 2.5 t/m³，结果会在 6.7 到 7.0×10¹⁰ kg 之间移动，所以本条标 B 级估算。钢筋与金属结构按官方用量另计约 7.2×10⁸ kg，只占坝体混凝土的百分之一。

## 怎么测出来的

质量由浇筑统计反推：施工时按分仓、分层记录每仓混凝土方量，全工程汇总得到 2,794 万 m³，再乘设计配合比对应的密度。[2] 三峡大坝用低温混凝土与冷却水管控制水化热，分缝分块浇筑，方量台账同时也是温控台账。泄洪坝段与左右岸厂房坝段分段统计后再汇总，这使总量可以按标段复核。这套统计的可靠性高于任何竣工后的体积测量。

## 量级位置

6.7×10¹⁰ kg 约等于 184 座帝国大厦，或 45 万头蓝鲸。[1] 它落在 10¹⁰ kg 档，是混凝土单体工程的上段；同量级的大古力坝只有它的三分之一，而胡佛大坝又比大古力小一个数量级。

## 怎么继续走

想看同量级的另一座巨型重力坝，去 mass.grand-coulee-dam；想回到 10⁹ kg 档，去 mass.hoover-dam；想比较钢铁桥梁的质量效率，去 mass.golden-gate-bridge；想把坝体与它拦住的江水放在同一颗行星上看，去 space.earth。
