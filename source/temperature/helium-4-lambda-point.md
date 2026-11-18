---
id: temperature.helium-4-lambda-point
title: 氦-4 λ 点
titleEn: Helium-4 lambda point
dimension: temperature
category: 极低温
summary: >-
  氦-4 在饱和蒸气压附近约 2.177 K 由普通液氦 I 转变为超流氦 II，这个二阶相变温度称 λ 点。
  它不是 4.22 K 的正常沸点，也不是三相点；压力改变时 λ 线会移动。
quantity:
  value: 2.177
  unit: K
  measure: 氦-4饱和蒸气压附近的λ点
  approximate: true
  measureLabel: 氦-4饱和蒸气压附近的λ点
displayValue: 2.177 K（−270.973 °C）
related:
  - temperature.superfluid
  - temperature.helium-3-superfluid
  - temperature.liquid-helium
  - temperature.dilution-refrigerator
  - temperature.absolute-zero
reviewStatus: reviewed
sources:
  - title: 'ARCADE Superfluid Pumps'
    url: 'https://asd.gsfc.nasa.gov/archive/arcade/pumps.html'
    publisher: NASA Goddard Space Flight Center
    accessed: '2026-11-07'
  - title: 'About Cryogenics: normal boiling points and superfluid transition'
    url: >-
      https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics
    publisher: NIST
    accessed: '2026-11-07'
conditions: >-
  纯氦-4 在饱和蒸气压（约 1 atm）下由氦 I 转变为超流氦 II 的 λ 点；压力升高时 λ 线会移动，
  不能把它当作任意压力下的统一转变温度，也不适用于氦-3 或混合物样品。
uncertainty: >-
  2.177 K 来自 NASA 页面所列 2.1768 K，并按 NIST 的 2.17 K 圆整写法取三位小数；不同压力下的 λ 温度不同，
  文献值与测量判据也会带来毫开尔文量级的差异。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - 'NASA ARCADE 页面给出超流转变 2.1768 K；NIST 低温资料把同一转变圆整为 2.17 K。正文取 2.177 K。'
    - '正文按五节撰写，区分 λ 点与 4.22 K 正常沸点，强调二阶相变与饱和蒸气压条件。'
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://asd.gsfc.nasa.gov/archive/arcade/pumps.html；https://www.nist.gov/mml/acmd/cryogenic-technologies-project/about-cryogenics），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: thermometer
  profile: lambda
  caption: 氦-4 λ 点温度基准
  note: >-
    温度计刻度、颜色与指针位置均为示意，非按比例；不是实际温标装置或观测重建，也不代表容器内各点温度相同。
    所有颜色、粒子、光晕、流动和转速均为解释性示意；各对象分别调整显示大小，不能据此比较它们的尺寸。
  backdrop: quantum-cold
  color: '#9fc9dd'
  symbol: Tλ
  scene: temperature.object
zone: 极低温
tags:
  - 极低温
  - 温度
---
## λ 点是什么

氦-4 的 λ 点是液氦 I 转变为超流氦 II 的温度，在饱和蒸气压附近约为 2.177 K。它是二阶相变，不是正常沸点，也不是固—液—气三相点；名称来自比热容曲线在转变处形似希腊字母 λ。[1][2] 氦-4 是玻色子，降温时大量原子占据同一量子态，超流正是这种宏观量子效应的表现。

## 怎样测到

测量时让纯氦-4 在饱和蒸气压下缓慢降温，观察比热容的尖峰、超流组分出现或热导率突变。NASA 的 ARCADE 超流泵资料把转变写作 2.1768 K；NIST 低温资料把它圆整为 2.17 K。本页取 2.177 K，介于两者之间并保留三位小数。[1][2] 比热容在转变点出现尖峰，曲线两侧并不对称，这也是 λ 名称的由来。

## 数值与口径

2.177 K 换算为 −270.973 °C，只比绝对零度高约 2.18 K。它与氦-4 的正常沸点 4.22 K 是两个不同的物理事件：4.22 K 是液—气平衡，2.177 K 是液氦内部有序度的转变。压力升高时 λ 线会移动，因此 2.177 K 不能脱离压力条件使用。[1][2] 在饱和蒸气压下，液氦 I 与液氦 II 的分界线从 2.177 K 向更高压力延伸，形成 λ 线。

## 常见误解

第一，把 λ 点当成沸点或凝固点；它没有像汽化那样的一级相变潜热。第二，认为低于 2.177 K 液氦会凝固；常压下它仍是液体，只是超流组分增加。第三，把 λ 点与氦-3 的超流 A 点 2.444 mK 混为一谈，两者相差近三个数量级。[1][2] 第四，把 λ 点当成某台设备的固定运行温度；不同实验可以在 λ 点以上或以下选择工作区。

## 与其他温区的关系

2.177 K 低于液氦正常沸点 4.22 K，高于氦-3 超流 A 点的 2.444 mK，也高于绝对零度。[1][2] 它把普通低温制冷与量子流体实验连接起来：稀释制冷机和核退磁等装置继续向毫开尔文温区推进，而 λ 点本身仍是理解超流转变的经典参照。零黏度、第二声与喷泉效应都常被用来演示量子流体，而 λ 点正是这些现象的入口温度。
