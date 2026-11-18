---
id: mass.m87-black-hole
title: M87*：1.29×10⁴⁰ kg，第一个被拍到阴影的黑洞
summary: >-
  M87* 是室女座 A 星系中心的超大质量黑洞，质量约 1.29×10⁴⁰
  kg，折合约六十五亿个太阳质量。事件视界望远镜的阴影测量与核区恒星动力学结果一致，相对不确定度约 11%。
dimension: mass
category: 黑洞
displayValue: 1.29×10⁴⁰ kg
quantity:
  value: 1.29e+40
  unit: kg
  measure: 黑洞质量（约 6.5×10⁹ 太阳质量）；由 EHT 阴影角直径与距离推得，并与核区恒星动力学交叉验证，相对不确定度约 11%
  approximate: false
grade: B
mass:
  type: dynamical
  includesDarkMatter: false
  method: EHT shadow and stellar dynamics
  uncertainty:
    value: 0.11
    unit: relative
related:
  - space.m87-black-hole
  - mass.sgr-a-star
  - mass.ton-618
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
  - title: Event Horizon Telescope
    url: 'https://eventhorizontelescope.org/'
    publisher: EHT Collaboration
    accessed: '2026-11-09'
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
tags:
  - 质量
  - 黑洞
  - 事件视界望远镜
  - 超大质量黑洞
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞质量（约 6.5×10⁹ 太阳质量）；由 EHT 阴影角直径与距离推得，并与核区恒星动力学交叉验证，相对不确定度约 11%
  precision: B 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 11%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B14 黑洞与类星体 · 1.29×10⁴⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B14
  bandLabel: 黑洞与类星体
  log10: 40.111
  position: 86.14
  color: '#ff9a4a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

M87* 是室女座 A 星系中心的超大质量黑洞，质量约 1.29×10⁴⁰ kg，折合约六十五亿个太阳质量。[1] 口径是事件视界望远镜阴影测量与恒星动力学联合给出的质量，质量是时空参数，不是把黑洞当物质称重。它位于室女座星系团中心的巨椭圆星系 M87，距我们约五千五百万光年。

## 口径与不确定度

阴影的角直径与距离共同定出质量，再与星系核的恒星动力学结果交叉验证。相对不确定度约 11%，定为 B 级，正文保留两位有效数字。[2] 阴影测量本身还依赖环的形态假设，距离误差也会按正比传入质量。阴影的环状形态与广义相对论预言一致，这也是这个质量能被接受的重要原因。

## 怎么测出来的

2017 年 EHT 在毫米波段分辨出 M87* 的阴影，环的直径约四十二微角秒，对应约六十五亿太阳质量。[2] 恒星动力学则通过核区恒星的速度弥散独立估计束缚质量，两条路线一致，这个数才站得住。[3] 它也是目前少数被“看见”并被称重的黑洞之一。射电干涉把全球多台望远镜连成一台等效口径接近地球直径的仪器。

## 量级位置

1.29×10⁴⁰ kg 位于 B14 带上段，是 3C 273 的约七倍，是 Ton 618 的约六分之一。[1] 它的事件视界尺度比人马座 A* 大一千五百倍，因此才在射电波段上大到能被分辨。在星系中心黑洞里，它已经属于重量级成员。它的质量约为太阳的六十五亿倍，事件视界大到光线绕行一圈需要数天。

## 怎么继续走

想看同一颗天体在空间图景里的位置，去 space.m87-black-hole；想看银河系中心那颗被轨道称重的小兄弟，去 mass.sgr-a-star；想看更极端的类星体黑洞，去 mass.ton-618。这三条分别给出空间图景、同一质量轴的近邻样本与更极端的上限参照。
