---
id: elements.al
title: 铝：3p 的第一个电子比 3s 更松，电离能反而低于镁
titleEn: Aluminium
summary: 镁的 3s 已满，铝把电子放进 3p；3p 屏蔽更强，电离能从 7.646 eV 降到 5.985 eV，半径仍从 145 pm 缩到 118 pm。
dimension: element
category: 主族金属
displayValue: 'Z = 13 · [Ne]3s²3p¹'
quantity:
  value: 13
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Al
  nameEn: Aluminium
  period: 3
  group: 13
  block: p
  configuration: 1s2 2s2 2p6 3s2 3p1
  valence: 3s2 3p1
  level: A
related: [elements.mg, elements.si, time.pop-iii-supernovae, elements.explain-shielding]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 铝跨入 3p，价层从满 3s 变成 3s2 3p1。
  note: p 轨道比 s 轨道更伸展，同一层内的能量并不相同。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: "PubChem Element Summary: Aluminium"
    url: https://pubchem.ncbi.nlm.nih.gov/element/13
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: "Periodic Table: Aluminium"
    url: https://www.rsc.org/periodic-table/element/13/aluminium
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第三周期, p 区, 主族金属]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 13 个质子把电子放进了哪里

镁的价层是 3s²，第十三个质子使新增电子进入 3p，铝的构型写成 3s²3p¹[1]。3p 与 3s 同属第三能层，但轨道形状不同：3p 电子在核附近出现的概率更小，被 3s 与内层电子屏蔽得更充分，因此能量更高、束缚更松。这就是第三周期第一次出现“半径继续缩小、第一电离能却下降”的组合，铝的电离能只有 5.985 eV，比镁的 7.646 eV 低 1.661 eV[3]。这一步不涉及 4s 与 3d 的次序问题，那是第四周期开头的故事；铝演示的是同一能层内 s 与 p 的差别。

## 相对 Z−1：六项差值

- 第一电离能：5.985 eV，镁为 7.646 eV，减小 1.661 eV。[3]
- 原子半径：118 pm（计算值），镁为 145 pm（计算值），减小 27 pm。[1]
- 电负性：1.61（Pauling），镁为 1.31，增大 0.30。
- 价电子构型：3s² → 3s²3p¹，新增电子进入 3p。
- N/Z：质量数 27，中子数 27−13=14；镁为 24−12=12，中子数增加 2。
- 核来源：镁为“碳燃烧与氖燃烧”，铝在此基础上加入“宇宙线散裂”，路径多出一条。

电离能下降的主因是 3p 的屏蔽与能量位置，而不是核电荷不足；半径仍在收缩，说明新增核电荷确实把整体电子云拉紧，只是拉不住最外那个 3p 电子。电负性上升与半径收缩同向，属于伴随结果。把三项放在一起看，铝这一格提醒你：价电子数增加不等于更难失去，轨道类型有时比数目更有决定权。

## 为什么这一格重要

一个 3p 电子让铝呈 +3 价，但它的化合物以明显的共价性著称：Al³⁺ 电荷高、半径小，会强烈极化邻近的阴离子，使成键偏离纯离子模型。金属铝表面会生成致密的氧化层，把内部金属与外界隔开，这一性质来自铝与氧的强结合，而不是来自“活泼”本身。[2] 铝只有一种稳定同位素 ²⁷Al，这在轻元素中相当少见，说明 13 个质子的稳定核选项很窄。把铝放在镁后面看，3p 电子的松散既解释了它较低的电离能，也解释了它为什么容易参与成键而不是单纯丢电子。铝的 +3 价与较小的半径，使它在地壳矿物中几乎总是与氧形成配位结构，而不是以自由离子存在。

## 它从哪里来

铝的来源写作“碳/氖燃烧与宇宙线散裂”。前一条是恒星核心的燃烧链，后一条是高能宇宙线轰击星际物质、把较重核打碎的过程。铝因此有两条来源：恒星产物与散裂产物。时间轴上的第一代恒星与超新星节点负责把恒星造出的铝抛回星际介质，而散裂让铝在星际空间中持续得到补充。两条路径叠加，使铝的丰度高于仅靠燃烧链的预期，但仍远不及硅和镁——燃烧链的产量由恒星质量与燃烧持续时间决定，散裂则只提供薄薄一层。散裂贡献的大小取决于星际介质被轰击的程度，因此铝的丰度在不同区域会有差异。

## 怎么继续走

往上是镁：3s² 满壳，是铝电离能下凹的直接对照；往下是硅：3p 再加一个电子，第一电离能回升到 8.152 eV。想弄清 3p 为什么比 3s 松、屏蔽如何区分不同轨道，去看屏蔽与有效核电荷解释页。时间轴的超新星节点补上来源一侧：恒星造出的铝如何被抛回星际介质，再进入下一代恒星。
