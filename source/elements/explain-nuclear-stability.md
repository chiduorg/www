---
id: elements.explain-nuclear-stability
title: 核稳定性、幻数与衰变：元素页的另一半
titleEn: 'Nuclear stability, magic numbers and decay'
dimension: element
category: 解释层
summary: 壳层结构解释化学，核结构解释存在。中子质子比偏离稳定线、幻数带来的额外束缚、α 与 β 衰变的选择，共同决定一个元素有没有稳定同位素。
quantity:
  value: null
  unit: Z
  measure: 概念解释，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 解释页 · 不参与 Z 排序
related:
  - elements.he
  - elements.rn
  - elements.og
  - elements.explain-configuration
  - space.atom
  - mass.proton
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「壳层结构解释化学，核结构解释存在。中子质子比偏离稳定线、幻数带来的额外束缚、α 与 β 衰变的选择，共同决定一个元素有没有稳定同位素。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。
    - >-
      来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验
      Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有
      accessed 记录。
    - reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。
sources:
  - title: '21.1: Nuclear Structure and Stability'
    url: >-
      https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/21%3A_Nuclear_Chemistry/21.01%3A_Nuclear_Structure_and_Stability
    publisher: LibreTexts / OpenStax Chemistry 2e
    accessed: '2026-11-08'
  - title: NuDat 3.0
    url: 'https://www.nndc.bnl.gov/nudat3/'
    publisher: 'National Nuclear Data Center, Brookhaven National Laboratory'
    accessed: '2026-11-08'
  - title: transuranium element
    url: 'https://www.britannica.com/science/transuranium-element'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-08'
conditions: 核稳定性的定性解释；具体核素的半衰期与衰变分支以核数据数据库为准，本页不给单核素的精确数值。
visual:
  scene: elements.explain
  caption: 稳定线与中子质子比示意
  note: 稳定带为示意曲线，不按每个核素的实测数据绘制。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供，引用来源仅用于事实核对
tags:
  - 解释层
  - 核稳定性
  - 幻数
  - 衰变
---
## 稳定线不是一条直线

轻核在质子数等于中子数时最稳定，随着原子序数增大，库仑排斥增长得比核力更快，稳定核需要越来越多的中子来稀释正电荷。把稳定核素画在中子数对质子数的平面上，会得到一条先贴近对角线、后向右弯的稳定带。[1] 元素页里写“中子质子比”，说的就是该元素稳定同位素在这条带上的位置；偏离越远，越容易发生 β 衰变。

## 幻数与额外稳定

核壳层模型认为，质子数或中子数等于 2、8、20、28、50、82、126 时，核的束缚明显增强，这些数字被称为幻数。氦-4 的质子数和中子数都是 2，因此异常稳定；铅-208 的中子数为 126，是最重的双幻核之一。[1] 幻数解释了许多元素在宇宙丰度上的峰值，也解释了为什么某些远离稳定线的核仍然有可观测的半衰期。

## 衰变方式如何选择

α 衰变放出氦核，适合重核降低质量；β 衰变把中子与质子互相转换，适合调整中子质子比；γ 衰变只释放激发能，不改变核素种类；极重的核还可能自发裂变。[2] 一个核素常有多条分支，分支比随核素变化。元素页标注“放射性”时，必须说明是哪一种衰变占主导，否则读者无法判断它对丰度与化学行为的影响。

## 它如何改变你读元素页的方式

只看电子排布，会把 118 个元素当成同一种存在；加上核稳定性，才知道后半张周期表几乎全是放射性元素。[3] 读到锝与钷时，要问“为什么没有稳定同位素”；读到铀与钍时，要问“它们支撑了哪条衰变链”；读到 104 号以后时，要问“半衰期短到什么程度，数据是测出来的还是算出来的”。元素页的“核稳定性”一栏不是装饰，而是判断该元素能否在地球上留下库存的关键。

## 常见误解与边界

第一个误解是把“稳定”当成“永恒”；观测稳定只是半衰期远长于宇宙年龄，理论上仍可能衰变。第二个误解是把原子质量与核稳定性挂钩，认为越重越不稳定；实际上稳定线附近的重核仍可稳定，关键是中子质子比与壳层效应。第三个误解是把预测的幻数当成已验证事实：超重核的“稳定岛”目前只有理论支持与少量实验线索，元素页必须把预测与实测分开。


## 深读一：量值口径

本条的核心量值是 未定 Z，量的是概念解释，不对应单一原子序数。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：核稳定性的定性解释；具体核素的半衰期与衰变分支以核数据数据库为准，本页不给单核素的精确数值。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照氦：第 2 个质子把 1s 填满，第一周期在这里收尾（2）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
