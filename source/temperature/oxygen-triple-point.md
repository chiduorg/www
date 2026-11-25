---
id: temperature.oxygen-triple-point
title: 氧三相点
titleEn: Oxygen triple point
dimension: temperature
category: 极低温
summary: >-
  氧的三相点为 54.36 K（约 −218.79 °C），是固、液、气三相共存的温度；它不是液氧的常压沸点 90.2 K。
quantity:
  value: 54.36
  unit: K
  measure: oxygen-triple-point-temperature
  measureLabel: 氧三相点温度
  approximate: true
displayValue: 约 54.36 K（−218.79 °C）
related:
  - temperature.liquid-oxygen
  - temperature.liquid-nitrogen
  - temperature.oxygen-boiling
  - temperature.nitrogen-triple-point
  - space.moon
reviewStatus: reviewed
sources:
  - title: NIST Chemistry WebBook — Oxygen phase change data
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7782447&Mask=4'
    publisher: NIST
    accessed: '2026-11-07'
  - title: 'Kelvin: ITS-90'
    url: 'https://www.nist.gov/si-redefinition/kelvin/kelvin-its-90'
    publisher: NIST
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 纯氧样品，固、液、气三相在约 0.146 kPa 的低压下共存。
uncertainty: ITS-90 赋值 54.3584 K；NIST WebBook 汇总值为 54.33 ± 0.06 K，差异约 0.03 K。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连可访问；写作阶段已逐条用 WebFetch 打开核对数值。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: phase-vessel
  scene: temperature.object
  caption: 氧低温容器 · 约 54.36 K 三相点参照
  note: 液面、气泡与颜色为示意，非按比例，非观测重建。
  color: '#a9c8e8'
  variant: oxygen
  backdrop: deep-cold
zone: 极低温
tags:
  - 极低温
  - 温度
  - 低温
---

## 它是什么

三相点是固、液、气三相同时共存的状态点。对氧分子 O₂ 来说，这个温度约为 54.36 K，压力约 0.146 kPa。[1][2] 此时固氧、液氧和氧气三者平衡存在，温度由物质本身决定。三相点的温度与压力一一对应，不能任意选定；氧分子之间的作用力决定了这个位置。

## 怎样得到这个读数

NIST 的 ITS-90 温标文件把氧三相点列为定义固定点，赋值为 54.3584 K，用于标定标准铂电阻温度计。[2] NIST Chemistry WebBook 的相变表则给出 54.33 K，并注明不确定度约 0.06 K。[1] 本页取 54.36 K 作圆整参考，两个数值相差约 0.03 K。实验上把高纯氧封入透明样品池，降温时观察固相出现与消失，并同时记录蒸气压；三相点平台能持续较长时间，便于校准。[1][2]

## 数值与口径

54.36 K 换算为 −218.79 °C。三相点压力远低于 1 atm，所以它与常压沸点、常压熔点都不是同一概念。三相点与常压沸点不是一回事：液氧在 1 atm 下要到 90.2 K 才沸腾，而 54.36 K 对应的是固—液—气三线交点。[1][2] 氧在 54 K 附近还有不同固相结构，三相点指的是最常见固相与液、气共存的交点；不同固相之间的转变不叫三相点。

## 常见误解

第一，把 54.36 K 当成液氧的沸点；90.2 K 才是常压沸点。第二，把三相点当成熔点；三相点还有固定的低气压条件。第三，把任何温度下看到的液氧都当成三相点状态；只有压力与温度同时满足时三相才共存。[1][2] 第四，把 54.36 K 与液氧的 90.2 K 只差 35.8 K 当成同一相变；前者是三相共存，后者是液—气平衡。

## 与其他尺度的关系

54.36 K 约为液氧沸点 90.2 K 的 0.60 倍，低于液氮的 77.34 K 和液氧的 90.2 K，高于液氢的 20.3 K 与液氦的 4.22 K。[1][2] 与液氧沸点 90.2 K 相比，三相点低约 35.8 K；这说明沸点与三相点是两个不同的热力学坐标，它也是低温温标的重要固定点之一。把既有参照排在一起：液氦 4.22 K、液氢 20.3 K、液氮 77.34 K、液氧 90.2 K、甲烷沸点 111.7 K、氨沸点 239.8 K；54.36 K 低于后三者的常压沸点。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
