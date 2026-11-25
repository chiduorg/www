---
id: temperature.superfluid
title: 液氦超流相变
titleEn: Helium-4 superfluid transition reference
dimension: temperature
category: 极低温
summary: >-
  氦-4 在饱和蒸气压附近约 2.17 K 出现超流转变。这个参考不能直接套用于氦-3， 也不表示任何压力下的氦都按同一温度发生相变；它是热平衡下的 λ
  转变温度。
quantity:
  value: 2.17
  unit: K
  measure: 氦-4低压λ转变温度参考
  approximate: true
  measureLabel: 氦-4低压λ转变温度参考
displayValue: 约 2.17 K（氦-4参考）
related:
  - temperature.helium-3-superfluid
  - temperature.bose-einstein
  - temperature.absolute-zero
  - temperature.dilution-refrigerator
  - temperature.nuclear-demagnetization-cooling
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: About Cryogenics
    url: >-
      https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics
    publisher: NIST
    accessed: '2026-11-06'
  - title: superfluidity
    url: 'https://www.britannica.com/science/superfluidity'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: superfluid
  icon: "\U0001F4A7"
  relatedLabels: 量子力学、玻色-爱因斯坦凝聚、绝对零度、氦-3超流相变、超导、二流体模型、第二声、量子涡旋、λ相变
conditions: 氦-4 在饱和蒸气压附近（约 1 atm 以下）的 λ 转变温度；压力升高时转变温度略降，氦-3 的费米超流与此不同，不能互换。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NIST 低温资料明确液氦冷却到 2.17 K 或以下成为超流，并描述爬膜现象；Britannica 超流条目由 Leggett 撰写，区分氦-4
      与氦-3 的超流机制。
    - 正文按五节结构重写；保留 2.17 K，补压力、同位素与平衡态条件。
  originalQuantity:
    value: 2.17
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 2.17 K 是饱和蒸气压附近 λ 点的圆整值，实际转变温度随压力轻微变化；测量依靠比热容尖峰、第二声和流量等方法，读数受样品纯度与热平衡影响。
visual:
  template: phase-vessel
  profile: helium
  caption: 氦-4 超流相变样品
  note: >-
    低压氦-4 的 λ 转变参考，容器中的颜色和粒子不是超流微观运动记录；画面为示意，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#b8d9e8'
  symbol: ⁴He λ transition
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

液氦-4 在约 2.17 K 以下进入超流相，表现出无黏滞流动、爬膜和第二声等量子现象。[1][2] 这个转变叫 λ 转变，因为比热容曲线在转变点呈 λ 形。超流相不是另一种元素，而是同一批氦原子进入宏观量子基态的结果。氦-4 原子是玻色子，冷却时可有宏观数量的原子占据同一量子态；但液体中的强相互作用使这个转变不同于稀薄气体的玻色—爱因斯坦凝聚。[2]

## 怎样测到或为何是有效温度

NIST 的低温资料把液氦在 2.17 K 及以下描述为超流，并指出它可以沿容器壁爬升、从底部滴落。[1] 实验上通过比热容尖峰、第二声传播和流量测量来定位转变；这些测量给出的是平衡态转变温度，不是在任意流动条件下的“零黏度”读数。[1][2] 转变温度还随压力轻微变化。

## 数值与口径

2.17 K 等于 −270.98 °C，通常指饱和蒸气压附近的 λ 点；在更高压力下，λ 温度会略有下降。[1] 在 1 atm 下液氦沸点为 4.2 K，λ 点比沸点低约 2 K，因此超流相出现在液氦浴中。[1] 所以它必须带“液氦-4、低压附近”的条件。2.17 K 与氦-3 的 2.444 mK 相差近三个量级，不能互换。

## 常见误解

第一，认为超流体的黏度严格为零；超流组分与正常组分共存，整体流动仍受涡旋和边界影响。第二，把液氦-4 的超流转变当成玻色—爱因斯坦凝聚的同义词；两者有深刻联系，但 λ 转变是液体中的相互作用多体转变，不是稀薄气体的 BEC。第三，认为 2.17 K 适用于氦-3；氦-3 是费米子，需先配对。

## 与其他温区的关系

2.17 K 低于液氦在 1 atm 下的沸点 4.2 K，高于氦-3 超流 A 点的 2.444 mK，也远高于 170 nK 的玻色凝聚。它位于稀释制冷与液氦浴之间的温区，是研究量子流体的经典入口。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
