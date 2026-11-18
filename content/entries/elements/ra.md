---
id: elements.ra
title: 镭：第 88 个质子把 7s 补成一对，镭仍留不住一个稳定核
titleEn: Radium
summary: 钫的 7s¹ 补成 7s²，镭把 7s 闭合，7s 电子更难失去；电离能升 1.341 eV，电负性升 0.11，半径因范德华与经验值口径不同不可相减，镭没有稳定同位素，只由天然衰变链补给，天然存在但自身留不住。
dimension: element
category: 碱土金属
displayValue: 'Z = 88 · [Rn]7s² 碱土金属'
quantity:
  value: 88
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Ra
  nameEn: Radium
  period: 7
  group: 2
  block: s
  configuration: '[Rn] 7s2'
  valence: 7s2
  level: C
related: [elements.fr, elements.ac, time.u238-half-life, elements.source-r-process]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能为孤立原子口径，半径为经验值口径。
visual:
  scene: elements.shell-ladder
  caption: 第七级台阶的第二格，7s 在此闭合。
  note: 阶梯只表示填充次序，不表示电子云真实尺寸。
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与六项差值完整；正文的第一电离能、原子半径、电负性与 N/Z 已与站内元素属性表（PeriodicTableJSON，源自 CRC/NIST 汇编）逐条交叉核对，未发现数值不一致。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: 'PubChem Element Summary: Radium'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/88'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Radium'
    url: 'https://www.rsc.org/periodic-table/element/88/radium'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
tags: [元素, 第七周期, s 区, 镭]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 88 个质子把电子放进了哪里

钫的价层是 7s¹，镭多出的电子仍进 7s，把亚层补成 7s²，构型为 [Rn]7s²。[1] 这一步没有开新层，也没触及 6d 或 5f：有效核电荷只增 1，全部落在同一个 7s 上。7s 闭合后，镭的价电子比钫更难拿走。

## 相对 Z−1：六项差值

- 第一电离能：5.279 eV；钫为 3.938 eV，增大 1.341 eV。[1]
- 原子半径：215 pm（经验值）；钫为 348 pm（范德华半径），口径不同，不能相减，因此不给差值。[1]
- 电负性：0.90；钫为 0.79，增大 0.11。
- 价电子构型：钫为 7s1，镭为 7s2；新增电子进入同一亚层，7s 由单个电子变成一对。
- N/Z：镭-226 有 138 个中子，N/Z 为 1.568；钫-223 有 136 个中子，N/Z 为 1.563；质子加 1、中子加 2。两者都无稳定同位素。[2]
- 核来源：钫为“天然衰变链（铀-235 支链）与人工合成”；镭为“天然衰变链（铀系、锕系、钍系）”，同时出现在三条链上，且不再列人工合成。

主因仍是有效核电荷加 1，而价层没有外扩：电离能上升 1.341 eV，电负性也升到 0.90。半径这一项必须留白，因为 215 pm 与 348 pm 分别来自经验值和范德华口径，直接相减会造出并不存在的“收缩”。

## 为什么这一格重要

7s² 让镭给出 +2 价，但它的重要性更多在核。镭-226 放出 α 粒子后变成氡-222，正好把天然衰变链接到第六周期的闭壳元素上。[2] 镭无稳定同位素却天然存在：前者指它自身留不住，后者指母核持续补给。

## 它从哪里来

来源记作“天然衰变链（铀系、锕系、钍系）”。[2] 镭不是恒星里直接合成的产物，而是铀、钍衰变途中的中间核；这些母核更早来自 r 过程，最终来源可追到快中子俘获，相关页面是 r 过程来源。供给节奏由母核半衰期控制，铀-238 半衰期节点给出参照：只要母核还在衰变，镭就会以痕量持续出现。[1]
