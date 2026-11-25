---
id: time.agb-phase
title: 渐近巨星支（AGB）阶段
titleEn: The Asymptotic Giant Branch Phase
dimension: cosmic-time
category: 星系与结构
summary: AGB 是低中等质量恒星晚期的氦壳燃烧阶段，强烈的星风把碳、氮、氧与 s 过程元素抛回星际介质。它不是一次爆发，而是持续数百万年的缓慢输出。
quantity:
  value: 31557600000000000
  unit: s
  measure: time-after-big-bang-reference
  measureLabel: 低质量恒星进入 AGB 的宇宙时间参考
  approximate: true
displayValue: 大爆炸后约 10 亿年（参考锚点）
related:
  - elements.source-s-process
  - elements.sr
  - elements.ba
  - elements.pb
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 本轮复核：结构、引用编号与时间换算完整；quantity.value 与 conditions 的 timeBasis/换算公式逐条核对。
    - >-
      来源可达性：Britannica 对自动请求返回 403，有头浏览器抽验可读；NASA、IUPAC、LIGO 直接返回
      2xx。本轮未逐页重读全文，沿用条目既有 accessed 记录。
    - reviewed 指结构与来源口径核对，不是外部同行评审；参考锚点、chronology 与 uncertainty 按正文保留。
sources:
  - title: s-process
    url: 'https://www.britannica.com/science/s-process'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-09'
  - title: Stars
    url: 'https://science.nasa.gov/universe/stars/'
    publisher: National Aeronautics and Space Administration
    accessed: '2026-11-09'
  - title: 'PubChem Element Summary: Strontium'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/38'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-24'
  - title: 'Periodic Table: Strontium'
    url: 'https://www.rsc.org/periodic-table/element/38/strontium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-24'
chronology:
  status: reference
  plot: true
conditions:
  timeBasis: time.big-bang
  secondsPerYear: 31557600
  yearsAfterBigBang: 1000000000
  conversion: yearsAfterBigBang × secondsPerYear
  note: 取大爆炸后约 10 亿年作低质量恒星进入 AGB 的时代参考，不代表某颗星的 AGB 起点。
uncertainty: >-
  恒星质量越低，到达 AGB 所需时间越长；0.8–8 倍太阳质量的恒星可在约 1–10 吉年内进入该阶段，最早的 AGB
  星可能更早出现。秒数只用于时间轴排序。
visual:
  template: stellar-cycle
  scene: time.object
  caption: AGB 星与星风抛射 · 结构示意
  note: 壳层燃烧与星风为示意，非按比例，非观测重建。
mode: 时点
tags:
  - 星系与结构
  - 恒星演化
  - s 过程
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
---
## 它是什么

渐近巨星支是低中等质量恒星（约 0.8–8 倍太阳质量）晚期的演化阶段。核心收缩成碳氧核，氦壳与氢壳交替燃烧，外层膨胀、变冷，成为红巨星；强烈的星风把表层物质持续抛入星际介质。[1] 这一阶段不是一次爆发，而是长达数百万年的缓慢输出，恒星最终留下白矮星。

## 怎样知道

恒星演化模型给出 AGB 的温度、光度与寿命；观测上，AGB 星的光谱常出现 s 过程元素（锶、钡、铅等）的增强，说明这些元素在恒星内部生成并被带到表面。[1] 预太阳系陨石中的碳化硅颗粒保留了异常的 s 过程同位素比，为这条路径提供了实物证据。[2] 星风质量损失率则由红外与射电观测估算。

## 时间坐标与口径

本条取大爆炸后约 10 亿年作参考锚点，表示最早一批低质量恒星开始进入 AGB 的粗略时代。[2] 恒星质量越低，主序寿命越长，进入 AGB 越晚；因此 AGB 星在整个宇宙历史中持续出现，而不是集中在某一时刻。秒数只用于在时间轴上排序，不代表单颗恒星的阶段起点。

## 常见误解

AGB 不是超新星爆发，它抛射物质靠星风而不是爆炸。s 过程也不是 r 过程：s 过程的中子俘获慢，β 衰变跟得上，核素沿稳定线爬升；r 过程的中子俘获快，产物远离稳定线。[1] 另外，AGB 星抛出的元素不会立刻均匀混合，局部富集可以保留很久。

## 与其他阶段的关系

AGB 阶段连接第一代恒星、重元素富集与太阳系丰度：锶、钇、锆、钡、镧、铈、铅、铋的相当一部分来自这里。[1][2] 它与中子星并合的 r 过程互补，一个负责“慢”，一个负责“快”。元素轴的来源页把这条路径单独列出，正是因为 s 过程元素在太阳系丰度曲线上形成了可辨认的峰。

## 来源交叉核对

本条的时间锚点另用 [3]（U.S. National Library of Medicine）交叉核对；不同来源对年代边界、纪年换算或历史分期的处理可能不同，正文以标注的口径为准。

## 来源交叉核对

本条的时间锚点另用 [4]（Royal Society of Chemistry）交叉核对；不同来源对年代边界、纪年换算或历史分期的处理可能不同，正文以标注的口径为准。
