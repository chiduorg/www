---
id: time.galaxy-formation
title: 早期星系的时代
titleEn: Early Galaxies
dimension: cosmic-time
category: 星系与结构
summary: 星系并非在同一瞬间全部形成。韦布观测确认了大爆炸后不到4亿年已经存在的星系。本条目取4亿年作早期星系时代的参考点，不能理解为最早星系出现的精确时间。
quantity:
  value: 12623040000000000
  unit: s
  measure: time-after-big-bang-epoch-reference
  approximate: true
  measureLabel: 自大爆炸起的时期参考时间
displayValue: t ≈ 4 亿年（早期星系参考点）
related:
  - time.first-stars
  - time.first-dark-matter-halos
  - space.observable-universe
  - time.earliest-spiral-galaxy
  - space.milky-way
chronology:
  status: reference
  plot: true
reviewStatus: reviewed
sources:
  - title: What Did the Young Universe Look Like?
    url: >-
      https://webbtelescope.org/contents/articles/what-did-the-young-universe-look-like
    publisher: NASA / STScI
    accessed: '2026-11-06'
  - title: Cosmic eras
    url: 'https://www.esa.int/Science_Exploration/Space_Science/Cosmic_eras'
    publisher: European Space Agency
    accessed: '2026-11-06'
  - title: galaxy
    url: 'https://www.britannica.com/science/galaxy'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
legacy:
  id: galaxy-formation
  icon: "\U0001F30C"
  relatedLabels: 星系形态、暗物质、宇宙大尺度结构、银河系形成、星系碰撞、哈勃序列、冷暗物质、星系演化
visual:
  template: galaxy-assembly
  scene: time.galaxy-formation
  backdrop: galaxies
  caption: 早期星系 · 形成过程的艺术示意
  note: 星系汇聚和旋臂是演化示意，非按比例，非观测重建；不重建某一被观测星系。
review:
  method: source-check
  date: '2026-11-06'
  reviewer: assistant-source-check
  original:
    title: 星系形成
    quantity:
      value: 31500000000000000
      unit: s
      measure: time-after-big-bang
      approximate: true
    displayValue: t = 10 亿年
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - >-
      用 WebFetch 打开 STScI 早期宇宙文章、ESA 宇宙时代页与 Britannica
      星系页，核对“最初4亿年内”“几亿年后第一批星系”等表述。
    - 本轮按五节结构重写；4亿年是已观测到的参考点，不是起源时刻。
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: 4亿年是早期星系观测的参考点；更早星系可能尚未被探测到，样本选择与灵敏度会改变最早纪录。
conditions:
  timeBasis: time.big-bang
  measureScope: 时期参考
  precision: 观测参考点，非精确起源时刻
  note: 早期星系时代的导航参考，不代表所有星系的共同形成日期。
mode: 时点
tags:
  - 星系与结构
  - 时点
  - 早期宇宙
---
## 它是什么

星系是由恒星和星际物质组成的引力系统[3]。早期星系不是今天旋涡星系的缩小版：它们更小、更不规则，恒星形成更剧烈，并经常并合。星系形成是持续过程，不是所有星系在同一天出现。今天看到的形态，是长期组装和演化的结果。

## 怎样知道

证据来自观测与模型两侧。哈勃和韦布把观测推进到大爆炸后不到4亿年，韦布的红外观测能进一步确定这些星系的时代[1]。星系的形态、颜色和光谱还能给出恒星年龄与化学组成的线索[3]。模型则把暗物质晕的增长、气体冷却和反馈过程连接起来，解释星系如何组装[2]。观测看到的是光，模型解释的是这些光背后的形成过程。

## 时间坐标与口径

本条取大爆炸后约4亿年作早期星系参考点，依据韦布对高红移星系的光谱证认[1]。4亿年是“已看到星系”的时代，不是星系起源的精确时刻；更早的星系可能尚未被探测到。不同观测样本和选择标准会改变最早纪录。ESA的概述把第一批星系放在黑暗时代结束后的几亿年，与这一参考点相符[2]。

## 常见误解

误解之一是把早期星系都想象成成熟旋涡；高红移样本多呈紧凑、不规则形态。另一误解是把“看到的最早”当成“存在的起点”；观测受灵敏度和样本限制。也不能把星系形成当作一次性事件，并合与吸积一直在继续[3]。此外，星系红移给出的是光发出时的时代，不是它今天的距离。

## 与其他阶段的关系

星系形成上接第一代恒星和暗物质晕，下连星系团、宇宙正午与重元素富集[1][3]。第一代恒星提供金属和紫外辐射，暗物质晕提供引力骨架。与再电离阶段相比，星系形成更强调引力组装和恒星形成，而不是单一辐射过程。它也不是一个已经结束的阶段，今天的星系仍在演化。


## 深读一：量值口径

本条的核心量值是 1.262e+16 s，量的是自大爆炸起的时期参考时间。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：timeBasis=time.big-bang；measureScope=时期参考；precision=观测参考点，非精确起源时刻；note=早期星系时代的导航参考，不代表所有星系的共同形成日期。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照第一代恒星的时代（6.312e+15）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
