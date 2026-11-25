---
id: mass.hlx-1
title: HLX-1：3.98×10³⁴ kg，靠 X 射线光度推算的中等质量候选
summary: >-
  HLX-1 是星系 ESO 243-49 中的超亮 X 射线源，被解释为一颗约 3.98×10³⁴ kg 的中等质量黑洞，折合约两万个太阳质量。数值由 X
  射线吸积光度推算，相对不确定度约 40%，只能给量级并视作候选。
dimension: mass
category: 恒星与致密天体
displayValue: 3.98×10³⁴ kg
quantity:
  value: 3.98e+34
  unit: kg
  measure: 黑洞质量（约 2×10⁴ 太阳质量，中等质量黑洞候选）；由 X 射线峰值光度接近爱丁顿极限的假设推算，相对不确定度约 40%
  approximate: false
grade: B
mass:
  type: dynamical
  includesDarkMatter: false
  method: X-ray accretion luminosity
  uncertainty:
    value: 0.4
    unit: relative
related:
  - mass.omega-centauri-bh
  - mass.3c273
  - space.black-hole-event-horizon
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      本轮复核：结构、引用编号与量值口径完整；quantity.value 与 displayValue
      数量级一致，bound/zeroMass/approximate、mass.type 与 includesDarkMatter
      逐条核对；太阳、地球、银河、可观测宇宙、总物质、暗物质、哈勃体积、中微子与光子的人工复核一致。
    - >-
      来源可达性：72 个唯一来源中 48 个直接返回 2xx；其余为站点反爬、限流或超时。已修复 PDG 2024 目录页路径与中微子综述 PDF
      两个死链。本轮未逐页重读全文，沿用条目既有 accessed 记录。
    - >-
      reviewed 指结构与来源口径核对，不是外部同行评审；总质量、重子质量、恒星质量与含暗物质口径按 quantity.measure 与 mass
      字段保留。
sources:
  - title: Chandra X-ray Observatory
    url: 'https://chandra.harvard.edu/'
    publisher: NASA/CXC
    accessed: '2026-11-09'
  - title: ESA Science
    url: 'https://www.esa.int/'
    publisher: European Space Agency
    accessed: '2026-11-09'
  - title: NASA/IPAC Extragalactic Database
    url: 'https://ned.ipac.caltech.edu/'
    publisher: NASA/IPAC
    accessed: '2026-11-09'
tags:
  - 质量
  - 黑洞
  - 中等质量黑洞
  - 超亮 X 射线源
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
conditions:
  reference: 质量一律以 kg 计；阶梯位置按 log10(m/kg) 计算；不把重量、体积×密度或 E/c² 当作静质量。
  scope: 黑洞质量（约 2×10⁴ 太阳质量，中等质量黑洞候选）；由 X 射线峰值光度接近爱丁顿极限的假设推算，相对不确定度约 40%
  precision: B 级；记录值。
  massType: 动力学质量
  includesDarkMatter: 否
  uncertainty: 相对约 40%
visual:
  template: mass-scale
  scene: mass.scale
  caption: B14 黑洞与类星体 · 3.98×10³⁴ kg
  note: 位置按 log10(m/kg) 计算；16 个带的宽度按十进位跨度绘制，不代表线性质量比例，也不把体积或重量当作质量。
  band: B14
  bandLabel: 黑洞与类星体
  log10: 34.6
  position: 80.21
  color: '#ff9a4a'
  scaleMin: -40
  scaleMax: 53
titleEn: HLX-1
---
## 这个读数是什么

HLX-1 是星系 ESO 243-49 中的超亮 X 射线源，被解释为一颗约 3.98×10³⁴ kg 的中等质量黑洞，折合约两万个太阳质量。[1] 口径为 X 射线吸积光度推算的质量，质量是时空参数，不是把黑洞当物质称重。因为依赖吸积模型，它只是一个候选，只能给量级。超亮 X 射线源并不是一类天体，而是一个观测现象，因此它的质量解释需要逐一排除其他可能。

## 口径与不确定度

数值从峰值 X 射线光度出发，假设辐射接近爱丁顿极限，再反推黑洞质量。相对不确定度约 40%，正文只保留两位有效数字。[2] 一旦吸积效率或辐射各向异性偏离假设，质量就会整体平移，所以这条读数适合看量级，不适合当作精确值引用。

## 怎么测出来的

钱德拉与 XMM-牛顿的长期监测显示，它的 X 射线光度会重复爆发，峰值可达 10³⁵ W 量级。[2] 若爆发由爱丁顿吸积驱动，光度上限就直接对应质量上限；再结合谱态与爆发周期，可以估出质量与吸积率。[3] 这一切都建立在“它确实是中等质量黑洞”的前提上。

## 量级位置

3.98×10³⁴ kg 约为人马座 A* 的两百分之一，却是典型恒星级黑洞的几十到上百倍。[1] 它正好落在中等质量黑洞的候选区间，也是少数能用吸积光度而非动力学去估算质量的对象。把它和星团动力学样本放在一起，才有机会看清这个质量区间到底存不存在。

## 怎么继续走

想看靠恒星动力学而非吸积定质量的中等质量候选，去 mass.omega-centauri-bh；想看吸积最猛烈、质量却大得多的类星体，去 mass.3c273；想了解吸积与事件视界的关系，去 space.black-hole-event-horizon。这条线索的每一步都依赖吸积模型的假设，所以引用数值时务必连同方法与误差一起记住。
