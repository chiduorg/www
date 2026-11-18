---
id: elements.ar
title: 氩：第 18 个质子合上 3p，却把 3d 留成了空位
titleEn: 'Closed shell 18: argon and the filled 3s3p'
dimension: element
category: 闭壳节点
summary: 氩补上后 3s3p 全满；电离能从 12.968 eV 升到 15.760 eV，半径从 79 pm 缩到 71 pm，但 3d 仍空，第四周期先填 4s。
quantity:
  value: 18
  unit: Z
  measure: 原子序数（Z）
  approximate: false
displayValue: 'Z = 18 · [Ne]3s²3p⁶ 闭壳'
element:
  symbol: Ar
  nameEn: Argon
  period: 3
  group: 18
  block: p
  configuration: 1s2 2s2 2p6 3s2 3p6
  valence: 3s2 3p6
  level: A
  hub: true
  closedShell: 18
  periodStart: 11
  periodEnd: 18
related: [elements.cl, elements.k, time.pop-iii-supernovae, elements.explain-configuration]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 第三级台阶收尾，3s3p 全满，3d 空位留在台上。
  note: 阶梯只表示亚层容量与填充次序，不表示能级的精确高度。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: "PubChem Element Summary: Argon"
    url: https://pubchem.ncbi.nlm.nih.gov/element/18
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: "Periodic Table: Argon"
    url: https://www.rsc.org/periodic-table/element/18/argon
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第三周期, p 区, 闭壳, 氩]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 18 个质子把电子放进了哪里

氯的价层是 3s²3p⁵，第十八个质子补上最后一个 3p 电子，氩的构型写成 3s²3p⁶，第三能层的 s 与 p 都被填满[1]。这里有一个容易误读的地方：第三能层名义上还有 3d，氩并没有把它填上。3d 的能量高于 4s，电子间排斥把 3d 抬得更高，所以第十九个电子（钾）会先进入 4s，第四周期由此从“4s 先填、3d 后补”开始。氩的第一电离能因此升到 15.760 eV[3]，但它的闭壳只覆盖 3s3p 的八个价电子，而不是整个第三层；第三周期只有八个元素，原因正在这里。

## 相对 Z−1：六项差值

- 第一电离能：15.760 eV，氯为 12.968 eV，增大 2.792 eV。[3]
- 原子半径：71 pm（计算值），氯为 79 pm（计算值），减小 8 pm。[1]
- 电负性：无公认 Pauling 电负性；氯为 3.16，无法给出差值。
- 价电子构型：3s²3p⁵ → 3s²3p⁶，3p 补满。
- N/Z：质量数 40，中子数 40−18=22；氯为 35−17=18，中子数增加 4。
- 核来源：氯为“硅燃烧与中子俘获”，氩改为“硅燃烧与超新星”，超新星环节被明确写出；氩有三种稳定同位素 ³⁶Ar、³⁸Ar、⁴⁰Ar，质量数 40 取最丰的 ⁴⁰Ar。

电离能再升 2.792 eV，是补满空位后束缚变紧的直接结果；半径只缩小 8 pm，说明 3p 电子云已接近能被压缩的极限。中子数一次增加 4，是这一组里最大的跳变，提示氩的核来源不只是燃烧链的延续，还叠加了超新星抛射的贡献。主因在电子壳层，核来源的变化是同一格里的伴随线索，两者不该混为一谈。

## 为什么这一格重要

3p 填满后，氩的价层既没有空位也没有未成对电子，得失电子都要破坏闭壳，因此它几乎不形成化合物。[2] 电负性没有公认值，恰好说明“拉电子”这个描述对它不适用：没有空位可填，也没有松电子可给。更重要的后果在下一格：3d 空着而 4s 已可用，于是钾的第十九个电子进入 4s，钪之后才回头填 3d，第一过渡系由此出现。氩不是“第三层结束”，而是“第三层提前结束”，这个差别塑造了整张周期表的中段。也正因如此，氩在放电管里只发出特征谱线，不参与化学循环。

## 它从哪里来

氩的来源写作“硅燃烧与超新星”。硅燃烧是恒星核心最后的燃烧阶段，核心温度极高，产物接近铁峰；氩在其中以 α 过程与光致解离的副产物出现。真正把它抛进星际介质的是超新星：核心塌缩后外层被炸开，氩随抛射物进入下一代恒星与行星的原料。时间轴上的超新星节点解释了这个顺序：先由恒星造出重元素，再由超新星把它们散开。氩的丰度低于氖和硫，原因在硅燃烧阶段持续时间短、α 过程更偏向邻近的钙与钛，而不在化学惰性。这条链路还依赖恒星质量：只有足够重的恒星才能把核心烧到硅燃烧阶段。

## 怎么继续走

往上是氯：3p⁵ 只差一个电子，是理解“闭壳为何稳定”的最近参照；往下是钾：4s¹ 抢在 3d 前，第一电离能骤降到 4.341 eV，半径跳回 243 pm。想弄清 4s 与 3d 为什么交错、3d 空位如何把第四周期拉长成十八个元素，去看电子排布解释页。时间轴的超新星节点补上来源一侧：硅燃烧造出的氩怎样离开恒星核心，进入星际介质。
