---
id: time.inflation
title: 宇宙暴胀的理论图景
titleEn: Cosmic Inflation as a Model
dimension: cosmic-time
category: 太初宇宙
summary: 暴胀设想早期宇宙曾经历极快的空间膨胀，并把微小起伏拉伸到大尺度。这里采用 ESA 概述中的结束量级作理论参考，不表示已测得统一的起止秒数。
quantity:
  value: 1.e-36
  unit: s
  measure: time-after-big-bang
  measureLabel: 模型推算的宇宙时间参考
  approximate: true
displayValue: t = 10⁻³⁶ ~ 10⁻³² 秒
related:
  - time.reheating
  - time.big-bang
  - space.inflation
  - space.quantum-fluctuation
  - time.primordial-black-holes
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: The cosmic microwave background and inflation
    url: >-
      https://www.esa.int/Science_Exploration/Space_Science/Planck/The_cosmic_microwave_background_and_inflation
    publisher: ESA / Planck
    accessed: '2026-11-06'
  - title: Cosmology — Inflation
    url: 'https://www.britannica.com/science/cosmology-astronomy/Inflation'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Planck and the cosmic microwave background
    url: >-
      https://www.esa.int/Science_Exploration/Space_Science/Planck/Planck_and_the_cosmic_microwave_background
    publisher: ESA / Planck
    accessed: '2026-11-06'
  - title: "Nonperturbative Dynamics of Reheating After Inflation: A Review"
    url: "https://arxiv.org/abs/1410.3808"
    publisher: "Amin, Hertzberg, Kaiser & Karouby / International Journal of Modern Physics D"
    accessed: '2026-11-24'
  - title: "The early universe"
    url: "https://home.cern/science/physics/early-universe"
    publisher: "CERN"
    accessed: '2026-11-24'
legacy:
  id: inflation
  icon: "\U0001F388"
  relatedLabels: 宇宙暴胀（空间尺度）、量子涨落、原初引力波、B模式偏振、宇宙微波背景辐射、永恒暴胀、多重宇宙、标量场
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  original:
    title: 宇宙暴胀
    quantity:
      value: 1.e-36
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 10⁻³⁶ ~ 10⁻³² 秒
  notes:
    - >-
      ESA 页面给出暴胀持续到约 10⁻³² 秒、尺度增大约 10³⁰ 倍；Britannica 说明暴胀解释平坦性、各向同性并稀释 GUT
      磁单极子，同时指出“优雅退出”难题。
    - 本轮按五节结构重写；不把暴胀结束量级当作统一起点或已直接观测的全过程。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: 模型时间坐标 t；presentSeconds 仅作 time.present 对照，不用于反推暴胀时刻
  precision: 模型量级参考，非测量精度
  note: 采用来源所述模型条件下的量级参考，不是直接观测到的宇宙计时。
uncertainty: 暴胀机制、持续时间和起止时刻依赖具体模型；10⁻³²秒是 ESA 概述中的结束量级，不是通用测量误差，也不能当成所有模型的统一边界。
visual:
  template: quantum-field
  profile: inflation
  caption: 宇宙暴胀的理论图景 · 三维参照
  note: >-
    网格与扩张环是暴胀模型说明，不是实测图像或统一起止边界。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: primordial
  color: '#c49bc1'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

暴胀设想宇宙在极早期经历一段加速的空间膨胀，把原本微小的区域拉得极大，并使量子起伏被拉伸成密度扰动。这里的“膨胀”指空间尺度增长，不是物质向某个中心飞散。[1][2] ESA 的 Planck 科普说，暴胀持续到约 10⁻³² 秒，之后宇宙尺度增加了约 10³⁰ 倍。[1] 暴胀因此不是“大爆炸”的同义词，而是热大爆炸历史早期的一个模型阶段。[1][2] 同一组 Planck 科普资料也把 CMB 说明为大爆炸遗留辐射。[3]

## 怎样知道或为何是推断

暴胀不是直接看到的过程。[1] 支持主要来自宇宙微波背景：温度涨落的统计特征、接近标度不变的谱，以及空间平坦性，都能被暴胀图景解释或约束。[1][2] ESA 明确说，CMB 中的涨落“被认为”来自暴胀，具体细节仍要从数据中提取。[1] Britannica 也把暴胀列为解释各向同性、平坦性和缺少磁单极子的机制，并指出“优雅退出”仍是难题。[2] 所以证据支持的是模型后果，不是暴胀时代本身的直接录像。[1][2]

## 时间坐标与口径

暴胀通常被放在大爆炸后约 10⁻³⁶ 秒启动，并在约 10⁻³² 秒量级结束；这两个数字都是模型坐标，不是同一事件的精确起止。[1] 不同暴胀模型的势能、持续时间和再加热历史不同；10⁻³² 秒不能当作所有模型的共同边界，更不能当成测量误差。[1][2] 因此本条把它写成可给出条件性时段的模型框架，而不是已观测确认的历史刻度。[1][2]

## 常见误解

误解之一是把暴胀当成“大爆炸本身”或一次在已有空间里发生的爆炸。暴胀发生在大爆炸热历史早期，描述的是空间膨胀加速，不是火光四射的中心爆炸。[1][2] 另一个误解是认为 CMB 已经直接证明某个具体暴胀模型。数据支持一类图景，却不能单独选出唯一势能，也不能排除所有替代方案。[1][2] 图中网格与扩张环同样只是解释性示意，不是实测图像。[1]

## 与其他阶段的关系

暴胀结束后需要把场能转为粒子，这就是再加热问题；再加热之后才接上电弱、夸克—强子转变与核合成等热历史。[1][2] 它也与普朗克时代、大统一假说相邻，但相邻只表示理论排序，不表示已有连续观测。[2] 阅读时可把“空间暴胀”与“时间坐标”分开：前者解释为何宇宙平坦，后者只是模型给这段时间贴的标签。[1][2]

## 暴胀解决了什么，不解决什么

暴胀图景能解释宇宙为什么接近平坦、为什么微波背景如此均匀，以及为什么没有观测到大量磁单极子。[1][2] 它不能单独解释暴胀为什么开始、为什么结束，也不能把量子起伏的谱指数精确到唯一模型。不同势能模型可以给出相似的 CMB 统计，数据只能约束参数空间，不能直接选出“正确”的暴胀场。

## 五轴对照

在时间轴，暴胀发生在约 10⁻³⁶–10⁻³² 秒；在空间轴，它把微小区域拉伸到宏观尺度；在温度轴，暴胀后的再加热把场能转为粒子，重新点燃热大爆炸；在质量轴，暴胀产生的密度扰动后来长成星系与星系团。四条轴共享同一段早期历史，但各自量的不是同一事件。[1][2]

## 延伸核对

补充的来源 [4]（Amin, Hertzberg, Kaiser & Karouby / International Journal of Modern Physics D）、[5]（CERN） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
