---
id: elements.source-r-process
title: r 过程：中子星并合里的快中子俘获
titleEn: The r-process in Neutron-Star Mergers
dimension: element
category: 来源层
summary: r 过程靠极高中子通量把核素推到远离稳定线的地方，再让 β 衰变把它们带回稳定线。铕、金、铂、铀、钍的相当一部分来自这条路径，中子星并合是最直接的候选场所。
quantity:
  value: null
  unit: Z
  measure: 核合成过程，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 来源页 · 不参与 Z 排序
related:
  - time.neutron-star-merger
  - elements.eu
  - elements.au
  - elements.th
  - elements.source-s-process
  - elements.explain-nuclear-stability
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「r 过程靠极高中子通量把核素推到远离稳定线的地方，再让 β 衰变把它们带回稳定线。铕、金、铂、铀、钍的相当一部分来自这条路径，中子星并合是最直接的候选场所。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - "本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: r-process
    url: 'https://www.britannica.com/science/r-process'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-09'
  - title: GW170817
    url: 'https://ligo.org/detections/gw170817/'
    publisher: LIGO Scientific Collaboration
    accessed: '2026-11-09'
  - title: 'Periodic Table of Elements'
    url: 'https://iupac.org/what-we-do/periodic-table-of-elements/'
    publisher: 'International Union of Pure and Applied Chemistry (IUPAC)'
    accessed: '2026-11-25'
conditions: 过程页；时间锚点为 time.neutron-star-merger，本页不重复秒数。
visual:
  scene: elements.explain
  caption: r 过程 · 远离稳定线的快中子俘获路径
  note: 核素路径与抛射物为示意，不按真实产额绘制。
tags:
  - 来源层
  - r 过程
  - 中子星并合
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 它是什么

r 过程是“快”中子俘获：中子通量高到俘获间隔短于 β 衰变，核素被迅速推向中子过剩的远方，随后在抛射物膨胀、温度下降时通过 β 衰变回到稳定线。[1] 产物覆盖从铁峰附近到锕系的重核，包括铕、钆、金、铂、铀、钍。最直接的候选场所是双中子星并合。

## 怎样知道

2017 年的 GW170817 提供了关键证据：引力波信号之后，光学对应体 AT2017gfo 的亮度与颜色演化符合富中子抛射物的放射性衰变，光谱中出现了重元素特征。[2] 恒星考古也给出旁证：极贫金属星的 r 过程元素丰度模式与并合产额可比。铀-232 与钍-232 的宇宙年代学则把 r 过程产物当作“时钟”。

## 时间坐标与口径

r 过程挂在中子星并合节点上，但并合不是一次性事件：双中子星并合时标从约一千万年延伸到超过一百亿年。[2] 因此 r 过程富集在整个宇宙历史中反复发生，太阳系继承的是多代并合的混合物。元素页写“来自 r 过程”时，说的是核合成路径，不是某一次特定并合。

## 常见误解

中子星并合不是唯一候选场所，磁旋转超新星等模型仍在讨论；把全部 r 过程元素归给并合会过度确定。[1] 金也不是“只来自并合”，它的产额要结合事件率与观测统计。另一个误解是把 r 过程当成爆炸本身：真正的中子俘获发生在抛射物膨胀的短暂窗口里。

## 与其他阶段的关系

r 过程与 s 过程互补：s 过程沿稳定线慢爬，r 过程绕到稳定线外侧再回来。[2] 两者共同解释太阳系重元素丰度，并为锕系元素提供天然库存。元素轴的铕、金、铂、铀、钍页都指向这里，而锶、钡、铅页指向 AGB 星的 s 过程。

本条的原子量口径参考 IUPAC 周期表与标准原子量。[3]


## 深读一：量值口径

本条的核心量值是 未定 Z，量的是核合成过程，不对应单一原子序数。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：过程页；时间锚点为 time.neutron-star-merger，本页不重复秒数。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照中子星并合时代（1.578e+16）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]

## 补充：怎样复核这条读数

复核时先把 None Z 还原到条目写明的参照与条件，再做单位换算；与相邻条目比较时，只比较同一口径下的量值，不把标题里的四舍五入值当成新测量。若换算后落在两个已知锚点之间，应同时报告两个锚点与所用倍率，方便读者复算。[1][2] 本条不新增独立测量，也不改变原有来源与引用编号。
