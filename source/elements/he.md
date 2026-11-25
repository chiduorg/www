---
id: elements.he
title: 氦：第 2 个质子把 1s 填满，第一周期在这里收尾
titleEn: Helium
summary: >-
  第二个电子进入同一 1s 并配对；第一电离能从 13.598 eV 升到 24.587 eV，半径从 53 pm 缩到 31
  pm，闭壳让氦几乎不参与化学反应。
dimension: element
category: 闭壳节点
displayValue: Z = 2 · 1s² 闭壳
quantity:
  value: 2
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: He
  nameEn: Helium
  period: 1
  group: 18
  block: s
  configuration: 1s2
  valence: 1s2
  hub: true
  closedShell: 2
  periodStart: 1
  periodEnd: 2
  level: A
related:
  - elements.h
  - elements.li
  - time.big-bang
  - elements.explain-nuclear-stability
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 第一级台阶的终点，1s 恰好容纳两个电子。
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
  - title: 'PubChem Element Summary: Helium'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/2'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Helium'
    url: 'https://www.rsc.org/periodic-table/element/2/helium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
  - title: The Helium Atom
    url: 'https://svs.gsfc.nasa.gov/10133'
    publisher: NASA Scientific Visualization Studio
    accessed: '2026-11-24'
tags:
  - 元素
  - 第一周期
  - 闭壳
  - 氦
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
---
## 第 2 个质子把电子放进了哪里

氦在氢的右边一格。第二个质子进入原子核，第二个电子仍然进入 1s，而不是新开一个亚层；构型从 1s1 变成 1s2。[1] 这一步的关键是配对：两个电子占据同一个 1s 轨道，自旋相反，电子之间的库仑排斥与核电荷的增加同时发生。有效核电荷比氢更高，但并没有翻倍，因为另一个 1s 电子也在屏蔽核。结果是第一电离能从 13.598 eV 升到 24.587 eV，升幅 10.989 eV，而半径从 53 pm 缩到 31 pm。[3] 1s 容量正好是二，氦把这个位置坐满；下一个电子若要进来，只能等到锂的 2s。所谓闭壳，在这里就是同一亚层再没有空位。

## 相对 Z−1：六项差值

- 第一电离能：氦为 24.587 eV，氢为 13.598 eV，氦比氢高 10.989 eV。[3]
- 原子半径：氦为 31 pm（计算值口径），氢为 53 pm，氦比氢小 22 pm。[1]
- 电负性：氦无公认 Pauling 电负性，氢为 2.20；本轮对照只能记录氢的 2.20，氦一侧没有可相减的数值。
- 价电子构型：氦为 1s2，氢为 1s1；新电子没有换亚层，只是在 1s 内与原来的电子配对。
- N/Z：氦的质量数 A=4，按 N=A−Z 得 N=2，N/Z=1.00；氢的 N=0、N/Z=0，氦比氢多 2 个中子。
- 核来源：氦标注为原初核合成与恒星氢燃烧，氢标注为原初核合成；氦比氢多出一条恒星氢燃烧的通道。

这六项里，主因是 1s 被填满并发生配对，它直接决定了电离能的跃升与半径的收缩。电负性一项的空缺不是数据缺失，而是闭壳的结果：价层没有空位，氦不需要用 Pauling 标度来描述得电子倾向。核来源与 N/Z 的差异属于核层面：从氢到氦多出的 2 个中子让 ⁴He 成为异常紧的核，这与核外电子是否闭壳是两件事，不能混为一条因果链。

## 为什么这一格重要

1s2 闭壳的直接后果是化学惰性：价层已满，第一电离能 24.587 eV，既不容易失去电子，也没有低能空轨道接收电子，所以氦在常规条件下几乎不形成化合物。[2] 它有两个稳定同位素 ³He 与 ⁴He；⁴He 含 2 个质子与 2 个中子，核结合得异常紧，这也是 α 粒子总以氦核形式出现的原因。化学上的闭壳与核物理上的紧束缚在这里刚好同名，却对应两套不同的能量账本：前者解释氦为什么不反应，后者解释氦核为什么稳定。把这两条分开，才能读懂核稳定性解释页。

## 它从哪里来

氦的核来源标注为原初核合成与恒星氢燃烧，前半段挂在时间轴的 time.big-bang 节点，后半段挂在恒星氢燃烧。[1] 原初核合成阶段，质子和中子先结合成氘，再由氘搭出 ⁴He；由于 ⁴He 的结合能高，它成为这条短链的终点，绝大多数可用中子被封存在氦核里。恒星阶段则通过氢燃烧把四个质子一步步并成氦核，继续增加氦的库存。氦的丰度之所以高，不是因为它特别容易形成，而是因为原初核合成的链在 ⁴He 处停住，恒星又在持续补货。[2]

## 怎么继续走

往回一步是氢，往前一步是锂；氢提供原料，锂展示 1s 满员后电子被迫进入 2s 的下一步。想弄清 1s 为什么只能容纳两个电子、配对为什么抬高电离能，去看电子排布解释页；想弄清 ⁴He 为什么被称为紧束缚核、α 衰变为什么偏爱它，去看核稳定性解释页。氦这一格的价值，正在于它同时结束了第一能层和第一周期的化学。

## 延伸核对

氦在宇宙中的丰度与恒星核合成背景，可作为本条“惰性气体”性质的补充；它在地球上稀有，但在宇宙中是第二多元素。[4]
