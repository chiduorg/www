---
id: elements.explain-energy-levels
title: 能级与亚层：周期表的台阶从哪里来
titleEn: Energy levels, subshells and the shape of the periodic table
dimension: element
category: 解释层
summary: '壳层不是同心圆环，而是一组能量相近的轨道。s、p、d、f 的容量差异与穿透能力，决定了每一行能放几个元素，也决定了 4s 与 3d 的先后。'
quantity:
  value: null
  unit: Z
  measure: 概念解释，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 解释页 · 不参与 Z 排序
related:
  - elements.ne
  - elements.kr
  - elements.explain-configuration
  - elements.explain-shielding
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - "本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。"
    - "来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验 Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有 accessed 记录。"
    - "reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。"
sources:
  - title: '6.4: Electronic Structure of Atoms (Electron Configurations)'
    url: 'https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/06%3A_Electronic_Structure_and_Periodic_Properties/6.04%3A_Electronic_Structure_of_Atoms_(Electron_Configurations)'
    publisher: 'LibreTexts / OpenStax Chemistry 2e'
    accessed: '2026-11-08'
  - title: 'Atomic Spectra Database'
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-08'
  - title: Periodic table
    url: 'https://www.britannica.com/science/periodic-table'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-08'
conditions: 解释能为级与亚层的一般图像；轨道形状为概率密度示意，不代表电子沿固定路径运动。
visual:
  scene: elements.explain
  caption: 主量子数、角量子数与亚层容量
  note: 能级间距为示意，不按实际数值比例绘制。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供，引用来源仅用于事实核对
tags:
  - 解释层
  - 能级
  - 亚层
---
## 壳层与亚层不是一回事

中学课本里的“电子层”是主量子数 n 的近似说法：n 越大，电子平均离核越远。但在同一层内部，角量子数 l 不同的轨道能量并不相同，于是分成 s、p、d、f 四个亚层，容量分别是二、六、十、十四。[1] 第一层只有 1s，第二层有 2s 与 2p，第三层有 3s、3p、3d。元素轴的七级台阶，就是这组容量的直接结果。

## 穿透能力决定能量次序

s 电子的概率分布在靠近核的区域仍有较大份额，这种“穿透”让它感受到更强的有效核电荷，能量被压低。p、d、f 的穿透依次减弱，能量依次抬高。[2] 所以同主量子数下，能量顺序通常是 ns 低于 np 低于 nd 低于 nf。当不同主量子数的亚层能量接近时，就会出现 4s 低于 3d 这类交错，周期表因此有了长行与短行。

## 为什么每行长度是 2、8、8、18、18、32、32

把亚层容量按填充次序切开，就得到周期长度。第一行只有 1s，两个元素；第二行 2s 加 2p，八个；第三行 3s 加 3p，八个；第四行 4s 加 3d 加 4p，十八个；第五行同理十八个；第六行 6s 加 4f 加 5d 加 6p，三十二个；第七行同样三十二个。[3] 这些数字不是人为规定，而是容量与能量次序共同算出来的结果。周期表的形状，本质上是一张能级填充表的排版。

## 它如何改变你读元素页的方式

知道能级结构后，“族”不再只是纵向对齐的标签，而是“价层构型相同”的集合；“周期”也不再只是横排，而是“同一组亚层正在被填充”的阶段。看到铁在第八族，你会想到它的价层是 3d 与 4s；看到氪在第十八族，你会想到 4p 刚好填满。元素页中的“新增电子进入哪个亚层”一问，只有在能级图像的背景下才有意义。

## 常见误解与边界

第一个误解是把电子想成沿固定轨道运行的小球；正确图像是概率密度，所谓“填入”是能量最低的占据方式，不是空间上的排队。第二个误解是认为能级次序对所有元素固定不变；随原子序数增加，相对论效应与电子排斥会重排次序，重元素尤其明显。[2] 第三个误解是把“亚层容量”当成“化学价数”；容量是轨道数乘二，价数由实际失去、共享或获得电子的方式决定，两者不能直接换算。
