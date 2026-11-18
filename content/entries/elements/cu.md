---
id: elements.cu
title: 铜：第 29 个质子把 4s 电子退回 3d，换来填满的 d 亚层
titleEn: Copper
summary: 镍的 3d8 4s2 到铜变成 3d10 4s1：多出的质子让一个 4s 电子转入 3d，填满的 d 亚层抬高电离能，也塑造了铜的一价化学与颜色。
dimension: element
category: 过渡金属
displayValue: 'Z = 29 · [Ar]3d¹⁰4s¹'
quantity:
  value: 29
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Cu
  nameEn: Copper
  period: 4
  group: 11
  block: d
  configuration: 1s2 2s2 2p6 3s2 3p6 3d10 4s1
  valence: 3d10 4s1
  level: A
related: [elements.ni, elements.zn, time.heavy-element-enrichment, elements.explain-configuration]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 铜位于第四周期 3d 填充段的末端，4s 只留一个电子。
  note: 阶梯表示亚层容量与填充次序，不表示 3d 与 4s 的精确能量高低。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Copper'
    url: https://pubchem.ncbi.nlm.nih.gov/element/29
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Copper'
    url: https://www.rsc.org/periodic-table/element/29/copper
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第四周期, 3d 区, 铜]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 29 个质子把电子放进了哪里

镍的价层是 3d8 4s2。按逐级填充的次序，第 29 个电子似乎应当进入 3d，得到 3d9 4s2；铜的实际基态却是 [Ar]3d10 4s1。[1] 也就是说，多出的质子不仅增加了核电荷，还促使一个 4s 电子转入 3d。原因在于 3d 与 4s 的能量非常接近，而 3d 半满之后的电子配对与交换作用使“填满十个 3d 电子”在能量上更有利。构型因此不是简单的“继续往 3d 里放”，而是两个亚层之间的重新分配。

这一步对屏蔽与有效核电荷的影响很直接。3d 电子处在 4s 内侧，对 4s 的屏蔽并不充分；当 4s 只剩一个电子时，这个电子感受到的有效核电荷比镍的两个 4s 电子更高，原子半径随之收缩，第一电离能也不再沿“每加一个质子就略降”的平滑趋势走。铜的异常不是规则失效，而是近简并轨道上几种能量项竞争的结果。

## 相对 Z−1：六项差值

- 第一电离能：铜为 7.727 eV，镍为 7.640 eV，升高 0.087 eV。[3]
- 原子半径：铜为 145 pm，镍为 149 pm，减小 4 pm（计算值口径）。[1]
- 电负性：铜为 1.90，镍为 1.91，减小 0.01。
- 价电子构型：铜为 3d10 4s1，镍为 3d8 4s2；3d 增加两个电子，4s 减少一个电子。
- N/Z：铜的代表质量数为 63，Z=29，故 N=34，N/Z≈1.17；镍的代表质量数为 58，Z=28，故 N=30，N/Z≈1.07；相对镍，代表同位素的中子数增加 4。铜有两种稳定同位素 ⁶³Cu 与 ⁶⁵Cu，代表质量数 63 取其中一种。
- 核来源：铜标注为“弱 s 过程与超新星”，镍标注为“硅燃烧与超新星（铁峰）”。

六项之中，构型异常是主因：3d10 的闭合使铜的第一电离能逆着同周期趋势上升，半径收缩是核电荷增加与 4s 电子减少共同造成的伴随结果。电负性只下降 0.01，说明铜仍然是一个偏“金属”的元素，异常主要体现在电离能与成键方式，而不是把电子牢牢抓住。

## 为什么这一格重要

3d10 4s1 让铜的化学出现两条分岔。失去 4s 电子得到 Cu+，其价层是 3d10，d 亚层闭合、总自旋为零，因而抗磁且相对稳定；再失去一个 3d 电子得到 Cu2+，价层变成 3d9，出现未成对电子，化合物常带颜色并表现顺磁性。铜盐的蓝色、铜表面氧化层的色调，都与 3d 电子的排布有关，而不是“金属光泽”这类笼统描述。[2] 一价与二价并存，正是“填满的 d 亚层”和“再拿走一个 d 电子”之间的能量竞争。

另一个后果是那个孤零零的 4s 电子。它处在最外层，参与金属键时离域程度高，使铜的导电与导热在金属中格外突出；相比之下，锌的 3d10 4s2 把 4s 也填满，价电子更难离域，化学行为随之改变。铜的这一格因此不只是“3d 系列的第 9 个元素”，而是“d 亚层刚好填满、s 亚层刚好剩一个”的临界点。

## 它从哪里来

facts 把铜的核来源标为“弱 s 过程与超新星”。这意味着铜主要不是在恒星平静燃烧的终点生成，而是在大质量恒星晚期与超新星爆发的中子俘获环境中，由比铁更重的核素逐步拼出来。[1] 铁峰附近的核合成在能量上已经走到尽头，继续加重核素需要中子俘获而非聚变，所以铜的产额远低于铁和镍，却又高于更重的 r 过程元素。把这一条挂到时间轴的重元素富集节点上，就能理解“为什么铜比铁稀有、却比银常见”：它站在铁峰之后的低产额区，靠弱 s 过程与超新星事件共同补充。

## 怎么继续走

往左回到镍，能看到 3d 逐个填充、4s 保持两个电子的“正常”版本；往右到锌，4s 被补满，3d 系列真正关门，铜的异常在那里得到对照。[1] 想弄清 3d 与 4s 为什么会互换次序，去看电子排布解释页；想弄清铜的产额为什么落在铁峰之后的低处，去看时间轴的重元素富集节点。铜这一页的核心不是“它是一种金属”，而是“多一个质子后，电子选择退回内层”。
