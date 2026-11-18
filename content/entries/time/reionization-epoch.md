---
id: time.reionization-epoch
title: 宇宙再电离的漫长阶段
titleEn: The Epoch of Reionisation
dimension: cosmic-time
category: 星系与结构
summary: 早期恒星和星系的高能辐射使星系际气体重新电离，过程持续很长。这里用一项Planck数据模型下约6.3亿年的半电离定义作参考点，范围和坐标分开。
quantity:
  value: 19800000000000000
  unit: s
  measure: time-after-big-bang-model-reference
  measureLabel: 模型条件下的宇宙时代参考
  approximate: true
displayValue: 约2亿—10亿年（参考点约6.3亿年）
related:
  - time.first-stars
  - time.cosmic-dawn
  - time.james_webb
  - time.galaxy-formation
  - time.cosmic-heating
  - temperature.cmb
reviewStatus: reviewed
sources:
  - title: Cosmic eras
    url: 'https://www.esa.int/Science_Exploration/Space_Science/Cosmic_eras'
    publisher: European Space Agency
    accessed: '2026-11-06'
  - title: 'Some Times in Standard Cosmology, arXiv:2411.07703v1'
    url: 'https://arxiv.org/html/2411.07703v1'
    publisher: Lukas Tobias Hergt and Douglas Scott / University of British Columbia
    accessed: '2026-11-06'
  - title: What Did the Young Universe Look Like?
    url: >-
      https://webbtelescope.org/contents/articles/what-did-the-young-universe-look-like
    publisher: NASA / STScI
    accessed: '2026-11-06'
legacy:
  id: reionization-epoch
  icon: ☀️
  relatedLabels: 紫外线、中性氢、星系形成、宇宙黎明、星际介质、第一代恒星、冈恩-彼得森效应、CMB偏振
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 再电离时期
    quantity:
      value: 12600000000000000
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 4亿 ~ 10亿年
  notes:
    - >-
      用 WebFetch 打开 ESA 宇宙时代页、Hergt/Scott 论文与 STScI 早期宇宙文章，核对200 Myr—1
      Gyr、630±60 Myr、τ=0.059±0.006与z≈8.2。
    - 本轮按五节结构重写；半电离参考点与阶段范围分开。
chronology:
  status: model-reference
  plot: true
conditions:
  timeBasis: time.big-bang
  measureScope: 模型定义参考
  precision: 后验量级参考，非直接计时
  note: 采用所引模型的条件性时代参照，不是直接观测到的计时。
uncertainty: 约6.3±0.6亿年为ΛCDM与简化再电离模型的后验均值/标准差；2亿—10亿年是机构概述范围，不表示所有区域同步电离。
visual:
  template: radiation-front
  profile: acoustic
  caption: 宇宙再电离的漫长阶段 · 三维参照
  note: >-
    波环说明电离区域的扩展概念，6.3亿年是半电离等效参考，不是同时开始或完成。
    三维示意，非按比例，非观测重建；颜色、光线和尺寸独立归一化，不能作为空间或时间比例尺。
  backdrop: first-light
  color: '#b9c9df'
  scene: time.object
mode: 时点
tags:
  - 星系与结构
  - 时点
  - 早期宇宙
---
## 它是什么

再电离指宇宙中的中性氢被高能光子重新电离，电子与质子分离，星系际气体从电中性变为等离子体[1]。它发生在黑暗时代之后，由第一代恒星和早期星系的紫外辐射驱动，也可能有黑洞贡献[1][3]。它不是一次瞬间闪光，而是持续数亿年的过程。

## 怎样知道

观测约束来自多条线索：遥远类星体光谱中的吸收线显示中性氢云；星系光谱中的紫外吸收特征；宇宙微波背景的极化与散射测量给出电离光深[1][2]。Planck数据下τ=0.059±0.006，模型换算出的半电离时点约6.3亿年[2]。这些是间接约束，具体历史仍依赖模型。韦布则通过早期星系的光谱和紫外吸收特征补上部分细节[3]。

## 时间坐标与口径

本条取约6.3亿年作半电离定义的参考点，整体范围约2亿至10亿年[1][2]。6.3±0.6亿年来自ΛCDM与简化再电离模型的后验结果，不是直接拍到的“开关时刻”；换模型或换定义，参考点会移动。红移约8.2是同一模型的换算结果[2]。因此，范围与参考点必须分开表述。

## 常见误解

误解之一是把再电离当成全宇宙同时发生的瞬间；不同区域先后完成[1]。另一误解是以为它只有一个光源；恒星、星系和黑洞都可能参与。也不能把光学深度或半电离时点当成精确日历。再电离完成也不等于所有气体都完全电离，致密云块可以残留中性氢。此外，观测到的吸收线是沿视线方向的积分，不是全天空的快照。

## 与其他阶段的关系

再电离上接黑暗时代与第一代恒星，下连宇宙正午[1][3]。它改变星系际介质的热状态与可见性，使遥远星系的光得以传播。与星系形成相比，这一阶段的主角是辐射与气体，而不是引力组装。它也是理解宇宙微波背景与高红移星系观测的桥梁。
