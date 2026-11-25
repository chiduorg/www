---
id: mass.mrk231-black-hole
title: Mrk 231 中心黑洞：2.98×10³⁸ kg，尘埃遮蔽下的量级估算
summary: >-
  Mrk 231 是一个正在并合的极亮红外星系，中心黑洞质量约 2.98×10³⁸
  kg，折合约一亿五千万个太阳质量。源被尘埃严重遮蔽，只能靠反响映射与模型联合拟合，相对不确定度约 30%，属于量级估算。
dimension: mass
category: 恒星与致密天体
displayValue: 2.98×10³⁸ kg
quantity:
  value: 2.98e+38
  unit: kg
  measure: 黑洞反响映射质量（约 1.5×10⁸ 太阳质量）；宽线区受尘埃遮蔽，需把时延与辐射压修正模型联合拟合，相对不确定度约 30%
  approximate: false
grade: C
mass:
  type: dynamical
  includesDarkMatter: false
  method: reverberation mapping and modeling
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.ngc4151-black-hole
  - mass.3c273
  - space.m87-black-hole
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
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: ESA Science
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
tags:
  - 质量
  - 黑洞
  - 活动星系核
  - 星系并合
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞反响映射质量（约 1.5×10⁸ 太阳质量）；宽线区受尘埃遮蔽，需把时延与辐射压修正模型联合拟合，相对不确定度约 30%
  precision: C 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B14 黑洞与类星体 · 2.98×10³⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B14
  bandLabel: 黑洞与类星体
  log10: 38.474
  position: 84.38
  color: '#ff9a4a'
  scaleMin: -40
  scaleMax: 53
titleEn: Mrk 231 black hole
---
## 这个读数是什么

Mrk 231 是一个正在并合的极亮红外星系，中心黑洞质量约 2.98×10³⁸ kg，折合约一亿五千万个太阳质量。[1] 口径是反响映射结合模型拟合的质量，质量是时空参数，不是把黑洞当物质称重。因为源被尘埃严重遮蔽，这个数只能算量级估算。并合中的星系气体丰富、遮蔽厚重，正是这类源难以精确称重的原因。

## 口径与不确定度

宽线区被大量尘埃遮挡，可用谱线少、信噪比低，只能把反响映射时延与辐射压修正模型一起拟合。相对不确定度约 30%，定为 C 级，正文只保留两位有效数字。[2] 若吸积盘倾角或气体云分布假设改变，质量会有明显移动，因此不宜当作精确值引用。

## 怎么测出来的

光谱监测给出宽线时延，再结合测得的谱线宽度与辐射压对速度的修正，估出中心质量。[2] 亚毫米波与红外观测显示它正经历剧烈的星暴与并合，尘埃遮蔽让光学波段几乎看不到宽线区核心。[3] 因此必须借助模型把几何与消光一并处理。

## 量级位置

2.98×10³⁸ kg 是 NGC 4151 中心黑洞的约四倍，是 M87* 的四十三分之一。[1] 它落在 B14 带中段偏上，属于超大质量黑洞里中等偏小的成员。值得注意的是，这么“轻”的黑洞却驱动着极亮的红外辐射与气体外流，说明吸积与反馈效率同样关键。这类并合星系往往同时有星暴与活动星系核，两者都会影响对黑洞质量的推断。

## 怎么继续走

想看尘埃干扰更小、更可靠的反响映射样本，去 mass.ngc4151-black-hole；想看同一条轴线上质量更大的类星体，去 mass.3c273；想看并合之后长成的超大质量黑洞，去 space.m87-black-hole。这三条从可靠样本走向更重的类星体，再走向并合后长成的巨无霸。
