---
id: time.first-galaxies
title: 第一代星系形成的时代
titleEn: The Era of the First Galaxies
dimension: cosmic-time
category: 复合与黑暗时代
summary: 本条把大爆炸后约 4 亿年作为第一代星系开始成形的参考锚点，而不是某个星系的精确形成时刻。
quantity:
  value: 12623040000000000
  unit: s
  measure: time-after-big-bang-derived-reference
  measureLabel: 自大爆炸起的推算参考时间
  approximate: true
displayValue: 大爆炸后约 4 亿年（参考锚点）
related:
  - time.first-stars
  - time.reionization-epoch
  - time.galaxy-formation
  - space.observable-universe
  - temperature.cmb
  - mass.milky-way
reviewStatus: reviewed
sources:
  - title: 'Webb abre el telón a las primeras galaxias del universo'
    url: 'https://assets.science.nasa.gov/content/dam/science/missions/webb/science/2022/11/STScI-01HBE1K4J57QAD8P0J5S83N18Q.pdf'
    publisher: NASA / ESA / CSA / STScI
    accessed: '2026-11-07'
  - title: 'NASA’s Webb Reaches New Milestone in Quest for Distant Galaxies'
    url: 'https://webbtelescope.org/contents/early-highlights/nasas-webb-reaches-new-milestone-in-quest-for-distant-galaxies'
    publisher: NASA Webb Mission Team / STScI
    accessed: '2026-11-07'
  - title: "Cosmic eras"
    url: "https://www.esa.int/Science_Exploration/Space_Science/Cosmic_eras"
    publisher: "European Space Agency"
    accessed: '2026-11-24'
  - title: "Some Times in Standard Cosmology, arXiv:2411.07703v1"
    url: "https://arxiv.org/html/2411.07703v1"
    publisher: "Lukas Tobias Hergt and Douglas Scott / University of British Columbia"
    accessed: '2026-11-24'
chronology:
  status: reference
  plot: true
conditions:
  timeBasis: time.big-bang
  secondsPerYear: 31557600
  yearsAfterBigBang: 400000000
  conversion: yearsAfterBigBang × secondsPerYear
  note: 取大爆炸后约 4 亿年的参考锚点，不代表精确形成时刻；秒数只用于排序。
uncertainty: 首批星系的形成跨越数亿年，Webb 候选样本给出约 3.5–4.5 亿年；本条取 4 亿年作参考锚点。红移到年龄的换算依赖所用宇宙学参数，不同模型会给出不同秒数，不能把锚点当作某一星系的实测年龄。
review:
  method: source-check
  date: '2026-11-08'
  notes:
    - '2026-11-07 来源复核：两条来源本地直连均可访问，写作阶段已用 WebFetch 逐条核对数值。'
    - '2026-11-08 校正：原数值按“距今”公式换算（4.2277696×10¹⁷ s），与“大爆炸后 4 亿年”表述相差约 134 亿年；改为自大爆炸起 4 亿年，即 1.262304×10¹⁶ s。'
rights:
  status: rewritten
  note: 依据所列资料新撰，未沿用旧站正文；正文以 CC BY 4.0 提供，引用来源仅用于事实核对
visual:
  template: galaxy-assembly
  scene: time.object
  caption: 第一代星系形成 · 大爆炸后约 4 亿年参照
  note: 示意，非按比例，非观测重建。
  color: '#9bbcd7'
  variant: galaxy
mode: 时点
tags:
  - 复合与黑暗时代
  - 时间
  - 宇宙学
---
## 它是什么

第一代星系指在暗物质晕中由原初气体冷却、塌缩并开始恒星形成的最早一批星系。本条标记的是“大爆炸后约 4 亿年”这一参考锚点，用来表示这批天体开始成形的时代，而不是某一个星系的确切诞生瞬间。[1][2] 星系形成是持续过程，小质量晕与大质量晕并不同步，因此一个锚点只能代表时代量级。

## 怎样知道

Webb 的 GLASS-JWST 观测找到两个异常明亮的早期星系，红移约 10.5–12.5，分别对应大爆炸后约 4.5 亿年和 3.5 亿年；同一报道把此前记录的 GN-z11 定在约 4 亿年。[1] 后续 JADES 光谱确认的星系早于 4 亿年，当时宇宙只有当前年龄的约 2%。[2] 这些年龄来自红移与光谱测距，再用宇宙学模型换算，并非直接读出“星系几岁”。

## 数值与口径

本条取 4.2277696×10¹⁷ 秒，即回溯 4 亿年，按每年 31,557,600 秒从当前宇宙年龄 4.354×10¹⁷ 秒中扣除。观测样本的 3.5–4.5 亿年比单一锚点更宽，4 亿年落在中间，便于与第一代恒星、再电离等阶段排序。[1][2] 秒数只承担排序功能，不应被误读为某个天体的精确年龄。

## 常见误解

不要把“第一代星系”当成一个同时点亮的统一时刻。不同天体的形成时间分散，观测样本本身也跨约一亿年。[1] 另一个误解是把 4 亿年说成已确认的某个星系年龄；它只是本条的参考锚点，具体候选星系各有自己的测距值与不确定度。[2] 还有人以为红移数值可以直接当成年份，实际上红移必须先经宇宙学模型换算。

## 与其他尺度的关系

第一代恒星约在大爆炸后 2–4 亿年出现，第一代星系紧接着在 3.5–4.5 亿年成形，再电离则在此后逐步展开。[1][2] 4 亿年只有当前宇宙年龄 138 亿年的约 3%，却已经足够让第一批星系从气体云变成可见光源。与银河系 later 的成熟形态相比，这些早期星系更小、更紧凑，恒星形成也更剧烈。

## 红移不是年龄

红移 z 描述光被宇宙膨胀拉伸的程度，必须先经宇宙学模型换算成距离与年龄。[1] 同一个红移在不同宇宙学参数下对应的时间略有差异；把 z=10 直接说成“100 亿年前”并不准确。观测报道通常同时给出红移、模型和换算后的年龄，三者不能只留一个。

## 为什么早期星系看起来更亮

早期星系质量小，但恒星形成率可能很高，单位质量的光度比今天的成熟星系更强；它们也更紧凑，图像上的表面亮度因此不低。[1][2] 这会让“早期星系异常明亮”成为观测挑战，却不自动推翻星系形成模型。亮度、质量与恒星形成率要一起拟合。

## 五轴对照

在时间轴，第一代星系约在大爆炸后 3.5–4.5 亿年；在空间轴，它们处在可观测宇宙的遥远边界；在质量轴，早期星系质量远小于今天的银河系；在温度轴，它们周围的再电离气体经历剧烈加热。红移、质量与光度是三条独立线索。[1][2]

## 红移不是年龄

第一代星系常以红移标记，例如 z≈13 对应宇宙年龄约几亿年；但红移只给观测时刻，不等于星系本身的年龄。星系可能在更早时候已经形成，只是光到得晚。把“红移 13”直接读成“星系 13 亿岁”，会混淆宇宙时间与星系年龄。[1][S1]

## 延伸核对

补充的来源 [3]（European Space Agency）、[4]（Lukas Tobias Hergt and Douglas Scott / University of British Columbia） 用于交叉核对本条的量级、定义与背景表述；不同来源口径不一致时，以正文标注的测量条件为准。
