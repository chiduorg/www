---
id: mass.m87-galaxy
title: M87 星系：约 4.8×10⁴² kg，室女座星系团的中心巨椭圆星系
summary: >-
  M87 是室女座星系团中心的巨椭圆星系，总质量约 4.8×10⁴² kg，折合约 2.4×10¹² 个太阳质量，口径包含暗物质晕。数值由 X
  射线热气与恒星运动学联合给出，恒星质量约三千亿个太阳质量，相对不确定度约 30%。
dimension: mass
category: 星系与宇宙
displayValue: 4.8×10⁴² kg
quantity:
  value: 4.8e+42
  unit: kg
  measure: M87 星系总质量（含暗物质晕，约 2.4×10¹² 太阳质量）；由 X 射线热气与恒星运动学联合给出，相对不确定度约 30%
  approximate: true
grade: B
mass:
  type: total
  includesDarkMatter: true
  method: X-ray hot gas and stellar kinematics
  uncertainty:
    value: 0.3
    unit: relative
related:
  - mass.m87-black-hole
  - mass.virgo-cluster
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
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
tags:
  - 质量
  - 星系
  - M87
  - 巨椭圆星系
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: M87 星系总质量（含暗物质晕，约 2.4×10¹² 太阳质量）；由 X 射线热气与恒星运动学联合给出，相对不确定度约 30%
  precision: B 级；近似值/均值。
  massType: 总质量
  includesDarkMatter: 是
  uncertainty: 相对约 30%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B15 星系与星系团 · 4.8×10⁴² kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B15
  bandLabel: 星系与星系团
  log10: 42.681
  position: 88.9
  color: '#a6bfff'
  scaleMin: -40
  scaleMax: 53
titleEn: Messier 87
---
## 这个读数是什么

M87 是室女座星系团中心的巨椭圆星系，距我们约五千五百万光年，本条记录它的总质量约 4.8×10⁴² kg，折合约 2.4×10¹² 个太阳质量。[1] 口径包含暗物质晕，也包含测量半径内的炽热气体。它的恒星质量约三千亿个太阳质量，只占总质量的十分之一上下。[2] 它也是人类第一次拍到黑洞阴影的宿主星系。

## 口径与不确定度

总质量是引力质量，恒星质量是重子质量的一部分，两者含义不同，不能互换。[2] 本条只用含暗物质的总质量。相对不确定度约 30%，一是 X 射线气体未必处于流体静力学平衡，二是恒星运动学的示踪范围有限，外推依赖模型，因此标近似、定 B 级。[3]

## 怎么测出来的

钱德拉等 X 射线望远镜测得热气体的温度与密度剖面，由流体静力学平衡反推包围质量。光学与红外光谱给出恒星的速度弥散，沿视线方向独立约束引力势。[1] 两条路线在重叠半径内大体吻合，这是结果可信的关键。[3]

## 量级位置

4.8×10⁴² kg 位于 B15 带中下段，约为银河系总质量的一点六倍，约为室女座星系团总质量的五百分之一。[1] 它比它中心的黑洞 M87* 重约四百倍。作为星系团最亮成员，它正好连接“单星系”与“星系团”两个量级，也是研究星系团核心环境的首选目标。

## 怎么继续走

想看它中心的黑洞，去 mass.m87-black-hole；想看它所在的星系团，去 mass.virgo-cluster；想看被直接成像的阴影图景，去 space.m87-black-hole。[2] 这三条把同一个天体从星系、星系团与黑洞三个尺度拆开。想再往外一个量级，可去 mass.virgo-cluster 看它所属的整个系统。在这条质量轴上，它正好是从星系走向星系团的中间站。
