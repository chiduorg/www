---
id: temperature.accretion-disk-inner
title: 吸积盘内区温度
titleEn: Inner accretion disk gas temperature
dimension: temperature
category: 恒星与宇宙极端
summary: >-
  黑洞吸积盘内区气体在被压缩、加热后可达到约 10⁷ K 的量级。这个温度来自模拟与 X 射线观测的比较，
  依赖黑洞质量、吸积率和盘半径；它不是黑洞视界的温度，也不是盘上日冕的温度。
quantity:
  value: 10000000
  unit: K
  measure: 黑洞吸积盘内区气体温度量级
  approximate: true
  measureLabel: 黑洞吸积盘内区气体温度量级
displayValue: '约 10⁷ K（约 10⁷ °C，量级）'
related:
  - temperature.black-hole-accretion-disk
  - temperature.hawking-temperature
  - temperature.sun-core
  - temperature.neutron-star-surface
reviewStatus: reviewed
sources:
  - title: NASA-Led Study Explains How Black Holes Shine in Hard X-rays
    url: 'https://svs.gsfc.nasa.gov/11206'
    publisher: NASA Scientific Visualization Studio
    accessed: '2026-11-07'
  - title: X-ray Spectra from MHD Simulations of Accreting Black Holes
    url: 'https://arxiv.org/abs/1207.2693'
    publisher: 'J. D. Schnittman, J. H. Krolik and S. C. Noble, ApJ 769 (2013)'
    accessed: '2026-11-07'
conditions: >-
  对象为黑洞事件视界外吸积盘的内区气体；约 10⁷ K 取一位有效数字，对应模拟中约 1.2 × 10⁷ K。
  内区盘温依赖黑洞质量、质量吸积率、盘半径和辐射效率；它不是黑洞本体温度，也不与盘上日冕的 10⁹ K 混用。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - '核对 NASA SVS 11206：盘气体靠近中心时可被加热到约 1,200 万 °C，并发出软 X 射线。'
    - '核对 arXiv 1207.2693：非旋转黑洞的广义相对论磁流体模拟通过改变质量吸积率复现不同 X 射线状态。'
    - 取 10⁷ K 作量级坐标，正文明确它依赖黑洞质量与吸积率，并与日冕、视界温度区分。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://svs.gsfc.nasa.gov/11206；https://arxiv.org/abs/1207.2693），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  约 10⁷ K 是按模拟值 1.2 × 10⁷ K 取一位有效数字的量级；盘内温度随半径、高度、黑洞质量和吸积率变化，
  模拟还假定非旋转黑洞。它不能当作某颗黑洞的实测温度，也不描述盘上日冕或视界的霍金温度。
visual:
  template: accretion-disk
  profile: disk
  caption: 黑洞吸积盘内区气体
  note: >-
    以旋转薄盘与向内螺旋的气体示意黑洞吸积盘内区，不对应具体天体；画面为示意，非按比例，非观测重建。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: stellar-core
  color: '#f5b790'
  symbol: Accretion disk
  scene: temperature.object
zone: 恒星与宇宙极端
tags:
  - 恒星与宇宙极端
  - 温度
---
## 它是什么

黑洞吸积盘是气体在黑洞引力作用下形成的扁平旋转结构。气体不会直接落入视界，而是在盘内因磁流体湍流和黏性作用缓慢向内迁移，越靠近中心被压缩得越厉害，温度也越高，并发出软 X 射线。[1] 这里说的是盘内区气体，不是黑洞本体，也不是盘上方更稀薄的日冕。

## 温度怎样得到

吸积盘内部无法直接分辨，研究者把广义相对论磁流体模拟与辐射输运计算结合，生成合成 X 射线谱，再与观测比较。[1][2] NASA 的报道指出，盘气体靠近中心时可达约 1,200 万 °C；同一模拟还显示盘上日冕可热到数十亿度。[1] Schnittman 等人的工作通过改变质量吸积率来复现不同的 X 射线状态，说明盘温不是固定常数。[2]

## 数值与口径

本条采用约 10⁷ K 作为内区盘温的量级坐标，对应约 1.2 × 10⁷ K 的模拟值，只保留一位有效数字。它不是视界的霍金温度，也不是日冕的 10⁹ K 量级。内区温度依赖黑洞质量、吸积率、盘半径和辐射效率：质量越大、吸积率越高，典型温度尺度可以不同。[1][2] 因此这个数字适合数量级比较，不适合当作某颗黑洞的精确温度。

## 常见误解

第一，把 10⁷ K 当成黑洞本体的温度；视界并没有普通意义上的可测温表面。第二，把所有吸积盘都当成同温；不同质量、吸积率和盘结构会给出不同结果。[2] 第三，把盘气体与盘上日冕混为一谈；硬 X 射线主要来自更热的日冕。第四，把“软 X 射线”误当成低温；它仍然是高能辐射。[1]

## 与其他温区的关系

10⁷ K 约为太阳核心 1.57 × 10⁷ K 的一半，远高于太阳表面 5,772 K，也高于中子星表面约 2 × 10⁶ K 的例子。它低于核心坍缩超新星的 10¹¹ K 量级，更远低于夸克–胶子等离子体约 1.8 × 10¹² K 的理论温标。比较时要注意，这些数值分别属于盘气体、恒星核心、中子星表面和理论相变，并不是同一种测量对象。[1][2]
