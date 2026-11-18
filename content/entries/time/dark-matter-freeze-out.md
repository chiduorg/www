---
id: time.dark-matter-freeze-out
title: 暗物质冻结
titleEn: Thermal Freeze-out of Dark Matter
dimension: cosmic-time
category: 太初宇宙
summary: 热冻结是一种计算暗物质遗留丰度的候选机制：反应逐渐跟不上膨胀，粒子留下残余数量。它既不是结冰，也不是所有暗物质模型共有的历史。
quantity:
  value: null
  unit: s
  measure: undetermined-cosmic-time
  measureLabel: 宇宙时间未核定
  approximate: true
  status: undetermined
displayValue: 理论候选机制，发生时间未定
related:
  - time.electron-positron-annihilation
  - time.reheating
  - time.first-dark-matter-halos
  - space.observable-universe
  - temperature.neutrino-background-temp
reviewStatus: reviewed
sources:
  - title: 'Dark Matter, 2025 update, §27.3'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-dark-matter.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: >-
      Precise Relic WIMP Abundance and its Impact on Searches for Dark Matter
      Annihilation
    url: 'https://arxiv.org/pdf/1204.3622'
    publisher: 'Steigman, Dasgupta & Beacom / Physical Review D'
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: dark-matter-freeze-out
  icon: "\U0001F311"
  relatedLabels: 大统一时期、电弱对称性破缺、星系形成、第一批暗物质晕
chronology:
  status: undetermined
  plot: false
review:
  method: source-check
  date: '2026-11-08'
  reviewer: assistant-source-check
  original:
    title: 暗物质冻结
    quantity:
      value: 1.e-10
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = ~10⁻¹⁰ 秒
  notes:
    - >-
      旧 10⁻¹⁰ 秒撤出当前 quantity；PDG §27.3 明确冻结计算依赖模型、截面与背景宇宙学，Steigman
      等人给出随质量变化的截面。
    - 保留“未定”状态：热冻结不是所有暗物质模型的共同历史，缺少可比较的统一时间坐标；本轮补写机制与间接证据，不改 quantity。
    - >-
      2026-11-07 保留“未定”状态：早期宇宙节点：quantity 为 null，属模型/假说，尚无统一核定时刻；保留
      “未定”状态。
    - '2026-11-07 B5 复核：量值保持 undetermined；原因：冻结时刻依赖粒子质量、湮灭截面与早期宇宙假设；非热或不对称产生可能没有热冻结。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
conditions:
  timeBasis: time.big-bang
  modelTemperatureGeV: null
  conversion: 冻结温度由反应率等于膨胀率解出，随粒子质量与截面改变
  precision: 依赖候选模型，无统一时刻
  note: 当前不提供确定宇宙时间，不进入历史坐标轴；原始旧值仅保留在 review.original。
uncertainty: 热冻结时刻与温度由粒子质量、湮灭截面和早期宇宙假设共同决定；非热产生或不对称产生机制可能没有热冻结阶段。
visual:
  template: radiation-front
  profile: freezeout
  caption: 暗物质热冻结假说 · 三维参照
  note: >-
    丰度曲线为模型示意，不代表已观测到的暗物质粒子或统一冻结时刻。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#b8b2c8'
  scene: time.object
mode: 未定
tags:
  - 太初宇宙
  - 未定
  - 早期宇宙
---
## 它是什么

热冻结是产生暗物质残余丰度的一种候选机制：某种暗物质粒子早期与热浴频繁碰撞，产生与湮灭维持化学平衡；宇宙膨胀冷却后，改变粒子数的反应跟不上膨胀，丰度便“冻结”在一个残留值。[1] 这里的“冻结”不是结冰，而是化学脱耦。[1]

## 怎样知道或为何是推断

暗物质的存在由星系旋转曲线、引力透镜、星系团质量等多种引力证据推断；PDG 强调其微观本质仍未知，已知的只有中微子占很小一部分。[1] 热冻结丰度用玻尔兹曼方程计算，把湮灭截面、粒子质量与膨胀史输入模型，再和今天观测到的宇宙物质密度比较。[1][2] Steigman 等人细化了这一计算，指出所需湮灭截面会随质量变化，低质量区尤其明显。[2]

## 时间坐标与口径

本条不指定冻结年代，因为冻结温度由“反应率等于膨胀率”的方程解出，随候选粒子的质量、截面和早期宇宙假设改变。[1] 常见弱作用大质量粒子模型把冻结放在电弱时代附近，但这不是所有暗物质模型的共同历史；非热产生、不对称产生等机制可以没有热冻结阶段。[1][2] 因此未定坐标表达的是模型未选定，不是暗物质不存在。[1]

## 常见误解

误解之一是把“冻结”当成暗物质粒子停止运动或停止湮灭。冻结后仍可有反应，只是不足以把丰度拉回平衡；粒子继续自由流动并参与引力聚集。[1][2] 另一个误解是把某个实验没看到信号就当成暗物质被排除；实验只约束特定质量、相互作用和产生机制。[1][3]

## 与其他阶段的关系

热冻结若发生，会位于早期辐射主导阶段，早于复合与星系形成，但具体时刻不确定。[1][3] 它决定遗留丰度，进而影响第一批暗物质晕和宇宙网的形成；与“电子—正电子湮灭”条目相连，可比较不同粒子退出平衡的方式。[1] CERN 指出暗物质约占宇宙总质能的 27%，约为普通物质的五倍，但那是引力推断，不是热冻结时间。[3]
