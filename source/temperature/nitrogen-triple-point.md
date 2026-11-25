---
id: temperature.nitrogen-triple-point
title: 氮三相点
titleEn: Nitrogen triple point
dimension: temperature
category: 极低温
summary: >-
  氮的三相点为 63.15 K（约 −210.00 °C），是固、液、气三相共存的温度；它不是液氮的常压沸点 77.34 K。
quantity:
  value: 63.15
  unit: K
  measure: nitrogen-triple-point-temperature
  measureLabel: 氮三相点温度
  approximate: true
displayValue: 约 63.15 K（−210.00 °C）
related:
  - temperature.liquid-nitrogen
  - temperature.liquid-oxygen
  - temperature.oxygen-triple-point
  - temperature.absolute-zero
  - space.moon
reviewStatus: reviewed
sources:
  - title: NIST Chemistry WebBook — Nitrogen phase change data
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=4'
    publisher: NIST
    accessed: '2026-11-07'
  - title: A Reference Equation of State for the Thermodynamic Properties of Nitrogen
    url: 'https://srd.nist.gov/jpcrdreprint/1.1349047.pdf'
    publisher: NIST / Journal of Physical and Chemical Reference Data
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 纯氮样品，固、液、气三相在约 12.5 kPa 的低压下共存。
uncertainty: NIST WebBook 列为 63.14 K；JPCRD 参考状态方程给出 63.151 ± 0.003 K，差异在 0.01 K 量级。
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
  caption: 氮低温容器 · 约 63.15 K 三相点参照
  note: 液面、气泡与颜色为示意，非按比例，非观测重建。
  color: '#b3cfe0'
  variant: nitrogen
  backdrop: deep-cold
zone: 极低温
tags:
  - 极低温
  - 温度
  - 低温
---

## 它是什么

氮分子 N₂ 的三相点约为 63.15 K，压力约 12.5 kPa。此时固氮、液氮与氮气三相共存，是氮的相图上固、液、气三条边界交汇的唯一点。三相点的温度与压力一一对应，是物质的本征性质，不随容器大小改变。[1][2]

## 怎样得到这个读数

NIST Chemistry WebBook 的氮相变表给出 63.14 K，并列出多组独立实验值。[1] NIST 主持的 JPCRD 参考状态方程则给出 63.151 ± 0.003 K，作为氮热物性计算的低温边界。[2] 本页取 63.15 K，与 63.151 K 一致。这两组数据彼此吻合，说明 63.15 K 不是单一实验的偶然读数。三相点测量通常用密封样品池缓慢改变温度，记录压力平台；氮的 63.15 K 也常被低温温度计比对采用。[1][2]

## 数值与口径

63.15 K 换算为 −210.00 °C。三相点压力约 0.125 bar，低于 1 atm；因此常压下的氮在 63.15 K 附近的行为与三相点并不相同。[1][2] 三相点与常压沸点不是一回事：液氮在 1 atm 下要到 77.34 K 才沸腾，二者相差约 14.2 K。在相图上，压力低于三相点时固态可直接升华，压力高于三相点时液态才稳定；常压下的沸点与三相点之间隔着整个液相区。

## 常见误解

第一，把 63.15 K 当成液氮的沸点；77.34 K 才是常压沸点。第二，把三相点当成熔点；三相点对应的是三相共存的压力—温度组合。第三，把 63.14 K 与 63.151 K 的微小差异当成错误；不同的实验与拟合会给出约 0.06 K 以内的差别。第四，把 63.15 K 当作室温下液氮的实际温度；液氮在 1 atm 下沸腾于 77.34 K，保存时因蒸发而保持低温，但并非 63.15 K。第五，把三相点压力与常压混用；只有约 12.5 kPa 时三相才能同时稳定存在。[1][2]

## 与其他尺度的关系

63.15 K 约为液氮沸点 77.34 K 的 0.82 倍，低于液氮的 77.34 K、液氧的 90.2 K，高于液氢的 20.3 K、液氦的 4.22 K 和氧三相点的 54.36 K。[1][2] 与 77.34 K 的沸点相比，它约低 14.2 K，说明同一物质的固—液—气交点低于常压沸点。把既有参照排在一起：液氦 4.22 K、液氢 20.3 K、液氮 77.34 K、液氧 90.2 K、甲烷沸点 111.7 K、氨沸点 239.8 K；63.15 K 低于液氮、液氧、甲烷与氨的常压沸点。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
