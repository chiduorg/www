---
id: temperature.dilution-refrigerator
title: 稀释制冷
titleEn: Dilution refrigerator reference
dimension: temperature
category: 极低温
summary: >-
  稀释制冷装置能够支持毫开尔文尺度实验。NIST 报道的一套扫描探针显微镜设施工作在约 10 mK；
  这里采用这个具体装置示例，不宣称所有稀释制冷机或所有量子器件都需要同一温度。
quantity:
  value: 0.01
  unit: K
  measure: 稀释制冷显微镜装置工作温度示例
  approximate: true
  measureLabel: 稀释制冷显微镜装置工作温度示例
displayValue: 约 10 mK（0.01 K）
related:
  - temperature.absolute-zero
  - temperature.helium-3-superfluid
  - temperature.nuclear-demagnetization-cooling
  - temperature.superfluid
  - temperature.rhodium-iron-thermometer
  - time.big-bang
reviewStatus: reviewed
sources:
  - title: A 10 mK Scanning Probe Microscopy Facility
    url: 'https://www.nist.gov/publications/10-mk-scanning-probe-microscopy-facility'
    publisher: NIST / Review of Scientific Instruments (2010)
    accessed: '2026-11-06'
  - title: ICE Dil Fridge
    url: >-
      https://www.nist.gov/ncnr/sample-environment/equipment/below-1k-inserts/ice-dil-fridge
    publisher: NIST Center for Neutron Research
    accessed: '2026-11-06'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
legacy:
  id: dilution-refrigerator
  icon: "\U0001F9CA"
  relatedLabels: 量子计算、超导量子比特、低温物理、氦-3超流相变、核退磁制冷、绝对零度、凝聚态物理、超导、拓扑量子计算
conditions: >-
  NIST 2010 年扫描探针显微镜设施在最高 15 T 磁场下的混合室/样品台基温约 10
  mK；不是稀释制冷技术的理论极限，也不是所有装置、热负载或量子比特的统一工作点。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - >-
      NIST 2010 论文摘要给出 10 mK 基温、15 T 磁场与定制稀释制冷机；NIST ICE Dil Fridge 页面给出另一套装置 60
      mK 基温，用于说明设备差异。
    - 正文按五节结构重写；保留 0.01 K，补充基温、热负载与冷却功率的区分。
  originalQuantity:
    value: 0.01
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  10 mK
  是该装置报告的基温，实际样品温度随热负载、布线和射频加热升高；不同稀释制冷机的基温可从数毫开尔文到数十毫开尔文，必须连同冷却功率与样品环境一起引用。
visual:
  template: cryo-instrument
  profile: dilution
  caption: 稀释制冷机冷级
  note: >-
    展示冷级、热锚和布线；量值对应所引 NIST 装置实例，并非所有设备极限，画面为示意而非工程重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#88c8e2'
  symbol: Dilution refrigerator
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

稀释制冷机利用氦-3 与氦-4 混合液在毫开尔文温区的相分离来连续吸热。氦-3 从稀释相进入浓相边界时带走热量，使混合室维持低温。[1] 它是量子器件、超导电路和低温显微实验常用的冷源，不是把样品直接放进液氦那么简单。混合室的冷却功率通常按 100 mK 下的微瓦量级标称，温度越低，可用的冷量越小。[2]

## 怎样测到或为何是有效温度

NIST 的扫描探针显微镜设施用定制稀释制冷机，在最高 15 T 磁场下达到约 10 mK 的基温，并用电阻温度计和实验稳定性来标定。[1] 这里的 10 mK 是混合室或样品台的基温；实际样品温度会随热负载、布线和射频加热而升高。另一套 NIST 中子散射用稀释插件的基温为 60 mK，说明装置之间差异很大。[2]

## 数值与口径

10 mK 等于 0.01 K，也等于 10,000 μK；它是该 NIST 装置在特定负载下的工作参考，不是稀释制冷技术的理论极限。[1] 例如 NIST 中子散射用的另一套稀释插件基温为 60 mK，两套设备相差数倍。[2] 比较时还要看 100 mK 下的冷却功率和样品环境，不能只抄一个数字。

## 常见误解

第一，认为稀释制冷机能把样品冷到绝对零度；它只能趋近，且温度越低冷却功率越小。第二，把冷级温度当成整台仪器的统一温度；样品、布线、窗口和电子学各自处于不同温度。第三，把毫开尔文读成“热量很小”；温度要与热容、热导一起决定实际热流。[1]

## 与其他温区的关系

10 mK 比氦-3 超流 A 点的 2.444 mK 高，比核退磁实验的 421 μK 电子温度高，却比液氦-4 的 2.17 K 超流转变低两个多量级。它也远高于 170 nK 的玻色—爱因斯坦凝聚，说明不同低温技术覆盖不同温区，不能相互替代。[1][2]

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]


## 深读一：量值口径

本条的核心量值是 0.01 K，量的是稀释制冷显微镜装置工作温度示例。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：NIST 2010 年扫描探针显微镜设施在最高 15 T 磁场下的混合室/样品台基温约 10 mK；不是稀释制冷技术的理论极限，也不是所有装置、热负载或量子比特的统一工作点。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照绝对零度（0）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]

## 补充：怎样复核这条读数

复核时先把 0.01 K 还原到条目写明的参照与条件，再做单位换算；与相邻条目比较时，只比较同一口径下的量值，不把标题里的四舍五入值当成新测量。若换算后落在两个已知锚点之间，应同时报告两个锚点与所用倍率，方便读者复算。[1][2] 本条不新增独立测量，也不改变原有来源与引用编号。
