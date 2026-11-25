---
id: elements.method-isotope
title: 同位素与半衰期怎么定：质谱与衰变计数
titleEn: How Isotopes and Half-Lives Are Determined
dimension: element
category: 方法层
summary: 同位素靠质谱按质量分离，半衰期靠衰变计数与原子数推算。稳定与放射性不是绝对二分：观测稳定只说明半衰期远长于观测时间。
quantity:
  value: null
  unit: Z
  measure: 测量方法，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 方法页 · 不参与 Z 排序
related:
  - space.atom
  - mass.proton
  - elements.explain-nuclear-stability
  - elements.u
  - elements.pb
  - elements.tc
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 1.4.0 未定量复核：维持 undetermined。现有来源对「同位素靠质谱按质量分离，半衰期靠衰变计数与原子数推算。稳定与放射性不是绝对二分：观测稳定只说明半衰期远长于观测时间。」只给范围/定性描述或缺少可复核的中心值、单位与条件，未把模型估计包装成测量值；待出现独立测量后再定量。
    - 本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。
    - >-
      来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验
      Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有
      accessed 记录。
    - reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。
sources:
  - title: mass spectrometry
    url: 'https://www.britannica.com/science/mass-spectrometry'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-09'
  - title: NuDat 3.0
    url: 'https://www.nndc.bnl.gov/nudat3/'
    publisher: 'National Nuclear Data Center, Brookhaven National Laboratory'
    accessed: '2026-11-09'
  - title: 'Periodic Table of Elements'
    url: 'https://iupac.org/what-we-do/periodic-table-of-elements/'
    publisher: 'International Union of Pure and Applied Chemistry (IUPAC)'
    accessed: '2026-11-25'
conditions: 方法页；元素页只给稳定同位素状态与代表质量数，不把单一核素性质写成元素通性。
visual:
  scene: elements.explain
  caption: 质谱分离与衰变计数 · 两条测量链
  note: 谱峰与计数曲线为示意，不表示具体样品的实测数据。
tags:
  - 方法层
  - 同位素
  - 半衰期
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
---
## 它是什么

同位素是质子数相同、中子数不同的核素。质谱把样品离子化后按质荷比分离，得到各同位素的相对丰度；这是测定同位素组成最直接的方法。[1] 半衰期则是放射性核素数量降至初始值一半所需的时间，靠测量单位时间的衰变数与样品中的原子数推算。

## 怎样知道

质谱可以分辨质量差一个中子的核素，并给出丰度比；加速器质谱进一步把灵敏度推到极低丰度。[1] 半衰期测量依赖衰变计数：对短寿命核素，直接观察活度随时间下降；对长寿命核素，测量比活度与原子数，再算衰变常数。核数据数据库汇总推荐值与不确定度。[2]

## 怎样定半衰期

半衰期的难点在于时间尺度跨度过大：从毫秒到超过宇宙年龄。[2] 长半衰期不能靠等待一个周期，必须用“活度 ÷ 原子数”的方法；这要求准确知道样品质量与同位素丰度。对分支衰变，还要测各分支的强度比，否则总半衰期会被算错。超重元素的半衰期往往只有几个原子的事件，统计误差很大。

## 常见误解

“稳定”不是“永恒”：观测稳定只说明半衰期远长于观测时间，理论上仍可能衰变。[1] 半衰期也不是“单个原子能活多久”，而是大量核素衰变的统计参数。另一个误解是把某种同位素的性质当成元素通性：同一元素的不同同位素化学性质近似，但核性质可以完全不同。

## 与其他阶段的关系

元素页的 N/Z 与“有/无稳定同位素”都建立在这套测量之上。[2] 铀-238 与钍-232 的半衰期支撑地质年代学，碳-14 支撑考古测年；锝与钷没有稳定同位素，则是核稳定性解释页的核心例子。方法页提醒读者：元素页里的每一个“稳定”或“放射性”标签，背后都有一条测量链。

本条的原子量口径参考 IUPAC 周期表与标准原子量。[3]
