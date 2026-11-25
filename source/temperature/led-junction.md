---
id: temperature.led-junction
title: LED 结温
titleEn: LED junction temperature
dimension: temperature
category: 中温
summary: >-
  LED 结温指半导体芯片结区的温度；本条取 398 K（约 125 °C）作为功率 LED 绝对最大结温额定值附近的圆整代表值。
  它不是灯珠外壳、散热器或环境温度，也不是色温。
quantity:
  value: 398
  unit: K
  measure: LED 半导体结区温度（代表值）
  approximate: true
  measureLabel: LED 半导体结区温度（代表值）
displayValue: '398 K（约 124.9 °C，代表值）'
related:
  - temperature.tungsten-filament
  - temperature.neon-sign
  - temperature.soldering-iron
  - temperature.room-temperature
  - temperature.oven
  - space.human
reviewStatus: reviewed
sources:
  - title: >-
      Thermal Design Considerations for the Nichia NCSxE17x Discrete Color
      LEDs
    url: >-
      https://led-ld.nichia.co.jp/api/data/spec/tech/SP-QR-C2-210113-5-E_Thermal%20Design%20Considerations%20for%20the%20Nichia%20NCSxE17x%20Discrete%20Color%20LEDs.pdf
    publisher: Nichia Corporation
    accessed: '2026-11-07'
  - title: High Power LED Thermal Management
    url: 'https://docs.rs-online.com/4592/0900766b80e289cf.pdf'
    publisher: RECOM / RS Components
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 半导体芯片结区
  measurementSite: LED 芯片有源区，非灯珠外壳或散热器
  duration: 稳态工作或热平衡条件下
  basis: 厂商热设计资料中的结温计算与绝对最大额定值
uncertainty: >-
  398 K 是圆整代表值，接近若干功率 LED 的绝对最大结温额定值；不同型号可为约 125–150 °C。
  结温不是外壳温度或环境温度，需通过热阻和功耗推算；实际工作结温通常低于上限，具体取决于驱动电流、基板、散热器和环境。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - Nichia 热设计资料给出结温计算公式，并列出该系列绝对最大结温 135 °C、为可靠性建议不超过 100 °C。
    - RECOM 应用资料说明功率 LED 的结温超过约 130 °C 后寿命迅速下降，并介绍热降额与过温保护。
    - 正文取 398 K（约 125 °C）作为绝对最大结温额定值附近的代表值，不把它当作所有 LED 的日常运行温度。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://led-ld.nichia.co.jp/api/data/spec/tech/SP-QR-C2-210113-5-E_Thermal%20Design%20Considerations%20for%20the%20Nichia%20NCSxE17x%20Discrete%20Color%20LEDs.pdf；https://docs.rs-online.com/4592/0900766b80e289cf.pdf），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: burner
  scene: temperature.object
  profile: led
  backdrop: electronics
  caption: LED 结温示意
  note: >-
    画面为 LED 结区发热的示意表达，非按比例、非观测重建；芯片、光晕与色带均为解释性示意，
    不代表真实封装结构、具体结温或实际散热设计。
  color: '#8fc7e8'
zone: 中温
tags:
  - 中温
  - 温度
  - 量子与粒子
---
## 结温指的是芯片内部

LED 结温指半导体芯片中有源结区的温度，通常记为 Tj。它不是灯珠外壳温度，也不是散热器或房间空气温度。芯片通电后，一部分电能转化为热，热量必须经芯片、焊料、基板和散热器逐层传出；结温就是这条热路径起点附近的温度。[1] 本条取 398 K（约 125 °C）作为功率 LED 绝对最大结温额定值附近的圆整代表值。

## 结温怎样推算

厂商通常不直接把温度计放进芯片，而是通过热阻和功耗推算：结温等于参考点温度加上热阻乘以功耗。[1] 因此，外壳摸起来不烫，并不说明结温一定低。Nichia 的热设计资料给出结温计算公式，并说明不同型号的绝对最大结温可为 135 °C 或更高；为获得较长寿命，还会建议把工作结温控制在更低水平。[1] 热阻、基板材料和散热面积直接决定同一功耗下的结温。

## 数值与口径

398 K 等于 124.85 °C，约 125 °C。这个数值接近许多功率 LED 的绝对最大结温额定值，而不是日常舒适工作点。[2] 厂商资料指出，功率 LED 的结温超过约 130 °C 后寿命会迅速下降；实际设计常把结温控制在远低于上限的水平，并通过降额或过温保护限制电流。[2] 因此，125 °C 更适合作为“接近上限”的坐标，而不是所有 LED 的典型运行温度。

## 常见误解

第一，把结温当成外壳温度；外壳、基板和散热器的温度都低于芯片结区。第二，把结温当成色温；色温描述光的颜色，与芯片温度不是同一个量。第三，认为只要环境温度不高就不会过热；小封装、高电流和差散热仍可让结温升高。第四，把绝对最大额定值当成推荐工作点；接近上限会缩短寿命并降低光效。[1][2]

## 与其他温度的关系

125 °C 高于 boiling-water 的 100 °C，也远高于 room-temperature 的 20 °C 示例和 human-body-temperature 的约 37 °C；它低于 oven 的 180 °C 设定，也低于 soldering-iron 的工作温区。与 tungsten-filament 的灯丝温度相比，它低得多；与 neon-sign 的管壁温度相比，它测的是半导体结区而非玻璃外壁。把发光器件放在同一张表上时，必须区分结温、外壳温度、管壁温度和色温。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
