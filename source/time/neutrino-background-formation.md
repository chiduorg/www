---
id: time.neutrino-background-formation
title: 宇宙中微子背景形成
titleEn: Formation of the Cosmic Neutrino Background
dimension: cosmic-time
category: 太初宇宙
summary: 热大爆炸模型预言，逐渐脱耦的中微子留下遍布宇宙的遗迹背景。星系分布和微波背景提供间接证据；秒级参照不能误写成旧稿的 1 年。
quantity:
  value: 1
  unit: s
  measure: time-after-big-bang-model-reference
  measureLabel: 模型条件下的宇宙时代参考
  approximate: true
displayValue: 大爆炸后约1秒（背景形成的秒级参照）
related:
  - time.neutrino-decoupling
  - temperature.neutrino-background-temp
  - time.recombination
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: Scientists Confirm Events that Occurred One Second after the Big Bang
    url: >-
      https://physicalsciences.ucsd.edu/media-events/articles/2019/scientists-confirm-events-that-occurred-one-second-after-the-big-bang.html
    publisher: UC San Diego School of Physical Sciences
    accessed: '2026-11-06'
  - title: 'Neutrinos in Cosmology, 2025 update'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrinos-in-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: 'Big Bang Nucleosynthesis, 2025 update'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
legacy:
  id: neutrino-background-formation
  icon: "\U0001F47B"
  relatedLabels: 中微子退耦、原初核合成、宇宙微波背景辐射、电子-正电子湮灭
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 宇宙中微子背景形成
    quantity:
      value: 31500000
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = ~1 年
  notes:
    - UCSD 机构正文核实约 1 秒的模型背景与星系分布间接证据；PDG §26.1 明确遗迹中微子背景尚未直接探测，撤下无依据的 1 年。
    - 本轮按五节结构重写；背景形成与脱耦均为渐进过程，不写成同一瞬间。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  modelTemperatureMeV: 2
  conversion: 温度—时间换算依赖辐射主导膨胀史与有效自由度
  precision: 约秒级量级参考，非精确测年
  note: 采用所引模型的条件性时代参照，不是直接观测到的计时。
uncertainty: 约 1 秒是标准热史的圆整时代参考；背景形成与脱耦为渐进过程，不是一个共同瞬间。
visual:
  template: radiation-front
  profile: neutrino
  caption: 宇宙中微子背景的早期形成 · 三维参照
  note: >-
    渐进退耦的解释模型，不是已直接拍到的遗迹中微子。两条概念保留独立 ID。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#a4c9db'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

宇宙中微子背景是热大爆炸模型预言的遗迹粒子海。早期中微子与等离子体耦合，冷却后逐渐脱耦，之后几乎不再碰撞，数量与动量分布被膨胀保存下来。[2] 它不是某个实验室发出的中微子束，而是充满全宇宙、今天温度约 1.9 K 的微弱背景。[2]

## 怎样知道或为何是推断

PDG 明确说，遗迹中微子背景尚未被直接探测；支持来自三方面吻合：原初轻元素丰度、微波背景各向异性功率谱，以及大尺度结构聚集。[2] 2019 年，国际合作团队利用 BOSS 巡天约 120 万星系的位置，测到中微子对星系聚集特征的细微影响，把“约 1 秒时产生”的标准图景与今天的大尺度结构联系起来。[1]

## 时间坐标与口径

标准热史把中微子脱耦与背景形成放在大爆炸后约 1 秒的秒级阶段；PDG 把逐渐脱耦的开始概括在约 2 MeV。[2][3] 这个“1 秒”是模型时代参照，不是背景粒子在同一瞬间全部释放；脱耦延续一段时间，电子对湮灭还会向中微子少量传热。[2] 原初核合成在约 180 秒时基本定型，可为该阶段提供独立约束。[3]

## 常见误解

误解之一是把背景形成当成一次可见的“闪光”或可拍到的图像。它是统计性的粒子遗迹，单个中微子能量极低，直接捕获极其困难。[2] 另一个误解是把星系巡天的间接测量说成已经直接探测到背景；测量的是中微子对物质分布的累积影响，不是逐个计数。[1][2]

## 与其他阶段的关系

中微子背景形成紧接中微子脱耦，早于原初核合成，也远早于复合与微波背景释放。[2][3] 它与光子背景是两套不同的遗迹：微波背景来自约 38 万年后的光脱耦，中微子背景则来自秒级阶段的弱脱耦。[2] 两者共同约束同一套热历史，但观测手段和证据强度不同。[1][2]

<!-- deepen-v1:scale-anchor -->
## 尺度锚点补充

本条取 1 秒，换算后是 1 秒；约 1.25 次心跳间隔（0.8 秒）。这把尺子只改写单位，不改变量值；它把本条固定在时间轴的 10⁰ 量级附近。

读图时先看量级，再看倍数：10⁰ 的相邻刻度相差十倍，本条与同轴相邻条目的差距，往往比标题里的形容词更能说明位置。这个补充只用于尺度定位；若要与别的条目比较，先确认两者量的是同一属性，再换算到同一单位。换轴比较时，长度、时间、温度、质量与原子序数各有自己的零点和单位，不能把数值直接互换；原始口径与不确定度仍以 [1] 为准。
