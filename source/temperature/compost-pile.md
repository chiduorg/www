---
id: temperature.compost-pile
title: 堆肥堆芯温度
titleEn: Compost pile core temperature
dimension: temperature
category: 中温
summary: >-
  堆肥堆芯在嗜热阶段可靠近 60 °C；本条取 333 K。热量来自微生物分解有机物，
  不是太阳暴晒或环境气温，也不是人为设定的加热温度。
quantity:
  value: 333
  unit: K
  measure: 堆肥堆芯温度（嗜热阶段代表值）
  approximate: true
  measureLabel: 堆肥堆芯温度（嗜热阶段代表值）
displayValue: '333 K（约 59.9 °C，代表值）'
related:
  - temperature.gut
  - temperature.human-body-temperature
  - temperature.room-temperature
  - temperature.sauna
  - temperature.hot-spring
  - space.human
reviewStatus: reviewed
sources:
  - title: Approaches to Composting
    url: 'https://www.epa.gov/sustainable-management-food/approaches-composting'
    publisher: U.S. Environmental Protection Agency
    accessed: '2026-11-07'
  - title: '40 CFR Part 503, Appendix B — Pathogen Treatment Processes'
    url: >-
      https://www.govinfo.gov/content/pkg/CFR-2019-title40-vol32/pdf/CFR-2019-title40-vol32-chapI-subchapP.pdf
    publisher: U.S. Government Publishing Office
    accessed: '2026-11-07'
  - title: 'SI base unit: kelvin (K)'
    url: 'https://www.bipm.org/en/si-base-units/kelvin'
    publisher: 'International Bureau of Weights and Measures (BIPM)'
    accessed: '2026-11-25'
conditions:
  medium: 有机质堆体
  measurementSite: 堆体中心或堆芯，非堆表或环境空气
  duration: 嗜热阶段，通常持续数天至数周
  basis: 堆芯探头实测或规范的工艺温度要求
uncertainty: >-
  333 K 是嗜热阶段的圆整代表值；原料碳氮比、含水率、通气、堆体尺寸和环境温度都会改变堆芯温度。
  堆芯温度不是堆表温度或气温，过高也会抑制微生物活动；不同堆肥规范给出的时间和温度组合并不相同。
review:
  method: source-check
  date: '2026-11-07'
  notes:
    - EPA 堆肥页面给出有益微生物适宜温度约 131–160 °F（55–71 °C），并要求高温维持数天以降低病原体。
    - 40 CFR Part 503 附录 B 的堆肥工艺要求包括 40 °C 以上维持五天、其中四小时超过 55 °C。
    - 正文取 333 K（约 60 °C）作为堆芯嗜热阶段代表值，并说明热量来自微生物代谢而非环境加热。
    - '2026-11-07 来源可访问性核对：全部来源页返回可用响应（https://www.epa.gov/sustainable-management-food/approaches-composting；https://www.govinfo.gov/content/pkg/CFR-2019-title40-vol32/pdf/CFR-2019-title40-vol32-chapI-subchapP.pdf），数值口径与正文一致。'
rights:
  status: rewritten
  note: 依据所列资料重新撰写，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: heat-map
  scene: temperature.object
  profile: compost
  backdrop: garden
  caption: 堆肥堆芯温度分布示意
  note: >-
    画面为堆肥堆芯温度分布的示意，非按比例、非观测重建；色带、探针、蒸汽与光晕均为解释性示意，
    不代表真实堆体结构、具体原料或精确温度读数。
  color: '#8fbf8a'
zone: 中温
tags:
  - 中温
  - 温度
---
## 测的是堆芯，不是气温

堆肥堆芯温度指有机质堆体内部、通常是中心区域的温度，而不是堆体表面或周围空气的温度。堆表会向空气散热，堆芯则更容易保留分解产生的热量，因此同一堆肥的不同位置可以差很多。[1] 本条取 333 K（约 60 °C）作为嗜热阶段的圆整代表值。它描述的是堆体内部的生物产热状态，不是天气预报里的气温。

## 热从哪里来

堆肥的热量主要来自微生物分解有机物。细菌和真菌在通气、含水率合适的条件下代谢，把有机物中的化学能转化为热，使堆芯温度上升。[1] EPA 资料指出，有益微生物的适宜温度约为 131–160 °F（55–71 °C），在这一区间内分解较快，也有助于降低病原体和杂草种子；温度过高则会抑制微生物活动。[1] 所以堆肥升温是生物过程的结果，不是太阳晒热或电加热的设定。

## 数值与口径

333 K 等于 59.85 °C，约 60 °C。堆肥工艺规范并非只给一个温度点：40 CFR Part 503 附录 B 要求堆体在 40 °C 以上维持五天，其中四小时超过 55 °C；EPA 则描述 131 °F（55 °C）以上维持数天以降低病原体。[1][2] 这些是工艺条件，不是所有家庭堆肥都能稳定达到的读数。堆芯温度会随原料、含水率、通气和翻堆而变化，也会出现先升后降的阶段性波动。[2]

## 常见误解

第一，把堆芯温度当成环境气温；堆体内部由微生物产热，冬季堆芯也可能明显高于气温。第二，认为越热越好；超过适宜区间会抑制微生物，甚至带来火灾风险。第三，用堆表读数代表整堆；表面散热快，堆芯通常更热。第四，把某条规范的 55 °C 或 60 °C 当成统一目标；不同原料、堆型和规范的时间温度组合不同。[1][2]

## 与其他温度的关系

60 °C 高于 human-body-temperature 的约 37 °C 和 room-temperature 的 20 °C 示例，也高于 gut 的约 37 °C 温区；低于 sauna 的约 80 °C 空气温度和 boiling-water 的 100 °C。与 hot-spring 相比，堆肥的热来自生物代谢而非地热。把堆肥与这些条目并列时，必须区分“生物产热”“环境加热”和“人为设定”三种不同的来源。

本条的热力学温度单位与换算依据 BIPM 对开尔文的定义。[3]
