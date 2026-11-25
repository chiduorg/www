---
id: space.plankton
title: 浮游生物
titleEn: Plankton
dimension: length
category: 生命与人体
summary: >-
  浮游生物是随水流漂移的生物集合，不是单一物种。本条取0.1 mm（100 µm）作为微浮游生物单个个体的长度参照，量最大维度，不是群体大小或藻华覆盖范围。
quantity:
  value: 0.0001
  unit: m
  measure: 微浮游生物单个个体的长度（最大维度）
  approximate: true
displayValue: 约 0.1 mm（微浮游生物个体长度参照）
related:
  - space.ecoli
  - space.ant
  - space.mushroom
  - space.blue-whale
  - time.nanosecond
reviewStatus: reviewed
sources:
  - title: microplankton
    url: 'https://www.britannica.com/science/microplankton'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-07'
  - title: What are plankton?
    url: 'https://oceanservice.noaa.gov/facts/plankton.html'
    publisher: National Oceanic and Atmospheric Administration
    accessed: '2026-11-07'
  - title: 'SI base unit: metre (m)'
    url: 'https://www.bipm.org/en/si-base-units/metre'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions: >-
  对象为单个微浮游生物个体；量其最大维度；以Britannica所述0.05–1 mm的微浮游生物范围中的0.1 mm作为取整参照；不包括群体、藻华面积、大型浮游动物（如水母）以及个体体积或生物量。
uncertainty: >-
  Britannica把微浮游生物限定在0.05–1 mm，0.1 mm位于该范围偏低处；NOAA则说明浮游生物通常微小、常不足1英寸，但也包括较大的甲壳类和水母。0.1 mm只是单个微浮游生物的长度参照，不是所有浮游生物的平均值，群体和藻华可以大得多。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - >-
      打开Britannica的microplankton条目，核对“微浮游生物0.05–1 mm、大型浮游生物≥1 mm、微型浮游生物<0.05 mm”的分类；打开NOAA的What are plankton?页面核对浮游生物通常微小但包含较大种类。
    - 采用0.1 mm作为微浮游生物个体长度的取整参照；正文区分个体长度、群体大小与藻华范围，保留needs-review以待具体类群数据。
    - '2026-11-07 来源可访问性核对：https://oceanservice.noaa.gov/facts/plankton.html 返回可用响应；https://www.britannica.com/science/microplankton（403） 受站点反爬/限流限制，保留引用但未逐字复核。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: microbe
  variant: plankton
  color: '#7fa9a5'
  referenceAxis: x
  caption: 浮游生物 · 0.1 mm个体长度参照
  note: 细胞轮廓、鞭毛与表面纹理为示意，非按比例，非观测重建；横向参照表示单个个体的最大维度。
  framePadding: 0.3
  scene: space.object
measureType: 尺寸
tags:
  - 生命与人体
  - 尺寸
  - 微观
---
## 它是什么

浮游生物不是某一个物种，而是一类“随水流漂移、不能有效逆流游动”的生物集合，包括浮游植物和浮游动物。[1][2] 它们中既有单细胞藻类，也有小型甲壳类、水母幼体等。本条比较的是单个微浮游生物个体的长度，取身体的最大维度，不是整个群体或藻华的覆盖范围。

## 怎样知道

Britannica的microplankton条目按大小把浮游生物分为三类：微浮游生物为0.05–1毫米，大型浮游生物为1毫米及以上，微型浮游生物小于0.05毫米。[1] NOAA的浮游生物页面则说明，浮游生物通常微小，常不足1英寸，但也包括较大的甲壳类和水母。[2] 0.1毫米落在微浮游生物的下半段，因此被取作单个微浮游生物的长度参照；它不是所有浮游生物的固定尺寸。

## 数值与口径

0.0001米就是0.1毫米，也等于100微米。量的是单个个体的最大维度，而不是体积；一个0.1毫米长的细胞和一个0.1毫米长的甲壳幼体，体积可能相差很多。[1] 口径的下界是0.05毫米、上界是1毫米，超过1毫米就进入大型浮游生物，小于0.05毫米则属于微型浮游生物。[2] 0.1毫米是取整值，不代表测量精确到微米以下。

## 常见误解

常见误解是把“浮游生物”当成一种生物。它是由漂移生活方式定义的功能类群，包含藻类、细菌、原生动物和动物幼体。[1][2] 另一个误解是“浮游生物都看不见”：微浮游生物确实常需显微镜，但大型浮游生物可以肉眼看见，水母甚至可达几十厘米。也不能用0.1毫米描述所有浮游生物；群体、藻华和大型种类都不在这个口径内。浮游生物与细菌有重叠，但“0.1毫米”不能反过来当作所有微生物的大小。

## 与其他尺度的关系

0.1毫米约为1.6毫米蚂蚁体长的十六分之一，约为10厘米蘑菇菌盖的千分之一，也约为30米蓝鲸体长的三十万分之一。[1][2] 在尺度轴上，它落在“微米到毫米”的微观带：向上是蚂蚁、蘑菇和蕨类，向下是典型大肠杆菌的1–2微米和病毒。浮游生物把海洋食物链的起点压缩到肉眼几乎不可见的一小段长度。

本条的米制长度单位与换算依据 BIPM 对米的定义。[3]

按 BIPM 定义的真空光速 299,792,458 m/s 计算，光穿过这一长度约需 0.00033 纳秒，在时间轴上量级接近「纳秒」。[3]
