---
id: time.heat-death
title: 热死亡
titleEn: Heat Death
dimension: cosmic-time
category: 现在与未来
summary: 热死亡指宇宙达到热力学平衡、不再有可用自由能的理论状态。常见估算把这一时点放在约10^100年后；这是理论量级，不是观测日程，也不是一次瞬间事件。
quantity:
  value: 3.15576e+107
  unit: s
  measure: future-time-theoretical-reference
  measureLabel: 热死亡（热寂）理论参考时点
  approximate: true
displayValue: 距今约 10^92 亿年后（t ≈ 3.16 × 10^107 秒）
chronology:
  status: future
  plot: false
  note: 未来时点，超出当前时间轴，显示为模型推断而非已观测
conditions:
  timeBasis: time.present
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: presentSeconds + futureYears × secondsPerYear
  model: 标准热力学与宇宙学远期演化模型（黑洞蒸发完毕后的平衡态）
  note: 依赖宇宙是否持续膨胀、质子是否衰变、黑洞蒸发是否按霍金模型进行，以及暗能量是否保持恒定。
uncertainty: >-
  这是理论量级，不是观测日程。10^100年来自黑洞蒸发完毕、宇宙趋向同一温度与最大熵的模型外推；
  若暗能量行为、质子稳定性或量子引力修正不同，时标会改变。热死亡是渐近状态， 并没有一个可观测的“发生瞬间”。[1][2]
related:
  - time.heat-death-time
  - time.proton-decay-era
  - time.black-hole-era
  - time.last-stars
  - time.dark-energy-domination
reviewStatus: reviewed
sources:
  - title: 'Lecture 47: Death in the Universe'
    url: 'https://www.astronomy.ohio-state.edu/gaudi.1/AST161/Unit7/lecture47.html'
    publisher: 'Ohio State University, Astronomy 161'
    accessed: '2026-11-06'
  - title: >-
      A Dying Universe: The Long Term Fate and Evolution of Astrophysical
      Objects
    url: 'https://arxiv.org/abs/astro-ph/9701131'
    publisher: arXiv / Reviews of Modern Physics
    accessed: '2026-11-06'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 打开 Ohio State 的 Lecture 47，核对10^100年之后进入黑暗时代、万物同温同熵、生命变得不可能。
    - 打开 Adams 与 Laughlin 的综述，核对宇宙学年代η约100的远期演化框架与能量、熵的产生。
    - 按31 557 600秒/年把10^100年换算为3.16×10^107秒；正文明确热死亡是渐近理论状态。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "future-arc"
  scene: "time.object"
  caption: "热死亡 · 宇宙大尺度结构的远期示意"
  note: "星系、纤维与背景辐射为风格化示意，非按比例、非观测重建；颜色、光线与尺寸独立归一化，不能作为时间比例尺。"
  color: "#8aa8c4"
mode: 未来
tags:
  - 现在与未来
  - 未来
  - 人类史
---
## 它是什么

热死亡指宇宙达到热力学平衡、不再有可用自由能的理论状态。常见估算把这一时点放在约10^100年后，约合3.16×10^107秒（自大爆炸起算）。[1][2] 它不是一次爆炸或一个可观测事件，而是能量梯度逐渐消失后的渐近状态。

## 怎样知道

热力学第二定律说，孤立系统的熵趋于最大，能量从集中走向分散。Ohio State 的讲义把黑洞蒸发完毕后的阶段标为10^100年之后的黑暗时代，并描述万物达到同一温度与同一熵、生命变得不可能。[1] Adams 与 Laughlin 的综述讨论恒星、星系和黑洞的长期演化，把宇宙学年代η约100作为能量与熵产生的远端框架。[2] 这些结论来自理论外推，而不是对宇宙未来的直接观测。

## 数值与口径

10^100年按每年31 557 600秒换算为3.16×10^107秒；当前宇宙年龄4.354×10^17秒在这个量级上可以忽略。[1][2] 这个数字依赖宇宙持续膨胀、质子可能衰变、黑洞按霍金模型蒸发等假设。若暗能量不是常数，或存在额外衰变道，时间尺度会改变；10^100年只是模型量级，不是测量精度。

## 常见误解

把热死亡当成“宇宙在一次爆炸中终结”，或当成确定日期，都是误解。[1][2] 它描述的是逐渐失去能量梯度的过程，而不是瞬间事件；在热死亡之后，宇宙仍可能继续膨胀和冷却，只是无法再做功。还要区分“恒星形成停止”（约10^14年后）、“质子衰变”（约10^34至10^40年后）、“黑洞蒸发完毕”（约10^100年后）与“热平衡”这几个不同阶段。

## 与其他尺度的关系

热死亡位于宇宙时间轴的最远端，上接最后一代恒星、质子衰变时代和黑洞时代，下接无法再定义过程的平衡态。[1][2] 与“热死亡时间”条目相比，这一条记录的是未来时点，而不是持续时长；两者数值接近，但口径不同。把它写成模型推断而非未来日程，才能避免把理论量级误当成已排定的宇宙终结日期。
