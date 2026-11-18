---
id: elements.ne
title: 氖：第 10 个质子填满 2p，第二周期在 21.565 eV 处收尾
titleEn: Neon
summary: 从氟到氖，2p 补上最后一个电子；第一电离能从 17.422 eV 升到 21.565 eV，半径缩到 38 pm，2s2p 闭壳让氖不再需要争夺电子。
dimension: element
category: 闭壳节点
displayValue: 'Z = 10 · [He]2s²2p⁶ 闭壳'
quantity:
  value: 10
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Ne
  nameEn: Neon
  period: 2
  group: 18
  block: p
  configuration: '[He] 2s2 2p6'
  valence: 2s2 2p6
  hub: true
  closedShell: 10
  periodStart: 3
  periodEnd: 10
  level: A
related: [elements.o, elements.na, time.pop-iii-supernovae, elements.explain-configuration]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 第二级台阶的终点，2s 与 2p 共容纳八个电子。
  note: 阶梯只表示壳层容量与填充次序，不表示电子云的真实尺寸。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Neon'
    url: https://pubchem.ncbi.nlm.nih.gov/element/10
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Neon'
    url: https://www.rsc.org/periodic-table/element/10/neon
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第二周期, 闭壳, 氖]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 10 个质子把电子放进了哪里

氖在氟的右边一格。氟的价层是 2s2 2p5，氖的第十个电子补进 2p 的最后一个空位，构型写成 [He] 2s2 2p6。[1] 这一步没有新开亚层，也没有跨周期，只是把第二能层的 2p 填满；但填满带来的后果比前几步都干净：价层再没有空位，电子配对完成，第一电离能从氟的 17.422 eV 升到 21.565 eV，增加 4.143 eV。[3] 半径从 42 pm 缩到 38 pm，只减少 4 pm，因为新增电子仍在同一能层，核电荷增加的收缩效应被同层电子排斥抵消了一部分。第二周期在这里收尾，下一个电子只能等到钠的 3s。

## 相对 Z−1：六项差值

- 第一电离能：氖为 21.565 eV，氟为 17.422 eV，氖比氟高 4.143 eV。[3]
- 原子半径：氖为 38 pm（计算值口径），氟为 42 pm，氖比氟小 4 pm。[1]
- 电负性：氖无公认 Pauling 电负性，氟为 3.98；氖一侧没有可相减的数值，无法给出差值。
- 价电子构型：氖为 2s2 2p6，氟为 2s2 2p5；新增电子补进 2p 的最后一个空位，第二能层由此闭合。
- N/Z：氖的质量数 A=20，按 N=A−Z 得 N=10，N/Z=1.00；氟的 A=19、Z=9，N=10，N/Z=1.11，二者的中子数同为 10。
- 核来源：氖标注为碳燃烧与氖燃烧；氟在数据表中没有来源字段，无法给出可比口径，这里只写氖这一侧的路径。

这六项里，主因是 2p 被填满、第二能层闭合：电离能 4.143 eV 的上升是这一步最直接的伴随结果，半径只缩 4 pm 则说明同层填充的收缩空间已经很小。电负性从氟的 3.98 变成无公认值，不是测量缺失，而是闭壳后价层不再有空位、无需用 Pauling 标度描述得电子倾向。中子数保持 10 不变只是 ²⁰Ne 与 ¹⁹F 相邻质量数的算术结果，N/Z 下降并不代表核结构发生突变；核来源一项数据表只给出氖的碳燃烧与氖燃烧，氟一侧没有可比字段，这里不做硬凑。

## 为什么这一格重要

2s2 2p6 闭壳让氖的第一电离能高达 21.565 eV，价层既没有空位可接收电子，也没有松散的电子可失去，所以它在常规条件下几乎不参与化学反应。[2] 氖有三个稳定同位素 ²⁰Ne、²¹Ne 与 ²²Ne；质量数不同，价层仍是同一个闭壳，这说明化学惰性由电子构型决定，而不是由中子数决定。[2] 与氦相比，氖的闭壳外面还有第三层可以接棒，所以它结束的是第二周期，而不是整个元素的化学；钠的 3s 电子一进来，电离能就会重新跌下去。氖这一格的重要性，在于它把 2s2p 的容量恰好用尽，给出一个没有空位的终点。

## 它从哪里来

氖的核来源标注为碳燃烧与氖燃烧，这条线索挂在时间轴的 time.pop-iii-supernovae 节点。[1] 在大质量恒星的晚期，碳燃烧会生成氖、钠、镁等产物；温度继续升高后，氖本身又参与燃烧，进一步往氧、镁、硅方向走。氖因此不是原初核合成的直接产物，也不是普通恒星氢燃烧的产物，而是恒星晚期燃烧阶段与超新星抛射共同留下的中间库存。第一代恒星走完这些阶段并爆炸后，氖才进入星际介质；这就是为什么氖的丰度要挂在 time.pop-iii-supernovae，而不是挂在 time.big-bang。[2]

## 怎么继续走

往回一步是氧，往前一步是钠；氧展示 2p4 的配对排斥，钠则展示第三层如何重新开始。想看 2p 填满后为什么电负性不再有公认值、闭壳怎样定义化学惰性，去电子排布解释页（/entry/elements/explain-configuration/）。时间轴上，time.pop-iii-supernovae 解释氖为什么必须等大质量恒星走完碳燃烧与氖燃烧；这是核合成线索，不是化学性质的延伸。
