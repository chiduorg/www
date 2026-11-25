---
id: temperature.electron-positron-annihilation-temperature
title: 正负电子湮灭温度
titleEn: Electron-positron annihilation temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  电子静质量对应约 5.9×10⁹ K；当温度降到约 10¹⁰ K 时，正负电子对的产生与湮灭不再维持平衡，湮灭开始净减少对粒子并加热光子。
quantity:
  value: 11000000000
  unit: K
  measure: electron-positron-annihilation-temperature
  measureLabel: 正负电子对湮灭效率显著下降的辐射温度
  approximate: true
displayValue: 约 1.1×10¹⁰ K（约 0.95 MeV）
related:
  - time.electron-positron-annihilation
  - temperature.neutrino-decoupling-temperature
  - time.big-bang
  - temperature.quark-gluon
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
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为辐射主导早期宇宙中的光子—电子—正电子等离子体；取电子对产生与湮灭明显偏离平衡、湮灭接近尾声的温度量级；1.1×10¹⁰ K 为取整坐标，对应约 0.95 MeV。
uncertainty: >-
  电子静质量 511 keV 对应约 5.9×10⁹ K，而湮灭显著发生在约 10¹⁰ K；具体转变是渐变而非突变，在不同有效自由度与时间定义下可有一倍左右的差异。
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
  caption: 早期宇宙正负电子对湮灭 · 10¹⁰ K 量级
  note: 粒子对、湮灭闪光与光子为示意，非按比例，非观测重建；颜色不代表真实光谱。
  color: '#c7a6e0'
  variant: pair
  backdrop: extreme
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 宇宙学
---
## 它是什么

早期宇宙温度高于约 10¹⁰ K 时，光子能量足以不断产生正负电子对，产生与湮灭保持平衡。随着冷却，能产生电子对的光子越来越少，湮灭逐渐占上风，电子和正电子成对消失，把能量交给光子。[1] 这里说的“湮灭温度”是这一平衡明显偏向湮灭的辐射温度量级，不是某个瞬间的相变温度。

## 怎样测到或为何是推断

我们无法回到早期宇宙测温，只能由宇宙膨胀、统计力学和粒子物理计算推断。电子静质量 511 keV 对应约 5.9×10⁹ K；计算表明，到约 10¹⁰ K 时电子对的数量已显著下降，湮灭接近尾声。[1][2] 这些结果与轻元素丰度和宇宙微波背景的推算相互印证，但仍属模型推断，不是直接测量。

## 数值与口径

本条取 1.1×10¹⁰ K 作为湮灭效率显著下降的量级坐标。按 1 MeV ≈ 1.16×10¹⁰ K 换算，它约等于 0.95 MeV，即约 9.5×10⁹ °C。电子静质量对应温度常写作约 5.9×10⁹ K（511 keV），但湮灭并不是在这个温度突然发生，而是在约 10¹⁰ K 附近逐渐偏离平衡。数值是数量级参照，不是精确测温。[1][2]

## 常见误解

第一，把“湮灭温度”理解成电子对在这一刻才出现或消失；实际是产生与湮灭的平衡随冷却逐渐倾斜。[2] 第二，把电子静质量对应温度当成湮灭完成的温度；前者约 5.9×10⁹ K，后者要到约 10¹⁰ K 量级。第三，以为湮灭只发生在实验室或对撞机中；早期宇宙曾发生大规模正负电子湮灭，并影响了光子温度。第四，忽略中微子已经退耦；湮灭释放的能量主要加热光子和电子，不再均匀分给中微子。[1]

## 与其他尺度的关系

1.1×10¹⁰ K 约为太阳核心温度的 700 倍，与中微子退耦的约 10¹⁰ K 几乎同一量级，但两者描述不同事件：一个是对湮灭，一个是弱相互作用冻结。它高于大爆炸核合成的 10⁹ K 约一个数量级，低于夸克胶子等离子体的 10¹² K 约两个数量级，也远低于电弱过渡与普朗克温度。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
