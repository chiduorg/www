---
id: mass.m87-black-hole
title: 'M87*：1.29×10⁴⁰ kg，第一个被拍到阴影的黑洞'
summary: >-
  M87* 是室女座 A 星系中心的超大质量黑洞，质量约 1.29×10⁴⁰
  kg，折合约六十五亿个太阳质量。事件视界望远镜的阴影测量与核区恒星动力学结果一致，相对不确定度约 11%。
dimension: mass
category: 恒星与致密天体
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
  - space.black-hole-event-horizon
  - temperature.black-hole-accretion-disk
  - time.first-supermassive-black-holes
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      2026-11-24 L2 深化：补两条测量路线、误差预算、事件视界与阴影的区别，以及跨轴入口；量值与审核状态保持不变。
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
  - title: "black hole"
    url: "https://www.britannica.com/science/black-hole"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
  - title: "ESA Science"
    url: "https://www.esa.int/"
    publisher: "European Space Agency"
    accessed: '2026-11-24'
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
titleEn: M87*
---
## 这个读数是什么

M87* 是室女座 A 星系中心的超大质量黑洞，质量约 1.29×10⁴⁰ 千克，折合约六十五亿个太阳质量。[1] 它位于室女座星系团中心的巨椭圆星系 M87，距我们约五千五百万光年。这里的“质量”是时空参数，不是把黑洞放上一台秤称出来的物质重量。

## 为什么不是“称重量”

黑洞没有可站立的表面，也没有一套能直接读取的秤。天文学家能做的是测量它周围物质和光的运动，再用引力理论反推中心质量。质量越大，周围恒星转得越快，事件视界和阴影也越大。因此，M87* 的质量是一个动力学参数，不是“体积乘以密度”。[1][2]

## 两条独立路线

第一条路线是事件视界望远镜。2017 年，EHT 在毫米波段把全球多台望远镜连成一台等效口径接近地球直径的仪器，分辨出 M87* 的环状阴影，环的直径约四十二微角秒，对应约六十五亿个太阳质量。[2] 第二条路线是核区恒星动力学：通过恒星的速度弥散估计束缚质量，结果与阴影测量一致。[3] 两条独立路线相互校验，这个数才站得住。

## 11% 的误差从哪里来

相对不确定度约 11%，不是一个可以忽略的小数点。[2] 阴影的角直径与距离共同定出质量，距离误差会按正比传入质量；环的形态、气体分布和观测时的标定也会影响结果。恒星动力学还有样本、各向异性和视线投影等假设。两条路线一致，降低了系统性偏倚，但不能把 11% 压成“精确到个位数”。

## 事件视界不是“洞口”

事件视界是光线无法逃出的边界，阴影则是它在观测平面上的投影。阴影比事件视界看起来更大，因为强引力会弯折周围的光线；它不是宇宙中的一个黑色洞口，也不是黑洞的“表面”。[2] 质量越大，事件视界的尺度越大，阴影也越容易被分辨。M87* 之所以成为第一个被拍到阴影的黑洞，是因为它足够大、足够近，而不是因为它离我们最近。

## 量级位置

1.29×10⁴⁰ 千克位于质量阶梯的 B14 带上段，是类星体 3C 273 黑洞质量的约七倍，是 Ton 618 的约六分之一。[1] 它的事件视界尺度比银河系中心的人马座 A* 大约一千五百倍，因此才在射电波段上大到能被分辨。它属于星系中心黑洞里的重量级成员，但仍不是宇宙中已知的最大黑洞。

## 五轴对照

在空间轴，它对应 space.m87-black-hole 的星系图景；在质量轴，它是 mass.sgr-a-star 的近邻样本和 mass.ton-618 的较低参照；在温度轴，吸积盘与喷流把引力能变成辐射，可对照 temperature.black-hole-accretion-disk；在时间轴，它属于第一代超大质量黑洞如何形成的问题，可去 time.first-supermassive-black-holes。同一个天体，在五个轴上是五种问题。

## 怎么继续走

想看银河系中心那颗被轨道称重的小兄弟，去 mass.sgr-a-star；想看更极端的类星体黑洞，去 mass.ton-618；想看事件视界和阴影的区别，去 space.black-hole-event-horizon。把“质量”与“大小”分开，是理解黑洞的第一步。

## 延伸核对

补充的来源 [4]（Encyclopaedia Britannica）、[5]（European Space Agency） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
