---
id: elements.explain-shielding
title: 屏蔽与有效核电荷：同周期上升、同族下降的根源
titleEn: Shielding and effective nuclear charge
dimension: element
category: 解释层
summary: 核电荷增加并不等于电子感受到的吸引力同比增加。内层电子的屏蔽让最外层只看到一部分核电荷，这一个差值解释了电离能、原子半径与电负性的三条趋势。
quantity:
  value: null
  unit: Z
  measure: 概念解释，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 解释页 · 不参与 Z 排序
related:
  - space.atom
  - mass.proton
  - elements.ne
  - elements.ar
  - elements.xe
  - elements.explain-energy-levels
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「核电荷增加并不等于电子感受到的吸引力同比增加。内层电子的屏蔽让最外层只看到一部分核电荷，这一个差值解释了电离能、原子半径与电负性的三条趋势。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 1.4.0 深读补写：补充量值口径、条件、误差与比较边界；ID、slug、canonical 与原量值不变。
    - 本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。
    - >-
      来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验
      Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有
      accessed 记录。
    - reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。
sources:
  - title: '6.5: Periodic Variations in Element Properties'
    url: >-
      https://chem.libretexts.org/Bookshelves/General_Chemistry/Chemistry_2e_(OpenStax)/06%3A_Electronic_Structure_and_Periodic_Properties/6.05%3A_Periodic_Variations_in_Element_Properties
    publisher: LibreTexts / OpenStax Chemistry 2e
    accessed: '2026-11-08'
  - title: Periodic table
    url: 'https://www.britannica.com/science/periodic-table'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-08'
  - title: Atomic Spectra Database
    url: 'https://physics.nist.gov/asd'
    publisher: National Institute of Standards and Technology
    accessed: '2026-11-08'
conditions: 屏蔽效应的定性解释；有效核电荷的定量估算依赖近似方法，不同方法给出的数值不可直接混用。
visual:
  scene: elements.explain
  caption: 内层电子对核电荷的屏蔽示意
  note: 屏蔽为平均效应的示意，不表示单个电子的瞬时位置。
rights:
  status: rewritten
  note: 依据所列资料新撰，正文以 CC BY 4.0 提供，引用来源仅用于事实核对
tags:
  - 解释层
  - 屏蔽
  - 有效核电荷
---
## 有效核电荷是什么

原子核对某个电子的吸引，会被其他电子的排斥部分抵消。电子实际感受到的净电荷叫有效核电荷，可粗略写成核电荷减去屏蔽常数。[1] 这个量不是核电荷的简单折扣：内层电子屏蔽得比较彻底，同层电子屏蔽得较差，不同亚层的穿透能力又不同。元素轴的许多“趋势”，本质上都是有效核电荷沿周期或沿族变化的结果。

## 同周期为什么从左到右电离能上升

同一周期里，每增加一个质子，核电荷加一；新增电子进入同一价层，它对自己和同伴的屏蔽很弱。于是有效核电荷稳步上升，价电子被拉得更紧，原子半径收缩，第一电离能上升，电负性也上升。[2] 氖、氩、氪这些闭壳元素处在这一趋势的高点，所以它们的电离能在各自周期里最高。这就是“闭壳稳定”的定量来源。

## 同族为什么从上到下电离能下降

沿族向下，主量子数增加，价电子平均离核更远，内层电子数目也大幅增加，屏蔽总量上升。虽然核电荷同样增加，但新增的核电荷大部分被新增的内层电子抵消，价电子感受到的有效核电荷增长有限。[1] 结果是半径增大、电离能下降、金属性增强。碱金属从锂到铯的电离能一路走低，就是这条规律最干净的展示。

## 它如何改变你读元素页的方式

有了屏蔽概念，“多一个质子”就不再自动等于“更难失去电子”。在元素页里比较相邻元素时，要先问新增电子进了哪一层：进入同一价层，有效核电荷上升，电离能升高；进入新壳层，屏蔽骤增，电离能下降。氖到钠、氩到钾、氪到铷的落差，全部由此解释。没有这一层，周期表只是一张排列整齐的表格。

## 常见误解与边界

第一个误解是把屏蔽当成“内层电子挡在核前面”，好像电子有固定轨道；实际是平均的电子云排斥。第二个误解是用简单减法估算有效核电荷并当成精确值；不同近似方法给出的屏蔽常数不同，跨方法比较没有意义。[3] 第三个误解是忽略相对论效应：对重元素，内层电子的速度接近光速，轨道收缩会改变屏蔽，汞、金、铂的异常性质就来自这里。


## 深读一：量值口径

本条的核心量值是 未定 Z，量的是概念解释，不对应单一原子序数。数值来自本条既有审阅链，不是按标题重新估算；按当前口径视为确定值。[1] 口径一变，读数就会跟着变，因此正文始终把单位、参照物与条件写在一起。

条件记录为：屏蔽效应的定性解释；有效核电荷的定量估算依赖近似方法，不同方法给出的数值不可直接混用。。这些条件决定它能否与另一条读数直接比较；例如把直径换成半径、把瞬时值换成年均值，都会改变量级判断，不能只看数字大小。[2]

## 深读二：误差与边界

放进尺度阶梯时，可对照氢原子（1.05835e-10）。本条与它不是简单的倍数关系，而是同一量纲下不同口径的两个锚点；先统一单位与参照，再讨论谁大谁小。[3]

误差与边界：未单列数值不确定度，误差主要来自口径选择与样本/模型假设。若要做跨条目比较，应保留原始有效数字，不把换算结果补到仪器并不支持的精度；本条的文字解释与图景说明只用于建立尺度感，不替代测量记录。[1][2]
