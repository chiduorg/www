---
id: temperature.arc-lamp
title: 弧光灯
titleEn: Carbon arc lamp crater temperature
dimension: temperature
category: 极高温
summary: '碳弧灯正极 crater 的温度约 4,000 K（约 3,727 ℃）。这是电极亮斑的黑体/亮度温度， 不是整条电弧的均匀温度，也不等同于光源的色温。'
quantity:
  value: 4000
  unit: K
  measure: 碳弧正极亮斑温度
  approximate: true
  measureLabel: 碳弧正极亮斑温度
displayValue: '约 4,000 K（约 3,727 °C）'
related:
  - temperature.tungsten-filament
  - temperature.weld-arc
  - temperature.plasma-cutter
  - temperature.lightning
reviewStatus: reviewed
sources:
  - title: On the temperature of the arc
    url: 'https://nvlpubs.nist.gov/nistpubs/bulletin/01/nbsbulletinv1n1p109_A2b.pdf'
    publisher: 'NIST (Bulletin of the Bureau of Standards, 1905)'
    accessed: '2026-11-06'
  - title: 'Arc lamp: technology'
    url: 'https://www.britannica.com/technology/arc-lamp'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: 'Arc lamp: what is it?'
    url: 'https://www.electrical4u.com/arc-lamp/'
    publisher: Electrical4U
    accessed: '2026-11-06'
conditions: >-
  空气中燃烧的碳电弧灯、正极（阳极）亮斑、直流供电；电极纯度、电流、弧长和是否使用芯碳都会改变温度。
  测量口径为光学高温计的黑体/亮度温度，不是色温或等离子体核心温度。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '核对 NIST 1905 年公报：纯石墨电弧黑体温度至少约 3,750 K，正极最热部分估计在 3,900–4,000 K 绝对温标。'
    - 核对 Britannica 弧光灯条目：光来自被加热的碳棒端部以及电弧本身。
    - '核对 Electrical4U：典型电弧温度超过 3,000 ℃，用于旁证电弧整体处于数千开尔文量级。'
    - '正文取 4,000 K 作为正极亮斑的代表值，并说明亮度温度与色温不同。'
uncertainty: >-
  文献估计约 3,750–4,200 K；芯碳和不同电流可给出更高值。亮度温度依赖发射率和观测波长， 色温可高于或低于该值，不能把 4,000 K
  当作整条电弧或整盏灯的温度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: filament-lamp
  profile: arc
  caption: 碳弧灯正极亮斑示意
  note: 画面为两根碳棒与电弧的示意表达，弧光颜色、亮斑大小和光晕均经艺术处理， 不能据颜色判断精确温度；非按比例，非观测重建；各对象分别调整显示大小。
  scene: temperature.object
zone: 极高温
tags:
  - 极高温
  - 温度
  - 日常
---
## 它是什么

弧光灯靠两根电极间的电弧发光；碳弧灯的光主要来自正极 crater 的白炽碳蒸气和电弧本身。本条取约 4,000 K（约 3,727 ℃）作为正极 crater 的代表温度。[1][2] 它不是整盏灯的环境温度，也不是电弧等离子体的唯一温度。碳棒燃烧时会不断消耗，电极间距需要靠机构维持，否则弧长变化会直接改变亮斑温度。

## 怎样测到

早期用光学高温计和光谱辐射比较测量。[1] NIST 前身标准局 1905 年的公报汇总多种方法：纯石墨电弧的黑体温度至少约 3,750 K，正极最热部分估计在 3,900–4,000 K 绝对温标。[1] 测量时要考虑碳棒消耗和空气对流对亮斑的冷却。Britannica 说明弧光灯的光来自被加热的碳棒端部以及电弧本身。[2]

## 数值与口径

4,000 K 约合 3,727 ℃。[1] 这个数字是亮度温度/黑体温度口径，依赖发射率和波长；碳弧的色温可更高，早期资料给出约 5,000–7,000 K 的光谱分布等效值。[1][3] 因此不能把 4,000 K 当作色温或等离子体核心温度。[1]

## 常见误解

第一，把弧光灯的色温当成电极温度；两者含义不同。第二，把 4,000 K 当成整条电弧均匀温度；弧柱和电极附近差异很大。第三，认为弧光灯只靠电弧发光；碳极 crater 的贡献往往更大。此外，交流供电与直流供电的稳定性不同，老式灯具有明显闪烁，这些差异让同一型号的灯也会给出不同测量结果。[2][3]

## 与其他温区的关系

4,000 K 高于焊接电弧的约 3,500 K 和钨的熔点 3,695 K，低于等离子切割的约 8,000 K 和闪电通道的约 30,000 K。它处在高强度放电光源的温区，也是早期电影放映和探照灯的核心技术。[2]
