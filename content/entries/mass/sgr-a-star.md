---
id: mass.sgr-a-star
title: 人马座 A*：8.55×10³⁶ kg，银心黑洞的轨道称重
summary: >-
  人马座 A* 是银河系中心的超大质量黑洞，质量约 8.55×10³⁶ kg，折合 4.297×10⁶ 个太阳质量。数值由银心 S
  星轨道拟合得出，GRAVITY 干涉测量把相对不确定度压到约 0.3%。
dimension: mass
category: 黑洞
displayValue: 8.55×10³⁶ kg
quantity:
  value: 8.55e+36
  unit: kg
  measure: 黑洞动力学质量（约 4.297×10⁶ 太阳质量）；由银心 S 星轨道拟合得出，相对不确定度约 0.3%
  approximate: false
grade: A
mass:
  type: dynamical
  includesDarkMatter: false
  method: stellar orbits (GRAVITY)
  uncertainty:
    value: 0.003
    unit: relative
related:
  - mass.gcirs-13e
  - mass.m87-black-hole
  - space.sagittarius-a-star
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
  - title: Event Horizon Telescope
    url: 'https://eventhorizontelescope.org/'
    publisher: EHT Collaboration
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
  - 银心
  - 超大质量黑洞
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞动力学质量（约 4.297×10⁶ 太阳质量）；由银心 S 星轨道拟合得出，相对不确定度约 0.3%
  precision: A 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 0.3%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B14 黑洞与类星体 · 8.55×10³⁶ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B14
  bandLabel: 黑洞与类星体
  log10: 36.932
  position: 82.72
  color: '#ff9a4a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

人马座 A* 是银河系中心的超大质量黑洞，质量约 8.55×10³⁶ kg，折合 4.297×10⁶ 个太阳质量。[1] 口径是恒星轨道拟合得到的动力学质量，质量是时空参数，不是把黑洞当物质称重。它是目前被称得最准的超大质量黑洞之一。它离我们约两万六千光年，是距离最近、也最容易被逐颗恒星跟踪的超大质量黑洞。

## 口径与不确定度

数值来自银心 S 星群长达数十年的天体测量，拟合出中心点质量与银心距离。相对不确定度约 0.3%，定为 A 级，正文保留四位有效数字。[2] 这一精度已经把黑洞质量与银心星团的延展质量分开，也让人马座 A* 成为检验引力理论的基准。A 级意味着这条读数可以直接用于检验引力模型，而不只是给个大致位置。

## 怎么测出来的

GRAVITY 干涉仪把 S2 等恒星的位置测到几十微角秒，配合径向速度，可以描出完整的开普勒轨道。[2] 由轨道周期与半长轴直接得到中心质量，同时还能测出引力红移与近星点进动。[3] 这种方法只看恒星怎么绕，不依赖黑洞本身发光。

## 量级位置

8.55×10³⁶ kg 位于 B14 带中段，比 GCIRS 13E 这类候选重约三千倍，比 M87* 轻约一千五百倍。[1] 它对应的事件视界半径约一千二百万千米，远小于水星轨道。对银河系而言，这颗黑洞只占极小份额，却决定了银心几十光年内的恒星运动。把太阳质量当作单位，它相当于四百多万颗太阳，却仍只占银河系恒星总质量的很小一部分。

## 怎么继续走

想看同一条质量轴上更小的中等质量候选，去 mass.gcirs-13e；想看 EHT 拍到阴影的 M87*，去 mass.m87-black-hole；想看银心这个天体本身的图景，去 space.sagittarius-a-star。从候选到确认再到成像，这三步正好展示了黑洞质量测量的三种精度层级，也让数字背后的方法差异一目了然。
