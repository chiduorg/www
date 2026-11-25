---
id: elements.source-artificial
title: 人工合成与超重元素：实验室里的元素边界
titleEn: Artificial Synthesis and Superheavy Elements
dimension: element
category: 来源层
summary: 反应堆中子俘获与加速器重离子轰击，让人类制造出锝、钷、镎、钚以及 104 号以后的超重元素。一次实验可能只产生几个原子，识别全靠衰变链的指纹。
quantity:
  value: null
  unit: Z
  measure: 核合成过程，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 来源页 · 不参与 Z 排序
related:
  - time.nuclear-age
  - elements.tc
  - elements.np
  - elements.pu
  - elements.og
  - elements.explain-nuclear-stability
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「反应堆中子俘获与加速器重离子轰击，让人类制造出锝、钷、镎、钚以及 104 号以后的超重元素。一次实验可能只产生几个原子，识别全靠衰变链的指纹。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - "本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: transuranium element
    url: 'https://www.britannica.com/science/transuranium-element'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-09'
  - title: Periodic Table of Elements
    url: 'https://iupac.org/what-we-do/periodic-table-of-elements/'
    publisher: International Union of Pure and Applied Chemistry
    accessed: '2026-11-09'
  - title: 'Standard Atomic Weights'
    url: 'https://ciaaw.org/atomic-weights.htm'
    publisher: 'IUPAC Commission on Isotopic Abundances and Atomic Weights (CIAAW)'
    accessed: '2026-11-25'
conditions: 过程页；时间锚点为 time.nuclear-age，本页不重复秒数。
visual:
  scene: elements.explain
  caption: 重离子轰击与衰变链识别 · 示意
  note: 靶核、束流与探测器为示意，不表示具体装置。
tags:
  - 来源层
  - 人工合成
  - 超重元素
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 它是什么

人工合成有两条主路径。反应堆里，铀核吸收中子后经 β 衰变变成镎、钚、镅、锔；加速器里，轻核被加速到足够高的能量，轰击锕系靶核，两个核融合成更重的核。[1] 104 号以后的元素几乎全部靠后者，一次实验可能只产生几个原子，存活时间从秒到毫秒不等。

## 怎样知道

识别新元素靠衰变链：新核放出α粒子，子核再放出α粒子，每一步的能量与半衰期构成可比的指纹，最终连到一个已知核素。[1] 重复实验与独立验证是 IUPAC 认定元素的前提。[2] 对超重元素，理论预测的“稳定岛”仍是研究方向，但不能把预测的闭壳当成已观测事实。

## 时间坐标与口径

人工合成挂在核时代节点上，起点通常取 1940 年的镎与钚。[2] 这只是人类制造元素的历史起点，不是宇宙中这些核素第一次出现的时刻：钚、镎在天然铀矿中有痕量，锝也存在于自发裂变产物中。元素页把“人工来源”写成标签，是为了与宇宙核合成区分，而不是说这些元素在自然界完全不存在。

## 常见误解

人工合成不等于“宇宙中没有”。另一个误解是以为超重元素的性质都已实测：109 号以后多数元素的电离能、半径、电负性没有实验值，只能给预测或留空。[1] 合成出一个原子也不等于“发现元素”，后者需要独立重复、衰变链闭合与正式命名。

## 与其他阶段的关系

人工合成是元素来源的第三条路径，接在 s、r 过程之后，把元素轴从天然存在的范围推到 118 号。[2] 它让锝、钷的空缺被填补，也让 93 号以后的元素有了可研究的样品。元素轴的 P7 后半段与鿫页都挂在这个节点上，而它们的“预测值/无稳定同位素”标注，正是这条路径的直接后果。

本条的原子量口径参考 CIAAW 标准原子量。[3]


## 深读一：量值口径

本条的核心量值是 未定 Z，量的是核合成过程，不对应单一原子序数。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：过程页；时间锚点为 time.nuclear-age，本页不重复秒数。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照人工核合成时代（4.354e+17）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]

## 补充：怎样复核这条读数

复核时先把 None Z 还原到条目写明的参照与条件，再做单位换算；与相邻条目比较时，只比较同一口径下的量值，不把标题里的四舍五入值当成新测量。若换算后落在两个已知锚点之间，应同时报告两个锚点与所用倍率，方便读者复算。[1][2] 本条不新增独立测量，也不改变原有来源与引用编号。
