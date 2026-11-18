---
id: temperature.neon-boiling-point
title: 氖的沸点
titleEn: Neon normal boiling point
dimension: temperature
category: 低温
summary: >-
  氖在 1 atm 下的正常沸点约 27.1 K（−246.05 °C）。它只比三相点 24.5561 K 高约 2.5 K，
  液态温区很窄；压力、样品纯度与测量资料会改变实际沸腾温度。
quantity:
  value: 27.1
  unit: K
  measure: 氖常压沸点近似参考
  approximate: true
  measureLabel: 氖常压沸点近似参考
displayValue: 约 27.1 K（−246.05 °C）
related:
  - temperature.neon-triple-point
  - temperature.liquid-hydrogen
  - temperature.liquid-nitrogen
  - temperature.oxygen-boiling
  - temperature.methane-boiling
reviewStatus: reviewed
sources:
  - title: 'Neon: element data'
    url: 'https://periodic-table.rsc.org/element/10/neon/'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-06'
  - title: 'Reference Tables: normal boiling points of cryogenic fluids'
    url: >-
      https://www.nist.gov/ncnr/sample-environment/sample-mounting/reference-tables
    publisher: NIST Center for Neutron Research
    accessed: '2026-11-06'
  - title: 'Neon: phase-change data'
    url: 'https://webbook.nist.gov/cgi/cbook.cgi?ID=C7440019&Mask=4'
    publisher: NIST Chemistry WebBook
    accessed: '2026-11-06'
legacy:
  id: neon-boiling-point
  icon: "\U0001F4A1"
  relatedLabels: 稀有气体、低温技术、霓虹灯、氦氖激光器、液氮温度、液氦温度、空气分馏、气体液化、威廉·拉姆齐
conditions: 纯氖（Ne）在 1 atm（101.325 kPa）下液—气平衡的正常沸点；不是约 0.4337 bar 下的三相点，也不适用于含氦、氢杂质的工业氖。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - RSC 元素表给出沸点 27.104 K（−246.046 °C）与熔点 24.56 K；NIST NCNR 低温流体表列 27.09 K。
    - NIST WebBook 给出三相点 24.56 K、压力 0.4337 bar，用于区分三相点与常压沸点；正文保留 27.1 K 圆整值。
  originalQuantity:
    value: 27
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 27.1 K 是 27.104 K 与 27.09 K 两个表值的圆整；两者相差约 0.014 K，实际沸点还随压力、样品纯度与测量方法变化。
visual:
  template: phase-vessel
  profile: liquid
  caption: 氖的低温相变样品
  note: >-
    对应氖常压沸点的示意样品池；气体本身不发出霓虹灯式放电光，颜色与气泡为非按比例的编码，不是观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#b6d4e9'
  symbol: Ne
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

氖是稀有气体，常压下为无色气体；冷却到 27.1 K 左右液化。这里的“氖的沸点”指纯氖在 1 atm 下的正常沸点，不是霓虹灯发光时的气体温度，也不是三相点。氖的三相点为 24.5561 K，因此常压液态氖只存在于约 24.56–27.10 K 的窄区间。[1][2]

## 怎样测到

测量方法与其它低温液体相同：在恒温容器中让纯氖气液共存，改变温度并记录饱和蒸气压，取蒸气压等于 101.325 kPa 的温度。RSC 元素表给出沸点 −246.046 °C，即 27.104 K；NIST 中子研究中心的低温流体表列出 27.09 K；NIST WebBook 则给出三相点 24.56 K、三相点压力 0.4337 bar，用来说明沸点与三相点的区别。[1][2][3] 两个沸点值相差 0.014 K，属于表值圆整。

## 数值与口径

27.1 K 减 273.15 得 −246.05 °C，与 RSC 的 −246.046 °C 基本一致。[1] 27.104 K 和 27.09 K 都是常压正常沸点，不是任意压力下的沸点；压力改变时，氖的沸腾温度随之移动。[2][3] 三相点 24.5561 K 对应约 0.4337 bar，比 1 atm 低，所以不能把三相点当作常压沸点。液态氖的温区只有约 2.5 K 宽，工程上必须同时控制压力与漏热。

## 常见误解

第一，把氖的沸点与三相点混用；三相点是固、液、气共存的特定压力温度，常压沸点只是液—气平衡的一个点。[3] 第二，看到霓虹灯发红光就以为氖在 27 K 发光；发光来自气体放电，与沸点无关。第三，把 27.1 K 当作“比液氢更冷”；它比液氢的 20.3 K 更暖。第四，认为稀有气体不需要低温条件；氖的液化同样需要压缩、预冷和节流。

## 与其他温区的关系

27.1 K 高于氢的 20.3 K 和氖三相点 24.5561 K，低于氮的 77.4 K、氧的 90.2 K 和甲烷的 111.7 K。[1][2][3] 它位于液氢与液氮之间的温区，适合用来比较气体的液化难度。由于液态温区窄，氖在低温工程中更多作为特定温区的介质，而不是像液氮那样宽的通用冷剂。[1]
