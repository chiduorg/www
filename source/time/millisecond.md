---
id: time.millisecond
title: 毫秒
titleEn: One Millisecond
dimension: cosmic-time
category: 时长尺度
summary: >-
  毫秒是千分之一秒，即 10⁻³ 秒，等于一千微秒，属于 SI 秒的十进分数。它衡量一段过程持续多久，
  是持续时长，不是绝对时间轴上的某个时刻。
quantity:
  value: 1e-3
  unit: s
  measure: duration-interval
  approximate: false
  measureLabel: 持续时长；不是绝对时点
displayValue: 1 毫秒 = 10⁻³ 秒
related:
  - time.microsecond
  - time.nanosecond
  - time.second
  - time.blink
  - space.tsunami-wavelength
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
  definition: 1 ms = 10⁻³ s，按 SI 前缀 milli（10⁻³）与秒定义换算
  note: 毫秒是 SI 秒的十进分数，不是独立基准单位；它表示持续长度，不对应某个历史时刻。
uncertainty: >-
  毫秒是定义换算值，精确等于 10⁻³ 秒，不存在换算上的统计波动；实际时间戳与测量误差会受操作系统调度、
  网络传输和设备时钟漂移影响，可能远大于单位本身的定义精度。[2]
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 打开 BIPM 的 SI 前缀页，核对 milli 的符号 m 与因子 10⁻³，并确认其与 micro、nano 的十进关系。
    - 打开 NIST 的计时说明，核对秒由铯-133 跃迁周期定义，以及原子钟计数波周期的原理。
    - 正文按持续时长口径新撰，未沿用旧站正文。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://www.bipm.org/en/measurement-units/si-prefixes；https://www.nist.gov/how-do-you-measure-it/how-do-you-measure-second），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "chronometer"
  scene: "time.object"
  caption: "毫秒 · 闪光与电子计时示意"
  note: "示意，非按比例；钟面、闪光与电子元件为风格化处理。"
  variant: "clock"
  color: "#9fc1cf"
mode: 时长
tags:
  - 时长尺度
  - 时长
  - 日常
---
## 它是什么

一毫秒是千分之一秒，即 1 ms = 10⁻³ 秒，等于一千微秒。它衡量一段过程持续多久，是持续时长，不放在绝对时间轴上。日常生活中许多“瞬间”其实在毫秒量级：相机闪光灯的放电、蜂鸣器的一次振动、显示器刷新一帧的间隔，以及网络往返延迟，都常用毫秒描述。

## 怎样知道或为何是定义

毫秒是 SI 秒的十进分数，不是独立基准。BIPM 的前缀表把 milli 记为 10⁻³，micro 记为 10⁻⁶，nano 记为 10⁻⁹；加在秒上就分别得到毫秒、微秒、纳秒。[1] 秒的定义仍是铯-133 原子基态两个超精细能级跃迁辐射的 9 192 631 770 个周期，NIST 说明原子钟通过计数这一频率的波周期来产生时间间隔。[2] 所以毫秒的长度完全来自秒。

## 数值与口径

按定义，一毫秒精确等于 0.001 秒，也就是一千微秒或一百万纳秒；一秒包含一千毫秒。[1] 这个换算没有近似成分。实际测量中，毫秒级的时间戳可能受操作系统调度、网络传输和设备时钟漂移影响，误差可以远大于单位本身的定义精度。[2] 因而“毫秒级”有时指分辨率，有时指误差范围，需要分开说明。

## 常见误解

常见的误解是把“毫秒级延迟”当成一个固定值；它通常只是数量级描述，实际可能从零点几毫秒到几十毫秒不等。另一个误解是把毫秒与绝对时刻混淆：毫秒是持续长度，若要说“在某毫秒发生”，必须另有起算点。还有人以为毫秒、微秒、纳秒是三个互不相关的单位，其实它们都是秒按一千倍逐级细分的十进分数。[1]

## 与其他尺度的关系

一秒等于一千毫秒，一毫秒等于一千微秒，一微秒等于一千纳秒，形成连续的千进制阶梯。[1] 毫秒向上连接秒与分钟，向下连接微秒和纳秒；它正好处在人类感官与电子设备交界的尺度。日常说的“眨眼之间”通常比一毫秒长得多，而芯片时钟周期又比一毫秒短得多；用毫秒比较时，应同时说明测的是什么过程。

本条的时间单位与换算依据 BIPM 对秒的定义。[3]

按同一真空光速计算，光在这段时间内约走 300 公里，在空间轴上量级接近「海啸波长」。[3]
