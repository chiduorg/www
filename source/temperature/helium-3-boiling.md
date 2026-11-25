---
id: temperature.helium-3-boiling
title: 氦-3 沸点
titleEn: Helium-3 normal boiling point
dimension: temperature
category: 极低温
summary: >-
  纯氦-3 在 1 atm 下液—气平衡的正常沸点约 3.19 K（−269.96 °C）。它不是氦-4 的 4.22 K，也不等于氦-3 的超流相变温度。
quantity:
  value: 3.19
  unit: K
  measure: helium-3-normal-boiling-point
  measureLabel: 氦-3 常压沸点参考
  approximate: true
displayValue: 约 3.19 K（−269.96 °C）
related:
  - temperature.liquid-helium
  - temperature.helium-3-superfluid
  - temperature.helium-4-lambda-point
  - temperature.absolute-zero
  - space.cmb-surface
reviewStatus: reviewed
sources:
  - title: NIST Center for Neutron Research Reference Tables
    url: 'https://www.nist.gov/ncnr/sample-environment/sample-mounting/reference-tables'
    publisher: NIST Center for Neutron Research
    accessed: '2026-11-07'
  - title: Cryogenics lecture notes
    url: 'https://indico.stfc.ac.uk/event/742/attachments/1713/3016/CI-Lectures-AJM-2023.pdf'
    publisher: Science and Technology Facilities Council
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 纯氦-3 样品，液—气两相在 1 atm（101.325 kPa）下平衡共存。
uncertainty: 不同资料在 3.19–3.20 K 之间取值；同位素纯度与压力标定会带来小幅差异。
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
  caption: 氦-3 低温容器 · 约 3.19 K 沸点参照
  note: 液面、气泡与颜色为示意，非按比例，非观测重建。
  color: '#a9cfe2'
  variant: helium3
  backdrop: quantum-cold
zone: 极低温
tags:
  - 极低温
  - 温度
  - 低温
---

## 它是什么

氦-3 是氦的轻同位素，原子核由一个质子和两个中子组成，自旋为 1/2，是费米子。它与常见的氦-4 化学性质相近，低温行为却明显不同：常压下氦-3 同样不会凝固，冷却到约 3.19 K 时由气体凝结为液体。[1][2] 这里说的是纯氦-3 样品的液—气平衡，不是氦-4 的 4.22 K 正常沸点。

## 怎样得到这个读数

正常沸点定义为饱和蒸气压等于 1 atm（101.325 kPa）时的平衡温度。测量时让纯氦-3 在恒温容器中气液共存，再读出蒸气压随温度的变化。NIST 中子研究中心的低温流体表列出氦-3 为 3.19 K、氦-4 为 4.21 K；英国 STFC 的低温讲义同样给出 3.19 K 与 4.21 K。[1][2] 实验上还要排除氦-4 污染：两种同位素质量只差约 25%，混合样品的饱和蒸气压会偏离纯氦-3 曲线，因此测量前通常用低温蒸馏或吸附分离提纯。

## 数值与口径

3.19 K 减去 273.15 得约 −269.96 °C。它与氦-4 的 4.22 K 只差约 1.03 K，但在低温物理中这一差距很关键：氦-3 因此成为稀释制冷机的工质，可把样品冷到毫开尔文量级，而 3.19 K 本身只是常压沸点。[1][2] 若把宇宙微波背景的 2.725 K 作为参照，3.19 K 约为它的 1.17 倍；这个倍数说明氦-3 沸点只比宇宙背景辐射高一点，仍属于极低温区。

## 常见误解

第一，把 3.19 K 当成氦-3 的超流转变温度；氦-3 的超流 A 点约 2.444 mK，比沸点低三个数量级。第二，把氦-3 与氦-4 的沸点混用；4.22 K 属于氦-4，两者不能直接互换。第三，以为 3.19 K 是凝固点；常压下氦-3 也不凝固，需要加压才出现固相。第四，把 3.2 K 的粗略说法当成精确值；压力偏离 1 atm 或样品不纯时，读数都会移动。[1][2]

## 与其他尺度的关系

在温度轴上，3.19 K 约为液氦 4.22 K 的 0.76 倍，低于液氢的 20.3 K 和液氮的 77.34 K，但高于氦-4 的 λ 点 2.177 K 与绝对零度。[1][2] 它说明同位素差异足以改变一个相变温度；画面的液面、气泡与颜色只作示意。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
