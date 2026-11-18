---
id: elements.ni
title: 镍：第 28 个质子继续填 3d，却把 4s 留在满员状态
titleEn: Nickel
summary: 镍把电子加进 3d 得到 3d8 4s2，4s 仍满员，没有出现铜式的 3d10 4s1；电离能下降，中子数还比钴少 2 个。
dimension: element
category: 过渡金属
displayValue: 'Z = 28 · [Ar]3d⁸4s²'
quantity:
  value: 28
  unit: Z
  measure: 原子序数（Z）
  approximate: false
element:
  symbol: Ni
  nameEn: Nickel
  period: 4
  group: 10
  block: d
  configuration: 1s2 2s2 2p6 3s2 3p6 3d8 4s2
  valence: 3d8 4s2
  level: A
related: [elements.co, elements.cu, time.pop-iii-supernovae, elements.explain-periodic-law]
conditions: 标准状态（298 K，1 bar）下的中性气态原子；电离能与半径均为孤立原子口径。
visual:
  scene: elements.shell-ladder
  caption: 3d 台阶逼近填满，4s 仍保持两个电子。
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
  - title: 'PubChem Element Summary: Nickel'
    url: 'https://pubchem.ncbi.nlm.nih.gov/element/28'
    publisher: U.S. National Library of Medicine
    accessed: '2026-11-09'
  - title: 'Periodic Table: Nickel'
    url: 'https://www.rsc.org/periodic-table/element/28/nickel'
    publisher: Royal Society of Chemistry
    accessed: '2026-11-09'
  - title: 'NIST Atomic Spectra Database'
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-09'
tags: [元素, 第四周期, 3d 填充, 镍]
rights:
  status: rewritten
  note: "依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。"
---
## 第 28 个质子把电子放进了哪里

钴的价层是 3d7 4s2，镍多出的电子继续进入 3d，得到 [Ar] 3d8 4s2。[1] 4s 仍然是满员的两电子，没有像铜那样出现 3d10 4s1 的重排；镍的价层变化只是 3d 里又多了一个电子对。也就是说，从铁到镍，4s 一直保持 4s2，异常要等到第 29 个质子才出现。

这一步的屏蔽同样发生在 3d 内部：新增电子与已有电子配对，排斥上升，抵消核电荷增加。结果是镍的第一电离能比钴低 0.241 eV，降幅在本段里最大；半径继续收缩 3 pm，但收缩幅度已经很小，说明 3d 的屏蔽越来越有效。

## 相对 Z−1：六项差值

- 第一电离能：镍 7.640 eV，钴 7.881 eV，减小 0.241 eV。[3]
- 原子半径：镍 149 pm，钴 152 pm，减小 3 pm（计算值口径）。[1]
- 电负性：镍 1.91，钴 1.88，增大 0.03。
- 价电子构型：钴为 3d7 4s2，镍为 3d8 4s2；新增电子进入 3d，4s 保持满员，尚未出现铜式的 3d10 4s1。
- N/Z：镍-58 有 30 个中子，钴-59 有 32 个，减少 2 个；镍-58 的中子数比质子数多 2 个。
- 核来源：钴记作“超新星（⁵⁶Ni 衰变）”，镍记作“硅燃烧与超新星（铁峰）”，来源从衰变链回到硅燃烧与爆发。

主因是 3d 成对的继续积累：3d8 比 3d7 又多一个电子对，成对排斥把 4s 电子的束缚削弱，所以电离能下降 0.241 eV，降幅大于钴的 0.022 eV。半径只减小 3 pm，说明核电荷增加与 3d 屏蔽几乎打平；电负性仍上升 0.03，说明成键吸引力的变化与电离能的变化不必同向。中子数减少 2 是 3d 段里唯一一次“质量数比 Z−1 更小”，因为镍-58 仍在稳定带内，质量数可以比钴-59 更小；来源回到铁峰，则说明镍主要是硅燃烧的直接产物，而不是衰变中间体。

## 为什么这一格重要

3d8 4s2 让镍有两个未成对 3d 电子，镍原子是顺磁的；在固体中，3d 电子之间的交换作用使镍表现出铁磁性。[2] 与钴相比，镍的 3d 壳层更接近填满，成对电子更多，未成对电子更少，所以磁矩更小；这一趋势会一直走到铜的 3d10 4s1，那时 3d 完全填满，4s 反而只剩一个电子。

镍的另一个关键点在核：⁵⁶Ni 有 28 个质子与 28 个中子，是超新星抛出的重要核素，也是钴来源栏里那条衰变链的起点。稳定的镍-58 则有 30 个中子、28 个质子，中子数只比质子数多 2 个，仍在稳定带内，只是偏向质子较多的一侧；这解释了为什么镍的中子数会比钴少 2 个，而不是像前面几个元素那样一路增加。

## 它从哪里来

来源条目把镍记作“硅燃烧与超新星（铁峰）”，与铁同属终点堆积，但镍的位置更靠外。硅燃烧把核素往铁峰推时，⁵⁶Ni 是最主要的产物之一；核心坍缩把镍抛出，其中一部分 ⁵⁶Ni 随后衰变成钴和铁，剩下的稳定同位素留下来。[1] 所以镍既是硅燃烧的直接产物，又是超新星衰变链的母体，这两个身份在来源条目里同时存在。

丰度上，镍的库存由两条路共同决定：硅燃烧直接制造的稳定镍，以及 ⁵⁶Ni 衰变后留下的那部分。前者让镍在铁峰附近保持可观份额，后者让镍与超新星事件绑定。时间轴上仍然挂第三代恒星超新星节点；镍是理解“铁峰附近为什么还有多个元素”的第一个例子。

## 怎么继续走

往回看钴（/entry/elements/co/），能看到 ⁵⁶Ni 衰变链为什么把钴和镍绑在一起；往前看铜（/entry/elements/cu/），能看到 3d 填满后 4s 如何被让出一个电子。想弄清 3d 逐格填充与周期律的偏差，去读周期律解释页；想把 ⁵⁶Ni 的来源放回爆发过程，去读第三代恒星超新星节点。镍这一格是 3d 段最后一次“按顺序填充”，再往前就是铜的异常。
