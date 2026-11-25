---
id: space.black-hole-event-horizon
title: 恒星级黑洞事件视界
titleEn: Stellar-Mass Black Hole Event Horizon
dimension: length
category: 恒星与星际
summary: 恒星级黑洞的事件视界半径由史瓦西半径给出，与质量成正比；10 倍太阳质量对应约 2.95×10⁴ 米，也就是约 30 公里。这个数是半径，不是直径。
quantity:
  value: 29500
  unit: m
  measure: 10 倍太阳质量黑洞的史瓦西半径（事件视界半径）
  approximate: true
displayValue: 约 2.95 × 10⁴ m（10 倍太阳质量的史瓦西半径）
related:
  - space.sagittarius-a-star
  - space.m87-black-hole
  - space.neutron-star
  - space.sun
  - mass.m87-black-hole
  - mass.sgr-a-star
reviewStatus: reviewed
sources:
  - title: black hole
    url: 'https://www.britannica.com/science/black-hole'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
  - title: Black Holes
    url: 'https://imagine.gsfc.nasa.gov/science/objects/black_holes1.html'
    publisher: NASA / GSFC / Imagine the Universe
    accessed: '2026-11-06'
  - title: "Astronomers Reveal First Image of the Black Hole at the Heart of Our Galaxy"
    url: "https://eventhorizontelescope.org/blog/astronomers-reveal-first-image-black-hole-heart-our-galaxy"
    publisher: "Event Horizon Telescope Collaboration"
    accessed: '2026-11-24'
  - title: "New NASA Mission to Study Mysterious Neutron Stars, Aid in Deep Space Navigation"
    url: "https://www.nasa.gov/universe/new-nasa-mission-to-study-mysterious-neutron-stars-aid-in-deep-space-navigation/"
    publisher: "NASA / Goddard Space Flight Center"
    accessed: '2026-11-24'
conditions: >-
  指不旋转球对称黑洞的事件视界半径，取 10 倍太阳质量作为恒星级黑洞样本；按 Rs=2GM/c² 换算。不适用于快速自转的 Kerr
  黑洞，也不等同于望远镜图像中的阴影半径。
uncertainty: >-
  Britannica 把 10 倍太阳质量的史瓦西半径圆整为 30 公里；按 2GM/c² 与 10 M☉ 计算约 29.5
  公里。差异主要来自质量取值与文字圆整，未计入自转造成的视界形变。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 用 WebFetch 打开 Britannica 黑洞页，核对 10 倍太阳质量对应约 30 公里、史瓦西半径定义及 M87* 数据。
    - 用 WebFetch 打开 NASA GSFC Imagine the Universe 黑洞页，核对太阳质量压缩到约 3 公里半径与事件视界定义。
    - 明确本条 quantity 是半径而非直径，并说明阴影与视界不是同一口径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "field"
  scene: "space.object"
  caption: "10 倍太阳质量黑洞的事件视界半径"
  note: "网格弯曲与边界颜色为示意，表示引力场与视界位置；非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 恒星与星际
  - 尺寸
  - 建筑与地貌
---
## 它是什么

事件视界是黑洞周围“有去无回”的边界：跨过它，连光也无法逃到外面。[1] 对不旋转的球对称黑洞，事件视界是一个球面，其半径称为史瓦西半径。[2] 本页选取 10 倍太阳质量的恒星级黑洞作为样本，把约 2.95×10⁴ 米放在尺度轴上；这个数是半径，不是直径。

## 怎样知道

测量并不来自“看见”视界。天文学家通过伴星气体被吸积时发出的 X 射线、恒星绕不可见天体的轨道等方式推定黑洞质量，再用引力理论把质量换算成半径。[1][2] NASA 的科普说明指出，把太阳质量压进约 3 公里半径，逃逸速度就会达到光速；Britannica 则给出 10 倍太阳质量对应约 30 公里。[1][2] 史瓦西半径公式 Rs=2GM/c² 把质量、引力常数与光速联系起来，因此半径与质量成正比。

## 数值与口径

按 10 倍太阳质量计算，Rs 约为 2.95×10⁴ 米，即 29.5 公里；Britannica 取整写作 30 公里。[1][2] 相应的视界直径约为 5.9×10⁴ 米。这里的事件视界指理论边界，不是望远镜图像中看到的暗影轮廓；后者受强引力透镜影响，比视界本身更大。[1] 如果黑洞自转，视界形状会偏离完美球面，史瓦西公式只是近似。

## 常见误解

最常见的混淆是把史瓦西半径当成直径，于是把 30 公里说成“黑洞有 30 公里宽”，实际宽度约为 60 公里。另一个误解是把事件视界当成实体表面；它没有物质外壳，只是一个数学边界。[2] 还有人把 EHT 图像的暗影尺寸直接当成视界尺寸；图像中的环与暗影包含光线弯曲和吸积流的结构，不能与 Rs 简单等同。

## 与其他尺度的关系

2.95×10⁴ 米只有约 30 公里，不到地球直径（约 1.27×10⁷ 米）的四百分之一，与一座城市或一颗小行星的尺度相近。把质量放大到 400 万倍太阳质量，半径就增到约 1.2×10¹⁰ 米，正好是银河系中心黑洞的量级；再放大到 65 亿倍太阳质量，则进入 M87* 的尺度。由此可见，黑洞“大小”几乎完全由质量决定，而不是由形成它的恒星半径决定。

## 视界与阴影不是同一个圆

事件视界是理论边界，半径由质量决定；望远镜看到的“阴影”是光线在强引力场中弯曲后形成的暗区，通常比视界更大。[1][2] EHT 图像的亮环来自吸积流，暗影边缘也不是视界的精确轮廓。把两者当成同一个圆，会高估黑洞的“可见大小”。

## 自转改变视界形状

史瓦西半径只适用于不旋转、无电荷的黑洞。真实黑洞多有自转，视界形状偏离球面，能层与参考系拖曳也会改变周围光线。[2] 质量相同、自转不同的黑洞，阴影与吸积流结构可以不同。事件视界仍存在，但不能只用一个 Rs 概括全部几何。

## 五轴对照

在空间轴，10 倍太阳质量黑洞的视界半径约 30 公里；在质量轴，半径与质量成正比；在时间轴，黑洞会通过吸积与并合增长；在温度轴，霍金温度随质量增大而降低。视界、阴影、质量与温度是四个不同概念。[1][2]

## 视界不是发光边界

事件视界是“有去无回”的零曲面，本身不发光；望远镜拍到的是视界周围吸积流与光子环形成的阴影。阴影直径略大于视界直径，因为光线在强引力场中弯曲。正文若把阴影当成视界，会高估或误解黑洞的“大小”。[1][S1]

## 延伸核对

补充的来源 [3]（Event Horizon Telescope Collaboration）、[4]（NASA / Goddard Space Flight Center） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
