---
id: elements.fe
title: 铁：第 26 个质子填进 3d，也把恒星推到聚变终点
titleEn: Iron
summary: 铁让电子进入 3d、打破半充满，得到 3d6 4s2；电离能继续上升，而铁峰让核聚变在这里失去能量回报，元素轴在这里分成两段。
dimension: element
category: 过渡金属
displayValue: 'Z = 26 · [Ar]3d⁶4s²'
quantity:
  value: 26
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Fe
  nameEn: Iron
  period: 4
  group: 8
  block: d
  configuration: 1s2 2s2 2p6 3s2 3p6 3d6 4s2
  valence: 3d6 4s2
  level: A
related:
  - elements.mn
  - elements.co
  - time.pop-iii-supernovae
  - time.heavy-element-enrichment
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 3d 台阶越过半充满，铁峰就在这一格附近。
  note: 阶梯只表示亚层容量与填充次序，不表示能级的精确高度。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - >-
      本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自
      CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。
    - >-
      来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验
      Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有
      accessed 记录。
    - reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。
sources:
  - title: 'PubChem Element Summary: Iron'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/26'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Iron'
    url: 'https://www.rsc.org/periodic-table/element/26/iron'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: 'Iron: element data'
    url: 'https://periodic-table.rsc.org/element/26/iron'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-24'
tags:
  - 元素
  - 第四周期
  - 铁峰
  - 铁
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
---
## 第 26 个质子把电子放进了哪里

锰的价层是 3d5 4s2，铁多出的电子进入 3d，得到 [Ar] 3d6 4s2。[1] 这是 3d 第一次在已经半充满的基础上继续填：五个 3d 轨道里，有一个被迫容纳第二个电子，半充满被打破，体系付出成对能。4s 保持满员，没有参与这次重排。

这一步的屏蔽变化很微妙：新增的 3d 电子在同层内，对最外层 4s 的屏蔽不完全，所以有效核电荷上升得比主族元素更明显。结果是铁的第一电离能继续上升，半径继续收缩，但幅度都比锰那一步小。铁的价层从此不再是“半充满的漂亮构型”，而是一个必须靠成键来重新分配电子的构型。

## 相对 Z−1：六项差值

- 第一电离能：铁 7.903 eV，锰 7.434 eV，增大 0.469 eV。[3]
- 原子半径：铁 156 pm，锰 161 pm，减小 5 pm（计算值口径）。[1]
- 电负性：铁 1.83，锰 1.55，增大 0.28。
- 价电子构型：锰为 3d5 4s2，铁为 3d6 4s2；新增电子进入 3d，4s 不变。
- N/Z：铁-56 有 30 个中子，锰-55 也有 30 个；质子增加 1、质量数也增加 1，中子数不变。铁有四种稳定同位素 ⁵⁴Fe、⁵⁶Fe、⁵⁷Fe、⁵⁸Fe，质量数 56 取最丰的 ⁵⁶Fe。
- 核来源：锰记作“硅燃烧与超新星”，铁记作“硅燃烧终点与超新星（铁峰）”，来源被标成燃烧的终点。

主因是 3d 成对：铁的第一个 3d 电子对打破半充满，成对能抵消了一部分核电荷增加的吸引，所以电离能的增幅 0.469 eV 小于锰的 0.667 eV。电负性上升 0.28 是本段最大的一次，说明 3d6 让原子更愿意吸引电子，这与“半充满被打破、体系更倾向通过成键重新分配电子”是同一件事的两面。中子数不变是质量数与质子数同步增加的结果；“铁峰”三个字则是核合成给出的判断，不是构型给出的。

## 为什么这一格重要

3d6 4s2 让铁有四个未成对 3d 电子，铁原子因此是顺磁的；在固体中，这些 3d 电子之间的交换作用还能让铁表现出铁磁性。[2] 但铁真正特殊的地方在核：铁峰附近的核每个核子的结合能达到最高点，无论继续聚变还是裂变都不再释放能量。于是恒星核心一旦被硅燃烧推到铁，能量供应就断了，核心只能在重力下坍缩——这正是超新星爆发的起点。

把这两件事放在一起看，铁的第 26 个质子同时改写了电子层和恒星命运：3d 的成对让它的化学有可变价与磁性，铁峰让它的核成为聚变链条的终点。元素页讨论铁，如果不谈“为什么到这里就停”，就只剩一张性质表。

## 它从哪里来

来源条目把铁记作“硅燃烧终点与超新星（铁峰）”。这不是修辞：硅燃烧的链条到铁峰附近就走到了能量上的尽头，继续聚变要吸能，所以铁在核心堆积，直到核心坍缩、超新星把外层抛出去。[1] 时间轴上，第三代恒星的超新星节点是铁进入星际介质的主要出口；原初核合成完全不产生铁，宇宙里的铁是一代代恒星烧出来又炸出来的。

丰度上，铁峰意味着硅燃烧的产物会在这里堆积，而不是继续被烧掉：前一步的产物不断汇入，后一步又几乎不存在，于是形成一个峰。后续世代恒星把这些铁混入星际介质，重元素富集节点记录的是累积过程；这也是为什么铁的来源页必须同时挂超新星与富集两个节点，而不能只讲其中一半。

## 怎么继续走

往回看锰（/entry/elements/mn/），能看到半充满的 3d5 4s2 为什么在铁这里被打破；往前看钴（/entry/elements/co/），能看到铁峰之后的元素如何靠超新星而不是静燃烧产生。想把铁峰放回恒星能量学，去读第三代恒星超新星节点；想看重元素如何一代代累积，去读重元素富集节点。铁这一格是元素轴上的分水岭：在它之前，聚变是能源；在它之后，聚变是消耗。


## 换一个尺度看它

铁是地核的主要成分，也是钢的基础。地球磁场由外核液态铁的对流产生；血红蛋白靠铁原子结合氧。与碳相比，铁的核聚变到铁峰释放能量，铁之后的元素多需中子俘获或爆炸条件。

## 延伸核对

铁的相变与合金性质是工程用铁的基础；本条的元素数据与钢的冶金性能需要分开引用。[4]
