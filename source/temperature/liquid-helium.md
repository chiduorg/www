---
id: temperature.liquid-helium
title: 液氦沸点
titleEn: Liquid helium normal boiling point
dimension: temperature
category: 极低温
summary: >-
  纯氦-4 在 1 atm 下的正常沸点约为 4.22 K（−268.93 °C）。这里的温度对应液—气平衡，不是需要加压才出现的凝固点，
  也不是 2.177 K 的 λ 点；液氦可以处在其他压力与温度条件下。
quantity:
  value: 4.22
  unit: K
  measure: 纯氦-4常压正常沸点参考
  approximate: true
  measureLabel: 纯氦-4常压正常沸点参考
displayValue: 约 4.22 K（−268.93 °C）
related:
  - temperature.liquid-hydrogen
  - temperature.liquid-nitrogen
  - temperature.helium-4-lambda-point
  - temperature.helium-3-superfluid
  - temperature.superfluid
  - temperature.absolute-zero
reviewStatus: reviewed
sources:
  - title: 'Helium: element data'
    url: 'https://periodic-table.rsc.org/element/2/helium/'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-07'
  - title: 'Reference Tables: normal boiling points of cryogenic fluids'
    url: >-
      https://www.nist.gov/ncnr/sample-environment/sample-mounting/reference-tables
    publisher: NIST Center for Neutron Research
    accessed: '2026-11-07'
conditions: >-
  纯氦-4 在 1 atm（101.325 kPa）下液—气平衡的正常沸点参考；不是 2.177 K 的 λ 点，也不是需要约 25 atm
  压力才出现的凝固点，不适用于含其他同位素或杂质的氦样品。
uncertainty: >-
  4.22 K 是 RSC 表值 4.222 K 与 NIST 低温流体表 4.21 K 的圆整参考，两者相差约 0.01 K；实际沸点还随压力、样品纯度与
  氦-4/氦-3 比例变化，不宜当作精密固定点。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 'RSC 元素表给出 4.222 K（−268.928 °C）；NIST NCNR 低温流体表列出氦-4 4.21 K。正文取 4.22 K 并说明差异。'
    - '正文按五节撰写，区分正常沸点、λ 点与常压熔点；未沿用旧站正文。'
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://periodic-table.rsc.org/element/2/helium/；https://www.nist.gov/ncnr/sample-environment/sample-mounting/reference-tables），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: phase-vessel
  profile: helium
  caption: 液氦低温容器
  note: >-
    液面、气泡与颜色均为示意，非按比例；不代表特定杜瓦容器的观测记录，也不是液氦本身的颜色。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#a9cfe2'
  symbol: He
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 低温
---
## 液氦是什么

液氦是氦气在常压附近冷却到约 4.22 K 时形成的无色液体。这里的数值指纯氦-4 的正常沸点，而不是需要加压才出现的凝固点，也不是 2.177 K 的 λ 点；液氦本身可以处在其他压力与温度条件下。[1][2] 氦-3 的正常沸点约 3.19 K，比氦-4 更低；本页只讨论低温工程中更常见的氦-4。

## 怎样得到这个读数

正常沸点定义为蒸气压等于 1 atm（101.325 kPa）时液—气平衡的温度。测量时让纯氦在恒温容器中气液共存，记录饱和蒸气压随温度的变化。RSC 元素表列出 4.222 K（−268.928 °C），NIST 中子研究中心的低温流体表列出 4.21 K；两者相差约 0.01 K，本页取 4.22 K 作圆整参考。[1][2]

## 为什么液氦没有常压熔点

氦的特别之处在于常压下没有普通熔点。氦原子质量小、零点能大，在 1 atm 下冷却时不会先冻结成固体，而是从 4.22 K 继续降温，到 2.177 K 以下变成超流氦 II。要让氦凝固需要约 25 atm 的压力，所以讨论“液氦的凝固点”必须同时给出压力。[1][2] 由于没有常压固相，液氦会润湿容器壁并沿壁爬升，这是低温容器设计必须处理的细节。

## 常见误解

常见误解有三类。第一，把 4.22 K 当成绝对零度；它仍比 0 K 高约 4.22 K。第二，把正常沸点与 λ 点混用：4.22 K 是液—气两相平衡，2.177 K 是氦 I 到超流氦 II 的二阶相变，没有同样的汽化潜热。第三，认为液氦会像水一样冻成冰块；常压下它保持液态直到尽可能接近绝对零度。[1][2] 医院 MRI 的超导磁体常浸泡在液氦中，失超时氦气会迅速膨胀，必须留有泄压通道。

## 在低温尺度上的位置

在温度轴上，4.22 K 低于液氢的 20.3 K、液氮的 77.4 K 和液氩的 87.3 K，高于 λ 点的 2.177 K 与绝对零度。[1][2] 液氦常用于冷却超导磁体和基础低温实验，但容器外壁、液面与样品可能处在不同温度；画面的颜色、液面和气泡只作示意。液氦汽化时吸收大量热，储存与输送要按低温液体规范处理；这些工程细节并不改变 4.22 K 的物理定义。
