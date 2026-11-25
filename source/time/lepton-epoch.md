---
id: time.lepton-epoch
title: 最初秒级的轻子热史
titleEn: Leptons in the First Seconds
dimension: cosmic-time
category: 太初宇宙
summary: 热大爆炸模型中，电子、正电子和中微子等轻子影响早期热平衡与能量分配。1 秒是约 MeV 温度背景的数量级参照，不是所有轻子出现或同时退耦的时刻。
quantity:
  value: 1
  unit: s
  measure: time-after-big-bang
  measureLabel: 模型推算的宇宙时间参考
  approximate: true
displayValue: t = 1 秒
related:
  - space.observable-universe
  - mass.total-matter-universe
  - time.neutrino-decoupling
  - time.electron-positron-annihilation
  - time.nucleosynthesis
  - time.hadron-era
reviewStatus: reviewed
sources:
  - title: 'Neutrinos in Cosmology, 2025 update'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrinos-in-cosmology.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: 'Big Bang Nucleosynthesis, 2025 update, §24.2'
    url: 'https://pdg.lbl.gov/2025/reviews/rpp2025-rev-bbang-nucleosynthesis.pdf'
    publisher: Particle Data Group
    accessed: '2026-11-06'
  - title: The early universe
    url: 'https://home.cern/science/physics/early-universe'
    publisher: CERN
    accessed: '2026-11-06'
legacy:
  id: lepton-epoch
  icon: ⚪
  relatedLabels: 中微子、中微子振荡、宇宙中微子背景、弱相互作用、电子、正电子、标准模型、中微子退耦
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  original:
    title: 轻子时期
    quantity:
      value: 1
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 1 秒
  notes:
    - >-
      PDG BBN 明确 T~1 MeV 对应 t~1 s；PDG 中微子综述说明宇宙中微子背景由轻元素、CMB 与结构生长间接支持；CERN
      概述提供早期宇宙粒子演化背景。
    - 本轮按五节结构重写；秒级坐标用于数量级比较，不是统一边界。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  presentSeconds: 435400000000000000
  secondsPerYear: 31557600
  conversion: 模型时间坐标 t；presentSeconds 仅作 time.present 对照
  precision: 秒级量级参考，非精确测年
  note: 采用来源所述模型条件下的量级参考，不是直接观测到的宇宙计时。
uncertainty: 约 1 秒、约 1 MeV 是标准热大爆炸模型的量级对应；中微子退耦与电子—正电子湮灭是不同过程，不共享唯一边界，也不能把秒数当作测年误差。
visual:
  template: particle-reaction
  profile: lepton
  caption: 最初秒级的轻子热史 · 三维参照
  note: >-
    轨迹不区分真实散射截面或味态数，不代表所有轻子同时出现。
    模型为解释性三维示意，不是实物、古环境或观测对象的精确重建；颜色、光线、粒子轨迹和速度不是实测；尺寸独立归一化，不能互作空间或时间比例尺。
  backdrop: plasma
  color: '#a4bfd9'
  scene: time.object
mode: 时点
tags:
  - 太初宇宙
  - 时点
  - 早期宇宙
---
## 它是什么

轻子时代指早期宇宙中电子、正电子、中微子等轻子对热平衡与能量分配有重要影响的阶段。[1][2] 它不是“轻子在某一秒才出现”，也不是所有轻子同时退耦；不同反应在不同温度下失去平衡。[1][3] 这一名称描述的是热史中的一组条件，而不是一个边界清晰的朝代。[1][2]

## 怎样知道或为何是推断

轻子性质由粒子实验精确检验，早期热史则由标准宇宙学模型计算。[1][2] PDG 的 BBN 综述指出，温度约 1 MeV 对应宇宙年龄约 1 秒，那时弱相互作用仍维持中子—质子比，随后冻结。[2] PDG 的中微子综述说明宇宙中微子背景是热大爆炸的预言，虽未被直接探测，却由轻元素丰度、CMB 和结构生长间接支持。[1] 这些是模型加观测约束，不是对“轻子时代”的直接录像。[1][2][3]

## 时间坐标与口径

本条 quantity 取 1 秒，口径是“约 MeV 温度背景的模型时间参考”。[2] 1 秒不是所有轻子出现或退耦的统一时刻；中微子退耦、电子—正电子湮灭各自发生在不同条件下。[1][2] 温度到时间换算依赖膨胀史与相对论自由度，因此这个坐标是与后续核合成对照的量级锚点，而不是一排精确刻度。[2][3]

## 常见误解

误解之一是把“轻子时代”当成一个边界清晰的朝代，仿佛一秒之前没有轻子、一秒之后轻子消失。[1][2] 另一个误解是把中微子退耦当成一次瞬间事件；它是反应率逐渐低于膨胀率的渐进过程，不同能量与味态的粒子也不会恰好同时脱离平衡。[1]

## 与其他阶段的关系

轻子时代承接强子时代，向后连接中微子退耦、电子—正电子湮灭和原初核合成。[1][2] 中微子退耦影响之后的辐射能量分配，电子对湮灭又改变光子与中微子的相对温度。[1] 阅读时可把“约 1 秒”当成热史量级坐标，而不是各过程共同的分界线，也不要把实验室测得的轻子性质直接当成宇宙时刻。[2][3]
