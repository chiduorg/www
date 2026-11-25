---
id: time.pulsar-period
title: 脉冲星周期
titleEn: Pulsar Period
dimension: cosmic-time
category: 时长尺度
summary: >-
  脉冲星周期是它自转一周、脉冲扫过地球一次的时间间隔。典型射电脉冲星约为 0.1 至 1 秒，但已知范围从约 1.4 毫秒到 11.8
  秒；它衡量自转有多快，不是脉冲星在某个时刻诞生的时间。
quantity:
  value: 1
  unit: s
  measure: duration-reference
  measureLabel: 典型射电脉冲星自转周期；取 1 秒作代表值，已知范围约 1.4 毫秒至 11.8 秒
  approximate: true
displayValue: 约 1 秒（典型值；实际约 1.4 毫秒–11.8 秒）
related:
  - space.neutron-star
  - temperature.millisecond_pulsar
  - space.crab-nebula
  - space.sagittarius-a-star
  - time.second
reviewStatus: reviewed
sources:
  - title: pulsar
    url: 'https://www.britannica.com/science/pulsar'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Neutron Stars
    url: 'https://imagine.gsfc.nasa.gov/science/objects/neutron_stars1.html'
    publisher: NASA Goddard Space Flight Center
    accessed: '2026-11-06'
  - title: >-
      New NASA Mission to Study Mysterious Neutron Stars, Aid in Deep Space
      Navigation
    url: >-
      https://www.nasa.gov/universe/new-nasa-mission-to-study-mysterious-neutron-stars-aid-in-deep-space-navigation/
    publisher: NASA / Goddard Space Flight Center
    accessed: '2026-11-24'
chronology:
  status: duration
  plot: false
  note: 本条是持续时长/周期，不是大爆炸后的绝对时点
conditions:
  definition: 脉冲星自转一周所需的时间，也是相邻两个脉冲到达地球的时间间隔
  sample: 射电脉冲星；本条取 1 秒作典型代表，毫秒脉冲星可短至约 1.4 毫秒，慢速脉冲星可长至约 11.8 秒
  scope: 适用于脉冲星的自转周期；脉冲宽度、脉冲星距离和观测频段不影响周期本身，但会影响脉冲是否容易被探测到
uncertainty: >-
  不存在单一的“脉冲星周期”。不同天体差异很大，毫秒脉冲星与普通脉冲星的形成和加速历史不同。1
  秒只是便于比较的代表值，不应把它当成所有脉冲星的平均值或精确常数。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 打开 Britannica 的 pulsar 条目，核对自转周期范围、1.396 毫秒的最快记录和 11.8 秒的最慢记录。
    - 打开 NASA Goddard 的 Neutron Stars 页面，核对脉冲星周期从毫秒到秒的量级及灯塔模型。
    - 正文按持续时长口径新撰，未沿用旧站正文。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: stellar-cycle
  scene: time.object
  caption: 脉冲星周期 · 中子星自转与辐射束示意
  note: 中子星、磁轴与辐射束为风格化示意，非按比例、非观测重建。
mode: 时长
tags:
  - 时长尺度
  - 时长
---
## 它是什么

脉冲星是快速自转、强磁化的中子星。它的磁极方向与自转轴并不重合，辐射束随星体转动扫过空间；当辐射束扫过地球方向时，望远镜就收到一个脉冲。因此，脉冲星周期就是它自转一周的时间，也是相邻两个脉冲之间的间隔。[1] 这个量回答“它转一圈有多快”，不是“这颗脉冲星何时形成”的绝对时点。

## 怎样知道

观测上，射电望远镜记录脉冲到达的时间，把一串脉冲的间隔取平均，就得到周期。脉冲非常规则，因此脉冲星被当作天然时钟使用。[1] 不同脉冲星的周期差异很大：Britannica 记载最慢的已知脉冲星约 11.8 秒，最快的一颗周期约 1.396 毫秒，即每秒自转约 716 圈；毫秒脉冲星通常通过吸积伴星物质而被加速。[1] NASA 的说明则概括为脉冲周期从毫秒到秒。[2] 这些计时结果还显示周期会极其缓慢地变长，说明星体在损失转动能。

## 数值与口径

本条取 1 秒作为典型射电脉冲星的代表值，按定义即 1 秒，写作 1 s。实际样本跨越约 1.4 毫秒到 11.8 秒，相差四个数量级。[1][2] 因此“脉冲星周期”不是一个常数，而是一类天体的参数范围。毫秒脉冲星的 1.396 毫秒等于 0.001396 秒；把它写成 1.4 毫秒是取整，不应再附加不存在的精度。比较不同脉冲星时，还要说明样本是普通脉冲星、毫秒脉冲星还是磁星。

## 常见误解

脉冲周期不是一次脉冲的持续时间，也不是脉冲星距离地球的光行时间。它主要由星体自转决定；脉冲“亮”与“暗”的宽度只是辐射束扫过视线的几何结果。[2] 另一个误解是把所有脉冲星都想成毫秒脉冲星；实际上多数普通脉冲星的周期在秒量级，毫秒脉冲星是经过特殊演化的一类。[1] 还要避免把周期理解成“脉冲星诞生的时刻”：周期描述多久转一圈，不是发生在何时。

## 与其他尺度的关系

脉冲星周期与秒的定义处在相近的数量级，因此常被拿来直观比较：一秒钟内，最快的脉冲星可以转数百圈。[1] 它向下连接中子星的结构与磁场，向上连接超新星遗迹和银河系中的恒星演化。与银河年或物种寿命相比，脉冲星周期极短；但它能长期保持稳定，使天文学家可以用它检验引力理论。尺度虽短，信息量却很大。

## 来源交叉核对

本条的时间锚点另用 [3]（NASA / Goddard Space Flight Center）交叉核对；不同来源对年代边界、纪年换算或历史分期的处理可能不同，正文以标注的口径为准。
