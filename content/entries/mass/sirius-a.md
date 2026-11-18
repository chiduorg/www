---
id: mass.sirius-a
title: 天狼星 A：4.10×10³⁰ kg，夜空最亮恒星的质量
summary: 天狼星 A 质量约 4.10×10³⁰ kg，约 2.06 太阳质量。数值来自它与白矮星伴星天狼星 B 的双星轨道拟合，相对不确定度约 3%。
dimension: mass
category: 恒星
displayValue: 4.10×10³⁰ kg
quantity:
  value: 4.1e+30
  unit: kg
  measure: 恒星质量（约 2.06 太阳质量）；由与天狼星 B 的双星轨道拟合得到，相对不确定度约 3%
  approximate: false
grade: B
mass:
  type: stellar
  includesDarkMatter: false
  method: binary orbit fitting
  uncertainty:
    value: 0.03
    unit: relative
related:
  - mass.sirius-b
  - mass.sun
  - mass.betelgeuse
  - space.sun
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
  - title: IAU 2015 Resolution B3
    url: 'https://www.iau.org/'
    publisher: International Astronomical Union
    accessed: '2026-11-09'
  - title: NASA Science
    url: 'https://science.nasa.gov/'
    publisher: NASA
    accessed: '2026-11-09'
  - title: SIMBAD Astronomical Database
    url: 'https://simbad.cds.unistra.fr/'
    publisher: CDS
    accessed: '2026-11-09'
tags:
  - 质量
  - 恒星
  - 天狼星
  - 双星
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 恒星质量（约 2.06 太阳质量）；由与天狼星 B 的双星轨道拟合得到，相对不确定度约 3%
  precision: B 级；记录值。
  massType: 恒星质量
  includesDarkMatter: 否
  uncertainty: 相对约 3%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B13 恒星与致密遗迹 · 4.10×10³⁰ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B13
  bandLabel: 恒星与致密遗迹
  log10: 30.613
  position: 75.93
  color: '#ffd37a'
  scaleMin: -40
  scaleMax: 53
---
## 这个读数是什么

天狼星 A 是大犬座 α 的主星，距离约 8.6 光年，是夜空中最亮的恒星。它的质量约 4.10×10³⁰ kg，约 2.06 太阳质量，比太阳重一倍，光谱型为 A1V。[1] 它的伴星天狼星 B 是一颗白矮星，两者绕共同质心公转，周期约五十年。它位于大犬座，冬季夜空中非常醒目。

## 口径与不确定度

口径为恒星质量，包含天狼星 A 的全部物质，不包含暗物质。[2] 数值由双星轨道拟合得到，相对不确定度约 3%，定为 B 级。这里的 3% 主要来自轨道倾角与视差的联合误差，而不是来自光谱。两星质量之和与质量比分别由轨道几何和质心位置给出，互为校验。

## 怎么测出来的

天狼星是最早被测定轨道的双星之一：把几十年的位置测量拼成椭圆轨道，得到周期、半长轴与倾角，再用开普勒第三定律求出两星质量之和。[2] 质量比可由两星到质心的距离比直接读出，于是各自的质量都能定出来。[3] 天狼星 B 的引力红移又对质量比提供了独立检验，这条检验不需要知道距离，只依赖光谱。

## 量级位置

4.10×10³⁰ kg 位于 B13 带的中上段，约是太阳的两倍，也是主序星中偏重的一端。[1] 比它更重的恒星寿命更短、光度更高；比它更轻的则占据恒星数量的绝大多数。主序星的质量与光度大约呈四次方关系，因此两倍质量意味着十倍以上的光度。

## 怎么继续走

想看它的白矮星伴星，去 mass.sirius-b；想看太阳作为对照，去 mass.sun；想看更重的恒星，去 mass.betelgeuse；想看恒星在空间轴上的图景，去 space.sun。天狼星系统一颗主序星配一颗白矮星，是检验恒星演化模型最方便的天然实验室。它也解释了为什么质量比亮度更基本。
