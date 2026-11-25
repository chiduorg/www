---
id: time.microsecond
title: 微秒
titleEn: One Microsecond
dimension: cosmic-time
category: 时长尺度
summary: >-
  微秒是百万分之一秒，即 10⁻⁶ 秒，等于一千纳秒，属于 SI 秒的十进分数。它衡量一段过程持续多久，
  是持续时长，不是绝对时间轴上的某个时刻。
quantity:
  value: 1e-6
  unit: s
  measure: duration-interval
  approximate: false
  measureLabel: 持续时长；不是绝对时点
displayValue: 1 微秒 = 10⁻⁶ 秒
related:
  - time.nanosecond
  - time.millisecond
  - time.second
  - time.present
  - space.aircraft-carrier
reviewStatus: reviewed
sources:
  - title: 'The International System of Units (SI): Prefixes'
    url: 'https://www.bipm.org/en/measurement-units/si-prefixes'
    publisher: International Bureau of Weights and Measures (BIPM)
    accessed: '2026-11-07'
  - title: How Do You Measure a Second?
    url: 'https://www.nist.gov/how-do-you-measure-it/how-do-you-measure-second'
    publisher: National Institute of Standards and Technology (NIST)
    accessed: '2026-11-07'
  - title: 'SI base unit: second (s)'
    url: 'https://www.bipm.org/en/si-base-units/second'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
chronology:
  status: duration
  plot: false
  note: 本条是持续时长，不是大爆炸后的绝对时点，不放在绝对时间轴上
conditions:
  mode: duration
  definition: 1 μs = 10⁻⁶ s，按 SI 前缀 micro（10⁻⁶）与秒定义换算
  note: 微秒是 SI 秒的十进分数，不是独立基准单位；它表示持续长度，不对应某个历史时刻。
uncertainty: >-
  微秒是定义换算值，精确等于 10⁻⁶ 秒，不存在换算上的统计波动；实际计时与测量设备的误差另计，
  普通电子计时器与原子钟的分辨能力也不在同一量级。[2]
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 打开 BIPM 的 SI 前缀页，核对 micro 的符号 μ 与因子 10⁻⁶，并确认其与 milli、nano 的十进关系。
    - 打开 NIST 的计时说明，核对秒由铯-133 跃迁周期定义，以及原子钟计数波周期的方式。
    - 正文按持续时长口径新撰，未沿用旧站正文。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://www.bipm.org/en/measurement-units/si-prefixes；https://www.nist.gov/how-do-you-measure-it/how-do-you-measure-second），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "chronometer"
  scene: "time.object"
  caption: "微秒 · 高速脉冲与计时示意"
  note: "示意，非按比例；钟面、脉冲与电子元件为风格化处理。"
  variant: "clock"
  color: "#9fc1cf"
mode: 时长
tags:
  - 时长尺度
  - 时长
  - 微观
---
## 它是什么

一微秒是百万分之一秒，即 1 μs = 10⁻⁶ 秒，等于一千纳秒。它描述一段过程持续多久，属于持续时长，不是绝对时间轴上的某一点。日常尺度上它短得难以察觉，但在电子学、声学和高速摄影里很常见：一次短促的电脉冲、一段超声回波、一次闪光灯控制的偏差，都常用微秒来标定。

## 怎样知道或为何是定义

微秒同样是 SI 秒的十进分数。BIPM 的 SI 前缀表把 micro 记为 10⁻⁶，符号为 μ；它与 milli（10⁻³）和 nano（10⁻⁹）一起，构成秒的千进制细分。[1] 这些前缀不改变秒的物理定义，只改变所取的一份大小。秒由铯-133 的 9 192 631 770 个跃迁周期定义，NIST 说明原子钟正是靠计数这些周期得到时间间隔。[2]

## 数值与口径

一微秒精确等于 0.000001 秒，即一千纳秒、一百万分之一秒；一秒包含一百万个微秒。[1] 由于它是定义换算值，写成多少位小数都不会增加测量精度。真正受限制的是设备：普通电子计时器的分辨率可能在微秒到纳秒之间，而原子钟能分辨更小的分数。[2] 讨论“几微秒的误差”时，应说明那是仪器误差还是单位换算值。

## 常见误解

一种误解是把微秒和纳秒、毫秒随意混用，仿佛它们只差一点；实际上每相差一级就是一千倍。[1] 另一种误解是认为微秒级的过程无法观测，现代示波器、高速相机和时间数字转换器都能记录这一尺度。还有人把“持续一微秒”理解成“发生在某一微秒时刻”，前者是长度，后者需要绝对时间坐标，本条只讨论前者。

## 与其他尺度的关系

一毫秒包含一千微秒，一微秒包含一千纳秒，向上到秒则是一百万倍。[1] 微秒位于纳秒与毫秒之间，常用于描述比日常反应更快、又比单个光学周期更慢的过程。它和毫秒、纳秒一样，是秒的十进分数，而不是像天、年那样来自天文周期；比较不同条目时，先确认说的是持续时长还是绝对时刻。

本条的时间单位与换算依据 BIPM 对秒的定义。[3]

按同一真空光速计算，光在这段时间内约走 300 米，在空间轴上量级接近「航空母舰」。[3]


## 深读一：量值口径

本条的核心量值是 1e-6 s，量的是持续时长；不是绝对时点。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：mode=duration；definition=1 μs = 10⁻⁶ s，按 SI 前缀 micro（10⁻⁶）与秒定义换算；note=微秒是 SI 秒的十进分数，不是独立基准单位；它表示持续长度，不对应某个历史时刻。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照纳秒（1e-9）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
