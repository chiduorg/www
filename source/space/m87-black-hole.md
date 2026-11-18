---
id: space.m87-black-hole
title: M87*
titleEn: M87*
dimension: length
category: 恒星与星际
summary: >-
  M87* 是室女座星系 M87 中心的超大质量黑洞，质量约为 65 亿太阳质量。由质量推算的事件视界直径约 3.8×10¹³ 米，即约 380
  亿公里；它不是 EHT 图像中的阴影直径。
quantity:
  value: 38000000000000
  unit: m
  measure: 事件视界直径（约 380 亿公里，由约 65 亿太阳质量推算的 2Rs）
  approximate: true
displayValue: 约 3.8 × 10¹³ m（事件视界直径，约 380 亿公里）
related:
  - space.black-hole-event-horizon
  - space.sagittarius-a-star
  - space.virgo-cluster
  - space.galaxy-cluster
  - space.milky-way
reviewStatus: reviewed
sources:
  - title: >-
      Press Release (April 10, 2019): Astronomers Capture First Image of a Black
      Hole
    url: >-
      https://eventhorizontelescope.org/press-release-april-10-2019-astronomers-capture-first-image-black-hole
    publisher: Event Horizon Telescope Collaboration
    accessed: '2026-11-06'
  - title: black hole
    url: 'https://www.britannica.com/science/black-hole'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: >-
  指 M87* 由质量推算的事件视界直径，采用约 65 亿太阳质量与 Rs=2GM/c²；适用于超大质量黑洞的 视界量级比较，不等于 EHT
  阴影直径、亮环直径或 M87 星系本身的大小。
uncertainty: >-
  Britannica 给出“约 380 亿公里宽”，EHT 新闻稿给出约 65 亿太阳质量与约 5,500 万光年距离。 按质量换算 Rs≈1.9×10¹³
  米、直径≈3.8×10¹³ 米，与 Britannica 的圆整值一致；阴影比视界更大， 但本条不把阴影尺寸计入。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - '用 WebFetch 打开 EHT 2019 年 4 月 10 日新闻稿，核对 65 亿太阳质量、5,500 万光年距离与首张图像说明。'
    - 用 WebFetch 打开 Britannica 黑洞页，核对“约 380 亿公里宽”、阴影约为视界若干倍及 M87 星系位置的表述。
    - 依据 2GM/c² 复核 65 亿太阳质量对应的 Rs 与直径，并与 Britannica 的公里数对照。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "galaxy"
  scene: "space.object"
  caption: "M87* 事件视界直径与宿主星系"
  note: "星系与中心暗区为示意，环形结构不代表按比例的视界或阴影；非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 恒星与星际
  - 尺寸
  - 星际
---
## 它是什么

M87* 是室女座星系 M87 中心的超大质量黑洞，距离约 5,500 万光年。[1] 本页量的是它的事件视界直径，约 380 亿公里；它不是 EHT 图像中亮环的外径，也不是整个星系的大小。

## 怎样知道

EHT 在 2017 年联合多台射电望远镜观测，2019 年公布第一张黑洞图像。[1] 图像呈现亮环包围暗影，环的亮度不对称，可用旋转与多普勒增亮解释。质量由气体动力学与广义相对论模拟拟合给出，约为 65 亿太阳质量。[1][2] Britannica 同时给出“直径约 380 亿公里”的换算值。[2] 这些独立表述指向同一量级，但一个是质量、一个是长度，必须分别标注口径。

## 数值与口径

65 亿太阳质量对应 Rs 约为 1.9×10¹³ 米，视界直径约为 3.8×10¹³ 米，即 380 亿公里。[2] 这个值是由质量推算的视界直径；EHT 测到的阴影直径比它大，因为光子绕黑洞弯曲，阴影边缘位于几个 Rs 之外。[2] 把 3.8×10¹³ 米与 5,500 万光年相比，后者约为前者的 1.4×10¹⁰ 倍，说明图像中的角大小与实际尺度是两回事。

## 常见误解

不要把“380 亿公里”当成阴影直径或亮环直径；它是由质量换算的视界直径。[2] 也不要以为 M87* 的图像是光学照片；它来自毫米波段的射电干涉数据，颜色是人为映射。另一个误解是把 M87* 与 M87 星系本身混为一谈：星系直径约 10 万光年量级，比黑洞视界大约 10¹⁰ 倍。

## 与其他尺度的关系

3.8×10¹³ 米约合 254 天文单位，是太阳到海王星距离的约 8 倍。它比 Sgr A* 的视界大约 1,600 倍，质量也约 1,600 倍，符合 Rs 与质量成正比。把视界直径与太阳系并排，它可以覆盖内太阳系到柯伊伯带的一部分，但相对整个星系仍是一个极小的点。
