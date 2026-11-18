---
id: temperature.neutrino-background-temp
title: 宇宙中微子背景温度
titleEn: Cosmic neutrino background temperature parameter
dimension: temperature
category: 恒星与宇宙极端
summary: 标准宇宙学热史预计，遗迹中微子的分布可用约 1.95 K 的有效温度参数描述。 它由光子与中微子的热史关系推得，不能写成已经直接测量到的宇宙中微子背景温度。
quantity:
  value: 1.95
  unit: K
  measure: 标准宇宙学遗迹中微子有效温度参数
  approximate: true
  measureLabel: 标准宇宙学遗迹中微子有效温度参数
displayValue: 约 1.95 K（理论参数）
related:
  - temperature.cmb
  - time.recombination
  - time.neutrino-decoupling
  - time.big-bang
  - space.sun
reviewStatus: reviewed
sources:
  - title: 'Cosmic neutrino background: temperature parameter'
    url: 'https://home.ba.infn.it/~marrone/interactive-relic-neutrinos.html'
    publisher: 'Alessandro Marrone, INFN Bari'
    accessed: '2026-11-06'
  - title: Neutrino properties from cosmology
    url: 'https://arxiv.org/abs/1803.11545'
    publisher: 'Martina Gerbino, NuPhys2017 review'
    accessed: '2026-11-06'
legacy:
  id: neutrino-background-temp
  icon: "\U0001F47B"
  relatedLabels: 宇宙微波背景辐射、中微子、原初核合成、绝对零度
conditions: >-
  标准 ΛCDM 热史下 Tν≈(4/11)^(1/3)Tγ 的有效分布参数；中微子在约 1 MeV 前后退耦，
  之后不再与光子共享温度，属于非热平衡的遗迹分布；不是已直接测得的背景温度，也不是当前有质量中微子的动能温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - INFN 的遗迹中微子互动图给出 Tν/Tγ=(4/11)^(1/3)，并由 Tγ=2.7255 K 得到 Tν≈1.95 K。
    - Gerbino 的宇宙学中微子综述同样给出 Tν≈1.95 K，并强调这是标准热史下的分布参数。
  originalQuantity:
    value: 1.95
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 1.95 K 依赖标准热史、瞬时退耦近似和三种轻中微子假设；非瞬时退耦、味道振荡与有限温度量子修正 会改变细节，N_eff≈3.044
  只是辐射密度的参数化，不是粒子数或味道数的直接计数。
visual:
  template: radiation-field
  profile: neutrino
  caption: 宇宙中微子背景模型
  note: >-
    这是理论分布的有效温度参数，不是已直接测出的粒子动温；粒子轨迹与颜色为抽象示意，
    非按比例，非观测重建。所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#afbadc'
  symbol: Cosmic neutrino background
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
  - 天体
---
## 它是什么

宇宙中微子背景是宇宙早期大量中微子退耦后留下的遗迹分布。它类似宇宙微波背景，但携带的是中微子而不是光子。标准热史认为，早期宇宙中微子、电子、正电子和光子曾共享同一温度；随着宇宙膨胀，弱相互作用率迅速下降，中微子在约 1 MeV 前后退耦。[1] 此后正负电子对湮灭，把能量主要交给光子，中微子则保持相对更低的温度。这个温度参数就是本条讨论的对象，而不是今天某个中微子探测事件的能量。

## 怎样测到或为何是推断

宇宙中微子背景尚未被直接探测到，因为它与物质的相互作用极弱。现有证据是间接的：宇宙学观测通过辐射密度、原初核合成和物质涨落约束中微子种类与质量，热史计算则给出温度关系。[2] 在瞬时退耦近似下，Tν/Tγ=(4/11)^(1/3)；取当前光子温度 2.7255 K，得到 Tν≈1.95 K。[1] 这不是温度计读数，而是标准热史下的理论参数。若退耦不是瞬时完成，或存在额外相对论性粒子，这个关系需要修正。

## 数值与口径

本条采用约 1.95 K 作为遗迹中微子的有效温度参数，只保留三位有效数字。它描述的是中微子分布的特征温标，不是今天有质量中微子的全部动能温度；中微子质量会改变能量密度和结构形成，但不直接改写这个热史参数。它也不是光子温度：2.725 K 与 1.95 K 的比例由电子—正电子湮灭的加热历史决定。[1][2] 此外，N_eff≈3.044 参数化的是辐射密度，不是粒子数；把它读成“3.044 种中微子”会误解这个量的含义。

## 常见误解

第一，把 1.95 K 当成已经直接测到的背景温度；目前没有探测器能像测 CMB 那样测到宇宙中微子背景。第二，把中微子温度与光子温度等同；两者在退耦和电子对湮灭后不再相同。第三，把宇宙中微子背景与超新星中微子混同；后者来自具体爆发的瞬时过程，温度与能量高得多。第四，因为 1.95 K 很低就以为中微子已经静止；遗迹中微子仍可能以相对论速度运动，具体取决于质量。[2]

## 与其他温区的关系

1.95 K 低于宇宙微波背景的 2.725 K，但两者都是宇宙背景辐射的温标，不是局部物质温度。它高于绝对零度，低于液氢约 20.3 K。与恒星表面、白矮星表面和超新星核心相比，它低了很多个数量级。把 CMB 与中微子背景放在一起比较时，要注意它们来自同一段早期热史，却在退耦之后各自演化。[1][2]
