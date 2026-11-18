---
id: time.proton-antiproton-annihilation
title: 质子-反质子湮灭
titleEn: Early Proton–Antiproton Abundance Evolution
dimension: cosmic-time
category: 太初宇宙
summary: >-
  早期强子与反强子的产生、湮灭和稀释共同改变其丰度。10⁻⁴
  秒采用大学课程的粗略量级参照；现代计算需要温度、反应率与残余不对称条件，不能称所有反物质瞬间消失。
quantity:
  value: 0.0001
  unit: s
  measure: time-after-big-bang-model-reference
  measureLabel: 模型条件下的宇宙时代参考
  approximate: true
displayValue: 约10⁻⁴秒（所引课程的粗略热史参照）
related:
  - time.baryon-asymmetry-establishment
  - time.hadron-era
  - space.proton
  - time.quark-hadron-phase-transition
reviewStatus: reviewed
sources:
  - title: 'ASTR328 Cosmology and Large Scale Structure, Class 17, 27 October 2022'
    url: 'https://astroweb.case.edu/ssm/328f22/Class17.pdf'
    publisher: Stacy McGaugh / Case Western Reserve University
    accessed: '2026-11-06'
  - title: A Short Survey of Matter-Antimatter Evolution in the Primordial Universe
    url: 'https://arxiv.org/pdf/2305.09055'
    publisher: 'Johann Rafelski et al. / University of Arizona, Universe 2023'
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: proton-antiproton-annihilation
  icon: "\U0001F4A2"
  relatedLabels: 反质子、反物质、湮灭、质能转换、强子时代、重子不对称性、粒子对撞机、量子色动力学
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 质子-反质子湮灭
    quantity:
      value: 0.0001
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 10⁻⁴ 秒
  notes:
    - >-
      CWRU 2022 课件第 2—3 页明确 proton-antiproton annihilation ends 对应约 1e-4
      s，作为教学量级；Rafelski 等 2023 §3.1 用重子熵比与阈值说明“结束”依赖模型定义。
    - 本轮按五节结构重写；不把课程秒数当成精确冻结时刻，也不改写原 quantity。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  curriculumReferenceSeconds: 0.0001
  modelThresholdMeV: 38.2
  conversion: 课程时间表给量级；现代模型以温度与重子熵比定义消失条件
  precision: 教学量级参考，非精确冻结时刻
  note: 采用所引课程的条件性时代/量级参照，不是直接观测到的计时。
uncertainty: 10⁻⁴ 秒仅是所引课程时间表的量级参照；反强子丰度阈值、反应冻结与“今天没有反质子”不是同义词。
visual:
  template: particle-reaction
  profile: proton
  caption: 早期质子与反质子的丰度演化 · 三维参照
  note: >-
    粒子通道只说明丰度演化，课程量级不是精确冻结时刻。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#d3a989'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

质子和反质子是强子时代的重子与反重子。高温等离子体中，夸克—胶子物质强子化后产生两者；它们可以湮灭成介子或光子，也能由高能碰撞重新产生。[1][2] 讨论的是热背景中反重子丰度如何被稀释和消耗，而不是单个质子遇到反质子的瞬间。[2]

## 怎样知道或为何是推断

CWRU 2022 课程时间表把“质子—反质子湮灭结束”标在约 10⁻⁴ 秒，作为早期宇宙教学量级。[1] 2023 年 Rafelski 等人的综述则用重子数与熵的守恒，讨论反重子何时相对净重子变得可忽略，并给出约 38.2 MeV 的条件；这说明“结束”依赖所用定义。[2] CERN 概述只说明数微秒后夸克聚成质子和中子，不能提供精确的反质子冻结时刻。[3]

## 时间坐标与口径

10⁻⁴ 秒来自一张教学时间表，数量级意义大于测年意义；它没有附带误差，也不对应一个可观测事件。[1] 若用 38.2 MeV 的模型条件，还要说明重子—光子比、反应率与残余不对称的假设，换成秒数会随膨胀史变化。[2] 因此这条坐标只能帮助定位“强子时代之后、核合成之前”，不能当作所有反质子同时消失的日期。[1][2]

## 常见误解

误解之一是把湮灭当成反物质彻底灭绝。宇宙今天反质子极少，是因为净重子不对称加上稀释与湮灭，不是每一次反质子都恰好遇到质子。[2] 另一个误解是把 10⁻⁴ 秒当成物质—反物质对称性建立的时刻；不对称如何起源属于更早的重子生成问题。[2][3]

## 与其他阶段的关系

它位于夸克—强子转变之后、轻子与核合成之前，是强子时代向辐射主导热史过渡的一部分。[1][2] 反重子丰度下降会影响能量密度与熵，但不会单独决定轻元素丰度；后者主要由约 180 秒时的中子—质子比和重子密度控制。[3] 与“重子不对称建立”条目相连，可以区分“不对称从何而来”和“残余反物质怎样消失”。[2]
