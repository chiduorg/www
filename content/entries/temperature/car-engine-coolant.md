---
id: temperature.car-engine-coolant
title: 汽车发动机冷却液温度
titleEn: Automotive engine coolant temperature
dimension: temperature
category: 中温
summary: >-
  正常热机工况下，汽车发动机冷却液常处在约 90 °C 的温区；本条取 363 K。
  它是冷却液流体的工作温度，不是发动机金属表面温度、节温器开启设定或仪表报警阈值。
quantity:
  value: 363
  unit: K
  measure: 汽车发动机冷却液正常工作温度（代表值）
  approximate: true
  measureLabel: 汽车发动机冷却液正常工作温度（代表值）
displayValue: '363 K（约 89.9 °C，代表值）'
related:
  - temperature.boiling-water
  - temperature.oven
  - temperature.sauna
  - temperature.room-temperature
  - temperature.human-body-temperature
  - temperature.exhaust-gas
reviewStatus: reviewed
sources:
  - title: 'Thermostat, Temperature Sender, Thermoswitch, Temperature Sensor, CHT'
    url: 'https://www.mte-thomson.com.br/wp-content/uploads/2021/07/Catalogue-Temperatura-2018.pdf'
    publisher: MTE-Thomson
    accessed: '2026-11-07'
  - title: cooling system
    url: 'https://www.britannica.com/technology/cooling-system'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
conditions:
  medium: 乙二醇基冷却液
  measurementSite: 发动机冷却液通道或冷却液温度传感器处
  duration: 发动机达到正常工作温度后
  basis: 节温器规格与冷却系统设计
uncertainty: >-
  363 K 是圆整代表值；不同发动机的节温器开启温度、系统压力、负荷和环境温度都会改变冷却液读数。
  冷却液温度不是缸体金属温度，也不是节温器的开启设定值；仪表显示还可能经过平滑或分区处理。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - MTE-Thomson 技术资料给出节温器约 78–82 °C 开始开启、约 95 °C 完全开启，用于说明正常冷却液温区。
    - Britannica 冷却系统条目说明汽车用液体循环、节温器调节和加压提高沸点的基本结构。
    - 正文取 363 K（约 90 °C）作为热机冷却液的代表值，不把节温器设定或报警阈值当作流体实际温度。
    - '2026-11-07 来源可访问性核对：https://www.mte-thomson.com.br/wp-content/uploads/2021/07/Catalogue-Temperatura-2018.pdf 返回可用响应；https://www.britannica.com/technology/cooling-system（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: thermometer
  scene: temperature.object
  profile: coolant
  backdrop: garage
  caption: 冷却液温度示意
  note: >-
    画面为冷却液温度的示意表达，非按比例、非观测重建；温度计刻度、颜色与光晕均为解释性示意，
    不代表具体车型的仪表读数或真实冷却液温度。
  color: '#8fb59b'
zone: 中温
tags:
  - 中温
  - 温度
  - 机械
---
## 测的是冷却液，不是缸体

汽车发动机冷却液温度指在冷却回路中流动的液体温度，通常由发动机水温传感器读取。它既不是燃烧室或排气的高温，也不是缸体金属的表面温度。液体在发动机通道中吸热，再流到散热器放热，使发动机维持在设计的温度区间。[2] 本条取 363 K（约 90 °C）作为正常热机工况的圆整代表值，用于与其他日常温区比较。

## 节温器与散热回路

节温器是控制冷却液路径的阀门，不是温度计。MTE-Thomson 的技术资料说明，常见节温器约在 78–82 °C 开始开启，约在 95 °C 完全开启，从而让冷却液流向散热器。[1] 因此，节温器的开启温度是一个控制设定，冷却液温度则是液体实际达到的状态。系统还会加压以提高沸点，使约 90 °C 的冷却液在密闭回路中不易沸腾。[2]

## 数值与口径

363 K 等于 89.85 °C，约 90 °C。这个温度高于水的常压沸点以下的安全余量并不大，因此冷却系统依靠压力和乙二醇防冻液来稳定运行。[1][2] 但 90 °C 不是所有车型的统一值：节温器规格、发动机负荷、环境温度和散热风扇策略都会改变读数。仪表上的指针或数字还可能被平滑处理，不能当成精密测量。[1]

## 常见误解

第一，把冷却液温度当成发动机金属温度；缸体、缸盖和活塞的温度分布更复杂。第二，把节温器开启温度当成正常水温；78–82 °C 只是阀门开始动作的设定。第三，认为冷却液越冷越好；过冷会增加磨损、油耗和排放。第四，把仪表报警阈值当成正常工作温度；报警表示已经偏离正常区间。[1][2]

## 与其他温度的关系

90 °C 低于 boiling-water 的 100 °C 常压沸点，也高于 sauna 的约 80 °C 空气温度和 human-body-temperature 的约 37 °C。与 oven 的 180 °C 设定相比，它处在日常机械温区的下段。把冷却液与 boiling-water 并列时，必须说明前者在加压密闭回路中工作，后者的 100 °C 是常压沸点，两者不能直接等同。
