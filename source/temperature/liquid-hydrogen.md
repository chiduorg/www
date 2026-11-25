---
id: temperature.liquid-hydrogen
title: 液氢温度
titleEn: Liquid hydrogen normal boiling reference
dimension: temperature
category: 低温
summary: 氢在标准大气压附近的沸点约 20.3 K。这里采用 NIST 低温液体表的取整参考， 不把所有压力、同位素或正氢与仲氢组成的样品都视为同一精密固定点。
quantity:
  value: 20.3
  unit: K
  measure: 氢的常压沸点近似参考
  approximate: true
  measureLabel: 氢的常压沸点近似参考
displayValue: 约 20.3 K（−252.85 °C）
related:
  - temperature.liquid-oxygen
  - temperature.liquid-nitrogen
  - temperature.methane-boiling
  - temperature.absolute-zero
  - temperature.hydrogen-triple-point
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: 'About Cryogenics: normal boiling points'
    url: >-
      https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics
    publisher: NIST
    accessed: '2026-11-06'
  - title: hydrogen
    url: 'https://www.britannica.com/science/hydrogen'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: liquid-hydrogen
  icon: "\U0001F680"
  relatedLabels: 液氧温度、火箭燃料、低温技术、氢能、杜瓦瓶、液氮温度、航天推进、超导冷却、热力学
conditions: 氢在 1 atm（101.325 kPa）下的正常沸点参考；样品为普通氢（正氢与仲氢混合物），精细比较还需说明自旋异构体组成、同位素与压力。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      NIST 低温资料正常沸点表列出氢 20.3 K（−252.9 °C）；Britannica 氢性质表列出正常氢沸点 −252.77 °C，约
      20.38 K。
    - 两者差异约 0.08 K，源于正/仲氢组成、压力取值与圆整；正文保留原量值并在不确定度中说明。
    - 正文按五节结构重写；补正常沸点、自旋异构体与能量密度误解。
  originalQuantity:
    value: 20
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  20.3 K 是常压正常沸点的圆整参考，与 Britannica 正常氢的约 20.38 K 有约 0.08 K
  差异；读数随压力、正/仲氢比例和同位素组成变化，不宜当作精密固定点。
visual:
  template: phase-vessel
  profile: liquid
  caption: 液氢低温容器
  note: >-
    量值为常压沸点参考；氢本身无色，画面中的蓝色与容器不代表工程储氢设备设计，整体为示意而非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#a7c5eb'
  symbol: H₂
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

液氢是氢在 1 atm 下冷却到约 20.3 K 时形成的低温液体。[1] 它无色、透明，常被用作火箭推进剂和低温研究介质；氢的凝固点约为 −259.2 °C，即 13.95 K；液氢只存在于这一温度以上的窄温区。[2] 所谓“液氢温度”通常指正常沸点，而不是某个储罐在任何压力下的温度。

## 怎样测到或为何是有效温度

正常沸点是在 1 atm 下液—气平衡的温度。NIST 低温资料把氢列为 20.3 K（−252.9 °C）。[1] Britannica 的氢性质表给出正常氢的沸点 −252.77 °C，约 20.38 K。[2] 两个数值接近但不同，原因包括样品正氢/仲氢比例、压力取值和圆整；这说明精密比较必须说明氢的自旋异构体组成。

## 数值与口径

20.3 K 等于 −252.85 °C，处在约 20.28–20.38 K 的常用范围内。[1][2] 正氢与仲氢的沸点、汽化潜热略有差异；刚液化的氢会缓慢转化为仲氢并放热，工程储运必须考虑。液氢在沸点附近的密度约 0.071 g/cm³，约为水的十四分之一，因此按体积储存需要更大的罐体。[2] 20.3 K 不是“绝对零度附近”的同义词，它仍比液氦的 4.2 K 高约五倍。

## 常见误解

第一，认为液氢是蓝色的；液氢本身无色，蓝色常来自容器或照明。第二，把 20 K 当成“接近绝对零度所以极难液化”；它比液氦、液氮都暖，工业液化已有成熟工艺。第三，把低沸点直接等同于最高能量密度；按质量氢的热值高，但液氢密度很低，按体积比较并不占优。液氢的沸点低于液氮，储存时的漏热会更快引起蒸发，绝热要求更高。[1]

## 与其他温区的关系

20.3 K 低于液氮的 77.4 K、液氧的 90.2 K 和甲烷的 111.7 K，高于液氦的 4.2 K 和氦-3 超流 A 点的 2.444 mK。它处在“低温工程”与“极低温量子实验”之间的门槛温区。氢的临界温度为 −240.0 °C（233.15 K），高于沸点，说明常压液氢不是超临界流体。[2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
