---
id: temperature.cremation
title: 火化炉
titleEn: Cremator furnace temperature
dimension: temperature
category: 高温
summary: >-
  火化炉的炉膛设定温度通常取约 800 ℃（1,073 K）。这是主燃室/再燃室的控制温度， 不是遗体表面温度或骨灰最终温度；实际燃烧阶段可在
  800–1,000 ℃ 之间。
quantity:
  value: 1073
  unit: K
  measure: 火化炉炉膛设定温度
  approximate: true
  measureLabel: 火化炉炉膛设定温度
displayValue: '约 1,073 K（800 °C）'
related:
  - temperature.incinerator
  - temperature.cement-kiln
  - temperature.human-body-temperature
  - temperature.boiling-water
reviewStatus: reviewed
sources:
  - title: Key stages of the cremation process
    url: >-
      https://www.west-lindsey.gov.uk/sites/default/files/2022-02/WLDC%20-%20LFC%20-%20C4%20Key%20Stages%20of%20the%20Cremation%20Process.pdf
    publisher: West Lindsey District Council
    accessed: '2026-11-06'
  - title: Emission estimation technique manual for crematoria
    url: >-
      https://www.agriculture.gov.au/sites/default/files/documents/crematoria.pdf
    publisher: >-
      Australian Government Department of Sustainability, Environment, Water,
      Population and Communities
    accessed: '2026-11-06'
conditions: 火化机主燃室与再燃室、遗体与棺木、燃气或电加热；温度指炉膛控制/烟气温度。 设备是否带尾气治理、炉型、装载量和燃烧阶段都会影响实际温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 West Lindsey 火化流程文件：再燃室预热到 800 ℃（带尾气治理为 850 ℃），主燃室约 650 ℃。
    - '核对澳大利亚政府火化排放手册：成年火化约 90 分钟，温度 800–1,000 ℃。'
    - '正文取 800 ℃ 的圆整值 1,073 K，并区分主燃室、再燃室与遗体/骨灰温度。'
uncertainty: >-
  主燃室与再燃室常见 800–1,000 ℃（约 1,073–1,273 K），带尾气治理的设备下限多为 850 ℃。
  燃烧峰值可短时超过设定值；炉膛温度不等于遗体内部或骨灰温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "combustion"
  profile: "incinerator"
  caption: "火化炉炉膛设定温度示意"
  note: "画面为火化炉燃烧室与烟道的示意表达，炉体比例、火焰颜色和烟气均经艺术处理， 不能据颜色判断精确温度；非按比例，非观测重建；各对象分别调整显示大小。"
  scene: "temperature.object"
  color: "#e0834f"
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

火化炉的炉膛温度是火化机主燃室和再燃室的设定/运行温度。本条取约 800 ℃（1,073 K）作为炉膛设定参考；它不是遗体表面温度，也不是骨灰最终温度。火化炉通常分为主燃室和再燃室，前者处理遗体与棺木，后者把未完全燃烧的气体继续氧化。[1]

## 怎样测到

火化机用热电偶监控主燃室和再燃室，控制系统按预热的程序升温。[1] 英国 West Lindsey 的火化流程文件写明：再燃室在火化前须预热到 800 ℃，带尾气治理的设备为 850 ℃；主燃室约预热到 650 ℃。[1] 澳大利亚政府的排放估算手册则给出成年遗体火化约 90 分钟、温度 800–1,000 ℃。[2] 预热不足会导致点火延迟和烟尘增加，因此规程把炉温达标作为装炉前提。

## 数值与口径

800 ℃ 换算为 1,073 K。[1] 主燃室在燃烧阶段会升到 800–1,000 ℃，再燃室要求不低于 800 或 850 ℃；这些是设备设定和烟气温度，不是遗体整体均匀受热到同一温度。[1][2] 不同炉型的升温曲线不同，但控制目标都是让燃烧稳定并抑制恶臭与烟尘，操作记录通常按批次保存温度曲线。

## 常见误解

第一，把火化温度当成“烧成灰”的唯一条件；时间、气流和炉型同样重要。第二，把 800 ℃ 当成骨灰温度；出炉后骨灰迅速冷却。第三，把火化炉与垃圾焚烧炉等同；两者的物料、污染物控制和炉膛结构不同。[1][2]

## 与其他温区的关系

1,073 K 高于水的沸点 373 K 和纸的自动点火温度约 505 K，低于垃圾焚烧炉的约 1,273 K 和水泥窑的 1,723 K。它足以分解有机物并煅烧骨骼，但不会熔化铁制随葬品。[2]
