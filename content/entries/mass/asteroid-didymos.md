---
id: mass.asteroid-didymos
title: 双卫一（主星）：5.2×10¹¹ kg，靠卫星轨道称出来的质量
summary: >-
  双卫一 Didymos 主星总质量约 5.2×10¹¹ kg，不确定度约两成。它没有探测器环绕，质量靠 Dimorphos
  绕主星的轨道周期与半长轴，经开普勒第三定律反推。
dimension: mass
category: 彗星与小行星
displayValue: 5.2×10¹¹ kg
quantity:
  value: 520000000000
  unit: kg
  measure: 65803 Didymos 主星总质量（不含卫星 Dimorphos），由卫星轨道周期与半长轴经开普勒第三定律反推，不确定度约 ±20%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: false
  method: orbit-fit
  uncertainty:
    value: 0.2
    unit: relative
related:
  - mass.asteroid-bennu
  - mass.asteroid-itokawa
  - mass.asteroid-toutatis
  - space.asteroid-belt
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
  - title: DART — Double Asteroid Redirection Test
    url: 'https://www.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
  - title: JPL Small-Body Database
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: Hera — asteroid deflection mission
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
tags:
  - 质量
  - 小行星
  - 双卫一
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 65803 Didymos 主星总质量（不含卫星 Dimorphos），由卫星轨道周期与半长轴经开普勒第三定律反推，不确定度约 ±20%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 20%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 5.2×10¹¹ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 11.716
  position: 55.61
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

双卫一（65803 Didymos）主星的总质量约为 5.2×10¹¹ kg，也就是约五亿吨。[1] 它是一颗近地小行星，直径约 780 米，身边有一颗直径约 160 米的卫星 Dimorphos。本条只给主星质量，不把卫星算进去；若把两者相加，得到的是“系统总质量”，那是另一个口径。

## 口径与不确定度

本条采用主星总质量口径，不确定度约两成，属于 B 级推导值。[2] 由于没有探测器环绕主星，质量不是从绕飞轨道直接解出的，而是从卫星轨道反推：先由开普勒第三定律得到系统总质量，再按卫星与主星的体积比扣除卫星的少量贡献。两步都带模型假设，所以误差比环绕探测大一个量级。[1]

## 怎么测出来的

地面雷达与光学测光长期跟踪 Dimorphos 绕主星的轨道，定出半长轴约 1.19 公里、周期约 11.9 小时；代入开普勒第三定律即可解出系统总质量。[2] 2022 年 DART 撞击 Dimorphos 后，轨道周期缩短了约 32 分钟，这个变化量又反过来校准了质量与动量传递效率。方法是轨道拟合，而不是雷达直接测质量，也不是体积乘密度。[3]

## 量级位置

5.2×10¹¹ kg 位于 B10 带的最下段。[3] 它约为贝努的七倍，约为糸川的十五倍，比图塔蒂斯轻约一百倍；与地球 5.97×10²⁴ kg 相比小十三个数量级。主星密度约 2.2 g/cm³，属于石质碎石堆；它表面的重力只有地球的约万分之二。

## 怎么继续走

想看这次撞击实验本身，去 mass.asteroid-bennu 与 mass.asteroid-itokawa 比较另一类采样目标；想看只有雷达约束的同带对象，去 mass.asteroid-toutatis；想看小行星带的整体位置，从空间轴的 space.asteroid-belt 进入。
