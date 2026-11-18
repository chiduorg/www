---
id: elements.pt
title: 铂：第 78 个质子触发 5d/6s 重排，把惰性变成催化
titleEn: 'Platinum: the 78th proton triggers a 5d/6s rearrangement'
dimension: element
category: 贵金属
summary: '铱到铂重排为 5d9 6s1；6s 压紧、5d 扩张，电离能微降 0.104 eV，半径只缩 3 pm，接近满壳的构型带来催化活性。'
quantity:
  value: 78
  unit: Z
  measure: 原子序数（质子数）
  approximate: false
  measureLabel: 原子序数 Z
displayValue: 'Z = 78 · [Xe]4f¹⁴5d⁹6s¹'
element:
  symbol: Pt
  nameEn: Platinum
  period: 6
  group: 10
  block: d
  configuration: '[Xe] 4f14 5d9 6s1'
  valence: '4f14 5d9 6s1'
  level: A
  predicted: false
related:
  - elements.w
  - elements.au
  - time.heavy-element-enrichment
  - elements.explain-shielding
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Platinum'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/78'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Platinum'
    url: 'https://www.rsc.org/periodic-table/element/78/platinum'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: 'NIST Atomic Spectra Database'
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径，半径取计算值。
visual:
  scene: elements.shell-ladder
  caption: 5d 接近填满 · 一个 6s 电子转入 5d
  note: 重排为基态构型示意，不表示 5d 与 6s 的实际能量曲线。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供，引用来源仅用于事实核对
tags:
  - 元素
  - 第六周期
  - 5d 区
  - 铂
---
## 第 78 个质子把电子放进了哪里

铱的价层是 4f14 5d7 6s2。第 78 个质子到来时，新增电子主要进入 5d，但铂的基态并不是简单的 5d8 6s2，而是 [Xe]4f14 5d9 6s1：一个 6s 电子被重新安排到 5d。[1] 这是第六周期 d 区后段典型的“6s/5d 重排”，相对论效应把 6s 压得又低又紧，5d 却被扩张，两者能量靠近，电子宁可选择 5d9 6s1 这种组合。

结果是铂的价层只剩一个 6s 电子，5d 却接近填满。第一电离能从铱的 9.121 eV 降到 9.017 eV，减小 0.104 eV，幅度很小；半径从 180 pm 减到 177 pm，只缩小 3 pm；电负性从 2.20 升到 2.28，增加 0.08。[3] 这些数字都很克制，说明 5d 与 6s 的重排把“多一个质子”的效果分散掉了：核电荷增加，但电子被重新分配到两个亚层，净变化被压平。

## 相对 Z−1：六项差值

- 第一电离能：9.017 eV；铱为 9.121 eV，减小 0.104 eV。[3]
- 原子半径：177 pm（计算值）；铱为 180 pm，减小 3 pm。[1]
- 电负性：2.28；铱为 2.20，增大 0.08。
- 价电子构型：铂为 4f14 5d9 6s1；铱为 4f14 5d7 6s2，新增电子进入 5d，同时一个 6s 电子转入 5d。
- N/Z：质量数 195，N=195−78=117；铱为 N=192−77=115，中子数增加 2。
- 核来源：铂为 r 过程；铱的 origin 未收录，无法做同口径比较。

主因是 5d 与 6s 的重排，而不是单纯的“多一个 5d 电子”。重排让 6s 只剩一颗，电离能略降；半径只减 3 pm，说明收缩已接近饱和；电负性小升 0.08，则反映核电荷增加仍在起作用，只是被重排削弱。中子数增加 2 是稳定线的伴随变化，与化学性质无直接关系。

## 为什么这一格重要

铂的 5d9 6s1 构型使它既不像典型的 s 区那样易失电子，也不像满壳层那样完全惰性。它可以在 +2 与 +4 之间切换，5d 电子参与成键，6s 电子则提供额外的可调性；这种“未满但接近满”的状态，正是铂能吸附并活化小分子的结构基础。[1] 催化不是神秘属性，而是 5d 空位与 6s 电子共同提供的电子转移通道。

铂的另一个事实是稳定同位素多：¹⁹⁰Pt、¹⁹²Pt、¹⁹⁴Pt 至 ¹⁹⁶Pt、¹⁹⁸Pt 共六种。[2] 六种稳定同位素意味着质子数 78 附近的核在增加中子时有较大容错空间，这与 5d 壳层的电子容错是两回事，却同样说明“接近满”并不等于“脆弱”。铂的化学惰性常被误读为不反应，实际上它只是把反应速率压得很低，一旦表面提供合适配位环境，5d 电子仍会参与。

## 它从哪里来

铂的核来源记为 r 过程。快中子俘获在短时间内把核推到远离稳定线的地方，随后一连串 β 衰变落回稳定线；铂的同位素正是在这条路径上形成的。r 过程需要中子星并合一类的中子通量，事件稀少，所以铂在宇宙中的丰度很低，地球上也就只能从少数矿藏中提取。

把铂接到时间轴的重元素富集节点上，可以理解它的“贵”不只是化学惰性，更是核合成上的稀缺：质量数 195 已经远离铁峰，s 过程难以到达，r 过程又依赖罕见事件。铂的稳定同位素多，说明这条路径在质量数 190 至 198 之间留下了较宽的稳定带；但稳定带宽不等于产量高，丰度仍由事件频率与每次抛射的质量决定。

## 怎么继续走

往前是铱，5d7 6s2 与铂的 5d9 6s1 形成鲜明对照；往后是金，5d 终于填满而 6s 仍只留一颗，重排走到极端。想弄清 6s 为什么会被相对论效应压紧、5d 为什么反而扩张，去看屏蔽与有效核电荷解释页；想弄清 4f14 的屏蔽不足如何把这一段整体收缩，去看镧系收缩解释页。铂这一页的关键词是“重排”，不是“惰性”。
