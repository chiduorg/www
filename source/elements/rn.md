---
id: elements.rn
title: 第六层结束：氡与 4f5d6s6p 闭壳
titleEn: 'Closed shell 86: radon and the filled 4f5d6s6p'
dimension: element
category: 闭壳节点
summary: '第六周期第一次插入 4f 的十四个位置，镧系收缩让 6s 电子被拉得更紧。氡是这个长周期的终点，也是唯一一个主要由放射性衰变链供应的闭壳元素。'
quantity:
  value: 86
  unit: Z
  measure: 原子序数（质子数）
  approximate: false
  measureLabel: 原子序数 Z
displayValue: 'Z = 86 · [Xe]4f¹⁴5d¹⁰6s²6p⁶ 闭壳'
element:
  symbol: Rn
  nameEn: Radon
  period: 6
  group: 18
  block: p
  configuration: 1s2 2s2 2p6 3s2 3p6 3d10 4s2 4p6 4d10 5s2 5p6 4f14 5d10 6s2 6p6
  valence: 4f14 5d10 6s2 6p6
  hub: true
  closedShell: 86
  periodStart: 55
  periodEnd: 86
  predicted: false
  level: C
related:
  - elements.at
  - elements.xe
  - elements.og
  - elements.explain-lanthanide-contraction
  - elements.explain-nuclear-stability
  - time.u238-half-life
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: lanthanide contraction
    url: 'https://www.britannica.com/science/lanthanide-contraction'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-08'
  - title: '6.4: Electronic Structure of Atoms (Electron Configurations)'
    url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/06%3A_Electronic_Structure_and_Periodic_Properties/6.04%3A_Electronic_Structure_of_Atoms_(Electron_Configurations)'
    publisher: 'LibreTexts / OpenStax Chemistry 2e'
    accessed: '2026-11-08'
  - title: 'NuDat 3.0'
    url: 'https://www.nndc.bnl.gov/nudat3/'
    publisher: 'National Nuclear Data Center, Brookhaven National Laboratory'
    accessed: '2026-11-08'
conditions: 以中性基态原子的原子序数 Z 为坐标；本页讨论 4f、5d、6s、6p 构成的第六周期，不把氡的短半衰期同位素当作单一稳定核素。
visual:
  scene: elements.shell-ladder
  caption: 第六级台阶 · 4f 插入后的长周期
  note: 阶梯宽度表示容量，镧系收缩的实际幅度不按比例绘制。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供，引用来源仅用于事实核对
tags:
  - 闭壳节点
  - 第六周期
  - 氡
  - 镧系收缩
---
## 这一层在哪里结束

第六周期的填充次序是 6s→4f→5d→6p。铯、钡先占 6s，镧到镱补 4f，镥到汞补 5d，铊到氡补 6p。[2] 氡的构型写作 [Xe]4f¹⁴5d¹⁰6s²6p⁶，第一电离能约 10.7 eV，比氙更低。它的特殊之处不在价层，而在内层：4f 十四个电子对核电荷的屏蔽很不完全，导致整个第六周期的原子半径比预期更小，这就是镧系收缩。[1]

## 下一层为什么从这里开始

第八十七号元素钫多一个质子，电子进入 7s。钫的第一电离能约 4.1 eV，与铯相近，说明 7s 电子同样被内层屏蔽得厉害。[2] 紧接着 7s 之后要填的是 5f 与 6d，锕系在这里插入，使第七周期同样被拉长到三十二个元素。闭壳再一次成为“下一段复杂结构的起点”，而不是一个干净的结束。

## 相对 Z−1：六项差值

- **第一电离能**：氡 10.748 eV，砹 9.318 eV，升高 1.430 eV；6p 补满后有效核电荷继续增加。[1]
- **原子半径**：氡 120 pm，砹 127 pm，收缩 7 pm（同为计算半径口径）。[1]
- **电负性**：两者都是 2.20，差值 0.00；Pauling 尺度在这一段已经分辨不出变化。[2]
- **价电子构型**：6s²6p⁵ → 6s²6p⁶，6p 亚层闭壳。[2]
- **N/Z**：²²²Rn 为 136/86≈1.581，²¹⁰At 为 125/85≈1.471，升高约 0.111；两者都无稳定同位素。[3]
- **核来源**：砹主要来自铀-235 衰变链与人工合成，氡由铀系、锕系、钍系三条链共同供应。[3]

## 这些元素从哪里来

氡几乎不作为恒星核合成的直接产物存在，它主要来自铀-238、铀-235 与钍-232 三条放射性衰变链的中间步骤。[3] 镭-226 放出α粒子后变成氡-222，氡再继续衰变。因此氡的“来源”不是宇宙尺度的一次性制造，而是地球内部持续进行的核衰变。这条线索应当挂在时间轴的铀-238 半衰期节点上，而不是挂在超新星节点上。

## 怎么用这个节点继续走

往上是氙，往下是最后一个闭壳节点鿫（Z=118）。想弄清 4f 为什么屏蔽不良、为什么汞在常温下是液体，去看镧系收缩解释页；想弄清为什么氡没有稳定同位素，去看核稳定性解释页。氡这一页把两件事绑在一起：壳层结构解释化学行为，核结构解释它为什么留不住。


## 深读一：量值口径

本条的核心量值是 86 Z，量的是原子序数 Z。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：以中性基态原子的原子序数 Z 为坐标；本页讨论 4f、5d、6s、6p 构成的第六周期，不把氡的短半衰期同位素当作单一稳定核素。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照砹：第 85 个质子补到 6p⁵，卤素走到最不稳定的一端（85）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
