---
id: mass.ngc4395-black-hole
title: NGC 4395 中心黑洞：7.16×10³⁵ kg，反响映射称出的低质量端样本
summary: >-
  NGC 4395 是一个几乎没有核球的低表面亮度螺旋星系，中心黑洞质量约 7.16×10³⁵
  kg，折合约三十六万个太阳质量。数值来自宽线区反响映射，相对不确定度约 20%。
dimension: mass
category: 恒星与致密天体
displayValue: 7.16×10³⁵ kg
quantity:
  value: 7.16e+35
  unit: kg
  measure: 黑洞反响映射质量（约 3.6×10⁵ 太阳质量）；由宽线区时延与谱线宽度经维里关系换算得出，相对不确定度约 20%
  approximate: false
grade: B
mass:
  type: dynamical
  includesDarkMatter: false
  method: reverberation mapping
  uncertainty:
    value: 0.2
    unit: relative
related:
  - mass.ngc4151-black-hole
  - mass.sgr-a-star
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
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
  - title: ESA Science
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 黑洞
  - 活动星系核
  - 反响映射
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞反响映射质量（约 3.6×10⁵ 太阳质量）；由宽线区时延与谱线宽度经维里关系换算得出，相对不确定度约 20%
  precision: B 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 20%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B14 黑洞与类星体 · 7.16×10³⁵ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B14
  bandLabel: 黑洞与类星体
  log10: 35.855
  position: 81.56
  color: '#ff9a4a'
  scaleMin: -40
  scaleMax: 53
titleEn: NGC 4395 black hole
---
## 这个读数是什么

NGC 4395 是一个几乎没有核球的低表面亮度螺旋星系，其中心黑洞质量约 7.16×10³⁵ kg，折合约三十六万个太阳质量。[1] 口径是反响映射质量，质量是时空参数，不是把黑洞当物质称重。它是少数能用反响映射称重的低质量活动星系核。这类星系核球很小，中心黑洞也轻，是研究黑洞与宿主星系关系时不可替代的低质量端样本。

## 口径与不确定度

反响映射测的是宽线区半径与谱线延迟，再由维里因子换算质量，因此结果依赖宽线区的几何与运动学假设。相对不确定度约 20%，正文保留两位有效数字。[2] 这类系统质量小、信号弱，观测难度大，但仍是低质量端最可靠的方法之一。维里因子通常由其他活动星系核标定，再迁移到这里，这一步本身也会引入系统误差。

## 怎么测出来的

长期光谱监测记录氢宽线强度变化相对连续谱的滞后，滞后时间乘以光速给出宽线区半径。[2] 再结合谱线宽度得到的速度，就能用维里定理估出中心质量。NGC 4395 的宽线区极小，延迟只有小时量级，需要高节奏监测和仔细的背景扣除。[3]

## 量级位置

7.16×10³⁵ kg 约为人马座 A* 的十二分之一，是 M87* 的一万八千分之一。[1] 它落在中等质量黑洞的上端，正好接上超大质量黑洞的下沿。把它和 NGC 4151 相比，两者方法相同、质量却差约两个数量级，正好检验反响映射的标定是否可靠。

## 怎么继续走

想看在更大质量上使用同一方法的活动星系核，去 mass.ngc4151-black-hole；想看银心那颗被轨道称重的黑洞作对照，去 mass.sgr-a-star；想了解事件视界附近的成像，去 space.m87-black-hole。低质量端样本难得，值得和更大质量的同类放在一起对照，才能看出质量标定是否一致。
