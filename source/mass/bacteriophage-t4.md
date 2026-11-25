---
id: mass.bacteriophage-t4
title: T4 噬菌体：3.0×10⁻¹⁹ kg，DNA 与蛋白的注射器
summary: >-
  T4 噬菌体头部约 90×120 nm，尾部长约 100 nm。单个颗粒湿重均值约 3.0×10⁻¹⁹ kg，文献常引的 2.5×10⁸ Da 是 DNA
  加蛋白的名义干重口径。
dimension: mass
category: 生命与人体
displayValue: 3.0×10⁻¹⁹ kg
quantity:
  value: 3.e-19
  unit: kg
  measure: 单个病毒颗粒湿重均值；湿重、密度按 1.1 g/cm³ 估算，参考干重约 2.5×10⁸ Da，不确定度约 ±30%
  approximate: true
grade: B
related:
  - mass.exosome
  - mass.influenza-virion
  - space.bacteria
  - space.virus
  - space.dna
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
  - title: 'BioNumbers: The Database of Key Numbers in Molecular and Cell Biology'
    url: 'https://bionumbers.hms.harvard.edu/'
    publisher: Harvard Medical School
    accessed: '2026-11-09'
  - title: Molecular Biology of the Cell（NCBI Bookshelf）
    url: 'https://www.ncbi.nlm.nih.gov/books/'
    publisher: National Center for Biotechnology Information
    accessed: '2026-11-09'
  - title: Nature
    url: 'https://www.nature.com/'
    publisher: Springer Nature
    accessed: '2026-11-09'
tags:
  - 质量
  - 病毒
  - 噬菌体
  - T4
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 单个病毒颗粒湿重均值；湿重、密度按 1.1 g/cm³ 估算，参考干重约 2.5×10⁸ Da，不确定度约 ±30%
  precision: B 级；近似值/均值。
visual:
  template: mass-scale
  scene: mass.scale
  caption: B4 病毒与细胞器 · 3.0×10⁻¹⁹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B4
  bandLabel: 病毒与细胞器
  log10: -18.523
  position: 23.09
  color: '#b7a6ff'
  scaleMin: -40
  scaleMax: 53
titleEn: T4 bacteriophage
---
## 这个读数是什么

T4 噬菌体感染大肠杆菌，外形像一支带尾的注射器：二十面体头部约 90×120 nm，尾鞘与尾丝再伸出约 100 nm。单个颗粒的湿重均值取 3.0×10⁻¹⁹ kg，处在 10⁻¹⁹ kg 量级的中上部。它由 DNA、衣壳蛋白、尾部蛋白与内部小蛋白共同组成，其中 DNA 约占干重的一半。[1]

## 口径与不确定度

这里给的是单个病毒颗粒的湿重均值，不是一次裂解液的总质量，也不是纯 DNA 的质量。文献常引的 2.5×10⁸ Da 是把基因组 DNA 与衣壳、尾部蛋白的名义亚基相加得到的干重口径；本条目不把这种相加当作唯一答案，而用整颗粒的湿重估算取 3.0×10⁻¹⁹ kg。颗粒完整性与制备批次会让数值移动，给 ±30% 的不确定度，只保留两位有效数字。[2]

## 怎么测出来的

T4 的质量有三类证据：分析超速离心测沉降系数，再配合扩散系数得到颗粒质量；冷冻电镜与晶体学数出衣壳和尾部的蛋白拷贝数；基因组测序给出 DNA 长度。把蛋白拷贝数乘氨基酸平均质量、加上 DNA 质量，可以与湿重估算交叉核对。这里的质量是“颗粒整体”的估算，不是用头部长度单独换算出来的实测值。[1][2]

## 量级位置

3.0×10⁻¹⁹ kg 比突触囊泡重约十倍，比流感病毒颗粒轻约五倍，正好落在“大分子复合物”与“细胞器”之间的过渡带。它也是“病毒不是细胞”的质量注脚：一个 T4 只相当于大肠杆菌的几千分之一。

## 怎么继续走

想看同为包膜病毒的颗粒，去 mass.influenza-virion；想看尺寸重叠的细胞外囊泡，去 mass.exosome；想看宿主与它的基因组，去 space.bacteria 与 space.dna。[3]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 3×10⁻¹⁹ 千克，换算后是 3×10⁻¹³ 微克；约为一个 DNA 分子（1×10⁻¹⁸ 千克）的 0.3 倍。这把尺子只改写单位，不改变量值；它把本条固定在质量轴的 10⁻¹⁹ 量级附近。

读图时先看量级，再看倍数：10⁻¹⁹ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
