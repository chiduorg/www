---
id: elements.si
title: 硅：第 14 个质子把 3p 补到两个，成键方式拐向四面体网络
titleEn: Silicon
summary: 铝的 3p 只有一个电子，硅补到两个；电离能从 5.985 eV 升到 8.152 eV，半径从 118 pm 缩到 111 pm，成键转向四面体网络。
dimension: element
category: 类金属
displayValue: 'Z = 14 · [Ne]3s²3p²'
quantity:
  value: 14
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Si
  nameEn: Silicon
  period: 3
  group: 14
  block: p
  configuration: 1s2 2s2 2p6 3s2 3p2
  valence: 3s2 3p2
  level: A
related: [elements.al, elements.p, time.pop-iii-supernovae, elements.explain-energy-levels]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 硅位于 p 区中段，3p 上已有两个电子。
  note: 这一步是金属侧与非金属侧的分界，阶梯只表示填充次序。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: "PubChem Element Summary: Silicon"
    url: https://pubchem.ncbi.nlm.nih.gov/element/14
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: "Periodic Table: Silicon"
    url: https://www.rsc.org/periodic-table/element/14/silicon
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第三周期, p 区, 半导体]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 14 个质子把电子放进了哪里

铝的价层是 3s²3p¹，第十四个质子使 3p 再加一个电子，硅的构型写成 3s²3p²[1]。p 电子从一增到二，屏蔽与交换能同时变化，有效核电荷明显上升，最外电子被拉得更紧，第一电离能从 5.985 eV 升到 8.152 eV[3]。硅正好站在 p 区从金属向非金属过渡的位置：左边铝以金属键为主，右边磷开始出现分子型结构。第三周期没有 3d 参与，4s 与 3d 的次序问题要到钾才出现；5s/4d、6s/4f/5d 的交错更是后面周期的事，但硅这一格已经把“价电子数增加如何改变成键”演示得很清楚。

## 相对 Z−1：六项差值

- 第一电离能：8.152 eV，铝为 5.985 eV，增大 2.167 eV。[3]
- 原子半径：111 pm（计算值），铝为 118 pm（计算值），减小 7 pm。[1]
- 电负性：1.90（Pauling），铝为 1.61，增大 0.29。
- 价电子构型：3s²3p¹ → 3s²3p²，3p 增加到两个电子。
- N/Z：质量数 28，中子数 28−14=14；铝为 27−13=14，中子数不变。
- 核来源：铝为“碳/氖燃烧与宇宙线散裂”，硅改为“氧燃烧与硅燃烧”，燃烧阶段明显上移。

这里的主因是 3p 电子数增加带来的有效核电荷上升：半径只缩小 7 pm，电离能却增加 2.167 eV，说明束缚能对电子云尺寸非常敏感。中子数不变只是质量数与原子序数同步加一的结果；真正变化的是核合成阶段，从碳/氖燃烧走到了氧燃烧与硅燃烧。一个在电子壳层，一个在核反应路径，两条线索在这一格同时拐弯，但彼此并不互为因果。

## 为什么这一格重要

硅的四个价电子使它倾向形成四个方向明确的共价键，晶体中是四面体网络，而不是金属里的离域电子海。[2] 这个网络把电子束缚在键上，要越过能隙才能导电，于是硅成为半导体：导电能力由掺杂和温度控制，而不是由自由电子数量决定。三种稳定同位素 ²⁸Si、²⁹Si、³⁰Si 说明 14 个质子可以配不同中子数，核层面的宽容与电子层面的“刚好四个键”是两回事。把铝和硅并排看，电离能回升不是逐渐变难失去电子，而是成键方式从“共享电子海”切到“定向共价”的转折。

## 它从哪里来

硅的来源写作“氧燃烧与硅燃烧”。氧燃烧把氧聚变成硅、硫一类核素，硅燃烧则发生在更大质量恒星演化的最后阶段，核心温度极高，光致解离与核重排同时进行，产物逼近铁峰。时间轴上的第一代恒星与超新星节点描述的正是这批产物被超新星抛回介质、逐代加浓的过程。硅的宇宙丰度很高，原因不是它特别稳定，而是氧燃烧与硅燃烧两条路径都通向它；相比之下，铝依赖散裂补充，磷依赖中子俘获支路，份额自然被拉开。硅燃烧一旦启动，核心只剩很短的时间就会塌缩，这也限制了硅以上的产物份额。

## 怎么继续走

往上是铝：3p¹ 代表金属侧；往下是磷：3p³ 达到半满，第一电离能继续升到 10.487 eV。想弄清 3p 成对后为什么束缚更紧、以及 3d 为何被推迟到第四周期，去看能级与填充次序解释页。时间轴的超新星节点补上来源一侧：硅燃烧造出的核怎样离开恒星核心，成为下一代的原料。
