---
id: temperature.glass-transition
title: 玻璃转变
titleEn: Glass transition temperature
dimension: temperature
category: 中温
summary: >-
  钠钙玻璃的玻璃转变温度约在 800–850 K（527–577
  °C）之间，是一个随成分和冷却速率变化的转变区间，不是熔点。玻璃在此附近从脆性固体逐渐变为可发生结构弛豫的过冷液体。
quantity:
  value: 825
  unit: K
  measure: 钠钙玻璃转变温度范围
  approximate: true
  measureLabel: 钠钙玻璃转变温度范围
  range:
    min: 800
    max: 850
    unit: K
displayValue: 约 800–850 K（527–577 °C，转变区间）
related:
  - temperature.glass_melting
  - temperature.quartz-melting
  - temperature.rubber-vulcanization
  - temperature.oven
reviewStatus: reviewed
sources:
  - title: >-
      From Melt to Structure: The Science and Technology of Flat
      Soda–Lime–Silicate Glass for Structural Engineers
    url: >-
      https://mdpi-res.com/d_attachment/buildings/buildings-16-00506/article_deploy/buildings-16-00506.pdf
    publisher: MDPI Buildings
    accessed: '2026-11-06'
  - title: Properties of Soda-Lime Silica Float Glass (Technical Bulletin ATS-129)
    url: >-
      https://www.pilkington.com/-/media/pilkington/site-content/usa/window-manufacturers/technical-bulletins/ats-129---properties-of-soda-lime-silica-float-glass.pdf
    publisher: Pilkington North America
    accessed: '2026-11-06'
  - title: glass
    url: 'https://www.britannica.com/technology/glass'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-06'
conditions: >-
  钠钙硅酸盐玻璃（常见窗玻璃、瓶罐玻璃），约 1 atm；转变温度随 SiO₂/Na₂O/CaO 比例、羟基与杂质含量、加热/冷却速率和测量方法变化。Tg
  是动力学转变，不是热力学熔点。
review:
  method: source-check
  date: '2026-11-06'
  notes:
    - >-
      核对 MDPI Buildings 综述：钠钙硅酸盐玻璃的 Tg 通常在 530–580°C，取决于成分，并定义在黏度约 10^13 dPa·s
      附近。
    - >-
      核对 Pilkington ATS-129：退火点 548°C、应变点 511°C、软化点 715°C（ASTM C336/C338），用于区分
      Tg 与软化点。
    - 核对 Britannica glass：玻璃由熔体快速冷却、避免可见晶体形成；正文据此说明玻璃转变不是晶体熔化。
uncertainty: >-
  800–850 K 约合 527–577°C，文献常写 530–580°C；差异来自成分、测量方法和冷却速率。Tg 本身是动力学定义的区间，升温越快，表观
  Tg 越高；它不等于软化点或熔点。
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: "phase-diagram"
  profile: "glass"
  caption: "玻璃转变与黏性流动示意"
  note: "画面为玻璃转变的示意表达；透明质感、热晕和颜色均经艺术处理，不能据颜色判断温度；对象大小分别调整，非按比例。"
  scene: "temperature.object"
  color: "#82b7cc"
zone: 中温
tags:
  - 中温
  - 温度
  - 日常
---
## 它是什么

玻璃转变是玻璃在加热或冷却时表现出的动力学转变：低于转变温度时，玻璃表现为脆性固体；高于转变温度时，它成为黏度很高、可以缓慢结构弛豫的过冷液体。钠钙玻璃的转变温度通常写在 530–580 ℃，约合 803–853 K；这里采用约 800–850 K 的近似区间。[1] 它不是晶体熔化，玻璃没有像冰或金属那样的固定熔点。

## 怎样测到

玻璃转变温度常用示差扫描量热、热膨胀、黏度测量和热机械分析测定。不同方法对“转变点”的定义略有差异：有的取热容曲线台阶的中点，有的取黏度达到某一值的温度。[1] Pilkington 的技术通报列出退火点 548 ℃、应变点 511 ℃、软化点 715 ℃，这些是工程上的黏度参考点，和 Tg 并不完全等同。[2] Britannica 说明玻璃由熔体快速冷却、避免形成可见晶体，这解释了为什么玻璃转变表现为连续过渡而不是潜热峰。[3]

## 数值与口径

800–850 K 对应 527–577 ℃，是钠钙玻璃转变温度的近似区间。[1] 这个区间的下限接近应变点，上限接近退火点；真正的 Tg 取决于成分、羟基含量、冷却速率和测量频率。MDPI 综述给出 530–580 ℃，与这里采用的区间基本重合，只是端点圆整不同。[1] 把 Tg 写成“熔点”会误导：玻璃在 Tg 附近仍保持固态外形，只是原子可以开始较大范围重排；真正软化到可明显流动还要更高温度，Pilkington 的软化点为 715 ℃。[2]

## 常见误解

第一，把玻璃转变温度当成熔点；Tg 是动力学转变，熔化对应的是晶体或玻璃完全变为低黏度液体。第二，把退火点、应变点和软化点混为一个数；它们对应不同的黏度阈值。第三，认为所有玻璃的 Tg 都相同；钠钙玻璃、硼硅玻璃和石英玻璃的成分差异很大。第四，认为升温速率不影响 Tg；冷得快或热得快都会改变表观转变温度。[1][2]

## 与其他温区的关系

800–850 K 高于水的沸点 373 K，低于石英玻璃软化温度约 1,983 K和结晶石英熔点 1,986 K；它也与橡胶硫化的 423–453 K 处在同一中温工程段。[3] 与玻璃熔制的工作点约 1,525 K 相比，Tg 低约 700 K，说明玻璃在转变温度附近只是开始弛豫，离可浇铸的黏度还很远。[1] 这一区间是退火、钢化和热弯工艺必须精细控制的核心温区。
