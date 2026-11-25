---
id: temperature.ocean-thermocline
title: 海洋温跃层
titleEn: Ocean thermocline temperature reference
dimension: temperature
category: 低温
summary: >-
  温跃层是海洋表层暖水与深层冷水之间的过渡层，温度随深度快速下降。中低纬温跃层内的典型温度 可取约 283 K（10
  ℃）；它不是固定深度的水层，位置和强度随季节、纬度与环流变化。
quantity:
  value: 283
  unit: K
  measure: 中低纬温跃层内典型温度参考
  approximate: true
  measureLabel: 中低纬温跃层内典型温度参考
displayValue: 约 283 K（约 10 ℃）
related:
  - temperature.sea-surface
  - temperature.lake-surface
  - temperature.water-freezing
  - temperature.troposphere
  - space.human
reviewStatus: reviewed
sources:
  - title: What is a thermocline?
    url: 'https://oceanservice.noaa.gov/facts/thermocline.html'
    publisher: NOAA Ocean Service
    accessed: '2026-11-06'
  - title: >-
      Investigating the Vertical Thermal Structure of the Ocean: Temperature vs
      Depth at Three Different Latitudes
    url: 'https://repository.library.noaa.gov/view/noaa/16261/noaa_16261_DS4.pdf'
    publisher: NOAA
    accessed: '2026-11-06'
  - title: thermocline
    url: 'https://www.britannica.com/science/thermocline'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions:
  medium: 海水
  depth: '跃层核心约 100–1,000 m；永久温跃层常见于约 200–1,000 m'
  season: 中低纬夏季更强、更深；冬季混合加深，极地可缺失
  basis: CTD、Argo 浮标与历史温深剖面
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NOAA 说明温跃层是暖混合层与冷深层水之间的过渡层，温度在该层内快速下降，且深度和强度随季节与纬度变化。
    - NOAA 的温深剖面教学资料给出中纬度夏季表层约 18 ℃、125 m 约 10.2 ℃，说明 283 K 落在典型跃层内。
    - 'Britannica 给出永久温跃层约 200–1,000 m，并指出有季节的纬度会形成更浅的季节性温跃层。'
    - 正文取 283 K 作为中低纬温跃层内的圆整参考，同时强调它不是整层平均，也不是固定深度。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  283 K 是中低纬温跃层内的圆整参考，不是全球统一值；热带表层可高于 298 K，深层可低于 278 K，
  高纬冬季温跃层可很弱甚至消失。跃层深度、强度和温度梯度随季节、纬度、风与环流显著变化。
visual:
  template: "heat-map"
  scene: "temperature.object"
  caption: "海洋温跃层温度示意"
  note: "海水分层、深度标尺与温度曲线均为解释性示意，非按比例、非观测重建； 画面不代表某一海区或某一季节的真实温深剖面。"
  color: "#5f97b3"
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

海洋温跃层是表层暖混合水与深层冷水之间的过渡层。在温跃层内，温度随深度快速下降，密度也随之增大，形成相对稳定的分层。[1] 它不是一个有明确上、下边界的“物质层”，而是一段温度梯度很大的深度区间。这里取 283 K 描述中低纬温跃层内的典型温度，而不是整层海洋的平均温度。

## 怎样知道

温跃层温度来自温深剖面测量。研究船用 CTD 或旧式温深仪记录不同深度的温度，Argo 浮标则提供大范围、重复的剖面。[1] Britannica 指出，永久温跃层通常位于约 200–1,000 m，季节性温跃层在夏季可出现在更浅处。[3] NOAA 的一份教学剖面资料显示，中纬度夏季表层约 18 ℃，125 m 深处约 10.2 ℃，正落在 283 K 附近。[2] 这些剖面让科学家能同时看到温度、盐度和密度的分层。

## 数值与口径

283 K 等于 9.85 ℃，约 10 ℃。在典型中低纬剖面中，表层暖水可从约 298 K 降到温跃层内的约 283 K，再向深层降到约 278 K 以下。[2] 热带温跃层更暖、梯度更强；中纬度有季节变化，夏季跃层浅而强，冬季混合加深；极地水柱整体很冷，温跃层可很弱甚至不存在。[1][3] 因而 283 K 是跃层内部的圆整参考，需与深度、纬度和季节一起说明。

## 常见误解

第一，把温跃层当成一张固定的“水层界面”；它的深度会随季节和风混合移动。第二，认为 10 ℃ 是全球温跃层的统一温度；热带、副热带和高纬的温跃层温度差别很大。第三，把温跃层与海底地形混为一谈；它由温度与盐度决定，不依赖海底坡折。第四，忽略湖泊也有温跃层；夏季深湖同样会形成上层暖、下层冷的分层。[3]

## 与其他温区的关系

283 K 高于深层海水的约 275 K，低于热带表层的约 298 K，正好处在海洋垂直温度梯度的中段。它高于冰点，因此温跃层内的海水仍为液态；但向极地或冬季靠近时，表面可接近 273 K。与湖面约 288 K 的夏季参考相比，283 K 更冷；与冰川冰的约 260 K 相比，又暖得多。温跃层因此是海洋热量储存与上层混合之间的关键过渡带。
