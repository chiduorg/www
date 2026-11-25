---
id: temperature.hydrogen-triple-point
title: 氢三相点
titleEn: Hydrogen triple point
dimension: temperature
category: 极低温
summary: >-
  氢的三相点为 13.8 K（约 −259.35 °C），是固、液、气三相共存的温度；它不是液氢的常压沸点 20.3 K。
quantity:
  value: 13.8
  unit: K
  measure: hydrogen-triple-point-temperature
  measureLabel: 氢三相点温度
  approximate: true
displayValue: 约 13.8 K（−259.35 °C）
related:
  - temperature.liquid-hydrogen
  - temperature.liquid-helium
  - temperature.absolute-zero
  - temperature.nitrogen-triple-point
  - space.cmb-surface
reviewStatus: reviewed
sources:
  - title: NIST Chemistry WebBook — Hydrogen phase change data
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C1333740&Mask=4'
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
conditions: 平衡氢样品，固、液、气三相在约 7.2 kPa 的低压下共存。
uncertainty: ITS-90 赋值 13.8033 K；NIST WebBook 另列 13.95–13.96 K，差异来自样品正—仲态比例与测量方法。
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
  caption: 氢低温容器 · 约 13.8 K 三相点参照
  note: 液面、气泡与颜色为示意，非按比例，非观测重建。
  color: '#b8d8e8'
  variant: hydrogen
  backdrop: quantum-cold
zone: 极低温
tags:
  - 极低温
  - 温度
  - 低温
---

## 它是什么

三相点是物质固、液、气三相同时共存时的唯一温度—压力组合。对氢而言，这个温度约为 13.8 K，压力约 7.2 kPa；低于它时固态可以直接升华，高于它时液态才能稳定存在。[1][2] 这里的氢指平衡氢，实际读数会受样品中正—仲态比例影响。

## 怎样得到这个读数

ITS-90 把平衡氢三相点列为定义固定点，赋值 13.8033 K，用于标定低温铂电阻温度计和气体温度计。[2] NIST Chemistry WebBook 的相变表则列出 13.95 K 与 13.96 K 两组实验值，并注明样品与测量方法不同。[1] 本页取 13.8 K 作圆整参考，与 13.8033 K 基本一致。实验上常把平衡氢密封在铜块样品池中，缓慢升温并同时记录压力与电阻温度，以免正—仲态转化释放的潜热掩盖三相点平台。

## 数值与口径

13.8 K 换算为 −259.35 °C。三相点压力约 0.072 bar，比 1 atm 低得多，因此“三相点”和“常压熔点”不能互换：常压下的氢在 13.8 K 附近先熔化，而不是恰好三相共存。[1][2] 三相点与常压沸点不是一回事，后者是 20.3 K 的液—气平衡。在相图上，三相点左侧是固—气升华线，右侧是液—气蒸发线；只有压力低于 0.072 bar 时，固态才能不经液态直接变为气态。

## 常见误解

第一，把 13.8 K 当成液氢的沸点；液氢在 1 atm 下要到 20.3 K 才沸腾。第二，把三相点当成熔点；三相点还要求对应的低气压，常压熔点与它并不相同。第三，把 13.8033 K 的温标赋值当成任意氢样品都能复现的温度；同位素组成和正—仲态比例会改变实际读数。第四，把工业液氢的 20.3 K 与温标固定点 13.8033 K 当成同一状态；前者是常压沸点，后者需要特定低压与平衡氢样品。[1][2]

## 与其他尺度的关系

13.8 K 约为液氢沸点 20.3 K 的 0.68 倍，低于 20.3 K，高于液氦的 4.22 K，也远高于绝对零度。[1][2] 与 20.3 K 相比，它低约 6.5 K；它把氢的固相区与液相区在相图上区分开来。把既有参照排在一起：液氦 4.22 K、液氢 20.3 K、液氮 77.34 K、液氧 90.2 K、甲烷沸点 111.7 K、氨沸点 239.8 K；13.8 K 位于液氦与液氢之间。13.8 K 约为宇宙微波背景 2.725 K 的 5.1 倍，也约为液氦 4.22 K 的 3.3 倍。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
