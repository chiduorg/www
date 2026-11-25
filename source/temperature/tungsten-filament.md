---
id: temperature.tungsten-filament
title: 钨带灯丝（校准实验）
titleEn: Tungsten-ribbon calibration lamp reference
dimension: temperature
category: 高温
summary: '一项光学校准研究使用工作在 2,800 K 的钨带灯作为真空紫外校准光源。这里采用这个具体实验参考，不把所有白炽灯、灯丝材料和相关色温都归成一个统一读数。'
quantity:
  value: 2800
  unit: K
  measure: 所引钨带校准灯实验工作温度
  approximate: true
  measureLabel: 所引钨带校准灯实验工作温度
displayValue: '2,800 K（实验参考）'
related:
  - temperature.tungsten-melting
  - temperature.silicon-melting
  - temperature.iron-melting
  - temperature.sun-surface
  - space.sun
reviewStatus: reviewed
sources:
  - title: >-
      Use of a tungsten filament lamp as a calibration standard in the vacuum
      ultraviolet
    url: 'https://pubmed.ncbi.nlm.nih.gov/20094612/'
    publisher: 'National Library of Medicine (Buckley, Appl. Opt. 1971)'
    accessed: '2026-11-06'
  - title: incandescent lamp
    url: 'https://www.britannica.com/science/incandescent-lamp'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'Tungsten: element data'
    url: 'https://periodic-table.rsc.org/element/74/tungsten'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-06'
legacy:
  id: tungsten-filament
  icon: "\U0001F4A1"
  relatedLabels: 白炽灯、钨熔点、黑体辐射、发光效率、惰性气体、库利奇、朗缪尔、照明、爱迪生、高温、LED
conditions: >-
  原始研究中带蓝宝石窗口的钨带灯在 2,800 K 工作，测量波段 1,500–2,700 Å；
  对象为真空中的钨带，不是所有白炽灯实际温度或相关色温的统一值。 灯丝温度由电流、电阻和辐射模型确定，属于物理温度而非相关色温。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 PubMed 摘要：钨带灯配蓝宝石窗口工作在 2800 K，1500–2700 Å 复现性优于 ±10%。
    - Britannica incandescent lamp 用于说明钨丝白炽发光；RSC 钨条目给出熔点 3687 K 与灯丝用途。
    - 区分物理温度与相关色温，保留原始实验 2800 K。
  originalQuantity:
    value: 2800
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: '2,800 K 是该校准实验的工作点，不是所有白炽灯的额定温度；窗口吸收、灯丝老化、电流稳定性和光谱仪标定都会影响复现性。'
visual:
  template: filament-lamp
  profile: ribbon
  caption: 钨丝标定灯
  note: >-
    对应所引钨带灯标定实例，不是每个白炽灯的统一灯丝温度；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: heat-flow
  color: '#ffd19a'
  symbol: Tungsten ribbon lamp
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

这里讨论的不是家用白炽灯的灯丝温度，而是一支用于真空紫外校准的钨带灯。钨带在真空中通电加热到 2,800 K，作为可复现的辐射源；它配蓝宝石窗口，可在 1,500–2,700 Å 波段提供稳定光谱辐亮度。[1] 钨的熔点约 3,687 K，2,800 K 仍留有余量。[3]

## 怎样测到

Buckley 1971 年的实验把钨带灯工作在 2,800 K，用 50 cm Ebert 光谱仪和日盲光电倍增管测量 1,500–2,700 Å 的光谱，复现性优于 ±10%。[1] 研究还通过光谱仪和光电倍增管的标定，直接测量灯的绝对光谱辐亮度，并由此得到热钨丝的表观发射率。灯丝温度由电流、电阻和辐射模型确定，属于物理温度而非相关色温。实验中还比较了不同波长下的光谱辐亮度，以检验灯丝是否接近灰体或黑体假设。

## 数值与口径

2,800 K 等于 2,526.85 °C。这个值是该实验的工作点，不是所有白炽灯的额定温度；普通白炽灯也依靠钨丝白炽发光，但额定功率、填充气体和寿命设计不同，灯丝温度并不都等于 2,800 K。[2][3] 相关色温是描述光源颜色的量，不等于灯丝的实际温度；两者不能互换。校准灯的复现性优于 ±10%，但仍需控制窗口吸收、老化和电流稳定性。

## 常见误解

第一，把 2,800 K 当成“白炽灯的统一温度”；不同灯泡的灯丝温度差异很大。[2] 第二，把色温当成灯丝温度；色温是光谱分布的等效描述，不是热电偶读数。第三，认为钨丝会工作在熔点附近；2,800 K 比 3,687 K 低约 887 K，蒸发和脆断仍是寿命限制。[3] 第四，把校准灯的 2,800 K 直接用于 LED 或其他光源；不同发光机制的“温度”含义不同。

## 与其他温区的关系

2,800 K 高于纯铁熔点 1,811 K、硅熔点 1,687 K 和本生灯高温区约 1,773 K，但低于氧乙炔火焰的 3,473 K 和钨熔点 3,687 K。它远低于太阳表面 5,772 K，属于白炽照明与光谱校准的温区。
