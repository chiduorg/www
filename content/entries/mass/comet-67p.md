---
id: mass.comet-67p
title: 67P/丘留莫夫—格拉西缅科：9.982×10¹² kg，一百亿吨的彗核
summary: >-
  Rosetta 通过探测器轨道拟合给出 67P 彗核总质量 9.982×10¹² kg，约一百亿吨。密度仅 533
  kg/m³，说明它是一颗高孔隙率的碎石堆彗星，不是实心冰块。
dimension: mass
category: 彗星与小行星
displayValue: 9.982×10¹² kg
quantity:
  value: 9982000000000
  unit: kg
  measure: 67P 彗核总质量（不含彗发与彗尾），由 Rosetta 探测器在彗核引力场中的测距测速数据做轨道拟合得到，相对不确定度约万分之三
  approximate: false
grade: A
mass:
  type: total
  includesDarkMatter: false
  method: spacecraft-tracking
  uncertainty:
    value: 0.0003
    unit: relative
related:
  - mass.comet-halley
  - mass.asteroid-toutatis
  - mass.asteroid-bennu
  - space.comet-67p
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
  - title: Rosetta — comet 67P/Churyumov-Gerasimenko
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
  - title: JPL Small-Body Database
    url: 'https://ssd.jpl.nasa.gov/'
    publisher: NASA Jet Propulsion Laboratory
    accessed: '2026-11-09'
  - title: NASA Solar System Exploration
    url: 'https://solarsystem.nasa.gov/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
tags:
  - 质量
  - 彗星
  - 67P
  - 太阳系小天体
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 67P 彗核总质量（不含彗发与彗尾），由 Rosetta 探测器在彗核引力场中的测距测速数据做轨道拟合得到，相对不确定度约万分之三
  precision: A 级；记录值。
  massType: 总质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.03%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B9 巨型工程 · 9.982×10¹² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B9
  bandLabel: 巨型工程
  log10: 12.999
  position: 56.99
  color: '#d8b46a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

67P/丘留莫夫—格拉西缅科的总质量是 9.982×10¹² kg，约合一百亿吨。[1] 这是彗核固体的总质量，包含水冰、尘埃与有机物的混合物；彗发和彗尾里已经离开核的气体与尘埃不在其中，它们在任意时刻的质量都小到可以忽略。读这个数时要记住，它是引力给出的整体质量，不是“体积乘一个假设密度”。

## 口径与不确定度

本条采用总质量口径，来源是 Rosetta 探测器在彗核引力场中的轨道拟合，相对不确定度约万分之三。[2] 同一颗彗星若按形状模型乘假设密度估算，会得到相近但不独立的数；那样等于把密度假设当输入，误差更大，所以本条不采用。文中提到的 533 kg/m³ 是用质量除以形状模型体积反推出的派生量，不是测量前提。[1] 口径只用一次，不混用“彗核质量”和“彗星系统质量”。

## 怎么测出来的

2014 年 Rosetta 抵达后长期绕彗核飞行，探测器在不同日心距、不同轨道上的加速度被彗核引力扰动；把这些测距、测速数据与太阳光压、彗星气体喷射的反作用一起做动力学拟合，就能解出引力参数 GM，再除以引力常数 G 得到质量。[2] 近距离飞越和 Philae 着陆器的位置数据进一步收紧了约束。方法是航天器跟踪加轨道拟合，既不是天平，也不是雷达测距。

## 量级位置

9.982×10¹² kg 落在 B10 带的下段。[3] 它比贝努重约一百三十六倍，比图塔蒂斯轻约五倍，比哈雷轻约二十二倍；与地球的 5.97×10²⁴ kg 相比小十二个数量级。密度只有水的约一半，说明这颗彗星内部孔隙率很高，是一堆尚未压实的原始碎石，而不是一整块冰。

## 怎么继续走

想看它的形状、表面温度与着陆点，去空间轴的 space.comet-67p；想比较同一质量带的其他小天体，去 mass.comet-halley、mass.asteroid-toutatis 与 mass.asteroid-bennu；想理解质量与密度的区别，去 mass.asteroid-itokawa。
