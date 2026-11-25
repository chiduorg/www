---
id: time.andromeda-collision
title: 银河-仙女座碰撞
titleEn: Milky Way–Andromeda Collision
dimension: cosmic-time
category: 现在与未来
summary: 银河-仙女座碰撞指银河系与仙女座星系在引力作用下接近、潮汐扰动并最终并合的过程。首次近距离接近常见模型放在约45亿年后；这是模型推断，不是已观测的日程。
quantity:
  value: 577409200000000000
  unit: s
  measure: future-time-model-reference
  measureLabel: 银河系与仙女座首次接近的未来模型参考时点
  approximate: true
displayValue: 距今约 45 亿年后（t ≈ 5.77 × 10^17 秒）
chronology:
  status: future
  plot: false
  note: 未来时点，超出当前时间轴，显示为模型推断而非已观测
conditions:
  timeBasis: time.present
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: presentSeconds + futureYears × secondsPerYear
  model: Hubble 自行测量约束下的 N 体模拟与轨道积分（van der Marel 等 2012）
  note: 结果依赖仙女座横向速度、本星系群质量分布与三体轨道细节，首次接近与并合完成不是同一时点。
uncertainty: >-
  这是模型推断，不是观测日程。van der Marel 等人的模拟给出首次近心点约38.7亿年后（+4.2/−3.2亿年），
  并合约58.6亿年后（+16.1/−7.2亿年）；其他可视化把首次相遇放在约40亿年、并合完成放在约60至70亿年。
  区间来自观测误差与轨道参数，不能压缩成一个确定日期。[1][2]
related:
  - space.andromeda-galaxy
  - space.milky-way
  - space.local-group
  - time.milky-way-formation
  - time.last-stars
reviewStatus: reviewed
sources:
  - title: >-
      The M31 Velocity Vector. III. Future Milky Way–M31–M33 Orbital Evolution,
      Merging, and Fate of the Sun
    url: 'https://arxiv.org/abs/1205.6865'
    publisher: arXiv / Astrophysical Journal
    accessed: '2026-11-06'
  - title: A New Dawn
    url: 'https://svs.gsfc.nasa.gov/cgi-bin/details.cgi?aid=11011&button=recent'
    publisher: NASA Scientific Visualization Studio
    accessed: '2026-11-06'
  - title: Andromeda Galaxy
    url: 'https://www.britannica.com/place/Andromeda-Galaxy'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Cosmic Distance Scale — The Local Group
    url: 'https://imagine.gsfc.nasa.gov/features/cosmic/local_group_info.html'
    publisher: NASA / GSFC / HEASARC
    accessed: '2026-11-24'
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      打开 van der Marel 等 2012 的 arXiv
      摘要，核对首次近心点3.87（+0.42/−0.32）Gyr、并合5.86（+1.61/−0.72）Gyr。
    - 打开 NASA 可视化 A New Dawn，核对约40亿年正面相遇、随后约20亿年多次碰撞、约70亿年形成椭圆星系。
    - 打开 Britannica 的 Andromeda Galaxy 条目，核对仙女座距离约248万光年、直径约20万光年。
    - 按31 557 600秒/年把45亿年换算为1.42×10^17秒，再加4.354×10^17秒，得t≈5.77×10^17秒。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: future-arc
  scene: time.object
  caption: 银河-仙女座碰撞 · 两座旋涡星系并合示意
  note: 星系盘、潮汐尾与并合形态为风格化示意，非按比例、非观测重建；颜色、光线与尺寸独立归一化，不能作为时间比例尺。
  color: '#8aa8c4'
mode: 未来
tags:
  - 现在与未来
  - 未来
  - 人类史
---
## 它是什么

银河-仙女座碰撞指银河系与仙女座星系在引力作用下接近、潮汐扰动并最终并合的过程。首次近距离接近常见模型放在约45亿年后，约合5.77×10^17秒（自大爆炸起算）。[1][2] 这不是一次瞬间相撞，而是一场持续数十亿年的引力重组。

## 怎样知道

哈勃望远镜测量仙女座星系中恒星的自行，得到它在天空中的横向速度；把位置、视向速度和本星系群质量分布放进轨道积分与N体模拟，就能外推未来的接近与并合。[1] van der Marel 等人的计算给出首次近心点约38.7亿年后，并合约58.6亿年后。[1] NASA的可视化则把正面相遇放在约40亿年，随后约20亿年的多次碰撞，最终在约70亿年形成椭圆星系。[2] 仙女座距离约248万光年、直径约20万光年，这些尺度决定了相遇的几何。[3]

## 数值与口径

45亿年按每年31 557 600秒换算约1.42×10^17秒，加上当前宇宙年龄4.354×10^17秒，得到t≈5.77×10^17秒。[1][2] 这里的“45亿年”指首次接近的参考时点；并合完成更晚，常见估计在约60至70亿年。把首次接近、核心并合和最终弛豫当作同一天，会抹掉过程内部的时间结构。

## 常见误解

星系碰撞不等于恒星彼此相撞。恒星之间的间距远大于恒星直径，真正发生的是气体云压缩、潮汐尾形成和轨道重排；太阳系很可能保留下来，但所在轨道会改变。[1][2] 另一个误解是把并合当成两座星系“正面对撞后立刻消失”；实际上它们会先多次交错，再逐渐并成一个椭圆星系。

## 与其他尺度的关系

这次接近略早于太阳红巨星阶段（约50亿年后），但远早于最后一代恒星（约10^14年后）。[1] 它发生在太阳仍处于主序的阶段，因此地球上若有观测者，看到的将是仙女座在夜空中逐渐变大。把星系并合与恒星演化放在同一时间轴上，能看清不同过程各自的主导机制。

## 来源交叉核对

本条的时间锚点另用 [4]（NASA / GSFC / HEASARC）交叉核对；不同来源对年代边界、纪年换算或历史分期的处理可能不同，正文以标注的口径为准。
