---
id: temperature.superconducting-gap
title: 超导能隙温度
titleEn: Superconducting gap temperature
dimension: temperature
category: 极低温
summary: >-
  超导能隙温度不是独立于材料的固定温度。BCS 弱耦合近似下 Δ(0) ≈ 1.76 k_B Tc； 以铌的 Tc ≈ 9.2 K 作参考，本条取约 9
  K，并说明能隙温度定义依赖系统。
quantity:
  value: 9
  unit: K
  measure: 以铌 Tc≈9.2 K 为参考的能隙对应温区
  approximate: true
  measureLabel: 以铌 Tc≈9.2 K 为参考的能隙对应温区
displayValue: 约 9 K（−264.15 °C，Nb 的 Tc≈9.2 K 参考）
related:
  - temperature.niobium-superconducting-transition
  - temperature.ybco-superconducting-transition
  - temperature.superfluid
  - temperature.absolute-zero
  - temperature.squid-working-temperature
reviewStatus: reviewed
sources:
  - title: 'Microscopic Quantum Interference Effects in the Theory of Superconductivity – Nobel Lecture'
    url: 'https://www.nobelprize.org/prizes/physics/1972/cooper/lecture/'
    publisher: 'The Nobel Foundation（Leon N. Cooper, 1972）'
    accessed: '2026-11-07'
  - title: 'SRM 767a: Superconductive Thermometric Fixed Point Device'
    url: >-
      https://tsapps.nist.gov/srmext/certificates/archives/767a.%20Feb%2014,%201992.pdf
    publisher: NIST
    accessed: '2026-11-06'
  - title: The Nobel Prize in Physics 1972 – Press release
    url: 'https://www.nobelprize.org/prizes/physics/1972/press-release/'
    publisher: Nobel Prize Outreach
    accessed: '2026-11-06'
conditions: >-
  以高纯、低场、体相铌的临界温度 Tc≈9.2 K 作参考；BCS 弱耦合近似给出零温能隙 Δ(0)≈1.76 k_B Tc。不同材料的
  Tc、能隙大小与配对机制不同，薄膜、磁场、电流和杂质也会改变转变。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NIST SRM 767a 证书对高纯铌给出 Tc 中点 9.2488 K、转变宽度 23 mK；正文取约 9 K 作圆整参考。
    - >-
      Scholarpedia 的 BCS 条目给出零温能隙 Δ(0)=1.76 k_B Tc；Nobel 1972
      年新闻稿说明拆散库珀对需要超过临界值的能量。
    - 正文区分 Tc、能隙能量与 Δ/k_B 等效温度，并说明“定义依赖系统”，不把铌的参考值推广到所有超导体。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  9 K 是铌 Tc≈9.2 K 的圆整参考，不是所有超导体的共同能隙温度；若把能隙写成 Δ(0)/k_B，铌约为 16 K。 不同材料的 Tc
  可从液氦温区到百开尔文以上，能隙还随磁场、电流、薄膜和杂质变化，定义依赖系统。
visual:
  template: superconducting-sample
  profile: gap
  caption: 超导能隙与库珀对示意
  note: >-
    库珀对、能隙和磁力线为解释性示意，非按比例，也不是实验观测重建；温度参考对应铌的临界温度，不代表任意超导样品的工作温度。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: deep-cold
  color: '#9fcfea'
  symbol: Δ
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
  - 日常
---
## 它是什么

超导体中的能隙是拆散一个库珀对所需的最小能量。BCS 理论认为，电子通过晶格振动形成配对，配对凝聚后在费米能级附近打开一个能量间隙；这使得低能散射被抑制，电阻消失。[1][3] “超导能隙温度”不是标准术语：有人指临界温度 Tc，有人指把能隙写成等效温度 Δ/k_B。

## 怎样测到

能隙可由隧道谱、热容和电磁吸收等方法测量；临界温度则由电阻—温度曲线或磁化曲线取转变中点。NIST 的固定点证书对高纯铌给出 Tc 中点 9.2488 K、转变宽度 23 mK。[2] 铌因此常被用作约 9 K 温区的超导参考。BCS 弱耦合近似还给出零温能隙 Δ(0) ≈ 1.76 k_B Tc。[1][3]

## 数值与口径

本条取约 9 K 作为铌的 Tc 参考，对应 9.2488 K 的证书值圆整；它不是“所有超导体的能隙温度”。按 Δ(0) ≈ 1.76 k_B Tc 估算，铌的 Δ(0)/k_B 约 16 K，和 Tc 本身不是同一个数。[1][2] 不同材料的 Tc 可从液氦温区到百开尔文以上，例如钇钡铜氧约 92 K；能隙大小也随材料与配对机制变化。定义依赖系统，比较时必须说明取的是 Tc 还是 Δ/k_B。

## 常见误解

第一，把 9 K 当成能隙本身；9 K 是铌的临界温度参考，能隙是能量，需用 k_B 换算。第二，把能隙温度当成所有超导体共有的常数；不同材料的 Tc 和能隙差别很大。第三，把 Tc 当成“低于它就一定能无阻载流”；磁场、电流和样品形态都会破坏超导。[2] 第四，把能隙与费米能混为一谈；两者相差多个量级。

## 与其他温区的关系

9 K 高于液氦的 4.2 K，低于液氢的 20.3 K 和液氮的 77.4 K；它远低于金属电子费米温度的 10⁴ K 量级，也远高于宇宙微波背景的 2.725 K。与 0 K 相比，9 K 仍是可观的热能尺度。把超导转变、能隙等效温度和其他温区并列时，必须保留材料与定义。[1][2]
