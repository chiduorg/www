---
id: elements.explain-configuration
title: 电子排布：为什么顺序是 1s→2s→2p→3s→3p→4s→3d
titleEn: Electron configuration and the Aufbau order
dimension: element
category: 解释层
summary: '元素的性质不是按质子数平铺，而是按电子填入的次序分段。这一页解释 Aufbau 次序、4s 与 3d 的交错，以及铬、铜、钆、铂为什么是例外。'
quantity:
  value: null
  unit: Z
  measure: 概念解释，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 解释页 · 不参与 Z 排序
related:
  - elements.he
  - elements.ar
  - elements.kr
  - elements.explain-energy-levels
  - elements.explain-periodic-law
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: '6.4: Electronic Structure of Atoms (Electron Configurations)'
    url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/06%3A_Electronic_Structure_and_Periodic_Properties/6.04%3A_Electronic_Structure_of_Atoms_(Electron_Configurations)'
    publisher: 'LibreTexts / OpenStax Chemistry 2e'
    accessed: '2026-11-08'
  - title: 'Atomic Spectra Database'
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-08'
  - title: Periodic table
    url: 'https://www.britannica.com/science/periodic-table'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-08'
conditions: 解释层的普遍规则；具体元素的实测构型以光谱数据为准，异常构型不强行套用单一规则。
visual:
  scene: elements.explain
  caption: 亚层容量与填充次序示意
  note: 次序为规则示意，不表示能级的精确能量间隔。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供，引用来源仅用于事实核对
tags:
  - 解释层
  - 电子排布
  - Aufbau
---
## 规则本身

电子排布的基本约定是：中性原子按能量从低到高填入轨道，每个轨道容纳两个自旋相反的电子。这条规则通常叫 Aufbau 原理，配合每个亚层的容量（s 二、p 六、d 十、f 十四），就能写出大多数元素的基态构型。[1] 于是次序呈现为 1s、2s、2p、3s、3p、4s、3d、4p、5s、4d、5p、6s、4f、5d、6p、7s、5f、6d、7p。周期表每一行的长度，正是这段次序被切开的结果。

## 4s 为什么排在 3d 前面

如果只看主量子数，4s 应当高于 3d。但真实能量由主量子数与角量子数共同决定，4s 电子穿透内层的能力更强，受到的屏蔽更少，能量反而略低于 3d。因此钾的第十九个电子进入 4s，而不是 3d。[2] 这一交错只在相邻能级接近时明显；到了更重的元素，5s 与 4d、6s 与 4f/5d 都出现类似情况，周期表的长短行结构由此形成。

## 异常构型不是例外，而是竞争的结果

铬应为 3d⁴4s²，实测是 3d⁵4s¹；铜应为 3d⁹4s²，实测是 3d¹⁰4s¹。原因在于半满与全满的 d 亚层在交换能上更有利，能量差足以把 4s 的一个电子挪进 3d。[2] 类似的还有钆的 4f⁷5d¹、铂的 5d⁹6s¹。这些不是“规则错了”，而是规则的前提——能级次序固定——在这些元素里不再严格成立。写元素页时必须用实测构型，不能为了整齐而改写。

## 它如何改变你读元素页的方式

知道填充次序后，“同周期从左到右”不再是十九个并列的格子，而是“同一层里电子一个个补位”的过程。看到钠，你会想到 3s 刚开始；看到氩，你会想到 3p 已满而 3d 空着；看到铁，你会想到 3d 正在补，而 4s 已经占住。元素页里“相对 Z−1 多了什么”这一栏，本质上就是问：这一颗电子进了哪个亚层，它改变的是价层还是内层。

## 常见误解与边界

最常见的误解是把排布次序当成能级高低的绝对次序。4s 与 3d 的先后会随原子序数变化，在过渡系中后期，3d 反而低于 4s，这解释了为什么过渡金属先失 4s 电子。第二个误解是把规则当成预测一切的公式：超重元素的构型要靠相对论计算，实验数据极为有限。[3] 第三个误解是把构型相同当成性质相同——价层相同才相近，内层填充不同会通过屏蔽改变有效核电荷。
