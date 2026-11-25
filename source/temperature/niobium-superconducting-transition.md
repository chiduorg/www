---
id: temperature.niobium-superconducting-transition
title: 铌超导转变
titleEn: Niobium superconducting transition
dimension: temperature
category: 低温
summary: >-
  金属铌在低场、高纯样品中的超导转变温度通常写作约 9.2 K（−263.95 °C）； NIST 固定点证书测得中点为 9.2488
  K。这个温度只是转变条件之一，不能保证任意磁场、电流或样品形态下都无阻载流。
quantity:
  value: 9.2
  unit: K
  measure: 体相金属铌低场超导转变参考
  approximate: true
  measureLabel: 体相金属铌低场超导转变参考
displayValue: 约 9.2 K
related:
  - temperature.liquid-hydrogen
  - temperature.liquid-nitrogen
  - temperature.ybco-superconducting-transition
  - temperature.absolute-zero
  - temperature.mgb2-critical-temperature
  - space.atom
reviewStatus: reviewed
sources:
  - title: >-
      Evaluation of the Propensity of Niobium to Absorb Hydrogen During
      Fabrication of SRF Cavities
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4548874/'
    publisher: 'NIST Journal of Research, original study'
    accessed: '2026-11-06'
  - title: 'SRM 767a: Superconductive Thermometric Fixed Point Device'
    url: >-
      https://tsapps.nist.gov/srmext/certificates/archives/767a.%20Feb%2014,%201992.pdf
    publisher: NIST
    accessed: '2026-11-06'
  - title: >-
      A Comparison of Methods for Computing the Residual Resistivity Ratio of
      High-Purity Niobium
    url: >-
      https://www.nist.gov/publications/comparison-methods-computing-residual-resistivity-ratio-high-purity-niobium
    publisher: NIST
    accessed: '2026-11-06'
  - title: "hydrogen"
    url: "https://www.britannica.com/science/hydrogen"
    publisher: "Encyclopaedia Britannica"
    accessed: '2026-11-24'
  - title: "Nitrogen: Phase change data"
    url: "https://webbook.nist.gov/cgi/cbook.cgi?ID=C7727379&Mask=4"
    publisher: "NIST Chemistry WebBook, SRD 69"
    accessed: '2026-11-24'
legacy:
  id: niobium-superconducting-transition
  icon: ⚕️
  relatedLabels: 超导、BCS理论、库珀配对、迈斯纳效应、液氦温度、量子力学、钇钡铜氧超导转变、液氮温度、超导磁体、SQUID、量子计算
conditions: 高纯、退火、近零外磁场的体相金属铌在电阻—温度曲线上进入超导态的中点参考；强磁场、电流、薄膜、应变与杂质都会改变转变温度或转变宽度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NIST 铌材料研究把超导转变写作约 9.2 K；NIST SRM 767a 证书对高纯铌给出中点 9.2488 K、转变宽度 23 mK。
    - NIST 残留电阻比论文把纯铌低于约 9.3 K 作为外推背景；证书另给出外磁场修正约 1.0 mK/G。
    - 正文按五节重写，区分 Tc、临界磁场/电流与样品条件；quantity 保留 9.2 K。
  originalQuantity:
    value: 9.2
    unit: K
    measure: temperature
    approximate: true
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  9.2 K 是铌体相低场转变的圆整参考；NIST 固定点证书的特定样品中点为 9.2488 K，差异约 0.05
  K。外磁场、电流、薄膜、应变与杂质会改变转变温度或加宽转变。
visual:
  template: superconducting-sample
  profile: niobium
  caption: 铌超导样品
  note: >-
    温度是材料超导转变的参考；悬浮磁体与磁力线只用于说明超导场景，为非按比例的示意，不是特定装置的观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#9fcfea'
  symbol: Nb
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

铌（Nb）是元素超导体，冷到约 9.2 K 附近时电阻突然消失并进入超导态。这个温度叫超导临界温度 Tc，描述的是材料在特定条件下的正常态—超导态转变，不是“铌器件只要低于 9.2 K 就能无限载流”的保证。[1] 体相铌的 Tc 在元素中较高，因此常用于射频超导腔和超导磁体。

## 怎样测到

常用四引线电阻法或互感法：缓慢降温，同时测量样品电阻或磁化强度，取转变曲线中点作为 Tc。NIST 的铌材料研究把转变温度写作约 9.2 K；NIST SRM 767a 固定点证书对高纯铌给出中点 9.2488 K、转变宽度 23 mK，并说明在推荐条件下复现性为 ±0.3 mK。[1][2] 同一证书还提醒，外磁场会压低 Tc，铌的修正约为 1.0 mK/G。[2]

## 数值与口径

9.2 K 是常用的圆整参考，9.2488 K 是特定证书样品的测量中点，两者相差约 0.05 K，不应把后者当成所有铌的通用值。[1][2] 9.2 K 换算为 −263.95 °C。比较时必须说明样品纯度、退火状态、外磁场和测量判据；NIST 另一项工作把“纯铌低于约 9.3 K 超导”作为电阻率外推的背景，也说明不同判据会给出略不同的数字。[3]

## 常见误解

第一，把 Tc 当成“零电阻的上限温度”而忽略磁场与电流；超导体有临界磁场和临界电流，超过后仍会失超。[2] 第二，把薄膜、铌钛合金或铌锡化合物的 Tc 与纯铌混为一谈；不同材料的转变温度差别很大。第三，认为 9.2 K 是“摄氏度”；它等于 −263.95 °C。第四，认为转变宽度为零；实际样品有毫开尔文量级的过渡区。[2]

## 与其他温区的关系

9.2 K 高于液氦的 4.2 K，低于液氢的 20.3 K 和液氮的 77.4 K。[1][3] NIST 同一固定点装置中铅的 Tc 为 7.19974 K，说明铌比铅高约 2 K；与钇钡铜氧的约 92 K 相比，铌仍属于低温超导材料。[2][3] 这些比较都必须带磁场与样品条件，不能只看一个 Tc 数字。

## 临界磁场与临界电流

铌的 9.2 K 只是零磁场附近的临界温度；外加磁场会压低 Tc，超过临界磁场后材料恢复电阻。[2] 超导体还有临界电流，电流过大也会失超。把 Tc 当成“低于就永远零电阻”，会忽略磁场与电流这两个维度。

## 五轴对照

在温度轴，铌 Tc 约 9.2 K；在空间轴，超导腔的表面电流分布影响性能；在质量轴，铌原子质量与晶格振动决定电子配对；在时间轴，失超可能在毫秒内发生。温度、磁场与电流共同定义超导态。[1][2]

## 临界磁场与临界电流

铌的 9.2 K 只是零磁场附近的临界温度；外加磁场会压低 Tc，超过临界磁场后恢复电阻。超导体还有临界电流，电流过大也会失超。把 Tc 当成“低于就永远零电阻”，会忽略磁场与电流两个维度。[1][S2]

## 读数的口径与换算

本条采用的量是 约 9.2 K，口径是 体相金属铌低场超导转变参考。温度是强度量，读数依赖温标、测点与热平衡；同一对象的不同部位、不同时刻可以有不同温度。把这条读数和相邻条目比较时，先换成同一单位，再取比值；不要用不同口径的数值直接相减。若只能记住一件事：它回答的是“这个对象大概落在哪个量级”，不是一个可以代入所有样本的常数。

## 延伸核对

补充的来源 [4]（Encyclopaedia Britannica）、[5]（NIST Chemistry WebBook, SRD 69） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
