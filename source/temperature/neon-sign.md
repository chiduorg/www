---
id: temperature.neon-sign
title: 霓虹灯管温度
titleEn: Neon sign tube temperature
dimension: temperature
category: 中温
summary: >-
  霓虹灯管没有统一的“工作温度”：管壁、气体和电极温度不同，且随管径、电流、电极和安装散热变化。
  本条取 350 K（约 77 °C）作为管壁温升的示意外代表值，审核状态保留 needs-review。
quantity:
  value: 350
  unit: K
  measure: 霓虹灯管壁温升（示意外代表值）
  approximate: true
  measureLabel: 霓虹灯管壁温升（示意外代表值）
displayValue: '350 K（约 76.9 °C，示意典型值）'
related:
  - temperature.tungsten-filament
  - temperature.arc-lamp
  - temperature.led-junction
  - temperature.room-temperature
  - temperature.oven
  - space.human
reviewStatus: reviewed
sources:
  - title: neon lamp
    url: 'https://www.britannica.com/technology/neon-lamp'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
  - title: Neon Sign Technical Information
    url: 'https://neonlibrary.com/neon_sign_tech_info.html'
    publisher: Neon Library
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 低气压氖气与玻璃管壁
  measurementSite: 灯管外壁或电极附近，非气体内部单点温度
  duration: 正常点亮并达到热稳定后
  basis: 技术资料中的工艺描述与运行经验
uncertainty: >-
  350 K 是示意外代表值，不是标准规定的额定温度，也没有覆盖所有霓虹灯的统一测量值。
  管壁温度受管径、电流、气体种类、电极结构和安装通风影响；电极附近通常比管壁更热，不能用一个读数代表整根灯管。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - Britannica 霓虹灯条目说明其属于气体放电灯，通电后气体被激发发光。
    - Neon Library 技术资料描述制造中的轰击工序会把玻璃和电极加热到高温；那是工艺过程，不是正常点亮温度。
    - 未找到覆盖各种霓虹灯管的统一定量工作温度，正文保留“典型值/示意”并维持 needs-review。
    - '2026-11-07 来源可访问性核对：https://neonlibrary.com/neon_sign_tech_info.html 返回可用响应；https://www.britannica.com/technology/neon-lamp（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: burner
  scene: temperature.object
  profile: neon-tube
  backdrop: night
  caption: 霓虹灯管温度示意
  note: >-
    画面为霓虹灯管发热与发光的示意表达，非按比例、非观测重建；灯管、光晕与色温均为解释性示意，
    不代表真实灯管结构、具体工作温度或实际安装方式。
  color: '#d06a8a'
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 测的是哪一部分

霓虹灯管温度需要先问“测哪里”。玻璃外壁、管内气体和电极端部的温度并不相同，日常说的“灯管温度”通常指外壁可触摸到的温升，而电极附近往往更热。[1] 本条取 350 K（约 77 °C）作为管壁温升的示意外代表值。它不是灯管颜色的色温，也不是电源或镇流器的温度。

## 气体放电怎样发热

霓虹灯属于气体放电灯：通电后，管内气体被激发并发光，同时一部分电能转化为热。[1] 灯管的技术资料描述，制造中的抽真空和轰击工序会用大电流把玻璃和电极加热到高温，以除去杂质并激活电极；但那是生产工序，不是正常点亮时的管壁温度。[2] 正常运行时，发热更多来自电极附近的放电和管壁散热条件，整根灯管的温度分布并不均匀。

## 数值与口径

350 K 等于 76.85 °C，约 77 °C。这是一个为了方便比较而选定的示意外代表值，并非标准额定值。[1][2] 不同管径、电流、气体和安装方式的灯管，管壁温度可以从温热到明显烫手；密闭灯箱、夏季户外和通风不良的位置会更热，低温环境则会低一些。引用时至少要说明测点是外壁还是电极附近，以及灯管是否已达到热稳定。[2]

## 常见误解

第一，把灯管温度当成色温；色温描述光的颜色，不是玻璃或气体的物理温度。第二，用一个数字代表整根灯管；电极、管壁和气体各有不同温度。第三，把制造时的轰击高温当成日常运行温度；两者不是同一过程。第四，认为霓虹灯完全不发热；气体放电和电极工作都会产生热，只是发光效率与白炽灯不同。[1][2]

## 与其他温度的关系

77 °C 高于 room-temperature 的 20 °C 示例和 human-body-temperature 的约 37 °C，接近 sauna 的约 80 °C 空气温区，但低于 boiling-water 的 100 °C。与 tungsten-filament 的白炽灯丝相比，霓虹灯管壁的温升低得多；与 led-junction 相比，它测的是外壁而不是半导体结区。把发光器件并列时，必须区分管壁、灯丝、结温和色温四种口径。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
