---
id: time.lithium-7-synthesis
title: 锂-7合成
titleEn: Lithium-7 Synthesis and the Lithium Problem
dimension: cosmic-time
category: 太初宇宙
summary: 原初锂-7主要经铍-7通道产生。标准核合成预言与古老恒星观测之间存在约 3 到 4 倍的差异，即宇宙锂问题；约 180 秒只是丰度定型的阶段参考。
quantity:
  value: 180
  unit: s
  measure: time-after-big-bang-epoch-reference
  measureLabel: 自大爆炸起的时期参考时间
  approximate: true
displayValue: t ≈ 180 秒
related:
  - time.nucleosynthesis
  - time.deuterium-bottleneck
  - time.recombination
  - space.helium-atom
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: 'Big Bang Nucleosynthesis, 2025 update, §24.2–24.5'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: 'The Primordial Lithium Problem, arXiv:1203.3551'
    url: 'https://arxiv.org/pdf/1203.3551'
    publisher: Brian D. Fields / Annual Review of Nuclear and Particle Science
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: lithium-7-synthesis
  icon: "\U0001F52C"
  relatedLabels: 宇宙大爆炸核合成、锂-7、氦-4、原初元素丰度、锂问题
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 锂-7合成
    quantity:
      value: 900
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = ~15 分钟
  notes:
    - >-
      PDG §24 核实 7Li/H 约 10^-10 与轻元素丰度总体比较；Fields 2012 综述核实观测比标准 BBN 预言低约 3–4
      倍、4–5σ。
    - 本轮按五节结构重写；180 秒保留为核合成窗口参考，不写成锂-7 单一生成时刻。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  referenceSeconds: 180
  modelChannel: '3He(4He,γ)7Be 主导质量数7产生'
  conversion: 180秒为原初轻核丰度基本定型的阶段参考
  precision: 非单一锂核生成时刻；丰度仍有观测与模型差异
  note: 采用来源所述模型条件下的量级/时期参考，不是直接观测到的宇宙计时。
uncertainty: 锂-7 的产生与破坏在核合成窗口内持续竞争；180 秒不代表全部锂核完成，观测与标准 BBN 的约 3–4 倍差异仍未解决。
visual:
  template: nuclear-network
  profile: lithium
  caption: 锂-7的合成与锂问题 · 三维参照
  note: >-
    ³He+⁴He→⁷Be 等通道为网络示意，最终锂丰度还受破坏反应与恒星耗损影响。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#c9b9d6'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

锂-7 是原初核合成留下的少量质量数为 7 的核素。它的主要产生通道不是一步直接合成，而是经由铍-7：³He(⁴He,γ)⁷Be 先造出⁷Be，后来⁷Be 通过电子俘获等过程转为⁷Li。[1] 因此“锂-7合成”描述的是一张反应网络，而不是某个锂核的诞生瞬间。[1]

## 怎样知道或为何是推断

PDG 的核合成计算给出 ⁷Li/H 约 10⁻¹⁰ 的预言，并与贫金属恒星的观测丰度比较。[1] Fields 的综述指出，氘和氦的观测与理论吻合较好，但⁷Li 观测比标准 BBN 预言低约 3 到 4 倍，构成“宇宙锂问题”。[2] 这不是直接测到早期锂核，而是用今天古老恒星大气中的锂丰度反推原初值。[1][2]

## 时间坐标与口径

本条用约 180 秒作原初轻核丰度基本定型的阶段参考，不是锂-7 的单一完成时刻。[1] 质量数 7 的产生与破坏在核合成窗口内持续竞争，⁷Be 的后续转化还延伸到更晚阶段；因此一个秒数不能代表全部锂核。[1][2] CERN 概述只说明最初几分钟形成轻核，不能提供锂问题的精确时间。[3]

## 常见误解

误解之一是把锂问题当成“观测证明大爆炸错了”。它更像标准 BBN、恒星演化与观测系统误差之间的局部张力，其他轻元素仍吻合良好。[1][2] 另一个误解是把所有锂都当成原初产物；恒星内部会生产和消耗锂，选择低金属丰度恒星正是为了减少后续污染。[1][2]

## 与其他阶段的关系

锂-7 合成位于原初核合成末期，与氘瓶颈、氦-4 形成同一反应网络；之后才进入物质主导与复合。[1][3] 与“氘瓶颈”条目相连，可比较不同核素的竞争通道；与“原初核合成”条目相连，则看到轻元素丰度整体检验。[1][2] 锂问题的解决方向包括核反应截面、恒星耗损和新物理，但都需独立证据。[2]
