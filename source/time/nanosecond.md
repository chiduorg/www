---
id: time.nanosecond
title: 纳秒
titleEn: One Nanosecond
dimension: cosmic-time
category: 时长尺度
summary: >-
  纳秒是十亿分之一秒，即 10⁻⁹ 秒，属于 SI 秒的十进分数。它衡量一段过程持续多久，是持续时长，
  不是绝对时间轴上的某个时刻。
quantity:
  value: 1e-9
  unit: s
  measure: duration-interval
  approximate: false
  measureLabel: 持续时长；不是绝对时点
displayValue: 1 纳秒 = 10⁻⁹ 秒
related:
  - time.microsecond
  - time.millisecond
  - time.second
  - time.present
  - space.ammonite
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
  definition: 1 ns = 10⁻⁹ s，按 SI 前缀 nano（10⁻⁹）与秒定义换算
  note: 纳秒不是独立基准单位，而是 SI 秒的十进分数；它表示持续长度，不对应某个历史时刻。
uncertainty: >-
  纳秒是定义换算值，精确等于 10⁻⁹ 秒，不存在因测量而来的不确定度；实际计时设备的误差另计，
  原子钟能分辨的微小分数也有限。[2]
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 打开 BIPM 的 SI 前缀页，核对 nano 的符号 n 与因子 10⁻⁹，并确认 milli、micro、nano 的十进关系。
    - 打开 NIST 的计时说明，核对秒由铯-133 的 9 192 631 770 个周期定义，以及原子钟可分辨极短分数。
    - 正文按持续时长口径新撰，未沿用旧站正文。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://www.bipm.org/en/measurement-units/si-prefixes；https://www.nist.gov/how-do-you-measure-it/how-do-you-measure-second），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "chronometer"
  scene: "time.object"
  caption: "纳秒 · 原子钟与高频时钟示意"
  note: "示意，非按比例；钟面、原子钟与电子元件为风格化处理。"
  variant: "clock"
  color: "#9fc1cf"
mode: 时长
tags:
  - 时长尺度
  - 时长
  - 微观
---
## 它是什么

一纳秒是十亿分之一秒，记作 1 ns = 10⁻⁹ 秒。它回答“这段过程持续多久”，是持续时长，不是宇宙历史中的绝对时刻，因此不放在绝对时间轴上。现代电子设备里，GHz 级时钟的一次振荡就落在纳秒量级：频率 1 GHz 对应周期 1 纳秒，3 GHz 则约为 0.33 纳秒。这个单位让工程人员可以描述芯片、光脉冲和网络信号中极短的间隔。

## 怎样知道或为何是定义

纳秒不是独立定义的新单位，而是 SI 秒的十进分数。国际计量局的前缀表把 nano 列为 10⁻⁹，把 micro 列为 10⁻⁶、milli 列为 10⁻³；把它们加在秒上，就得到纳秒、微秒和毫秒。[1] 秒本身由铯-133 原子基态超精细跃迁的 9 192 631 770 个周期定义，原子钟通过计数这些周期来产生时间间隔。[2] 因此纳秒的长度完全继承自秒的定义，不需要另做一次天文测量。

## 数值与口径

按定义，一纳秒精确等于 0.000000001 秒，也就是一千皮秒或一百万飞秒；一秒包含十亿纳秒。[1] 这里的换算没有统计平均，也没有各地不同的问题。实际计时器能分辨多小的间隔则是另一回事：NIST 说明，铯原子钟可以分辨约 1/9 192 631 770 秒的微小分数，现代光学钟的频率更高。[2] 仪器精度和单位换算不能混为一谈。

## 常见误解

常见的误解是把纳秒当成一个极短但固定的事件，例如某个信号在这一纳秒发生。纳秒只表示持续长度，不是时间轴上的刻度。另一个误解是认为既然纳秒如此之小，就必然测得更准；实际上能否测量取决于时钟与探测器的性能，定义上的精确不等于每次测量都精确。[2] 还要注意，纳秒、微秒、毫秒都是秒的十进分数，不是并列的独立基准。

## 与其他尺度的关系

一毫秒等于一千微秒，一微秒等于一千纳秒，三者构成秒向下的十进阶梯。[1] 纳秒向下连接皮秒与飞秒，向上连接微秒、毫秒；它常用于描述电子学与光学中的快速过程，而人的反应、眨眼等日常尺度则要用毫秒甚至秒来量。阅读“大爆炸后多少秒”时，那是在说绝对时刻；纳秒只说明一段过程持续多短。

本条的时间单位与换算依据 BIPM 对秒的定义。[3]

按同一真空光速计算，光在这段时间内约走 30 厘米，在空间轴上量级接近「菊石壳径」。[3]
