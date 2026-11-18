---
id: mass.gcirs-13e
title: GCIRS 13E：2.59×10³³ kg，银心附近的中等质量黑洞候选
summary: >-
  GCIRS 13E 是银河系中心附近的一个致密星团，被怀疑中心藏着一颗约 2.59×10³³ kg 的黑洞，折合约 1300
  个太阳质量。这个数由星团内恒星的运动学估计得出，相对不确定度约 50%，只能给量级。
dimension: mass
category: 黑洞
displayValue: 2.59×10³³ kg
quantity:
  value: 2.59e+33
  unit: kg
  measure: 黑洞动力学质量（约 1300 太阳质量，中等质量黑洞候选）；由星团内恒星速度弥散与束缚质量估计得出，相对不确定度约 50%
  approximate: false
grade: C
mass:
  type: dynamical
  includesDarkMatter: false
  method: stellar dynamics
  uncertainty:
    value: 0.5
    unit: relative
related:
  - mass.omega-centauri-bh
  - mass.sgr-a-star
  - space.black-hole-event-horizon
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
  - 中等质量黑洞
  - 银心
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞动力学质量（约 1300 太阳质量，中等质量黑洞候选）；由星团内恒星速度弥散与束缚质量估计得出，相对不确定度约 50%
  precision: C 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 50%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 2.59×10³³ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 33.413
  position: 78.94
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

GCIRS 13E 是银河系中心附近一个致密星团，被怀疑中心藏着一颗中等质量黑洞。本条记录它的动力学质量约 2.59×10³³ kg，折合约 1300 个太阳质量。[1] 口径是恒星动力学质量，质量是时空参数，不是把黑洞当物质称重。由于中心黑洞本身尚未被直接确认，这条读数只能给量级。

## 口径与不确定度

这个数值来自星团内恒星的速度弥散与束缚质量估计，而不是看到事件视界。相对不确定度约 50%，因此定为 C 级，正文只保留两位有效数字。[2] 真实质量可能落在数百到两千太阳质量的较大区间内，所以更稳妥的说法是“中等质量黑洞候选”。

## 怎么测出来的

观测用近红外自适应光学相机分辨星团成员星，测出它们的视向速度与自行，再用维里定理把速度弥散换算为束缚质量。[2] 星团处在银心强潮汐场中，潮汐剥离与前景消光都会影响结果，质量反演对模型假设相当敏感。[3] 这也是它至今仍被列为候选的原因。

## 量级位置

2.59×10³³ kg 落在 B14 带下段，约等于地球质量的四亿三千万倍，却只有人马座 A* 的万分之三。[1] 它正好卡在恒星级黑洞与超大质量黑洞之间的空档，是检验中等质量黑洞是否真实存在的关键样本。若它成立，黑洞的质量分布就不该只有两个孤立的峰。银心附近还有别的致密星团，但没有一个像它这样接近可测的边界。

## 怎么继续走

想看同样靠恒星动力学定质量、但证据更硬的系统，去 mass.omega-centauri-bh；想看银心那颗已被精确称重的超大质量黑洞，去 mass.sgr-a-star；想了解事件视界本身，去 space.black-hole-event-horizon。这三条分别通向中等质量的另一候选、已被精确称重的极端样本，以及黑洞边界的空间图景，正好拼出从候选到确认的路径。
