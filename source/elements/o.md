---
id: elements.o
title: 氧：第 8 个质子补满 2p 的第二格，电负性升到 3.44
titleEn: Oxygen
summary: >-
  从氮到氧，2p 从 3 个电子增到 4 个；第一电离能反而降到 13.618 eV，半径缩到 48 pm，3.44
  的电负性让氧成为第二周期里最会抢电子的元素。
dimension: element
category: 非金属
displayValue: 'Z = 8 · [He]2s²2p⁴'
quantity:
  value: 8
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: O
  nameEn: Oxygen
  period: 2
  group: 16
  block: p
  configuration: '[He] 2s2 2p4'
  valence: 2s2 2p4
  level: A
related:
  - elements.n
  - elements.ne
  - time.first-stars
  - elements.explain-shielding
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 第二级台阶中段，2p 上第一次出现成对电子。
  note: 阶梯只表示壳层容量与填充次序，不表示电子云的真实尺寸。
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
  - title: 'PubChem Element Summary: Oxygen'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/8'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Oxygen'
    url: 'https://www.rsc.org/periodic-table/element/8/oxygen'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: >-
      Oldest thylakoids in fossil cells directly evidence oxygenic
      photosynthesis
    url: 'https://www.nature.com/articles/s41586-023-06896-7'
    publisher: Nature
    accessed: '2026-11-24'
tags:
  - 元素
  - 第二周期
  - p 区
  - 氧
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
---
## 第 8 个质子把电子放进了哪里

氧在氮的右边一格。氮的价层是 2s2 2p3，氧的第八个电子仍然进 2p，构型写成 [He] 2s2 2p4。[1] 关键变化在配对：三个 2p 轨道里已经各有一个电子，第四个电子必须与其中一个电子挤在同一轨道，配对带来的库仑排斥抵消了一部分核电荷增加的稳定化。于是出现第二周期最值得注意的反常：半径从氮的 56 pm 继续缩到 48 pm，电负性从 3.04 升到 3.44，第一电离能却从 14.534 eV 降到 13.618 eV，减少 0.916 eV。[3] 核电荷确实增加了，有效核电荷也在上升，但同一 2p 轨道内的电子排斥把失去一个电子所需的能量拉低；构型变化与能量变化在这里第一次分道扬镳。

## 相对 Z−1：六项差值

- 第一电离能：氧为 13.618 eV，氮为 14.534 eV，氧比氮低 0.916 eV。[3]
- 原子半径：氧为 48 pm（计算值口径），氮为 56 pm，氧比氮小 8 pm。[1]
- 电负性：氧为 3.44（Pauling 标度），氮为 3.04，氧比氮高 0.40。
- 价电子构型：氧为 2s2 2p4，氮为 2s2 2p3；新增电子进入 2p，并在其中一个 2p 轨道里形成电子对。
- N/Z：氧的质量数 A=16，按 N=A−Z 得 N=8，N/Z=1.00；氮的 N=7、N/Z=1.00，氧比氮多 1 个中子。
- 核来源：氧标注为恒星氦燃烧，氮标注为 CNO 循环；氧的主要产地从碳氮氧循环换到了氦燃烧链。

这六项里，主因是 2p 上新增电子造成的配对排斥：它让第一电离能不升反降，这是六项里唯一需要逆着半径趋势读的一项。半径收缩 8 pm 与电负性上升 0.40 仍是有效核电荷上升的伴随结果；三者方向不完全一致，恰好说明不能只用半径解释电离能。N/Z 保持 1.00 是 A=16、Z=8 的算术巧合；核来源从 CNO 循环换成恒星氦燃烧，则表明氧的主要产地是另一条核反应链，与电子层的变化没有因果关系。

## 为什么这一格重要

2p4 让氧有两个未成对电子，可以形成两根共价键，水分子就是最直接的例子；电负性 3.44 使氧在第二周期里仅次于氟，容易把共用电子拉向自己，因此氧化物和含氧酸在化学里格外常见。[2] 氧分子本身还保留了未成对电子，表现为顺磁性——这是 2p4 的配对方式留下的可观察后果，而不是一句用途介绍。氧有三个稳定同位素 ¹⁶O、¹⁷O 与 ¹⁸O；它们质量不同，却共享同一个 2p4 价层。[2] 把氧放在元素轴上，它的意义是第一次用配对排斥把电离能的单调上升打断。

## 它从哪里来

氧的核来源标注为恒星氦燃烧，这条线索挂在时间轴的 time.first-stars 节点。[1] 在氦燃烧阶段，已经生成的 ¹²C 捕获一个 ⁴He 核，变成 ¹⁶O；氧与碳的比值取决于氦燃烧的温度、密度和持续时间，所以不同恒星给出的碳氧比例并不相同。氧的丰度之所以高，是因为氦燃烧不仅造碳，还继续把碳加工成氧，而氧本身又能捕获 ⁴He 往更重的核走。第一代恒星把这条链跑通之后，氧才成为星际介质里常见的重元素之一。[2]

## 怎么继续走

往回一步是氮，往前一步是氖；氮展示 2p 半满，氖则把 2p 填满并关闭第二周期。想看为什么 2p 电子越填越感受到更高的有效核电荷、屏蔽怎样随亚层变化，去屏蔽与有效核电荷解释页（/entry/elements/explain-shielding/）。时间轴上，time.first-stars 解释氦燃烧如何把碳加工成氧；这条线索与氧分子的顺磁性无关，却是氧库存的真正来源。

## 延伸核对

氧的活泼性与光合作用释氧是不同尺度的问题；本条只给元素身份，生物地球化学循环另引。[4]
