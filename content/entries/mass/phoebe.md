---
id: mass.phoebe
title: 土卫九：8.29×10¹⁸ kg，被土星抓住的彗星？
summary: >-
  土卫九（Phoebe）总质量 8.29×10¹⁸ kg，由 Cassini 飞越时的轨道跟踪与引力场拟合测定。平均直径约 213 公里，密度仅 1.638
  g/cm³，逆行轨道与暗表面说明它很可能是被捕获的环双星天体。
dimension: mass
category: 卫星与小天体
displayValue: 8.29×10¹⁸ kg
quantity:
  value: 8290000000000000000
  unit: kg
  measure: 土卫九 Phoebe 总质量，由 Cassini 2004 年飞越的无线电跟踪与轨道拟合得到，相对不确定度约千分之二
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft-flyby-tracking
  uncertainty:
    value: 0.002
    unit: relative
related:
  - mass.asteroid-eros
  - mass.asteroid-bennu
  - mass.comet-67p
  - space.ceres
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
  - title: Cassini at Saturn — Phoebe flyby
    url: 'https://www.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
  - title: JPL Small-Body Database
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: Cassini-Huygens mission
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 卫星
  - 土卫九
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 土卫九 Phoebe 总质量，由 Cassini 2004 年飞越的无线电跟踪与轨道拟合得到，相对不确定度约千分之二
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.2%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B10 小天体 · 8.29×10¹⁸ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B10
  bandLabel: 小天体
  log10: 18.919
  position: 63.35
  color: '#b8a58a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

土卫九（Phoebe）的总质量是 8.29×10¹⁸ kg，约合 8.3×10¹⁵ 吨。[1] 它是土星的一颗不规则卫星，平均直径约 213 公里，轨道逆行，表面很暗。这个数是整颗天体的总质量，包含它的冰—岩混合物质，不包含它可能产生的稀疏尘埃环。

## 口径与不确定度

本条采用总质量口径，相对不确定度约千分之二，属于 A 级。[2] Cassini 在 2004 年飞越时做了近距离跟踪，引力信号足以把质量定到千分之几。土卫九没有卫星，无法用开普勒定律反推，所以这条质量完全依赖航天器轨道拟合。正文给出的 1.638 g/cm³ 密度是质量除以形状模型体积的派生量，用来说明它多孔、富含冰。

## 怎么测出来的

2004 年 6 月，Cassini 在飞往土星主任务的途中以约 2068 公里距离掠过土卫九，无线电测距、测速记录到轨道被引力偏折的量；结合深空网跟踪与太阳光压模型，拟合出引力参数 GM，再换算为质量。[2] 相机与红外光谱同时给出了形状、自转与表面成分。方法是飞越跟踪加轨道拟合，一次近距离飞越就足以把质量定到千分之几。[3]

## 量级位置

8.29×10¹⁸ kg 位于 B10 带的最上段，已接近 B11 行星带的下沿。[3] 它比爱神星重约一千二百倍，比 67P 重约八十三万倍；与月球 7.35×10²² kg 相比仍轻约九千倍。密度只有 1.638 g/cm³，低于典型石质天体，说明它富含水冰且内部多孔，很可能是一颗被土星捕获的环双星天体。

## 怎么继续走

想看矮行星与小行星的质量对照，去空间轴的 space.ceres；想比较同类小天体的质量，去 mass.asteroid-eros 与 mass.asteroid-bennu；想看彗核那一端的读数，去 mass.comet-67p。
