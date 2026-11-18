---
id: temperature.reentry-plasma
title: 再入大气层等离子体
titleEn: Atmospheric reentry plasma
dimension: temperature
category: 极高温
summary: >-
  航天器再入大气层时，前方空气被强激波压缩加热并部分电离，形成包裹返回舱的等离子体鞘。本条取约 1 × 10⁴ K
  作为激波层气体温度的量级估计；它不是防热大底表面温度，也不是舱内温度。
quantity:
  value: 10000
  unit: K
  measure: 再入激波层等离子体温度量级估计
  approximate: true
  measureLabel: 再入激波层等离子体温度量级估计
displayValue: 约 1 × 10⁴ K（量级估计）
related:
  - temperature.rocket_plume
  - temperature.lightning
  - temperature.thermosphere
  - temperature.plasma-cutter
reviewStatus: reviewed
sources:
  - title: 'Plasma Science in Planetary Entry'
    url: 'https://ntrs.nasa.gov/api/citations/20190026772/downloads/20190026772.pdf'
    publisher: NASA Technical Reports Server
    accessed: '2026-11-07'
  - title: 'Thermophysics Facilities – FAQ'
    url: 'https://www.nasa.gov/thermophysics-facilities-faq/'
    publisher: NASA
    accessed: '2026-11-07'
conditions: >-
  对象为再入体前方激波层中的空气等离子体；1 × 10⁴ K 是随再入速度、高度和气体成分变化的量级估计，
  不是防热大底表面温度，也不是舱内温度。
review:
  method: source-check
  date: '2026-11-07'
  retry: '2026-11-07 复核（verified）：NTRS 白皮书可读，明确平衡等离子体 7,000–15,000 K、0.1–1 bar；NASA 热物性 FAQ 可读，称激波可把气体加热到 6000 K 以上，支持约 10⁴ K。'
  notes:
    - >-
      核对 NASA NTRS《Plasma Science in Planetary Entry》：典型再入平衡等离子体约 7,000–15,000 K、0.1–1 bar。
    - >-
      核对 NASA Thermophysics Facilities FAQ：激波可把气体加热到约 6,000 K 以上，防热大底表面另有其温度；
      正文按量级取 10⁴ K。
    - 本条为新增条目，reviewStatus 保持 needs-review。
uncertainty: >-
  再入激波层温度随再入速度、高度、气体成分和飞行器形状变化；文献给出约 7,000–15,000 K 的平衡等离子体范围，
  1 × 10⁴ K 只是量级估计，电子温度与平动温度也可能不同。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: radiation-field
  profile: shock-layer
  caption: 再入激波层等离子体示意
  note: >-
    以返回体前方的高温气体和辐射场作示意表达，不对应某次具体任务；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-surface
  color: '#b5d5ff'
  symbol: Reentry plasma
  scene: temperature.object
zone: 极高温
tags:
  - 极高温
  - 温度
---
## 它是什么

航天器以高超音速再入大气层时，前方空气来不及让开，被强激波压缩并迅速加热，部分分子离解、原子电离，形成包裹返回舱的等离子体鞘。[1] 本条讨论的是这层气体，而不是防热大底表面。鞘套会反射和吸收无线电，造成通信中断，这也是再入黑障的来源之一。

## 怎样测到

激波层温度很难用接触式传感器直接测量，常用光谱、辐射计、静电探针和地面电弧风洞模拟来推断。[1][2] NASA 的再入等离子体研究把典型平衡等离子体给在约 7,000–15,000 K、0.1–1 bar 的范围；NASA 的热物性设施问答则说激波可把气体加热到 6,000 K 以上。[1][2] 这些是不同速度、高度和气体条件下的量级，不是某次任务的实测均温。

## 数值与口径

本条取约 1 × 10⁴ K 作为量级估计，落在上述范围内。[1] 该数值指激波层中的气体温度，不是返回舱外壁温度；防热材料表面通常低得多，靠烧蚀和辐射散热把热量带走。[2] 高温空气还会离解和电离，电子温度、平动温度和振动温度不一定相等，光谱诊断给出的“温度”取决于所用谱线和模型。

## 常见误解

第一，把等离子体温度当成舱内或舱壁温度。第二，认为再入越热越危险；热流、压力与持续时间同样重要。第三，把某个速度下的数值当成所有再入任务的通用值；月球返回、火星进入和近地轨道返回的激波温度差别很大，气体成分也不同。第四，把发光颜色直接换算成温度。

## 与其他温区的关系

10⁴ K 高于火箭燃烧室的约 3,600 K，与闪电通道附近的量级相当，低于日冕的约 10⁶ K。它处在“工程高温”和“天体等离子体”之间的过渡区，说明再入加热足以电离空气，却不代表航天器整体达到这个温度。
