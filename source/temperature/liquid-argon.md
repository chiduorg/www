---
id: temperature.liquid-argon
title: 液氩沸点
titleEn: Liquid argon normal boiling point
dimension: temperature
category: 低温
summary: >-
  纯氩在 1 atm 下的正常沸点约为 87.3 K（−185.85 °C）。这个数值是液—气平衡参考，不是约 83.8 K 的三相点，
  也不代表液氩在任何储罐压力或纯度下的温度。
quantity:
  value: 87.3
  unit: K
  measure: 纯氩常压正常沸点参考
  approximate: true
  measureLabel: 纯氩常压正常沸点参考
displayValue: 约 87.3 K（−185.85 °C）
related:
  - temperature.liquid-nitrogen
  - temperature.liquid-oxygen
  - temperature.liquid-hydrogen
  - temperature.methane-boiling
  - temperature.absolute-zero
reviewStatus: reviewed
sources:
  - title: 'Argon: phase change data'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440371&Mask=4'
    publisher: 'NIST Chemistry WebBook, SRD 69'
    accessed: '2026-11-07'
  - title: 'Argon: element data'
    url: 'https://periodic-table.rsc.org/element/18/argon/'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-07'
conditions: >-
  纯氩在 1 atm（101.325 kPa）下液—气平衡的正常沸点参考；不是约 83.8 K、对应更低压力的三相点，
  也不适用于含氧、氮等杂质的工业氩或加压储罐中的液氩。
uncertainty: >-
  87.3 K 是 NIST WebBook 两个沸点表值 87.28 K 与 87.5 K，以及 RSC 表值 87.302 K 的圆整参考；文献值相差约 0.2 K，
  实际沸点还随压力、样品纯度与测量方法变化。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 'NIST WebBook 列出氩正常沸点 87.28 K（不确定度 0.02 K）与 87.5 K；RSC 元素表列出 87.302 K。正文取 87.3 K。'
    - 'NIST WebBook 另列三相点约 83.8 K，正文用于区分三相点与常压沸点。'
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440371&Mask=4；https://periodic-table.rsc.org/element/18/argon/），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: phase-vessel
  profile: liquid
  caption: 液氩低温样品
  note: >-
    容器、液面与气泡均为示意，非按比例；氩本身无色，画面颜色是解释性编码，不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#a9c3d6'
  symbol: Ar
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
---
## 液氩是什么

液氩是氩气在常压附近冷却到约 87.3 K 时形成的无色液体。这个数值是纯氩的正常沸点，不是约 83.8 K 的三相点，也不是液氩在任何储罐压力下的温度。[1][2] 氩是空气中含量最高的稀有气体，工业液氩通常由空气分馏得到。

## 怎样得到这个读数

正常沸点对应蒸气压等于 1 atm 的液—气平衡温度。NIST Chemistry WebBook 列出氩的正常沸点 87.28 K（TRC 不确定度 0.02 K）和 87.5 K 两个文献值；RSC 元素表列出 87.302 K（−185.848 °C）。本页取 87.3 K，是把这些表值圆整后的参考。[1][2] 读取沸点时先确认压力基准与样品纯度，再用饱和蒸气压曲线或直接测温校正。

## 数值与口径

NIST 同一数据页还列出三相点约 83.8 K，对应比 1 atm 更低的压力。三相点是固、液、气三相共存的特定温压点；正常沸点只描述液—气两相平衡。把两者混用，会让“液氩温度”在不同压力下失去可比性。[1][2] 87.3 K 换算为 −185.85 °C。83.8058 K 的氩三相点还是国际温标 ITS-90 的固定点，但它是计量校准点，不等同于常压沸点。

## 常见误解

第一，不要把液氩当成室温液体：氩在 20 °C 下是气体，只有冷却到 87 K 附近才液化。第二，87.3 K 比液氮的 77.4 K 更暖，而不是更冷；它低于液氧的 90.2 K。第三，颜色和“白雾”不是氩气的固有标记，低温容器外的雾多来自周围空气中的水分，而不是氩本身发光或变色。[1][2] 液氩比液氮高约 10 K，冷却能力较弱，但惰性与电绝缘性带来别的工程价值。

## 与其他温区的关系

在低温尺度上，87.3 K 位于液氮与液氧之间，远高于液氦的 4.22 K 和液氢的 20.3 K，也高于绝对零度。[1][2] 工业上氩来自空气分馏，液氩可作为惰性低温介质；比较时仍要说明压力、纯度和相态，不能只看一个沸点数字。焊接保护气、金属冶炼与低温清洗是常见用途，储运安全仍要按低温液体规范处理。
