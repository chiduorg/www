---
id: elements.p
title: 磷：第 15 个质子填出 3p 半满，电离能跳升 2.335 eV
titleEn: Phosphorus
summary: 硅的 3p 有两个电子，磷加到三个，恰好半满；电离能从 8.152 eV 升到 10.487 eV，半径从 111 pm 缩到 98 pm，成键转向 P₄。
dimension: element
category: 非金属
displayValue: 'Z = 15 · [Ne]3s²3p³'
quantity:
  value: 15
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: P
  nameEn: Phosphorus
  period: 3
  group: 15
  block: p
  configuration: 1s2 2s2 2p6 3s2 3p3
  valence: 3s2 3p3
  level: A
related: [elements.si, elements.s, time.heavy-element-enrichment, elements.explain-nuclear-stability]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 磷的 3p 达到半满，三条 p 轨道各占一个电子。
  note: 半满不是填满，第四个 p 电子开始就要成对。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: "PubChem Element Summary: Phosphorus"
    url: https://pubchem.ncbi.nlm.nih.gov/element/15
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: "Periodic Table: Phosphorus"
    url: https://www.rsc.org/periodic-table/element/15/phosphorus
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第三周期, p 区, 半满]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 15 个质子把电子放进了哪里

硅的价层是 3s²3p²，第十五个质子使 3p 达到 3s²3p³：三个 p 电子各占一条轨道、自旋平行，形成半满[1]。半满带来的交换能降低使这一格额外稳定，第一电离能因此从 8.152 eV 跳升到 10.487 eV，增幅 2.335 eV[3]。磷仍在第三周期，3d 空着但尚未参与；4s 与 3d 的交错要到第四周期才登场，5s/4d 与 6s/4f/5d 的交错更是后面周期的事。半满不是“填满”，它只让 p 亚层达到对称分布；硫再加一个电子，就必须开始成对。这一步的增幅超过硅那一格，说明半满的稳定作用不只是核电荷增加的结果。

## 相对 Z−1：六项差值

- 第一电离能：10.487 eV，硅为 8.152 eV，增大 2.335 eV。[3]
- 原子半径：98 pm（计算值），硅为 111 pm（计算值），减小 13 pm。[1]
- 电负性：2.19（Pauling），硅为 1.90，增大 0.29。
- 价电子构型：3s²3p² → 3s²3p³，3p 达到半满。
- N/Z：质量数 31，中子数 31−15=16；硅为 28−14=14，中子数增加 2。
- 核来源：硅为“氧燃烧与硅燃烧”，磷增加“中子俘获”，多了一条慢中子路径。

电离能跳升的主因是半满带来的交换能稳定，半径缩小 13 pm 只是次要的空间表现；如果只看核电荷，无法解释为什么这一步的增幅比硅那一步还大。中子俘获路径的出现说明磷的核来源已经不完全是恒星燃烧，慢中子俘获开始参与。电子壳层的“半满”和核合成的“支路”同时出现在这一格，是第三周期里少见的双重转折。

## 为什么这一格重要

半满的 3p 让磷倾向形成三个共价键，白磷以 P₄ 四面体分子存在，每个磷与三个邻居相连，剩下一对孤对电子占据第四个方向。[2] 这与硅的无限网络形成对照：同样是 p 电子，数目不同就把“连续网络”换成了“有限分子”。磷还有一条与生命相关的线索：核酸骨架与能量代谢都依赖磷酸基团，但那属于化学演化，不是这一格的电离能能解释的。³¹P 是唯一稳定同位素，核的宽容在这里明显收窄，与硫的四种稳定同位素形成鲜明反差。

## 它从哪里来

磷的来源写作“氧燃烧、硅燃烧与中子俘获”。前两者是恒星核心的燃烧链，后者是慢中子俘获：铁峰以下的核可以在氦燃烧与碳燃烧阶段通过中子俘获缓慢加重。时间轴上的重元素富集节点把这条路径与代际恒星联系起来：第一代恒星造出种子核，后续恒星的 s 过程在其上继续加中子，再随星风或超新星回到介质。磷的丰度低于硅和硫，原因在于它更多依赖支路而非主燃烧链；这条支路的效率由中子密度决定，而不是由温度单独决定。s 过程的中子密度低，每次俘获之间隔着 β 衰变，因此它只能沿稳定线附近缓慢爬行，产量有限。

## 怎么继续走

往上是硅：3p² 的四面体网络；往下是硫：3p⁴ 开始成对，第一电离能反而微降到 10.360 eV。想弄清半满为什么特别稳、成对为什么要付出代价，去看核稳定性解释页里关于壳层与配对的讨论。时间轴的重元素富集节点补上来源一侧：中子俘获如何在代际恒星之间把磷的比例慢慢抬高。
