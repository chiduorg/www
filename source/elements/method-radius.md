---
id: elements.method-radius
title: 原子半径怎么量：没有硬边界的球
titleEn: How Atomic Radius Is Measured
dimension: element
category: 方法层
summary: 原子没有明确的边界，半径取决于测量口径：X 射线衍射给晶体中的间距，气体电子衍射给孤立分子，理论计算给另一套数值。比较半径前必须先统一口径。
quantity:
  value: null
  unit: Z
  measure: 测量方法，不对应单一原子序数
  status: undetermined
  approximate: false
displayValue: 方法页 · 不参与 Z 排序
related:
  - elements.explain-shielding
  - elements.explain-lanthanide-contraction
  - elements.fe
  - elements.method-ionization
  - space.atom
  - mass.proton
reviewStatus: reviewed
review:
  method: source-check
  date: '2026-11-09'
  notes:
    - 本轮复核：结构、引用编号与主题口径完整；本条为解释/方法/来源页，不参与 Z 排序，不对应单一原子序数。
    - >-
      来源可达性：所列 PubChem/RSC/Britannica 页面在自动请求下返回 Cloudflare/reCAPTCHA 挑战；有头浏览器抽验
      Britannica 条目页可正常打开并显示对应主题，RSC 周期表页面可加载但元素数据需页面交互。本轮未逐页重读全文，沿用条目既有
      accessed 记录。
    - reviewed 指本轮结构与来源口径核对，不是外部同行评审；科学边界与图景说明仍按正文保留。
sources:
  - title: atomic radius
    url: 'https://www.britannica.com/science/atomic-radius'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-09'
  - title: X-ray diffraction
    url: 'https://www.britannica.com/science/X-ray-diffraction'
    publisher: Encyclopaedia Britannica
    accessed: '2026-11-09'
  - title: 'Periodic Table of Elements'
    url: 'https://iupac.org/what-we-do/periodic-table-of-elements/'
    publisher: 'International Union of Pure and Applied Chemistry (IUPAC)'
    accessed: '2026-11-25'
conditions: 方法页；元素页给出的半径值必须注明口径（计算值、经验值或范德华半径）。
visual:
  scene: elements.explain
  caption: 三种半径口径 · 共价、经验与范德华
  note: 原子与键长为示意，不按真实比例绘制。
tags:
  - 方法层
  - 原子半径
  - 测量
rights:
  status: rewritten
  note: 依据所列资料重新撰写；第三方来源仅用于事实核对，不随正文再许可。
---
## 它是什么

原子半径不是从原子中心到电子云“边缘”的距离，因为电子云没有硬边界。[1] 实验上能测的是原子之间或原子与配体之间的距离，再按约定分摊。共价半径取两个相同原子形成共价键时键长的一半；金属半径取金属晶体中的最近邻距离；范德华半径取非键接触时的有效距离。三者数值不同，不能直接混用。

## 怎样知道

X 射线衍射可以精确测定晶体中的原子间距，是金属半径与离子半径的主要来源。[2] 气体电子衍射与微波光谱用于孤立分子，给出共价半径。理论计算则从波函数出发，给出“计算半径”，它与实验口径又不一样。元素页若写“半径 156 pm”，必须同时说明是哪一种口径，否则这个数字没有可比性。

## 怎样比较

同周期从左到右，有效核电荷增加，半径通常减小；同族从上到下，主量子数增加，半径通常增大。[1] 但这条规律只在同一口径内成立。镧系收缩会让第六周期的重元素半径异常接近第五周期，相对论效应则让更重的元素进一步收缩。超重元素没有可测的原子半径，只能给计算值或留空。

## 常见误解

把不同口径的半径直接相减，是最常见的错误。另一个误解是以为原子半径随原子序数单调减小：同族向下反而增大，过渡系中段也常有平台。也不能把“原子是球”当成严格事实，电子云有方向性，成键环境会改变有效尺寸。

## 与其他阶段的关系

元素页“相对 Z−1”的半径差值是结构变化的直接读数：它把屏蔽、有效核电荷与壳层填充的竞争变成一个可比较的数字。[2] 但这个数字只有和口径说明一起出现才有意义。方法页的作用不是给出一张“正确半径表”，而是提醒读者：半径是一个约定，而不是一个天然常数。

本条的原子量口径参考 IUPAC 周期表与标准原子量。[3]
