---
id: elements.ru
title: 钌：第 44 个质子把 5s 再让出一枚，稳定性却在相邻一格突然回来
titleEn: Ruthenium
summary: 锝的 4d5 5s2 到钌的 4d7 5s1，构型再次重排；电离能从 7.276 eV 升到 7.361 eV，半径从 183 pm 收到 178 pm，而钌又有稳定同位素。
dimension: element
category: 过渡金属
displayValue: 'Z = 44 · [Kr] 4d⁷ 5s¹ 过渡金属'
quantity:
  value: 44
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Ru
  nameEn: Ruthenium
  period: 5
  group: 8
  block: d
  configuration: '[Kr] 4d7 5s1'
  valence: '4d7 5s1'
  level: B
related: [elements.tc, elements.rh, elements.fe, elements.explain-nuclear-stability, time.heavy-element-enrichment]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径，半径取计算值。
visual:
  scene: elements.shell-ladder
  caption: 4d 在钌这一格加到七枚，5s 退回半满。
  note: 阶梯只表示填充次序，不表示亚层的精确高度。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Ruthenium'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/44'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Ruthenium'
    url: 'https://www.rsc.org/periodic-table/element/44/ruthenium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
tags: [元素, 第五周期, d 区, 钌]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 44 个质子把电子放进了哪里

锝的价层是 4d5 5s2。第 44 个质子到来时，构型再次重排：新电子进入 4d，同时 5s 让出一枚，钌的基态成为 [Kr] 4d7 5s1。[1] 与锝相比，5s 从一对退回一枚，4d 从五枚加到七枚。这一次重排的驱动力仍是 4d 与 5s 能量接近：把电子放进 4d 能增加交换能收益，代价小于维持 5s2 的排斥。

从锝到钌，价层电子只多 1，但最外层电子数从两枚变回一枚，4d 则一下多了两枚。d 区中段的这种来回摆动说明，4d 与 5s 的能量差小到可以被交换能轻易翻转；写法上的“规矩”并不牢靠，真正稳定的是总能量最低的那个组合。

## 相对 Z−1：六项差值

- 第一电离能：钌 7.361 eV，锝 7.276 eV，增大 0.085 eV。[1]
- 原子半径：钌 178 pm，锝 183 pm，减小 5 pm（计算值口径）。[1]
- 电负性：钌 2.20，锝 1.90，增大 0.30。
- 价电子构型：锝为 4d5 5s2，钌为 4d7 5s1；新增电子进入 4d，5s 少了一枚。
- N/Z：钌-101 有 57 个中子，锝-98 有 55 个；质子加 1、质量数加 3，中子数增加 2。钌有稳定同位素。[2]
- 核来源：锝记作“s 过程（AGB 星的锝星）”，钌记作“r 过程”，来源从慢中子俘获为主换成了快中子俘获。[2]

主因是 4d 的继续填充：4d 电子彼此屏蔽，半径只减 5 pm，是这一带最小的收缩之一。电离能只增 0.085 eV，说明 4d7 5s1 与 4d5 5s2 的起始能量差很小，构型重排几乎不改变剥离难易。电负性却跳升 0.30，4d 电子增多让价层更紧，夺电子能力反而明显增强。

## 为什么这一格重要

4d7 5s1 让钌的化学以 +3 与 +4 为常见价态，也能走到更高的价态。[1] 它的 4d 电子数多，价层拥挤，因此成键时更倾向于共用电子而不是完全让渡，这一点与前面的锆、铌不同。核这边，钌有稳定同位素，[2] 从锝的无稳定同位素跨到钌的稳定，说明质子数 44 又回到了能够容纳稳定配比的位置；这是相邻元素之间最陡的一次稳定性反转，也提醒我们稳定性不是随质子数平滑变化的量。

## 它从哪里来

来源记作“r 过程”。[2] 快中子俘获在核心坍缩超新星的高中子通量里把核素一次推过多个质量数，钌正落在这条路径的产物区间。放回时间轴，它的物质与星族 III 超新星以及后续世代的核心坍缩事件相连，随后被抛入星际介质；重元素富集节点记录的正是这种由爆发事件驱动的加厚。

## 怎么继续走

往回看锝（/entry/elements/tc/），能看到“无稳定同位素”的那一格如何被夹在稳定元素之间；往前看铑（/entry/elements/rh/），能看到 4d 继续加电子、5s 仍是半满。想把稳定性反转讲清楚，去读核稳定性解释页。
