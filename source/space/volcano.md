---
id: space.volcano
title: 火山
titleEn: Volcano
dimension: length
category: 地球与地质
summary: 本条以夏威夷冒纳凯亚盾状火山为例，采用4205米作为峰顶相对海平面的海拔。它不是从海底基座起算的锥体总高度，也不是火山口直径。
quantity:
  value: 4205
  unit: m
  measure: 冒纳凯亚火山峰顶相对海平面的海拔
  approximate: true
displayValue: '4,205 m（冒纳凯亚峰顶海拔）'
related:
  - time.microsecond
  - space.everest
  - space.olympus-mons
  - space.earth
  - space.mid-ocean-ridge
  - space.glacier
reviewStatus: reviewed
sources:
  - title: How big are the Hawaiian volcanoes?
    url: 'https://www.usgs.gov/faqs/how-big-are-hawaiian-volcanoes'
    publisher: U.S. Geological Survey
    accessed: '2026-11-06'
  - title: Mauna Kea
    url: 'https://www.usgs.gov/volcanoes/mauna-kea/'
    publisher: U.S. Geological Survey
    accessed: '2026-11-06'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: 对象为夏威夷冒纳凯亚盾状火山；样本为USGS峰顶高程；口径为相对海平面的海拔，不是从海底基座起算的锥体总高度，也不是火山口直径。
uncertainty: USGS两页给出4205米与4207米，差异来自测量与取整；若从海底基座算起，总高度约10211米。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 用WebFetch打开USGS夏威夷火山问答与冒纳凯亚火山页，核对4205米、4207米海拔及约10211米总高度。
    - 明确海拔、海底基座总高度与火山口宽度是不同口径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "terrain"
  scene: "space.object"
  caption: "冒纳凯亚峰顶海拔4205 m参照"
  note: "山体剖面与坡度为示意，非按比例，非观测重建。"
  color: "#9bbcd7"
  referenceAxis: "x"
  framePadding: 0.3
measureType: 尺寸
tags:
  - 地球与地质
  - 尺寸
  - 建筑与地貌
---
## 它是什么

火山是岩浆、火山灰与气体喷出地表后堆积形成的地形。本条以夏威夷冒纳凯亚盾状火山为例，量峰顶相对海平面的海拔，不是从海底基座起算的锥体总高度，也不是火山口宽度。[1][2] 冒纳凯亚是盾状火山，坡度平缓，由多期熔岩流叠置而成。

## 怎样知道

USGS说明冒纳凯亚峰顶海拔4205米，同时指出它向海面以下延伸约6000米，总高度接近10211米。[1] USGS的火山专页在“Quick Facts”中列出的峰顶高程为4207米。[2] 两者相差2米，属于测量基准与取整差异；本条采用4205米，并在不确定度中保留另一值。

## 数值与口径

4205米是海拔，即相对海平面的垂直高度；若把海底基座算入，总高度约10211米。[1][2] 这两个数不能混用：一个描述“高出海面多少”，另一个描述“从洋底到峰顶多高”。火山锥高度还可能指火口缘到周围地面的相对高差，那是第三种口径。火山锥的相对高差也受周围地面高程影响，因此同一座火山可以报出不同高度。

## 常见误解

“火山高度就是山峰海拔”不完整：海拔只从海平面起算，海底火山的大部分体积在海面以下。[1][2] 另一种误解是把火山高度与火山宽度混为一谈；盾状火山可以很宽而相对低缓。海底火山的峰顶可能仍在水下，海拔为负值，这时更应使用从基座起算的高度。引用火山高度时，应说明基准面与端点。

## 与其他尺度的关系

4205米约为珠峰雪面高程8848.86米的48%，但若按海底基座到峰顶的10211米计，则超过珠峰海拔。[1][2] 与地球直径12742公里相比，它不到后者的0.04%。火山属于地表地形尺度，既高于城市，也远小于行星。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 14 微秒，在时间轴上量级接近「微秒」。[3]


## 深读一：量值口径

本条的核心量值是 4,205 m，量的是冒纳凯亚火山峰顶相对海平面的海拔。数值来自本条既有审阅链，不是按标题重新估算；标为近似值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：对象为夏威夷冒纳凯亚盾状火山；样本为USGS峰顶高程；口径为相对海平面的海拔，不是从海底基座起算的锥体总高度，也不是火山口直径。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照微秒（1e-6）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
