---
id: elements.b
title: 硼：第 5 个质子打开 2p，价层第一次长出方向
titleEn: Boron
summary: 2s 已满，第五个电子只能进入 2p；电离能反降 1.025 eV、半径缩到 87 pm，硼越过金属边界，走向共价与三配位。
dimension: element
category: 类金属
displayValue: 'Z = 5 · [He] 2s² 2p¹ 类金属'
quantity:
  value: 5
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: B
  nameEn: Boron
  period: 2
  group: 13
  block: p
  configuration: '[He] 2s2 2p1'
  valence: 2s2 2p1
  level: B
related: [elements.be, elements.c, elements.explain-periodic-law, time.pop-iii-supernovae]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 第二周期第一格 p 电子，2s 仍是完整的一对。
  note: 阶梯只表示填充次序，不表示电子云真实形状。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Boron'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/5'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Boron'
    url: 'https://www.rsc.org/periodic-table/element/5/boron'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
tags: [元素, 第二周期, p 区, 硼]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 5 个质子把电子放进了哪里

铍的价层是 2s2，2s 已经坐满；硼多出的电子只能往上走，进入 2p，构型为 [He] 2s2 2p1。[1] 这是第二周期第一次打开 p 亚层，也是整张表里 p 区开始的地方。主量子数仍是 2，但角量子数变了，电子云从球对称变成有方向的花瓣形；内层屏蔽没有变厚，有效核电荷继续增加。

结构上是 2s2 一对加 2p1 单占。这两种成分在后面的元素里会继续重组，构成第二周期那条价层序列。

## 相对 Z−1：六项差值

- 第一电离能：硼 8.298 eV，铍 9.323 eV，减小 1.025 eV。[1]
- 原子半径：硼 87 pm，铍 112 pm，减小 25 pm（计算值口径）。[1]
- 电负性：硼 2.04，铍 1.57，增大 0.47。[1]
- 价电子构型：铍为 2s2，硼为 2s2 2p1；新增电子换了亚层，从 2s 进入 2p。
- N/Z：硼-11 有 6 个中子，N/Z 为 1.20；铍-9 有 5 个中子，N/Z 为 1.25；中子加 1。硼有稳定同位素。[2]
- 核来源：硼记作“宇宙线散裂与超新星中微子过程”，铍只记“宇宙线散裂”；硼多出中微子过程这条路径。

最反常的一项是电离能：核电荷增加，电离能却下降 1.025 eV。原因是 2p 电子比 2s 电子更暴露：2s 那一对对它形成屏蔽，而 2p 的角向分布让它更少钻进内层，感受到的有效核电荷反而低。半径仍收缩 25 pm，说明整体被拉紧；两项方向相反并不矛盾，它们量的是不同电子。电负性升到 2.04，硼已经跨过金属与非金属的分界。

## 为什么这一格重要

2p1 让硼的价电子数变成 3，而这个数字与它可用的四个轨道相撞：三个电子、四个轨道，成键时它更愿意共用而不是丢失。[1] 这就是硼显共价、并且常以三配位平面结构出现的原因；电负性 2.04 也支持它把电子留在手里。从硼开始，价层的形状不再由 s 单独决定，方向性成为化学的主线。

## 它从哪里来

来源条目记作“宇宙线散裂与超新星中微子过程”。两条路径都不属于普通恒星燃烧：散裂在星际介质里进行，需要先有较重的核作靶；中微子过程则发生在核心坍缩的超新星里，靠巨大的中微子流把氖、镁一类的核打散。[2] 挂到时间轴上，前者对应重元素富集之后的星际介质，后者对应第三代恒星的超新星爆发。硼的丰度因此不随恒星世代稳定累积，而是随“有没有靶”和“有没有爆发”起伏。

## 怎么继续走

往回是铍（/entry/elements/be/），能看到 2s 闭合如何把价层堵住；往前是碳（/entry/elements/c/），2p 继续填充后价层重新获得半满结构。想把 p 轨道的方向性放回成键，去读电子排布解释页；想把中微子过程放回恒星死亡，去读第三代恒星超新星节点。
