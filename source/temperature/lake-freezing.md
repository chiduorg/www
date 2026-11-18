---
id: temperature.lake-freezing
title: 湖水结冰
titleEn: Freshwater lake surface freezing point
dimension: temperature
category: 低温
summary: >-
  淡水湖表层在标准大气压附近约 0 ℃ 开始结冰，即 273.15 K。这里描述的是与空气接触的
  表层水，不是整个湖体的温度；溶解盐、有机物、水深和热收支都会改变实际结冰时间。
quantity:
  value: 273.15
  unit: K
  measure: 淡水表层冰点
  approximate: false
displayValue: 0 ℃（273.15 K）
related:
  - temperature.water-freezing
  - temperature.sea-ice
  - temperature.plant-frost
  - temperature.permafrost
  - temperature.deep-ocean
reviewStatus: reviewed
sources:
  - title: What is the Cryosphere?
    url: 'https://nsidc.org/learn/what-cryosphere'
    publisher: National Snow and Ice Data Center (NSIDC)
    accessed: '2026-11-06'
  - title: Ice
    url: 'https://www.britannica.com/science/ice'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions:
  medium: 淡水
  measurementSite: 湖面表层
  duration: 持续散热至表层达到冰点
  basis: 标准大气压下的冰水平衡参考
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - NSIDC 冰圈资料把淡水的冻结点写作 0 ℃，并对比海水约 −1.8 ℃ 的冻结点，说明盐度会降低冰点。
    - Britannica 冰条目指出低于 0 ℃ 时液态水形成河冰、海冰和湖冰，正文据此采用 273.15 K。
    - 正文区分湖面表层与湖体内部，说明溶解盐、热收支、风速和雪盖对结冰时间的影响。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
uncertainty: >-
  273.15 K 是纯淡水在标准大气压附近的冰点参考；湖水含溶解盐和有机物，实际表层冰点会略低。
  湖面是否结冰还取决于气温、风速、太阳辐射、水深、湖底储热和雪盖，而不是单一温度值。
visual:
  template: planet-environment
  scene: temperature.object
  caption: 淡水湖面的结冰
  note: 画面为湖水结冰的示意表达，非按比例、非观测重建；冰层、水色与冷色光晕仅用于区分固液状态， 不代表真实湖泊深度、盐度或具体测温位置。
zone: 低温
tags:
  - 低温
  - 温度
  - 日常
---
## 它是什么

湖水结冰通常指淡水湖表层开始形成稳定冰盖的温度。标准大气压下，纯水在 0 ℃ 结冰，即 273.15 K；[1] 但湖水含有溶解盐和有机物，实际表层冰点会略低。这里取 273.15 K，作为淡水表层的参考值，不是整个湖体的温度。

## 怎样知道

NSIDC 的冰圈资料把淡水的冻结点写作 0 ℃，并对比海水约 −1.8 ℃ 的冻结点，说明盐度会降低冰点。[1] Britannica 也指出，低于 0 ℃ 时液态水形成河冰、海冰和湖冰。[2] 湖面是否结冰，还要看热收支：气温、风速、太阳辐射、水深和湖底储热共同决定表层何时失去热量。

## 数值与口径

273.15 K 等于 0 ℃。它适用于与空气接触、盐度很低的表层水；深水湖的底部在整个冬季可能仍保持约 4 ℃。湖面结冰后，冰层厚度增加的速度由冰面散热和冰下热流控制，而不是单纯由气温决定。溶解盐、波浪和人为搅动都会改变局部结冰时间。[1]

## 常见误解

第一，认为整个湖水同时降到 0 ℃；实际是表层先结冰。第二，把气温 0 ℃ 当成湖水立刻结冰；水有热容量，需要持续散热。第三，把海水和淡水的冰点混用；海水约 −1.8 ℃。[1] 第四，认为冰盖越厚气温一定越低；厚度还取决于冻结持续时间和雪盖保温。第五，忽略湖底储热；深水湖的底层冷却远慢于表层。[2]

## 与其他温度的关系

273.15 K 与 water-freezing 的参考值相同，但这里强调湖面这一位置。它高于 plant-frost 的 271 K，低于 sea-ice 表面的 258 K。与 deep-ocean 的接近 277 K 相比，湖面在冬季可以更冷，而湖底仍较暖，说明同一个水体内部存在明显温度分层。
