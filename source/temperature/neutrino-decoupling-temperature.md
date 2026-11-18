---
id: temperature.neutrino-decoupling-temperature
title: 中微子退耦温度
titleEn: Neutrino decoupling temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  早期宇宙冷却到约 10¹⁰ K（约 1 MeV）时，中微子与物质的弱相互作用率低于膨胀率，中微子开始自由传播。这是“退耦”的温度量级，不是中微子此刻才产生的温度。
quantity:
  value: 10000000000
  unit: K
  measure: neutrino-decoupling-temperature
  measureLabel: 弱相互作用冻结时的辐射温度
  approximate: true
displayValue: 约 10¹⁰ K（约 1 MeV）
related:
  - time.neutrino-decoupling
  - temperature.electron-positron-annihilation-temperature
  - time.big-bang
  - temperature.supernova
reviewStatus: reviewed
sources:
  - title: 'Week 3: Thermal History of the Universe (Cosmology Ay127)'
    url: 'https://sites.astro.caltech.edu/~george/ay127/kamionkowski-earlyuniverse-notes.pdf'
    publisher: Caltech Astronomy
    accessed: '2026-11-07'
  - title: 'Advanced Topics in Cosmology: A Pedagogical Introduction — Thermal History of the Universe'
    url: 'https://ned.ipac.caltech.edu/level5/March06/Padmanabhan/Nabhan2.html'
    publisher: NASA/IPAC Extragalactic Database (NED), Caltech
    accessed: '2026-11-07'
conditions: >-
  对象为辐射主导早期宇宙中与光子、电子—正电子等离子体耦合的中微子气体；取弱相互作用反应率降到与哈勃膨胀率相当的温度；10¹⁰ K 为取整量级，对应约 1 MeV。
uncertainty: >-
  不同计算给出约 1–2 MeV 的退耦范围，具体值依赖有效相对论自由度、中微子味道以及是否引入非标准相互作用；不能当作单一普适常数。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: radiation-field
  scene: temperature.object
  caption: 早期宇宙中微子退耦 · 10¹⁰ K 量级
  note: 中微子流、光子热浴与退耦界面为示意，非按比例，非观测重建；颜色不代表真实光谱。
  color: '#9fd6c1'
  variant: neutrino
  backdrop: extreme
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 宇宙学
---
## 它是什么

中微子退耦指中微子不再与等离子体频繁碰撞、开始自由穿行的时刻。当温度约 10¹⁰ K、对应约 1 MeV 时，弱相互作用的时间尺度已经长于宇宙膨胀的时间尺度，反应跟不上膨胀，中微子便“冻结”出来。[1] 这里描述的是一个热力学条件，不是某一颗粒子的诞生时刻，也不是今天宇宙中微子背景的温度。

## 怎样测到或为何是推断

退耦温度由弱相互作用截面、宇宙膨胀率和有效相对论自由度计算得到。Padmanabhan 的讲义给出约 1.6×10¹⁰ K 的退耦温标，Kamionkowski 的讲义则把中微子退耦放在约 1 MeV、约 1 秒的量级。[1][2] 这些是模型计算值；今天的宇宙中微子背景尚未被直接探测，只能通过宇宙微波背景、大尺度结构和大爆炸核合成间接约束。

## 数值与口径

本条取 10¹⁰ K 作为弱相互作用冻结的量级坐标。按 1 MeV ≈ 1.16×10¹⁰ K 换算，10¹⁰ K 约等于 0.86 MeV；换成摄氏温标仍约为 10¹⁰ °C。不同计算给出 1–2 MeV 的退耦范围，具体值依赖有效自由度、中微子味道和是否考虑非标准相互作用。因此它是数量级参照，不是精确测温，更不能当作单一普适常数。[1][2]

## 常见误解

第一，把退耦当成中微子停止运动；退耦后它们仍以接近光速自由传播，只是几乎不再与物质反应。第二，把退耦温度当成今天宇宙中微子背景的温度；后者只有约 1.95 K，因膨胀红移而极低。第三，以为三种中微子在同一温度退耦；不同味道的弱相互作用率略有差异，计算给出的温度也不完全相同。[2] 第四，把退耦与正负电子湮灭混为一谈；两者时间接近，但物理过程不同。[1]

## 与其他尺度的关系

10¹⁰ K 与正负电子湮灭的约 10¹⁰ K 同量级，却是不同事件；湮灭改变了光子与中微子的能量分配，退耦则让中微子脱离等离子体。它高于大爆炸核合成的 10⁹ K 约一个数量级，低于核心坍缩中微子球的 10¹¹ K 约一个数量级，更远低于夸克胶子等离子体的 5×10¹² K。比较时应区分“宇宙学退耦温度”和“超新星中微子球温度”。[1][2]
