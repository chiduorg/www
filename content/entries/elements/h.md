---
id: elements.h
title: 氢：第 1 个质子把唯一电子放进 1s，也定义了元素轴的起点
titleEn: Hydrogen
summary: 氢只有一个质子与一个 1s 电子，没有 Z−1 可比；13.598 eV 的电离能与 53 pm 的半径，为氦、锂以及整条元素轴提供第一把标尺。
dimension: element
category: 非金属
displayValue: 'Z = 1 · 1s¹ 元素轴起点'
quantity:
  value: 1
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: H
  nameEn: Hydrogen
  period: 1
  group: 1
  block: s
  configuration: 1s1
  valence: 1s1
  level: A
related: [elements.he, elements.li, time.big-bang, elements.explain-configuration]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 氢位于第一级台阶的起点，1s 上只有一个电子。
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
  - title: 'PubChem Element Summary: Hydrogen'
    url: https://pubchem.ncbi.nlm.nih.gov/element/1
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Hydrogen'
    url: https://www.rsc.org/periodic-table/element/1/hydrogen
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: NIST Atomic Spectra Database
    url: https://physics.nist.gov/asd
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第一周期, s 区, 氢]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 1 个质子把电子放进了哪里

氢是元素轴的第一个格子：一个质子，一个电子，构型写作 1s1。[1] 这个电子进入主量子数最小的 1s 轨道，没有内层电子替它屏蔽核电荷，所以它感受到的有效核电荷接近 +1。1s 的容量是两个电子，氢只占了一半；这半满状态既是氢的起点，也是氦能够继续填满同一亚层的前提。向右看氦：第二个质子仍然把电子放进 1s，两个电子自旋相反地配对；核电荷增加的同时，电子之间的排斥也增加，二者共同把第一电离能推高。氢没有 4s/3d 交错问题，构型变化只发生在最内层，却足以决定后面所有元素的填充次序。[3] 一句话，氢的 1s1 既是能量的最低点，也是屏蔽与有效核电荷讨论的原点。

## 相对 Z−1：六项差值

- 第一电离能：氢为 13.598 eV；起点无 Z−1。前向看氦，氦为 24.587 eV，比氢高 10.989 eV。[3]
- 原子半径：氢为 53 pm（计算值口径）；起点无 Z−1。前向看氦，氦为 31 pm，氢比氦大 22 pm。[1]
- 电负性：氢为 2.20（Pauling 标度）；起点无 Z−1。前向看氦，氦无公认 Pauling 电负性，无法给出差值。
- 价电子构型：氢为 1s1；起点无 Z−1。前向看氦，氦为 1s2，多出的电子仍在 1s，只是与原来的电子配对。
- N/Z：氢的质量数 A=1，按 N=A−Z 得 N=0，N/Z=0；起点无 Z−1。前向看氦，氦的 A=4、N=2，N/Z=1.00，比氢多 2 个中子。
- 核来源：氢标注为原初核合成；起点无 Z−1。前向看氦，氦为原初核合成与恒星氢燃烧，氢既是原初核合成的原料，也是恒星氢燃烧的燃料。

这六项里，主因是起点无 Z−1 与 1s 容量为二这一结构事实：它决定了氢的半径和电离能只能作为绝对标尺，而不能写成相对差值。电离能高、半径小是同一个 1s 电子被 +1 核电荷紧紧抓住的伴随结果；电负性 2.20 则说明氢既能在某些键里得到电子，也能在另一些键里失去电子。与氦的前向对照说明，第二个质子带来的不是简单加倍，而是配对与屏蔽共同作用后的非线性上升。

## 为什么这一格重要

氢的 1s1 只有一个价电子，这使它的化学行为集中在得到一个电子与失去一个电子两条路上：前者给出氢负离子，后者给出质子，而两个氢原子共用一对电子则给出氢分子。[2] 2.20 的电负性处在中间位置，所以氢在不同伙伴面前会换角色，既能形成离子型氢化物，也能形成共价氢化物。它的两个稳定同位素是 ¹H 与 ²H，³H 则有 12.32 年的半衰期；质量差异足以改变含氢分子的振动频率，却不会改变 1s1 这个价层骨架。[2] 第一电离能 13.598 eV 还给出了一条最干净的原子光谱标尺：只有一个电子，能级修正最少，后续元素的电离能都以它为参照来读。[3]

## 它从哪里来

氢的核来源标注为原初核合成，这条线索直接挂在时间轴的 time.big-bang 节点。[1] 当宇宙膨胀到温度不足以让质子和中子持续聚变时，核反应被冻住，绝大多数质子没有找到中子配对，就以氢核的形式留下来；氘和氦只带走了其中一部分。于是氢的丰度不是某颗恒星的产品配额，而是宇宙冷却速度与核反应速率赛跑后的剩余量。恒星后来确实在烧氢，但那是把氢消耗成氦，不是重新制造氢；原初核合成才是氢库存的第一次也是最大一次分配。这正是最轻的元素反而最多的原因。

## 怎么继续走

氢没有 Z−1，只能向右走：氦这一格接着把 1s 填满，锂这一格则展示 1s 满员后电子被迫进入 2s。想看 1s 为什么只能放两个、配对为什么抬高电离能，去电子排布解释页；想看没有内层屏蔽时有效核电荷如何定义，也可以从这一页回到壳层阶梯的起点。
