---
id: temperature.jet-turbine
title: 涡轮叶片
titleEn: Turbine inlet gas temperature
dimension: temperature
category: 高温
summary: >-
  现代高性能航空发动机的涡轮前燃气温度可达约 1,700 ℃（1,973 K）。这是进入高压涡轮的燃气总温，
  不是叶片金属温度，也不是材料熔点；叶片靠冷却与涂层维持在更低温度。
quantity:
  value: 1973
  unit: K
  measure: 现代航空发动机涡轮入口燃气温度
  approximate: true
  measureLabel: 现代航空发动机涡轮入口燃气温度
displayValue: '约 1,973 K（1,700 °C）'
related:
  - temperature.rocket_plume
  - temperature.tungsten-melting
  - temperature.fusion-reactor-plasma
  - temperature.steelmaking_temp
reviewStatus: reviewed
sources:
  - title: Gas turbine propulsion
    url: 'https://www1.grc.nasa.gov/beginners-guide-to-aeronautics/turbine-engines/'
    publisher: NASA Glenn Research Center
    accessed: '2026-11-06'
  - title: 'Jet engines: technology, supply chain and ecosystem'
    url: >-
      https://takshashila.org.in/content/publications/assets/Jet-Engines-and-Ecosystem-Primer.pdf
    publisher: The Takshashila Institution
    accessed: '2026-11-06'
  - title: Cutting-edge elemental technology producing 1600°C class J gas turbines
    url: >-
      https://power.mhi.com/products/gasturbines/technology/steam-cooled-combustor
    publisher: Mitsubishi Power
    accessed: '2026-11-06'
conditions: >-
  航空燃气涡轮发动机的高压涡轮入口、燃气总温口径。数值随发动机代次、循环参数、起飞或巡航状态变化； 现代先进发动机可达 1,700 ℃
  级，早期型号和部分工业燃机明显更低。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - 核对 NASA 燃气涡轮教程：说明压气机—燃烧室—涡轮的能量流程，未给出单一型号温度，用于概念与部件关系。
    - '核对 Takshashila 喷气发动机报告：燃烧室出口最高温度限制在 850–1,700 ℃，受涡轮叶片耐受能力约束。'
    - '核对 Mitsubishi Power：J 级燃机涡轮入口温度 1,600 ℃ 级，1,700 ℃ 级为开发验证中的先进技术。'
    - '正文取 1,700 ℃ 的圆整值 1,973 K，并明确它不是叶片金属温度。'
uncertainty: >-
  不同发动机的涡轮前温度约 1,400–1,700 ℃（约 1,673–1,973 K）；1,700 ℃ 是先进等级的上界，
  不是所有机型的常态。燃气总温、叶片表面温度和材料许用温度是三个不同口径。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: burner
  profile: gas
  caption: 涡轮入口燃气温度示意
  note: 画面为燃烧室与涡轮导向叶片的示意表达，气流颜色、叶片数量和火焰形状均经艺术处理， 不能据颜色判断精确温度；非按比例，非观测重建；各对象分别调整显示大小。
  scene: temperature.object
zone: 高温
tags:
  - 高温
  - 温度
  - 日常
---
## 它是什么

涡轮叶片本身不承受“1,700 ℃ 的金属温度”；本条的量值是进入高压涡轮的燃气总温。现代高性能航空发动机的涡轮前温度可达约 1,700 ℃，即 1,973 K。[1][2] 它与叶片表面温度、材料熔点不是同一口径。发动机不同工况下，涡轮前温度会随推力和环境条件变化。

## 怎样测到

涡轮前温度难以直接插入传感器，工程上由燃烧室出口参数、发动机测试和热端部件寿命反推；NASA 的燃气涡轮教程说明空气经压气机、燃烧室和涡轮的能量流程，但不给出单一型号的数值。[1] Takshashila 的喷气发动机综述把燃烧室出口最高温度写为 850–1,700 ℃，并强调受涡轮叶片耐受能力限制。[2]

## 数值与口径

1,700 ℃ 换算为 1,973 K。[2] 三菱重工的资料把 J 级燃气轮机涡轮入口温度写成 1,600 ℃ 级，并称 1,700 ℃ 级技术尚在开发验证；这说明“1,700 ℃”是先进等级的上界，而不是所有发动机的常态。[3] 燃气在涡轮中膨胀降温，叶片金属温度靠气膜冷却和热障涂层维持在材料可承受范围。[3]

## 常见误解

第一，把燃气温度当成叶片温度；叶片内部有冷却通道，金属温度显著更低。第二，把 1,700 ℃ 当成材料熔点；镍基单晶高温合金的承温能力仍低于燃气温度。第三，把地面燃气轮机与航空发动机混为一谈；两者尺寸、寿命和冷却设计不同。[2][3]

## 与其他温区的关系

1,973 K 高于钢的出钢温度约 1,893 K 和铜的熔点 1,358 K，低于钨的 3,695 K。它已接近镍基合金的固相线，因此热端部件必须依赖涂层与冷却，而不是单纯靠材料耐热。[2][3]
