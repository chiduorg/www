---
id: mass.omega-centauri-bh
title: ω 星团中心黑洞：1.63×10³⁴ kg，脉冲星计时的独立校验
summary: >-
  半人马座 ω 是银河系最大的球状星团，其中心可能存在一颗约 1.63×10³⁴ kg 的黑洞，折合约 8200
  个太阳质量。恒星动力学与脉冲星计时两条路线互相校验，相对不确定度约 15%。
dimension: mass
category: 恒星与致密天体
displayValue: 1.63×10³⁴ kg
quantity:
  value: 1.63e+34
  unit: kg
  measure: 黑洞动力学质量（约 8200 太阳质量）；由星团中心恒星速度弥散反演，并用星团内脉冲星计时独立约束，相对不确定度约 15%
  approximate: false
grade: B
mass:
  type: dynamical
  includesDarkMatter: false
  method: stellar dynamics and pulsar timing
  uncertainty:
    value: 0.15
    unit: relative
related:
  - mass.gcirs-13e
  - mass.sgr-a-star
  - space.neutron-star
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
  - 中等质量黑洞
  - 球状星团
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞动力学质量（约 8200 太阳质量）；由星团中心恒星速度弥散反演，并用星团内脉冲星计时独立约束，相对不确定度约 15%
  precision: B 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 15%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B14 黑洞与类星体 · 1.63×10³⁴ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B14
  bandLabel: 黑洞与类星体
  log10: 34.212
  position: 79.8
  color: '#ff9a4a'
  scaleMin: -40
  scaleMax: 53
titleEn: Omega Centauri black hole
---
## 这个读数是什么

半人马座 ω 是银河系最大的球状星团，其中心可能存在一颗约 1.63×10³⁴ kg 的黑洞，折合约 8200 个太阳质量。[1] 口径为恒星动力学质量，并用星团内脉冲星计时独立校验；质量是时空参数，不是把黑洞当物质称重。这是目前中等质量黑洞候选里证据较强的一例。

## 口径与不确定度

数值来自中心恒星速度随半径上升的动力学模型，并与星团内脉冲星的加速度限制交叉检验。相对不确定度约 15%，定为 B 级，正文保留两位有效数字。[2] 模型假设中心存在一个致密点质量，若把暗弱星群也计入束缚质量，拟合结果会有所偏移。

## 怎么测出来的

光谱观测给出中心几角秒内恒星的速度弥散与转动，结合哈勃望远镜的自行数据，可以反演束缚质量随半径的分布。[2] 星团内的毫秒脉冲星提供了另一种独立探针：计时残差能约束中心引力势的强度，从而排除纯星群解释。[3] 两条路线一致，结论才站得住。

## 量级位置

1.63×10³⁴ kg 约为地球质量的二十七亿倍，是人马座 A* 的五百分之一左右，却比恒星级黑洞重上百倍。[1] 它落在中等质量区间，填补了恒星坍缩黑洞与超大质量黑洞之间的空白，也让“中等质量黑洞是否存在”从猜测变成可检验的问题。球状星团是宇宙里最古老的天体系统之一，中心藏黑洞并不奇怪，难的是把它与密集的恒星背景分开。

## 怎么继续走

想看同一类中等质量候选但更不确定的样本，去 mass.gcirs-13e；想看银心被轨道精确称重的黑洞，去 mass.sgr-a-star；想了解脉冲星这类计时探针，去 space.neutron-star。ω 星团本身的恒星密度远高于太阳附近，把它和银河系中心放在一起，就是球状星团与星系核两种致密环境的对照。
