---
id: mass.bullet-cluster
title: 子弹星系团：约 3.0×10⁴⁵ kg，暗物质与气体分离的碰撞现场
summary: >-
  子弹星系团（1E 0657-56）是两个星系团正在并合的系统，总质量约 3.0×10⁴⁵ kg，折合约 1.5×10¹⁵
  个太阳质量，口径包含暗物质。数值由引力透镜与 X 射线气体联合给出，相对不确定度约 30%。
dimension: mass
category: 星系与宇宙
displayValue: 3.0×10⁴⁵ kg
quantity:
  value: 3e+45
  unit: kg
  measure: 子弹星系团总质量（含暗物质，约 1.5×10¹⁵ 太阳质量）；由引力透镜与 X 射线气体联合给出，相对不确定度约 30%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: gravitational lensing and X-ray gas
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.coma-cluster
  - mass.virgo-cluster
  - mass.laniakea
  - space.galaxy-cluster
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
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: arXiv
    url: 'https://arxiv.org/'
    publisher: arXiv
    accessed: '2026-11-09'
tags:
  - 质量
  - 星系团
  - 子弹星系团
  - 暗物质
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 子弹星系团总质量（含暗物质，约 1.5×10¹⁵ 太阳质量）；由引力透镜与 X 射线气体联合给出，相对不确定度约 30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 3.0×10⁴⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 45.477
  position: 91.91
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
titleEn: Bullet Cluster
---
## 这个读数是什么

子弹星系团（编号 1E 0657-56）位于南天，距我们约三十七亿光年，是两个星系团正在并合的系统，本条记录它的总质量约 3.0×10⁴⁵ kg，折合约 1.5×10¹⁵ 个太阳质量。[1] 口径包含暗物质。团内星系的恒星质量只占总质量的百分之一二，绝大部分是暗物质与炽热气体。[2] 两个子团以极高速度相向穿过。

## 口径与不确定度

总质量来自引力透镜与气体观测，包含暗物质、气体和星系；恒星质量只是其中很小的一块。[2] 本条采用含暗物质的总质量。相对不确定度约 30%，因为并合尚未松弛，流体静力学平衡假设并不严格成立，质量随投影方向与建模方法变化，故标近似、定 B 级。[3]

## 怎么测出来的

弱引力透镜测出光线被偏折的分布，直接给出投影质量图。X 射线观测则定位高温气体，因为气体在碰撞中会被压缩、减速。[1] 两者叠在一起会发现：质量峰与气体峰分离，而星系几乎跟着质量峰走，这说明不发光也不碰撞的暗物质占了主导。[3]

## 量级位置

3.0×10⁴⁵ kg 位于 B15 带上段，与后发座星系团相当，约为室女座星系团的一点二倍。[1] 单个星系团的质量在并合后并不会凭空变大，这个数值是两个系统之和的量级。它的意义不在重量，而在于同一质量尺度上把暗物质与普通物质分了开来。

## 怎么继续走

想看静态的参照团，去 mass.coma-cluster；想看另一个富团，去 mass.virgo-cluster；想看星系团的通用图景，去 space.galaxy-cluster。[2] 想理解暗物质在大尺度上的作用，可把这条与 mass.laniakea 放在一起看。[3] 这条记录也因此常被用来说明：质量在哪里，引力就在哪里。并合过程还在继续。
