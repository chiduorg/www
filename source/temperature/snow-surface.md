---
id: temperature.snow-surface
title: 雪面温度
titleEn: Snow surface temperature reference
dimension: temperature
category: 低温
summary: >-
  273.15 K（0 ℃）是常压下冰水平衡的相变参考，常被用来描述雪面接近融点的状态。
  它不是所有雪的实际温度：干雪表面可以远低于 0 ℃，雪面温度也不等于气温或雪层内部温度。
quantity:
  value: 273.15
  unit: K
  measure: 雪面冰水相变参考温度
  approximate: true
  measureLabel: 雪面冰水相变参考温度
displayValue: 273.15 K（0 ℃，相变参考）
related:
  - temperature.water-freezing
  - temperature.lake-freezing
  - temperature.sea-ice
  - temperature.glacier-ice
  - temperature.plant-frost
  - temperature.permafrost
reviewStatus: reviewed
sources:
  - title: Snow
    url: 'https://nsidc.org/learn/parts-cryosphere/snow'
    publisher: National Snow and Ice Data Center (NSIDC)
    accessed: '2026-11-07'
  - title: 'NIST Guide to the SI, Chapter 4 — Units and Degree Celsius'
    url: >-
      https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes
    publisher: NIST Special Publication 811
    accessed: '2026-11-07'
conditions:
  medium: 由冰晶组成的积雪表层
  location: 雪面或新雪表层
  condition: 标准大气压附近的冰水平衡参考，实际雪面常低于此值
  basis: 相变参考温度与积雪观测
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - NSIDC 的雪条目说明雪是水汽在 0 ℃ 以下凝华形成的冰晶降水，雪本身可归为冰。
    - NIST 的 SI 指南给出摄氏温度定义 t = T − 273.15 K，因此 0 ℃ 对应 273.15 K。
    - 正文把 273.15 K 当作冰水相变参考，而不是所有雪面的实测温度，并区分雪面、气温与雪层内部。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://nsidc.org/learn/parts-cryosphere/snow；https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-4-two-classes-si-units-and-si-prefixes），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  273.15 K 是纯水在标准大气压附近冰水平衡的相变参考，不是所有积雪表面的实际温度。
  干雪表面可因辐射冷却远低于 0 ℃，湿雪则可能接近或略高于 0 ℃；含盐或含杂质的雪会改变融点。
  雪面温度还随日照、风速、雪层厚度和下垫面变化，不能用一个相变点代替具体测量。
visual:
  template: cryo-instrument
  profile: snow
  caption: 雪面温度示意
  note: >-
    画面为雪面温度示意，非按比例、非观测重建；雪晶、雪层剖面、测温探头与冷色光晕均为解释性处理，
    不代表真实积雪结构或某一地点的测温结果。各对象分别调整显示大小，不能据此比较尺寸。
  backdrop: frost
  color: '#dfe9f0'
  scene: temperature.object
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

雪是云中水汽直接凝华、结晶并降落到地面的冰晶集合体。所谓雪面温度，指积雪最表层的温度；本条给出的 273.15 K（0 ℃）是常压下冰与液态水平衡的相变参考，常用来描述雪面接近融点的状态。[1][2] 它不是一个对所有雪都成立的实测值。

## 怎样知道

NSIDC 的雪条目指出，雪是水汽在 0 ℃ 以下凝华形成的冰晶降水，因此雪本身就是冰的一种形态。[1] NIST 的 SI 指南给出摄氏温度的定义式 t = T − 273.15 K，说明 0 ℃ 与 273.15 K 描述同一温度，摄氏与开尔文的间隔相同。[2] 把这两条放在一起，可以理解 273.15 K 是“冰水相变”的温标参考，而积雪的实际表面温度仍要靠测温探头、红外遥感或雪坑观测获得。

## 数值与口径

273.15 K 等于 0 ℃。它对应纯水在标准大气压附近开始融化或结冰的参考条件，而不是“雪面一定为 0 ℃”。[1][2] 干雪表面常因向夜空辐射散热而低于气温，可以远低于 0 ℃；湿雪或正在融化的雪面则可能接近 0 ℃。此外，雪面温度、气温和雪层内部温度是三个不同位置：积雪导热性差，底部可以比表面暖，也可以因长期低温而保持更冷。比较时必须说明测点深度和测量时间。

## 常见误解

第一，认为看到雪就说明雪面温度为 0 ℃；干雪可以在很低的温度下稳定存在。第二，把气温当作雪面温度；雪面受日照、风和辐射冷却影响，可能明显偏离气温。第三，认为雪到 0 ℃就立即全部融化；相变需要吸收潜热，融雪需要持续的热量输入。第四，忽略杂质与压力；含盐雪、受压冰雪的融点会与纯水参考值不同。[1]

## 与其他温区的关系

273.15 K 与水的冰点、淡水湖表层冰点使用同一参考值，但本条强调积雪表面这一位置。它高于冰川冰温的约 260 K，也高于海冰表面的约 258 K，说明同样是冰，实际温度可以相差很多。它低于室温约 293 K，低于人体体温，却高于液氮的 77.4 K。把雪面与这些温区并列时，先问清楚测的是表面、内部还是空气，再看数值差异。[2]
