---
id: temperature.ammonia-triple-point
title: 氨三相点
titleEn: Ammonia triple point
dimension: temperature
category: 低温
summary: >-
  氨的三相点为 195.4 K（约 −77.75 °C），是固、液、气三相共存的温度；它不是氨的常压沸点 239.8 K。
quantity:
  value: 195.4
  unit: K
  measure: ammonia-triple-point-temperature
  measureLabel: 氨三相点温度
  approximate: true
displayValue: 约 195.4 K（−77.75 °C）
related:
  - temperature.ammonia_boiling
  - temperature.methane-boiling
  - temperature.liquid-ethane
  - temperature.methane-triple-point
reviewStatus: reviewed
sources:
  - title: NIST Chemistry WebBook — Ammonia phase change data
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7664417&Mask=4'
    publisher: NIST
    accessed: '2026-11-07'
  - title: The Equation of State for Ammonia
    url: 'https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nbsir77-1409.pdf'
    publisher: National Bureau of Standards / NIST
    accessed: '2026-11-07'
conditions: 纯氨样品，固、液、气三相在约 6.06 kPa 的低压下共存。
uncertainty: NIST WebBook 列常压熔点 194.95 K 与三相点压力 0.0606 bar；NBS 状态方程报告给出 195.48 K，常见表值取 195.4 K。
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
  caption: 氨低温容器 · 约 195.4 K 三相点参照
  note: 液面、气泡与颜色为示意，非按比例，非观测重建。
  color: '#c7d3e6'
  variant: ammonia
  backdrop: deep-cold
zone: 低温
tags:
  - 低温
  - 温度
  - 化学
---

## 它是什么

氨分子 NH₃ 的三相点约为 195.4 K，压力约 6.06 kPa。此时固氨、液氨与氨气三相共存，是氨相图上固、液、气三条边界的交点。三相点的温度与压力一一对应，是氨分子的本征性质，不随容器大小改变。[1][2] 氨是极性分子，分子间氢键使它的三相点明显高于甲烷与氮。

## 怎样得到这个读数

NIST Chemistry WebBook 的氨相变表列出常压熔点 194.95 K 和三相点压力 0.0606 bar。[1] NIST 的氨状态方程报告把三相点参数写作 195.48 K 与 0.06063 bar。[2] 常见表值取 195.4 K；不同资料在 194.95–195.48 K 之间，差别来自测量与圆整。这些来源的差异很小，说明 195.4 K 是可靠的量级取值。氨的三相点测量要在密闭容器中控制压力，避免少量水或空气改变饱和蒸气压；工业氨的纯度也会影响读数。[1][2]

## 数值与口径

195.4 K 换算为 −77.75 °C。三相点压力只有约 0.06 bar，远低于 1 atm；常压熔点与三相点并不相同。[1][2] 三相点与常压沸点不是一回事：氨在 1 atm 下要到 239.8 K 才沸腾，比三相点高约 44.4 K。在相图上，三相点是固—液—气三线交点；常压熔点 194.95 K 略低，是因为 1 atm 下液相与固相平衡而不是三相共存。

## 常见误解

第一，把 195.4 K 当成氨的沸点；239.8 K 才是常压沸点。第二，把三相点当成常压熔点；两者相差约 0.45 K，且压力条件不同。第三，以为氨在 195 K 一定沸腾；只有在 6.06 kPa 附近三相才能共存。第四，把 195.4 K 与 194.95 K 的差别当成矛盾；前者接近三相点，后者是常压熔点。第五，把 195.4 K 与 195.48 K 的差别当成矛盾；前者是常见表值圆整，后者来自状态方程拟合。[1][2]

## 与其他尺度的关系

195.4 K 约为氨沸点 239.8 K 的 0.81 倍，低于氨沸点 239.8 K，高于甲烷沸点 111.7 K、液氮的 77.34 K、液氦的 4.22 K。[1][2] 与 239.8 K 相比，它低约 44.4 K；这也说明常压沸点并不是判断物质“冷热”的唯一坐标。把既有参照排在一起：液氦 4.22 K、液氢 20.3 K、液氮 77.34 K、液氧 90.2 K、甲烷沸点 111.7 K、氨沸点 239.8 K；195.4 K 低于氨的常压沸点，高于其余五者。画面只作示意。195.4 K 约为宇宙微波背景 2.725 K 的 72 倍，约为液氦 4.22 K 的 46 倍。[1][2]
